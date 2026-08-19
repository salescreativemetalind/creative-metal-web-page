/**
 * /ss-sheet-supplier-vadodara
 * Target: "SS sheet supplier Vadodara", "stainless steel sheet Vadodara",
 * "SS 304 sheet price", "SS plate supplier Gujarat"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { grade:"SS 304 Sheet (2B Finish)", spec:"ASTM A240", thickness:"0.3mm to 6mm", size:"1000×2000, 1219×2438, 1500×3000 mm", finish:"2B (Mill Finish)", apps:"Kitchen, food processing, general fabrication", stock:"Ready Stock" },
  { grade:"SS 316L Sheet (2B)", spec:"ASTM A240", thickness:"0.5mm to 6mm", size:"1219×2438, 1500×3000 mm", finish:"2B (Mill Finish)", apps:"Pharma, chemical, marine applications", stock:"Ready Stock" },
  { grade:"SS 304 Sheet (No.4 / Hairline)", spec:"ASTM A240", thickness:"0.5mm to 3mm", size:"1219×2438 mm", finish:"No.4 Satin / Hairline", apps:"Elevator panels, architectural cladding", stock:"Ready Stock" },
  { grade:"SS 304 Mirror Finish Sheet", spec:"ASTM A240", thickness:"0.5mm to 2mm", size:"1219×2438 mm", finish:"8K Mirror / Super Mirror", apps:"Decorative panels, signage, interior design", stock:"Available" },
  { grade:"SS 430 Sheet (Ferritic)", spec:"ASTM A240", thickness:"0.4mm to 3mm", size:"1000×2000, 1219×2438 mm", finish:"2B / BA", apps:"Kitchen sinks, washing machines, economy applications", stock:"Ready Stock" },
  { grade:"SS 304 Chequered Plate", spec:"ASTM A240", thickness:"2mm to 8mm", size:"1219×2438, 1500×3000 mm", finish:"Chequered / Tear Drop", apps:"Flooring, staircase treads, ramps, platforms", stock:"Ready Stock" },
];

const FAQS = [
  { q:"What standard sizes of SS sheet are available in Vadodara?", a:"We stock SS sheets in three standard sizes: 1000×2000mm (4×8 ft approx), 1219×2438mm (4×8 ft exact), and 1500×3000mm (5×10 ft). For plates, 1500×6000mm and 2000×6000mm are available on indent. Custom cut-to-size from these master sheets is available with our plasma/shearing facility." },
  { q:"What is the difference between 2B, No.4, and Mirror finish?", a:"2B is the standard mill finish — smooth, slightly reflective, most economical, used for industrial and kitchen applications. No.4 (Satin/Hairline) has a brushed linear grain finish, fingerprint-resistant, used for elevators, architectural panels and appliances. Mirror (8K) is highly polished to a reflective finish, used for decorative panels, signage and luxury interiors. BA (Bright Annealed) falls between 2B and Mirror." },
  { q:"What is the price range of SS sheet in Vadodara?", a:"SS 304 2B sheets range from Rs 200 to 280/kg for standard thicknesses. SS 316L is approximately Rs 300-400/kg. No.4 and Mirror finish sheets carry a 15-30% premium over 2B. SS 430 (ferritic) is more economical at Rs 150-200/kg. Prices fluctuate with nickel prices — call for today&apos;s exact rate." },
  { q:"Can you supply cut-pieces of SS sheet?", a:"Yes. We offer cut-to-size service using shearing machine (up to 6mm), plasma cutting (6mm to 100mm), and laser cutting (for precision shapes). Minimum cut size is 100×100mm. Cut pieces attract a small processing charge over the per-kg rate. Same-day cutting available for standard orders." },
  { q:"What is the difference between SS 304 and SS 430 for kitchen use?", a:"SS 304 (18/8 austenitic) is non-magnetic, highly corrosion resistant, and the industry standard for commercial kitchens, food equipment and hospital use. SS 430 (ferritic) is magnetic, has lower corrosion resistance but is 30-40% cheaper — suitable for residential kitchen accessories, sinks and appliances where severe corrosion is not expected." },
  { q:"What is your minimum order quantity?", a:"No strict MOQ for ready-stock items. You can buy even a single sheet. For cut-pieces, minimum billing of Rs 5,000 applies. For indent/import orders (special sizes or mirror/coloured sheets), MOQ is typically 500 kg or 1 MT depending on the mill. Walk-in customers welcome at our Vadodara warehouse." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/ss-sheet-supplier-vadodara#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries","telephone":"+919998280619","address":{"@type":"PostalAddress","streetAddress":"F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS Sheet Supplier Vadodara","item":"https://www.creativemetalind.com/ss-sheet-supplier-vadodara"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SSSheetSupplierVadodara() {
  return (
    <>
      <Title>SS Sheet Supplier Vadodara | SS 304 Sheet Price | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS sheet supplier Vadodara — stainless steel sheet &amp; plate in SS 304, 316L, 430, 321. ASTM A240/SA240. Thickness 0.3mm to 100mm." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-sheet-supplier-vadodara" />
      <Meta property="og:title" content="SS Sheet Supplier Vadodara | SS 304 Sheet Price | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS sheet supplier Vadodara — SS 304, 316L, 430. ASTM A240. 2B, No.4, Mirror finish. 0.3mm to 100mm. Cut-to-size. Ready stock." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-sheet-supplier-vadodara" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS Sheet Supplier Vadodara | SS 304 Sheet Price | ASTM A240 | CMI" />
      <Meta name="twitter:description" content="SS sheet supplier Vadodara — 304, 316L, 430. 2B, No.4, Mirror. 0.3mm-100mm. Cut-to-size. Ready stock." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS Sheet Supplier Vadodara" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>SS Sheet Supplier Vadodara</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        {/* Hero */}
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            SS Sheet &amp; Plate Supplier in Vadodara — All Finishes &amp; Grades
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is Vadodara's leading <strong>stainless steel sheet and plate supplier</strong> with extensive stock in SS 304, 316L, 430, 321 and 310 grades. We supply sheets as per <strong>ASTM A240/SA240</strong> in all finishes — 2B, BA, No.4 (Satin), Hairline, Mirror (8K). Thickness range 0.3mm to 100mm. Standard widths 1000mm, 1219mm and 1500mm. Cut-to-size facility with plasma, laser and shearing. PVC-coated sheets for scratch-free delivery. Walk-in at our warehouse or call for same-day dispatch across Gujarat.
          </p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap","margin-top":"1.5rem"}}>
            <a href="tel:+919998280619" style={{background:"#E8821A",color:"#fff",padding:"0.8rem 1.5rem","border-radius":"8px","font-weight":"700","text-decoration":"none","font-size":"0.95rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff",padding:"0.8rem 1.5rem","border-radius":"8px","font-weight":"700","text-decoration":"none","font-size":"0.95rem"}}>💬 WhatsApp</a>
          </div>
        </div>

        {/* Product Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS Sheet &amp; Plate Range — Ready Stock Vadodara</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Product</th><th style={{padding:"0.7rem 0.8rem"}}>Standard</th><th style={{padding:"0.7rem 0.8rem"}}>Thickness</th><th style={{padding:"0.7rem 0.8rem"}}>Size (W×L)</th><th style={{padding:"0.7rem 0.8rem"}}>Finish</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {PRODUCTS.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.spec}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.thickness}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.size}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.finish}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications Grid */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Material Standard",value:"ASTM A240 / SA240"},
            {label:"Tolerance Standard",value:"ASTM A480 / SA480"},
            {label:"Sheet Thickness",value:"0.3mm to 6mm"},
            {label:"Plate Thickness",value:"6mm to 100mm"},
            {label:"Width Options",value:"1000mm / 1219mm / 1500mm"},
            {label:"Length Options",value:"2000mm / 2438mm / 2500mm / 3000mm"},
            {label:"Finish — Standard",value:"2B (Cold Rolled, Annealed, Pickled)"},
            {label:"Finish — Decorative",value:"No.4 Satin, Hairline, BA, Mirror (8K)"},
            {label:"Surface Protection",value:"PVC film coated (one/both sides)"},
            {label:"Grades",value:"304, 304L, 316L, 321, 310S, 430, 409"},
            {label:"Testing",value:"Tensile, Bend, Hardness, IGC, PMI"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, NACE on request"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications Grid */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications — Vadodara &amp; Gujarat Industries</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {icon:"\u{1F373}",name:"Kitchen & Hotel Equipment",desc:"Commercial kitchen panels, countertops, chimney hoods, canteen setup for Vadodara hotels"},
            {icon:"\u{1F3DB}\uFE0F",name:"Architectural Cladding",desc:"Building facades, wall panels, column cladding, decorative exteriors across Gujarat"},
            {icon:"\u{1F9EA}",name:"Pharmaceutical Cleanroom",desc:"Clean room panels, pharma equipment lining, reactor vessels for GIDC pharma units"},
            {icon:"\u{1F34E}",name:"Food Processing",desc:"Food-grade tanks, conveyors, processing equipment for Gujarat food industries"},
            {icon:"\u{1F6D7}",name:"Elevator Panels & Decorative",desc:"Lift car interiors, door panels, decorative facades in No.4, Hairline and Mirror finish"},
            {icon:"\u{1F3ED}",name:"Chemical Plant Fabrication",desc:"Storage tanks, vessels, ductwork, scrubber lining for Ankleshwar &amp; Dahej chemical plants"},
          ].map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem","text-align":"center"}}>
              <span style={{"font-size":"1.3rem"}}>{ind.icon}</span>
              <p style={{"font-size":"0.9rem","font-weight":"700",color:"#111827",margin:"0.4rem 0 0.2rem"}}>{ind.name}</p>
              <p style={{"font-size":"0.8rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Buy From CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SS Sheet from CMI Vadodara?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Huge stock of SS 304 2B:</strong> All thicknesses from 0.5mm to 6mm in 4×8 ft and 5×10 ft sizes — pick up anytime from our warehouse</li>
          <li><strong>Cut-to-size facility:</strong> Shearing (up to 6mm), plasma cutting (6-100mm plate), laser cutting for precision — deliver only what you need, no wastage</li>
          <li><strong>All finishes available:</strong> 2B, BA, No.4 Satin, Hairline, Mirror 8K, Coloured (Rose Gold, Black Ti, Champagne) — one-stop shop for every project</li>
          <li><strong>PVC coated sheets:</strong> All decorative finish sheets supplied with PVC film protection — scratch-free delivery guaranteed for architectural projects</li>
          <li><strong>Competitive vs Mumbai market:</strong> Direct sourcing from POSCO, JISCO, Jindal, Salem Steel Plant — Vadodara pricing that beats Mumbai rates</li>
          <li><strong>Walk-in welcome at GIDC:</strong> Visit our warehouse at Vadodara, inspect material, buy on the spot — ideal for fabricators and contractors needing immediate material</li>
        </ul>

        {/* FAQ Accordion */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS Sheet Vadodara</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SS Sheet or Plate in Vadodara? Get Quote Today.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS 304, 316L, 430. 2B, No.4, Mirror. 0.3mm to 100mm. Cut-to-size. PVC coated. MTC included. Ready stock.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote →</a>
          </div>
        </div>

        {/* Related Products */}
        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/ss-round-bar-supplier-vadodara",label:"SS Round Bar Supplier Vadodara"},
            {href:"/ss-pipe-supplier-vadodara",label:"SS Pipe Supplier Vadodara"},
            {href:"/stainless-steel-supplier-vadodara",label:"Full SS Range Vadodara"},
            {href:"/ss-flanges-supplier-vadodara",label:"SS Flanges Vadodara"},
            {href:"/ss-310s-plate-supplier-india",label:"SS 310S Plate Supplier India"},
            {href:"/carbon-steel-sa516-plate-stockist-india",label:"CS SA516 Plate Stockist"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>

        <RelatedPages currentPath="/ss-sheet-supplier-vadodara" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS Sheet &amp; Plate Supplier Vadodara | ASTM A240 | Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001</p>
        <p style={{"margin-top":"0.3rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="mailto:creativemetalind@gmail.com" style={{color:"#E8821A"}}>creativemetalind@gmail.com</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
