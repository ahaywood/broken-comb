import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import tailwindcssNesting from 'tailwindcss/nesting'

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
  }),
  ],

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