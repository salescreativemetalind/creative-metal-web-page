#!/usr/bin/env node
/**
 * Ping Google to re-crawl sitemaps after deploy.
 * Usage: node ping-google.mjs
 * 
 * This notifies Google that your sitemaps have been updated,
 * prompting a re-crawl to discover new/changed pages faster.
 * 
 * Note: Bing now uses IndexNow protocol instead of ping.
 * Google ping returns 200 when successful (after sitemaps are deployed).
 */

const BASE = 'https://www.creativemetalind.com';

const sitemaps = [
  `${BASE}/sitemap-index.xml`,
  `${BASE}/sitemap-pages.xml`,
  `${BASE}/sitemap-products.xml`,
  `${BASE}/sitemap-locations.xml`,
  `${BASE}/sitemap-blog-prices.xml`,
  `${BASE}/sitemap-blog-charts.xml`,
  `${BASE}/sitemap-blog-comparisons.xml`,
  `${BASE}/sitemap-blog-guides.xml`,
  `${BASE}/sitemap-blog-specs.xml`,
  `${BASE}/sitemap-blog-industry.xml`,
  `${BASE}/sitemap-blog-misc.xml`,
];

async function pingGoogle(sitemapUrl) {
  const endpoint = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  try {
    const res = await fetch(endpoint);
    if (res.ok) {
      console.log(`  ✓ Pinged: ${sitemapUrl}`);
      return true;
    } else {
      console.log(`  ✗ HTTP ${res.status}: ${sitemapUrl}`);
      return false;
    }
  } catch (err) {
    console.log(`  ✗ Error: ${err.message}`);
    return false;
  }
}

console.log('');
console.log('╔══════════════════════════════════════════════════╗');
console.log('║   Pinging Google with updated sitemaps...       ║');
console.log('╚══════════════════════════════════════════════════╝');
console.log('');

let success = 0;
let failed = 0;

for (const sitemap of sitemaps) {
  const ok = await pingGoogle(sitemap);
  if (ok) success++;
  else failed++;
}

console.log('');
console.log(`Results: ${success} success, ${failed} failed`);
console.log('');

if (failed > 0 && success === 0) {
  console.log('All pings failed — sitemaps may not be deployed yet.');
  console.log('Run this script AFTER deploying to Vercel.');
}

console.log('Next steps:');
console.log('  1. Go to Google Search Console → Sitemaps');
console.log('  2. Remove old sitemap.xml');
console.log('  3. Submit each new sitemap individually:');
for (const sitemap of sitemaps) {
  console.log(`     - ${sitemap.replace(BASE + '/', '')}`);
}
console.log('');
