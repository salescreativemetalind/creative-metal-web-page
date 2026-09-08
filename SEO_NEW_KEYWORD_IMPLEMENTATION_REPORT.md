# SEO New Keyword Implementation Report — Batch 2 (New Pages)

**Site:** https://www.creativemetalind.com
**Project:** `creative-metal-industries` (SolidStart / SolidJS + Vinxi)
**Pass:** Batch 2 — create 3 new product/supplier landing pages filling the 3 confirmed NEEDS-PAGE keyword gaps (20 keywords).
**Sources of truth:** `SEARCHED_KEYWORDS_BY_METAL.txt`, `NEW_KEYWORD_URL_MAP.md`, `NEW_182_KEYWORD_COVERAGE_REPORT.md`.
**Mode:** Create-only + small internal-link additions. Non-destructive.

---

## 1. Files created (3 routes)

| File | URL |
|---|---|
| `src/routes/astm-a36-steel-plate-supplier-india.tsx` | `/astm-a36-steel-plate-supplier-india` |
| `src/routes/titanium-bar-supplier-india.tsx` | `/titanium-bar-supplier-india` |
| `src/routes/carbon-steel-pipe-supplier-india.tsx` | `/carbon-steel-pipe-supplier-india` |

## 2. Files edited (internal linking + registry + tracking)

| File | Change |
|---|---|
| `src/components/RelatedPages.tsx` | +3 registry entries: CARBON_STEEL_PAGES → "Carbon Steel Pipe Supplier", "ASTM A36 Steel Plate"; EXOTIC_ALLOY_PAGES → "Titanium Bar Supplier". No redesign. |
| `src/routes/carbon-steel-sa516-plate-stockist-india.tsx` | +1 in-body contextual link + related-grid entry to `/astm-a36-steel-plate-supplier-india` (structural, non-PV). |
| `src/routes/titanium-pipe-supplier-india.tsx` | +1 in-body contextual link (hero) + related-grid entry to `/titanium-bar-supplier-india`. |
| `src/routes/a106-gr-b-seamless-pipe-india.tsx` | +1 related-grid entry to `/carbon-steel-pipe-supplier-india` (generic hub). |
| `SEO_KEYWORD_MIGRATION_CHANGELOG.md` | Appended "BATCH 2 — new pages" section. |
| `NEW_182_KEYWORD_COVERAGE_REPORT.md` | Moved 20 NEEDS-PAGE keywords → COMPLETE/PARTIAL; re-tallied. |
| `SEO_NEW_KEYWORD_IMPLEMENTATION_REPORT.md` | This report (created). |

## 3. Per-new-page detail

### /astm-a36-steel-plate-supplier-india
- **Title:** `ASTM A36 Steel Plate Supplier India | A36 Plate | CMI`
- **H1:** `ASTM A36 Steel Plate Supplier in India`
- **Canonical:** self-referential absolute URL.
- **Primary cluster (9 kw):** a36 steel, a36 steel supplier, a36 steel plate, a36 steel plate supplier, a36 plate, astm a36 steel, astm a36 steel supplier, astm a36 steel plate, astm a36 steel plate supplier.
- **Truthful positioning:** A36 = structural carbon steel (~250 MPa yield, ~400–550 MPa tensile, C≤0.26%), NOT a pressure-vessel grade. Explicitly distinguished from SA 516 (PV) with a link. Equivalents noted (IS 2062 E250, S275JR, SS400).

### /titanium-bar-supplier-india
- **Title:** `Titanium Bar Supplier India | Grade 2 & Grade 5 | CMI`
- **H1:** `Titanium Bar Supplier in India — Grade 2 & Grade 5`
- **Canonical:** self-referential absolute URL.
- **Primary cluster (9 kw):** titanium bar, titanium bars, titanium bar supplier, titanium grade 2 bar, titanium grade 2 bars, titanium grade 2 bar supplier, titanium grade 5 bar, titanium grade 5 bars, titanium grade 5 bar supplier.
- **Truthful positioning:** ASTM B348; Grade 2 = CP titanium (corrosion), Grade 5 = Ti-6Al-4V (strength); round/square/hex bar. Links to titanium pipe & grade pages.

