// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://philipp-boehm.com', // Deine Domain
  integrations: [
    tailwind({
      // Wichtig: Wendet Styles automatisch auf alle Seiten an
      applyBaseStyles: true, 
    }),
  ],
});