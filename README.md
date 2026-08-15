# Sandro Speth — Personal Academic Website

A fast, dependency-free static website for hosting on **GitHub Pages**. No build
step, no framework — just HTML, CSS, and a little vanilla JavaScript.

## Structure

```
.
├── index.html                 # The whole site (one page, anchored sections)
├── assets/
│   ├── css/style.css          # Design system + layout (light & dark themes)
│   ├── data/news.json         # News items (edit this to add updates)
│   └── js/
│       ├── main.js            # Theme, nav, news + publication rendering
│       └── publications.js    # Publication data (edit this to add papers)
├── images/                    # Optimized portrait used in the hero
├── Own-publications.bib       # Source BibTeX (reference)
├── .nojekyll                  # Tells GitHub Pages to serve files as-is
└── README.md
```

## Run locally

The page loads `assets/data/news.json` via `fetch`, which browsers block on the
`file://` protocol — so **serve the folder over HTTP** instead of double-clicking
`index.html`. From the project root, use any one of:

```bash
python3 -m http.server 8000
```

```bash
npx serve .
```

```bash
php -S localhost:8000
```

Then open the printed address (e.g. **http://localhost:8000**) in your browser.
Stop the server with `Ctrl+C`. There is no build step — just edit a file and
refresh the page.

## Deploy to GitHub Pages

1. Create a repository. For a personal site at `https://<username>.github.io`,
   name it `<username>.github.io`. Otherwise any repo works and the site will
   live at `https://<username>.github.io/<repo>/`.
2. Push these files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, set **Source** to *Deploy from a
   branch*, branch `main`, folder `/ (root)`, and save.
4. Your site is live in ~1 minute.

### Custom domain (optional)
Add a file named `CNAME` containing your domain (e.g. `sandrospeth.de`), then
configure the DNS record with your registrar and enable HTTPS in Settings → Pages.

## Editing content

- **Publications** — add or edit entries in [`assets/js/publications.js`](assets/js/publications.js).
  Each entry supports `type` (`journal`/`conference`/`workshop`/`thesis`),
  `topics` (used by the filter buttons), `first` (first-author highlight),
  `doi`/`url`, an optional `note` badge, and `hidden: true` to exclude an entry
  from the site entirely (it is not shown and not counted — used e.g. for
  under-review papers). A **BibTeX** entry is generated automatically for every
  publication, with per-paper *show / copy / download* controls.
- **News** — edit [`assets/data/news.json`](assets/data/news.json). Each item is an
  object with `date`, an optional `tag` (the small chip), and `body` (the text,
  which may contain `<strong>`, `<em>`, and `<a href="…">`). Newest first — the
  order in the file is the order on the page. The site is served over HTTP(S), so
  the file loads via `fetch`; when previewing locally, use the dev server (see the
  `.claude/launch.json` config or run `python3 -m http.server`) rather than opening
  `index.html` directly.
- **Text, research, teaching, service** — all in [`index.html`](index.html),
  clearly commented by section.
- **Colors / theme** — CSS variables at the top of
  [`assets/css/style.css`](assets/css/style.css). The accent is Gropius blue (`#0083cc`).

## Notes

- Dark mode follows the OS setting and can be toggled; the choice is remembered.
- The hero photo in `images/` is downscaled to ~900px (98 KB) for fast loading.
- Citation metrics in the hero (citations, h-index) are static — update them in
  `index.html` when they change.
