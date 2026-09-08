#!/usr/bin/env node
/**
 * Sitemap generator for Creative Metal Industries — SINGLE SOURCE OF TRUTH.
 *
 * This script generates the segmented sitemap set that robots.txt points at:
 *   public/sitemap-index.xml         (the index)
 *   public/sitemap-pages.xml         (top-level pages)
 *   public/sitemap-products.xml      (product / supplier landing pages)
 *   public/sitemap-locations.xml     (city / location supplier pages)
 *   public/sitemap-blog-prices.xml   (blog price guides)
 *   public/sitemap-blog-charts.xml   (weight / size / dimension charts + calculators)
 *   public/sitemap-blog-comparisons.xml
 *   public/sitemap-blog-specs.xml    (ASTM/ASME/API/IS/EN/NACE/IBR spec guides)
 *   public/sitemap-blog-industry.xml (industry / application / project pages)
 *   public/sitemap-blog-guides.xml   (how-to, what-is, when-to, buyer guides, etc.)
 *   public/sitemap-blog-misc.xml     (anything else)
 *
 * WHY THIS REPLACES THE OLD BEHAVIOUR:
 *   1. The previous version emitted a single flat public/sitemap.xml that
 *      DISAGREED with the committed segmented sitemaps (it listed slugs that
 *      no longer exist and used a stale date). robots.txt points at the
 *      segmented index, so two competing sitemaps caused drift. This script now
 *      owns the segmented set and deletes the stale flat file.
 *   2. lastmod is derived from each route file's last git commit date, so it
 *      reflects real content changes instead of a frozen hand-typed date.
 *      Google needs an accurate lastmod to know when to recrawl.
 *
 * Dynamic blog articles live inside src/routes/blog/[slug].tsx (one file, many
 * URLs), so their slugs are read from that file's ARTICLES map — a plain route
 * scan cannot see them.
 *
 * Run after content changes:  npm run sitemap
 * Verify against the build:    npm run check:sitemap
 */
import { readdirSync, readFileSync, writeFileSync, existsSync, rmSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";

const ROOT = import.meta.dirname;
const SITE_URL = "https://www.creativemetalind.com";
const ROUTES_DIR = join(ROOT, "src/routes");
const PUBLIC_DIR = join(ROOT, "public");
const TODAY = new Date().toISOString().split("T")[0];

// ── git lastmod, memoised ─────────────────────────────────────────────────────
// The last commit date that touched a file is the most reliable "content last
// changed" signal we have. Falls back to today when git is unavailable or the
// file is not yet committed (a brand-new page should look fresh, not stale).
const mtimeCache = new Map();
function lastmodFor(absPath) {
  if (mtimeCache.has(absPath)) return mtimeCache.get(absPath);
  let date = TODAY;
  try {
    const out = execSync(`git log -1 --format=%cs -- "${absPath}"`, {
      cwd: ROOT,
      stdio: ["ignore", "pipe", "ignore"],
    }).toString().trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(out)) date = out;
  } catch {
    /* git missing or file untracked → keep TODAY */
  }
  mtimeCache.set(absPath, date);
  return date;
}

// ── collect concrete route files → { slug, file } ─────────────────────────────
function collectRoutes(dir, prefix = "") {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const name = entry.name;
    // Skip dynamic routes ([...]), private files (_), and the api dir.
    if (name.startsWith("[") || name.startsWith("_") || name === "api") continue;
    // Skip the admin area (noindex, not for the sitemap).
    if (name === "admin") continue;
    const abs = join(dir, name);
    if (entry.isDirectory()) {
      out.push(...collectRoutes(abs, `${prefix}/${name}`));
      continue;
    }
    if (!/\.(tsx|ts)$/.test(name)) continue;
    if (name.endsWith(".css") || name === "app.tsx") continue;
    // Skip pages that opt out of indexing. A noindexed page must never appear
    // in the sitemap. We detect the robots meta directive by its content value
    // (`content="noindex...`), so this stays correct no matter which pages are
    // pruned in future — it is driven purely by the meta, not a hardcoded list.
    // NOTE: dynamic blog articles live in blog/[slug].tsx (skipped above by the
    // "[" prefix) and are collected separately, so the 404-fallback noindex
    // inside that file never affects real article URLs.
    const contents = readFileSync(abs, "utf8");
    if (/content="noindex/.test(contents)) continue;
    let slug = name.replace(/\.(tsx|ts)$/, "");
    if (slug === "index") slug = "";
    // Build the URL, collapse duplicate slashes, then strip any trailing slash
    // (except the root). Without the trailing-slash strip, a nested index route
    // like blog/index.tsx produced "/blog/" and silently dropped /blog.
    let url = `${prefix}/${slug}`.replace(/\/+/g, "/");
    if (url.length > 1) url = url.replace(/\/$/, "");
    if (url === "") url = "/";
    out.push({ slug: url, file: abs });
  }
  return out;
}

