# Creative Metal Industries — SEO Action Plan & Roadmap

**Companion to:** `SEO-AUDIT-REPORT.md` and `SEO-ISSUES.csv`
**Date:** 7 September 2026

> **Guiding insight from the data:** the site is *technically healthy* but suffers a measured **indexation + authority deficit** (169/592 pages "Discovered – not indexed") and is **leaving clicks on the table** (well-ranked pages with ~0 CTR). The highest-leverage work is *not* more pages or more tech — it is **consolidation, query-level optimisation, and authority building**. This is legitimate white-hat SEO only: no doorway pages, no link schemes, no cloaking.

---

## Priority Roadmap

### P0 — Fix Immediately (indexation, quality, measured wins)

| # | Task | Files / Pages | Reason | SEO impact | Perf impact | Difficulty | Dependencies |
|---|---|---|---|---|---|---|---|
| P0-1 | **Stop adding pages; freeze the page count.** Do not launch more location/blog templates until indexation recovers. | `app.config.ts` prerender list | 169 pages already unindexed; more dilutes further. | High | None | Low | Management buy-in |
| P0-2 | **Consolidate the IBR cluster** into one pillar + retarget/301 the rest. | `blog/ibr-certification-guide.tsx`, `what-is-ibr-certification.tsx`, `ibr-form-iiic-complete-guide.tsx`, `why-ibr-certification-mandatory.tsx` | Cannibalisation across pos 10–35; 883-impression page underperforms. | High | None | Medium | None |
| P0-3 | **Rewrite titles/metas on the top-10 impression pages** to match actual queries (see Before→After below). | `ibr-certification-guide`, `ss-flange-types-guide`, `understanding-pipe-schedules`, home | ~0 CTR on pos 7–16 pages = immediate clicks available. | High | None | Low | GSC query list |
| P0-4 | **Prune/consolidate low-demand near-template location pages.** Keep Vadodara belt + top hubs; `noindex` or merge the long tail until authority grows. | `steel-supplier-*.tsx`, `sitemap-locations.xml`, `app.config.ts` | Reduces near-duplicate density that triggers selective indexing. | High | Positive (crawl budget) | High | P0-1 |
| P0-5 | **Verify GA4 + GSC env vars are set in Vercel** (`VITE_GA4_ID`, `VITE_GSC_VERIFICATION`). | Vercel env / `app.tsx` | Tags are omitted entirely if unset → no analytics/verification. | Med (measurement) | None | Low | Vercel access |

### P1 — Fix Next (high-impact SEO)

| # | Task | Files / Pages | Reason | SEO impact | Perf impact | Difficulty | Dependencies |
|---|---|---|---|---|---|---|---|
| P1-1 | **Authority/backlink programme** for money pages (Vadodara/Gujarat supplier + top guides). Legitimate outreach, directories (IndiaMART/JustDial already present), industry citations, digital PR. | Off-page | Root cause of "Discovered – not indexed" is low authority. | Very high | None | High | Ongoing |
| P1-2 | **Add responsive images + WebP/AVIF** across `/img-hq` and `/img`. | `index.tsx`, `products.tsx`, image assets | LCP + mobile speed; leverage the mobile ranking strength (pos 9.9). | High | High | Medium | Image pipeline |
| P1-3 | **Enrich Product schema** with `offers` (priceCurrency INR, availability) and `aggregateRating` where reviews exist. | product `*supplier*.tsx`, `generate-pages.mjs` | Product snippets show (106 impr, 0 clicks) but lack richness. | Med-High | None | Medium | None |
| P1-4 | **Internal link-integrity sweep**: compare every `href="/..."` to real routes; fix ~17 dead links. | all routes, `verify-sitemap.mjs` | 17 URLs crawled as 404; wasted equity/crawl. | Medium | None | Medium | None |
| P1-5 | **Concentrate internal links** toward ~30–40 target pages instead of spreading evenly across 592. | `RelatedPages.tsx`, `Layout.tsx`, home link sections | Focuses PageRank on pages you actually want ranking. | Med-High | Slight positive | Medium | P0-4 |
| P1-6 | **Strengthen E-E-A-T** on money + guide pages: author/expert bylines, credentials, real project photos, sources/standards cited. | landing + blog pages | Improves quality signals that gate indexation/ranking. | High | None | Medium | Content effort |

