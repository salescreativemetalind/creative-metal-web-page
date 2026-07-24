#!/usr/bin/env node
/**
 * Sitemap Generator for Creative Metal Industries
 * Scans src/routes/ and generates a complete sitemap.xml
 * Run: node generate-sitemap.mjs
 */
import { readdirSync, writeFileSync } from "fs";
import { join } from "path";

const SITE_URL = "https://www.creativemetalind.com";
const ROUTES_DIR = join(import.meta.dirname, "src/routes");
const OUTPUT = join(import.meta.dirname, "public/sitemap.xml");
const TODAY = new Date().toISOString().split("T")[0];

// Priority rules
function getPriority(slug) {
  if (slug === "/") return "1.0";
  if (slug === "/about" || slug === "/products" || slug === "/blog") return "0.8";
  if (slug.startsWith("/blog/")) return "0.6";
  if (slug.includes("supplier") || slug.includes("steel-")) return "0.7";
  return "0.5";
}

function getChangefreq(slug) {
  if (slug === "/" || slug.startsWith("/blog/") && slug.includes("price")) return "weekly";
  if (slug.startsWith("/blog/")) return "monthly";
  return "monthly";
}

// Collect all route files
function getRoutes(dir, prefix = "") {
  const routes = [];
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith("[") || entry.name.startsWith("_")) continue;
    if (entry.name === "api") continue; // skip API routes

    if (entry.isDirectory()) {
      const subRoutes = getRoutes(join(dir, entry.name), `${prefix}/${entry.name}`);
      routes.push(...subRoutes);
    } else if (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) {
      // Skip non-page files
      if (entry.name.endsWith(".css") || entry.name === "app.tsx") continue;

      let slug = entry.name.replace(/\.(tsx|ts)$/, "");
      if (slug === "index") slug = "";
      const fullPath = `${prefix}/${slug}`.replace(/\/+/g, "/") || "/";
      routes.push(fullPath);
    }
  }
  return routes;
}

const routes = getRoutes(ROUTES_DIR);

// Sort: homepage first, then alphabetical
routes.sort((a, b) => {
  if (a === "/") return -1;
  if (b === "/") return 1;
  return a.localeCompare(b);
});

// Generate XML
const urls = routes.map(slug => `  <url>
    <loc>${SITE_URL}${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${getChangefreq(slug)}</changefreq>
    <priority>${getPriority(slug)}</priority>
  </url>`).join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(OUTPUT, sitemap);
console.log(`✅ Sitemap generated with ${routes.length} URLs → public/sitemap.xml`);
