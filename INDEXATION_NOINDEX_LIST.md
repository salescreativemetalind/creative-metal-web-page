# Indexation Pass — Noindex / Keep List

**Site:** https://www.creativemetalind.com
**Project:** `creative-metal-industries` (SolidStart / SolidJS + Vinxi)
**Change type:** Surgical, reversible robots-meta change on low-demand near-template LOCATION pages only.
**Evidence basis:** `seo-audit/SEO-ISSUES.csv` — "keep high-value cities; consolidate or noindex low-demand duplicate location pages" and "focus crawl budget on 30–40 high-value pages."

Each pruned page keeps its content, its self-referential canonical, and remains reachable by users. Only the robots directive changed from `index, follow, max-image-preview:large` to `noindex, follow`. `follow` is retained so link equity from these pages continues to flow to the commercial/product pages they link to.

---

## A. NOINDEXED — `noindex, follow` (39 pages)

Reason for every entry: **low-demand near-template location page, per SEO-ISSUES.csv.**

### `steel-pipe-supplier-{city}` — 14 pages
| # | URL |
|---|-----|
| 1 | /steel-pipe-supplier-aurangabad |
| 2 | /steel-pipe-supplier-bhubaneswar |
| 3 | /steel-pipe-supplier-coimbatore |
| 4 | /steel-pipe-supplier-gandhidham |
| 5 | /steel-pipe-supplier-goa |
| 6 | /steel-pipe-supplier-hubli |
| 7 | /steel-pipe-supplier-jaipur |
| 8 | /steel-pipe-supplier-kochi |
| 9 | /steel-pipe-supplier-ludhiana |
| 10 | /steel-pipe-supplier-madurai |
| 11 | /steel-pipe-supplier-thane |
| 12 | /steel-pipe-supplier-trichy |
| 13 | /steel-pipe-supplier-vasai |
| 14 | /steel-pipe-supplier-vizag |

### `steel-supplier-{city-or-gidc}` — 25 pages
| # | URL |
|---|-----|
| 1 | /steel-supplier-bhopal |
| 2 | /steel-supplier-chandigarh |
| 3 | /steel-supplier-durgapur |
| 4 | /steel-supplier-haldia |
| 5 | /steel-supplier-indore |
| 6 | /steel-supplier-jamnagar |
| 7 | /steel-supplier-jhagadia |
| 8 | /steel-supplier-kakinada |
| 9 | /steel-supplier-kandla |
| 10 | /steel-supplier-kanpur |
| 11 | /steel-supplier-koyali |
| 12 | /steel-supplier-mangalore |
| 13 | /steel-supplier-mathura |
| 14 | /steel-supplier-mundra |
| 15 | /steel-supplier-nagpur |
| 16 | /steel-supplier-numaligarh |
| 17 | /steel-supplier-panipat |
| 18 | /steel-supplier-panoli-gidc |
| 19 | /steel-supplier-paradip |
| 20 | /steel-supplier-patalganga |
| 21 | /steel-supplier-raipur |
| 22 | /steel-supplier-rourkela |
| 23 | /steel-supplier-salem |
| 24 | /steel-supplier-silvassa |
| 25 | /steel-supplier-vapi-gidc |

### `ss-pipe-supplier-{city}` — 0 pages
None. Every `ss-pipe-supplier-*` page targets a KEEP-list city and stays indexable.

**NOINDEX TOTAL: 39 pages** (14 + 25 + 0).

---

## B. KEPT INDEXABLE — location pages left as `index, follow` (24 pages)

These are location pages within the three target slug patterns (plus the two national/state SS supplier pages) that were deliberately left indexable because their city token is on the KEEP-LIST, or the slug was ambiguous and defaulted to KEEP (fail-safe toward indexable).

KEEP-LIST cities: vadodara, baroda, ahmedabad, surat, rajkot, ankleshwar, bharuch, dahej, hazira, gidc-makarpura, nandesari-gidc, mumbai, delhi, chennai, bangalore, hyderabad, kolkata, pune.

