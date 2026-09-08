# Keyword Cannibalization Report

**Site:** https://www.creativemetalind.com
**Source:** `SEO_NEW_KEYWORD_MIGRATION_AUDIT.md` §6 (10 cannibalization clusters).
**Note:** No destructive action performed. No pages merged, redirected, or deleted. This is a decisions/tracking document. For BATCH 1, the flagship-grade decisions (Inconel 625, Hastelloy C276, Duplex 2205 pipe) are resolved as **OWN-ON-HUB** — the hub/city page is the single commercial owner; blog guides stay informational. No redirects or merges were carried out.

| OLD PAGE (competing) | NEW PRIMARY PAGE (single owner) | KEYWORD (cluster) | REASON | ACTION |
|---|---|---|---|---|
| /blog/what-is-ibr-certification, /blog/ibr-form-iiic-complete-guide, /blog/why-ibr-certification-mandatory | /blog/ibr-certification-guide | IBR certification | Multiple blog pages competing for the same IBR head term; strongest impressions/position on the pillar | Designate pillar owner; satellites → definition / Form III-C / FAQ long-tails linking to pillar (metadata-only, deferred) |
| /blog/pipe-schedule-chart, /blog/what-is-pipe-schedule | /blog/understanding-pipe-schedules | Pipe schedule | Three pages target the same schedule head term | Pillar owns head term; others → chart-table / definition intent (deferred) |
| /blog/wn-flange-vs-so-flange, /blog/what-is-flanges-types | /blog/ss-flange-types-guide | Flange types (SORF vs WNRF) | Overlapping flange-type intent across three pages | Pillar owns; others → comparison / definition (deferred) |
| /blog/seamless-vs-welded-ss-pipe, /blog/seamless-vs-spiral-welded-pipe, /blog/difference-seamless-erw-spiral | /blog/erw-vs-seamless-pipe | Seamless vs welded / ERW | Several near-duplicate comparison pages | Pillar owns; others → SS-specific / spiral / 3-way (deferred) |
| /blog/inconel-625-guide, /blog/inconel-625-pipe-price-india | **/inconel-pipe-supplier-india** | inconel 625, inconel 625 supplier, inconel 625 pipe, inconel 625 pipe supplier | Flagship Inconel grade had no standalone commercial owner; hub Title/H1 already lists 625 | **OWN-ON-HUB (BATCH 1 — resolved).** Hub is commercial owner; guide → informational; price → price intent. No redirect/merge. |
| /blog/hastelloy-c276-guide, /blog/hastelloy-c276-pipe-price | **/hastelloy-pipe-supplier-india** | hastelloy c276, hastelloy c276 supplier, hastelloy c276 pipe, hastelloy c276 pipe supplier | Flagship Hastelloy grade had no standalone owner; hub Title already lists C-276 | **OWN-ON-HUB (BATCH 1 — resolved).** Hub is commercial owner; guide → informational; price → price intent. No redirect/merge. |
| /duplex-2205-plate-supplier-india, /blog/duplex-2205-steel-guide | **/duplex-steel-supplier-vadodara** | duplex 2205 pipe, duplex 2205 pipe supplier, 2205 pipe, duplex 2205 supplier | 2205 pipe intent was split across city + plate pages | **OWN-ON-HUB (BATCH 1 — resolved).** Vadodara page owns 2205 *pipe* intent (broadened wording, Vadodara identity kept); plate page keeps plate intent; guide → informational. No redirect/merge. |
| /blog/ss-304-stainless-steel-guide, /blog/ss-316l-stainless-steel-guide | /ss-304-316l-pipe-supplier-india | SS 304 / SS 316 (pipe vs informational) | Commercial pipe page vs informational grade guides | Commercial pipe → pipe page (BATCH 1 reinforced supplier phrasing); informational → guides. Acceptable while titles split intent. |
| inconel-vs-hastelloy intent in various what-is / comparison pages | /blog/hastelloy-vs-inconel | Hastelloy vs Inconel (informational) | Comparison intent spread across pages | Consolidate onto one comparison pillar; fold the weaker (deferred) |
| standalone comparison `.tsx` vs `blog/[slug].tsx` ARTICLES entries | keep the standalone `.tsx` (verify per slug) | `[slug]`-vs-standalone duplicate URL | Some slugs may resolve via BOTH the ARTICLES map and a static file — true duplicate/canonical risk | Verify each slug; keep standalone or remove the `[slug]` map entry (deferred; requires careful per-slug review) |

---

## BATCH 1 resolution summary
- **Inconel 625** → owned on `/inconel-pipe-supplier-india` (added dedicated 625 H2 using existing facts).
- **Hastelloy C276** → owned on `/hastelloy-pipe-supplier-india` (added dedicated C276 H2 using existing facts).
- **Duplex 2205 pipe** → owned on `/duplex-steel-supplier-vadodara` (added natural 2205-pipe phrasing; Vadodara identity retained).

No redirects, merges, deletions, or canonical changes were performed. The remaining clusters (IBR, pipe schedule, flange types, seamless/ERW, Hastelloy-vs-Inconel, `[slug]`-vs-standalone) are documented for later phases and were NOT touched in BATCH 1.
