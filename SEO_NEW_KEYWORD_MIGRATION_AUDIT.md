# SEO New-Keyword Migration Audit (Read-Only)

**Site:** https://www.creativemetalind.com
**Project:** `creative-metal-industries` (SolidStart / SolidJS + Vinxi, SSR, deployed on Vercel)
**Deliverable type:** Analysis / reporting only — no website files were created, edited, or deleted.
**New target keyword source:** `SEARCHED_KEYWORDS_BY_METAL.txt` (workspace root)
**Prior analysis reused:** `SEO_KEYWORD_PAGE_MAPPING.md` (workspace root)
**Companion deliverable:** `NEW_KEYWORD_URL_MAP.md` (per-keyword URL ownership table)

> **Scope guardrail:** This document analyzes the existing site against a new keyword set. It does **not** modify any route file, blog file, sitemap, robots, canonical, meta, UI, or configuration. It does not touch Google Search Console (GSC). It recommends no redirects, merges, or deletions. All Title/H1 values quoted below were read directly from the live route files in `creative-metal-industries/src/routes/`.

---

## 1. Total Number of Pages

The site is a large SolidStart route tree. Each indexable page is a `.tsx` route that self-declares `<Title>`, `<Meta name="description">`, `<Link rel="canonical">`, one `<h1>`, and JSON-LD (LocalBusiness / BreadcrumbList / FAQPage). Blog content is a mix of static `blog/*.tsx` files plus a dynamic `blog/[slug].tsx` (ARTICLES map).

| Metric | Count | Source |
|---|---:|---|
| Total pages (approx.) | **~594** | Route inventory (`src/routes/*.tsx` + blog static + `[slug]` articles) |
| **Indexed** | **~407** | GSC Coverage (late Aug 2026) |
| **Not indexed** | **~192** | GSC Coverage — dominated by "Discovered – currently not indexed" (~169), plus "Crawled – not indexed" (~5), noindex/404 (~17), and 1 canonical-validation-failed |

**Key finding:** every indexable product/blog route already carries `<Meta name="robots" content="index, follow, max-image-preview:large">`. There are **no accidental `noindex` pages** — the only intentional `noindex` responses are the 404 handler (`[...404].tsx`) and the blog unknown-slug fallback. Therefore the per-keyword "current URL status" in the companion map reflects **indexation state (from GSC)**, not a robots/noindex misconfiguration.

**The core problem is an INDEXATION DEFICIT, not missing content.** Impressions collapsed from roughly 156/day (mid-July 2026) to single digits after ~590 pages launched over a short window on a low-authority domain. Google is rationing indexation for the page volume.

---

## 2. Existing SEO Page Categories

The route tree divides into these functional categories (verified from `src/routes/`):

