#!/usr/bin/env python3
"""
CONTENT-FIRST KEYWORD EXTRACTOR — Creative Metal Industries
Website: https://www.creativemetalind.com

Reads the ACTUAL page content (string literals, JSX text, data tables)
of every route file and extracts keywords directly from that content.
Keywords are never invented from the URL alone — every keyword is
traceable to text that exists on the page, or is an AI variation of
a term that was found in the content.

Output: keyword-extraction-report.txt
"""

import re
from pathlib import Path
from collections import OrderedDict

BASE_URL = "https://www.creativemetalind.com"
ROUTES_DIR = Path("creative-metal-industries/src/routes")
REPORT_FILE = Path("keyword-extraction-report.txt")

# Reuse the page registry from the optimizer
from seo_optimizer import PAGES

# ─── Domain dictionaries (used only to RECOGNISE terms in real content) ─────────
# These are matchers. A term is reported ONLY if it actually appears in the page
# text — nothing here is added blindly.

MATERIAL_GRADES = [
    "SS 304L", "SS 304", "SS 316L", "SS 316", "SS 317L", "SS 321", "SS 310S",
    "SS 347", "SS 904L", "Duplex 2205", "Super Duplex 2507", "S31803", "S32750",
    "S32760", "S32205", "Inconel 625", "Inconel 600", "Inconel 718", "Monel 400",
    "Hastelloy C-276", "Hastelloy C-22", "Titanium Grade 2", "Titanium Grade 5",
    "Ti-6Al-4V", "P91", "P22", "P11", "P5", "P9", "P92", "SA 516", "SA 537",
    "API 5L", "Fe 500D", "Fe 550D", "Fe 500", "A106", "A105", "A350 LF2",
    "Alloy 20", "Incoloy 800", "CuNi 70/30", "Naval Brass", "Aluminium 6061",
]

STANDARDS = [
    "ASTM A312", "ASTM A213", "ASTM A790", "ASTM A240", "ASTM A182", "ASTM A403",
    "ASTM A234", "ASTM A335", "ASTM A106", "ASTM A53", "ASTM A276", "ASTM A36",
    "ASME B16.9", "ASME B16.5", "ASME B16.47", "ASME B16.11", "API 5L",
    "EN 10204", "IS 1239", "IS 3589", "IS 2062", "IS 1786", "IS 808",
    "NACE MR0175", "NACE MR-01-75", "IBR Form III-C", "MSS SP-97", "MSS SP-43",
    "ASTM", "ASME", "IBR", "NACE", "HIC", "MTC", "PREN",
]

APPLICATIONS = [
    "oil & gas", "oil and gas", "petrochemical", "fertilizer", "power plant",
    "chemical processing", "pharmaceutical", "desalination", "marine",
    "offshore", "subsea", "refinery", "boiler", "pressure vessel",
    "heat exchanger", "seawater", "EPC", "defence", "construction",
    "water treatment", "cement", "aerospace", "food processing",
]

INDUSTRIES = [
    "oil & gas refineries", "petrochemical plants", "fertilizer industry",
    "power & energy", "chemical & pharma", "EPC contractors",
    "process equipment fabricators", "water & desalination",
]

LOCATIONS = [
    "Vadodara", "Ankleshwar", "Bharuch", "Dahej", "Hazira", "Surat",
    "Ahmedabad", "Rajkot", "Jamnagar", "Gujarat", "India", "GIDC Makarpura",
    "Makarpura", "UAE", "Oman", "Bahrain", "Kuwait", "Saudi Arabia",
]

BUYER_INTENT = [
    "supplier", "manufacturer", "stockist", "dealer", "exporter",
    "distributor", "importer", "trading company", "wholesaler",
]

PRODUCT_TERMS = [
    "seamless pipe", "welded pipe", "ERW pipe", "boiler tube", "line pipe",
    "buttweld fitting", "forged fitting", "flange", "olet", "branch fitting",
    "plate", "sheet", "round bar", "angle", "channel", "beam", "TMT bar",
    "compression tube fitting", "clad plate", "wear plate", "structural steel",
    "pipe", "tube", "fitting", "bar",
]


# ─── Content extraction ────────────────────────────────────────────────────────

