
TARGET_DOMAIN = "creativemetalind.com"

KEYWORDS = {
    "🏆 BRAND": [
        "creative metal industries",
        "creative metal industries vadodara",
        "creative metal industries gujarat",
        "creativemetalind",
    ],
    "🔴 SS PIPE VADODARA": [
        "SS pipe supplier Vadodara",
        "SS pipe supplier in Vadodara",
        "stainless steel pipe supplier Vadodara",
        "SS pipe dealer Vadodara",
        "SS pipe stockist Vadodara",
        "best SS pipe supplier Vadodara",
        "SS seamless pipe supplier Vadodara",
        "SS welded pipe supplier Vadodara",
        "SS 304 pipe supplier Vadodara",
        "SS 316L pipe supplier Vadodara",
        "ASTM A312 pipe Vadodara",
        "IBR SS pipe Vadodara",
    ],
    "🟠 SS SEAMLESS INDIA": [
        "SS seamless pipe supplier India",
        "stainless steel seamless pipe manufacturer India",
        "SS seamless pipe manufacturer India",
        "ASTM A312 pipe supplier India",
        "SS 304 seamless pipe supplier India",
        "SS 316L seamless pipe supplier India",
    ],
    "🟡 SS FITTINGS": [
        "SS buttweld fittings supplier India",
        "SS pipe fittings supplier India",
        "stainless steel fittings manufacturer India",
        "ASTM A403 fittings supplier",
        "SS elbow tee reducer supplier",
    ],
    "🟢 SS FLANGES": [
        "SS flange supplier Vadodara",
        "SS flanges supplier Gujarat",
        "stainless steel flanges supplier India",
        "ASTM A182 flange supplier Vadodara",
        "weld neck flange supplier India",
        "ASME B16.5 flange supplier",
    ],
    "🔵 INCONEL": [
        "Inconel pipe supplier India",
        "Inconel 625 pipe supplier India",
        "Inconel 600 pipe supplier India",
        "Inconel 718 pipe India",
        "nickel alloy pipe supplier India",
        "ASTM B444 pipe supplier",
    ],
    "🟣 ALLOY STEEL": [
        "alloy steel pipe supplier India",
        "P91 pipe supplier India",
        "P22 pipe supplier India",
        "P11 pipe supplier",
        "ASTM A335 P91 pipe supplier",
        "IBR certified pipe supplier India",
        "alloy steel pipe for power plant",
    ],
    "⚫ DUPLEX": [
        "duplex steel supplier Vadodara",
        "duplex 2205 supplier Vadodara",
        "duplex 2205 supplier India",
        "super duplex 2507 pipe supplier India",
        "super duplex supplier Vadodara",
        "IBR pipe supplier Gujarat",
    ],
    "🟤 CARBON STEEL": [
        "carbon steel pipe supplier Vadodara",
        "carbon steel fittings supplier Vadodara",
        "carbon steel flange supplier Vadodara",
        "ASTM A106 Gr.B pipe supplier India",
        "ERW pipe supplier Vadodara",
        "SA 516 Gr.70 plate stockist India",
        "carbon steel plate stockist India",
        "NACE HIC steel plate supplier India",
        "HIC tested plate India",
        "sour service plate supplier",
    ],
    "🏗️ TMT / STRUCTURAL": [
        "TMT bars supplier Gujarat",
        "TMT bar supplier Vadodara",
        "Fe 500D TMT bars Gujarat",
        "structural steel supplier Gujarat",
        "MS angle supplier Vadodara",
    ],
    "📄 SS 304/316L PAGE": [
        "SS 304 pipe supplier India",
        "SS 316L pipe supplier India",
        "stainless steel 304 pipe",
        "stainless steel 316L seamless pipe",
        "SS pipe manufacturer India",
    ],
    "🏢 METAL TRADING": [
        "metal trading company Vadodara",
        "steel trading company Gujarat",
        "metal importer exporter India",
        "industrial raw material supplier Gujarat",
    ],
    "📚 BLOG INFORMATIONAL": [
        "SS 304 vs 316L stainless steel",
        "SS 304 vs SS 321 difference",
        "duplex 2205 vs super duplex 2507",
        "ERW vs seamless pipe difference",
        "Inconel vs Monel comparison",
        "how to read mill test certificate",
        "what is IBR certification",
        "pipe schedule chart SCH 40 80",
        "WNRF vs SORF flange difference",
        "how to select pipe fittings refinery",
        "what is NACE MR0175",
        "P91 alloy steel properties",
        "Hastelloy C276 corrosion resistance",
        "titanium grade 2 vs grade 5",
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


if __name__ == "__main__":
    total = sum(len(v) for v in KEYWORDS.values())
    print(f"Target: {TARGET_DOMAIN}")
    print(f"Total keywords: {total}")
    print(f"Categories: {len(KEYWORDS)}")
    print("\nKeywords by category:")
    for cat, kws in KEYWORDS.items():
        print(f"  {cat}: {len(kws)}")
