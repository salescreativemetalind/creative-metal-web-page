# Creative Metal Industries — Complete SEO & Performance Audit

**Site:** https://www.creativemetalind.com
**Audited:** 7 September 2026
**Stack:** SolidStart (SolidJS) + Vinxi + Nitro, SSR, Vercel preset, TypeScript, plain CSS
**Pages in codebase:** ~592 routes (159 non-blog + 433 blog)
**Data sources used:** Google Search Console *Coverage* exports (2026-07-24, 2026-09-02), GSC *Performance on Search* export (2026-09-01), source code.

> **Scope note.** This is a read-only audit. No production code was modified. Every measured figure below comes from the GSC exports found in the project or from the source files. Where data was unavailable, this is stated explicitly. No metrics, rankings, or search volumes have been invented.

---

## Phase 1 — Technical Overview

| Aspect | Finding |
|---|---|
| Framework | SolidStart 1.0.11 (SolidJS 1.9) |
| Build system | Vinxi 0.5.11 + Vite 8, Nitro server |
| Language | TypeScript (strict) |
| Rendering | **SSR** (`ssr: true`) with `mode: "async"` so `<HttpStatusCode>` works (real 404s, not soft 404s) |
| Hosting | Vercel (`preset: "vercel"`), `trailingSlash: false` |
| Routing | File-based (`@solidjs/start/router`, `FileRoutes`) |
| Static/dynamic | ~400+ routes pre-rendered at build (`prerender.crawlLinks: true` + explicit route list in `app.config.ts`); dynamic `blog/[slug]` and `[...404]` fallback |
| API usage | `POST /api/enquiry` (Nodemailer/Gmail), `GET/POST /api/reviews`, `GET/DELETE /api/reviews-admin` |
| Database | **None.** Product/blog content hardcoded in route files; reviews stored in `/tmp/reviews.json` (Vercel) or `data/reviews.json` (local) |
| Meta system | `@solidjs/meta` — global tags in `app.tsx`, per-page `Title`/`Meta`/`Link`/JSON-LD in each route |
| Analytics | GA4 + GSC verification, both gated behind `VITE_GA4_ID` / `VITE_GSC_VERIFICATION` env vars — **tags are omitted entirely if the env vars are unset** |
| Sitemaps | `sitemap-index.xml` → 10 child sitemaps (pages, products, locations, 7 blog categories) |
| robots.txt | Present, well-formed, blocks `/api/`, `/admin/`, `/__data.json`, declares sitemap index |
| Structured data | Organization + LocalBusiness + WebSite (site-wide in `app.tsx`); per-page WebPage/FAQPage/BreadcrumbList/Product/Service; AggregateRating on `/reviews` |

**Business purpose.** Creative Metal Industries (CMI) is a Vadodara (Gujarat, India) manufacturer, stockist and supplier of stainless/carbon/alloy/exotic steel — pipes, plates, sheets, fittings, flanges, structural steel and TMT bars. It serves oil & gas, petrochemical, power, fertiliser, pharma, chemical and EPC industries across India and exports to ~50 countries.

**Primary pages that should rank:**
1. Homepage (`/`) — brand + "SS pipe supplier Vadodara"
2. Product hubs — `/ss-pipe-supplier-vadodara`, `/alloy-steel-pipe-supplier-india`, `/duplex-steel-supplier-vadodara`, `/inconel-pipe-supplier-india`, `/ss-flanges-supplier-vadodara`
3. High-impression blog guides — `/blog/ibr-certification-guide`, `/blog/ss-flange-types-guide`, `/blog/understanding-pipe-schedules`, comparison guides
4. Key location pages — Vadodara, Ahmedabad, Surat, Ankleshwar, Bharuch, Dahej

---

## The Headline Story (from real GSC data)

The single most important finding is a **traffic collapse that correlates with a mass page launch**, not a technical break.