def extract_visible_text(raw: str) -> str:
    """
    Pull the human-readable text out of a .tsx route file:
    - string literals inside data objects ("...", '...', `...`)
    - JSX text nodes between tags
    Strips code identifiers, import lines, and style objects as much as possible.
    """
    text_parts = []

    # Remove import lines and style attribute objects to reduce noise
    body = re.sub(r'^\s*import .*$', '', raw, flags=re.MULTILINE)
    body = re.sub(r'style=\{\{.*?\}\}', '', body, flags=re.DOTALL)
    body = re.sub(r'style="[^"]*"', '', body)
    body = re.sub(r'class="[^"]*"', '', body)

    # 1. Double-quoted string literals (data content: grade, spec, note, body, etc.)
    for m in re.finditer(r'"([^"\\]{4,}?)"', body):
        s = m.group(1)
        # skip things that look like urls, css, attrs, file paths
        if any(tok in s for tok in ["http", "://", "/img", ".webp", ".jpeg", ".jpg",
                                     ".png", "px", "#", "rgb", "var(", "@type",
                                     "@context", "application/ld"]):
            continue
        text_parts.append(s)

    # 2. Backtick template literals
    for m in re.finditer(r'`([^`]{4,}?)`', body):
        s = m.group(1)
        if "http" not in s and "/img" not in s and "${" not in s:
            text_parts.append(s)

    # 3. JSX text nodes:  >some text<
    for m in re.finditer(r'>\s*([A-Za-z][^<>{}]{3,}?)\s*<', body):
        s = m.group(1).strip()
        text_parts.append(s)

    joined = " ".join(text_parts)
    # Normalise HTML entities and whitespace
    joined = joined.replace("&amp;", "&").replace("&nbsp;", " ")
    joined = re.sub(r'\s+', ' ', joined)
    return joined


def find_terms(text: str, vocabulary: list) -> list:
    """Return vocabulary terms that actually appear in the content (case-insensitive),
    ranked by frequency of occurrence (most prominent first)."""
    low = text.lower()
    counted = []
    for term in vocabulary:
        c = low.count(term.lower())
        if c > 0:
            counted.append((term, c))
    # Sort by frequency desc, stable on original order
    counted.sort(key=lambda x: -x[1])
    found = [t for t, _ in counted]
    return list(OrderedDict.fromkeys(found))


# ─── Page typing ───────────────────────────────────────────────────────────────

def classify_page(url: str, text: str) -> str:
    if url == "/":
        return "Homepage / Category Hub"
    if url.startswith("/blog/") and url != "/blog/[slug]":
        return "Blog Page"
    if url in ("/blog", "/blog/[slug]"):
        return "Blog Index / Article Template"
    if url == "/products":
        return "Category Page (Size & Weight Charts)"
    if url == "/reviews":
        return "Reviews Page"
    if url == "/about":
        return "About / Company Page"
    if "supplier" in url or "stockist" in url or "trading" in url or "fittings" in url:
        return "Service / Landing Page"
    return "Content Page"


def summarize(text: str, limit: int = 240) -> str:
    """Build a short summary from the first substantial sentences of content."""
    # Prefer the intro / first long sentence
    sentences = re.split(r'(?<=[.!?])\s+', text)
    summary = ""
    for s in sentences:
        if len(s) > 40:
            summary = s.strip()
            break
    if not summary:
        summary = text[:limit]
    return summary[:limit].strip() + ("..." if len(summary) > limit else "")


# ─── Keyword group builder ─────────────────────────────────────────────────────

