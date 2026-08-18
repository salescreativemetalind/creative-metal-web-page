import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "Alloy 20 Seamless (B729)", composition: "35Ni-20Cr-3.5Cu-2.5Mo (N08020)", sizes: "1/2\" to 8\" NB", schedule: "SCH 10S–80S", apps: "H2SO4/phosphoric acid plants", ht: "Solution Annealed 1040°C", stock: "Ready Stock" },
  { grade: "Alloy 20 Welded (B464)", composition: "UNS N08020 (Carpenter 20)", sizes: "2\" to 8\" NB", schedule: "SCH 10S–40S", apps: "Chemical transfer/acid handling", ht: "Solution Annealed + Pickled", stock: "Ready Stock" },
  { grade: "Alloy 20 Tube (B729)", composition: "35Ni-20Cr-3.5Cu-2.5Mo", sizes: "OD 6.35–114.3mm", schedule: "BWG 14–20", apps: "Heat exchangers/acid coolers", ht: "Solution Annealed", stock: "Available" },
  { grade: "Alloy 20 Fittings (B366)", composition: "N08020", sizes: "1/2\" to 8\" NB", schedule: "SCH 10S–80S", apps: "Complete acid piping systems", ht: "Solution Annealed", stock: "Available" },
];

const FAQS = [
  { q: "What is Alloy 20 / Carpenter 20?", a: "Alloy 20, also known as Carpenter 20 or UNS N08020, is a nickel-iron-chromium austenitic alloy specifically designed for maximum resistance to acid attack, particularly sulphuric acid. It contains approximately 35% nickel, 20% chromium, 3.5% copper, and 2.5% molybdenum with the balance being iron. The alloy was originally developed by the Carpenter Technology Corporation to combat corrosion in sulphuric acid processing environments. Its balanced composition provides excellent resistance to stress corrosion cracking, pitting, and crevice corrosion in chloride-bearing and acid environments." },
  { q: "Why is Alloy 20 chosen for sulphuric acid (H2SO4) service?", a: "Alloy 20 is the preferred material for sulphuric acid service because its high nickel content (35%) provides resistance to chloride stress corrosion cracking while the copper addition (3.5%) dramatically improves resistance to sulphuric acid across a wide range of concentrations and temperatures. The alloy maintains excellent corrosion resistance in sulphuric acid concentrations from 20% to 40% at temperatures up to boiling point. Unlike stainless steels which suffer rapid attack in intermediate H2SO4 concentrations, Alloy 20 maintains stable passive film protection. This makes it the cost-effective choice for acid plants, pickling operations, and chemical processing where sulphuric acid is the primary corrosive medium." },
  { q: "What is the difference between Alloy 20 and SS 316L?", a: "Alloy 20 contains significantly higher nickel (35% vs 10-14%), chromium (20% vs 16-18%), and has copper (3.5%) and molybdenum (2.5% vs 2-3%) additions that give it far superior acid resistance compared to SS 316L. While 316L is a general-purpose austenitic stainless steel suitable for mild corrosive environments, Alloy 20 is specifically engineered for aggressive acid service. In sulphuric acid environments, Alloy 20 can last 10-20 times longer than 316L. The higher nickel content also gives Alloy 20 immunity to chloride stress corrosion cracking which is a common failure mode for 316L. However, Alloy 20 is more expensive, so 316L remains the choice where acid concentrations are low or service conditions are mild." },
  { q: "What is the role of copper in Alloy 20?", a: "The copper addition of approximately 3.5% in Alloy 20 is specifically responsible for providing enhanced resistance to sulphuric acid corrosion. Copper stabilizes the passive film on the alloy surface in reducing acid environments where chromium-based passive films alone would break down. In sulphuric acid at intermediate concentrations (20-40%), the copper significantly reduces the corrosion rate by promoting the formation of a protective copper-enriched surface layer. This copper content is what distinguishes Alloy 20 from other nickel alloys and makes it particularly cost-effective for sulphuric acid applications." },
  { q: "What sizes of Alloy 20 pipe does CMI supply?", a: "Creative Metal Industries supplies Alloy 20 pipes in sizes ranging from 1/2 inch NB to 8 inch NB in both seamless (ASTM B729) and welded (ASTM B464) types. Available schedules include SCH 10S, 20S, 40S, and 80S to suit various pressure requirements. For tubes, we offer OD from 6.35mm to 114.3mm in BWG 14 to 20 wall thicknesses. Common stock sizes include 1 inch, 1.5 inch, 2 inch, 3 inch, and 4 inch NB in SCH 40S which covers the majority of chemical plant piping requirements. Custom sizes and cut-to-length services are also available." },
  { q: "What is the price of Alloy 20 pipe in India?", a: "The price of Alloy 20 pipe in India typically ranges from Rs 2,500 to Rs 6,500 per kg depending on the size, schedule, type (seamless vs welded), and current nickel market rates. Seamless pipes command a higher price due to the manufacturing process, while welded pipes offer a cost-effective alternative for lower-pressure applications. At Creative Metal Industries, we offer competitive pricing backed by direct mill relationships and maintain ready stock to avoid premium charges for urgent requirements. Contact us at +91 99982 80619 for exact pricing on your specific requirement." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"Alloy 20 Pipe — Carpenter 20 (N08020)","description":"Alloy 20 / Carpenter 20 (UNS N08020) seamless and welded pipes per ASTM B729/B464. Superior sulphuric acid resistance. 35Ni-20Cr-3.5Cu-2.5Mo. Sizes 1/2\" to 8\" NB. Creative Metal Industries, Vadodara, India.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"2500","highPrice":"6500","offerCount":"70+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"16","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Alloy 20 Pipe Supplier India","item":"https://www.creativemetalind.com/alloy-20-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Alloy20PipeSupplierIndia() {
  return (
    <>
      <Title>Alloy 20 Pipe Supplier India | N08020 Carpenter 20 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Alloy 20 pipe supplier India — ASTM B729 N08020 Carpenter 20 seamless pipes. 35Ni-20Cr-3.5Cu-2.5Mo for sulphuric acid, phosphoric acid. Sizes 1/2&quot; to 8&quot; NB. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/alloy-20-pipe-supplier-india" />
      <Meta property="og:title" content="Alloy 20 Pipe Supplier India | N08020 | Sulphuric Acid Specialist | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Alloy 20 pipe supplier India — Carpenter 20 for H2SO4 and phosphoric acid service. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/alloy-20-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Alloy 20 Pipe Supplier India | N08020 | CMI" />
      <Meta name="twitter:description" content="Alloy 20 pipe — Carpenter 20 for sulphuric acid. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      {/* Navigation */}
      <nav style={{ display: "flex", "align-items": "center", "justify-content": "space-between", padding: "12px 24px", "background-color": "#fff", "border-bottom": "2px solid #E8821A", position: "sticky", top: "0", "z-index": "100" }}>
        <a href="/" style={{ display: "flex", "align-items": "center", "text-decoration": "none" }}>
          <img src="/logo_cmi.png" alt="Creative Metal Industries Logo" style={{ height: "48px" }} />
        </a>
        <a href="https://www.creativemetalind.com/#contact" style={{ background: "#E8821A", color: "#fff", padding: "10px 22px", "border-radius": "4px", "text-decoration": "none", "font-weight": "bold", "font-size": "15px" }}>Get Quote</a>
      </nav>

      {/* Breadcrumb */}
      <div style={{ padding: "10px 24px", "font-size": "13px", color: "#555", "background-color": "#f9f9f9" }}>
        <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>Home</a> &gt;{" "}
        <span>Alloy 20 Pipe Supplier India</span>
      </div>

      {/* Main Content */}
      <main style={{ "max-width": "960px", margin: "0 auto", padding: "32px 18px" }}>

        {/* Hero Section */}
        <div style={{ "text-align": "center", "margin-bottom": "40px" }}>
          <h1 style={{ "font-size": "2rem", color: "#1a1a1a", "margin-bottom": "16px" }}>Alloy 20 Pipe Supplier in India — Creative Metal Industries</h1>
          <p style={{ "font-size": "16px", color: "#444", "line-height": "1.7", "max-width": "800px", margin: "0 auto" }}>
            Creative Metal Industries is a leading supplier of Alloy 20 / Carpenter 20 (UNS N08020) pipes, tubes, and fittings in India. Alloy 20 is a nickel-iron-chromium austenitic alloy with excellent resistance to sulphuric acid and other aggressive media. With composition of 35Ni-20Cr-3.5Cu-2.5Mo balanced with iron, this alloy is specified under ASTM B729 (seamless) and ASTM B464 (welded). We supply sizes from 1/2" to 8" NB at competitive pricing of Rs 2,500–6,500/kg from our Vadodara warehouse with ready stock availability for immediate dispatch across India and export markets.
          </p>
        </div>

        {/* Grades Table */}
        <h2 style={{ "font-size": "1.5rem", color: "#1a1a1a", "margin-bottom": "16px", "border-left": "4px solid #E8821A", "padding-left": "12px" }}>Alloy 20 Pipe Grades — Ready Stock India</h2>
        <div style={{ "overflow-x": "auto", "margin-bottom": "40px" }}>
          <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "14px" }}>
            <thead>
              <tr style={{ "background-color": "#E8821A", color: "#fff" }}>
                <th style={{ padding: "10px 12px", "text-align": "left" }}>Grade</th>
                <th style={{ padding: "10px 12px", "text-align": "left" }}>Specification</th>
                <th style={{ padding: "10px 12px", "text-align": "left" }}>Composition / UNS</th>
                <th style={{ padding: "10px 12px", "text-align": "left" }}>Size</th>
                <th style={{ padding: "10px 12px", "text-align": "left" }}>Schedule</th>
                <th style={{ padding: "10px 12px", "text-align": "left" }}>Application</th>
                <th style={{ padding: "10px 12px", "text-align": "left" }}>Condition</th>
                <th style={{ padding: "10px 12px", "text-align": "left" }}>Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ "border-bottom": "1px solid #e0e0e0" }}>
                <td style={{ padding: "10px 12px", "font-weight": "bold" }}>Alloy 20 Seamless</td>
                <td style={{ padding: "10px 12px" }}>ASTM B729</td>
                <td style={{ padding: "10px 12px" }}>35Ni-20Cr-3.5Cu-2.5Mo (N08020)</td>
                <td style={{ padding: "10px 12px" }}>1/2"–8" NB</td>
                <td style={{ padding: "10px 12px" }}>SCH 10S–80S</td>
                <td style={{ padding: "10px 12px" }}>H₂SO₄ / phosphoric acid plants</td>
                <td style={{ padding: "10px 12px" }}>Solution Annealed 1040°C</td>
                <td style={{ padding: "10px 12px", color: "green", "font-weight": "bold" }}>Ready Stock</td>
              </tr>
              <tr style={{ "border-bottom": "1px solid #e0e0e0", "background-color": "#f9f9f9" }}>
                <td style={{ padding: "10px 12px", "font-weight": "bold" }}>Alloy 20 Welded</td>
                <td style={{ padding: "10px 12px" }}>ASTM B464</td>
                <td style={{ padding: "10px 12px" }}>UNS N08020 (Carpenter 20)</td>
                <td style={{ padding: "10px 12px" }}>2"–8" NB</td>
                <td style={{ padding: "10px 12px" }}>SCH 10S–40S</td>
                <td style={{ padding: "10px 12px" }}>Chemical transfer / acid handling</td>
                <td style={{ padding: "10px 12px" }}>Solution Annealed + Pickled</td>
                <td style={{ padding: "10px 12px", color: "green", "font-weight": "bold" }}>Ready Stock</td>
              </tr>
              <tr style={{ "border-bottom": "1px solid #e0e0e0" }}>
                <td style={{ padding: "10px 12px", "font-weight": "bold" }}>Alloy 20 Tube</td>
                <td style={{ padding: "10px 12px" }}>ASTM B729</td>
                <td style={{ padding: "10px 12px" }}>35Ni-20Cr-3.5Cu-2.5Mo</td>
                <td style={{ padding: "10px 12px" }}>OD 6.35–114.3mm</td>
                <td style={{ padding: "10px 12px" }}>BWG 14–20</td>
                <td style={{ padding: "10px 12px" }}>Heat exchangers / acid coolers</td>
                <td style={{ padding: "10px 12px" }}>Solution Annealed</td>
                <td style={{ padding: "10px 12px", color: "#E8821A", "font-weight": "bold" }}>Available</td>
              </tr>
              <tr style={{ "background-color": "#f9f9f9" }}>
                <td style={{ padding: "10px 12px", "font-weight": "bold" }}>Alloy 20 Fittings</td>
                <td style={{ padding: "10px 12px" }}>ASTM B366</td>
                <td style={{ padding: "10px 12px" }}>N08020</td>
                <td style={{ padding: "10px 12px" }}>1/2"–8" NB</td>
                <td style={{ padding: "10px 12px" }}>SCH 10S–80S</td>
                <td style={{ padding: "10px 12px" }}>Complete acid piping systems</td>
                <td style={{ padding: "10px 12px" }}>Solution Annealed</td>
                <td style={{ padding: "10px 12px", color: "#E8821A", "font-weight": "bold" }}>Available</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Specifications Grid */}
        <h2 style={{ "font-size": "1.5rem", color: "#1a1a1a", "margin-bottom": "16px", "border-left": "4px solid #E8821A", "padding-left": "12px" }}>Specifications & Technical Details</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px", "margin-bottom": "40px" }}>
          <div style={{ padding: "14px 16px", background: "#f7f7f7", "border-radius": "6px", "border-left": "3px solid #E8821A" }}>
            <strong>Standard (Seamless):</strong> ASTM B729 / SB729
          </div>
          <div style={{ padding: "14px 16px", background: "#f7f7f7", "border-radius": "6px", "border-left": "3px solid #E8821A" }}>
            <strong>Standard (Welded):</strong> ASTM B464 / SB464
          </div>
          <div style={{ padding: "14px 16px", background: "#f7f7f7", "border-radius": "6px", "border-left": "3px solid #E8821A" }}>
            <strong>Grade:</strong> Alloy 20 / Carpenter 20 (UNS N08020)
          </div>
          <div style={{ padding: "14px 16px", background: "#f7f7f7", "border-radius": "6px", "border-left": "3px solid #E8821A" }}>
            <strong>Type:</strong> Seamless, Welded & Tube
          </div>
          <div style={{ padding: "14px 16px", background: "#f7f7f7", "border-radius": "6px", "border-left": "3px solid #E8821A" }}>
            <strong>Size Range:</strong> 1/2" to 8" NB (15NB to 200NB)
          </div>
          <div style={{ padding: "14px 16px", background: "#f7f7f7", "border-radius": "6px", "border-left": "3px solid #E8821A" }}>
            <strong>Schedules:</strong> SCH 10S, 20S, 40S, 80S
          </div>
          <div style={{ padding: "14px 16px", background: "#f7f7f7", "border-radius": "6px", "border-left": "3px solid #E8821A" }}>
            <strong>Max Service Temp:</strong> Up to 500°C
          </div>
          <div style={{ padding: "14px 16px", background: "#f7f7f7", "border-radius": "6px", "border-left": "3px solid #E8821A" }}>
            <strong>Composition:</strong> 35% Ni, 20% Cr, 3.5% Cu, 2.5% Mo, Balance Fe
          </div>
          <div style={{ padding: "14px 16px", background: "#f7f7f7", "border-radius": "6px", "border-left": "3px solid #E8821A" }}>
            <strong>Testing:</strong> Hydrostatic, UT, IGC (ASTM G28), PMI
          </div>
          <div style={{ padding: "14px 16px", background: "#f7f7f7", "border-radius": "6px", "border-left": "3px solid #E8821A" }}>
            <strong>Welding:</strong> ERNiCrMo-6 filler wire (matching composition)
          </div>
        </div>

        {/* Applications */}
        <h2 style={{ "font-size": "1.5rem", color: "#1a1a1a", "margin-bottom": "16px", "border-left": "4px solid #E8821A", "padding-left": "12px" }}>Applications of Alloy 20 Pipe in India</h2>
        <div style={{ background: "#fffaf4", padding: "20px 24px", "border-radius": "8px", "margin-bottom": "40px", border: "1px solid #f5e6d3" }}>
          <ul style={{ "list-style": "none", padding: "0", margin: "0", display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))", gap: "10px" }}>
            <li style={{ padding: "8px 0", "padding-left": "20px", "border-left": "3px solid #E8821A" }}>Sulphuric acid production plants</li>
            <li style={{ padding: "8px 0", "padding-left": "20px", "border-left": "3px solid #E8821A" }}>Phosphoric acid processing plants</li>
            <li style={{ padding: "8px 0", "padding-left": "20px", "border-left": "3px solid #E8821A" }}>Synthetic rubber & rayon manufacturing</li>
            <li style={{ padding: "8px 0", "padding-left": "20px", "border-left": "3px solid #E8821A" }}>Acid pickling lines</li>
            <li style={{ padding: "8px 0", "padding-left": "20px", "border-left": "3px solid #E8821A" }}>Dyestuff & pharmaceutical intermediates</li>
            <li style={{ padding: "8px 0", "padding-left": "20px", "border-left": "3px solid #E8821A" }}>Food processing (citric acid handling)</li>
            <li style={{ padding: "8px 0", "padding-left": "20px", "border-left": "3px solid #E8821A" }}>Petroleum refining</li>
            <li style={{ padding: "8px 0", "padding-left": "20px", "border-left": "3px solid #E8821A" }}>Mixed acid environments</li>
          </ul>
        </div>

        {/* Why CMI */}
        <h2 style={{ "font-size": "1.5rem", color: "#1a1a1a", "margin-bottom": "16px", "border-left": "4px solid #E8821A", "padding-left": "12px" }}>Why Buy Alloy 20 Pipe from Creative Metal Industries?</h2>
        <ul style={{ "line-height": "2", "margin-bottom": "40px", "padding-left": "20px", color: "#333" }}>
          <li><strong>Acid-Service Specialist:</strong> Dedicated expertise in supplying corrosion-resistant alloys for acid environments including sulphuric, phosphoric, and mixed acid media.</li>
          <li><strong>Approved Mill Sources:</strong> We source exclusively from NACE-approved and ISO-certified mills ensuring consistent quality and traceability on every heat.</li>
          <li><strong>Grade Selection Guidance:</strong> Our technical team helps you choose between Alloy 20, 904L, and Hastelloy based on acid concentration, temperature, and cost optimization.</li>
          <li><strong>Full Documentation:</strong> Every supply includes MTC as per EN 10204 3.1, NACE MR0175 compliance certificate, IGC test report, and PMI report.</li>
          <li><strong>Welding Support ERNiCrMo-6:</strong> We provide matching filler wire recommendations and welding procedure guidance for Alloy 20 fabrication.</li>
          <li><strong>Complete Range — Pipes + Fittings + Flanges:</strong> One-stop supply of seamless pipes, welded pipes, tubes, fittings, and flanges in Alloy 20 for complete piping systems.</li>
          <li><strong>Ready Stock Advantage:</strong> Maintain inventory of common sizes in our Vadodara warehouse for immediate dispatch, reducing your project lead time.</li>
          <li><strong>Pan-India + Export:</strong> We supply across India — Mumbai, Chennai, Pune, Hyderabad, Kolkata — and export to Middle East, Southeast Asia, and Africa.</li>
        </ul>

        {/* FAQs */}
        <h2 style={{ "font-size": "1.5rem", color: "#1a1a1a", "margin-bottom": "16px", "border-left": "4px solid #E8821A", "padding-left": "12px" }}>Frequently Asked Questions — Alloy 20 Pipe</h2>
        <div style={{ "margin-bottom": "40px" }}>
          <details style={{ "margin-bottom": "12px", padding: "14px 18px", background: "#f9f9f9", "border-radius": "6px", border: "1px solid #eee" }}>
            <summary style={{ cursor: "pointer", "font-weight": "bold", color: "#1a1a1a" }}>What is Alloy 20 / Carpenter 20?</summary>
            <p style={{ "margin-top": "10px", "line-height": "1.7", color: "#444" }}>
              Alloy 20, also known as Carpenter 20 or UNS N08020, is a nickel-iron-chromium austenitic alloy specifically designed for maximum resistance to acid attack, particularly sulphuric acid. It contains approximately 35% nickel, 20% chromium, 3.5% copper, and 2.5% molybdenum with the balance being iron. The alloy was originally developed by the Carpenter Technology Corporation to combat corrosion in sulphuric acid processing environments. Its balanced composition provides excellent resistance to stress corrosion cracking, pitting, and crevice corrosion in chloride-bearing and acid environments.
            </p>
          </details>
          <details style={{ "margin-bottom": "12px", padding: "14px 18px", background: "#f9f9f9", "border-radius": "6px", border: "1px solid #eee" }}>
            <summary style={{ cursor: "pointer", "font-weight": "bold", color: "#1a1a1a" }}>Why is Alloy 20 chosen for sulphuric acid (H₂SO₄) service?</summary>
            <p style={{ "margin-top": "10px", "line-height": "1.7", color: "#444" }}>
              Alloy 20 is the preferred material for sulphuric acid service because its high nickel content (35%) provides resistance to chloride stress corrosion cracking while the copper addition (3.5%) dramatically improves resistance to sulphuric acid across a wide range of concentrations and temperatures. The alloy maintains excellent corrosion resistance in sulphuric acid concentrations from 20% to 40% at temperatures up to boiling point. Unlike stainless steels which suffer rapid attack in intermediate H₂SO₄ concentrations, Alloy 20 maintains stable passive film protection. This makes it the cost-effective choice for acid plants, pickling operations, and chemical processing where sulphuric acid is the primary corrosive medium.
            </p>
          </details>
          <details style={{ "margin-bottom": "12px", padding: "14px 18px", background: "#f9f9f9", "border-radius": "6px", border: "1px solid #eee" }}>
            <summary style={{ cursor: "pointer", "font-weight": "bold", color: "#1a1a1a" }}>What is the difference between Alloy 20 and SS 316L?</summary>
            <p style={{ "margin-top": "10px", "line-height": "1.7", color: "#444" }}>
              Alloy 20 contains significantly higher nickel (35% vs 10-14%), chromium (20% vs 16-18%), and has copper (3.5%) and molybdenum (2.5% vs 2-3%) additions that give it far superior acid resistance compared to SS 316L. While 316L is a general-purpose austenitic stainless steel suitable for mild corrosive environments, Alloy 20 is specifically engineered for aggressive acid service. In sulphuric acid environments, Alloy 20 can last 10-20 times longer than 316L. The higher nickel content also gives Alloy 20 immunity to chloride stress corrosion cracking which is a common failure mode for 316L. However, Alloy 20 is more expensive, so 316L remains the choice where acid concentrations are low or service conditions are mild.
            </p>
          </details>
          <details style={{ "margin-bottom": "12px", padding: "14px 18px", background: "#f9f9f9", "border-radius": "6px", border: "1px solid #eee" }}>
            <summary style={{ cursor: "pointer", "font-weight": "bold", color: "#1a1a1a" }}>What is the role of copper in Alloy 20?</summary>
            <p style={{ "margin-top": "10px", "line-height": "1.7", color: "#444" }}>
              The copper addition of approximately 3.5% in Alloy 20 is specifically responsible for providing enhanced resistance to sulphuric acid corrosion. Copper stabilizes the passive film on the alloy surface in reducing acid environments where chromium-based passive films alone would break down. In sulphuric acid at intermediate concentrations (20-40%), the copper significantly reduces the corrosion rate by promoting the formation of a protective copper-enriched surface layer. This copper content is what distinguishes Alloy 20 from other nickel alloys and makes it particularly cost-effective for sulphuric acid applications compared to higher-grade alloys like Hastelloy C-276 which rely on higher molybdenum content instead.
            </p>
          </details>
          <details style={{ "margin-bottom": "12px", padding: "14px 18px", background: "#f9f9f9", "border-radius": "6px", border: "1px solid #eee" }}>
            <summary style={{ cursor: "pointer", "font-weight": "bold", color: "#1a1a1a" }}>What sizes of Alloy 20 pipe does CMI supply?</summary>
            <p style={{ "margin-top": "10px", "line-height": "1.7", color: "#444" }}>
              Creative Metal Industries supplies Alloy 20 pipes in sizes ranging from 1/2" NB (15NB) to 8" NB (200NB) in both seamless (ASTM B729) and welded (ASTM B464) types. Available schedules include SCH 10S, 20S, 40S, and 80S to suit various pressure requirements. For tubes, we offer OD from 6.35mm to 114.3mm in BWG 14 to 20 wall thicknesses. Common stock sizes include 1", 1.5", 2", 3", and 4" NB in SCH 40S which covers the majority of chemical plant piping requirements. Custom sizes and cut-to-length services are also available with short lead times from our approved mill sources.
            </p>
          </details>
          <details style={{ "margin-bottom": "12px", padding: "14px 18px", background: "#f9f9f9", "border-radius": "6px", border: "1px solid #eee" }}>
            <summary style={{ cursor: "pointer", "font-weight": "bold", color: "#1a1a1a" }}>What is the price of Alloy 20 pipe in India?</summary>
            <p style={{ "margin-top": "10px", "line-height": "1.7", color: "#444" }}>
              The price of Alloy 20 pipe in India typically ranges from Rs 2,500 to Rs 6,500 per kg depending on the size, schedule, type (seamless vs welded), and current nickel market rates. Seamless pipes command a higher price due to the manufacturing process, while welded pipes offer a cost-effective alternative for lower-pressure applications. At Creative Metal Industries, we offer competitive pricing backed by direct mill relationships and maintain ready stock to avoid premium charges for urgent requirements. For exact pricing on your specific requirement, contact our sales team with the size, schedule, quantity, and delivery location for a prompt quotation.
            </p>
          </details>
        </div>

        {/* CTA Section */}
        <div style={{ background: "linear-gradient(135deg, #E8821A 0%, #d4710f 100%)", padding: "40px 32px", "border-radius": "10px", "text-align": "center", "margin-bottom": "40px" }}>
          <h2 style={{ color: "#fff", "font-size": "1.6rem", "margin-bottom": "12px" }}>Need Alloy 20 Pipes? Get Instant Quote</h2>
          <p style={{ color: "#fff", "margin-bottom": "20px", opacity: "0.9" }}>Call +91 99982 80619 or submit your requirement online</p>
          <a href="https://www.creativemetalind.com/#contact" style={{ display: "inline-block", background: "#fff", color: "#E8821A", padding: "14px 36px", "border-radius": "5px", "font-weight": "bold", "text-decoration": "none", "font-size": "16px" }}>Request Quote Now</a>
        </div>

        {/* Related Products */}
        <h2 style={{ "font-size": "1.5rem", color: "#1a1a1a", "margin-bottom": "16px", "border-left": "4px solid #E8821A", "padding-left": "12px" }}>Related Products</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(250px, 1fr))", gap: "14px", "margin-bottom": "40px" }}>
          <a href="/hastelloy-c22-pipe-supplier-india" style={{ display: "block", padding: "16px", background: "#f9f9f9", "border-radius": "6px", "text-decoration": "none", color: "#1a1a1a", border: "1px solid #eee", "font-weight": "500", transition: "border-color 0.2s" }}>Hastelloy C22 Pipe Supplier India</a>
          <a href="/ss-904l-pipe-supplier-india" style={{ display: "block", padding: "16px", background: "#f9f9f9", "border-radius": "6px", "text-decoration": "none", color: "#1a1a1a", border: "1px solid #eee", "font-weight": "500", transition: "border-color 0.2s" }}>SS 904L Pipe Supplier India</a>
          <a href="/incoloy-825-pipe-supplier-india" style={{ display: "block", padding: "16px", background: "#f9f9f9", "border-radius": "6px", "text-decoration": "none", color: "#1a1a1a", border: "1px solid #eee", "font-weight": "500", transition: "border-color 0.2s" }}>Incoloy 825 Pipe Supplier India</a>
          <a href="/nickel-200-pipe-supplier-india" style={{ display: "block", padding: "16px", background: "#f9f9f9", "border-radius": "6px", "text-decoration": "none", color: "#1a1a1a", border: "1px solid #eee", "font-weight": "500", transition: "border-color 0.2s" }}>Nickel 200 Pipe Supplier India</a>
          <a href="/inconel-pipe-supplier-india" style={{ display: "block", padding: "16px", background: "#f9f9f9", "border-radius": "6px", "text-decoration": "none", color: "#1a1a1a", border: "1px solid #eee", "font-weight": "500", transition: "border-color 0.2s" }}>Inconel 625 Pipe Supplier India</a>
          <a href="/duplex-steel-supplier-vadodara" style={{ display: "block", padding: "16px", background: "#f9f9f9", "border-radius": "6px", "text-decoration": "none", color: "#1a1a1a", border: "1px solid #eee", "font-weight": "500", transition: "border-color 0.2s" }}>Duplex Steel Supplier Vadodara</a>
        </div>
      
        <RelatedPages currentPath="/alloy-20-pipe-supplier-india" />
      </main>

      {/* Footer */}
      <footer style={{ "background-color": "#1a1a1a", color: "#ccc", padding: "32px 24px", "text-align": "center", "font-size": "14px", "line-height": "1.8" }}>
        <p style={{ "margin-bottom": "8px", color: "#fff", "font-weight": "bold" }}>Creative Metal Industries — Alloy 20 Pipe Supplier India</p>
        <p>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001, Gujarat, India</p>
        <p>Phone: <a href="tel:+919998280619" style={{ color: "#E8821A", "text-decoration": "none" }}>+91 99982 80619</a></p>
        <p>
          <a href="https://www.creativemetalind.com" style={{ color: "#E8821A", "text-decoration": "none" }}>www.creativemetalind.com</a>
        </p>
        <p style={{ "margin-top": "16px", "font-size": "12px", color: "#888" }}>© {new Date().getFullYear()} Creative Metal Industries. All rights reserved.</p>
      </footer>
    </>
  );
}
