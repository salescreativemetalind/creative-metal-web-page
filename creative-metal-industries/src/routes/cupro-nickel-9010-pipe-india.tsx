import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  {
    name: "CuNi 90/10 Seamless Pipe",
    spec: "ASTM B466",
    composition: "90Cu-10Ni (C70600)",
    size: "1/2\" - 12\" NB",
    schedule: "SCH 10S - 80S",
    application: "Seawater cooling / Offshore",
    condition: "Annealed",
    availability: "Ready Stock",
  },
  {
    name: "CuNi 90/10 Welded Pipe",
    spec: "ASTM B467",
    composition: "UNS C70600",
    size: "2\" - 12\" NB",
    schedule: "SCH 10S - 40S",
    application: "Condenser / Heat Exchanger",
    condition: "Annealed + Pickled",
    availability: "Ready Stock",
  },
  {
    name: "CuNi 90/10 Tube",
    spec: "ASTM B111",
    composition: "90Cu-10Ni",
    size: "OD 12.7 - 114.3mm",
    schedule: "BWG 14 - 22",
    application: "Condenser tubes / Desalination",
    condition: "Annealed",
    availability: "Available",
  },
  {
    name: "CuNi 90/10 Fittings",
    spec: "ASTM B466 / MSS SP-43",
    composition: "C70600",
    size: "1/2\" - 12\" NB",
    schedule: "SCH 10S - 80S",
    application: "Complete seawater piping",
    condition: "Annealed",
    availability: "Available",
  },
];

const FAQS = [
  {
    question: "What is CuNi 90/10 pipe and what is it used for?",
    answer:
      "CuNi 90/10 (UNS C70600) is a copper-nickel alloy pipe containing 90% copper and 10% nickel with small additions of iron and manganese. It is primarily used in marine and seawater applications due to its excellent corrosion resistance in saltwater environments. The alloy offers outstanding resistance to biofouling, stress corrosion cracking, and erosion-corrosion in high-velocity seawater. It is widely specified for offshore oil and gas platforms, desalination plants, naval vessels, and coastal power stations.",
  },
  {
    question: "What is the difference between CuNi 90/10 and CuNi 70/30?",
    answer:
      "CuNi 90/10 (C70600) contains 90% copper and 10% nickel, while CuNi 70/30 (C71500) has 70% copper and 30% nickel. The 70/30 grade offers higher strength and better corrosion resistance in aggressive seawater conditions and at higher flow velocities. However, CuNi 90/10 is more economical, easier to fabricate, and sufficient for most standard seawater cooling and piping applications. Creative Metal Industries stocks both grades and can help you select the optimal alloy for your specific service conditions.",
  },
  {
    question: "Why is CuNi 90/10 preferred for seawater piping systems?",
    answer:
      "CuNi 90/10 is preferred for seawater piping because it forms a stable protective oxide film that resists corrosion in chloride-rich marine environments. The alloy provides excellent resistance to biofouling, meaning barnacles and marine organisms are less likely to attach to pipe surfaces. It also handles high flow velocities without erosion-corrosion, making it ideal for pump discharge lines and fire-fighting systems. Additionally, it offers good thermal conductivity for heat exchanger applications in marine environments.",
  },
  {
    question: "How does CuNi 90/10 resist marine biofouling?",
    answer:
      "CuNi 90/10 has inherent antifouling properties due to the controlled release of copper ions from the pipe surface. These copper ions create an environment that discourages the settlement of marine organisms such as barnacles, mussels, and algae. This natural biofouling resistance reduces maintenance costs and maintains hydraulic efficiency in seawater systems over extended periods. The biofouling resistance improves with continuous seawater exposure as the protective oxide film matures.",
  },
  {
    question: "What sizes of CuNi 90/10 pipe does Creative Metal Industries supply?",
    answer:
      "Creative Metal Industries supplies CuNi 90/10 pipes in sizes ranging from 1/2 inch to 12 inch NB (15NB to 300NB) in seamless, welded, and tube forms. We stock schedules from SCH 10S to SCH 80S for seamless pipes and SCH 10S to 40S for welded pipes. Tubes are available from 12.7mm to 114.3mm OD in BWG 14 to 22 wall thicknesses. We also supply matching fittings, flanges, and accessories for complete piping system solutions.",
  },
  {
    question: "What is the price range of CuNi 90/10 pipe in India?",
    answer:
      "The price of CuNi 90/10 pipe in India typically ranges from Rs 1,200 to Rs 3,500 per kg depending on size, schedule, form (seamless/welded), and quantity ordered. Seamless pipes in smaller sizes and heavier schedules tend to be at the higher end of the range. Creative Metal Industries offers competitive pricing with direct mill supply for bulk orders. Contact us with your specific requirements for the most accurate current pricing and availability.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.creativemetalind.com" },
    { "@type": "ListItem", position: 2, name: "CuNi 90/10 Pipe Supplier India", item: "https://www.creativemetalind.com/cupro-nickel-9010-pipe-india" },
  ],
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});

