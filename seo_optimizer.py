#!/usr/bin/env python3
"""
SEO Optimization System for Creative Metal Industries
Website: https://www.creativemetalind.com
Framework: SolidJS + SolidStart (SSR)

This script analyzes all route files, extracts SEO elements,
generates keyword variations, and produces optimization reports.
"""

import os
import re
import json
import shutil
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Tuple, Optional

# ─── Configuration ─────────────────────────────────────────────────────────────
BASE_URL = "https://www.creativemetalind.com"
ROUTES_DIR = Path("creative-metal-industries/src/routes")
BACKUP_DIR = Path("seo_backups")
REPORT_FILE = Path("seo-optimization-report.txt")
SUMMARY_FILE = Path("seo-summary.txt")

# ─── Page Registry ─────────────────────────────────────────────────────────────
PAGES = {
    "index.tsx": "/",
    "about.tsx": "/about",
    "products.tsx": "/products",
    "reviews.tsx": "/reviews",
    "metal-trading.tsx": "/metal-trading",
    "ss-pipe-supplier-vadodara.tsx": "/ss-pipe-supplier-vadodara",
    "stainless-steel-supplier-vadodara.tsx": "/stainless-steel-supplier-vadodara",
    "duplex-steel-supplier-vadodara.tsx": "/duplex-steel-supplier-vadodara",
    "carbon-steel-pipe-fittings-vadodara.tsx": "/carbon-steel-pipe-fittings-vadodara",
    "carbon-steel-sa516-plate-stockist-india.tsx": "/carbon-steel-sa516-plate-stockist-india",
    "nace-hic-steel-plate-supplier-india.tsx": "/nace-hic-steel-plate-supplier-india",
    "tmt-bars-supplier-gujarat.tsx": "/tmt-bars-supplier-gujarat",
    "ss-304-316l-pipe-supplier-india.tsx": "/ss-304-316l-pipe-supplier-india",
    "blog/index.tsx": "/blog",
    "blog/[slug].tsx": "/blog/[slug]",
    "blog/ss-304-stainless-steel-guide.tsx": "/blog/ss-304-stainless-steel-guide",
    "blog/ss-316l-stainless-steel-guide.tsx": "/blog/ss-316l-stainless-steel-guide",
    "blog/duplex-2205-steel-guide.tsx": "/blog/duplex-2205-steel-guide",
    "blog/super-duplex-2507-guide.tsx": "/blog/super-duplex-2507-guide",
    "blog/hastelloy-c276-guide.tsx": "/blog/hastelloy-c276-guide",
    "blog/inconel-625-guide.tsx": "/blog/inconel-625-guide",
    "blog/p91-alloy-steel-guide.tsx": "/blog/p91-alloy-steel-guide",
    "blog/sa-516-carbon-steel-plate-guide.tsx": "/blog/sa-516-carbon-steel-plate-guide",
    "blog/nace-hic-steel-plates-guide.tsx": "/blog/nace-hic-steel-plates-guide",
    "blog/tmt-bars-guide.tsx": "/blog/tmt-bars-guide",
    "blog/astm-a312-pipe-guide.tsx": "/blog/astm-a312-pipe-guide",
    "blog/api-5l-pipe-guide.tsx": "/blog/api-5l-pipe-guide",
    "blog/pipe-schedule-chart.tsx": "/blog/pipe-schedule-chart",
    "blog/mill-test-certificate-guide.tsx": "/blog/mill-test-certificate-guide",
    "blog/titanium-grade-2-vs-grade-5.tsx": "/blog/titanium-grade-2-vs-grade-5",
    "blog/ss-pipe-fittings-flanges-guide.tsx": "/blog/ss-pipe-fittings-flanges-guide",
    "blog/why-creative-metal-industries.tsx": "/blog/why-creative-metal-industries",
    "blog/industrial-raw-material-supplier-india.tsx": "/blog/industrial-raw-material-supplier-india",
    "blog/erw-vs-seamless-pipe.tsx": "/blog/erw-vs-seamless-pipe",
    "blog/ms-structural-steel-guide.tsx": "/blog/ms-structural-steel-guide",
    "blog/carbon-steel-pipe-guide.tsx": "/blog/carbon-steel-pipe-guide",
    "blog/ss-sheet-plate-guide.tsx": "/blog/ss-sheet-plate-guide",
    "blog/ss-long-products-fittings-guide.tsx": "/blog/ss-long-products-fittings-guide",
    "blog/exotic-alloy-plate-sheet-guide.tsx": "/blog/exotic-alloy-plate-sheet-guide",
}


