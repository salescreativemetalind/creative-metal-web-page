#!/usr/bin/env python3
"""
SEO Rank Checker — Creative Metal Industries
Checks Google ranking position for all target keywords.
Uses Startpage as a Google results proxy.

Usage: python3 seo_rank_checker.py
Output: Prints results + saves seo_rank_report.txt
"""

import time
import datetime
import urllib.parse
import requests
from bs4 import BeautifulSoup

# ── Configuration ─────────────────────────────────────────────────────────────
TARGET = "creativemetalind.com"
MAX_PAGES = 10  # 10 pages × 10 results = top 100
DELAY = 4.0
PAGE_DELAY = 2.0
RESULTS_PER_P = 10

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) "
        "Gecko/20100101 Firefox/128.0"
    ),
    "Accept": "text/html,application/xhtml+xml",
    "Accept-Language": "en-IN,en;q=0.9",
}

# ── ANSI Colors ───────────────────────────────────────────────────────────────
G = "\033[92m"
Y = "\033[93m"
R = "\033[91m"
C = "\033[96m"
B = "\033[1m"
D = "\033[2m"
RS = "\033[0m"

# ══════════════════════════════════════════════════════════════════════════════
# ALL KEYWORDS — organized by page/category
# These are the EXACT keywords your site is optimized for (verified live)
# ══════════════════════════════════════════════════════════════════════════════

KEYWORDS = {

    "🏆 BRAND KEYWORDS": [
        "creative metal industries",
        "creative metal industries vadodara",
        "creative metal industries gujarat",
        "creativemetalind",
    ],

    "🔴 SS PIPE — VADODARA (Landing Page)": [
        "SS pipe supplier Vadodara",
        "SS pipe supplier in Vadodara",
        "stainless steel pipe supplier Vadodara",
        "SS pipe dealer Vadodara",
        "SS pipe stockist Vadodara",
        "best SS pipe supplier Vadodara",
        "SS seamless pipe supplier Vadodara",
    ],

    "🟠 SS SEAMLESS PIPE — INDIA (Landing Page)": [
        "SS seamless pipe supplier India",
        "stainless steel seamless pipe manufacturer India",
        "ASTM A312 pipe supplier India",
        "SS 304 seamless pipe supplier India",
        "SS 316L seamless pipe supplier India",
    ],

    "🟡 SS FITTINGS — INDIA (Landing Page)": [
        "SS buttweld fittings supplier India",
        "SS pipe fittings supplier India",
        "stainless steel fittings manufacturer India",
        "ASTM A403 fittings supplier",
    ],

    "🟢 SS FLANGES — VADODARA (Landing Page)": [
        "SS flange supplier Vadodara",
        "stainless steel flanges supplier India",
        "ASTM A182 flange supplier Vadodara",
        "weld neck flange supplier India",
    ],

    "🔵 INCONEL — INDIA (Landing Page)": [
        "Inconel pipe supplier India",
        "Inconel 625 pipe supplier India",
        "Inconel 600 pipe supplier",
        "nickel alloy pipe supplier India",
    ],

    "🟣 ALLOY STEEL P91 — INDIA (Landing Page)": [
        "alloy steel pipe supplier India",
        "P91 pipe supplier India",
        "P22 pipe supplier India",
        "ASTM A335 P91 pipe supplier",
        "IBR certified pipe supplier India",
    ],

    "⚫ DUPLEX / SUPER DUPLEX (Landing Page)": [
        "duplex steel supplier Vadodara",
        "duplex 2205 supplier India",
        "super duplex 2507 pipe supplier India",
        "super duplex supplier Vadodara",
    ],

    "🟤 CARBON STEEL (Landing Page)": [
        "carbon steel pipe supplier Vadodara",
        "ASTM A106 Gr.B pipe supplier India",
        "carbon steel fittings supplier Vadodara",
        "SA 516 Gr.70 plate stockist India",
        "NACE HIC steel plate supplier India",
    ],

    "🏗️ STRUCTURAL / TMT (Landing Page)": [
        "TMT bars supplier Gujarat",
        "TMT bar supplier Vadodara",
        "Fe 500D TMT bars Gujarat",
        "MS angle supplier Vadodara",
        "structural steel supplier Gujarat",
    ],

    "📚 BLOG — TECHNICAL (Informational)": [
        "SS 304 vs 316L stainless steel",
        "SS 304 vs SS 321 difference",
        "duplex 2205 vs super duplex 2507",
        "ERW vs seamless pipe difference",
        "Inconel vs Monel comparison",
        "how to read mill test certificate",
        "IBR certification explained India",
        "pipe schedule chart SCH 40 80",
        "WNRF vs SORF flange difference",
        "how to select pipe fittings refinery",
    ],

    "🌐 BROAD COMMERCIAL": [
        "stainless steel pipe manufacturer India",
        "stainless steel supplier Vadodara",
        "steel trading company Gujarat",
        "metal trading company Vadodara",
        "industrial metal supplier India",
        "steel stockist Vadodara",
        "metal importer exporter India",
    ],
}