**Coverage timeline (GSC):**
- Through ~10 July: ~53 pages indexed, ~5 not indexed. Stable.
- **11 July:** "Not indexed" jumps from 5 → **464** (mass URL rollout begins).
- **15 August:** "Indexed" jumps 53 → **407** (Google indexes a large batch).
- **2 September:** Indexed **407**, and **169 pages "Discovered – currently not indexed"** (up from **4** on 24 July), 17 "Excluded by noindex", 5 "Crawled – currently not indexed", 1 "Alternate page with proper canonical tag" (validation *Failed*).

**Performance timeline (GSC):**
- Impressions **peaked ~140–164/day in early July**, then **collapsed to single digits** from late July onward.
- 90-day totals: **~60 clicks, ~3,950 impressions, ~1.5% CTR, ~35 average position**.

**Root-cause diagnosis.** The site published ~590 pages rapidly on a domain with a weak backlink/authority profile. Google crawled and indexed 407 but is holding **169 in "Discovered – currently not indexed"** — the classic signal that *crawl demand/authority is insufficient for the page volume*, and that many pages are near-template variations competing for the same intent. The pages are not thin in word count (location pages are ~900 words with tables, FAQs and schema), but at this scale, on this authority level, Google is rationing indexation. Impressions fell because the crawl/quality signals diluted, not because anything is technically broken.

This reframes the whole audit: **the technical SEO foundation is strong. The problem is authority, prioritisation, and query-level optimisation — not crawlability.**

---

## Phase 2 — Technical SEO

### Indexing
- **Canonicals:** Every page reviewed has a self-referencing absolute `rel="canonical"`. Good. One page reports *"Alternate page with proper canonical tag"* (1 page, validation Failed) — a canonical mismatch to investigate (likely a `www` vs a query/anchor variant, or a page that canonicalises elsewhere).
- **robots directives:** Only two `noindex` sources exist in code — `[...404].tsx` and `admin/reviews.tsx`. **The 17 "Excluded by noindex" pages in GSC are genuine 404 URLs Google crawled** (from old/removed links). This is expected and healthy, not a bug — but the *count* is worth watching because it means external or internal links point at ~17 dead URLs.
- **Blocked pages:** `/api/`, `/admin/`, `/__data.json` blocked in robots.txt. Correct.
- **Orphan/thin pages:** No true orphans — `RelatedPages.tsx` injects 20–30 cross-category links into every page and the homepage + footer link deep. The problem is the inverse: **near-duplicate template density** across 100+ location pages.
- **Pagination:** N/A (no paginated listings; blog index is a single long page).
- **Parameter URLs:** None used for content. `/api/reviews?product=…` is blocked. Good.
- **URL structure:** Clean, keyword-rich, hyphenated, no extensions, no params. Excellent.
- **Trailing slash:** `trailingSlash: false` in both `vercel.json` and prerender config. Consistent.
- **HTTP/HTTPS, www:** All canonicals/OG/schema use `https://www.` consistently. Confirm a 301 from apex + non-www + http at the DNS/Vercel level (not verifiable from source).
- **Redirect chains/loops, 301 vs 302:** No redirects defined in `vercel.json`. Nothing to flag in source; verify live.

### Sitemap
- `sitemap-index.xml` references 10 child sitemaps with `lastmod` dates. Well-structured.
- `sitemap-pages.xml` reviewed: 9 core URLs with `lastmod`/`changefreq`/`priority`. Clean, no noindex URLs, no trailing slashes.
- `verify-sitemap.mjs` exists and cross-checks built pages vs sitemap vs noindex — a genuinely good engineering practice.
- **Gap:** With ~592 route pages but a large fraction stuck in "Discovered – not indexed", the sitemaps are *declaring more than Google is willing to index*. Sitemaps are not the fix here; authority + selective pruning is.

### robots.txt
- Syntax valid. No important resources blocked. Sitemap declared. No accidental disallows. No issues.

---

## Phase 3–4 — On-Page & Content SEO

