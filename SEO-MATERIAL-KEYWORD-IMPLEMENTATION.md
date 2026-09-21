# Creative Metal Industries — Material SEO Implementation Tracker

**Last Updated:** 2026-09-21
**Website:** https://www.creativemetalind.com/
**Status:** PHASE 1 AUDIT COMPLETE + SECOND-PASS VALIDATION COMPLETE — NO WEBSITE FILES MODIFIED
**Document state:** contains the **validated (second-pass) findings**. Six first-pass claims were
retracted; every retraction is recorded in §13 so the correction history stays auditable.

**Data sources**
- `https___www.creativemetalind.com_-Performance-on-Search-2026-09-21.xlsx` (GSC, Web, 2026-06-19 → 2026-09-18)
- `https___www.creativemetalind.com_-Coverage-2026-09-21.xlsx` (GSC index coverage)
- `creative-metal-industries/public/sitemap.xml` (48 live URLs)
- `creative-metal-industries/vercel.json` (42 redirect rules)
- `creative-metal-industries/src/routes/` (49 route files)
- Live HTTP status probes of 82 URLs (2026-09-21)
- Live rendered-HTML inspection of 19 pages (2026-09-21)
- `git log` / `git grep` across all 10 refs (5 local + 5 remote branches)

> **Scope rule.** Covers ONLY the 13 approved material subjects: Carbon Steel, Alloy Steel,
> Stainless Steel, Inconel, Monel, Duplex Steel, A36, 16Mo3, Corten Steel, Titanium,
> Mild Steel/MS, 157062, BA Plate. Off-scope clusters (IBR, pipe schedules, MTC, flanges,
> fittings, NDT, city landing pages) are recorded in §8 for visibility only.

---

## 0. KEYWORD COUNT RECONCILIATION

Three different numbers were produced during the audit. All three are correct for what they
measure. **The difference is a filtering/assignment difference — it is NOT duplicate keywords.**

| Stage | Count | Definition |
|---|---|---|
| Total GSC queries | **527** | Rows in the `Queries` sheet with a non-empty query string |
| Deduplicated queries | **527** | Distinct query strings. Verified 0 duplicates raw, 0 after `.strip()`, 0 after `.strip().lower()`. **No deduplication ever occurred or was needed.** |
| Material-matched (narrow) | **274** | Matched at least one of the 13 per-material bucket regexes |
| Broad-scope matched | **290** | Matched the single wider `SCOPE` regex used for target-page assignment |
| **Final tracked keywords** | **284** | Broad-scope queries that an assignment rule actually mapped to a target URL |

Set relationship: narrow ⊂ broad exactly (274 ∩ 290 = 274; narrow-only = 0; broad-only = 16).

**The 16 queries the broad regex added** (24 impressions total): `321ss` (7 impr — narrow bucket
required a word boundary), six `fe500`/`fe 500d` variants (7 impr), `p92 chemical composition`
(narrow bucket required the literal "alloy steel"), `seamless pipe rajkot`,
`high strength pickling seamless hastelloy pipe`, `super 25 chrome material`, and **four
pressure-class queries that belong to no approved subject** (`what is class 150 pipe`,
`what is class 150 pressure rating`, `what is class 300 pressure rating`, `class 300 flange rating`).

**The 6 that stayed unassigned** (290 − 284): the four pressure-class queries above, plus
`p92 chemical composition` and `super 25 chrome material`.

**Caveat carried forward:** the 284 figure contains 5 queries outside the 13 subjects
(4 pressure-class + 1 Hastelloy). The strictly defensible in-scope count is **274**.

---

## 1. WHAT THE GSC DATA DOES AND DOES NOT SHOW

### Directly observed facts

Weekly GSC series (`Chart` sheet — the authoritative site total):

| Week | Clicks | Impressions | Avg position |
|---|---|---|---|
| 2026-06-19 → 06-25 | 7 | 372 | 37.1 |
| 2026-06-26 → 07-02 | 7 | 706 | 31.9 |
| 2026-07-03 → 07-09 | 7 | 813 | 23.1 |
| **2026-07-10 → 07-16 (peak)** | **7** | **897** | **21.5** |
| 2026-07-17 → 07-23 | 4 | 284 | 19.3 |
| 2026-07-24 → 07-30 | 5 | 64 | 24.2 |
| 2026-07-31 → 08-06 | 4 | 72 | 29.3 |
| 2026-08-07 → 08-13 | 2 | 51 | 29.1 |
| **2026-08-14 → 08-20** | **6** | **307** | 58.9 |
| 2026-08-21 → 08-27 | 5 | 205 | 55.7 |
| 2026-08-28 → 09-03 | 4 | 165 | 59.2 |
| 2026-09-04 → 09-10 | 4 | 109 | 43.1 |
| **2026-09-11 → 09-17 (latest full)** | **1** | **91** | 45.3 |

Coverage series (values change only on these dates):
not-indexed **5** (Jun 30) → **464** (Jul 11) → **539** (Jul 25) → **469** (Aug 11) →
**193** (Aug 15) → **196** (Sep 5) → **29** (Sep 15).
indexed 53 → 57 → 60 → 130 → **406** (Aug 15) → 405 → **425** (Sep 15).

Dated repository events (author dates, verified with `git show -s --format=%ad`):

| Date | Event |
|---|---|
| 2026-06-05 | `/blog` section exists from the repository's first commit — it was never new |
| 2026-07-23 | `3c3768a` adds **414 files / 54,798 insertions**; `fcaca22` adds 51 more. Sitemap reaches 517 URLs |
| 2026-08-13 | `161dbb7` fixes unescaped `"` inside JSX `content="…"` on **41 pages**, which its own message states *"caused SSR to silently fail, rendering only header/footer shell (321 bytes)"*. Verified in the diff: `…Sizes 1/2" to 10" NB…` |
| 2026-09-08 | `68ea6b9` Batch-1 optimisation + 3 new pages (incl. the A36 page) |
| **2026-09-09** | `6dc5a40` deletes 433 blog files · `67d8384` deletes 61 city pages · `e28933c` deletes 46 product pages |
| 2026-09-10 | `b504c19` deletes 6 further pages |
| 2026-09-16 | `518e37f` consolidates the sitemap to 48 URLs |
| **2026-09-21** | `989c0b7` adds the 42 redirects — **three days AFTER the GSC window closes** |

