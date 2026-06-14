// ─────────────────────────────────────────────────────────────
// Single source of truth for portfolio content.
// Edit here to update the site — components read from this file.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ahmed Touzani',
  handle: 'ahmedtouzani',
  role: 'Systems Architect & Full-Stack Developer',
  location: 'Oujda, Morocco',
  avatar: 'https://avatars.githubusercontent.com/u/102236436?v=4',
  // Headline framed around the user's request: the new era of AI & agents
  tagline: 'I build full-stack products and autonomous systems for the age of AI agents.',
  intro:
    'Systems architect and full-stack developer shipping production software end to end — from React/Next.js front ends to Python & Node back ends. My focus is the new wave of AI: LLM-powered products, autonomous agents that act on their own, and the agentic engineering that makes them reliable.',
  email: 'sofyaneahmed333@gmail.com',
  github: 'https://github.com/ahmedtouzani',
  huggingface: 'https://huggingface.co/ahmedtouzani39',
  resumeNote: 'Open to AI engineering, agentic systems & full-stack roles.',
};

export const stats = [
  { value: '18', label: 'Repositories' },
  { value: '2', label: 'Production AI apps' },
  { value: '149+', label: 'Tests passing' },
  { value: '5+', label: 'Languages shipped' },
];

// Tech ticker — runs across the page as a marquee
export const ticker = [
  'Python', 'TypeScript', 'Next.js 16', 'React 19', 'FastAPI', 'Node.js',
  'PostgreSQL', 'Redis', 'Supabase', 'Docker', 'OpenAI', 'Claude / Agents',
  'Stripe', 'Socket.io', 'Tailwind', 'Astro', 'MCP', 'pg_cron', 'pytest',
];

export const skills = [
  {
    title: 'AI & Autonomous Agents',
    accent: 'cyan',
    items: [
      'LLM application design',
      'Autonomous / agentic systems',
      'Agentic engineering (Claude Code)',
      'OpenAI API & tool use',
      'Prompt engineering',
      'MCP server integration',
      'Cost-aware LLM pipelines',
      'RAG & retrieval',
    ],
  },
  {
    title: 'Frontend',
    accent: 'violet',
    items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Astro', 'Real-time UIs'],
  },
  {
    title: 'Backend & APIs',
    accent: 'emerald',
    items: ['Python 3.11+', 'FastAPI', 'Node.js', 'REST APIs', 'WebSockets / Socket.io', 'Auth & Stripe billing'],
  },
  {
    title: 'Data & Infrastructure',
    accent: 'amber',
    items: ['PostgreSQL', 'Redis', 'Supabase + pg_cron', 'Docker & Compose', 'Background jobs', 'pytest / CI'],
  },
];