**Strengths.** Every page has a unique `<title>`, meta description, single `<h1>`, structured `<h2>`/`<h3>`, OG + Twitter tags, canonical, and relevant JSON-LD. Titles are keyword-targeted and mostly within length. This is well above the norm for a site this size.

**Issues:**

1. **CTR is ~0 on pages that already rank well.** `/blog/ibr-certification-guide` has **883 impressions at position 16** but only 4 clicks; `/blog/ss-flange-types-guide` has **490 impressions at position 9.9** with 2 clicks. These titles/descriptions are not compelling for the actual queries ("ibr certification", "ibr full form", "ss flange types", "sorf vs wnrf"). This is the **single biggest quick win** — rewrite titles/metas to match query intent and add year/number hooks.

2. **Keyword cannibalisation risk (IBR cluster).** Multiple pages target IBR: `/blog/ibr-certification-guide`, `/blog/what-is-ibr-certification`, `/blog/ibr-form-iiic-complete-guide`, `/blog/why-ibr-certification-mandatory`. GSC shows IBR queries spread across several URLs at positions 10–35. Consolidate intent: make one the canonical pillar and have the others target distinct long-tail intents (or internally link/consolidate).

3. **Comparison-guide duplication.** Some comparisons exist both as a `blog/[slug]` `ARTICLES` entry *and* as a standalone file (e.g. the code comments note `erw-vs-seamless-pipe` was removed from `[slug].tsx` in favour of the standalone). Audit for any remaining slug that resolves in *both* the `[slug]` map and a standalone file — that would be a genuine duplicate-content/canonical conflict.

4. **`keywords` meta tag** is present on some pages (e.g. `/ss-pipe-supplier-vadodara`). Harmless but ignored by Google; can be removed for tidiness.

5. **Language attribute:** `<html lang="en">` set globally. Good. **No `hreflang`** despite targeting India + 50 export countries — minor; `en-IN`/`en` alternates would be a refinement, not a fix.

6. **Broken character:** `index.tsx` Hero renders `<div class="badge-icon">�</div>` (a U+FFFD replacement character) — a visible mojibake glyph. Cosmetic but appears on the most important page.

