import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [mdx(), react()],
  devToolbar: { enabled: false },
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH,
});
