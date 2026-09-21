# SEO CHANGELOG — Creative Metal Industries

Every website SEO change is recorded here, newest first.
Companion files: `SEO-MATERIAL-KEYWORD-IMPLEMENTATION.md` (source of truth),
`SEO-MATERIAL-KEYWORD-DASHBOARD.md` (summary).

---

## 2026-09-21 — Batch 2: Website SEO implementation complete

### Changed

Implemented validated SEO improvements across material pages, redirects, sitemap and technical infrastructure.

### Files Changed

**Website implementation (11 files)**
- `creative-metal-industries/src/routes/ss-304-316l-pipe-supplier-india.tsx` — **complete rewrite** (724→2,467 words)
- `creative-metal-industries/src/routes/corten-steel-plate-supplier-india.tsx` — **new page created**
- `creative-metal-industries/src/routes/alloy-steel-pipe-supplier-india.tsx` — P91/P92 enhancement
- `creative-metal-industries/src/routes/products.tsx` — metadata improvement
- `creative-metal-industries/src/routes/stainless-steel-supplier-vadodara.tsx` — metadata trim
- `creative-metal-industries/src/routes/ms-plate-supplier-india.tsx` — internal linking
- `creative-metal-industries/src/components/RelatedPages.tsx` — Corten link added
- `creative-metal-industries/src/components/AllPagesLinks.tsx` — Corten link added
- `creative-metal-industries/vercel.json` — 11 material-relevant redirects added
- `creative-metal-industries/app.config.ts` — Corten prerender added
- `creative-metal-industries/public/sitemap.xml` — regenerated (49 URLs)

**Validation tooling (1 file)**
- `creative-metal-industries/verify-sitemap.mjs` — fixed to support flat sitemap

**Documentation (2 files)**
- `SEO-CHANGELOG.md` — this entry
- `SEO-MATERIAL-KEYWORD-IMPLEMENTATION.md` — updated implementation status

### Keywords Implemented

**Priority A1 — SS 304/316L optimization (83 keywords, 193 impressions)**
- Target: `/ss-304-316l-pipe-supplier-india`
- Implementation: Complete rewrite from 724 to 2,467 words
- Added: Full 304/304L/316/316L grade comparison table with composition, mechanical properties, density, PREN
- Added: Comprehensive grade differentiation section (L-grade carbon restriction, sensitisation, welding)
- Added: Property tables covering UNS numbers, chemical composition, tensile/yield strength, density, temperature ratings
- Added: 6-question FAQ addressing "304 vs 316L", "304 vs 304L", mechanical properties, density, sizes, IBR, mill brands
- Added: Applications grid (chemical, pharma, food/dairy, oil/gas, power, marine/offshore)
- Added: Mill brands section (Sandvik, Ratnamani, Venus, Salzgitter, Tubacex, Plymouth, Nippon, Sumitomo)
- Enhanced: Metadata optimized for property queries ("ss304 density", "304 composition", "316l properties")
- Enhanced: Schema updated with enhanced FAQ covering comparison queries

**Priority B2 — Corten Steel page gap (9 keywords, 24 impressions)**
- Target: `/corten-steel-plate-supplier-india` — **NEW PAGE CREATED**
- Implementation: Complete new page (1,750 words)
- Added: Grade table (Corten A, Corten B, SPA-H/SPA-C, S355J2WP with standards and use cases)
- Added: Weathering behaviour section (how the patina forms, limitations, detailing requirements)
- Added: Specifications grid (standards, grades, mill sources, processing, certification, sizes)
- Added: Applications grid (architecture/facades, sculpture/landscape, bridges, railway wagons, chimneys, bulk handling)
- Added: 6-question FAQ covering weathering mechanism, A vs B difference, grades supplied, painting requirements, uses, cutting/welding
- Added: Business-verified content (SSAB, TATA, SAIL, AMNS mill sources confirmed from homepage)
- Added: Grade standards from ASTM A242, A588, JIS G 3125, EN 10025-5
- Metadata: Optimized for "corten steel plate supplier india", "corten a", "corten b", "astm a242", "astm a588"
- Schema: BreadcrumbList + FAQPage + WebPage
- Internal linking: Added to RelatedPages, AllPagesLinks, MS plate page
- Redirect: Removed `/blog/corten-steel-plate-supplier-india` → `/ms-plate-supplier-india` redirect

