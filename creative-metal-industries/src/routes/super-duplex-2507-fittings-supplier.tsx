/**
 * /super-duplex-2507-fittings-supplier
 * Target: "Super Duplex 2507 fittings supplier India", "S32750 fittings",
 * "super duplex buttweld fittings India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { type: "90° Elbow (LR)", standard: "ASME B16.9", sizes: "1/2\" to 24\"", schedule: "SCH 10S–160", material: "ASTM A815 UNS S32750", stock: "Ready Stock" },
  { type: "45° Elbow", standard: "ASME B16.9", sizes: "1/2\" to 16\"", schedule: "SCH 10S–160", material: "ASTM A815 UNS S32750", stock: "Ready Stock" },
  { type: "Equal Tee", standard: "ASME B16.9", sizes: "1/2\" to 24\"", schedule: "SCH 10S–160", material: "ASTM A815 UNS S32750", stock: "Ready Stock" },
  { type: "Reducing Tee", standard: "ASME B16.9", sizes: "1\" to 16\"", schedule: "SCH 10S–160", material: "ASTM A815 UNS S32750", stock: "Available" },
  { type: "Concentric Reducer", standard: "ASME B16.9", sizes: "1\" to 24\"", schedule: "SCH 10S–160", material: "ASTM A815 UNS S32750", stock: "Ready Stock" },
  { type: "Eccentric Reducer", standard: "ASME B16.9", sizes: "1\" to 16\"", schedule: "SCH 10S–80S", material: "ASTM A815 UNS S32750", stock: "Available" },
  { type: "End Cap", standard: "ASME B16.9", sizes: "1/2\" to 24\"", schedule: "SCH 10S–160", material: "ASTM A815 UNS S32750", stock: "Ready Stock" },
  { type: "Stub End (Lap Joint)", standard: "ASME B16.9/MSS-SP-43", sizes: "1\" to 12\"", schedule: "SCH 10S–40S", material: "ASTM A815 UNS S32750", stock: "Available" },
];

const FAQS = [
  { q: "What is the difference between Super Duplex 2507 fittings and Duplex 2205 fittings?", a: "Super Duplex 2507 fittings (UNS S32750) have significantly higher corrosion resistance with PREN ~42 versus ~35 for Duplex 2205 (S31803). The 2507 grade contains more chromium (25% vs 22%), molybdenum (4% vs 3%), and nitrogen (0.27% vs 0.17%), providing superior pitting, crevice, and stress corrosion cracking resistance. Yield strength is also higher at ~550 MPa vs ~450 MPa. Choose 2507 fittings for seawater, subsea, and high-chloride environments where 2205 falls short." },
  { q: "What standard covers Super Duplex 2507 buttweld fittings?", a: "Super Duplex 2507 buttweld fittings are manufactured per ASTM A815 UNS S32750 (material specification) with dimensions per ASME B16.9. The A815 specification covers wrought ferritic and ferritic-austenitic (duplex/super duplex) fittings manufactured by hot forming from pipe or plate. All fittings must be solution annealed at 1025-1125°C followed by water quenching. Ferrite content must be verified between 35-65%. Creative Metal Industries stocks A815 S32750 fittings with full compliance documentation." },
  { q: "What sizes are available in Super Duplex 2507 fittings?", a: "Creative Metal Industries stocks Super Duplex 2507 buttweld fittings from 1/2 inch (15NB) to 24 inches (600NB) in schedules SCH 10S, 40S, 80S, 120, and 160 per ASME B16.9. Standard elbows, tees, and reducers are readily available up to 12 inches. Larger sizes 14 to 24 inches available with 3-4 week lead time from approved manufacturers. For forged fittings (socket weld/threaded), sizes 1/4 to 4 inches per ASME B16.11 are also stocked." },
  { q: "What welding filler metal is used for Super Duplex 2507 fittings?", a: "For welding Super Duplex 2507 fittings, use over-alloyed filler metal AWS ER2594 (also designated 25.10.4L) or matching composition ER2507. The filler is enriched with nickel (9-10% vs 7% base metal) to promote austenite formation in the weld and achieve the target 35-65% ferrite balance. For SMAW, use E2594-16/17 electrodes. Shielding gas must contain nitrogen (Ar + 2% N₂) on both torch and backing sides to compensate for nitrogen loss during welding." },
  { q: "What testing is performed on Super Duplex 2507 fittings?", a: "Per ASTM A815 and project specifications, testing includes: ferrite content verification (35-65% by point count per ASTM E562 or magnetic method), Charpy V-notch impact test at -46°C (minimum 27J average), ASTM A923 Method C corrosion test (detects sigma/chi phases), intergranular corrosion resistance (ASTM A262 Pr. E), hardness ≤310 HV10 (31 HRC), and PMI. All Super Duplex fittings from CMI come with EN 10204 3.1 MTC showing complete test results." },
  { q: "Can Super Duplex 2507 fittings be used in subsea applications?", a: "Yes, Super Duplex 2507 is one of the preferred materials for subsea piping systems. Its PREN of ~42 exceeds the minimum 40 required by many offshore operators for seawater-wetted surfaces. The fittings must comply with NORSOK MDS D56, NACE MR0175/ISO 15156 for sour service, and DNV-OS-F101 for submarine pipelines. Solution annealing plus water quench is mandatory, with verified ferrite 35-65% and zero detrimental intermetallic phases per A923. CMI supplies NORSOK-qualified super duplex fittings for subsea projects." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"Super Duplex 2507 Buttweld Fittings","description":"Super Duplex 2507 (UNS S32750) buttweld fittings per ASTM A815. PREN ~42. Elbows, tees, reducers, caps. Sizes 1/2\" to 24\". Creative Metal Industries, Vadodara.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"1500","highPrice":"80000","offerCount":"300+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"24","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Super Duplex 2507 Fittings Supplier India","item":"https://www.creativemetalind.com/super-duplex-2507-fittings-supplier"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SuperDuplex2507FittingsSupplier() {
  return (
    <>
      <Title>Super Duplex 2507 Fittings Supplier India | S32750 | ASTM A815 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Super Duplex 2507 fittings supplier India — ASTM A815 UNS S32750. Elbows, tees, reducers, caps. PREN ~42. Sizes 1/2&quot; to 24&quot;. Ready stock Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/super-duplex-2507-fittings-supplier" />
      <Meta property="og:title" content="Super Duplex 2507 Fittings Supplier India | S32750 | ASTM A815 | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Super Duplex 2507 fittings supplier India — PREN ~42, offshore/subsea grade. Elbows, tees, reducers. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/super-duplex-2507-fittings-supplier" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Super Duplex 2507 Fittings Supplier India | S32750 | CMI" />
      <Meta name="twitter:description" content="Super Duplex 2507 fittings supplier India — A815 S32750, PREN ~42. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Super Duplex 2507 Fittings Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Super Duplex 2507 Fittings Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Super Duplex 2507 Fittings Supplier in India — S32750
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's leading <strong>Super Duplex 2507 fittings supplier</strong> stocking ASTM A815 UNS S32750 buttweld elbows, tees, reducers, and caps per ASME B16.9. With a PREN of ~42 and yield strength exceeding 550 MPa, Super Duplex 2507 fittings are the material of choice for offshore oil &amp; gas, subsea pipelines, and aggressive chloride environments. All fittings solution annealed + water quenched with verified 35-65% ferrite. Ready stock from 1/2" to 24", same-day dispatch from Vadodara.
          </p>
        </div>

        {/* Product Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Super Duplex 2507 Fittings — Ready Stock India</h2>
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
            {label:"Material Standard",value:"ASTM A815 UNS S32750 (Super Duplex 2507)"},
            {label:"Dimensional Standard",value:"ASME B16.9 (Buttweld) · MSS-SP-43 · ASME B16.11 (Forged)"},
            {label:"Type",value:"Buttweld Elbows, Tees, Reducers, Caps, Stub Ends"},
            {label:"Size Range",value:"1/2\" to 24\" (15NB to 600NB)"},
            {label:"Schedules",value:"SCH 10S, 40S, 80S, 120, 160"},
            {label:"PREN",value:"~42 (25 + 3.3×4 + 16×0.27 = 42.5)"},
            {label:"Yield Strength",value:"≥550 MPa (80 ksi) minimum"},
            {label:"Composition",value:"25% Cr, 7% Ni, 4% Mo, 0.27% N"},
            {label:"Heat Treatment",value:"Solution Annealed 1025-1125°C + Water Quench"},
            {label:"Testing",value:"ASTM A923 Method C, Ferrite 35-65%, Impact -46°C, PMI"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Super Duplex 2507 Fittings</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Offshore oil & gas:</strong> Topside process piping, production manifolds, HP/HT wellheads</li>
            <li><strong>Subsea systems:</strong> Flowline connections, umbilical terminations, subsea manifolds</li>
            <li><strong>Desalination:</strong> High-pressure RO system connections, brine recirculation piping</li>
            <li><strong>FGD systems:</strong> Wet scrubber piping, absorber tower connections, duct joints</li>
            <li><strong>Chemical processing:</strong> Chloride-rich service, organic acid plants, HCl environments</li>
            <li><strong>Seawater cooling:</strong> Power plant condenser piping, SWRO feed systems</li>
            <li><strong>Pulp & paper:</strong> Bleach plant connections, ClO₂ generation piping</li>
            <li><strong>Mining & minerals:</strong> Phosphoric acid piping, slurry transport, leach circuits</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy Super Duplex 2507 Fittings from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Ready stock:</strong> Elbows, tees, reducers, caps in common sizes — immediate dispatch from Vadodara</li>
          <li><strong>NORSOK qualified:</strong> Material conforming to NORSOK MDS D56 for offshore/subsea applications</li>
          <li><strong>Complete testing:</strong> ASTM A923 Method C, ferrite verification, impact -46°C — zero detrimental phases</li>
          <li><strong>Approved manufacturers:</strong> Sourced from Ulma, Erne, Metalfar, TPS — DNV/BV/LRQA approved</li>
          <li><strong>Full documentation:</strong> MTC EN 10204 3.1/3.2, NACE MR0175 compliance, all test certificates</li>
          <li><strong>Welding support:</strong> ER2594 filler metal available, WPS guidance for field installation</li>
          <li><strong>Pan-India delivery:</strong> Same-day dispatch, 2-5 day delivery anywhere in India</li>
          <li><strong>Export packing:</strong> Wooden box with fumigation, VCI paper — supply to GCC, Europe, Americas</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Super Duplex 2507 Fittings</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need Super Duplex 2507 Fittings? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. Same-day dispatch. NORSOK & NACE compliant.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+Super+Duplex+2507+fittings+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/super-duplex-2507-pipe-supplier", label:"Super Duplex 2507 Pipe"},
              {href:"/super-duplex-2507-flanges-supplier", label:"Super Duplex 2507 Flanges"},
              {href:"/duplex-2205-fittings-supplier-india", label:"Duplex 2205 Fittings"},
              {href:"/duplex-steel-supplier-vadodara", label:"Duplex 2205 Pipe"},
              {href:"/duplex-2205-flanges-supplier-india", label:"Duplex 2205 Flanges"},
              {href:"/duplex-steel-supplier-vadodara", label:"Duplex Steel Supplier Vadodara"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/super-duplex-2507-fittings-supplier" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Super Duplex 2507 Fittings Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