**Content gaps (from query data):** Users search "inch to nb chart" (you rank #1), "sch 5s meaning", "difference between p91 and p92", "sorf vs wnrf" — these are all served. The gap is **query-specific title/heading alignment**, not missing content.

---

## Phase 5 — Internal Linking

**Assessment: excellent, arguably over-engineered.**
- `RelatedPages.tsx` deterministically injects 20–30 contextual links from *other* categories into every page, guaranteeing no orphans and reaching company/hub pages from the ~570 interior routes.
- `Layout.tsx` footer + secondary "hub bar" nav expose product/location/guide hubs from every `PageLayout` page.
- Homepage has a dedicated "All Product & Location Pages" link section.

**Issues:**
1. **Anchor-only primary nav on interior pages.** The homepage nav uses `#about`, `#product-tabs`, etc., which only resolve on `/`. This was mitigated by the "hub bar", but the main nav links still pass no equity to hub pages from interior pages. Minor.
2. **Link volume may aid the dilution problem.** With every page linking to ~30 others across 592 pages, PageRank is spread very thin. Concentrate internal links toward the ~30–40 pages you actually want to rank (money + high-impression guides) rather than spreading evenly.
3. **~17 internal/external links resolve to 404s** (per the "Excluded by noindex" 404 count). Worth a link-integrity sweep.

---

## Phase 6 — Structured Data / Schema

**Strong and mostly correct.**
- Site-wide: `Organization` (`#organization`), `LocalBusiness` (`#localbusiness`), `WebSite` (`#website`) in `app.tsx`, with stable `@id`s so per-page `LocalBusiness` nodes reference `parentOrganization` — good entity modelling.
- Per-page: `WebPage`, `FAQPage`, `BreadcrumbList` on landing pages; `Product` on product pages (`ms-angle-channel-supplier-vadodara`, `ss-erw-pipe-supplier-vadodara`, and generator-created pages); `Service` on `/metal-trading`; `AggregateRating` on `/reviews`.
- **GSC confirms it works:** "Review snippet" (124 impressions) and "Product snippets" (106 impressions) appear in Search Appearance.

**Issues:**
1. **`Product` schema without `offers`/`AggregateRating` on most product pages** → limited rich-result eligibility. Google may show "Product snippets" but without price/rating/availability the enhancement is weak. Add `offers` (even `priceCurrency` + `availability`) and, where reviews exist for that product, `aggregateRating`.
2. **`LocalBusiness` geo inconsistency.** Homepage `SCHEMA` uses `geo` `22.3072, 73.1812` while `app.tsx` `LocalBusiness` uses `22.2964, 73.2055`. Pick one authoritative coordinate.
3. **Two `LocalBusiness` entities per page** (site-wide `#localbusiness` + page-level `#business`). They use distinct `@id`s so this is *technically* valid, but consolidating to one entity referenced by `@id` is cleaner and less likely to confuse parsers.
4. **`priceRange` uses both `"₹₹₹"` (app.tsx) and `"$$"`/`"$$$"` (some pages).** Standardise.

---

## Phase 7 — Performance & Core Web Vitals

No Lighthouse/CrUX/RUM data was available in the project, so field Core Web Vitals **could not be verified**. The following are source-level risk assessments.

**Positives:**
- SSR delivers server-rendered HTML → good FCP/LCP potential and reliable crawler rendering.
- Fonts: `preconnect` to `fonts.googleapis.com`/`fonts.gstatic.com` + `display=swap`. Good.
- Nav logo uses `fetchpriority="high"` + explicit `width`/`height`.
- Product/slideshow images use `loading="lazy"` + `decoding="async"`; first hero slide is `eager`.
- Immutable 1-year cache on images/fonts via `vercel.json`.
- Minimal client JS (SolidJS is lightweight; no heavy framework runtime).

**Likely CWV risks (LCP / CLS / INP):**
1. **LCP:** Homepage hero + product slideshow load ~32 high-res images (`/img-hq/*.png|jpeg`). Even lazy-loaded, the eager hero image and total page weight can hurt LCP if hero images are large PNGs. `og-image.jpg` is 42 KB (fine) but product art in `/img-hq/` should be verified for size/format.
2. **CLS:** Some images (brand logos) have `width`/`height`, but many product/slideshow `<img>` lack explicit dimensions and rely on CSS containers — acceptable if the CSS reserves space, but a CLS risk on slower connections.
3. **INP:** Multiple `setInterval` slideshow timers + scroll listeners. They're `passive` and lightweight, so INP risk is low, but the homepage runs several concurrent timers.
4. **Third-party:** Brand logos hot-linked from `cdn.lohalive.com`; Pexels CDN referenced (`P()` helper) though current data uses local `/img-hq`. OpenStreetMap iframe on contact (pointer-events disabled). Each adds a connection.

**Recommendation:** Run PageSpeed Insights / Lighthouse on the homepage and 2–3 template pages to get real LCP/INP/CLS. Convert `/img-hq` and `/img` PNGs to WebP/AVIF and serve responsive `srcset`.

---

## Phase 8 — Images

- **Formats:** Heavy reliance on `.png`/`.jpeg` in `/img-hq` and `/img`. Products page uses one `.webp`. **Recommend WebP/AVIF across the board** — steel product photos compress very well.
- **Alt text:** Present and descriptive on logo, product cards (`${name} ${i+1}`), slideshow (caption), brand logos (brand name). Good coverage; product-card alts are generic ("SS Seamless Pipe 1") and could be more descriptive.
- **Dimensions:** Logo and brand logos have `width`/`height`; product/slideshow images mostly do not → CLS risk (Phase 7).
- **Lazy loading:** Correctly applied (`loading="lazy"` on non-hero images; hero eager).
- **Responsive images:** **No `srcset`/`sizes` anywhere** — the same large image is served to mobile and desktop. Biggest image opportunity.
- **Broken-image handling:** `hideOnError` hides failed images gracefully (no broken glyph, no layout shift). Nice touch.

---

## Phase 9 — JavaScript / CSS

- **Bundle:** SolidJS + minimal deps (`solid-js`, `@solidjs/*`, `nodemailer` server-only). No jQuery, no heavy UI kit. Lean.
- **Unused CSS:** Single global `app.css` + `products.css`. Large inline `style={{…}}` objects are used pervasively (thousands of inline styles) — this bloats HTML payload on every SSR response and prevents CSS caching for those styles. Consider moving repeated inline styles to classes.
- **Client-side rendering issues:** Reviews load client-side via `fetch` in `onMount` (correct — avoids SSR "Invalid URL" crash noted in `products.tsx`). Review content is therefore **not in the server HTML**, so it doesn't contribute to indexable content or (directly) to review rich snippets beyond the `AggregateRating` on `/reviews`.
- **Duplicate libraries:** None found.
- **Excessive DOM:** Homepage is very long (hero, slideshow, 8 product categories, brands, about, stats, metals, why-us, Vadodara section, services, industries, FAQ, blog, news, reviews, CTA, contact, mega link section). Large DOM → potential INP/memory cost on low-end mobile.
- **Inline scripts:** `entry-server.tsx` has a small inline hamburger/scroll script (fine). `app.tsx` injects GA4 inline when configured.

---

## Phase 10 — Mobile SEO

- **Viewport:** `width=device-width, initial-scale=1` set in document shell. Correct.
- **Responsive:** Grid/flex layouts with `minmax()` and `clamp()` typography throughout — responsive by construction.
- **Mobile nav:** Dedicated hamburger + `mobile-menu` with hub links. Works.
- **Content parity:** Same content served to mobile and desktop (SSR). Good for mobile-first indexing.
- **GSC insight:** **Mobile average position is 9.94 vs desktop 35.4** — mobile ranks *dramatically* better, but only 731 mobile impressions vs 3,217 desktop. Mobile is the strength; lean into mobile UX and speed.
- **Touch targets / font sizing:** Generally adequate; the dense pill-link sections (RelatedPages, AllPagesLinks) have small `0.78rem` links close together — a minor tap-target concern.

---

## Phase 11 — Accessibility

**Good foundation:**
- Skip-to-content link, `aria-label` on nav/sections, `role="list"`/`listitem`, `aria-current` on breadcrumb, labelled form fields, honeypot for spam.
- Semantic landmarks: `<nav>`, `<main id="main-content">`, `<footer>`, `<article>`, `<address>`.

**Issues (some also affect SEO/UX):**
1. **Emoji used as meaningful UI/icons** (📞 ✉ 💬 in social links have `aria-label`, good; but many section icons are decorative emoji without `aria-hidden` in places).
2. **Duplicate `<main id="main-content">`** possibility: `index.tsx` renders its own `<main id="main-content">` and `PageLayout` also renders `<main id="main-content">`. Home doesn't use PageLayout, so no clash there — but ensure no page renders two `<main>` elements.
3. **Contrast:** Muted greys (`#9ca3af`, `#6b7280`) on white for small text may fail WCAG AA in places — needs manual contrast checking.
4. **`<details>`/`<summary>` FAQ** with `list-style:none` on summary removes the disclosure triangle on some browsers — ensure keyboard/AT affordance remains.
5. **Star ratings** use `role="radio"`/`aria-checked` (good) but the read-only display stars are plain `<span>★</span>` with an `aria-label` on the wrapper (acceptable).

> Full WCAG conformance requires manual testing with assistive technology and expert review; the above is a static-analysis pass only.

---

## Phase 12 — Broken Links & Errors

- **404 handling:** Correct — real HTTP 404 via `<HttpStatusCode code={404}>` (async SSR mode), `noindex`. `blog/[slug]` unknown slugs also return real 404 + `noindex, follow`.
- **~17 dead URLs** are being crawled (the "Excluded by noindex" 404 count in GSC) — meaning some internal or external links point to non-existent pages. **Recommend a full internal-link integrity sweep** comparing every `href="/..."` in source against actual route files. (Spot-checks of suspected-broken blog links — `erw-vs-seamless-pipe`, `pipe-schedule-chart`, `ss-sheet-plate-guide`, `pipe-fittings-selection-guide`, `ibr-certification-guide`, `exotic-alloy-plate-sheet-guide` — all resolve to real standalone files, so those are fine.)
- **Broken glyph:** `index.tsx` `<div class="badge-icon">�</div>` (Phase 3).
- **Build errors:** Not run in this audit (read-only). Recommend `npm run build` + `npm run check:sitemap` as verification.

---

## Phase 13 — Security / SEO

- **Headers (`vercel.json`):** `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY` present. **Missing:** `Strict-Transport-Security` (HSTS), `Referrer-Policy`, `Content-Security-Policy`, `Permissions-Policy`. Adding at least HSTS + Referrer-Policy is low-risk and good hygiene.
- **Mixed content:** All asset/schema/OG URLs use `https://`. Brand logos and OSM iframe are HTTPS. No mixed content found in source.
- **Secrets:** `.env`, `.env.local`, `.env.example` exist. `enquiry.ts` reads `SMTP_USER`/`SMTP_PASS` from env (good) with a **hardcoded fallback email** and empty-string password fallback — the email address is not secret, but the fallback pattern is a smell. `reviews-admin.ts` requires `ADMIN_TOKEN` from env and **safely returns false if unset** (no hardcoded token in shipping code) — good. **However, `admin/reviews.tsx` line 3 documents a default token value `cmi-admin-2026` in a comment** — this should be removed to avoid suggesting a guessable default. *No secret values are reproduced in this report.*
- **`/admin/reviews`** is `noindex, nofollow`, not linked publicly, and API is token-gated. Reasonable. Consider blocking `/admin` at the edge too (already in robots.txt, but robots is advisory).
- **`.vercel/`, `.venv/`** committed to the repo — ensure build artifacts and virtualenvs are gitignored (housekeeping, not an SEO issue).

---

## Phase 14 — Local SEO

**Strong.**
- Consistent NAP: "Creative Metal Industries", F-3 Loha Bhavan / 386-B GIDC Makarpura, Vadodara 390001/390010, +91 99982 80619.
- `LocalBusiness` schema with address, geo, opening hours, `hasMap` (Google CID), `areaServed`, `sameAs` (IndiaMART, JustDial, X, Telegram).
- Google Maps link + OSM embed on contact.
- 100+ city/GIDC location pages with genuinely city-specific content (`LocationContent.tsx`).

**Issues:**
1. **NAP postcode inconsistency:** Office uses `390001`, yard `390010` — both are real, but ensure Google Business Profile and citations match exactly the address you want ranked.
2. **Geo-coordinate mismatch** between homepage and site-wide schema (Phase 6).
3. **No dedicated Google Business Profile signals audit possible** from source — verify GBP category, photos, and review velocity match the site.

---

## Phase 15 — Search Performance Data (measured)

> **This section is based on verified GSC exports found in the project.**

**Coverage (2026-09-02):**

| Status | Pages |
|---|---|
| Indexed | 407 |
| Discovered – currently not indexed | **169** |
| Excluded by 'noindex' (404 pages) | 17 |
| Crawled – currently not indexed | 5 |
| Alternate page with proper canonical tag (validation Failed) | 1 |

Versus 2026-07-24: "Discovered – not indexed" was **4**. The jump to 169 is the core problem.

**Performance (90 days to ~2026-09-01):** ~60 clicks · ~3,950 impressions · ~1.5% CTR · ~35 avg position. Impressions peaked ~156/day in early July and fell to single digits by August.

**Top pages by impressions (position / clicks):**

| Page | Impr. | Pos. | Clicks |
|---|---|---|---|
| `/blog/ibr-certification-guide` | 883 | 16.1 | 4 |
| `/blog/ss-flange-types-guide` | 490 | 9.9 | 2 |
| `/` (home) | 458 | 8.8 | 36 |
| `/blog/understanding-pipe-schedules` | 269 | 16.5 | 2 |
| `/blog/hastelloy-vs-inconel` | 149 | 66.5 | 1 |
| `/blog/ss-304-vs-321-guide` | 147 | 54.7 | 2 |
| `/blog/ss-304-stainless-steel-guide` | 122 | 67.3 | 0 |
| `/blog/erw-vs-seamless-pipe` | 104 | 63.5 | 1 |
| `/blog/p91-alloy-steel-guide` | 89 | 29.3 | 0 |
| `/blog/how-to-read-mtc` | 82 | 31.0 | 0 |

**Top queries (position / clicks — nearly all 0 clicks):** `creative metal industries` (3.7 / 18, brand), `ibr certification` (13.4 / 0), `ibr form iii-c` (10.1 / 0), `ss flange types` (10.1 / 0), `sorf vs wnrf flange` (7.1 / 0), `sch 5s meaning` (15.7 / 0), `inch to nb chart` (**1.0** / 0), `difference between p91 and p92` (**1.0** / 0), `hastelloy vs inconel` (84 / 0), `321 vs 304 stainless` (59.8 / 0).

**Devices:** Desktop 3,217 impr @ pos 35.4 (55 clicks); **Mobile 731 impr @ pos 9.94** (5 clicks); Tablet negligible.

**Countries:** India 1,976 impr / 53 clicks (dominant); United States 879 impr / **0 clicks** (likely irrelevant/scraper traffic); Singapore, UAE, Malaysia small but real export interest.

**Search appearance:** Review snippet (124 impr / 5 clicks), Product snippets (106 impr / 0 clicks) — schema is producing enhancements.

---

## Phase 16 — Google Indexing Readiness

Technically the site is **well-prepared to be crawled and indexed**: SSR HTML, valid canonicals, correct 404 status codes, clean robots.txt, comprehensive sitemaps, deep internal linking, valid structured data.

The blocker is **not technical**. It is:
- **Authority/crawl demand** insufficient for ~592 pages (169 stuck in "Discovered – not indexed").
- **Near-template similarity** across 100+ location pages triggering selective indexing.
- **Weak backlink profile** (a Semrush backlinks export is in the project — its presence signals this is a known concern; the file itself was not parsed for this report).

> No claim is made here that any specific page is or is not ranking beyond what the GSC exports directly show.

---

## Phase 17 — Keyword Strategy (from measured data only)

**Quick wins (already ranking pos 5–20 with real impressions, near-0 CTR — fix titles/metas/content):**
- `ibr certification` / `ibr form iii-c` / `ibr full form` → `/blog/ibr-certification-guide` (883 impr, pos 16) and `/blog/what-is-ibr-certification`
- `ss flange types` / `sorf vs wnrf flange` → `/blog/ss-flange-types-guide` (490 impr, pos 10) and `/blog/wn-flange-vs-so-flange`
- `pipe schedule` / `sch 5s meaning` → `/blog/understanding-pipe-schedules` (269 impr, pos 16) / `/blog/pipe-schedule-chart`
- `inch to nb chart` (**pos 1**) and `difference between p91 and p92` (**pos 1**) — already #1, ensure the answer/snippet is complete to capture the click.

**Ranking opportunities (pos 20–80, real impressions — need content depth + links):**
- `hastelloy vs inconel` (pos 66–90 across 2 URLs), `321 vs 304 stainless` (pos 60), `erw vs seamless pipe` (pos 63), `duplex 2205` (pos 80).

**High-priority commercial (brand + Vadodara/Gujarat):**
- `ss pipe supplier vadodara`, `stainless steel supplier gujarat`, `tmt bar manufacturers in gujarat` (pos 57), `steel manufacturing company in gujarat` (pos 84) — commercial intent, currently weak; these deserve the strongest internal links and backlinks.

**Content gaps:** Not many — the content coverage is vast. The gap is *depth/authority on the pages that already get impressions*, plus resolving the IBR/flange cannibalisation.

> **Search volumes were not available** in the project data and have not been invented. Prioritisation above is based on *measured impressions and positions* from GSC, which is a reliable demand proxy.

---

## Phase 18 — Competitor Analysis

**Search performance data could not be extended to competitors from the available project data**, and no live competitor crawl was performed in this audit. To avoid fabricating metrics, no competitor figures are asserted.

**Observed fact:** GSC queries like `steel pipes manufacturer in chennai`, `chs pipes in chennai/tamil nadu`, `tmt bar manufacturers in gujarat` show CMI appearing (pos 57–65) against established regional suppliers — indicating the competitive set is regional Indian steel stockists/manufacturers.

**Recommendation (not a measured claim):** Manually benchmark 3–5 ranking competitors for `ss pipe supplier gujarat` / `alloy steel pipe supplier india` on: backlink profile (the decisive factor here), content depth on money pages, and Product/Offer schema richness.

---

## Phase 19 — Issue Severity Summary

See `SEO-ISSUES.csv` for the full itemised list with file/line/impact/difficulty. Counts:

- 🔴 **Critical:** 2
- 🟠 **High:** 7
- 🟡 **Medium:** 9
- 🟢 **Low:** 8

---

## Phase 20 — SEO Scores (0–100, evidence-based)

| Category | Score | Evidence / Reasoning |
|---|---:|---|
| **Technical SEO** | 88 | SSR, valid canonicals, real 404s, clean robots, 10 sitemaps, sitemap-verifier script. Minor: 1 canonical-validation failure, missing HSTS/CSP, geo mismatch. |
| **On-Page SEO** | 78 | Unique titles/metas/H1s everywhere, OG/Twitter complete. Held back by ~0 CTR on ranking pages (weak title-to-query match) and IBR cannibalisation. |
| **Content SEO** | 70 | Vast, genuinely written content incl. per-city detail. But near-template density across 100+ location pages and thin E-E-A-T signals cause selective indexing. |
| **Indexability** | 62 | Technically indexable, but **169/592 pages "Discovered – not indexed"** is a real, measured indexation deficit driven by authority/scale. |
| **Performance** | 72 | SSR + lazy load + font preconnect + immutable cache are good; no responsive images, PNG-heavy `/img-hq`, large DOM, unverified field CWV. |
| **Mobile SEO** | 85 | Responsive, viewport correct, content parity, and **mobile ranks pos 9.9 vs desktop 35** — a genuine measured strength. |
| **Internal Linking** | 82 | No orphans, deep cross-linking, hub bars. Slightly penalised for spreading equity too evenly across 592 pages and ~17 dead links. |
| **Structured Data** | 84 | Rich, valid, entity-linked; GSC confirms Review + Product snippets. Penalised for missing `offers`/`aggregateRating` on products, geo/`priceRange` inconsistency, dual LocalBusiness. |
| **Accessibility** | 74 | Skip link, ARIA, semantic landmarks, labelled forms. Penalised for possible contrast fails, decorative-emoji handling, small dense tap targets (not fully verified via AT). |
| **Overall SEO Health** | **75** | Strong technical + on-page + schema foundation, undermined by an authority/indexation problem and CTR left on the table. The fixes are high-leverage and mostly non-technical. |

---

## Phase 21 & 22

The prioritised roadmap (P0–P3 with tasks, files, impact, difficulty, dependencies) is in **`SEO-ACTION-PLAN.md`**, which also contains the Before → After recommendations for titles, metas, H1s and schema.

---

*Prepared as a read-only audit. No production code was changed. All figures are from the project's GSC exports and source code; where data was unavailable it is marked as such. Content from search-appearance/coverage exports was summarised, not reproduced verbatim.*