**A. Product / supplier pages (grade- and form-specific "money" pages)**
- Mild steel structural: `ms-plate-supplier-india`, `ms-angle-channel-supplier-vadodara`, `ms-channel-ismc-supplier-india`, `ms-beam-ismb-supplier-india`, `ms-flat-bar-supplier-india`.
- Carbon steel: `a106-gr-b-seamless-pipe-india`, `a53-erw-pipe-supplier-india`, `api-5l-line-pipe-supplier-india`, `carbon-steel-sa516-plate-stockist-india`, `carbon-steel-pipe-fittings-vadodara`, `a333-low-temp-pipe-supplier`, `boiler-tube-supplier-india`.
- Alloy / chrome-moly: `alloy-steel-pipe-supplier-india` (hub), `p11-…`, `p22-…`, `p5-…`, `p9-…`, `p92-alloy-steel-pipe-supplier`, `sa-387-alloy-plate-supplier-india`. (No standalone P91 page.)
- Stainless: `ss-304-316l-pipe-supplier-india`, `ss-310-pipe-supplier-india`, `ss-310s-plate-supplier-india`, `ss-321-pipe-supplier-india`, `ss-347-pipe-supplier-india`, `ss-410-pipe-supplier-india`, `ss-430-sheet-supplier-india`, `ss-904l-pipe-supplier-india`, `ss-seamless-pipe-supplier-india`, `ss-sheet-supplier-vadodara`, plus many SS tube/fitting/flange/bar variants.
- Duplex / super duplex: `duplex-steel-supplier-vadodara`, `duplex-2205-plate-supplier-india`, `duplex-2205-fittings-supplier-india`, `duplex-2205-flanges-supplier-india`, `super-duplex-2507-pipe-supplier` (+ 2507 fittings/flanges). (No standalone Duplex 2205 *pipe* page.)
- Nickel alloys: `inconel-pipe-supplier-india` (hub), `inconel-600-…`, `inconel-718-…`, `incoloy-800-…`, `incoloy-800h-…`, `incoloy-800ht-…`, `incoloy-825-…`; `hastelloy-pipe-supplier-india` (hub), `hastelloy-c22-…`, `hastelloy-b2-…`; `monel-400-pipe-supplier-india`, `monel-k500-supplier-india`; `nickel-200-…`, `nickel-201-…`, `alloy-20-…`, `copper-nickel-…`, `cupro-nickel-…`. (No standalone Inconel 625 or Hastelloy C276 page.)
- Titanium: `titanium-pipe-supplier-india` (hub), `titanium-grade-2-pipe-india`, `titanium-grade-5-pipe-india`. (No titanium *bar* page.)
- Specialty plate: `clad-plate-supplier-india`, `corten-steel-plate-supplier-india`, `hardox-wear-plate-supplier-india`, `sail-hard-plate-supplier-india`, `nace-hic-steel-plate-supplier-india`.

**B. Specification / standard pages** — grade pages doubling as spec landings (e.g. `a106-gr-b-…` = ASTM A106, `api-5l-line-pipe-…` = API 5L, `carbon-steel-sa516-…` = SA 516, `p11/p22/p92` = ASTM A335).

**C. City / location pages (near-template)** — a large set: `ss-pipe-supplier-{ahmedabad,baroda,mumbai,pune,surat,rajkot,vadodara,…}`, `steel-pipe-supplier-{delhi,chennai,kolkata,hyderabad,…}`, `steel-supplier-{bharuch,dahej,indore,…-gidc}`, etc. These are the primary crawl-budget dilution source.

**D. Blog / content** (`blog/`), sub-grouped as seen in `CONTENT_PAGES/` and the blog route:
- Prices/charts (e.g. price-per-kg guides, `ss-pipe-weight-chart`).
- Comparisons (`ss-304-vs-317l`, `api-5l-psl1-vs-psl2`, `buttweld-vs-forged`, `socket-weld-vs-threaded`, `sch-40-vs-sch-80`, `seamless-vs-welded`, `erw-vs-seamless`, `hastelloy-vs-inconel`, etc.).
- Specification / grade guides (`inconel-625-guide`, `hastelloy-c276-guide`, `duplex-2205-steel-guide`, `super-duplex-2507-guide`, `p91-alloy-steel-guide`, `sa-516-carbon-steel-plate-guide`).
- Industry pages (`refinery-`, `power-plant-`, `pharma-`, `oil-gas-pipe-supplier-india`).
- Informational "what is" entity guides (`what-is-mild-steel`, `what-is-carbon-steel`, `what-is-alloy-steel`, `what-is-stainless-steel`, `what-is-duplex-stainless-steel`, `what-is-inconel-alloy`, `what-is-hastelloy`, `what-is-monel-alloy`, `what-is-titanium-alloy`, `what-is-ibr-certification`, `what-is-mtc-mill-test-certificate`, etc.).
- Misc (utility/FAQ/how-to such as `how-to-read-mtc`, `understanding-pipe-schedules`).

**E. Non-SEO / functional pages** — `index`, `about`, `products`, `reviews`, `metal-trading`, `sitemap`, `privacy-policy`, `terms`, `admin/`, `api/`, and the `[...404]` handler.

