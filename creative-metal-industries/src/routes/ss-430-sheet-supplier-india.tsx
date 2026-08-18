/**
 * /ss-430-sheet-supplier-india
 * Target: "SS 430 ferritic sheet supplier India", "SS 430 sheet",
 * "stainless steel 430 sheet India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "SS 430 (2B Finish)", composition: "17Cr (Ferritic)", sizes: "0.3mm to 6mm", schedule: "Width 1000/1250/1500mm", apps: "Kitchen sinks, appliance panels", ht: "Annealed", stock: "Ready Stock" },
  { grade: "SS 430 (BA Finish)", composition: "17Cr (Ferritic)", sizes: "0.3mm to 2mm", schedule: "Width 1000/1250mm", apps: "Automotive trim, decorative panels", ht: "Bright Annealed", stock: "Ready Stock" },
  { grade: "SS 430 (No.4 Finish)", composition: "17Cr (Ferritic)", sizes: "0.5mm to 3mm", schedule: "Width 1000/1250/1500mm", apps: "Architectural cladding, elevator panels", ht: "Annealed + Polished", stock: "Available" },
  { grade: "SS 430 (Mirror Finish)", composition: "17Cr (Ferritic)", sizes: "0.5mm to 2mm", schedule: "Width 1000/1250mm", apps: "Decorative trim, signage, reflectors", ht: "Annealed + Mirror Polished", stock: "Available" },
];

const FAQS = [
  { q: "What is the difference between SS 430 and SS 304 sheet?", a: "SS 430 is a ferritic stainless steel with 17% chromium and zero nickel, while SS 304 is austenitic with 18% chromium and 8% nickel. The key differences are: SS 430 costs 30-40% less than 304 because it contains no expensive nickel. SS 430 is magnetic while 304 is non-magnetic. However, SS 304 offers better corrosion resistance especially in chloride environments, better formability, and superior weldability. Choose SS 430 for cost-sensitive applications with minimal chloride exposure like kitchen sinks, appliance panels, and automotive trim." },
  { q: "What finishes are available in SS 430 sheet?", a: "Creative Metal Industries stocks SS 430 sheet in four standard finishes: 2B (cold rolled, annealed, pickled — smooth matte finish suitable for general applications), BA (bright annealed — reflective mirror-like finish without polishing), No.4 (brushed/satin — directional grain finish for architectural use), and Mirror (8K — highly reflective polished surface for decorative applications). Custom finishes like hairline (HL) and bead blast are available on request with minimum order quantities." },
  { q: "Is SS 430 sheet weldable?", a: "SS 430 can be welded but requires more care than austenitic grades. Use 309L or 430Nb filler metal. Pre-heat to 150-230°C for thicker sections (above 3mm) and perform post-weld annealing at 750-800°C to restore ductility in the heat-affected zone. Ferritic stainless steels are prone to grain growth in the HAZ which reduces toughness. For thin sheets (below 1.5mm), autogenous TIG welding without filler is common for applications like kitchen sink fabrication. CMI provides welding guidance for all SS 430 applications." },
  { q: "Is SS 430 magnetic? Why does that matter?", a: "Yes, SS 430 is strongly magnetic because of its ferritic (body-centred cubic) crystal structure. This is important for several reasons: magnetic induction cooktops require magnetic cookware — SS 430 works perfectly. Magnetic separation in recycling plants can sort 430 from non-magnetic 304. Some appliance designs use magnetic closures or attachments. In architectural applications, magnetism is neutral. The magnetic property also means SS 430 can be easily identified with a magnet for quality verification." },
  { q: "What is the price of SS 430 sheet per kg in India?", a: "SS 430 sheet prices range from Rs 150-300 per kg depending on thickness, finish, and quantity ordered. The 2B finish is most economical, while mirror finish commands a premium. SS 430 is typically 30-40% cheaper than SS 304 sheet because it contains no nickel — this makes it the preferred choice for cost-sensitive applications. For current pricing, contact Creative Metal Industries at +91 99982 80619. We offer mill-direct pricing with stock from POSCO, Jindal, and imported sources." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"SS 430 Ferritic Sheet","description":"SS 430 ferritic stainless steel sheets per ASTM A240 Type 430. No nickel, cost-effective. Thickness 0.3mm to 6mm. 2B/BA/No.4/Mirror finishes. Creative Metal Industries, Vadodara.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"150","highPrice":"3000","offerCount":"500+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.7","reviewCount":"42","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS 430 Sheet Supplier India","item":"https://www.creativemetalind.com/ss-430-sheet-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Ss430SheetSupplierIndia() {
  return (
    <>
      <Title>SS 430 Sheet Supplier India | Ferritic Stainless Steel | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS 430 ferritic sheet supplier India — ASTM A240 Type 430. No nickel, 30-40% cheaper than 304. Thickness 0.3-6mm. 2B/BA/No.4/Mirror finish. Ready stock Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-430-sheet-supplier-india" />
      <Meta property="og:title" content="SS 430 Ferritic Sheet Supplier India | Cost-Effective Stainless Steel | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS 430 ferritic sheet supplier India — no nickel, lower cost than 304. Multiple finishes available. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-430-sheet-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS 430 Sheet Supplier India | Ferritic | CMI" />
      <Meta name="twitter:description" content="SS 430 ferritic sheet supplier India — no nickel, cost-effective. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS 430 Sheet Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>SS 430 Sheet Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            SS 430 Ferritic Sheet Supplier in India
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's trusted <strong>SS 430 ferritic sheet supplier</strong> stocking ASTM A240 Type 430 stainless steel sheets in all standard finishes. SS 430 contains 17% chromium with zero nickel — making it 30-40% more cost-effective than SS 304 while providing good oxidation resistance up to 815°C intermittent service. Ideal for kitchen sinks, automotive trim, appliance panels, architectural cladding, dishwasher linings, and roofing applications. Available in 2B, BA, No.4, and Mirror finishes from 0.3mm to 6mm thickness at our Vadodara warehouse.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS 430 Sheet Finishes — Ready Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade / Finish</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Thickness</th><th style={{padding:"0.7rem 0.8rem"}}>Width</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Condition</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
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
            {label:"Standard",value:"ASTM A240 / SA240 Type 430"},
            {label:"Grade",value:"SS 430 (UNS S43000), AISI 430"},
            {label:"Type",value:"Cold Rolled Sheet / Coil"},
            {label:"Thickness Range",value:"0.3mm to 6mm"},
            {label:"Width",value:"1000mm, 1250mm, 1500mm (custom slitting available)"},
            {label:"Max Service Temp",value:"Up to 815°C intermittent / 870°C scaling in air"},
            {label:"Composition",value:"16-18% Cr, ≤0.12% C, ≤1.0% Mn, 0% Ni"},
            {label:"Mechanical Properties",value:"UTS 450-600 MPa · YS 205-310 MPa · Elongation ≥22%"},
            {label:"Finishes Available",value:"2B, BA, No.4 (Satin), Mirror (8K), Hairline (HL)"},
            {label:"Certification",value:"MTC EN 10204 3.1, Mill TC, Spectro Analysis Report"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of SS 430 Ferritic Sheet in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Kitchen & appliances:</strong> Kitchen sinks, dishwasher linings, washing machine drums, refrigerator panels</li>
            <li><strong>Automotive:</strong> Trim strips, exhaust system components, hub caps, decorative mouldings</li>
            <li><strong>Architecture:</strong> Cladding panels, elevator doors, column covers, fascia panels, roofing</li>
            <li><strong>Catering equipment:</strong> Counter tops, splashbacks, food preparation surfaces</li>
            <li><strong>Decorative:</strong> Signage, nameplates, display frames, retail fixtures</li>
            <li><strong>Industrial:</strong> Furnace parts, burner components, heat exchanger plates</li>
            <li><strong>Electronics:</strong> Chassis, enclosures, magnetic shielding applications</li>
            <li><strong>Cookware:</strong> Induction-compatible cookware bases, pots, and pan components</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SS 430 Sheet from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>All finishes in stock:</strong> 2B, BA, No.4, Mirror — ready for immediate dispatch from Vadodara</li>
          <li><strong>Cost advantage:</strong> SS 430 has zero nickel content — save 30-40% compared to SS 304 sheet</li>
          <li><strong>Custom slitting:</strong> Coil slitting to your required width from 50mm to 1500mm</li>
          <li><strong>Sheet cutting:</strong> Cut-to-size sheets available — no minimum order for standard sizes</li>
          <li><strong>Multiple sources:</strong> POSCO, Jindal Stainless, TISCO, and imported European/Japanese mills</li>
          <li><strong>Surface quality:</strong> Scratch-free, PVC coated sheets for decorative and architectural applications</li>
          <li><strong>Technical guidance:</strong> Finish selection, formability advice, and corrosion suitability assessment</li>
          <li><strong>Pan-India delivery:</strong> Same-day dispatch with proper wooden pallet packaging to prevent transit damage</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS 430 Sheet</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need SS 430 Ferritic Sheets? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. All finishes available. Same-day dispatch.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+SS+430+sheet+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/ss-410-pipe-supplier-india", label:"SS 410 Martensitic Pipe"},
              {href:"/ss-310-pipe-supplier-india", label:"SS 310 High Temp Pipe"},
              {href:"/ss-904l-pipe-supplier-india", label:"SS 904L Pipe (Acid Resistant)"},
              {href:"/duplex-2205-plate-supplier-india", label:"Duplex 2205 Plate"},
              {href:"/alloy-steel-pipe-supplier-india", label:"Alloy Steel Pipe"},
              {href:"/carbon-steel-sa516-plate-stockist-india", label:"SA516 Carbon Steel Plate"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/ss-430-sheet-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS 430 Ferritic Sheet Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
