/**
 * /steel-supplier-kandla
 * Target: "steel supplier Kandla", "pipe export Kandla port",
 * "SEZ steel Kandla", "steel supplier Gandhidham"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 904L", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L X42–X70, IS 1239", sizes: "1/2\" to 60\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L Elbows, Tees, Reducers, Flanges", sizes: "1/2\" to 48\"", type: "Buttweld, Forged, WN/SO/Blind", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Available" },
  { category: "Steel Plates", grades: "SA 516 Gr.70, IS 2062, Shipbuilding Grade, NACE", sizes: "6mm to 200mm thick", type: "Hot Rolled", stock: "Available" },
  { category: "Export-Quality Pipes", grades: "ASTM/ASME, API, EN, BS, DIN standards", sizes: "All standard sizes", type: "TPI Certified", stock: "Available" },
  { category: "Structural Steel", grades: "MS Angle, ISMC, ISMB, TMT Fe500D", sizes: "Per IS/EN standards", type: "SAIL / Jindal / Tata", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u{1F6A2}", name: "Kandla Port (Deendayal Port)", desc: "India's busiest cargo port — structural steel, MS piping, API line pipes for port infrastructure and cargo handling equipment" },
  { icon: "\u{1F3ED}", name: "Kandla SEZ (Export Hub)", desc: "India's first and largest SEZ — export-quality pipes, fittings, flanges with international certification for global dispatch" },
  { icon: "\u{1F33F}", name: "IFFCO Kandla", desc: "Major fertilizer complex — SS 316L, alloy pipes for ammonia/urea service, NACE materials for sour gas handling" },
  { icon: "\u{1F4E6}", name: "Pipe & Steel Export", desc: "Kandla is India's top pipe export port — we supply export-grade materials with TPI, packaging, and documentation for overseas shipment" },
  { icon: "\u{1F9C2}", name: "Salt & Chemical Industry", desc: "Kutch salt pans and chemical processing — SS 316L for brine, duplex for chloride resistance, CS for utility piping" },
  { icon: "\u{1F3D7}\uFE0F", name: "Port Infrastructure", desc: "Continuous port expansion — structural steel, piling pipes, MS plates for jetty construction, berth extension, and warehousing" },
];

const FAQS = [
  { q: "Who is the best steel supplier in Kandla/Gandhidham?", a: "Creative Metal Industries (CMI) is a trusted steel supplier serving Kandla port and Gandhidham industrial belt from Vadodara — just 380 km with SAME-DAY delivery. We supply structural steel for port infrastructure, export-quality pipes for SEZ units, SS and alloy for IFFCO fertilizer, and the full range of piping materials. Our Gujarat location, same-state GST advantage, and 2000+ tonne warehouse make us the preferred supplier for Kandla's diverse industrial needs." },
  { q: "How fast can steel be delivered to Kandla from Vadodara?", a: "SAME-DAY delivery — Kandla/Gandhidham is approximately 380 km from our Vadodara warehouse (about 6-7 hours by road). Materials dispatched early morning reach Kandla the same day. For urgent port or IFFCO requirements, we can dispatch within 2 hours of order confirmation. We deliver to Kandla Port area, Gandhidham GIDC, Kandla SEZ, Adipur industrial, and all Kutch district locations including Mundra and Bhuj." },
  { q: "Do you supply export-quality pipes through Kandla SEZ?", a: "Yes, we are a regular supplier of export-quality pipes and fittings to units in Kandla SEZ (India's first and largest Special Economic Zone). We supply materials meeting international standards — ASTM/ASME, API, EN, BS, DIN — with third-party inspection from TUV, Lloyd's, BV, SGS. Complete export documentation provided including packing lists, certificates of origin, material test reports, and customs-compliant paperwork. CT-1 form compatible supply for SEZ transactions." },
  { q: "What materials do you supply for IFFCO Kandla?", a: "For IFFCO Kandla's fertilizer operations, we supply SS 316L pipes and fittings for ammonia and urea service (excellent corrosion resistance), alloy steel pipes for high-temperature reformer and converter systems, carbon steel (NACE compliant) for sour gas handling, duplex 2205 for seawater cooling, and flanges in matching grades. All materials supplied with complete documentation — MTC EN 10204 3.1/3.2, NACE MR0175 compliance, and positive material identification (PMI) reports." },
  { q: "Can you supply structural steel for Kandla Port expansion?", a: "Absolutely. We supply comprehensive structural steel for Kandla Port (Deendayal Port Trust) expansion and maintenance projects. This includes IS 2062 structural plates for fabrication, MS angles/channels/beams for buildings and crane structures, piling pipes (IS 3589) for marine foundations, TMT bars (Fe 500D) for civil works, MS pipes for utility and fire-fighting systems, and wear-resistant plates for material handling equipment. All materials from SAIL, Jindal, Tata — original mill certificates provided." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-kandla#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Kandla","description":"Trusted steel supplier for Kandla Port, Kandla SEZ, IFFCO and Gandhidham industries. Export-quality pipes, structural steel. Same-day delivery from Vadodara.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-kandla","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Kandla","containedInPlace":{"@type":"State","name":"Gujarat"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Kandla","item":"https://www.creativemetalind.com/steel-supplier-kandla"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierKandla() {
  return (
    <>
      <Title>Steel Supplier Kandla | Port & SEZ Export Pipes | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Kandla — export pipes for SEZ, structural steel for port, SS for IFFCO. SAME-DAY delivery from Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-kandla" />
      <Meta property="og:title" content="Steel Supplier Kandla | Port, SEZ & Export Pipes | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Kandla — same-day delivery of export pipes, structural steel for port & SEZ. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-kandla" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Kandla | Port & SEZ Export Pipes | CMI" />
      <Meta name="twitter:description" content="Steel supplier Kandla — same-day delivery, export pipes, structural steel for port." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Kandla" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Kandla</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Kandla — Port, SEZ &amp; Export-Quality Pipes, Same-Day Delivery
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is the go-to <strong>steel supplier for Kandla</strong> port area and Gandhidham industrial belt — <strong>SAME-DAY delivery from Vadodara (380 km)</strong>. Kandla (now Deendayal Port) is India's busiest cargo port by volume, and houses India's first and largest <strong>Special Economic Zone (SEZ)</strong> — a major hub for pipe and steel exports. Combined with <strong>IFFCO's fertilizer complex</strong>, salt/chemical industry, and continuous port expansion, Kandla demands a reliable steel supplier with ready stock and export-grade documentation. Our 2000+ tonne Vadodara warehouse supplies structural steel for port infrastructure, export-quality pipes and fittings for SEZ units, and process piping materials for IFFCO and chemical plants.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes, Fittings &amp; Steel for Kandla</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"700px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Product</th><th style={{padding:"0.7rem 0.8rem"}}>Grades</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Type</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {PRODUCTS.map((p,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{p.category}</td><td style={{padding:"0.6rem 0.8rem"}}>{p.grades}</td><td style={{padding:"0.6rem 0.8rem"}}>{p.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{p.type}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:p.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{p.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Kandla Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>SAME-DAY delivery to Kandla:</strong> 380 km from Vadodara — materials dispatched morning reach Gandhidham/Kandla same day. Fastest in Gujarat</li>
            <li><strong>Export documentation specialist:</strong> International standards (ASTM/ASME/API/EN/BS), TPI from TUV/Lloyd's/BV/SGS, export packing and paperwork</li>
            <li><strong>SEZ-compatible supply:</strong> CT-1 form transactions, duty-free material supply to Kandla SEZ export units, all compliance handled</li>
            <li><strong>Port infrastructure range:</strong> Structural steel, piling pipes, MS plates, TMT bars — complete range for port expansion projects</li>
            <li><strong>IFFCO fertilizer specialist:</strong> SS 316L, NACE materials, alloy pipes for ammonia/urea — complete documentation per fertilizer plant specs</li>
            <li><strong>Pipe export support:</strong> Bulk supply of pipes/fittings/flanges for re-export from Kandla — international quality, competitive pricing</li>
            <li><strong>Same Gujarat state:</strong> No interstate logistics, common GST, faster movement — critical for time-bound port and SEZ projects</li>
            <li><strong>2000+ tonne warehouse:</strong> Ready stock for immediate dispatch — no waiting for mill delivery when port deadlines approach</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Kandla &amp; Gandhidham</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Kandla &amp; Kutch</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Kandla Port (Deendayal)","Kandla SEZ","Gandhidham GIDC","Adipur Industrial","IFFCO Township","Anjar Industrial","Bhuj Industrial","Mundra (nearby)","Nakhatrana","Rapar","Lakhpat Salt Works","Kutch Cement Zone"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Export Hub — Pipes &amp; Steel for International Markets via Kandla</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Kandla is India's premier port for pipe and steel exports, with SEZ units shipping globally. Creative Metal Industries supports this export ecosystem by supplying <strong>international-grade pipes and fittings</strong> meeting ASTM, ASME, API, EN, BS, and DIN standards with full third-party inspection. We provide <strong>export packing</strong> (wooden cases, seaworthy packaging), <strong>documentation</strong> (certificates of origin, fumigation, packing lists), and <strong>TPI reports</strong> from internationally recognized agencies. For SEZ units, we handle CT-1 transactions seamlessly. Our range covers SS seamless and welded pipes, carbon steel ERW and LSAW, alloy steel, duplex, flanges, and fittings — all export-ready from our Vadodara warehouse with same-day dispatch to Kandla for loading.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Kandla</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel in Kandla? Same-Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>Export Pipes, Structural Steel, SS — Ready stock. Same-day from Vadodara to Kandla (380 km).</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/steel-supplier-mundra",label:"Steel Supplier Mundra"},
            {href:"/steel-supplier-jamnagar",label:"Steel Supplier Jamnagar"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe Supplier India"},
            {href:"/carbon-steel-pipe-fittings-vadodara",label:"Carbon Steel Pipe Fittings"},
            {href:"/ss-flanges-supplier-vadodara",label:"SS Flanges Supplier"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <LocationContent slug="kandla" />
      
        <RelatedPages currentPath="/steel-supplier-kandla" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Kandla | Port, SEZ & Export Pipes | Same-Day Delivery | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