// ── dynamic blog articles from blog/[slug].tsx ────────────────────────────────
function collectDynamicBlogSlugs() {
  const slugFile = join(ROUTES_DIR, "blog", "[slug].tsx");
  if (!existsSync(slugFile)) return [];
  const src = readFileSync(slugFile, "utf8");
  // ARTICLES keys look like:   "some-slug": {
  const keys = [...src.matchAll(/^\s{2}"([a-z0-9][a-z0-9-]*)":\s*\{/gm)].map((m) => m[1]);
  return keys.map((k) => ({ slug: `/blog/${k}`, file: slugFile }));
}

// ── categorisation: which child sitemap a URL belongs to ──────────────────────
// Mirrors the existing committed segmentation so GSC keeps seeing the same
// child-sitemap layout it already crawls.
function categorise(slug) {
  if (!slug.startsWith("/blog/")) {
    if (slug.startsWith("/steel-supplier-") ||
        slug.startsWith("/steel-pipe-supplier-") ||
        slug.startsWith("/ss-pipe-supplier-") ||
        slug.startsWith("/stainless-steel-supplier-") ||
        slug === "/duplex-steel-supplier-vadodara") {
      return "locations";
    }
    // Top-level informational / legal / utility pages.
    const TOP = new Set([
      "/", "/about", "/products", "/blog", "/metal-trading",
      "/reviews", "/sitemap", "/privacy-policy", "/terms",
    ]);
    if (TOP.has(slug)) return "pages";
    // Everything else that is a supplier / product landing page.
    return "products";
  }

  const p = slug.slice("/blog/".length);
  if (/(price|rate|cost)/.test(p)) return "blog-prices";
  if (/(weight|calculator|chart|dimension|size|nb-to-od|inch-to-mm|swg-to-mm)/.test(p)) return "blog-charts";
  if (/-vs-|vs-/.test(p)) return "blog-comparisons";
  if (/(^astm|^asme|^api-5|^is-\d|^en-\d|^din-|^sa-\d|nace|ibr|specification|spec$|pmi-testing-complete|ndt-testing-methods)/.test(p)) return "blog-specs";
  if (/(^piping-for|^steel-for|^ss-pipe-for|^project-|^structural-steel-for|^material-for)/.test(p)) return "blog-industry";
  if (/(^how-to|^what-is|^when-to|^why-|^can-|^difference-|^faq-|guide$|-guide|types-of|buying|procurement|import|export|hs-code|gst|bis-certification|inspection|traceability|quality-assurance|vendor|indent|shipping|letter-of-credit|packaging|packing|lead-time|minimum-order|storage|negotiate)/.test(p)) return "blog-guides";
  return "blog-misc";
}

// ── priority / changefreq rules (unchanged from the committed set) ────────────
function priority(slug, cat) {
  if (slug === "/") return "1.0";
  if (slug === "/about" || slug === "/products") return "0.8";
  if (slug === "/blog") return "0.7";
  if (cat === "pages") return "0.5";
  if (slug.startsWith("/blog/")) return "0.6";
  return "0.7"; // products + locations
}
function changefreq(slug, cat) {
  if (slug === "/" || slug === "/blog") return "weekly";
  if (cat === "blog-prices") return "weekly";
  return "monthly";
}

// ── build the model ───────────────────────────────────────────────────────────
const all = [...collectRoutes(ROUTES_DIR), ...collectDynamicBlogSlugs()];

// Dedupe by slug. A slug can appear both as a static route file and as a
// dynamic [slug] article (e.g. /blog/duplex-vs-super-duplex). Prefer the
// concrete route file's path for lastmod when both exist.
const bySlug = new Map();
for (const r of all) {
  const existing = bySlug.get(r.slug);
  if (!existing) { bySlug.set(r.slug, r); continue; }
  // Prefer a concrete (non [slug]) file for the lastmod source.
  if (existing.file.includes("[slug]") && !r.file.includes("[slug]")) {
    bySlug.set(r.slug, r);
  }
}

const CHILD_ORDER = [
  "pages", "products", "locations",
  "blog-prices", "blog-charts", "blog-comparisons",
  "blog-guides", "blog-specs", "blog-industry", "blog-misc",
];
const buckets = new Map(CHILD_ORDER.map((c) => [c, []]));

for (const { slug, file } of [...bySlug.values()].sort((a, b) => a.slug.localeCompare(b.slug))) {
  const cat = categorise(slug);
  buckets.get(cat).push({
    loc: `${SITE_URL}${slug}`,
    lastmod: lastmodFor(file),
    changefreq: changefreq(slug, cat),
    priority: priority(slug, cat),
  });
}

// ── emit child sitemaps ───────────────────────────────────────────────────────
function urlXml(u) {
  return `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`;
}

let totalUrls = 0;
const childFiles = []; // { name, lastmod }
for (const cat of CHILD_ORDER) {
  const urls = buckets.get(cat);
  if (urls.length === 0) continue;
  const fileName = cat === "pages" ? "sitemap-pages.xml"
    : cat === "products" ? "sitemap-products.xml"
    : cat === "locations" ? "sitemap-locations.xml"
    : `sitemap-${cat}.xml`;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(urlXml).join("\n")}
</urlset>
`;
  writeFileSync(join(PUBLIC_DIR, fileName), xml);
  totalUrls += urls.length;
  // Child sitemap lastmod = newest page inside it.
  const newest = urls.reduce((m, u) => (u.lastmod > m ? u.lastmod : m), "0000-00-00");
  childFiles.push({ name: fileName, lastmod: newest });
  console.log(`  ${fileName.padEnd(30)} ${urls.length} urls`);
}

// ── emit sitemap index ────────────────────────────────────────────────────────
const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${childFiles.map((c) => `  <sitemap>
    <loc>${SITE_URL}/${c.name}</loc>
    <lastmod>${c.lastmod}</lastmod>
  </sitemap>`).join("\n")}
</sitemapindex>
`;
writeFileSync(join(PUBLIC_DIR, "sitemap-index.xml"), indexXml);

// ── remove the stale flat sitemap so there is one source of truth ─────────────
const legacyFlat = join(PUBLIC_DIR, "sitemap.xml");
if (existsSync(legacyFlat)) {
  rmSync(legacyFlat);
  console.log("  removed stale public/sitemap.xml (segmented index is authoritative)");
}

console.log(`\n✅ Sitemap index + ${childFiles.length} child sitemaps generated (${totalUrls} URLs).`);
console.log(`   robots.txt already points at ${SITE_URL}/sitemap-index.xml`);
