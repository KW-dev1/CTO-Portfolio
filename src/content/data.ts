export const profile = {
  name: "Kenneth Webber",
  title: "Senior AI & Full-Stack Engineer",
  subtitle: "Tech Lead",
  location: "Louisiana, USA",
  availability: "Open to Remote",
  yearsLabel: "21+ Years of Experience",
  years: "21+",
  yearsCaption: "Years of Experience",
  email: "hello@kennethwebber.dev",
  linkedin: "https://www.linkedin.com/in/kenneth-webber-a16032423/",
  github: "https://github.com/kw-dev1",
};

export const executiveSummary =
  "Tech Lead and Senior AI Engineer with over 21 years of experience designing, building, and scaling resilient full-stack applications and intelligent AI architectures. Proven track record of driving multi-million-dollar financial impact for early-stage startups and enterprise organizations alike. Expertise spans agentic systems, content-AI API infrastructure, generative AI, event-driven backend systems, and high-performance frontend interfaces.";

export const coreExpertise: string[] = [
  "Agentic AI Systems",
  "API Gateway Architecture",
  "Distributed Backend Systems",
  "Modern Frontend Architecture",
  "Cloud Infrastructure",
  "Technical Leadership",
];

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
  {
    label: "Testing",
    items: "Jest, Vitest, Cypress, Playwright, PyTest",
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
  bullets: string[];
};