# ── Search function ───────────────────────────────────────────────────────────
def search_startpage(keyword: str) -> dict:
    """Search Startpage for the keyword. Returns position of TARGET in results."""
    out = dict(found=False, position=None, page=None,
               page_pos=None, url=None, title=None, error=None)
    global_pos = 0

    for page_num in range(1, MAX_PAGES + 1):
        start_at = (page_num - 1) * RESULTS_PER_P
        params = urllib.parse.urlencode({
            "query": keyword,
            "language": "english",
            "startAt": start_at,
        })
        fetch_url = f"https://www.startpage.com/do/dsearch?{params}"

        try:
            resp = requests.get(fetch_url, headers=HEADERS, timeout=15)
            if resp.status_code != 200:
                out["error"] = f"HTTP {resp.status_code} on page {page_num}"
                return out

            soup = BeautifulSoup(resp.text, "html.parser")
            results = soup.select(".result")

            if not results:
                break

            for rank_on_page, item in enumerate(results, start=1):
                global_pos += 1
                for a in item.select("a[href]"):
                    href = a.get("href", "")
                    if href.startswith("https://") and "startpage.com" not in href:
                        if TARGET.lower() in href.lower():
                            title_tag = item.select_one(".result-title")
                            out.update(
                                found=True,
                                position=global_pos,
                                page=page_num,
                                page_pos=rank_on_page,
                                url=href,
                                title=title_tag.get_text(strip=True) if title_tag else "",
                            )
                            return out
                        break

        except requests.RequestException as e:
            out["error"] = str(e)[:80]
            return out

        if page_num < MAX_PAGES:
            time.sleep(PAGE_DELAY)

    return out


# ── Display helpers ───────────────────────────────────────────────────────────
def badge(result: dict) -> str:
    if result["error"]:
        return f"{R}Error: {result['error'][:45]}{RS}"
    if not result["found"]:
        return f"{R}Not in top {MAX_PAGES * RESULTS_PER_P}{RS}"
    pos = result["position"]
    pg = result["page"]
    pp = result["page_pos"]
    loc = f"  [Page {pg}, #{pp}]"
    if pos <= 3:
        return f"{G}{B}#{pos} 🏆 Top 3{loc}{RS}"
    if pos <= 10:
        return f"{G}#{pos} ✅ Page 1{loc}{RS}"
    if pos <= 20:
        return f"{Y}#{pos} ⚡ Page 2{loc}{RS}"
    if pos <= 30:
        return f"{Y}#{pos} — Page 3{loc}{RS}"
    return f"{R}#{pos} — Page {pg}{loc}{RS}"


# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    total = sum(len(v) for v in KEYWORDS.values())
    depth = MAX_PAGES * RESULTS_PER_P

    print(f"\n{B}{C}{'═' * 70}{RS}")
    print(f"{B}{C}  SEO RANK CHECKER — {TARGET}{RS}")
    print(f"{B}{C}  Started  : {now}{RS}")
    print(f"{B}{C}  Keywords : {total}{RS}")
    print(f"{B}{C}  Depth    : Top {depth} results{RS}")
    print(f"{B}{C}  Engine   : Startpage (Google proxy){RS}")
    print(f"{B}{C}{'═' * 70}{RS}\n")

    report = [
        f"SEO Rank Report — {TARGET}",
        f"Generated : {now}",
        f"Keywords  : {total} | Depth: top {depth}",
        "=" * 70,
    ]

    all_res = []
    n = 0

    for cat, kws in KEYWORDS.items():
        print(f"\n{B}{'─' * 70}{RS}")
        print(f"{B}  {cat}{RS}")
        print(f"{B}{'─' * 70}{RS}")
        report += [f"\n{cat}", "-" * 50]

        for kw in kws:
            n += 1
            print(f"  {D}[{n:02d}/{total}]{RS} {C}{kw:<55}{RS} ...", end="", flush=True)

            r = search_startpage(kw)
            all_res.append({"kw": kw, **r})

            print(f"\r  {D}[{n:02d}/{total}]{RS} {C}{kw:<55}{RS} {badge(r)}")

            if r["found"] and r["url"]:
                short_url = r["url"].split("?")[0][:65]
                print(f"           {D}↳ {short_url}{RS}")

            if r["error"]:
                report.append(f"  ERROR  | {kw}")
            elif r["found"]:
                report.append(f"  #{r['position']:<4} Page {r['page']}  #{r['page_pos']} | {kw}")
                report.append(f"         ↳ {r['url']}")
            else:
                report.append(f"  --     | {kw}")

            time.sleep(DELAY)

    # ── Summary ───────────────────────────────────────────────────────────────
    found = [x for x in all_res if x["found"]]
    page1 = [x for x in found if x["position"] <= 10]
    page2_3 = [x for x in found if 10 < x["position"] <= 30]
    deep = [x for x in found if x["position"] > 30]
    nf = [x for x in all_res if not x["found"] and not x["error"]]
    errs = [x for x in all_res if x["error"]]

    print(f"\n{B}{'═' * 70}{RS}")
    print(f"{B}{C}  RESULTS SUMMARY{RS}")
    print(f"{B}{'═' * 70}{RS}")
    print(f"\n  Total checked : {B}{n}{RS}")
    print(f"  {G}{B}✅ Page 1  (1-10)   : {len(page1)}{RS}")
    print(f"  {Y}⚡ Page 2-3 (11-30) : {len(page2_3)}{RS}")
    print(f"  {R}   Page 4+  (31+)   : {len(deep)}{RS}")
    print(f"  {R}   Not found        : {len(nf)}{RS}")
    if errs:
        print(f"  {R}   Errors           : {len(errs)}{RS}")

    if page1:
        print(f"\n  {G}{B}✅ PAGE 1 RANKINGS:{RS}")
        for x in sorted(page1, key=lambda z: z["position"]):
            print(f"    {G}#{x['position']:<3} | {x['kw']}{RS}")

    if page2_3:
        print(f"\n  {Y}{B}⚡ CLOSE TO PAGE 1 (optimize these next):{RS}")
        for x in sorted(page2_3, key=lambda z: z["position"]):
            print(f"    {Y}#{x['position']:<3} | {x['kw']}{RS}")

    # ── Save report ───────────────────────────────────────────────────────────
    report += [
        "\n" + "=" * 70,
        "SUMMARY",
        f"  Page 1   : {len(page1)}",
        f"  Page 2-3 : {len(page2_3)}",
        f"  Page 4+  : {len(deep)}",
        f"  Not found: {len(nf)}",
        f"  Errors   : {len(errs)}",
    ]
    if page1:
        report.append("\nPage 1 Rankings:")
        for x in sorted(page1, key=lambda z: z["position"]):
            report.append(f"  #{x['position']:<4} {x['kw']}")
            if x["url"]:
                report.append(f"       ↳ {x['url']}")

    out_path = "seo_rank_report.txt"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(report))

    print(f"\n  {G}Report saved → {out_path}{RS}")
    print(f"{B}{'═' * 70}{RS}\n")


if __name__ == "__main__":
    main()
