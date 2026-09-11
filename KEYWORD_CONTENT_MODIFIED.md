# Keyword Content — MODIFIED / STRENGTHENED

Source of truth: `SEARCHED_KEYWORDS_BY_METAL.txt` (182 target keywords)
Git commit: `b504c19` on `main` (pushed to origin)

This file lists pages whose content was **modified** to strengthen coverage of the
182 keywords (headings, intros, body, FAQs, meta, internal links) — added
naturally, no keyword stuffing. Result: exact-phrase coverage went from 64% to
182/182 (100%).

---

## Owner pages strengthened with keyword content

| Page (route) | Keyword phrasing added |
|---|---|
| `ss-304-316l-pipe-supplier-india.tsx` | 304/316 stainless steel pipe (supplier), 304L/316L stainless steel, stainless steel 304/316 |
| `ss-sheet-supplier-vadodara.tsx` | SS 304 plate, SS 316 plate, 304/316 stainless steel plate, stainless steel plate; new plate section + FAQ + meta |
| `ss-seamless-pipe-supplier-india.tsx` | stainless steel pipe |
| `ss-321-pipe-supplier-india.tsx` | SS 321 plate |
| `ss-410-pipe-supplier-india.tsx` | SS 410 plate |
| `ss-904l-pipe-supplier-india.tsx` | SS 904L plate |
| `ss-310s-plate-supplier-india.tsx` | SS 310 plate |
| `ss-430-sheet-supplier-india.tsx` | SS 430 plate |
| `stainless-steel-supplier-vadodara.tsx` | repointed link (Gujarat -> SS seamless) |
| `alloy-steel-pipe-supplier-india.tsx` | chrome moly steel pipe, chrome moly pipe supplier, alloy steel seamless pipe supplier; fixed to list only P11/P22/P91 |
| `p11-alloy-steel-pipe-supplier.tsx` | removed dead P5 link, repointed related links |
| `p22-alloy-steel-pipe-supplier.tsx` | removed dead P92 link, repointed related links |
| `a106-gr-b-seamless-pipe-india.tsx` | astm a106 pipe, a106 pipe supplier, a106 seamless pipe supplier |
| `carbon-steel-sa516-plate-stockist-india.tsx` | sa516 grade 70 plate (supplier), a516 steel, a516 steel plate |
| `api-5l-line-pipe-supplier-india.tsx` | api 5l pipe supplier |
| `a53-erw-pipe-supplier-india.tsx` | mild steel pipe |
| `astm-a36-steel-plate-supplier-india.tsx` | a36 steel supplier, astm a36 steel supplier |
| `duplex-steel-supplier-vadodara.tsx` | duplex 2205 supplier, 2205 stainless steel, 2507 stainless steel |
| `super-duplex-2507-pipe-supplier.tsx` | super duplex pipe, super duplex pipe supplier, super duplex 2507 supplier |
| `inconel-pipe-supplier-india.tsx` | inconel supplier, inconel seamless pipe, inconel metal |
| `inconel-600-pipe-supplier-india.tsx` | inconel 600 supplier |
| `inconel-718-supplier-india.tsx` | inconel 718 pipe, inconel 718 pipe supplier |
| `incoloy-800-pipe-supplier-india.tsx` | incoloy 800 supplier |
| `incoloy-825-pipe-supplier-india.tsx` | incoloy 825 supplier |
| `hastelloy-pipe-supplier-india.tsx` | hastelloy supplier, hastelloy metal; trimmed B-2/B-3 mention to C-276/C-22 |
| `hastelloy-c22-pipe-supplier-india.tsx` | hastelloy c22 supplier |
| `monel-400-pipe-supplier-india.tsx` | monel supplier, monel 400 supplier, monel seamless pipe |
| `monel-k500-supplier-india.tsx` | monel k500 pipe, monel k500 pipe supplier |
| `titanium-grade-2-pipe-india.tsx` | titanium grade 2 supplier |
| `titanium-grade-5-pipe-india.tsx` | Ti-6Al-4V supplier, Ti 6Al 4V (spaced variant) |
| `titanium-bar-supplier-india.tsx` | titanium grade 2/5 bar(s) supplier, titanium grade 5 supplier |
| `ms-beam-ismb-supplier-india.tsx` | ms beam supplier |
| `products.tsx` | mild steel supplier, mild steel products (MS commercial hub) |

---

## Structural / infrastructure files modified (no new keywords, cleanup only)

| File | Change |
|---|---|
| `src/components/Layout.tsx` | Removed "Trading" nav link; repointed footer "Stainless Steel" link |
| `src/components/RelatedPages.tsx` | Removed deleted pages from the internal-link registry |
| `src/components/AllPagesLinks.tsx` | Removed deleted pages from homepage/sitemap link cards |
| `src/routes/index.tsx` | Removed metal-trading / Gujarat links; fixed misleading "500+ pages" copy |
| `src/routes/sitemap.tsx` | Fixed meta + copy to describe actual product/supplier pages |
| `app.config.ts` | Trimmed prerender routes (removed 6, added about/products/reviews) |
| `public/sitemap-index.xml` | Regenerated (48 URLs) |
| `public/sitemap-pages.xml` | Regenerated |
| `public/sitemap-products.xml` | Regenerated |
| `public/sitemap-locations.xml` | Regenerated |

---

## Verification

- Exact-phrase keyword coverage: **182 / 182 (100%)**
- Build: 48 routes prerendered, **0 dead links**
- Sitemap checks: all pass (48 declared URLs = 48 built pages)
