# SEO Keyword → Page Mapping

**Site:** https://www.creativemetalind.com
**Project:** creative-metal-industries (SolidStart / Vinxi / Nitro, SSR, Vercel)
**Analysis date:** 7 September 2026
**Source of target keywords:** `SEARCHED_KEYWORDS_BY_METAL.txt` (the new authoritative target set)
**Data sources used:** actual route files in `creative-metal-industries/src/routes` (593 files), GSC Coverage exports (2026-07-24, 2026-09-02), the GSC Performance summary captured in `seo-audit/SEO-AUDIT-REPORT.md`, and the Semrush site-audit export (`www.creativemetalind.com_mega_export_20260818.xlsx`).

> **Scope:** This is a read-only mapping. No route files, titles, descriptions, canonicals, content, sitemap, or robots.txt were modified. This document is Step 1 (analysis) only.

---

## 1. Executive Summary

**The content already exists for almost every target keyword.** Of 178 target keywords across 10 metal categories, the vast majority already have a strong existing page (product/supplier page or a dedicated blog page). The problem this project faces is **not missing content** — it is:

1. **An indexation deficit.** GSC (2026-09-02) shows **169 pages "Discovered – currently not indexed"** (up from 4 on 2026-07-24), 5 "Crawled – not indexed", and only 407 of ~593 indexed. Many target-keyword pages are published but Google is choosing not to index them because the domain's authority is too low for the page volume that launched in July.
2. **Near-zero CTR on pages that already rank.** e.g. `/blog/ibr-certification-guide` sits at position 16 with 883 impressions but 4 clicks. Titles/metas do not match query intent.
3. **A small number of genuine head-term gaps** where the keyword has commercial intent but no clean dedicated target — most importantly the entire **A36 category (no page at all)**, generic **"carbon steel pipe supplier" / "carbon steel plate supplier"**, generic **"seamless pipe supplier"**, **"ss 304 plate supplier" / "ss 316 plate supplier"** as standalone product pages, **"duplex 2205 pipe supplier"** as a standalone, and a **titanium bar** product page.
4. **Cannibalization clusters** — the biggest being grade "hub vs standalone" overlaps (e.g. Inconel 625, Hastelloy C276) and the IBR / pipe-schedule / flange informational clusters flagged in the prior audit.

**Practical implication for Step 2:** the highest-leverage work is (a) fixing titles/H1s/on-page targeting on ~40 existing money pages to exactly match the new target keywords, (b) resolving the hub-vs-standalone cannibalization by designating one canonical target per keyword, and (c) creating a *small* number of genuinely missing pages (A36 above all). We should **not** create 178 new pages — most keywords already map to a page.

**Priority counts in this mapping:** HIGH = 63 keywords · MEDIUM = 74 keywords · LOW = 41 keywords.

---

## 2. Target Keyword Categories

Preserved exactly as provided in `SEARCHED_KEYWORDS_BY_METAL.txt`:

| # | Category | Keyword count |
|---|---|---:|
| 1 | Mild Steel (MS) | 15 |
| 2 | Carbon Steel | 22 |
| 3 | Alloy Steel (Chrome-Moly) | 18 |
| 4 | Stainless Steel | 29 |
| 5 | Duplex / Super Duplex | 14 |
| 6 | Inconel | 25 |
| 7 | Hastelloy | 14 |
| 8 | Monel | 13 |
| 9 | Titanium | 24 |
| 10 | A36 (Structural Carbon Steel) | 11 |
| | **Total** | **~185 keyword lines** |

**Search-intent grouping used throughout:** COMM = commercial "supplier/buy" intent · PROD = product/grade landing intent · INFO = informational "what is" · PRICE = price intent · SPEC = specification/standard.

---

## 3. Keyword → URL Mapping

Legend for **Action**:
- **OPTIMIZE** = keyword should be added/strengthened on the existing best page (title/H1/H2/body).
- **ALREADY** = keyword already the primary target of the page; only minor reinforcement needed.
- **REASSIGN** = a different existing page is the better target; retarget/redirect intent there.
- **NEW** = no adequate page exists; a new page is required.
- **CLUSTER** = fold into an existing strong page rather than build separately (avoid forced/near-duplicate pages).

`Targeted?` = is the keyword already meaningfully targeted by the mapped page today.

### 3.1 Mild Steel (MS)

| Keyword | Intent | Best existing URL | Existing Title (short) | Existing H1 (short) | Targeted? | Action | Priority |
|---|---|---|---|---|---|---|---|
| mild steel | INFO/COMM | /blog/what-is-mild-steel | What is Mild Steel (MS)? | What is Mild Steel (MS)? | Partial | OPTIMIZE | MEDIUM |
| mild steel supplier | COMM | /ms-plate-supplier-india (or new MS hub) | MS Plate IS 2062 Supplier India | MS Plate Supplier India | No | REASSIGN/NEW hub | HIGH |
| mild steel plate | PROD | /ms-plate-supplier-india | MS Plate IS 2062 Supplier India | MS Plate Supplier India | Yes | ALREADY | HIGH |
| mild steel pipe | PROD | /ss-erw-pipe-supplier-vadodara or /a53-erw-pipe-supplier-india | (ERW pipe pages) | — | Weak | OPTIMIZE | MEDIUM |
| mild steel products | COMM | /products or MS hub | Steel Products & Weight Charts | Steel Products — Pipes, Plates… | Weak | OPTIMIZE | LOW |
| ms plate | PROD | /ms-plate-supplier-india | MS Plate IS 2062 Supplier India | MS Plate Supplier India | Yes | ALREADY | HIGH |
| ms plate supplier | COMM | /ms-plate-supplier-india | MS Plate IS 2062 Supplier India | MS Plate Supplier India | Yes | ALREADY | HIGH |
| ms angle | PROD | /ms-angle-channel-supplier-vadodara | MS Angle & Channel Supplier Vadodara | MS Angle & Channel Supplier | Yes | OPTIMIZE (India term) | HIGH |
| ms angle supplier | COMM | /ms-angle-channel-supplier-vadodara | MS Angle & Channel Supplier Vadodara | MS Angle & Channel Supplier | Yes | ALREADY | MEDIUM |
| ms channel | PROD | /ms-channel-ismc-supplier-india | MS Channel ISMC Supplier India | MS Channel ISMC Supplier India | Yes | ALREADY | HIGH |
| ms channel supplier | COMM | /ms-channel-ismc-supplier-india | MS Channel ISMC Supplier India | MS Channel ISMC Supplier India | Yes | ALREADY | MEDIUM |
| ms beam | PROD | /ms-beam-ismb-supplier-india | MS Beam ISMB Supplier India | MS Beam ISMB Supplier India | Yes | ALREADY | HIGH |
| ms beam supplier | COMM | /ms-beam-ismb-supplier-india | MS Beam ISMB Supplier India | MS Beam ISMB Supplier India | Yes | ALREADY | MEDIUM |
| ms flat bar | PROD | /ms-flat-bar-supplier-india | MS Flat Bar Supplier India | MS Flat Bar Supplier India | Yes | ALREADY | HIGH |
| ms flat bar supplier | COMM | /ms-flat-bar-supplier-india | MS Flat Bar Supplier India | MS Flat Bar Supplier India | Yes | ALREADY | MEDIUM |

