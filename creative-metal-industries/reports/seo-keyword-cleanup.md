# SEO Keyword Cleanup — Creative Metal Industries

**Audit date:** 2026-10-16
**Website:** https://www.creativemetalind.com/
**Scope:** Existing public site source, shared navigation, dynamic content, metadata and structured data. No URLs were changed, no pages were deleted, and no `noindex` or robots rules were added.

## Executive summary

The site has 51 sitemap URLs and product content distributed across route components, shared components, a homepage product catalogue, and dynamic location/product content. There are no blog source files in the current project. Historical `/blog/*` paths are handled by existing redirects; redirect rules were not changed.

The clearest out-of-scope promotional material in shared and homepage content was Incoloy, aluminium, copper/brass/bronze, Hardox/wear plate and a TMT/reinforcement marketing cluster. I removed those promotions or cross-links from the shared product hub and relevant site copy. I retained technical composition references to copper or aluminium when they describe an in-scope alloy (for example Monel, Corten or Ti-6Al-4V), and retained the TMT size/weight chart on `/products` as technical information for a carbon-steel product. Its Open Graph/Twitter descriptions no longer promote TMT as a target.

Two dedicated Incoloy pages still contain Incoloy-targeted content. They remain unchanged because there is no approved company scope decision or approved replacement destination, and the instructions prohibit deleting URLs or applying noindex without documented approval. The report recommends a business decision before further action.

## Target keywords to keep

Keep natural, buyer-relevant queries around the eight approved material families, product forms and verified grades/specifications:

- **Carbon steel:** carbon steel pipe supplier; CS seamless/welded pipe; ASTM A106/A53; API 5L; SA 516; ASTM A36; IS 2062/MS steel where relevant. Keep pipe and flange intent first, then plates, fittings and other genuinely supplied steel products.
- **Alloy steel:** alloy steel pipe supplier; ASTM A335 P5, P9, P11, P12, P22, P91 and P92; relevant P-grade products and specifications.
- **Stainless steel:** stainless steel/SS pipe supplier; seamless and welded pipe; SS 304/304L, 316/316L, 321, 310/310S, 347, 410, 430 and 904L; relevant tubes, sheets, plates, fittings and flanges.
- **Duplex steel:** Duplex/Super Duplex, 2205 (UNS S31803/S32205), 2507 (UNS S32750) and other grades already represented in product information; pipes, fittings, flanges and plates.
- **Inconel:** Inconel 600, 625 and 718, with associated UNS/specification terms where relevant.
- **Hastelloy:** Hastelloy C-22 and C-276 and related supported product terms.
- **Monel:** Monel 400 and K-500, including applicable product forms and specifications.
- **Titanium:** Titanium Grades 1, 2 and 5 (Ti-6Al-4V) and relevant product specifications.
- **Product forms across these materials:** pipes (seamless/welded), flanges, pipe fittings, tubes, sheets, plates and bars where the existing product offering supports them.

This is a taxonomy for focused content, not a claim that every listed grade, size, test, certificate or quantity is currently stocked. Confirm current capability from approved company records before making stock or certification promises.

## Keywords/topics to stop targeting as separate product or supplier clusters

- **Incoloy 800/800H/800HT/825** and **Alloy 20** (nickel-iron alloys outside the approved target families).
- **Aluminium/aluminum alloys** as products.
- **Copper, brass, bronze and cupro-nickel/CuNi** as product families.
- **TMT/CRS reinforcement bars and Fe 500/500D supplier** intent as a separate construction cluster. TMT is steel, but these queries are construction/rebar intent rather than the requested industrial pipe/flange focus. Keep the useful TMT chart in `/products`; do not promote it as a primary supplier target.
- **Hardox/Abrex wear plate** as a separate branded wear-material cluster. This promotion was removed from the homepage product list; no dedicated live route source was found in the current route tree.

References to copper/aluminium as alloying elements or in technical comparisons for in-scope products are not treated as targeting those metals and were retained where technically relevant.

## Search Console evidence and limitations

Available workbook: `https___www.creativemetalind.com_-Performance-on-Search-2026-09-21.xlsx`. Its Web search window is **2026-06-19 through 2026-09-18 (92 days)**.

The `Queries` and `Pages` sheets are separate aggregates; they do not provide query-by-page rows. Therefore, the query impressions below cannot be attributed to a particular URL, and page impressions cannot be attributed to a particular query.

