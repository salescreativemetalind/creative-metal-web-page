#!/usr/bin/env node
/**
 * Sitemap generator for Creative Metal Industries — SINGLE FLAT SITEMAP.
 *
 * Emits ONE file: public/sitemap.xml containing every indexable route.
 * robots.txt points at https://www.creativemetalind.com/sitemap.xml
 *
 * A page is included unless it opts out with a robots "noindex" meta tag
 * (admin + 404 do). Dynamic ([...]) and private (_) routes and the api dir
 * are skipped.
 *
 * Run after adding/removing pages:  npm run sitemap
 */
import { readdirSync, readFileSync, writeFileSync, existsSync, rmSync } from "fs";
import { join } from "path";

const ROOT = import.meta.dirname;
const SITE_URL = "https://www.creativemetalind.com";
const ROUTES_DIR = join(ROOT, "src/routes");
const PUBLIC_DIR = join(ROOT, "public");

// ── collect concrete route files → slug ───────────────────────────────────────
function collectRoutes(dir, prefix = "") {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const name = entry.name;
    if (name.startsWith("[") || name.startsWith("_") || name === "api" || name === "admin") continue;
    const abs = join(dir, name);
    if (entry.isDirectory()) {
      out.push(...collectRoutes(abs, `${prefix}/${name}`));
      continue;
    }
    if (!/\.(tsx|ts)$/.test(name) || name === "app.tsx") continue;
    const contents = readFileSync(abs, "utf8");
    // Skip pages that opt out of indexing.
    if (/content="noindex/.test(contents)) continue;
    let slug = name.replace(/\.(tsx|ts)$/, "");
    if (slug === "index") slug = "";
    let url = `${prefix}/${slug}`.replace(/\/+/g, "/");
    if (url.length > 1) url = url.replace(/\/$/, "");
    if (url === "") url = "/";
    out.push(url);
  }
  return out;
}

// ── priority / changefreq rules ───────────────────────────────────────────────
// Hub pages get the highest priority; single-grade product pages next;
// utility/legal pages lowest.
const HUBS = new Set([
  "/ss-304-316l-pipe-supplier-india", "/ss-seamless-pipe-supplier-india",
  "/ss-sheet-supplier-vadodara", "/carbon-steel-pipe-supplier-india",
  "/alloy-steel-pipe-supplier-india", "/duplex-steel-supplier-vadodara",
  "/inconel-pipe-supplier-india", "/hastelloy-pipe-supplier-india",
  "/titanium-pipe-supplier-india", "/ms-plate-supplier-india",
]);
const UTILITY = new Set(["/products", "/about", "/reviews", "/sitemap", "/privacy-policy", "/terms"]);

function meta(slug) {
  if (slug === "/") return { p: "1.0", c: "weekly" };
  if (slug === "/privacy-policy" || slug === "/terms") return { p: "0.2", c: "yearly" };
  if (slug === "/sitemap") return { p: "0.3", c: "yearly" };
  if (slug === "/about") return { p: "0.4", c: "yearly" };
  if (slug === "/reviews" || slug === "/products") return { p: "0.5", c: "monthly" };
  if (HUBS.has(slug)) return { p: "0.9", c: "monthly" };
  return { p: "0.8", c: "monthly" }; // all other product/keyword pages
}

// ── build model ───────────────────────────────────────────────────────────────
const slugs = [...new Set(collectRoutes(ROUTES_DIR))].sort((a, b) => {
  if (a === "/") return -1;
  if (b === "/") return 1;
  return a.localeCompare(b);
});

const urlXml = (slug) => {
  const { p, c } = meta(slug);
  return `  <url><loc>${SITE_URL}${slug === "/" ? "/" : slug}</loc><changefreq>${c}</changefreq><priority>${p}</priority></url>`;
};

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${slugs.map(urlXml).join("\n")}
</urlset>
`;

writeFileSync(join(PUBLIC_DIR, "sitemap.xml"), xml);

// ── remove any legacy split sitemaps so there is ONE source of truth ──────────
for (const f of [
  "sitemap-index.xml", "sitemap-pages.xml", "sitemap-products.xml",
  "sitemap-locations.xml", "sitemap-blog-charts.xml", "sitemap-blog-comparisons.xml",
  "sitemap-blog-guides.xml", "sitemap-blog-industry.xml", "sitemap-blog-misc.xml",
  "sitemap-blog-prices.xml", "sitemap-blog-specs.xml",
]) {
  const p = join(PUBLIC_DIR, f);
  if (existsSync(p)) { rmSync(p); console.log(`  removed legacy ${f}`); }
}

console.log(`\n✅ Single sitemap generated: public/sitemap.xml (${slugs.length} URLs).`);
console.log(`   robots.txt should point at ${SITE_URL}/sitemap.xml`);