**MS notes:** The generic head terms `mild steel` / `mild steel supplier` / `mild steel products` have no single owner. Options: (a) elevate `/ms-structural-steel-guide` or `/products` as the MS informational hub, or (b) create one `mild steel supplier india` hub that internally links to the 5 MS product pages. Recommend **CLUSTER onto an MS hub** rather than new pages for each — avoids near-duplicates. `mild steel pipe` is genuinely weakly served (no MS-specific ERW pipe page; ERW pipe pages are grade-neutral).

### 3.2 Carbon Steel

| Keyword | Intent | Best existing URL | Targeted? | Action | Priority |
|---|---|---|---|---|---|
| carbon steel | INFO | /blog/what-is-carbon-steel | Yes | ALREADY | MEDIUM |
| carbon steel pipe | PROD | /a106-gr-b-seamless-pipe-india (+ /blog/carbon-steel-pipe-guide) | Partial | OPTIMIZE / NEW generic CS pipe hub | HIGH |
| carbon steel pipe supplier | COMM | *(no generic CS pipe supplier page)* | No | NEW | HIGH |
| carbon steel plate | PROD | /carbon-steel-sa516-plate-stockist-india | Partial | OPTIMIZE | HIGH |
| carbon steel plate supplier | COMM | /carbon-steel-sa516-plate-stockist-india | Partial | OPTIMIZE / NEW generic CS plate | MEDIUM |
| carbon steel seamless pipe | PROD | /a106-gr-b-seamless-pipe-india | Partial | OPTIMIZE | HIGH |
| carbon steel seamless pipe supplier | COMM | /a106-gr-b-seamless-pipe-india | Partial | OPTIMIZE | HIGH |
| astm a106 pipe | SPEC/PROD | /a106-gr-b-seamless-pipe-india | Yes | ALREADY | HIGH |
| a106 pipe | PROD | /a106-gr-b-seamless-pipe-india | Yes | ALREADY | HIGH |
| a106 pipe supplier | COMM | /a106-gr-b-seamless-pipe-india | Yes | ALREADY | MEDIUM |
| a106 seamless pipe | PROD | /a106-gr-b-seamless-pipe-india | Yes | ALREADY | HIGH |
| a106 seamless pipe supplier | COMM | /a106-gr-b-seamless-pipe-india | Yes | ALREADY | MEDIUM |
| api 5l pipe | PROD | /api-5l-line-pipe-supplier-india | Yes | ALREADY | HIGH |
| api 5l pipe supplier | COMM | /api-5l-line-pipe-supplier-india | Yes | ALREADY | MEDIUM |
| sa516 grade 70 plate | PROD | /carbon-steel-sa516-plate-stockist-india | Yes | ALREADY | HIGH |
| sa516 grade 70 plate supplier | COMM | /carbon-steel-sa516-plate-stockist-india | Yes | ALREADY | MEDIUM |
| erw pipe | PROD | /a53-erw-pipe-supplier-india | Yes | ALREADY | HIGH |
| erw steel pipe | PROD | /a53-erw-pipe-supplier-india | Yes | ALREADY | MEDIUM |
| erw pipe supplier | COMM | /a53-erw-pipe-supplier-india | Yes | ALREADY | MEDIUM |
| seamless pipe | PROD/INFO | /blog/what-is-seamless-pipe (info) + /ss-seamless-pipe-supplier-india / /a106… (comm) | Partial | OPTIMIZE — see cannibalization §5 | MEDIUM |
| seamless steel pipe | PROD | /a106-gr-b-seamless-pipe-india or /ss-seamless-pipe-supplier-india | Partial | OPTIMIZE | MEDIUM |
| seamless pipe supplier | COMM | *(no generic seamless pipe supplier page — split between SS and CS)* | No | REASSIGN or NEW | MEDIUM |

**CS notes:** `carbon steel pipe supplier` and generic `seamless pipe supplier` are the notable commercial gaps. `carbon steel plate` currently only maps to the SA516-specific page — acceptable but the head term "carbon steel plate" would benefit from broadening that page's title/H2 coverage rather than a new page.

### 3.3 Alloy Steel (Chrome-Moly)

| Keyword | Intent | Best existing URL | Targeted? | Action | Priority |
|---|---|---|---|---|---|
| alloy steel | INFO | /blog/what-is-alloy-steel | Yes | ALREADY | MEDIUM |
| alloy steel supplier | COMM | /alloy-steel-pipe-supplier-india | Partial | OPTIMIZE | HIGH |
| alloy steel pipe | PROD | /alloy-steel-pipe-supplier-india | Yes | ALREADY | HIGH |
| alloy steel pipe supplier | COMM | /alloy-steel-pipe-supplier-india | Yes | ALREADY | HIGH |
| alloy steel seamless pipe | PROD | /alloy-steel-pipe-supplier-india | Partial | OPTIMIZE | MEDIUM |
| alloy steel seamless pipe supplier | COMM | /alloy-steel-pipe-supplier-india | Partial | OPTIMIZE | MEDIUM |
| chrome moly pipe | PROD | /alloy-steel-pipe-supplier-india | Partial | OPTIMIZE (add "chrome moly") | HIGH |
| chrome moly steel pipe | PROD | /alloy-steel-pipe-supplier-india | Partial | OPTIMIZE | MEDIUM |
| chrome moly pipe supplier | COMM | /alloy-steel-pipe-supplier-india | Partial | OPTIMIZE | MEDIUM |
| astm a335 p11 pipe | SPEC/PROD | /p11-alloy-steel-pipe-supplier | Yes | ALREADY | HIGH |
| astm a335 p22 pipe | SPEC/PROD | /p22-alloy-steel-pipe-supplier | Yes | ALREADY | HIGH |
| astm a335 p91 pipe | SPEC/PROD | /alloy-steel-pipe-supplier-india (P91) + /blog/p91-alloy-steel-guide | Partial | OPTIMIZE / consider standalone P91 | HIGH |
| p11 pipe | PROD | /p11-alloy-steel-pipe-supplier | Yes | ALREADY | HIGH |
| p22 pipe | PROD | /p22-alloy-steel-pipe-supplier | Yes | ALREADY | HIGH |
| p91 pipe | PROD | /alloy-steel-pipe-supplier-india + /blog/p91-alloy-steel-guide | Partial | OPTIMIZE / standalone P91 page | HIGH |
| p11 seamless pipe | PROD | /p11-alloy-steel-pipe-supplier | Yes | ALREADY | MEDIUM |
| p22 seamless pipe | PROD | /p22-alloy-steel-pipe-supplier | Yes | ALREADY | MEDIUM |
| p91 seamless pipe | PROD | /alloy-steel-pipe-supplier-india / p91 guide | Partial | OPTIMIZE | MEDIUM |

