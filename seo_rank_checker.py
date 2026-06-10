"""
seo_rank_checker.py  —  Creative Metal Industries SEO Rank Checker
═══════════════════════════════════════════════════════════════════
Checks live search rankings for creativemetalind.com across 55
target keywords using Startpage (Google proxy, no bot blocking).

Shows:
  • Position number (e.g. #3)
  • Page number   (e.g. Page 1)
  • Exact URL that ranked
  • Color-coded summary table

Usage:
    python3 seo_rank_checker.py

Output:
    Terminal table + seo_rank_report.txt

Requires:
    pip install requests beautifulsoup4
"""

import time
import datetime
import urllib.parse
import requests
from bs4 import BeautifulSoup

# ── Configuration ─────────────────────────────────────────────────────────────
TARGET        = "creativemetalind.com"   # domain to look for
MAX_PAGES     = 100                        # pages to search (10 × 100 = 1000 results)
DELAY         = 3.0                       # seconds between each keyword search
PAGE_DELAY    = 1.5                       # seconds between pagination requests
RESULTS_PER_P = 10                        # Startpage returns 10 per page

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (X11; Linux x86_64; rv:120.0) "
        "Gecko/20100101 Firefox/120.0"
    ),
    "Accept":          "text/html,application/xhtml+xml",
    "Accept-Language": "en-US,en;q=0.5",
}

# ── ANSI color codes ──────────────────────────────────────────────────────────
G  = "\033[92m"   # green
Y  = "\033[93m"   # yellow
R  = "\033[91m"   # red
C  = "\033[96m"   # cyan
B  = "\033[1m"    # bold
D  = "\033[2m"    # dim
RS = "\033[0m"    # reset

# ── Keywords by category ──────────────────────────────────────────────────────
KEYWORDS = {

    "🏆  BRAND KEYWORDS": [
        "creative metal industries vadodara",
        "creative metal industries",
        "creative metal industries ss pipe supplier",
        "creative metal industries gujarat",
        "creativemetalind",
    ],

    "🟢  HIGH CONFIDENCE — City-Level": [
        "SS pipe supplier Vadodara",
        "stainless steel pipe manufacturer Vadodara",
        "stainless steel supplier Vadodara Gujarat",
        "duplex steel supplier Vadodara",
        "alloy steel P91 pipe stockist Gujarat",
        "IBR certified pipe supplier Gujarat",
        "metal trading company in Vadodara",
        "industrial metal supplier Vadodara",
        "steel supplier Vadodara Gujarat",
        "metal stockist Gujarat",
        "carbon steel plate supplier Vadodara",
        "pipe fittings flanges supplier Vadodara",
        "ERW pipe supplier Vadodara",
        "MS angle weight chart supplier Vadodara",
    ],

    "🟡  MEDIUM — Product + Location": [
        "SS seamless pipe manufacturer Gujarat",
        "duplex 2205 pipe stockist Gujarat",
        "super duplex 2507 supplier India",
        "alloy steel P91 P22 pipe supplier India",
        "Inconel 625 pipe supplier India",
        "Hastelloy C-276 supplier India",
        "Monel 400 supplier India",
        "Titanium pipe supplier India",
        "boiler tube IBR Form III-C supplier India",
        "SS 904L pipe supplier India",
        "carbon steel SA 516 plate stockist India",
        "NACE HIC steel plate supplier India",
        "TMT bars supplier Gujarat",
        "SS 304 316L pipe supplier India",
    ],

    "📚  BLOG / TECHNICAL": [
        "SS 304 vs 316L stainless steel",
        "duplex 2205 vs super duplex 2507",
        "how to read mill test certificate",
        "P91 alloy steel power plant pipe",
        "ASTM A312 vs API 5L pipe",
        "Hastelloy C-276 vs Inconel 625",
        "pipe schedule SCH 40 80 160 chart",
        "ERW vs seamless pipe difference India",
        "titanium grade 2 vs grade 5 India",
        "MS angle ISMC weight chart India",
    ],

    "🔵  BROAD COMMERCIAL": [
        "stainless steel pipe manufacturer India",
        "industrial metal supplier India",
        "steel trading company Gujarat",
        "SS pipe fittings flanges supplier India",
        "metal importer exporter India",
        "industrial raw material supplier Gujarat",
        "engineering material supplier India",
        "steel stockist Vadodara",
    ],
}

