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
      company: "Deloitte Innovation Labs (Offices of the US)",
      title: "Senior Consultant | Lead Full Stack & AI Solutions Architect",
      period: "Dec 2021 – Present",
      bullets: [
        "Team lead for application design, deployment, and management across AI and full-stack deliveries.",
        "Initiator and lead for AI adoption across the portfolio—strategy, enablement, and solution delivery.",
        "Designed Deep Researcher Agents with RAG (Qdrant) and an Analysis Agent powered by Qdrant MCP Server.",
        "Refactored multi-agent chatbot workflows to FastAPI; Text-to-SQL on BigQuery under 30s using Vertex AI embeddings on table descriptions and a skills framework with few-shot SQL prompts.",
        "Built an enterprise-grade FastAPI report generator end-to-end—architecture through deployment—in 3 days.",
        "Hands-on Agent Mode with GitHub Copilot and Cursor; strong Prompt Engineering for multi-agent systems.",
        "Application Community lead; hosted Deloitte USI Chennai office-wide events (FWD & XCEED); negotiated venues and vendors for cultural office events.",
      ],
    },
    {
      company: "Kanini Software Solutions",
      title: "Associate IT Application Development",
      period: "Dec 2020 – Dec 2021",
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
      bullets: [
        "Architected frontend, backend, and infrastructure from scratch (Angular UI + Node.js API).",
        "Built AWS CI/CD DevOps pipelines; worked on web data scraping; led the team to start the application.",
      ],
    },
    {
      company: "Accenture",
      title: "Associate Software Engineer",
      period: "Feb 2018 – Apr 2019",
      bullets: [
        "Associate Software Engineer; ACE Award winner for innovation.",
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
  skills: {
    "AI / Agents": [
      "GenAI",
      "Multi-Agent Systems",
      "RAG",
      "Prompt Engineering",
      "Vertex AI",
      "Qdrant",
      "FastAPI Agents",
      "LLMs",
    ],
    Backend: [
      "Node.js",
      "NestJS",
      "Express",
      "Python",
      "Django",
      "FastAPI",
      "SQL",
      "MongoDB",
      "Redis",
      "GraphQL",
      "Socket.io",
      "JWT",
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
      "Snowflake",
    ],
  },
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
} as const;

export type Resume = typeof resume;
