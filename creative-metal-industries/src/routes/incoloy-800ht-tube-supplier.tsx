import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  {
    name: "Incoloy 800HT Seamless Tube (B407)",
    spec: "32Ni-21Cr Al+Ti controlled (N08811)",
    size: "OD 25-168mm",
    thickness: "Various WT",
    application: "Ethylene cracker/reformer tubes",
    condition: "Solution Annealed 1175°C",
    availability: "Ready Stock",
  },
  {
    name: "Incoloy 800HT Seamless Pipe (B407)",
    spec: "UNS N08811",
    size: '1/2"-8" NB',
    thickness: "SCH 10S-80S",
    application: "Radiant section piping",
    condition: "Solution Annealed 1175°C",
    availability: "Ready Stock",
  },
  {
    name: "Incoloy 800HT Welded Tube (B515)",
    spec: "32Ni-21Cr Al+Ti",
    size: "OD 25-168mm",
    thickness: "Various WT",
    application: "Furnace tubes/pyrolysis",
    condition: "Solution Annealed + Pickled",
    availability: "Available",
  },
  {
    name: "Incoloy 800HT Fittings (B366)",
    spec: "N08811",
    size: '1/2"-8" NB',
    thickness: "SCH 10S-80S",
    application: "Complete high-temp tube systems",
    condition: "Solution Annealed",
    availability: "Available",
  },
];