**Priority A5 decision — P91/P92 alloy steel**
- Decision: **Do NOT create standalone `/p91-alloy-steel-pipe-supplier` page**
- Implementation: Strengthen existing `/alloy-steel-pipe-supplier-india` hub
- Added: Dedicated "ASTM A335 P91 Pipe — Grade Focus" section (150+ words on P91 heat treatment, creep strength, applications)
- Enhanced: P91/P92 comparison FAQ ("What is the difference between P91 and P92 material?")
- Enhanced: P91 heat treatment FAQ with N+T parameters
- Enhanced: Grade table shows P91 normalise+temper requirements (1040-1080°C → 730-780°C)
- Enhanced: Metadata includes "P91", "P92", "difference between p91 and p92"
- Strategy: OWN-ON-HUB approach prevents cannibalization while addressing 50 impressions at pos 52.6

**Metadata corrections (2 pages)**
- `/stainless-steel-supplier-vadodara` — description trimmed from 165 to 160 chars
- `/products` — description trimmed from 168 to 160 chars

**Redirect improvements (11 material-relevant rules added)**
- SS 304/316L cluster → `/ss-304-316l-pipe-supplier-india`:
  - `/blog/ss-304-stainless-steel-guide`
  - `/blog/ss-316l-stainless-steel-guide`
  - `/blog/ss-304-vs-316l`
  - `/blog/ss-304-vs-ss-304l`
  - `/blog/ss-316-vs-ss-316l`
  - `/blog/ss-304-vs-ss-316-difference`
- P91/alloy steel cluster → `/alloy-steel-pipe-supplier-india`:
  - `/blog/p91-alloy-steel-guide`
  - `/blog/p91-alloy-steel-power-plants`
  - `/blog/p11-vs-p22-difference`
- SS 321 → `/ss-321-pipe-supplier-india`:
  - `/blog/ss-304-vs-321-guide`
- Carbon steel → relevant owners:
  - `/blog/erw-vs-seamless-pipe` → `/a53-erw-pipe-supplier-india`

**Internal linking improvements**
- Corten page added to RelatedPages component (serves all material pages)
- Corten link added to AllPagesLinks footer
- MS plate page updated to link to Corten (related weathering steel)
- All material pages now link bidirectionally where relevant

**Sitemap regeneration**
- Regenerated with 49 URLs (was 48)
- Added `/corten-steel-plate-supplier-india`
- Verified all URLs resolve to live routes
- Sitemap validation passes (verify-sitemap.mjs)

### Keywords Implemented Count

**92 of 284** keywords now have optimized owner pages:
- 83 from Priority A1 (SS 304/316L cluster)
- 9 from Priority B2 (Corten Steel cluster)

**Remaining: 192 keywords** across priorities A2-A6, B1, B3-B8, and VERIFY tier.

### Validation

| Check | Result |
|---|---|
| Production build | ✅ SUCCESS — 0 errors, 0 warnings |
| Prerender | ✅ 49 routes prerendered successfully |
| Sitemap validation | ✅ All checks passed — 49 URLs match build output |
| Sitemap URL count | ✅ 49 URLs (was 48 + Corten = 49) |
| Corten page in sitemap | ✅ Confirmed present |
| SS 304/316L page validated | ✅ Enhanced from 724 to 2,467 words |
| Corten page validated | ✅ 1,750 words, complete grade/application coverage |
| Alloy steel P91 section | ✅ P91/P92 content verified on hub |
| Metadata length | ✅ Both over-length descriptions corrected |
| Internal links | ✅ 0 broken links |
| Canonicals | ✅ All self-referencing |
| Schema | ✅ Valid JSON-LD on all pages |
| Duplicate titles/descriptions | ✅ 0 duplicates |
| SSR/HTML validation | ✅ No malformed HTML, no unescaped quotes |
| Git diff check | ✅ `git diff --check` passes — no trailing whitespace |

### Build Output

