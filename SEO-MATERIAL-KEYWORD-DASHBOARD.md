# SEO MATERIAL KEYWORD DASHBOARD

**Last Updated:** 2026-09-21
**Website:** https://www.creativemetalind.com/
**Phase:** 1 audit + second-pass validation complete. **No website files modified.**
**GSC window:** 2026-06-19 → 2026-09-18 (92 days, Web)
**Figures below are the validated (second-pass) numbers.** Ten first-pass claims were corrected —
see `SEO-MATERIAL-KEYWORD-IMPLEMENTATION.md` §13.

---

## KEYWORD COUNTS — ALL THREE FIGURES

These are **not** contradictory and there are **no duplicate keywords**. The difference is a
filtering/assignment difference.

| Stage | Count | Definition |
|---|---|---|
| Total GSC queries | **527** | Rows in the `Queries` sheet |
| Deduplicated queries | **527** | 0 duplicates found (raw, `.strip()`, `.strip().lower()`) — no dedup needed |
| Material-matched (narrow, 13 subjects) | **274** | Matched one of the 13 per-material regexes |
| Broad-scope matched | **290** | Matched the wider assignment regex (adds 16, incl. 4 pressure-class queries outside scope) |
| **Final tracked keywords** | **284** | Broad-scope queries actually assigned to a target URL (6 left unassigned) |

Strictly defensible in-scope count: **274**. The 284 figure contains 5 out-of-scope queries.

---

## OVERALL

| | Count |
|---|---|
| Final tracked keywords | **284** |
| Implemented | **0** |
| In progress | **0** |
| Not started | **284** |
| Needs verification (subjects) | **4** — 157062, 16Mo3, BA Plate, A36 |

Keyword clusters: **14 prioritised** · Live pages relevant to the 13 subjects: **24** · Pages to create: **3** (+1 blocked)

---

## HEALTH SNAPSHOT

| Metric | Value | Signal |
|---|---|---|
| Impressions, peak week (Jul 10–16) | 897 | — |
| Impressions, trough week (Aug 7–13) | 51 | 🔴 |
| Impressions, rebound week (Aug 14–20) | 307 | 🟢 after the 2026-08-13 SSR fix |
| Impressions, latest week (Sep 11–17) | 91 | 🔴 |
| Avg position, peak week → latest | 21.5 → 45.3 | 🔴 degraded |
| Clicks, latest week | 1 | 🔴 |
| Non-brand clicks from the 13 subjects (92 days) | **0** | 🔴 |
| Brand share of query-attributed clicks | 22 of 22 (**100%**) | 🔴 |
| Live URLs in sitemap | 48 | — |
| Live URLs with any impressions | 24 of 48 | 🟠 |
| Removed URLs still holding impressions | **243** (4,272 `Pages`-sheet impr) | 🔴 |
| ...verified live as 308 redirects | **80 of 82 probed** | 🔴 forward-looking soft-404 risk |
| ...verified live as 404 | **2 of 82 probed** | 🟠 |
| ...redirected specifically to the homepage | **71** (3,538 impr, 19 clicks) | 🔴 |
| Broken internal links | 0 | 🟢 |
| Orphan pages | 0 | 🟢 |
| Duplicate titles / H1 / descriptions | 0 / 0 / 0 | 🟢 |
| Missing canonicals on live pages | 0 | 🟢 |
| Missing meta descriptions | **0** | 🟢 corrected — see §13 item 4 |
| Titles over 60 chars (live, decoded) | **1** (marginal, 61) | 🟢 corrected — see §13 item 5 |
| Descriptions over 160 chars (live) | **2** (165, 168) | 🟠 |
| Homepage images without ALT | **0** of 66 | 🟢 corrected — see §13 item 6 |
| Duplicate or conflicting schema | 0 | 🟢 |
| Empty `FAQPage` schema | 0 | 🟢 |
| Product images on material pages | **0** — every non-home route has only the logo | 🟠 |

---

## MATERIAL PROGRESS

| Material | Target KWs | Impr | Clicks | Implemented | Remaining | Live pages | To create | State |
|---|---|---|---|---|---|---|---|---|
| Carbon Steel | 55 | 101 | 0 | 0 | 55 | 6 | 0 | 🟠 pages exist, need optimizing |
| Alloy Steel | 7 | 51 | 0 | 0 | 7 | 3 | **1** (P91) | 🔴 P91 has no owner — requires validation |
| Stainless Steel | 135 | 320 | 0 | 0 | 135 | 11 | 0 | 🟠 largest cluster; thinnest key page |
| Inconel | 33 | 148 | 0 | 0 | 33 | 5 | 0 | 🟠 comparison intent unserved |
| Monel | 7 | 21 | 0 | 0 | 7 | 2 | 0 | 🟠 |
| Duplex Steel | 32 | 76 | 0 | 0 | 32 | 3 | 0 | 🟠 |
| A36 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | ⚪ VERIFY — page good, 13 days old, monitor only |
| 16Mo3 | 0 | 0 | 0 | 0 | 0 | **0** | 1 | ⛔ blocked — business/product verification |
| Corten Steel | 9 | 24 | 0 | 0 | 9 | **0** | **1** | 🔴 page gap **with GSC evidence** |
| Titanium | 5 | 16 | 0 | 0 | 5 | 4 | 0 | 🟢 well covered |
| Mild Steel / MS | 20 | 41 | 0 | 0 | 20 | 5 | **1** (TMT) | 🔴 TMT page deleted |
| 157062 | 0 | 0 | 0 | 0 | 0 | 0 | ? | ⛔ blocked — **term unidentifiable** |
| BA Plate | 0 | 0 | 0 | 0 | 0 | finish on 4 SS pages | 0 | ⛔ blocked — **unverified as a standalone target** |

