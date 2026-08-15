/*
 * Publication data for Sandro Speth.
 * Generated from Own-publications.bib. Edit here to add or update entries.
 *
 * Fields:
 *   title       – paper title
 *   authors     – author list; wrap your own name in <strong> at render time
 *                 (the string "Sandro Speth" is auto-bolded by the renderer)
 *   venue       – short, human-readable venue
 *   year        – publication year (number)
 *   type        – "journal" | "conference" | "workshop" | "thesis"
 *   topics      – array of topic tags used for filtering
 *   doi         – DOI (without the https://doi.org/ prefix), optional
 *   url         – direct link if no DOI, optional
 *   first       – true if Sandro is first author
 *   note        – optional badge text (e.g. "Extended abstract")
 *   hidden      – true to exclude from the site (not shown, not counted)
 */
const PUBLICATIONS = [
  // 2026
  {
    title: "Supporting Architecture-Level Resilience Analysis With an Integrated Chaos and Load Experimentation Framework",
    authors: "Sandro Speth, Elias Müller, Niklas Meißner, Niklas Krieger, Steffen Becker",
    venue: "IEEE International Conference on Software Architecture (ICSA)",
    year: 2026, type: "conference", topics: ["architecture", "microservices"],
    doi: "10.1109/ICSA66085.2026.00022", first: true,
  },
  {
    title: "Evaluating the Maintainability of ViewModel Tests using Multi-Modal DSLs: An Industrial Mixed-Methods Study",
    authors: "Mario Fuksa, Sandro Speth, Steffen Becker",
    venue: "IEEE/ACM International Conference on Automated Software Engineering (ASE)",
    year: 2026, type: "conference", topics: ["architecture"],
  },
  {
    title: "MDEO-Cloud: A Modular Cloud-Based Platform for Model-Driven Optimization",
    authors: "Niklas Krieger, Sandro Speth, Steffen Becker, Steffen Zschaler",
    venue: "International Conference on Model Driven Engineering Languages and Systems (MODELS)",
    year: 2026, type: "conference", topics: ["architecture"],
    doi: "10.1145/3837062.3838866",
  },
  {
    title: "Boosting Student Motivation through Game-based Learning in Programming Education with Gamify-IT",
    authors: "Niklas Meißner, Sandro Speth, Niklas Krieger, Steffen Becker",
    venue: "ACM Technical Symposium on Computer Science Education (SIGCSE TS)",
    year: 2026, type: "conference", topics: ["education"],
    doi: "10.1145/3770762.3772508",
  },
  {
    title: "Utilizing Adaptive Gamification in an Intelligent Tutoring System for SE Education",
    authors: "Niklas Meißner, Lukas Trautwein, Sandro Speth, Nadine Nicole Koch, Steffen Becker",
    venue: "IEEE/ACM International Conference on Software Engineering: SEET (ICSE-SEET)",
    year: 2026, type: "conference", topics: ["education"],
    doi: "10.1145/3786580.3786945",
  },

  // 2025
  {
    title: "Architecture-based Identification of Potential Cross-Component Issue Propagation",
    authors: "Sandro Speth, Niklas Krieger, Robert Heinrich, Steffen Becker",
    venue: "Journal of Systems and Software (JSS)",
    year: 2025, type: "journal", topics: ["issue-management", "architecture"],
    first: true, note: "Under review", hidden: true,
  },
  {
    title: "A Method for the Quality-Aware Automated Selection of Deployment Technologies",
    authors: "Miles Stötzner, Niklas Krieger, Sandro Speth, Marcel Weller, Steffen Becker, Benjamin Weder, Jacopo Soldani, Valentin Morlock",
    venue: "Software: Practice and Experience (SPE)",
    year: 2025, type: "journal", topics: ["architecture", "microservices"],
    doi: "10.1002/spe.70012",
  },
  {
    title: "Recovering Gropius Models with the Cluster Architecture Recovery Assistant",
    authors: "Sandro Speth, Elias Müller, Philipp Recke, Niklas Krieger, Steffen Becker, Alexander Poth, Olsi Rrjolli",
    venue: "IEEE International Conference on Software Architecture Companion (ICSA-C)",
    year: 2025, type: "conference", topics: ["architecture", "issue-management", "ai", "ai4sa"],
    doi: "10.1109/ICSA-C65153.2025.00025", first: true,
  },
  {
    title: "Enhancing Motivation in Software Engineering Education through Gamified Agile Project-based Learning",
    authors: "Niklas Meißner, Paul Bredl, Sandro Speth, Steffen Becker",
    venue: "ACM International Conference on the Foundations of Software Engineering (FSE Companion)",
    year: 2025, type: "conference", topics: ["education"],
    doi: "10.1145/3696630.3727241",
  },
  {
    title: "Empirical Study and Vision for a Holistic Serious Game Platform for Software Engineering Education",
    authors: "Niklas Meißner, Sandro Speth, Steffen Becker, Uwe Breitenbücher",
    venue: "ACM International Conference on the Foundations of Software Engineering (FSE Companion)",
    year: 2025, type: "conference", topics: ["education"],
    doi: "10.1145/3696630.3727237",
  },
  {
    title: "ViMoTest: A Tool to Specify ViewModel-Based GUI Test Scenarios using Projectional Editing",
    authors: "Mario Fuksa, Sandro Speth, Steffen Becker",
    venue: "IEEE International Conference on Software Testing, Verification and Validation (ICST)",
    year: 2025, type: "conference", topics: ["architecture"],
    doi: "10.1109/ICST62969.2025.10988969",
  },
  {
    title: "Architecture-based Issue Propagation Analysis",
    authors: "Sandro Speth, Niklas Krieger, Robert Heinrich, Steffen Becker",
    venue: "Software Engineering 2025 (SE)",
    year: 2025, type: "workshop", topics: ["issue-management", "architecture"],
    doi: "10.18420/SE2025-03", first: true, note: "Extended abstract",
  },
  {
    title: "Unveiling Hurdles in Software Engineering Education",
    authors: "Niklas Meißner, Nadine Nicole Koch, Sandro Speth, Uwe Breitenbücher, Steffen Becker",
    venue: "Software Engineering 2025 (SE)",
    year: 2025, type: "workshop", topics: ["education"],
    doi: "10.18420/SE2025-38", note: "Extended abstract",
  },

  // 2024
  {
    title: "Architecture-based Issue Propagation Analysis",
    authors: "Sandro Speth, Niklas Krieger, Robert Heinrich, Steffen Becker",
    venue: "European Conference on Software Architecture (ECSA)",
    year: 2024, type: "conference", topics: ["issue-management", "architecture"],
    doi: "10.1007/978-3-031-70797-1_8", first: true,
  },
  {
    title: "State of Practice and Challenges of Issue Management for Component-based and Service-Oriented Systems: An Empirical Study",
    authors: "Sandro Speth, Niklas Meißner, Steffen Becker, Uwe Breitenbücher",
    venue: "IEEE International Conference on Service-Oriented System Engineering (SOSE)",
    year: 2024, type: "conference", topics: ["issue-management", "microservices"],
    doi: "10.1109/SOSE62363.2024.00007", first: true,
  },
  {
    title: "Architecture-Based Cross-Component Issue Management and Propagation Analysis",
    authors: "Sandro Speth",
    venue: "IEEE/ACM International Conference on Software Engineering (ICSE Companion)",
    year: 2024, type: "conference", topics: ["issue-management", "architecture"],
    doi: "10.1145/3639478.3639814", first: true, note: "Doctoral symposium",
  },
  {
    title: "From Requirements to Architecture: An AI-Based Journey to Semi-Automatically Generate Software Architectures",
    authors: "Tobias Eisenreich, Sandro Speth, Stefan Wagner",
    venue: "International Workshop on Designing Software (Designing)",
    year: 2024, type: "workshop", topics: ["ai", "ai4sa", "architecture"],
    doi: "10.1145/3643660.3643942",
  },
  {
    title: "ChatGPT's Aptitude in Utilizing UML Diagrams for Software Engineering Exercise Generation",
    authors: "Sandro Speth, Niklas Meißner, Steffen Becker",
    venue: "IEEE International Conference on Software Engineering Education and Training (CSEE&T)",
    year: 2024, type: "conference", topics: ["ai", "education"],
    doi: "10.1109/CSEET62301.2024.10663027", first: true,
  },
  {
    title: "Automated Programming Exercise Generation in the Era of Large Language Models",
    authors: "Niklas Meißner, Sandro Speth, Steffen Becker",
    venue: "IEEE International Conference on Software Engineering Education and Training (CSEE&T)",
    year: 2024, type: "conference", topics: ["ai", "education"],
    doi: "10.1109/CSEET62301.2024.10662984",
  },
  {
    title: "MVVM Revisited: Exploring Design Variants of the Model-View-ViewModel Pattern",
    authors: "Mario Fuksa, Sandro Speth, Steffen Becker",
    venue: "International Conference on Enterprise Design, Operations, and Computing (EDOC)",
    year: 2024, type: "conference", topics: ["architecture"],
    doi: "10.1007/978-3-031-78338-8_9",
  },
  {
    title: "Unveiling Hurdles in Software Engineering Education: The Role of Learning Management Systems",
    authors: "Niklas Meißner, Nadine Koch, Sandro Speth, Uwe Breitenbücher, Steffen Becker",
    venue: "IEEE/ACM International Conference on Software Engineering: SEET (ICSE-SEET)",
    year: 2024, type: "conference", topics: ["education"],
    doi: "10.1145/3639474.3640060",
  },
  {
    title: "HyLiMo: A Hybrid Live-Synchronized Modular Diagramming Editor as IDE Extension for Technical and Scientific Publications",
    authors: "Niklas Krieger, Sandro Speth, Steffen Becker",
    venue: "IEEE/ACM International Workshop on Integrated Development Environments (IDE)",
    year: 2024, type: "workshop", topics: ["architecture"],
    doi: "10.1145/3643796.3648458",
  },
  {
    title: "EvalQuiz – LLM-based Automated Generation of Self-Assessment Quizzes in Software Engineering Education",
    authors: "Niklas Meißner, Sandro Speth, Julian Kieslinger, Steffen Becker",
    venue: "Software Engineering im Unterricht der Hochschulen (SEUH)",
    year: 2024, type: "workshop", topics: ["ai", "education"],
    doi: "10.18420/seuh2024_04",
  },
  {
    title: "Pruning Modes for Deployment Models: From Manual Modeling to Automated Removal of Elements and Their Implications",
    authors: "Miles Stötzner, Sandro Speth, Steffen Becker",
    venue: "International Conference on Cloud Computing and Services Science (CLOSER)",
    year: 2024, type: "conference", topics: ["architecture"],
    doi: "10.5220/0012568300003711",
  },
  {
    title: "Hosting-Aware Pruning of Components in Deployment Models",
    authors: "Miles Stötzner, Sandro Speth, Steffen Becker",
    venue: "International Conference on Cloud Computing and Services Science (CLOSER)",
    year: 2024, type: "conference", topics: ["architecture"],
    doi: "10.5220/0012671900003711",
  },

  // 2023
  {
    title: "Investigating the Use of AI-Generated Exercises for Beginner and Intermediate Programming Courses: A ChatGPT Case Study",
    authors: "Sandro Speth, Niklas Meißner, Steffen Becker",
    venue: "IEEE International Conference on Software Engineering Education and Training (CSEE&T)",
    year: 2023, type: "conference", topics: ["ai", "education"],
    doi: "10.1109/CSEET58097.2023.00030", first: true,
  },
  {
    title: "Integrating Issue Management Systems of Independently Developed Software Components",
    authors: "Sandro Speth, Uwe Breitenbücher, Niklas Krieger, Pia Wippermann, Steffen Becker",
    venue: "Agile Processes in Software Engineering and Extreme Programming (XP)",
    year: 2023, type: "conference", topics: ["issue-management"],
    doi: "10.1007/978-3-031-33976-9_1", first: true,
  },
  {
    title: "Gamify-IT – A Web-Based Gaming Platform for Software Engineering Education",
    authors: "Sandro Speth, Leon Hofmeister, Steffen Becker, Uwe Breitenbücher",
    venue: "IEEE/ACM International Workshop on Software Engineering Education for the Next Generation (SEENG)",
    year: 2023, type: "workshop", topics: ["education"],
    doi: "10.1109/SEENG59157.2023.00009", first: true,
  },
  {
    title: "Teaching Object-Oriented Programming with the Objects-first Approach: An Experience Report",
    authors: "Sandro Speth",
    venue: "Software Engineering im Unterricht der Hochschulen (SEUH)",
    year: 2023, type: "workshop", topics: ["education"],
    doi: "10.18420/seuh2023_04", first: true,
  },
  {
    title: "Dromi: A Tool for Automatically Reporting the Impacts of Sagas implemented in Microservice Architectures on the Business Processes",
    authors: "Sandro Speth, Uwe Breitenbücher, Sarah Stieß, Steffen Becker",
    venue: "Enterprise Design, Operations, and Computing Workshops (EDOC)",
    year: 2023, type: "workshop", topics: ["microservices", "architecture"],
    doi: "10.1007/978-3-031-26886-1_20", first: true,
  },
  {
    title: "An Intelligent Tutoring System Concept for a Gamified e-Learning Platform for Higher Computer Science Education",
    authors: "Niklas Meißner, Sandro Speth, Uwe Breitenbücher",
    venue: "Software Engineering im Unterricht der Hochschulen (SEUH)",
    year: 2023, type: "workshop", topics: ["education"],
    doi: "10.18420/seuh2023_10",
  },
  {
    title: "Applicability of the ViMoTest Approach for Automated GUI Testing: A Field Study",
    authors: "Mario Fuksa, Sandro Speth, Steffen Becker",
    venue: "ACM/IEEE International Conference on Model Driven Engineering Languages and Systems Companion (MODELS-C)",
    year: 2023, type: "conference", topics: ["architecture"],
    doi: "10.1109/MODELS-C59198.2023.00131",
  },
  {
    title: "The MechatronicUML Code Generator for Distributed Cyber-Physical Systems",
    authors: "Marcel Weller, Sandro Speth, Georg Reißner, Steffen Becker",
    venue: "Euromicro Conference on Software Engineering and Advanced Applications (SEAA)",
    year: 2023, type: "conference", topics: ["architecture"],
    doi: "10.1109/SEAA60479.2023.00010",
  },
  {
    title: "Hitchhiker's Guide for Explainability in Autoscaling",
    authors: "Floriment Klinaku, Sandro Speth, Markus Zilch, Steffen Becker",
    venue: "ACM/SPEC International Conference on Performance Engineering Companion (ICPE)",
    year: 2023, type: "workshop", topics: ["microservices", "self-adaptive"],
    doi: "10.1145/3578245.3584728",
  },

  // 2022
  {
    title: "A Saga Pattern Microservice Reference Architecture for an Elastic SLO Violation Analysis",
    authors: "Sandro Speth, Sarah Stieß, Steffen Becker",
    venue: "IEEE International Conference on Software Architecture Companion (ICSA-C)",
    year: 2022, type: "conference", topics: ["microservices", "self-adaptive", "architecture"],
    doi: "10.1109/ICSA-C54293.2022.00029", first: true,
  },
  {
    title: "Iterative and Incremental Refinement of Microservice-based Architectures and SLOs",
    authors: "Sandro Speth, Sarah Stieß, Sebastian Frank, Steffen Becker",
    venue: "Agility for Microservices Programming Workshop (AMP) · self-archived via University of Stuttgart (OPUS)",
    year: 2022, type: "workshop", topics: ["microservices", "self-adaptive"],
    doi: "10.18419/OPUS-12208", first: true,
  },
  {
    title: "A Vision for Explainability of Coordinated and Conflicting Adaptions in Self-Adaptive Systems",
    authors: "Sandro Speth, Sarah Stieß, Steffen Becker",
    venue: "Central European Workshop on Services and their Composition (ZEUS)",
    year: 2022, type: "workshop", topics: ["self-adaptive", "microservices"],
    first: true,
  },
  {
    title: "Teaching during the Covid-19 Pandemic — Online Programming Education",
    authors: "Sandro Speth, Niklas Krieger, Georg Reißner, Steffen Becker",
    venue: "Software Engineering im Unterricht der Hochschulen (SEUH)",
    year: 2022, type: "workshop", topics: ["education"],
    doi: "10.18420/SEUH2022_09", first: true,
  },
  {
    title: "IT-REX — A Vision for a Gamified e-Learning Platform for the First Semesters of Computer Science Courses",
    authors: "Sandro Speth, Steffen Becker, Uwe Breitenbücher, Philipp Fuchs, Niklas Meißner, Anna Riesch, Daniel Wetzel",
    venue: "Software Engineering im Unterricht der Hochschulen (SEUH)",
    year: 2022, type: "workshop", topics: ["education"],
    doi: "10.18420/SEUH2022_05", first: true,
  },
  {
    title: "The Deployment Model Abstraction Framework",
    authors: "Marcel Weller, Uwe Breitenbücher, Sandro Speth, Steffen Becker",
    venue: "Enterprise Design, Operations, and Computing Workshops (EDOC)",
    year: 2022, type: "workshop", topics: ["architecture"],
    doi: "10.1007/978-3-031-26886-1_19",
  },

  // 2021
  {
    title: "Semi-automated Cross-Component Issue Management and Impact Analysis",
    authors: "Sandro Speth",
    venue: "IEEE/ACM International Conference on Automated Software Engineering (ASE)",
    year: 2021, type: "conference", topics: ["issue-management", "self-adaptive"],
    doi: "10.1109/ASE51524.2021.9678830", first: true, note: "Doctoral symposium",
  },
  {
    title: "Cross-Component Issue Metamodel and Modelling Language",
    authors: "Sandro Speth, Steffen Becker, Uwe Breitenbücher",
    venue: "International Conference on Cloud Computing and Services Science (CLOSER)",
    year: 2021, type: "conference", topics: ["issue-management"],
    doi: "10.5220/0010497703040311", first: true,
  },
  {
    title: "Gropius-VSC: IDE Support for Cross-Component Issue Management",
    authors: "Sandro Speth, Niklas Krieger, Uwe Breitenbücher, Steffen Becker",
    venue: "European Conference on Software Architecture Companion (ECSA-C)",
    year: 2021, type: "workshop", topics: ["issue-management"],
    url: "http://ceur-ws.org/Vol-2978/tool-paper103.pdf", first: true,
  },

  // 2020
  {
    title: "Gropius — A Tool for Managing Cross-component Issues",
    authors: "Sandro Speth, Uwe Breitenbücher, Steffen Becker",
    venue: "European Conference on Software Architecture (ECSA)",
    year: 2020, type: "conference", topics: ["issue-management", "microservices"],
    doi: "10.1007/978-3-030-59155-7_7", first: true,
  },
];