export const experience: Role[] = [
  {
    slug: "breezy-software",
    title: "Lead AI / Staff Software Engineer",
    company: "Breezy Software Inc.",
    initial: "B",
    period: "Sep 2023 – Jun 2026",
    duration: "2 yrs 10 mos",
    product: "Intelligent Applicant Tracking and Candidate Evaluation Platform",
    bullets: [
      "Led the technical architecture and end-to-end engineering of Breezy Intelligence, an AI-powered intelligence layer embedded within a production recruiting platform used to augment candidate evaluation and recruiter decision-making.",
      "Architected scalable LLM-powered pipelines for candidate intelligence, combining resume parsing, structured candidate data, job requirements, and recruiting activity to generate contextual applicant insights and recommendations.",
      "Designed agentic AI workflows with structured outputs, validation, orchestration, and human-in-the-loop controls, transforming unstructured candidate data into reliable signals consumable directly by recruiting workflows.",
      "Engineered AI-powered resume intelligence to audit candidate materials, identify inconsistencies and anomalous patterns, and surface potential indicators of AI-generated or suspicious applications for recruiter review.",
      "Built contextual summarization systems synthesizing resumes, candidate profiles, recruiter notes, communications, and activity history into concise, decision-ready intelligence for recruiters and hiring managers.",
      "Architected asynchronous processing, API integrations, observability, fault-tolerant workflows, and data-validation layers to reliably operate AI workloads within a high-volume SaaS environment.",
      "Drove engineering decisions across AI infrastructure, backend services, data pipelines, security, scalability, and production reliability, balancing model capabilities with latency, cost, accuracy, and operational constraints.",
      "Partnered cross-functionally with product and engineering stakeholders to translate recruiting-domain requirements into production-grade AI capabilities, establishing the technical foundation for continued expansion of intelligent recruiting features.",
    ],
  },
  {
    slug: "carvana",
    title: "Senior Full-Stack Engineer (Contract)",
    company: "Carvana",
    initial: "C",
    period: "Oct 2020 – Sep 2023",
    duration: "3 yrs",
    product: "Automotive Commerce, Valuation, and Logistics Platform",
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
    bullets: [
      "Contributed to the development of Levelset’s core construction payment platform using Python, Django, JavaScript/jQuery, PostgreSQL, Redis, and AWS.",
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
    bullets: [
      "Developed internal tracking dashboards and automation tools using C#, SQL Server, and JavaScript to streamline IT operations.",
      "Built custom scripts and integrations for network monitoring, log processing, infrastructure tracking, and uptime reporting.",
      "Automated operational tasks and data collection to improve infrastructure visibility and reduce manual IT administration.",
    ],
  },
];

export type WorkMetric = { value: string; label: string };

export type WorkItem = {
  slug: string;
  tag: string;
  metric: string;
  title: string;
  description: string;
  featured?: boolean;
  image?: string;
  role: string;
  period: string;
  stack: string[];
  summary: string;
  metrics: WorkMetric[];
  highlights: string[];
};

export const selectedWork: WorkItem[] = [
  {
    slug: "withconflux",
    tag: "CURRENT",
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
      { value: "30–50%", label: "vendor spend removed" },
      { value: "1", label: "SDK across all providers" },
      { value: "BYOK", label: "and managed plans" },
    ],
    highlights: [
      "Architected the gateway in TypeScript, Go, and Redis to aggregate and route requests across content-AI providers under high concurrency.",
      "Built a content-hash deduplication engine and smart router that cuts client vendor costs 30–50% via automated caching and real-time cost and health scoring.",
      "Shipped a developer console in Next.js App Router with real-time telemetry, interactive API key management, and configurable spend caps.",
      "Designed multi-provider failover and unified SDKs supporting both managed subscriptions and enterprise bring-your-own-key setups.",
    ],
  },
  {
    slug: "breezy-ai-advisor",
    tag: "FOUNDING ENGINEER",
    metric: "+$11M valuation",
    title: "Breezy AI Advisor",
    description:
      "Agentic recommendation system with tool-calling that reads client books and surfaces financial moves.",
    role: "AI Product Engineer",
    period: "Sep 2023 – Jun 2026",
    stack: ["TypeScript", "Python", "LLM tool-calling", "RAG", "PostgreSQL"],
    summary:
      "An agentic advisor that reads a client’s books, decides which tools to call, and surfaces the financial moves worth making. It carried the company from a $4M to a $15M valuation in nine months, built as the sole founding engineer.",
    metrics: [
      { value: "$4M → $15M", label: "valuation in 9 months" },
      { value: "1", label: "founding engineer" },
      { value: "Agentic", label: "tool-calling core" },
    ],
    highlights: [
      "Sole founding engineer: owned architecture, delivery, and production operations end to end.",
      "Built the agentic recommendation loop with tool-calling over live client financial data.",
      "Grew company valuation from $4M to $15M in nine months on the back of the shipped product.",
    ],
  },
  {
    slug: "carvana-logistics-engine",
    tag: "CONTRACT",
    metric: "$900K/yr saved",
    title: "Carvana Logistics Engine",
    description:
      "Last-mile scheduling system optimizing driver routes and transport schedules nationwide.",
    role: "AI Engineer (Contract)",
    period: "Oct 2020 – Sep 2023",
    stack: ["Python", "ML routing", "PostgreSQL", "AWS"],
    summary:
      "A nationwide last-mile scheduler that plans driver routes and transport windows against real constraints: vehicle availability, delivery promises, and driver hours. It replaces manual dispatch decisions with optimized ones.",
    metrics: [
      { value: "$900K", label: "saved per year" },
      { value: "Nationwide", label: "delivery coverage" },
      { value: "Last-mile", label: "route optimization" },
    ],
    highlights: [
      "Built the routing and scheduling engine behind nationwide last-mile delivery.",
      "Optimized driver routes and transport schedules against live capacity constraints.",
      "Cut roughly $900K/year out of logistics cost through better scheduling decisions.",
    ],
  },
  {
    slug: "susco-modernization",
    tag: "TEAM LEAD",
    metric: "40% fewer defects",
    title: "Susco Modernization",
    description:
      "Led 10+ engineers rebuilding legacy portals with strict typing, CI/CD, and real-time GraphQL.",
    featured: true,
    image: "/work-platform.jpg",
    role: "Tech Lead & Principal Full-Stack Engineer",
    period: "Nov 2016 – Sep 2020",
    stack: ["TypeScript", "React", "GraphQL", "CI/CD", "PostgreSQL"],
    summary:
      "A multi-year rebuild of legacy client portals, run with a team of ten-plus engineers. Strict typing, real CI/CD, and real-time GraphQL replaced ad-hoc code and manual releases, and production defects fell by 40%.",
    metrics: [
      { value: "40%", label: "fewer production defects" },
      { value: "10+", label: "engineers led" },
      { value: "4 yrs", label: "of platform ownership" },
    ],
    highlights: [
      "Led a team of 10+ engineers through a full legacy-to-modern portal rebuild.",
      "Introduced strict typing standards and CI/CD pipelines as team-wide defaults.",
      "Moved client-facing data to real-time GraphQL, cutting production defect rates 40%.",
    ],
  },
  {
    slug: "vehicle-visualizer",
    tag: "WEBGL",
    metric: "+$22M/yr",
    title: "Vehicle Visualizer",
    description:
      "Interactive React/WebGL vehicle visualizer built to lift conversion on Carvana’s storefront.",
    role: "AI Engineer (Contract)",
    period: "Oct 2020 – Sep 2023",
    stack: ["React", "WebGL", "TypeScript"],
    summary:
      "An interactive WebGL vehicle viewer on the storefront: shoppers rotate, inspect, and configure a real car in the browser before buying. Part of the ML and LLM work that contributed $22.9M/year in business impact.",
    metrics: [
      { value: "$22M/yr", label: "business impact" },
      { value: "WebGL", label: "in-browser rendering" },
      { value: "Storefront", label: "conversion surface" },
    ],
    highlights: [
      "Built the interactive React/WebGL vehicle visualizer for the consumer storefront.",
      "Tuned rendering for conversion on the highest-traffic surface in the funnel.",
      "Contributed to $22.9M/year in measured business impact across the platform.",
    ],
  },
  {
    slug: "levelset-document-pipeline",
    tag: "SCALE",
    metric: "60% faster",
    title: "Levelset Document Pipeline",
    description:
      "Async processing pipeline for legal and title documents, backed by indexed Postgres and Celery/Redis.",
    role: "Senior Full-Stack Developer",
    period: "Jan 2014 – Oct 2016",
    stack: ["Python", "Celery", "Redis", "PostgreSQL"],
    summary:
      "Legal and title documents used to process synchronously and slowly. Moving the work onto Celery and Redis with a properly indexed Postgres schema made the whole pipeline 60% faster and let it absorb load spikes without user-visible delay.",
    metrics: [
      { value: "60%", label: "faster processing" },
      { value: "Async", label: "Celery + Redis queue" },
      { value: "Indexed", label: "Postgres schema" },
    ],
    highlights: [
      "Rebuilt legal and title document processing as an async, queue-backed pipeline.",
      "Indexed the Postgres schema around the real query patterns driving the slowdowns.",
      "Sped up end-to-end document processing by 60%.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Systems Engineering",
  school: "Thomas Edison State University",
  period: "1999 – 2003",
};