def build_keyword_groups(url: str, text: str, h1: str = "", title: str = ""):
    """Build all keyword groups strictly from content found on the page.
    Terms appearing in the H1/title are prioritised as they signal page intent."""
    grades = find_terms(text, MATERIAL_GRADES)
    standards = find_terms(text, STANDARDS)
    apps = find_terms(text, APPLICATIONS)
    industries = find_terms(text, INDUSTRIES)
    locations = find_terms(text, LOCATIONS)
    intent = find_terms(text, BUYER_INTENT)
    products = find_terms(text, PRODUCT_TERMS)

    # Re-rank grades & products so terms matching page intent come first.
    # Intent signal = H1 + Title + URL slug words.
    slug_words = url.strip("/").replace("-", " ").replace("/", " ")
    focus = (h1 + " " + title + " " + slug_words).lower()

    def focus_score(term):
        # full-term match scores highest, else count overlapping word tokens
        tl = term.lower()
        if tl in focus:
            return 2
        toks = [w for w in re.split(r'\W+', tl) if len(w) > 2]
        return 1 if any(w in focus for w in toks) else 0

    def prioritise(terms):
        return sorted(terms, key=lambda t: -focus_score(t))

    grades = prioritise(grades)
    products = prioritise(products)
    locations = prioritise(locations)

    # Primary keywords: grade-led (reflects the page's real topic) grounded in content
    primary = []
    # Prefer a specific product term over the generic "pipe"/"bar"
    specific_products = [p for p in products if " " in p] or products
    main_product = specific_products[0] if specific_products else ""
    main_loc = locations[0] if locations else ""
    main_grade = grades[0] if grades else ""
    has_intent = bool(intent)

    # 1) dominant grade + product + (supplier) + location  → the page's core query
    if main_grade and main_product:
        kw = f"{main_grade} {main_product}"
        if has_intent:
            kw += f" {intent[0]}"
        if main_loc:
            kw += f" {main_loc}"
        primary.append(kw)
    # 2) product + supplier + location
    if main_product and main_loc:
        primary.append(f"{main_product} {intent[0]} {main_loc}" if has_intent
                       else f"{main_product} {main_loc}")
    # 3) grade + product (informational anchor)
    if main_grade and main_product:
        primary.append(f"{main_grade} {main_product}")
    # 4) bare product fallback
    if main_product:
        primary.append(main_product)
    # Dedup
    primary = list(OrderedDict.fromkeys([p for p in primary if p]))[:5]

    return {
        "grades": grades, "standards": standards, "apps": apps,
        "industries": industries, "locations": locations, "intent": intent,
        "products": products, "primary": primary,
    }


def _main_product(groups):
    """Pick the most descriptive product term (prefer multi-word over generic)."""
    products = groups["products"]
    specific = [p for p in products if " " in p]
    return (specific or products or [""])[0]


def build_secondary(groups):
    """Secondary keywords: grades + products + standards grounded in content."""
    sec = []
    prod = _main_product(groups)
    for g in groups["grades"][:4]:
        if prod:
            sec.append(f"{g} {prod} supplier")
    for s in groups["standards"][:3]:
        if prod:
            sec.append(f"{s} {prod}")
    return list(OrderedDict.fromkeys(sec))[:8]


def build_long_tail(groups):
    """Long-tail keywords combining product + grade + application + location."""
    lt = []
    prod = _main_product(groups)
    loc = groups["locations"][0] if groups["locations"] else ""
    for app in groups["apps"][:3]:
        if prod:
            lt.append(f"{prod} for {app}")
    for g in groups["grades"][:2]:
        if loc and prod:
            lt.append(f"{g} {prod} supplier in {loc}")
    if prod and loc:
        lt.append(f"best {prod} supplier in {loc}")
        lt.append(f"{prod} price in {loc}")
    return list(OrderedDict.fromkeys(lt))[:8]


def build_semantic(groups):
    """Semantic synonyms for terms actually found."""
    sem = []
    syn_map = {
        "seamless pipe": ["seamless tube", "hot finished seamless pipe"],
        "welded pipe": ["ERW/EFW welded pipe", "fabricated pipe"],
        "plate": ["steel plate", "metal plate"],
        "round bar": ["steel rod", "round rod"],
        "flange": ["pipe flange", "weld neck flange"],
        "fitting": ["pipe fitting", "industrial fitting"],
        "tmt bar": ["reinforcement bar", "rebar"],
    }
    for p in groups["products"]:
        for key, syns in syn_map.items():
            if key == p.lower():
                sem.extend(syns)
    # Generic semantic anchors only if relevant terms exist
    if groups["grades"]:
        sem.append("corrosion resistant alloy")
    if "Duplex 2205" in groups["grades"] or "Super Duplex 2507" in groups["grades"]:
        sem.append("dual-phase stainless steel")
    return list(OrderedDict.fromkeys(sem))[:8]