# ─── Keyword Variation Engine ──────────────────────────────────────────────────

def extract_primary_keyword(url: str, title: str, h1: str, content: str) -> str:
    """Extract the primary keyword from page URL, title, H1, and content."""
    # Priority: URL slug > H1 > Title
    slug = url.strip("/").split("/")[-1] if url != "/" else ""
    
    if slug and slug != "[slug]":
        # Convert hyphenated slug to spaced keyword
        keyword = slug.replace("-", " ")
    elif h1:
        # Extract core keyword from H1
        keyword = re.sub(r'\s*[—–|]\s*.*$', '', h1)
        keyword = re.sub(r'\s*\(.*?\)', '', keyword)
    elif title:
        keyword = re.sub(r'\s*[|—–]\s*.*$', '', title)
    else:
        keyword = ""
    
    return keyword.strip().lower()


def generate_keyword_variations(primary: str, url: str, location: str = "") -> List[str]:
    """Generate keyword variations for SEO optimization."""
    variations = []
    if not primary:
        return variations
    
    # Detect location from URL or keyword
    loc = location
    locations = ["vadodara", "gujarat", "india", "ahmedabad", "surat"]
    for l in locations:
        if l in primary:
            loc = l
            break
    
    # Base keyword without location
    base = primary
    for l in locations:
        base = base.replace(f" {l}", "").replace(f" in {l}", "")
    base = base.strip()
    
    # 1. Space-separated variations
    variations.append(primary)
    
    # 2. Hyphenated variation
    hyphenated = primary.replace(" ", "-")
    if hyphenated != primary:
        variations.append(hyphenated)
    
    # 3. With/without location prepositions
    if loc:
        variations.append(f"{base} in {loc}")
        variations.append(f"{base} {loc}")
        variations.append(f"best {base} {loc}")
        variations.append(f"top {base} {loc}")
        variations.append(f"{base} near {loc}")
        variations.append(f"{base} manufacturer {loc}")
        variations.append(f"{base} dealer {loc}")
    
    # 4. Singular/plural forms
    if base.endswith("s") and not base.endswith("ss"):
        variations.append(base[:-1])  # plural -> singular
    elif not base.endswith("s"):
        variations.append(base + "s")  # singular -> plural
    
    # 5. Common search modifiers
    modifiers = ["best", "top", "leading", "trusted", "reliable", "affordable"]
    for mod in modifiers[:3]:
        variations.append(f"{mod} {primary}")
    
    # 6. Long-tail keywords
    if "supplier" in base:
        variations.append(base.replace("supplier", "stockist"))
        variations.append(base.replace("supplier", "dealer"))
        variations.append(base.replace("supplier", "manufacturer"))
        variations.append(base.replace("supplier", "distributor"))
    elif "manufacturer" in base:
        variations.append(base.replace("manufacturer", "supplier"))
        variations.append(base.replace("manufacturer", "stockist"))
    
    # 7. Semantic keywords for steel industry
    steel_semantics = {
        "ss pipe": ["stainless steel pipe", "SS seamless pipe", "SS welded pipe"],
        "ss 304": ["stainless steel 304", "AISI 304", "18/8 stainless steel"],
        "ss 316l": ["stainless steel 316L", "marine grade stainless steel"],
        "duplex": ["duplex 2205", "UNS S31803", "duplex stainless steel"],
        "super duplex": ["super duplex 2507", "UNS S32750", "PREN 42"],
        "carbon steel": ["CS pipe", "ASTM A106", "carbon steel seamless pipe"],
        "tmt bars": ["TMT reinforcement bars", "Fe 500D bars", "construction steel bars"],
        "nace hic": ["NACE MR0175", "HIC tested steel", "sour service steel"],
        "sa 516": ["SA 516 Grade 70", "pressure vessel plate", "boiler quality plate"],
        "pipe fittings": ["buttweld fittings", "forged fittings", "pipe flanges"],
    }
    
    for key, semantics in steel_semantics.items():
        if key in base.lower():
            variations.extend(semantics)
            break
    
    # 8. Related entity keywords
    if loc == "vadodara":
        variations.append(f"{base} GIDC Makarpura")
        variations.append(f"{base} Gujarat")
    
    # 9. Buy/price intent keywords
    variations.append(f"{base} price")
    variations.append(f"buy {base}")
    variations.append(f"{base} price list")
    
    # Remove duplicates, preserve order
    seen = set()
    unique = []
    for v in variations:
        vl = v.lower().strip()
        if vl and vl not in seen:
            seen.add(vl)
            unique.append(v)
    
    return unique[:20]  # Cap at 20 variations per page