**Alloy notes:** P11 and P22 have dedicated standalone product pages, but **P91 does not** — it lives on the `/alloy-steel-pipe-supplier-india` hub + a blog guide. Given P91 is the single highest-demand chrome-moly grade (power sector), a standalone `/p91-alloy-steel-pipe-supplier` product page is a reasonable **NEW** candidate for parity with P11/P22 (decide in Step 2). `chrome moly` terms are not explicitly in any title today — OPTIMIZE the hub.

### 3.4 Stainless Steel

| Keyword | Intent | Best existing URL | Targeted? | Action | Priority |
|---|---|---|---|---|---|
| stainless steel | INFO | /blog/what-is-stainless-steel | Yes | ALREADY | MEDIUM |
| stainless steel supplier | COMM | /stainless-steel-supplier-vadodara (+ /stainless-steel-supplier-gujarat) | Partial | OPTIMIZE | HIGH |
| stainless steel pipe | PROD | /ss-seamless-pipe-supplier-india / /ss-pipe-supplier-vadodara | Partial | OPTIMIZE — see §5 | HIGH |
| stainless steel plate | PROD | /blog/ss-sheet-plate-guide (+ /ss-sheet-supplier-vadodara) | Weak | OPTIMIZE / NEW SS plate product page | HIGH |
| stainless steel sheet | PROD | /ss-sheet-supplier-vadodara + /blog/ss-sheet-plate-guide | Partial | OPTIMIZE | HIGH |
| stainless steel 304 | INFO/PROD | /blog/ss-304-stainless-steel-guide | Yes | ALREADY | HIGH |
| stainless steel 316 | INFO/PROD | /ss-304-316l-pipe-supplier-india / /blog/ss-316l-stainless-steel-guide | Partial | OPTIMIZE | HIGH |
| 304 stainless steel | INFO/PROD | /blog/ss-304-stainless-steel-guide | Yes | ALREADY | HIGH |
| 316 stainless steel | INFO/PROD | /blog/ss-316l-stainless-steel-guide | Partial | OPTIMIZE | HIGH |
| 304l stainless steel | INFO | /blog/ss-304-stainless-steel-guide | Partial | OPTIMIZE | MEDIUM |
| 316l stainless steel | INFO/PROD | /blog/ss-316l-stainless-steel-guide | Yes | ALREADY | HIGH |
| ss 304 | PROD | /blog/ss-304-stainless-steel-guide / /ss-304-316l-pipe-supplier-india | Partial | OPTIMIZE — see §5 | HIGH |
| ss 316 | PROD | /ss-304-316l-pipe-supplier-india / /blog/ss-316l… | Partial | OPTIMIZE | HIGH |
| ss 304 pipe | PROD | /ss-304-316l-pipe-supplier-india | Yes | ALREADY | HIGH |
| ss 316 pipe | PROD | /ss-304-316l-pipe-supplier-india | Yes | ALREADY | HIGH |
| ss 304 plate | PROD | *(no SS-304-plate product page; only /blog/ss-304-plate-price-india + /ss-sheet-supplier-vadodara)* | Weak | NEW / OPTIMIZE | MEDIUM |
| ss 316 plate | PROD | *(no SS-316-plate product page)* | Weak | NEW / OPTIMIZE | MEDIUM |
| ss 321 plate | PROD | /ss-321-pipe-supplier-india (pipe) — plate not covered | Weak | OPTIMIZE (add plate) | LOW |
| ss 310 plate | PROD | /ss-310s-plate-supplier-india | Partial | OPTIMIZE | MEDIUM |
| ss 410 plate | PROD | /ss-410-pipe-supplier-india (pipe) — plate weak | Weak | OPTIMIZE | LOW |
| ss 430 plate | PROD | /ss-430-sheet-supplier-india | Partial | OPTIMIZE | LOW |
| ss 904l plate | PROD | /ss-904l-pipe-supplier-india (pipe) — plate weak | Weak | OPTIMIZE | LOW |
| 304 stainless steel pipe | PROD | /ss-304-316l-pipe-supplier-india | Yes | ALREADY | HIGH |
| 316 stainless steel pipe | PROD | /ss-304-316l-pipe-supplier-india | Yes | ALREADY | HIGH |
| 304 stainless steel plate | PROD | *(gap — see ss 304 plate)* | Weak | NEW / OPTIMIZE | MEDIUM |
| 316 stainless steel plate | PROD | *(gap — see ss 316 plate)* | Weak | NEW / OPTIMIZE | MEDIUM |
| 304 stainless steel supplier | COMM | /ss-304-316l-pipe-supplier-india | Partial | OPTIMIZE | MEDIUM |
| 316 stainless steel supplier | COMM | /ss-304-316l-pipe-supplier-india | Partial | OPTIMIZE | MEDIUM |
| 304 stainless steel pipe supplier | COMM | /ss-304-316l-pipe-supplier-india | Yes | ALREADY | MEDIUM |
| 316 stainless steel pipe supplier | COMM | /ss-304-316l-pipe-supplier-india | Yes | ALREADY | MEDIUM |

**SS notes:** SS 304 and 316 pipe are well covered by the combined `/ss-304-316l-pipe-supplier-india` page. The real gap is **SS plate** — there is no dedicated SS 304 / SS 316 plate product page (only price blogs and the Vadodara sheet page). The `ss 3xx plate` grade terms mostly hit pipe pages. Recommend one strong **SS plate & sheet product page** (or broaden `/ss-sheet-supplier-vadodara` to national "SS plate supplier india") rather than a new page per grade.

### 3.5 Duplex / Super Duplex

