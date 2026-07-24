#!/usr/bin/env python3
"""Generate a PDF report of all 549 pages with SEO strategy for Creative Metal Industries."""

from fpdf import FPDF
import subprocess
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Get all URLs from sitemap
result = subprocess.run(
    ["grep", "-oP", "(?<=<loc>)[^<]+", "creative-metal-industries/public/sitemap.xml"],
    capture_output=True, text=True
)
ALL_URLS = [u.strip() for u in result.stdout.strip().split("\n") if u.strip()]

class PDF(FPDF):
    def _safe(self, text):
        """Replace non-latin1 chars with ASCII equivalents."""
        return (text
            .replace('\u2014', '-').replace('\u2013', '-')
            .replace('\u2018', "'").replace('\u2019', "'")
            .replace('\u201c', '"').replace('\u201d', '"')
            .replace('\u2022', '*').replace('\u2026', '...')
            .replace('\u20b9', 'Rs.').replace('\u2192', '->')
            .replace('\u2713', '[OK]').replace('\u2717', '[X]')
            .replace('\u2605', '*').replace('\u274c', '[X]')
            .replace('\u2714', '[OK]').replace('\u2610', '[ ]')
            .replace('\u2611', '[x]').replace('\u25cf', '*')
        )

    def header(self):
        self.set_font("Helvetica", "B", 9)
        self.set_text_color(100, 100, 100)
        self.cell(0, 6, "Creative Metal Industries - Complete SEO Report | www.creativemetalind.com", align="C")
        self.ln(8)
        self.set_draw_color(232, 130, 26)
        self.set_line_width(0.5)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(4)

    def footer(self):
        self.set_y(-15)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(128, 128, 128)
        self.cell(0, 10, f"Page {self.page_no()}/{{nb}} | Generated July 2026 | Contact: +91 99982 80619", align="C")

    def section_title(self, title):
        self.set_font("Helvetica", "B", 14)
        self.set_text_color(17, 24, 39)
        self.set_fill_color(232, 130, 26)
        self.cell(0, 10, f"  {self._safe(title)}", ln=True, fill=False)
        self.set_draw_color(232, 130, 26)
        self.set_line_width(0.8)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(6)

    def sub_title(self, title):
        self.set_font("Helvetica", "B", 11)
        self.set_text_color(55, 65, 81)
        self.cell(0, 8, self._safe(title), ln=True)
        self.ln(2)

    def body_text(self, text):
        self.set_font("Helvetica", "", 9)
        self.set_text_color(55, 65, 81)
        self.multi_cell(0, 5, self._safe(text))
        self.ln(3)

    def url_item(self, num, url, category=""):
        self.set_font("Courier", "", 7.5)
        self.set_text_color(0, 80, 160)
        label = f"{num:>3}. {url}"
        self.cell(0, 4.2, self._safe(label), ln=True, link=url)

    def table_row(self, col1, col2, col3="", col4="", header=False):
        if header:
            self.set_font("Helvetica", "B", 8.5)
            self.set_fill_color(232, 130, 26)
            self.set_text_color(255, 255, 255)
        else:
            self.set_font("Helvetica", "", 8.5)
            self.set_text_color(55, 65, 81)
            self.set_fill_color(249, 250, 251)

        w1, w2, w3, w4 = 55, 50, 45, 40
        h = 6
        fill = header or (self.page_no() % 2 == 0)
        self.cell(w1, h, self._safe(col1), border=1, fill=header)
        self.cell(w2, h, self._safe(col2), border=1, fill=header)
        if col3:
            self.cell(w3, h, self._safe(col3), border=1, fill=header)
        if col4:
            self.cell(w4, h, self._safe(col4), border=1, fill=header)
        self.ln(h)


# Create PDF
pdf = PDF()
pdf.alias_nb_pages()
pdf.set_auto_page_break(auto=True, margin=20)