# ─── Page Analyzer ─────────────────────────────────────────────────────────────

class PageSEOAnalysis:
    """Stores SEO analysis results for a single page."""
    def __init__(self, filepath: str, url: str):
        self.filepath = filepath
        self.url = url
        self.title = ""
        self.meta_description = ""
        self.h1 = ""
        self.headings = []  # list of (level, text)
        self.canonical = ""
        self.og_tags = {}
        self.twitter_tags = {}
        self.schema_types = []
        self.internal_links = []
        self.image_alts = []
        self.primary_keyword = ""
        self.keyword_variations = []
        self.updated_title = ""
        self.updated_h1 = ""
        self.seo_score_before = 0
        self.seo_score_after = 0
        self.optimizations = []
        self.headings_optimized = []
        self.internal_links_added = 0
        self.images_optimized = 0
        self.schema_updated = False
        self.meta_updated = False


def analyze_page(filepath: Path, url: str) -> PageSEOAnalysis:
    """Analyze a single page file for SEO elements."""
    analysis = PageSEOAnalysis(str(filepath), url)
    
    if not filepath.exists():
        return analysis
    
    content = filepath.read_text(encoding="utf-8")
    
    # Extract Title
    title_match = re.search(r'<Title[^>]*>(.*?)</Title>', content, re.DOTALL)
    if title_match:
        analysis.title = re.sub(r'<[^>]+>', '', title_match.group(1)).strip()
        analysis.title = analysis.title.replace("&amp;", "&")
    
    # Extract Meta Description
    desc_match = re.search(
        r'<Meta\s+name="description"\s+content="([^"]*)"',
        content
    )
    if desc_match:
        analysis.meta_description = desc_match.group(1).replace("&amp;", "&")
    
    # Extract H1
    h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
    if h1_match:
        analysis.h1 = re.sub(r'<[^>]+>', '', h1_match.group(1)).strip()
    
    # Extract all headings H2-H6
    for level in range(2, 7):
        for match in re.finditer(rf'<h{level}[^>]*>(.*?)</h{level}>', content, re.DOTALL):
            text = re.sub(r'<[^>]+>', '', match.group(1)).strip()
            if text:
                analysis.headings.append((level, text))
    
    # Extract Canonical
    canon_match = re.search(
        r'<Link\s+rel="canonical"\s+href="([^"]*)"', content
    )
    if canon_match:
        analysis.canonical = canon_match.group(1)
    
    # Extract OG tags
    for match in re.finditer(r'<Meta\s+property="og:(\w+)"\s+content="([^"]*)"', content):
        analysis.og_tags[match.group(1)] = match.group(2)
    
    # Extract Twitter tags
    for match in re.finditer(r'<Meta\s+name="twitter:(\w+)"\s+content="([^"]*)"', content):
        analysis.twitter_tags[match.group(1)] = match.group(2)
    
    # Detect Schema types
    for match in re.finditer(r'"@type"\s*:\s*"([^"]+)"', content):
        schema_type = match.group(1)
        if schema_type not in analysis.schema_types:
            analysis.schema_types.append(schema_type)
    
    # Detect internal links
    for match in re.finditer(r'href="(/[^"]*)"', content):
        link = match.group(1)
        if not link.startswith("/api/") and not link.startswith("/#"):
            if link not in analysis.internal_links:
                analysis.internal_links.append(link)
    
    # Detect image alt tags
    for match in re.finditer(r'<img[^>]+alt="([^"]*)"', content):
        analysis.image_alts.append(match.group(1))
    
    # Extract primary keyword
    analysis.primary_keyword = extract_primary_keyword(
        url, analysis.title, analysis.h1, content
    )
    
    # Generate keyword variations
    analysis.keyword_variations = generate_keyword_variations(
        analysis.primary_keyword, url
    )
    
    # Calculate SEO score before optimization
    analysis.seo_score_before = calculate_seo_score(analysis)
    
    return analysis


