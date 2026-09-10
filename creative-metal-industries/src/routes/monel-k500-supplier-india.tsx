/**
 * /monel-k500-supplier-india
 * Target: "Monel K500 round bar supplier India", "Monel K500 bar",
 * "N05500 nickel copper alloy India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "Monel K500 Round Bar (B865)", composition: "65Ni-30Cu-2.7Al-0.6Ti", sizes: "6mm to 300mm dia", schedule: "Hot Rolled / Forged", apps: "Propeller shafts, pump shafts, valve stems", ht: "Age Hardened (595°C)", stock: "Ready Stock" },
  { grade: "Monel K500 Hex Bar (B865)", composition: "UNS N05500", sizes: "10mm to 75mm AF", schedule: "Cold Drawn / Hot Rolled", apps: "Fasteners, bolts, studs for marine", ht: "Age Hardened", stock: "Ready Stock" },
  { grade: "Monel K500 Forging (B865)", composition: "65Ni-30Cu-2.7Al-0.6Ti", sizes: "Custom forgings to 500mm", schedule: "Open Die / Closed Die", apps: "Drill collars, marine hardware, tools", ht: "Solution + Age Hardened", stock: "Available" },
  { grade: "Monel K500 Wire / Spring Wire", composition: "N05500", sizes: "0.5mm to 12mm dia", schedule: "Cold Drawn", apps: "Springs, fasteners, chain links", ht: "Spring Temper / Age Hardened", stock: "Available" },
];

const FAQS = [
  { q: "What is the difference between Monel K500 and Monel 400?", a: "Monel K500 (N05500) is the age-hardenable version of Monel 400 (N04400), with the same base composition of 65% nickel and 30% copper but with additions of 2.7% aluminium and 0.6% titanium that enable precipitation hardening. In the aged condition, K500 achieves yield strength of 690-1000 MPa — roughly 2-3 times stronger than Monel 400's 240 MPa. Monel 400 is supplied in the annealed or cold-worked condition and cannot be heat-treated to higher strength. Both alloys have similar corrosion resistance to seawater, hydrofluoric acid, and deaerated sulphuric acid. Choose K500 when high strength is required (shafts, fasteners, springs), and 400 when formability and weldability are more important." },
  { q: "How is Monel K500 hardened and what is the mechanism?", a: "Monel K500 is hardened through precipitation (age) hardening. The mechanism involves aluminium and titanium atoms combining with nickel to form gamma-prime (γ') Ni3(Al,Ti) precipitates within the nickel-copper matrix during controlled aging. The standard heat treatment is: solution anneal at 980°C (water quench), then age at 595°C for 16 hours (furnace cool to 540°C, hold 6 hours, air cool). This produces a hardness of 25-35 HRC and yield strengths of 690-1000 MPa depending on section size. The precipitates are coherent with the matrix, creating lattice strain that impedes dislocation movement. Larger cross-sections may show lower hardness due to slower cooling rates." },
  { q: "Is Monel K500 resistant to seawater corrosion?", a: "Yes, Monel K500 provides excellent resistance to flowing seawater, brackish water, and marine atmospheres — this is its primary application environment. The 65% nickel and 30% copper composition gives near-immunity to chloride stress corrosion cracking and very low general corrosion rates in seawater (less than 0.025 mm/year). It also resists biofouling better than most stainless steels. K500 is resistant to cavitation erosion due to its high hardness, making it ideal for pump shafts and propeller shafts. However, it can suffer accelerated corrosion in stagnant or low-velocity seawater due to differential aeration — it performs best in flowing conditions." },
  { q: "Is Monel K500 magnetic?", a: "Monel K500 is generally considered non-magnetic in the solution-annealed condition, but can exhibit weak magnetic properties after age hardening depending on the exact composition and heat treatment. The Curie temperature is typically around -50°C to 0°C, meaning it is non-magnetic at normal operating temperatures. This low magnetic permeability (typically μ < 1.01 at 20°C) makes K500 suitable for applications requiring non-magnetic high-strength materials — such as drill collars for MWD/LWD (Measurement/Logging While Drilling) where magnetic interference must be avoided, and instruments in sensitive environments. However, for guaranteed non-magnetic requirements, material should be tested after final heat treatment." },
  { q: "What is the price range for Monel K500 in India?", a: "Monel K500 round bar pricing in India typically ranges from Rs 2,500 to Rs 5,000 per kg depending on diameter, condition (annealed vs aged), quantity, and prevailing nickel/copper market prices. Smaller diameters (below 25mm) and precision-ground bars command higher per-kg pricing. Age-hardened bars ready for direct use carry a slight premium over solution-annealed material. The cost reflects the high nickel and copper content plus the specialized melting and forging required. Compared to Inconel 718, Monel K500 is significantly more economical while offering adequate strength for marine and oil & gas applications. Contact Creative Metal Industries at +91 99982 80619 for current pricing." },
  { q: "What applications use Monel K500 in the oil & gas industry?", a: "In oil & gas, Monel K500 is extensively used for non-magnetic drill collars (essential for MWD/LWD directional drilling tools), pump shafts and impellers in produced water service, valve stems and seats for sour service, blowout preventer components, safety valve springs, and downhole tool components. Its combination of high strength (age-hardened), excellent seawater/brine corrosion resistance, and non-magnetic properties makes it uniquely suited for these demanding applications. Per NACE MR0175, K500 is acceptable for sour service when hardness is controlled below 35 HRC. Creative Metal Industries supplies K500 bars specifically for oil & gas with full hardness certification and NACE compliance documentation." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/monel-k500-supplier-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries","telephone":"+919998280619","address":{"@type":"PostalAddress","streetAddress":"F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Monel K500 Supplier India","item":"https://www.creativemetalind.com/monel-k500-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function MonelK500SupplierIndia() {
  return (
    <>
      <Title>Monel K500 Round Bar Supplier India | Marine | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Monel K500 round bar supplier India — ASTM B865 N05500 age-hardenable nickel-copper alloy. Marine, oil & gas, non-magnetic. Bar 6-300mm dia." />
      <Link rel="canonical" href="https://www.creativemetalind.com/monel-k500-supplier-india" />
      <Meta property="og:title" content="Monel K500 Round Bar Supplier India | N05500 | Marine Grade | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Monel K500 round bar supplier India — N05500 age-hardenable. Marine, oil & gas, non-magnetic drill collars. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/monel-k500-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Monel K500 Supplier India | N05500 | CMI" />
      <Meta name="twitter:description" content="Monel K500 round bar supplier India — age-hardenable, marine grade. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Monel K500 Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Monel K500 Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Monel K500 Round Bar Supplier in India — N05500
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's specialist <strong>Monel K500 round bar supplier</strong> stocking ASTM B865 bars in UNS N05500 age-hardenable nickel-copper alloy. Monel K500 with its 65Ni-30Cu-2.7Al-0.6Ti composition combines the excellent seawater corrosion resistance of Monel 400 with 2-3x higher strength through precipitation hardening. The alloy is non-magnetic, resistant to cavitation erosion, and provides outstanding service in marine, oil & gas, and chemical environments. Widely specified for propeller shafts, pump shafts, drill collars, valve stems, and high-strength fasteners. Ready stock bars 6-300mm diameter at our Vadodara warehouse. As a full-range <strong>Monel K500 pipe supplier</strong>, we also supply <strong>Monel K500 pipe</strong> and tube (ASTM B165-equivalent seamless) on indent for high-strength marine and downhole piping systems.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Monel K500 Product Range — Ready Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Form</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Heat Treatment</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.composition}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.schedule}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.ht}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications & Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM B865 / SB865 (Bar, Rod, Wire)"},
            {label:"Grade",value:"Monel K500 (UNS N05500)"},
            {label:"Forms",value:"Round Bar, Hex Bar, Flat Bar, Forgings, Wire"},
            {label:"Bar Size Range",value:"6mm to 300mm diameter"},
            {label:"Max Service Temp",value:"Up to 480°C (strength decreases above this due to over-aging)"},
            {label:"Yield Strength (Aged)",value:"690-1000 MPa (100-145 ksi)"},
            {label:"Hardness (Aged)",value:"25-35 HRC (NACE limit 35 HRC max)"},
            {label:"Composition",value:"63-70% Ni, 27-33% Cu, 2.3-3.15% Al, 0.35-0.85% Ti"},
            {label:"Magnetic Permeability",value:"< 1.01 at 20°C (non-magnetic)"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, NACE MR0175 hardness tested"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Monel K500 in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Marine hardware:</strong> Propeller shafts, propeller hubs, rudder stocks, winch drums, mooring hardware</li>
            <li><strong>Oil & gas drilling:</strong> Non-magnetic drill collars for MWD/LWD, downhole tools, safety valve springs</li>
            <li><strong>Pump & valve:</strong> Pump shafts, impellers, valve stems, valve seats, doctor blades for paper industry</li>
            <li><strong>Fasteners:</strong> High-strength bolts, studs, and nuts for marine, chemical, and offshore applications</li>
            <li><strong>Springs:</strong> Belleville washers, coil springs, leaf springs for marine and chemical environments</li>
            <li><strong>Chemical processing:</strong> Agitator shafts, scrapers, mixer shafts in caustic and acid service</li>
            <li><strong>Oil production:</strong> ESP (Electric Submersible Pump) shafts, wellhead components, subsea connectors</li>
            <li><strong>Instruments:</strong> Pressure transducer housings, sensor bodies, electronic component enclosures</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy Monel K500 from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Ready stock:</strong> Monel K500 round bars in popular sizes (25mm to 150mm) maintained at Vadodara — no 8-12 week mill wait</li>
          <li><strong>Both conditions available:</strong> Solution annealed (for machining) and age-hardened (ready-to-use) bars in stock</li>
          <li><strong>NACE compliant:</strong> All aged bars tested and certified below 35 HRC per NACE MR0175/ISO 15156 requirements</li>
          <li><strong>Multiple forms:</strong> Round bar, hex bar, flat bar, forgings, and wire — complete product range from single source</li>
          <li><strong>Full documentation:</strong> MTC (EN 10204 3.1/3.2), hardness test report, PMI verification, heat treatment certificate</li>
          <li><strong>Cut-to-size:</strong> Precision band-saw cutting to your required lengths with certified traceability maintained</li>
          <li><strong>Technical guidance:</strong> Advice on age-hardening parameters, machining before/after aging, and alloy selection</li>
          <li><strong>Pan-India + export:</strong> Serving shipyards, oil & gas companies, and marine industries across India and internationally</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Monel K500</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need Monel K500 Round Bar? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. ASTM B865 N05500. Age-hardened & annealed. NACE compliant.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+Monel+K500+bar+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/inconel-600-pipe-supplier-india", label:"Inconel 600 Pipe"},
              {href:"/inconel-718-supplier-india", label:"Inconel 718 Bar & Pipe"},
              {href:"/incoloy-825-pipe-supplier-india", label:"Incoloy 825 Pipe"},
              {href:"/hastelloy-c22-pipe-supplier-india", label:"Hastelloy C22 Pipe"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel 625 Pipe"},
              {href:"/duplex-steel-supplier-vadodara", label:"Duplex Steel"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/monel-k500-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Monel K500 Round Bar Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
