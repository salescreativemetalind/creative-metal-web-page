/**
 * /clad-plate-supplier-india
 * Target: "clad plate supplier India", "explosion bonded plate",
 * "SS clad plate India", "bimetallic plate"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "SS 304L clad on SA 516 Gr.70", method: "Explosion Bonded", thickness: "20-150mm total", cladding: "3mm SS 304L", apps: "Pressure vessels, storage tanks", testing: "UT (SA578-B), Shear, Bend", stock: "Ready Stock" },
  { grade: "SS 316L clad on SA 516 Gr.70", method: "Explosion Bonded", thickness: "25-200mm total", cladding: "3-6mm SS 316L", apps: "Chemical reactors, columns", testing: "UT (SA578-B), Shear, Bend", stock: "Ready Stock" },
  { grade: "Inconel 625 clad on SA 516", method: "Explosion Bonded", thickness: "30-150mm total", cladding: "3mm Inconel 625", apps: "FGD systems, offshore platforms", testing: "UT, Shear, Bend, Dye Penetrant", stock: "Ready Stock" },
  { grade: "Monel 400 clad on SA 516", method: "Roll Bonded", thickness: "20-100mm total", cladding: "2-4mm Monel 400", apps: "Seawater systems, heat exchangers", testing: "UT (SA578-B), Shear, Bend", stock: "Available" },
  { grade: "Titanium Gr.2 clad on SA 516", method: "Explosion Bonded", thickness: "25-120mm total", cladding: "2-3mm Ti Gr.2", apps: "Chemical processing, desalination", testing: "UT, Shear, Bend, Helium Leak", stock: "Available" },
  { grade: "Duplex 2205 clad on SA 516", method: "Explosion Bonded", thickness: "25-150mm total", cladding: "3-6mm Duplex 2205", apps: "Offshore, oil & gas separators", testing: "UT, Shear, Bend, Ferrite Count", stock: "Available" },
];

const FAQS = [
  { q: "What is clad plate and how is it made?", a: "Clad plate (also called bimetallic plate) consists of a corrosion-resistant alloy layer metallurgically bonded to a carbon steel base plate. It combines the strength and economy of carbon steel with the corrosion resistance of expensive alloys. The two main manufacturing methods are explosion bonding (using controlled detonation to achieve atomic-level bonding at the interface) and roll bonding (hot rolling two plates together under extreme pressure). Both methods produce a permanent metallurgical bond that withstands forming, welding, and service conditions without delamination." },
  { q: "What is the difference between explosion bonded and roll bonded clad plate?", a: "Explosion bonding uses controlled explosive energy to create a wavy interface bond at near-ambient temperature — it can join dissimilar metals that cannot be roll bonded (like Titanium to Steel). Roll bonding uses hot rolling under high pressure and temperature to achieve bonding — it's more economical for large production runs of compatible metals like SS-to-CS. Explosion bonded plates typically have higher bond shear strength (>140 MPa) and can produce any combination of metals. Roll bonded plates are limited to metallurgically compatible pairs but offer lower cost per kg for standard combinations like SS 304L or 316L on carbon steel." },
  { q: "Why use clad plate instead of solid alloy plate?", a: "Clad plate offers 40-70% cost savings compared to solid alloy plate of equivalent thickness. For a 50mm thick reactor vessel, using solid Inconel 625 would cost 10-15x more than using a 3mm Inconel 625 clad on 47mm SA 516 Gr.70 base. The clad plate provides identical corrosion resistance on the process-facing side while the carbon steel base provides the structural strength required by ASME design codes. Additional benefits include easier welding (most welding is on the carbon steel side), better availability, and lighter weight compared to solid exotic alloy construction." },
  { q: "What testing is required for clad plates?", a: "Clad plates undergo comprehensive testing to ensure bond integrity: Ultrasonic Testing (UT) per SA 578 Level B to detect unbonded areas (acceptance: >95% bonded area, no single unbonded area >650 mm²), Shear Testing per ASTM A264 (minimum 140 MPa shear strength), Bend Testing to verify bond ductility, and visual examination of the bond interface. Additional tests may include dye penetrant testing of the clad surface, hardness testing across the interface, and chemical analysis to verify no dilution at the bond line. For critical applications, PWHT simulation tests and corrosion tests on the clad layer are also performed." },
  { q: "What are the design advantages of clad plate for pressure vessels?", a: "Clad plate enables ASME Section VIII pressure vessel design with significant advantages: the base metal (SA 516 Gr.70) provides full design strength at lower cost, while the thin clad layer (2-6mm) provides corrosion resistance. Design calculations use base metal allowable stress only — the clad is treated as corrosion allowance. This allows thinner walls compared to using lower-strength alloy plates. Weld design uses strip-lining or weld overlay restoration at seams. The result is a vessel that costs 40-60% less than solid alloy construction while providing equivalent corrosion life, easier fabrication, and simplified inspection during service." },
  { q: "What sizes of clad plate are available from CMI?", a: "Creative Metal Industries stocks clad plates in total thickness from 20mm to 200mm, with cladding thickness of 2-6mm depending on the alloy. Standard plate sizes go up to 3000mm x 12000mm. We maintain ready stock of SS 304L, SS 316L, and Inconel 625 clad plates on SA 516 Gr.60/70 base in common thicknesses. Titanium, Monel, Duplex, and Hastelloy clad plates are available on indent basis with 6-10 week delivery. Custom sizes, special base metals (SA 387 Gr.11/22 for elevated temperature), and NACE MR0175 compliance are available on request. All plates supplied with full documentation including UT mapping report." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"Clad Plate Supplier India — Explosion Bonded & Roll Bonded","description":"Clad plate supplier India — ASTM A263 (SS clad), A265 (Ni alloy clad). SS 304L/316L, Inconel 625, Monel 400, Titanium clad on SA 516 Gr.70. Explosion bonded &amp; roll bonded. 20-200mm thickness. Creative Metal Industries, Vadodara.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"200","highPrice":"1500","unitCode":"KGM","offerCount":"300+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"28","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Clad Plate Supplier India","item":"https://www.creativemetalind.com/clad-plate-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function CladPlateSupplierIndia() {
  return (
    <>
      <Title>Clad Plate Supplier India | Explosion Bonded Plate | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Clad plate supplier India — explosion bonded &amp; roll bonded bimetallic plates. ASTM A263 (SS clad), A265 (Ni alloy clad). SS 304L/316L, Inconel 625, Monel, Titanium clad on SA 516 Gr.70. 20-200mm. Ready stock Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/clad-plate-supplier-india" />
      <Meta property="og:title" content="Clad Plate Supplier India | Explosion Bonded &amp; Roll Bonded | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Clad plate supplier India — SS clad, Inconel clad, Titanium clad on carbon steel. ASTM A263/A265. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/clad-plate-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Clad Plate Supplier India | Explosion Bonded Plate | CMI" />
      <Meta name="twitter:description" content="Clad plate supplier India — bimetallic explosion bonded plates. SS, Inconel, Titanium clad. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Clad Plate Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Clad Plate Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Clad Plate Supplier in India — Explosion Bonded &amp; Roll Bonded
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's trusted <strong>clad plate supplier</strong> stocking explosion bonded and roll bonded bimetallic plates per ASTM A263 (SS clad) and A265 (Nickel alloy clad). Clad plate combines the structural strength of SA 516 Gr.70 carbon steel base with a thin corrosion-resistant cladding of SS 304L, SS 316L, Inconel 625, Monel 400, Titanium, or Duplex 2205 — delivering 40-70% cost savings over solid alloy construction. Ideal for pressure vessels, reactors, heat exchanger tubesheets, FGD systems, and offshore structures. Ready stock from 20mm to 200mm total thickness at our Vadodara warehouse with pan-India delivery.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Clad Plate Grades — Ready Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"900px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade / Combination</th><th style={{padding:"0.7rem 0.8rem"}}>Method</th><th style={{padding:"0.7rem 0.8rem"}}>Total Thickness</th><th style={{padding:"0.7rem 0.8rem"}}>Cladding</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Testing</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.method}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.thickness}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.cladding}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.testing}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard (SS Clad)",value:"ASTM A263 / SA-263 (ASME)"},
            {label:"Standard (Ni Alloy Clad)",value:"ASTM A265 / SA-265 (ASME)"},
            {label:"Base Metal",value:"SA 516 Gr.60 / Gr.70 (Normalized)"},
            {label:"Cladding Thickness",value:"2mm to 6mm (standard 3mm)"},
            {label:"Total Plate Thickness",value:"20mm to 200mm"},
            {label:"Max Plate Size",value:"Up to 3000mm × 12000mm"},
            {label:"Manufacturing Method",value:"Explosion Bonded / Roll Bonded"},
            {label:"UT Testing",value:"SA 578 Level B — Min 95% bonded area"},
            {label:"Shear Strength",value:"Min 140 MPa (ASTM A264 requirement)"},
            {label:"Bend Test",value:"180° bend without delamination"},
            {label:"Bond Integrity",value:"No unbonded area >650 mm² per SA 578"},
            {label:"Documentation",value:"MTC (EN 10204 3.1/3.2), UT Map, Shear & Bend Reports"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Clad Plate in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Pressure vessels:</strong> ASME Section VIII clad vessels for chemical, petrochemical, and refinery service — significant cost savings over solid alloy</li>
            <li><strong>Columns &amp; reactors:</strong> Reactor vessels, distillation columns, and absorbers with corrosion-resistant process-facing surface</li>
            <li><strong>Heat exchangers:</strong> Tubesheets, channel covers, and floating heads in clad construction for aggressive media</li>
            <li><strong>Storage tanks:</strong> Large diameter storage tanks for corrosive chemicals — API 650 clad tank construction</li>
            <li><strong>FGD systems:</strong> Flue gas desulphurization absorber towers, quench sections, and inlet ductwork using Inconel 625 clad</li>
            <li><strong>Offshore structures:</strong> Subsea equipment, risers, and process modules requiring seawater and H₂S resistance</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy Clad Plate from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Ready stock:</strong> SS 304L, SS 316L, and Inconel 625 clad plates available ex-stock Vadodara in common thicknesses</li>
          <li><strong>All combinations:</strong> SS, Inconel, Monel, Titanium, Duplex, Hastelloy cladding on CS/alloy steel base metals</li>
          <li><strong>Full testing &amp; documentation:</strong> UT mapping report (SA 578), shear test, bend test, MTC (EN 10204 3.1/3.2), PMI reports</li>
          <li><strong>ASME compliant:</strong> SA-263/SA-265 material for ASME Section VIII pressure vessel fabrication with U-stamp documentation</li>
          <li><strong>Custom cutting:</strong> Plasma, oxy-fuel, and waterjet cutting to your nesting drawings — circle, ring, and irregular shapes</li>
          <li><strong>Fabrication guidance:</strong> Weld overlay restoration procedures, PWHT recommendations, and cladding repair techniques</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Clad Plate</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"1rem","margin-bottom":"2rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.1rem 1.4rem"}}>
              <summary style={{"font-weight":"700","font-size":"0.95rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary>
              <p style={{"font-size":"0.9rem",color:"#374151","line-height":"1.7","margin-top":"0.75rem","margin-bottom":0}}>{f.a}</p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-top":"3rem"}}>
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need Clad Plates? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock — SS 304L, 316L, Inconel 625 clad. Full UT mapping &amp; test reports. Rs 200-1500/kg.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+clad+plate+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/carbon-steel-sa516-plate-stockist-india", label:"SA 516 Gr.70 Plate"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel 625/600 Pipe"},
              {href:"/duplex-2205-plate-supplier-india", label:"Duplex 2205 Plate"},
              {href:"/titanium-pipe-supplier-india", label:"Titanium Pipe & Tube"},
              {href:"/monel-400-pipe-supplier-india", label:"Monel 400 Pipe"},
              {href:"/nace-hic-steel-plate-supplier-india", label:"NACE HIC Steel Plate"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>

        <RelatedPages currentPath="/clad-plate-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Clad Plate Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="mailto:creativemetalind@gmail.com" style={{color:"#E8821A"}}>creativemetalind@gmail.com</a></p>
      </footer>
    </>
  );
}
