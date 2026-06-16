/**
 * /carbon-steel-sa516-plate-stockist-india
 * SEO Landing Page — Target: "Carbon Steel SA 516 Plate Stockist India"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Carbon Steel SA 516 Plate Stockist India — Creative Metal Industries",
  "description": "Leading SA 516 Gr.60/70 carbon steel plate stockist in India. Boiler quality, pressure vessel, NACE/HIC, IBR certified. Ready stock Vadodara.",
  "url": "https://www.creativemetalind.com/carbon-steel-sa516-plate-stockist-india",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},
      {"@type":"ListItem","position":2,"name":"Carbon Steel SA 516 Plate Stockist India","item":"https://www.creativemetalind.com/carbon-steel-sa516-plate-stockist-india"}
    ]
  },
  "mainEntity": {
    "@type": "Product",
    "name": "SA 516 Grade 60/70 Carbon Steel Plate",
    "brand": {"@type": "Brand", "name": "Creative Metal Industries"},
    "manufacturer": {"@type": "Organization", "name": "SAIL, AMNS, TATA, JSW"},
    "material": "Carbon Steel SA 516 Grade 60 / Grade 70",
    "description": "ASTM SA 516 Grade 60 and Grade 70 carbon steel plates for pressure vessel, boiler, and heat exchanger fabrication. Available in thicknesses 6mm to 200mm with IBR Form III-C, NACE MR-01-75, HIC tested. Ready stock at Vadodara.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {"@type": "Organization", "name": "Creative Metal Industries", "telephone": "+91-99982-80619"}
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "43",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"What is SA 516 Grade 70 steel plate?","acceptedAnswer":{"@type":"Answer","text":"SA 516 Grade 70 (also called ASTM A516 Gr.70) is a carbon steel plate specification designed for moderate and lower temperature pressure vessel service. It has a minimum tensile strength of 485-620 MPa and is the most widely used plate grade for pressure vessels, boilers, and storage tanks in petrochemical, oil & gas, and power plant industries."}},
    {"@type":"Question","name":"What is the difference between SA 516 Gr.60 and Gr.70?","acceptedAnswer":{"@type":"Answer","text":"The main difference is tensile strength. SA 516 Gr.60 has 415-550 MPa tensile strength while Gr.70 has 485-620 MPa. Gr.70 is preferred for higher-pressure applications and thicker sections. Both are weldable and suitable for pressure vessel fabrication per ASME Section VIII."}},
    {"@type":"Question","name":"Do you supply SA 516 plates with NACE and HIC certification?","acceptedAnswer":{"@type":"Answer","text":"Yes. Creative Metal Industries stocks SA 516 Gr.60/70 plates in NACE MR-01-75 compliant condition with HIC (Hydrogen Induced Cracking) test reports per NACE TM-0284. These are essential for sour service applications in oil & gas refineries."}},
    {"@type":"Question","name":"Is IBR certification available for SA 516 plates?","acceptedAnswer":{"@type":"Answer","text":"Yes. We supply SA 516 Gr.60/70 plates with IBR Form III-C certification from approved manufacturers (SAIL, AMNS, TATA). IBR plates are mandatory for boiler and pressure vessel fabrication in India as per Indian Boiler Regulations."}},
    {"@type":"Question","name":"What thickness range is available for SA 516 plates?","acceptedAnswer":{"@type":"Answer","text":"We stock SA 516 Gr.60/70 plates from 6mm to 200mm thickness. Standard widths are 1500mm, 2000mm, 2500mm, and 3000mm with lengths up to 12000mm. Custom cut-to-size available from our Vadodara facility."}},
    {"@type":"Question","name":"Which industries use SA 516 carbon steel plates?","acceptedAnswer":{"@type":"Answer","text":"SA 516 plates are used extensively in petrochemical plants, oil refineries, fertilizer plants, power generation, LPG/LNG storage, heat exchanger fabrication, pressure vessel manufacturing, and nuclear power applications."}},
    {"@type":"Question","name":"What testing is done on SA 516 plates?","acceptedAnswer":{"@type":"Answer","text":"Standard testing includes ultrasonic testing (UT) per SA 435/SA 578, mechanical testing (tensile, yield, elongation, impact), chemical analysis, and visual inspection. Additional tests like HIC (NACE TM-0284), SSC (NACE TM-0177), and PWHT simulation are available on request."}},
    {"@type":"Question","name":"Can you supply SA 516 plates for export?","acceptedAnswer":{"@type":"Answer","text":"Yes. We export SA 516 Gr.60/70 plates to UAE, Saudi Arabia, Oman, Kuwait, Bahrain, USA, UK, and 50+ countries. We handle export documentation, packing, third-party inspection, and freight forwarding."}},
    {"@type":"Question","name":"What is the delivery time for SA 516 plates?","acceptedAnswer":{"@type":"Answer","text":"Standard thicknesses (6mm-80mm) in common sizes are ready stock with 2-3 days delivery. Non-standard sizes and thicknesses above 100mm have 2-4 weeks delivery from our mill network."}},
    {"@type":"Question","name":"Who manufactures SA 516 plates in India?","acceptedAnswer":{"@type":"Answer","text":"Major Indian manufacturers include SAIL (Bhilai, Bokaro, Rourkela), AMNS (ArcelorMittal Nippon Steel), TATA Steel, JSW Steel, and Essar. We are authorised stockists for multiple mills with full MTC documentation."}}
  ]
});

export default function SA516PlatePage() {
  return (
    <>
      <Title>SA 516 Plate Stockist India | Gr.60/70 | Creative Metal Industries</Title>
      <Meta name="description" content="Leading carbon steel SA 516 Grade 60/70 plate stockist in India. Boiler quality, NACE/HIC, IBR certified. 6mm-200mm thickness. Ready stock Vadodara. Call +91 99982 80619." />
      <Meta name="keywords" content="SA 516 plate stockist India, carbon steel SA 516 Gr 70, SA 516 Gr 60 plate, boiler quality plate India, pressure vessel plate stockist, NACE HIC plate India, IBR plate supplier, carbon steel plate Vadodara" />
      <Link rel="canonical" href="https://www.creativemetalind.com/carbon-steel-sa516-plate-stockist-india" />
      <Meta property="og:title" content="Carbon Steel SA 516 Plate Stockist India | CMI" />
      <Meta property="og:description" content="India's trusted SA 516 Gr.60/70 plate stockist — boiler quality, NACE/HIC, IBR. Ready stock 6mm-200mm. GIDC Makarpura, Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/carbon-steel-sa516-plate-stockist-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      {/* Nav */}
      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="tel:+919998280619" class="btn btn-outline" style={{"font-size":"0.85rem",padding:"0.45rem 1rem"}}>📞 +91 99982 80619</a>
        <a href="/#contact" class="btn btn-primary" style={{"font-size":"0.85rem",padding:"0.45rem 1rem"}}>Get Quote</a>
      </nav>

      {/* Breadcrumb */}
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a>
        <span style={{margin:"0 0.5rem"}}>›</span>
        <span>Carbon Steel SA 516 Plate Stockist India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>

        {/* H1 + Intro */}
        <h1 style={{"font-size":"clamp(1.8rem,4vw,2.8rem)","font-weight":"800",color:"#111827","margin-bottom":"1.5rem","line-height":"1.2"}}>
          Carbon Steel SA 516 Plate Stockist in India
        </h1>

        <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Creative Metal Industries is India's trusted stockist and supplier of <strong>ASTM SA 516 Grade 60 and Grade 70 carbon steel plates</strong> for pressure vessel, boiler, and heat exchanger fabrication. We maintain ready stock of SA 516 plates from <strong>6mm to 200mm thickness</strong> at our GIDC Makarpura, Vadodara facility — with IBR Form III-C certification, NACE MR-01-75 compliance, and HIC test reports available for every heat.
        </p>

        <p style={{"font-size":"1rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>
          As an authorised stockist for SAIL, AMNS (ArcelorMittal Nippon Steel), TATA Steel, and JSW Steel, we supply SA 516 plates with complete Mill Test Certificates (EN 10204 3.1/3.2), ultrasonic testing reports per SA 435/SA 578, and third-party inspection under DNV GL, TUV, SGS, Bureau Veritas, and Lloyd's Register. Our plates serve India's largest EPC contractors, pressure vessel fabricators, boiler manufacturers, and petrochemical plants.
        </p>

        {/* About SA 516 */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>
          What is SA 516 Carbon Steel Plate?
        </h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
          ASTM A516 (SA 516 per ASME Section II Part A) is a specification for carbon steel plates intended for moderate and lower temperature pressure vessel service. It is the most widely specified plate grade for pressure vessel fabrication globally. The specification covers four grades — 55, 60, 65, and 70 — with Grade 70 being the most commonly used due to its optimal balance of strength, weldability, and notch toughness.
        </p>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
          SA 516 plates are characterised by their excellent weldability (no preheat required up to 40mm thickness), good low-temperature impact toughness when normalised, and suitability for post-weld heat treatment (PWHT). They are manufactured through the hot rolling process and can be supplied in as-rolled, normalised, or stress-relieved conditions.
        </p>

        {/* Grades Table */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>
          SA 516 Grade Comparison — Mechanical Properties
        </h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem","min-width":"600px"}}>
            <thead>
              <tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}>
                <th style={{padding:"0.7rem 1rem","text-align":"left"}}>Property</th>
                <th style={{padding:"0.7rem 1rem","text-align":"center"}}>SA 516 Gr.60</th>
                <th style={{padding:"0.7rem 1rem","text-align":"center"}}>SA 516 Gr.65</th>
                <th style={{padding:"0.7rem 1rem","text-align":"center"}}>SA 516 Gr.70</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Tensile Strength (MPa)","415–550","450–585","485–620"],
                ["Yield Strength min (MPa)","220","240","260"],
                ["Elongation min (%)","21","19","17"],
                ["Impact Test (Charpy V)","Available","Available","Available"],
                ["Max Thickness (mm)","200","200","200"],
                ["Condition","AR / Normalised","AR / Normalised","AR / Normalised"],
              ].map((row, i) => (
                <tr style={{background: i % 2 === 0 ? "#fff" : "#f9fafb"}}>
                  <td style={{padding:"0.6rem 1rem","font-weight":"600",color:"#111827"}}>{row[0]}</td>
                  <td style={{padding:"0.6rem 1rem","text-align":"center",color:"#374151"}}>{row[1]}</td>
                  <td style={{padding:"0.6rem 1rem","text-align":"center",color:"#374151"}}>{row[2]}</td>
                  <td style={{padding:"0.6rem 1rem","text-align":"center",color:"#374151"}}>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Chemical Composition */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>
          Chemical Composition — SA 516 Gr.70
        </h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem"}}>
            <thead>
              <tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}>
                <th style={{padding:"0.7rem 1rem","text-align":"left"}}>Element</th>
                <th style={{padding:"0.7rem 1rem","text-align":"center"}}>C</th>
                <th style={{padding:"0.7rem 1rem","text-align":"center"}}>Mn</th>
                <th style={{padding:"0.7rem 1rem","text-align":"center"}}>P max</th>
                <th style={{padding:"0.7rem 1rem","text-align":"center"}}>S max</th>
                <th style={{padding:"0.7rem 1rem","text-align":"center"}}>Si</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding:"0.6rem 1rem","font-weight":"600"}}>≤ 12.5mm</td>
                <td style={{padding:"0.6rem 1rem","text-align":"center"}}>0.27 max</td>
                <td style={{padding:"0.6rem 1rem","text-align":"center"}}>0.85–1.20</td>
                <td style={{padding:"0.6rem 1rem","text-align":"center"}}>0.035</td>
                <td style={{padding:"0.6rem 1rem","text-align":"center"}}>0.035</td>
                <td style={{padding:"0.6rem 1rem","text-align":"center"}}>0.15–0.40</td>
              </tr>
              <tr style={{background:"#f9fafb"}}>
                <td style={{padding:"0.6rem 1rem","font-weight":"600"}}>12.5–50mm</td>
                <td style={{padding:"0.6rem 1rem","text-align":"center"}}>0.28 max</td>
                <td style={{padding:"0.6rem 1rem","text-align":"center"}}>0.85–1.20</td>
                <td style={{padding:"0.6rem 1rem","text-align":"center"}}>0.035</td>
                <td style={{padding:"0.6rem 1rem","text-align":"center"}}>0.035</td>
                <td style={{padding:"0.6rem 1rem","text-align":"center"}}>0.15–0.40</td>
              </tr>
              <tr>
                <td style={{padding:"0.6rem 1rem","font-weight":"600"}}>50–200mm</td>
                <td style={{padding:"0.6rem 1rem","text-align":"center"}}>0.31 max</td>
                <td style={{padding:"0.6rem 1rem","text-align":"center"}}>0.85–1.20</td>
                <td style={{padding:"0.6rem 1rem","text-align":"center"}}>0.035</td>
                <td style={{padding:"0.6rem 1rem","text-align":"center"}}>0.035</td>
                <td style={{padding:"0.6rem 1rem","text-align":"center"}}>0.15–0.40</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>
          Applications of SA 516 Carbon Steel Plates
        </h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {icon:"🛢️",title:"Pressure Vessels",desc:"ASME Section VIII Div.1 & 2 coded pressure vessels for petrochemical, refinery, and fertilizer plants."},
            {icon:"⚡",title:"Boilers & Heat Exchangers",desc:"IBR-certified boiler drums, headers, tube sheets, and shell & tube heat exchangers for power plants."},
            {icon:"🏭",title:"Storage Tanks",desc:"API 650/620 atmospheric and low-pressure storage tanks for crude oil, LPG, LNG, and chemical storage."},
            {icon:"🧪",title:"Reactors & Columns",desc:"Process columns, reactors, separators, and scrubbers in refinery and petrochemical service."},
            {icon:"🌊",title:"Shipbuilding",desc:"Hull structures, bulkheads, and deck plates for marine vessels and offshore platforms."},
            {icon:"⚙️",title:"Industrial Equipment",desc:"Fabricated structural components, machine bases, and heavy equipment in cement, mining, and construction."},
          ].map(item => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.25rem"}}>
              <div style={{"font-size":"1.5rem","margin-bottom":"0.5rem"}}>{item.icon}</div>
              <h3 style={{"font-size":"0.95rem","font-weight":"700",color:"#111827","margin-bottom":"0.3rem"}}>{item.title}</h3>
              <p style={{"font-size":"0.85rem",color:"#6b7280","line-height":"1.6",margin:0}}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Available Sizes */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>
          Available Sizes — SA 516 Plate Stock
        </h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem"}}>
            <thead>
              <tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}>
                <th style={{padding:"0.7rem 1rem","text-align":"left"}}>Parameter</th>
                <th style={{padding:"0.7rem 1rem","text-align":"left"}}>Range</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Thickness","6mm to 200mm"],
                ["Width","1000mm, 1500mm, 2000mm, 2500mm, 3000mm"],
                ["Length","Up to 12000mm (cut-to-size available)"],
                ["Condition","As-Rolled, Normalised, Stress Relieved, PWHT"],
                ["Surface","Mill finish, shot blasted, primer coated"],
                ["Testing","UT per SA 435 Level B / SA 578 Level B"],
                ["Certification","MTC EN 10204 3.1/3.2, IBR Form III-C, NACE, HIC"],
                ["Makes","SAIL, AMNS, TATA, JSW, Essar, Imported"],
              ].map((row, i) => (
                <tr style={{background: i % 2 === 0 ? "#fff" : "#f9fafb"}}>
                  <td style={{padding:"0.6rem 1rem","font-weight":"600",color:"#111827"}}>{row[0]}</td>
                  <td style={{padding:"0.6rem 1rem",color:"#374151"}}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>
          Why Choose Creative Metal Industries for SA 516 Plates?
        </h2>
        <ul style={{"list-style":"none",padding:0,display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"2rem"}}>
          {[
            "Ready stock of SA 516 Gr.60/70 in 6mm–150mm at Vadodara warehouse",
            "IBR Form III-C certified plates from SAIL, AMNS approved mills",
            "NACE MR-01-75 compliant + HIC tested material for sour service",
            "Ultrasonic tested (UT) per SA 435/SA 578 — zero defect guarantee",
            "Cut-to-size, flame cutting, shot blasting at our facility",
            "Third-party inspection under DNV, TUV, SGS, BV, LRIS",
            "Complete MTC (EN 10204 3.1/3.2) with chemical + mechanical reports",
            "Pan-India delivery in 2–5 days, export to 50+ countries",
          ].map(point => (
            <li style={{display:"flex",gap:"0.7rem","align-items":"flex-start","font-size":"0.92rem",color:"#374151","line-height":"1.5"}}>
              <span style={{"flex-shrink":"0",color:"#E8821A","font-weight":"700"}}>✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Internal Links */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>
          Related Products
        </h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {[
            {href:"/ss-pipe-supplier-vadodara",label:"SS Pipe Supplier Vadodara"},
            {href:"/carbon-steel-pipe-fittings-vadodara",label:"Carbon Steel Pipe & Fittings"},
            {href:"/nace-hic-steel-plate-supplier-india",label:"NACE HIC Steel Plate"},
            {href:"/tmt-bars-supplier-gujarat",label:"TMT Bars Supplier Gujarat"},
            {href:"/ss-304-316l-pipe-supplier-india",label:"SS 304/316L Pipe India"},
          ].map(link => (
            <a href={link.href} style={{background:"#fff8f0",border:"1px solid #fde8cc","border-radius":"8px",padding:"0.85rem 1rem","font-size":"0.88rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>
              {link.label} →
            </a>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>
          Frequently Asked Questions — SA 516 Plate
        </h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {[
            {q:"What is SA 516 Grade 70 steel plate?",a:"SA 516 Grade 70 is a carbon steel plate designed for moderate and lower temperature pressure vessel service per ASTM A516/ASME SA-516. It has 485-620 MPa tensile strength and is the most widely used plate for pressure vessels, boilers, and storage tanks."},
            {q:"Difference between SA 516 Gr.60 and Gr.70?",a:"Gr.60 has 415-550 MPa tensile strength while Gr.70 has 485-620 MPa. Gr.70 is preferred for higher-pressure applications. Both are weldable and suitable for ASME Section VIII coded vessels."},
            {q:"Do you supply NACE/HIC certified SA 516 plates?",a:"Yes. We stock SA 516 plates compliant with NACE MR-01-75 and HIC tested per NACE TM-0284 for sour service in oil & gas refineries and offshore platforms."},
            {q:"Is IBR certification available?",a:"Yes. We supply IBR Form III-C certified SA 516 plates from SAIL, AMNS and approved mills. Mandatory for boiler fabrication in India."},
            {q:"What thickness range is available?",a:"6mm to 200mm thickness. Standard widths: 1500mm, 2000mm, 2500mm, 3000mm. Lengths up to 12000mm. Cut-to-size available."},
            {q:"Delivery time for SA 516 plates?",a:"Standard sizes: 2-3 days from Vadodara stock. Non-standard: 2-4 weeks from mill. Pan-India delivery and export available."},
            {q:"Which mills manufacture SA 516 in India?",a:"SAIL (Bhilai, Bokaro), AMNS, TATA Steel, JSW Steel, Essar. We are authorised stockists with full MTC documentation."},
          ].map(faq => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}>
              <summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{faq.q}</summary>
              <p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{faq.a}</p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center"}}>
          <h2 style={{"font-size":"1.5rem","font-weight":"800",color:"#fff","margin-bottom":"0.75rem"}}>Need SA 516 Plates?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem","font-size":"0.95rem"}}>
            Get price and availability — same day quotes, pan-India delivery.
          </p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi+I+need+SA+516+plates" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SA 516 Plate Stockist India</p>
        <p>GIDC Makarpura, Vadodara 390010 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a></p>
      </footer>
    </>
  );
}
