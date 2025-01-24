import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import tailwindcssNesting from 'tailwindcss/nesting'

import vercel from '@astrojs/vercel';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
  }), mdx(), sitemap()],

  vite: {
    css: {
      postcss: {
        plugins: [tailwindcssNesting()]
      }
    }
  },

  redirects: {
    '/survey': "/vote"
  },

  output: 'server',
  adapter: vercel()
});