### P2 — Optimise (medium impact)

| # | Task | Files | Reason | Difficulty |
|---|---|---|---|---|
| P2-1 | Fix the 1 canonical-validation failure (identify in GSC). | TBD | Medium | Low |
| P2-2 | Unify `LocalBusiness` geo coordinates + `priceRange`. | `index.tsx`, `app.tsx` | Local pack accuracy | Low |
| P2-3 | Consolidate dual `LocalBusiness` entities to one `@id`. | `app.tsx`, landing pages | Cleaner entity graph | Medium |
| P2-4 | Add `Strict-Transport-Security` + `Referrer-Policy` (then scope CSP). | `vercel.json` | Security hygiene | Low |
| P2-5 | Audit + fix small-text contrast for WCAG AA. | `app.css`, inline styles | A11y/UX | Low |
| P2-6 | Lazy-mount below-the-fold homepage sections (news, mega link list). | `index.tsx` | INP/DOM size | Medium |
| P2-7 | De-duplicate any comparison slug present in both `[slug]` map and a standalone file. | `blog/[slug].tsx`, `blog/*.tsx` | Duplicate content | Low |

### P3 — Long Term (advanced / ongoing)

| # | Task | Reason | Difficulty |
|---|---|---|---|
| P3-1 | Content-depth upgrades on pos 20–80 guides (`hastelloy-vs-inconel`, `ss-304-vs-321`, `erw-vs-seamless`) — data, tables, images, sources. | Move from page 3–8 to page 1 | Medium |
| P3-2 | Real review moderation + per-product `Review` schema in server HTML. | Review rich results + trust | Medium |
| P3-3 | Optional `hreflang` (en-IN/en) if international targeting expands. | Export markets | Medium |
| P3-4 | Move repeated inline styles to CSS classes to cut SSR HTML weight. | Payload/caching | Medium |
| P3-5 | Add real project case studies / downloadable spec sheets as link magnets. | Backlinks + E-E-A-T | Medium |
| P3-6 | Investigate US 879-impression / 0-click traffic; refine targeting if irrelevant. | Query relevance | Low |

---

## Recommended Implementation Order

1. **P0-5** (confirm analytics/verification live — you cannot measure otherwise).
2. **P0-3** (title/meta rewrites — fastest measurable clicks).
3. **P0-2** (IBR consolidation — biggest single topic).
4. **P0-1 + P0-4** (freeze + prune — stop the dilution).
5. **P1-1 + P1-6** (authority + E-E-A-T — the real long-term unlock; start now, runs continuously).
6. **P1-2, P1-3, P1-4, P1-5** (images, schema, link integrity, link concentration).
7. **P2** batch (technical polish).
8. **P3** (ongoing content + trust programme).

---

## Expected Impact of Each Major Fix

| Fix | Expected outcome (qualitative — no invented numbers) |
|---|---|
| Title/meta rewrites (P0-3) | Convert existing pos 7–16 impressions into clicks; fastest CTR lift on the 4–5 highest-impression pages. |
| IBR consolidation (P0-2) | One stronger IBR page rising in rank instead of four competing; recovered relevance signals. |
| Freeze + prune (P0-1/P0-4) | Reduced "Discovered – not indexed" over subsequent GSC crawls; better crawl budget on money pages. |
| Authority/backlinks (P1-1) | The decisive lever for moving 169 pages from "Discovered" to "Indexed" and lifting commercial-query rankings. |
| Responsive/WebP images (P1-2) | Better LCP + mobile speed; compounds the existing mobile ranking advantage (pos 9.9). |
| Product schema enrichment (P1-3) | Richer Product snippets → higher CTR on the 106 product-snippet impressions. |
| E-E-A-T (P1-6) | Improves the quality signals Google uses to decide indexation/ranking at this scale. |

Re-pull GSC Coverage + Performance exports 4 and 8 weeks after P0/P1 to measure real movement; do not rely on estimates.

---

## Phase 22 — Before → After Recommendations

> Titles kept concise. Replace with your final copy; these are directional and query-aligned, not keyword-stuffed.

### `/blog/ibr-certification-guide` (883 impr, pos 16, CTR ~0.5%)
- **Title**
  Current → *(existing generic guide title)*
  Recommended → `IBR Certification Explained: Form III-C, Full Form & When It's Required`
