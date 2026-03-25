import { defineConfig } from "astro/config";

const site =
  process.env.PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://clawsome.example";

const base = process.env.BASE_PATH || "/";

export default defineConfig({
  site,
  base,
  build: {
    format: "directory"
  }
});
