export const siteUrl = "https://kennethwebber.com";

export const profile = {
  name: "Kenneth Webber",
  title: "Senior AI & Full-Stack Engineer",
  subtitle: "Tech Lead",
  location: "Louisiana, USA",
  availability: "Open to Remote",
  years: "21+",
  yearsCaption: "Years of Experience",
  email: "contact@kennethwebber.com",
  linkedin: "https://www.linkedin.com/in/kenneth-webber-a16032423/",
  linkedinHandle: "in/kenneth-webber",
  github: "https://github.com/KW-dev1",
  githubHandle: "@KW-dev1",
};

export const aboutBody: string[] = [
  "I’ve spent 21 years fixing the problems no one wants to own.",
  "Legacy platforms nobody wants to touch. AI features that work in the demo but not in production. Logistics systems quietly bleeding money. I’ve rebuilt all three — and I’m currently building something of my own, because I got tired of just fixing other people’s.",
];

export const quote = {
  text:
    "Most engineers can write code. Fewer can tell you which code is actually worth writing.",
  attribution: "— Kenneth Webber",
};

export type StackGroup = { label: string; items: string };

export const technicalStack: StackGroup[] = [
  {
    label: "Languages",
    items: "TypeScript, JavaScript, Python, Go, SQL, C#/.NET",
  },
  {
    label: "Frontend",
    items:
      "React, Next.js, Vue, Svelte, Tailwind CSS, Zustand, Redux Toolkit, TanStack Query, WebSockets",
  },
  {
    label: "Backend",
    items:
      "Node.js, NestJS, Express.js, Django, FastAPI, .NET, REST, GraphQL, gRPC, AWS Lambda",
  },
  {
    label: "Databases & Data",
    items: "PostgreSQL, MySQL, Redis, MongoDB, Pinecone, Qdrant, Supabase, Prisma",
  },
  {
    label: "AI & LLM",
    items:
      "LangChain, LlamaIndex, OpenAI & Anthropic APIs, PyTorch, Hugging Face, RAG, vector databases, function calling/tool use",
  },
  {
    label: "Cloud & Infrastructure",
    items: "AWS, GCP, Docker, Kubernetes, Terraform, Cloudflare, GitHub Actions, Datadog, Sentry",
  },
];

export type Role = {
  slug: string;
  title: string;
  company: string;
  initial: string;
  period: string;
  duration: string;
  product: string;
  skills: string[];
  bullets: string[];
};