- **Meta**
  Current → generic guide description
  Recommended → `What IBR certification means, its full form, Form III-C, and when Indian Boiler Regulations apply to pipes and plates — a practical supplier's guide.`
- **H1**
  Current → *(guide H1)*
  Recommended → `IBR Certification: Full Form, Form III-C, and When You Need It`
- **Content** → Add a 40–60 word direct-answer paragraph at the top (featured-snippet target for "ibr full form" / "what is ibr certification") + a concise "When IBR is required" table.

### `/blog/ss-flange-types-guide` (490 impr, pos 9.9, CTR ~0.4%)
- **Title** → `SS Flange Types: WNRF vs SORF vs Blind, RF/FF/RTJ — With Comparison Table`
- **Meta** → `All stainless steel flange types compared — weld neck, slip-on, blind, RF vs FF vs RTJ — with a quick-reference selection table.`
- **H1** → `Stainless Steel Flange Types (with SORF vs WNRF Comparison)`
- **Content** → Put the SORF-vs-WNRF comparison table near the top (query `sorf vs wnrf flange` ranks pos 7 with 0 clicks — capture the snippet).

### `/blog/understanding-pipe-schedules` (269 impr, pos 16.5)
- **Title** → `Pipe Schedule Explained: SCH 5S, 10S, 40, 80, 160, XXS (with SCH 5S Meaning)`
- **Meta** → `What pipe schedule means, SCH 5S/10S/40/80/160/XXS wall thicknesses, and how to pick the right schedule — clear tables for engineers.`
- **H1** → `Pipe Schedules Explained — SCH 5S to XXS`
- **Content** → Add explicit "SCH 5S meaning" subsection (query ranks pos 15.7).

### Homepage `/` (458 impr, pos 8.8)
- **Title**
  Current → `SS Pipe Supplier Vadodara | Pipes, Plates & Fittings | CMI`
  Recommended → *(keep — it's good; it already ranks pos 8.8 for the brand + core term)*
- **Fix** → Replace the broken glyph `<div class="badge-icon">�</div>` in the Hero with the intended icon.
- **Schema** → Reconcile `geo` to a single coordinate; standardise `priceRange`.

### Location pages (kept ones) — e.g. `/ss-pipe-supplier-ahmedabad`
- **Before** → Near-template landing page (one of 100+ similar).
- **After** → For the *kept* set, deepen with genuinely local proof: named clients/estates already present, add local project references, unique local FAQs, and 1–2 local citations/backlinks each. For the *pruned* set, `noindex` or 301 to the parent state/hub page.

### Product page schema — e.g. `/ss-erw-pipe-supplier-vadodara`
- **Before**
  ```json
  { "@type": "Product", "name": "SS ERW Pipe Supplier Vadodara", "description": "..." }
  ```
- **After**
  ```json
  {
    "@type": "Product",
    "name": "SS ERW Pipe Supplier Vadodara",
    "description": "...",
    "brand": { "@type": "Organization", "name": "Creative Metal Industries" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": { "@id": "https://www.creativemetalind.com/#organization" }
    }
    // add "aggregateRating" only when real reviews exist for this product
  }
  ```

### Internal linking (Current → Recommended)
- **Current:** every page links to ~30 pages across all categories (even equity spread).
- **Recommended:** on each page, keep 8–12 *topically relevant* links + always link to the 3–5 primary money pages. Example:
  `/blog/what-is-ibr-certification` → `/blog/ibr-certification-guide`
  Recommended anchor: **"IBR certification guide"** — because it consolidates the IBR cluster toward the pillar you want ranking (the 883-impression page).
- **Current:** `/steel-supplier-<kept-city>` links broadly.
  **Recommended:** link up to `/stainless-steel-supplier-gujarat` (state hub) with anchor **"stainless steel supplier in Gujarat"** to build the location hierarchy Home → State → City.

---

## Guardrails (what NOT to do)
- No doorway pages, no auto-spun city pages beyond genuine service areas.
- No paid/link-scheme backlinks; use legitimate directories, PR, and industry citations only.
- Do not remove existing SEO elements without a replacement — every canonical/meta/schema currently present should be preserved unless explicitly consolidated as above.
- Prune via `noindex`/301 (reversible), not mass deletion, so recovery is measurable.