---

## 3. Existing Target Keywords (the OLD strategy)

The current pages were built around an earlier keyword strategy captured in the root keyword files (`ALL_KEYWORDS.txt` and the per-page target comments inside each route's header docblock). That old strategy emphasized:

- **Grade + form + "supplier India"** long-tails (e.g. "A106 Gr B seamless pipe India", "MS plate IS 2062 supplier India", "Monel 400 pipe supplier India", "titanium Grade 2 pipe").
- **City / GIDC location** modifiers at very high volume (100+ `…-supplier-{city}` and `steel-supplier-{gidc}` pages) — a programmatic local-SEO play.
- **Certification / process entity** terms (IBR, MTC, NACE, pipe schedule, flange types) via a dense blog cluster.

The old strategy is **content-complete but volume-heavy**: it produced ~590 pages, which is precisely what triggered the indexation deficit. The new keyword set (Section 4) is *narrower and grade-intent-focused*, so most old pages already cover the new keywords — the migration is largely a **re-targeting / consolidation** exercise, not a build-out. Reference: `SEO_KEYWORD_PAGE_MAPPING.md` §2–§3 and the root keyword `.txt` files.

---

## 4. New Target Keywords

Source: `SEARCHED_KEYWORDS_BY_METAL.txt` — **182 keyword lines across 10 metal categories** (verified exact count; the "~185" estimate was rounded). Summary with counts:

| # | Category | Keyword lines | Dominant intent mix |
|---|---|---:|---|
| 1 | Mild Steel (MS) | 15 | Product + commercial (plate/angle/channel/beam/flat bar) |
| 2 | Carbon Steel | 22 | Product/spec (A106, API 5L, SA516, ERW, seamless) + commercial |
| 3 | Alloy Steel (Chrome-Moly) | 18 | Spec/product (A335 P11/P22/P91) + commercial + chrome-moly generic |
| 4 | Stainless Steel | 30 | Grade/product (304/316/316L/321/310/410/430/904L) — pipe & plate |
| 5 | Duplex / Super Duplex | 14 | Grade/product (2205, 2507) + commercial |
| 6 | Inconel | 24 | Grade/product (600, 625, 718, Incoloy 800/825) + commercial |
| 7 | Hastelloy | 14 | Grade/product (C276, C22) + commercial |
| 8 | Monel | 13 | Grade/product (400, K500) + commercial |
| 9 | Titanium | 21 | Grade/product (Gr2, Gr5/Ti-6Al-4V) + **bar** (gap) + commercial |
| 10 | A36 (Structural Carbon Steel) | 11 | Product/spec + commercial — **entire category, no page** (incl. 2 A516 terms) |
| | **Total** | **182** | |

The new set leans heavily on **grade head terms** (e.g. "inconel 625", "hastelloy c276", "duplex 2205", "ss 304 plate") and **generic metal head terms** ("carbon steel pipe", "stainless steel", "titanium bar") rather than city long-tails. Per-keyword ownership is mapped fully in `NEW_KEYWORD_URL_MAP.md`.

---

## 5. Keyword Conflicts (New vs Old Targeting Overlaps)

Where the new keyword set pulls a page toward a target different from what it was originally built for:

| New keyword intent | Old page target | Conflict / overlap | Resolution direction |
|---|---|---|---|
| Generic "carbon steel pipe / supplier" | `a106-gr-b-seamless-pipe-india` was built for the **A106 Grade B** spec long-tail | New generic head term has no clean owner; A106 page is spec-specific | Own generic term on a broadened CS page or a small new generic CS pipe page (Section 11) |
| "carbon steel plate / supplier" | `carbon-steel-sa516-plate-stockist-india` was built for **SA 516 stockist** | New generic head term is broader than SA 516 | Broaden the SA516 page's H2/body to also own "carbon steel plate supplier" |
| "chrome moly pipe" | `alloy-steel-pipe-supplier-india` targets **P91/P22/P11** by name (Title: "Alloy Steel Pipe Supplier India \| P91 P22 P11 \| IBR \| CMI") | "chrome moly" not in title today | Add chrome-moly terms to the alloy hub |
| "inconel 625 …" | `inconel-pipe-supplier-india` hub covers 600/625/718 collectively (Title: "Inconel Pipe Supplier India \| 625, 600, 718 \| CMI Vadodara") | 625 is a flagship grade with no standalone owner | Hub owns 625, OR a small standalone (Section 11) |
| "hastelloy c276 …" | `hastelloy-pipe-supplier-india` hub covers C-276/C-22/B-2 (Title: "Hastelloy Pipe Supplier India \| C-276, C-22, B-2 \| CMI") | C276 flagship with no standalone owner | Hub owns C276, OR a small standalone |
| "duplex 2205 pipe …" | `duplex-steel-supplier-vadodara` is a *location* page also carrying alloy/P91 content; `duplex-2205-plate-…` is plate-only | 2205 *pipe* intent is split and city-scoped | One national owner for 2205 pipe intent |
| "stainless steel / supplier" (generic) | `stainless-steel-supplier-vadodara` / `-gujarat` are **city** pages | Generic national head term has no national owner | Own on one SS supplier page (broaden to India) |
| "ss 304/316 plate" | `ss-304-316l-pipe-supplier-india` is **pipe** intent; `ss-sheet-supplier-vadodara` is sheet/city | New "plate" grade terms have no product owner | Broaden a SS sheet/plate page to national plate |
| "mild steel / supplier / products" (generic) | Five MS pages are **form-specific** (plate/angle/channel/beam/flat bar) | Generic MS head terms have no hub | Elevate `products` or one MS page as the MS hub owner |
| "monel / supplier / pipe" (generic) | `monel-400-pipe-supplier-india` targets **Monel 400** specifically | Generic monel head terms have no hub | Broaden the 400 page to own generic monel |
| "titanium bar …" | Titanium pages are **pipe**-only | New bar terms have no page at all | New titanium bar page (Section 11) |

These are **targeting overlaps**, not technical duplicate-content errors. The resolution is re-assignment/optimization on existing hubs wherever possible — see Sections 6–11.

---

## 6. Existing Keyword Cannibalization

Reused from `SEO_KEYWORD_PAGE_MAPPING.md` §5. Each cluster has more than one existing page competing for the same primary term; the recommended fix designates ONE canonical owner and re-scopes the others to distinct intents (no forced separate targeting, no deletions here).

| Cluster | Competing pages | Recommended single owner | Others become |
|---|---|---|---|
| **IBR certification** | `/blog/ibr-certification-guide` (~883 impr, pos ~16), `/blog/what-is-ibr-certification`, `/blog/ibr-form-iiic-complete-guide`, `/blog/why-ibr-certification-mandatory` | `/blog/ibr-certification-guide` (pillar) | definition / Form III-C / FAQ long-tails linking to pillar |
| **Pipe schedule** | `/blog/understanding-pipe-schedules` (~269 impr, pos ~16), `/blog/pipe-schedule-chart`, `/blog/what-is-pipe-schedule` | `/blog/understanding-pipe-schedules` (pillar) | chart-table intent / definition |
| **Flange types (SORF vs WNRF)** | `/blog/ss-flange-types-guide` (~490 impr, pos ~9.9), `/blog/wn-flange-vs-so-flange`, `/blog/what-is-flanges-types` | `/blog/ss-flange-types-guide` (pillar) | comparison / definition |
| **Seamless vs welded / ERW** | `/blog/erw-vs-seamless-pipe` (~104 impr), `/blog/seamless-vs-welded-ss-pipe`, `/blog/seamless-vs-spiral-welded-pipe`, `/blog/difference-seamless-erw-spiral` | `/blog/erw-vs-seamless-pipe` (pillar) | SS-specific / spiral-specific / 3-way |
| **Inconel 625 (commercial hub-vs-standalone)** | `/inconel-pipe-supplier-india` (hub targets 625), `/blog/inconel-625-guide`, `/blog/inconel-625-pipe-price-india` | Pick ONE commercial owner: hub **or** new `/inconel-625-pipe-supplier-india` | guide → informational; price → price intent |
| **Hastelloy C276 (commercial hub-vs-standalone)** | `/hastelloy-pipe-supplier-india` (hub targets C-276), `/blog/hastelloy-c276-guide`, `/blog/hastelloy-c276-pipe-price` | Pick ONE commercial owner: hub **or** new `/hastelloy-c276-pipe-supplier-india` | guide → informational; price → price intent |
| **Duplex 2205 (commercial)** | `/duplex-steel-supplier-vadodara`, `/duplex-2205-plate-supplier-india`, `/blog/duplex-2205-steel-guide` | For *pipe* intent, one owner (Vadodara page or new `/duplex-2205-pipe-supplier-india`); plate page keeps plate intent | guide → informational; plate → plate intent |
| **SS 304 / 316** | `/ss-304-316l-pipe-supplier-india`, `/blog/ss-304-stainless-steel-guide`, `/blog/ss-316l-stainless-steel-guide` | commercial pipe → the pipe page; informational grade → the guides | fine as-is IF titles split commercial vs informational |
| **Hastelloy vs Inconel (info)** | `/blog/hastelloy-vs-inconel` + inconel-vs-hastelloy intent in `what-is-*` | one comparison pillar | consolidate the weaker |
| **`[slug]`-vs-standalone duplicate risk** | some comparison slugs may resolve BOTH via `blog/[slug].tsx` ARTICLES map AND a standalone `.tsx` | keep the standalone; remove the `[slug]` map entry (or vice-versa) | prevents true duplicate/canonical conflict — verify each slug |

**Rule applied:** the same primary commercial keyword must have exactly one owner. Price and informational variants of the same grade are legitimately distinct intents and are NOT treated as cannibalization.

---

## 7. Pages That Can Be Reused (as-is)

These already own their new-keyword target with a matching Title/H1 (verified). Only trivial reinforcement, no structural change:

- `ms-plate-supplier-india` — Title "MS Plate IS 2062 Supplier India | CMI" → owns "ms plate", "ms plate supplier", "mild steel plate".
- `ms-channel-ismc-supplier-india`, `ms-beam-ismb-supplier-india`, `ms-flat-bar-supplier-india` — own their MS form terms.
- `a106-gr-b-seamless-pipe-india` — Title "A106 Gr.B Seamless Pipe India | ASTM A106 Grade B | CMI" → owns "astm a106 pipe", "a106 pipe", "a106 seamless pipe".
- `api-5l-line-pipe-supplier-india`, `a53-erw-pipe-supplier-india` — own "api 5l pipe", "erw pipe".
- `carbon-steel-sa516-plate-stockist-india` — Title "SA 516 Plate Stockist India | Gr.60/70 | CMI" → owns "sa516 grade 70 plate".
- `p11-alloy-steel-pipe-supplier`, `p22-alloy-steel-pipe-supplier` — own "p11 pipe", "p22 pipe", A335 variants.
- `ss-304-316l-pipe-supplier-india` — H1 "SS 304 & SS 316L Pipe Supplier in India" → owns "ss 304 pipe", "ss 316 pipe" (+ supplier).
- `inconel-600-pipe-supplier-india`, `inconel-718-supplier-india`, `incoloy-800-pipe-supplier-india`, `incoloy-825-pipe-supplier-india` — own their grade terms.
- `hastelloy-c22-pipe-supplier-india`, `hastelloy-b2-pipe-supplier-india` — own C22 / B2 terms.
- `monel-400-pipe-supplier-india` — Title "Monel 400 Pipe Supplier India | UNS N04400 | ASTM B165 | CMI" → owns "monel 400" (+ supplier/pipe).
- `monel-k500-supplier-india` — owns "monel k500" (+ supplier).
- `super-duplex-2507-pipe-supplier` — H1 "Super Duplex 2507 Pipe Stockist in India — S32750" → owns "super duplex 2507" (+ pipe/supplier), "2507 pipe".
- `titanium-grade-2-pipe-india`, `titanium-grade-5-pipe-india` — own "titanium grade 2/5" (+ supplier).
- Informational "what is …" blogs — own their entity/definition terms.

---

## 8. Pages That Need Optimization

Already exist and already (nearly) target a HIGH/MEDIUM new keyword; the change is on-page **title/H1/H2/body/schema**, no new URL:

- `inconel-pipe-supplier-india` — explicitly own the "inconel 625 pipe supplier" cluster (or spin standalone — Section 11).
- `hastelloy-pipe-supplier-india` — explicitly own "hastelloy c276 pipe supplier" (or spin standalone).
- `alloy-steel-pipe-supplier-india` — add "chrome moly" + strengthen P91 targeting (currently P91/P22/P11 in title).
- `ss-304-316l-pipe-supplier-india` — reinforce "ss 304" / "ss 316" head terms and grade-supplier variants.
- `duplex-steel-supplier-vadodara` — own "duplex 2205 pipe / supplier" (or spin standalone).
- `monel-400-pipe-supplier-india` — extend to generic "monel pipe supplier".
- `titanium-pipe-supplier-india` — reinforce "titanium supplier" head terms.
- `a106-gr-b-seamless-pipe-india` — own "carbon steel seamless pipe supplier".
- `carbon-steel-sa516-plate-stockist-india` — broaden to own "carbon steel plate supplier".
- `stainless-steel-supplier-vadodara` / `stainless-steel-supplier-gujarat` — own "stainless steel supplier".
- `ss-sheet-supplier-vadodara` — broaden to national "SS plate & sheet supplier".
- Grade plate reinforcement: `ss-310s-plate-supplier-india`, `ss-430-sheet-supplier-india`.
- CTR-fix candidates (rank well, ~0 clicks per GSC): `/blog/ibr-certification-guide`, `/blog/ss-flange-types-guide`, `/blog/understanding-pipe-schedules`, `/blog/ss-304-stainless-steel-guide`, `/blog/p91-alloy-steel-guide`, `/blog/how-to-read-mtc`.

---

## 9. Pages That Need Expansion

Existing pages that own the *grade* but not a secondary *form/term* the new set adds — expand with an H2 section rather than a new page:

- `ss-321-pipe-supplier-india` — add "ss 321 plate" section (currently pipe-only).
- `ss-410-pipe-supplier-india` — add "ss 410 plate" section (currently pipe-only).
- `ss-904l-pipe-supplier-india` — add "ss 904l plate" section (currently pipe-only).
- `ss-310-pipe-supplier-india` / `ss-310s-plate-supplier-india` — reconcile so "ss 310 plate" has a clean section.
- `titanium-grade-5-pipe-india` — expand Ti-6Al-4V / "ti-6al-4v" and "grade 5 titanium" coverage (page already references R56400/Ti-6Al-4V).
- `monel-k500-supplier-india` — expand to cover "monel k500 pipe" (page is bar/rod-focused today).
- `alloy-steel-pipe-supplier-india` — expand P91-specific section (parity with P11/P22 depth) so it can own "p91 pipe" / "astm a335 p91" if a standalone is not created.

---

## 10. Pages That Should NOT Be Changed

Explicitly out of scope for any edit in a later phase (protect stability / avoid regressions):

- Functional/legal/system pages: `index`, `about`, `products`, `reviews`, `metal-trading`, `sitemap`, `privacy-policy`, `terms`, `admin/*`, `api/*`, `[...404]`.
- The intentional `noindex` behaviors (404 handler, blog unknown-slug fallback) — correct as-is.
- Pages already ranking / receiving impressions where the Title already matches intent (e.g. the IBR pillar's core content) — content stays; only meta/CTR wording is a candidate, not structure.
- The dense city/location page set — do NOT bulk-edit; any consolidation is a separate, carefully-reviewed indexation decision (Section 16), not a keyword-migration edit.
- All UI/design, styling, and JSON-LD structure — unchanged.

---

## 11. New Pages Genuinely Required (Keep Small)

Given the measured indexation deficit, new pages are deliberately minimal. Prefer "own on existing hub" over "new" wherever the hub can cleanly own the term.

| Proposed page | Why genuinely needed | New vs own-on-hub | Priority |
|---|---|---|---|
| **A36 steel plate page** (e.g. `/astm-a36-steel-plate-supplier-india`) | Entire A36 category has **no page anywhere** — the single largest gap (9 keywords) | **New** (unavoidable) | HIGH |
| **Titanium bar page** (e.g. `/titanium-bar-supplier-india`) | Titanium is pipe-only today; bar terms (Gr2/Gr5/Ti-6Al-4V bar) have no page (8 keywords) | **New** | HIGH/MED |
| **Generic carbon steel pipe supplier** (e.g. `/carbon-steel-pipe-supplier-india`) | Generic "carbon steel pipe supplier" + generic "seamless pipe supplier" have no non-grade owner | **New (small)** — or broaden A106 page | HIGH/MED |
| **Inconel 625** | Flagship Inconel grade, no standalone | **Recommended: own on the `inconel-pipe-supplier-india` hub** (hub already lists 625). Create standalone only if depth demands it. | HIGH |
| **Hastelloy C276** | Flagship Hastelloy grade, no standalone | **Recommended: own on the `hastelloy-pipe-supplier-india` hub** (hub already lists C-276). Standalone optional. | HIGH |
| **Duplex 2205 pipe** | 2205 pipe intent split across city + plate pages | **Recommended: own on `duplex-steel-supplier-vadodara`** (broaden to national), or standalone for 2507 parity | HIGH |
| **P91 (optional)** | P11/P22 have standalones; P91 does not | **Optional** — expand alloy hub instead unless standalone parity is desired | MEDIUM |
| **SS plate national** | No dedicated SS 304/316 plate product page | **Recommended: broaden `ss-sheet-supplier-vadodara`** rather than new | MEDIUM |
| **MS hub** | Generic mild steel head terms have no hub | **Recommended: elevate `products`** rather than new | MEDIUM |

**Net genuinely-new pages recommended: 3 (A36, titanium bar, generic CS pipe).** The four flagship-grade items are best resolved by "own on hub" first.

---

## 12. Existing Pages That Are Thin

Pages likely to be judged thin/low-value (contributing to the not-indexed bucket) and therefore poor keyword owners without expansion:

- The **near-template city/location pages** (`ss-pipe-supplier-{city}`, `steel-pipe-supplier-{city}`, `steel-supplier-{gidc}`) — high count, low differentiation; primary crawl-budget dilution and the likeliest occupants of "Discovered – not indexed".
- Grade pages that are pipe-only but targeted by plate terms (`ss-321`, `ss-410`, `ss-904l`) are thin *for the plate intent* until expanded (Section 9).
- `monel-k500-supplier-india` is thin for the "K500 pipe" intent (bar-focused).
- Some price/comparison blogs are short and overlap heavier guides (candidates to fold under pillars — Section 6).

---

## 13. Pages With Duplicate Intent

- **Hub vs standalone grade duplication:** Inconel 625, Hastelloy C276, Duplex 2205 pipe intent lives on both a hub/city page and blog guides (Section 6). Designate one commercial owner each.
- **`blog/[slug].tsx` vs standalone `.tsx`:** any comparison slug present in BOTH the ARTICLES map and as a static file is a genuine duplicate-URL/canonical risk — verify per slug before any change.
- **City-page overlap:** multiple `ss-pipe-supplier-{city}` and `steel-supplier-{gidc}` pages target near-identical intent differentiated only by city token — the classic programmatic-duplicate pattern.
- **SS 304/316:** commercial pipe page vs the 304/316L guides — acceptable only if titles clearly split commercial vs informational.

---

## 14. Pages With Weak Internal Linking

- **Flagship grades with no standalone** (Inconel 625, Hastelloy C276) rely on hub mentions; they lack a dedicated inbound-link target, weakening topical signals — a factor in poor indexation of the related blog guides.
- **Grade plate intents** (ss 321/410/904l plate) have no internal anchor pointing at a "plate" section.
- **Money pages buried under city pages** — crawl equity is spread thin across ~100+ location pages instead of concentrated on grade/product hubs. Strengthening internal links from high-authority pages (home, `products`, pillars) to the priority money pages is a prerequisite for getting them indexed (Section 16).
- **Blog pillars** (IBR, pipe schedule, flange, seamless/ERW) need consistent internal links FROM their satellite pages TO the designated pillar (Section 6).

---

## 15. Pages With Poor SEO Metadata (CTR-fix candidates)

Pages that GSC shows ranking with real impressions but ~0 clicks — the Title/meta does not match query intent (rewrite candidates, no structural change):

- `/blog/ibr-certification-guide` — high impressions (~883), position ~16, negligible clicks.
- `/blog/ss-flange-types-guide` — ~490 impr, pos ~9.9, low CTR.
- `/blog/understanding-pipe-schedules` — ~269 impr, pos ~16.
- `/blog/ss-304-stainless-steel-guide` — ~122 impr, 0 clicks.
- `/blog/p91-alloy-steel-guide` — ~89 impr, 0 clicks.
- `/blog/how-to-read-mtc` — ~82 impr, 0 clicks.

(Impression/position figures are from the project's prior GSC-based audit as summarized in `SEO_KEYWORD_PAGE_MAPPING.md` §6/§8; no metrics were invented.)

---

## 16. Pages With Indexing Problems

From the GSC coverage trend (late Aug 2026): **~407 indexed vs ~192 not indexed**, of which the largest bucket is **~169 "Discovered – currently not indexed"** (up from ~4 in late July), plus ~5 "Crawled – not indexed", ~17 noindex/404 (dead links Google crawled), and 1 "Alternate page with proper canonical (validation failed)".

**Root cause:** roughly 590 pages launched over a short window in July 2026 on a **low-authority domain**. Google is rationing indexation and crawl budget for that volume, so impressions collapsed from ~156/day (mid-July) to single digits. Many grade/product pages that map to the new keywords are published but stuck in the "Discovered – not indexed" bucket — **no amount of on-page optimization helps a page Google has not indexed.**

**The fix is indexation + consolidation, not more pages:**
1. Identify which priority money/keyword pages sit in the ~169 not-indexed bucket; request indexing / submit via the Indexing API for the priority set.
2. Fix the 1 failed-canonical page and sweep the ~17 dead internal/external links.
3. Reduce dilution by consolidating/pruning the lowest-value near-template city pages so crawl budget concentrates on grade/product hubs (a separate, carefully-reviewed decision — not part of this read-only audit).
4. Build domain authority (backlinks) — the ceiling on how many pages Google will index.
5. Only then does keyword re-targeting (Sections 8–9) surface in results.

---

## Explicit Note

**No website files were modified in producing this report.** This is analysis only. It creates no route, blog, sitemap, robots, canonical, or meta changes; it does not change UI/design; it does not add meta keywords; and it does not touch Google Search Console. GSC keywords cannot be added manually, and search rankings cannot be guaranteed — indexation and authority gate all keyword performance.

No website files were modified. This is analysis/mapping only (read-only). Await review before any page edits.
