/* =========================================================================
   Interaction: theme toggle, mobile nav, publication rendering + filtering
   ========================================================================= */
(function () {
  "use strict";

  /* ---- Theme ---------------------------------------------------------- */
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", stored || (prefersDark ? "dark" : "light"));

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  /* ---- Mobile nav ----------------------------------------------------- */
  const burger = document.getElementById("nav-burger");
  const links = document.getElementById("nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => links.classList.toggle("open"));
    links.addEventListener("click", (e) => {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  /* ---- Email (assembled at runtime to keep it out of the raw HTML) ----- */
  // The address is never present in the served markup — it is built from the
  // split data-u / data-d attributes only when JavaScript runs, so scrapers
  // and AI crawlers reading the static page find no harvestable e-mail.
  document.querySelectorAll("a.js-email").forEach(function (a) {
    const user = a.getAttribute("data-u");
    const domain = a.getAttribute("data-d");
    if (!user || !domain) return;
    const addr = user + "@" + domain;
    a.setAttribute("href", "mailto:" + addr);
    const label = a.querySelector(".email-text");
    if (label) label.textContent = addr;
    a.removeAttribute("data-u");
    a.removeAttribute("data-d");
  });

  /* ---- News (loaded from the JSON data file) -------------------------- */
  const newsMount = document.getElementById("news-list");
  if (newsMount) {
    fetch("assets/data/news.json", { cache: "no-cache" })
      .then((r) => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then((items) => {
        newsMount.innerHTML = items.map((n) => `
          <div class="news-item">
            <div class="news-date">${n.date || ""}</div>
            <div class="news-body">${n.tag ? '<span class="tag">' + n.tag + "</span> " : ""}${n.body || ""}</div>
          </div>`).join("");
      })
      .catch((err) => {
        newsMount.innerHTML = '<p class="pub-empty">News couldn\'t be loaded. ' +
          "Open the site through a web server (or GitHub Pages), not the local file directly.</p>";
        console.warn("Could not load assets/data/news.json:", err);
      });
  }

  /* ---- Publications --------------------------------------------------- */
  const mount = document.getElementById("pub-list");
  if (!mount || typeof PUBLICATIONS === "undefined") return;

  // Only publications that should appear anywhere on the site.
  const VISIBLE = PUBLICATIONS.filter((p) => !p.hidden);

  const state = { topic: "all", query: "" };

  function authorsHTML(authors) {
    return authors.replace(/Sandro Speth/g, "<strong>Sandro Speth</strong>");
  }

  /* ---- BibTeX generation --------------------------------------------- */
  function asciiFold(s) {
    return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\u00df/g, "ss");
  }
  // Assign a stable citation key to every visible publication.
  (function assignKeys() {
    const used = new Set();
    VISIBLE.forEach((p) => {
      const last = asciiFold(p.authors.split(",")[0].trim().split(" ").pop());
      const base = last.replace(/[^A-Za-z]/g, "") + p.year;
      let key = base, i = 0;
      while (used.has(key)) { i++; key = base + String.fromCharCode(96 + i); }
      used.add(key);
      p._key = key;
    });
  })();

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function toBibtex(p) {
    const type = p.type === "journal" ? "article"
      : p.type === "thesis" ? "phdthesis" : "inproceedings";
    const venueKey = p.type === "journal" ? "journal" : "booktitle";
    const authors = p.authors.split(",").map((a) => a.trim()).join(" and ");
    const rows = [
      ["author", authors],
      ["title", "{" + p.title + "}"],
      [venueKey, p.venue],
      ["year", String(p.year)],
    ];
    if (p.doi) rows.push(["doi", p.doi]);
    else if (p.url) rows.push(["url", p.url]);
    const body = rows
      .map(([k, v]) => "  " + k.padEnd(9) + " = {" + v + "},")
      .join("\n");
    return "@" + type + "{" + p._key + ",\n" + body + "\n}";
  }

  function linkFor(p) {
    const href = p.doi ? "https://doi.org/" + p.doi : p.url;
    if (!href) return "";
    const label = p.doi ? "DOI" : "PDF";
    return ` <span class="pub-links">·
      <a href="${href}" target="_blank" rel="noopener">${label} ↗</a></span>`;
  }

  function matches(p) {
    if (state.topic !== "all") {
      if (state.topic === "first" && !p.first) return false;
      if (state.topic === "journal" && p.type !== "journal") return false;
      if (state.topic !== "first" && state.topic !== "journal" &&
          !(p.topics || []).includes(state.topic)) return false;
    }
    if (state.query) {
      const hay = (p.title + " " + p.authors + " " + p.venue).toLowerCase();
      if (!hay.includes(state.query)) return false;
    }
    return true;
  }

  function render() {
    const list = VISIBLE.filter(matches);
    if (!list.length) {
      mount.innerHTML = '<p class="pub-empty">No publications match your filter.</p>';
      countEl.textContent = "0";
      return;
    }
    countEl.textContent = String(list.length);

    // group by year, descending
    const byYear = {};
    list.forEach((p) => { (byYear[p.year] = byYear[p.year] || []).push(p); });
    const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

    mount.innerHTML = years.map((y) => {
      const items = byYear[y].map((p) => {
        const badges = [];
        if (p.type === "journal") badges.push('<span class="badge journal">Journal</span>');
        if (p.first) badges.push('<span class="badge first">First author</span>');
        if (p.note) badges.push('<span class="badge note">' + p.note + "</span>");
        const bib = toBibtex(p);
        const dataUri = "data:application/x-bibtex;charset=utf-8," + encodeURIComponent(bib);
        return `
          <div class="pub ${p.first ? "is-first" : ""}">
            <div class="pub-mark"></div>
            <div class="pub-content">
              <div class="pub-title">${p.title}</div>
              <div class="pub-authors">${authorsHTML(p.authors)}</div>
              <div class="pub-meta">
                <span class="pub-venue">${p.venue}</span>
                ${badges.join(" ")}${linkFor(p)}
                <span class="pub-links">· <button type="button" class="bib-btn"
                  aria-expanded="false">BibTeX</button></span>
              </div>
              <div class="bibtex-box" hidden>
                <pre>${esc(bib)}</pre>
                <div class="bibtex-actions">
                  <button type="button" class="mini-btn copy-bib">Copy</button>
                  <a class="mini-btn" href="${dataUri}" download="${p._key}.bib">Download .bib</a>
                </div>
              </div>
            </div>
          </div>`;
      }).join("");
      return `<div class="pub-year-group">
        <div class="pub-year">${y}</div>${items}</div>`;
    }).join("");
  }

  /* ---- BibTeX show / copy (event delegation) -------------------------- */
  mount.addEventListener("click", function (e) {
    const toggleBtn = e.target.closest(".bib-btn");
    if (toggleBtn) {
      const box = toggleBtn.closest(".pub-content").querySelector(".bibtex-box");
      const open = box.hasAttribute("hidden");
      if (open) box.removeAttribute("hidden"); else box.setAttribute("hidden", "");
      toggleBtn.setAttribute("aria-expanded", String(open));
      toggleBtn.classList.toggle("active", open);
      return;
    }
    const copyBtn = e.target.closest(".copy-bib");
    if (copyBtn) {
      const text = copyBtn.closest(".bibtex-box").querySelector("pre").textContent;
      const done = () => { copyBtn.textContent = "Copied ✓";
        setTimeout(() => (copyBtn.textContent = "Copy"), 1600); };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, done);
      else done();
    }
  });

  // toolbar wiring
  const countEl = document.getElementById("pub-count");
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      state.topic = this.dataset.topic;
      render();
    });
  });
  const search = document.getElementById("pub-search-input");
  if (search) {
    search.addEventListener("input", function () {
      state.query = this.value.trim().toLowerCase();
      render();
    });
  }

  render();

  /* ---- Footer year ---------------------------------------------------- */
  const yearSpan = document.getElementById("footer-year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
})();
