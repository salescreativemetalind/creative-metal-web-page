import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  {
    name: "Incoloy 800H Seamless Pipe",
    standard: "ASTM B407",
    composition: "32Ni-21Cr-46Fe high C (UNS N08810)",
    size: '1/2" to 10" NB',
    schedule: "SCH 10S to 80S",
    application: "Reformer tubes / Petrochemical furnaces",
    condition: "Solution Annealed 1150°C",
    availability: "Ready Stock",
  },
  {
    name: "Incoloy 800H Welded Pipe",
    standard: "ASTM B514",
    composition: "UNS N08810",
    size: '2" to 10" NB',
    schedule: "SCH 10S to 40S",
    application: "Radiant tubes / Heat treatment",
    condition: "Solution Annealed + Pickled",
    availability: "Ready Stock",
  },
  {
    name: "Incoloy 800H Tube",
    standard: "ASTM B163",
    composition: "32Ni-21Cr high C",
    size: "OD 12.7mm to 168.3mm",
    schedule: "Various WT",
    application: "Reformer / Pyrolysis tubes",
    condition: "Solution Annealed",
    availability: "Available",
  },
  {
    name: "Incoloy 800H Fittings",
    standard: "ASTM B366",
    composition: "N08810",
    size: '1/2" to 10" NB',
    schedule: "SCH 10S to 80S",
    application: "Complete high-temp piping",
    condition: "Solution Annealed",
    availability: "Available",
  },
];