const FAQS = [
  {
    question: "What is Incoloy 800HT?",
    answer:
      "Incoloy 800HT (UNS N08811) is a high-temperature variant of the 800-series nickel-iron-chromium alloy with controlled aluminum and titanium additions (0.85-1.20% combined) and higher carbon content (0.06-0.10%). These controlled additions form gamma-prime precipitates that significantly enhance creep-rupture strength at elevated temperatures. The alloy is designed for service temperatures up to 1100°C and is widely used in petrochemical processing, particularly in ethylene cracker tubes and reformer radiant sections.",
  },
  {
    question: "What is the difference between Incoloy 800H and 800HT?",
    answer:
      "While both Incoloy 800H and 800HT share the same base composition (32Ni-21Cr-46Fe), the key difference lies in the controlled Al+Ti content. Incoloy 800H requires Al+Ti of 0.30-1.20%, whereas 800HT tightens this to 0.85-1.20% combined with carbon at 0.06-0.10%. This higher minimum Al+Ti ensures consistent gamma-prime formation, providing 800HT with superior creep-rupture properties above 700°C. Both require grain size ASTM 5 or coarser, but 800HT delivers more reliable high-temperature performance.",
  },
  {
    question: "Why do Al+Ti additions matter in Incoloy 800HT?",
    answer:
      "The controlled aluminum and titanium additions (0.85-1.20% combined) in Incoloy 800HT are critical because they form gamma-prime (Ni₃(Al,Ti)) precipitates during high-temperature service. These precipitates act as strengthening particles that resist dislocation movement, dramatically improving creep-rupture strength. Combined with the higher carbon content forming stable carbides, these additions give 800HT its exceptional resistance to deformation under sustained loads at temperatures from 700°C to 1100°C.",
  },
  {
    question: "What are the ethylene cracker applications of Incoloy 800HT tubes?",
    answer:
      "In ethylene crackers, Incoloy 800HT tubes serve as radiant coils in the pyrolysis furnace where hydrocarbon feedstock is thermally cracked at temperatures of 800-1100°C. The tubes must withstand extreme thermal cycling, carburization from hydrocarbon exposure, and creep deformation under their own weight. 800HT's gamma-prime strengthening provides the necessary creep resistance, while its chromium content offers oxidation and carburization resistance. Creative Metal Industries supplies these tubes in OD 25-168mm with appropriate wall thicknesses for radiant section service.",
  },
  {
    question: "What sizes of Incoloy 800HT tubes does CMI supply?",
    answer:
      "Creative Metal Industries supplies Incoloy 800HT tubes in outer diameters ranging from 25mm to 168mm with wall thicknesses from 2mm to 20mm. For pipe sizes, we stock 1/2\" to 8\" NB in schedules 10S through 80S. All tubes are solution annealed at 1175°C per ASTM B407/B163 requirements and come with full mill certification including grain size verification (ASTM 5 or coarser), Al+Ti composition confirmation, and creep test data where specified.",
  },
  {
    question: "What is the price of Incoloy 800HT tubes in India?",
    answer:
      "The price of Incoloy 800HT tubes in India ranges from approximately Rs 2,000 to Rs 5,500 per kg depending on dimensions, wall thickness, quantity ordered, and specific testing requirements. Seamless tubes to ASTM B407 with full creep testing certification command premium pricing. Creative Metal Industries offers competitive rates with ready stock availability from our Vadodara warehouse, with special project pricing for bulk orders in ethylene cracker and reformer applications.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.creativemetalind.com" },
    { "@type": "ListItem", position: 2, name: "Incoloy 800HT Tube Supplier India", item: "https://www.creativemetalind.com/incoloy-800ht-tube-supplier" },
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

export default function Incoloy800htTubeSupplier() {
  return (
    <>
      <Title>Incoloy 800HT Tube Supplier India | ASTM B407 N08811 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content="Incoloy 800HT Tube Supplier India | ASTM B407 N08811 | CMI" />
      <Meta property="og:description" content="Leading Incoloy 800HT tube supplier in India. ASTM B407/B163 seamless tubes, UNS N08811, OD 25-168mm for ethylene crackers & reformers. Ready stock from Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/incoloy-800ht-tube-supplier" />
      <Meta
        name="description"
        content="Incoloy 800HT tube supplier India. ASTM B407/B163 seamless tubes, UNS N08811, OD 25-168mm for ethylene crackers and reformers."
      />
      <Meta
        name="keywords"
        content="Incoloy 800HT tube supplier, Incoloy 800HT seamless tube, ASTM B407, UNS N08811, ethylene cracker tubes, reformer tubes, high temperature tubes India"
      />
      <Link rel="canonical" href="https://www.creativemetalind.com/incoloy-800ht-tube-supplier" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      {/* Navigation */}
      <nav
        style={{
          "background-color": "#ffffff",
          padding: "1rem 2rem",
          display: "flex",
          "align-items": "center",
          "justify-content": "space-between",
          "box-shadow": "0 2px 4px rgba(0,0,0,0.1)",
          position: "sticky",
          top: "0",
          "z-index": "1000",
        }}
      >
        <a href="/" style={{ display: "flex", "align-items": "center", "text-decoration": "none" }}>
          <img width="95" height="48"
            src="/logo_cmi.png"
            alt="Creative Metal Industries Logo"
            style={{ height: "48px", width: "auto" }}
          />
        </a>
        <a
          href="https://www.creativemetalind.com/#contact"
          style={{
            "background-color": "#E8821A",
            color: "#ffffff",
            padding: "0.75rem 1.5rem",
            "border-radius": "6px",
            "text-decoration": "none",
            "font-weight": "600",
            "font-size": "0.95rem",
            transition: "background-color 0.3s",
          }}
        >
          Get Quote
        </a>
      </nav>

      {/* Breadcrumb */}
      <div
        style={{
          "background-color": "#f9fafb",
          padding: "0.75rem 2rem",
          "font-size": "0.875rem",
          color: "#6b7280",
        }}
      >
        <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>
          Home
        </a>{" "}
        /{" "}
        <a href="/incoloy-800h-pipe-supplier" style={{ color: "#E8821A", "text-decoration": "none" }}>
          Incoloy
        </a>{" "}
        / <span style={{ color: "#374151" }}>Incoloy 800HT Tube Supplier</span>
      </div>

      {/* Main Content */}
      <main
        style={{
          "max-width": "960px",
          margin: "0 auto",
          padding: "3rem 1.5rem",
        }}
      >
        {/* Hero Section */}
        <div style={{ "text-align": "center", "margin-bottom": "3rem" }}>
          <h1
            style={{
              "font-size": "clamp(1.8rem, 4vw, 2.8rem)",
              "font-weight": "800",
              color: "#111827",
              "margin-bottom": "1rem",
              "line-height": "1.2",
            }}
          >
            Incoloy 800HT Tube Supplier India
          </h1>
          <p
            style={{
              "font-size": "1.125rem",
              color: "#4b5563",
              "max-width": "720px",
              margin: "0 auto",
              "line-height": "1.7",
            }}
          >
            Creative Metal Industries is a leading supplier of Incoloy 800HT (UNS N08811) seamless and
            welded tubes conforming to ASTM B407 and ASTM B163 standards. Our 800HT tubes feature
            controlled Al+Ti additions (0.85-1.20% combined) and carbon content (0.06-0.10%) for
            superior creep-rupture strength at service temperatures up to 1100°C. We supply OD 25mm to
            168mm tubes for ethylene cracker radiant coils, steam methane reformer tubes, and pyrolysis
            furnace applications from our ready stock in Vadodara, Gujarat.
          </p>
        </div>

        {/* Grades Table */}
        <h2
          style={{
            "font-size": "1.5rem",
            "font-weight": "700",
            color: "#111827",
            "margin-bottom": "1rem",
            "padding-bottom": "0.5rem",
            "border-bottom": "3px solid #E8821A",
          }}
        >
          Incoloy 800HT Tube Grades & Availability
        </h2>
        <div style={{ "overflow-x": "auto", "margin-bottom": "3rem" }}>
          <table
            style={{
              width: "100%",
              "border-collapse": "collapse",
              "font-size": "0.9rem",
              "min-width": "700px",
            }}
          >
            <thead>
              <tr style={{ "background-color": "#f9fafb" }}>
                <th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb", "font-weight": "600", color: "#374151" }}>Grade</th>
                <th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb", "font-weight": "600", color: "#374151" }}>Specification</th>
                <th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb", "font-weight": "600", color: "#374151" }}>Size</th>
                <th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb", "font-weight": "600", color: "#374151" }}>Thickness</th>
                <th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb", "font-weight": "600", color: "#374151" }}>Application</th>
                <th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb", "font-weight": "600", color: "#374151" }}>Condition</th>
                <th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb", "font-weight": "600", color: "#374151" }}>Stock</th>
              </tr>
            </thead>
            <tbody>
              {GRADES.map((grade) => (
                <tr style={{ "border-bottom": "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.75rem", "font-weight": "500", color: "#111827" }}>{grade.name}</td>
                  <td style={{ padding: "0.75rem", color: "#4b5563" }}>{grade.spec}</td>
                  <td style={{ padding: "0.75rem", color: "#4b5563" }}>{grade.size}</td>
                  <td style={{ padding: "0.75rem", color: "#4b5563" }}>{grade.thickness}</td>
                  <td style={{ padding: "0.75rem", color: "#4b5563" }}>{grade.application}</td>
                  <td style={{ padding: "0.75rem", color: "#4b5563" }}>{grade.condition}</td>
                  <td style={{ padding: "0.75rem", color: grade.availability === "Ready Stock" ? "#059669" : "#d97706", "font-weight": "600" }}>{grade.availability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2
          style={{
            "font-size": "1.5rem",
            "font-weight": "700",
            color: "#111827",
            "margin-bottom": "1rem",
            "padding-bottom": "0.5rem",
            "border-bottom": "3px solid #E8821A",
          }}
        >
          Incoloy 800HT Tube Specifications
        </h2>
        <div
          style={{
            display: "grid",
            "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
            "margin-bottom": "3rem",
          }}
        >
          <div style={{ padding: "1rem", "background-color": "#f9fafb", "border-radius": "8px" }}>
            <strong style={{ color: "#374151" }}>Standard (Seamless Tube)</strong>
            <p style={{ margin: "0.25rem 0 0", color: "#4b5563" }}>ASTM B407 / SB407</p>
          </div>
          <div style={{ padding: "1rem", "background-color": "#f9fafb", "border-radius": "8px" }}>
            <strong style={{ color: "#374151" }}>Standard (Tube)</strong>
            <p style={{ margin: "0.25rem 0 0", color: "#4b5563" }}>ASTM B163 / SB163</p>
          </div>
          <div style={{ padding: "1rem", "background-color": "#f9fafb", "border-radius": "8px" }}>
            <strong style={{ color: "#374151" }}>Grade</strong>
            <p style={{ margin: "0.25rem 0 0", color: "#4b5563" }}>Incoloy 800HT (UNS N08811)</p>
          </div>
          <div style={{ padding: "1rem", "background-color": "#f9fafb", "border-radius": "8px" }}>
            <strong style={{ color: "#374151" }}>Type</strong>
            <p style={{ margin: "0.25rem 0 0", color: "#4b5563" }}>Seamless Tube, Seamless Pipe, Welded Tube</p>
          </div>
          <div style={{ padding: "1rem", "background-color": "#f9fafb", "border-radius": "8px" }}>
            <strong style={{ color: "#374151" }}>Tube Size Range</strong>
            <p style={{ margin: "0.25rem 0 0", color: "#4b5563" }}>OD 25mm to 168mm</p>
          </div>
          <div style={{ padding: "1rem", "background-color": "#f9fafb", "border-radius": "8px" }}>
            <strong style={{ color: "#374151" }}>Wall Thickness</strong>
            <p style={{ margin: "0.25rem 0 0", color: "#4b5563" }}>2mm to 20mm (various)</p>
          </div>
          <div style={{ padding: "1rem", "background-color": "#f9fafb", "border-radius": "8px" }}>
            <strong style={{ color: "#374151" }}>Max Service Temp</strong>
            <p style={{ margin: "0.25rem 0 0", color: "#4b5563" }}>Up to 1100°C (enhanced creep strength)</p>
          </div>
          <div style={{ padding: "1rem", "background-color": "#f9fafb", "border-radius": "8px" }}>
            <strong style={{ color: "#374151" }}>Composition</strong>
            <p style={{ margin: "0.25rem 0 0", color: "#4b5563" }}>30-35% Ni, 19-23% Cr, Al+Ti 0.85-1.20%, C 0.06-0.10%</p>
          </div>
          <div style={{ padding: "1rem", "background-color": "#f9fafb", "border-radius": "8px" }}>
            <strong style={{ color: "#374151" }}>Testing</strong>
            <p style={{ margin: "0.25rem 0 0", color: "#4b5563" }}>Hydrostatic, UT, Grain Size (ASTM 5 or coarser), Creep Test</p>
          </div>
          <div style={{ padding: "1rem", "background-color": "#f9fafb", "border-radius": "8px" }}>
            <strong style={{ color: "#374151" }}>Key Feature</strong>
            <p style={{ margin: "0.25rem 0 0", color: "#4b5563" }}>Al+Ti additions form gamma-prime for superior high-temp creep</p>
          </div>
        </div>

        {/* Applications */}
        <h2
          style={{
            "font-size": "1.5rem",
            "font-weight": "700",
            color: "#111827",
            "margin-bottom": "1rem",
            "padding-bottom": "0.5rem",
            "border-bottom": "3px solid #E8821A",
          }}
        >
          Incoloy 800HT Tube Applications
        </h2>
        <div
          style={{
            "background-color": "#f9fafb",
            "border-radius": "8px",
            padding: "1.5rem 2rem",
            "margin-bottom": "3rem",
            border: "1px solid #e5e7eb",
          }}
        >
          <ul
            style={{
              "list-style": "none",
              padding: "0",
              margin: "0",
              display: "grid",
              "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "0.75rem",
            }}
          >
            <li style={{ padding: "0.5rem 0", color: "#374151", "padding-left": "1.5rem", position: "relative" }}>
              <span style={{ position: "absolute", left: "0", color: "#E8821A" }}>&#10003;</span>
              Ethylene cracker radiant tubes
            </li>
            <li style={{ padding: "0.5rem 0", color: "#374151", "padding-left": "1.5rem", position: "relative" }}>
              <span style={{ position: "absolute", left: "0", color: "#E8821A" }}>&#10003;</span>
              Steam methane reformer tubes
            </li>
            <li style={{ padding: "0.5rem 0", color: "#374151", "padding-left": "1.5rem", position: "relative" }}>
              <span style={{ position: "absolute", left: "0", color: "#E8821A" }}>&#10003;</span>
              Pyrolysis furnace coils
            </li>
            <li style={{ padding: "0.5rem 0", color: "#374151", "padding-left": "1.5rem", position: "relative" }}>
              <span style={{ position: "absolute", left: "0", color: "#E8821A" }}>&#10003;</span>
              Catalyst tubes
            </li>
            <li style={{ padding: "0.5rem 0", color: "#374151", "padding-left": "1.5rem", position: "relative" }}>
              <span style={{ position: "absolute", left: "0", color: "#E8821A" }}>&#10003;</span>
              Carburizing fixtures
            </li>
            <li style={{ padding: "0.5rem 0", color: "#374151", "padding-left": "1.5rem", position: "relative" }}>
              <span style={{ position: "absolute", left: "0", color: "#E8821A" }}>&#10003;</span>
              Industrial heating elements
            </li>
            <li style={{ padding: "0.5rem 0", color: "#374151", "padding-left": "1.5rem", position: "relative" }}>
              <span style={{ position: "absolute", left: "0", color: "#E8821A" }}>&#10003;</span>
              Petrochemical transfer piping at extreme temps
            </li>
            <li style={{ padding: "0.5rem 0", color: "#374151", "padding-left": "1.5rem", position: "relative" }}>
              <span style={{ position: "absolute", left: "0", color: "#E8821A" }}>&#10003;</span>
              Nuclear steam generators
            </li>
          </ul>
        </div>

        {/* Why CMI */}
        <h2
          style={{
            "font-size": "1.5rem",
            "font-weight": "700",
            color: "#111827",
            "margin-bottom": "1rem",
            "padding-bottom": "0.5rem",
            "border-bottom": "3px solid #E8821A",
          }}
        >
          Why Choose Creative Metal Industries for Incoloy 800HT Tubes?
        </h2>
        <ul
          style={{
            "list-style": "none",
            padding: "0",
            margin: "0 0 3rem 0",
          }}
        >
          <li style={{ padding: "0.75rem 0", "border-bottom": "1px solid #f3f4f6", color: "#374151", "padding-left": "1.5rem", position: "relative" }}>
            <span style={{ position: "absolute", left: "0", color: "#E8821A", "font-weight": "bold" }}>&#9679;</span>
            High-temperature tube specialist with deep metallurgical expertise in nickel alloy tubing
          </li>
          <li style={{ padding: "0.75rem 0", "border-bottom": "1px solid #f3f4f6", color: "#374151", "padding-left": "1.5rem", position: "relative" }}>
            <span style={{ position: "absolute", left: "0", color: "#E8821A", "font-weight": "bold" }}>&#9679;</span>
            Approved mills ensuring consistent quality and traceability for critical applications
          </li>
          <li style={{ padding: "0.75rem 0", "border-bottom": "1px solid #f3f4f6", color: "#374151", "padding-left": "1.5rem", position: "relative" }}>
            <span style={{ position: "absolute", left: "0", color: "#E8821A", "font-weight": "bold" }}>&#9679;</span>
            Expert guidance on 800H vs 800HT grade selection based on service conditions
          </li>
          <li style={{ padding: "0.75rem 0", "border-bottom": "1px solid #f3f4f6", color: "#374151", "padding-left": "1.5rem", position: "relative" }}>
            <span style={{ position: "absolute", left: "0", color: "#E8821A", "font-weight": "bold" }}>&#9679;</span>
            Full grain size and Al+Ti certification with every shipment
          </li>
          <li style={{ padding: "0.75rem 0", "border-bottom": "1px solid #f3f4f6", color: "#374151", "padding-left": "1.5rem", position: "relative" }}>
            <span style={{ position: "absolute", left: "0", color: "#E8821A", "font-weight": "bold" }}>&#9679;</span>
            Solution annealing at 1175°C per specification requirements
          </li>
          <li style={{ padding: "0.75rem 0", "border-bottom": "1px solid #f3f4f6", color: "#374151", "padding-left": "1.5rem", position: "relative" }}>
            <span style={{ position: "absolute", left: "0", color: "#E8821A", "font-weight": "bold" }}>&#9679;</span>
            Ready stock tubes in popular sizes for immediate dispatch
          </li>
          <li style={{ padding: "0.75rem 0", "border-bottom": "1px solid #f3f4f6", color: "#374151", "padding-left": "1.5rem", position: "relative" }}>
            <span style={{ position: "absolute", left: "0", color: "#E8821A", "font-weight": "bold" }}>&#9679;</span>
            Competitive pricing with transparent cost breakdown
          </li>
          <li style={{ padding: "0.75rem 0", color: "#374151", "padding-left": "1.5rem", position: "relative" }}>
            <span style={{ position: "absolute", left: "0", color: "#E8821A", "font-weight": "bold" }}>&#9679;</span>
            Pan-India delivery plus export to international markets
          </li>
        </ul>

        {/* FAQ Section */}
        <h2
          style={{
            "font-size": "1.5rem",
            "font-weight": "700",
            color: "#111827",
            "margin-bottom": "1rem",
            "padding-bottom": "0.5rem",
            "border-bottom": "3px solid #E8821A",
          }}
        >
          Frequently Asked Questions
        </h2>
        <div style={{ "margin-bottom": "3rem" }}>
          {FAQS.map((faq) => (
            <details
              style={{
                "margin-bottom": "0.75rem",
                border: "1px solid #e5e7eb",
                "border-radius": "8px",
                overflow: "hidden",
              }}
            >
              <summary
                style={{
                  padding: "1rem 1.25rem",
                  cursor: "pointer",
                  "font-weight": "600",
                  color: "#111827",
                  "background-color": "#f9fafb",
                  "list-style": "none",
                  display: "flex",
                  "align-items": "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "#E8821A", "font-size": "1.2rem" }}>&#9654;</span>
                {faq.question}
              </summary>
              <p
                style={{
                  padding: "1rem 1.25rem",
                  margin: "0",
                  color: "#4b5563",
                  "line-height": "1.7",
                  "background-color": "#ffffff",
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
            background: "linear-gradient(135deg, #E8821A, #d85c2a)",
            "border-radius": "12px",
            padding: "3rem 2rem",
            "text-align": "center",
            "margin-bottom": "3rem",
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              "font-size": "1.75rem",
              "font-weight": "700",
              "margin-bottom": "1rem",
            }}
          >
            Need Incoloy 800HT Tubes? Get Instant Quote
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.9)",
              "font-size": "1.1rem",
              "margin-bottom": "1.5rem",
              "max-width": "600px",
              margin: "0 auto 1.5rem",
            }}
          >
            Ready stock of ASTM B407 Incoloy 800HT seamless tubes for ethylene crackers, reformers,
            and pyrolysis furnaces. Competitive pricing with full mill certification.
          </p>
          <a
            href="https://www.creativemetalind.com/#contact"
            style={{
              display: "inline-block",
              "background-color": "#ffffff",
              color: "#E8821A",
              padding: "1rem 2.5rem",
              "border-radius": "8px",
              "font-weight": "700",
              "font-size": "1.1rem",
              "text-decoration": "none",
              transition: "transform 0.2s",
            }}
          >
            Request Quote Now
          </a>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              "font-size": "0.9rem",
              "margin-top": "1rem",
            }}
          >
            Or call us: +91 99982 80619
          </p>
        </div>

        {/* Related Products */}
        <h3
          style={{
            "font-size": "1.25rem",
            "font-weight": "700",
            color: "#111827",
            "margin-bottom": "1rem",
          }}
        >
          Related Products
        </h3>
        <div
          style={{
            display: "grid",
            "grid-template-columns": "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
            "margin-bottom": "2rem",
          }}
        >
          <a
            href="/incoloy-800h-pipe-supplier"
            style={{
              padding: "1rem 1.25rem",
              "background-color": "#f9fafb",
              "border-radius": "8px",
              "text-decoration": "none",
              color: "#374151",
              border: "1px solid #e5e7eb",
              transition: "border-color 0.3s",
              "font-weight": "500",
            }}
          >
            Incoloy 800H Pipe Supplier
          </a>
          <a
            href="/inconel-600-pipe-supplier-india"
            style={{
              padding: "1rem 1.25rem",
              "background-color": "#f9fafb",
              "border-radius": "8px",
              "text-decoration": "none",
              color: "#374151",
              border: "1px solid #e5e7eb",
              transition: "border-color 0.3s",
              "font-weight": "500",
            }}
          >
            Inconel 600 Pipe Supplier India
          </a>
          <a
            href="/inconel-pipe-supplier-india"
            style={{
              padding: "1rem 1.25rem",
              "background-color": "#f9fafb",
              "border-radius": "8px",
              "text-decoration": "none",
              color: "#374151",
              border: "1px solid #e5e7eb",
              transition: "border-color 0.3s",
              "font-weight": "500",
            }}
          >
            Inconel 625 Pipe Supplier India
          </a>
          <a
            href="/hastelloy-c22-pipe-supplier-india"
            style={{
              padding: "1rem 1.25rem",
              "background-color": "#f9fafb",
              "border-radius": "8px",
              "text-decoration": "none",
              color: "#374151",
              border: "1px solid #e5e7eb",
              transition: "border-color 0.3s",
              "font-weight": "500",
            }}
          >
            Hastelloy C22 Pipe Supplier India
          </a>
          <a
            href="/titanium-grade-2-pipe-india"
            style={{
              padding: "1rem 1.25rem",
              "background-color": "#f9fafb",
              "border-radius": "8px",
              "text-decoration": "none",
              color: "#374151",
              border: "1px solid #e5e7eb",
              transition: "border-color 0.3s",
              "font-weight": "500",
            }}
          >
            Titanium Grade 2 Pipe India
          </a>
          <a
            href="/alloy-20-pipe-supplier-india"
            style={{
              padding: "1rem 1.25rem",
              "background-color": "#f9fafb",
              "border-radius": "8px",
              "text-decoration": "none",
              color: "#374151",
              border: "1px solid #e5e7eb",
              transition: "border-color 0.3s",
              "font-weight": "500",
            }}
          >
            Alloy 20 Pipe Supplier India
          </a>
        </div>
      
        <RelatedPages currentPath="/incoloy-800ht-tube-supplier" />
      </main>

      {/* Footer */}
      <footer
        style={{
          "background-color": "#111827",
          color: "#d1d5db",
          padding: "3rem 2rem",
          "text-align": "center",
        }}
      >
        <div style={{ "max-width": "960px", margin: "0 auto" }}>
          <img width="79" height="40"
            src="/logo_cmi.png"
            alt="Creative Metal Industries"
            style={{ height: "40px", "margin-bottom": "1rem", filter: "brightness(2)" }}
          />
          <p style={{ "font-size": "1rem", "margin-bottom": "0.5rem", color: "#ffffff", "font-weight": "600" }}>
            Creative Metal Industries — Incoloy 800HT Tube Supplier
          </p>
          <p style={{ "font-size": "0.9rem", "margin-bottom": "0.5rem" }}>
            F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara, Gujarat 390001
          </p>
          <p style={{ "font-size": "0.9rem", "margin-bottom": "0.5rem" }}>
            Phone:{" "}
            <a href="tel:+919998280619" style={{ color: "#E8821A", "text-decoration": "none" }}>
              +91 99982 80619
            </a>
          </p>
          <p style={{ "font-size": "0.9rem", "margin-bottom": "1rem" }}>
            Website:{" "}
            <a
              href="https://www.creativemetalind.com"
              style={{ color: "#E8821A", "text-decoration": "none" }}
            >
              www.creativemetalind.com
            </a>
          </p>
          <p style={{ "font-size": "0.8rem", color: "#9ca3af", "margin-top": "1.5rem" }}>
            &copy; {new Date().getFullYear()} Creative Metal Industries. All rights reserved. |
            Vadodara, Gujarat
          </p>
        </div>
      </footer>
    </>
  );
}
