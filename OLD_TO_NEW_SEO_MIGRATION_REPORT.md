# OLD → NEW SEO Migration Report

**Site:** https://www.creativemetalind.com
**Project:** `creative-metal-industries` (SolidStart / SolidJS + Vinxi, SSR, Vercel)
**Authoritative sources:** `SEARCHED_KEYWORDS_BY_METAL.txt` (182 keywords), `NEW_KEYWORD_URL_MAP.md`
**This pass:** OLD→NEW keyword-targeting migration. Runs BEFORE any new-page creation. Follows Batch 1 (10 commercial pages already optimized).
**Guardrails honored:** No visual/design change; exactly one `<h1>` per page; zero `<meta name="keywords">`; no fabricated business facts; technical terms/company/city/product names preserved; canonicals unchanged (self-referential); index,follow preserved; no page created/deleted/redirected/merged.

---

## 1. Old SEO strategy discovered
The site was built on a **volume-heavy, programmatic** strategy: ~594 pages across grade/form "money" pages, a large city/GIDC location set (100+ `steel-pipe-supplier-{city}`, `steel-supplier-{gidc}`, `ss-pipe-supplier-{city}`), a dense blog cluster, and legacy `<meta name="keywords">` stuffing on pages. Targets emphasized "grade + form + supplier India" long-tails, city modifiers, and certification/process entities (IBR, MTC, NACE, pipe schedule, flanges). This volume — launched over a short window on a low-authority domain — produced an **indexation deficit** (audit §16), the true bottleneck.

## 2. New SEO strategy
`SEARCHED_KEYWORDS_BY_METAL.txt` (182 keywords, 10 metal categories) is now the **only intentional PRIMARY SEO target set**. It is narrower and grade-intent-focused (grade head terms + generic metal head terms), not city long-tails. `NEW_KEYWORD_URL_MAP.md` assigns each keyword to exactly ONE owner URL (single-owner rule), clustering close variants. Most existing pages already cover the new keywords, so this is a **re-targeting / consolidation** exercise, not a build-out — with just 3 genuine new-page gaps.

## 3. Old keywords reassigned to NEW targets
Reassignment/broadening (mostly executed in Batch 1; classification finalized this pass):
- Generic **carbon steel plate (supplier)** → broadened onto `/carbon-steel-sa516-plate-stockist-india` (Batch 1 title/meta).
- **chrome moly** + **P91** cluster → owned on the alloy hub `/alloy-steel-pipe-supplier-india` (Batch 1 body/H2).
- **inconel 625** cluster → own-on-hub `/inconel-pipe-supplier-india` (Batch 1 H2).
- **hastelloy c276** cluster → own-on-hub `/hastelloy-pipe-supplier-india` (Batch 1 H2).
- **duplex 2205 pipe** cluster → own-on-hub `/duplex-steel-supplier-vadodara` (Batch 1 phrasing; Vadodara identity kept).
- Generic **monel pipe/supplier** → broadened onto `/monel-400-pipe-supplier-india` (Batch 1).
- Generic **stainless steel supplier** (national) → reinforced on `/stainless-steel-supplier-vadodara` (Batch 1).
- **carbon steel seamless pipe (supplier)** / bare **seamless pipe** → secondary on `/a106-gr-b-seamless-pipe-india` (Batch 1).
- Generic **mild steel supplier / products** → reassigned to `/products` as the MS commercial hub (documented; page left unchanged this pass).

## 4. Old keywords REMOVED from intentional targeting
- All legacy `<meta name="keywords">` targeting — **removed sitewide** (0 remain).
- The ~590-page city/GIDC head-term ambition as *primary* targets — **retired** (pages retained as SUPPORTING; not driving the new strategy).
- Keywords existing ONLY in old planning files (`ALL_KEYWORDS.txt`, `MASTER_KEYWORDS_LIST_590_PAGES.txt`, `TOP_100_KEYWORDS.txt`, `EFFECTIVE_KEYWORDS_*.txt`, `SEO_KEYWORD_PAGE_MAPPING.md`) — **obsolete-for-targeting** unless also in the new 182 (see `KEYWORD_SOURCE_OF_TRUTH.md`).

## 5. Pages retargeted (EDITED)
**This pass — 1 page edited:**
- `/blog/duplex-2205-steel-guide` — added ONE natural in-body contextual link to the primary commercial hub `/duplex-steel-supplier-vadodara` ("Duplex 2205 pipe supplier page"). It was the only new-cluster supporting guide lacking an in-body commercial link. Informational title/H1/intent unchanged; no design change.

**Prior (Batch 1) — 10 commercial pages edited (not re-edited here):** `/inconel-pipe-supplier-india`, `/hastelloy-pipe-supplier-india`, `/alloy-steel-pipe-supplier-india`, `/ss-304-316l-pipe-supplier-india`, `/duplex-steel-supplier-vadodara`, `/monel-400-pipe-supplier-india`, `/titanium-pipe-supplier-india`, `/a106-gr-b-seamless-pipe-india`, `/carbon-steel-sa516-plate-stockist-india`, `/stainless-steel-supplier-vadodara`. (See changelog.)

## 6. Pages retained (owner exists, no edit needed — Reuse)
Exact-match owners kept as-is: the 5 MS form pages, A106, API 5L, SA516, P11, P22, SS 304/316L pipe, Inconel 600/718, Incoloy 800/825, Hastelloy C22, Monel 400, Monel K500, Super Duplex 2507, Titanium Grade 2/5, A53 ERW, plus all "what is …" definition guides. (Full list in `OLD_TO_NEW_KEYWORD_MIGRATION.md` §A/§C.)