### /carbon-steel-pipe-supplier-india
- **Title:** `Carbon Steel Pipe Supplier India | Seamless & ERW | CMI`
- **H1:** `Carbon Steel Pipe Supplier in India — Seamless & ERW`
- **Canonical:** self-referential absolute URL.
- **Primary cluster (3 kw):** carbon steel pipe, carbon steel pipe supplier, seamless pipe supplier (GENERIC intent only).
- **Truthful positioning:** generic hub that routes grade-specific intent to owners — A106 → `/a106-gr-b-seamless-pipe-india`, ERW → `/a53-erw-pipe-supplier-india`, API 5L → `/api-5l-line-pipe-supplier-india`, plate → `/carbon-steel-sa516-plate-stockist-india`. Does NOT out-target their exact grade keywords.

## 4. Internal-linking changes (in + out)

**Outbound (from each new page):**
- A36 → SA 516 plate, MS plate, carbon steel pipe hub, NACE HIC plate, MS beam + `<RelatedPages>`.
- Titanium bar → titanium pipe, Ti Gr2 pipe, Ti Gr5 pipe, SS round bar, Nickel 200 + `<RelatedPages>`.
- Carbon steel pipe hub → A106, A53 ERW, API 5L, SA 516 plate, CS pipe & fittings (table rows + body + grid) + `<RelatedPages>`.

**Inbound (into each new page):**
- A36 ← `/carbon-steel-sa516-plate-stockist-india` (contextual sentence + related grid) + RelatedPages registry.
- Titanium bar ← `/titanium-pipe-supplier-india` (hero contextual link + related grid) + RelatedPages registry.
- Carbon steel pipe hub ← `/a106-gr-b-seamless-pipe-india` (related grid) + RelatedPages registry.

All new pages also receive automatic cross-category links via the `RelatedPages` component rendered on every route (no orphans).

## 5. Keywords now covered

All 20 formerly NEEDS-PAGE keywords now have an owning page:
- A36 cluster (9) → `/astm-a36-steel-plate-supplier-india` — PARTIAL (page live + optimized; blog support thin).
- Titanium bar cluster (9) → `/titanium-bar-supplier-india` — PARTIAL (page live + optimized; blog support thin).
- Generic carbon steel pipe / seamless (3) → `/carbon-steel-pipe-supplier-india` — COMPLETE (page live + blog support + owner links).

## 6. Build result

- `npm run build` (workspace root) — **SUCCEEDED**. 600 routes prerendered (up from 597). Nitro/Vercel build OK. Exit 0.

## 7. Sitemap result

- `npm run sitemap --prefix creative-metal-industries` — **OK**. Total 597 → **600 URLs**. `sitemap-products.xml`: **89 URLs** (the 3 new URLs landed in the products child sitemap). robots.txt still points at `https://www.creativemetalind.com/sitemap-index.xml` (unchanged).
- `npm run check:sitemap --prefix creative-metal-industries` — **ALL CHECKS PASSED**. declared 600 = built 600; every sitemap URL has a built page; every indexable page is in a sitemap; no noindex page listed.
- Confirmed present in `sitemap-products.xml`: `/astm-a36-steel-plate-supplier-india`, `/carbon-steel-pipe-supplier-india`, `/titanium-bar-supplier-india`.

## 8. Verification / self-review

- Exactly one `<h1>` per new page (verified 3/3).
- Titles and meta descriptions unique vs all other pages; Title ≤ ~60 chars, description ≤ ~160 chars.
- Self-referential canonical on each page.
- JSON-LD: all rendered `ld+json` blocks parse per page (WebSite + Organization site-wide, plus LocalBusiness + BreadcrumbList @graph, plus FAQPage). LocalBusiness copied exactly (386/B GIDC Estate, Makarpura, Vadodara 390010, IN; +919998280619).
- `<meta name="keywords">` sitewide count = **0** (re-verified).
- No new colors/fonts/layout/components — inline-style tokens copied 1:1 from inconel/a106/sa516.
- No fabricated company facts (stock/price/cert) beyond the site-wide claim style (MTC EN 10204 3.1, IBR/NACE where applicable, TPI DNV/TUV/SGS/BV/LRIS, since 2012, Vadodara GIDC Makarpura). Where uncertain, phrased generically ("available on request").
- Temp verification files cleaned up.

## 9. Remaining work (optional)

- Add dedicated informational blog support for A36 and titanium bar to move those clusters from PARTIAL → COMPLETE.
- Add further contextual inbound links from related guides/pages over time.