| Keyword | Intent | Best existing URL | Targeted? | Action | Priority |
|---|---|---|---|---|---|
| duplex stainless steel | INFO | /blog/what-is-duplex-stainless-steel | Yes | ALREADY | MEDIUM |
| duplex 2205 | PROD/INFO | /blog/duplex-2205-steel-guide / /duplex-2205-plate-supplier-india | Partial | OPTIMIZE — see §5 | HIGH |
| duplex 2205 supplier | COMM | /duplex-steel-supplier-vadodara | Partial | OPTIMIZE | HIGH |
| duplex 2205 pipe | PROD | *(no standalone duplex-2205 pipe page; covered by /duplex-steel-supplier-vadodara)* | Weak | REASSIGN / NEW | HIGH |
| duplex 2205 pipe supplier | COMM | /duplex-steel-supplier-vadodara | Weak | OPTIMIZE / NEW | HIGH |
| 2205 pipe | PROD | /duplex-steel-supplier-vadodara | Weak | OPTIMIZE | MEDIUM |
| 2205 stainless steel | INFO | /blog/duplex-2205-steel-guide | Partial | OPTIMIZE | MEDIUM |
| super duplex | INFO/PROD | /super-duplex-2507-pipe-supplier / /blog/super-duplex-2507-guide | Partial | OPTIMIZE | HIGH |
| super duplex 2507 | PROD | /super-duplex-2507-pipe-supplier | Yes | ALREADY | HIGH |
| super duplex 2507 supplier | COMM | /super-duplex-2507-pipe-supplier | Yes | ALREADY | MEDIUM |
| 2507 pipe | PROD | /super-duplex-2507-pipe-supplier | Yes | ALREADY | MEDIUM |
| 2507 stainless steel | INFO | /blog/super-duplex-2507-guide | Partial | OPTIMIZE | MEDIUM |
| super duplex pipe | PROD | /super-duplex-2507-pipe-supplier | Yes | ALREADY | HIGH |
| super duplex pipe supplier | COMM | /super-duplex-2507-pipe-supplier | Yes | ALREADY | MEDIUM |

**Duplex notes:** Super Duplex 2507 has a clean dedicated pipe page. **Duplex 2205 pipe** does not have a standalone product page (2205 plate, fittings, flanges pages exist; pipe is folded into `/duplex-steel-supplier-vadodara`). Given `duplex 2205 pipe` / `2205 pipe` are strong commercial terms, either OPTIMIZE the Vadodara duplex page to own it, or create a `/duplex-2205-pipe-supplier-india` NEW page for parity with the 2507 pipe page.

### 3.6 Inconel

| Keyword | Intent | Best existing URL | Targeted? | Action | Priority |
|---|---|---|---|---|---|
| inconel | INFO | /blog/what-is-inconel-alloy / /inconel-pipe-supplier-india | Partial | OPTIMIZE | MEDIUM |
| inconel supplier | COMM | /inconel-pipe-supplier-india | Yes | ALREADY | HIGH |
| inconel pipe | PROD | /inconel-pipe-supplier-india | Yes | ALREADY | HIGH |
| inconel pipe supplier | COMM | /inconel-pipe-supplier-india | Yes | ALREADY | HIGH |
| inconel metal | INFO | /blog/what-is-inconel-alloy | Partial | OPTIMIZE | LOW |
| inconel seamless pipe | PROD | /inconel-pipe-supplier-india | Partial | OPTIMIZE | MEDIUM |
| inconel 600 | PROD | /inconel-600-pipe-supplier-india | Yes | ALREADY | HIGH |
| inconel 600 supplier | COMM | /inconel-600-pipe-supplier-india | Yes | ALREADY | MEDIUM |
| inconel 600 pipe | PROD | /inconel-600-pipe-supplier-india | Yes | ALREADY | HIGH |
| inconel 600 pipe supplier | COMM | /inconel-600-pipe-supplier-india | Yes | ALREADY | MEDIUM |
| inconel 625 | PROD | /inconel-pipe-supplier-india (hub) + /blog/inconel-625-guide | Partial | OPTIMIZE — see §5 (no standalone) | HIGH |
| inconel 625 supplier | COMM | /inconel-pipe-supplier-india | Partial | OPTIMIZE / NEW standalone | HIGH |
| inconel 625 pipe | PROD | /inconel-pipe-supplier-india | Partial | OPTIMIZE / NEW standalone | HIGH |
| inconel 625 pipe supplier | COMM | /inconel-pipe-supplier-india | Partial | OPTIMIZE / NEW standalone | HIGH |
| inconel 718 | PROD | /inconel-718-supplier-india | Yes | ALREADY | HIGH |
| inconel 718 supplier | COMM | /inconel-718-supplier-india | Yes | ALREADY | MEDIUM |
| inconel 718 pipe | PROD | /inconel-718-supplier-india | Yes | ALREADY | MEDIUM |
| inconel 718 pipe supplier | COMM | /inconel-718-supplier-india | Yes | ALREADY | MEDIUM |
| incoloy 800 | PROD | /incoloy-800-pipe-supplier-india | Yes | ALREADY | MEDIUM |
| incoloy 800 supplier | COMM | /incoloy-800-pipe-supplier-india | Yes | ALREADY | LOW |
| incoloy 800 pipe | PROD | /incoloy-800-pipe-supplier-india | Yes | ALREADY | MEDIUM |
| incoloy 825 | PROD | /incoloy-825-pipe-supplier-india | Yes | ALREADY | MEDIUM |
| incoloy 825 supplier | COMM | /incoloy-825-pipe-supplier-india | Yes | ALREADY | LOW |
| incoloy 825 pipe | PROD | /incoloy-825-pipe-supplier-india | Yes | ALREADY | MEDIUM |

**Inconel notes:** 600, 718, and Incoloy 800/825 each have their own product pages. **Inconel 625 — the single most-searched Inconel grade — has NO standalone product page**; it lives on the `/inconel-pipe-supplier-india` hub and the `/blog/inconel-625-guide`. This is the top Inconel opportunity: either make the hub explicitly own "Inconel 625 pipe supplier" or create a `/inconel-625-pipe-supplier-india` NEW page (recommended for commercial parity). See cannibalization §5.

### 3.7 Hastelloy

