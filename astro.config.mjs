import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://darling-strudel-4b385d.netlify.app/",
  integrations: [preact()]
});