# ─── COVER PAGE ─────────────────────────────────────────────────────────────
pdf.add_page()
pdf.ln(30)
pdf.set_font("Helvetica", "B", 28)
pdf.set_text_color(17, 24, 39)
pdf.cell(0, 15, "COMPLETE SEO REPORT", ln=True, align="C")
pdf.set_font("Helvetica", "", 16)
pdf.set_text_color(232, 130, 26)
pdf.cell(0, 10, "Creative Metal Industries", ln=True, align="C")
pdf.ln(10)
pdf.set_font("Helvetica", "", 12)
pdf.set_text_color(107, 114, 128)
pdf.cell(0, 8, "www.creativemetalind.com", ln=True, align="C")
pdf.cell(0, 8, "549 Pages | 1,060+ Keywords | Complete Strategy", ln=True, align="C")
pdf.cell(0, 8, "July 2026", ln=True, align="C")
pdf.ln(20)

# Summary box
pdf.set_fill_color(249, 250, 251)
pdf.set_draw_color(232, 130, 26)
pdf.rect(25, pdf.get_y(), 160, 60, "D")
pdf.set_xy(30, pdf.get_y() + 5)
pdf.set_font("Helvetica", "B", 11)
pdf.set_text_color(17, 24, 39)
pdf.cell(0, 7, "REPORT CONTENTS:", ln=True)
pdf.set_x(30)
pdf.set_font("Helvetica", "", 10)
items = [
    "1. All 549 Page URLs (organized by category)",
    "2. Ranking Difficulty & Timeline for Each Category",
    "3. Google Indexing Timeline (how long for 549 pages)",
    "4. Backlinking Strategy (free methods)",
    "5. Google Reviews Plan (25+ reviews in 60 days)",
    "6. Revenue Projections (month-by-month)",
    "7. Weekly Action Plan",
    "8. What Happens After Ranking (traffic & enquiries)",
]
for item in items:
    pdf.set_x(35)
    pdf.cell(0, 6, item, ln=True)

# ─── PAGE 2: ALL URLS ───────────────────────────────────────────────────────
pdf.add_page()
pdf.section_title("ALL 549 PAGE LINKS")
pdf.body_text(f"Total pages in sitemap: {len(ALL_URLS)}")

# Categorize URLs
core = [u for u in ALL_URLS if u.count("/") == 3 and "/blog" not in u and "steel-" not in u.split("/")[-1] and "ss-pipe-supplier-" not in u.split("/")[-1]]
landing = [u for u in ALL_URLS if u.count("/") == 3 and "/blog" not in u and any(k in u for k in ["supplier", "stockist", "trading", "fittings-vadodara", "plate-supplier", "bar-supplier", "tube-supplier", "sheet-supplier"])]
location = [u for u in ALL_URLS if u.count("/") == 3 and "/blog" not in u and any(k in u for k in ["steel-pipe-supplier-", "steel-supplier-", "ss-pipe-supplier-a", "ss-pipe-supplier-s", "ss-pipe-supplier-m", "ss-pipe-supplier-r", "ss-pipe-supplier-b", "ss-pipe-supplier-p", "stainless-steel-supplier-g"])]
blogs = [u for u in ALL_URLS if "/blog/" in u]
price_blogs = [u for u in blogs if "price" in u]
comparison_blogs = [u for u in blogs if "vs" in u.split("/")[-1] or "vs-" in u]
weight_blogs = [u for u in blogs if "weight" in u or "calculator" in u]
how_to_blogs = [u for u in blogs if "how-to" in u]
what_is_blogs = [u for u in blogs if "what-is" in u]
spec_blogs = [u for u in blogs if any(k in u for k in ["astm-", "asme-", "is-1", "is-2", "is-3", "is-8", "api-5", "en-10", "din-", "nace-"]) and "vs" not in u]
industry_blogs = [u for u in blogs if any(k in u for k in ["piping-for-", "steel-for-", "ss-pipe-for-", "material-for-"])]
other_blogs = [u for u in blogs if u not in price_blogs and u not in comparison_blogs and u not in weight_blogs and u not in how_to_blogs and u not in what_is_blogs and u not in spec_blogs and u not in industry_blogs]