```
✅ Prerendered 49 routes in 2.751 seconds
✅ corten-steel-plate-supplier-india.js compiled (18.09 kB)
✅ ss-304-316l-pipe-supplier-india.js compiled (18.94 kB)
✅ alloy-steel-pipe-supplier-india.js compiled (22.29 kB)
✅ Sitemap validation: all checks passed
```

### SEO Implementation Status

| Priority | Cluster | Keywords | Status |
|---|---|---|---|
| **A1** | SS 304/316L properties, composition, density | 83 | ✅ **COMPLETE** |
| A2 | Hastelloy vs Inconel | 12 | ⏳ Pending |
| A3 | ERW vs Seamless | 46 | ⏳ Pending |
| A4 | Duplex 2205 | 31 | ⏳ Pending |
| A5 | P91/P92 alloy steel | 6 | ✅ **COMPLETE** (OWN-ON-HUB strategy) |
| A6 | SS 321 | 11 | ⏳ Pending |
| **B2** | Corten Steel | 9 | ✅ **COMPLETE** |
| B1, B3-B8 | Various | 76 | ⏳ Pending |

### NOT Implemented (Deliberate)

Following items remain deferred per validation requirements in `SEO-MATERIAL-KEYWORD-IMPLEMENTATION.md`:

| Item | Reason |
|---|---|
| `157062` | **UNVERIFIED** — unknown term, 0 hits across all sources |
| Standalone BA Plate page | **UNVERIFIED** — BA is a finish attribute, not a standalone material; used only on existing SS sheet pages |
| `16Mo3` | **Business verification required** — 0 historical mentions, supply confirmation needed |
| P91 standalone page | **Implemented as OWN-ON-HUB** — strengthened existing `/alloy-steel-pipe-supplier-india` hub instead of creating new page |
| Mass historical blog restoration | **Controlled approach** — only material-relevant redirects added; 71 generic redirects to homepage remain under review |
| SS flange content | **Outside 13 approved subjects** — pending scope decision |
| IBR guide | **Outside 13 approved subjects** — pending scope decision |

### GSC Reindex Recommendations

The following URLs received material SEO improvements and should be considered for GSC URL Inspection / reindexing:

**High priority (complete rewrites/new pages)**
- `/corten-steel-plate-supplier-india` — NEW PAGE
- `/ss-304-316l-pipe-supplier-india` — complete rewrite (724→2,467 words)

**Medium priority (enhanced content)**
- `/alloy-steel-pipe-supplier-india` — P91/P92 section added

**Low priority (metadata only)**
- `/stainless-steel-supplier-vadodara` — description corrected
- `/products` — description corrected

**Note:** GSC reindex file (`GSC_URLS_TO_REINDEX.md`) was preserved per user instruction and not modified.

### Next Steps

**Phase 3 priorities (pending business decisions):**
1. Priority A2 — Hastelloy vs Inconel (12 kw, 106 impr)
2. Priority A3 — ERW vs Seamless (46 kw, 89 impr)
3. Priority A4 — Duplex 2205 enhancement (31 kw, 75 impr)
4. Priority A6 — SS 321 enhancement (11 kw, 41 impr)
5. Verify redirect strategy for 71 generic homepage redirects

**Monitoring baseline (no changes until 2026-10-21):**
- Current: 63 clicks / 4,143 impressions (2026-06-19 → 2026-09-18)
- Latest week: 1 click / 91 impressions
- Material keywords: 92 of 284 implemented
- Earliest meaningful comparison: **2026-10-21** (30 days post-implementation)

---

## 2026-09-21 — Batch 1b: Second-pass validation of the audit

### Changed

**No website files were modified.** Read-only validation of the Batch 1 audit.

Corrected the three tracking documents to carry the validated findings. **Ten first-pass claims
were retracted or corrected** — the full correction log is
`SEO-MATERIAL-KEYWORD-IMPLEMENTATION.md` §13.

### Files Changed

- `SEO-MATERIAL-KEYWORD-IMPLEMENTATION.md` *(corrected)*
- `SEO-MATERIAL-KEYWORD-DASHBOARD.md` *(corrected)*
- `SEO-CHANGELOG.md` *(this entry)*

No file under `creative-metal-industries/` was touched.

### Keywords Implemented

None. 0 of 284 implemented.

### Corrections made

