const skills = {
  "AI / Agents": [
    "GenAI",
    "Multi-Agent Systems",
    "LangGraph",
    "LangChain",
    "RAG",
    "Prompt Engineering",
    "Vertex AI",
    "Embeddings",
    "Vector Databases",
    "Qdrant",
    "MCP",
    "FastAPI Agents",
    "LLMs",
    "GitHub Copilot",
    "Cursor",
    "Claude Code",
    "BMAD Method",
  ],
  Backend: [
    "Node.js",
    "NestJS",
    "Express",
    "Python",
    "Django",
    "FastAPI",
    "Java",
    "SQL",
    "MongoDB",
    "Redis",
    "GraphQL",
    "Socket.io",
    "JWT",
    "pandas",
    "scikit-learn",
  ],
  Frontend: [
    "React",
    "Angular",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Redux",
    "RxJS",
    "React Native",
    "Ionic",
    "Electron",
  ],
  "Cloud / DevOps": [
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "EKS",
    "Helm",
    "NGINX",
    "CI/CD",
    "GitHub Actions",
    "Travis CI",
    "Terraform",
    "PM2",
    "IIS",
    "Snowflake",
  ],
  Testing: ["Playwright", "Puppeteer", "Selenium"],
  Security: ["OWASP", "Certified to Use/Sell"],
} as const;

const aiSkills = new Set<string>(skills["AI / Agents"]);

const fullStack: string[] = [
  ...skills["AI / Agents"],
  ...skills.Backend,
  ...skills.Frontend,
  ...skills["Cloud / DevOps"],
  ...skills.Testing,
  ...skills.Security,
];

const fullStackWithoutAi = fullStack.filter((skill) => !aiSkills.has(skill));

const ikometPreferred = [
  "GraphQL",
  "TypeScript",
  "Node.js",
  "Python",
  "pandas",
  "scikit-learn",
  "Angular",
  "React",
  "Electron",
  "Ionic",
  "Terraform",
  "PM2",
  "AWS",
  "IIS",
  "Travis CI",
] as const;

function mergeStack(preferred: readonly string[], rest: readonly string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const item of [...preferred, ...rest]) {
    if (!seen.has(item)) {
      seen.add(item);
      out.push(item);
    }
  }
  return out;
}