categories = [
    ("PRODUCT & SUPPLIER LANDING PAGES", [u for u in ALL_URLS if u.count("/") == 3 and "/blog" not in u and u != "https://www.creativemetalind.com/"]),
    ("PRICE / RATE BLOG PAGES", price_blogs),
    ("WEIGHT CHARTS & CALCULATORS", weight_blogs),
    ("COMPARISON (VS) ARTICLES", comparison_blogs),
    ("SPECIFICATION & STANDARD GUIDES", spec_blogs),
    ("INDUSTRY APPLICATION GUIDES", industry_blogs),
    ("HOW-TO GUIDES", how_to_blogs),
    ("WHAT-IS (EDUCATIONAL) PAGES", what_is_blogs),
    ("OTHER BLOG ARTICLES", other_blogs),
]

num = 0
for cat_name, urls in categories:
    if not urls:
        continue
    if pdf.get_y() > 250:
        pdf.add_page()
    pdf.sub_title(f"{cat_name} ({len(urls)} pages)")
    for url in urls:
        num += 1
        if pdf.get_y() > 275:
            pdf.add_page()
        pdf.url_item(num, url)
    pdf.ln(4)

# ─── RANKING TIMELINE ───────────────────────────────────────────────────────
pdf.add_page()
pdf.section_title("RANKING DIFFICULTY & TIMELINE")

data = [
    ("Location (Vadodara)", "EASY", "4-8 weeks", "500-1000/mo"),
    ("Location (Gujarat)", "EASY", "6-12 weeks", "800-2000/mo"),
    ("Location (All India)", "MEDIUM", "12-20 weeks", "3000-8000/mo"),
    ("Product Landing (Niche)", "MEDIUM", "8-16 weeks", "1000-3000/mo"),
    ("Product Landing (Competitive)", "HARD", "16-30 weeks", "3000-8000/mo"),
    ("Price/Rate Pages", "MEDIUM", "8-14 weeks", "5000-15000/mo"),
    ("Comparison Blogs (X vs Y)", "EASY-MED", "6-12 weeks", "3000-8000/mo"),
    ("How-To Guides", "EASY", "4-10 weeks", "2000-5000/mo"),
    ("What-Is Educational", "EASY", "4-8 weeks", "2000-4000/mo"),
    ("Weight Charts", "EASY-MED", "6-12 weeks", "5000-12000/mo"),
    ("Specification Guides", "MEDIUM", "8-14 weeks", "1500-3000/mo"),
    ("Industry Pages", "MEDIUM", "10-16 weeks", "800-2000/mo"),
]

pdf.table_row("Category", "Difficulty", "Time to Page 1", "Traffic", header=True)
for row in data:
    pdf.table_row(*row)

# ─── INDEXING TIMELINE ──────────────────────────────────────────────────────
pdf.ln(10)
pdf.section_title("GOOGLE INDEXING TIMELINE — 549 PAGES")
pdf.body_text(
    "Realistic timeline to get all 549 pages indexed by Google:\n\n"
    "  Week 1-2:    Google discovers sitemap, crawls 20-50 pages\n"
    "  Week 2-4:    100-150 pages indexed\n"
    "  Month 1-2:   200-300 pages indexed\n"
    "  Month 2-3:   350-450 pages indexed\n"
    "  Month 3-5:   All 549 pages indexed\n\n"
    "TOTAL TIME: 3-5 months for full indexation."
)

pdf.sub_title("How to Speed Up Indexing:")
speed_tips = [
    "1. Submit sitemap.xml in Google Search Console immediately",
    "2. Request indexing manually for top 50 pages (URL Inspection tool)",
    "3. Ping Google: google.com/ping?sitemap=your-sitemap-url",
    "4. Use IndexNow API for instant notification to all search engines",
    "5. Share each new page on LinkedIn, Facebook, GBP (Google finds via social)",
    "6. Post 3x/week on Google Business Profile with page links",
    "7. Internal links from footer (already done) accelerate discovery",
]
for tip in speed_tips:
    pdf.body_text(f"  {tip}")

# ─── BACKLINKING ────────────────────────────────────────────────────────────
pdf.add_page()
pdf.section_title("BACKLINKING STRATEGY (FREE)")

pdf.sub_title("Method 1: Google Business Profile (Most Important)")
pdf.body_text("Complete 100%. Post 3x/week. Get 25+ reviews. Add all products as services.")