## 7. Pages marked SUPPORTING
- **All city/GIDC location pages** (100+) — local intent supporting clusters; left in place.
- **All new-cluster grade/comparison guides** already aligned (Inconel 625, Hastelloy C276, Super Duplex 2507, SS 304, SS 316L, carbon-steel-pipe, ERW-vs-seamless, P91, SA516, MS structural, Ti grade compare) — clean informational titles/H1s + existing commercial links; no conflict.
- **Grade pages flagged Optimize/Expand** (`ss-seamless`, `ss-sheet`, `ss-310s`, `ss-430`, `ss-321/410/904l`, `titanium-grade-5` Ti-6Al-4V, `monel-k500` pipe, `ss-321h/347h`, etc.) — their existing target IS the new target (no conflict); optional expansion deferred.
- Legit grade/product pages outside the new 182 (P5/P9/P92, A333, A358, A691, nickel-200/201, alloy-20, copper/cupro-nickel, incoloy-800h/800ht, specialty plates, SS tube/fitting/flange variants, boiler tube, TMT, API 5CT, etc.).
- Price/chart/spec/how-to/industry/project/FAQ blogs — distinct intents; kept.

## 8. Pages marked for REVIEW
- **`/blog/duplex-vs-super-duplex`** — both a standalone `.tsx` and a `[slug].tsx` ARTICLES map entry declare this slug. In SolidStart the static file wins, so there is **no live duplicate URL** (only the static page renders; the map entry is dead code). Flagged for later cleanup of the redundant map entry. No edit now (not a page operation; out of EDIT scope).
- **City/GIDC consolidation** — the dense location set is the main crawl-budget dilution source; any pruning/consolidation is a separate, carefully-reviewed indexation decision — not a keyword-migration edit.
- **CTR-fix blog metadata** (IBR pillar, flange types, pipe schedules, SS 304 guide, P91 guide, how-to-read-mtc) — metadata refresh candidates, deferred.

## 9. Blog changes
- 1 blog edited this pass: `/blog/duplex-2205-steel-guide` (added one contextual commercial link).
- No blog title/H1/meta retargeting was needed — the new-cluster guides were already built with clean informational intent and (except duplex-2205) already carried contextual commercial links. Editing them would be gratuitous and risk guardrail violations, so they were left unchanged.
- Cannibalization pillars (IBR, pipe schedule, flange, seamless/ERW, Hastelloy-vs-Inconel) — single owner documented; satellite metadata consolidation deferred.

## 10. Internal-link changes
- Added ONE in-body internal link: `/blog/duplex-2205-steel-guide` → `/duplex-steel-supplier-vadodara`, anchor "Duplex 2205 pipe supplier page" (varied, natural; blog→commercial).
- No existing valuable internal links were removed. No keyword blocks added. `RelatedPages.tsx` left unchanged.

## 11. Meta keyword cleanup (every file cleaned)
Goal: ZERO `<meta name="keywords">` sitewide — **achieved (verified count = 0)**. The legacy meta-keywords removal was carried out across the project (Batch 1 sweep covering the grade/blog pages the brief flagged — e.g. blog/duplex-2205-steel-guide, blog/erw-vs-seamless-pipe, blog/hastelloy-c276-guide, blog/inconel-625-guide, blog/ss-304-stainless-steel-guide, blog/ss-316l-stainless-steel-guide, blog/tmt-bars-guide, boiler-tube-supplier-india, carbon-steel-pipe-fittings-vadodara, copper-nickel-pipe-supplier-india, the cupro-nickel pages, and all others). This pass re-verified exhaustively via full-tree grep: **0 remaining** in `creative-metal-industries/src` across all `.tsx` and any file type. None was added anywhere. (The generated `.vercel/output` build artifacts are gitignored/regenerated and are not source; the source is authoritative.)

## 12. New 182-keyword coverage summary
Per `NEW_182_KEYWORD_COVERAGE_REPORT.md` (all 182):
- **COMPLETE: 121** — owner exists + target aligned.
- **PARTIAL: 41** — owner exists and matches; optional expansion only.
- **NEEDS PAGE: 20** — the 3 genuine gaps below.
- NEEDS CONTENT / NEEDS INTERNAL LINK / keyword-level REVIEW: **0**.
- **Total: 182** — none skipped.

## 13. Remaining gaps
3 genuine new-page gaps (20 keywords), documented for the subsequent build-out phase (this pass runs BEFORE new-page creation):
1. **A36 steel plate** → `/astm-a36-steel-plate-supplier-india` — 9 keywords, entire category has no page. NEEDS PAGE (HIGH).
2. **Titanium bar** → `/titanium-bar-supplier-india` — 8 keywords, titanium is pipe-only today. NEEDS PAGE (HIGH/MED).
3. **Generic carbon steel pipe / seamless** → `/carbon-steel-pipe-supplier-india` — 3 keywords, no non-grade CS-pipe owner. NEEDS PAGE (HIGH/MED).

Optional (not gaps): grade-page expansions (SS 321/410/904l plate sections, Ti-6Al-4V depth, Monel K500 pipe, P91 standalone), CTR-fix metadata, and city-page consolidation — all deferred, non-blocking.

---

**Verification (this pass):** `npm run build` succeeded (597 routes prerendered). `npm run sitemap` + `npm run check:sitemap` passed (597 URLs, unchanged; all checks OK). Full-tree grep confirms 0 `<meta name="keywords">`. Git diff self-review: only the one additive blog link changed by this pass; no style/layout/color/font/image changes; one `<h1>` per edited page; canonicals unchanged; no fabricated facts; no valuable content/links removed; city pages and unrelated blogs unchanged.