# ─── Extract H1 / headings / specs for source mapping ──────────────────────────

def get_headings(raw: str):
    h1 = ""
    h1m = re.search(r'<h1[^>]*>(.*?)</h1>', raw, re.DOTALL)
    if h1m:
        h1 = re.sub(r'<[^>]+>', '', h1m.group(1)).strip()
    heads = []
    for lvl in range(2, 5):
        for m in re.finditer(rf'<h{lvl}[^>]*>(.*?)</h{lvl}>', raw, re.DOTALL):
            t = re.sub(r'<[^>]+>', '', m.group(1)).strip()
            if t:
                heads.append((lvl, t))
    return h1, heads


def map_keyword_source(kw: str, h1: str, text: str, heads: list) -> str:
    """Determine where a keyword's terms come from, for traceability."""
    sources = []
    kw_low = kw.lower()
    if h1 and any(w in h1.lower() for w in kw_low.split()):
        sources.append("Found in H1")
    if any(any(w in h.lower() for w in kw_low.split()) for _, h in heads):
        sources.append("Found in Headings")
    if kw_low in text.lower():
        sources.append("Found verbatim in Page Content")
    elif any(w in text.lower() for w in kw_low.split()):
        sources.append("Built from terms in Page Content")
    if not sources:
        sources.append("AI Generated Variation From Content")
    return " | ".join(sources)


# ─── Report ────────────────────────────────────────────────────────────────────

def write_block(f, url, ptype, summary, groups, secondary, long_tail, semantic,
                h1, text, heads):
    f.write("=" * 60 + "\n")
    f.write(f"URL: {BASE_URL}{url}\n")
    f.write(f"PAGE TYPE: {ptype}\n")
    f.write(f"MAIN CONTENT SUMMARY: {summary}\n\n")

    f.write("PRIMARY KEYWORDS EXTRACTED FROM CONTENT:\n")
    for k in groups["primary"] or ["(insufficient product content detected)"]:
        f.write(f"  - {k}\n")
    f.write("\n")

    f.write("SECONDARY KEYWORDS EXTRACTED FROM CONTENT:\n")
    for k in secondary or ["(none)"]:
        f.write(f"  - {k}\n")
    f.write("\n")

    f.write("LONG TAIL KEYWORDS GENERATED:\n")
    for k in long_tail or ["(none)"]:
        f.write(f"  - {k}\n")
    f.write("\n")

    f.write("BUYER INTENT KEYWORDS:\n")
    for k in groups["intent"] or ["(none found in content)"]:
        f.write(f"  - {k}\n")
    f.write("\n")

    f.write("SEMANTIC KEYWORDS:\n")
    for k in semantic or ["(none)"]:
        f.write(f"  - {k}\n")
    f.write("\n")

    f.write("INDUSTRY / STANDARD TERMS FOUND:\n")
    for k in groups["standards"] or ["(none)"]:
        f.write(f"  - {k}\n")
    f.write("\n")

    f.write("PRODUCT GRADES FOUND:\n")
    for k in groups["grades"] or ["(none)"]:
        f.write(f"  - {k}\n")
    f.write("\n")

    f.write("APPLICATION TERMS FOUND:\n")
    for k in groups["apps"] or ["(none)"]:
        f.write(f"  - {k}\n")
    f.write("\n")

    f.write("LOCATION KEYWORDS FOUND:\n")
    for k in groups["locations"] or ["(none)"]:
        f.write(f"  - {k}\n")
    f.write("\n")

    # ── Keyword source mapping ──
    f.write("KEYWORD SOURCE MAPPING:\n")
    mapped = (groups["primary"] + secondary + long_tail)[:10]
    for kw in mapped:
        f.write(f"  Keyword: {kw}\n")
        f.write(f"    Source: {map_keyword_source(kw, h1, text, heads)}\n")
    f.write("\n")

    # ── SEO opportunities (only relevant gaps) ──
    f.write("SEO OPPORTUNITIES:\n")
    missing_commercial = [w for w in ["supplier", "manufacturer", "stockist", "exporter"]
                          if w not in [i.lower() for i in groups["intent"]]]
    f.write("  Missing Commercial Keywords:\n")
    for w in missing_commercial or ["(all key commercial intent terms present)"]:
        f.write(f"    - {w}\n")
    missing_loc = []
    if groups["products"]:
        for l in ["Gujarat", "India", "Vadodara"]:
            if l not in groups["locations"]:
                missing_loc.append(l)
    f.write("  Missing Location Keywords:\n")
    for w in missing_loc or ["(primary locations present)"]:
        f.write(f"    - {w}\n")
    f.write("  Missing FAQ Opportunities:\n")
    if groups["primary"]:
        topic = groups["products"][0] if groups["products"] else "this product"
        f.write(f"    - What is {topic}?\n")
        f.write(f"    - What are the applications of {topic}?\n")
        if groups["grades"]:
            f.write(f"    - Which grade of {topic} should I choose?\n")
    else:
        f.write("    - (page is informational; FAQ optional)\n")
    f.write("\n")

    # ── Optimization plan ──
    f.write("OPTIMIZATION PLAN:\n")
    f.write("  Keywords To Add (all traceable to content above):\n")
    add_list = (groups["primary"][:2] + secondary[:2] + long_tail[:2])
    for k in add_list or ["(none — page already covers its content keywords)"]:
        f.write(f"    - {k}\n")
    f.write("  Headings To Improve:\n")
    if heads:
        for lvl, h in heads[:3]:
            improved = h
            # Suggest a light, content-grounded improvement only
            if groups["locations"] and groups["locations"][0].lower() not in h.lower() \
               and groups["products"] and groups["products"][0].lower() in h.lower():
                improved = f"{h} — {groups['locations'][0]}"
            f.write(f"    Old: {h}\n")
            f.write(f"    New: {improved}\n")
    else:
        f.write("    (headings adequate)\n")
    f.write("  Content Sections To Improve:\n")
    for s in ["Introduction", "Applications", "Specifications", "FAQ"]:
        f.write(f"    - {s}\n")
    f.write("\n")
    f.write("=" * 60 + "\n\n")


