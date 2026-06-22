#!/usr/bin/env python3
"""
GOOGLE INDEXING SUBMISSION REPORT — Creative Metal Industries
Generates google-index-submission-report.txt:
  - Every indexable URL on the site
  - The primary + secondary target keyword for each URL
  - A plain URL list ready to paste into Google Search Console
    (URL Inspection > Request Indexing) and Bing Webmaster Tools.

This is a SUBMISSION/PLANNING report. It does NOT measure live rankings —
actual ranking positions must come from Google Search Console or a live
rank check (see seo_rank_checker.py).
"""

from datetime import datetime
from pathlib import Path

BASE_URL = "https://www.creativemetalind.com"
OUT_FILE = Path("google-index-submission-report.txt")
URL_LIST_FILE = Path("urls-to-submit.txt")

# URL -> (primary keyword, [secondary/variation keywords])
URL_KEYWORDS = {
    "/": ("SS pipe supplier Vadodara",
          ["stainless steel supplier Vadodara", "SS 304 316L pipe supplier",
           "Creative Metal Industries Vadodara", "steel stockist Vadodara"]),
    "/about": ("Creative Metal Industries Vadodara",
               ["steel supplier company Vadodara", "metal stockist Gujarat since 2012"]),
    "/products": ("steel size and weight chart",
                  ["MS angle weight chart", "ISMC ISMB weight chart",
                   "SS pipe weight chart ASTM A312", "TMT bar weight chart IS 1786"]),
    "/reviews": ("Creative Metal Industries reviews",
                 ["SS pipe supplier Vadodara reviews", "steel supplier customer reviews Gujarat"]),
    "/metal-trading": ("metal trading company Vadodara",
                       ["steel trading company Gujarat", "metal importer exporter India"]),
    "/ss-pipe-supplier-vadodara": ("SS pipe supplier Vadodara",
                                   ["stainless steel pipe supplier Vadodara",
                                    "SS 304 316L pipe Vadodara", "Duplex 2205 pipe supplier Vadodara"]),
    "/stainless-steel-supplier-vadodara": ("stainless steel supplier Vadodara",
                                           ["stainless steel pipe manufacturer Vadodara",
                                            "SS plate sheet supplier Vadodara"]),
    "/duplex-steel-supplier-vadodara": ("duplex steel supplier Vadodara",
                                        ["super duplex supplier Vadodara",
                                         "duplex 2205 super duplex 2507 Vadodara"]),
    "/carbon-steel-pipe-fittings-vadodara": ("carbon steel pipe fittings Vadodara",
                                             ["CS buttweld fittings supplier Vadodara",
                                              "A234 WPB fittings Vadodara"]),
    "/carbon-steel-sa516-plate-stockist-india": ("carbon steel SA 516 plate stockist India",
                                                 ["SA 516 Gr.70 plate supplier",
                                                  "pressure vessel plate stockist India"]),
    "/nace-hic-steel-plate-supplier-india": ("NACE HIC steel plate supplier India",
                                             ["sour service steel plate India",
                                              "NACE MR0175 HIC tested plate"]),
    "/tmt-bars-supplier-gujarat": ("TMT bars supplier Gujarat",
                                   ["Fe 500D TMT bars Gujarat", "TMT reinforcement bar supplier Vadodara"]),
    "/ss-304-316l-pipe-supplier-india": ("SS 304 316L pipe supplier India",
                                         ["ASTM A312 TP304 TP316L pipe India",
                                          "stainless steel seamless pipe India"]),
    "/blog": ("steel technical guides blog",
              ["stainless steel guide", "metal selection guide India"]),
}

