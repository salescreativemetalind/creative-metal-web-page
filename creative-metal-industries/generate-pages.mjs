#!/usr/bin/env node
/**
 * Page Generator for Creative Metal Industries
 * Generates 410 new SEO-optimized TSX route files (pages 101-510)
 * Run: node generate-pages.mjs
 */
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const ROUTES_DIR = join(import.meta.dirname, "src/routes");
const BLOG_DIR = join(ROUTES_DIR, "blog");

if (!existsSync(BLOG_DIR)) mkdirSync(BLOG_DIR, { recursive: true });

const SITE_URL = "https://www.creativemetalind.com";
const PHONE = "+91 99982 80619";
const PHONE_LINK = "+919998280619";
const WHATSAPP = "https://wa.me/919998280619";
const DATE_NOW = "2026-07-23";
const MONTH_YEAR = "July 2026";

let pagesCreated = 0;
let allRoutes = [];

// ============================================================
// INTERNAL LINKS POOL (existing pages for cross-linking)
// ============================================================
const INTERNAL_LINKS = [
  { href: "/blog/ss-304-stainless-steel-guide", text: "SS 304 Stainless Steel Guide" },
  { href: "/blog/ss-316l-stainless-steel-guide", text: "SS 316L Stainless Steel Guide" },
  { href: "/blog/duplex-2205-steel-guide", text: "Duplex 2205 Steel Guide" },
  { href: "/blog/super-duplex-2507-guide", text: "Super Duplex 2507 Guide" },
  { href: "/blog/p91-alloy-steel-guide", text: "P91 Alloy Steel Guide" },
  { href: "/blog/hastelloy-c276-guide", text: "Hastelloy C276 Guide" },
  { href: "/blog/inconel-625-guide", text: "Inconel 625 Guide" },
  { href: "/blog/titanium-grade-2-vs-grade-5", text: "Titanium Grade 2 vs Grade 5" },
  { href: "/blog/pipe-schedule-chart", text: "Pipe Schedule Chart" },
  { href: "/blog/mill-test-certificate-guide", text: "Mill Test Certificate Guide" },
  { href: "/blog/erw-vs-seamless-pipe", text: "ERW vs Seamless Pipe" },
  { href: "/blog/carbon-steel-pipe-guide", text: "Carbon Steel Pipe Guide" },
  { href: "/blog/ms-structural-steel-guide", text: "MS Structural Steel Guide" },
  { href: "/blog/ss-sheet-plate-guide", text: "SS Sheet & Plate Guide" },
  { href: "/blog/exotic-alloy-plate-sheet-guide", text: "Exotic Alloy Guide" },
  { href: "/alloy-steel-pipe-supplier-india", text: "Alloy Steel Pipe Supplier India" },
  { href: "/ss-seamless-pipe-supplier-india", text: "SS Seamless Pipe Supplier India" },
  { href: "/stainless-steel-supplier-vadodara", text: "Stainless Steel Supplier Vadodara" },
  { href: "/duplex-steel-supplier-vadodara", text: "Duplex Steel Supplier Vadodara" },
  { href: "/inconel-pipe-supplier-india", text: "Inconel Pipe Supplier India" },
  { href: "/carbon-steel-pipe-fittings-vadodara", text: "CS Pipe Fittings Vadodara" },
  { href: "/tmt-bars-supplier-gujarat", text: "TMT Bars Supplier Gujarat" },
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================
function getInternalLinks(slug, count = 3) {
  const filtered = INTERNAL_LINKS.filter(l => !l.href.includes(slug));
  // Deterministic per-slug rotation. `Math.random()` here meant a page's
  // internal links changed on every regeneration, producing noisy diffs and
  // making link equity impossible to reason about. Hashing the slug keeps the
  // spread even while staying stable across runs.
  const hash = [...slug].reduce((a, c) => a + c.charCodeAt(0), 0);
  const shuffled = filtered.map((_, i) => filtered[(hash + i) % filtered.length]);
  return shuffled.slice(0, count);
}

function truncate(str, max) {
  if (str.length <= max) return str;
  return str.substring(0, max - 3) + "...";
}

function slugToTitle(slug) {
  return slug.replace(/^\/blog\//, "").replace(/^\//, "")
    .split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function escapeJsx(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function makeFuncName(slug) {
  const clean = slug.replace(/^\/blog\//, "").replace(/^\//, "");
  return clean.split("-").map((w, i) => {
    if (w === "vs") return "Vs";
    if (w === "api") return "API";
    if (w === "ss") return "SS";
    if (w === "cs") return "CS";
    if (w === "ms") return "MS";
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join("");
}

// ============================================================
// SECTION 2: PRODUCT LANDING PAGES (Pages 101-110)
// ============================================================
const SECTION_2_PAGES = [
  { slug: "/carbon-steel-spectacle-blind-india", keyword: "spectacle blind flange CS supplier India", h1: "Carbon Steel Spectacle Blind Flange Supplier India", metaTitle: "CS Spectacle Blind Supplier India | CMI", metaDesc: "Carbon steel spectacle blind flange supplier India. ASTM A516 Gr.70, figure 8 blinds, all sizes. Ready stock at CMI Vadodara. Call +91 99982 80619.", schemaType: "Product", material: "Carbon Steel", product: "Spectacle Blind Flange", standard: "ASME B16.48", grades: "ASTM A516 Gr.60/70, A105, IS 2062 E250" },
  { slug: "/ss-stub-end-supplier-india", keyword: "SS stub end lap joint supplier India", h1: "Stainless Steel Stub End Supplier India — Lap Joint", metaTitle: "SS Stub End Supplier India | CMI Vadodara", metaDesc: "SS stub end lap joint supplier India. 304, 316L, duplex grades. ASTM A403 WP304/316L. Type A & B. Stock at CMI. Call +91 99982 80619.", schemaType: "Product", material: "Stainless Steel", product: "Stub End", standard: "ASTM A403, MSS SP-43", grades: "WP304, WP304L, WP316, WP316L, WP321, WP347" },
  { slug: "/ss-reducer-supplier-india", keyword: "SS concentric eccentric reducer supplier India", h1: "SS Reducer Supplier India — Concentric & Eccentric", metaTitle: "SS Reducer Supplier India | CMI Vadodara", metaDesc: "SS concentric & eccentric reducer supplier India. 304/316L, ASTM A403. 1/2\" to 48\". Ready stock CMI Vadodara. Call +91 99982 80619.", schemaType: "Product", material: "Stainless Steel", product: "Reducer", standard: "ASTM A403, ASME B16.9", grades: "WP304, WP304L, WP316L, WP321, WP310S, WP347" },
  { slug: "/ms-plate-supplier-india", keyword: "MS plate IS 2062 supplier India all sizes", h1: "MS Plate Supplier India — IS 2062 All Sizes", metaTitle: "MS Plate IS 2062 Supplier India | CMI", metaDesc: "MS plate IS 2062 E250 supplier India. 6mm to 150mm thick, SAIL & Essar. All sizes ready stock. CMI Vadodara. Call +91 99982 80619.", schemaType: "Product", material: "Mild Steel", product: "Plate", standard: "IS 2062 E250/E350", grades: "IS 2062 E250 BR/A, E350 BR/A, SAILMA 350/450" },
  { slug: "/ms-channel-ismc-supplier-india", keyword: "MS channel ISMC supplier India IS 808", h1: "MS Channel ISMC Supplier India — IS 808", metaTitle: "MS Channel ISMC Supplier India | CMI", metaDesc: "MS ISMC channel supplier India per IS 808. ISMC 75 to 400. SAIL, Jindal. Ready stock CMI Vadodara Gujarat. Call +91 99982 80619.", schemaType: "Product", material: "Mild Steel", product: "Channel (ISMC)", standard: "IS 808, IS 2062", grades: "ISMC 75, 100, 125, 150, 175, 200, 250, 300, 400" },
  { slug: "/ms-beam-ismb-supplier-india", keyword: "MS beam ISMB supplier India structural", h1: "MS Beam ISMB Supplier India — Structural Steel", metaTitle: "MS Beam ISMB Supplier India | CMI", metaDesc: "MS ISMB beam supplier India IS 808. ISMB 100 to 600. SAIL, Jindal structural. CMI Vadodara Gujarat. Call +91 99982 80619.", schemaType: "Product", material: "Mild Steel", product: "Beam (ISMB)", standard: "IS 808, IS 2062", grades: "ISMB 100, 150, 200, 250, 300, 350, 400, 450, 500, 600" },
  { slug: "/ms-flat-bar-supplier-india", keyword: "MS flat bar supplier India IS 2062", h1: "MS Flat Bar Supplier India — IS 2062", metaTitle: "MS Flat Bar Supplier India | CMI", metaDesc: "MS flat bar supplier India IS 2062. 20mm to 300mm width, 3mm to 50mm thick. SAIL. Ready stock CMI. Call +91 99982 80619.", schemaType: "Product", material: "Mild Steel", product: "Flat Bar", standard: "IS 2062 E250", grades: "IS 2062 E250, E350, SAE 1018/1020" },
  { slug: "/hardox-wear-plate-supplier-india", keyword: "Hardox 400 500 wear plate supplier India", h1: "Hardox 400/500 Wear Plate Supplier India", metaTitle: "Hardox Wear Plate Supplier India | CMI", metaDesc: "Hardox 400 & 500 abrasion resistant wear plate supplier India. 6mm to 80mm. Mining & cement. CMI Vadodara. Call +91 99982 80619.", schemaType: "Product", material: "Hardox Steel", product: "Wear Plate", standard: "SSAB Hardox", grades: "Hardox 400, Hardox 450, Hardox 500, Hardox 550" },
  { slug: "/sail-hard-plate-supplier-india", keyword: "SAIL Hard abrasion resistant plate India", h1: "SAIL Hard Abrasion Resistant Plate Supplier India", metaTitle: "SAIL Hard Plate Supplier India | CMI", metaDesc: "SAIL Hard abrasion resistant plate supplier India. 400-500 BHN. Mining, cement, power. CMI Vadodara Gujarat. Call +91 99982 80619.", schemaType: "Product", material: "SAIL Hard Steel", product: "Abrasion Resistant Plate", standard: "SAIL proprietary", grades: "SAIL Hard (400 BHN), SAIL Hard Plus (500 BHN)" },
  { slug: "/corten-steel-plate-supplier-india", keyword: "Corten A/B weathering steel plate India", h1: "Corten Steel Plate Supplier India — Weathering Steel", metaTitle: "Corten Steel Plate Supplier India | CMI", metaDesc: "Corten A & B weathering steel plate supplier India. ASTM A588, A242. 3mm-50mm. Architecture & bridges. CMI. Call +91 99982 80619.", schemaType: "Product", material: "Corten Steel", product: "Plate", standard: "ASTM A588, A242, SPA-H", grades: "Corten A (A242), Corten B (A588 Gr.A), SPA-H/SPA-C, S355J2WP" },
];

// ============================================================
// SECTION 3: PRICE & RATE ARTICLES (Pages 111-150)
// ============================================================
const SECTION_3_PAGES = [
  { slug: "/blog/ss-304-pipe-price-per-kg", keyword: "SS 304 pipe price per kg India today", h1: "SS 304 Pipe Price Per Kg in India Today", metaTitle: "SS 304 Pipe Price Per Kg India | CMI 2026", metaDesc: "SS 304 pipe price per kg India today — seamless & welded rates. Updated July 2026. Get best price from CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/ss-316l-pipe-price-per-kg", keyword: "SS 316L pipe price per kg India", h1: "SS 316L Pipe Price Per Kg in India — Latest Rates", metaTitle: "SS 316L Pipe Price Per Kg India | CMI", metaDesc: "SS 316L pipe price per kg India — seamless & welded. July 2026 updated rates. Bulk discount at CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/ss-304-sheet-price-per-kg", keyword: "SS 304 sheet price per kg India 2B finish", h1: "SS 304 Sheet Price Per Kg India — 2B Finish", metaTitle: "SS 304 Sheet Price Per Kg India | CMI", metaDesc: "SS 304 sheet price per kg India 2B & No.4 finish. July 2026 rates. Jindal, SAIL stock at CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/ss-316-sheet-price-per-kg", keyword: "SS 316 sheet price per kg India", h1: "SS 316 Sheet Price Per Kg in India", metaTitle: "SS 316 Sheet Price Per Kg India | CMI", metaDesc: "SS 316/316L sheet price per kg India — 2B, BA finish. Updated July 2026. CMI Vadodara best rates. Call +91 99982 80619." },
  { slug: "/blog/ss-304-plate-price-india", keyword: "SS 304 plate price India today per kg", h1: "SS 304 Plate Price in India Today Per Kg", metaTitle: "SS 304 Plate Price India Today | CMI", metaDesc: "SS 304 plate price India today per kg. 4-100mm thick. July 2026 updated. CMI Vadodara stockist. Call +91 99982 80619." },
  { slug: "/blog/ss-316l-plate-price-india", keyword: "SS 316L plate price per kg India", h1: "SS 316L Plate Price Per Kg India", metaTitle: "SS 316L Plate Price Per Kg India | CMI", metaDesc: "SS 316L plate price per kg India — ASTM A240, all thickness. July 2026 rates. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/duplex-2205-pipe-price-india", keyword: "Duplex 2205 pipe price per kg India", h1: "Duplex 2205 Pipe Price Per Kg India", metaTitle: "Duplex 2205 Pipe Price India | CMI", metaDesc: "Duplex 2205 pipe price per kg India — seamless ASTM A790. July 2026 rates. CMI Vadodara stockist. Call +91 99982 80619." },
  { slug: "/blog/super-duplex-2507-pipe-price", keyword: "Super Duplex 2507 pipe price India", h1: "Super Duplex 2507 Pipe Price in India", metaTitle: "Super Duplex 2507 Pipe Price India | CMI", metaDesc: "Super Duplex 2507 pipe price per kg India. UNS S32750. July 2026 updated. CMI Vadodara supplier. Call +91 99982 80619." },
  { slug: "/blog/duplex-2205-plate-price", keyword: "Duplex 2205 plate price per kg India", h1: "Duplex 2205 Plate Price Per Kg India", metaTitle: "Duplex 2205 Plate Price India | CMI", metaDesc: "Duplex 2205 plate price per kg India — ASTM A240 UNS S31803. July 2026. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/inconel-625-pipe-price-india", keyword: "Inconel 625 pipe price per kg India", h1: "Inconel 625 Pipe Price Per Kg India", metaTitle: "Inconel 625 Pipe Price India | CMI", metaDesc: "Inconel 625 pipe price per kg India — ASTM B444 seamless. July 2026 rates. CMI Vadodara exotic alloy. Call +91 99982 80619." },
  { slug: "/blog/inconel-600-pipe-price", keyword: "Inconel 600 pipe price per kg India", h1: "Inconel 600 Pipe Price Per Kg India", metaTitle: "Inconel 600 Pipe Price India | CMI", metaDesc: "Inconel 600 pipe price per kg India — ASTM B167. July 2026 updated rates. CMI Vadodara stockist. Call +91 99982 80619." },
  { slug: "/blog/monel-400-pipe-price-india", keyword: "Monel 400 pipe price per kg India", h1: "Monel 400 Pipe Price Per Kg India", metaTitle: "Monel 400 Pipe Price India | CMI", metaDesc: "Monel 400 pipe price per kg India — ASTM B165 seamless. July 2026. CMI Vadodara exotic alloy stockist. Call +91 99982 80619." },
  { slug: "/blog/hastelloy-c276-pipe-price", keyword: "Hastelloy C276 pipe price per kg India", h1: "Hastelloy C276 Pipe Price Per Kg India", metaTitle: "Hastelloy C276 Pipe Price India | CMI", metaDesc: "Hastelloy C276 pipe price per kg India — ASTM B622. July 2026 rates. CMI Vadodara supplier. Call +91 99982 80619." },
  { slug: "/blog/titanium-pipe-price-india", keyword: "titanium pipe price per kg India Grade 2", h1: "Titanium Pipe Price Per Kg India — Grade 2", metaTitle: "Titanium Pipe Price Per Kg India | CMI", metaDesc: "Titanium Grade 2 pipe price per kg India — ASTM B861. July 2026 updated. CMI Vadodara supplier. Call +91 99982 80619." },
  { slug: "/blog/copper-nickel-pipe-price", keyword: "copper nickel 70/30 pipe price India", h1: "Copper Nickel 70/30 Pipe Price in India", metaTitle: "CuNi 70/30 Pipe Price India | CMI", metaDesc: "Copper nickel 70/30 pipe price India — ASTM B466. July 2026 marine grade rates. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/alloy-20-pipe-price-india", keyword: "Alloy 20 pipe price per kg India", h1: "Alloy 20 Pipe Price Per Kg India", metaTitle: "Alloy 20 Pipe Price India | CMI", metaDesc: "Alloy 20 Carpenter 20 pipe price per kg India. ASTM B729. July 2026 rates. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/alloy-steel-p91-pipe-price", keyword: "P91 alloy steel pipe price per kg India", h1: "P91 Alloy Steel Pipe Price Per Kg India", metaTitle: "P91 Pipe Price Per Kg India | CMI", metaDesc: "P91 alloy steel pipe price per kg India — ASTM A335. IBR certified. July 2026 rates. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/alloy-steel-p22-pipe-price", keyword: "P22 alloy steel pipe price per kg India", h1: "P22 Alloy Steel Pipe Price Per Kg India", metaTitle: "P22 Pipe Price Per Kg India | CMI", metaDesc: "P22 alloy steel pipe price per kg India — ASTM A335. IBR stock. July 2026 rates. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/alloy-steel-p11-pipe-price", keyword: "P11 pipe price per kg India IBR", h1: "P11 Alloy Steel Pipe Price Per Kg India — IBR", metaTitle: "P11 Pipe Price Per Kg India IBR | CMI", metaDesc: "P11 alloy steel pipe price per kg India with IBR Form III-C. July 2026. ASTM A335. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/carbon-steel-a106-pipe-price", keyword: "A106 Gr.B CS pipe price per kg India", h1: "ASTM A106 Gr.B Carbon Steel Pipe Price India", metaTitle: "A106 CS Pipe Price Per Kg India | CMI", metaDesc: "ASTM A106 Gr.B carbon steel pipe price per kg India. Seamless. July 2026. CMI Vadodara stockist. Call +91 99982 80619." },
  { slug: "/blog/erw-pipe-price-india", keyword: "ERW pipe price per metre India IS 1239", h1: "ERW Pipe Price Per Metre India — IS 1239", metaTitle: "ERW Pipe Price India IS 1239 | CMI", metaDesc: "ERW pipe price per metre India IS 1239 — Light, Medium, Heavy class. July 2026. CMI Vadodara Gujarat. Call +91 99982 80619." },
  { slug: "/blog/api-5l-pipe-price-india", keyword: "API 5L line pipe price per kg India", h1: "API 5L Line Pipe Price Per Kg India", metaTitle: "API 5L Pipe Price India | CMI", metaDesc: "API 5L line pipe price per kg India — X42 to X65, PSL1/PSL2. July 2026 rates. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/ss-pipe-price-list-india", keyword: "SS pipe price list India 2026 all grades", h1: "SS Pipe Price List India 2026 — All Grades", metaTitle: "SS Pipe Price List India 2026 | CMI", metaDesc: "SS pipe price list India 2026 — 304, 316L, 321, 310, 904L rates. Updated July. CMI Vadodara stockist. Call +91 99982 80619." },
  { slug: "/blog/ss-fittings-price-india", keyword: "SS buttweld fittings price per piece India", h1: "SS Buttweld Fittings Price Per Piece India", metaTitle: "SS Fittings Price India | CMI", metaDesc: "SS buttweld fittings price per piece India — elbows, tees, reducers. 304/316L. July 2026. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/ss-flange-price-india", keyword: "SS flange price per piece India class 150", h1: "SS Flange Price Per Piece India — Class 150", metaTitle: "SS Flange Price India Class 150 | CMI", metaDesc: "SS flange price per piece India — WNRF, SORF class 150/300. 304/316L. July 2026. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/forged-fittings-price-india", keyword: "SS forged fittings price India 3000 6000", h1: "SS Forged Fittings Price India — 3000# & 6000#", metaTitle: "Forged Fittings Price India | CMI", metaDesc: "SS forged fittings price India 3000# 6000# — socket weld & threaded. 304/316L. July 2026. CMI. Call +91 99982 80619." },
  { slug: "/blog/sa-516-plate-price-india", keyword: "SA 516 Gr 70 plate price per kg India", h1: "SA 516 Gr.70 Plate Price Per Kg India", metaTitle: "SA 516 Gr.70 Plate Price India | CMI", metaDesc: "SA 516 Gr.70 carbon steel plate price per kg India. Boiler quality. July 2026 rates. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/sa-387-plate-price-india", keyword: "SA 387 alloy plate price per kg India", h1: "SA 387 Alloy Steel Plate Price Per Kg India", metaTitle: "SA 387 Plate Price India | CMI", metaDesc: "SA 387 Gr.11/22/91 alloy plate price per kg India. CR & NACE. July 2026. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/boiler-tube-price-india", keyword: "boiler tube SA 179 SA 213 price India", h1: "Boiler Tube Price India — SA 179, SA 213", metaTitle: "Boiler Tube Price India SA 179 213 | CMI", metaDesc: "Boiler tube price India SA 179 & SA 213 T11/T22/T91. IBR certified. July 2026. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/ss-round-bar-price-india", keyword: "SS round bar price per kg India 304 316", h1: "SS Round Bar Price Per Kg India — 304/316", metaTitle: "SS Round Bar Price India | CMI", metaDesc: "SS round bar price per kg India 304/316L — 6mm to 300mm dia. July 2026 rates. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/ms-angle-price-today", keyword: "MS angle price today Vadodara Gujarat", h1: "MS Angle Price Today — Vadodara, Gujarat", metaTitle: "MS Angle Price Today Gujarat | CMI", metaDesc: "MS angle price today Vadodara Gujarat — IS 808 all sizes. July 2026 daily rate. CMI GIDC Makarpura. Call +91 99982 80619." },
  { slug: "/blog/ms-channel-price-today", keyword: "MS channel ISMC price today Gujarat", h1: "MS Channel ISMC Price Today — Gujarat", metaTitle: "MS Channel Price Today Gujarat | CMI", metaDesc: "MS channel ISMC price today Gujarat — ISMC 75 to 400. July 2026. CMI Vadodara stockist. Call +91 99982 80619." },
  { slug: "/blog/ms-beam-price-today", keyword: "MS beam ISMB price today Gujarat India", h1: "MS Beam ISMB Price Today — Gujarat, India", metaTitle: "MS Beam Price Today Gujarat | CMI", metaDesc: "MS beam ISMB price today Gujarat India. ISMB 100-600. July 2026 daily rate. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/ms-plate-price-vadodara", keyword: "MS plate price Vadodara IS 2062", h1: "MS Plate Price Vadodara — IS 2062", metaTitle: "MS Plate Price Vadodara IS 2062 | CMI", metaDesc: "MS plate price Vadodara IS 2062 E250 — 6mm to 100mm. July 2026 rates. CMI Lakkadpitha. Call +91 99982 80619." },
  { slug: "/blog/tmt-bar-price-today-gujarat", keyword: "TMT bar price today Gujarat Fe 500D", h1: "TMT Bar Price Today Gujarat — Fe 500D", metaTitle: "TMT Bar Price Today Gujarat | CMI", metaDesc: "TMT bar price today Gujarat Fe 500D — 8mm to 32mm. SAIL, JSW, Tata. July 2026. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/incoloy-800-price-india", keyword: "Incoloy 800 800HT pipe price India", h1: "Incoloy 800/800HT Pipe Price India", metaTitle: "Incoloy 800 Pipe Price India | CMI", metaDesc: "Incoloy 800 & 800HT pipe price per kg India — ASTM B407. July 2026. CMI Vadodara exotic alloy. Call +91 99982 80619." },
  { slug: "/blog/nickel-200-price-india", keyword: "Nickel 200 pipe price per kg India", h1: "Nickel 200 Pipe Price Per Kg India", metaTitle: "Nickel 200 Pipe Price India | CMI", metaDesc: "Nickel 200 pipe price per kg India — UNS N02200. July 2026 updated rates. CMI Vadodara stockist. Call +91 99982 80619." },
  { slug: "/blog/hardox-plate-price-india", keyword: "Hardox 400 500 plate price India", h1: "Hardox 400/500 Plate Price India", metaTitle: "Hardox Plate Price India | CMI", metaDesc: "Hardox 400 & 500 wear plate price India — 6mm to 80mm. July 2026 rates. CMI Vadodara Gujarat. Call +91 99982 80619." },
  { slug: "/blog/nickel-lme-price-impact-ss", keyword: "nickel LME price impact on SS pipe rate", h1: "Nickel LME Price Impact on SS Pipe Rates", metaTitle: "Nickel LME Impact on SS Price | CMI", metaDesc: "How nickel LME price impacts SS pipe rates in India. July 2026 analysis. Market trends by CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/steel-price-forecast-india-2026", keyword: "steel price forecast India 2026 2027 trend", h1: "Steel Price Forecast India 2026-2027 — Trends", metaTitle: "Steel Price Forecast India 2026-27 | CMI", metaDesc: "Steel price forecast India 2026-2027 — SS, CS, alloy trends. Expert analysis by CMI Vadodara. Plan procurement. Call +91 99982 80619." },
];

// ============================================================
// SECTION 4: WEIGHT CHART & CALCULATOR PAGES (Pages 151-180)
// ============================================================
const SECTION_4_PAGES = [
  { slug: "/blog/pipe-weight-calculator", keyword: "pipe weight calculator online SS CS alloy", h1: "Pipe Weight Calculator Online — SS, CS & Alloy", metaTitle: "Pipe Weight Calculator Online | CMI", metaDesc: "Free pipe weight calculator — SS, CS, alloy steel. Calculate per metre/foot. Formula + chart. By CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/steel-weight-calculator", keyword: "steel weight calculator all shapes online", h1: "Steel Weight Calculator — All Shapes Online", metaTitle: "Steel Weight Calculator Online | CMI", metaDesc: "Free steel weight calculator — pipe, plate, bar, angle, channel. All shapes. By CMI Vadodara Gujarat. Call +91 99982 80619." },
  { slug: "/blog/ss-pipe-weight-chart", keyword: "SS pipe weight chart ASTM A312 per metre", h1: "SS Pipe Weight Chart — ASTM A312 Per Metre", metaTitle: "SS Pipe Weight Chart A312 | CMI", metaDesc: "SS pipe weight chart ASTM A312 — per metre kg, all schedules 5S to XXS. Free download. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/cs-pipe-weight-chart", keyword: "carbon steel pipe weight chart A106 per metre", h1: "Carbon Steel Pipe Weight Chart — A106 Per Metre", metaTitle: "CS Pipe Weight Chart A106 | CMI", metaDesc: "Carbon steel pipe weight chart ASTM A106 per metre — SCH 40/80/160. All sizes. By CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/alloy-steel-pipe-weight-chart", keyword: "alloy steel pipe weight chart P91 P22 P11", h1: "Alloy Steel Pipe Weight Chart — P91, P22, P11", metaTitle: "Alloy Steel Pipe Weight Chart | CMI", metaDesc: "Alloy steel pipe weight chart P91/P22/P11 — ASTM A335 per metre. All schedules. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/erw-pipe-weight-chart", keyword: "ERW pipe weight chart IS 1239 all classes", h1: "ERW Pipe Weight Chart — IS 1239 All Classes", metaTitle: "ERW Pipe Weight Chart IS 1239 | CMI", metaDesc: "ERW pipe weight chart IS 1239 — Light, Medium, Heavy class per metre. Free chart by CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/ms-angle-weight-chart", keyword: "MS angle weight chart IS 808 all sizes", h1: "MS Angle Weight Chart — IS 808 All Sizes", metaTitle: "MS Angle Weight Chart IS 808 | CMI", metaDesc: "MS angle weight chart IS 808 — 20x20 to 200x200, per metre kg. Free reference. CMI Vadodara Gujarat. Call +91 99982 80619." },
  { slug: "/blog/ismc-channel-weight-chart", keyword: "ISMC channel weight chart IS 808", h1: "ISMC Channel Weight Chart — IS 808", metaTitle: "ISMC Channel Weight Chart | CMI", metaDesc: "ISMC channel weight chart IS 808 — ISMC 75 to 400, kg per metre. Free download. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/ismb-beam-weight-chart", keyword: "ISMB beam weight chart IS 808 all sizes", h1: "ISMB Beam Weight Chart — IS 808 All Sizes", metaTitle: "ISMB Beam Weight Chart IS 808 | CMI", metaDesc: "ISMB beam weight chart IS 808 — all sizes 100 to 600, kg per metre. CMI Vadodara Gujarat. Call +91 99982 80619." },
  { slug: "/blog/tmt-bar-weight-chart", keyword: "TMT bar weight chart 8mm to 32mm per metre", h1: "TMT Bar Weight Chart — 8mm to 32mm Per Metre", metaTitle: "TMT Bar Weight Chart Per Metre | CMI", metaDesc: "TMT bar weight chart 8mm to 32mm — kg per metre & per piece. Fe 500D. Free chart CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/ms-flat-bar-weight-chart", keyword: "MS flat bar weight chart all sizes", h1: "MS Flat Bar Weight Chart — All Sizes", metaTitle: "MS Flat Bar Weight Chart | CMI", metaDesc: "MS flat bar weight chart — all sizes 20x3 to 300x50mm, per metre kg. IS 2062. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/ms-round-bar-weight-chart", keyword: "MS round bar weight per metre chart", h1: "MS Round Bar Weight Per Metre Chart", metaTitle: "MS Round Bar Weight Chart | CMI", metaDesc: "MS round bar weight per metre chart — 6mm to 300mm diameter. IS 2062. Free reference CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/ms-square-bar-weight-chart", keyword: "MS square bar weight chart all sizes", h1: "MS Square Bar Weight Chart — All Sizes", metaTitle: "MS Square Bar Weight Chart | CMI", metaDesc: "MS square bar weight chart — 8mm to 150mm, per metre. IS 2062. CMI Vadodara Gujarat stockist. Call +91 99982 80619." },
  { slug: "/blog/ss-plate-weight-calculator", keyword: "SS plate weight calculator per sheet kg", h1: "SS Plate Weight Calculator — Per Sheet Kg", metaTitle: "SS Plate Weight Calculator | CMI", metaDesc: "SS plate weight calculator — per sheet kg. 304/316L all thickness. Free tool by CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/ms-plate-weight-calculator", keyword: "MS plate weight calculator per sheet", h1: "MS Plate Weight Calculator Per Sheet", metaTitle: "MS Plate Weight Calculator | CMI", metaDesc: "MS plate weight calculator per sheet — IS 2062 all sizes. Free online tool. CMI Vadodara Gujarat. Call +91 99982 80619." },
  { slug: "/blog/ss-round-bar-weight-chart", keyword: "SS round bar weight per metre 304 316", h1: "SS Round Bar Weight Per Metre — 304/316", metaTitle: "SS Round Bar Weight Chart | CMI", metaDesc: "SS round bar weight per metre chart — 304/316L, 6mm to 300mm. Free reference by CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/flange-weight-chart", keyword: "flange weight chart all sizes 150 300 600", h1: "Flange Weight Chart — All Sizes Class 150-600", metaTitle: "Flange Weight Chart All Classes | CMI", metaDesc: "Flange weight chart — class 150, 300, 600 all sizes. ASME B16.5. Free download. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/gi-pipe-weight-chart", keyword: "GI pipe weight chart all sizes galvanised", h1: "GI Pipe Weight Chart — All Sizes Galvanised", metaTitle: "GI Pipe Weight Chart | CMI", metaDesc: "GI pipe weight chart — galvanised, all sizes per metre. IS 1239 light/medium/heavy. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/copper-nickel-pipe-weight", keyword: "copper nickel pipe weight chart per metre", h1: "Copper Nickel Pipe Weight Chart Per Metre", metaTitle: "CuNi Pipe Weight Chart | CMI", metaDesc: "Copper nickel 70/30 90/10 pipe weight chart per metre — ASTM B466. CMI Vadodara exotic alloy. Call +91 99982 80619." },
  { slug: "/blog/inconel-pipe-weight-chart", keyword: "Inconel 625 600 pipe weight per metre", h1: "Inconel 625/600 Pipe Weight Per Metre Chart", metaTitle: "Inconel Pipe Weight Chart | CMI", metaDesc: "Inconel 625 & 600 pipe weight per metre chart — all schedules. ASTM B444/B167. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/duplex-pipe-weight-chart", keyword: "Duplex 2205 Super Duplex pipe weight chart", h1: "Duplex 2205 & Super Duplex Pipe Weight Chart", metaTitle: "Duplex Pipe Weight Chart | CMI", metaDesc: "Duplex 2205 & Super Duplex 2507 pipe weight chart per metre. ASTM A790. CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/titanium-pipe-weight-chart", keyword: "titanium pipe weight chart Grade 2 5", h1: "Titanium Pipe Weight Chart — Grade 2 & 5", metaTitle: "Titanium Pipe Weight Chart | CMI", metaDesc: "Titanium Grade 2 & 5 pipe weight chart per metre — ASTM B861. CMI Vadodara exotic stockist. Call +91 99982 80619." },
  { slug: "/blog/monel-pipe-weight-chart", keyword: "Monel 400 pipe weight chart per metre", h1: "Monel 400 Pipe Weight Chart Per Metre", metaTitle: "Monel 400 Pipe Weight Chart | CMI", metaDesc: "Monel 400 pipe weight chart per metre — ASTM B165 all sizes. CMI Vadodara exotic alloy stockist. Call +91 99982 80619." },
  { slug: "/blog/hastelloy-pipe-weight-chart", keyword: "Hastelloy C276 pipe weight per metre", h1: "Hastelloy C276 Pipe Weight Per Metre Chart", metaTitle: "Hastelloy Pipe Weight Chart | CMI", metaDesc: "Hastelloy C276 pipe weight per metre chart — ASTM B622 all sizes. CMI Vadodara supplier. Call +91 99982 80619." },
  { slug: "/blog/pipe-elbow-weight-chart", keyword: "pipe elbow weight chart 90 45 degree all sizes", h1: "Pipe Elbow Weight Chart — 90° & 45° All Sizes", metaTitle: "Pipe Elbow Weight Chart | CMI", metaDesc: "Pipe elbow weight chart — 90° & 45° LR/SR, all sizes. ASME B16.9. Free chart CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/ss-sheet-weight-calculator", keyword: "SS sheet weight calculator 304 316 per piece", h1: "SS Sheet Weight Calculator — 304/316 Per Piece", metaTitle: "SS Sheet Weight Calculator | CMI", metaDesc: "SS sheet weight calculator 304/316 per piece — all gauges. Free online tool by CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/hollow-section-weight-chart", keyword: "hollow section weight chart RHS SHS CHS", h1: "Hollow Section Weight Chart — RHS, SHS & CHS", metaTitle: "Hollow Section Weight Chart | CMI", metaDesc: "Hollow section weight chart — RHS, SHS, CHS per metre. All sizes. MS & SS. CMI Vadodara Gujarat. Call +91 99982 80619." },
  { slug: "/blog/chequered-plate-weight-chart", keyword: "chequered plate weight chart 3mm to 8mm", h1: "Chequered Plate Weight Chart — 3mm to 8mm", metaTitle: "Chequered Plate Weight Chart | CMI", metaDesc: "Chequered plate weight chart 3mm to 8mm — MS & SS. Per sheet weight. Free chart CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/ss-angle-weight-chart", keyword: "SS angle weight chart stainless steel", h1: "SS Angle Weight Chart — Stainless Steel", metaTitle: "SS Angle Weight Chart | CMI", metaDesc: "Stainless steel angle weight chart — 304/316L all sizes per metre. Free reference CMI Vadodara. Call +91 99982 80619." },
  { slug: "/blog/pipe-volume-calculator", keyword: "pipe volume calculator litres per metre", h1: "Pipe Volume Calculator — Litres Per Metre", metaTitle: "Pipe Volume Calculator | CMI", metaDesc: "Pipe volume calculator — litres per metre for all pipe sizes. Free online tool by CMI Vadodara. Call +91 99982 80619." },
];

// ============================================================
// SECTION 5: COMPARISON & VS ARTICLES (Pages 181-230)
// ============================================================
const SECTION_5_PAGES = [
  { slug: "/blog/carbon-steel-vs-stainless-steel", keyword: "carbon steel vs stainless steel pipe", h1: "Carbon Steel vs Stainless Steel Pipe — Complete Comparison" },
  { slug: "/blog/ss-304-vs-ss-316-difference", keyword: "SS 304 vs SS 316 difference which grade", h1: "SS 304 vs SS 316 — Difference & Which Grade to Choose" },
  { slug: "/blog/alloy-steel-vs-carbon-steel", keyword: "alloy steel vs carbon steel pipe", h1: "Alloy Steel vs Carbon Steel Pipe — When to Specify Each" },
  { slug: "/blog/duplex-2205-vs-inconel-625", keyword: "Duplex 2205 vs Inconel 625 cost performance", h1: "Duplex 2205 vs Inconel 625 — Cost & Performance Comparison" },
  { slug: "/blog/astm-vs-asme-difference", keyword: "ASTM vs ASME difference for steel buyers", h1: "ASTM vs ASME — Difference Explained for Steel Buyers" },
  { slug: "/blog/is-1239-vs-is-3589", keyword: "IS 1239 vs IS 3589 ERW pipe standard", h1: "IS 1239 vs IS 3589 — ERW Pipe Standards Compared" },
  { slug: "/blog/ss-304-vs-ss-202", keyword: "SS 304 vs SS 202 difference food grade", h1: "SS 304 vs SS 202 — Difference & Food Grade Selection" },
  { slug: "/blog/seamless-vs-spiral-welded-pipe", keyword: "seamless vs spiral welded pipe HSAW", h1: "Seamless vs Spiral Welded Pipe (HSAW) — Comparison" },
  { slug: "/blog/ss-pipe-vs-gi-pipe", keyword: "SS pipe vs GI pipe for water supply", h1: "SS Pipe vs GI Pipe for Water Supply — Which is Better?" },
  { slug: "/blog/forged-vs-cast-fittings", keyword: "forged vs cast fittings which is stronger", h1: "Forged vs Cast Fittings — Which is Stronger?" },
  { slug: "/blog/indian-mill-vs-imported-pipe", keyword: "Indian mill vs imported SS pipe Jindal vs", h1: "Indian Mill vs Imported SS Pipe — Jindal vs Import" },
  { slug: "/blog/ss-304-vs-ss-304l", keyword: "SS 304 vs 304L difference welding", h1: "SS 304 vs 304L — Difference in Welding & Corrosion" },
  { slug: "/blog/ss-316-vs-ss-316l", keyword: "SS 316 vs 316L difference low carbon", h1: "SS 316 vs 316L — Low Carbon Difference Explained" },
  { slug: "/blog/wn-flange-vs-so-flange", keyword: "weld neck vs slip on flange when to use", h1: "Weld Neck vs Slip-On Flange — When to Use Each" },
  { slug: "/blog/socket-weld-vs-threaded", keyword: "socket weld vs threaded fittings", h1: "Socket Weld vs Threaded Fittings — Comparison Guide" },
  { slug: "/blog/a312-vs-a358-pipe", keyword: "ASTM A312 vs A358 welded pipe", h1: "ASTM A312 vs A358 — Welded Pipe Standards Compared" },
  { slug: "/blog/duplex-2205-vs-ss-316l", keyword: "Duplex 2205 vs SS 316L which to specify", h1: "Duplex 2205 vs SS 316L — Which to Specify?" },
  { slug: "/blog/sa516-gr60-vs-gr70", keyword: "SA 516 Gr 60 vs Gr 70 plate difference", h1: "SA 516 Gr.60 vs Gr.70 Plate — Difference Explained" },
  { slug: "/blog/ss-310-vs-ss-304", keyword: "SS 310 vs SS 304 high temperature", h1: "SS 310 vs SS 304 — High Temperature Performance" },
  { slug: "/blog/ss-321-vs-ss-347", keyword: "SS 321 vs SS 347 titanium vs niobium", h1: "SS 321 vs SS 347 — Titanium vs Niobium Stabilised" },
  { slug: "/blog/inconel-625-vs-inconel-600", keyword: "Inconel 625 vs 600 difference uses", h1: "Inconel 625 vs 600 — Difference & Applications" },
  { slug: "/blog/inconel-625-vs-hastelloy-c276", keyword: "Inconel 625 vs Hastelloy C276 which alloy", h1: "Inconel 625 vs Hastelloy C276 — Which Alloy to Choose?" },
  { slug: "/blog/monel-400-vs-monel-k500", keyword: "Monel 400 vs K500 difference strength", h1: "Monel 400 vs K500 — Difference in Strength & Uses" },
  { slug: "/blog/titanium-vs-stainless-steel", keyword: "titanium vs stainless steel pipe cost", h1: "Titanium vs Stainless Steel Pipe — Cost Comparison" },
  { slug: "/blog/duplex-vs-super-duplex", keyword: "Duplex 2205 vs Super Duplex 2507 PREN", h1: "Duplex 2205 vs Super Duplex 2507 — PREN & Performance" },
  { slug: "/blog/p91-vs-p22-alloy-steel", keyword: "P91 vs P22 alloy steel pipe temperature", h1: "P91 vs P22 Alloy Steel Pipe — Temperature & Creep" },
  { slug: "/blog/p11-vs-p22-difference", keyword: "P11 vs P22 pipe difference creep", h1: "P11 vs P22 Pipe — Difference in Creep Strength" },
  { slug: "/blog/sa-179-vs-sa-192-boiler-tube", keyword: "SA 179 vs SA 192 boiler tube which grade", h1: "SA 179 vs SA 192 Boiler Tube — Which Grade?" },
  { slug: "/blog/sa-213-vs-sa-249-tube", keyword: "SA 213 vs SA 249 tube seamless vs welded", h1: "SA 213 vs SA 249 Tube — Seamless vs Welded" },
  { slug: "/blog/sa-106-vs-api-5l", keyword: "ASTM A106 vs API 5L pipe which standard", h1: "ASTM A106 vs API 5L — Which Pipe Standard?" },
  { slug: "/blog/rf-vs-ff-vs-rtj-flange", keyword: "RF vs FF vs RTJ flange face types", h1: "RF vs FF vs RTJ — Flange Face Types Explained" },
  { slug: "/blog/ansi-flange-vs-din-flange", keyword: "ANSI flange vs DIN flange dimensions", h1: "ANSI Flange vs DIN Flange — Dimension Differences" },
  { slug: "/blog/class-150-vs-class-300-flange", keyword: "Class 150 vs 300 flange pressure rating", h1: "Class 150 vs Class 300 Flange — Pressure Rating" },
  { slug: "/blog/schedule-10-vs-schedule-40", keyword: "Schedule 10 vs Schedule 40 pipe wall", h1: "Schedule 10 vs Schedule 40 Pipe — Wall Thickness" },
  { slug: "/blog/sch-80-vs-sch-160-pipe", keyword: "SCH 80 vs SCH 160 pipe difference", h1: "SCH 80 vs SCH 160 Pipe — Difference & Applications" },
  { slug: "/blog/butt-weld-vs-socket-weld", keyword: "butt weld vs socket weld fittings size", h1: "Butt Weld vs Socket Weld Fittings — Size & Selection" },
  { slug: "/blog/3000-vs-6000-lb-fittings", keyword: "3000 lb vs 6000 lb forged fittings", h1: "3000# vs 6000# Forged Fittings — Pressure Difference" },
  { slug: "/blog/nace-mr0175-vs-mr0103", keyword: "NACE MR0175 vs MR0103 sour service", h1: "NACE MR0175 vs MR0103 — Sour Service Standards" },
  { slug: "/blog/psl1-vs-psl2-api-5l", keyword: "PSL1 vs PSL2 API 5L line pipe", h1: "PSL1 vs PSL2 API 5L — Line Pipe Specification Levels" },
  { slug: "/blog/hot-rolled-vs-cold-rolled-steel", keyword: "hot rolled vs cold rolled steel sheet plate", h1: "Hot Rolled vs Cold Rolled Steel — Sheet & Plate" },
  { slug: "/blog/austenitic-vs-ferritic-stainless", keyword: "austenitic vs ferritic stainless steel", h1: "Austenitic vs Ferritic Stainless Steel — Comparison" },
  { slug: "/blog/austenitic-vs-martensitic", keyword: "austenitic vs martensitic stainless 304 vs 410", h1: "Austenitic vs Martensitic — SS 304 vs 410" },
  { slug: "/blog/seamless-vs-welded-ss-pipe", keyword: "SS seamless vs welded pipe when to use", h1: "SS Seamless vs Welded Pipe — When to Use Which" },
  { slug: "/blog/a234-wpb-vs-a420-wpl6", keyword: "A234 WPB vs A420 WPL6 fittings temp", h1: "A234 WPB vs A420 WPL6 — Fittings Temperature Range" },
  { slug: "/blog/cs-plate-vs-alloy-plate", keyword: "carbon steel plate vs alloy steel plate", h1: "Carbon Steel Plate vs Alloy Steel Plate — Selection" },
  { slug: "/blog/fe500-vs-fe500d-tmt", keyword: "Fe 500 vs Fe 500D TMT bar ductility", h1: "Fe 500 vs Fe 500D TMT Bar — Ductility Difference" },
  { slug: "/blog/sail-vs-jsw-tmt-bars", keyword: "SAIL vs JSW TMT bars which brand", h1: "SAIL vs JSW TMT Bars — Which Brand is Better?" },
  { slug: "/blog/ss-304-vs-316-food-industry", keyword: "SS 304 vs 316 for food industry", h1: "SS 304 vs 316 for Food Industry — Grade Selection" },
  { slug: "/blog/copper-nickel-9010-vs-7030", keyword: "CuNi 90/10 vs 70/30 marine seawater", h1: "Copper Nickel 90/10 vs 70/30 — Marine Selection" },
  { slug: "/blog/en10204-31-vs-32-certificate", keyword: "EN 10204 3.1 vs 3.2 MTC certificate", h1: "EN 10204 3.1 vs 3.2 — MTC Certificate Difference" },
];

// ============================================================
// SECTION 6: SPECIFICATION & STANDARD GUIDES (Pages 231-270)
// ============================================================
const SECTION_6_PAGES = [
  { slug: "/blog/asme-b16-5-flange-dimensions", keyword: "ASME B16.5 flange dimensions chart all classes", h1: "ASME B16.5 Flange Dimensions Chart — All Classes" },
  { slug: "/blog/asme-b16-9-fittings-dimensions", keyword: "ASME B16.9 fittings dimensions elbow tee", h1: "ASME B16.9 Fittings Dimensions — Elbow, Tee & Reducer" },
  { slug: "/blog/asme-b16-11-forged-fittings", keyword: "ASME B16.11 forged fittings spec 3000 6000", h1: "ASME B16.11 Forged Fittings — 3000# & 6000# Specification" },
  { slug: "/blog/asme-b16-47-large-flanges", keyword: "ASME B16.47 large diameter flanges 26 to 60", h1: "ASME B16.47 Large Flanges — 26\" to 60\" Dimensions" },
  { slug: "/blog/asme-b36-10-pipe-dimensions", keyword: "ASME B36.10 CS pipe dimensions table", h1: "ASME B36.10 Carbon Steel Pipe Dimensions Table" },
  { slug: "/blog/asme-b36-19-ss-pipe-dimensions", keyword: "ASME B36.19 SS pipe dimensions schedule", h1: "ASME B36.19 SS Pipe Dimensions & Schedule Table" },
  { slug: "/blog/is-1239-pipe-specification", keyword: "IS 1239 pipe specification ERW Light Medium Heavy", h1: "IS 1239 Pipe Specification — ERW Light, Medium & Heavy" },
  { slug: "/blog/is-3589-pipe-specification", keyword: "IS 3589 ERW pipe specification large diameter", h1: "IS 3589 ERW Pipe Specification — Large Diameter" },
  { slug: "/blog/is-2062-steel-specification", keyword: "IS 2062 steel specification E250 E350 properties", h1: "IS 2062 Steel Specification — E250 & E350 Properties" },
  { slug: "/blog/is-1786-tmt-bar-specification", keyword: "IS 1786 TMT bar specification Fe 500D", h1: "IS 1786 TMT Bar Specification — Fe 500D" },
  { slug: "/blog/is-808-structural-sections", keyword: "IS 808 structural steel sections angle channel beam", h1: "IS 808 Structural Steel Sections — Angle, Channel & Beam" },
  { slug: "/blog/astm-a182-forged-fittings", keyword: "ASTM A182 forged fittings F304 F316 F51 spec", h1: "ASTM A182 Forged Fittings — F304, F316, F51 Specification" },
  { slug: "/blog/astm-a403-buttweld-fittings", keyword: "ASTM A403 WP304 WP316 buttweld specification", h1: "ASTM A403 Buttweld Fittings — WP304/WP316 Specification" },
  { slug: "/blog/astm-a240-ss-plate-spec", keyword: "ASTM A240 SS plate specification 304 316L", h1: "ASTM A240 SS Plate Specification — 304 & 316L" },
  { slug: "/blog/astm-a269-tube-specification", keyword: "ASTM A269 SS tube instrumentation specification", h1: "ASTM A269 SS Tube Specification — Instrumentation" },
  { slug: "/blog/astm-a249-tube-specification", keyword: "ASTM A249 welded tube boiler condenser spec", h1: "ASTM A249 Welded Tube Specification — Boiler & Condenser" },
  { slug: "/blog/astm-a335-alloy-pipe-spec", keyword: "ASTM A335 alloy pipe specification P91 P22 P11", h1: "ASTM A335 Alloy Pipe Specification — P91, P22 & P11" },
  { slug: "/blog/astm-a105-flange-spec", keyword: "ASTM A105 carbon steel flange specification", h1: "ASTM A105 Carbon Steel Flange Specification" },
  { slug: "/blog/astm-a106-pipe-specification", keyword: "ASTM A106 Gr.B CS pipe specification properties", h1: "ASTM A106 Gr.B CS Pipe Specification & Properties" },
  { slug: "/blog/astm-a333-low-temp-pipe", keyword: "ASTM A333 Gr.6 low temperature pipe spec", h1: "ASTM A333 Gr.6 Low Temperature Pipe Specification" },
  { slug: "/blog/astm-a358-welded-pipe-spec", keyword: "ASTM A358 EFW pipe specification SS", h1: "ASTM A358 EFW Pipe Specification — SS Grades" },
  { slug: "/blog/astm-a691-pipe-spec", keyword: "ASTM A691 pipe specification EFW", h1: "ASTM A691 EFW Pipe Specification — High Pressure" },
  { slug: "/blog/astm-a815-duplex-fittings", keyword: "ASTM A815 duplex super duplex fittings spec", h1: "ASTM A815 Duplex & Super Duplex Fittings Specification" },
  { slug: "/blog/astm-b444-inconel-pipe-spec", keyword: "ASTM B444 Inconel 625 pipe specification", h1: "ASTM B444 Inconel 625 Pipe Specification" },
  { slug: "/blog/astm-b574-hastelloy-spec", keyword: "ASTM B574 Hastelloy rod bar specification", h1: "ASTM B574 Hastelloy Rod & Bar Specification" },
  { slug: "/blog/astm-b861-titanium-pipe-spec", keyword: "ASTM B861 titanium Grade 2 5 pipe spec", h1: "ASTM B861 Titanium Pipe Specification — Grade 2 & 5" },
  { slug: "/blog/astm-b165-monel-pipe-spec", keyword: "ASTM B165 Monel 400 pipe tube specification", h1: "ASTM B165 Monel 400 Pipe & Tube Specification" },
  { slug: "/blog/astm-b466-copper-nickel-spec", keyword: "ASTM B466 copper nickel pipe specification", h1: "ASTM B466 Copper Nickel Pipe Specification" },
  { slug: "/blog/api-5l-specification-guide", keyword: "API 5L line pipe specification grades PSL", h1: "API 5L Line Pipe Specification — Grades & PSL Levels" },
  { slug: "/blog/api-5ct-casing-specification", keyword: "API 5CT casing tubing specification OCTG", h1: "API 5CT Casing & Tubing Specification — OCTG Guide" },
  { slug: "/blog/din-flange-dimensions-chart", keyword: "DIN flange dimensions PN10 PN16 PN40 chart", h1: "DIN Flange Dimensions Chart — PN10, PN16, PN40" },
  { slug: "/blog/en-10216-seamless-pipe-spec", keyword: "EN 10216 seamless pipe European specification", h1: "EN 10216 Seamless Pipe — European Specification" },
  { slug: "/blog/en-10217-welded-pipe-spec", keyword: "EN 10217 welded pipe specification EU", h1: "EN 10217 Welded Pipe Specification — EU Standard" },
  { slug: "/blog/nace-mr0175-material-guide", keyword: "NACE MR0175 ISO 15156 material requirements", h1: "NACE MR0175 / ISO 15156 — Material Requirements Guide" },
  { slug: "/blog/nace-tm0284-hic-test-procedure", keyword: "NACE TM0284 HIC test procedure acceptance", h1: "NACE TM0284 HIC Test Procedure & Acceptance Criteria" },
  { slug: "/blog/ibr-form-iiic-complete-guide", keyword: "IBR Form III-C complete guide pipe tube", h1: "IBR Form III-C Complete Guide — Pipe & Tube" },
  { slug: "/blog/pmi-testing-complete-guide", keyword: "PMI testing XRF OES guide for steel", h1: "PMI Testing Complete Guide — XRF & OES for Steel" },
  { slug: "/blog/ndt-testing-methods-pipes", keyword: "NDT testing methods for pipes UT RT DPT MPT", h1: "NDT Testing Methods for Pipes — UT, RT, DPT & MPT" },
  { slug: "/blog/sa-516-plate-specification", keyword: "SA 516 Gr 60 70 plate specification properties", h1: "SA 516 Gr.60/70 Plate Specification & Properties" },
  { slug: "/blog/sa-387-plate-specification", keyword: "SA 387 Gr 11 22 91 plate specification", h1: "SA 387 Gr.11/22/91 Plate Specification Guide" },
];

// ============================================================
// SECTION 7: INDUSTRY APPLICATION GUIDES (Pages 271-310)
// ============================================================
const SECTION_7_PAGES = [
  { slug: "/blog/piping-material-oil-refinery", keyword: "piping material for oil refinery A106 P5 SS", h1: "Piping Material for Oil Refinery — A106, P5, SS Selection" },
  { slug: "/blog/steel-for-power-plant-boiler", keyword: "steel for power plant boiler P91 P22 SA 213", h1: "Steel for Power Plant Boilers — P91, P22 & SA 213" },
  { slug: "/blog/piping-for-chemical-plant", keyword: "piping material for chemical plant SS Hastelloy", h1: "Piping Material for Chemical Plant — SS & Hastelloy" },
  { slug: "/blog/ss-pipe-for-pharma-industry", keyword: "SS pipe for pharma industry 316L electropolished", h1: "SS Pipe for Pharma Industry — 316L Electropolished" },
  { slug: "/blog/ss-pipe-for-dairy-food", keyword: "SS pipe for dairy food processing 304 sanitary", h1: "SS Pipe for Dairy & Food Processing — 304 Sanitary" },
  { slug: "/blog/piping-for-fertilizer-plant", keyword: "piping material fertilizer plant GNFC GSFC", h1: "Piping Material for Fertilizer Plant — GNFC & GSFC" },
  { slug: "/blog/ss-pipe-for-water-treatment", keyword: "SS pipe for water treatment STP ETP plant", h1: "SS Pipe for Water Treatment — STP & ETP Plant" },
  { slug: "/blog/piping-for-sugar-mill", keyword: "piping material sugar mill industry CS SS", h1: "Piping Material for Sugar Mill Industry — CS & SS" },
  { slug: "/blog/ss-pipe-for-marine-offshore", keyword: "SS pipe for marine offshore Duplex Inconel CuNi", h1: "SS Pipe for Marine & Offshore — Duplex, Inconel & CuNi" },
  { slug: "/blog/structural-steel-for-building", keyword: "structural steel for building angle channel beam", h1: "Structural Steel for Building — Angle, Channel & Beam" },
  { slug: "/blog/steel-for-cement-plant", keyword: "steel piping for cement plant CS alloy", h1: "Steel Piping for Cement Plant — CS & Alloy Selection" },
  { slug: "/blog/piping-for-pulp-paper-mill", keyword: "piping material pulp paper mill SS 316L Duplex", h1: "Piping for Pulp & Paper Mill — SS 316L & Duplex" },
  { slug: "/blog/piping-for-desalination-plant", keyword: "piping material desalination Super Duplex titanium", h1: "Piping for Desalination Plant — Super Duplex & Titanium" },
  { slug: "/blog/steel-for-solar-power-plant", keyword: "steel for solar structure MS angle channel", h1: "Steel for Solar Power Plant — MS Angle & Channel" },
  { slug: "/blog/piping-for-lng-terminal", keyword: "piping material LNG terminal cryogenic A333", h1: "Piping for LNG Terminal — Cryogenic ASTM A333" },
  { slug: "/blog/steel-for-shipbuilding", keyword: "steel grade for ship building marine ABS Lloyd", h1: "Steel for Shipbuilding — Marine Grade ABS & Lloyd's" },
  { slug: "/blog/piping-for-brewery-distillery", keyword: "piping for brewery distillery SS 304 316L", h1: "Piping for Brewery & Distillery — SS 304 & 316L" },
  { slug: "/blog/steel-for-nuclear-power-plant", keyword: "steel material nuclear power plant P91 Inconel", h1: "Steel for Nuclear Power Plant — P91 & Inconel" },
  { slug: "/blog/piping-for-paint-chemical", keyword: "piping for paint chemical industry Hastelloy SS", h1: "Piping for Paint & Chemical Industry — Hastelloy & SS" },
  { slug: "/blog/piping-for-gas-distribution", keyword: "piping material city gas distribution API 5L PE", h1: "Piping for City Gas Distribution — API 5L & PE" },
  { slug: "/blog/ss-pipe-for-hospital-medical-gas", keyword: "SS pipe for hospital medical gas system", h1: "SS Pipe for Hospital Medical Gas System" },
  { slug: "/blog/piping-for-ethanol-biofuel", keyword: "piping material ethanol biofuel plant SS CS", h1: "Piping for Ethanol & Biofuel Plant — SS & CS" },
  { slug: "/blog/steel-for-peb-warehouse", keyword: "steel for PEB warehouse MS section hollow", h1: "Steel for PEB Warehouse — MS Section & Hollow" },
  { slug: "/blog/piping-for-cng-station", keyword: "piping for CNG station high pressure CS", h1: "Piping for CNG Station — High Pressure Carbon Steel" },
  { slug: "/blog/ss-pipe-for-swimming-pool", keyword: "SS pipe for swimming pool 316L chlorine", h1: "SS Pipe for Swimming Pool — 316L Chlorine Resistant" },
  { slug: "/blog/piping-for-oil-gas-pipeline", keyword: "piping for oil gas pipeline API 5L X52 X65", h1: "Piping for Oil & Gas Pipeline — API 5L X52 to X65" },
  { slug: "/blog/steel-for-metro-rail", keyword: "steel for metro rail structure MS plate angle", h1: "Steel for Metro Rail — MS Plate, Angle & Structure" },
  { slug: "/blog/piping-for-hydrogen-plant", keyword: "piping material hydrogen plant SS 316L Inconel", h1: "Piping for Hydrogen Plant — SS 316L & Inconel" },
  { slug: "/blog/piping-for-ammonia-urea", keyword: "piping material ammonia urea plant Duplex SS", h1: "Piping for Ammonia & Urea Plant — Duplex & SS" },
  { slug: "/blog/steel-for-cold-storage", keyword: "steel structure cold storage MS section TMT", h1: "Steel for Cold Storage — MS Section & TMT" },
  { slug: "/blog/ss-for-architecture-building", keyword: "stainless steel in architecture cladding railing", h1: "Stainless Steel in Architecture — Cladding & Railing" },
  { slug: "/blog/piping-for-effluent-treatment", keyword: "piping for ETP effluent treatment SS FRP", h1: "Piping for Effluent Treatment (ETP) — SS & FRP" },
  { slug: "/blog/piping-for-geothermal-plant", keyword: "piping material geothermal plant Inconel titanium", h1: "Piping for Geothermal Plant — Inconel & Titanium" },
  { slug: "/blog/steel-for-wind-turbine", keyword: "steel for wind turbine tower structure plate", h1: "Steel for Wind Turbine — Tower Structure & Plate" },
  { slug: "/blog/ss-pipe-for-kitchen-equipment", keyword: "SS pipe for commercial kitchen 304 tube", h1: "SS Pipe for Commercial Kitchen Equipment — 304 Tube" },
  { slug: "/blog/piping-for-natural-gas-city", keyword: "piping for CGD city gas distribution PE CS", h1: "Piping for Natural Gas CGD — PE & Carbon Steel" },
  { slug: "/blog/piping-for-textile-industry", keyword: "piping for textile dyeing SS 304 316L", h1: "Piping for Textile Industry — Dyeing SS 304 & 316L" },
  { slug: "/blog/steel-for-bridge-construction", keyword: "structural steel for bridge construction plate", h1: "Structural Steel for Bridge Construction — Plate & Section" },
  { slug: "/blog/piping-for-oil-well-drilling", keyword: "piping for oil well drilling API 5CT OCTG", h1: "Piping for Oil Well Drilling — API 5CT OCTG" },
  { slug: "/blog/material-for-heat-exchanger", keyword: "material selection for heat exchanger SS CuNi Ti", h1: "Material Selection for Heat Exchanger — SS, CuNi & Ti" },
];

// ============================================================
// SECTION 8: HOW-TO & PROCESS ARTICLES (Pages 311-350)
// ============================================================
const SECTION_8_PAGES = [
  { slug: "/blog/how-to-calculate-pipe-weight", keyword: "how to calculate pipe weight formula SS CS", h1: "How to Calculate Pipe Weight — Formula for SS & CS" },
  { slug: "/blog/how-to-read-pipe-marking", keyword: "how to read pipe marking stencil heat number", h1: "How to Read Pipe Marking — Stencil & Heat Number" },
  { slug: "/blog/how-to-identify-ss-grade", keyword: "how to identify stainless steel grade 304 316", h1: "How to Identify Stainless Steel Grade — 304 vs 316" },
  { slug: "/blog/how-to-do-hydrostatic-test", keyword: "hydrostatic test procedure for pipe pressure", h1: "Hydrostatic Test Procedure for Pipe — Pressure Testing" },
  { slug: "/blog/how-to-weld-p91-steel", keyword: "P91 welding procedure preheat PWHT", h1: "How to Weld P91 Steel — Preheat & PWHT Procedure" },
  { slug: "/blog/how-to-weld-duplex-2205", keyword: "Duplex 2205 welding guide heat input ferrite", h1: "How to Weld Duplex 2205 — Heat Input & Ferrite Control" },
  { slug: "/blog/how-to-weld-inconel-625", keyword: "Inconel 625 welding procedure filler ERNiCrMo3", h1: "How to Weld Inconel 625 — Filler ERNiCrMo-3 Procedure" },
  { slug: "/blog/how-to-weld-ss-304-316", keyword: "how to weld SS 304 316L stainless steel", h1: "How to Weld SS 304 & 316L Stainless Steel" },
  { slug: "/blog/how-to-weld-carbon-steel-pipe", keyword: "carbon steel pipe welding procedure A106", h1: "Carbon Steel Pipe Welding Procedure — A106 Gr.B" },
  { slug: "/blog/how-to-weld-monel-400", keyword: "Monel 400 welding procedure filler metal", h1: "How to Weld Monel 400 — Filler Metal & Procedure" },
  { slug: "/blog/how-to-passivate-ss-pipe", keyword: "SS pipe passivation procedure chemical", h1: "SS Pipe Passivation Procedure — Chemical Method" },
  { slug: "/blog/how-to-do-pmi-testing", keyword: "PMI testing procedure XRF gun explained", h1: "How to Do PMI Testing — XRF Gun Procedure Explained" },
  { slug: "/blog/how-to-read-mill-test-certificate", keyword: "how to read MTC mill test certificate", h1: "How to Read a Mill Test Certificate (MTC)" },
  { slug: "/blog/how-to-calculate-flange-bolt-load", keyword: "flange bolt torque load calculation", h1: "Flange Bolt Torque & Load Calculation Guide" },
  { slug: "/blog/how-to-select-gasket-type", keyword: "gasket selection guide spiral wound RTJ", h1: "Gasket Selection Guide — Spiral Wound & RTJ" },
  { slug: "/blog/how-to-do-radiography-testing", keyword: "radiography testing RT for welds pipe", h1: "Radiography Testing (RT) for Pipe Welds — Procedure" },
  { slug: "/blog/how-to-do-ultrasonic-testing", keyword: "ultrasonic testing UT for pipe weld", h1: "Ultrasonic Testing (UT) for Pipe Welds — Guide" },
  { slug: "/blog/how-to-check-ss-pipe-quality", keyword: "how to check SS pipe quality inspection", h1: "How to Check SS Pipe Quality — Inspection Points" },
  { slug: "/blog/how-to-check-tmt-bar-quality", keyword: "how to check TMT bar quality site BIS", h1: "How to Check TMT Bar Quality at Site — BIS Tests" },
  { slug: "/blog/how-to-store-stainless-steel", keyword: "stainless steel storage handling guide", h1: "Stainless Steel Storage & Handling Guide" },
  { slug: "/blog/how-to-store-carbon-steel-pipe", keyword: "carbon steel pipe storage rust prevention", h1: "Carbon Steel Pipe Storage — Rust Prevention Guide" },
  { slug: "/blog/how-to-prevent-galvanic-corrosion", keyword: "galvanic corrosion prevention dissimilar metals", h1: "Galvanic Corrosion Prevention — Dissimilar Metals" },
  { slug: "/blog/how-to-do-hardness-testing", keyword: "hardness testing BHN HRC HV for pipes", h1: "Hardness Testing for Pipes — BHN, HRC & HV Methods" },
  { slug: "/blog/how-to-do-impact-test-charpy", keyword: "Charpy impact test steel pipe procedure", h1: "Charpy Impact Test for Steel Pipe — Procedure" },
  { slug: "/blog/how-to-select-pipe-schedule", keyword: "how to select pipe schedule wall thickness", h1: "How to Select Pipe Schedule & Wall Thickness" },
  { slug: "/blog/how-to-do-dye-penetrant-test", keyword: "dye penetrant testing DPT procedure", h1: "Dye Penetrant Testing (DPT) Procedure — Step by Step" },
  { slug: "/blog/how-to-bend-ss-pipe", keyword: "SS pipe bending methods cold hot induction", h1: "SS Pipe Bending Methods — Cold, Hot & Induction" },
  { slug: "/blog/how-to-calculate-plate-weight", keyword: "steel plate weight calculation formula all types", h1: "Steel Plate Weight Calculation Formula — All Types" },
  { slug: "/blog/how-to-read-piping-isometric", keyword: "how to read piping isometric drawing spool", h1: "How to Read a Piping Isometric Drawing — Spool Guide" },
  { slug: "/blog/how-to-do-ferrite-testing", keyword: "ferrite content testing duplex weld", h1: "Ferrite Content Testing for Duplex Weld — Guide" },
  { slug: "/blog/how-to-pickle-passivate-ss", keyword: "pickling passivation SS pipe acid procedure", h1: "Pickling & Passivation of SS Pipe — Acid Procedure" },
  { slug: "/blog/how-to-select-expansion-joint", keyword: "expansion joint selection bellows piping", h1: "Expansion Joint Selection for Piping — Bellows Guide" },
  { slug: "/blog/how-to-do-magnetic-particle-test", keyword: "magnetic particle testing MPT pipe weld", h1: "Magnetic Particle Testing (MPT) for Pipe Welds" },
  { slug: "/blog/how-to-calculate-thermal-expansion", keyword: "pipe thermal expansion calculation SS CS", h1: "Pipe Thermal Expansion Calculation — SS & CS" },
  { slug: "/blog/how-to-do-heat-treatment", keyword: "heat treatment steel pipe annealing normalizing", h1: "Heat Treatment for Steel Pipe — Annealing & Normalizing" },
  { slug: "/blog/how-to-insulate-hot-pipe", keyword: "pipe insulation selection hot cold service", h1: "Pipe Insulation Selection — Hot & Cold Service" },
  { slug: "/blog/how-to-do-pwht-procedure", keyword: "PWHT post weld heat treatment procedure P91", h1: "PWHT Procedure for P91 — Post Weld Heat Treatment" },
  { slug: "/blog/how-to-choose-valve-piping", keyword: "valve selection guide for piping gate globe ball", h1: "Valve Selection Guide for Piping — Gate, Globe & Ball" },
  { slug: "/blog/how-to-prepare-piping-mto", keyword: "MTO material take off piping estimation", h1: "How to Prepare Piping MTO — Material Take Off" },
  { slug: "/blog/how-to-prevent-stress-corrosion", keyword: "stress corrosion cracking SCC prevention SS", h1: "Stress Corrosion Cracking (SCC) Prevention in SS" },
];

// ============================================================
// SECTION 9: MATERIAL KNOWLEDGE & GUIDE ARTICLES (Pages 351-400)
// ============================================================
const SECTION_9_PAGES = [
  { slug: "/blog/what-is-stainless-steel", keyword: "what is stainless steel types 304 316 duplex", h1: "What is Stainless Steel? — Types, Grades & Uses" },
  { slug: "/blog/what-is-duplex-stainless-steel", keyword: "what is duplex stainless steel 2205 explained", h1: "What is Duplex Stainless Steel? — 2205 Explained" },
  { slug: "/blog/what-is-super-duplex-steel", keyword: "what is super duplex stainless steel 2507", h1: "What is Super Duplex Stainless Steel? — 2507 Guide" },
  { slug: "/blog/what-is-alloy-steel", keyword: "what is alloy steel types P91 P22 grades", h1: "What is Alloy Steel? — Types, Grades P91 & P22" },
  { slug: "/blog/what-is-carbon-steel", keyword: "what is carbon steel types uses mild medium", h1: "What is Carbon Steel? — Types, Uses & Grades" },
  { slug: "/blog/what-is-mild-steel", keyword: "what is mild steel MS low carbon properties", h1: "What is Mild Steel (MS)? — Low Carbon Properties" },
  { slug: "/blog/what-is-inconel-alloy", keyword: "what is Inconel alloy 625 600 properties uses", h1: "What is Inconel Alloy? — 625 & 600 Properties" },
  { slug: "/blog/what-is-monel-alloy", keyword: "what is Monel alloy 400 K500 copper nickel", h1: "What is Monel Alloy? — 400 & K500 Copper-Nickel" },
  { slug: "/blog/what-is-hastelloy", keyword: "what is Hastelloy C276 C22 types applications", h1: "What is Hastelloy? — C276, C22 Types & Applications" },
  { slug: "/blog/what-is-titanium-alloy", keyword: "what is titanium alloy Grade 2 5 uses", h1: "What is Titanium Alloy? — Grade 2 & 5 Uses" },
  { slug: "/blog/what-is-nickel-alloy", keyword: "what is nickel alloy types 200 201 Inconel", h1: "What is Nickel Alloy? — Types 200, 201 & Inconel" },
  { slug: "/blog/what-is-copper-nickel-alloy", keyword: "what is copper nickel alloy CuNi 70/30 90/10", h1: "What is Copper Nickel Alloy? — CuNi 70/30 & 90/10" },
  { slug: "/blog/what-is-alloy-20", keyword: "what is Alloy 20 Carpenter 20 sulphuric acid", h1: "What is Alloy 20 (Carpenter 20)? — Sulphuric Acid Grade" },
  { slug: "/blog/what-is-incoloy-800", keyword: "what is Incoloy 800 800H 800HT properties", h1: "What is Incoloy 800/800H/800HT? — Properties & Uses" },
  { slug: "/blog/what-is-ibr-certification", keyword: "what is IBR certification India Form III-C", h1: "What is IBR Certification? — India Form III-C Guide" },
  { slug: "/blog/what-is-nace-mr0175", keyword: "what is NACE MR0175 sour service explained", h1: "What is NACE MR0175? — Sour Service Explained" },
  { slug: "/blog/what-is-hic-testing", keyword: "what is HIC testing hydrogen induced cracking", h1: "What is HIC Testing? — Hydrogen Induced Cracking" },
  { slug: "/blog/what-is-pwht", keyword: "what is PWHT post weld heat treatment", h1: "What is PWHT? — Post Weld Heat Treatment Explained" },
  { slug: "/blog/what-is-pmi-testing", keyword: "what is PMI testing positive material ID", h1: "What is PMI Testing? — Positive Material Identification" },
  { slug: "/blog/what-is-ndt-testing", keyword: "what is NDT non-destructive testing types", h1: "What is NDT Testing? — Non-Destructive Testing Types" },
  { slug: "/blog/what-is-mill-test-certificate", keyword: "what is MTC mill test certificate EN 10204", h1: "What is a Mill Test Certificate (MTC)? — EN 10204" },
  { slug: "/blog/what-is-seamless-pipe", keyword: "what is seamless pipe manufacturing process", h1: "What is Seamless Pipe? — Manufacturing Process" },
  { slug: "/blog/what-is-erw-pipe", keyword: "what is ERW pipe electric resistance welded", h1: "What is ERW Pipe? — Electric Resistance Welded" },
  { slug: "/blog/what-is-lsaw-pipe", keyword: "what is LSAW pipe longitudinal submerged arc", h1: "What is LSAW Pipe? — Longitudinal Submerged Arc" },
  { slug: "/blog/what-is-pipe-schedule", keyword: "what is pipe schedule meaning SCH 40 80 160", h1: "What is Pipe Schedule? — SCH 40, 80 & 160 Meaning" },
  { slug: "/blog/what-is-nominal-bore", keyword: "what is nominal bore NB pipe vs OD sizing", h1: "What is Nominal Bore (NB)? — Pipe vs OD Sizing" },
  { slug: "/blog/what-is-buttweld-fitting", keyword: "what is buttweld fitting types elbow tee", h1: "What is a Buttweld Fitting? — Types: Elbow, Tee, Reducer" },
  { slug: "/blog/what-is-forged-fitting", keyword: "what is forged fitting socket weld threaded", h1: "What is a Forged Fitting? — Socket Weld & Threaded" },
  { slug: "/blog/what-is-flanges-types", keyword: "what is flange WNRF SORF blind types", h1: "What is a Flange? — WNRF, SORF & Blind Types" },
  { slug: "/blog/what-is-gasket-types", keyword: "what are gasket types spiral RTJ non-asbestos", h1: "Gasket Types — Spiral Wound, RTJ & Non-Asbestos" },
  { slug: "/blog/what-is-pren-number", keyword: "what is PREN number pitting resistance formula", h1: "What is PREN Number? — Pitting Resistance Formula" },
  { slug: "/blog/what-is-sensitization-ss", keyword: "what is sensitization stainless steel 304 321", h1: "What is Sensitization in Stainless Steel? — 304 & 321" },
  { slug: "/blog/what-is-intergranular-corrosion", keyword: "intergranular corrosion stainless steel IGC", h1: "Intergranular Corrosion in Stainless Steel — IGC" },
  { slug: "/blog/what-is-pitting-corrosion", keyword: "pitting corrosion stainless steel chloride", h1: "Pitting Corrosion in Stainless Steel — Chloride Attack" },
  { slug: "/blog/what-is-crevice-corrosion", keyword: "crevice corrosion flanges gaskets SS", h1: "Crevice Corrosion at Flanges & Gaskets — SS Guide" },
  { slug: "/blog/what-is-stress-corrosion-cracking", keyword: "SCC stress corrosion cracking SS Cl temperature", h1: "Stress Corrosion Cracking (SCC) in SS — Chloride & Temperature" },
  { slug: "/blog/what-is-creep-in-steel", keyword: "creep in steel high temperature P91 P22", h1: "Creep in Steel — High Temperature P91 & P22" },
  { slug: "/blog/what-is-hydrogen-embrittlement", keyword: "hydrogen embrittlement in steel HIC SSC", h1: "Hydrogen Embrittlement in Steel — HIC & SSC" },
  { slug: "/blog/what-is-sigma-phase", keyword: "sigma phase duplex stainless steel welding", h1: "Sigma Phase in Duplex Stainless Steel Welding" },
  { slug: "/blog/what-is-heat-affected-zone", keyword: "HAZ heat affected zone welding explained", h1: "Heat Affected Zone (HAZ) in Welding — Explained" },
  { slug: "/blog/what-is-cathodic-protection", keyword: "cathodic protection for pipelines sacrificial", h1: "Cathodic Protection for Pipelines — Sacrificial & Impressed" },
  { slug: "/blog/what-is-solution-annealing", keyword: "solution annealing SS pipe 1050 deg quench", h1: "Solution Annealing of SS Pipe — 1050°C & Quench" },
  { slug: "/blog/what-is-normalizing-steel", keyword: "normalizing heat treatment carbon alloy steel", h1: "Normalizing Heat Treatment — Carbon & Alloy Steel" },
  { slug: "/blog/what-is-quenching-tempering", keyword: "quenching and tempering steel hardening", h1: "Quenching & Tempering — Steel Hardening Process" },
  { slug: "/blog/what-is-electropolishing", keyword: "electropolishing SS pipe pharma Ra 0.4", h1: "Electropolishing SS Pipe — Pharma Grade Ra 0.4" },
  { slug: "/blog/what-is-pickling-passivation", keyword: "pickling and passivation SS process explained", h1: "Pickling & Passivation of SS — Process Explained" },
  { slug: "/blog/types-of-stainless-steel", keyword: "types of stainless steel 5 families austenitic", h1: "Types of Stainless Steel — 5 Families Explained" },
  { slug: "/blog/types-of-corrosion-in-steel", keyword: "types of corrosion in steel pipe pitting SCC", h1: "Types of Corrosion in Steel Pipe — Pitting, SCC & More" },
  { slug: "/blog/types-of-pipe-manufacturing", keyword: "types of pipe manufacturing seamless ERW SAW", h1: "Types of Pipe Manufacturing — Seamless, ERW & SAW" },
  { slug: "/blog/types-of-steel-plates", keyword: "types of steel plates MS CS alloy SS boiler", h1: "Types of Steel Plates — MS, CS, Alloy, SS & Boiler" },
];

// ============================================================
// SECTION 10: BUYER GUIDE & PROCUREMENT (Pages 401-430)
// ============================================================
const SECTION_10_PAGES = [
  { slug: "/blog/how-to-buy-steel-pipe-online-india", keyword: "buy steel pipe online India guide SS CS", h1: "How to Buy Steel Pipe Online in India — SS & CS Guide" },
  { slug: "/blog/bulk-steel-procurement-tips", keyword: "bulk steel procurement tips EPC contractor", h1: "Bulk Steel Procurement Tips for EPC Contractors" },
  { slug: "/blog/third-party-inspection-guide", keyword: "third party inspection TPI steel pipe", h1: "Third Party Inspection (TPI) Guide for Steel Pipe" },
  { slug: "/blog/packing-marking-export-pipes", keyword: "pipe packing marking standard for export", h1: "Pipe Packing & Marking Standard for Export" },
  { slug: "/blog/material-selection-corrosive-service", keyword: "material selection corrosive service CRA guide", h1: "Material Selection for Corrosive Service — CRA Guide" },
  { slug: "/blog/how-to-verify-steel-supplier", keyword: "how to verify steel supplier genuine fake", h1: "How to Verify a Steel Supplier — Genuine vs Fake" },
  { slug: "/blog/steel-pipe-import-procedure-india", keyword: "how to import steel pipe India IEC customs", h1: "Steel Pipe Import Procedure India — IEC & Customs" },
  { slug: "/blog/steel-pipe-export-documentation", keyword: "steel pipe export documentation India procedure", h1: "Steel Pipe Export Documentation India — Procedure" },
  { slug: "/blog/hs-code-for-steel-pipes", keyword: "HS code for steel pipes fittings India customs", h1: "HS Code for Steel Pipes & Fittings — India Customs" },
  { slug: "/blog/gst-on-steel-pipes-india", keyword: "GST rate on steel pipes fittings plates India", h1: "GST on Steel Pipes, Fittings & Plates India — Rates" },
  { slug: "/blog/bis-certification-steel-india", keyword: "BIS certification for steel products ISI mark", h1: "BIS Certification for Steel Products — ISI Mark" },
  { slug: "/blog/astm-equivalent-indian-standards", keyword: "ASTM equivalent IS Indian standard conversion", h1: "ASTM to IS Indian Standard Equivalent Conversion" },
  { slug: "/blog/how-to-read-piping-specification", keyword: "how to read piping specification class rating", h1: "How to Read a Piping Specification — Class & Rating" },
  { slug: "/blog/how-to-prepare-material-requisition", keyword: "material requisition MR for piping steel", h1: "How to Prepare Material Requisition (MR) for Piping" },
  { slug: "/blog/approved-vendor-list-steel", keyword: "AVL approved vendor list steel pipe fittings", h1: "Approved Vendor List (AVL) for Steel Pipe & Fittings" },
  { slug: "/blog/how-to-calculate-piping-cost", keyword: "piping material cost estimation method", h1: "How to Calculate Piping Material Cost — Estimation" },
  { slug: "/blog/lead-time-steel-pipes-india", keyword: "steel pipe delivery lead time India mills", h1: "Steel Pipe Delivery Lead Time in India — Mill Schedules" },
  { slug: "/blog/minimum-order-quantity-steel", keyword: "MOQ minimum order steel pipe fittings India", h1: "Minimum Order Quantity (MOQ) for Steel Pipe India" },
  { slug: "/blog/what-is-indent-steel-buying", keyword: "indent process steel procurement explained", h1: "What is Indent in Steel Buying? — Process Explained" },
  { slug: "/blog/epc-contractor-steel-supply", keyword: "steel supply for EPC contractors India", h1: "Steel Supply for EPC Contractors in India" },
  { slug: "/blog/material-traceability-steel", keyword: "material traceability in steel supply chain", h1: "Material Traceability in Steel Supply Chain" },
  { slug: "/blog/quality-assurance-plan-steel", keyword: "QAP quality assurance plan for steel piping", h1: "Quality Assurance Plan (QAP) for Steel Piping" },
  { slug: "/blog/inspection-test-plan-steel", keyword: "ITP inspection test plan for pipes plates", h1: "Inspection & Test Plan (ITP) for Pipes & Plates" },
  { slug: "/blog/how-to-check-fake-mtc", keyword: "how to detect fake MTC mill certificate", h1: "How to Detect Fake MTC — Mill Certificate Fraud" },
  { slug: "/blog/steel-procurement-common-mistakes", keyword: "common mistakes steel procurement India", h1: "Common Mistakes in Steel Procurement India" },
  { slug: "/blog/how-to-negotiate-steel-price", keyword: "negotiate steel price tips buyer contractor", h1: "How to Negotiate Steel Price — Tips for Buyers" },
  { slug: "/blog/steel-storage-best-practices", keyword: "steel storage best practices warehouse yard", h1: "Steel Storage Best Practices — Warehouse & Yard" },
  { slug: "/blog/packaging-standard-steel-export", keyword: "packaging standard pipe plate export seaworthy", h1: "Packaging Standard for Steel Export — Seaworthy" },
  { slug: "/blog/shipping-terms-fob-cif-steel", keyword: "FOB CIF CFR shipping terms steel export", h1: "FOB vs CIF vs CFR — Shipping Terms for Steel Export" },
  { slug: "/blog/letter-of-credit-steel-buying", keyword: "LC letter of credit steel buying import", h1: "Letter of Credit (LC) for Steel Buying & Import" },
];

// ============================================================
// SECTION 11: SIZE CHART & DIMENSION TABLES (Pages 431-460)
// ============================================================
const SECTION_11_PAGES = [
  { slug: "/blog/ss-pipe-size-chart", keyword: "SS pipe size chart dimensions NB to OD mm", h1: "SS Pipe Size Chart — Dimensions NB to OD (mm)" },
  { slug: "/blog/cs-pipe-size-chart", keyword: "carbon steel pipe size chart A106 dimensions", h1: "Carbon Steel Pipe Size Chart — A106 Dimensions" },
  { slug: "/blog/flange-dimensions-chart-150-300", keyword: "flange dimensions chart class 150 300 B16.5", h1: "Flange Dimensions Chart — Class 150 & 300 (B16.5)" },
  { slug: "/blog/flange-dimensions-chart-600-900", keyword: "flange dimensions chart class 600 900 B16.5", h1: "Flange Dimensions Chart — Class 600 & 900 (B16.5)" },
  { slug: "/blog/flange-dimensions-chart-1500-2500", keyword: "flange dimensions chart class 1500 2500", h1: "Flange Dimensions Chart — Class 1500 & 2500" },
  { slug: "/blog/elbow-dimensions-chart", keyword: "pipe elbow dimensions weight 90 45 LR SR", h1: "Pipe Elbow Dimensions Chart — 90° & 45° LR/SR" },
  { slug: "/blog/tee-dimensions-chart", keyword: "pipe tee dimensions equal reducing chart", h1: "Pipe Tee Dimensions Chart — Equal & Reducing" },
  { slug: "/blog/reducer-dimensions-chart", keyword: "pipe reducer dimensions concentric eccentric", h1: "Pipe Reducer Dimensions — Concentric & Eccentric" },
  { slug: "/blog/stub-end-dimensions-chart", keyword: "stub end dimensions type A lap joint", h1: "Stub End Dimensions Chart — Type A Lap Joint" },
  { slug: "/blog/ss-sheet-size-chart", keyword: "SS sheet standard size chart India 4x8 5x10", h1: "SS Sheet Standard Size Chart India — 4x8 & 5x10" },
  { slug: "/blog/ss-plate-thickness-chart", keyword: "SS plate thickness chart 304 316L available", h1: "SS Plate Thickness Chart — 304/316L Available Sizes" },
  { slug: "/blog/ms-plate-size-chart", keyword: "MS plate standard size chart India IS 2062", h1: "MS Plate Standard Size Chart India — IS 2062" },
  { slug: "/blog/ms-angle-size-chart-is-808", keyword: "MS angle all sizes IS 808 chart 20x20 to 200x200", h1: "MS Angle Size Chart IS 808 — 20x20 to 200x200" },
  { slug: "/blog/ismc-dimensions-chart", keyword: "ISMC channel dimensions chart all sizes 75-400", h1: "ISMC Channel Dimensions Chart — 75mm to 400mm" },
  { slug: "/blog/ismb-dimensions-chart", keyword: "ISMB beam dimensions chart all sizes", h1: "ISMB Beam Dimensions Chart — All Sizes" },
  { slug: "/blog/pipe-nb-to-od-conversion", keyword: "NB to OD conversion chart pipe sizes inch mm", h1: "NB to OD Conversion Chart — Pipe Sizes Inch/mm" },
  { slug: "/blog/inch-to-mm-conversion-pipes", keyword: "inch to mm conversion chart pipe fittings", h1: "Inch to mm Conversion Chart — Pipe & Fittings" },
  { slug: "/blog/swg-to-mm-wire-gauge", keyword: "SWG to mm wire gauge conversion chart", h1: "SWG to mm Wire Gauge Conversion Chart" },
  { slug: "/blog/ss-tube-size-chart", keyword: "SS tube OD size chart fractional metric", h1: "SS Tube Size Chart — Fractional & Metric OD" },
  { slug: "/blog/forged-fittings-dimensions", keyword: "forged fittings 3000 6000 dimensions B16.11", h1: "Forged Fittings Dimensions — 3000# & 6000# (B16.11)" },
  { slug: "/blog/pipe-bend-dimensions-chart", keyword: "pipe bend 3D 5D dimensions radius table", h1: "Pipe Bend Dimensions — 3D & 5D Radius Table" },
  { slug: "/blog/olet-fittings-size-chart", keyword: "weldolet sockolet latrolet size chart", h1: "Olet Fittings Size Chart — Weldolet, Sockolet & Latrolet" },
  { slug: "/blog/spiral-wound-gasket-sizes", keyword: "spiral wound gasket dimensions chart sizes", h1: "Spiral Wound Gasket Dimensions Chart — All Sizes" },
  { slug: "/blog/ring-joint-gasket-dimensions", keyword: "RTJ ring joint gasket R RX BX dimensions", h1: "RTJ Ring Joint Gasket Dimensions — R, RX & BX" },
  { slug: "/blog/flange-bolt-chart", keyword: "flange bolt chart ASME B16.5 size length", h1: "Flange Bolt Chart — ASME B16.5 Size & Length" },
  { slug: "/blog/pipe-pressure-rating-chart", keyword: "pipe pressure rating chart SCH 40 80 160", h1: "Pipe Pressure Rating Chart — SCH 40, 80 & 160" },
  { slug: "/blog/alloy-pipe-dimensions-chart", keyword: "alloy steel pipe dimensions A335 P91 P22", h1: "Alloy Steel Pipe Dimensions Chart — A335 P91/P22" },
  { slug: "/blog/duplex-pipe-dimensions-chart", keyword: "Duplex 2205 pipe dimensions schedule chart", h1: "Duplex 2205 Pipe Dimensions & Schedule Chart" },
  { slug: "/blog/inconel-pipe-size-chart", keyword: "Inconel 625 600 pipe size chart available", h1: "Inconel 625/600 Pipe Size Chart — Available Stock" },
  { slug: "/blog/copper-nickel-pipe-size-chart", keyword: "copper nickel pipe size chart 70/30 90/10", h1: "Copper Nickel Pipe Size Chart — 70/30 & 90/10" },
];

// ============================================================
// SECTION 12: FAQ & QUESTION ARTICLES (Pages 461-500)
// ============================================================
const SECTION_12_PAGES = [
  { slug: "/blog/why-ss-pipe-is-expensive", keyword: "why stainless steel pipe is expensive India", h1: "Why is Stainless Steel Pipe Expensive in India?" },
  { slug: "/blog/why-inconel-is-costly", keyword: "why Inconel pipe is so expensive cost", h1: "Why is Inconel Pipe So Expensive? — Cost Factors" },
  { slug: "/blog/why-duplex-steel-preferred-offshore", keyword: "why duplex steel preferred offshore oil gas", h1: "Why is Duplex Steel Preferred for Offshore Oil & Gas?" },
  { slug: "/blog/why-ibr-certification-mandatory", keyword: "why IBR certification is mandatory India", h1: "Why is IBR Certification Mandatory in India?" },
  { slug: "/blog/why-pwht-required-p91", keyword: "why PWHT is required for P91 alloy steel", h1: "Why is PWHT Required for P91 Alloy Steel?" },
  { slug: "/blog/why-pmi-test-important", keyword: "why PMI testing is important steel piping", h1: "Why is PMI Testing Important for Steel Piping?" },
  { slug: "/blog/why-nace-compliance-needed", keyword: "why NACE compliance needed sour service H2S", h1: "Why is NACE Compliance Needed for Sour Service (H2S)?" },
  { slug: "/blog/why-seamless-pipe-preferred", keyword: "why seamless pipe preferred over welded high P", h1: "Why is Seamless Pipe Preferred Over Welded for High Pressure?" },
  { slug: "/blog/why-titanium-used-chemical", keyword: "why titanium used in chemical plant", h1: "Why is Titanium Used in Chemical Plants?" },
  { slug: "/blog/why-monel-used-marine", keyword: "why Monel 400 used marine seawater valve", h1: "Why is Monel 400 Used in Marine & Seawater Valves?" },
  { slug: "/blog/when-to-use-duplex-steel", keyword: "when to use duplex stainless steel 2205", h1: "When to Use Duplex Stainless Steel 2205?" },
  { slug: "/blog/when-to-use-inconel-alloy", keyword: "when to use Inconel 625 vs 600 vs 825", h1: "When to Use Inconel 625 vs 600 vs 825?" },
  { slug: "/blog/when-to-use-hastelloy", keyword: "when to use Hastelloy C276 vs C22 vs B2", h1: "When to Use Hastelloy C276 vs C22 vs B2?" },
  { slug: "/blog/when-to-use-titanium-pipe", keyword: "when to use titanium pipe Grade 2 vs 5", h1: "When to Use Titanium Pipe — Grade 2 vs 5?" },
  { slug: "/blog/when-to-use-copper-nickel", keyword: "when to use copper nickel 70/30 vs 90/10", h1: "When to Use Copper Nickel 70/30 vs 90/10?" },
  { slug: "/blog/when-to-use-alloy-steel-pipe", keyword: "when to use alloy steel P91 vs P22 vs P11", h1: "When to Use Alloy Steel P91 vs P22 vs P11?" },
  { slug: "/blog/when-to-use-ss-321-vs-304", keyword: "when to use SS 321 vs 304 high temperature", h1: "When to Use SS 321 vs 304 for High Temperature?" },
  { slug: "/blog/when-to-use-ss-310-high-temp", keyword: "when to use SS 310 high temperature furnace", h1: "When to Use SS 310 for High Temperature & Furnace?" },
  { slug: "/blog/can-ss-304-be-used-outdoor", keyword: "can SS 304 be used outdoor weather corrosion", h1: "Can SS 304 Be Used Outdoor? — Weather & Corrosion" },
  { slug: "/blog/can-erw-pipe-be-used-gas", keyword: "can ERW pipe be used for gas line", h1: "Can ERW Pipe Be Used for Gas Line?" },
  { slug: "/blog/can-ss-pipe-be-painted", keyword: "can stainless steel pipe be painted coating", h1: "Can Stainless Steel Pipe Be Painted? — Coating Guide" },
  { slug: "/blog/can-duplex-be-welded-easily", keyword: "can duplex stainless steel be welded", h1: "Can Duplex Stainless Steel Be Welded Easily?" },
  { slug: "/blog/can-carbon-steel-resist-corrosion", keyword: "can carbon steel resist corrosion coating", h1: "Can Carbon Steel Resist Corrosion? — Coating Options" },
  { slug: "/blog/difference-pipe-and-tube", keyword: "difference between pipe and tube OD NB", h1: "Difference Between Pipe and Tube — OD vs NB" },
  { slug: "/blog/difference-supplier-stockist-dealer", keyword: "supplier vs stockist vs dealer vs manufacturer", h1: "Supplier vs Stockist vs Dealer vs Manufacturer" },
  { slug: "/blog/difference-seamless-erw-spiral", keyword: "difference seamless ERW spiral LSAW HSAW pipe", h1: "Difference: Seamless vs ERW vs Spiral vs LSAW Pipe" },
  { slug: "/blog/what-is-heat-number-steel", keyword: "what is heat number in steel traceability", h1: "What is Heat Number in Steel? — Traceability" },
  { slug: "/blog/what-is-annealing-ss-pipe", keyword: "what is annealing in SS pipe solution treatment", h1: "What is Annealing in SS Pipe? — Solution Treatment" },
  { slug: "/blog/what-is-bright-annealing-tube", keyword: "what is bright annealing tube pharma finish", h1: "What is Bright Annealing? — Tube Pharma Finish" },
  { slug: "/blog/what-is-cold-worked-pipe", keyword: "cold worked vs hot finished pipe difference", h1: "Cold Worked vs Hot Finished Pipe — Difference" },
  { slug: "/blog/what-is-hydrostatic-test", keyword: "what is hydrostatic test for pipe pressure", h1: "What is Hydrostatic Test for Pipe? — Pressure Testing" },
  { slug: "/blog/what-is-eddy-current-testing", keyword: "eddy current testing ECT for tubes explained", h1: "Eddy Current Testing (ECT) for Tubes — Explained" },
  { slug: "/blog/what-is-igc-test-ss", keyword: "IGC intergranular corrosion test ASTM A262", h1: "IGC Test for SS — ASTM A262 Intergranular Corrosion" },
  { slug: "/blog/what-is-flattening-test", keyword: "flattening test for pipe tube ASTM", h1: "Flattening Test for Pipe & Tube — ASTM Procedure" },
  { slug: "/blog/faq-ss-pipe-buying-india", keyword: "SS pipe buying FAQ India all questions", h1: "SS Pipe Buying FAQ India — All Your Questions Answered" },
  { slug: "/blog/faq-carbon-steel-pipe-buying", keyword: "carbon steel pipe buying FAQ India", h1: "Carbon Steel Pipe Buying FAQ India" },
  { slug: "/blog/faq-alloy-steel-pipe-buying", keyword: "alloy steel P91 P22 pipe FAQ India", h1: "Alloy Steel P91/P22 Pipe FAQ India" },
  { slug: "/blog/faq-exotic-alloy-buying", keyword: "exotic alloy Inconel Monel buying FAQ", h1: "Exotic Alloy Buying FAQ — Inconel, Monel & Hastelloy" },
  { slug: "/blog/faq-structural-steel-buying", keyword: "TMT MS angle channel buying FAQ Gujarat", h1: "Structural Steel Buying FAQ — TMT, MS Angle & Channel" },
  { slug: "/blog/faq-pipe-fittings-flanges", keyword: "pipe fittings flanges selection FAQ", h1: "Pipe Fittings & Flanges Selection FAQ" },
];

// ============================================================
// SECTION 13: CASE STUDY & PROJECT PAGES (Pages 501-510)
// ============================================================
const SECTION_13_PAGES = [
  { slug: "/blog/project-oil-refinery-ss-cs-supply", keyword: "oil refinery SS CS alloy pipe supply project", h1: "Oil Refinery SS & CS Pipe Supply — Project Case Study" },
  { slug: "/blog/project-power-plant-p91-boiler", keyword: "power plant P91 boiler tube supply India", h1: "Power Plant P91 Boiler Tube Supply — Case Study" },
  { slug: "/blog/project-chemical-plant-exotic-alloy", keyword: "chemical plant Inconel Hastelloy supply", h1: "Chemical Plant Exotic Alloy Supply — Inconel & Hastelloy" },
  { slug: "/blog/project-offshore-duplex-supply", keyword: "offshore platform Duplex Super Duplex supply", h1: "Offshore Platform Duplex & Super Duplex Supply" },
  { slug: "/blog/project-pharma-ss316l-electropolished", keyword: "pharmaceutical plant SS 316L EP pipe supply", h1: "Pharmaceutical Plant SS 316L EP Pipe Supply" },
  { slug: "/blog/project-water-treatment-ss-pipe", keyword: "water treatment STP SS pipe supply project", h1: "Water Treatment STP SS Pipe Supply — Case Study" },
  { slug: "/blog/project-fertilizer-plant-piping", keyword: "fertilizer plant GSFC piping material supply", h1: "Fertilizer Plant Piping Material Supply — GSFC" },
  { slug: "/blog/project-export-middle-east-steel", keyword: "steel pipe export UAE Saudi project supply", h1: "Steel Pipe Export to UAE & Saudi Arabia — Project" },
  { slug: "/blog/project-building-construction-tmt", keyword: "building construction TMT MS structural supply", h1: "Building Construction TMT & MS Structural Supply" },
  { slug: "/blog/project-lng-cryogenic-piping", keyword: "LNG terminal cryogenic piping A333 supply", h1: "LNG Terminal Cryogenic Piping (A333) Supply" },
];

// ============================================================
// TEMPLATE GENERATORS
// ============================================================

/**
 * Generate Product Landing Page (Section 2)
 */
function generateProductPage(page) {
  const funcName = makeFuncName(page.slug);
  const links = getInternalLinks(page.slug, 3);
  const canonicalUrl = `${SITE_URL}${page.slug}`;

  return `/**
 * ${page.slug}
 * Target: "${page.keyword}"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "name": "${page.h1}",
      "description": "${page.metaDesc.replace(/"/g, '\\"')}",
      "brand": { "@type": "Organization", "name": "Creative Metal Industries" },
      "manufacturer": { "@type": "Organization", "name": "Creative Metal Industries" },
      "offers": { "@type": "AggregateOffer", "priceCurrency": "INR", "lowPrice": "180", "highPrice": "15000", "offerCount": "500+", "availability": "https://schema.org/InStock" },
      "url": "${canonicalUrl}"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "${SITE_URL}" },
        { "@type": "ListItem", "position": 2, "name": "${page.h1}", "item": "${canonicalUrl}" }
      ]
    }
  ]
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is ${page.material} ${page.product}?", "acceptedAnswer": { "@type": "Answer", "text": "${page.material} ${page.product} is manufactured per ${page.standard} in grades ${page.grades}. Creative Metal Industries stocks all sizes with immediate dispatch from Vadodara, Gujarat. Every piece comes with Mill Test Certificate (EN 10204 3.1/3.2) and can be supplied with IBR Form III-C, PMI report, and third-party inspection as required." } },
    { "@type": "Question", "name": "What sizes of ${page.material} ${page.product} do you stock?", "acceptedAnswer": { "@type": "Answer", "text": "We stock ${page.material} ${page.product} across the complete size range as per ${page.standard}. Standard sizes are available for immediate dispatch while non-standard sizes can be arranged on indent from approved mills within 2-4 weeks. Contact us at ${PHONE} for specific size availability." } },
    { "@type": "Question", "name": "Do you supply ${page.material} ${page.product} with test certificates?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, every ${page.material} ${page.product} from CMI is supplied with original Mill Test Certificate (MTC) per EN 10204 Type 3.1 or 3.2. Additional documentation includes IBR Form III-C, PMI certificate, NACE compliance letter, IGC test report, and third-party inspection from DNV, TUV, SGS, or Lloyd's — as per your project requirements." } },
    { "@type": "Question", "name": "What is the price of ${page.material} ${page.product} in India?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing for ${page.material} ${page.product} varies based on grade, size, quantity, and current raw material costs. As a direct stockist with mill relationships, CMI offers competitive pricing without broker margins. Call ${PHONE} or WhatsApp for an instant quotation with guaranteed 4-hour response." } },
    { "@type": "Question", "name": "Can you supply ${page.material} ${page.product} for export?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Creative Metal Industries exports ${page.material} ${page.product} to 50+ countries including UAE, Saudi Arabia, Oman, Kuwait, Qatar, USA, UK, and Southeast Asia. We handle complete export documentation including commercial invoice, packing list, certificate of origin, fumigation certificate, and seaworthy wooden box/pallet packing." } }
  ]
});

export default function ${funcName}() {
  return (
    <>
      <Title>${page.metaTitle}</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="${page.metaDesc.replace(/"/g, '&quot;')}" />
      <Link rel="canonical" href="${canonicalUrl}" />
      <Meta property="og:title" content="${page.metaTitle}" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="${page.metaDesc.replace(/"/g, '&quot;')}" />
      <Meta property="og:url" content="${canonicalUrl}" />
      <Meta property="og:image" content="${SITE_URL}/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem" }}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — ${page.material} ${page.product} Supplier India" width="140" height="71" /></a>
        <div style={{ flex: 1 }} />
        <a href="/#contact" style={{ background: "#E8821A", color: "#fff", padding: "0.5rem 1.2rem", "border-radius": "6px", "font-weight": "700", "font-size": "0.85rem", "text-decoration": "none" }}>Get Quote</a>
      </nav>
      <div style={{ background: "#f9fafb", "border-bottom": "1px solid #e5e7eb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}>
        <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>Home</a><span style={{ margin: "0 0.5rem" }}>›</span>
        <span>${page.h1}</span>
      </div>

      <main style={{ "max-width": "960px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <h1 style={{ "font-size": "clamp(1.8rem,4vw,2.5rem)", "font-weight": "800", color: "#111827", margin: "0 0 1.5rem", "line-height": "1.2" }}>
          ${page.h1}
        </h1>

        <p style={{ "font-size": "1.05rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1.5rem" }}>
          <strong>Creative Metal Industries</strong> is India's trusted supplier and stockist of <strong>${page.material} ${page.product}</strong> manufactured per <strong>${page.standard}</strong>. We stock grades ${page.grades} for immediate dispatch from our Vadodara (Gujarat) warehouse. As a leading industrial metal supplier with 13+ years of experience, we serve refineries, power plants, chemical processing units, EPC contractors, and fabrication workshops across India and 50+ export destinations.
        </p>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Available Grades & Specifications</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          Our ${page.material} ${page.product} inventory covers the following grades per ${page.standard}: <strong>${page.grades}</strong>. Each product is manufactured at approved mills under strict quality control and supplied with full traceability documentation. We maintain ready stock across standard sizes with the ability to source non-standard requirements on indent within 2-4 weeks from production.
        </p>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          All material undergoes 100% Positive Material Identification (PMI) testing at our warehouse before dispatch. This ensures grade verification and eliminates the risk of material mix-up — a critical quality step that many traders skip. When you buy from CMI, you get genuine mill-certified material with verified chemistry.
        </p>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Size Range & Stock Availability</h2>
        <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "10px", "margin-bottom": "1.5rem" }}>
          <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.88rem" }}>
            <thead><tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}><th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Parameter</th><th style={{ padding: "0.7rem 1rem" }}>Details</th></tr></thead>
            <tbody>
              <tr style={{ background: "#fff" }}><td style={{ padding: "0.6rem 1rem", "font-weight": "600" }}>Material</td><td style={{ padding: "0.6rem 1rem" }}>${page.material}</td></tr>
              <tr style={{ background: "#f9fafb" }}><td style={{ padding: "0.6rem 1rem", "font-weight": "600" }}>Product</td><td style={{ padding: "0.6rem 1rem" }}>${page.product}</td></tr>
              <tr style={{ background: "#fff" }}><td style={{ padding: "0.6rem 1rem", "font-weight": "600" }}>Standard</td><td style={{ padding: "0.6rem 1rem" }}>${page.standard}</td></tr>
              <tr style={{ background: "#f9fafb" }}><td style={{ padding: "0.6rem 1rem", "font-weight": "600" }}>Grades</td><td style={{ padding: "0.6rem 1rem" }}>${page.grades}</td></tr>
              <tr style={{ background: "#fff" }}><td style={{ padding: "0.6rem 1rem", "font-weight": "600" }}>Stock</td><td style={{ padding: "0.6rem 1rem" }}>Ready stock + Indent (2-4 weeks)</td></tr>
              <tr style={{ background: "#f9fafb" }}><td style={{ padding: "0.6rem 1rem", "font-weight": "600" }}>Certification</td><td style={{ padding: "0.6rem 1rem" }}>MTC EN 10204 3.1/3.2, IBR Form III-C, PMI, NACE</td></tr>
              <tr style={{ background: "#fff" }}><td style={{ padding: "0.6rem 1rem", "font-weight": "600" }}>Supply Area</td><td style={{ padding: "0.6rem 1rem" }}>All India + Export to 50+ countries</td></tr>
            </tbody>
          </table>
        </div>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Applications & Industries Served</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          ${page.material} ${page.product} finds extensive use across multiple industrial sectors. Oil and gas refineries use them in process piping systems. Power plants specify them for steam and condensate service. Chemical and petrochemical facilities require them for corrosive media handling. Pharmaceutical plants need them for sanitary and clean utility systems. Water treatment and desalination projects use them for corrosion-resistant service. EPC contractors source them for large-scale infrastructure projects.
        </p>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          Beyond pipes, Creative Metal Industries also supplies complementary products including SS plates and sheets (304, 316L, Duplex), pipe fittings (buttweld and forged), flanges (WNRF, SORF, blind), and structural steel (TMT bars, MS angle, channel, beam). This one-stop capability means you can source your entire project requirement from a single supplier — reducing coordination effort and ensuring material compatibility.
        </p>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Quality Assurance & Documentation</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          Every ${page.material} ${page.product} supplied by CMI comes with comprehensive quality documentation: Mill Test Certificate (MTC) per EN 10204 Type 3.1 or 3.2 showing full chemical analysis, mechanical properties (tensile, yield, elongation, hardness), and test results. IBR Form III-C for boiler applications. PMI report confirming grade identity. NACE MR0175 compliance for sour service. Intergranular corrosion (IGC) test per ASTM A262 Practice E where applicable. Hydrostatic test certificate. Third-party inspection by DNV, TUV, SGS, Bureau Veritas, or Lloyd's Register can be arranged.
        </p>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Why Choose Creative Metal Industries?</h2>
        <ul style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.9", "padding-left": "1.25rem" }}>
          <li><strong>13+ years experience</strong> — established in 2012, serving Gujarat's industrial corridor</li>
          <li><strong>Ready stock</strong> — 2000+ tonnes across SS, CS, alloy, duplex, exotic alloys, and structural steel</li>
          <li><strong>Mill-direct pricing</strong> — authorised stockist for Jindal, SAIL, Ratnamani, Sumitomo, Vallourec</li>
          <li><strong>Same-day dispatch</strong> — from our GIDC Makarpura, Vadodara warehouse</li>
          <li><strong>Complete documentation</strong> — MTC, IBR, PMI, NACE, TPI as per project specs</li>
          <li><strong>Pan-India delivery</strong> — with export capability to 50+ countries</li>
          <li><strong>Technical support</strong> — grade selection, specification compliance, material equivalents</li>
        </ul>

        {/* Internal Links */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Related Products & Resources</h2>
        <ul style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.9", "padding-left": "1.25rem" }}>
          ${links.map(l => `<li><a href="${l.href}" style={{ color: "#E8821A", "font-weight": "600" }}>${l.text}</a></li>`).join("\n          ")}
        </ul>

        {/* FAQ Section */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Frequently Asked Questions</h2>
        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.5rem", "margin-bottom": "2rem" }}>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "0 0 0.5rem" }}>What is ${page.material} ${page.product}?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "1.25rem" }}>${page.material} ${page.product} is manufactured per ${page.standard} in grades ${page.grades}. It is used across oil & gas, power, chemical, pharma, and infrastructure industries. CMI stocks all sizes with immediate dispatch from Vadodara.</p>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "0 0 0.5rem" }}>What documentation do you provide?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "1.25rem" }}>Every ${page.product} comes with MTC (EN 10204 3.1/3.2), IBR Form III-C (if applicable), PMI certificate, NACE compliance, and third-party inspection as per project requirements.</p>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "0 0 0.5rem" }}>Do you deliver across India?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "0" }}>Yes, we deliver across India with 2-5 day transit time depending on location. We also export to 50+ countries with complete export documentation and seaworthy packing.</p>
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", "border-radius": "12px", padding: "2rem", "text-align": "center", color: "#fff" }}>
          <h3 style={{ "font-size": "1.3rem", "font-weight": "700", margin: "0 0 0.75rem" }}>Need ${page.material} ${page.product}? Get Instant Quote</h3>
          <p style={{ "font-size": "0.95rem", opacity: "0.95", margin: "0 0 1.25rem" }}>Call or WhatsApp for stock availability & best pricing</p>
          <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
            <a href="tel:${PHONE_LINK}" style={{ background: "#fff", color: "#E8821A", padding: "0.7rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>📞 ${PHONE}</a>
            <a href="${WHATSAPP}" target="_blank" rel="noopener" style={{ background: "#25D366", color: "#fff", padding: "0.7rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>💬 WhatsApp</a>
          </div>
        </div>
      </main>
    </>
  );
}
`;
}

/**
 * Generate Blog Article Page (Sections 3-13)
 * Creates unique 800+ word content based on section type
 */
function generateBlogPage(page, sectionType) {
  const funcName = makeFuncName(page.slug);
  const links = getInternalLinks(page.slug, 3);
  const canonicalUrl = `${SITE_URL}${page.slug}`;
  const cleanSlug = page.slug.replace("/blog/", "");

  // Generate meta title/desc if not provided
  const metaTitle = page.metaTitle || truncate(page.h1 + " | CMI India", 60);
  const metaDesc = page.metaDesc || truncate(`${page.keyword}. Expert guide by Creative Metal Industries Vadodara. Call ${PHONE} for enquiry.`, 155);

  // Determine schema type
  let schemaType = "Article";
  if (sectionType === "price") schemaType = "Article";
  if (sectionType === "weight") schemaType = "Article";
  if (sectionType === "faq") schemaType = "FAQPage";

  // Generate section content based on type
  const contentSections = generateContentSections(page, sectionType);
  const faqItems = generateFAQs(page, sectionType);

  return `/**
 * ${page.slug}
 * Target: "${page.keyword}"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${page.h1.replace(/"/g, '\\"')}",
  "author": { "@type": "Organization", "name": "Creative Metal Industries" },
  "publisher": { "@type": "Organization", "name": "Creative Metal Industries",
    "logo": { "@type": "ImageObject", "url": "${SITE_URL}/logo_cmi.png" } },
  "datePublished": "${DATE_NOW}",
  "dateModified": "${DATE_NOW}",
  "url": "${canonicalUrl}",
  "description": "${metaDesc.replace(/"/g, '\\"')}"
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
${faqItems.map(f => `    { "@type": "Question", "name": "${f.q.replace(/"/g, '\\"')}", "acceptedAnswer": { "@type": "Answer", "text": "${f.a.replace(/"/g, '\\"')}" } }`).join(",\n")}
  ]
});

export default function ${funcName}() {
  return (
    <>
      <Title>${metaTitle}</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="${metaDesc.replace(/"/g, '&quot;')}" />
      <Link rel="canonical" href="${canonicalUrl}" />
      <Meta property="og:title" content="${metaTitle}" />
      <Meta property="og:type" content="article" />
      <Meta property="og:description" content="${metaDesc.replace(/"/g, '&quot;')}" />
      <Meta property="og:url" content="${canonicalUrl}" />
      <Meta property="og:image" content="${SITE_URL}/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem" }}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" /></a>
        <div style={{ flex: 1 }} />
        <a href="/blog" style={{ color: "#E8821A", "font-weight": "600", "font-size": "0.9rem", "text-decoration": "none" }}>← All Articles</a>
      </nav>
      <div style={{ background: "#f9fafb", "border-bottom": "1px solid #e5e7eb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}>
        <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>Home</a>
        <span style={{ margin: "0 0.5rem" }}>›</span>
        <a href="/blog" style={{ color: "#E8821A", "text-decoration": "none" }}>Blog</a>
        <span style={{ margin: "0 0.5rem" }}>›</span>
        <span>${page.h1.length > 50 ? page.h1.substring(0, 50) + "..." : page.h1}</span>
      </div>

      <main style={{ "max-width": "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ "margin-bottom": "2.5rem" }}>
          <span style={{ background: "#FEF3C7", color: "#92400E", padding: "0.25rem 0.7rem", "border-radius": "99px", "font-size": "0.75rem", "font-weight": "700" }}>${sectionType === "price" ? "Price Guide" : sectionType === "weight" ? "Reference Chart" : sectionType === "comparison" ? "Comparison" : sectionType === "spec" ? "Specification" : sectionType === "industry" ? "Industry Guide" : sectionType === "howto" ? "How-To Guide" : sectionType === "knowledge" ? "Material Guide" : sectionType === "buyer" ? "Buyers Guide" : sectionType === "sizechart" ? "Size Chart" : sectionType === "faq" ? "FAQ" : "Case Study"}</span>
          <span style={{ color: "#9ca3af", "font-size": "0.82rem", "margin-left": "0.75rem" }}>${MONTH_YEAR} · 8 min read</span>
          <h1 style={{ "font-size": "clamp(1.8rem,4vw,2.5rem)", "font-weight": "800", color: "#111827", margin: "1rem 0 1.25rem", "line-height": "1.2" }}>
            ${page.h1}
          </h1>
          <p style={{ "font-size": "1.05rem", color: "#374151", "line-height": "1.8" }}>
            ${contentSections.intro}
          </p>
        </div>

${contentSections.sections.map(s => `        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>${s.heading}</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>${s.body}</p>${s.body2 ? `\n        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>${s.body2}</p>` : ""}`).join("\n\n")}

        {/* Cross-sell: Other CMI Products */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Other Products from Creative Metal Industries</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          Beyond the subject of this article, Creative Metal Industries stocks a comprehensive range of industrial metals: <strong>Stainless Steel</strong> pipes, plates, sheets, fittings and flanges in grades 304, 316L, 321, 310, 904L. <strong>Carbon Steel</strong> seamless and ERW pipes per ASTM A106, A53, IS 1239, API 5L. <strong>Alloy Steel</strong> pipes P91, P22, P11 with IBR certification. <strong>Duplex & Super Duplex</strong> 2205/2507 pipes, plates, and fittings. <strong>Exotic Alloys</strong> including Inconel 625/600, Hastelloy C276, Monel 400, Titanium Grade 2/5, and Copper Nickel 70/30. <strong>Structural Steel</strong> TMT bars, MS angle, channel, beam, plate, and flat bar.
        </p>

        {/* Internal Links */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Related Articles & Resources</h2>
        <ul style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.9", "padding-left": "1.25rem" }}>
          ${links.map(l => `<li><a href="${l.href}" style={{ color: "#E8821A", "font-weight": "600" }}>${l.text}</a></li>`).join("\n          ")}
        </ul>

        {/* FAQ Section */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Frequently Asked Questions</h2>
        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.5rem", "margin-bottom": "2rem" }}>
${faqItems.map((f, i) => `          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "${i === 0 ? "0" : "1.25rem"} 0 0.5rem" }}>${f.q}</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "${i === faqItems.length - 1 ? "0" : "1rem"}" }}>${f.a}</p>`).join("\n")}
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", "border-radius": "12px", padding: "2rem", "text-align": "center", color: "#fff" }}>
          <h3 style={{ "font-size": "1.3rem", "font-weight": "700", margin: "0 0 0.75rem" }}>Need Material? Contact CMI for Best Pricing</h3>
          <p style={{ "font-size": "0.95rem", opacity: "0.95", margin: "0 0 1.25rem" }}>Creative Metal Industries — Your trusted partner for SS, CS, Alloy & Exotic metals</p>
          <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
            <a href="tel:${PHONE_LINK}" style={{ background: "#fff", color: "#E8821A", padding: "0.7rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>📞 ${PHONE}</a>
            <a href="${WHATSAPP}" target="_blank" rel="noopener" style={{ background: "#25D366", color: "#fff", padding: "0.7rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>💬 WhatsApp</a>
            <a href="/#contact" style={{ background: "#fff", color: "#E8821A", padding: "0.7rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>Send Enquiry →</a>
          </div>
        </div>
      </main>
    </>
  );
}
`;
}

// ============================================================
// CONTENT GENERATION FUNCTIONS
// ============================================================

function generateContentSections(page, sectionType) {
  const kw = page.keyword;
  const h1 = page.h1;

  switch(sectionType) {
    case "price":
      return generatePriceContent(page);
    case "weight":
      return generateWeightContent(page);
    case "comparison":
      return generateComparisonContent(page);
    case "spec":
      return generateSpecContent(page);
    case "industry":
      return generateIndustryContent(page);
    case "howto":
      return generateHowToContent(page);
    case "knowledge":
      return generateKnowledgeContent(page);
    case "buyer":
      return generateBuyerContent(page);
    case "sizechart":
      return generateSizeChartContent(page);
    case "faq":
      return generateFAQContent(page);
    case "casestudy":
      return generateCaseStudyContent(page);
    default:
      return generateGenericContent(page);
  }
}

function generatePriceContent(page) {
  const kw = page.keyword;
  return {
    intro: `Looking for the latest <strong>${page.h1.toLowerCase().replace(/ — .*/, "")}</strong>? Creative Metal Industries, Vadodara provides updated pricing for ${kw.replace(/ India.*/, "")} with real-time market rates. As one of India's leading steel stockists with direct mill relationships, we offer competitive pricing without broker margins. This page is updated monthly to reflect current market conditions influenced by LME nickel rates, import duties, demand-supply dynamics, and mill production schedules. Contact us at <strong>${PHONE}</strong> for today's exact rate with quantity-based discounts.`,
    sections: [
      { heading: "Current Price Range (July 2026)", body: `The current market price for ${kw.replace(/ India.*/, "")} varies based on grade, size, schedule/thickness, quantity ordered, and mill source. Prices fluctuate weekly based on London Metal Exchange (LME) nickel and molybdenum rates, import parity pricing, domestic demand from infrastructure projects, and seasonal patterns. For an accurate real-time quotation, contact Creative Metal Industries at ${PHONE} — we provide formal quotes within 4 hours with guaranteed price validity of 3-7 days depending on material type.`, body2: `Factors that influence pricing include: raw material costs (nickel, chromium, molybdenum on LME), mill production costs and capacity utilization, import duties and anti-dumping levies, GST (18% on most steel products), transportation costs, and order quantity. Bulk orders typically receive 3-8% discount over single-piece pricing. Annual rate contracts offer further savings for regular offtakers.` },
      { heading: "Price Factors & Market Trends", body: `Steel pricing in India is influenced by global commodity markets and domestic policy. The LME nickel price directly impacts stainless steel rates — every $1000/tonne movement in nickel translates to approximately Rs 15-20/kg change in SS pipe prices. For carbon and alloy steel, iron ore prices and coking coal rates are the primary drivers. Government policies including BIS mandatory certification, import restrictions, and infrastructure spending (PM Gati Shakti, Smart Cities) create demand-side pressure.`, body2: `Current market trends (July 2026): Infrastructure spending continues to drive demand for structural steel (MS angle, channel, beam, TMT). Stainless steel demand is growing at 8-10% annually driven by pharma, food processing, and water treatment sectors. Exotic alloy demand is rising due to new refinery and petrochemical projects. Alloy steel (P91, P22) demand remains steady from power sector maintenance and new AUSC projects.` },
      { heading: "How to Get the Best Price from CMI", body: `Creative Metal Industries offers several advantages for price-conscious buyers: Direct mill sourcing eliminates middlemen margins. Ready stock availability means no premium for urgent requirements. Quantity discounts on bulk orders (typically 5+ tonnes). Annual rate contracts for regular buyers with price protection. No hidden charges — quoted price includes GST, packing, and local loading. Transparent pricing with market reference. Call ${PHONE} or WhatsApp for instant pricing.`, body2: `For project-based procurement, we offer phased delivery schedules with price locking at order confirmation. This protects you from market fluctuations during extended project timelines. We also offer credit terms for established buyers with track record. Our pricing is benchmarked against Jindal (JSAL), SAIL, Ratnamani, Venus, and imported mills — ensuring you get the best market rate without compromising on material quality or documentation.` },
      { heading: "Delivery & Payment Terms", body: `Creative Metal Industries delivers across India from our Vadodara warehouse. Delivery timelines: Gujarat (same day to 1 day), Maharashtra/Rajasthan (2-3 days), South India (3-5 days), North India (3-4 days), East India (4-5 days). Payment terms: advance payment for new buyers, 15-30 day credit for established accounts with approved credit limit. Modes accepted: NEFT/RTGS, cheque, LC for export orders. GST invoice provided on all supplies.` },
    ]
  };
}

function generateWeightContent(page) {
  return {
    intro: `This <strong>${page.h1.toLowerCase()}</strong> provides accurate weight data for engineers, procurement teams, and fabricators. Whether you are preparing a Material Take-Off (MTO), verifying supplier invoices, or estimating transport costs, this reference chart gives you the per-metre and per-foot weights for all standard sizes. Creative Metal Industries, Vadodara stocks all listed sizes — call <strong>${PHONE}</strong> for availability and pricing.`,
    sections: [
      { heading: "Weight Calculation Formula", body: `The weight of any hollow pipe/tube is calculated using the formula: Weight (kg/m) = (OD - WT) × WT × 0.02466 × Density Factor. Where OD = Outside Diameter in mm, WT = Wall Thickness in mm. The density factor varies by material: Carbon Steel = 1.000 (7.85 g/cm³), Stainless Steel 304/316 = 1.020 (8.00 g/cm³), Duplex 2205 = 0.994 (7.80 g/cm³), Inconel 625 = 1.078 (8.44 g/cm³), Monel 400 = 1.130 (8.83 g/cm³), Titanium Gr.2 = 0.574 (4.51 g/cm³), Copper Nickel 70/30 = 1.129 (8.86 g/cm³).`, body2: `For solid bars: Weight (kg/m) = D² × 0.006165 × Density Factor (where D = diameter in mm). For flat bars: Weight (kg/m) = Width × Thickness × 0.00785 × Density Factor. For plates/sheets: Weight (kg) = Length × Width × Thickness × 7.85 / 1000000 (for CS/MS). Always verify calculated weights against actual mill weights as manufacturing tolerances (typically ±10-12.5% on wall thickness per ASTM standards) create minor deviations.` },
      { heading: "Standard Sizes & Weight Per Metre", body: `The chart below covers the most commonly specified sizes in the Indian market. All weights are theoretical (calculated) based on nominal dimensions. Actual weights may vary within ASTM/IS standard tolerances. For pipes, NB (Nominal Bore) sizes from 1/2 inch to 24 inch are covered across schedules 5S, 10S, 40/40S, 80/80S, 120, 160, and XXS. For structural sections, all standard IS 808 designations are included.`, body2: `Creative Metal Industries maintains ready stock of the most demanded sizes highlighted in the chart. For non-standard sizes, we source from approved mills within 2-4 weeks. Minimum order quantities vary by product — standard sizes typically have no MOQ from stock, while indent orders may require mill-minimum quantities. Contact us for specific availability.` },
      { heading: "How to Use This Chart for MTO", body: `When preparing a Material Take-Off (MTO) for a piping project, multiply the weight per metre by the total length required for each size/schedule combination. Add 5-10% wastage allowance for cutting, bevelling, and fitup. For fittings, use the individual piece weight from the fittings weight chart. For flanges, refer to the flange weight chart by class and size. This gives you the total tonnage requirement for transport planning and cost estimation.`, body2: `Pro tip: When comparing quotations from different suppliers, always verify that the weight basis matches — some suppliers quote on theoretical weight while others quote on actual (weighed) weight. ASTM standards allow ±10% tolerance on wall thickness, which means actual weight can deviate from theoretical by 5-8%. At CMI, we supply on actual weight basis with weighbridge tickets provided for bulk orders.` },
      { heading: "Download & Bookmark This Chart", body: `This weight chart is maintained and updated by the technical team at Creative Metal Industries, Vadodara. Bookmark this page for quick reference during your procurement and estimation work. For custom calculations, material selection guidance, or to source any of the sizes listed above, contact our technical sales team at ${PHONE}. We provide free technical support for grade selection, size optimization, and material equivalent queries — because we understand that engineers need more than just a supplier, they need a knowledge partner.` },
    ]
  };
}

function generateComparisonContent(page) {
  const parts = page.h1.replace(/ — .*/, "").split(" vs ");
  const itemA = parts[0] || "Material A";
  const itemB = parts[1] || "Material B";
  return {
    intro: `Choosing between <strong>${itemA}</strong> and <strong>${itemB}</strong> is one of the most common specification decisions in industrial piping and fabrication. Both have distinct properties, cost profiles, and application sweet spots. This comprehensive guide by Creative Metal Industries, Vadodara breaks down the key differences to help procurement engineers, designers, and project managers make the right material selection for their specific service conditions. Call us at <strong>${PHONE}</strong> — we stock both options and can provide technical guidance on grade selection.`,
    sections: [
      { heading: "Chemical Composition Comparison", body: `The fundamental difference between ${itemA} and ${itemB} lies in their chemical composition, which determines every downstream property — corrosion resistance, strength, temperature capability, and cost. Understanding the elemental differences helps engineers predict performance in specific environments without relying solely on general recommendations. Creative Metal Industries supplies both materials with full Mill Test Certificates (MTC) showing actual ladle analysis, so you can verify composition compliance against your project specifications.`, body2: `When reviewing MTCs, pay attention to the actual values versus specification limits. A material at the low end of its chromium range will perform differently than one at the high end. Similarly, carbon content near the maximum affects weldability and sensitization risk. Our technical team at CMI can help interpret MTC data and confirm suitability for your intended service — contact us at ${PHONE} for material consultation.` },
      { heading: "Mechanical Properties & Strength", body: `Mechanical properties determine how the material performs under load — pressure, temperature, and dynamic stress. Key properties to compare include: Tensile Strength (UTS) — maximum stress before fracture. Yield Strength (0.2% proof) — stress at which permanent deformation begins. Elongation — ductility measure, important for forming and impact resistance. Hardness — resistance to indentation, relevant for NACE/sour service limits. Impact toughness (Charpy) — resistance to brittle fracture at low temperatures.`, body2: `For pressure piping applications, the allowable stress values (from ASME B31.3 or B31.1) determine the minimum wall thickness required. A material with higher allowable stress permits thinner walls — reducing weight and cost. This is particularly significant in large-diameter or high-pressure applications where material cost is a major project line item. Creative Metal Industries stocks both materials in all standard schedules for immediate comparison and procurement.` },
      { heading: "Corrosion Resistance & Service Environment", body: `Corrosion resistance is typically the deciding factor between these two materials. The critical questions are: What media will contact the material (chemicals, seawater, steam, process fluids)? What is the chloride concentration? What is the operating temperature? Is there risk of stress corrosion cracking (SCC)? Is the environment sour (H₂S present, requiring NACE compliance)? The PREN (Pitting Resistance Equivalent Number) provides a quantitative comparison for chloride environments: PREN = %Cr + 3.3×%Mo + 16×%N. Higher PREN = better pitting resistance.`, body2: `Beyond pitting, consider other corrosion mechanisms: crevice corrosion at flange-gasket interfaces, galvanic corrosion when dissimilar metals are connected, erosion-corrosion in high-velocity flows, and intergranular corrosion in heat-affected zones after welding. Each material has different susceptibility to these mechanisms. The right choice depends on your complete service profile — not just a single parameter.` },
      { heading: "Cost Comparison & Availability", body: `Cost is always a factor in material selection, but it must be evaluated on a life-cycle basis rather than just initial purchase price. A cheaper material that requires replacement every 5 years may be more expensive over a 25-year plant life than a premium material that lasts the full design life. Consider: initial material cost per kg, fabrication cost (welding, heat treatment, NDE requirements), maintenance and inspection frequency, expected service life, and cost of unplanned shutdown if the material fails prematurely.`, body2: `From a procurement standpoint in India (July 2026): both materials are available from Creative Metal Industries Vadodara with competitive pricing and immediate stock. We source from authorized mills including Jindal, SAIL, Ratnamani, Sandvik, Sumitomo, Vallourec, and Tubacex — ensuring genuine material at the best market rate. Contact us at ${PHONE} for comparative pricing on your specific size and quantity requirement.` },
      { heading: "When to Choose Which — Decision Guide", body: `The decision between ${itemA} and ${itemB} comes down to service conditions: If your application involves moderate corrosion, standard temperatures, and cost sensitivity — the more economical option is usually correct. If your application involves aggressive corrosion (high chlorides, acids, H₂S), elevated temperatures, or critical safety requirements — the premium material is justified. When in doubt, consult the material selection diagram in your project's piping specification or contact CMI's technical team for guidance based on real-world experience across 1000+ project supplies since 2012.` },
    ]
  };
}

function generateSpecContent(page) {
  return {
    intro: `This comprehensive guide to <strong>${page.h1.replace(/ — .*/, "")}</strong> covers scope, material grades, dimensions, mechanical properties, testing requirements, and marking. Whether you are a procurement engineer writing a material requisition, a QA inspector verifying compliance, or a piping designer selecting the right standard, this reference by Creative Metal Industries provides the essential technical information. We stock material conforming to this standard — call <strong>${PHONE}</strong> for availability.`,
    sections: [
      { heading: "Scope & Coverage", body: `This standard covers the specification requirements for the materials, dimensions, tolerances, and testing of the products within its scope. Understanding the scope is critical — specifying the wrong standard leads to incorrect material procurement, failed inspection, and project delays. The standard defines: applicable material grades and chemical composition limits, mechanical property requirements (tensile, yield, elongation, hardness), dimensional tolerances, required tests (hydrostatic, NDE, mechanical), marking and certification requirements, and supplementary requirements that can be invoked for specific applications.`, body2: `Creative Metal Industries, Vadodara maintains inventory conforming to this standard from approved mills including Jindal (JSAL), SAIL, Ratnamani, Venus Pipes, Maharashtra Seamless, ISMT, Sandvik, Sumitomo, Vallourec, and Salzgitter Mannesmann. All material is supplied with original Mill Test Certificate (MTC) per EN 10204 Type 3.1/3.2 confirming full compliance with the specified requirements.` },
      { heading: "Material Grades & Chemical Composition", body: `The standard specifies chemical composition limits for each grade covered. These limits ensure the material achieves the required mechanical properties and corrosion/oxidation resistance. The ladle analysis (heat analysis) represents the chemical composition of the molten steel before casting. Product analysis (check analysis) is performed on the finished product and may show slightly wider tolerances than ladle analysis due to segregation during solidification.`, body2: `Key elements and their roles: Carbon (C) — strengthens but affects weldability and corrosion resistance. Chromium (Cr) — primary corrosion barrier, forms passive oxide film. Nickel (Ni) — stabilizes austenite, improves toughness. Molybdenum (Mo) — enhances pitting and crevice corrosion resistance. Nitrogen (N) — austenite stabilizer in duplex, improves strength and PREN. Vanadium/Niobium (V/Nb) — carbide formers for creep resistance in alloy steels. Sulphur and Phosphorus are kept to minimum as impurities.` },
      { heading: "Mechanical Properties Requirements", body: `The standard mandates minimum mechanical property values that the material must achieve in the final heat-treated condition. These properties are verified through destructive testing of test specimens taken from production material. Required tests typically include: Tensile test — determines UTS, yield strength (0.2% proof), and elongation. Hardness test — Brinell (HBW), Rockwell (HRC/HRB), or Vickers (HV) depending on product form. Impact test (Charpy V-notch) — measures toughness at specified temperature, critical for low-temperature service and NACE compliance. Flattening test, flaring test, or ring expansion test for tubular products.`, body2: `The heat treatment condition determines the achievable mechanical properties. Different conditions include: Annealed (A) — soft, maximum ductility. Normalized and Tempered (N+T) — for carbon and alloy steels, optimizes strength-toughness balance. Solution Annealed and Quenched (SA+Q) — for austenitic stainless steels, dissolves carbides for maximum corrosion resistance. The MTC from CMI's supplied material clearly states the heat treatment condition and achieved property values.` },
      { heading: "Dimensional Requirements & Tolerances", body: `Dimensional requirements cover: Outside Diameter (OD), Wall Thickness (WT), Length, Straightness, and End Finish (plain end, bevelled, threaded). Tolerances define the acceptable deviation from nominal dimensions. Tighter tolerances (e.g., ASTM close tolerance or D4/T4 per ASTM A999) may be specified for critical applications like heat exchanger tubes or instrumentation tubing. Creative Metal Industries can supply to standard or close tolerance requirements — specify your needs when enquiring.`, body2: `Standard wall thickness tolerance for seamless pipe is typically +12.5% / -0% (cannot be thinner than nominal, can be up to 12.5% thicker). OD tolerance varies by size: ±0.4mm for small bore, ±0.75% for large bore. Length tolerance is typically +50mm/-0mm for fixed length, random lengths are 5-7m. When verifying received material, always measure wall thickness at multiple points around the circumference — seamless pipe naturally has eccentricity due to the piercing process.` },
      { heading: "Testing & Inspection Requirements", body: `The standard mandates specific tests on every heat/lot of material produced. These include: Non-Destructive Examination (NDE) — Ultrasonic (UT), Eddy Current (ECT), or Hydrostatic test depending on product form and application. Hydrostatic test — every pipe/tube is tested to a calculated pressure based on allowable stress and wall thickness. Visual examination — surface quality, finish, defects. Additional tests for specific applications: Intergranular Corrosion (IGC) per ASTM A262 for SS. NACE TM0177/TM0284 for sour service. Flattening test for welded pipe.`, body2: `Creative Metal Industries can arrange third-party inspection (TPI) by internationally recognized agencies: DNV GL, TUV SUD, SGS, Bureau Veritas, Lloyd's Register, and PDIL/EIL for Indian government projects. TPI ensures independent verification of material quality beyond the mill's own QA. For IBR boiler applications, IBR inspector witnessing is mandatory — we can coordinate this at our Vadodara warehouse or at the mill source. Contact ${PHONE} to discuss your inspection requirements.` },
    ]
  };
}

function generateIndustryContent(page) {
  return {
    intro: `Selecting the right piping and structural materials for specific industrial applications requires deep understanding of service conditions, regulatory requirements, and material capabilities. This guide by Creative Metal Industries covers <strong>${page.h1.toLowerCase().replace(/ — .*/, "")}</strong> — explaining which grades, standards, and product forms are needed, why they are specified, and how CMI can supply them from our comprehensive Vadodara inventory. Call <strong>${PHONE}</strong> for project-specific material consultation and competitive pricing.`,
    sections: [
      { heading: "Service Conditions & Material Challenges", body: `Every industrial application presents unique challenges to piping materials: temperature (cryogenic to 1000°C+), pressure (vacuum to 500+ bar), corrosion (acids, alkalis, chlorides, H₂S, CO₂), erosion (high-velocity flows, particulates), fatigue (cyclic loading, vibration), and regulatory compliance (IBR, ASME, API, NACE). Understanding these conditions is the first step in material selection — and getting it wrong leads to premature failure, unplanned shutdowns, safety incidents, and costly replacement.`, body2: `Creative Metal Industries has 13+ years of experience supplying materials to this specific industry sector. Our technical team understands the typical material specifications, approved vendor lists, inspection requirements, and documentation standards expected by EPC contractors and end-users in this field. This experience translates into faster quotation, correct material supply, and zero rejection at incoming inspection.` },
      { heading: "Recommended Materials & Standards", body: `Based on industry practice, engineering standards, and proven field performance, the following materials are typically specified for this application: Stainless Steel (304L, 316L) for general corrosive service and process piping. Carbon Steel (ASTM A106 Gr.B, A53) for utility service, steam, and non-corrosive process. Alloy Steel (P91, P22, P11) for high-temperature steam and reactor piping. Duplex 2205/Super Duplex 2507 for chloride-containing and high-strength applications. Exotic alloys (Inconel, Hastelloy, Monel, Titanium) for severe corrosion and extreme temperatures. Structural steel (IS 2062, TMT Fe 500D) for supports, platforms, and buildings.`, body2: `The choice between these materials depends on: the specific fluid or gas being handled, operating temperature and pressure, design code requirements (ASME B31.3, B31.1, API, IBR), client specifications and approved material lists, budget constraints, and delivery timeline. CMI stocks all the above materials — enabling single-source procurement that simplifies your supply chain and ensures material compatibility across the project.` },
      { heading: "CMI Supply Experience for This Industry", body: `Creative Metal Industries has a documented track record of supplying materials to projects in this industry sector. Our supply portfolio includes: seamless and welded pipes across all grades and sizes, plate and sheet in standard and non-standard thicknesses, buttweld fittings (elbows, tees, reducers, caps), forged fittings (socket weld and threaded, 3000# and 6000#), flanges (WNRF, SORF, blind, spectacle blind, orifice), structural steel (MS angle, channel, beam, flat bar, plate). All supplied with complete documentation per project specifications.`, body2: `Key project supply capabilities: phased delivery with project scheduling, mill source approval documentation (MSA) for EPC requirements, pre-inspection at mill/warehouse by third-party agencies, complete material traceability from heat number to final installation, IBR certification for pressure parts, NACE/HIC compliance for sour service materials, and export documentation for international projects.` },
      { heading: "Quality & Documentation Requirements", body: `This industry typically requires comprehensive documentation beyond basic MTC: Mill Test Certificate (EN 10204 3.1/3.2) with full chemical analysis and mechanical properties. Positive Material Identification (PMI) certificate. IBR Form III-C for boiler pressure parts (India-specific). NACE MR0175 compliance letter for sour service. Intergranular Corrosion (IGC) test per ASTM A262. Heat treatment records (solution annealing, normalizing+tempering, PWHT). Dimensional inspection report. Third-party inspection (TPI) by approved agencies. Radiography/UT reports for welded products.`, body2: `Creative Metal Industries provides all documentation as per your project specification. We maintain complete traceability from mill heat number through our warehouse to final delivery. Our documentation team ensures that all certificates, test reports, and compliance letters are organized and cross-referenced correctly — preventing delays at your incoming inspection or document review stage. Contact us at ${PHONE} for documentation samples.` },
      { heading: "Contact CMI for Project Supply", body: `Whether you need 100 kg of exotic alloy pipe or 500 tonnes of structural steel, Creative Metal Industries is equipped to handle your requirement with the quality, documentation, and delivery performance that this industry demands. We understand that project timelines are critical and that material rejection at site causes cascading delays. That is why we invest in genuine mill-source material, comprehensive incoming inspection, and meticulous documentation — so your project stays on track. Call ${PHONE} or email creativemetalind@gmail.com with your MTO or enquiry sheet for a detailed quotation.` },
    ]
  };
}

function generateHowToContent(page) {
  return {
    intro: `This practical guide explains <strong>${page.h1.toLowerCase()}</strong> with step-by-step procedures, industry best practices, and safety considerations. Written by the technical team at Creative Metal Industries, Vadodara — drawing on 13+ years of experience supplying materials to fabrication workshops, EPC contractors, and industrial plants across India. Whether you are a welding engineer, QC inspector, or procurement professional, this guide gives you actionable technical knowledge. Need material for your project? Call <strong>${PHONE}</strong>.`,
    sections: [
      { heading: "Overview & Why This Matters", body: `Understanding the correct procedure for this operation is critical for ensuring material integrity, weld quality, equipment longevity, and safety compliance. Incorrect procedures lead to material failure, weld defects, corrosion susceptibility, reduced service life, and potential safety incidents. Indian industry standards (IBR, BIS, OISD) and international codes (ASME, AWS, NACE) all specify mandatory procedures for this operation — non-compliance can result in inspection rejection, project delays, and liability issues.`, body2: `This guide is based on current industry practice as per applicable codes and standards. However, always refer to your specific project procedure specifications (WPS, PQR, QAP) for project-specific requirements that may be more stringent than general guidelines. Creative Metal Industries supplies materials that meet the requirements for all standard procedures — contact us at ${PHONE} for grade-specific technical queries.` },
      { heading: "Step-by-Step Procedure", body: `The procedure involves careful preparation, execution, and verification. Preparation includes: material identification and grade verification (PMI), surface cleaning to remove contaminants (oil, grease, scale, moisture), dimensional verification, and assembly of required equipment and consumables. Execution must follow the qualified procedure exactly — deviations must be documented and approved. Verification includes visual inspection, dimensional checks, and non-destructive testing as applicable.`, body2: `Key control parameters that must be monitored and recorded include: temperature (preheat, interpass, PWHT), time (hold time at temperature), chemistry (welding consumable selection, shielding gas composition), and environment (humidity, contamination prevention). These parameters are documented in the procedure qualification records and must be reproduced during production to ensure consistent quality. CMI's technical team can assist with material-specific procedure guidance — call ${PHONE}.` },
      { heading: "Common Mistakes & How to Avoid Them", body: `Based on our experience supplying materials to fabrication shops and receiving feedback on field failures, the most common mistakes include: using incorrect consumables or procedures for the material grade, insufficient preheat or post-heat treatment, contamination during the process (using carbon steel tools on stainless steel), exceeding maximum interpass temperature, inadequate cleaning and surface preparation, and failing to document the procedure parameters for quality records.`, body2: `Prevention strategies: always verify material grade by PMI before starting work, use dedicated stainless steel tools and work areas (prevent iron contamination), monitor and record temperature with calibrated instruments (contact thermocouples, not infrared for dark surfaces), follow qualified procedures without deviation, maintain cleanliness throughout the operation, and perform all required inspections and tests before accepting the work. When in doubt, consult the material supplier — CMI provides free technical support on material-related queries.` },
      { heading: "Required Tools & Equipment", body: `Successful execution requires appropriate tools and equipment in calibrated condition. Essential items include: calibrated temperature measurement devices (thermocouples, pyrometers), material identification tools (PMI gun, spark tester, magnet), surface preparation equipment (stainless steel brushes, grinders with dedicated discs, chemical cleaners), process-specific equipment (welding machines, furnaces, test pumps), and documentation tools (calibration records, procedure sheets, recording instruments).`, body2: `All measuring instruments must have valid calibration certificates traceable to national standards. Temperature recording devices must comply with the accuracy requirements specified in the applicable code. Creative Metal Industries can supply material-specific consumables and provide material data sheets with recommended procedure parameters — contact our technical team at ${PHONE} for guidance specific to your grade and application.` },
      { heading: "Applicable Codes & Standards", body: `This operation is governed by multiple codes and standards depending on the application: ASME Section IX — welding and brazing qualifications. ASME B31.1/B31.3 — power/process piping fabrication. AWS D1.1/D1.6 — structural welding. IBR 1950 — Indian Boiler Regulations for pressure parts. NACE MR0175 / ISO 15156 — materials for sour service. ASTM A262 — intergranular corrosion testing. API 5L/API 5CT — pipeline and OCTG requirements. IS 2825, IS 2062 — Indian pressure vessel and structural standards. Always ensure you are working to the latest edition of the applicable standard.` },
    ]
  };
}

function generateKnowledgeContent(page) {
  return {
    intro: `<strong>${page.h1}</strong> — this comprehensive material guide covers everything you need to know: composition, properties, types, applications, advantages, limitations, and where to source it in India. Creative Metal Industries, Vadodara is a leading stockist and supplier of this material in all product forms — pipes, plates, sheets, fittings, flanges, bars, and tubes. Whether you are an engineer specifying material for a new project or a procurement professional sourcing for an existing plant, this guide by CMI provides the technical foundation you need. Call <strong>${PHONE}</strong> for availability and pricing.`,
    sections: [
      { heading: "Definition & Basic Properties", body: `This material belongs to a specific family of metals/alloys defined by its primary alloying elements and crystal structure. Understanding the fundamental metallurgy helps predict behaviour in service — corrosion resistance, strength at temperature, weldability, and formability. The key characteristics that differentiate this material from alternatives include: chemical composition (specific alloying elements), microstructure (austenitic, ferritic, martensitic, duplex, or precipitation-hardened), physical properties (density, thermal conductivity, thermal expansion coefficient), and processing requirements (heat treatment, welding procedure, forming limits).`, body2: `Creative Metal Industries stocks this material from internationally recognized mills with complete certification. Every product is verified by Positive Material Identification (PMI) at our Vadodara warehouse before dispatch — ensuring grade authenticity and eliminating material mix-up risk. We have supplied this material to power plants, refineries, chemical plants, pharma facilities, and infrastructure projects across India and 50+ export countries since 2012.` },
      { heading: "Types, Grades & Classification", body: `This material family encompasses multiple grades differentiated by composition, strength level, and intended application. Understanding the classification system helps you specify the correct grade for your service conditions. Grades within this family may vary in: chromium/nickel/molybdenum content (affecting corrosion resistance), carbon content (affecting weldability and sensitization risk), stabilizing elements like titanium or niobium (for high-temperature service), and nitrogen content (for strength enhancement in duplex grades).`, body2: `Each grade has specific designations across different standard systems: ASTM/ASME (American), EN/DIN (European), IS (Indian), JIS (Japanese), and UNS (Unified Numbering System). The UNS number provides a universal identifier that avoids confusion between systems. CMI can supply material to any of these standard systems — specify your requirement and we will match it to available mill certifications. Contact ${PHONE} for grade equivalents and cross-reference assistance.` },
      { heading: "Mechanical & Physical Properties", body: `The mechanical properties determine suitability for structural and pressure applications: Tensile Strength — maximum load before failure. Yield Strength (0.2% proof) — load at which permanent deformation occurs. Elongation — measure of ductility and formability. Hardness — surface resistance, relevant for wear and NACE compliance. Impact Toughness — resistance to brittle fracture at low temperatures. Fatigue Strength — resistance to cyclic loading.`, body2: `Physical properties affect design and installation: Density — determines weight per unit volume/length (critical for structural calculations). Thermal Conductivity — affects heat transfer in exchanger applications. Thermal Expansion Coefficient — determines expansion allowance in piping design. Electrical Conductivity — relevant for grounding and electrical applications. Magnetic Permeability — important for instrumentation and MRI environments. Melting Point — defines maximum theoretical temperature limit.` },
      { heading: "Applications & Industries", body: `This material finds application across diverse industrial sectors based on its specific property advantages: Chemical and Petrochemical Processing — corrosion resistance in acid/alkali environments. Oil and Gas — strength, sour service resistance, high-temperature capability. Power Generation — creep resistance, oxidation resistance, thermal fatigue resistance. Pharmaceutical and Food Processing — hygiene, cleanability, FDA compliance. Marine and Offshore — seawater resistance, high strength-to-weight. Structural and Infrastructure — load-bearing capacity, fire resistance, aesthetics.`, body2: `In each application, the specific grade selection depends on: the exact corrosive media and concentration, operating temperature and pressure, design code requirements (ASME, API, IBR), client preferences and approved vendor lists, budget constraints, and delivery availability. Creative Metal Industries serves all these sectors from our Vadodara warehouse — providing one-stop material sourcing with technical expertise for every application. Call ${PHONE} for application-specific grade recommendations.` },
      { heading: "How to Source This Material from CMI", body: `Creative Metal Industries, Vadodara stocks this material in multiple product forms: Seamless and welded pipes in all standard sizes from 1/2 inch to 24 inch (larger on indent). Plates and sheets in all standard thicknesses. Buttweld fittings (elbows, tees, reducers, caps) and forged fittings (socket weld, threaded). Flanges in all types (WNRF, SORF, blind, ring joint). Round bars, flat bars, and hollow sections. All supplied with: MTC (EN 10204 3.1/3.2), IBR Form III-C (where applicable), PMI certificate, NACE compliance, third-party inspection.`, body2: `Contact us for immediate stock availability and pricing: Phone: ${PHONE} (Sunny Shah). WhatsApp: same number for instant response. Email: creativemetalind@gmail.com. Visit: F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001. Our GIDC Makarpura warehouse maintains 2000+ tonnes of ready stock across all material families — enabling same-day dispatch for standard requirements.` },
    ]
  };
}

function generateBuyerContent(page) {
  return {
    intro: `This buyer's guide on <strong>${page.h1.toLowerCase()}</strong> is written for procurement engineers, purchase managers, and project coordinators who need practical guidance on sourcing industrial steel and metals in India. Creative Metal Industries has been helping buyers navigate steel procurement since 2012 — we understand the challenges of quality assurance, documentation compliance, competitive pricing, and reliable delivery. Call <strong>${PHONE}</strong> for procurement support and quotations on SS, CS, alloy, duplex, exotic alloys, and structural steel.`,
    sections: [
      { heading: "Understanding the Process", body: `Successful steel procurement requires systematic approach: requirement definition (MTO with complete specifications), supplier identification and qualification, quotation comparison (not just price — consider quality, documentation, delivery, and after-sales support), order placement with clear terms, inspection and quality verification, documentation review, and goods receipt. Each step has specific best practices that differentiate professional procurement from ad-hoc buying.`, body2: `The most common procurement failures we see at Creative Metal Industries occur due to: incomplete specifications in the enquiry (missing schedule, grade variant, or documentation requirements), choosing the lowest price without verifying material authenticity, not checking documentation before acceptance, and not maintaining material traceability from purchase order to installation. This guide helps you avoid these pitfalls.` },
      { heading: "Key Considerations & Best Practices", body: `When buying steel in India, these best practices protect your investment and project timeline: Always specify complete material description — grade, standard, size, schedule, heat treatment condition, and documentation requirements. Request sample MTC before order to verify mill source and documentation quality. Verify supplier credentials — GST registration, past supply track record, mill authorization letters. Insist on Positive Material Identification (PMI) at dispatch.`, body2: `Additional considerations: understand the difference between stockist material (ready, higher price, immediate delivery) and indent material (ordered from mill, lower price, 4-8 week delivery). For critical applications, specify third-party inspection at supplier warehouse before dispatch. Maintain a vendor rating system based on quality performance, delivery reliability, pricing competitiveness, and documentation accuracy. Creative Metal Industries maintains a documented quality management system covering all these aspects — contact us at ${PHONE} to experience the difference.` },
      { heading: "Documentation & Compliance", body: `Industrial steel procurement requires comprehensive documentation for traceability and compliance: Mill Test Certificate (MTC) per EN 10204 3.1 (mill QA) or 3.2 (independent inspector). IBR Form III-C for boiler pressure parts (mandatory in India per Indian Boiler Regulations 1950). NACE MR0175 compliance letter for sour service materials. PMI report confirming material grade identity. Dimensional inspection report. Heat treatment certificate. Non-destructive examination (NDE) reports where specified.`, body2: `Always verify documentation before acceptance: cross-check heat number on MTC against marking on material, verify chemical composition against specification limits, confirm mechanical properties meet minimum requirements, check that all specified tests are present and passed, verify third-party inspector name and license number on 3.2 certificates. CMI provides organized documentation packages with cross-references for easy inspection — saving your QC team significant verification time.` },
      { heading: "Pricing & Negotiation Tips", body: `Steel pricing in India follows market dynamics influenced by: LME metal rates (nickel, chromium, molybdenum), domestic demand-supply balance, import parity (international prices + duty + freight), mill production costs, and seasonal factors. Understanding these helps you time your purchases and negotiate effectively.`, body2: `Negotiation strategies that work: consolidate requirements to achieve volume discounts (5+ tonnes typically triggers price break). Request annual rate contracts for regular requirements — provides price stability and guaranteed supply. Compare ex-factory vs delivered pricing (transport can be 3-8% of material cost for outstation supply). Ask about payment term discounts (advance payment typically offers 1-2% savings over credit). At CMI, we offer transparent pricing benchmarked against market rates — no hidden margins. Call ${PHONE} for a competitive quotation.` },
      { heading: "Why Buy from Creative Metal Industries", body: `Choosing the right supplier is as important as choosing the right material. Creative Metal Industries offers: genuine mill-sourced material with verified traceability (no duplicate/counterfeit MTCs), comprehensive size range across SS, CS, alloy, duplex, exotic alloys, and structural steel — single-source procurement reduces coordination effort. 13+ years of industry experience means we understand your technical requirements and documentation needs. Ready stock for immediate dispatch combined with indent capability for non-standard sizes. Pan-India delivery with export to 50+ countries.`, body2: `Our customer base includes: ONGC, IOCL, BPCL, HPCL, GSFC, GNFC, L&T, Tata Projects, PDIL, Toyo, Technip, Thermax, Godrej, Siemens, ABB — and hundreds of fabrication workshops, project contractors, and industrial plants across India. This diverse experience means we understand the specific requirements of different end-users and can tailor our supply approach accordingly. Contact ${PHONE} to discuss your requirement.` },
    ]
  };
}

function generateSizeChartContent(page) {
  return {
    intro: `This <strong>${page.h1.toLowerCase()}</strong> provides engineers, procurement teams, and fabricators with accurate dimensional reference data. Bookmark this page for quick access during material take-offs, inspection verification, and project estimation. All dimensions conform to the applicable ASTM, ASME, IS, or DIN standards. Creative Metal Industries, Vadodara stocks material across the full size range — call <strong>${PHONE}</strong> for specific size availability and pricing.`,
    sections: [
      { heading: "Dimension Standards & Tolerances", body: `Dimensions in this chart conform to the applicable international and Indian standards. Understanding which standard governs your requirement is essential for correct specification: ASME B36.10 — carbon and alloy steel pipe dimensions. ASME B36.19 — stainless steel pipe dimensions. ASME B16.5 — flanges NPS 1/2 to 24. ASME B16.9 — buttweld fittings. ASME B16.11 — forged fittings. ASME B16.47 — large flanges NPS 26 to 60. IS 808 — Indian structural steel sections. IS 1239 — ERW steel tubes. IS 2062 — structural steel plates.`, body2: `Standard tolerances for pipes: OD tolerance ±1% for sizes above 4 inch, ±0.4mm for smaller sizes. Wall thickness tolerance +12.5%/-0% (seamless), +12.5%/-12.5% (welded). Length tolerance: +50mm/-0mm for fixed lengths. Ovality (difference between max and min OD) must be within limits specified by the standard. Straightness deviation maximum 0.2% of total length. Always verify received material dimensions against these tolerances using calibrated measuring instruments.` },
      { heading: "Complete Dimension Table", body: `The table below covers all standard sizes per the applicable specification. Dimensions shown include: Nominal Size (NB/NPS), Outside Diameter (OD in mm), Wall Thickness for each schedule/class (in mm), and Weight per metre (in kg/m). For structural sections: depth, width, web thickness, flange thickness, weight per metre, and section properties (moment of inertia, section modulus, radius of gyration). These reference values are essential for structural design calculations and material ordering.`, body2: `Creative Metal Industries maintains ready stock of commonly demanded sizes (highlighted in the full chart). Non-standard sizes can be procured on indent from approved mills within 2-4 weeks. Minimum order quantities for indent: typically 500 kg to 2 tonnes depending on product and mill. For standard stock sizes, there is no minimum quantity — we supply even single pieces for urgent maintenance requirements.` },
      { heading: "How to Specify Correctly", body: `When ordering based on this chart, specify the complete description: Product form (pipe, tube, plate, angle, channel, etc.). Standard (ASTM A312, A106, IS 1239, IS 808, etc.). Grade (TP304L, Gr.B, P91, E250, etc.). Size — NPS x Schedule for pipes (e.g., 4 inch NPS x SCH 40S). Or OD x WT for tubes (e.g., 25.4mm OD x 1.5mm WT). Or dimension for sections (e.g., ISMC 200 x 75). Length — random (5-7m), fixed (specify length), or cut-to-length. End finish — plain end (PE), beveled end (BE), threaded, grooved. Quantity — metres, pieces, or kg/tonnes.`, body2: `Common ordering mistakes to avoid: specifying NB when you mean OD (NB 2 inch = OD 60.3mm, not 50.8mm). Confusing Schedule 40 with Schedule 40S (different wall thickness for sizes above 10 inch). Not specifying the L-grade for welded applications (304 vs 304L). Forgetting to mention end finish requirement. Ordering structural steel by weight but expecting exact number of pieces. CMI's experienced sales team catches these common errors and confirms correct specifications before dispatch — preventing costly returns and project delays.` },
      { heading: "Source All Sizes from CMI Vadodara", body: `Creative Metal Industries stocks the complete size range from this chart across multiple grades and materials. Our Vadodara warehouse at GIDC Makarpura maintains 2000+ tonnes of inventory covering: SS pipes and tubes (1/2 inch to 24 inch, all schedules). CS pipes (1/2 inch to 48 inch, ERW and seamless). Alloy steel pipes (P91, P22, P11 — 1 inch to 12 inch). Duplex and exotic alloy (1/2 inch to 8 inch commonly stocked). Structural steel (full range of IS 808 sections). Plates (SS, CS, alloy, boiler quality — 6mm to 100mm).`, body2: `For any size in this chart — whether from stock or indent — contact us: Phone: ${PHONE} (Sunny Shah). WhatsApp: same number for photos and immediate response. Email: creativemetalind@gmail.com. We provide formal quotations within 4 hours with complete specification confirmation, delivery timeline, and documentation scope. Our goal is to be your single-source supplier for all industrial metal requirements.` },
    ]
  };
}

function generateFAQContent(page) {
  return {
    intro: `This comprehensive FAQ page answers the most common questions about <strong>${page.h1.toLowerCase().replace(/ — .*/, "").replace(/faq /i, "")}</strong>. Based on actual queries from our customers — engineers, procurement teams, and project managers across India — these answers provide practical, actionable information. Creative Metal Industries, Vadodara has been answering these questions and supplying materials since 2012. For personalized guidance on your specific requirement, call <strong>${PHONE}</strong>.`,
    sections: [
      { heading: "Top Questions We Receive", body: `The questions below represent the most frequently asked queries from our customer base of 2000+ active buyers across India. These range from basic material selection questions from junior engineers to complex specification interpretation queries from senior procurement professionals. We have organized them in order of frequency — starting with the most commonly asked.`, body2: `Each answer is written by our technical team with input from our 13+ years of supply experience to over 500 projects. However, please note that material selection for critical applications should always be verified against your specific project specification, design code, and service conditions. When in doubt, consult your design engineer or contact CMI's technical team at ${PHONE} for application-specific guidance.` },
      { heading: "Material Selection & Grade Questions", body: `Choosing the right material grade is the most critical decision in any piping or fabrication project. The correct grade ensures: adequate corrosion resistance for the service environment, sufficient strength for the operating pressure and temperature, weldability without excessive procedure complexity, availability in the market within project timelines, and cost-effectiveness over the design life. Wrong grade selection leads to: premature corrosion failure, stress corrosion cracking, hydrogen embrittlement, creep damage at high temperature, or unnecessary over-specification (wasting budget).`, body2: `Creative Metal Industries stocks all commonly specified grades across: Stainless Steel (304, 304L, 316, 316L, 321, 310S, 347, 904L, 202, 410, 430). Duplex (2205, 2507). Carbon Steel (A106 Gr.B, A53 Gr.B, IS 1239, API 5L all grades). Alloy Steel (P5, P9, P11, P12, P22, P91, P92). Exotic (Inconel 625/600/718/825, Hastelloy C276/C22/B2, Monel 400/K500, Titanium Gr.2/5, CuNi 70/30/90/10, Nickel 200/201, Alloy 20). Call ${PHONE} for grade availability and technical guidance.` },
      { heading: "Pricing, Ordering & Delivery Questions", body: `Pricing for industrial metals depends on: material type and grade (exotic alloys cost 10-50x more than mild steel), size and schedule (thicker walls and larger diameters cost more per kg due to processing), quantity (bulk orders receive 5-10% discount), mill source (imported mills premium over Indian mills for certain grades), documentation level (IBR, 3.2 certificate, TPI add cost), and current market conditions (LME metals, import duty, demand-supply).`, body2: `Creative Metal Industries offers competitive pricing through: direct mill relationships eliminating broker margins, inventory buying at bulk rates, efficient logistics from our centrally located Vadodara warehouse, and lean operations keeping overheads low. Payment terms: advance for new customers, 15-30 day credit for established accounts. Delivery: same-day to 5 days across India depending on location. Export: 4-6 weeks including documentation and shipping. Call ${PHONE} for instant quotation with 4-hour response guarantee.` },
      { heading: "Quality, Testing & Documentation Questions", body: `Quality assurance in steel supply involves multiple verification stages: Mill-level QA — production testing per standard requirements (chemistry, mechanical, NDE, hydrostatic). Supplier-level QA — incoming PMI verification, visual inspection, dimensional spot-check. Documentation review — MTC verification against specification, cross-referencing heat numbers. Dispatch QA — final identification marking check, packing inspection.`, body2: `Testing types commonly specified: Chemical analysis (spectrometer). Tensile test. Hardness test (Brinell, Rockwell, Vickers). Impact test (Charpy V-notch). Intergranular corrosion (IGC per ASTM A262). Positive Material Identification (PMI by XRF). Hydrostatic test. Non-Destructive Examination (UT, RT, PT/DPT, MT/MPT, ECT). Ferrite content (for duplex). NACE testing (HIC per TM0284, SSC per TM0177). CMI provides all testing certificates as per your requirement specification.` },
    ]
  };
}

function generateCaseStudyContent(page) {
  return {
    intro: `This case study documents a real project supply by Creative Metal Industries — demonstrating our capability to deliver complex material requirements on time, within specification, and with complete documentation. The project details illustrate our experience with <strong>${page.h1.toLowerCase().replace(/ — .*/, "")}</strong> and showcase the comprehensive supply chain management that CMI brings to every engagement. For similar project requirements, contact us at <strong>${PHONE}</strong>.`,
    sections: [
      { heading: "Project Overview & Requirements", body: `The project required supply of multiple material grades across pipes, fittings, flanges, and plates — all conforming to stringent quality specifications with third-party inspection, complete traceability, and phased delivery aligned with construction milestones. Key challenges included: tight delivery timelines with penalty clauses, exotic alloy procurement with 8-12 week mill lead times, IBR certification requirements for pressure parts, NACE/HIC compliance for sour service components, and multi-grade material identification management to prevent mix-ups.`, body2: `Creative Metal Industries was selected as a qualified supplier based on: proven track record of similar project supplies, comprehensive stock holding across all required material families, documented quality management system, competitive pricing with transparent mill sourcing, and technical capability to provide material consultation and grade equivalence support. Our GIDC Makarpura warehouse served as the central staging area for material consolidation and inspection before dispatch.` },
      { heading: "Material Supplied & Grades", body: `The project supply included multiple material families from our standard inventory and indent sources: Stainless Steel — SS 304L/316L seamless pipes (ASTM A312), plates (A240), fittings (A403), flanges (A182). Carbon Steel — CS seamless pipes (A106 Gr.B), ERW pipes (A53), plates (A516 Gr.70), fittings (A234 WPB), flanges (A105). Alloy Steel — P91/P22/P11 seamless pipes (A335), alloy plates (SA 387), alloy fittings (A234 WP91/WP22). Duplex — 2205 seamless pipes (A790), plates (A240), fittings (A815). Structural — MS angles, channels, beams (IS 808/2062), TMT bars (IS 1786 Fe 500D).`, body2: `Each material was sourced from approved mills per the project's Approved Vendor List (AVL): Jindal Stainless (JSAL) for SS. Maharashtra Seamless and ISMT for CS and alloy. Sumitomo and Vallourec for P91/P92 IBR material. Sandvik for duplex and exotic grades. SAIL for structural steel and TMT. All mill source approvals were documented and submitted to the EPC consultant for approval before order placement.` },
      { heading: "Quality Assurance & Inspection", body: `The project QAP (Quality Assurance Plan) required: 100% PMI verification at CMI warehouse before dispatch. MTC review against specification by our QC team. Dimensional verification (sample basis per lot). Third-party inspection by approved agency (TPI) for all pressure-rated material. IBR inspector witnessing for P91/P22 alloy steel pipes and tubes. NABL-accredited laboratory testing for impact and HIC testing on NACE materials.`, body2: `Results: Zero rejection at project incoming inspection across 6 months of phased supply. Complete documentation packages delivered within 3 working days of material dispatch. Heat number traceability maintained from mill to site with cross-reference index. All PMI results matched MTC chemistry within expected tolerances. TPI releases obtained within 24 hours of material readiness at our warehouse.` },
      { heading: "Delivery Performance & Logistics", body: `Phased delivery was scheduled over 6 months aligned with construction sequence. CMI managed: warehouse space allocation for project-dedicated stock (preventing mix-up with general inventory), marking and identification per project-specific colour coding, bundle sizing per truck capacity for efficient transport, loading supervision with photographic documentation, and transit insurance for high-value exotic alloy consignments.`, body2: `Delivery performance: 98% on-time delivery against project schedule. Average delivery time 2-3 days from dispatch authorization. Emergency deliveries handled within 24 hours for critical-path items. No material damage during transit (proper wooden supports, VCI wrapping for CS, plastic cap protection for pipe ends). Delivery challan with material reference linked to inspection release documents.` },
      { heading: "Contact CMI for Your Project", body: `This project demonstrates Creative Metal Industries' capability to handle complex multi-grade project supplies with stringent quality and documentation requirements. Whether your project is a small fabrication job requiring 500 kg of exotic alloy or a major EPC contract requiring 500 tonnes across all material families, CMI has the inventory, experience, systems, and team to deliver. Contact us: Phone: ${PHONE} (Sunny Shah). Email: creativemetalind@gmail.com. WhatsApp: +91 99982 80619. Address: F-3, Loha Bhavan, Lakkadpitha Road, Vadodara 390001, Gujarat, India. GIDC Warehouse: 386/B, GIDC Estate, Makarpura, Vadodara 390010.` },
    ]
  };
}

function generateGenericContent(page) {
  return generateKnowledgeContent(page);
}

// ============================================================
// FAQ GENERATION (3-5 questions per page)
// ============================================================
function generateFAQs(page, sectionType) {
  const kw = page.keyword;
  const h1 = page.h1;

  const baseFAQs = {
    price: [
      { q: `What is the current ${kw.replace(/ India.*/, "")} rate?`, a: `The current rate varies based on grade, size, quantity, and market conditions (LME nickel, import duty, demand). Creative Metal Industries provides real-time pricing — call ${PHONE} for today's rate with quantity discounts. We offer 3-7 day price validity on formal quotations.` },
      { q: `Why do steel prices fluctuate in India?`, a: `Steel prices in India fluctuate due to: LME metal rates (nickel, chromium, molybdenum), import parity changes, domestic demand from infrastructure projects, mill production capacity, government policy (anti-dumping duty, BIS certification), and seasonal demand patterns. Monthly and sometimes weekly revisions are normal.` },
      { q: `Does CMI offer bulk discount on this material?`, a: `Yes, Creative Metal Industries offers volume-based pricing: 1-5 tonnes (standard market rate), 5-20 tonnes (3-5% discount), 20+ tonnes (5-8% discount), annual rate contracts (best pricing with price protection). Contact ${PHONE} for quantity-specific quotation.` },
      { q: `What payment terms does CMI offer?`, a: `Payment terms: 100% advance for new customers, 50% advance + balance before dispatch for orders above Rs 5 lakh, 15-30 day credit for established accounts with approved credit limit, LC accepted for export orders. All payments via NEFT/RTGS with GST invoice.` },
    ],
    weight: [
      { q: `How accurate is this weight chart?`, a: `This chart shows theoretical (calculated) weights based on nominal dimensions. Actual weights may vary within standard manufacturing tolerances (typically ±10-12.5% on wall thickness per ASTM standards). For commercial transactions, CMI supplies on actual weighed weight with weighbridge tickets for bulk orders.` },
      { q: `What density value is used for stainless steel?`, a: `Stainless steel 304/316 density is 8.00 g/cm³ (versus 7.85 for carbon steel). This means SS pipe weighs approximately 2% more than equivalent CS pipe of the same dimensions. For duplex 2205, density is 7.80 g/cm³ (slightly lighter than CS). Exotic alloys vary: Inconel 625 = 8.44, Monel 400 = 8.83, Titanium = 4.51 g/cm³.` },
      { q: `How do I calculate pipe weight for my MTO?`, a: `Use formula: Weight (kg/m) = (OD - WT) x WT x 0.02466 x density factor. Multiply by total length required. Add 5-10% wastage for cutting and fitup. For quick reference, use this chart or contact CMI at ${PHONE} for assistance with MTO estimation.` },
      { q: `Does CMI supply all sizes shown in this chart?`, a: `Yes, Creative Metal Industries stocks most standard sizes from this chart for immediate dispatch. Non-standard sizes can be arranged on indent within 2-4 weeks. Call ${PHONE} for specific size availability — we maintain real-time inventory tracking.` },
    ],
    comparison: [
      { q: `Which material is better for my application?`, a: `The "better" material depends entirely on your service conditions — corrosive media, temperature, pressure, regulatory requirements, and budget. Contact CMI at ${PHONE} with your specific application details and our technical team will recommend the optimal grade based on 13+ years of material supply experience across diverse industries.` },
      { q: `Is the more expensive option always better?`, a: `No. Over-specifying material wastes budget without performance benefit. A material that exceeds requirements by a large margin indicates opportunity for cost optimization. The correct approach is to match material capability to actual service requirements — not to default to the premium option. CMI helps buyers optimize specifications.` },
      { q: `Can CMI supply both materials compared here?`, a: `Yes, Creative Metal Industries stocks both materials in all standard product forms (pipes, plates, fittings, flanges). We can supply comparison samples if needed for your evaluation. Call ${PHONE} for stock availability and competitive pricing on either option.` },
      { q: `How do I verify I received the correct grade?`, a: `Positive Material Identification (PMI) testing using XRF analyzer instantly confirms grade by measuring elemental composition. CMI performs PMI on all material before dispatch and provides PMI certificates. You can also request third-party PMI at your receiving end for additional assurance.` },
    ],
    spec: [
      { q: `Where can I buy material per this standard?`, a: `Creative Metal Industries, Vadodara stocks material conforming to this standard from approved mills (Jindal, SAIL, Ratnamani, Sandvik, Sumitomo, Vallourec). All material supplied with MTC confirming compliance. Call ${PHONE} for stock availability and pricing.` },
      { q: `What is the difference between 3.1 and 3.2 certification?`, a: `EN 10204 Type 3.1 = MTC issued by mill's own QA department. Type 3.2 = MTC countersigned by an independent third-party inspector (DNV, TUV, SGS, Lloyd's). Type 3.2 is required for critical applications like nuclear, offshore, and some boiler specifications. CMI can supply either type.` },
      { q: `Does CMI provide IBR certified material per this standard?`, a: `Yes, for applicable product forms, CMI supplies material with IBR Form III-C certification — mandatory for boiler pressure parts in India. We source from IBR-approved mills and can arrange IBR inspector witnessing at our Vadodara warehouse. Call ${PHONE} for IBR material availability.` },
    ],
    industry: [
      { q: `Has CMI supplied to this industry before?`, a: `Yes, Creative Metal Industries has a documented track record of supplying to this industry sector since 2012. Our experience includes supply to major EPC contractors (L&T, Tata, Thermax, Godrej) and end-users across India. Contact ${PHONE} for references and past supply details.` },
      { q: `What documentation does this industry require?`, a: `Documentation requirements vary by project but typically include: MTC (EN 10204 3.1/3.2), IBR Form III-C (boiler parts), PMI certificate, NACE compliance (sour service), dimensional report, heat treatment certificate, and TPI release from approved agencies. CMI provides all documentation per your project specification.` },
      { q: `Can CMI handle large project orders?`, a: `Yes, we handle project orders from 1 tonne to 500+ tonnes across all material families. Our capabilities include: phased delivery, mill source approval, third-party inspection, IBR witnessing, export documentation, and dedicated project coordination. Contact ${PHONE} for project enquiries.` },
    ],
    howto: [
      { q: `Does CMI provide technical support for this procedure?`, a: `Yes, CMI's technical team provides free guidance on material-specific procedures including recommended welding consumables, heat treatment parameters, and testing requirements. We also supply relevant reference documents and material data sheets. Call ${PHONE} for technical consultation.` },
      { q: `What materials does CMI stock for this application?`, a: `Creative Metal Industries stocks all relevant material grades in pipes, plates, fittings, and flanges. We supply with complete certification required for this application. Contact ${PHONE} for specific grade and size availability with pricing.` },
      { q: `Can CMI arrange third-party testing?`, a: `Yes, we can arrange testing through NABL-accredited laboratories and internationally recognized inspection agencies (DNV, TUV, SGS, Bureau Veritas, Lloyd's). Tests are conducted at our Vadodara warehouse or at accredited labs. Results provided within 3-5 working days.` },
    ],
    knowledge: [
      { q: `Where can I buy this material in India?`, a: `Creative Metal Industries, Vadodara stocks this material in all product forms — pipes, plates, sheets, fittings, flanges, and bars. We supply across India with 2-5 day delivery and export to 50+ countries. Call ${PHONE} for stock availability and best pricing.` },
      { q: `What grades and sizes are available?`, a: `CMI stocks the complete range of commonly specified grades and sizes from 1/2 inch to 24 inch for pipes, 4mm to 100mm for plates, and all standard fitting/flange sizes. Non-standard sizes available on indent within 2-4 weeks. Call ${PHONE} for specific requirements.` },
      { q: `What documentation is provided with this material?`, a: `Every supply includes: Mill Test Certificate (EN 10204 3.1/3.2), PMI certificate, and relevant compliance certificates (IBR, NACE, IGC) as per your requirement. Third-party inspection available from DNV, TUV, SGS, and Bureau Veritas.` },
    ],
    buyer: [
      { q: `What is the minimum order quantity at CMI?`, a: `For stock material: no minimum — we supply even single pieces for urgent maintenance needs. For indent orders from mills: typically 500 kg to 2 tonnes depending on product and mill requirements. Contact ${PHONE} for specific MOQ information.` },
      { q: `How quickly can CMI deliver?`, a: `Stock material: same-day to 2 days within Gujarat, 2-5 days across India. Indent material: 2-4 weeks for domestic mills, 8-12 weeks for imported exotic alloys. Emergency orders handled on priority with express dispatch.` },
      { q: `Does CMI offer credit terms?`, a: `Yes, for established customers with approved credit applications: 15-30 day payment terms. New customers start with advance payment and can transition to credit after 3-4 successful orders demonstrating payment discipline. Contact ${PHONE} for credit application.` },
    ],
    sizechart: [
      { q: `Are these dimensions as per Indian or international standards?`, a: `Dimensions in this chart conform to international standards (ASTM, ASME, API) which are universally used in Indian industry for industrial piping. IS standards are referenced where applicable (IS 808 for structural, IS 1239 for ERW). Both systems are covered in our charts.` },
      { q: `Does CMI stock all sizes shown in this chart?`, a: `CMI stocks the most commonly demanded sizes for immediate dispatch. The complete range is available on indent from approved mills within 2-4 weeks. Call ${PHONE} for specific size availability — our sales team provides instant stock confirmation.` },
      { q: `Can I get cut-to-length from CMI?`, a: `Yes, Creative Metal Industries offers cut-to-length service at our Vadodara warehouse for pipes and plates. Cutting charges apply based on size and material. Bevelling (for weld preparation) is also available. Contact ${PHONE} for cut-piece requirements with pricing.` },
    ],
    faq: [
      { q: `How can I contact CMI for a quotation?`, a: `Contact Creative Metal Industries: Phone: ${PHONE} (Sunny Shah). WhatsApp: +91 99982 80619. Email: creativemetalind@gmail.com. We respond to all enquiries within 4 hours with formal quotations including complete specifications, delivery timeline, and documentation scope.` },
      { q: `Does CMI deliver across India?`, a: `Yes, we deliver across all Indian states from our Vadodara warehouse. Transit time: Gujarat (same day-1 day), Maharashtra/Rajasthan (2-3 days), South India (3-5 days), North India (3-4 days), East India (4-5 days). Door-to-door delivery with tracking.` },
      { q: `What is CMI's return/replacement policy?`, a: `If material does not conform to ordered specifications (verified by independent testing), CMI provides full replacement at no additional cost. We have zero-rejection track record due to our comprehensive incoming inspection and PMI verification process. Quality guarantee on every supply.` },
    ],
    casestudy: [
      { q: `Can CMI handle similar project requirements?`, a: `Yes, Creative Metal Industries regularly handles multi-grade project supplies ranging from 5 tonnes to 500+ tonnes. Our capabilities include phased delivery, mill source approval, third-party inspection coordination, IBR certification, and complete project documentation. Contact ${PHONE} to discuss your project.` },
      { q: `What is CMI's project delivery track record?`, a: `98% on-time delivery across 500+ project supplies since 2012. Zero major quality rejections. Average documentation turnaround of 3 working days. References available from major EPC contractors and industrial end-users upon request.` },
      { q: `Does CMI provide material for export projects?`, a: `Yes, we export to 50+ countries including UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain, USA, UK, Singapore, and more. Complete export documentation including commercial invoice, packing list, certificate of origin, fumigation certificate, and seaworthy packing provided. Contact ${PHONE} for export enquiries.` },
    ],
  };

  return baseFAQs[sectionType] || baseFAQs.knowledge;
}

// ============================================================
// MAIN EXECUTION — GENERATE ALL PAGES
// ============================================================

function writePage(slug, content) {
  const isBlog = slug.startsWith("/blog/");
  const filename = slug.replace("/blog/", "").replace("/", "") + ".tsx";
  const dir = isBlog ? BLOG_DIR : ROUTES_DIR;
  const filepath = join(dir, filename);

  writeFileSync(filepath, content, "utf-8");
  allRoutes.push(slug);
  pagesCreated++;
}

console.log("\\n🚀 Creative Metal Industries — Page Generator");
console.log("================================================\\n");

// Section 2: Product Landing Pages
console.log("📦 Section 2: Product Landing Pages (10 pages)...");
for (const page of SECTION_2_PAGES) {
  writePage(page.slug, generateProductPage(page));
}
console.log(`   ✓ ${SECTION_2_PAGES.length} product pages created`);

// Section 3: Price & Rate Articles
console.log("💰 Section 3: Price & Rate Articles (40 pages)...");
for (const page of SECTION_3_PAGES) {
  writePage(page.slug, generateBlogPage(page, "price"));
}
console.log(`   ✓ ${SECTION_3_PAGES.length} price pages created`);

// Section 4: Weight Chart & Calculator
console.log("⚖️  Section 4: Weight Chart & Calculator (30 pages)...");
for (const page of SECTION_4_PAGES) {
  writePage(page.slug, generateBlogPage(page, "weight"));
}
console.log(`   ✓ ${SECTION_4_PAGES.length} weight chart pages created`);

// Section 5: Comparison & VS Articles
console.log("⚔️  Section 5: Comparison & VS Articles (50 pages)...");
for (const page of SECTION_5_PAGES) {
  writePage(page.slug, generateBlogPage(page, "comparison"));
}
console.log(`   ✓ ${SECTION_5_PAGES.length} comparison pages created`);

// Section 6: Specification & Standard Guides
console.log("📋 Section 6: Specification Guides (40 pages)...");
for (const page of SECTION_6_PAGES) {
  writePage(page.slug, generateBlogPage(page, "spec"));
}
console.log(`   ✓ ${SECTION_6_PAGES.length} specification pages created`);

// Section 7: Industry Application Guides
console.log("🏭 Section 7: Industry Application Guides (40 pages)...");
for (const page of SECTION_7_PAGES) {
  writePage(page.slug, generateBlogPage(page, "industry"));
}
console.log(`   ✓ ${SECTION_7_PAGES.length} industry pages created`);

// Section 8: How-To & Process Articles
console.log("🔧 Section 8: How-To & Process Articles (40 pages)...");
for (const page of SECTION_8_PAGES) {
  writePage(page.slug, generateBlogPage(page, "howto"));
}
console.log(`   ✓ ${SECTION_8_PAGES.length} how-to pages created`);

// Section 9: Material Knowledge & Guide Articles
console.log("📚 Section 9: Material Knowledge Guides (50 pages)...");
for (const page of SECTION_9_PAGES) {
  writePage(page.slug, generateBlogPage(page, "knowledge"));
}
console.log(`   ✓ ${SECTION_9_PAGES.length} material guide pages created`);

// Section 10: Buyer Guide & Procurement
console.log("🛒 Section 10: Buyer Guide & Procurement (30 pages)...");
for (const page of SECTION_10_PAGES) {
  writePage(page.slug, generateBlogPage(page, "buyer"));
}
console.log(`   ✓ ${SECTION_10_PAGES.length} buyer guide pages created`);

// Section 11: Size Chart & Dimension Tables
console.log("📏 Section 11: Size Chart & Dimensions (30 pages)...");
for (const page of SECTION_11_PAGES) {
  writePage(page.slug, generateBlogPage(page, "sizechart"));
}
console.log(`   ✓ ${SECTION_11_PAGES.length} size chart pages created`);

// Section 12: FAQ & Question Articles
console.log("❓ Section 12: FAQ & Question Articles (40 pages)...");
for (const page of SECTION_12_PAGES) {
  writePage(page.slug, generateBlogPage(page, "faq"));
}
console.log(`   ✓ ${SECTION_12_PAGES.length} FAQ pages created`);

// Section 13: Case Study & Project Pages
console.log("📋 Section 13: Case Study & Project Pages (10 pages)...");
for (const page of SECTION_13_PAGES) {
  writePage(page.slug, generateBlogPage(page, "casestudy"));
}
console.log(`   ✓ ${SECTION_13_PAGES.length} case study pages created`);

// ============================================================
// OUTPUT SUMMARY & ROUTES FILE
// ============================================================

console.log("\\n================================================");
console.log(`✅ TOTAL PAGES CREATED: ${pagesCreated}`);
console.log("================================================\\n");

// Write routes list for app.config.ts
const routesOutput = allRoutes.map(r => `        "${r}",`).join("\n");
writeFileSync(
  join(import.meta.dirname, "NEW_ROUTES_LIST.txt"),
  `// Add these routes to app.config.ts prerender.routes array:\n\n${routesOutput}\n`,
  "utf-8"
);
console.log("📄 Route list saved to NEW_ROUTES_LIST.txt");
console.log("   Add these to app.config.ts > server.prerender.routes\\n");

// Write sitemap entries
const sitemapEntries = allRoutes.map(r =>
  `<url><loc>${SITE_URL}${r}</loc><lastmod>${DATE_NOW}</lastmod><changefreq>${r.includes("price") ? "weekly" : "monthly"}</changefreq><priority>${r.startsWith("/blog/") ? "0.7" : "0.8"}</priority></url>`
).join("\n");
writeFileSync(
  join(import.meta.dirname, "NEW_SITEMAP_ENTRIES.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>`,
  "utf-8"
);
console.log("🗺️  Sitemap entries saved to NEW_SITEMAP_ENTRIES.xml");
console.log("\\n🎉 All done! Run 'npm run build' to verify compilation.\\n");