### ⚠️ The page deletions are NOT the cause of the July traffic collapse

**July traffic had already collapsed before the September deletions.** The collapse ran
2026-07-17 → 07-30 (897 → 284 → 64 impressions per week). The deletions are dated
**2026-09-09/10** — roughly **two months later**. On date grounds alone, the deletions cannot
explain the July decline.

Equally, the **42 redirects were committed 2026-09-21**, after the GSC window closed on
2026-09-18. **No data in this export reflects the redirects at all.** Before that date the
removed URLs returned hard 404s.

### Correlations (timing only — causation NOT established)

1. The trough weeks (Jul 24–30: 64, Jul 31–Aug 6: 72, Aug 7–13: 51) **span the documented SSR
   failure period**. Impressions rose roughly sixfold (51 → 307) in the week immediately after
   the 2026-08-13 fix, and reported indexed pages jumped 130 → 406 on Aug 15. This is the
   strongest correlation in the dataset — stronger than anything involving the deletions.
2. The collapse week (Jul 17–23) contains the 465-file addition of 2026-07-23.
3. The second decline (307 → 91, Aug 20 → Sep 18) was **already underway before** the
   Sep 9–10 deletions, which fall inside only its final ~10 days.
4. The Jul 11 coverage spike (5 → 464 not-indexed) **precedes** the large page additions of
   Jul 23 and cannot be accounted for from the repository alone.

### Hypotheses (unproven — with the test required for each)

| Hypothesis | Test required |
|---|---|
| The SSR failure on 41 pages caused the Jul–Aug trough | GSC URL Inspection on affected URLs for that period; Vercel deploy logs; Wayback snapshots showing 321-byte pages |
| Adding ~465 pages in one day triggered a crawl/quality response | GSC Crawl Stats for July; per-URL discovery dates |
| The Sep 9–10 deletions caused the Aug 20 → Sep 18 decline | **Contradicted by timing** — that decline starts ~3 weeks earlier |
| An external factor (algorithm update, seasonality, competitor) contributed | Google update timeline + prior-year seasonality; neither supplied |

### Validated conclusion (cautious wording — use this, not a causal claim)

> Between 2026-07-16 and 2026-09-18 weekly impressions fell from 897 to 91 and weekly clicks
> from 7 to 1. The decline has at least two distinct phases. The first (mid-July to mid-August)
> coincides with a documented server-side rendering failure affecting 41 pages, fixed on
> 2026-08-13, after which impressions rose roughly sixfold the following week. The second
> (late August onward) began before the September page removals and its cause is not
> established by the available evidence. The decline **cannot** be attributed to the page
> deletions on date grounds. The 42 redirects were deployed 2026-09-21, after the GSC window
> closed, so their effect is entirely **unmeasured**. Redirecting 71 topically unrelated URLs
> to the homepage remains a **forward-looking** soft-404 risk, not an explanation of past losses.

### Data-integrity warning

GSC sheets do not reconcile: `Chart` (site total) = **4,143** impressions, but `Pages` = **5,015**
and `Queries` = **1,753**. `Countries` and `Devices` both = 4,143.

**Any percentage derived from the `Pages` or `Queries` sheet is a share of that sheet, not of
true site traffic.** The lost-URL impressions below (4,272) are `Pages`-sheet figures and must
always be described as such.

---

## 2. IMPLEMENTED KEYWORDS

| # | Material | Keyword | Target URL | What Was Updated | Date | Status |
|---|---|---|---|---|---|---|
| — | — | — | — | *No website changes made. Audit + validation only.* | 2026-09-21 | NOT STARTED |

---

## 3. LOST-URL VERIFICATION (live-probed 2026-09-21)

Corrected population (the first pass wrongly counted 4 homepage-anchor rows as live pages):

| Bucket | URLs | Impr (`Pages` sheet) | Clicks |
|---|---|---|---|
| Live (present in `sitemap.xml`) | 24 | 739 | 41 |
| Homepage anchors (`/#…`) | 4 | 4 | 0 |
| **Not live** | **243** | **4,272** | **22** |

**82 URLs were probed live** — selection criteria: ≥10 impressions **OR** any clicks **OR**
position ≤30. They cover 3,833 impressions = 90% of all lost `Pages`-sheet impressions.

**Verified result: 80 of the 82 return HTTP 308 (permanent redirect); 2 return HTTP 404.**

| Cross-check | URLs | Impr | Clicks |
|---|---|---|---|
| Redirected to the homepage `/` | **71** | 3,538 | 19 |
| >20 impressions | 32 | 3,473 | — |
| Any clicks | 15 | 2,464 | 22 |
| Previously ranking page 1–3 | 48 | 2,354 | — |
| Still hard-404 | 2 | 14 | 0 |

Recommendation split (only these four values are permitted; none has been actioned):

| Recommendation | URLs | Impr | Clicks |
|---|---|---|---|
| RESTORE / INVESTIGATE | 31 | 1,822 | 13 |
| VERIFY | 29 | 1,516 | 9 |
| KEEP REMOVED | 15 | 365 | 0 |
| REDIRECT TO RELEVANT PAGE / INVESTIGATE | 7 | 130 | 0 |

### ⚠️ Governing rule: do NOT blindly restore every lost URL

The existence of historical impressions is **not** on its own a reason to bring a URL back.
Of the 243 non-live URLs, only **103 relate to the 13 approved subjects**; the other 140
(2,149 `Pages`-sheet impressions) are city landing pages, flanges, fittings, IBR, NDT and
procurement content that is deliberately out of scope. Restoring indiscriminately would rebuild
the ~596-route, thin-page structure the site was deliberately reduced from, and 15 URLs are
already marked **KEEP REMOVED**.

Every restore must clear four gates before it is actioned:
1. it targets one of the 13 approved subjects;
2. it has GSC evidence (impressions, clicks, or a page 1–3 position);
3. the content can be republished **without inventing** specifications; and
4. the business confirms the product/topic is genuinely offered.

### Highest-value in-scope lost URLs (evidence for §5 and §6)

