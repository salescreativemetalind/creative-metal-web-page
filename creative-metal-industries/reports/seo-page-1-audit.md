# SEO Page 1 Audit — Alloy Steel Pipe Supplier India

**Audit date:** 2026-10-15
**Page URL:** https://www.creativemetalind.com/alloy-steel-pipe-supplier-india

## Target keywords

- **Primary:** alloy steel pipe supplier India
- **Secondary:** IBR Form III-C; IBR certification; IBR certified alloy steel pipe; ASTM A335 P91 pipe supplier; P22 pipe supplier; P11 pipe supplier

## Existing implementation

- **Source route:** `src/routes/alloy-steel-pipe-supplier-india.tsx`
- **Purpose:** Commercial alloy-steel pipe landing page with grade/specification details, IBR information, applications, FAQs and enquiry actions.
- **Title (before and after):** `Alloy Steel Pipe Supplier India | P91 P22 P11 | IBR | CMI`
- **Meta description before:** `Alloy steel pipe supplier India — ASTM A335 P91, P22, P11, P5, P9, P92 seamless pipes for power plants and boilers. IBR Form III-C certified.`
- **Meta description after:** `Alloy steel pipe supplier in India for ASTM A335 P91, P22 and P11. Specify size and schedule; confirm IBR Form III-C documents and order availability.`
- **H1 (unchanged):** `Alloy Steel Pipe Supplier in India — ASTM A335 P91, P22, P11`
- **Heading structure:** Grade table; specifications/technical details; IBR certification information; P91 grade focus; why choose CMI; applications; industries; FAQ; quote CTA; related pages. One visible H1 is present.
- **Canonical:** `https://www.creativemetalind.com/alloy-steel-pipe-supplier-india` (self-referencing; unchanged)
- **Robots:** `index, follow, max-image-preview:large` (indexable; unchanged)
- **Structured data:** `BreadcrumbList` and `FAQPage`, with FAQ data generated from the visible FAQ array. FAQ content was updated with its visible answers.
- **Internal links:** Existing related links to P22 and P11 alloy-steel product routes, duplex, carbon-steel and stainless-steel pages; contact, telephone and WhatsApp actions remain.
- **Responsive/functionality observations:** Specification cards use an auto-fit responsive grid. The wide grade table sits in an overflow container. FAQ uses native `<details>`. Quote actions use telephone, WhatsApp and the existing homepage contact anchor. These structures were preserved.

## Search Console evidence

The workspace includes `https___www.creativemetalind.com_-Performance-on-Search-2026-09-21.xlsx`. Its dashboard documents a Web search period of **2026-06-19 through 2026-09-18 (92 days)**. The `Pages` sheet records this URL with:

| Landing page | Clicks | Impressions | CTR | Average position |
|---|---:|---:|---:|---:|
| `/alloy-steel-pipe-supplier-india` | 0 | 7 | 0% | 12.71 |

The separate `Queries` sheet includes site-level rows such as `ibr certification` (0 clicks, 77 impressions, 0% CTR, position 14.71), `ibr form iii-c` (0, 18, 0%, 10.06), `p91` (0, 21, 0%, 56.67), and `alloy steel p91` (0, 7, 0%, 70.00). **These query totals cannot be attributed to this URL** because the export has independent query and page aggregates, not query-by-page rows. The exact primary phrase and P11/P22 supplier phrases were not found in the inspected query rows. No search volume, competitor result, or ranking estimate is inferred.

## Problems found and changes implemented

1. The existing title and H1 already target the primary alloy-pipe supplier intent, so they were retained.
2. The old meta and social descriptions made an absolute “IBR certified” claim and implied ready stock. As the project contains no actual order/lot certificates to verify those promises, the descriptions now invite a buyer to enquire and confirm availability and required documents for the specific order.
3. The opening paragraph had repeated keyword variants and broad availability/certification/dispatch promises. It was shortened to state the listed ASTM A335 pipe scope and direct buyers to confirm availability and documentation for their order.
4. The IBR section previously generalized regulatory requirements and claimed dedicated IBR-certified stock. It now directs buyers to confirm project-specific IBR requirements, certificate scope, traceability and inspection, without asserting that CMI has a certificate for every grade or lot.
5. The technical documentation card and FAQ answers were changed from blanket certificate/testing statements to order-specific requirements and verification. The FAQ schema is generated from these visible FAQ answers, so it remains synchronized.
6. The grade table previously labeled individual grades “Ready Stock” or “Available.” These unverified live-inventory claims now say “Confirm availability”; the table heading and column label were adjusted accordingly. The size FAQ similarly distinguishes listed enquiry ranges from confirmed stock.
7. The quote CTA no longer promises an IBR-certified quote or ready stock. It invites a quote request and asks buyers to confirm order-specific documentation.
8. Existing title, H1, URL, canonical, indexing directive, visual styling, form/contact links, grade/specification information, breadcrumb schema, and relevant P11/P22 links were retained.

## Files changed

- Modified: `src/routes/alloy-steel-pipe-supplier-india.tsx`
- Created: `reports/seo-page-1-audit.md`
- Pre-existing unrelated worktree files were left untouched: `../Scalenut.pdf` (modified), `website-pages-keywords.pdf` (untracked), and `reports/stainless-steel-pipe-manufacturer-seo.md` (untracked).

## Validation

- **Source review:** Completed. Title/H1, metadata, canonical, robots, FAQ schema source, internal links and responsive/form structures reviewed.
- **Diagnostics:** No editor diagnostics reported for the route after changes.
- **Whitespace check:** `git diff --check` passed after the source and report edits.
- **Build:** `npm run build` passed. Vinxi built the SSR/client/server output, prerendered 51 routes (including `/alloy-steel-pipe-supplier-india`), and generated Vercel output.
- **Sitemap/robots:** Source inspection confirmed the route is in `public/sitemap.xml`; `public/robots.txt` allows public pages.
- **Live page:** Before this edit, the live page returned HTTP 200 and showed the old title/description/H1 with the expected canonical and robots directive. This task did not deploy changes, so production is not expected to reflect local edits.
- **Search performance:** The export is historical (through 2026-09-18). No post-change performance or Google indexing result is available.

## Remaining issues / follow-up

- The company should verify grade-specific specifications, mill/source claims, dimensions/schedules, test scope and current availability before publication. The code and existing website copy are not substitutes for actual certificates or order records.
- No commit, push or deployment is part of this task; production HTML was not rechecked after the local changes.
- After an authorized deployment and recrawl, inspect this URL in Google Search Console and compare the correct page/query data. Do not claim indexing or ranking improvements without measured evidence.