- The query aggregate contains **10 TMT-related query rows, 29 impressions and 0 clicks** (examples: “tmt bars manufacturers in gujarat” — 8 impressions; “tmt bar manufacturers in gujarat” — 7; “tmt manufacturers in gujarat” — 5). These are sitewide query totals, not page-specific evidence.
- The separate Pages aggregate records `/tmt-bars-supplier-gujarat` at **97 impressions, 1 click, 1.03% CTR, average position 41.24**; the existing Vercel configuration redirects this URL to `/ms-beam-ismb-supplier-india`. The export does not establish that the TMT queries generated these page metrics. The redirect destination merits a manual relevance review, but it was not changed in this task.
- The Pages aggregate records `/corten-steel-plate-supplier-india` at **29 impressions, 0 clicks, average position 71.38**. Corten is weathering/low-alloy steel, so the route was retained under the steel families; the export does not show which queries produced its impressions.
- The Pages aggregate records `/incoloy-800-pipe-supplier-india` at **7 impressions, 0 clicks, average position 63.86**, and `/incoloy-800h-pipe-supplier` at **1 impression, 0 clicks, average position 37**. These are page totals only. The query aggregate did not provide a reliable Incoloy query-to-page association.
- No query/page Search Console evidence was found in the export for aluminium, copper/brass/bronze product targets.

No search volumes, rankings, competitor metrics, or causal conclusions are inferred.

## Affected pages/components and implemented changes

| URL/scope | Before | After | Reason |
|---|---|---|---|
| `/` | Homepage product cards, ticker, specialty-material banner, FAQ, About copy, contact material selector and product links promoted Incoloy, aluminium, copper/brass/bronze, Hardox/wear plate and TMT | Removed out-of-scope product promotion and links; the specialty list now names Duplex, Inconel, Monel, Hastelloy and titanium; FAQ describes the approved specialty families; contact choices align with the approved material scope. Existing in-scope pipes, steel grades, fittings and flanges remain. | Make the homepage the broad company/material hub without advertising unrelated metal clusters. |
| `/` JSON-LD entity metadata | `knowsAbout` included TMT Bars | Removed TMT Bars; the other material/product topics remain. FAQ JSON-LD continues to be generated from the visible FAQ data. | Align structured content with visible in-scope positioning. |
| `/products` | OG and Twitter descriptions explicitly targeted TMT Bars / IS 1786 | Social descriptions now describe the steel-size/weight chart resource without a TMT target. The TMT chart itself remains available as technical data. | Avoid unnecessary social metadata targeting while preserving useful chart functionality. |
| `/about` | Company copy included Aluminium/Copper and a TMT project example | Company product-family copy now lists approved families and product forms; the TMT project example was removed. | Reduce unrelated material/product promotion. |
| `/sitemap` | Descriptions promoted Incoloy and generic “exotic alloy” wording | Meta/social/body copy now names the approved metal families. The sitemap remains accessible and URLs were not removed. | Keep the page description aligned with the requested scope. |
| Shared header/footer and product link sections (all pages) | Incoloy appeared in hub/footer/product link groups; a generic “Nickel Alloys” label obscured the allowed subset | Removed Incoloy links and updated labels to Inconel/Monel/Hastelloy or the approved specialty categories. | Reduce cross-site promotion and keyword dilution. |
| Shared related-product component (all pages) | Incoloy pages were included in cross-category related links and category detection | Removed those links and the Incoloy category check. | Prevent repeated sitewide internal linking to out-of-scope targets. |
| `/duplex-steel-supplier-vadodara`, `/hastelloy-c22-pipe-supplier-india`, `/hastelloy-pipe-supplier-india`, `/inconel-600-pipe-supplier-india`, `/inconel-718-supplier-india`, `/monel-k500-supplier-india`, `/titanium-pipe-supplier-india` | Related-product blocks linked to Incoloy pages | Removed only the out-of-scope Incoloy links; retained relevant material links and page content. | Keep internal links within the approved families. |
| Dynamic location content (routes using `LocationContent`) | Generic “materials stocked” list named Incoloy, copper-nickel and TMT; Jamnagar locality copy promoted brass components | Revised the shared list to the approved material families and steel product context; removed brass-cluster targeting from the Jamnagar locality text. | Avoid repeating unrelated topics across generated location content. |
| Product modal content | A hidden TMT/CRS guide promoted TMT supplier and construction queries | Removed the standalone TMT marketing guide; other product descriptions remain. | Remove a non-priority construction-oriented keyword block. |
| `/ms-angle-channel-supplier-vadodara` | TMT grades, brands, stock, prices and FAQs were promoted alongside the MS angle/channel intent | Removed TMT-specific supplier promotion, FAQs and schema text; metadata now describes the MS sections page. Kept the existing Vadodara MS angle/channel URL, contact actions and remaining steel-section content. | Keep this route focused on its structural-section purpose rather than rebar search intent. |
| `/ms-plate-supplier-india`, `/ms-flat-bar-supplier-india`, `/ms-channel-ismc-supplier-india`, `/ms-beam-ismb-supplier-india` | Generic cross-sell paragraph promoted TMT bars and broad one-stop sourcing | Replaced with concise order-specific references to related SS plates/sheets, fittings, flanges and mild-steel sections. | Remove unrelated keyword filler while preserving useful cross-category context. |