| Old URL | Clk | Impr | Pos | HTTP | Destination | Recommendation |
|---|---|---|---|---|---|---|
| `/blog/ss-flange-types-guide` | 2 | 493 | 10.19 | 308 | `/` | RESTORE / INVESTIGATE — but flanges are **outside** the 13 subjects; needs a scope decision |
| `/blog/ss-304-vs-321-guide` | 2 | 151 | 55.11 | 308 | `/` | RESTORE / INVESTIGATE |
| `/blog/hastelloy-vs-inconel` | 1 | 149 | 65.99 | 308 | `/` | RESTORE / INVESTIGATE |
| `/blog/ss-304-stainless-steel-guide` | 0 | 124 | 66.76 | 308 | `/` | RESTORE / INVESTIGATE |
| `/blog/erw-vs-seamless-pipe` | 1 | 105 | 63.24 | 308 | `/` | RESTORE / INVESTIGATE |
| `/tmt-bars-supplier-gujarat` | 1 | 97 | 41.24 | 308 | `/ms-beam-ismb-supplier-india` | RESTORE / INVESTIGATE |
| `/blog/p91-alloy-steel-guide` | 0 | 89 | 29.31 | 308 | `/` | RESTORE / INVESTIGATE |
| `/blog/ss-316l-stainless-steel-guide` | 0 | 82 | 34.93 | 308 | `/` | RESTORE / INVESTIGATE |
| `/blog/duplex-vs-super-duplex` | 1 | 68 | 27.85 | 308 | `/` | RESTORE / INVESTIGATE |
| `/blog/p91-alloy-steel-power-plants` | 1 | 66 | 20.56 | 308 | `/` | RESTORE / INVESTIGATE |
| `/blog/astm-a312-vs-api-5l` | 0 | 55 | 9.89 | 308 | `/` | RESTORE / INVESTIGATE |
| `/blog/inconel-vs-monel-guide` | 0 | 49 | 33.63 | 308 | `/` | RESTORE / INVESTIGATE |
| `/blog/duplex-2205-steel-guide` | 0 | 47 | 79.70 | 308 | `/` | RESTORE / INVESTIGATE |
| `/blog/ss-304-vs-316l` | 0 | 41 | 46.59 | 308 | `/` | RESTORE / INVESTIGATE |
| `/blog/super-duplex-2507-guide` | 0 | 35 | 26.06 | 308 | `/` | RESTORE / INVESTIGATE |
| `/blog/titanium-grades-comparison` | 0 | 31 | 15.84 | 308 | `/` | RESTORE / INVESTIGATE |
| `/corten-steel-plate-supplier-india` | 0 | 29 | 71.38 | 308 | `/ms-plate-supplier-india` | REDIRECT TO RELEVANT PAGE / INVESTIGATE |
| `/blog/inconel-625-guide` | 0 | 18 | 59.17 | 308 | `/` | REDIRECT TO RELEVANT PAGE / INVESTIGATE |
| `/nace-hic-steel-plate-supplier-india` | 0 | 11 | 25.36 | **404** | — | VERIFY (outside the 13 subjects) |

---

## 4. THE 13 MATERIAL SUBJECTS — VERIFIED STATUS

Query counts use each subject's own regex, so a query naming two subjects is counted under both.
Union = 284.

| Material | Queries | Impr | Clicks | Existing relevant URLs | Missing | Verification needed |
|---|---|---|---|---|---|---|
| 1. Carbon Steel | 55 | 101 | 0 | 5 | — | none |
| 2. Alloy Steel | 7 | 51 | 0 | 3 | **P91 owner**; alloy-steel **plate** owner (SA 387) | Hub lists P91 but no P91 page exists |
| 3. Stainless Steel | 135 | 320 | 0 | 11 | — | none |
| 4. Inconel | 33 | 148 | 0 | 5 | dedicated **Inconel 625** owner (currently on hub) | `inconel c276` is a user misnomer — C276 is Hastelloy |
| 5. Monel | 7 | 21 | 0 | 2 | — | none |
| 6. Duplex Steel | 32 | 76 | 0 | 3 | — | none |
| 7. A36 | **0** | 0 | 0 | 1 | — | page complete but 0 impressions; created 2026-09-08, too new to judge |
| 8. 16Mo3 | **0** | 0 | 0 | **0** | any 16Mo3 page | **business/product verification required** |
| 9. Corten Steel | 9 | 24 | 0 | **0** | `/corten-steel-plate-supplier-india` | grades queried: Corten A, Corten B, ASTM A242 — stock unconfirmed |
| 10. Titanium | 5 | 16 | 0 | 4 | — | none |
| 11. Mild Steel / MS | 20 | 41 | 0 | 5 | `/tmt-bars-supplier-gujarat`; mild-steel hub | TMT is the largest MS group with no owner |
| 12. 157062 | **0** | 0 | 0 | **0** | cannot specify | **UNVERIFIED — term unidentifiable** |
| 13. BA Plate | **0** | 0 | 0 | attribute on 4 SS pages | **none** — BA is a finish, not a subject | **UNVERIFIED as a standalone material/page target** |

Per-subject existing URLs with their GSC figures:

- **Carbon Steel** — `/carbon-steel-sa516-plate-stockist-india` (33 impr, pos 37.2),
  `/carbon-steel-pipe-supplier-india` (1), `/a106-gr-b-seamless-pipe-india` (0),
  `/a53-erw-pipe-supplier-india` (0), `/api-5l-line-pipe-supplier-india` (0)
- **Alloy Steel** — `/alloy-steel-pipe-supplier-india` (7 impr, **pos 12.71** — best-positioned
  material page on the site), `/p11-alloy-steel-pipe-supplier` (0), `/p22-alloy-steel-pipe-supplier` (0)
- **Stainless Steel** — `/ss-seamless-pipe-supplier-india` (20 impr, 1 click),
  `/ss-304-316l-pipe-supplier-india` (19, 1), `/stainless-steel-supplier-vadodara` (12),
  `/ss-sheet-supplier-vadodara` (6), `/ss-310-pipe-supplier-india` (5),
  `/ss-310s-plate-supplier-india` (4), and 321 / 347 / 410 / 430 / 904L all at 0
- **Inconel** — `/inconel-pipe-supplier-india` (24), `/incoloy-800-pipe-supplier-india` (7),
  `/inconel-600-pipe-supplier-india` (2), `/inconel-718-supplier-india` (1), `/incoloy-825-…` (0)