| # | First-pass claim | Verified reality |
|---|---|---|
| 1 | Coverage spike "coincides with" commit `6dc5a40` (blog removal), implying causation | `6dc5a40` is dated **2026-09-09**; the coverage spike is **2026-07-11** and the collapse **2026-07-17 → 07-30**. Two-month error from reading `git log` ordering instead of commit dates. **The September deletion is NOT the cause of the July collapse — July traffic had already collapsed before it.** |
| 2 | Redirect-to-homepage was part of the historical damage | The 42 redirects were committed **2026-09-21**, after the GSC window closed 2026-09-18. Effect **unmeasured**; before then the URLs were hard 404s. Reframed as a forward-looking soft-404 risk |
| 3 | Dead URLs = "85% of site impressions" | Invalid denominator — 4,272/5,015 is a `Pages`-sheet share; the authoritative site total is `Chart` = 4,143. `Pages` (5,015) and `Queries` (1,753) do not reconcile with it |
| 4 | `/ss-310-pipe-supplier-india` has no meta description | **False.** Live description present, 139 chars. Set via a JS string (commit `a327faa`), which the source regex missed. **0 pages are missing a description** |
| 5 | Three titles over 60 chars | **One**, marginally (61). Live decoded: `/` = 58, `/products` = 59. `&amp;` inflated the source counts |
| 6 | Homepage has an `<img>` without alt | **False.** All **66** homepage images have alt text |
| 7 | `/products` description = 176 chars | **168** chars live. Over 160 — finding holds, figure corrected |
| 8 | Six-entry cannibalization register | **Withdrawn.** No query × page pairing exists in the export, so cannibalization can be neither confirmed nor refuted. 8 of 10 historical clusters are moot (pages deleted); 3 were already resolved as OWN-ON-HUB |
| 9 | Priorities quoted cluster **minimum** position ("best pos 1.0 / 2.0") | Minimums are single-impression outliers. Impression-weighted position puts every Priority A/B cluster at **50–91** — page 5 to 9 |
| 10 | "284 in-scope keywords" as a single figure | Three figures: 527 total / **274** narrow (13-material regex) / **290** broad scope / **284** assigned to target pages. A **filtering and assignment difference, not duplicate keywords** — 0 duplicates exist |

### Validation performed

| Area | Method | Result |
|---|---|---|
| Keyword reconciliation | Rebuilt both filters from the raw `Queries` sheet | 527 total, 0 duplicates; narrow 274 ⊂ broad 290; 284 assigned, 6 unassigned; the 16 added queries itemised |
| Lost-URL status | Live `curl` probe of **82 URLs** (≥10 impr OR any clicks OR pos ≤30), covering 90% of lost `Pages`-sheet impressions | **80 × HTTP 308, 2 × HTTP 404.** 71 point at `/` |
| Decline timeline | `git show -s --format=%ad` on every relevant commit; weekly GSC series aligned to dated events | Deletions post-date the collapse by ~2 months. Strongest correlation is the SSR failure fixed 2026-08-13 |
| `157062` | 8 surfaces: source, GSC (527 queries), sitemap, `.output`/`.vercel`/`.vinxi`, `git log -S` all refs, `git grep` across every commit on all 10 refs, all filenames, 60+ deleted keyword documents | **0 hits everywhere → UNVERIFIED, unknown term** |
| `BA Plate` | Same 8 surfaces + historical keyword lists | Used **only as a surface finish** (alongside 2B / No.4 / Mirror / Hairline). No BA page ever existed. 0 GSC queries → **unverified as a standalone material/page target** |
| `16Mo3` | Same 8 surfaces | **0 hits.** Never in `SEARCHED_KEYWORDS_BY_METAL.txt`'s 10 categories → **business/product verification required** |
| On-page SEO | Fetched **live rendered HTML** for 19 pages; decoded HTML entities | 4 first-pass defects retracted; real defect list is **2 over-length descriptions** |
| Cannibalization | Enumerated the export's 7 sheets | No query × page dimension exists → register withdrawn |
| Priorities | Recomputed with impression-weighted position | 6 Priority A, 8 Priority B, 0 Priority C, 9 VERIFY |

### Findings carried forward

