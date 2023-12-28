import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  alias: {
    // Alias para archivos estáticos en la carpeta public
    '@public': './public',
  },
  integrations: [tailwind()]
});