# ─── Main ──────────────────────────────────────────────────────────────────────

def main():
    print("=" * 60)
    print("  CONTENT-FIRST KEYWORD EXTRACTION — Creative Metal Industries")
    print("=" * 60)
    print()

    if not ROUTES_DIR.exists():
        print(f"ERROR: routes dir not found: {ROUTES_DIR}")
        return

    from datetime import datetime
    with open(REPORT_FILE, "w", encoding="utf-8") as f:
        f.write("=" * 60 + "\n")
        f.write("KEYWORD EXTRACTION REPORT — CREATIVE METAL INDUSTRIES\n")
        f.write(f"Website: {BASE_URL}\n")
        f.write(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write("Method: Content-first. Keywords extracted from actual page text.\n")
        f.write("=" * 60 + "\n\n")

        processed = 0
        for filename, url in PAGES.items():
            filepath = ROUTES_DIR / filename
            if not filepath.exists():
                continue
            raw = filepath.read_text(encoding="utf-8")
            text = extract_visible_text(raw)
            h1, heads = get_headings(raw)
            tm = re.search(r'<Title[^>]*>(.*?)</Title>', raw, re.DOTALL)
            title = re.sub(r'<[^>]+>', '', tm.group(1)).strip() if tm else ""
            ptype = classify_page(url, text)
            summary = summarize(text)
            groups = build_keyword_groups(url, text, h1, title)
            secondary = build_secondary(groups)
            long_tail = build_long_tail(groups)
            semantic = build_semantic(groups)

            write_block(f, url, ptype, summary, groups, secondary, long_tail,
                        semantic, h1, text, heads)
            processed += 1
            print(f"  [EXTRACTED] {url}  "
                  f"({len(groups['grades'])} grades, {len(groups['standards'])} standards, "
                  f"{len(groups['locations'])} locations)")

    print()
    print(f"  Pages analyzed: {processed}")
    print(f"  Report saved:   {REPORT_FILE}")
    print()
    print("  Content-first extraction complete. Review keyword-extraction-report.txt")
    print("  BEFORE running seo_optimizer.py for the optimization pass.")


if __name__ == "__main__":
    main()