// Pillars of the "new AI era" narrative — the differentiator section
export const agentic = [
  {
    n: '01',
    title: 'Autonomous by design',
    body: 'Systems that run themselves. dropship-intel hunts winning products on a schedule with pg_cron — you configure niches once and never paste a URL again.',
  },
  {
    n: '02',
    title: 'LLMs in production',
    body: 'Real apps, not demos. Resvyo blends LLM reasoning with deterministic scoring to tailor and prove CV improvements against a real ATS, behind Stripe billing.',
  },
  {
    n: '03',
    title: 'Agentic engineering',
    body: 'I build the tooling that makes agents reliable — custom Claude Code agents, skills, and hooks for context budgeting, cost-aware pipelines, and repeatable workflows.',
  },
  {
    n: '04',
    title: 'Measured & tested',
    body: 'Autonomy without trust is a liability. Every flagship ships with a real test suite — 69 and 80 passing tests across the two AI platforms — so behavior stays verifiable.',
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  category: 'AI & Autonomous Systems' | 'Real-Time & Full-Stack' | 'Bots & Automation' | 'Developer Tools';
  stack: string[];
  isPrivate: boolean;
  repo: string | null;
  demo: string | null;
  tests?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Resvyo',
    tagline: 'ATS-Targeted CV Builder',
    description:
      'AI-powered resume optimizer that tailors a CV to a specific company\'s Applicant Tracking System — then proves the gain with a real, company-weighted match score. Full-stack SaaS with auth, billing, and a dockerized backend.',
    category: 'AI & Autonomous Systems',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'Stripe', 'Docker', 'OpenAI'],
    isPrivate: true,
    repo: null,
    demo: null,
    tests: '69 backend tests',
    featured: true,
  },
  {
    name: 'dropship-intel',
    tagline: 'Autonomous Product-Hunting Engine',
    description:
      'A private intelligence platform that hunts winning dropshipping products on its own — discovering stores, tracking sales velocity and ad spend, and ranking by acceleration (the second derivative) to catch products before they saturate.',
    category: 'AI & Autonomous Systems',
    stack: ['Python 3.14', 'Next.js', 'Supabase', 'pg_cron', 'OpenAI', 'pytest'],
    isPrivate: true,
    repo: null,
    demo: null,
    tests: '80 tests',
    featured: true,
  },
  {
    name: 'Agentic Engineering Workspace',
    tagline: 'Claude Code agents, skills & hooks',
    description:
      'A production agentic-engineering environment: custom agents, skills, and hooks that make LLM workflows reliable — context budgeting, cost-aware LLM pipelines, and repeatable autonomous workflows wired into MCP servers.',
    category: 'AI & Autonomous Systems',
    stack: ['Claude Code', 'Node.js', 'Agents', 'Skills', 'Hooks', 'MCP'],
    isPrivate: true,
    repo: null,
    demo: null,
    featured: true,
  },
  {
    name: 'Mafia Game',
    tagline: 'Real-time multiplayer · Moroccan Edition',
    description:
      'A scalable, real-time multiplayer take on the classic party game. Built on a strict server-authoritative state machine — clients only emit intents, the server is the single source of truth — for anti-cheat resilience and instant sync.',
    category: 'Real-Time & Full-Stack',
    stack: ['React', 'Vite', 'Node.js', 'Socket.io'],
    isPrivate: true,
    repo: null,
    demo: null,
  },
  {
    name: 'MedicalTracker',
    tagline: 'Health tracking web app',
    description:
      'A web application for tracking medical and health data with a clean, accessible interface and a lightweight Python-backed layer.',
    category: 'Real-Time & Full-Stack',
    stack: ['HTML', 'JavaScript', 'Python', 'CSS'],
    isPrivate: true,
    repo: null,
    demo: null,
  },
  {
    name: 'Parallel Master Bot',
    tagline: 'Modern Discord management bot',
    description:
      'A powerful, modern Discord bot for server management, moderation, and utility — branded embed UX, a custom command system, an owner control panel, live usage statistics, and auto-restart via PM2.',
    category: 'Bots & Automation',
    stack: ['Node.js', 'Discord.js', 'MongoDB', 'PM2'],
    isPrivate: true,
    repo: null,
    demo: null,
  },
  {
    name: 'Raymond',
    tagline: 'Discord server assistant',
    description:
      'A Discord bot that makes managing your server quick and easy, with an in-chat help system and straightforward command UX.',
    category: 'Bots & Automation',
    stack: ['JavaScript', 'Discord.js', 'Node.js'],
    isPrivate: false,
    repo: 'https://github.com/ahmedtouzani/Raymond',
    demo: null,
  },
  {
    name: 'Terminal Tools Suite',
    tagline: 'Rich-UI terminal utilities',
    description:
      'A collection of beautiful terminal utilities with a rich UI for system administration and monitoring — practical CLIs that make the terminal pleasant to live in.',
    category: 'Developer Tools',
    stack: ['Python', 'Rich', 'CLI'],
    isPrivate: false,
    repo: 'https://github.com/ahmedtouzani/Terminal-Tools-Suite',
    demo: null,
  },
  {
    name: 'Weather Dashboard',
    tagline: 'Terminal weather, beautifully animated',
    description:
      'A terminal-based weather dashboard with real-time data and smooth animations — a polished example of what a thoughtful TUI can feel like.',
    category: 'Developer Tools',
    stack: ['Python', 'Rich', 'APIs'],
    isPrivate: false,
    repo: 'https://github.com/ahmedtouzani/weather-dashboard',
    demo: null,
  },
];

export const categories = [
  'AI & Autonomous Systems',
  'Real-Time & Full-Stack',
  'Bots & Automation',
  'Developer Tools',
] as const;
