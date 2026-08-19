/**
 * /steel-supplier-chandigarh
 * Target: "steel supplier Chandigarh", "pipe fittings Punjab Haryana",
 * "SS pipe Chandigarh", "steel pipe Chandigarh"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 202", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L, IS 1239", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304, 316L, 321 — BW & Forged", sizes: "1/2\" to 48\"", type: "Elbows, Tees, Flanges", stock: "Ready Stock" },
  { category: "MS Structural Steel", grades: "IS 2062 E250/E350, TMT Fe500D", sizes: "Angles, Channels, Beams", type: "Hot Rolled", stock: "Ready Stock" },
  { category: "GI Pipes", grades: "IS 1239 (Light/Medium/Heavy), BS 1387", sizes: "1/2\" to 6\"", type: "Galvanized ERW", stock: "Ready Stock" },
  { category: "Steel Plates", grades: "IS 2062, SA 516 Gr.60/70, SA 387", sizes: "6mm to 150mm thick", type: "Hot Rolled", stock: "Available" },
  { category: "Pipe Fittings CS/SS", grades: "CS A234 WPB, SS 304/316L, Alloy", sizes: "1/2\" to 48\"", type: "Buttweld & Forged", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u{1F3ED}", name: "Chandigarh Industrial Phase 1 & 2", desc: "Steel piping, structural steel, MS fittings for manufacturing units, fabrication shops and engineering workshops in Chandigarh Industrial Area" },
  { icon: "\u{1F48A}", name: "Mohali Pharma & IT Sector", desc: "Pharma-grade SS 316L pipes and fittings for pharmaceutical plants, clean-room piping and process equipment in Mohali Phase 8-10" },
  { icon: "\u{1F69C}", name: "Punjab Tractor & Auto", desc: "Alloy steel pipes, hydraulic tubes, precision seamless pipes for tractor manufacturing, auto components and agricultural equipment in Punjab" },
  { icon: "\u{1F527}", name: "Panchkula Engineering", desc: "Carbon steel pipes, MS structural, pipe fittings for engineering companies, tool rooms and light manufacturing units in Panchkula Industrial Area" },
  { icon: "\u{1F35E}", name: "Food Processing Industry", desc: "SS 304/316L hygienic piping, dairy fittings, food-grade tubes for food processing plants across Punjab and Haryana" },
  { icon: "\u26A1", name: "Power Plants Punjab & Haryana", desc: "IBR-approved alloy steel pipes (P11, P22, P91), boiler tubes, high-pressure fittings for thermal power stations in the region" },
];

const FAQS = [
  { q: "Who is the best steel supplier in Chandigarh?", a: "Creative Metal Industries (CMI) is a leading steel supplier serving Chandigarh, Mohali, Panchkula and the wider Punjab-Haryana region since 2012. We supply SS pipes (304, 316L, 321), carbon steel pipes (A106, A53, API 5L), alloy steel pipes (P5-P91 IBR), pipe fittings, flanges, GI pipes, structural steel and steel plates. We serve Industrial Area Phase 1 & 2, Mohali pharma/IT cluster, Panchkula engineering units, Punjab tractor industry and Haryana manufacturing. Delivery from our Vadodara warehouse reaches Chandigarh in just 2 days." },
  { q: "What is the delivery time from Vadodara to Chandigarh?", a: "Delivery from our Vadodara warehouse to Chandigarh is approximately 2 days via road (around 1,100 km via NH48/NH44). We dispatch regularly to North India and have a dedicated transport network covering Chandigarh, Mohali, Panchkula, Derabassi, Baddi, Ludhiana and all major Punjab-Haryana industrial hubs. Express dispatch available for urgent requirements." },
  { q: "Do you supply pharma-grade SS pipes for Mohali?", a: "Yes, we supply pharma-grade stainless steel pipes and fittings specifically for Mohali's pharmaceutical and biotech industry. Available grades include SS 316L (preferred for pharma), SS 304, and SS 321 in seamless and welded types with electropolished finish options. We provide complete documentation including mill test certificates, material traceability and surface finish reports as required by pharma GMP standards." },
  { q: "Can you supply structural steel for construction in Chandigarh?", a: "Absolutely. We supply complete structural steel range for construction projects in Chandigarh and tricity: IS 2062 E250/E350 steel plates, TMT bars (Fe500D), MS angles, channels, I-beams, H-beams, flat bars and hollow sections. Suitable for commercial construction, residential projects, industrial sheds, warehousing and infrastructure development across the Chandigarh tricity region." },
  { q: "What areas in Punjab do you cover for industrial steel supply?", a: "We cover the entire Punjab-Haryana-Chandigarh industrial belt including: Chandigarh Industrial Area Phase 1 & 2, Mohali IT/Pharma hub, Panchkula Industrial, Derabassi Industrial, Baddi Pharma Hub, Ludhiana Cycle/Auto cluster, Amritsar Industrial, Jalandhar Sports/Industry belt, Ambala Engineering cluster, Rajpura Industrial area, and all major industrial zones in Punjab and Haryana." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-chandigarh#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Chandigarh","description":"Leading steel supplier in Chandigarh offering SS pipes, CS pipes, alloy steel pipes, pipe fittings, flanges, GI pipes and structural steel for Punjab-Haryana industries.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-chandigarh","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"City","name":"Chandigarh","containedInPlace":{"@type":"State","name":"Chandigarh (UT)"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Chandigarh","item":"https://www.creativemetalind.com/steel-supplier-chandigarh"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierChandigarh() {
  return (
    <>
      <Title>Steel Supplier Chandigarh | Pipe Fittings Punjab | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Chandigarh — SS pipes, CS pipes, pipe fittings, flanges, GI pipes for Punjab & Haryana industries. Ready stock. 2-day delivery." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-chandigarh" />
      <Meta property="og:title" content="Steel Supplier Chandigarh | Pipe Fittings Punjab Haryana | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Chandigarh — SS pipes, CS pipes, pipe fittings, structural steel. 2-day delivery. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-chandigarh" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Chandigarh | Pipe Fittings Punjab | CMI" />
      <Meta name="twitter:description" content="Steel supplier Chandigarh — SS pipes, pipe fittings, structural steel. 2-day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Chandigarh" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Chandigarh</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Chandigarh — Pipe Fittings, SS Pipes &amp; Structural Steel
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is the trusted <strong>steel supplier in Chandigarh</strong>, delivering stainless steel pipes, carbon steel pipes, alloy steel pipes, pipe fittings, flanges, GI pipes, structural steel and steel plates to the Punjab-Haryana industrial corridor. Chandigarh, the joint capital of Punjab and Haryana, is surrounded by thriving industrial ecosystems — the Industrial Area Phase 1 &amp; 2, Mohali's pharma and IT hub, Panchkula engineering cluster, Punjab's tractor and auto parts industry, and Haryana's food processing sector. CMI serves all these sectors with ready-stock inventory dispatched from our Vadodara warehouse, reaching Chandigarh tricity within <strong>2 days</strong> at competitive mill pricing that consistently beats local market rates for quality and bulk supply.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range for Chandigarh &amp; Punjab-Haryana Industries</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Chandigarh Industries Choose CMI</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>2-day delivery guarantee:</strong> Regular dispatch from Vadodara — consistent 2-day transit to Chandigarh, Mohali, Panchkula and tricity areas</li>
            <li><strong>Pharma-grade SS specialist:</strong> SS 316L pipes with electropolished finish, dairy fittings and clean-room piping for Mohali pharma cluster</li>
            <li><strong>Complete pipe fittings range:</strong> Buttweld elbows, tees, reducers, forged fittings, flanges (WN, SO, blind) in all materials and pressure classes</li>
            <li><strong>IBR-certified alloy steel:</strong> P5, P9, P11, P22, P91 pipes with IBR certification for power plants and boiler applications across Punjab-Haryana</li>
            <li><strong>Structural steel for construction:</strong> IS 2062 plates, TMT bars, angles, channels, beams for Chandigarh's growing infrastructure projects</li>
            <li><strong>Competitive mill pricing:</strong> Direct sourcing eliminates middlemen — 10-15% better rates than local Chandigarh traders for equivalent quality</li>
            <li><strong>Full documentation:</strong> Mill test certificates, IBR forms, chemical composition reports, dimensional inspection — complete traceability</li>
            <li><strong>Punjab-Haryana coverage:</strong> Single supplier for entire region — Chandigarh, Mohali, Panchkula, Derabassi, Baddi, Ludhiana, Ambala, Rajpura</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Chandigarh &amp; Punjab-Haryana</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas — Chandigarh, Punjab &amp; Haryana</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Chandigarh Industrial Area Phase 1","Chandigarh Industrial Area Phase 2","Mohali IT/Pharma Hub","Panchkula Industrial Area","Derabassi Industrial Belt","Baddi Pharma Hub","Dera Bassi","Ludhiana Cycle/Auto Cluster","Amritsar Industrial","Jalandhar Sports/Industry","Ambala Engineering Cluster","Rajpura Industrial Area"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete CMI Product Lines for Chandigarh Region</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          CMI is your single-source steel supplier for all industrial needs in Chandigarh and the Punjab-Haryana belt. Our comprehensive range covers <strong>stainless steel pipes</strong> (304, 316L, 321, 202 — seamless and welded for pharma, food and chemical processing), <strong>carbon steel pipes</strong> (A106, A53, API 5L, IS 1239 for structural and pipeline), <strong>alloy steel pipes</strong> (P5-P91 IBR certified for power plants and boilers), <strong>pipe fittings</strong> (buttweld and forged — elbows, tees, reducers, caps in CS, SS and alloy), <strong>flanges</strong> (WN, SO, blind, plate — class 150 to 2500#), <strong>GI pipes</strong> (IS 1239 for plumbing and water supply), <strong>structural steel</strong> (IS 2062 plates, TMT bars, angles, channels, beams), and <strong>steel plates</strong> (SA 516 Gr.70, SA 387 for pressure vessels). Direct mill pricing, 2-day delivery, complete documentation for all requirements.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Chandigarh</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel in Chandigarh? Get Quote — 2-Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS Pipes, Pipe Fittings, Flanges, Structural Steel — All grades. Ready stock. Fast delivery to Punjab &amp; Haryana.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/steel-pipe-supplier-ludhiana",label:"Steel Pipe Supplier Ludhiana"},
            {href:"/steel-pipe-supplier-delhi",label:"Steel Pipe Supplier Delhi"},
            {href:"/steel-supplier-panipat",label:"Steel Supplier Panipat"},
            {href:"/ss-304-316l-pipe-supplier-india",label:"SS 304/316L Pipe Supplier India"},
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-supplier-chandigarh" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Chandigarh | Pipe Fittings Punjab Haryana | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