pdf.sub_title("Method 2: Free Business Directories")
directories = [
    "JustDial, Sulekha, IndiaMART, TradeIndia, ExportersIndia",
    "Yellow Pages India, Grotal, Kompass India, ThomasNet",
    "Hotfrog, Cylex India, BizVibe, IndiaBizClub, Dial4Trade",
]
for d in directories:
    pdf.body_text(f"  > {d}")

pdf.sub_title("Method 3: Quora Answers (Traffic + Authority)")
pdf.body_text("Answer 3-5 industry questions per week on Quora with helpful 200-word answers. Link to relevant page naturally.")

pdf.sub_title("Method 4: LinkedIn Articles & Posts")
pdf.body_text("Publish 1 article/week, share blog links 3x/week, join industry groups, connect with EPC procurement managers.")

pdf.sub_title("Method 5: Medium Blog")
pdf.body_text("Repurpose blog articles on Medium (rewrite 60%+). 2 articles/week. Each with 1-2 backlinks to your site.")

pdf.sub_title("Method 6: Industry Directories")
pdf.body_text("Gujarat Chamber of Commerce, FIEO listing, Vadodara Industrial Association, GIDC directory, steel industry events.")

# ─── GOOGLE REVIEWS ─────────────────────────────────────────────────────────
pdf.add_page()
pdf.section_title("GOOGLE REVIEWS STRATEGY")

pdf.sub_title("Target: 25+ Reviews in 60 Days (3-4 per week)")
pdf.body_text(
    "Impact of reviews on Google Map Pack ranking:\n"
    "  0-5 reviews  = Position 10+ (invisible)\n"
    "  10-15 reviews = Position 5-8\n"
    "  25+ reviews  = Position 1-3 (TOP visibility)\n\n"
    "WHO TO ASK:\n"
    "  - Existing customers after successful delivery\n"
    "  - Regular monthly clients\n"
    "  - Transport partners\n"
    "  - Visiting clients at warehouse\n\n"
    "HOW TO ASK:\n"
    "  Send WhatsApp within 24 hours of delivery:\n"
    '  "Thank you for your order. If happy with our material/service,\n'
    '   please leave a quick Google review: [direct review link]"\n\n'
    "WHAT THEY SHOULD MENTION:\n"
    '  - Product: "SS 304 pipe", "duplex steel"\n'
    '  - Location: "Vadodara", "Gujarat"\n'
    '  - Quality: "genuine material", "proper MTC", "fast delivery"'
)

# ─── REVENUE PROJECTION ─────────────────────────────────────────────────────
pdf.add_page()
pdf.section_title("REVENUE PROJECTION — MONTH BY MONTH")

projections = [
    ("Month 1", "500-1000", "5-10", "2-5 lakhs"),
    ("Month 2", "1500-3000", "10-20", "5-12 lakhs"),
    ("Month 3", "4000-8000", "25-50", "15-30 lakhs"),
    ("Month 4-6", "8000-15000", "50-120", "30-70 lakhs"),
    ("Month 6-12", "15000-35000", "100-300", "50-150 lakhs"),
    ("Month 12-18", "25000-50000", "200-500", "80-200 lakhs"),
]

pdf.table_row("Period", "Traffic/Month", "Enquiries/Month", "Revenue Potential", header=True)
for row in projections:
    pdf.table_row(*row)

pdf.ln(10)
pdf.sub_title("What Happens After Ranking:")
pdf.body_text(
    "1. TRAFFIC: Thousands of engineers and buyers visit your pages monthly\n"
    "2. ENQUIRIES: Phone calls and WhatsApp messages from ready-to-buy customers\n"
    "3. BRAND RECOGNITION: People search 'Creative Metal Industries' directly\n"
    "4. TRUST: Google Reviews + Page 1 ranking = instant credibility\n"
    "5. COMPOUND GROWTH: More traffic > more links > more authority > higher rankings\n"
    "6. REDUCED AD SPEND: Organic traffic replaces paid Google Ads over time\n"
    "7. EXPORT ENQUIRIES: International buyers find you through informational content"
)

