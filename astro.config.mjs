// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Actions sets GITHUB_PAGES=true so the project deploys under /portfolio-v2.
// Any other host (Vercel, local) serves from the root.
const isGhPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGhPages ? 'https://ahmedtouzani.github.io' : 'https://ahmed-touzani.vercel.app',
  base: isGhPages ? '/portfolio-v2' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
