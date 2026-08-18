/**
 * /duplex-2205-fittings-supplier-india
 * Target: "Duplex 2205 buttweld fittings supplier India", "F51 fittings",
 * "duplex stainless steel fittings India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { type: "90° Elbow (LR)", standard: "ASME B16.9", sizes: "1/2\" to 48\"", schedule: "SCH 5S–160", material: "ASTM A815 UNS S31803", stock: "Ready Stock" },
  { type: "45° Elbow", standard: "ASME B16.9", sizes: "1/2\" to 24\"", schedule: "SCH 5S–160", material: "ASTM A815 UNS S31803", stock: "Ready Stock" },
  { type: "Equal Tee", standard: "ASME B16.9", sizes: "1/2\" to 48\"", schedule: "SCH 5S–160", material: "ASTM A815 UNS S31803", stock: "Ready Stock" },
  { type: "Reducing Tee", standard: "ASME B16.9", sizes: "1\" to 24\"", schedule: "SCH 10S–160", material: "ASTM A815 UNS S31803", stock: "Available" },
  { type: "Concentric Reducer", standard: "ASME B16.9", sizes: "1\" to 48\"", schedule: "SCH 5S–160", material: "ASTM A815 UNS S31803", stock: "Ready Stock" },
  { type: "Eccentric Reducer", standard: "ASME B16.9", sizes: "1\" to 24\"", schedule: "SCH 10S–80S", material: "ASTM A815 UNS S31803", stock: "Available" },
  { type: "End Cap", standard: "ASME B16.9", sizes: "1/2\" to 24\"", schedule: "SCH 10S–160", material: "ASTM A815 UNS S31803", stock: "Ready Stock" },
  { type: "Cross", standard: "ASME B16.9", sizes: "1/2\" to 12\"", schedule: "SCH 10S–80S", material: "ASTM A815 UNS S31803", stock: "Available" },
];

const FAQS = [
  { q: "What standard covers Duplex 2205 buttweld fittings?", a: "Duplex 2205 buttweld fittings are manufactured per ASTM A815 UNS S31803 (material specification) and ASME B16.9 (dimensional standard). ASTM A815 covers wrought ferritic, austenitic-ferritic (duplex), and martensitic fittings. The key difference from ASTM A403 (which covers austenitic fittings like 304/316L) is the mandatory solution annealing plus water quenching and ferrite content verification. Creative Metal Industries stocks A815 S31803 fittings in all common configurations." },
  { q: "What is the difference between ASTM A815 and ASTM A403 fittings?", a: "ASTM A815 covers duplex and super duplex stainless steel fittings (including S31803, S32205, S32750), while ASTM A403 covers austenitic grades (304, 316L, 321, etc.). A815 fittings require mandatory solution annealing at 1020-1100°C followed by water quenching to achieve proper 50/50 austenite-ferrite balance. A403 fittings may be supplied in as-welded condition for some classes. A815 also mandates ferrite content verification and impact testing at -46°C for duplex grades." },
  { q: "What heat treatment is required for Duplex 2205 fittings?", a: "All Duplex 2205 fittings per ASTM A815 must be solution annealed at 1020-1100°C followed by water quenching (not air cooling). This ensures proper dissolution of sigma phase and intermetallic precipitates, and achieves the target 35-65% ferrite balance. Air cooling is not acceptable as it can allow sigma phase formation in the 600-900°C range during slow cooling. Every fitting from Creative Metal Industries comes with heat treatment certification and ferrite measurement report." },
  { q: "What sizes are available in Duplex 2205 fittings?", a: "Creative Metal Industries stocks Duplex 2205 buttweld fittings from 1/2 inch (15NB) to 48 inches (1200NB) in schedules SCH 5S, 10S, 20S, 40S, 80S, 120, and 160 per ASME B16.9. Standard elbows and tees are available up to 48 inches in common schedules. Reducers available in all standard reducing combinations. For sizes above 24 inches or heavy wall schedules, lead time of 4-6 weeks from approved manufacturers." },
  { q: "What testing is done on Duplex 2205 fittings?", a: "Testing per ASTM A815 includes: ferrite content measurement (35-65% by magnetic methods), Charpy V-notch impact testing at -46°C (minimum 27 Joules), corrosion testing per ASTM A923 Method C (no sigma/chi phase), intergranular corrosion resistance verification, hardness testing (≤293 HV10), and PMI (Positive Material Identification). All fittings supplied with EN 10204 3.1 mill test certificates showing complete mechanical and chemical properties." },
  { q: "Can Duplex 2205 fittings be welded on-site?", a: "Yes, Duplex 2205 fittings are readily weldable with proper procedures. Use ER2209 filler metal (over-alloyed with Ni to promote austenite). Control heat input between 0.5-2.5 kJ/mm. Maximum interpass temperature 150°C. Shield root pass with Ar + 2-5% N₂ backing gas to prevent nitrogen loss. Post-weld heat treatment is not required for standard thickness. Verify weld ferrite 35-65% with ferrite scope. CMI provides qualified WPS and welding guidance for all duplex fitting installations." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"Duplex 2205 Buttweld Fittings","description":"Duplex 2205 (UNS S31803/F51) buttweld fittings per ASTM A815. Elbows, tees, reducers, caps. Sizes 1/2\" to 48\". Creative Metal Industries, Vadodara.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"500","highPrice":"50000","offerCount":"500+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"32","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Duplex 2205 Fittings Supplier India","item":"https://www.creativemetalind.com/duplex-2205-fittings-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Duplex2205FittingsSupplierIndia() {
  return (
    <>
      <Title>Duplex 2205 Buttweld Fittings Supplier India | F51 | ASTM A815 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Duplex 2205 buttweld fittings supplier India — ASTM A815 UNS S31803 F51. Elbows, tees, reducers, caps. Sizes 1/2&quot; to 48&quot;. Ready stock Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/duplex-2205-fittings-supplier-india" />
      <Meta property="og:title" content="Duplex 2205 Buttweld Fittings Supplier India | F51 ASTM A815 | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Duplex 2205 buttweld fittings supplier India — elbows, tees, reducers per ASTM A815. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/duplex-2205-fittings-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Duplex 2205 Fittings Supplier India | F51 | CMI" />
      <Meta name="twitter:description" content="Duplex 2205 buttweld fittings supplier India — A815 S31803. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Duplex 2205 Fittings Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Duplex 2205 Buttweld Fittings Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Duplex 2205 Buttweld Fittings Supplier in India — F51/S31803
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's reliable <strong>Duplex 2205 buttweld fittings supplier</strong> stocking ASTM A815 UNS S31803 elbows, tees, reducers, caps, and crosses per ASME B16.9. Our F51 duplex fittings offer double the yield strength of 316L fittings with a PREN of ~35 for excellent chloride pitting resistance. All fittings solution annealed + water quenched with verified 35-65% ferrite balance. Ready stock from 1/2" to 48" in schedules 5S to 160, dispatched same-day from Vadodara.
          </p>
        </div>

        {/* Product Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Duplex 2205 Buttweld Fittings — Ready Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"750px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Type</th><th style={{padding:"0.7rem 0.8rem"}}>Standard</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Schedule</th><th style={{padding:"0.7rem 0.8rem"}}>Material</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {PRODUCTS.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.type}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.standard}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.schedule}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.material}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications & Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Material Standard",value:"ASTM A815 UNS S31803 / S32205"},
            {label:"Dimensional Standard",value:"ASME B16.9 (Buttweld) · MSS-SP-43"},
            {label:"Grade Designation",value:"F51 (Forged) / WP-S31803 (Wrought)"},
            {label:"Size Range",value:"1/2\" to 48\" (15NB to 1200NB)"},
            {label:"Schedules",value:"SCH 5S, 10S, 20S, 40S, 80S, 120, 160"},
            {label:"Composition",value:"22% Cr, 5% Ni, 3% Mo, 0.14-0.20% N"},
            {label:"Yield Strength",value:"≥450 MPa (65 ksi) minimum"},
            {label:"Heat Treatment",value:"Solution Annealed 1020-1100°C + Water Quench"},
            {label:"Testing",value:"ASTM A923 Method C, Ferrite 35-65%, Impact -46°C"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, PMI, Ferrite Report"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Duplex 2205 Fittings</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Oil & gas:</strong> Process piping, production manifolds, separator systems</li>
            <li><strong>Chemical processing:</strong> Chloride-bearing organic acid environments, caustic service</li>
            <li><strong>Desalination:</strong> High-pressure RO systems, brine handling, evaporator piping</li>
            <li><strong>Pulp & paper:</strong> Digesters, bleach plant piping, chlorine dioxide systems</li>
            <li><strong>Marine:</strong> Seawater cooling systems, ballast piping, offshore platforms</li>
            <li><strong>Food & beverage:</strong> Brewery piping, dairy processing, corrosive wash-down environments</li>
            <li><strong>Water treatment:</strong> Municipal desalination, industrial effluent handling</li>
            <li><strong>Power generation:</strong> FGD wet scrubber piping, cooling water systems</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy Duplex 2205 Fittings from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Ready stock:</strong> 90° elbows, tees, reducers, caps in common sizes — immediate dispatch from Vadodara</li>
          <li><strong>Guaranteed quality:</strong> All fittings solution annealed + water quenched with verified ferrite 35-65%</li>
          <li><strong>ASTM A923 tested:</strong> No sigma/chi phase — certified corrosion resistance for your application</li>
          <li><strong>Approved manufacturers:</strong> Sourced from Ulma, Erne, Metalfar, Fit-Wel — NORSOK qualified</li>
          <li><strong>Full documentation:</strong> MTC EN 10204 3.1/3.2, heat treatment certificate, impact test report, ferrite report</li>
          <li><strong>Size coverage:</strong> Complete range from 1/2" to 48" — no need for multiple suppliers</li>
          <li><strong>Technical guidance:</strong> Help with schedule selection, fitting dimensions, WPS for field welding</li>
          <li><strong>Pan-India + export:</strong> Same-day dispatch India-wide. Export packing for GCC, Africa, SE Asia</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Duplex 2205 Fittings</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need Duplex 2205 Fittings? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. Same-day dispatch. Complete MTC with ferrite report.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+Duplex+2205+fittings+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/duplex-steel-supplier-vadodara", label:"Duplex 2205 Pipe"},
              {href:"/duplex-2205-flanges-supplier-india", label:"Duplex 2205 Flanges"},
              {href:"/duplex-2205-plate-supplier-india", label:"Duplex 2205 Plate"},
              {href:"/super-duplex-2507-fittings-supplier", label:"Super Duplex 2507 Fittings"},
              {href:"/super-duplex-2507-pipe-supplier", label:"Super Duplex 2507 Pipe"},
              {href:"/duplex-steel-supplier-vadodara", label:"Duplex Steel Supplier Vadodara"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/duplex-2205-fittings-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Duplex 2205 Buttweld Fittings Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