Counts use each subject's own regex, so a query naming two subjects appears under both. Union = 284.

---

## PRIORITY DISTRIBUTION — RECALCULATED

**Position shown is impression-weighted (wPos), not the cluster minimum.** The first pass quoted
minimums, which were single-impression outliers.

| Tier | Clusters | Keywords | Impressions | Clicks |
|---|---|---|---|---|
| **A** — GSC visibility + relevant intent + suitable page/opportunity | 6 | 189 | 554 | 0 |
| **B** — GSC visibility + weak ranking/page/content opportunity | 8 | 66 | 153 | 0 |
| **C** — strategic gap with *verified* business relevance, little/no GSC evidence | **0** | — | — | — |
| **VERIFY** — unknown terminology / uncertain availability / insufficient evidence | 9 items | — | — | — |

### Priority A

| Rank | Impr | **wPos** | (minPos) | KWs | Material | Target | Page |
|---|---|---|---|---|---|---|---|
| A1 | 193 | **74.5** | (2.0) | 83 | Stainless Steel | `/ss-304-316l-pipe-supplier-india` | ✅ **optimization opportunity — 724 words, thinnest page** |
| A2 | 106 | **84.1** | (53.3) | 12 | Inconel | `/inconel-pipe-supplier-india` | ✅ |
| A3 | 89 | **70.7** | (52.5) | 46 | Carbon Steel | `/a53-erw-pipe-supplier-india` | ✅ |
| A4 | 75 | **66.3** | (10.0) | 31 | Duplex Steel | `/duplex-steel-supplier-vadodara` | ✅ |
| A5 | 50 | **52.6** | (1.0) | 6 | Alloy Steel | `/p91-alloy-steel-pipe-supplier` | ❌ **missing — GSC evidence exists, requires validation** |
| A6 | 41 | **88.2** | (79.0) | 11 | Stainless Steel | `/ss-321-pipe-supplier-india` | ✅ |

### Priority B

| Impr | **wPos** | KWs | Material | Target | Page |
|---|---|---|---|---|---|
| 37 | 66.4 | 17 | Mild Steel / MS | `/tmt-bars-supplier-gujarat` | ❌ missing |
| 24 | 74.0 | 9 | Corten Steel | `/corten-steel-plate-supplier-india` | ❌ **page gap with GSC evidence** |
| 20 | 50.8 | 6 | Monel | `/monel-400-pipe-supplier-india` | ✅ |
| 16 | 90.8 | 5 | Titanium | `/titanium-pipe-supplier-india` | ✅ |
| 16 | 73.1 | 8 | Stainless Steel | `/ss-sheet-supplier-vadodara` | ✅ |
| 16 | 82.9 | 9 | Inconel (625) | `/inconel-pipe-supplier-india` | ✅ |
| 14 | 71.7 | 5 | Stainless Steel | `/ss-321-pipe-supplier-india` | ✅ |
| 10 | 81.5 | 7 | Carbon Steel | `/carbon-steel-sa516-plate-stockist-india` | ✅ |

⚠️ **Every Priority A and B cluster sits at weighted position 50–91 — page 5 to page 9. There are
no near-page-1 quick wins in this dataset.**

**No search volume was used anywhere.** The supplied data contains none.

---

## SEARCH INTENT SPLIT

| Intent | Keywords | Impressions | Share |
|---|---|---|---|
| Informational (compare / define / properties) | 162 | 456 | **61%** |
| Commercial (supplier / grade / buy) | 122 | 293 | 39% |

The site currently has **zero** informational pages — all 433 guides were deleted on 2026-09-09.
Nearly two-thirds of in-scope demand has no appropriate page type to land on.

---

## RECOVERY OPPORTUNITY — AND ITS LIMIT

Removed URLs relating to the 13 subjects with ≥10 impressions: **28 URLs · 1,931 impressions · 13 clicks.**

