# SEO Page 2 Audit — SS Pipe Supplier

## Scope

- **Page:** https://www.creativemetalind.com/ss-pipe-supplier
- **Primary query intent:** Commercial enquiries for stainless-steel pipes in India
- **Target phrases:** SS pipe supplier; stainless steel pipe supplier India; stainless steel seamless pipe supplier; stainless steel welded pipe supplier; SS 304 pipe supplier; SS 316L pipe supplier
- **Audit date:** 2026-10-15
- **Scope restriction:** Page 2 only. No commit, push, or deployment performed.

## Existing implementation reviewed

Source: `src/routes/ss-pipe-supplier.tsx`.

- **Title:** `Stainless Steel Pipe Supplier in India | Creative Metal Industries`
- **Meta description:** `Looking for a stainless steel pipe supplier in India? Creative Metal Industries supplies seamless and welded pipes from Vadodara. Send your specification for a quotation.`
- **H1:** `Stainless Steel Pipe Supplier in India`
- **Canonical:** `https://www.creativemetalind.com/ss-pipe-supplier` (self-referencing)
- **Robots directive:** `index, follow, max-image-preview:large`
- **Social metadata:** Open Graph URL/title/description and Twitter title/description are present and consistent with the pipe-supply page. Twitter image points to the site Open Graph image.
- **Structured data:** `BreadcrumbList` and `WebPage` appear in a JSON-LD graph; an `FAQPage` is generated from visible FAQ content. No unsupported rating, price, or stock claim was found in these schema blocks.
- **Image:** `/img/ss_seamless_pipes.jpeg`, alt text `Stainless steel pipes for industrial supply`, with dimensions and async decoding specified.

### Heading and content structure

The page has one H1 and a commercial, pipe-specific hierarchy, including:

- Stainless Steel Pipe Supply in India
- SS Pipe Grades and Product Specifications
- SS Pipe Sizes and Schedules
- Standards and Documentation
- SS 304 and SS 316L Pipe Information
- 304 vs 316 Stainless Steel Pipe
- Seamless vs Welded Pipe: Project Requirements
- Industries and Applications
- Request a Quote for Stainless Steel Pipes
- Why Enquire with Creative Metal Industries
- Frequently Asked Questions — SS Pipe Supplier
- Request a Stainless Steel Pipe Quote
- Related Stainless Steel Pipe Resources

The content covers seamless and welded pipe enquiries, listed grades, sizes/schedules, ASTM A312/A790 references, order-specific documentation, application examples, quotation details, and FAQs. Product availability and order terms are qualified as requiring confirmation rather than represented as guaranteed stock or delivery.

### Internal links and page distinction

The page links contextually to `/stainless-steel-supplier-vadodara` using `Stainless Steel Supplier in Vadodara`, and links to pipe-grade/product pages. The Vadodara page has a local supplier title/H1 and a broader stainless-steel range; it links back with the anchor `SS Pipe Supplier`. This supports the intended division:

- `/ss-pipe-supplier`: national and pipe-specific commercial enquiries, technical requirements, and quotations.
- `/stainless-steel-supplier-vadodara`: local Vadodara supplier intent and broader stainless-steel products.

No competing-page edit was made.

## Search Console evidence

A Search Console workbook was found at `https___www.creativemetalind.com_-Performance-on-Search-2026-09-21.xlsx`. Its dashboard covers Web performance from **2026-06-19 through 2026-09-18 (92 days)**.

The workbook's `Queries` and `Pages` sheets are separate aggregate reports, not query-by-page data. The `Pages` sheet has no row for the exact `/ss-pipe-supplier` URL. Therefore, query totals cannot be attributed to this page, and this audit does not claim page-specific clicks, impressions, CTR, or position. The workbook includes a different URL, `/ss-pipe-supplier-vadodara` (1 click, 36 impressions, 2.78% CTR, average position 18.19); those figures are not evidence about the target URL and were not assigned to it. A sitewide query row for `ss pipe suppliers in gujarat` likewise cannot be joined to this page. No reliable page-specific metrics for the target queries were available in the supplied export.

## Live-page check

The public page was fetched during this audit and its rendered body content was accessible. The fetched rendering showed the India-focused H1, opening copy, pipe-supply content, and local supplier cross-link. The fetch result did not expose the raw document head, so the deployed title, meta description, canonical, and robots directive were **not independently verified from live HTML** in this pass; those values above are verified in source only.

## Findings and action

No confirmed on-page issue requiring a code/content change was identified:

- Existing title, description, and H1 already align with the intended national pipe-supplier intent.
- The local Vadodara page is explicitly distinguished via contextual text and link.
- Page-specific specs and enquiry guidance are already present.
- Canonical and robots metadata are appropriate in the route source.
- Visible FAQ content matches the FAQ structured data source.

**Implementation decision:** No changes were made to `src/routes/ss-pipe-supplier.tsx`. A rewrite or additional keyword repetition would not be justified by the available evidence. This report is the only file created for this Page 2 audit.

## Validation

- `git diff --check`: passed before report creation and again after report creation.
- Production build: `npm run build` passed. Vinxi prerendered 51 routes and produced the Vercel output.
- Sitemap validation: `npm run check:sitemap` passed; all 51 sitemap URLs have built pages, every indexable built page is in a sitemap, and no noindex page is listed.
- Lint/type-check/test scripts: `package.json` defines no lint, type-check, or test scripts. The existing build script is `npm run build` (`vinxi build`); sitemap commands are `npm run sitemap` and `npm run check:sitemap`.
- Mobile layout/functionality: source inspection found responsive flex wrapping, auto-fit grids, overflow-wrapped tables, and existing telephone/WhatsApp/enquiry actions. No interactive browser/device emulation was available, so a full mobile rendering/form submission test was not performed.
- URL, source functionality, and design were not changed.

### Final validation result

- Build: passed (`npm run build`).
- Sitemap validation: passed (`npm run check:sitemap`).
- Final `git diff --check`: passed.
- Git status confirms only this task's report was added; Page 1 work and all unrelated changes remain untouched. The Page 2 route source was not modified.

## Remaining uncertainties and recommendations

1. Export Search Console **query + page** data for `/ss-pipe-supplier` over a selected date range to assess query-level performance without combining separate aggregates.
2. Inspect the deployed raw HTML head or use a browser after a production deployment to independently confirm live title, description, canonical, robots, and structured data.
3. Validate current grade/specification and application statements with the business's approved technical product records before future copy expansion. This audit did not independently verify commercial inventory or order-specific certificates.