export const experience: Role[] = [
  {
    slug: "breezy-hr",
    title: "Lead AI / Senior Software Engineer",
    company: "Breezy HR, Inc.",
    initial: "B",
    period: "Sep 2023 – Jun 2026",
    duration: "2 yrs 10 mos",
    product: "Intelligent Applicant Tracking and Candidate Evaluation Platform",
    skills: ["AWS Bedrock", "Node.js Microservices", "WebSockets (Socket.io)", "BullMQ", "SNS", "MongoDB", "LLM Pipelines", "AvaTax", "Stripe", "GDPR/CCPA Compliance"],
    bullets: [
      "Led the technical architecture and end-to-end engineering of Breezy Intelligence, an AI-powered intelligence layer embedded within a production recruiting platform used to augment candidate evaluation and recruiter decision-making.",
      "Architected and shipped an AI-powered candidate sourcing feature on AWS Bedrock that ranks best-fit candidates from large applicant datasets, supports credit-aware execution, and streams real-time progress via WebSockets.",
      "Optimized the sourcing pipeline's LLM usage, reducing per-run inference cost by 90% while improving match quality through a multi-stage scoring and reranking pipeline.",
      "Traced and fixed cross-service failures across 6 Node.js microservices and async pipelines (SNS, BullMQ, Socket.io, MongoDB), eliminating recurring errors in the sourcing workflow.",
      "Engineered AI-powered resume intelligence to audit candidate materials, identify inconsistencies and anomalous patterns, and surface potential indicators of AI-generated or suspicious applications for recruiter review.",
      "Built contextual summarization systems that synthesized resumes, candidate profiles, recruiter notes, communications, and activity history into concise, decision-ready intelligence for recruiters and hiring managers.",
      "Migrated the image delivery/optimization stack (DNS cutover, URL rewrites, application changes), cutting monthly image infrastructure spend by approximately 97%.",
      "Implemented AvaTax-based tax collection across state tax codes, integrating with Stripe for accurate checkout and invoicing.",
      "Audited and corrected GDPR/CCPA consent workflows across candidate import paths, ensuring data privacy compliance across US and EU regions.",
      "Contributed to a broad platform feature set — job postings, candidate management, applications, email/SMS communication, automation, scheduling, scoring, video interviews, reporting, and dozens of third-party API integrations — across the recruiting platform.",
      "Drove engineering decisions across AI infrastructure, backend services, data pipelines, security, scalability, and production reliability, balancing model capabilities with latency, cost, accuracy, and operational constraints.",
      "Partnered cross-functionally with product and engineering stakeholders to translate recruiting-domain requirements into production-grade AI capabilities while establishing the technical foundation for continued expansion of intelligent recruiting features.",
    ],
  },
  {
    slug: "carvana",
    title: "Senior Full-Stack Engineer",
    company: "Carvana",
    initial: "C",
    period: "Oct 2020 – Sep 2023",
    duration: "3 yrs",
    product: "Automotive Commerce, Valuation, and Logistics Platform",
    skills: ["Python", "Go", "Redis", "Classical ML", "LLM Integration", "Distributed Systems", "Event-Driven Processing", "Data Pipelines"],
    bullets: [
      "Drove the architecture and production integration of classical ML and modern LLM capabilities across consumer experiences and backend fulfillment systems, contributing to $22.9M/year in measurable business impact.",
      "Architected a distributed last-mile scheduling platform using Python, Go, and Redis, optimizing driver routing, transportation schedules, network capacity, and resource utilization while reducing logistics expenses by $900K/year.",
      "Designed backend services and data pipelines connecting vehicle inventory, customer demand, pricing, purchasing, fulfillment, and logistics, enabling data-driven decisioning across a high-volume automotive commerce platform.",
      "Engineered resilient asynchronous workflows and service integrations using event-driven processing, idempotency, retries, validation, and observability to support reliable, high-throughput fulfillment operations.",
      "Built and integrated ML-driven vehicle intelligence capabilities spanning valuation, recommendations, personalization, and inventory optimization, leveraging large-scale vehicle and transaction datasets.",
      "Led cross-functional technical initiatives spanning backend architecture, distributed systems, AI/ML integration, data infrastructure, and logistics optimization, balancing performance, scalability, reliability, model accuracy, and business impact.",
    ],
  },
  {
    slug: "susco-solutions",
    title: "Senior Full-Stack Engineer",
    company: "Susco Solutions",
    initial: "S",
    period: "Nov 2016 – Sep 2020",
    duration: "3 yrs 11 mos",
    product: "Claims Management & Insurance Operations Platform",
    skills: ["Python", "JavaScript", "PostgreSQL", "Redis", "AWS", "REST APIs", "Data Migration"],
    bullets: [
      "Contributed to SuscoCMS, building scalable claims-management workflows, APIs, integrations, and business applications using Python, JavaScript, PostgreSQL, Redis, and AWS.",
      "Architected backend services, data models, REST APIs, and automated workflows supporting claims processing, billing, adjuster management, and insurance operations.",
      "Led the Gilsbar Insurance engagement, replacing the legacy Vertafore Sagitta platform with custom accounting software and migrating critical business data.",
      "Designed data migration and integration workflows while ensuring data integrity, reliability, and production continuity.",
      "Partnered directly with client stakeholders to lead technical implementation from requirements through production.",
      "Delivered a system replacement that generated $348K in reported annual cost savings for Gilsbar Insurance.",
    ],
  },
  {
    slug: "levelset",
    title: "Senior Full-Stack Developer",
    company: "Levelset (acquired by Procore)",
    initial: "L",
    period: "Jan 2014 – Oct 2016",
    duration: "2 yrs 10 mos",
    product: "Construction Lien Rights & Payment Management Platform",
    skills: ["Python", "Django", "JavaScript/jQuery", "PostgreSQL", "Redis", "AWS"],
    bullets: [
      "Contributed to the development of Levelset's core construction payment platform using Python, Django, JavaScript/jQuery, PostgreSQL, Redis, and AWS.",
      "Built full-stack workflows for lien notices, lien waivers, payment tracking, document processing, and compliance deadlines.",
      "Developed scalable backend services, APIs, database models, and automated workflows supporting construction payment operations.",
      "Optimized application performance through PostgreSQL query optimization, Redis caching/background processing, and AWS infrastructure.",
    ],
  },
  {
    slug: "general-informatics",
    title: "Senior Systems & Software Engineer",
    company: "General Informatics",
    initial: "G",
    period: "Mar 2010 – Dec 2013",
    duration: "3 yrs 10 mos",
    product: "Managed IT, Infrastructure & Custom Software Solutions",
    skills: ["C#/.NET", "ASP.NET", "SQL Server", "RESTful Services", "Cloud Migration"],
    bullets: [
      "Led custom web application development and database modernization using C#/.NET, ASP.NET, and SQL Server for enterprise and public-sector clients.",
      "Architected RESTful services and data portals supporting high-volume operational workflows and geographically distributed users.",
      "Designed cloud and infrastructure modernization solutions, migrating legacy systems and databases to more scalable environments.",
      "Developed database-driven applications, integrations, and internal platforms that streamlined client operations and reduced infrastructure complexity.",
      "Partnered with clients to translate business and technical requirements into production-ready software and infrastructure solutions.",
    ],
  },
  {
    slug: "endertech",
    title: "Full-Stack Software Engineer",
    company: "Endertech",
    initial: "E",
    period: "Aug 2007 – Feb 2010",
    duration: "2 yrs 7 mos",
    product: "Custom Software, E-Commerce & Web Application Development",
    skills: ["PHP", "JavaScript", "HTML/CSS", "MySQL", "API Integrations"],
    bullets: [
      "Built custom web applications and e-commerce platforms using PHP, JavaScript, HTML/CSS, and MySQL.",
      "Developed backend business logic, database-driven features, customer portals, and administrative tools for client applications.",
      "Designed and integrated APIs and third-party services to automate business workflows and connect external systems.",
      "Optimized database queries and application performance while troubleshooting production issues across client platforms.",
      "Managed end-to-end development, testing, deployment, and ongoing maintenance of web applications.",
    ],
  },
  {
    slug: "infotech-solutions",
    title: "Software Engineer",
    company: "InfoTECH Solutions",
    initial: "I",
    period: "Jun 2005 – Jul 2007",
    duration: "2 yrs 2 mos",
    product: "Managed IT Infrastructure & Business Technology Solutions",
    skills: ["C#", "SQL Server", "JavaScript", "Network Monitoring", "Automation Scripting"],
    bullets: [
      "Developed internal tracking dashboards and automation tools using C#, SQL Server, and JavaScript to streamline IT operations.",
      "Built custom scripts and integrations for network monitoring, log processing, infrastructure tracking, and uptime reporting.",
      "Automated operational tasks and data collection to improve infrastructure visibility and reduce manual IT administration.",
    ],
  },
];

