import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  ssr: true,
  server: {
    preset: "vercel",
    // Remove trailing slashes to prevent duplicate URL indexing
    prerender: {
      crawlLinks: true,
      routes: [
        "/steel-pipe-supplier-chennai",
        "/steel-pipe-supplier-hyderabad",
        "/steel-pipe-supplier-bangalore",
        "/steel-pipe-supplier-kolkata",
        "/steel-pipe-supplier-delhi",
      ],
    },
  },
});