export default function CuproNickel9010PipeIndia() {
  return (
    <>
      <Title>CuNi 90/10 Pipe Supplier India | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta
        name="description"
        content="CuNi 90/10 (C70600) pipe supplier India. ASTM B466 seamless and B467 welded pipes 1/2&quot; to 12&quot; NB for seawater cooling and desalination."
      />
      <Meta property="og:title" content="CuNi 90/10 Pipe Supplier India | Creative Metal Industries" />
      <Meta property="og:description" content="ASTM B466/B467 CuNi 90/10 (C70600) pipes 1/2&quot; to 12&quot; NB. Seawater cooling, offshore, desalination applications. Ready stock from Vadodara." />
      <Meta property="og:type" content="product" />
      <Meta property="og:url" content="https://www.creativemetalind.com/cupro-nickel-9010-pipe-india" />
      <Link rel="canonical" href="https://www.creativemetalind.com/cupro-nickel-9010-pipe-india" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      {/* NAVIGATION */}
      <nav
        style={{
          background: "#fff",
          "border-bottom": "1px solid #e5e7eb",
          padding: "12px 0",
          position: "sticky",
          top: "0",
          "z-index": "100",
          "box-shadow": "0 1px 3px rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            "max-width": "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            "align-items": "center",
            "justify-content": "space-between",
          }}
        >
          <a href="/" style={{ display: "flex", "align-items": "center", "text-decoration": "none" }}>
            <img width="87" height="44"
              src="/logo_cmi.png"
              alt="Creative Metal Industries Logo"
              style={{ height: "44px", "margin-right": "10px" }}
            />
            <span style={{ "font-size": "1.2rem", "font-weight": "700", color: "#111827" }}>
              Creative Metal Industries
            </span>
          </a>
          <div style={{ display: "flex", gap: "24px", "align-items": "center" }}>
            <a href="/" style={{ color: "#374151", "text-decoration": "none", "font-size": "0.95rem" }}>
              Home
            </a>
            <a href="/about" style={{ color: "#374151", "text-decoration": "none", "font-size": "0.95rem" }}>
              About
            </a>
            <a href="/blog" style={{ color: "#374151", "text-decoration": "none", "font-size": "0.95rem" }}>
              Blog
            </a>
            <a
              href="tel:+919998280619"
              style={{
                background: "#E8821A",
                color: "#fff",
                padding: "8px 18px",
                "border-radius": "6px",
                "text-decoration": "none",
                "font-weight": "600",
                "font-size": "0.9rem",
              }}
            >
              +91 99982 80619
            </a>
          </div>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div
        style={{
          background: "#f9fafb",
          padding: "12px 0",
          "border-bottom": "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            "max-width": "1200px",
            margin: "0 auto",
            padding: "0 20px",
            "font-size": "0.85rem",
            color: "#6b7280",
          }}
        >
          <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>
            Home
          </a>{" "}
          &gt;{" "}
          <a href="/cupro-nickel-9010-pipe-india" style={{ color: "#E8821A", "text-decoration": "none" }}>
            Copper Nickel Pipes
          </a>{" "}
          &gt;{" "}
          <span style={{ color: "#374151" }}>CuNi 90/10 Pipe Supplier India</span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main style={{ "max-width": "960px", margin: "0 auto", padding: "40px 20px" }}>
        {/* HERO SECTION */}
        <section style={{ "text-align": "center", "margin-bottom": "50px" }}>
          <h1
            style={{
              "font-size": "2.2rem",
              "font-weight": "800",
              color: "#111827",
              "margin-bottom": "16px",
              "line-height": "1.25",
            }}
          >
            CuNi 90/10 Pipe Supplier India — ASTM B466 / B467 (C70600)
          </h1>
          <p
            style={{
              "font-size": "1.15rem",
              color: "#4b5563",
              "max-width": "750px",
              margin: "0 auto 20px",
              "line-height": "1.7",
            }}
          >
            Creative Metal Industries is a leading supplier of CuNi 90/10 (UNS C70600) seamless and welded pipes in India.
            We stock ASTM B466 seamless and ASTM B467 welded CuNi pipes from 1/2" to 12" NB for seawater cooling,
            offshore oil &amp; gas, desalination, and marine applications. Ready stock from Vadodara with pan-India delivery.
          </p>
          <div style={{ display: "flex", gap: "12px", "justify-content": "center", "flex-wrap": "wrap" }}>
            <a
              href="tel:+919998280619"
              style={{
                background: "#E8821A",
                color: "#fff",
                padding: "12px 28px",
                "border-radius": "8px",
                "text-decoration": "none",
                "font-weight": "700",
                "font-size": "1rem",
              }}
            >
              Call Now: +91 99982 80619
            </a>
            <a
              href="https://wa.me/919998280619?text=Hi%2C%20I%20need%20CuNi%2090%2F10%20pipe%20quote"
              style={{
                background: "#25D366",
                color: "#fff",
                padding: "12px 28px",
                "border-radius": "8px",
                "text-decoration": "none",
                "font-weight": "700",
                "font-size": "1rem",
              }}
            >
              WhatsApp Enquiry
            </a>
          </div>
        </section>

        {/* GRADE TABLE */}
        <section style={{ "margin-bottom": "50px" }}>
          <h2 style={{ "font-size": "1.6rem", "font-weight": "700", color: "#111827", "margin-bottom": "20px" }}>
            CuNi 90/10 Pipe Grades &amp; Specifications
          </h2>
          <div style={{ "overflow-x": "auto" }}>
            <table
              style={{
                width: "100%",
                "border-collapse": "collapse",
                "font-size": "0.9rem",
                background: "#fff",
                "border-radius": "8px",
                overflow: "hidden",
                "box-shadow": "0 1px 4px rgba(0,0,0,0.08)",
              }}
            >
              <thead>
                <tr style={{ background: "#E8821A", color: "#fff" }}>
                  <th style={{ padding: "12px 14px", "text-align": "left", "font-weight": "600" }}>Product</th>
                  <th style={{ padding: "12px 14px", "text-align": "left", "font-weight": "600" }}>Spec</th>
                  <th style={{ padding: "12px 14px", "text-align": "left", "font-weight": "600" }}>Composition</th>
                  <th style={{ padding: "12px 14px", "text-align": "left", "font-weight": "600" }}>Size</th>
                  <th style={{ padding: "12px 14px", "text-align": "left", "font-weight": "600" }}>Schedule</th>
                  <th style={{ padding: "12px 14px", "text-align": "left", "font-weight": "600" }}>Application</th>
                  <th style={{ padding: "12px 14px", "text-align": "left", "font-weight": "600" }}>Condition</th>
                  <th style={{ padding: "12px 14px", "text-align": "left", "font-weight": "600" }}>Availability</th>
                </tr>
              </thead>
              <tbody>
                {GRADES.map((g, i) => (
                  <tr style={{ background: i % 2 === 0 ? "#f9fafb" : "#fff", "border-bottom": "1px solid #e5e7eb" }}>
                    <td style={{ padding: "11px 14px", "font-weight": "600", color: "#111827" }}>{g.name}</td>
                    <td style={{ padding: "11px 14px", color: "#374151" }}>{g.spec}</td>
                    <td style={{ padding: "11px 14px", color: "#374151" }}>{g.composition}</td>
                    <td style={{ padding: "11px 14px", color: "#374151" }}>{g.size}</td>
                    <td style={{ padding: "11px 14px", color: "#374151" }}>{g.schedule}</td>
                    <td style={{ padding: "11px 14px", color: "#374151" }}>{g.application}</td>
                    <td style={{ padding: "11px 14px", color: "#374151" }}>{g.condition}</td>
                    <td style={{ padding: "11px 14px" }}>
                      <span
                        style={{
                          background: g.availability === "Ready Stock" ? "#dcfce7" : "#fef3c7",
                          color: g.availability === "Ready Stock" ? "#166534" : "#92400e",
                          padding: "3px 10px",
                          "border-radius": "12px",
                          "font-size": "0.8rem",
                          "font-weight": "600",
                        }}
                      >
                        {g.availability}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SPECIFICATIONS GRID */}
        <section style={{ "margin-bottom": "50px" }}>
          <h2 style={{ "font-size": "1.6rem", "font-weight": "700", color: "#111827", "margin-bottom": "20px" }}>
            CuNi 90/10 Pipe Technical Specifications
          </h2>
          <div
            style={{
              display: "grid",
              "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              { label: "Standard (Seamless)", value: "ASTM B466 / SB466" },
              { label: "Standard (Welded)", value: "ASTM B467 / SB467" },
              { label: "Grade", value: "CuNi 90/10 (UNS C70600)" },
              { label: "Type", value: "Seamless, Welded & Tube" },
              { label: "Size Range", value: "1/2\" to 12\" NB (15NB to 300NB)" },
              { label: "Schedules", value: "SCH 10S, 20S, 40S, 80S" },
              { label: "Max Service Temp", value: "Up to 300°C" },
              { label: "Composition", value: "90% Cu, 10% Ni, 1.5% Fe, 1% Mn" },
              { label: "Testing", value: "Hydrostatic, UT, Eddy Current, PMI" },
              { label: "Biofouling", value: "Inherent resistance to marine biofouling" },
            ].map((spec) => (
              <div
                style={{
                  background: "#fff",
                  padding: "18px 20px",
                  "border-radius": "8px",
                  "box-shadow": "0 1px 3px rgba(0,0,0,0.06)",
                  "border-left": "4px solid #E8821A",
                }}
              >
                <div style={{ "font-size": "0.82rem", color: "#6b7280", "margin-bottom": "4px", "font-weight": "500" }}>
                  {spec.label}
                </div>
                <div style={{ "font-size": "1rem", color: "#111827", "font-weight": "700" }}>{spec.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* APPLICATIONS */}
        <section style={{ "margin-bottom": "50px" }}>
          <h2 style={{ "font-size": "1.6rem", "font-weight": "700", color: "#111827", "margin-bottom": "20px" }}>
            Applications of CuNi 90/10 Pipes
          </h2>
          <div
            style={{
              display: "grid",
              "grid-template-columns": "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              "Seawater Cooling Systems",
              "Offshore Oil & Gas Platforms",
              "Desalination Plants",
              "Ship Condensers & Heat Exchangers",
              "Fire Water Systems (Marine)",
              "Power Plant Condensers",
              "Naval Vessels & Submarines",
              "Coastal Infrastructure Projects",
            ].map((app) => (
              <div
                style={{
                  display: "flex",
                  "align-items": "center",
                  gap: "10px",
                  background: "#fff",
                  padding: "14px 18px",
                  "border-radius": "8px",
                  "box-shadow": "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                <span style={{ color: "#E8821A", "font-size": "1.3rem", "font-weight": "700" }}>✓</span>
                <span style={{ color: "#374151", "font-weight": "500" }}>{app}</span>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CMI */}
        <section style={{ "margin-bottom": "50px" }}>
          <h2 style={{ "font-size": "1.6rem", "font-weight": "700", color: "#111827", "margin-bottom": "20px" }}>
            Why Choose Creative Metal Industries for CuNi 90/10 Pipes?
          </h2>
          <div
            style={{
              display: "grid",
              "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                title: "Cupronickel Specialist",
                desc: "Dedicated focus on copper-nickel alloys with deep technical expertise in CuNi 90/10 and 70/30 grades for marine applications.",
              },
              {
                title: "Approved Mill Sources",
                desc: "We source directly from approved mills ensuring genuine material with full traceability and EN 10204 3.1 mill test certificates.",
              },
              {
                title: "Alloy Selection Guidance",
                desc: "Expert assistance in selecting between 90/10 and 70/30 grades based on your specific service conditions, flow velocities, and temperatures.",
              },
              {
                title: "Full Documentation",
                desc: "Complete documentation including MTC, chemical analysis, mechanical test reports, PMI, and third-party inspection certificates.",
              },
              {
                title: "Complete Product Range",
                desc: "Seamless pipes, welded pipes, tubes, fittings, flanges, and accessories — everything for a complete CuNi piping system from one source.",
              },
              {
                title: "Custom Lengths Available",
                desc: "Standard and custom lengths available. We can supply cut-to-length pipes as per your project requirements.",
              },
              {
                title: "Marine Project Experience",
                desc: "Proven track record supplying CuNi pipes for offshore platforms, shipbuilding yards, desalination plants, and naval projects across India.",
              },
              {
                title: "Pan-India Delivery",
                desc: "Fast delivery across India from our Vadodara warehouse. We serve Mumbai, Chennai, Vizag, Kochi, and all major port cities.",
              },
            ].map((item) => (
              <div
                style={{
                  background: "#fff",
                  padding: "22px",
                  "border-radius": "8px",
                  "box-shadow": "0 1px 4px rgba(0,0,0,0.06)",
                  "border-top": "3px solid #E8821A",
                }}
              >
                <h3 style={{ "font-size": "1.05rem", "font-weight": "700", color: "#111827", "margin-bottom": "8px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#4b5563", "font-size": "0.92rem", "line-height": "1.6", margin: "0" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section style={{ "margin-bottom": "50px" }}>
          <h2 style={{ "font-size": "1.6rem", "font-weight": "700", color: "#111827", "margin-bottom": "20px" }}>
            Frequently Asked Questions — CuNi 90/10 Pipes
          </h2>
          <div style={{ display: "flex", "flex-direction": "column", gap: "16px" }}>
            {FAQS.map((faq) => (
              <div
                style={{
                  background: "#fff",
                  padding: "22px 24px",
                  "border-radius": "8px",
                  "box-shadow": "0 1px 3px rgba(0,0,0,0.06)",
                  "border-left": "4px solid #E8821A",
                }}
              >
                <h3 style={{ "font-size": "1.05rem", "font-weight": "700", color: "#111827", "margin-bottom": "10px" }}>
                  {faq.question}
                </h3>
                <p style={{ color: "#4b5563", "font-size": "0.93rem", "line-height": "1.7", margin: "0" }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          style={{
            background: "linear-gradient(135deg, #E8821A 0%, #d97706 100%)",
            padding: "40px 36px",
            "border-radius": "12px",
            "text-align": "center",
            "margin-bottom": "50px",
          }}
        >
          <h2 style={{ "font-size": "1.7rem", "font-weight": "800", color: "#fff", "margin-bottom": "12px" }}>
            Need CuNi 90/10 Pipes? Get Instant Quote
          </h2>
          <p style={{ color: "rgba(255,255,255,0.92)", "font-size": "1.05rem", "margin-bottom": "24px" }}>
            Ready stock of ASTM B466 / B467 CuNi 90/10 pipes in all sizes. Contact us for competitive pricing and fast delivery.
          </p>
          <div style={{ display: "flex", gap: "14px", "justify-content": "center", "flex-wrap": "wrap" }}>
            <a
              href="tel:+919998280619"
              style={{
                background: "#fff",
                color: "#E8821A",
                padding: "14px 32px",
                "border-radius": "8px",
                "text-decoration": "none",
                "font-weight": "700",
                "font-size": "1rem",
              }}
            >
              Call: +91 99982 80619
            </a>
            <a
              href="https://wa.me/919998280619?text=Hi%2C%20I%20need%20a%20quote%20for%20CuNi%2090%2F10%20pipes"
              style={{
                background: "#25D366",
                color: "#fff",
                padding: "14px 32px",
                "border-radius": "8px",
                "text-decoration": "none",
                "font-weight": "700",
                "font-size": "1rem",
              }}
            >
              WhatsApp Quote
            </a>
            <a
              href="mailto:info@creativemetalind.com?subject=CuNi%2090/10%20Pipe%20Enquiry"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                padding: "14px 32px",
                "border-radius": "8px",
                "text-decoration": "none",
                "font-weight": "700",
                "font-size": "1rem",
                border: "2px solid rgba(255,255,255,0.5)",
              }}
            >
              Email Enquiry
            </a>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section style={{ "margin-bottom": "50px" }}>
          <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", "margin-bottom": "18px" }}>
            Related Products You May Also Need
          </h2>
          <div
            style={{
              display: "grid",
              "grid-template-columns": "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              { href: "/cupro-nickel-7030-pipe-india", label: "CuNi 70/30 Pipe Supplier India" },
              { href: "/titanium-grade-2-pipe-india", label: "Titanium Grade 2 Pipe India" },
              { href: "/duplex-steel-supplier-vadodara", label: "Duplex Steel Supplier Vadodara" },
              { href: "/inconel-pipe-supplier-india", label: "Inconel 625 Pipe Supplier India" },
              { href: "/ss-904l-pipe-supplier-india", label: "SS 904L Pipe Supplier India" },
              { href: "/alloy-20-pipe-supplier-india", label: "Alloy 20 Pipe Supplier India" },
            ].map((link) => (
              <a
                href={link.href}
                style={{
                  display: "block",
                  background: "#fff",
                  padding: "16px 20px",
                  "border-radius": "8px",
                  "text-decoration": "none",
                  color: "#E8821A",
                  "font-weight": "600",
                  "font-size": "0.95rem",
                  "box-shadow": "0 1px 3px rgba(0,0,0,0.06)",
                  "border": "1px solid #e5e7eb",
                  transition: "border-color 0.2s",
                }}
              >
                {link.label} →
              </a>
            ))}
          </div>
        </section>
      
        <RelatedPages currentPath="/cupro-nickel-9010-pipe-india" />
      </main>

      {/* FOOTER */}
      <footer
        style={{
          background: "#111827",
          padding: "40px 20px",
          "margin-top": "0",
        }}
      >
        <div
          style={{
            "max-width": "1200px",
            margin: "0 auto",
            display: "grid",
            "grid-template-columns": "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "32px",
          }}
        >
          <div>
            <img width="79" height="40" src="/logo_cmi.png" alt="Creative Metal Industries" style={{ height: "40px", "margin-bottom": "14px" }} />
            <p style={{ color: "#9ca3af", "font-size": "0.9rem", "line-height": "1.6" }}>
              Creative Metal Industries — Your trusted CuNi 90/10 Pipe Supplier in India. We supply copper-nickel alloy
              pipes, tubes, and fittings for marine, offshore, and industrial applications from Vadodara, Gujarat.
            </p>
          </div>
          <div>
            <h4 style={{ color: "#fff", "font-size": "1rem", "font-weight": "700", "margin-bottom": "14px" }}>
              Quick Links
            </h4>
            <div style={{ display: "flex", "flex-direction": "column", gap: "8px" }}>
              <a href="/" style={{ color: "#9ca3af", "text-decoration": "none", "font-size": "0.9rem" }}>Home</a>
              <a href="/about" style={{ color: "#9ca3af", "text-decoration": "none", "font-size": "0.9rem" }}>About Us</a>
              <a href="/blog" style={{ color: "#9ca3af", "text-decoration": "none", "font-size": "0.9rem" }}>Blog</a>
              <a href="/cupro-nickel-7030-pipe-india" style={{ color: "#9ca3af", "text-decoration": "none", "font-size": "0.9rem" }}>CuNi 70/30 Pipes</a>
              <a href="/cupro-nickel-9010-pipe-india" style={{ color: "#9ca3af", "text-decoration": "none", "font-size": "0.9rem" }}>CuNi 90/10 Pipes</a>
            </div>
          </div>
          <div>
            <h4 style={{ color: "#fff", "font-size": "1rem", "font-weight": "700", "margin-bottom": "14px" }}>
              Contact Us
            </h4>
            <div style={{ display: "flex", "flex-direction": "column", gap: "8px", color: "#9ca3af", "font-size": "0.9rem" }}>
              <span>F-3, Loha Bhavan, Lakkadpitha Rd</span>
              <span>Vadodara, Gujarat 390001</span>
              <a href="tel:+919998280619" style={{ color: "#E8821A", "text-decoration": "none" }}>+91 99982 80619</a>
              <a href="mailto:info@creativemetalind.com" style={{ color: "#E8821A", "text-decoration": "none" }}>info@creativemetalind.com</a>
              <a href="https://www.creativemetalind.com" style={{ color: "#E8821A", "text-decoration": "none" }}>www.creativemetalind.com</a>
            </div>
          </div>
        </div>
        <div
          style={{
            "max-width": "1200px",
            margin: "30px auto 0",
            "padding-top": "20px",
            "border-top": "1px solid #374151",
            "text-align": "center",
            color: "#6b7280",
            "font-size": "0.85rem",
          }}
        >
          © {new Date().getFullYear()} Creative Metal Industries — CuNi 90/10 Pipe Supplier India | Vadodara, Gujarat.
          All rights reserved.
        </div>
      </footer>
    </>
  );
}