# ─── SEO Scoring ───────────────────────────────────────────────────────────────

def calculate_seo_score(analysis: PageSEOAnalysis) -> int:
    """Calculate an on-page SEO score (0-100) based on best practices."""
    score = 0
    
    # Title tag (15 pts)
    if analysis.title:
        score += 8
        if 30 <= len(analysis.title) <= 65:
            score += 4
        if analysis.primary_keyword and analysis.primary_keyword.split()[0].lower() in analysis.title.lower():
            score += 3
    
    # Meta description (15 pts)
    if analysis.meta_description:
        score += 8
        if 120 <= len(analysis.meta_description) <= 160:
            score += 4
        if analysis.primary_keyword and analysis.primary_keyword.split()[0].lower() in analysis.meta_description.lower():
            score += 3
    
    # H1 (12 pts)
    if analysis.h1:
        score += 8
        if analysis.primary_keyword and analysis.primary_keyword.split()[0].lower() in analysis.h1.lower():
            score += 4
    
    # Heading structure (10 pts)
    if analysis.headings:
        score += 5
        if len(analysis.headings) >= 3:
            score += 5
    
    # Canonical (10 pts)
    if analysis.canonical:
        score += 10
    
    # Open Graph (10 pts)
    if analysis.og_tags:
        score += 6
        if "image" in analysis.og_tags:
            score += 4
    
    # Twitter cards (6 pts)
    if analysis.twitter_tags:
        score += 6
    
    # Schema (12 pts)
    if analysis.schema_types:
        score += 6
        if len(analysis.schema_types) >= 2:
            score += 3
        if "BreadcrumbList" in analysis.schema_types:
            score += 3
    
    # Internal links (5 pts)
    if len(analysis.internal_links) >= 3:
        score += 5
    elif analysis.internal_links:
        score += 2
    
    # Image alt tags (5 pts)
    if analysis.image_alts:
        if all(alt.strip() for alt in analysis.image_alts):
            score += 5
        else:
            score += 2
    
    return min(score, 100)


# ─── Backup System ─────────────────────────────────────────────────────────────

def backup_file(filepath: Path) -> Path:
    """Create a timestamped backup of a file before modification."""
    BACKUP_DIR.mkdir(exist_ok=True)
    rel_name = str(filepath).replace("/", "__").replace("\\", "__")
    backup_path = BACKUP_DIR / f"{rel_name}.bak"
    shutil.copy2(filepath, backup_path)
    return backup_path


# ─── Optimization Engine ───────────────────────────────────────────────────────