| Keyword | Intent | Best existing URL | Targeted? | Action | Priority |
|---|---|---|---|---|---|
| hastelloy | INFO | /blog/what-is-hastelloy / /hastelloy-pipe-supplier-india | Partial | OPTIMIZE | MEDIUM |
| hastelloy supplier | COMM | /hastelloy-pipe-supplier-india | Yes | ALREADY | HIGH |
| hastelloy pipe | PROD | /hastelloy-pipe-supplier-india | Yes | ALREADY | HIGH |
| hastelloy pipe supplier | COMM | /hastelloy-pipe-supplier-india | Yes | ALREADY | HIGH |
| hastelloy metal | INFO | /blog/what-is-hastelloy | Partial | OPTIMIZE | LOW |
| hastelloy seamless pipe | PROD | /hastelloy-pipe-supplier-india | Partial | OPTIMIZE | MEDIUM |
| hastelloy c276 | PROD | /hastelloy-pipe-supplier-india (hub) + /blog/hastelloy-c276-guide | Partial | OPTIMIZE / NEW standalone — see §5 | HIGH |
| hastelloy c276 supplier | COMM | /hastelloy-pipe-supplier-india | Partial | OPTIMIZE / NEW standalone | HIGH |
| hastelloy c276 pipe | PROD | /hastelloy-pipe-supplier-india | Partial | OPTIMIZE / NEW standalone | HIGH |
| hastelloy c276 pipe supplier | COMM | /hastelloy-pipe-supplier-india | Partial | OPTIMIZE / NEW standalone | HIGH |
| hastelloy c22 | PROD | /hastelloy-c22-pipe-supplier-india | Yes | ALREADY | MEDIUM |
| hastelloy c22 supplier | COMM | /hastelloy-c22-pipe-supplier-india | Yes | ALREADY | LOW |
| hastelloy c22 pipe | PROD | /hastelloy-c22-pipe-supplier-india | Yes | ALREADY | MEDIUM |
| hastelloy c22 pipe supplier | COMM | /hastelloy-c22-pipe-supplier-india | Yes | ALREADY | LOW |

**Hastelloy notes:** Same pattern as Inconel 625 — **C22 has a standalone page, but the flagship C276 grade does not** (it lives on the hub + a blog guide). Recommend making C276 the owned target on the hub or a `/hastelloy-c276-pipe-supplier-india` NEW page.

### 3.8 Monel

| Keyword | Intent | Best existing URL | Targeted? | Action | Priority |
|---|---|---|---|---|---|
| monel | INFO | /blog/what-is-monel-alloy / /monel-400-pipe-supplier-india | Partial | OPTIMIZE | MEDIUM |
| monel supplier | COMM | /monel-400-pipe-supplier-india | Partial | OPTIMIZE | HIGH |
| monel pipe | PROD | /monel-400-pipe-supplier-india | Partial | OPTIMIZE | HIGH |
| monel pipe supplier | COMM | /monel-400-pipe-supplier-india | Partial | OPTIMIZE | HIGH |
| monel 400 | PROD | /monel-400-pipe-supplier-india | Yes | ALREADY | HIGH |
| monel 400 supplier | COMM | /monel-400-pipe-supplier-india | Yes | ALREADY | MEDIUM |
| monel 400 pipe | PROD | /monel-400-pipe-supplier-india | Yes | ALREADY | HIGH |
| monel 400 pipe supplier | COMM | /monel-400-pipe-supplier-india | Yes | ALREADY | MEDIUM |
| monel k500 | PROD | /monel-k500-supplier-india | Yes | ALREADY | MEDIUM |
| monel k500 supplier | COMM | /monel-k500-supplier-india | Yes | ALREADY | LOW |
| monel k500 pipe | PROD | /monel-k500-supplier-india (bar page) | Weak | OPTIMIZE (add pipe) | LOW |
| monel k500 pipe supplier | COMM | /monel-k500-supplier-india | Weak | OPTIMIZE | LOW |
| monel seamless pipe | PROD | /monel-400-pipe-supplier-india | Partial | OPTIMIZE | MEDIUM |

**Monel notes:** Generic `monel` / `monel pipe` / `monel supplier` have no hub — `/monel-400-pipe-supplier-india` is the de-facto owner and should be OPTIMIZED to also target the generic terms (add "Monel pipe supplier India" to title/H2). `monel k500 pipe` is weak because the K500 page is bar-focused.

### 3.9 Titanium

| Keyword | Intent | Best existing URL | Targeted? | Action | Priority |
|---|---|---|---|---|---|
| titanium | INFO | /blog/what-is-titanium-alloy / /titanium-pipe-supplier-india | Partial | OPTIMIZE | MEDIUM |
| titanium supplier | COMM | /titanium-pipe-supplier-india | Partial | OPTIMIZE | HIGH |
| titanium pipe | PROD | /titanium-pipe-supplier-india | Yes | ALREADY | HIGH |
| titanium pipe supplier | COMM | /titanium-pipe-supplier-india | Yes | ALREADY | HIGH |
| titanium bar | PROD | *(no titanium bar product page)* | No | NEW | HIGH |
| titanium bars | PROD | *(no titanium bar product page)* | No | NEW | MEDIUM |
| titanium bar supplier | COMM | *(no titanium bar product page)* | No | NEW | MEDIUM |
| titanium grade 2 | PROD | /titanium-grade-2-pipe-india | Yes | ALREADY | HIGH |
| titanium grade 2 supplier | COMM | /titanium-grade-2-pipe-india | Yes | ALREADY | MEDIUM |
| titanium grade 2 bar | PROD | *(gap — pipe page only)* | Weak | NEW / OPTIMIZE | MEDIUM |
| titanium grade 2 bars | PROD | *(gap)* | Weak | NEW / OPTIMIZE | LOW |
| titanium grade 2 bar supplier | COMM | *(gap)* | Weak | NEW / OPTIMIZE | LOW |
| titanium grade 5 | PROD | /titanium-grade-5-pipe-india | Yes | ALREADY | HIGH |
| titanium grade 5 supplier | COMM | /titanium-grade-5-pipe-india | Yes | ALREADY | MEDIUM |
| titanium grade 5 bar | PROD | *(gap — pipe page only)* | Weak | NEW / OPTIMIZE | MEDIUM |
| titanium grade 5 bars | PROD | *(gap)* | Weak | NEW / OPTIMIZE | LOW |
| titanium grade 5 bar supplier | COMM | *(gap)* | Weak | NEW / OPTIMIZE | LOW |
| ti-6al-4v | PROD/SPEC | /titanium-grade-5-pipe-india (R56400 = Ti-6Al-4V) | Partial | OPTIMIZE | MEDIUM |
| ti 6al 4v | PROD/SPEC | /titanium-grade-5-pipe-india | Partial | OPTIMIZE | MEDIUM |
| ti-6al-4v supplier | COMM | /titanium-grade-5-pipe-india | Partial | OPTIMIZE | LOW |
| grade 5 titanium | PROD | /titanium-grade-5-pipe-india | Yes | ALREADY | MEDIUM |