- **Monel** — `/monel-400-pipe-supplier-india` (0), `/monel-k500-supplier-india` (0)
- **Duplex** — `/duplex-steel-supplier-vadodara` (16, 1 click), `/duplex-2205-plate-…` (0), `/super-duplex-2507-…` (0)
- **A36** — `/astm-a36-steel-plate-supplier-india` (0)
- **Titanium** — pipe / bar / Gr.2 / Gr.5 (all 0)
- **Mild Steel / MS** — `/ms-flat-bar-supplier-india` (12, 1 click), `/ms-beam-ismb-…` (8),
  `/ms-plate-supplier-india` (2), `/ms-angle-channel-…` (2), `/ms-channel-ismc-…` (0)

---

## 5. KEYWORDS NOT YET IMPLEMENTED — VALIDATED PRIORITIES

**Methodology correction.** Priorities now use **impression-weighted position (wPos)**, not the
cluster minimum. In a 59-keyword cluster the minimum is a single-impression outlier and is
misleading. Both columns are shown so the difference is visible.

**No search-volume figure is used anywhere — the supplied data contains none** (only clicks,
impressions, CTR, position).

### PRIORITY A — existing GSC visibility + relevant intent + a suitable page/opportunity

| # | Material | Cluster | KWs | Impr | Clk | **wPos** | (minPos) | Target | Page |
|---|---|---|---|---|---|---|---|---|---|
| A1 | Stainless Steel | 304 / ss304 / 316L properties, composition, density | 83 | 193 | 0 | **74.5** | (2.0) | `/ss-304-316l-pipe-supplier-india` | live |
| A2 | Inconel | hastelloy vs inconel / inconel vs hastelloy / c276 | 12 | 106 | 0 | **84.1** | (53.3) | `/inconel-pipe-supplier-india` | live |
| A3 | Carbon Steel | erw vs seamless pipe (+ variants) | 46 | 89 | 0 | **70.7** | (52.5) | `/a53-erw-pipe-supplier-india` | live |
| A4 | Duplex Steel | duplex 2205 / 2205 duplex / 25 chrome duplex | 31 | 75 | 0 | **66.3** | (10.0) | `/duplex-steel-supplier-vadodara` | live |
| A5 | Alloy Steel | p91 / alloy steel p91 / p91 vs p92 | 6 | 50 | 0 | **52.6** | (1.0) | `/p91-alloy-steel-pipe-supplier` | **MISSING** |
| A6 | Stainless Steel | ss321 / 321ss / stainless steel 321 grade | 11 | 41 | 0 | **88.2** | (79.0) | `/ss-321-pipe-supplier-india` | live |

**A1 — `/ss-304-316l-pipe-supplier-india` is the identified optimization opportunity.** Verified
live: **724 words** — the thinnest of all 19 pages inspected (next lowest 785, peers 1,100–1,818).
It already holds 19 impressions and 1 click at position 17.4, and the largest keyword cluster on
the site (83 keywords, 193 impressions) points at it. Optimising existing content, not creating a
page.

**A5 — `/p91-alloy-steel-pipe-supplier` has GSC evidence and requires validation.** Evidence:
50 impressions across 6 queries; `difference between p91 and p92 material` at position 1.0;
two deleted P91 guides held 89 and 66 impressions; `/alloy-steel-pipe-supplier-india` already
lists P91 and ranks at position 12.71. Requires validation before creation: confirm CMI supplies
P91 (and P92) pipe with real size/grade/certification scope, and decide whether the owner should
be a new page or a P91 section on the existing alloy hub. **Do not create on GSC evidence alone.**

### PRIORITY B — existing GSC visibility + weak ranking / page / content opportunity

| # | Material | Cluster | KWs | Impr | **wPos** | (minPos) | Target | Page |
|---|---|---|---|---|---|---|---|---|
| B1 | Mild Steel / MS | tmt bar manufacturers gujarat / fe500d | 17 | 37 | 66.4 | (40.0) | `/tmt-bars-supplier-gujarat` | **MISSING** |
| B2 | Corten Steel | corten suppliers / corten a & b plate manufacturers | 9 | 24 | 74.0 | (60.5) | `/corten-steel-plate-supplier-india` | **MISSING** |
| B3 | Monel | monel vs inconel | 6 | 20 | 50.8 | (36.5) | `/monel-400-pipe-supplier-india` | live |
| B4 | Titanium | titanium grade 2 / grade 5 / grades comparison | 5 | 16 | 90.8 | (84.0) | `/titanium-pipe-supplier-india` | live |
| B5 | Stainless Steel | stainless steel plate / sheet dimensions, sizes | 8 | 16 | 73.1 | (62.3) | `/ss-sheet-supplier-vadodara` | live |
| B6 | Inconel | inconel 625 / properties / applications | 9 | 16 | 82.9 | (66.3) | `/inconel-pipe-supplier-india` | live |
| B7 | Stainless Steel | 321 vs 304 comparison | 5 | 14 | 71.7 | (37.5) | `/ss-321-pipe-supplier-india` | live |
| B8 | Carbon Steel | sa 516 grade 60 / grade 65 steel plate | 7 | 10 | 81.5 | (65.0) | `/carbon-steel-sa516-plate-stockist-india` | live |

**B2 — `/corten-steel-plate-supplier-india` is the identified page gap with GSC evidence.**
Evidence: 9 queries / 24 impressions with **no live owner**; the page itself held 29 impressions
at position 71.4 before deletion on 2026-09-09; it currently 308-redirects to
`/ms-plate-supplier-india`, which does not cover Corten. It is the only approved material with
demonstrated demand and no page at all. Still requires the grade/thickness verification in §6
before any content is written.

**Reality check:** every Priority A and B cluster sits at weighted position **50–91** — page 5 to
page 9. There are no near-page-1 quick wins in this dataset.

### PRIORITY C — strategic content gap with *verified* business relevance, little/no GSC evidence

Currently **empty**. A36 would be the only candidate on business relevance (page exists, 1,238
words, correctly separates A36 from SA 516) but it is 13 days old, so it sits in VERIFY pending
time-in-index rather than receiving content work. 16Mo3, 157062 and BA Plate cannot enter
Priority C because their business relevance is **not verified** — they are VERIFY.

---

## 6. VERIFY TIER — BLOCKED PENDING EVIDENCE OR BUSINESS INPUT