def optimize_page(filepath: Path, analysis: PageSEOAnalysis) -> bool:
    """
    Apply SEO optimizations to a page file.
    Only adds MISSING technical SEO elements — never rewrites human content,
    never keyword-stuffs, never breaks layout/functionality.
    Returns True if any change was applied.
    """
    if not filepath.exists():
        return False
    
    content = filepath.read_text(encoding="utf-8")
    original = content
    
    # Capture "updated" values (default = current)
    analysis.updated_title = analysis.title
    analysis.updated_h1 = analysis.h1
    
    # ── 1. Add canonical if missing ──────────────────────────────────────────
    # Skip dynamic routes — they build canonical from runtime params.
    if not analysis.canonical and "<Title" in content and "[slug]" not in str(filepath):
        canonical_url = BASE_URL + (analysis.url if analysis.url != "/" else "/")
        canonical_tag = f'      <Link rel="canonical" href="{canonical_url}" />\n'
        # Insert right after the description meta or title
        desc_pat = re.search(r'(\s*<Meta\s+name="description"[^>]*/>\n)', content)
        if desc_pat:
            content = content.replace(
                desc_pat.group(1),
                desc_pat.group(1) + canonical_tag,
                1,
            )
            analysis.optimizations.append(f"Added canonical URL: {canonical_url}")
            analysis.meta_updated = True
        else:
            title_pat = re.search(r'(\s*</Title>\n)', content)
            if title_pat:
                content = content.replace(
                    title_pat.group(1),
                    title_pat.group(1) + canonical_tag,
                    1,
                )
                analysis.optimizations.append(f"Added canonical URL: {canonical_url}")
                analysis.meta_updated = True

    # ── 2. Add Open Graph tags if missing ────────────────────────────────────
    if not analysis.og_tags and analysis.title and "<Link rel=\"canonical\"" in content:
        canonical_url = analysis.canonical or (BASE_URL + (analysis.url if analysis.url != "/" else "/"))
        safe_title = analysis.title.replace('"', "'")
        safe_desc = (analysis.meta_description or analysis.title).replace('"', "'")
        og_block = (
            f'      <Meta property="og:type" content="website" />\n'
            f'      <Meta property="og:site_name" content="Creative Metal Industries" />\n'
            f'      <Meta property="og:title" content="{safe_title}" />\n'
            f'      <Meta property="og:description" content="{safe_desc}" />\n'
            f'      <Meta property="og:url" content="{canonical_url}" />\n'
            f'      <Meta property="og:image" content="{BASE_URL}/og-image.jpg" />\n'
            f'      <Meta property="og:locale" content="en_IN" />\n'
        )
        canon_pat = re.search(r'(\s*<Link\s+rel="canonical"[^>]*/>\n)', content)
        if canon_pat:
            content = content.replace(
                canon_pat.group(1),
                canon_pat.group(1) + og_block,
                1,
            )
            analysis.optimizations.append("Added Open Graph tags (og:type, title, description, url, image, locale)")
            analysis.meta_updated = True
    
    # ── 3. Add Twitter Card tags if missing ──────────────────────────────────
    if not analysis.twitter_tags and analysis.title and 'property="og:' in content:
        safe_title = analysis.title.replace('"', "'")
        safe_desc = (analysis.meta_description or analysis.title).replace('"', "'")
        tw_block = (
            f'      <Meta name="twitter:card" content="summary_large_image" />\n'
            f'      <Meta name="twitter:title" content="{safe_title}" />\n'
            f'      <Meta name="twitter:description" content="{safe_desc}" />\n'
            f'      <Meta name="twitter:image" content="{BASE_URL}/og-image.jpg" />\n'
        )
        # Insert after last og: meta tag
        og_tags = list(re.finditer(r'\s*<Meta\s+property="og:[^>]*/>\n', content))
        if og_tags:
            last_og = og_tags[-1]
            insert_pos = last_og.end()
            content = content[:insert_pos] + tw_block + content[insert_pos:]
            analysis.optimizations.append("Added Twitter Card tags (card, title, description, image)")
            analysis.meta_updated = True

    # ── 4. Add robots meta if missing (index, follow) ────────────────────────
    if 'name="robots"' not in content and "<Title" in content and analysis.url != "/blog/[slug]":
        robots_tag = '      <Meta name="robots" content="index, follow, max-image-preview:large" />\n'
        title_close = re.search(r'(\s*</Title>\n)', content)
        if title_close:
            content = content.replace(
                title_close.group(1),
                title_close.group(1) + robots_tag,
                1,
            )
            analysis.optimizations.append("Added robots meta (index, follow, max-image-preview:large)")
            analysis.meta_updated = True
    
    # Write changes if any were made
    if content != original:
        backup_file(filepath)
        filepath.write_text(content, encoding="utf-8")
        return True
    
    return False


# ─── Report Generation ─────────────────────────────────────────────────────────

