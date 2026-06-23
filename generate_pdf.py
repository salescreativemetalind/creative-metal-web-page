#!/usr/bin/env python3
"""Convert SEO_KEYWORD_CONTENT_MASTER_PLAN.txt to a formatted PDF."""
from fpdf import FPDF
from pathlib import Path
import textwrap

INPUT = Path("SEO_KEYWORD_CONTENT_MASTER_PLAN.txt")
OUTPUT = Path("SEO_KEYWORD_CONTENT_MASTER_PLAN.pdf")

FONT_DIR = "/home/himanshus/anaconda3/lib/python3.12/site-packages/matplotlib/mpl-data/fonts/ttf"

def main():
    text = INPUT.read_text(encoding="utf-8")
    # Wrap long lines to avoid rendering issues
    wrapped_lines = []
    for line in text.split("\n"):
        if len(line) > 100:
            wrapped_lines.extend(textwrap.wrap(line, width=95, subsequent_indent="  "))
        else:
            wrapped_lines.append(line)

    pdf = FPDF(orientation="P", unit="mm", format="A4")
    pdf.add_font("DV", "", f"{FONT_DIR}/DejaVuSans.ttf")
    pdf.add_font("DV", "B", f"{FONT_DIR}/DejaVuSans-Bold.ttf")
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()

    # Title page
    pdf.set_font("DV", "B", 16)
    pdf.set_text_color(232, 130, 26)
    pdf.cell(0, 12, "SEO KEYWORD CONTENT MASTER PLAN", new_x="LMARGIN", new_y="NEXT", align="C")
    pdf.set_font("DV", "B", 12)
    pdf.set_text_color(30, 30, 30)
    pdf.cell(0, 8, "Creative Metal Industries", new_x="LMARGIN", new_y="NEXT", align="C")
    pdf.set_font("DV", "", 9)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 6, "https://www.creativemetalind.com", new_x="LMARGIN", new_y="NEXT", align="C")
    pdf.ln(10)

    for line in wrapped_lines:
        s = line.rstrip()

        # Section dividers
        if s and len(s) > 10 and all(c in "=═ " for c in s):
            pdf.set_draw_color(232, 130, 26)
            pdf.line(10, pdf.get_y(), 200, pdf.get_y())
            pdf.ln(3)
            continue

        if "████" in s:
            pdf.ln(4)
            pdf.set_font("DV", "B", 11)
            pdf.set_text_color(232, 130, 26)
            clean = s.replace("█", "").strip()
            pdf.cell(0, 7, clean, new_x="LMARGIN", new_y="NEXT")
            pdf.ln(2)
            continue

        if s.startswith("──") or (s.startswith("─") and len(s) > 20):
            pdf.set_draw_color(220, 220, 220)
            pdf.line(10, pdf.get_y(), 200, pdf.get_y())
            pdf.ln(2)
            continue

        # Headers
        if any(s.startswith(k) for k in ["PAGE:", "URL:", "INTENT:", "PRIMARY", "ALL KEYWORD", "INTERNAL LINKS", "CATEGORY:", "TOTAL", "STRATEGY:", "LINK MAP"]):
            pdf.set_font("DV", "B", 9)
            pdf.set_text_color(30, 30, 30)
            pdf.cell(0, 5, s[:95], new_x="LMARGIN", new_y="NEXT")
            continue

        # Bullets
        if s.lstrip().startswith(("✦", "✓", "✗", "→", "•")):
            pdf.set_font("DV", "", 8)
            pdf.set_text_color(50, 50, 50)
            pdf.cell(0, 4, "  " + s.lstrip()[:95], new_x="LMARGIN", new_y="NEXT")
            continue

        # Regular text
        if s:
            pdf.set_font("DV", "", 8)
            pdf.set_text_color(60, 60, 60)
            pdf.cell(0, 4, s[:98], new_x="LMARGIN", new_y="NEXT")
        else:
            pdf.ln(2)

    pdf.output(str(OUTPUT))
    print(f"[SAVED] {OUTPUT} ({OUTPUT.stat().st_size // 1024} KB, {pdf.page_no()} pages)")

if __name__ == "__main__":
    main()
