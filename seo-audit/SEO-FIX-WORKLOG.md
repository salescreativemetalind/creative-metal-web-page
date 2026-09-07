# Creative Metal Industries — SEO Fix Worklog & Execution Guide

**Companion to:** `SEO-AUDIT-REPORT.md`, `SEO-ISSUES.csv`, `SEO-ACTION-PLAN.md`
**Purpose:** A single document that (1) lists every audit issue as a trackable checklist, and (2) gives a reusable, start-to-end structured prompt to fix each issue one by one.
**Rule:** Fix ONE issue at a time, in the order below. Verify each before moving on. Nothing ships until it builds and is verified.

---

## How to use this document

1. Work top to bottom. Do not skip ahead — later fixes depend on earlier ones (e.g. prune before concentrating internal links).
2. For each issue, copy the **Structured Fix Prompt** template at the bottom of this file, fill in the issue ID, and run it.
3. After each fix: run the build, verify, then tick the checkbox and set the row `Status` to `Done` in `SEO-ISSUES.csv`.
4. Re-pull Google Search Console data 4 and 8 weeks after the P0/P1 batch to measure real movement. Do not estimate.

**Legend:** 🔴 Critical · 🟠 High · 🟡 Medium · 🟢 Low
**Difficulty:** Low = <1h · Medium = a few hours · High = ongoing/multi-day

---

## The full issue list (in recommended execution order)

### BATCH P0 — Fix immediately (indexation, quality, measured wins)

- [x] **P0-5 · 🟠 Verify GA4 + GSC env vars are live in Vercel** ✅ DONE — `VITE_GA4_ID=G-ZBGQL8K61D` set in Vercel (Config, Production) + local `.env`; redeployed.
  - Why: analytics/verification tags are skipped entirely if `VITE_GA4_ID` / `VITE_GSC_VERIFICATION` are unset — you can't measure anything otherwise.
  - Files: Vercel env settings, `src/app.tsx`
  - Difficulty: Low · Verify: view page source on production, confirm GA4 + verification meta present.

- [x] **P0-3 · 🟠 Rewrite titles/metas on top-impression pages** ✅ DONE — rewrote titles+metas on ibr-certification-guide, ss-flange-types-guide, pipe-schedule-chart, and fixed the broken truncated title on what-is-pipe-schedule. Build passed (597 routes). Note: understanding-pipe-schedules is dynamically generated → defer to P0-2 cannibalisation.
  - Why: pages rank pos 7–16 with ~0% CTR — clicks are immediately available.
  - Files: `src/routes/blog/ibr-certification-guide.tsx`, `src/routes/blog/ss-flange-types-guide.tsx`, `src/routes/blog/understanding-pipe-schedules.tsx`
  - Difficulty: Low · Verify: titles match real GSC queries; no keyword stuffing; build passes.

- [ ] **P0-2 · 🟠 Consolidate the IBR cluster (fix cannibalisation)**
  - Why: `ibr-certification-guide`, `what-is-ibr-certification`, `ibr-form-iiic-complete-guide`, `why-ibr-certification-mandatory` compete for the same terms.
  - Files: `src/routes/blog/*ibr*.tsx`
  - Difficulty: Medium · Verify: one pillar page; others retargeted to distinct intent or 301'd; internal links point to pillar.

- [ ] **P0-1 · 🔴 Freeze the page count**
  - Why: 169/592 pages already "Discovered – not indexed"; more pages dilute further.
  - Files: `app.config.ts` prerender list (process/policy change)
  - Difficulty: Low · Verify: no new location/blog templates added until indexation recovers.

- [ ] **P0-4 · 🟠 Prune/consolidate low-demand near-template location pages**
  - Why: 100+ near-duplicate location pages trigger selective indexing and waste crawl budget.
  - Files: `src/routes/steel-supplier-*.tsx`, `public/sitemap-locations.xml`, `app.config.ts`
  - Difficulty: High · Verify: keep Vadodara belt + top hubs; `noindex` or 301 the long tail (reversible); sitemap updated.

### BATCH P1 — Fix next (high-impact SEO)

