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

// ── 1. collect URLs declared by the sitemap index ─────────────────────────────
const indexPath = join(PUBLIC, "sitemap-index.xml");
if (!existsSync(indexPath)) {
  console.error("sitemap-index.xml not found");
  process.exit(1);
}
const indexXml = readFileSync(indexPath, "utf8");
const children = [...indexXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1].replace(`${ORIGIN}/`, ""));

console.log(`sitemap-index.xml lists ${children.length} sitemaps`);

const declared = new Set();
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

// ── 4. the legacy flat sitemap, if still present, must agree ──────────────────
const legacy = join(PUBLIC, "sitemap.xml");
if (existsSync(legacy)) {
  const locs = new Set(
    [...readFileSync(legacy, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((m) => m[1].replace(ORIGIN, "") || "/"),
  );
  const onlyLegacy = [...locs].filter((u) => !declared.has(u));
  const onlySplit = [...declared].filter((u) => !locs.has(u));
  if (onlyLegacy.length || onlySplit.length) {
    fail(`public/sitemap.xml disagrees with the split sitemaps `
      + `(+${onlyLegacy.length} only in flat, +${onlySplit.length} only in split)`);
  } else ok("public/sitemap.xml agrees with the split sitemaps");
}

console.log(failures ? `\n${failures} check(s) failed.` : "\nAll sitemap checks passed.");
process.exit(failures ? 1 : 0);