export type WorkItem = {
  slug: string;
  tag?: string;
  metric: string;
  title: string;
  description: string;
  featured?: boolean;
  image?: string;
  role: string;
  period: string;
  stack: string[];
  summary: string;
  metrics: string[];
  highlights: string[];
};

export const selectedWork: WorkItem[] = [
  {
    slug: "withconflux",
    tag: "Current",
    metric: "30–50% cost cut",
    title: "withConflux",
    description:
      "Content-AI gateway with content-hash deduplication and cost-aware smart routing across providers.",
    featured: true,
    image: "/work-gateway.png",
    role: "Co-Founder & Lead AI/Infrastructure Engineer",
    period: "Aug 2026 – Present",
    stack: ["TypeScript", "Go", "Redis", "Next.js", "Tailwind CSS", "TanStack Query"],
    summary:
      "A high-concurrency API gateway that sits in front of every content-AI provider a team uses, deduplicates identical work, and routes each request to whichever provider is cheapest and healthiest at that moment. Teams keep one SDK and stop paying twice for the same generation.",
    metrics: [
      "30–50% of vendor spend removed",
      "One SDK across all providers",
      "Managed and bring-your-own-key plans",
    ],
    highlights: [
      "Architected the gateway in TypeScript, Go, and Redis to aggregate and route requests across content-AI providers under high concurrency.",
      "Built a content-hash deduplication engine and smart router that cuts client vendor costs 30–50% via automated caching and real-time cost and health scoring.",
      "Shipped a developer console in Next.js App Router with real-time telemetry, interactive API key management, and configurable spend caps.",
      "Designed multi-provider failover and unified SDKs supporting both managed subscriptions and enterprise bring-your-own-key setups.",
    ],
  },
  {
    slug: "breezy-intelligence",
    tag: "Tech Lead",
    metric: "9+ Industry Awards",
    title: "Breezy Intelligence",
    description:
      "An AI intelligence layer embedded in a production recruiting platform. It parses resumes, cross-references job requirements and recruiting activity, and surfaces contextual insights recruiters can act on with human-in-the-loop checks and resume-integrity screening to catch AI-generated or suspicious applications.",
    role: "Lead AI / Senior Software Engineer",
    period: "Sep 2023 – Jun 2026",
    stack: ["LLM Pipelines", "Agentic Workflows", "API Integrations", "Observability", "Data Validation"],
    summary:
      "An AI intelligence layer embedded in a production recruiting platform. It parses resumes, cross-references job requirements and recruiting activity, and surfaces contextual insights recruiters can act on with human-in-the-loop checks and resume-integrity screening to catch AI-generated or suspicious applications.",
    metrics: [
      "Sole technical architect of the AI layer, end to end",
      "Agentic workflows with structured outputs, validation & orchestration",
      "Contextual summarization across resumes, notes, and activity history",
    ],
    highlights: [
      "Owned architecture and delivery of an LLM-powered candidate intelligence system inside a live SaaS product.",
      "Designed agentic workflows with structured outputs and human-in-the-loop review to make AI signals trustworthy enough to act on.",
      "Built async processing, observability, and data-validation layers to run AI workloads reliably at scale.",
    ],
  },
  {
    slug: "carvana-logistics-vehicle-intelligence",
    tag: "Backend/AI",
    metric: "$22.9M/year",
    title: "Carvana Logistics & Vehicle Intelligence",
    description:
      "A distributed last-mile scheduling platform and set of ML/LLM-driven vehicle intelligence tools for a high-volume automotive commerce platform covering routing, inventory, pricing, and fulfillment.",
    role: "Senior Full-Stack Engineer",
    period: "Oct 2020 – Sep 2023",
    stack: ["Python", "Go", "Redis", "Event-Driven Processing", "Classical ML", "LLM Integration"],
    summary:
      "A distributed last-mile scheduling platform and set of ML/LLM-driven vehicle intelligence tools for a high-volume automotive commerce platform covering routing, inventory, pricing, and fulfillment.",
    metrics: [
      "$22.9M/year in measurable business impact",
      "$900K/year cut from logistics expenses",
      "3 years leading cross-functional technical initiatives",
    ],
    highlights: [
      "Architected a distributed scheduling platform (Python, Go, Redis) optimizing driver routing and network capacity.",
      "Connected vehicle inventory, demand, pricing, and fulfillment into a single data-driven backend.",
      "Built ML-driven valuation, recommendation, and inventory-optimization tools from large-scale transaction data.",
    ],
  },
  {
    slug: "suscocms-claims-management",
    tag: "Backend",
    metric: "$348K in annual cost savings",
    title: "SuscoCMS Claims Management Platform",
    description:
      "A claims-management system for insurance operations claims processing, billing, and adjuster workflows including a full legacy-platform replacement for a major client.",
    featured: true,
    image: "/work-platform.jpg",
    role: "Senior Full-Stack Engineer",
    period: "Nov 2016 – Sep 2020",
    stack: ["Python", "JavaScript", "PostgreSQL", "Redis", "AWS"],
    summary:
      "A claims-management system for insurance operations claims processing, billing, and adjuster workflows including a full legacy-platform replacement for a major client.",
    metrics: [
      "$348K/year in reported cost savings",
      "Full migration off a legacy Vertafore Sagitta system",
      "4 years owning backend architecture and delivery",
    ],
    highlights: [
      "Architected backend services, data models, and REST APIs for claims processing and billing.",
      "Led the Gilsbar Insurance engagement, replacing a legacy platform with custom-built accounting software.",
      "Designed the data migration path, preserving integrity and production continuity throughout.",
    ],
  },
  {
    slug: "levelset-construction-payments",
    tag: "Full Stack",
    metric: "Nearly 3 years on core payment workflows",
    title: "Levelset Construction Payment Platform",
    description:
      "The lien-rights and payment-management platform behind Levelset handling lien notices, waivers, payment tracking, and compliance deadlines for construction businesses nationwide.",
    role: "Senior Full-Stack Developer",
    period: "Jan 2014 – Oct 2016 (acquired by Procore)",
    stack: ["Python", "Django", "JavaScript/jQuery", "PostgreSQL", "Redis", "AWS"],
    summary:
      "The lien-rights and payment-management platform behind Levelset handling lien notices, waivers, payment tracking, and compliance deadlines for construction businesses nationwide.",
    metrics: [
      "Nearly 3 years on the platform's core payment workflows",
      "Company later acquired by Procore",
      "Backend + full-stack ownership across the product",
    ],
    highlights: [
      "Built full-stack workflows for lien notices, waivers, and compliance deadline tracking.",
      "Developed scalable backend services, APIs, and database models for construction payment operations.",
      "Optimized performance through PostgreSQL query tuning and Redis caching.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Systems Engineering",
  school: "Thomas Edison State University",
  period: "1999 – 2003",
};
