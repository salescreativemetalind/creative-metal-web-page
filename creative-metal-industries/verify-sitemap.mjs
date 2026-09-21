#!/usr/bin/env node
/**
 * Sitemap drift check.
 *
 * Compares the URLs declared in the sitemaps against the pages the build
 * actually produced, and against the robots meta in those pages. Exits non-zero
 * on any mismatch so it can be used as a release gate.
 *
 * Why this exists: the sitemaps are maintained as static XML in public/, while
 * pages come from src/routes. generate-sitemap.mjs only walks concrete route
 * files, so slugs held inside a dynamic route (src/routes/blog/[slug].tsx) are
 * invisible to it. Seven indexable articles were missing from every sitemap as
 * a result. This check catches that class of drift.
 *
 * Run after `npm run build`:  npm run check:sitemap
 */
import { readFileSync, readdirSync, existsSync, statSync } from "fs";
import { join, relative } from "path";

const ROOT = import.meta.dirname;
const PUBLIC = join(ROOT, "public");
const STATIC = join(ROOT, ".vercel/output/static");
const ORIGIN = "https://www.creativemetalind.com";

let failures = 0;
const fail = (msg) => { console.error(`  FAIL  ${msg}`); failures++; };
const ok = (msg) => console.log(`  ok    ${msg}`);

// ── 1. collect URLs declared by the sitemap ───────────────────────────────────
const sitemapPath = join(PUBLIC, "sitemap.xml");
const indexPath = join(PUBLIC, "sitemap-index.xml");

const declared = new Set();

// This project uses a flat sitemap.xml, not a sitemap index
if (existsSync(sitemapPath)) {
  const xml = readFileSync(sitemapPath, "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  locs.forEach((l) => declared.add(l.replace(ORIGIN, "") || "/"));
  console.log(`sitemap.xml contains ${declared.size} URLs`);
} else if (existsSync(indexPath)) {
  // Fallback: support sitemap index if it exists
  const indexXml = readFileSync(indexPath, "utf8");
  const children = [...indexXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].replace(`${ORIGIN}/`, ""));
  console.log(`sitemap-index.xml lists ${children.length} sitemaps`);

  for (const child of children) {
    const p = join(PUBLIC, child);
    if (!existsSync(p)) {
      fail(`${child} referenced by sitemap-index.xml but missing from public/`);
      continue;
    }
    const xml = readFileSync(p, "utf8");
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    locs.forEach((l) => declared.add(l.replace(ORIGIN, "") || "/"));
  }
  console.log(`declared URLs: ${declared.size}`);
} else {
  console.error("Neither sitemap.xml nor sitemap-index.xml found");
  process.exit(1);
}

// ── 2. collect pages the build produced ───────────────────────────────────────
if (!existsSync(STATIC)) {
  console.error(`\n${STATIC} not found - run \`npm run build\` first.`);
  process.exit(1);
}
const built = new Map(); // path -> html
(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name === "index.html") {
      const rel = "/" + relative(STATIC, dir).replace(/\\/g, "/");
      built.set(rel === "/." ? "/" : rel, p);
    }
  }
})(STATIC);
console.log(`built pages  : ${built.size}\n`);

// ── 3. compare ────────────────────────────────────────────────────────────────
const noindex = new Set();
for (const [url, file] of built) {
  const html = readFileSync(file, "utf8");
  const head = html.split("</head>")[0];
  if (/<meta[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(head)) noindex.add(url);
}

const missingFromSitemap = [...built.keys()].filter((u) => !declared.has(u) && !noindex.has(u));
const missingFromBuild = [...declared].filter((u) => !built.has(u));
const noindexInSitemap = [...declared].filter((u) => noindex.has(u));

if (missingFromBuild.length) {
  fail(`${missingFromBuild.length} sitemap URLs have no built page:`);
  missingFromBuild.slice(0, 20).forEach((u) => console.error(`          ${u}`));
} else ok("every sitemap URL has a built page");

if (missingFromSitemap.length) {
  fail(`${missingFromSitemap.length} indexable built pages are missing from the sitemaps:`);
  missingFromSitemap.slice(0, 20).forEach((u) => console.error(`          ${u}`));
} else ok("every indexable built page is in a sitemap");

if (noindexInSitemap.length) {
  fail(`${noindexInSitemap.length} sitemap URLs are noindex:`);
  noindexInSitemap.slice(0, 20).forEach((u) => console.error(`          ${u}`));
} else ok("no noindex page is listed in a sitemap");

// ── 4. sitemap index cross-check (only if both exist) ─────────────────────────
if (existsSync(sitemapPath) && existsSync(indexPath)) {
  const flatLocs = new Set(
    [...readFileSync(sitemapPath, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((m) => m[1].replace(ORIGIN, "") || "/"),
  );
  const onlyFlat = [...flatLocs].filter((u) => !declared.has(u));
  const onlyIndex = [...declared].filter((u) => !flatLocs.has(u));
  if (onlyFlat.length || onlyIndex.length) {
    fail(`public/sitemap.xml disagrees with sitemap-index.xml `
      + `(+${onlyFlat.length} only in flat, +${onlyIndex.length} only in index)`);
  } else ok("public/sitemap.xml agrees with sitemap-index.xml");
}

console.log(failures ? `\n${failures} check(s) failed.` : "\nAll sitemap checks passed.");
process.exit(failures ? 1 : 0);