| Item | Status | Evidence gathered | Required verification |
|---|---|---|---|
| **`157062`** | **UNVERIFIED — UNKNOWN TERM** | **Zero hits across 8 independent surfaces:** (1) current source `src/ content/ data/ public/`; (2) all 527 GSC queries incl. `15 70 62`, `157 062`, `15706`; (3) `sitemap.xml`; (4) generated output `.output/ .vercel/ .vinxi/`; (5) `git log --all -S` across all refs — 0 commits; (6) `git grep` across **every commit reachable from any of the 10 refs** — 0 blobs; (7) every filename ever added; (8) **60+ deleted keyword/SEO documents** read from their pre-deletion commits, incl. `SEARCHED_KEYWORDS_BY_METAL.txt` (210 lines), `ALL_KEYWORDS_COMBINED.txt` (963), `ALL_KEYWORDS.txt` (815), `CLEANED_KEYWORDS_LIST.txt` (616), `MASTER_KEYWORDS_LIST_590_PAGES.txt` (1,416), `EXPANDED_KEYWORDS_LIST.txt` (1,821), `LONGTAIL_KEYWORDS_MASTER_LIST.txt` (3,307) | **Company must state what 157062 refers to** — material, alloy, grade, UNS/EN/IS/DIN spec, internal SKU, HS code, or customer part number. No interpretation has been made. **BLOCKED — no page, keyword or content can be produced without inventing a specification.** |
| **BA Plate** | **UNVERIFIED as a standalone material/page target** | On this site "BA" is used **only as a surface finish**, never as a product. `/ss-430-sheet-supplier-india`: grade row `"SS 430 (BA Finish)"`, condition `"Bright Annealed"`, finish list `"2B, BA, No.4 (Satin), Mirror (8K), Hairline (HL)"`. `/ss-sheet-supplier-vadodara`: `"2B / BA"` + FAQ *"BA (Bright Annealed) falls between 2B and Mirror"*. `/ss-310s-plate-supplier-india`: *"Cold rolled sheets (0.5-3mm) available in 2B, BA, and No.4 finishes"*. `/ss-304-316l-pipe-supplier-india`: surface `"Pickled & Passivated, Bright Annealed, Mill Finish"`. Homepage: `"CR sheets 0.4mm-6mm: 2B, BA, No.4, Mirror finishes"`. Historical `MASTER_KEYWORDS_LIST_590_PAGES.txt`: *"412. /blog/ss-sheet-plate-guide → … 2B No.4 BA finish"* and *"466. /blog/what-is-bright-annealing-tube → … BA tube"*. **No BA page or planned route has ever existed.** 0 GSC queries. | Confirm (a) BA means bright-annealed **finish** — in which case the owners are the existing SS sheet/plate pages and **no new page is needed**; or (b) it is a distinct product line. Also confirm whether CMI supplies BA-finish **plate**: BA is normally a cold-rolled sheet/coil finish, and the site currently attributes BA to cold-rolled sheet, not heavy plate. **No page created.** |
| **16Mo3** | **Subject to business/product verification** | 0 hits in source, GSC, sitemap, build output, git history (all 10 refs), and all 10 historical keyword lists. `SEARCHED_KEYWORDS_BY_METAL.txt` covered 10 categories — MS, Carbon, Alloy, Stainless, Duplex/Super Duplex, Inconel, Hastelloy, Monel, Titanium, A36 — **16Mo3 was never among them**. The single `EN 10028` string in the repo is on the **stainless** plate page and is unrelated to 16Mo3 (EN 10028-2 pressure-vessel alloy steel). | (a) Does CMI stock 16Mo3 / EN 10028-2 pressure-vessel plate? (b) If yes, obtain real thickness range, grade condition and certification scope. (c) Decide whether it belongs on a restored alloy-steel **plate** page rather than its own URL — note there is currently **no alloy-steel plate page at all** (SA 387 page deleted 2026-09-09). **Not created.** |
| **A36** | VERIFY — insufficient time in index | Page live, 1,238 words, full FAQ + Breadcrumb schema, correctly distinguishes A36 (structural) from SA 516 (pressure vessel). 0 impressions, 0 GSC queries. Created 2026-09-08. | Monitor only. Re-assess after 2026-10-21. **No rewrite.** |
| **SS flange cluster** | VERIFY — scope decision | `/blog/ss-flange-types-guide` held **493 impressions, 2 clicks, position 10.19** — the strongest non-brand asset in the dataset. `ss flange types` still shows 9 impressions at position 10.11. Flanges are **not** one of the 13 approved subjects. | Business decision: in scope or out? Recommend explicit approval before any work. |
| **Hastelloy C276** | VERIFY | Users search `inconel c276` (9 impr) and `inconel c276 pipe` (5 impr) — C276 is a **Hastelloy** grade, not Inconel. CMI has `/hastelloy-pipe-supplier-india` and `/hastelloy-c22-pipe-supplier-india` but no C276 page. | Confirm CMI supplies Hastelloy C276, and decide how to address the misnomer **without claiming an "Inconel C276" grade exists**. |
| **Corten grades** | VERIFY | Queries name Corten A (4 impr), Corten B (4+1), and `corten steel astm a242 plates` (1). | Confirm which grades CMI stocks (A / B / A588 / A242) and real thickness ranges before writing the restored page. |
| **`p91-5ja-140a-4a3`** | VERIFY — low risk | 14 impressions at position 53.4. Not a recognised P91 designation; resembles a mill/heat/part code. | Confirm whether this is a customer part code worth targeting or noise. |
| **31 RESTORE / INVESTIGATE URLs** | VERIFY | 1,822 impressions, 13 clicks. See §3. | Restore-vs-404 is a business decision, not an SEO deduction. Must clear the four gates in §3. |

---

## 7. PAGE STATUS — VERIFIED FROM LIVE RENDERED HTML

All values below are measured from the **live rendered HTML with HTML entities decoded**
(2026-09-21). Source-file regex over-counts because `&amp;` occupies 5 characters in source but
renders as 1, and because JSX artifacts like `{" "}` appear in source only.

