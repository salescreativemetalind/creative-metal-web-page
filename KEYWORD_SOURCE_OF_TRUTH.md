# Keyword Source of Truth

**Site:** https://www.creativemetalind.com
**Project:** `creative-metal-industries` (SolidStart)
**Effective date of this migration pass:** current pass (follows Batch 1).

This document establishes which keyword artifacts drive SEO targeting going forward, and which are retained only as historical records.

---

## 1. AUTHORITATIVE — the ONLY intentional PRIMARY SEO target set

| File | Role | Status |
|---|---|---|
| `SEARCHED_KEYWORDS_BY_METAL.txt` | The 182 searched keywords across 10 metal categories (MS, Carbon Steel, Alloy Steel, Stainless Steel, Duplex/Super Duplex, Inconel, Hastelloy, Monel, Titanium, A36). | **AUTHORITATIVE — single source of truth for keyword intent.** |
| `NEW_KEYWORD_URL_MAP.md` | 1:1 keyword → single-owner URL map, with search intent, existing/new, primary/secondary, recommended action, priority, and clustering notes. | **AUTHORITATIVE — single source of truth for keyword → URL ownership.** |

**Rule:** Every page's SEO targeting decision must trace to these two files. Each of the 182 keywords resolves to exactly ONE primary owner URL (single-owner rule). Close variants cluster onto that owner per the clustering notes.

### Supporting authoritative analysis (derived from the two files above)
| File | Role |
|---|---|
| `SEO_NEW_KEYWORD_MIGRATION_AUDIT.md` | Read-only audit: page inventory, categories, conflicts, cannibalization, reuse/optimize/expand/new-page recommendations, indexation-deficit root cause. |
| `KEYWORD_CANNIBALIZATION_REPORT.md` | Single-owner decisions for the 10 cannibalization clusters (own-on-hub resolutions). |
| `SEO_KEYWORD_MIGRATION_CHANGELOG.md` | Per-page OLD→NEW edit records (Batch 1 + this pass). |
| `OLD_TO_NEW_KEYWORD_MIGRATION.md` | Classification of ALL SEO pages with an action. |
| `NEW_182_KEYWORD_COVERAGE_REPORT.md` | Per-keyword coverage status (all 182). |
| `OLD_TO_NEW_SEO_MIGRATION_REPORT.md` | Full migration narrative (sections 1–13). |

---

## 2. HISTORICAL / OBSOLETE-FOR-TARGETING (retained, NOT driving SEO)

These files reflect the **OLD** keyword strategy (volume-heavy, ~590-page programmatic + city long-tail play). They are **retained as historical records** and are **NOT deleted**. They **no longer drive SEO targeting** — the new 182-keyword set supersedes them.

| File | Old role | Current status |
|---|---|---|
| `ALL_KEYWORDS.txt` | Master dump of all old target keywords. | **Historical / obsolete-for-targeting.** Retained. |
| `MASTER_KEYWORDS_LIST_590_PAGES.txt` | 590-page programmatic keyword plan. | **Historical / obsolete-for-targeting.** Retained. |
| `TOP_100_KEYWORDS.txt` | Old prioritized top-100. | **Historical / obsolete-for-targeting.** Retained. |
| `EFFECTIVE_KEYWORDS_ALL.txt` | Old "effective" keyword set (all). | **Historical / obsolete-for-targeting.** Retained. |
| `EFFECTIVE_KEYWORDS_BY_METAL.txt` | Old effective set grouped by metal. | **Historical / obsolete-for-targeting.** Retained. |
| `EFFECTIVE_KEYWORDS_RANKED.txt` | Old effective set ranked. | **Historical / obsolete-for-targeting.** Retained. |
| `SEO_KEYWORD_PAGE_MAPPING.md` | Old page→keyword mapping. | **Historical / obsolete-for-targeting.** Retained (referenced by the audit for provenance). |

> These files may still be useful for provenance, backlink context, or reconstructing why a page exists — but a keyword appearing ONLY in these files is **not** an intentional primary SEO target unless it also appears in `SEARCHED_KEYWORDS_BY_METAL.txt` / `NEW_KEYWORD_URL_MAP.md`.

---

## 3. Legacy on-page `<meta name="keywords">`

The old strategy stamped `<meta name="keywords">` tags on pages. Meta-keywords are ignored by major search engines and were an artifact of the old approach. They have been **removed sitewide** (0 remain in the app source). They are **never to be re-added**. This is enforced as part of the new source-of-truth: keyword intent lives in `SEARCHED_KEYWORDS_BY_METAL.txt`, not in page meta.

---

## 4. Precedence rule (summary)

1. `SEARCHED_KEYWORDS_BY_METAL.txt` + `NEW_KEYWORD_URL_MAP.md` — **authoritative** (what to target, and where).
2. Audit / cannibalization / coverage / migration reports — **authoritative derivations**.
3. Old `.txt` / old mapping `.md` — **historical only**, retained, **not** driving targeting.
4. On-page meta keywords — **retired**, must remain at zero.