const FAQS = [
  {
    question: "What is Incoloy 800H and how is it different from standard Incoloy 800?",
    answer:
      "Incoloy 800H (UNS N08810) is a nickel-iron-chromium alloy with controlled carbon content (0.05-0.10%) and a coarser grain size (ASTM 5 or coarser) compared to standard Incoloy 800. These controlled parameters give 800H significantly better creep and stress-rupture properties at elevated temperatures. The alloy is specifically designed for service above 600°C where long-term strength and resistance to creep deformation are critical. Creative Metal Industries supplies Incoloy 800H pipes meeting all compositional and grain size requirements per ASTM B407.",
  },
  {
    question: "What is the difference between Incoloy 800, 800H, and 800HT?",
    answer:
      "All three grades share the same basic 32Ni-21Cr composition but differ in carbon content and grain size control. Incoloy 800 has carbon up to 0.10% with no grain size requirement, making it suitable for general corrosion applications. Incoloy 800H has carbon restricted to 0.05-0.10% with grain size ASTM 5 or coarser for enhanced creep strength. Incoloy 800HT further adds titanium and aluminum controls (0.85-1.20% combined) for even higher creep resistance above 900°C. CMI stocks all three variants and provides guidance on proper grade selection based on service temperature.",
  },
  {
    question: "Why is Incoloy 800H preferred for steam methane reformer tubes?",
    answer:
      "Steam methane reformer tubes operate at temperatures of 850-950°C under internal pressure with expected service lives of 100,000+ hours. Incoloy 800H's controlled carbon and grain size provide the necessary creep-rupture strength for these demanding conditions. The alloy also offers excellent resistance to oxidation and carburization in the reformer environment containing hydrogen, carbon monoxide, and steam. Its thermal stability prevents sigma phase formation that would cause embrittlement during long-term service. CMI supplies reformer-grade 800H tubes with complete documentation including grain size certification.",
  },
  {
    question: "What grain size requirement applies to Incoloy 800H pipes?",
    answer:
      "Incoloy 800H requires a grain size of ASTM No. 5 or coarser (larger grains) as specified in ASTM B407. This coarser grain structure is achieved through solution annealing at approximately 1150°C followed by controlled cooling. The larger grain size is essential because creep resistance at elevated temperatures improves with increasing grain size due to reduced grain boundary sliding. All Incoloy 800H pipes supplied by Creative Metal Industries include grain size certification on the mill test certificate to verify compliance with this critical requirement.",
  },
  {
    question: "What sizes of Incoloy 800H pipes does Creative Metal Industries supply?",
    answer:
      'Creative Metal Industries supplies Incoloy 800H seamless pipes from 1/2" to 10" NB (15NB to 250NB) in schedules ranging from SCH 10S to 80S as per ASTM B407. Welded pipes are available from 2" to 10" NB in SCH 10S to 40S per ASTM B514. Tubes are stocked in OD range 12.7mm to 168.3mm in various wall thicknesses per ASTM B163. We maintain ready stock of commonly used reformer tube sizes and can supply non-standard dimensions with short lead times from approved mills.',
  },
  {
    question: "What is the price of Incoloy 800H pipe in India?",
    answer:
      "The price of Incoloy 800H pipe in India ranges from approximately Rs 1,800 to Rs 5,000 per kg depending on size, schedule, quantity, and current nickel/chromium market rates. Seamless pipes per ASTM B407 command a premium over welded pipes due to the manufacturing process. Prices also vary based on whether material is ex-stock or requires fresh production from the mill. Creative Metal Industries offers competitive pricing with transparent cost breakdowns and can provide firm quotations valid for the project procurement period.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Incoloy 800H Pipe",
  description:
    "Incoloy 800H (UNS N08810) seamless and welded pipes per ASTM B407 and B514 for high-temperature creep service up to 1100°C. Supplier in India.",
  brand: {
    "@type": "Brand",
    name: "Creative Metal Industries",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Creative Metal Industries",
    url: "https://www.creativemetalind.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "F-3, Loha Bhavan, Lakkadpitha Rd",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390001",
      addressCountry: "IN",
    },
    telephone: "+91-99982-80619",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "1800",
    highPrice: "5000",
    unitCode: "KGM",
    availability: "https://schema.org/InStock",
  },
  material: "Incoloy 800H (UNS N08810) - 32Ni-21Cr-46Fe",
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Standard (Seamless)",
      value: "ASTM B407 / SB407",
    },
    {
      "@type": "PropertyValue",
      name: "Standard (Welded)",
      value: "ASTM B514 / SB514",
    },
    {
      "@type": "PropertyValue",
      name: "Size Range",
      value: '1/2" to 10" NB',
    },
    {
      "@type": "PropertyValue",
      name: "Max Service Temperature",
      value: "1100°C",
    },
  ],
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export default function Incoloy800hPipeSupplier() {
  return (
    <>
      <Title>Incoloy 800H Pipe Supplier India | CMI</Title>
      <Meta
        name="description"
        content="Leading Incoloy 800H pipe supplier in India. ASTM B407 seamless & B514 welded pipes, UNS N08810, for reformer tubes & high-temp service up to 1100°C. Ready stock Vadodara."
      />
      <Meta
        name="keywords"
        content="Incoloy 800H pipe supplier India, ASTM B407 pipe, UNS N08810 pipe, Incoloy 800H seamless pipe, Incoloy 800H welded pipe, reformer tube supplier, high temperature pipe India, Incoloy 800H price India"
      />
      <Link rel="canonical" href="https://www.creativemetalind.com/incoloy-800h-pipe-supplier" />
      <script type="application/ld+json">{SCHEMA}</script>
      <script type="application/ld+json">{FAQ_SCHEMA}</script>

      {/* Navigation */}
      <nav
        style={{
          width: "100%",
          background: "#ffffff",
          "border-bottom": "2px solid #E8821A",
          padding: "12px 24px",
          display: "flex",
          "align-items": "center",
          "justify-content": "space-between",
          position: "sticky",
          top: "0",
          "z-index": "1000",
          "box-shadow": "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <a href="/" style={{ display: "flex", "align-items": "center", "text-decoration": "none" }}>
          <img
            src="/logo_cmi.png"
            alt="Creative Metal Industries Logo"
            style={{ height: "48px", "margin-right": "12px" }}
          />
          <span style={{ "font-size": "1.1rem", "font-weight": "700", color: "#1a1a1a" }}>
            Creative Metal Industries
          </span>
        </a>
        <a
          href="https://www.creativemetalind.com/#contact"
          style={{
            background: "#E8821A",
            color: "#ffffff",
            padding: "10px 22px",
            "border-radius": "6px",
            "text-decoration": "none",
            "font-weight": "600",
            "font-size": "0.95rem",
          }}
        >
          Get Quote
        </a>
      </nav>

      {/* Breadcrumb */}
      <div
        style={{
          "max-width": "960px",
          margin: "16px auto",
          padding: "0 20px",
          "font-size": "0.85rem",
          color: "#666",
        }}
      >
        <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>Home</a>
        {" > "}
        <a href="/products" style={{ color: "#E8821A", "text-decoration": "none" }}>Products</a>
        {" > "}
        <span style={{ color: "#333" }}>Incoloy 800H Pipe Supplier</span>
      </div>

      {/* Main Content */}
      <main style={{ "max-width": "960px", margin: "0 auto", padding: "0 20px 60px" }}>
        {/* Hero Section */}
        <div style={{ "text-align": "center", padding: "40px 0 32px" }}>
          <h1
            style={{
              "font-size": "2.2rem",
              "font-weight": "800",
              color: "#1a1a1a",
              "margin-bottom": "16px",
              "line-height": "1.2",
            }}
          >
            Incoloy 800H Pipe Supplier in India
          </h1>
          <p
            style={{
              "font-size": "1.1rem",
              color: "#444",
              "max-width": "720px",
              margin: "0 auto",
              "line-height": "1.7",
            }}
          >
            Creative Metal Industries is a leading supplier of Incoloy 800H (UNS N08810) seamless and
            welded pipes per ASTM B407 and ASTM B514. Our 800H pipes feature controlled carbon
            (0.05-0.10%) and grain size (ASTM 5 or coarser) for superior creep strength in
            high-temperature service up to 1100°C — ideal for reformer tubes, petrochemical furnaces,
            and heat treatment equipment.
          </p>
        </div>

        {/* Grades Table */}
        <h2 style={{ "font-size": "1.5rem", "font-weight": "700", color: "#1a1a1a", "margin-bottom": "16px" }}>
          Incoloy 800H Pipe Grades & Availability
        </h2>
        <div style={{ "overflow-x": "auto", "margin-bottom": "40px", "border-radius": "8px", border: "1px solid #e0e0e0" }}>
          <table
            style={{
              width: "100%",
              "border-collapse": "collapse",
              "font-size": "0.88rem",
              "min-width": "800px",
            }}
          >
            <thead>
              <tr style={{ background: "#E8821A", color: "#ffffff" }}>
                <th style={{ padding: "12px 10px", "text-align": "left", "font-weight": "600" }}>Product</th>
                <th style={{ padding: "12px 10px", "text-align": "left", "font-weight": "600" }}>Standard</th>
                <th style={{ padding: "12px 10px", "text-align": "left", "font-weight": "600" }}>Composition</th>
                <th style={{ padding: "12px 10px", "text-align": "left", "font-weight": "600" }}>Size</th>
                <th style={{ padding: "12px 10px", "text-align": "left", "font-weight": "600" }}>Schedule</th>
                <th style={{ padding: "12px 10px", "text-align": "left", "font-weight": "600" }}>Application</th>
                <th style={{ padding: "12px 10px", "text-align": "left", "font-weight": "600" }}>Condition</th>
                <th style={{ padding: "12px 10px", "text-align": "left", "font-weight": "600" }}>Stock</th>
              </tr>
            </thead>
            <tbody>
              {GRADES.map((grade, i) => (
                <tr style={{ background: i % 2 === 0 ? "#f9f9f9" : "#ffffff", "border-bottom": "1px solid #eee" }}>
                  <td style={{ padding: "10px", "font-weight": "600", color: "#1a1a1a" }}>{grade.name}</td>
                  <td style={{ padding: "10px" }}>{grade.standard}</td>
                  <td style={{ padding: "10px" }}>{grade.composition}</td>
                  <td style={{ padding: "10px" }}>{grade.size}</td>
                  <td style={{ padding: "10px" }}>{grade.schedule}</td>
                  <td style={{ padding: "10px" }}>{grade.application}</td>
                  <td style={{ padding: "10px" }}>{grade.condition}</td>
                  <td style={{ padding: "10px", color: grade.availability === "Ready Stock" ? "#2e7d32" : "#E8821A", "font-weight": "600" }}>
                    {grade.availability}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications Grid */}
        <h2 style={{ "font-size": "1.5rem", "font-weight": "700", color: "#1a1a1a", "margin-bottom": "16px" }}>
          Incoloy 800H Pipe Specifications
        </h2>
        <div
          style={{
            display: "grid",
            "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "12px",
            "margin-bottom": "40px",
          }}
        >
          {[
            { label: "Standard (Seamless)", value: "ASTM B407 / SB407" },
            { label: "Standard (Welded)", value: "ASTM B514 / SB514" },
            { label: "Grade", value: "Incoloy 800H (UNS N08810)" },
            { label: "Type", value: "Seamless, Welded & Tube" },
            { label: "Size Range", value: '1/2" to 10" NB (15NB to 250NB)' },
            { label: "Schedules", value: "SCH 10S, 20S, 40S, 80S" },
            { label: "Max Service Temp", value: "Up to 1100°C (high-temperature creep service)" },
            { label: "Composition", value: "30-35% Ni, 19-23% Cr, 39.5% Fe min, C 0.05-0.10%" },
            { label: "Testing", value: "Hydrostatic, UT, Grain Size (ASTM 5 or coarser), PMI" },
            { label: "Key Feature", value: "Controlled carbon + grain size for superior creep strength" },
          ].map((spec) => (
            <div
              style={{
                background: "#f8f8f8",
                padding: "14px 16px",
                "border-radius": "6px",
                border: "1px solid #e8e8e8",
              }}
            >
              <div style={{ "font-size": "0.8rem", color: "#888", "margin-bottom": "4px", "text-transform": "uppercase", "letter-spacing": "0.5px" }}>
                {spec.label}
              </div>
              <div style={{ "font-size": "0.95rem", color: "#1a1a1a", "font-weight": "600" }}>{spec.value}</div>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{ "font-size": "1.5rem", "font-weight": "700", color: "#1a1a1a", "margin-bottom": "16px" }}>
          Applications of Incoloy 800H Pipes
        </h2>
        <div
          style={{
            background: "#fff8f0",
            border: "1px solid #f0d4b0",
            "border-radius": "8px",
            padding: "24px 28px",
            "margin-bottom": "40px",
          }}
        >
          <ul style={{ margin: "0", padding: "0 0 0 20px", "line-height": "2", color: "#333" }}>
            <li>Steam methane reformer tubes</li>
            <li>Ethylene cracker radiant coils</li>
            <li>Petrochemical furnace tubes</li>
            <li>Heat treatment fixtures and baskets</li>
            <li>Carburizing and nitriding equipment</li>
            <li>Industrial heating elements</li>
            <li>Nuclear steam generators</li>
            <li>Ammonia production</li>
          </ul>
        </div>

        {/* Why CMI */}
        <h2 style={{ "font-size": "1.5rem", "font-weight": "700", color: "#1a1a1a", "margin-bottom": "16px" }}>
          Why Choose Creative Metal Industries for Incoloy 800H?
        </h2>
        <div
          style={{
            background: "#f4f9f4",
            border: "1px solid #c8e6c8",
            "border-radius": "8px",
            padding: "24px 28px",
            "margin-bottom": "40px",
          }}
        >
          <ul style={{ margin: "0", padding: "0 0 0 20px", "line-height": "2", color: "#333" }}>
            <li>High-temperature alloy specialist with decades of experience</li>
            <li>Material sourced from approved mills — Huntington Alloys, VDM Metals</li>
            <li>Expert grade guidance: 800 vs 800H vs 800HT selection assistance</li>
            <li>Full documentation with grain size certification on every heat</li>
            <li>Solution annealing expertise — proper heat treatment verification</li>
            <li>Complete range: seamless pipes, welded pipes, tubes, and fittings</li>
            <li>Ready stock advantage — immediate dispatch for urgent requirements</li>
            <li>Pan-India delivery with secure high-value alloy packaging</li>
          </ul>
        </div>

        {/* FAQs */}
        <h2 style={{ "font-size": "1.5rem", "font-weight": "700", color: "#1a1a1a", "margin-bottom": "16px" }}>
          Frequently Asked Questions — Incoloy 800H Pipes
        </h2>
        <div style={{ "margin-bottom": "40px" }}>
          {FAQS.map((faq) => (
            <details
              style={{
                "margin-bottom": "10px",
                border: "1px solid #e0e0e0",
                "border-radius": "6px",
                overflow: "hidden",
              }}
            >
              <summary
                style={{
                  padding: "14px 18px",
                  cursor: "pointer",
                  "font-weight": "600",
                  "font-size": "0.95rem",
                  color: "#1a1a1a",
                  background: "#fafafa",
                }}
              >
                {faq.question}
              </summary>
              <p
                style={{
                  padding: "12px 18px 16px",
                  margin: "0",
                  "line-height": "1.7",
                  color: "#444",
                  "font-size": "0.92rem",
                  "border-top": "1px solid #eee",
                }}
              >
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        {/* CTA Section */}
        <div
          style={{
            background: "linear-gradient(135deg, #E8821A 0%, #d4700f 100%)",
            "border-radius": "12px",
            padding: "40px 32px",
            "text-align": "center",
            "margin-bottom": "40px",
          }}
        >
          <h2 style={{ color: "#ffffff", "font-size": "1.6rem", "font-weight": "700", "margin-bottom": "12px" }}>
            Need Incoloy 800H Pipes? Get Instant Quote
          </h2>
          <p style={{ color: "#fff8f0", "font-size": "1rem", "margin-bottom": "20px" }}>
            Ready stock of ASTM B407 seamless and B514 welded pipes in all standard sizes. Call or
            WhatsApp for immediate pricing.
          </p>
          <div style={{ display: "flex", gap: "12px", "justify-content": "center", "flex-wrap": "wrap" }}>
            <a
              href="tel:+919998280619"
              style={{
                background: "#ffffff",
                color: "#E8821A",
                padding: "12px 28px",
                "border-radius": "6px",
                "text-decoration": "none",
                "font-weight": "700",
                "font-size": "1rem",
              }}
            >
              +91 99982 80619
            </a>
            <a
              href="https://www.creativemetalind.com/#contact"
              style={{
                background: "transparent",
                color: "#ffffff",
                padding: "12px 28px",
                "border-radius": "6px",
                "text-decoration": "none",
                "font-weight": "600",
                "font-size": "1rem",
                border: "2px solid #ffffff",
              }}
            >
              Send Enquiry
            </a>
          </div>
        </div>

        {/* Related Products */}
        <h2 style={{ "font-size": "1.5rem", "font-weight": "700", color: "#1a1a1a", "margin-bottom": "16px" }}>
          Related Products
        </h2>
        <div
          style={{
            display: "grid",
            "grid-template-columns": "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "14px",
            "margin-bottom": "40px",
          }}
        >
          {[
            { name: "Incoloy 800HT Tube Supplier", href: "/incoloy-800ht-tube-supplier" },
            { name: "Inconel 600 Pipe Supplier India", href: "/inconel-600-pipe-supplier-india" },
            { name: "Inconel 625 Pipe Supplier India", href: "/inconel-pipe-supplier-india" },
            { name: "Hastelloy C22 Pipe Supplier India", href: "/hastelloy-c22-pipe-supplier-india" },
            { name: "Alloy 20 Pipe Supplier India", href: "/alloy-20-pipe-supplier-india" },
            { name: "SS 310 Pipe Supplier India", href: "/ss-310-pipe-supplier-india" },
          ].map((link) => (
            <a
              href={link.href}
              style={{
                display: "block",
                padding: "16px 18px",
                background: "#f8f8f8",
                border: "1px solid #e0e0e0",
                "border-radius": "6px",
                "text-decoration": "none",
                color: "#E8821A",
                "font-weight": "600",
                "font-size": "0.92rem",
                transition: "border-color 0.2s",
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      
        <RelatedPages currentPath="/incoloy-800h-pipe-supplier" />
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "#1a1a1a",
          color: "#ccc",
          padding: "40px 24px",
          "text-align": "center",
        }}
      >
        <div style={{ "max-width": "960px", margin: "0 auto" }}>
          <img
            src="/logo_cmi.png"
            alt="Creative Metal Industries"
            style={{ height: "40px", "margin-bottom": "16px", opacity: "0.9" }}
          />
          <p style={{ "font-size": "1rem", "font-weight": "600", color: "#ffffff", "margin-bottom": "8px" }}>
            Creative Metal Industries
          </p>
          <p style={{ "font-size": "0.88rem", "margin-bottom": "6px", color: "#aaa" }}>
            F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001, Gujarat, India
          </p>
          <p style={{ "font-size": "0.88rem", "margin-bottom": "6px", color: "#aaa" }}>
            Phone:{" "}
            <a href="tel:+919998280619" style={{ color: "#E8821A", "text-decoration": "none" }}>
              +91 99982 80619
            </a>
          </p>
          <p style={{ "font-size": "0.88rem", "margin-bottom": "16px", color: "#aaa" }}>
            Web:{" "}
            <a
              href="https://www.creativemetalind.com"
              style={{ color: "#E8821A", "text-decoration": "none" }}
            >
              www.creativemetalind.com
            </a>
          </p>
          <div
            style={{
              "border-top": "1px solid #333",
              "padding-top": "16px",
              "margin-top": "16px",
              "font-size": "0.82rem",
              color: "#777",
            }}
          >
            Creative Metal Industries — Incoloy 800H Pipe Supplier | Vadodara, Gujarat
          </div>
        </div>
      </footer>
    </>
  );
}
