/**
 * /steel-supplier-dahej
 * Target: "steel supplier Dahej PCPIR", "OPaL pipe Dahej",
 * "chemical Dahej", "petrochemical piping Dahej"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 904L, Duplex 2205", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L X42–X65 (NACE)", sizes: "1/2\" to 60\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91 (IBR)", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "NACE/HIC Steel Plates", grades: "SA 516 Gr.70 NACE, SA 387 Gr.11/22, HIC Tested", sizes: "6mm to 200mm thick", type: "Hot Rolled, Normalized", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507, Lean Duplex", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L Elbows, Tees, Reducers, Flanges", sizes: "1/2\" to 48\"", type: "Buttweld, Forged, WN/SO/Blind", stock: "Ready Stock" },
  { category: "API Line Pipes", grades: "API 5L Gr.B to X70, PSL1 & PSL2, NACE MR0175", sizes: "2\" to 60\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Exotic Alloys", grades: "Inconel 625/800HT, Hastelloy C276, Monel 400, Incoloy 825", sizes: "1/2\" to 10\"", type: "Seamless", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F3ED}", name: "OPaL Petrochemical Complex", desc: "ONGC Petro-additions Ltd dual-feed cracker — NACE CS pipes, SS 321/347 for ethylene service, alloy for high-temperature reactors, duplex for cooling water" },
  { icon: "\u26FD", name: "Dahej PCPIR Zone", desc: "Petroleum Chemical Petrochemical Investment Region — India's largest PCPIR with 400+ chemical/petrochemical units needing NACE piping, SS, exotic alloys" },
  { icon: "\u{1F4A7}", name: "Petronet LNG Terminal", desc: "India's largest LNG terminal (17.5 MMTPA) — cryogenic SS 304L, 9% Ni steel, duplex for seawater intake, NACE pipes for regasification" },
  { icon: "\u{1F9EA}", name: "GIDC SEZ Chemical Units", desc: "200+ chemical and specialty chemical manufacturers — SS 316L/316Ti for corrosive chemicals, Hastelloy for acid service, PTFE-lined piping" },
  { icon: "\u{1F33F}", name: "Fertilizer Plants (GSFC Area)", desc: "GSFC and allied fertilizer units — SS 304/316L for ammonia/urea, alloy P22 for reformers, NACE pipes for sour gas handling" },
  { icon: "\u{1F6A2}", name: "Port & Logistics Infrastructure", desc: "Dahej Port (multi-cargo) and chemical jetties — structural CS, marine-grade SS 316L, duplex for jetty piping, API line pipes for tank farms" },
];

const FAQS = [
  { q: "How fast can CMI deliver steel to Dahej?", a: "SAME-DAY delivery — Dahej is just 80 km from our Vadodara warehouse (approximately 1.5 hours by road via NH48/SH87 through Bharuch). This is our fastest delivery zone! Materials dispatched in the morning reach Dahej before lunch. For OPaL shutdown emergencies or PCPIR plant breakdowns, we can dispatch within 2 hours and deliver the same morning. No other major steel stockist is this close to Dahej — this 80 km proximity is CMI's biggest competitive advantage for Dahej customers." },
  { q: "Do you supply pipes and fittings to OPaL Dahej?", a: "Yes, Creative Metal Industries supplies the full range of piping materials required for OPaL's dual-feed cracker complex. This includes NACE MR0175 compliant carbon steel pipes (A106 Gr.B restricted chemistry) for sour service, SS 321/347 for high-temperature ethylene cracking service, SS 316L for general process piping, alloy steel P5/P9 for heat exchangers, duplex 2205 for produced water and cooling water, and Inconel for extreme corrosion environments. All materials with full MTCs, NACE compliance certificates, and PMI reports." },
  { q: "What NACE-compliant materials do you stock for petrochemical service?", a: "For Dahej's petrochemical sector, we maintain ready stock of NACE MR0175/ISO 15156 compliant materials: carbon steel pipes A106 Gr.B with controlled sulfur (<0.003%) and hardness (max 22 HRC), SA 516 Gr.70 NACE/HIC tested plates, API 5L PSL2 sour service line pipes, alloy steel with restricted hardness, SS 316L (low carbon), duplex 2205 with ferrite-austenite balance certification, and super duplex 2507. Every lot comes with NACE compliance certificate, HIC/SSC test reports where applicable, and complete material traceability." },
  { q: "Can you supply to all units within Dahej PCPIR?", a: "Absolutely. We serve the entire Dahej PCPIR zone including OPaL complex, Petronet LNG terminal, GIDC Phase 1 & 2, Dahej SEZ, and all 400+ chemical/petrochemical units in the investment region. Our coverage extends to nearby industrial areas too — Vilayat GIDC, Ankleshwar GIDC, Bharuch GIDC, Panoli GIDC, Jhagadia GIDC, and Zagadia GIDC. Same-day delivery to all these locations from our Vadodara warehouse (80–120 km range). Single source for all your piping, plates, fittings, and flanges needs." },
  { q: "Why is CMI the best steel supplier choice for Dahej?", a: "Three words: proximity, stock, and specialization. At just 80 km (1.5 hours), we're the closest major steel stockist to Dahej — no supplier in Ahmedabad (200+ km) or Mumbai (400+ km) can match our delivery speed. We maintain 2000+ tonnes of ready stock specifically curated for petrochemical applications — NACE pipes, HIC plates, duplex, exotic alloys. And we specialize in petrochemical-grade materials with full documentation (NACE certificates, HIC/SSC reports, PMI). Same Gujarat state means no interstate hassles, common GST, and faster logistics." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-dahej#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Dahej","description":"Leading steel supplier for Dahej PCPIR, OPaL, Petronet LNG. SAME-DAY delivery from Vadodara (just 80 km!). NACE pipes, SS, alloy, duplex.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-dahej","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Dahej PCPIR, Bharuch District","containedInPlace":{"@type":"State","name":"Gujarat"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Dahej","item":"https://www.creativemetalind.com/steel-supplier-dahej"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierDahej() {
  return (
    <>
      <Title>Steel Supplier Dahej | OPaL &amp; PCPIR Pipes | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Dahej — SAME-DAY delivery! NACE pipes, SS, alloy for OPaL, PCPIR petrochemical. Just 80 km from CMI. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-dahej" />
      <Meta property="og:title" content="Steel Supplier Dahej | OPaL, PCPIR Petrochemical Pipes | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Dahej — SAME-DAY delivery (80 km)! NACE pipes, alloy steel, SS for OPaL & PCPIR petrochemical. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-dahej" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Dahej | OPaL & PCPIR Pipes | CMI" />
      <Meta name="twitter:description" content="Steel supplier Dahej — SAME-DAY delivery (80 km), NACE pipes, alloy steel for OPaL & PCPIR." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Dahej" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Dahej</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Dahej — OPaL, PCPIR &amp; Petrochemical Piping, SAME-DAY Delivery (80 km!)
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is the <strong>closest major steel supplier to Dahej PCPIR</strong> — just <strong>80 km with SAME-DAY delivery in under 1.5 hours!</strong> Dahej in Bharuch district is Gujarat's petrochemical powerhouse, home to <strong>OPaL (ONGC Petro-additions Ltd)</strong> dual-feed cracker, <strong>Petronet LNG</strong> terminal (India's largest), the massive <strong>PCPIR (Petroleum Chemical Petrochemical Investment Region)</strong>, and 400+ chemical units in GIDC SEZ. This concentration of petrochemical industry demands NACE-compliant piping, sour service materials, and exotic alloys — and no stockist can deliver faster than CMI at just 80 km away. When OPaL has a turnaround or any PCPIR unit needs emergency materials, we deliver before lunch.
          </p>
        </div>

        <div style={{background:"linear-gradient(135deg,#fef3c7,#fde68a)",border:"2px solid #f59e0b","border-radius":"10px",padding:"1.2rem 1.5rem","margin-bottom":"2.5rem","text-align":"center"}}>
          <p style={{"font-size":"1rem","font-weight":"800",color:"#92400e",margin:0}}>{"\u26A1"} SAME-DAY DELIVERY — Dahej is just 80 km (1.5 hours) from CMI Vadodara! Fastest steel supply in the PCPIR zone.</p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Petrochemical-Grade Pipes, Plates &amp; Fittings for Dahej</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Dahej PCPIR Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>SAME-DAY delivery in 1.5 hours:</strong> Just 80 km from Vadodara — the closest major steel stockist to Dahej PCPIR. No one else can match this speed!</li>
            <li><strong>NACE/sour service specialist:</strong> MR0175/ISO 15156 compliant CS, alloy steel with controlled hardness — mandatory for OPaL and petrochemical cracker service</li>
            <li><strong>OPaL & petrochemical expertise:</strong> SS 321/347 for ethylene service, NACE CS for sour gas, duplex for cooling, Inconel for extreme environments</li>
            <li><strong>HIC tested plates in stock:</strong> SA 516 Gr.70 NACE/HIC for pressure vessels, reactors, and storage tanks used across PCPIR units</li>
            <li><strong>LNG terminal materials:</strong> Cryogenic SS 304L, 9% Ni steel, duplex for seawater — supporting Petronet LNG operations</li>
            <li><strong>24/7 emergency dispatch:</strong> Plant shutdowns can't wait — we dispatch within 2 hours, deliver to Dahej within 3.5 hours, even on weekends/holidays</li>
            <li><strong>Same Gujarat state:</strong> No interstate complications, common GST, faster documentation and material movement — no delays at check posts</li>
            <li><strong>2000+ tonne ready stock:</strong> No mill lead times — ex-stock availability for NACE pipes, HIC plates, SS, duplex, alloy in most sizes</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Dahej &amp; Bharuch District</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas — Dahej PCPIR &amp; Surrounding Industrial Zones</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["OPaL Complex","Dahej PCPIR Zone","Petronet LNG Terminal","Dahej GIDC Phase 1","Dahej GIDC Phase 2","Dahej SEZ","Vilayat GIDC","Ankleshwar GIDC","Bharuch GIDC","Panoli GIDC","Jhagadia GIDC","Zagadia GIDC"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specialized Petrochemical-Grade Piping for Dahej PCPIR</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Dahej's industrial profile is dominated by petrochemicals, LNG, and specialty chemicals — all requiring specialized piping materials with stringent compliance. Creative Metal Industries supplies <strong>NACE MR0175 compliant carbon steel</strong> for OPaL's sour gas and cracker service (controlled sulfur &lt;0.003%, max 22 HRC hardness), <strong>SS 321/347 for high-temperature ethylene</strong> cracking furnace piping, <strong>HIC-tested SA 516 Gr.70 plates</strong> for pressure vessels and reactors, <strong>API 5L PSL2 NACE line pipes</strong> for gas distribution within PCPIR, <strong>duplex 2205</strong> for cooling water and produced water handling, <strong>cryogenic SS 304L</strong> for Petronet LNG terminal, and <strong>Inconel 625/Hastelloy C276</strong> for extreme acid and chloride environments in chemical units. At just 80 km away, we're your fastest emergency supply partner — one call, delivery before lunch.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Dahej</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel in Dahej? SAME-DAY Delivery — Just 80 km!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>NACE Pipes, HIC Plates, SS, Duplex, Exotic Alloys — Ready stock. Delivered to Dahej PCPIR in 1.5 hours from Vadodara.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/steel-supplier-koyali",label:"Steel Supplier Koyali Refinery"},
            {href:"/steel-supplier-ankleshwar-gidc",label:"Steel Supplier Ankleshwar GIDC"},
            {href:"/steel-supplier-panoli-gidc",label:"Steel Supplier Panoli GIDC"},
            {href:"/nace-hic-steel-plate-supplier-india",label:"NACE HIC Steel Plate Supplier"},
            {href:"/steel-supplier-hazira",label:"Steel Supplier Hazira"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-supplier-dahej" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Dahej | OPaL, PCPIR, Petronet LNG Pipes | SAME-DAY Delivery (80 km) | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
