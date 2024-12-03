import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import tailwindcssNesting from 'tailwindcss/nesting'
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
  }),
    svelte(),
  ],
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcssNesting()]
      }
    }
  }
});