### `ss-pipe-supplier-{city}` — 8 kept
| URL | KEEP reason |
|-----|-------------|
| /ss-pipe-supplier-ahmedabad | city = ahmedabad (KEEP-list) |
| /ss-pipe-supplier-ankleshwar | city = ankleshwar (KEEP-list) |
| /ss-pipe-supplier-baroda | city = baroda (KEEP-list) |
| /ss-pipe-supplier-mumbai | city = mumbai (KEEP-list) |
| /ss-pipe-supplier-pune | city = pune (KEEP-list) |
| /ss-pipe-supplier-rajkot | city = rajkot (KEEP-list) |
| /ss-pipe-supplier-surat | city = surat (KEEP-list) |
| /ss-pipe-supplier-vadodara | city = vadodara (KEEP-list) |

### `steel-pipe-supplier-{city}` — 6 kept
| URL | KEEP reason |
|-----|-------------|
| /steel-pipe-supplier-bangalore | city = bangalore (KEEP-list) |
| /steel-pipe-supplier-chennai | city = chennai (KEEP-list) |
| /steel-pipe-supplier-delhi | city = delhi (KEEP-list) |
| /steel-pipe-supplier-hyderabad | city = hyderabad (KEEP-list) |
| /steel-pipe-supplier-kolkata | city = kolkata (KEEP-list) |
| /steel-pipe-supplier-navi-mumbai | AMBIGUOUS — contains "mumbai" (KEEP-list). Defaulted to KEEP (fail-safe). |

### `steel-supplier-{city-or-gidc}` — 8 kept
| URL | KEEP reason |
|-----|-------------|
| /steel-supplier-ankleshwar-gidc | AMBIGUOUS — contains "ankleshwar" (KEEP-list). Defaulted to KEEP (fail-safe). |
| /steel-supplier-bharuch | city = bharuch (KEEP-list) |
| /steel-supplier-chakan-pune | contains "pune" (KEEP-list); task explicitly KEEP. |
| /steel-supplier-dahej | city = dahej (KEEP-list) |
| /steel-supplier-gidc-makarpura | city = gidc-makarpura (KEEP-list) |
| /steel-supplier-hazira | city = hazira (KEEP-list) |
| /steel-supplier-nandesari-gidc | city = nandesari-gidc (KEEP-list) |
| /steel-supplier-vadodara-gidc | AMBIGUOUS — contains "vadodara" (KEEP-list). Defaulted to KEEP (fail-safe). |

### National / state SS supplier pages — 2 kept (NOT city-template; not in the three target patterns — left untouched)
| URL | Note |
|-----|------|
| /stainless-steel-supplier-vadodara | National/hub SS supplier page. Untouched. |
| /stainless-steel-supplier-gujarat | State-level SS supplier page. Untouched. |

**KEPT-INDEXABLE (location + SS supplier) TOTAL: 24 pages** (8 + 6 + 8 + 2).

---

## C. Ambiguous slugs (defaulted to KEEP)
Per the boundary rule "if a slug's city token is ambiguous, KEEP it (fail safe toward indexable)":
- `/steel-pipe-supplier-navi-mumbai` — contains kept token "mumbai" → KEEP.
- `/steel-supplier-ankleshwar-gidc` — contains kept token "ankleshwar" → KEEP.
- `/steel-supplier-vadodara-gidc` — contains kept token "vadodara" → KEEP.

(`/steel-supplier-chakan-pune` contains kept token "pune" and is explicitly listed as KEEP in the task, so it is not treated as ambiguous.)

---

## D. Not touched
All 181-keyword commercial/grade/product pages, all blog pages, and all functional pages (`/`, `/about`, `/products`, `/reviews`, `/metal-trading`, `/blog`, `/sitemap`, `/privacy-policy`, `/terms`) remain `index, follow`. `/admin`, `/api`, and `[...404]` were already noindex/excluded and were not changed.