### Dedicated pages retained pending approval

- `/incoloy-800-pipe-supplier-india`
- `/incoloy-825-pipe-supplier-india`

These existing routes still contain Incoloy-focused titles, descriptions, headings and body content. They were **not rewritten, deleted, redirected, canonicalized elsewhere, or noindexed** because the project has no approved company decision confirming whether these products remain in scope, and no safe equivalent destination exists among the eight approved families. The previous Search Console report has page totals for these URLs but no associated query rows. A business owner must decide whether to retire them, keep them for a different approved scope, or authorize a truthful consolidation plan. No URL action is recommended without that decision.

### Existing pages/topics reviewed and retained

- Carbon, alloy, stainless, Duplex/Super Duplex, Inconel, Hastelloy, Monel and titanium product routes remain in place.
- Corten remains because it is a weathering/low-alloy steel product; its page and URL were not changed.
- The TMT size/weight chart remains on `/products` as technical information. Its OG/Twitter descriptions no longer explicitly target TMT.
- Technical references to copper and aluminium in Monel, Corten, titanium alloy or other in-scope material composition were retained; they describe chemistry, not a product target.
- No current blog source posts were found in the project. Existing `/blog/*` redirect rules and the sitemap were not changed.

## Relevant files changed

- `src/routes/index.tsx`
- `src/routes/about.tsx`
- `src/routes/products.tsx`
- `src/routes/sitemap.tsx`
- `src/routes/ms-angle-channel-supplier-vadodara.tsx`
- `src/routes/ms-plate-supplier-india.tsx`
- `src/routes/ms-flat-bar-supplier-india.tsx`
- `src/routes/ms-channel-ismc-supplier-india.tsx`
- `src/routes/ms-beam-ismb-supplier-india.tsx`
- `src/components/AllPagesLinks.tsx`
- `src/components/Layout.tsx`
- `src/components/LocationContent.tsx`
- `src/components/RelatedPages.tsx`
- `src/product-content.ts`
- `src/app.tsx`
- Related-product link-only edits in `src/routes/duplex-steel-supplier-vadodara.tsx`, `src/routes/hastelloy-c22-pipe-supplier-india.tsx`, `src/routes/hastelloy-pipe-supplier-india.tsx`, `src/routes/inconel-600-pipe-supplier-india.tsx`, `src/routes/inconel-718-supplier-india.tsx`, `src/routes/monel-k500-supplier-india.tsx`, and `src/routes/titanium-pipe-supplier-india.tsx`.
- Created this report: `reports/seo-keyword-cleanup.md`.

Unrelated pre-existing work was preserved, including modified `../Scalenut.pdf`, untracked `website-pages-keywords.pdf`, `reports/page-1-production-verification.md`, and `reports/stainless-steel-pipe-manufacturer-seo.md`.

## Validation and SEO checks

- Final verification on 2026-10-16: `npm run build` passed and prerendered 51 routes. The initial verification attempt exposed a malformed object opener in the edited homepage FAQ; it was corrected to the intended `q` property, with no content or design change, and the build then passed.
- Final `npm run check:sitemap`: passed. The checker found 51 sitemap URLs and 51 built pages; every sitemap URL had a built page, every indexable built page was in the sitemap, and no `noindex` page appeared in the sitemap. The earlier failed sitemap run occurred after the failed build left only 50 built pages; it passed after the corrected successful build.
- Final `git diff --check`: passed.
- Editor diagnostics for `src/routes/index.tsx`: no errors or warnings. Previous diagnostics for the edited `/ms-angle-channel-supplier-vadodara` route were also clean.
- The source edits and this report remain local; no commit, push or deployment was performed.
- URLs, canonical tags, robots.txt and sitemap entries were not intentionally changed. Existing self-canonical/indexability configuration was preserved in edited routes.
- No commit, push or deployment was performed. Live content and current Google rankings/indexing were not verified.

## Recommendations / pending approval

1. Confirm from current approved company records which grades/forms are genuinely supplied; do not rely on old page copy as proof of stock, mill authorization, certificates or service capability.
2. Decide the business disposition of the two Incoloy routes before changing their page content or URL handling.
3. Review the legacy `/tmt-bars-supplier-gujarat` redirect target. Historical page-level GSC totals do not establish query intent; retain the technical chart unless product scope changes.
4. Review any remaining Corten/wear-product scope with the company. Corten was retained as steel, not as a separate unrelated metal family.
5. After authorized publication, use Search Console query-by-page data to assess whether the cleanup changed irrelevant impressions. No ranking or indexing improvement is claimed here.