| Impr | Clicks | Pos | URL | Material |
|---|---|---|---|---|
| 493 | 2 | 10.19 | `/blog/ss-flange-types-guide` | ⚠️ flange topic — **scope decision required** |
| 151 | 2 | 55.11 | `/blog/ss-304-vs-321-guide` | Stainless Steel |
| 149 | 1 | 65.99 | `/blog/hastelloy-vs-inconel` | Inconel |
| 124 | 0 | 66.76 | `/blog/ss-304-stainless-steel-guide` | Stainless Steel |
| 105 | 1 | 63.24 | `/blog/erw-vs-seamless-pipe` | Carbon Steel |
| 97 | 1 | 41.24 | `/tmt-bars-supplier-gujarat` | Mild Steel / MS |
| 89 | 0 | 29.31 | `/blog/p91-alloy-steel-guide` | Alloy Steel |
| 82 | 0 | 34.93 | `/blog/ss-316l-stainless-steel-guide` | Stainless Steel |
| 68 | 1 | 27.85 | `/blog/duplex-vs-super-duplex` | Duplex Steel |
| 66 | 1 | 20.56 | `/blog/p91-alloy-steel-power-plants` | Alloy Steel |

### 🚫 Historical impressions are NOT a licence to restore everything

Of the 243 non-live URLs, only **103 relate to the 13 subjects**. The other 140 (2,149
`Pages`-sheet impressions) are city landing pages, flanges, fittings, IBR, NDT and procurement
content that is deliberately out of scope — including `/blog/ibr-certification-guide`
(900 impr, 4 clicks, pos 16.9), the strongest page the site ever had. **15 probed URLs are
marked KEEP REMOVED.**

Blanket restoration would rebuild the ~596-route thin-page structure the site was deliberately
reduced from. Every restore must clear four gates: (1) in one of the 13 subjects; (2) has GSC
evidence; (3) republishable without inventing specifications; (4) business confirms the
product/topic is offered.

---

## ⚠️ WHAT THE DATA DOES *NOT* SHOW

| Claim | Status |
|---|---|
| The September blog deletion caused the July traffic collapse | ❌ **NOT SUPPORTED.** Deletions dated **2026-09-09/10**; the collapse ran **2026-07-17 → 07-30**. July traffic had **already collapsed before** the deletions |
| The redirects damaged historical rankings | ❌ **NOT SUPPORTED.** Redirects committed **2026-09-21**, after the GSC window closed 2026-09-18. Effect **unmeasured** |
| Cannibalization exists between specific pages | ❌ **CANNOT BE DETERMINED.** The export has no query × page pairing; `Queries` and `Pages` are independent aggregations |
| Any keyword has a known search volume | ❌ **NO VOLUME DATA SUPPLIED** |
| Dead URLs = 85% of site traffic | ❌ **INVALID DENOMINATOR.** 4,272/5,015 is a `Pages`-sheet share; the true site total is `Chart` = 4,143 |

Strongest *correlation* in the dataset (still not causation): the trough weeks Jul 24 – Aug 13
(64, 72, 51 impressions) span a documented SSR failure on 41 pages, fixed 2026-08-13, after which
impressions rose ~6× and reported indexed pages jumped 130 → 406.

---

## BLOCKERS — COMPANY INPUT REQUIRED BEFORE IMPLEMENTATION

| # | Blocker | Question |
|---|---|---|
| 1 | **`/blog/*` → `/` blanket redirect** (71 probed URLs, 3,538 impr) | Restore the material-relevant guides, redirect to genuinely relevant pages, or accept the loss and let them 404? |
| 2 | **157062** | What is it? **Zero hits across 8 surfaces** — source, GSC, sitemap, build output, git diffs, git blobs on all 10 refs, filenames, and 60+ deleted keyword documents. Material / alloy / grade / spec / internal SKU / part number? |
| 3 | **BA Plate** | Confirm it means bright-annealed **finish** (how the site already uses "BA"), and whether CMI supplies BA-finish **plate** as opposed to sheet/coil |
| 4 | **16Mo3** | Does CMI stock 16Mo3 / EN 10028-2 pressure-vessel plate? No evidence anywhere in the project |
| 5 | **SS flange cluster** | 493 impressions at position 10.2 — best asset in the dataset — but flanges are not among the 13 subjects. In scope or out? |
| 6 | **Corten grades** | Which grades (A / B / A588 / A242) and what thickness range? |
| 7 | **Hastelloy C276** | Is it stocked? How should the `inconel c276` misnomer be handled without claiming an "Inconel C276" grade exists? |
| 8 | **P91 validation** | Confirm CMI supplies P91/P92 pipe with real size, grade and certification scope, and whether the owner should be a new page or a section on the existing alloy hub |

---

## NEXT ACTION

**Awaiting approval.** Batch 2 is deliberately scoped to *decisions + 2 zero-risk metadata fixes*
(the two over-length descriptions) — no content writing — because blockers 1–4 gate everything
after that. Implementation remains controlled and evidence-driven.
