import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const config = JSON.parse(await readFile(new URL("vercel.json", root), "utf8"));
const sitemapXml = await readFile(new URL("public/sitemap.xml", root), "utf8");
const historicalPaths = JSON.parse(
  await readFile(new URL("scripts/fixtures/historical-redirect-paths.json", root), "utf8"),
);

const redirects = config.redirects || [];
const contentRedirects = redirects.filter((redirect) => !redirect.has);
const bySource = new Map(contentRedirects.map((redirect) => [redirect.source, redirect]));
const sitemapPaths = new Set(
  [...sitemapXml.matchAll(/<loc>https:\/\/www\.creativemetalind\.com([^<]*)<\/loc>/g)].map(
    (match) => match[1] || "/",
  ),
);

const approvedRedirects = new Map([
  ["/ss-pipe-supplier-baroda", "/stainless-steel-supplier-vadodara"],
  ["/blog/titanium-grades-comparison", "/titanium-pipe-supplier-india"],
  ["/blog/ss-304-vs-316l", "/ss-304-316l-pipe-supplier-india"],
  ["/ss-pipe-supplier-vadodara", "/stainless-steel-supplier-vadodara"],
  ["/blog/api-5l-pipe-guide", "/api-5l-line-pipe-supplier-india"],
  ["/blog/ss-304-stainless-steel-guide", "/ss-304-316l-pipe-supplier-india"],
  ["/blog/super-duplex-2507-guide", "/super-duplex-2507-pipe-supplier"],
  ["/blog/ss-316l-stainless-steel-guide", "/ss-304-316l-pipe-supplier-india"],
  ["/blog/sa-516-carbon-steel-plate-guide", "/carbon-steel-sa516-plate-stockist-india"],
  ["/blog/ss-304-vs-ss-304l", "/ss-304-316l-pipe-supplier-india"],
  ["/metal-trading", "/products"],
  ["/blog/ss-304-vs-ss-316-difference", "/ss-304-316l-pipe-supplier-india"],
  ["/blog/carbon-steel-pipe-guide", "/carbon-steel-pipe-supplier-india"],
  ["/blog/inconel-625-guide", "/inconel-pipe-supplier-india"],
  ["/blog/p11-vs-p22-difference", "/alloy-steel-pipe-supplier-india"],
  ["/blog/ss-316-vs-ss-316l", "/ss-304-316l-pipe-supplier-india"],
]);


function destination(source) {
  return bySource.get(source)?.destination;
}

test("the sanitized fixture contains 290 unique normalized historical paths", () => {
  assert.equal(Array.isArray(historicalPaths), true);
  assert.equal(historicalPaths.length, 290);
  assert.equal(new Set(historicalPaths).size, 290);
  for (const path of historicalPaths) {
    assert.equal(typeof path, "string", "every fixture entry must be a string");
    assert.match(path, /^\/(?!\/)/, `${path} must be a root-relative path`);
    assert.equal(path.includes("?"), false, `${path} must not contain a query string`);
    assert.equal(path.includes("#"), false, `${path} must not contain a fragment`);
    assert.equal(/^https?:\/\//i.test(path), false, `${path} must not contain an origin`);
  }
});

test("all 290 historical URLs resolve to the reviewed final policy", () => {
  let currentPages = 0;
  let approved = 0;
  let genuine404s = 0;

  for (const path of historicalPaths) {
    if (sitemapPaths.has(path)) {
      currentPages += 1;
      assert.equal(bySource.has(path), false, `${path} is current and must not redirect`);
    } else if (approvedRedirects.has(path)) {
      approved += 1;
      assert.equal(destination(path), approvedRedirects.get(path), `${path} must use its reviewed destination`);
      assert.equal(sitemapPaths.has(destination(path)), true, `${path} must redirect directly to a current sitemap page`);
    } else {
      genuine404s += 1;
      assert.equal(bySource.has(path), false, `${path} must fall through to a genuine 404 until equivalence is proven`);
    }
  }

  assert.deepEqual({ currentPages, approved, genuine404s }, { currentPages: 50, approved: 16, genuine404s: 224 });
});

test("unsafe content wildcards and broad homepage redirects are prohibited", () => {
  const forbiddenSources = [
    "/blog",
    "/blog/(.*)",
    "/steel-pipe-supplier-(.*)",
    "/steel-supplier-(.*)",
    "/ss-pipe-supplier-(.*)",
  ];
  for (const source of forbiddenSources) assert.equal(bySource.has(source), false, `${source} must not be configured`);
  assert.equal(contentRedirects.some((redirect) => redirect.source.includes("(.*)")), false);
  assert.equal(contentRedirects.some((redirect) => redirect.destination === "/"), false);
});

test("confirmed mismatches and evidence-deficient mappings fall through to 404", () => {
  const removed = [
    "/blog/hastelloy-vs-inconel",
    "/stainless-steel-supplier-gujarat",
    "/ss-321h-tube-supplier-india",
    "/ss-coil-tube-supplier-india",
    "/carbon-steel-pipe-fittings-vadodara",
    "/blog/p91-alloy-steel-power-plants",
    "/blog/p91-alloy-steel-guide",
    "/blog/ss-304-vs-321-guide",
    "/blog/duplex-vs-super-duplex",
    "/incoloy-800h-pipe-supplier",
    "/a333-low-temp-pipe-supplier",
    "/p92-alloy-steel-pipe-supplier",
  ];
  for (const source of removed) assert.equal(bySource.has(source), false, `${source} must not redirect without equivalence evidence`);
});

test("all 51 current sitemap pages remain outside the redirect policy", () => {
  assert.equal(sitemapPaths.size, 51);
  for (const path of sitemapPaths) assert.equal(bySource.has(path), false, `${path} must remain directly accessible`);
});

test("every content redirect is approved, permanent, unique, single-hop and targets a current page", () => {
  assert.equal(bySource.size, contentRedirects.length, "redirect sources must be unique");
  assert.equal(contentRedirects.length, approvedRedirects.size, "only the reviewed redirect set may be configured");
  for (const redirect of contentRedirects) {
    assert.equal(approvedRedirects.get(redirect.source), redirect.destination, `${redirect.source} must be explicitly approved`);
    assert.equal(redirect.permanent, true, `${redirect.source} must be permanent`);
    assert.equal(sitemapPaths.has(redirect.destination), true, `${redirect.source} destination must be a current sitemap page`);
    assert.equal(bySource.has(redirect.destination), false, `${redirect.source} must not create a redirect chain`);
  }
});
