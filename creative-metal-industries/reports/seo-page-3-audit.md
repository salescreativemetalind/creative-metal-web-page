# SEO Page 3 Audit — SS Seamless Pipe Supplier India

## Scope and target

- **URL:** https://www.creativemetalind.com/ss-seamless-pipe-supplier-india
- **Primary keyword:** SS seamless pipe supplier India
- **Related topics:** stainless steel seamless pipe supplier, ASTM A312 stainless steel pipe, SS 304 seamless pipe supplier, SS 316L seamless pipe supplier, Duplex 2205 pipe supplier
- **Audit date:** 2026-10-15
- **Scope:** Existing Page 3 route and this report only. Page 1, Page 2, and the Vadodara supplier page were inspected for overlap only and were not edited.
- **Git state before edits:** Branch `main`. Pre-existing local work included `src/routes/alloy-steel-pipe-supplier-india.tsx`, `reports/seo-page-1-audit.md`, `reports/seo-page-2-audit.md`, `reports/stainless-steel-pipe-manufacturer-seo.md`, `website-pages-keywords.pdf`, and `../Scalenut.pdf`. Those files were preserved.

## Existing implementation

Source route: `src/routes/ss-seamless-pipe-supplier-india.tsx`.

### Before

- **Title:** `SS Seamless Pipe Supplier India | ASTM A312 All Grades | CMI`
- **Meta description:** `India's leading SS seamless pipe supplier and manufacturer. SS 304, 316L, 321, 310S, 904L, Duplex 2205 to ASTM A312. 6NB–600NB, SCH 5S–XXS.`
- **H1:** `SS Seamless Pipe Supplier in India — ASTM A312, All Grades`
- **Canonical:** `https://www.creativemetalind.com/ss-seamless-pipe-supplier-india` (self-referencing)
- **Robots:** `index, follow, max-image-preview:large`
- **Structured data:** `BreadcrumbList` and `FAQPage`; FAQ JSON-LD was generated from the visible FAQ data. No price, ratings or review markup was present.
- **Page structure:** grade/specification table; standards and technical details; “Why Choose” claims; industry/application cards; FAQ; quote CTA; related links; shared related-pages component.
- **Page imagery:** logo alt text repeated the target phrase; no prominent product image was present in the inspected route.
- **Existing internal links:** links to grade/product pages and the broad local Vadodara page; no direct contextual link to the general `/ss-pipe-supplier` route was present in the page-specific related links.

## Search Console evidence

The available workbook is `https___www.creativemetalind.com_-Performance-on-Search-2026-09-21.xlsx`; its dashboard covers **2026-06-19 through 2026-09-18 (92 days)**.

The `Queries` and `Pages` sheets are separate aggregates, not query-by-page data. The export does not provide attributable impressions/clicks for the exact `/ss-seamless-pipe-supplier-india` URL and target queries. Consequently, no page-level performance metrics are reported here. Sitewide query totals are not assigned to this page. Search volume, keyword difficulty and rankings were not inferred.

## Keyword overlap assessment

The three routes are distinguishable by intent and linking:

- `/ss-pipe-supplier` targets general stainless-steel pipe enquiries, including seamless and welded pipe. Its title/H1 are India-focused and its opening content introduces both types.
- `/ss-seamless-pipe-supplier-india` has a seamless-only H1, grade/specification table and technical enquiry details. It is appropriate for the specific seamless pipe intent.
- `/stainless-steel-supplier-vadodara` targets the local Vadodara supplier intent and broader product forms. It has a Vadodara-focused title/H1 and broad stainless-steel categories.

Page 3 already linked to the local supplier page. A contextual link to the general pipe supplier page was added to clarify the parent/general pipe route without changing either page.

## Claims requiring company verification

The route made multiple objective claims for which this repository did not contain underlying company records, mill authorizations, certificates, dispatch records, inspection documents, or facility evidence. A public statement elsewhere in the site is not independent proof. Claims found included:

- 1,000+ pipe sizes and ready stock by grade;
- named authorized mill stockist relationships and direct-from-manufacturer pricing;
- blanket IBR Form III-C, NACE and MTC availability;
- named hydrostatic/UT/ET/IGC/PMI testing and third-party inspection organizations;
- same-day dispatch and 2–4 day delivery timelines;
- stated 1,092 sq. m facility size;
- in-house cutting/beveling/threading/polishing/pickling/passivation;
- two-hour quotation promise, “India’s largest” claim, and claims of serving named industries/customers since 2012.

No supporting records for those claims were found in the inspected route, reports, or repository search. This does not establish that the claims are false; they remain unverified from the available project evidence. Revised copy now asks buyers to state their requirement and says availability, documentation, processing and delivery terms must be confirmed for the individual order. Business owners should supply approved evidence before any of the specific claims are restored.

## Changes implemented

Only two files were changed/created for this task:

1. `src/routes/ss-seamless-pipe-supplier-india.tsx`
   - Updated the title to `SS Seamless Pipe Supplier in India | ASTM A312 Grades` and replaced the “leading ... manufacturer” description with an enquiry-focused description.
   - Kept the existing seamless-pipe H1 and self-canonical/indexable robots directive.
   - Aligned Open Graph and Twitter descriptions with supplier/enquiry intent, removing unsupported manufacturer, certification, and stock claims.
   - Replaced the hero's unsupported inventory, facility, certification and same-day dispatch assertions with an order-specific availability/documentation/delivery confirmation statement.
   - Changed grade table availability values to `Confirm per order`; table sizes/standards remain presented as listed enquiry specifications rather than stock commitments.
   - Changed the specifications panel to qualify size availability and require order-specific confirmation of testing, documents and compliance.
   - Replaced unsupported “largest,” named mill, guaranteed certificate, TPI, in-house processing, price, two-hour response and customer/experience claims with practical RFQ information.
   - Reworded the FAQ answers around grade/specification selection, document confirmation, and quotation requirements. FAQ schema continues to derive from the visible FAQ array.
   - Removed manufacturer positioning from page-specific source comments and footer, and removed the target phrase from logo alt text.
   - Added contextual links to `/ss-pipe-supplier` (“SS Pipe Supplier”) and `/stainless-steel-supplier-vadodara` (“Stainless Steel Supplier in Vadodara”).
   - Preserved URL, layout, CTA actions, overall design, breadcrumb schema, canonical and indexing behavior.
2. `reports/seo-page-3-audit.md`
   - Created this audit and implementation record.

## Technical review

- Canonical remains self-referencing and robots remains indexable in source.
- H1 remains one clear, seamless-specific H1.
- JSON-LD FAQ entries continue to be sourced from the displayed FAQs; BreadcrumbList is unchanged.
- Existing phone, WhatsApp and contact form links were preserved.
- Responsive table overflow and auto-fit/flex layouts were preserved.
- No URL, site configuration, credentials, or unrelated page source was changed.

## Validation

- Node/npm availability: Node `v26.11.1`, npm `12.2.0`.
- `npm run build`: passed; Vinxi prerendered 51 routes and completed Vercel output generation.
- `npm run check:sitemap`: passed; all 51 sitemap URLs have built pages, every indexable built page is in the sitemap, and no noindex page is listed.
- `git diff --check`: passed after implementation.
- No lint, type-check, or test script is defined in `package.json`.
- Final Git status showed only `src/routes/ss-seamless-pipe-supplier-india.tsx` modified and `reports/seo-page-3-audit.md` added by this task; all pre-existing Page 1 and unrelated work remained present and untouched.
- Live page was fetched and rendered body content was accessible during the audit. The fetch output did not expose raw document-head metadata; live title/canonical/robots are therefore not independently verified here.
- No interactive browser/device or form-submission test was available.

## Remaining issues and recommendations

1. Have the company verify all specific stock, size, mill, certification, test, facility, processing, delivery, pricing/response-time and customer/experience assertions against current approved records before restoring any of them.
2. For performance decisions, export Search Console data grouped by both **query and page** for the exact Page 3 URL and target queries.
3. Verify deployed raw HTML metadata and structured data after the next authorized production deployment. No deployment or ranking improvement is claimed by this report.