| Route | HTTP | Title | Desc | H1 | H2 | H3 | Canon | Robots | JSON-LD | Img | Words | Issues |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `/` | 200 | 58 | 150 | 1 | 14 | 35 | OK | index,follow | 5 | 66 | 2,810 | weak ALTs ("Pipes & Tubes 1…8") |
| `/inconel-pipe-supplier-india` | 200 | 58 | 143 | 1 | 9 | 1 | OK | index,follow | 5 | 1 | 1,134 | none |
| `/ss-304-316l-pipe-supplier-india` | 200 | 57 | 146 | 1 | 8 | 6 | OK | index,follow | 5 | 1 | **724** | **thinnest page — A1 target** |
| `/a53-erw-pipe-supplier-india` | 200 | 59 | 151 | 1 | 7 | 1 | OK | index,follow | 5 | 1 | 1,400 | none |
| `/ss-321-pipe-supplier-india` | 200 | 54 | 150 | 1 | 7 | 1 | OK | index,follow | 5 | 1 | 1,196 | none |
| `/duplex-steel-supplier-vadodara` | 200 | 58 | 146 | 1 | 7 | 3 | OK | index,follow | 5 | 1 | 1,129 | geo-locked title vs national queries |
| `/stainless-steel-supplier-vadodara` | 200 | 58 | **165** | 1 | 12 | 6 | OK | index,follow | 5 | 1 | 1,473 | **desc 165 > 160** |
| `/monel-400-pipe-supplier-india` | 200 | 60 | 153 | 1 | 7 | 13 | OK | index,follow | 5 | 1 | 1,711 | generic ALT "…Logo" |
| `/super-duplex-2507-pipe-supplier` | 200 | 52 | 145 | 1 | 7 | 1 | OK | index,follow | 5 | 1 | 1,171 | none |
| `/ss-sheet-supplier-vadodara` | 200 | **61** | 148 | 1 | 8 | 1 | OK | index,follow | 5 | 1 | 1,364 | **title 61 > 60** (marginal) |
| `/carbon-steel-sa516-plate-stockist-india` | 200 | 48 | 157 | 1 | 10 | 6 | OK | index,follow | 5 | 1 | 1,107 | generic ALT |
| `/ms-flat-bar-supplier-india` | 200 | 32 | 120 | 1 | 8 | 4 | OK | index,follow | 5 | 1 | 785 | short title/desc |
| `/ss-seamless-pipe-supplier-india` | 200 | 60 | 139 | 1 | 7 | 1 | OK | index,follow | 5 | 1 | 897 | none |
| `/ss-310-pipe-supplier-india` | 200 | 58 | 139 | 1 | 7 | 1 | OK | index,follow | 5 | 1 | 947 | **none — description IS present** |
| `/astm-a36-steel-plate-supplier-india` | 200 | 53 | 157 | 1 | 9 | 0 | OK | index,follow | 5 | 1 | 1,238 | none |
| `/titanium-pipe-supplier-india` | 200 | 54 | 145 | 1 | 7 | 13 | OK | index,follow | 5 | 1 | 1,818 | generic ALT "…Logo" |
| `/ss-430-sheet-supplier-india` | 200 | 60 | 139 | 1 | 7 | 1 | OK | index,follow | 5 | 1 | 1,096 | none |
| `/carbon-steel-pipe-supplier-india` | 200 | 55 | 148 | 1 | 9 | 0 | OK | index,follow | 5 | 1 | 1,223 | none |
| `/products` | 200 | 59 | **168** | 1 | 3 | 10 | OK | index,follow | 5 | 0 | **407** | **desc 168 > 160; thinnest page; 0 images** |
| `/p91-alloy-steel-pipe-supplier` | — | — | — | — | — | — | — | — | — | — | — | **NO ROUTE FILE — does not exist** |
| `/corten-steel-plate-supplier-india` | — | — | — | — | — | — | — | — | — | — | — | **NO ROUTE FILE — does not exist** |
| `/tmt-bars-supplier-gujarat` | — | — | — | — | — | — | — | — | — | — | — | **NO ROUTE FILE — does not exist** |

Confirmed good across all 48 live routes: canonical present and self-referencing (0 mismatches);
exactly one H1 per page; no `noindex` outside `/[...404]` and `/admin/reviews`; **0 duplicate
titles, descriptions or H1s**; 0 broken internal links; 0 orphan pages; a single global
`Organization` / `LocalBusiness` / `WebSite` entity from `src/app.tsx` with no duplicates;
**no empty `FAQPage` schema anywhere**.

One structural gap confirmed live: **every non-homepage route contains exactly one image — the
logo.** There are no product images on any material page, although `/img` holds assets such as
`carbon-steel-plate.webp` and `duplex-plates.webp` used only on the homepage.

---

## 8. OUT-OF-SCOPE ASSETS (record only — no action without approval)

140 removed URLs carrying **2,149 `Pages`-sheet impressions and 9 clicks** are unrelated to the
13 subjects:

| Impr | Clicks | Pos | URL | Cluster |
|---|---|---|---|---|
| 900 | 4 | 16.89 | `/blog/ibr-certification-guide` | IBR certification — **the #1 page on the entire site** |
| 265 | 2 | 16.71 | `/blog/understanding-pipe-schedules` | Pipe schedules |
| 120 | 0 | 57.47 | `/steel-pipe-supplier-chennai` | City landing |
| 82 | 0 | 32.09 | `/blog/how-to-read-mtc` | Mill test certificates |
| 62 | 1 | 11.18 | `/metal-trading` | Company/service |
| 54 | 0 | 47.59 | `/blog/hastelloy-c276-guide` | Hastelloy |
| 44 | 0 | 20.30 | `/blog` | Blog index |
| 42 | 0 | 48.19 | `/steel-supplier-indore` | City landing |
| 32 | 0 | 15.19 | `/blog/pipe-fittings-selection-guide` | Fittings |
| 22 | 0 | 56.73 | `/hardox-wear-plate-supplier-india` | Hardox |

The IBR cluster (`ibr certification` 77 impr, `ibr certificate` 33, `ibr approval` 22,
`ibr form iii-c` 18 at pos 10.06, `ibr full form` 18, plus more) is the strongest non-brand
topical position the site has held. It is **not** one of the 13 subjects and stays out of scope
unless the business says otherwise.

---

## 9. CANNIBALIZATION — EVIDENCE STATUS

**The first-pass cannibalization register was withdrawn. It asserted six cases without the
evidence required to support them.**