# Blog articles: slug -> (primary keyword, [secondary keywords])
BLOG_KEYWORDS = {
    "ss-304-stainless-steel-guide": ("SS 304 stainless steel", ["304 stainless steel properties", "18/8 stainless steel"]),
    "ss-316l-stainless-steel-guide": ("SS 316L stainless steel", ["316L marine grade stainless", "316L vs 304"]),
    "duplex-2205-steel-guide": ("duplex 2205 steel", ["UNS S31803", "duplex 2205 properties"]),
    "super-duplex-2507-guide": ("super duplex 2507", ["UNS S32750", "PREN 42 seawater grade"]),
    "hastelloy-c276-guide": ("Hastelloy C-276", ["N10276 nickel alloy", "Hastelloy corrosion resistance"]),
    "inconel-625-guide": ("Inconel 625", ["N06625 high temperature alloy", "Inconel 625 properties"]),
    "p91-alloy-steel-guide": ("P91 alloy steel", ["ASTM A335 P91", "power plant boiler pipe"]),
    "sa-516-carbon-steel-plate-guide": ("SA 516 carbon steel plate", ["SA 516 Gr.70 plate", "pressure vessel plate"]),
    "nace-hic-steel-plates-guide": ("NACE HIC steel plates", ["sour service plate", "HIC tested steel plate"]),
    "tmt-bars-guide": ("TMT bars guide", ["Fe 500D TMT bars", "TMT bar grades"]),
    "astm-a312-pipe-guide": ("ASTM A312 pipe", ["SS seamless pipe standard", "A312 TP304 TP316L"]),
    "api-5l-pipe-guide": ("API 5L pipe", ["line pipe grades", "API 5L X42 X65 pipe"]),
    "pipe-schedule-chart": ("pipe schedule chart", ["SCH 40 80 160 chart", "pipe wall thickness chart"]),
    "mill-test-certificate-guide": ("mill test certificate", ["how to read MTC", "EN 10204 3.1 3.2"]),
    "titanium-grade-2-vs-grade-5": ("titanium grade 2 vs grade 5", ["Ti-6Al-4V", "CP titanium grade 2"]),
    "ss-pipe-fittings-flanges-guide": ("SS pipe fittings flanges", ["buttweld fittings flanges supplier", "A403 A182 fittings"]),
    "why-creative-metal-industries": ("why Creative Metal Industries", ["best steel supplier Vadodara", "trusted metal supplier Gujarat"]),
    "industrial-raw-material-supplier-india": ("industrial raw material supplier India", ["engineering material supplier", "industrial metal supplier Gujarat"]),
    "erw-vs-seamless-pipe": ("ERW vs seamless pipe", ["welded vs seamless pipe", "ERW seamless difference India"]),
    # New keyword-focused articles
    "ms-structural-steel-guide": ("MS angle channel plate pipe", ["MS angle", "MS channel ISMC", "MS plate IS 2062", "MS ERW pipe", "MS seamless pipe"]),
    "carbon-steel-pipe-guide": ("carbon steel pipe", ["ASTM A106 Gr.B pipe", "carbon steel plate", "carbon steel fittings", "carbon steel flange"]),
    "ss-sheet-plate-guide": ("stainless steel sheet plate", ["SS 304 plate", "SS 316 plate", "SS 310 plate", "SS 410 sheet", "2B No.4 finish sheet"]),
    "ss-long-products-fittings-guide": ("SS angle channel flat rod fittings", ["SS angle", "SS 310 rod", "SS ERW pipe", "SS 317 pipe", "SS flange"]),
    "exotic-alloy-plate-sheet-guide": ("exotic alloy sheet plate", ["duplex super duplex plate sheet", "titanium sheet pipe bar", "Monel Inconel Hastelloy"]),
}


def main():
    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # Build the full ordered URL -> keywords map
    all_rows = []
    for url, (primary, secondary) in URL_KEYWORDS.items():
        all_rows.append((BASE_URL + (url if url != "/" else "/"), primary, secondary))
    for slug, (primary, secondary) in BLOG_KEYWORDS.items():
        all_rows.append((f"{BASE_URL}/blog/{slug}", primary, secondary))

    # ── Detailed submission report ──
    lines = []
    lines.append("=" * 78)
    lines.append("GOOGLE INDEXING SUBMISSION REPORT — CREATIVE METAL INDUSTRIES")
    lines.append(f"Website : {BASE_URL}")
    lines.append(f"Generated: {ts}")
    lines.append("=" * 78)
    lines.append("")
    lines.append("PURPOSE")
    lines.append("  This report lists every indexable URL and its target keyword(s),")
    lines.append("  ready to submit to Google for indexing. It is a SUBMISSION plan,")
    lines.append("  not a live ranking measurement.")
    lines.append("")
    lines.append("HOW TO GET YOUR PAGES INDEXED ON GOOGLE")
    lines.append("  1. Open Google Search Console (search.google.com/search-console).")
    lines.append(f"  2. Confirm the sitemap is submitted: {BASE_URL}/sitemap.xml")
    lines.append("     (Sitemaps > add 'sitemap.xml' > Submit).")
    lines.append("  3. For priority pages, use 'URL Inspection', paste the URL, then")
    lines.append("     click 'Request Indexing'. (Limit ~10-12 manual requests/day.)")
    lines.append("  4. Repeat for Bing Webmaster Tools (bing.com/webmasters).")
    lines.append("")
    lines.append(f"TOTAL INDEXABLE URLS: {len(all_rows)}")
    lines.append("=" * 78)
    lines.append("")

    for i, (url, primary, secondary) in enumerate(all_rows, 1):
        lines.append(f"[{i:02d}] {url}")
        lines.append(f"     PRIMARY KEYWORD   : {primary}")
        if secondary:
            lines.append(f"     SECONDARY KEYWORDS: {', '.join(secondary)}")
        lines.append(f"     SUBMIT TO         : Google Search Console + Bing Webmaster Tools")
        lines.append("")

    # ── Keyword -> URL index (so you know which page targets which keyword) ──
    lines.append("=" * 78)
    lines.append("KEYWORD → TARGET URL INDEX")
    lines.append("(Use this to track which page should rank for each keyword.)")
    lines.append("=" * 78)
    lines.append("")
    kw_map = []
    for url, primary, secondary in all_rows:
        kw_map.append((primary, url))
        for s in secondary:
            kw_map.append((s, url))
    for kw, url in sorted(kw_map, key=lambda x: x[0].lower()):
        lines.append(f"  {kw:<48} -> {url}")
    lines.append("")
    lines.append(f"TOTAL TARGET KEYWORDS: {len(kw_map)}")

    OUT_FILE.write_text("\n".join(lines), encoding="utf-8")
    print(f"[SAVED] {OUT_FILE}  ({len(all_rows)} URLs, {len(kw_map)} keywords)")

    # ── Plain URL list for quick copy-paste ──
    url_lines = [BASE_URL + "/sitemap.xml"]
    url_lines += [row[0] for row in all_rows]
    URL_LIST_FILE.write_text("\n".join(url_lines) + "\n", encoding="utf-8")
    print(f"[SAVED] {URL_LIST_FILE}  (plain URL list for GSC / Bing)")


if __name__ == "__main__":
    main()
