# SEO Page 4 Audit — SS 304 & SS 316L Pipe Supplier India

## Scope

- **URL:** https://www.creativemetalind.com/ss-304-316l-pipe-supplier-india
- **Primary terms:** SS 304 pipe supplier; SS 316L pipe supplier India
- **Secondary topics:** ASTM A312 SS 304 pipe; SS 316L seamless pipe supplier; SS 304 welded pipe; SS 316L stainless steel pipe
- **Audit date:** 2026-10-15
- **Scope restriction:** Only the Page 4 route was edited. The general pipe, seamless-pipe, and Vadodara pages were read for overlap and not modified. No commit, push, or deployment was performed.

## Existing SEO implementation

Source: `src/routes/ss-304-316l-pipe-supplier-india.tsx`.

### Before

- **Title:** `SS 304 & 316L Pipe Supplier India | ASTM A312 | CMI`
- **Meta description:** `SS 304 and SS 316L pipe supplier in India — ASTM A312 TP304, TP304L, TP316, TP316L seamless and welded, 6NB to 600NB, SCH 5S to XXS. Grade data, IBR, MTC.`
- **H1:** `SS 304 & SS 316L Pipe Supplier in India`
- **Canonical:** `https://www.creativemetalind.com/ss-304-316l-pipe-supplier-india` (self-referencing)
- **Robots:** `index, follow, max-image-preview:large`
- **Structured data:** BreadcrumbList and WebPage in a JSON-LD graph, plus FAQPage generated from the visible FAQ array. Existing FAQ schema is data-driven, so it follows the FAQ copy changes.
- **Content:** SS 304/304L/316/316L property comparison, grade selection discussion, sizes/schedules/specifications, applications, FAQ, contact CTA and related links.
- **Internal links:** Vadodara supplier and seamless-pipe pages were linked; there was no direct link to general `/ss-pipe-supplier`.

## Search Console evidence and limitations

The project contains `https___www.creativemetalind.com_-Performance-on-Search-2026-09-21.xlsx`. Existing audit notes for this workbook record its Web date range as **2026-06-19 through 2026-09-18 (92 days)** and describe its `Queries` and `Pages` sheets as separate aggregate data, not query-by-page associations. Therefore, clicks, impressions, CTR and average position for this exact page and target queries cannot be confirmed from those aggregates.

Direct workbook parsing was attempted in this environment but was unavailable because Python's `openpyxl` module is not installed. It was not installed as part of this task. No query totals were assigned to this URL and no ranking/search-volume estimates were inferred.

## Keyword overlap assessment

The inspected source pages had distinct purpose and headings:

- `/ss-pipe-supplier`: general stainless-steel pipe enquiries across seamless and welded forms; India-focused supplier intent.
- `/ss-seamless-pipe-supplier-india`: seamless-specific grades, standards, sizes and order enquiries.
- `/ss-304-316l-pipe-supplier-india`: exact grade cluster and grade-property comparison for SS 304/304L/316/316L in pipe form.
- `/stainless-steel-supplier-vadodara`: local Vadodara supplier intent and broad product forms.

Page 4 retains the grade-specific H1 and property comparison. A contextual link to the general pipe page was added, and the existing seamless and Vadodara links remain. No URL or sibling page was changed.

## Claims requiring company evidence

No company records, certificates, dispatch records, mill authorization documents, inspection reports or facility evidence were found to independently substantiate this route's commercial claims. The source had stated that the company stocks listed grades and sizes, offers MTC/IBR/NACE documentation, accepts named third-party inspections at its facility, has ready stock at GIDC Makarpura, and sources from named mills. These public statements alone are not verification. This does not establish that they are false; company-approved evidence is needed before presenting them as guarantees.

ASTM A312 / ASME SA-312 is identified as the pipe standard on the route, while ASTM A213 applies to tube. The copy was corrected to distinguish those product forms. Product availability, document scope, inspection and source are now framed for order-specific confirmation.

## Problems found and changes made

Three focused improvements were implemented:

1. **Metadata:** Updated the title to `SS 304 & SS 316L Pipe Supplier in India | ASTM A312`. The meta description now emphasizes grade comparison, seamless/welded forms, ASTM A312 details and an order-specific quotation, rather than promising IBR/MTC coverage. Open Graph and Twitter descriptions were aligned and the ready-stock statement removed.
2. **Accuracy / buying information:** Revised the opening copy, specifications table, FAQ answers, and documentation section to remove unverified stock, certificates, mill relationships and inspection claims or qualify them as requiring confirmation for the individual order. Removed the “Mill Brands We Stock” list because no supporting relationship evidence was found in the repository. Replaced it with a short enquiry instruction for buyers who require mill/source documentation.
3. **Grade explanation / linking:** Reworked the 304 vs 316L FAQ to avoid universal corrosion or service claims, changed the comparison table's chloride row to relative wording, and removed the single max-service-temperature row that could be misread as a universal design limit. Added an internal link to `/ss-pipe-supplier` while retaining the existing local and seamless links.

The grade composition and nominal property comparison remains, with explanatory copy identifying it as reference information and directing buyers to project specifications and applicable order documents. Page layout, URL, CTA controls, FAQ component, canonical and indexing behavior were preserved.

## Files modified / created

- Modified: `src/routes/ss-304-316l-pipe-supplier-india.tsx`
- Created: `reports/seo-page-4-audit.md`

Pre-existing Page 1 and Page 3 modifications, Page 1–3 reports, PDFs and other untracked/modified work were preserved.

## Validation results

- `git diff --check`: passed before and after implementation.
- `npm run build`: passed; Vinxi prerendered 51 routes and completed Vercel output generation.
- `npm run check:sitemap`: passed; all 51 sitemap URLs have built pages, every indexable built page is in the sitemap, and no noindex page is listed.
- No lint, test, or type-check script is defined in `package.json`.
- Final Git status showed only `src/routes/ss-304-316l-pipe-supplier-india.tsx` modified and `reports/seo-page-4-audit.md` added by this task; earlier local work remained untouched.
- Source inspection confirmed one H1, self-canonical, indexable robots directive, matching visible FAQ and FAQ JSON-LD source, and preserved phone/WhatsApp/enquiry links.
- Live page fetch returned rendered body content but did not expose raw head metadata; production metadata and post-edit rendering have not been independently verified.

## Remaining issues

1. Company should provide evidence before restoring stock guarantees, facility claims, mill relationships, MTC/IBR/NACE availability, or named inspection capabilities.
2. Export Search Console data grouped by both query and exact page URL to establish target-query performance for this route.
3. Confirm technical property/specification figures with current approved material standards and have the responsible technical reviewer approve selection guidance.
4. Verify the live page metadata after an authorized deployment; no deployment or ranking improvement is claimed here.
