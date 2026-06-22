"""Generate PDF from SEO_AUDIT_REPORT.txt"""
from fpdf import FPDF
import os

INPUT_FILE = "SEO_AUDIT_REPORT.txt"
OUTPUT_FILE = "SEO_AUDIT_REPORT.pdf"

def clean(text):
    """Remove/replace unicode chars that latin-1 can't handle."""
    replacements = {
        "═": "=", "─": "-", "║": "|", "╔": "+", "╗": "+", "╚": "+", "╝": "+",
        "║": "|", "╟": "+", "╢": "+", "╫": "+", "═": "=",
        "✅": "[OK]", "❌": "[X]", "⚠️": "[!]", "⚠": "[!]",
        "🏆": "*", "🟢": "*", "🟡": "*", "🔵": "*", "📚": "*",
        "✓": "OK", "→": "->", "←": "<-", "•": "-",
        "₹": "Rs.", "★": "*", "☆": " ",
        "🚀": ">", "📦": ">", "📄": ">", "🔬": ">", "🏭": ">",
        "🌍": ">", "✂️": ">", "⚡": ">", "🛢️": ">", "🏗️": ">",
        "💧": ">", "🧪": ">", "🔩": ">", "⚙️": ">", "🎯": ">",
        "📐": ">", "🏥": ">", "⚓": ">", "✈️": ">", "🧱": ">",
        "🚂": ">", "🌱": ">", "⬜": ">", "🟤": ">", "🟫": ">",
        "🔶": ">", "🔴": ">", "🟠": ">", "⚪": ">", "✨": ">",
        "📱": ">", "☎️": ">", "✉️": ">", "📞": ">", "📍": ">",
        "🏅": ">", "💰": ">", "⭐": "*",
    }
    for k, v in replacements.items():
        text = text.replace(k, v)
    # Remove any remaining non-latin1 characters
    return text.encode("latin-1", errors="replace").decode("latin-1")

class PDF(FPDF):
    def header(self):
        self.set_font("Helvetica", "B", 9)
        self.set_text_color(150, 150, 150)
        self.cell(0, 5, "SEO Audit Report - creativemetalind.com - 2026-06-17", align="C", new_x="LMARGIN", new_y="NEXT")
        self.ln(5)

    def footer(self):
        self.set_y(-15)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(150, 150, 150)
        self.cell(0, 10, f"Page {self.page_no()}/{{nb}}", align="C")

pdf = PDF()
pdf.alias_nb_pages()
pdf.set_auto_page_break(auto=True, margin=20)
pdf.add_page()

with open(INPUT_FILE, "r", encoding="utf-8") as f:
    lines = f.readlines()

for line in lines:
    line = clean(line.rstrip("\n"))

    # Section dividers
    if line.startswith("==") and len(line) > 10:
        pdf.ln(3)
        pdf.set_draw_color(200, 120, 20)
        pdf.line(10, pdf.get_y(), 200, pdf.get_y())
        pdf.ln(2)
    # Numbered section headers
    elif line and line[0].isdigit() and ". " in line[:5]:
        pdf.ln(4)
        pdf.set_font("Helvetica", "B", 12)
        pdf.set_text_color(30, 30, 30)
        pdf.cell(0, 7, line[:90], new_x="LMARGIN", new_y="NEXT")
        pdf.ln(2)
    # Score lines
    elif "Score:" in line or "/10" in line or "/100" in line:
        pdf.set_font("Helvetica", "B", 10)
        pdf.set_text_color(200, 80, 20)
        pdf.cell(0, 5, "  " + line.strip()[:90], new_x="LMARGIN", new_y="NEXT")
    # OK items
    elif "[OK]" in line:
        pdf.set_font("Helvetica", "", 9)
        pdf.set_text_color(20, 120, 50)
        pdf.cell(0, 4.5, "  " + line.strip()[:90], new_x="LMARGIN", new_y="NEXT")
    # Error items
    elif "[X]" in line:
        pdf.set_font("Helvetica", "", 9)
        pdf.set_text_color(180, 30, 30)
        pdf.cell(0, 4.5, "  " + line.strip()[:90], new_x="LMARGIN", new_y="NEXT")
    # Warning items
    elif "[!]" in line:
        pdf.set_font("Helvetica", "", 9)
        pdf.set_text_color(180, 140, 20)
        pdf.cell(0, 4.5, "  " + line.strip()[:90], new_x="LMARGIN", new_y="NEXT")
    # Empty lines
    elif not line.strip():
        pdf.ln(2)
    # Normal text
    else:
        pdf.set_font("Helvetica", "", 9)
        pdf.set_text_color(40, 40, 40)
        if len(line) > 95:
            pdf.multi_cell(0, 4.5, line)
        else:
            pdf.cell(0, 4.5, line[:95], new_x="LMARGIN", new_y="NEXT")

pdf.output(OUTPUT_FILE)
print(f"PDF generated: {OUTPUT_FILE}")
print(f"Size: {os.path.getsize(OUTPUT_FILE) / 1024:.1f} KB")