Cannibalization means two or more URLs of the same site competing for the **same query**. The
only direct evidence is a query × page pairing.

| Required evidence | Available in the supplied data? |
|---|---|
| GSC query × page table (filter query → Pages tab) | **No** — not in this export |
| GSC API `dimensions=[query,page]` | **No** — no API access supplied |
| Two URLs recorded against one query | **No** — the `Queries` sheet has no page column |
| SERP check showing two same-site URLs for one query | **No** — not performed |

The export contains exactly seven sheets: `Chart`, `Queries`, `Pages`, `Countries`, `Devices`,
`Search appearance`, `Filters`. `Queries` and `Pages` are **independent aggregations and cannot
be joined.**

**Conclusion: cannibalization can be neither confirmed nor refuted from the supplied data.**

Additionally, the historical `KEYWORD_CANNIBALIZATION_REPORT.md` (recovered from `dd11539^`)
documented 10 clusters. **Eight involved `/blog/*` pages that no longer exist**, so those risks
are moot. Three were already resolved as OWN-ON-HUB in a prior batch: Inconel 625 →
`/inconel-pipe-supplier-india`, Hastelloy C276 → `/hastelloy-pipe-supplier-india`,
Duplex 2205 pipe → `/duplex-steel-supplier-vadodara`.

### What *is* measurable: targeting overlap (a risk indicator, not proof)

Shared keyword token in the **live** title or H1, where **both** pages have impressions:

| Keyword cluster | URL 1 | URL 2 | Intent overlap | Evidence | Severity | Recommendation |
|---|---|---|---|---|---|---|
| `ss 304`, `304` | `/ss-304-316l-pipe-supplier-india` (19 impr) | `/ss-sheet-supplier-vadodara` (6 impr) | Partial — pipe vs sheet/plate | Both live titles/H1s contain "SS 304"; both have impressions | LOW–MEDIUM | **VERIFY** via GSC query × page first |
| `seamless` | `/ss-seamless-pipe-supplier-india` (20) | `/ss-304-316l-pipe-supplier-india` (19) | Partial — both claim seamless SS pipe | Both H1s reference seamless + A312 | LOW–MEDIUM | **VERIFY** |
| `carbon steel` | `/carbon-steel-sa516-plate-stockist-india` (33) | `/carbon-steel-pipe-supplier-india` (1) | Low — plate vs pipe | Shared head term only; forms differ | LOW | No action |
| `stainless steel` | `/ss-310-pipe-supplier-india` (5) | `/stainless-steel-supplier-vadodara` (12) | Low — grade vs hub | Normal hub/spoke hierarchy | LOW | No action |
| `erw` | `/a53-erw-pipe-supplier-india` (0) | `/carbon-steel-pipe-supplier-india` (1) | Moderate on paper | **Only one page has impressions** → cannot be competing | NONE | No action |
| `duplex` | `/duplex-steel-supplier-vadodara` (16) | `/super-duplex-2507-pipe-supplier` (0) | Moderate on paper | **Only one page has impressions** | NONE | No action |
| 4 further `stainless steel` pairs | 321 / 430 / Ti / hub | — | — | **Both pages at 0 impressions** | NONE | No action |

**No case meets the standard for cannibalization.** Two pages mentioning the same material is
not cannibalization. To resolve: GSC → Performance → Queries → filter a query → Pages tab, and
check whether more than one URL appears.

Separate, redirect-induced note: `/ms-plate-supplier-india` currently receives 308s from Corten,
Hardox, Clad and SAIL-Hard plate URLs — four materials it does not cover. That is a redirect
targeting defect, not content cannibalization.

---

## 10. TECHNICAL SEO — CURRENT STATE AND VERIFIED DEFECTS

### 10a. Verified healthy

| Item | State |
|---|---|
| `robots.txt` | Allows all; disallows `/api/`, `/admin/`, `/__data.json`; points to `/sitemap.xml` — correct |
| `sitemap.xml` | Single flat file, 48 `<loc>` entries, exactly matches the 48 prerendered routes — no stale or deleted URLs |
| Canonicals | Present, self-referencing on all 48 live routes; 0 mismatches |
| `trailingSlash` | `false` in `vercel.json` — consistent |
| `noindex` | Only `/[...404]` and `/admin/reviews` — correct |
| Titles / descriptions / H1 | 0 duplicates of any of the three |
| Broken internal links | 0 across routes + components |
| Orphan pages | 0 — every live route is linked from `AllPagesLinks` and/or `index.tsx` |
| Schema | `BreadcrumbList` on 44 routes, `FAQPage` on 42, single global entity set in `app.tsx`, no duplicate `LocalBusiness`, no empty `FAQPage` |

### 10b. Verified metadata defects — the complete list is only two items

| Fix | File | Verified live value |
|---|---|---|
| Trim description to ≤160 | `src/routes/stainless-steel-supplier-vadodara.tsx` | **165** chars |
| Trim description to ≤160 | `src/routes/products.tsx` | **168** chars |

Marginal / optional: `src/routes/ss-sheet-supplier-vadodara.tsx` title renders at **61** chars.

### 10c. Redirect issues (highest technical priority — decision required)

| Problem | Verified evidence | Note |
|---|---|---|
| **71 URLs 308-redirect to `/`**, carrying 3,538 `Pages`-sheet impressions and 19 clicks | Live-probed 2026-09-21 | Google generally reads a mass redirect of topically unrelated pages to the homepage as **soft 404s**; equity does not transfer. Deployed 2026-09-21, so the effect is **unmeasured**. Options: restore, redirect to a genuinely relevant page, or let it 404 honestly. **Forward-looking risk — not a cause of past decline.** |
| Corten → MS plate | `/corten-steel-plate-supplier-india` → `/ms-plate-supplier-india` | Remove rule if/when the Corten page is restored |
| TMT → ISMB beam | `/tmt-bars-supplier-gujarat` → `/ms-beam-ismb-supplier-india` | Remove rule if/when the TMT page is restored |
| Hardox / Clad / SAIL-Hard → MS plate | 3 further rules aimed at one page | Out of scope; flagged only |
| 2 URLs with impressions still hard-404 | `/nace-hic-steel-plate-supplier-india` (11 impr, pos 25.4), `/ss-buttweld-fittings-supplier-india` (3 impr) | Both outside the 13 subjects |