- [ ] **P1-1 · 🔴 Authority / backlink programme (ongoing)**
  - Why: low domain authority is the root cause of "Discovered – not indexed".
  - Files: off-page (no code)
  - Difficulty: High · Verify: legitimate directories, industry citations, digital PR only — no link schemes.

- [ ] **P1-6 · 🟠 Strengthen E-E-A-T on money + guide pages**
  - Why: improves the quality signals that gate indexation/ranking at this scale.
  - Files: landing + blog pages
  - Difficulty: Medium · Verify: author/expert bylines, credentials, real project proof, cited standards.

- [ ] **P1-2 · 🟠 Add responsive images + WebP/AVIF**
  - Why: LCP + mobile speed; leverages the existing mobile ranking strength (pos 9.9).
  - Files: `src/routes/index.tsx` (lines ~26–58), `src/routes/products.tsx`, image assets in `/img-hq`, `/img`
  - Difficulty: Medium · Verify: `srcset`/`sizes` present; WebP served; hero LCP image weight reduced.

- [ ] **P1-3 · 🟠 Enrich Product schema (offers + aggregateRating)**
  - Why: Product snippets appear (106 impr, 0 clicks) but lack richness.
  - Files: `src/routes/*supplier*.tsx`, `generate-pages.mjs` (lines ~595–620)
  - Difficulty: Medium · Verify: `offers` (priceCurrency INR, availability); `aggregateRating` only where real reviews exist; validate in Rich Results Test.

- [ ] **P1-4 · 🟡 Internal link-integrity sweep (~17 dead links)**
  - Why: 17 URLs crawled as noindex 404 — wasted equity/crawl.
  - Files: all routes, `verify-sitemap.mjs`
  - Difficulty: Medium · Verify: every `href="/..."` resolves to a real route; fix or 301 legacy URLs.

- [ ] **P1-5 · 🟠 Concentrate internal links toward ~30–40 target pages**
  - Why: equity is spread too evenly across 592 pages.
  - Files: `src/components/RelatedPages.tsx`, `src/components/Layout.tsx`, homepage link sections
  - Difficulty: Medium · Depends on P0-4 · Verify: each page keeps 8–12 topically relevant links + always links to 3–5 money pages.

### BATCH P2 — Optimise (medium impact)