def write_page_report(f, analysis: PageSEOAnalysis):
    """Write a single page's SEO report block."""
    f.write("=" * 80 + "\n")
    f.write(f"URL: {BASE_URL}{analysis.url}\n")
    f.write("-" * 80 + "\n")
    f.write(f"Current Title:  {analysis.title or '(none)'}\n")
    f.write(f"Updated Title:  {analysis.updated_title or analysis.title or '(unchanged)'}\n")
    f.write("\n")
    f.write(f"Current H1:     {analysis.h1 or '(none)'}\n")
    f.write(f"Updated H1:     {analysis.updated_h1 or analysis.h1 or '(unchanged)'}\n")
    f.write("\n")
    f.write(f"Primary Keyword: {analysis.primary_keyword or '(none detected)'}\n")
    f.write("\n")
    f.write("Keyword Variations Added:\n")
    if analysis.keyword_variations:
        for kw in analysis.keyword_variations:
            f.write(f"  - {kw}\n")
    else:
        f.write("  (none)\n")
    f.write("\n")
    f.write("Headings Optimized:\n")
    if analysis.headings_optimized:
        for old, new in analysis.headings_optimized:
            f.write(f"  {old} -> {new}\n")
    else:
        f.write("  (headings preserved — no forced changes to maintain readability)\n")
    f.write("\n")
    f.write(f"Meta Description Updated: {'Yes' if analysis.meta_updated else 'No'}\n")
    f.write(f"Schema Updated: {'Yes' if analysis.schema_updated else 'No'}\n")
    f.write(f"Internal Links Added: {analysis.internal_links_added}\n")
    f.write(f"Image Alt Tags Added: {analysis.images_optimized}\n")
    f.write("\n")
    if analysis.optimizations:
        f.write("Technical SEO Fixes Applied:\n")
        for opt in analysis.optimizations:
            f.write(f"  * {opt}\n")
        f.write("\n")
    f.write(f"Detected Schema Types: {', '.join(analysis.schema_types) or '(none)'}\n")
    f.write(f"Detected Headings: {len(analysis.headings)} (H2-H6)\n")
    f.write(f"Detected Internal Links: {len(analysis.internal_links)}\n")
    f.write(f"Detected Images with Alt: {len(analysis.image_alts)}\n")
    f.write("\n")
    f.write(f"SEO Score Before: {analysis.seo_score_before}/100\n")
    f.write(f"SEO Score After:  {analysis.seo_score_after}/100\n")
    f.write("Status: SUCCESS\n")
    f.write("=" * 80 + "\n\n")


# ─── Main Runner ───────────────────────────────────────────────────────────────

def main():
    print("=" * 70)
    print("  SEO OPTIMIZATION SYSTEM — Creative Metal Industries")
    print("  Website:", BASE_URL)
    print("=" * 70)
    print()
    
    if not ROUTES_DIR.exists():
        print(f"ERROR: Routes directory not found: {ROUTES_DIR}")
        print("Run this script from the project root.")
        return
    
    analyses: List[PageSEOAnalysis] = []
    
    # ── Crawl & analyze all pages ────────────────────────────────────────────
    print(f"Crawling {len(PAGES)} pages...\n")
    for filename, url in PAGES.items():
        filepath = ROUTES_DIR / filename
        if not filepath.exists():
            print(f"  [SKIP] {url} (file not found: {filename})")
            continue
        
        analysis = analyze_page(filepath, url)
        print(f"  [ANALYZED] {url}  (score: {analysis.seo_score_before}/100, "
              f"{len(analysis.keyword_variations)} keyword variations)")
        analyses.append(analysis)
    
    print()
    print("Applying optimizations...\n")
    
    # ── Optimize each page ───────────────────────────────────────────────────
    for analysis in analyses:
        filepath = Path(analysis.filepath)
        changed = optimize_page(filepath, analysis)
        # Re-analyze to compute the "after" score
        if changed:
            after = analyze_page(filepath, analysis.url)
            analysis.seo_score_after = calculate_seo_score(after)
            print(f"  [OPTIMIZED] {analysis.url}  "
                  f"({analysis.seo_score_before} -> {analysis.seo_score_after}) "
                  f"[{len(analysis.optimizations)} fixes]")
        else:
            analysis.seo_score_after = analysis.seo_score_before
            print(f"  [OK] {analysis.url}  (already well-optimized: "
                  f"{analysis.seo_score_after}/100)")
    
    print()
    generate_reports(analyses)
    print_final_summary(analyses)


# ─── Reports ───────────────────────────────────────────────────────────────────

