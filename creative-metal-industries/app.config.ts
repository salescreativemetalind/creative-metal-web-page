import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  ssr: true,
  server: {
    preset: "vercel",
    // Remove trailing slashes to prevent duplicate URL indexing
    prerender: {
      crawlLinks: true,
    },
  },
});