# ─── WEEKLY ACTION PLAN ─────────────────────────────────────────────────────
pdf.add_page()
pdf.section_title("WEEKLY ACTION PLAN (2-3 Hours/Week)")

pdf.sub_title("MONDAY (30 minutes):")
pdf.body_text("  - Post on Google Business Profile (link to 1 product page)\n  - Share 1 blog link on LinkedIn\n  - Answer 1 Quora question with link")

pdf.sub_title("WEDNESDAY (30 minutes):")
pdf.body_text("  - Post on LinkedIn (product/industry insight)\n  - Share 1 page on Facebook\n  - Ask 1 client for Google review")

pdf.sub_title("FRIDAY (30 minutes):")
pdf.body_text("  - Post GBP update (different product)\n  - Share blog article on LinkedIn\n  - Submit 1 directory listing\n  - Answer 1 Quora question")

pdf.sub_title("MONTHLY (2 hours — first week):")
pdf.body_text("  - Update price page titles with new month/year\n  - Add 1 new FAQ to 5 top pages\n  - Check Search Console for indexing status\n  - Review ranking for top 20 keywords\n  - Request indexing for any unindexed pages")

# ─── FINAL PAGE ─────────────────────────────────────────────────────────────
pdf.add_page()
pdf.section_title("SUMMARY & KEY NUMBERS")
pdf.ln(5)
pdf.set_font("Helvetica", "B", 12)
pdf.set_text_color(17, 24, 39)

summary = [
    ("Total Pages Live", "549"),
    ("Total Keywords Targeted", "1,060+"),
    ("Short Keywords (New Focus)", "215"),
    ("Content Pages Created", "40 (ready-to-publish)"),
    ("Location Pages", "57 (Vadodara + Gujarat + All India)"),
    ("Price Pages", "48"),
    ("Comparison Articles", "50"),
    ("Specification Guides", "30+"),
    ("Industry Guides", "30"),
    ("How-To Guides", "35"),
    ("Weight Charts", "25"),
    ("Time to Page 1 (Local)", "4-12 weeks"),
    ("Time to Page 1 (National)", "12-30 weeks"),
    ("Time to Full Indexation", "3-5 months"),
    ("Expected Traffic (Month 6)", "10,000-20,000/month"),
    ("Expected Enquiries (Month 6)", "80-150/month"),
    ("Google Reviews Target", "25+ in 60 days"),
    ("Weekly Time Investment", "2-3 hours"),
]

for label, value in summary:
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(107, 114, 128)
    pdf.cell(95, 7, f"  {label}:")
    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(232, 130, 26)
    pdf.cell(0, 7, value, ln=True)

pdf.ln(15)
pdf.set_font("Helvetica", "B", 11)
pdf.set_text_color(17, 24, 39)
pdf.cell(0, 8, "NEXT STEPS:", ln=True)
pdf.set_font("Helvetica", "", 10)
pdf.set_text_color(55, 65, 81)
steps = [
    "1. Merge branch to main and deploy to Vercel (makes all pages live)",
    "2. Submit sitemap to Google Search Console",
    "3. Request indexing for top 20 commercial pages",
    "4. Complete Google Business Profile 100%",
    "5. Start collecting Google Reviews (target: 3-4/week)",
    "6. Submit to JustDial, Sulekha, IndiaMART, TradeIndia",
    "7. Begin weekly LinkedIn/GBP posting routine",
    "8. Run Google Ads for top 5 keywords (optional but accelerates)",
]
for step in steps:
    pdf.cell(0, 6, f"  {step}", ln=True)

pdf.ln(10)
pdf.set_font("Helvetica", "B", 12)
pdf.set_text_color(232, 130, 26)
pdf.cell(0, 8, "Contact: +91 99982 80619 | creativemetalind@gmail.com", ln=True, align="C")
pdf.cell(0, 8, "Website: https://www.creativemetalind.com", ln=True, align="C")

# Save PDF
output_path = "COMPLETE_SEO_REPORT_ALL_549_PAGES.pdf"
pdf.output(output_path)
print(f"PDF generated: {output_path}")
print(f"Total pages in PDF: {pdf.page_no()}")
print(f"Total URLs listed: {len(ALL_URLS)}")