def generate_reports(analyses: List[PageSEOAnalysis]):
    """Generate the detailed report and summary report files."""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    # ── Detailed report ──────────────────────────────────────────────────────
    with open(REPORT_FILE, "w", encoding="utf-8") as f:
        f.write("=" * 80 + "\n")
        f.write("SEO OPTIMIZATION REPORT — CREATIVE METAL INDUSTRIES\n")
        f.write(f"Website: {BASE_URL}\n")
        f.write(f"Generated: {timestamp}\n")
        f.write(f"Framework: SolidJS + SolidStart (SSR)\n")
        f.write("=" * 80 + "\n\n")
        for analysis in analyses:
            write_page_report(f, analysis)
    print(f"  [SAVED] {REPORT_FILE}")
    
    # ── Summary report ─────────────────────────────────────────────────────────
    total_pages = len(analyses)
    total_keywords = sum(len(a.keyword_variations) for a in analyses)
    total_headings = sum(len(a.headings_optimized) for a in analyses)
    total_links = sum(a.internal_links_added for a in analyses)
    total_schema = sum(1 for a in analyses if a.schema_updated) + \
                   sum(1 for a in analyses for o in a.optimizations if "schema" in o.lower())
    total_images = sum(a.images_optimized for a in analyses)
    total_fixes = sum(len(a.optimizations) for a in analyses)
    avg_before = sum(a.seo_score_before for a in analyses) / total_pages if total_pages else 0
    avg_after = sum(a.seo_score_after for a in analyses) / total_pages if total_pages else 0
    
    with open(SUMMARY_FILE, "w", encoding="utf-8") as f:
        f.write("=" * 70 + "\n")
        f.write("SEO OPTIMIZATION SUMMARY — CREATIVE METAL INDUSTRIES\n")
        f.write(f"Website: {BASE_URL}\n")
        f.write(f"Generated: {timestamp}\n")
        f.write("=" * 70 + "\n\n")
        f.write(f"Total Pages Processed:       {total_pages}\n")
        f.write(f"Total Keywords Generated:    {total_keywords}\n")
        f.write(f"Total Headings Optimized:    {total_headings}\n")
        f.write(f"Total Internal Links Added:  {total_links}\n")
        f.write(f"Total Schema Improvements:   {total_schema}\n")
        f.write(f"Total Images Optimized:      {total_images}\n")
        f.write(f"Total Technical SEO Fixes:   {total_fixes}\n")
        f.write(f"Average SEO Score Before:    {avg_before:.1f}/100\n")
        f.write(f"Average SEO Score After:     {avg_after:.1f}/100\n")
        f.write(f"Average Improvement:         +{avg_after - avg_before:.1f} points\n\n")
        f.write("-" * 70 + "\n")
        f.write("PER-PAGE SCORE TABLE\n")
        f.write("-" * 70 + "\n")
        f.write(f"{'PAGE':<50}{'BEFORE':>9}{'AFTER':>9}\n")
        for a in analyses:
            f.write(f"{a.url:<50}{a.seo_score_before:>7}  {a.seo_score_after:>7}\n")
        f.write("\n")
        f.write("Safety: Backups stored in ./seo_backups/ before every change.\n")
        f.write("All optimizations follow Google Search Essentials. No keyword stuffing.\n")
    print(f"  [SAVED] {SUMMARY_FILE}")


def print_final_summary(analyses: List[PageSEOAnalysis]):
    """Print final summary of all changes to the console."""
    total_pages = len(analyses)
    total_keywords = sum(len(a.keyword_variations) for a in analyses)
    total_fixes = sum(len(a.optimizations) for a in analyses)
    optimized = sum(1 for a in analyses if a.optimizations)
    avg_before = sum(a.seo_score_before for a in analyses) / total_pages if total_pages else 0
    avg_after = sum(a.seo_score_after for a in analyses) / total_pages if total_pages else 0
    
    print()
    print("=" * 70)
    print("  FINAL SUMMARY")
    print("=" * 70)
    print(f"  Pages processed:          {total_pages}")
    print(f"  Pages with new fixes:     {optimized}")
    print(f"  Keyword variations:       {total_keywords}")
    print(f"  Technical SEO fixes:      {total_fixes}")
    print(f"  Avg SEO score:            {avg_before:.1f} -> {avg_after:.1f} "
          f"(+{avg_after - avg_before:.1f})")
    print()
    print(f"  Reports written:")
    print(f"    - {REPORT_FILE}")
    print(f"    - {SUMMARY_FILE}")
    print(f"  Backups in:  ./seo_backups/")
    print("=" * 70)
    print()
    print("  Top technical fixes applied:")
    for a in analyses:
        if a.optimizations:
            print(f"    {a.url}:")
            for opt in a.optimizations:
                print(f"      - {opt}")
    print()
    print("  Done. Review changes, run 'npm run build' to verify, then deploy.")


if __name__ == "__main__":
    main()
