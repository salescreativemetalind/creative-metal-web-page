# Duplex product evidence and claim decisions — 2026-10-21

## Finding

Repository review did not locate an approved duplex catalog, manufacturer datasheet tied to CMI supply, traceable product MTC, current stock list, or company-approved product range. The same gap is recorded in `reports/seo-keyword-research/company-evidence-matrix.md`. Website copy, route mappings, search terms, and product images are not evidence that a product is currently offered or conforms to a specification.

The three duplex routes now retain their buyer search intent but frame grade names as the subject of an enquiry. They request project-designated product form, grade, applicable specification, dimensions, quantity, destination and documents. They do not confirm availability, dimensional range, testing, certification, or conformity for a specific order. Grade equivalence must be confirmed by the project engineer.

## Claim decisions

| File/section | Decision | Reason and evidence still needed |
|---|---|---|
| `src/routes/duplex-steel-supplier-vadodara.tsx`, grade cards and hero | Removed the unsourced grade-to-standard mappings, dimensions, product-form/range promises, application claims and implied offer list. Retained Duplex 2205, Super Duplex 2507 and Zeron 100 as enquiry examples. | No approved grade-by-form catalog or current range/stock record was found. To reinstate any supply claim, provide a company-approved catalog plus supplier/manufacturer datasheets or traceable order records. |
| Same route, FAQs and metadata | Retained Vadodara duplex supplier intent. IBR, NACE and MTC now appear only as buyer-specified document/compliance requirements to be confirmed order by order. | No certificate or MTC record supports blanket certification. Any actual certification claim needs the certificate, issuer, holder, scope, covered product/site, and validity. |
| `src/routes/duplex-2205-plate-supplier-india.tsx` | Removed unsupported composition, mechanical properties, PREN, dimensions, stock, testing, processing, application and delivery assertions. Retained the 2205 plate intent and S31803/S32205 designations in title/H1 as query identifiers; the copy says the project designation and plate specification must be confirmed. | Need an approved plate catalog and manufacturer datasheet/MTC to publish grade/specification pairings or ranges. Do not infer equivalence between S31803 and S32205; any substitution requires project-engineer approval. |
| Same route, FAQs, CTA and related links | Stock question explicitly says availability is not confirmed. Quote CTA now requests an enquiry. Super Duplex 2507 Pipe link points to `/super-duplex-2507-pipe-supplier`. | Need a dated stock/range list before making availability promises. Link target is a dedicated pipe-intent route. |
| `src/routes/super-duplex-2507-pipe-supplier.tsx` | Removed unsupported chemistry, PREN, strength, standard/range, size, testing, application and stock claims. Retained 2507/S32750 pipe intent and asks for project-specified form, specification, dimensions and records. | Need approved pipe catalog and manufacturer datasheet/MTC confirming each grade, product form, applicable standard, dimensions and any numerical properties. |
| Same route, FAQs/metadata/CTA | Changed “stockist” language to “supplier”; NACE and certificates are buyer requirements only, with explicit order-specific confirmation. Removed immediate quote promise. | No NACE scope, certificate, current stock, or delivery evidence found. Provide certificate and stock/dispatch records before making those claims. |
| `src/routes/index.tsx`, company and certification language | Replaced unsupported manufacturer/stockist/importer, years-in-business, facility, export, testing, certification, rapid response, stock, mill-authorization and testimonial-as-verified claims where identified. IBR/NACE/HIC/MTC references now ask buyers to specify clauses/documents for review. Added an enquiry-reference qualification beside the rotating product specifications and retained the category-card qualification. Existing address/contact details and page-listed technical ranges/standards/grade mappings were left intact; their accuracy and current supply remain unverified. | Company profile, incorporation/history evidence, facility records, export records, scoped certificates, mill authorizations, traceable inspection/supply records, and testimonial consent/provenance are needed before restoring corresponding claims. Product data needs a separately approved catalog and supporting manufacturer documents. |
| `src/app.tsx`, global LocalBusiness JSON-LD | Removed unsupported price/payment, founding date, employee count, coordinates, opening hours and service-area claims. Retained the public name, address and contact fields already used on site. | Confirm retained business identity/contact/address with an approved company profile. No rating/review, inventory, or certification fields were added. |

## Technical specification scope

ASTM scope pages distinguish product forms: A790 is for seamless and straight-seam welded ferritic/austenitic pipe; A928 covers electric-fusion-welded duplex pipe made with filler metal; A182 covers forged or rolled piping components; A240 covers plate, sheet and strip. These scope descriptions do not prove CMI supply, grade pairings, dimensions or conformance. No duplex ASTM mappings remain on the three product routes after this pass. References remain in the homepage’s broad, page-listed product arrays and are not independently verified by this repository review. Sources: [ASTM A790](https://store.astm.org/a0790_a0790m-20.html), [ASTM A928](https://store.astm.org/a0928_a0928m-09.html), [ASTM A182](https://store.astm.org/a0182_a0182m-21.html), [ASTM A240](https://store.astm.org/a0240_a0240m-26.html).

## Company approval required (not inferable technically)

Written business approval and relevant records are required for: current offered/stocked grades and product forms; named manufacturers or authorized supplier relationships; certificates held by the company, facility, or product; inspection/testing services; processing/manufacturing capability; delivery or dispatch commitments; company history, facility size and export reach; and customer-review provenance. Do not turn buyer requests for IBR/NACE/MTC documents into a claim that CMI or a product is certified.

## Documents needed to close the remaining gaps

1. Current, company-approved duplex/super duplex catalog by product form, listing grade/UNS, applicable product specification and approved dimensions.
2. Manufacturer datasheets and traceable representative MTCs for each advertised grade/form, including any claimed mechanical, chemical, PREN, heat-treatment or testing values.
3. Dated stock and availability records, plus dispatch/delivery service documentation for any commercial timing promises.
4. Copies of certificates intended for publication with issuer, holder, scope, covered site/product and validity; plus any mill authorization records.
5. Company-approved capability/history profile and evidence for facility, manufacturing/processing, exports, inspection/testing, review/testimonial and service claims.

## Status

The text changes reduce unsupported assertions but do not validate the homepage’s retained technical lists or establish current product availability. No post-deployment Search Console evidence is available, and no ranking outcome is claimed.
