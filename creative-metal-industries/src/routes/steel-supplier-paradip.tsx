/**
 * /steel-supplier-paradip
 * Target: "steel supplier Paradip", "refinery pipe Paradip",
 * "IOCL Odisha", "API pipe Paradip port"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "API Line Pipes", grades: "API 5L Gr.B to X70, PSL1 & PSL2, NACE MR0175", sizes: "2\" to 60\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B/C, A53, IS 3589, NACE compliant", sizes: "1/2\" to 48\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 904L, Duplex 2205", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "NACE/HIC Steel Plates", grades: "SA 516 Gr.60/70 NACE, SA 387 Gr.11/22, HIC Tested", sizes: "6mm to 150mm thick", type: "Hot Rolled (Normalized)", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L, CS A234 WPB, Alloy WP11/WP22", sizes: "1/2\" to 48\"", type: "Buttweld, Forged, WN/SO/Blind", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507, Lean Duplex 2304", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Available" },
  { category: "Exotic Alloys", grades: "Inconel 625, Hastelloy C276, Monel 400, Incoloy 825", sizes: "1/2\" to 10\"", type: "Seamless", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F6E2}\uFE0F", name: "IOCL Paradip Refinery (15 MMTPA)", desc: "India's newest and one of the largest refineries — API pipes, NACE CS, alloy steel for crude distillation, hydrotreaters, and fluid catalytic cracker units" },
  { icon: "\u{1F6A2}", name: "Paradip Port Trust", desc: "India's largest port by cargo volume — structural steel, marine-grade SS, carbon steel pipes for port infrastructure, jetty maintenance, and cargo handling" },
  { icon: "\u{1F9EA}", name: "IFFCO Paradip (Fertilizer)", desc: "Indian Farmers Fertiliser Cooperative — SS 304/316L for ammonia/urea service, alloy pipes for reformer tubes, NACE materials for sour gas handling" },
  { icon: "\u{1F4A7}", name: "PPL (Paradeep Phosphates)", desc: "Phosphatic fertilizer complex — SS for acid service, CS pipes for utilities, corrosion-resistant alloys for phosphoric acid production systems" },
  { icon: "\u26A1", name: "Power Plants (Odisha Grid)", desc: "Captive and grid power stations — alloy steel P11/P22 for boilers, IBR pipes, carbon steel BOP piping for Paradip area thermal plants" },
  { icon: "\u{1F3ED}", name: "Petrochemical & Chemical Zone", desc: "Downstream petrochemical units near refinery — process piping in CS/SS/alloy, pressure vessel plates, high-temperature and corrosion-resistant materials" },
];

const FAQS = [
  { q: "Who is the best steel supplier for IOCL Paradip Refinery?", a: "Creative Metal Industries (CMI) is an established supplier of piping materials for refinery projects including IOCL Paradip. We supply API 5L PSL2 line pipes, NACE MR0175 compliant carbon steel, alloy steel P5/P9/P11/P22 for high-temperature service, SS 316L/321 for process piping, and duplex steel for corrosive environments. Our ready stock of 2000+ tonnes ensures fast delivery for both new construction and shutdown/turnaround maintenance at India's newest mega refinery." },
  { q: "How fast can refinery-grade pipes be delivered to Paradip, Odisha?", a: "Delivery to Paradip takes 3-4 days from our Vadodara warehouse (approximately 1,700 km via NH49/NH16 route through Raipur-Sambalpur corridor). For refinery shutdown emergencies and turnaround projects where downtime costs crores per day, we offer priority dispatch within hours. We have extensive experience supplying to Odisha's industrial belt and maintain reliable transport connections to Paradip port area." },
  { q: "Do you supply NACE-compliant materials for Paradip Refinery?", a: "Yes, NACE compliance is our core expertise. For IOCL Paradip's sour crude processing, we supply NACE MR0175/ISO 15156 compliant materials including carbon steel pipes with restricted chemistry and controlled hardness (max 22 HRC), HIC-tested plates SA 516 Gr.70, alloy steel with PWHT documentation, SS 316L with ferrite control, and duplex 2205 for high-chloride environments. Complete documentation including NACE compliance certificates, HIC/SSC test reports, and material traceability." },
  { q: "Can you support IOCL Paradip refinery shutdown/turnaround?", a: "Absolutely. Refinery turnarounds require massive material quantities in very short timeframes. CMI maintains ready stock specifically for shutdown support — pre-inspected pipes, fittings, flanges, and plates in refinery-grade materials. We can mobilize 50-100 tonnes within 48 hours for turnaround projects. Our materials come pre-certified with all required documentation (MTCs, NACE compliance, dimensional reports) to avoid delays in refinery QA/QC acceptance process." },
  { q: "What materials do you supply for Paradip Port infrastructure?", a: "For Paradip Port Trust's infrastructure and maintenance needs, we supply structural carbon steel pipes and sections for jetty construction, marine-grade SS 316L for corrosion resistance in saltwater environment, API line pipes for fuel handling facilities, galvanized pipes for utilities, and heavy plates for fabrication of cargo handling equipment. All materials supplied with proper certifications meeting port authority specifications and marine environment corrosion standards." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-paradip#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Paradip","description":"Steel and pipe supplier for IOCL Paradip Refinery, Paradip Port, IFFCO. API pipes, NACE materials. 3-4 day delivery from Vadodara.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-paradip","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Paradip","containedInPlace":{"@type":"State","name":"Odisha"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Paradip","item":"https://www.creativemetalind.com/steel-supplier-paradip"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierParadip() {
  return (
    <>
      <Title>Steel Supplier Paradip | IOCL Refinery Pipes | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Paradip — API pipes, NACE materials for IOCL refinery, port infrastructure. 3-4 day delivery from Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-paradip" />
      <Meta property="og:title" content="Steel Supplier Paradip | IOCL Refinery & Port Pipes | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Paradip — API pipes, NACE CS, alloy steel for IOCL refinery and Paradip Port. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-paradip" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Paradip | IOCL Refinery Pipes | CMI" />
      <Meta name="twitter:description" content="Steel supplier Paradip — API pipes, NACE materials for IOCL refinery and port." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Paradip" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Paradip</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Paradip — IOCL Refinery Pipes, NACE Materials &amp; Port Infrastructure
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is a trusted <strong>steel supplier for Paradip</strong>, serving India's newest mega refinery — <strong>IOCL Paradip (15 MMTPA capacity)</strong> — along with Paradip Port (India's largest by cargo volume), IFFCO fertilizer, and Paradeep Phosphates. Paradip has transformed into Odisha's premier industrial hub with massive demand for <strong>API line pipes, NACE-compliant carbon steel, alloy steel, and corrosion-resistant alloys</strong>. Our 2000+ tonne Vadodara warehouse enables <strong>3-4 day delivery</strong> of refinery-grade piping materials with complete documentation. Whether it's new construction piping for IOCL's downstream units, shutdown/turnaround support, or port infrastructure steel — CMI delivers the quality and speed that Paradip's heavy industries demand.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes, Plates &amp; Steel for Paradip</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Paradip Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>IOCL refinery specialist:</strong> Complete range of API 5L PSL2, NACE CS, alloy steel, SS — proven supply track record for India's refinery projects</li>
            <li><strong>NACE/HIC compliance:</strong> MR0175/ISO 15156 certified materials with HIC/SSC testing for sour crude processing — mandatory for IOCL Paradip</li>
            <li><strong>Shutdown/turnaround support:</strong> 50-100 tonnes mobilized within 48 hours — pre-inspected, pre-certified materials for minimum turnaround time</li>
            <li><strong>3-4 day delivery to Paradip:</strong> 1,700 km via Raipur-Sambalpur route — priority dispatch for refinery emergencies</li>
            <li><strong>Complete TPI documentation:</strong> Materials inspected by IOCL-approved agencies — MTCs, dimensional reports, NACE certs ready for QA/QC acceptance</li>
            <li><strong>Bulk project supply:</strong> 500+ tonne project orders executed for refinery construction — phased delivery as per erection schedule</li>
            <li><strong>Port infrastructure steel:</strong> Marine-grade materials for Paradip Port jetty, cargo handling, and fuel terminal infrastructure</li>
            <li><strong>2000+ tonne ready stock:</strong> No mill lead times — critical for refinery where production loss costs crores per day of delay</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Paradip &amp; Odisha Coast</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Paradip &amp; Odisha Industrial Belt</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["IOCL Paradip Refinery","Paradip Port Area","IFFCO Complex","Paradeep Phosphates","Jagatsinghpur District","Cuttack Industrial","Bhubaneswar IDCO","Dhamra Port","Kalinganagar Steel","Angul Aluminium","Jharsuguda Industrial","Talcher Coalfields"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Refinery-Grade Piping Solutions for IOCL Paradip</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          IOCL Paradip is one of India's most modern refineries processing heavy and sour crudes, requiring the highest-grade piping materials. Creative Metal Industries supplies <strong>API 5L X42-X70 PSL2 line pipes</strong> for crude and product transfer, <strong>NACE MR0175 compliant carbon steel</strong> with restricted chemistry for sour service, <strong>alloy steel A335 P5/P9</strong> for catalytic reformer and hydrotreater units, <strong>P11/P22</strong> for hydrogen service and high-temperature piping, <strong>SS 321/347H</strong> for furnace and heater tubes, <strong>duplex 2205</strong> for produced water and high-chloride service, and <strong>Inconel/Hastelloy</strong> for extreme corrosion in sulphur recovery units. Every material is supplied with complete refinery-grade documentation — NACE compliance certificate, HIC/SSC test reports, PMI confirmation, hardness mapping, and full heat traceability from approved mills.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Paradip</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Refinery-Grade Pipes in Paradip?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>API Pipes, NACE CS, Alloy Steel, Duplex — Ready stock. 3-4 day delivery to IOCL Paradip.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/nace-hic-steel-plate-supplier-india",label:"NACE HIC Steel Plate Supplier"},
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/steel-pipe-supplier-bhubaneswar",label:"Steel Pipe Supplier Bhubaneswar"},
            {href:"/steel-supplier-haldia",label:"Steel Supplier Haldia"},
            {href:"/steel-supplier-numaligarh",label:"Steel Supplier Numaligarh"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-supplier-paradip" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Paradip | IOCL Refinery Pipes | NACE Materials | Odisha | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