export const resume = {
  name: "Titus Vimal Raj",
  headline: "Senior Consultant | Lead Full Stack & AI Solutions Architect | 8+ Years",
  tagline:
    "Building multi-agent GenAI systems and full-stack platforms that ship enterprise outcomes at speed.",
  summary:
    "Senior Consultant and Lead Full Stack & AI Solutions Architect with nearly 8 years of experience. Initiator and lead for AI adoption across my portfolio—delivering multi-agent systems, FastAPI services, and GenAI solutions alongside MEAN/MERN full-stack craft. AWS & Microsoft certified. Based in Chennai, India.",
  contact: {
    email: "titusvimalraj@gmail.com",
    phone: "+91-8610265950",
    linkedin: "https://www.linkedin.com/in/titus-vimal-raj/",
    linkedinLabel: "linkedin.com/in/titus-vimal-raj",
    github: "https://github.com/Titusvimalraj",
    githubLabel: "github.com/Titusvimalraj",
    location: "Chennai, India",
  },
  experience: [
    {
      company: "Deloitte Consulting India Pvt Ltd",
      title: "Senior Consultant | Lead Full Stack & AI Solutions Architect",
      period: "Dec 2021 – Present",
      stack: fullStack,
      bullets: [
        "Team lead for application design, deployment, and management across AI and full-stack deliveries (TypeScript, React, Node.js).",
        "Initiator and lead for AI adoption across the portfolio—strategy, enablement, and solution delivery.",
        "Designed Deep Researcher Agents with RAG (Qdrant) and an Analysis Agent powered by Qdrant MCP Server.",
        "Refactored multi-agent chatbot workflows (LangGraph) to FastAPI; Text-to-SQL on BigQuery under 30s using Vertex AI embeddings on table descriptions and a skills framework with few-shot SQL prompts.",
        "Built an enterprise-grade FastAPI report generator end-to-end—architecture through deployment—in 3 days.",
        "Delivered several products end-to-end with agents using the BMAD Method agile AI-driven development framework.",
        "Hands-on Agent Mode with GitHub Copilot, Cursor, and Claude Code; strong Prompt Engineering for multi-agent systems.",
        "E2E automation with Playwright and Puppeteer across product workflows.",
        "Achieved Certified to Use/Sell certifications on Deloitte products delivered to clients.",
        "Applied OWASP security best practices across application design, development, and deployment.",
        "Application Community lead; hosted Deloitte USI Chennai office-wide events (FWD & XCEED); negotiated venues and vendors for cultural office events.",
      ],
    },
    {
      company: "Kanini Software Solutions",
      title: "Associate IT Application Development",
      period: "Dec 2020 – Dec 2021",
      stack: fullStackWithoutAi,
      bullets: [
        "Full-stack developer; established a unit testing framework for the API layer.",
        "Enabled hybrid migration from jQuery to React; trained peers on unit testing and ReactJS.",
        "Awarded Star Performer and Learning Champion for certifications and delivery impact.",
      ],
    },
    {
      company: "iKomet Technology Solutions Pvt Ltd",
      title: "MEAN Stack Developer",
      period: "Jan 2020 – Dec 2020",
      stack: mergeStack(ikometPreferred, fullStackWithoutAi),
      bullets: [
        "Architected frontend, backend, and infrastructure from scratch for an editorial automation application—GraphQL APIs on Node.js/TypeScript with Angular, React, Electron, and Ionic clients.",
        "Python with pandas and scikit-learn; Terraform, PM2, AWS, IIS, and Travis CI for infra and CI/CD; web data scraping; led the team to start the application.",
      ],
    },
    {
      company: "Accenture",
      title: "Associate Software Engineer",
      period: "Feb 2018 – Apr 2019",
      stack: ["Angular", "React", "Python", "Node.js", "Selenium", "Java"],
      bullets: [
        "Built and maintained applications with Angular, React, Python, Node.js, and Java.",
        "Automated browser E2E flows with Selenium; ACE Award winner for innovation.",
      ],
    },
  ],
  projects: [
    {
      title: "Deep Researcher & Analysis Agents",
      description:
        "Advanced Deep Researcher Agents with RAG on Qdrant Vector Database, plus an Analysis Agent via Qdrant MCP Server—fully architected and implemented.",
    },
    {
      title: "FastAPI Multi-Agent Text-to-SQL",
      description:
        "Refactored chatbot agent workflows to FastAPI with BigQuery Text-to-SQL under 30 seconds, Vertex AI embeddings for table relevancy, and a dataset skills framework with few-shot SQL.",
    },
    {
      title: "Enterprise Report Generator",
      description:
        "New enterprise-grade FastAPI report generator service—architecture, development, and deployment—delivered in 3 days.",
    },
  ],
  skills,
  leadership: [
    "Initiator and lead for AI adoption across the operations portfolio.",
    "Leader of the Application Community—engaging sessions and initiatives.",
    "Hosted Deloitte USI Chennai office-wide events as location leader (FWD & XCEED).",
    "Active contributor to cultural events—negotiated resorts, cafés, and gaming entertainment with venues and vendors.",
  ],
  awards: [
    {
      title: "Deloitte Outstanding Performer Award",
      year: "2025 & 2026",
      detail: "Recognized twice for outstanding delivery performance.",
    },
    {
      title: "Deloitte Spot Award",
      year: "2023, 2024 & 2025 (×2)",
      detail: "Recognized for framework and delivery impact, including two Spot Awards in 2025.",
    },
    {
      title: "Deloitte Applause Award",
      year: "2022, 2024 & 2026",
      detail: "Cash award for architectural work.",
    },
    {
      title: "Learning Champion & Star Performer",
      year: "2021",
      detail: "Kanini Software Solutions.",
    },
    {
      title: "Accenture ACE Award for Innovation",
      year: "2018",
      detail: "Innovation recognition.",
    },
    {
      title: "Arctic Code Vault Contributor",
      year: "2020",
      detail: "GitHub Archive Program.",
    },
  ],
  certifications: [
    {
      name: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      date: "Mar 2025",
    },
    {
      name: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      date: "Oct 2024",
    },
    {
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "May 2021",
    },
  ],
  education: [
    {
      school: "Loyola-ICAM College of Engineering and Technology",
      degree: "Bachelor of Engineering (B.E.), Mechanical Engineering",
      period: "2014 – 2017",
    },
  ],
  pdfPath: "/resume.pdf",
  profileImage: "/profile-picture.jpeg",
  profileImageAlt: "Portrait of Titus Vimal Raj",
} as const;

export type Resume = typeof resume;