- [ ] **P2-1 · 🟡 Fix the 1 canonical-validation failure** — identify in GSC, self-reference or accept intended canonical, re-validate.
- [ ] **P2-2 · 🟡 Unify LocalBusiness geo coordinates + priceRange** — `src/routes/index.tsx`, `src/app.tsx` (home 22.3072,73.1812 vs app 22.2964,73.2055).
- [ ] **P2-3 · 🟡 Consolidate dual LocalBusiness entities to one @id** — `src/app.tsx`, landing pages.
- [ ] **P2-4 · 🟡 Add security headers** — `vercel.json`: HSTS + Referrer-Policy (low risk); scope CSP carefully.
- [ ] **P2-5 · 🟡 Fix small-text contrast for WCAG AA** — `src/app.css`, inline styles (#9ca3af/#6b7280 on white).
- [ ] **P2-6 · 🟡 Lazy-mount below-the-fold homepage sections** — `src/routes/index.tsx` (news, mega link list) for INP/DOM size.
- [ ] **P2-7 · 🟡 De-duplicate comparison slugs** present in both `blog/[slug]` map and standalone files — `src/routes/blog/[slug].tsx`.

### BATCH P3 — Long term / ongoing

- [ ] **P3-1 · 🟢 Content-depth upgrades on pos 20–80 guides** — `hastelloy-vs-inconel`, `ss-304-vs-321`, `erw-vs-seamless`.
- [ ] **P3-2 · 🟢 Real review moderation + per-product Review schema** — `src/routes/api/reviews.ts`.
- [ ] **P3-3 · 🟢 Optional hreflang (en-IN/en)** — `src/app.tsx`, if international targeting expands.
- [ ] **P3-4 · 🟢 Move repeated inline styles to CSS classes** — cut SSR HTML weight.
- [ ] **P3-5 · 🟢 Add project case studies / downloadable spec sheets** as link magnets.
- [ ] **P3-6 · 🟢 Investigate US 879-impression / 0-click traffic** — refine targeting if irrelevant.

### Low-effort cleanups (do opportunistically alongside the batch they touch)

- [ ] **🟢 Fix mojibake glyph** `<div class="badge-icon">U+FFFD</div>` in Hero — `src/routes/index.tsx` (~line 470). *(Do with P0-3, same file.)*
- [ ] **🟢 Remove default-token value** `'cmi-admin-2026'` from comment — `src/routes/admin/reviews.tsx` (line 3).
- [ ] **🟢 Remove legacy `keywords` meta** — `src/routes/ss-pipe-supplier-vadodara.tsx` (~line 205) and similar.
- [ ] **🟢 Remove duplicate og:site_name / og:image** page-level declarations — `src/app.tsx`, `src/routes/index.tsx`.
- [ ] **🟢 Make product-card alt text descriptive** — `src/routes/index.tsx` (~line 640).
- [ ] **🟢 Increase mobile tap-target size/spacing** on pill links — `src/components/RelatedPages.tsx`, `AllPagesLinks.tsx`.
- [ ] **🟢 Align review UX copy** with auto-publish behaviour — `src/routes/api/reviews.ts` (~line 215).
- [ ] **🟢 Ensure `.vercel/` and `.venv/` are gitignored** — `.gitignore`.

---

## Guardrails (apply to every fix)

- Fix one issue per change; build + verify before the next.
- Never remove an existing canonical/meta/schema without a replacement.
- Prune via `noindex`/301 (reversible), never mass-delete.
- No doorway pages, no link schemes, no keyword stuffing, no cloaking.
- Don't expose secrets; reference credentials by key name only.
- Preserve existing functionality.

---

## Structured Fix Prompt (reusable template)

> Copy this, fill in `<ISSUE-ID>` and `<ISSUE-TITLE>`, and use it to drive each fix from start to end.

```
Work on SEO issue <ISSUE-ID> — <ISSUE-TITLE> — from seo-audit/SEO-FIX-WORKLOG.md.
Fix ONLY this issue. Do not touch unrelated code.

Follow these steps in order:

1. CONTEXT
   - Re-read the issue row in seo-audit/SEO-ISSUES.csv and the matching entry in SEO-ACTION-PLAN.md.
   - Read the exact file(s) listed for this issue before changing anything.
   - Confirm the current state and quote the specific lines you will change.

2. PLAN
   - State the smallest change that fully resolves the issue.
   - List every file you will edit and why.
   - Call out any risk (indexing, functionality, reversibility). If the change is
     hard to reverse or high-impact (mass noindex, 301s, schema-wide changes),
     show me the plan and wait for my approval before editing.

3. IMPLEMENT
   - Make the change. Match existing code style, conventions, and libraries.
   - Preserve all existing SEO elements unless the issue is explicitly a consolidation.
   - No keyword stuffing, no doorway pages, no link schemes.

4. VERIFY
   - Run the project build (npm run build) and fix any errors.
   - For schema changes: validate JSON-LD structure.
   - For meta/title changes: confirm output in the rendered HTML.
   - For link/route changes: confirm every affected href resolves to a real route.
   - Report exactly what you verified and what you could NOT verify.

5. RECORD
   - Give a Before -> After summary of what changed.
   - Update the issue row Status to "Done" in seo-audit/SEO-ISSUES.csv and tick
     the checkbox in seo-audit/SEO-FIX-WORKLOG.md.
   - Tell me the expected SEO/performance impact and any follow-up needed.

Do not proceed to the next issue until I confirm.
```

---

## Recommended execution order (summary)

`P0-5` → `P0-3` (+ mojibake fix) → `P0-2` → `P0-1` → `P0-4` → `P1-1` + `P1-6` (start, ongoing) → `P1-2` → `P1-3` → `P1-4` → `P1-5` → `P2-*` → `P3-*` → low-effort cleanups as you touch each file.
