/**
 * /steel-supplier-kakinada
 * Target: "steel supplier Kakinada", "ONGC KG basin pipe",
 * "offshore pipe Kakinada", "deep water port steel"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "API Line Pipes", grades: "API 5L Gr.B to X70, PSL1 & PSL2, NACE MR0175, Sour Service", sizes: "2\" to 60\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 904L, Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L, NACE Compliant", sizes: "1/2\" to 48\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507, 25Cr (Offshore Grade)", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Exotic/Offshore Alloys", grades: "Inconel 625, Hastelloy C276, Monel 400/K500, Incoloy 825, CuNi 90/10", sizes: "1/2\" to 10\"", type: "Seamless", stock: "Available" },
  { category: "SS & CS Fittings/Flanges", grades: "SS 316L, Duplex, CS A234 WPB, A105 Flanges, RTJ, ASME B16.5/16.47", sizes: "1/2\" to 48\"", type: "Buttweld, Forged", stock: "Ready Stock" },
  { category: "Subsea & CRA Pipes", grades: "CRA Clad (SS 316L/Inconel 625), Mechanically Lined Pipe", sizes: "4\" to 24\"", type: "Clad/Lined", stock: "Available" },
  { category: "Offshore Plates & Shapes", grades: "API 2H-50, DNV OS-B101, EH36, DH36, ASTM A572 Gr.50", sizes: "10mm to 100mm thick", type: "Normalized, TMCP", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F6E2}\uFE0F", name: "ONGC KG Basin (Offshore Gas)", desc: "India's largest offshore gas field — API pipes, NACE materials, duplex/super duplex for subsea wellheads, manifolds, and production platforms" },
  { icon: "\u{1F6A2}", name: "Kakinada Deep Water Port", desc: "India's first deep water port supporting offshore operations — marine-grade steel, structural plates for port infrastructure, API pipes for fuel handling" },
  { icon: "\u{1F4A8}", name: "GAIL Gas Pipeline Network", desc: "East-West gas pipeline infrastructure — API 5L X60/X65 LSAW pipes, NACE-compliant materials for natural gas transmission from KG basin" },
  { icon: "\u2693", name: "Offshore Supply Base", desc: "Kakinada offshore supply base (OSB) servicing rigs and platforms — quick-supply of API pipes, fittings, duplex, and NACE materials for emergency offshore needs" },
  { icon: "\u{1F3ED}", name: "GMR Kakinada SEZ", desc: "Special Economic Zone with petrochemical, LNG, and manufacturing — SS pipes, CS for utilities, structural steel for plant construction" },
  { icon: "\u26FD", name: "Oil & Gas Exploration (E&P)", desc: "Exploration and production companies in KG basin — CRA-lined pipes, Inconel 625, super duplex 2507 for high-pressure high-temperature (HPHT) wells" },
];

const FAQS = [
  { q: "Who is the best steel supplier for offshore and oil industry in Kakinada?", a: "Creative Metal Industries (CMI) is a specialist offshore-grade steel supplier serving Kakinada's oil and gas sector. We supply API 5L line pipes (PSL2, NACE), duplex/super duplex for subsea applications, Inconel 625 for HPHT wells, CRA-clad pipes, and NACE-compliant carbon steel — the full range of materials that ONGC KG Basin operations and offshore supply base companies need. Our experience supplying ONGC Hazira, offshore Mumbai High, and petroleum refineries translates directly to Kakinada's offshore requirements. Delivery in 3-4 days." },
  { q: "How fast can offshore-grade pipes be delivered to Kakinada?", a: "3-4 day delivery — Kakinada is approximately 1,400 km from our Vadodara warehouse. We dispatch via dedicated full-truck-load transport reaching Kakinada port area in 3-4 days. For offshore supply base (OSB) emergency requirements where rigs need materials urgently, we can arrange express transport (2-3 days) and coordinate with your supply vessel schedules. For planned platform shutdown projects, we pre-dispatch materials weeks in advance to staging areas at Kakinada OSB." },
  { q: "Do you supply NACE-compliant pipes for ONGC KG Basin?", a: "Yes, NACE MR0175/ISO 15156 compliant materials are our core specialty for KG Basin operations. We supply: API 5L carbon steel (controlled chemistry, max 22 HRC), duplex 2205 (ferrite/austenite ratio certified), super duplex 2507 for high-chloride produced water, Inconel 625 for extreme sour service, and alloy steel with controlled hardness. All materials supplied with NACE compliance certificates, hardness surveys, full chemical analysis, microstructure examination reports, and impact test certificates as mandated for offshore sour gas service." },
  { q: "Can you supply super duplex and CRA pipes for HPHT wells?", a: "Absolutely. High-Pressure High-Temperature (HPHT) wells in KG Basin demand premium materials. We supply: super duplex 2507 (UNS S32750) for production tubing and flowlines, 25Cr super duplex for extreme sour HPHT, Inconel 625 (UNS N06625) for wellhead components and chemical injection, CRA-clad pipes (CS outer + Inconel 625 or 316L inner) for cost-effective corrosion protection, and Monel K500 for downhole applications. All materials with NORSOK qualification, EN 10204 3.2 certificates, and offshore classification documentation." },
  { q: "What documentation do you provide for offshore steel supply to Kakinada?", a: "Comprehensive offshore documentation packages: EN 10204 3.2 certificates (with TPI witness), NACE MR0175 compliance certificates, full chemical analysis and mechanical properties, impact tests (Charpy V-notch at -46°C for offshore), hardness survey (parent metal + HAZ), microstructure examination, PWHT records where applicable, positive material identification (PMI) reports, dimensional inspection reports, NDE reports (UT/RT/PT/MT as applicable), and material traceability from mill heat number to final delivery. Complete documentation in both hard copy and digital format for classification society submission." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-kakinada#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Kakinada (Offshore)","description":"Offshore-grade steel supplier for Kakinada — ONGC KG Basin pipes, NACE materials, duplex, super duplex, Inconel for oil & gas. 3-4 day delivery from Vadodara.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-kakinada","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Kakinada, Andhra Pradesh","containedInPlace":{"@type":"State","name":"Andhra Pradesh"}},"priceRange":"$$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Kakinada","item":"https://www.creativemetalind.com/steel-supplier-kakinada"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierKakinada() {
  return (
    <>
      <Title>Steel Supplier Kakinada | ONGC KG Basin Pipes | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Kakinada — offshore-grade API pipes, NACE materials, duplex for ONGC KG Basin & deep water port. 3-4 day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-kakinada" />
      <Meta property="og:title" content="Steel Supplier Kakinada | ONGC KG Basin & Offshore | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Offshore steel supplier Kakinada — API pipes, NACE, duplex, Inconel for KG Basin oil & gas. 3-4 day delivery from Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-kakinada" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Kakinada | ONGC KG Basin Pipes | CMI" />
      <Meta name="twitter:description" content="Offshore pipe supplier Kakinada — API, NACE, duplex for KG Basin. 3-4 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Kakinada" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Kakinada</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Kakinada — ONGC KG Basin &amp; Offshore-Grade Piping
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is a specialist <strong>offshore-grade steel supplier for Kakinada</strong> — delivering API pipes, NACE-compliant materials, and subsea alloys within <strong>3-4 days from Vadodara</strong>. Kakinada is India's offshore oil and gas capital, serving the <strong>ONGC KG Basin</strong> — the country's largest offshore gas field. The city hosts the <strong>Kakinada Deep Water Port</strong>, an <strong>offshore supply base (OSB)</strong>, <strong>GAIL's gas pipeline infrastructure</strong>, and the <strong>GMR Kakinada SEZ</strong>. This offshore-dominated industrial profile requires the highest-specification materials: <strong>API 5L PSL2 NACE pipes</strong>, <strong>super duplex 2507 for subsea</strong>, <strong>Inconel 625 for HPHT wells</strong>, <strong>CRA-clad pipes for corrosion protection</strong>, and complete offshore documentation packages. CMI's proven expertise supplying ONGC Hazira and offshore Mumbai High operations extends seamlessly to Kakinada's KG Basin requirements.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Offshore &amp; Oil/Gas Pipes for Kakinada</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Kakinada's Offshore Industry Chooses CMI</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>3-4 day delivery to Kakinada:</strong> Dedicated transport from Vadodara, coordinated with offshore supply vessel schedules for seamless rig-to-platform delivery</li>
            <li><strong>ONGC KG Basin specialist:</strong> NACE MR0175 compliant materials, API PSL2, sour service qualified — exactly what KG Basin's H2S-rich gas demands</li>
            <li><strong>Offshore documentation expertise:</strong> EN 10204 3.2 certificates, classification society compliance (DNV, ABS, LRIS, BV), full traceability documentation packages</li>
            <li><strong>Super duplex & CRA stock:</strong> Super duplex 2507, Inconel 625, CRA-clad pipes in ready stock — no 16-20 week mill lead time for critical offshore spares</li>
            <li><strong>ONGC Hazira experience:</strong> Proven track record supplying ONGC's Hazira Gas Terminal — same quality systems and documentation now serving KG Basin</li>
            <li><strong>Emergency offshore support:</strong> OSB emergency requirements dispatched within hours — express delivery for critical platform/rig shutdown situations</li>
            <li><strong>Pipeline project capacity:</strong> API 5L LSAW up to 60\" for GAIL and IOCL cross-country gas pipeline projects from KG Basin to consumption centres</li>
            <li><strong>Impact tested materials:</strong> Charpy V-notch tested at -46°C for offshore applications — mandatory for subsea and splash zone installations</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Kakinada &amp; KG Basin</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas — Kakinada &amp; East Coast Offshore</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Kakinada Deep Water Port","Kakinada OSB (Offshore Base)","ONGC KG-D6 Block","GMR Kakinada SEZ","GAIL Kakinada Terminal","Rajahmundry (ONGC)","Amalapuram","Machilipatnam Coast","Visakhapatnam (Vizag)","Narsapur Marine","Kakinada Anchorage","East Godavari Fields"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Offshore &amp; Subsea Piping Solutions for KG Basin</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          The Krishna-Godavari Basin presents India's most challenging offshore environments — high-pressure gas wells with significant H2S and CO2 content, deep water installations, and aggressive produced water chemistry. Creative Metal Industries provides materials engineered for these extreme conditions: <strong>API 5L X65 PSL2 NACE</strong> for sour gas flowlines, <strong>super duplex 2507</strong> for produced water systems and chemical injection, <strong>Inconel 625</strong> for subsea wellhead components and extreme corrosion environments, <strong>CRA-clad pipes</strong> (carbon steel outer/Inconel 625 or 316L inner) providing cost-effective corrosion protection for long production lines, <strong>Cu-Ni 90/10</strong> for seawater cooling and fire-fighting systems on platforms, and <strong>offshore structural plates (API 2H-50, EH36)</strong> for jacket and topside construction. Our materials meet NORSOK, DNV, and ONGC specifications — proven offshore quality from a supplier who understands that platform downtime costs crores per day.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Kakinada</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Offshore-Grade Pipes in Kakinada? 3-4 Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>API Pipes, NACE Materials, Super Duplex, Inconel, CRA — Ready stock for KG Basin offshore operations.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/steel-pipe-supplier-vizag",label:"Pipe Supplier Vizag"},
            {href:"/steel-pipe-supplier-chennai",label:"Pipe Supplier Chennai"},
            {href:"/nace-hic-steel-plate-supplier-india",label:"NACE HIC Steel Plate Supplier"},
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier Vadodara"},
            {href:"/inconel-pipe-supplier-india",label:"Inconel Pipe Supplier India"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-supplier-kakinada" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Kakinada | ONGC KG Basin Offshore | API, NACE, Duplex, Inconel | 3-4 Day Delivery | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