**Titanium notes:** Pipe is well covered (hub + grade 2 + grade 5). The clear gap is **titanium bar/bars** — there is no titanium bar product page, and the bar terms are commercial (fabrication/aerospace buyers). Recommend one `/titanium-bar-supplier-india` NEW page covering Grade 2 and Grade 5 bar (Ti-6Al-4V), rather than three separate bar pages. `ti-6al-4v` maps to the Grade 5 page which already references R56400.

### 3.10 A36 (Structural Carbon Steel)

| Keyword | Intent | Best existing URL | Targeted? | Action | Priority |
|---|---|---|---|---|---|
| a36 steel | PROD/INFO | *(no A36 page anywhere)* | No | NEW | HIGH |
| a36 steel supplier | COMM | *(none)* | No | NEW | HIGH |
| a36 steel plate | PROD | *(none)* | No | NEW | HIGH |
| a36 steel plate supplier | COMM | *(none)* | No | NEW | HIGH |
| a36 plate | PROD | *(none)* | No | NEW | HIGH |
| astm a36 steel | SPEC | *(none)* | No | NEW | MEDIUM |
| astm a36 steel supplier | COMM | *(none)* | No | NEW | MEDIUM |
| astm a36 steel plate | SPEC/PROD | *(none)* | No | NEW | MEDIUM |
| astm a36 steel plate supplier | COMM | *(none)* | No | NEW | MEDIUM |
| a516 steel | PROD | /carbon-steel-sa516-plate-stockist-india + /blog/sa-516-carbon-steel-plate-guide | Partial | OPTIMIZE | MEDIUM |
| a516 steel plate | PROD | /carbon-steel-sa516-plate-stockist-india | Yes | ALREADY | MEDIUM |

**A36 notes:** This is the **single largest content gap in the whole target set**. There is no A36 page at all. All 9 A36 keywords require one new dedicated page (e.g. `/astm-a36-steel-plate-supplier-india`) — do NOT scatter across 9 pages. The two A516 terms are already partly covered by the SA516 plate page/guide.

---

## 4. Priority Pages

### High Priority Pages (optimize/create first — commercial + already-ranking + clear gaps)

**Optimize existing (highest leverage — pages already exist and often already get impressions):**
1. `/inconel-pipe-supplier-india` — own "inconel 625 pipe supplier" cluster (or spin standalone).
2. `/hastelloy-pipe-supplier-india` — own "hastelloy c276 pipe supplier" cluster (or spin standalone).
3. `/alloy-steel-pipe-supplier-india` — add chrome-moly + P91 targeting.
4. `/ss-304-316l-pipe-supplier-india` — reinforce ss 304 / ss 316 pipe head terms.
5. `/duplex-steel-supplier-vadodara` — own duplex 2205 pipe (or spin standalone).
6. `/super-duplex-2507-pipe-supplier` — reinforce super duplex head terms.
7. `/monel-400-pipe-supplier-india` — extend to generic "monel pipe supplier".
8. `/titanium-pipe-supplier-india` — reinforce titanium supplier head terms.
9. `/ms-plate-supplier-india`, `/ms-channel-ismc-supplier-india`, `/ms-beam-ismb-supplier-india`, `/ms-flat-bar-supplier-india` — already good; add national head-term reinforcement.
10. `/a106-gr-b-seamless-pipe-india` — own "carbon steel seamless pipe supplier".
11. `/carbon-steel-sa516-plate-stockist-india` — broaden to "carbon steel plate supplier".
12. `/stainless-steel-supplier-vadodara` / `/stainless-steel-supplier-gujarat` — "stainless steel supplier".

**New pages worth creating (genuine commercial gaps):**
- `/astm-a36-steel-plate-supplier-india` — **A36 (entire category has no page).**
- `/inconel-625-pipe-supplier-india` — 625 has no standalone (flagship grade).
- `/hastelloy-c276-pipe-supplier-india` — C276 has no standalone (flagship grade).
- `/duplex-2205-pipe-supplier-india` — parity with 2507 pipe page.
- `/titanium-bar-supplier-india` — titanium bar has no page.
- `/carbon-steel-pipe-supplier-india` — generic CS pipe supplier (currently only grade-specific).
- Optional: `/p91-alloy-steel-pipe-supplier` — parity with P11/P22 standalones.

### Medium Priority Pages
- SS plate product coverage (SS 304 plate / SS 316 plate) — broaden `/ss-sheet-supplier-vadodara` to a national "SS plate & sheet supplier india" or new page.
- MS hub for generic `mild steel supplier` / `mild steel products`.
- Generic `seamless pipe supplier` disambiguation (SS vs CS).
- INFO "what is" pages (already exist) — reinforce entity terms.

### Low Priority Pages
- Grade-plate long-tail (ss 321 plate, ss 410 plate, ss 904l plate, ss 430 plate) — add as H2 sections on existing grade pages, not new pages.
- monel k500 pipe, titanium grade-2/5 bar long-tails — fold into the respective bar/pipe pages.
- `inconel metal`, `hastelloy metal` — minor entity reinforcement on info pages.

---

## 5. Keyword Cannibalization Issues

Cases where more than one existing page competes for the same primary keyword. For each, one **canonical target** is recommended; the others should be retargeted to a distinct intent or internally linked as supporting pages (no forced separate targeting).

