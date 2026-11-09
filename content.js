/* =====================================================================
   EDIT YOUR PORTFOLIO HERE
   ---------------------------------------------------------------------
   Everything you see on the website comes from this file.
   - Change any text between the quotes "like this".
   - Wrap words in **double stars** to make them bold/white.
   - To add an item to a list, copy one { ... }, block, paste it below,
     and keep the comma between blocks.
   - Save (commit) on GitHub -> the site updates in about 1 minute.
   ===================================================================== */

window.SITE = {
  // ---------------- FONT SIZES ----------------
  // 1 = normal size.  0.9 = 10% smaller.  1.1 = 10% bigger.
  fontSizes: {
    "headline":       1,   // your name at the top
    "section-titles": 1,   // "Experience", "Projects", "Skills"...
    "card-titles":    1,   // titles of jobs, projects, skill groups
    "numbers":        1,   // "2 yrs  20%  1 live" under the intro
    "text":           1    // all normal paragraph text
  },

  name: "Karthickk Rahul Srinivasan",
  title: "Industrial Engineer · Quality & Process",   // line under your name
  firstName: "Karthick",
  initials: "KS",
  location: "Ostrava, Czech Republic",
  status: "Open to internships",        // small green badge top-right
  email: "karthickrahul8@gmail.com",
  linkedin: "https://www.linkedin.com/in/karthickk-srinivasan",
  github: "https://github.com/karthickrahul",
  phone: "",                             // leave "" to hide it

  // Put a photo file (e.g. photo.jpg) in the repo and write its name here.
  // Leave "" to show the KS monogram instead.
  photo: "",

  // Upload your CV as a PDF (e.g. Karthick_Srinivasan_CV.pdf) and write its name here.
  // A "Download CV" button appears. Leave "" to hide the button.
  cvFile: "",

  hero: {
    headline: "Focused on",              // text before the rotating red words
    // These rotate in red, in sync with the drawing (impeller, control chart, gear).
    rotatingWords: ["mechanical design", "quality & SPC", "lean production"],
    intro: "M.Sc. Industrial Engineering student at **VŠB – Technical University of Ostrava**. Mechanical engineer with two years in **quality and production** on a pump manufacturing floor, now building data tools for manufacturing.",
    stats: [
      { value: "2",  unit: "yrs",  text: "Quality & production at Sri Vigneshwaraa Pumps, Coimbatore" },
      { value: "20", unit: "%",    text: "Pump shaft efficiency gain from a CAD redesign" },
      { value: "1",  unit: "live", text: "Web app anyone can test: the Factory Optimization Suite" }
    ]
  },

  about: {
    paragraphs: [
      "I started in **mechanical design**: CAD models, drawings and prototypes, including R&D work at Kone Elevators. At Sri Vigneshwaraa Pumps I moved onto the shop floor, working on **inspection, production and process quality** for centrifugal pumps.",
      "That work showed me that most problems on a line are measurement problems first. So I learned Python and Power BI, and now I build tools for **SPC, line balancing, defect detection and flow simulation** alongside my Industrial Engineering master's in Ostrava."
    ],
    facts: [
      { label: "Study",       value: "M.Sc. Industrial Engineering, VŠB – TU Ostrava (exp. Jun 2027)" },
      { label: "Degree",      value: "B.E. Mechanical Engineering, Anna University (2024)" },
      { label: "Looking for", value: "Internships in quality, process & industrial engineering" },
      { label: "Based in",    value: "Ostrava, Czech Republic" }
    ]
  },

  // The scrolling strip of tools
  marquee: ["SPC", "Cp / Cpk", "FMEA", "DMAIC", "Gage R&R", "GD&T", "Python", "Power BI", "Fusion 360", "CATIA V5", "Line balancing", "OpenCV"],

  // Experience & education, oldest first (the site shows newest first).
  // A line with when: "Now" is hidden from the list.
  career: [
    { when: "2020 – 2024",         title: "B.E. Mechanical",       org: "KPR College of Engineering & Technology", text: "SAE India electric four-wheeler design competition: CAD/CAM for vehicle subsystems." },
    { when: "Jul 2022 – Jun 2023", title: "R&D Intern",            org: "Kone Elevators, Chennai",                 text: "Safety door prototype development." },
    { when: "Aug 2023 – Jun 2025", title: "Quality & Production",  org: "Sri Vigneshwaraa Pumps, Coimbatore",      text: "20% pump shaft efficiency gain via CAD redesign. DMAIC project on final-inspection rejection rate." },
    { when: "Sep 2025 →",          title: "M.Sc. Industrial Eng.", org: "VŠB – TU Ostrava",                        text: "Thesis: selecting an industrial CT system and planning its procurement and rollout." },
    { when: "Now",                 title: "Next step",             org: "Czech Republic / EMEA",                   text: "Looking for an internship in quality, process or industrial engineering." }
  ],

  // status: "live" (green), "progress" (amber), or any other short word (grey)
  // featured: true -> shown as the big card on top (use for one project)
  projects: [
    {
      featured: true,
      title: "Factory Optimization Suite",
      kind: "Web app · Python + JS",
      status: "live",
      text: "A browser app recruiters and engineers can actually use. Paste your own process data and get control charts and capability indices, a balanced assembly line, or a simulated factory flow.",
      links: [
        { label: "Open live app", url: "https://karthickrahul.github.io/factory-optimization-suite/" },
        { label: "Source on GitHub", url: "https://github.com/karthickrahul/factory-optimization-suite" }
      ],
      modules: [
        { name: "SPC & process capability", detail: "Control charts, Cp / Cpk" },
        { name: "Assembly line balancing", detail: "Task assignment to stations, takt time" },
        { name: "Factory flow simulator", detail: "Throughput and bottlenecks" },
        { name: "Demand forecasting & inventory policy", detail: "In development" }
      ]
    },
    {
      title: "Defect inspection with YOLO",
      kind: "Computer vision",
      status: "progress",
      text: "Surface defect detection with YOLO and OpenCV, feeding an SPC dashboard and a model of the effect on scrap and inspection time. Built first on clearly labelled synthetic data; a rerun on the NEU steel defect dataset is next.",
      tags: ["YOLO", "OpenCV", "SPC", "Python"],
      links: [{ label: "GitHub", url: "https://github.com/karthickrahul/-Manufacturing-dashboard" }]
    },
    {
      title: "Final-inspection rejection rate",
      kind: "Six Sigma · Shop floor",
      status: "DMAIC",
      text: "Live DMAIC project on centrifugal pump final inspection at Sri Vigneshwaraa Pumps: data collection, Gage R&R, Pareto and fishbone root-cause analysis, capability study and a control plan.",
      tags: ["Gage R&R", "Pareto", "Cp/Cpk", "Control plan"]
    },
    {
      title: "SPC & FMEA analytics",
      kind: "Quality tool",
      status: "Streamlit",
      text: "Dashboard with control charts, Cp/Cpk, an FMEA risk register and an 8D log.",
      tags: ["Python", "Streamlit", "FMEA", "8D"]
    },
    {
      title: "Industrial CT selection",
      kind: "M.Sc. thesis",
      status: "progress",
      text: "Weighted criteria and a multi-criteria comparison of three supplier offers, then a procurement, installation and acceptance plan.",
      tags: ["MCDM", "Procurement", "Metrology"]
    },
    {
      title: "Assembly rationalization",
      kind: "M.Sc. course",
      status: "Excel",
      text: "Current-state analysis of a 7-operation assembly process, a proposed future state, economics and sensitivity analysis.",
      tags: ["Work study", "Economics", "Excel"]
    }
  ],

  skills: [
    { title: "Quality",    items: ["SPC, Cp / Cpk", "FMEA, 8D", "DMAIC, Gage R&R", "Pareto, fishbone", "Control plans, SOPs"] },
    { title: "Design",     items: ["Fusion 360", "CATIA V5", "Creo, AutoCAD", "GD&T", "Fixture & tooling design"] },
    { title: "Data",       items: ["Python, Pandas, Matplotlib", "Streamlit, FastAPI", "Power BI (DAX)", "Excel, basic VBA", "Git & GitHub"] },
    { title: "Production", items: ["CNC / VMC machining", "Line balancing", "Production forecasting", "Engineering drawings", "Additive manufacturing"] }
  ],

  credentials: [
    { tag: "Degree · 2027 exp.", title: "M.Sc. Industrial Engineering", text: "VŠB – Technical University of Ostrava" },
    { tag: "Degree · 2024",      title: "B.E. Mechanical Engineering",  text: "KPR College of Engineering & Technology, Anna University" },
    { tag: "Certificate",        title: "Power BI: Data Transformation with DAX", text: "Data modelling and KPI dashboards" },
    { tag: "In progress",        title: "Six Sigma Black Belt",         text: "With a live DMAIC project on pump final inspection" }
  ],

  contact: {
    heading: "Hiring an intern for quality or process work?",
    text: "I'm based in Ostrava and can start on-site or hybrid. I reply to every message."
  }
};