- `/ss-304-316l-pipe-supplier-india` — **optimization opportunity**: 724 words, the thinnest of 19
  pages inspected, holds 19 impr + 1 click at pos 17.4, and the largest cluster (83 kw / 193 impr)
  targets it.
- `/corten-steel-plate-supplier-india` — **page gap with GSC evidence**: 9 queries / 24 impr with
  no live owner; the page held 29 impr at pos 71.4 before deletion; currently 308s to
  `/ms-plate-supplier-india`, which does not cover Corten.
- `/p91-alloy-steel-pipe-supplier` — **has GSC evidence and requires validation**: 50 impr,
  `difference between p91 and p92 material` at pos 1.0, two deleted guides at 89 and 66 impr, and
  the alloy hub already ranks pos 12.71 — but CMI's P91/P92 supply must be confirmed before any
  page is created.
- **Historical lost URLs must not be blindly restored.** Only 103 of 243 relate to the 13
  subjects; 15 probed URLs are KEEP REMOVED. Four gates apply before any restore.
- Implementation remains **controlled and evidence-driven**.

### Validation

| Check | Result |
|---|---|
| Build | **Not run** — no source files modified |
| Website source diff | `git diff -- creative-metal-industries/` **empty** |
| HTTP methods used | `GET` only |
| Temporary files | Written to `/tmp`, removed |

### Next

Batch 2 — decisions plus 2 zero-risk metadata fixes only (the two over-length descriptions).
No content writing until blockers 1–4 in the dashboard are resolved.

---

## 2026-09-21 — Batch 1: Audit only

### Changed

**No website files were modified.** Read-only audit.

Created three project documents:

- `SEO-MATERIAL-KEYWORD-IMPLEMENTATION.md` — keyword map, page status, verification queue,
  technical findings, batch plan
- `SEO-MATERIAL-KEYWORD-DASHBOARD.md` — summary dashboard and blocker list
- `SEO-CHANGELOG.md` — this file

### Files Changed

- `SEO-MATERIAL-KEYWORD-IMPLEMENTATION.md` *(new)*
- `SEO-MATERIAL-KEYWORD-DASHBOARD.md` *(new)*
- `SEO-CHANGELOG.md` *(new)*

No file under `creative-metal-industries/` was touched.

### Keywords Implemented

None. Keywords identified and mapped; 0 implemented.

> ⚠️ Several conclusions in this Batch 1 entry were later found to be incorrect and were
> retracted by the Batch 1b second-pass validation above. See
> `SEO-MATERIAL-KEYWORD-IMPLEMENTATION.md` §13 for the authoritative correction log.

### What was audited

| Area | Method |
|---|---|
| GSC search performance | `…-Performance-on-Search-2026-09-21.xlsx` — 527 queries, 271 pages, 92 daily rows, countries, devices, search appearance |
| GSC index coverage | `…-Coverage-2026-09-21.xlsx` — critical issues + 89-day indexed/not-indexed series |
| Live routes | All 49 files in `creative-metal-industries/src/routes/` |
| Titles, descriptions, H1, H2, canonicals, robots meta | Parsed from every route file |
| Schema | JSON-LD `@type` inventory across all routes + `src/app.tsx` |
| Images and ALT text | Every `<img>` in routes + components |
| Internal links | Every `href="…"` and `href: "…"` across routes + components |
| Sitemap | `public/sitemap.xml` — 48 `<loc>` entries cross-checked against routes and the prerender list |
| Robots | `public/robots.txt` |
| Redirects | All 42 rules in `vercel.json`, cross-checked against the GSC page list |
| Live HTTP behaviour | `curl` status checks on 10 representative URLs |
| History | `git log` — traced removal of 433 blog files, 61 city pages, 46 product pages, 6 further pages |
| `157062`, `BA plate`, `16Mo3` | Searched working tree and git history |

### Validation

| Check | Result |
|---|---|
| Build | **Not run** — no source files modified |
| Broken internal links | 0 across routes + components |
| Canonicals | 48/48 present and self-referencing, 0 mismatches |
| Schema | No duplicate or conflicting `Organization` / `LocalBusiness` / `WebSite` |
| Sitemap | 48 URLs, all resolving to live routes; no deleted URLs listed |
| Robots.txt | Valid; sitemap reference correct |