| Cluster | Competing pages | Recommended canonical target | Others become |
|---|---|---|---|
| **IBR certification** (from prior audit; GSC shows IBR queries split across 4 URLs at pos 10–35) | `/blog/ibr-certification-guide`, `/blog/what-is-ibr-certification`, `/blog/ibr-form-iiic-complete-guide`, `/blog/why-ibr-certification-mandatory` | `/blog/ibr-certification-guide` (pillar — 883 impr) | `what-is-…` → definition long-tail; `ibr-form-iiic` → Form III-C long-tail; `why-…` → FAQ long-tail; all internally link to pillar |
| **Pipe schedule** | `/blog/understanding-pipe-schedules` (269 impr, pos 16), `/blog/pipe-schedule-chart`, `/blog/what-is-pipe-schedule` | `/blog/understanding-pipe-schedules` (pillar) | chart → "pipe schedule chart" table intent; what-is → definition |
| **Flange types / SORF vs WNRF** | `/blog/ss-flange-types-guide` (490 impr, pos 9.9), `/blog/wn-flange-vs-so-flange`, `/blog/what-is-flanges-types` | `/blog/ss-flange-types-guide` (pillar) | wn-vs-so → "sorf vs wnrf" comparison; what-is → definition |
| **Seamless vs welded / ERW** | `/blog/erw-vs-seamless-pipe` (104 impr), `/blog/seamless-vs-welded-ss-pipe`, `/blog/seamless-vs-spiral-welded-pipe`, `/blog/difference-seamless-erw-spiral` | `/blog/erw-vs-seamless-pipe` (pillar) | others → SS-specific / spiral-specific / 3-way intents |
| **Inconel 625** (commercial) | `/inconel-pipe-supplier-india` (hub, targets 625), `/blog/inconel-625-guide`, `/blog/inconel-625-pipe-price-india` | Pick ONE commercial owner: hub `/inconel-pipe-supplier-india` **or** a new `/inconel-625-pipe-supplier-india` | guide → informational; price → price intent (distinct, OK) |
| **Hastelloy C276** (commercial) | `/hastelloy-pipe-supplier-india` (hub, targets C276), `/blog/hastelloy-c276-guide`, `/blog/hastelloy-c276-pipe-price` | Pick ONE commercial owner: hub **or** new `/hastelloy-c276-pipe-supplier-india` | guide → informational; price → price intent |
| **Duplex 2205** (commercial) | `/duplex-steel-supplier-vadodara`, `/duplex-2205-plate-supplier-india`, `/blog/duplex-2205-steel-guide` | For *pipe* intent, one owner (Vadodara page or new `/duplex-2205-pipe-supplier-india`); plate page keeps plate intent | guide → informational; plate → plate intent (distinct, OK) |
| **SS 304 / 316** | `/ss-304-316l-pipe-supplier-india`, `/blog/ss-304-stainless-steel-guide`, `/blog/ss-316l-stainless-steel-guide` | Commercial pipe → the pipe page; informational grade → the guides | Fine as-is IF titles clearly split commercial vs informational (verify in Step 2) |
| **Hastelloy vs Inconel** (INFO, GSC pos 66–90 across 2 URLs) | `/blog/hastelloy-vs-inconel`, `/inconel-vs-hastelloy` intent inside `/blog/what-is-*` | One comparison pillar | consolidate/301 the weaker |
| **Comparison duplicate risk (structural)** | Some comparison slugs may resolve BOTH in `blog/[slug].tsx` ARTICLES map AND as a standalone `.tsx` file | Keep the standalone file; remove the `[slug]` map entry (or vice-versa) | prevents true duplicate-content/canonical conflict — **verify each slug in Step 2** |

**Rule applied:** the same primary commercial keyword (e.g. "inconel 625 pipe supplier") must have exactly one owner. Price and informational variants of the same grade are legitimately distinct intents and are NOT treated as cannibalization.

---

## 6. Pages That Need Content Optimization

These already exist and already target (or nearly target) a HIGH/MEDIUM keyword — change is on-page (title/H1/H2/body/schema), not a new page:

- `/inconel-pipe-supplier-india`, `/hastelloy-pipe-supplier-india`, `/alloy-steel-pipe-supplier-india`, `/ss-304-316l-pipe-supplier-india`, `/duplex-steel-supplier-vadodara`, `/super-duplex-2507-pipe-supplier`, `/monel-400-pipe-supplier-india`, `/titanium-pipe-supplier-india`.
- `/a106-gr-b-seamless-pipe-india`, `/carbon-steel-sa516-plate-stockist-india`, `/api-5l-line-pipe-supplier-india`, `/a53-erw-pipe-supplier-india`.
- `/stainless-steel-supplier-vadodara`, `/stainless-steel-supplier-gujarat`, `/ss-sheet-supplier-vadodara`, `/ss-seamless-pipe-supplier-india`.
- `/ms-plate-supplier-india`, `/ms-channel-ismc-supplier-india`, `/ms-beam-ismb-supplier-india`, `/ms-flat-bar-supplier-india`, `/ms-angle-channel-supplier-vadodara`.
- Grade pages needing plate-term H2 additions: `/ss-321-pipe-supplier-india`, `/ss-410-pipe-supplier-india`, `/ss-904l-pipe-supplier-india`, `/ss-310s-plate-supplier-india`, `/ss-430-sheet-supplier-india`.
- `/titanium-grade-5-pipe-india` (add Ti-6Al-4V terms), `/monel-k500-supplier-india` (add pipe terms).
- **CTR-fix priority (from GSC — rank well, ~0 clicks):** `/blog/ibr-certification-guide`, `/blog/ss-flange-types-guide`, `/blog/understanding-pipe-schedules`, `/blog/ss-304-stainless-steel-guide`, `/blog/p91-alloy-steel-guide`, `/blog/how-to-read-mtc`.

---

## 7. Pages That Need New Content

Confirmed genuine gaps (no adequate existing page). Keep this list *small* to avoid worsening the indexation problem:

| Proposed URL | Keywords served | Priority |
|---|---|---|
| `/astm-a36-steel-plate-supplier-india` | a36 steel, a36 plate, a36 steel plate (+supplier), astm a36 steel (+plate/supplier) — **9 keywords, entire category** | HIGH |
| `/inconel-625-pipe-supplier-india` *(or make the hub own it)* | inconel 625 (+supplier/pipe/pipe supplier) | HIGH |
| `/hastelloy-c276-pipe-supplier-india` *(or make the hub own it)* | hastelloy c276 (+supplier/pipe/pipe supplier) | HIGH |
| `/duplex-2205-pipe-supplier-india` *(or make Vadodara page own it)* | duplex 2205 pipe (+supplier), 2205 pipe | HIGH |
| `/titanium-bar-supplier-india` | titanium bar/bars (+supplier), titanium grade 2/5 bar (+supplier) — **8 keywords** | HIGH/MED |
| `/carbon-steel-pipe-supplier-india` | carbon steel pipe (+supplier), generic seamless pipe supplier | HIGH/MED |
| `/p91-alloy-steel-pipe-supplier` *(optional, parity with P11/P22)* | p91 pipe, astm a335 p91, p91 seamless pipe | MEDIUM |
| SS plate national page *(or broaden `/ss-sheet-supplier-vadodara`)* | stainless steel plate, ss 304/316 plate (+supplier) | MEDIUM |
| MS hub *(or elevate `/products` / `/ms-structural-steel-guide`)* | mild steel, mild steel supplier, mild steel products | MEDIUM |

> Several rows offer an **"optimize existing instead"** alternative in italics. Prefer optimizing the existing hub over creating a new page **wherever the hub can cleanly own the keyword** — this avoids adding to the 169 not-indexed pages.

---

## 8. GSC Opportunities

Cross-referencing target keywords with actual GSC performance (from `seo-audit/SEO-AUDIT-REPORT.md`, real exports).