# ── Search function ───────────────────────────────────────────────────────────
def search_startpage(keyword: str) -> dict:
    """
    Search Startpage (Google results proxy) for the keyword.
    Returns the first occurrence of TARGET in results.

    Return dict:
        found    : bool
        position : int  (1-based global rank, e.g. 23)
        page     : int  (page number, e.g. 3)
        page_pos : int  (position within that page, e.g. 3)
        url      : str  (the matching result URL)
        title    : str  (the result title)
        error    : str or None
    """
    out = dict(found=False, position=None, page=None,
               page_pos=None, url=None, title=None, error=None)

    global_pos = 0

    for page_num in range(1, MAX_PAGES + 1):
        start_at = (page_num - 1) * RESULTS_PER_P
        params   = urllib.parse.urlencode({
            "query":    keyword,
            "language": "english",
            "startAt":  start_at,
        })
        fetch_url = f"https://www.startpage.com/do/dsearch?{params}"

        try:
            resp = requests.get(fetch_url, headers=HEADERS, timeout=15)
            if resp.status_code != 200:
                out["error"] = f"HTTP {resp.status_code} on page {page_num}"
                return out

            soup    = BeautifulSoup(resp.text, "html.parser")
            results = soup.select(".result")

            if not results:
                # No more pages
                break

            for rank_on_page, item in enumerate(results, start=1):
                global_pos += 1

                # Find the first external link in this result block
                for a in item.select("a[href]"):
                    href = a.get("href", "")
                    if (href.startswith("https://")
                            and "startpage.com" not in href):
                        # Check if our domain is in this URL
                        if TARGET.lower() in href.lower():
                            title_tag = item.select_one(".result-title")
                            out.update(
                                found    = True,
                                position = global_pos,
                                page     = page_num,
                                page_pos = rank_on_page,
                                url      = href,
                                title    = title_tag.get_text(strip=True)
                                           if title_tag else "",
                            )
                            return out
                        break  # move to next result (only check first link)

        except requests.RequestException as e:
            out["error"] = str(e)[:80]
            return out

        if page_num < MAX_PAGES:
            time.sleep(PAGE_DELAY)

    return out  # not found in top MAX_PAGES × 10

# ── Display helpers ───────────────────────────────────────────────────────────
def badge(result: dict) -> str:
    if result["error"]:
        return f"{R}Error: {result['error'][:45]}{RS}"
    if not result["found"]:
        return f"{R}Not in top {MAX_PAGES * RESULTS_PER_P}{RS}"
    pos = result["position"]
    pg  = result["page"]
    pp  = result["page_pos"]
    loc = f"  [Page {pg}, Rank #{pp} on page]"
    if pos == 1:
        return f"{G}{B}#1 🥇 TOP RESULT  (Page 1 Position 1){RS}"
    if pos <= 3:
        return f"{G}{B}#{pos} 🏆 Top 3{RS}{G}{loc}{RS}"
    if pos <= 10:
        return f"{G}#{pos} ✅ Page 1{RS}{G}{loc}{RS}"
    if pos <= 20:
        return f"{Y}#{pos} — Page 2{RS}{Y}{loc}{RS}"
    if pos <= 30:
        return f"{Y}#{pos} — Page 3{RS}{Y}{loc}{RS}"
    if pos <= 50:
        return f"{R}#{pos} — Page {pg}{RS}{D}{loc}{RS}"
    return     f"{R}#{pos} — Page {pg} (deep){RS}"

def line(char="─", w=78): return char * w

# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    now     = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    total   = sum(len(v) for v in KEYWORDS.values())
    depth   = MAX_PAGES * RESULTS_PER_P

    print(f"\n{B}{C}{line('═')}{RS}")
    print(f"{B}{C}  SEO RANK CHECKER — {TARGET}{RS}")
    print(f"{B}{C}  Started  : {now}{RS}")
    print(f"{B}{C}  Keywords : {total}{RS}")
    print(f"{B}{C}  Depth    : Top {depth} results ({MAX_PAGES} pages){RS}")
    print(f"{B}{C}  Engine   : Startpage (Google results proxy){RS}")
    print(f"{B}{C}{line('═')}{RS}\n")

    report  = [
        f"SEO Rank Report — {TARGET}",
        f"Generated : {now}",
        f"Engine    : Startpage (Google results)",
        f"Keywords  : {total} | Depth: top {depth}",
        "=" * 78,
    ]

    all_res = []
    n       = 0

    for cat, kws in KEYWORDS.items():
        print(f"\n{B}{line()}{RS}")
        print(f"{B}  {cat}{RS}")
        print(f"{B}{line()}{RS}")
        report += [f"\n{cat}", "-" * 60]

        for kw in kws:
            n += 1
            # Print progress
            progress = f"{D}[{n:02d}/{total}]{RS}"
            print(f"  {progress} {C}{kw:<58}{RS} searching...", end="", flush=True)

            r = search_startpage(kw)
            all_res.append({"kw": kw, **r})

            bdg = badge(r)

            # Overwrite line with result
            print(f"\r  {progress} {C}{kw:<58}{RS} {bdg}")

            # Show URL on next line when found
            if r["found"] and r["url"]:
                short_url = r["url"].split("?")[0][:70]
                print(f"           {D}↳ Position #{r['position']} "
                      f"| Page {r['page']} "
                      f"| Rank #{r['page_pos']} on that page{RS}")
                print(f"           {D}↳ URL: {short_url}{RS}")

            # Report line
            if r["error"]:
                report.append(f"  ERROR      | {kw}")
                report.append(f"             | {r['error']}")
            elif r["found"]:
                report.append(
                    f"  #{r['position']:<4}  "
                    f"Page {r['page']}  "
                    f"Rank #{r['page_pos']} on page  | {kw}"
                )
                report.append(f"             ↳ {r['url']}")
            else:
                report.append(f"  Not found  | {kw}")

            time.sleep(DELAY)

    # ── Summary ───────────────────────────────────────────────────────────────
    found    = [x for x in all_res if x["found"]]
    page1    = [x for x in found  if x["position"] <= 10]
    page2_3  = [x for x in found  if 10 < x["position"] <= 30]
    page4up  = [x for x in found  if x["position"] > 30]
    nf       = [x for x in all_res if not x["found"] and not x["error"]]
    errs     = [x for x in all_res if x["error"]]

    print(f"\n{B}{line('═')}{RS}")
    print(f"{B}{C}  FINAL RESULTS SUMMARY{RS}")
    print(f"{B}{line('═')}{RS}")
    print(f"\n  Total keywords checked : {B}{n}{RS}")
    print(f"  {G}{B}✅ Page 1  (pos  1–10)  : {len(page1)}{RS}")
    print(f"  {Y}⚡ Page 2–3 (pos 11–30) : {len(page2_3)}{RS}")
    print(f"  {R}   Page 4+  (pos 31+)   : {len(page4up)}{RS}")
    print(f"  {R}   Not in top {depth:<3}       : {len(nf)}{RS}")
    if errs:
        print(f"  {R}   Errors               : {len(errs)}{RS}")

    if page1:
        print(f"\n  {G}{B}✅  PAGE 1 RANKINGS (your site on Google Page 1):{RS}")
        print(f"  {'Pos':>4}  {'Page':>5}  {'#OnPage':>7}  Keyword")
        print(f"  {D}{'─'*4}  {'─'*5}  {'─'*7}  {'─'*40}{RS}")
        for x in sorted(page1, key=lambda z: z["position"]):
            print(f"  {G}{B}#{x['position']:<3}{RS}  "
                  f"{G}Page {x['page']:<2}{RS}  "
                  f"{G}  #{x['page_pos']:<4}{RS}  "
                  f"{x['kw']}")
            if x["url"]:
                short = x["url"].split("?")[0][:65]
                print(f"         {D}↳ {short}{RS}")

    if page2_3:
        print(f"\n  {Y}{B}⚡  CLOSE TO PAGE 1 (pages 2–3) — optimise these next:{RS}")
        print(f"  {'Pos':>4}  {'Page':>5}  {'#OnPage':>7}  Keyword")
        print(f"  {D}{'─'*4}  {'─'*5}  {'─'*7}  {'─'*40}{RS}")
        for x in sorted(page2_3, key=lambda z: z["position"]):
            print(f"  {Y}#{x['position']:<3}{RS}  "
                  f"{Y}Page {x['page']:<2}{RS}  "
                  f"{Y}  #{x['page_pos']:<4}{RS}  "
                  f"{x['kw']}")

    # ── Save report ───────────────────────────────────────────────────────────
    report += [
        "\n" + "=" * 78,
        "SUMMARY",
        f"  Total    : {n}",
        f"  Page 1   : {len(page1)}",
        f"  Page 2-3 : {len(page2_3)}",
        f"  Page 4+  : {len(page4up)}",
        f"  Not found: {len(nf)}",
        f"  Errors   : {len(errs)}",
    ]
    if page1:
        report.append("\nPage 1 Rankings:")
        for x in sorted(page1, key=lambda z: z["position"]):
            report.append(
                f"  #{x['position']:<4} Page {x['page']}  "
                f"Rank #{x['page_pos']} on page  {x['kw']}"
            )
            if x["url"]:
                report.append(f"       ↳ {x['url']}")

    out_path = "seo_rank_report.txt"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(report))

    print(f"\n  {G}Full report saved → {out_path}{RS}")
    print(f"{B}{line('═')}{RS}\n")

if __name__ == "__main__":
    main()
