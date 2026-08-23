/* =========================================================================
   RESUME / SITE CONTENT — EDIT THIS FILE ONLY
   =========================================================================
   Everything on the site (except layout/animation) is pulled from this
   one object. To update your resume, change the text below and save —
   no HTML editing required. Reload the page to see changes.

   Tips:
   - Leave a field as "" (empty string) to hide that line automatically.
   - `link: null` on a project/paper hides the button instead of showing
     a broken link — swap it for a real URL whenever you have one.
   - Dates/strings are free text, so "In Submission", "Jan 2026 – Present",
     etc. all work fine.
   ========================================================================= */

const RESUME = {
  name: "Sneh Duggal",
  role: [
    "AI / ML Research",
    "Computer Vision",
    "Retrieval Systems",
    "Software Development",
  ],
  location: "Seattle, WA / Victoria, BC",
  status: "U.S. Citizen — eligible to work in the U.S. and Canada without sponsorship",
  email: "snehduggal13@gmail.com",
  phone: "(425) 765-1820",
  links: {
    linkedin: "https://www.linkedin.com/in/sneh-duggal-622116207/",
    github: "https://github.com/WildTiger15",
  },
  // Local file in /assets — swap in a new export any time and keep this path.
  resumeFile: "assets/Sneh_Duggal_Resume.pdf",
  // Headshot for the About section — swap in a new photo any time and keep this path.
  photo: "assets/profile.jpg",

  // ---- About -------------------------------------------------------------
  // Longer bio for the About section — keep this distinct from `tagline` above.
  about: `I'm a Computer Science student at the University of Victoria focused on
  machine learning research — currently spending most of my time on self-supervised
  learning, embedding-based retrieval, and computer vision applied to large,
  messy real-world archives (astronomical imaging, medical imaging, sensor logs).
  I like building systems end-to-end: turning an unstructured data problem into a
  pipeline, then into something people can actually query and use.`,

  goals: `Short term, I'm aiming for research-driven ML/software engineering roles
  and internships where I can keep working on retrieval, vector search, and
  applied CV/NLP systems at scale. Long term I'm aiming at industry and startup
  roles building ML systems, agentic AI, and physical AI/robotics.`,

  // ---- Hobbies -----------------------------------------------------------
  // Shown as a small row of tags in the About section.
  hobbies: [
    { label: "Badminton", icon: "🏸" },
    { label: "Brazilian Jiu-Jitsu", icon: "🥋" },
    { label: "Piano — performed in local talent shows through high school and college", icon: "🎹" },
  ],

  // ---- Education -----------------------------------------------------------
  education: [
    {
      school: "University of Victoria",
      location: "BC, Canada",
      degree: "Bachelor of Science — Computer Science",
      date: "Expected Graduation: May 2027",
      details: "Coursework emphasis: Data Structures & Algorithms, Machine Learning, Software Development Methods",
    },
  ],

  // ---- Experience ----------------------------------------------------------
  experience: [
    {
      title: "AI Research Assistant (Co-op)",
      org: "National Research Council of Canada",
      location: "Victoria, BC",
      date: "Jan 2026 – Apr 2026",
      bullets: [
        "Built a two-stage self-supervised search pipeline that indexed and made 100K+ Hubble Space Telescope images retrievable by shape/morphology, filtered from a 1M+ image archive, by engineering object-level fingerprinting and embedding retrieval",
        "Achieved 90%+ cluster purity on astronomical object retrieval by training VICReg embeddings and DEC clustering on 400+ class object histograms extracted via Source Extractor",
        "Deployed a production web demo enabling low-latency, morphology-based retrieval over the indexed archive, backed by a structured storage layer, cutting manual triage time for researchers",
        'Co-authored "A Self-Supervised Framework for Scalable Content-Based Search in Astronomical Data Archives," submitted to American Astronomical Society (AAS) Journals',
        "Presented final results and a live pipeline demo to the entire research organization, opening the search tool for astronomers to use in their own research",
      ],
      // link this role to the live demo project below
      link: "https://hst-mpp.testapp.ca/",
      linkLabel: "View live demo",
    },
    {
      title: "Undergraduate Research Assistant",
      org: "University of Victoria (Remote)",
      location: "",
      date: "May 2025 – Aug 2025",
      bullets: [
        'Reduced inference cost on ImageNet classification by prototyping a hierarchical routing system that dispatched "easy" queries to a quantized CLIP model and only escalated uncertain cases to the full-size model, validated via confidence-threshold sweeps',
        "Extended the routing approach to medical imaging by adapting it for Google's MedGemma multimodal model, running feasibility tests on MIMIC-CXR and IU-Xray datasets to measure early-stage accuracy tradeoffs",
        "Built swappable preprocessing, inference, and evaluation pieces so the pipeline could work on new imaging domains without rewriting the core code",
      ],
      link: null,
      linkLabel: "",
    },
    {
      title: "Machine Learning Research Assistant",
      org: "SOLIDS Lab, University of Victoria (Remote)",
      location: "",
      date: "Jan 2025 – Oct 2025",
      bullets: [
        "Detected spoofed maritime traffic by benchmarking GNN architectures (GAE, DGI) for unsupervised anomaly detection on communication network graphs",
        "Built a parsing pipeline that converted raw NMEA logs into time-segmented graph structures via regex extraction, turning unstructured sensor logs into a queryable storage format for downstream modeling",
        "First-authored a research manuscript on GNN-based anomaly detection for spoofed maritime traffic, translating benchmark results into a reproducible methodology writeup",
      ],
      link: null,
      linkLabel: "",
    },
  ],

  // ---- Projects --------------------------------------------------------
  // Add/remove objects freely. `link: null` shows a "Link coming soon" tag.
  projects: [
    {
      title: "Hubble Morphology Pipeline (HST-MPP)",
      subtitle: "Self-supervised astronomical image search",
      description:
        "Production demo for a two-stage self-supervised search pipeline over 100K+ Hubble Space Telescope images — retrieve objects by visual shape/morphology instead of manual catalog search, backed by VICReg embeddings, DEC clustering, and a structured storage layer.",
      tags: ["Self-Supervised Learning", "VICReg", "Embeddings", "Retrieval", "Astronomy"],
      link: "https://hst-mpp.testapp.ca/",
      linkLabel: "Live Demo",
    },
    {
      title: "UVic AI Course Assistant",
      subtitle: "Tool-calling course-planning assistant",
      description:
        "A course-planning assistant that answers real student prerequisite, eligibility, and requirement questions by orchestrating Claude over 6 deterministic tools querying a PostgreSQL schema of UVic's course and program data (5,300+ courses, 560+ programs). Cut multi-step response latency ~4x by parallelizing tool calls and adding prompt caching. Hardened through adversarial testing — fixed a token-budget bug causing silent empty responses and enforced scope boundaries against prompt-injection and jailbreak attempts.",
      tags: ["TypeScript", "Next.js", "PostgreSQL", "Claude API", "Claude Code"],
      link: null,
      linkLabel: "Link coming soon",
      status: "In Progress",
    },
    {
      title: "AI Interview Coach",
      subtitle: "Full-stack mock-interview coach with live voice",
      description:
        "A full-stack AI mock-interview coach with a FastAPI + LangChain RAG backend and an animated React/TypeScript frontend, grounding STAR-method feedback in a Chroma-embedded interview-coaching knowledge base. Real-time voice interaction pairs browser speech recognition for spoken answers with OpenAI's gpt-4o-mini-tts for coach responses, driving a custom avatar that lip-syncs to live audio amplitude via the Web Audio API. Deployed across 3 interview tracks via a two-service architecture provisioned to Render through Infrastructure-as-Code (render.yaml) and the Render MCP server.",
      tags: ["FastAPI", "LangChain", "RAG", "React", "TypeScript", "Chroma", "Web Audio API"],
      link: "https://ai-interview-coach-1o2k.onrender.com/",
      linkLabel: "Live Demo",
    },
  ],

  // ---- Publications ----------------------------------------------------
  publications: [
    {
      title: "A Self-Supervised Framework for Scalable Content-Based Search in Astronomical Data Archives",
      venue: "American Astronomical Society (AAS) Journals",
      role: "Co-Author",
      status: "In Submission",
      link: null,
    },
    {
      title: "GNN-Based Anomaly Detection for Spoofed Maritime Traffic",
      venue: "SOLIDS Lab, University of Victoria",
      role: "First Author",
      status: "Research Manuscript",
      link: null,
    },
  ],

  // ---- Skills ------------------------------------------------------------
  skills: [
    {
      group: "Languages",
      items: ["Python", "Java", "SQL (PostgreSQL)"],
    },
    {
      group: "Frameworks & Libraries",
      items: ["TensorFlow", "PyTorch", "PyTorch Geometric", "OpenCV", "FAISS", "LlamaIndex", "Chroma"],
    },
    {
      group: "AI / LLM Tools",
      items: ["Claude API", "Claude Code", "Cursor"],
    },
    {
      group: "Cloud & Tools",
      items: ["Git", "PostgreSQL", "Jupyter Notebook", "Visual Studio", "Microsoft Azure", "AWS", "Linux"],
    },
    {
      group: "Techniques",
      items: ["Vector Search", "Vector Databases", "Embedding-Based Retrieval"],
    },
  ],
};

// top-level `const` doesn't attach to `window` — main.js reads window.RESUME
window.RESUME = RESUME;