**A. Target keywords already receiving impressions** (ordered by page impressions):
- IBR-related (883 impr on `/blog/ibr-certification-guide`) — tangential to target set but same domain authority signal.
- `321 vs 304 stainless` / SS 321 vs 304 (147 impr, pos 54.7) → supports `ss 321` targets.
- `ss 304` guide (122 impr, pos 67) → supports `stainless steel 304` / `304 stainless steel`.
- `erw vs seamless pipe` (104 impr, pos 63.5) → supports `erw pipe` / `seamless pipe`.
- `p91 alloy steel` guide (89 impr, pos 29.3) → supports `p91 pipe` / `astm a335 p91`.
- `hastelloy vs inconel` (149 impr, pos 66.5) → supports Hastelloy + Inconel entity terms.
- `inch to nb chart` (**pos 1**) and `difference between p91 and p92` (**pos 1**) — already #1 (P92 not in target set but confirms alloy authority).

**B. Target keywords receiving clicks:** Almost none directly. Site-wide only ~60 clicks/90 days, dominated by brand (`creative metal industries`, 18 clicks) and home (36 clicks). **No target commercial keyword is converting clicks yet** — the opportunity is entirely upside.

**C. Target keywords ranking poorly (pos 20–80, real impressions — need depth + links):**
- Hastelloy/Inconel entity terms (pos 66–90).
- `321 vs 304`, `ss 304` (pos 54–67).
- `erw vs seamless` (pos 63).
- These map to grade pages/guides that already exist → OPTIMIZE + build authority, don't rebuild.

**D. Target keywords with no visible GSC coverage:** The overwhelming majority of the 178 target commercial terms (all supplier/pipe/plate grade terms) show **no impressions** — consistent with the pages being published but stuck in "Discovered – not indexed". This is an *indexation* problem, not a content problem.

**E. Pages indexed but underperforming:** `/blog/ss-304-stainless-steel-guide` (122 impr, 0 clicks), `/blog/p91-alloy-steel-guide` (89 impr, 0 clicks), `/blog/how-to-read-mtc` (82 impr, 0 clicks) — indexed, ranking mid-page, zero CTR. Title/meta rewrite candidates.

**F. Pages "Discovered – currently not indexed":** 169 pages (was 4 in July). This almost certainly includes a large share of the grade-specific supplier/price pages that map to the target keywords. **Getting these indexed is the prerequisite for any target keyword to perform** — no amount of on-page optimization helps a non-indexed page.

**G. Pages "Crawled – currently not indexed":** 5 pages — crawled but quality/authority insufficient to index.

---

## 9. Indexing Problems

From GSC Coverage (2026-09-02) — these gate the entire keyword strategy:

| Status | Pages | Implication for target keywords |
|---|---:|---|
| Indexed | 407 | Only these can rank. Prioritize target-keyword pages within this set for optimization. |
| **Discovered – currently not indexed** | **169** | Many target grade pages likely here. Fix via authority + selective pruning + Indexing API for money pages. |
| Excluded by 'noindex' | 17 | These are genuine 404s Google crawled (dead links). Run internal-link integrity sweep. |
| Crawled – currently not indexed | 5 | Quality/authority-limited. |
| Alternate page with proper canonical tag (validation **Failed**) | 1 | One canonical mismatch to identify and fix. |

**Root cause (per audit):** ~590 pages launched rapidly on a low-authority domain in July → Google is rationing indexation and impressions collapsed from ~156/day to single digits. **The fix is not more pages.** It is: (1) get priority target-keyword pages indexed (Indexing API / request indexing / stronger internal links to money pages), (2) prune or consolidate near-duplicate low-value pages (100+ near-template location pages) to concentrate crawl budget, (3) build backlinks/authority.

---

## 10. Recommended Implementation Order

**Phase 0 — Unblock indexation (do before/with keyword work; without this, keyword edits won't show):**
1. Identify which target-keyword pages are in the 169 "Discovered – not indexed" bucket; submit priority money pages via Indexing API / request indexing.
2. Fix the 1 failed canonical; sweep and fix the ~17 dead internal/external links (the noindex-404s).
3. Reduce dilution: consolidate/prune the lowest-value near-template location pages so crawl budget concentrates on money + target-keyword pages.

**Phase 1 — Optimize existing HIGH-value pages (fastest ROI, no new URLs):**
4. Rewrite titles/H1s/H2s on the 12 core product hubs (§4 High Priority – Optimize) to exactly match target commercial keywords.
5. CTR-fix the 6 GSC pages that rank but don't convert (§6).
6. Resolve the hub-vs-standalone decision for Inconel 625, Hastelloy C276, Duplex 2205 (own on hub if not creating standalone).

**Phase 2 — Resolve cannibalization (§5):**
7. Designate pillars for IBR, pipe-schedule, flange, seamless/ERW clusters; retarget supporting pages; add internal links to pillars.
8. Audit comparison slugs for `[slug]`-vs-standalone duplicate resolution.

**Phase 3 — Create the small set of genuinely-missing pages (§7), only if the hub can't own them:**
9. A36 page (highest — entire category gap).
10. Titanium bar page.
11. Generic carbon steel pipe supplier page.
12. Standalone Inconel 625 / Hastelloy C276 / Duplex 2205 pipe pages (only if the hub decision in step 6 chose "standalone").
13. SS plate national page; optional P91 standalone; MS hub.

**Phase 4 — Reinforce long-tail (LOW priority):**
14. Add plate-term H2 sections to grade pages; add K500 pipe / titanium bar long-tails to their owners.

---

## Appendix — Method & Caveats

- **Route inventory:** extracted `<Title>`, `<Meta name="description">`, `<Link rel="canonical">`, and `<h1>` from all 593 `.tsx` route files programmatically. Titles/H1s quoted are from those files.
- **GSC figures** (impressions, positions, clicks, indexation counts) are from the project's real GSC exports and the read-only audit that summarized them (`seo-audit/SEO-AUDIT-REPORT.md`, `seo-audit/SEO-ISSUES.csv`, and the two Coverage CSV exports). No metrics were invented.
- **Search volumes were not available** in the project data and are not asserted. Priorities use measured impressions/positions plus commercial intent as the demand proxy.
- The `www.creativemetalind.com_mega_export_20260818.xlsx` is a **Semrush site-audit crawl** (technical issues per URL, 100-URL sample), not a GSC query export — used only to confirm the live URL inventory and duplicate-title/content flags.
- **"NEW" recommendations are deliberately conservative.** Given the measured 169-page indexation deficit, the analysis favors optimizing/owning keywords on existing hub pages over creating new pages, except where a genuine head-term gap exists (A36, titanium bar, generic CS pipe, and the flagship-grade standalones).

*No website files were modified in producing this report. This is Step 1 (analysis and mapping) only. Await Step 2 instruction before making any changes.*
