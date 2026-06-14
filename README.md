<div align="center">

<!-- ────────────────  ANIMATED BANNER  ──────────────── -->
<a href="https://github.com/ahmedtouzani">
  <img src="https://readme-typing-svg.demolab.com?font=Space+Grotesk&weight=700&size=34&duration=2600&pause=900&color=22D3EE&center=true&vCenter=true&width=820&height=70&lines=Ahmed+Touzani;Systems+Architect+%26+Full-Stack+Developer;Building+for+the+age+of+AI+agents.;Autonomous+systems+%C2%B7+LLM+products+%C2%B7+Agentic+eng." alt="Ahmed Touzani" />
</a>

<br/>

**The portfolio of a developer who builds software that _thinks, decides, and acts_.**
Dark-tech, fast, and zero-template — engineered, not generated.

<br/>

<!-- ────────────────  TECH BADGES  ──────────────── -->
[![Astro](https://img.shields.io/badge/Astro-6-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-22d3ee?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<br/>

[**🌐 Live site**](https://ahmed-touzani.vercel.app) &nbsp;·&nbsp; [**The AI era**](#-the-new-ai-era) &nbsp;·&nbsp; [**Work**](#-selected-work) &nbsp;·&nbsp; [**Stack**](#-tech-arsenal) &nbsp;·&nbsp; [**Run it**](#-run-it-locally) &nbsp;·&nbsp; [**Connect**](#-connect)

</div>

---

## ◣ whoami

```ts
const ahmed = {
  role:     "Systems Architect & Full-Stack Developer",
  base:     "Oujda, Morocco 🇲🇦",
  focus:    ["AI agents", "autonomous systems", "full-stack products"],
  stack:    ["Python", "TypeScript", "FastAPI", "Next.js", "PostgreSQL"],
  building: "software that does real work without being babysat",
};
```

I don't ship chatbots — I ship **systems that act**. From an AI résumé engine behind
Stripe billing, to an autonomous product-hunter that runs on a `pg_cron` heartbeat,
to the agentic tooling that keeps LLM workflows reliable. This repo is the portfolio
that tells that story.

---

## ✦ The new AI era

> The shift isn't smarter autocomplete. It's software that **decides and acts** — and earns your trust by being measured.

| Principle | What it means in my work |
|:--|:--|
| 🤖 **Autonomous by design** | `dropship-intel` hunts winning products on a schedule — configure niches *once*, never paste a URL again. |
| 🧠 **LLMs in production** | `Resvyo` blends LLM reasoning with deterministic scoring to *prove* a CV improvement, not just claim it. |
| 🛠️ **Agentic engineering** | Custom Claude Code agents, skills & hooks for context budgeting and cost-aware LLM pipelines. |
| ✅ **Measured & tested** | Autonomy without trust is a liability — flagships ship with **149+ passing tests**. |

---

## ◆ Selected work

<table>
  <tr>
    <td width="50%" valign="top">

### 🧬 Resvyo — ATS-Targeted CV Builder
AI résumé optimizer that tailors a CV to a company's ATS and **proves the gain** with a company-weighted match score.

`Next.js 16` · `FastAPI` · `PostgreSQL` · `Redis` · `Stripe` · `OpenAI`
🔒 Private · ✅ 69 backend tests

  </td>
  <td width="50%" valign="top">

### 🛰️ dropship-intel — Autonomous Engine
Hunts winning products on its own, ranking by **acceleration** (the 2nd derivative) to catch them *before* saturation.

`Python 3.14` · `Next.js` · `Supabase` · `pg_cron` · `OpenAI`
🔒 Private · ✅ 80 tests

  </td>
  </tr>
  <tr>
  <td width="50%" valign="top">

### 🎭 Mafia Game — Real-time multiplayer
Server-authoritative state machine for anti-cheat resilience and instant sync.

`React` · `Vite` · `Node.js` · `Socket.io`
🔒 Private

  </td>
  <td width="50%" valign="top">

### 🧰 Terminal Tools & Weather Dashboard
Beautiful, rich-UI Python TUIs for sysadmin, monitoring, and real-time weather.

`Python` · `Rich`
🌐 [Open source](https://github.com/ahmedtouzani?tab=repositories)

  </td>
  </tr>
</table>

> …plus Discord automation (Parallel Master, Raymond) and the agentic-engineering workspace. Private repos are described in full on the [live site](https://ahmed-touzani.vercel.app); open-source ones link straight to code.

---

## ⚙ Tech arsenal

```text
AI / Agents   ▸  LLM apps · Autonomous systems · Claude Code · OpenAI · MCP · RAG
Frontend      ▸  Next.js 16 · React 19 · TypeScript · Tailwind · Astro
Backend       ▸  Python · FastAPI · Node.js · REST · WebSockets
Data / Infra  ▸  PostgreSQL · Redis · Supabase + pg_cron · Docker · Stripe
```

<div align="center">

![Top languages](https://github-readme-stats.vercel.app/api/top-langs/?username=ahmedtouzani&layout=compact&theme=tokyonight&hide_border=true&bg_color=07070a&title_color=22d3ee&text_color=b9bcc9)

</div>

---

## ▲ This site, under the hood

A single-page **Astro 6 + Tailwind v4** build — static, fast, accessible (reduced-motion aware),
with a Moroccan *zellige*-inspired geometric motif as an identity nod to Oujda.
**All content lives in one file:** [`src/data/site.ts`](src/data/site.ts).

```
src/
 ├─ data/site.ts        # ← single source of truth (profile · skills · projects)
 ├─ layouts/            # <head>, fonts, scroll-reveal
 ├─ components/         # Nav · Hero · Ticker · About · Approach · Skills · Work · Contact · Footer
 └─ styles/global.css   # design tokens + utilities
```

## 🚀 Run it locally

```bash
git clone https://github.com/ahmedtouzani/portfolio-v2.git
cd portfolio-v2
npm install
npm run dev        # → http://localhost:4321
npm run build      # → static output in ./dist
```

> Requires Node 18+. Deploys to Vercel with zero config (framework auto-detected).
> Tip: append `?noanim` to any URL to disable reveal animations (handy for screenshots/audits).

---

## ✉ Connect

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-ahmedtouzani-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ahmedtouzani)
[![X](https://img.shields.io/badge/X-@mrah48-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/mrah48)
[![Instagram](https://img.shields.io/badge/Instagram-ah__4____8-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/ah_4__8)
[![Hugging Face](https://img.shields.io/badge/🤗_Hugging_Face-ahmedtouzani39-FFD21E?style=for-the-badge&logoColor=black)](https://huggingface.co/ahmedtouzani39)

<br/>

<sub><i>Open to AI engineering, agentic systems & full-stack roles.</i></sub>

<br/>

**Built with ◆ Astro + Tailwind · © Ahmed Touzani · Oujda, Morocco 🇲🇦**

</div>