---

## 11. BEFORE / AFTER RECORD

*Empty — no page has been modified. Each future batch entry will record:*

```
### <URL>   (Batch N, YYYY-MM-DD)
BEFORE  Title / H1 / canonical / primary keyword / GSC impr-clicks-pos at change date / problems
AFTER   Title / H1 / primary keyword / H2 sections added / body changes /
        internal links added (from → to) / image filenames + ALT / schema added or changed
```

---

## 12. GSC MONITORING BASELINE

**Frozen 2026-09-21** (GSC Web, 2026-06-19 → 2026-09-18, 92 days):

| Metric | Baseline |
|---|---|
| **Site total clicks / impressions (`Chart` — authoritative)** | **63 / 4,143** |
| `Pages` sheet totals | 63 / 5,015 |
| `Queries` sheet totals | 22 / 1,753 |
| CTR | Desktop 1.7% · Mobile 0.69% |
| Avg position | Desktop 37.19 · Mobile 10.11 |
| Latest full week (09-11 → 09-17) | 1 click, 91 impressions, pos 45.3 |
| Live URLs with impressions | 24 of 48 |
| Live URLs with zero impressions | 24 of 48 |
| **Non-brand clicks from the 13 subjects** | **0** |
| Brand clicks (`creative metal industries`) | 22 of 22 query-attributed clicks |
| In-scope material keywords | 274 narrow / 284 assigned |
| Countries | India 56 clicks / 2,150 impr · Singapore 2/52 · UAE 1/70 · Malaysia 1/58 · Indonesia 1/41 |
| Search appearance | Review snippet 5 clicks / 148 impr · **Product snippets 0 clicks / 98 impr** |
| Coverage | Indexed 425 · Not indexed 29 · noindex 16 · 404 5 · crawled-not-indexed 7 · alternate-canonical 1 |

**Rules.** No ranking improvement will be claimed from implementation alone. Every change is
date-stamped and compared against this baseline. Earliest meaningful comparison window:
**2026-10-21**. Percentages must state which sheet they derive from.

**Note on `Product snippets`:** 98 impressions, 0 clicks, yet only
`/ms-angle-channel-supplier-vadodara` carries `Product` + `AggregateOffer` schema. Investigate
the source of those impressions before rolling `Product` schema out more widely.

---

## 13. CORRECTION LOG — FIRST-PASS CLAIMS RETRACTED BY SECOND-PASS VALIDATION

| # | First-pass claim | Verified reality | Status |
|---|---|---|---|
| 1 | The coverage spike "coincid[es] with commit `6dc5a40` (blog removal)", implying the deletions caused the decline | `6dc5a40` is dated **2026-09-09**; the coverage spike is **2026-07-11** and the collapse **2026-07-17 → 07-30**. A two-month error, caused by reading `git log` ordering instead of commit dates | **RETRACTED** — replaced by §1 |
| 2 | The redirect-to-homepage pattern was part of the historical damage | The 42 redirects were committed **2026-09-21**, after the GSC window closed on 2026-09-18. Their effect is **unmeasured**; before then the URLs were hard 404s | **RETRACTED** — reframed as forward-looking risk |
| 3 | Dead URLs represent "85% of site impressions" | Divided a `Pages`-sheet figure (4,272/5,015) by a sheet total that **exceeds** the true site total (`Chart` = 4,143) | **RETRACTED** — now always stated as a `Pages`-sheet share |
| 4 | `/ss-310-pipe-supplier-india` has no meta description — "only page on the site without one" | **False.** Live description present, 139 chars. Source sets it via a JS string (commit `a327faa`), which the source regex missed | **RETRACTED** |
| 5 | Three titles exceed 60 chars (`/` 62, `/products` 67, `/ss-sheet-supplier-vadodara` 69) | **One**, marginally: `/ss-sheet-supplier-vadodara` = **61**. Live: `/` = 58, `/products` = 59. `&amp;` inflated the source counts | **CORRECTED** |
| 6 | Homepage has one `<img>` without alt | **False.** All **66** homepage images have alt text (some weak, none missing) | **RETRACTED** |
| 7 | `/products` description is 176 chars | **168** chars live. Still over 160 — finding holds, figure corrected | **CORRECTED** |
| 8 | Six-entry cannibalization register | Asserted without query × page evidence, which the export does not contain. 8 of 10 historical clusters are moot (pages deleted); 3 were already resolved | **WITHDRAWN** — replaced by §9 |
| 9 | Priorities quoted cluster **minimum** position ("best pos 1.0", "best pos 2.0") | Minimums are single-impression outliers. Impression-weighted position shows every Priority A/B cluster at **50–91** | **CORRECTED** — §5 |
| 10 | "284 in-scope keywords" reported as a single figure | Three distinct figures: 527 total / 274 narrow / 290 broad / 284 assigned. A filtering difference, **not** duplicates (0 duplicates exist) | **CORRECTED** — §0 |

---

## 14. CHANGE PROTOCOL

After every implementation batch, in order:

1. Modify website source under `creative-metal-industries/src/`
2. `cd creative-metal-industries && npm run build` — must prerender all routes with zero dead links
3. `npm run check:sitemap`
4. Re-run the internal-link and metadata audit (0 broken links, 0 duplicate titles/H1/descriptions)
5. Confirm canonical is self-referencing on every changed page
6. Validate JSON-LD on changed pages; confirm no duplicate `LocalBusiness` / `Organization`
7. Measure on-page values from **live rendered HTML**, not source regex (see §13 items 4–7)
8. Update §2 (implemented), §5 (remove implemented rows), §7, §11
9. Update `SEO-MATERIAL-KEYWORD-DASHBOARD.md`
10. Append to `SEO-CHANGELOG.md`
11. Report: keywords implemented · pages modified · files modified · SEO changes · keywords remaining · problems · verification required · build status

**Hard rules.** Never invent grades, chemistry, mechanical properties, dimensions,
certifications, standards, prices, reviews or search volume. Never change a live URL that holds
impressions. Never claim a ranking improvement without a dated GSC comparison. Never restore a
URL that has not cleared the four gates in §3. **Implementation stays controlled and
evidence-driven: no change proceeds without GSC evidence or explicit business verification.**
