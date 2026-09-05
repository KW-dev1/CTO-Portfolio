export const profile = {
  name: "Kenneth Webber",
  title: "Senior AI & Full-Stack Engineer",
  subtitle: "Tech Lead & Co-Founder",
  location: "Louisiana, USA",
  timezone: "GMT-6",
  availability: "Open to remote",
  availabilityEyebrow: "AVAILABLE · REMOTE ROLES",
  yearsExperience: 23,
  email: "hello@kennethwebber.dev",
  linkedin: "https://www.linkedin.com/in/kenneth-webber-a16032423/",
  github: "https://github.com/kw-dev1",
  building: "A unified content-AI gateway that cuts vendor spend 30–50%.",
};

export const about = {
  headline: "I build the systems other engineers build on top of.",
  body: "22+ years writing production software, most of it backend and infrastructure work that nobody sees until it breaks. I've been the founding engineer, the tech lead, and the person paged at 2am — usually all three at once. These days that means agentic AI systems, API gateways, and the unglamorous plumbing that makes the flashy parts of a product actually work.",
};

export const quote = {
  text: "The best infrastructure is the kind nobody has to think about.",
  attribution: "— a principle earned the hard way, on-call",
};

export const stats: { value: string; unit: string; label: string }[] = [
  { value: "23+", unit: "yrs", label: "Years shipping" },
];

export const currentRole = {
  company: "withConflux",
  url: "https://withconflux.com",
  role: "Co-Founder & Lead AI/Infrastructure Engineer",
  period: "Aug 2026 – Present",
  location: "Remote",
  product: "Unified Content-AI Gateway and Smart Routing Platform",
  bullets: [
    "Co-founded and architected withConflux, a high-concurrency API gateway built in TypeScript, Go, and Redis to aggregate and route requests across content-AI providers.",
    "Engineered a content-hash deduplication engine and smart router that reduces client vendor costs by 30–50% through automated caching and real-time cost and health evaluation of providers.",
    "Designed a developer console in Next.js (App Router), Tailwind CSS, and TanStack Query, featuring real-time telemetry dashboards, interactive API key management, and configurable spend-cap controls.",
    "Architected multi-provider failover logic and unified SDKs supporting managed subscriptions and enterprise Bring-Your-Own-Key (BYOK) configurations.",
  ],
};

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

export type SkillCategory = { title: string; caption: string; items: string[] };

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    caption: "Daily drivers",
    items: ["TypeScript", "Python", "Go", "Rust", "SQL", "C#"],
  },
  {
    title: "Frontend",
    caption: "Most of my screen time",
    items: ["React", "Next.js", "Tailwind CSS", "TanStack Query"],
  },
  {
    title: "Backend & data",
    caption: "Where the systems live",
    items: ["Node.js", "NestJS", "FastAPI", "PostgreSQL", "Redis"],
  },
  {
    title: "AI & agentic frameworks",
    caption: "What I ship on today",
    items: ["LangChain", "OpenAI & Anthropic APIs", "RAG", "Tool use"],
  },
  {
    title: "Cloud & infrastructure",
    caption: "Where it all deploys",
    items: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "Testing & quality",
    caption: "Confidence before shipping",
    items: ["Playwright", "Vitest", "PyTest"],
  },
];

export type ExperienceEntry = {
  company: string;
  initial: string;
  role: string;
  period: string;
  highlight: string;
};

export const experience: ExperienceEntry[] = [
  {
    company: "Breezy Software Inc.",
    initial: "B",
    role: "AI Product Engineer",
    period: "Sep 2023 – Jun 2026",
    highlight: "Sole founding engineer; grew company valuation from $4M to $15M in 9 months.",
  },
  {
    company: "Carvana",
    initial: "C",
    role: "AI Engineer (Contract)",
    period: "Oct 2020 – Sep 2023",
    highlight: "ML and LLM integrations across the platform contributed $22.9M/year in business impact.",
  },
  {
    company: "Susco Solutions",
    initial: "S",
    role: "Tech Lead & Principal Full-Stack Engineer",
    period: "Nov 2016 – Sep 2020",
    highlight: "Led a team of 10+ engineers; cut production defect rates by 40% with CI/CD and typing standards.",
  },
  {
    company: "Levelset (acquired by Procore)",
    initial: "L",
    role: "Senior Full-Stack Developer",
    period: "Jan 2014 – Oct 2016",
    highlight: "Sped up legal document processing by 60% through indexing and async task queuing.",
  },
  {
    company: "General Informatics",
    initial: "G",
    role: "Senior Systems & Software Engineer",
    period: "Mar 2010 – Dec 2013",
    highlight: "Cut client infrastructure costs 30% through legacy consolidation and containerized deployments.",
  },
  {
    company: "LookFar Labs",
    initial: "L",
    role: "Full-Stack Software Engineer",
    period: "Aug 2007 – Feb 2010",
    highlight: "Built MVPs directly with startup founders, from domain modeling to production deploy.",
  },
  {
    company: "InfoTECH Solutions",
    initial: "I",
    role: "Software Engineer",
    period: "Jun 2005 – Jul 2007",
    highlight: "Built internal tracking dashboards and network log monitoring automation.",
  },
  {
    company: "S1 Technology",
    initial: "S",
    role: "Junior Web Developer",
    period: "Jun 2003 – May 2005",
    highlight: "First engineering role — responsive forms and admin tooling across client software installs.",
  },
];

export const education = {
  school: "Thomas Edison State University",
  degree: "B.S. in Systems Engineering",
  period: "1999 – 2003",
};
