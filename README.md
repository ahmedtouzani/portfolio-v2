# Ahmed Touzani — Portfolio

A fast, dark-tech portfolio for **Ahmed Touzani** — Systems Architect & Full-Stack Developer building for the age of AI agents. Built with **Astro 5** + **Tailwind CSS v4**.

## ✨ Highlights

- **Single-page**, fully responsive, accessible (reduced-motion aware).
- **Content-driven**: edit one file — [`src/data/site.ts`](src/data/site.ts) — to update profile, skills, and projects.
- **Sections**: Hero · About · *The new AI era* (agentic approach) · Skills · Work · Contact.
- **Design**: cinematic dark theme, cyan→emerald→violet gradients, a Moroccan *zellige*-inspired geometric motif (a nod to Oujda), scroll-reveal animations, and a tech ticker.

## 🧩 Featured work

| Project | What it is | Stack |
|---|---|---|
| **Resvyo** | AI resume optimizer that tailors a CV to a company's ATS and proves the gain | Next.js 16, FastAPI, PostgreSQL, Redis, Stripe |
| **dropship-intel** | Autonomous engine that hunts winning products by *acceleration* | Python, Supabase, pg_cron, OpenAI |
| **Agentic Workspace** | Custom Claude Code agents, skills & hooks for reliable LLM workflows | Node.js, MCP |

…plus real-time systems (Mafia Game), bots (Parallel Master, Raymond), and Python TUIs.

## 🚀 Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static site to ./dist
npm run preview    # preview the production build
```

> Requires Node.js 18+ (developed on Node 26).

## ▲ Deploy to Vercel

Astro builds a static site, which Vercel auto-detects.

1. Push this folder to a GitHub repo.
2. Import it on [vercel.com](https://vercel.com/new) — framework preset **Astro** is detected automatically.
3. Build command `npm run build`, output directory `dist`. Deploy.

Or from the CLI:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

## 📁 Structure

```
src/
  data/site.ts          # ← all content lives here
  layouts/Layout.astro  # <head>, fonts, scroll-reveal
  components/            # Nav, Hero, Ticker, About, Approach, Skills, Work, Contact, Footer
  styles/global.css     # design tokens + utilities (Tailwind v4)
public/favicon.svg
```

## ✏️ Editing content

Everything visible is in `src/data/site.ts`:

- `profile` — name, role, tagline, links.
- `stats` — the hero counters.
- `skills` — capability groups.
- `agentic` — the "new AI era" pillars.
- `projects` — each card (set `featured: true` to surface it at the top, `isPrivate: true` to show a lock instead of a repo link).

---

© Ahmed Touzani · Oujda, Morocco 🇲🇦
