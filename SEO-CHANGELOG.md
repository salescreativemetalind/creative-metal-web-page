# SEO CHANGELOG — Creative Metal Industries

Every website SEO change is recorded here, newest first.
Companion files: `SEO-MATERIAL-KEYWORD-IMPLEMENTATION.md` (source of truth),
`SEO-MATERIAL-KEYWORD-DASHBOARD.md` (summary).

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
