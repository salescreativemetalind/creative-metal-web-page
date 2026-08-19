/**
 * /steel-supplier-numaligarh
 * Target: "steel supplier Numaligarh", "NRL refinery pipe",
 * "NE India steel", "BCPL Assam piping"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "API Line Pipes", grades: "API 5L Gr.B to X65, PSL1 & PSL2, NACE MR0175", sizes: "2\" to 48\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B/C, A53, API 5L, IS 3589", sizes: "1/2\" to 48\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, Duplex 2205", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Steel Plates (NACE/HIC)", grades: "SA 516 Gr.60/70 NACE, SA 387 Gr.11/22, HIC Tested", sizes: "6mm to 150mm thick", type: "Hot Rolled (Normalized)", stock: "Ready Stock" },
  { category: "Pipe Fittings & Flanges", grades: "CS A234 WPB, SS 304/316L, Alloy WP11/WP22", sizes: "1/2\" to 48\"", type: "Buttweld, Forged, WN/SO/Blind", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 12\"", type: "Seamless & Welded", stock: "Available" },
  { category: "High Temp Alloys", grades: "Inconel 625, Incoloy 800H/825, Hastelloy C276", sizes: "1/2\" to 8\"", type: "Seamless", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F6E2}\uFE0F", name: "NRL (Numaligarh Refinery)", desc: "Expanding from 3 to 9 MMTPA — massive piping requirement for new CDU, VDU, DHDT, ISOM units. API pipes, alloy steel, SS for India's Northeast refinery expansion" },
  { icon: "\u{1F9EA}", name: "BCPL (Brahmaputra Cracker)", desc: "Petrochemical complex processing natural gas — SS 304/316L for process piping, alloy steel for cracker furnace tubes, NACE materials for gas processing" },
  { icon: "\u26FD", name: "ONGC Assam Operations", desc: "Crude oil and natural gas production — NACE carbon steel for sour service, API line pipes for flow lines, SS for gas processing facilities across Upper Assam" },
  { icon: "\u{1F6E2}\uFE0F", name: "Oil India Limited (OIL)", desc: "India's second-largest E&P company headquartered in Duliajan — API pipes for oil/gas pipelines, NACE CS for production facilities, fittings for gathering stations" },
  { icon: "\u26A1", name: "NEEPCO Power Projects", desc: "Northeast power generation — alloy steel IBR pipes for thermal plants, carbon steel for hydro project penstock, SS for turbine auxiliaries" },
  { icon: "\u{1F3ED}", name: "Tea & General Industry (NE)", desc: "Tea processing, plywood, cement, food processing — SS for tea machinery, CS for factory utilities, structural steel for industrial construction across Northeast" },
];

const FAQS = [
  { q: "Who supplies steel pipes to Numaligarh Refinery (NRL) in Assam?", a: "Creative Metal Industries (CMI) is an experienced supplier of refinery-grade piping materials for Northeast India including NRL Numaligarh. We supply API 5L PSL2 line pipes, NACE-compliant carbon steel, alloy steel P5/P9/P11/P22/P91 for high-temperature service, SS 316L/321 for process piping, and duplex for corrosive environments. With NRL's massive expansion from 3 to 9 MMTPA underway, the piping material demand is unprecedented — CMI's 2000+ tonne ready stock ensures reliable supply despite the distance." },
  { q: "How long does delivery take to Numaligarh, Assam from Vadodara?", a: "Delivery to Numaligarh takes 5-6 days from our Vadodara warehouse (approximately 2,500 km via NH27 through Bihar and West Bengal, then Assam). While the distance is significant, we have established logistics routes to Northeast India and ensure safe transit of heavy piping materials. For urgent NRL expansion or ONGC/OIL shutdown requirements, we coordinate dedicated full-truck-load shipments with experienced transporters familiar with NE India routes." },
  { q: "Can you supply materials for NRL's 9 MMTPA expansion project?", a: "Absolutely. NRL's expansion from 3 to 9 MMTPA is one of India's largest ongoing refinery projects, requiring thousands of tonnes of piping materials. CMI can support this with bulk supply of API line pipes, alloy steel (P5/P9/P11/P22) for reactors and heaters, NACE-compliant CS for sour service, SS for process piping, and pressure vessel plates. We execute phased delivery schedules aligned with erection timelines, with all materials pre-inspected and documentation ready for NRL's quality acceptance." },
  { q: "Do you supply NACE materials for ONGC/OIL operations in Assam?", a: "Yes. Assam's oil and gas fields produce sour crude requiring NACE MR0175/ISO 15156 compliant piping. We supply NACE carbon steel pipes with restricted chemistry (max 22 HRC hardness) for flow lines and gathering systems, API 5L PSL2 for cross-country pipelines, SS 316L for gas processing facilities, and duplex for high-chloride produced water handling. Complete NACE compliance documentation, HIC/SSC test reports, and material traceability provided for every consignment." },
  { q: "What is the advantage of buying from CMI for Northeast India projects?", a: "Despite the 2,500 km distance, CMI offers significant advantages for NE India: ready stock eliminates 3-4 month mill lead times critical for remote locations, competitive Gujarat pricing (India's piping hub), complete documentation reducing site-level QA delays, experience with NE India logistics and transport challenges, and ability to consolidate multiple material grades in single shipments reducing freight costs. For NRL, BCPL, ONGC, and OIL — we're a proven single-source supplier for all piping needs." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-numaligarh#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Numaligarh","description":"Steel and pipe supplier for NRL Numaligarh Refinery expansion, BCPL, ONGC, OIL in Northeast India. 5-6 day delivery from Vadodara.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-numaligarh","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Numaligarh","containedInPlace":{"@type":"State","name":"Assam"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Numaligarh","item":"https://www.creativemetalind.com/steel-supplier-numaligarh"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierNumaligarh() {
  return (
    <>
      <Title>Steel Supplier Numaligarh | NRL Refinery Pipes | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Numaligarh — API pipes, alloy steel for NRL refinery expansion, ONGC & OIL Assam. 5-6 day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-numaligarh" />
      <Meta property="og:title" content="Steel Supplier Numaligarh | NRL Refinery & NE India Pipes | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Numaligarh — refinery piping for NRL expansion, ONGC, OIL. Northeast India supply from CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-numaligarh" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Numaligarh | NRL Refinery Pipes | CMI" />
      <Meta name="twitter:description" content="Steel supplier Numaligarh — API pipes, alloy steel for NRL expansion and NE India." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Numaligarh" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Numaligarh</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Numaligarh — NRL Refinery Expansion, ONGC &amp; Northeast India Piping
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is a dependable <strong>steel supplier for Numaligarh</strong> and Northeast India's oil, gas, and petrochemical sector. <strong>Numaligarh Refinery Limited (NRL)</strong> is undergoing India's most ambitious refinery expansion — tripling capacity from <strong>3 to 9 MMTPA</strong> — creating massive demand for API line pipes, alloy steel, NACE materials, and stainless steel process piping. Combined with <strong>BCPL's petrochemical complex</strong>, ONGC's extensive Assam operations, and Oil India Limited's production facilities, the region represents a significant piping material market. CMI's 2000+ tonne Vadodara warehouse and established NE India logistics enable <strong>5-6 day delivery</strong> with complete refinery-grade documentation — eliminating the 3-4 month mill lead times that can cripple remote project schedules.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes, Plates &amp; Alloys for Numaligarh</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Northeast India Projects Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>NRL expansion specialist:</strong> Complete API, alloy, SS range for 9 MMTPA expansion — CDU, VDU, DHDT, ISOM, SRU piping materials ready</li>
            <li><strong>Ready stock eliminates delays:</strong> No 3-4 month mill lead times — critical advantage for remote NE India where logistics add extra time</li>
            <li><strong>NACE/sour service expertise:</strong> Assam's crude is high-sulphur — NACE MR0175 compliant materials with complete HIC/SSC documentation</li>
            <li><strong>Established NE logistics:</strong> Proven transport routes to Assam via Siliguri corridor — experienced with NE India delivery challenges</li>
            <li><strong>Single-source convenience:</strong> All piping grades (CS, alloy, SS, duplex, exotic) in one order — reduces multiple vendor coordination for remote projects</li>
            <li><strong>Gujarat pricing advantage:</strong> Vadodara is India's piping hub — competitive factory-gate rates even after transport to NE India</li>
            <li><strong>Bulk project capability:</strong> 500+ tonne project orders with phased delivery matching erection schedule for NRL expansion</li>
            <li><strong>Complete documentation:</strong> Pre-inspected materials with all QA documents — minimizes site-level rejection and rework in remote locations</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Numaligarh &amp; Northeast India</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Northeast India</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["NRL Numaligarh","BCPL Dibrugarh","ONGC Nazira","OIL Duliajan","Guwahati Industrial","Bongaigaon Refinery","Noonmati Refinery","Jorhat Tea Belt","Tinsukia Oil Fields","Silchar Industrial","Nagaland Projects","Meghalaya Cement"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>NRL Expansion &amp; Northeast Oil Sector — Piping Material Solutions</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          The Numaligarh Refinery expansion is transforming Assam into a major refining hub, while BCPL's petrochemical complex adds polymer and chemical production capacity. These projects demand <strong>API 5L X52-X65 PSL2 pipes</strong> for crude pipeline from Paradip to Numaligarh (1,600+ km), <strong>alloy steel A335 P5/P9/P11</strong> for high-temperature reactor piping, <strong>P22/P91</strong> for hydrogen generation and hydrocracker units, <strong>NACE-compliant carbon steel</strong> for sour crude processing, <strong>SS 316L/321</strong> for process and utility piping, and <strong>duplex 2205</strong> for produced water systems. Creative Metal Industries provides all these grades from ready stock, with complete documentation meeting NRL and EIL (Engineers India Limited) specifications. For ONGC and OIL's production operations across Upper Assam's oil fields, we supply API line pipes, NACE fittings, and maintenance materials with the reliability that remote-location operations demand.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Numaligarh</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Refinery Pipes in Northeast India?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>API Pipes, Alloy Steel, NACE Materials — Ready stock for NRL, ONGC, OIL projects.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/nace-hic-steel-plate-supplier-india",label:"NACE HIC Steel Plate Supplier"},
            {href:"/steel-supplier-paradip",label:"Steel Supplier Paradip"},
            {href:"/steel-pipe-supplier-kolkata",label:"Steel Pipe Supplier Kolkata"},
            {href:"/steel-supplier-haldia",label:"Steel Supplier Haldia"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-supplier-numaligarh" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Numaligarh | NRL Refinery Pipes | Northeast India | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
