/**
 * /steel-supplier-hazira
 * Target: "steel supplier Hazira", "ONGC Hazira pipe",
 * "NTPC Hazira", "industrial steel Hazira Surat"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 904L, Duplex 2205", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L X42–X65, IS 3589", sizes: "1/2\" to 60\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L Elbows, Tees, Reducers, Flanges", sizes: "1/2\" to 48\"", type: "Buttweld, Forged, WN/SO/Blind", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Exotic Alloys", grades: "Inconel 625, Hastelloy C276, Monel 400, Incoloy 825", sizes: "1/2\" to 10\"", type: "Seamless", stock: "Available" },
  { category: "Steel Plates", grades: "SA 516 Gr.70, SA 387 Gr.11/22, NACE, Cladded", sizes: "6mm to 200mm thick", type: "Hot Rolled", stock: "Available" },
  { category: "API Line Pipes", grades: "API 5L Gr.B to X70, PSL1 & PSL2, NACE", sizes: "2\" to 60\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u26FD", name: "ONGC Hazira Gas Terminal", desc: "India's major gas processing complex — NACE-compliant CS/alloy pipes, SS fittings, sour service materials for gas treatment systems" },
  { icon: "\u26A1", name: "NTPC Hazira (Gas Power)", desc: "657 MW combined cycle gas power plant — alloy P22/P91 for HRSG, CS piping for BOP, SS for cooling water systems" },
  { icon: "\u{1F3ED}", name: "Essar Steel (AM/NS) Hazira", desc: "India's largest flat steel producer — SS piping, alloy fittings, carbon steel for plant maintenance and expansion projects" },
  { icon: "\u{1F6A2}", name: "L&T Hazira Shipyard", desc: "Defence and commercial shipbuilding — marine-grade SS 316L, duplex, Cu-Ni, structural steel for vessel construction" },
  { icon: "\u{1F6E2}\uFE0F", name: "Shell / GSPC Gas Processing", desc: "Natural gas processing and distribution — NACE CS pipes, SS 316L, duplex for gas dehydration and sweetening units" },
  { icon: "\u{1F9EA}", name: "KRIBHCO / RCF Fertilizer", desc: "Fertilizer and chemical complex — SS 304/316L for ammonia/urea service, alloy pipes for reformer systems, NACE materials" },
];

const FAQS = [
  { q: "Who is the best steel supplier in Hazira, Gujarat?", a: "Creative Metal Industries (CMI) is the closest major steel supplier to Hazira, located just 250 km away in Vadodara with SAME-DAY delivery capability. We supply NACE-compliant carbon steel pipes for ONGC gas terminal, alloy steel for NTPC power plant, SS and duplex for L&T Shipyard, and the full range of piping materials. Our proximity and ready stock of 2000+ tonnes make us the ideal partner for Hazira's heavy industrial complex." },
  { q: "How fast can steel pipes be delivered to Hazira from Vadodara?", a: "SAME-DAY delivery — Hazira is just 250 km from our Vadodara warehouse (approximately 4 hours by road via NH48 through Surat). Materials dispatched in the morning reach Hazira the same afternoon. This is critical for ONGC shutdown projects and NTPC maintenance where every hour of downtime costs lakhs. We maintain dedicated transport arrangements for Hazira deliveries including weekends and holidays for emergency requirements." },
  { q: "Do you supply NACE-compliant pipes for ONGC Hazira?", a: "Yes, we specialize in NACE MR0175/ISO 15156 compliant materials for ONGC Hazira's sour gas service. Our range includes carbon steel pipes (A106 Gr.B with restricted chemistry), alloy steel with controlled hardness (max 22 HRC), SS 316L for process piping, duplex 2205 for high-chloride environments, and Inconel 625 for extreme corrosion. All materials supplied with NACE compliance certificate, hardness test reports, and complete traceability documentation." },
  { q: "What materials do you supply for L&T Hazira Shipyard?", a: "For L&T Hazira's shipbuilding operations, we supply marine-grade piping materials including SS 316L seamless pipes for vessel piping systems, duplex 2205 for seawater applications, Cu-Ni 90/10 for condenser and heat exchanger tubes, carbon steel structural pipes, and Monel 400 for specialized marine applications. All materials certified to classification society standards (Lloyd's, DNV, BV, IRS) as required. We also supply structural steel plates and sections for hull and superstructure fabrication." },
  { q: "Can you support NTPC Hazira power plant maintenance?", a: "Absolutely. We supply alloy steel pipes for NTPC Hazira's HRSG (Heat Recovery Steam Generator) — P22 for intermediate pressure circuits, P91 for high-pressure/high-temperature sections, and P11 for lower-pressure applications. Carbon steel pipes for balance-of-plant piping, SS 304/316L for cooling water systems, and flanges/fittings in matching grades. All boiler-grade materials supplied with IBR Form III-C certification. Same-day delivery ensures minimal downtime during planned outages." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-hazira#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Hazira","description":"Leading steel supplier for Hazira industrial complex — ONGC, NTPC, L&T Shipyard, Essar Steel. Same-day delivery from Vadodara (250 km).","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-hazira","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Hazira Industrial Area","containedInPlace":{"@type":"State","name":"Gujarat"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Hazira","item":"https://www.creativemetalind.com/steel-supplier-hazira"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierHazira() {
  return (
    <>
      <Title>Steel Supplier Hazira | ONGC & NTPC Pipes | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Hazira — NACE pipes for ONGC, alloy steel for NTPC, SS for L&T Shipyard. SAME-DAY delivery from Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-hazira" />
      <Meta property="og:title" content="Steel Supplier Hazira | ONGC, NTPC, L&T Shipyard | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Hazira — same-day delivery of NACE pipes, alloy steel, SS for industrial complex. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-hazira" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Hazira | ONGC & NTPC Pipes | CMI" />
      <Meta name="twitter:description" content="Steel supplier Hazira — same-day delivery, NACE pipes, alloy steel for ONGC & NTPC." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Hazira" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Hazira</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Hazira — ONGC, NTPC &amp; Industrial Piping, Same-Day Delivery
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is the nearest major <strong>steel supplier to Hazira</strong> industrial complex — just <strong>250 km with SAME-DAY delivery</strong> from Vadodara. Hazira is Gujarat's powerhouse industrial zone housing <strong>ONGC's Hazira Gas Terminal</strong>, NTPC's 657 MW gas power plant, Essar Steel (now AM/NS India), L&T's defence shipyard, and Shell/GSPC gas processing facilities. This concentration of heavy industry creates enormous demand for NACE-compliant pipes, alloy steel, stainless steel, and exotic alloys. Our 2000+ tonne warehouse with same-day dispatch capability makes us the fastest supplier for Hazira's critical projects — when ONGC has a gas processing emergency or NTPC needs boiler tubes urgently, we deliver the same day.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes, Fittings &amp; Steel for Hazira</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Hazira Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>SAME-DAY delivery to Hazira:</strong> Just 250 km (4 hours) from Vadodara — fastest possible material supply for ONGC, NTPC, and L&T projects</li>
            <li><strong>NACE/sour service specialist:</strong> MR0175/ISO 15156 compliant CS, alloy steel with controlled hardness — mandatory for ONGC gas processing</li>
            <li><strong>ONGC approved materials:</strong> Carbon steel A106 Gr.B (restricted chemistry), alloy steel, SS 316L, duplex for gas terminal applications</li>
            <li><strong>Power plant IBR certified:</strong> P91/P22/P11 for NTPC Hazira's HRSG — IBR Form III-C, stage-wise inspection documentation</li>
            <li><strong>Marine-grade for L&T Shipyard:</strong> SS 316L, duplex 2205, Cu-Ni 90/10, Monel — classification society certified (Lloyd's/DNV/BV)</li>
            <li><strong>24/7 emergency response:</strong> Critical gas terminal or power plant failures can't wait — we dispatch within 2 hours, deliver same afternoon</li>
            <li><strong>Same Gujarat state:</strong> No interstate complications, common GST, faster documentation processing and material movement</li>
            <li><strong>2000+ tonne ready stock:</strong> No mill lead times — ex-stock availability for most sizes and grades required at Hazira</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Hazira &amp; Surat District</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Hazira &amp; Surat Region</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["ONGC Hazira Complex","NTPC Hazira","L&T Shipyard Hazira","Essar/AM/NS Steel","Hazira Port","Sachin GIDC","Pandesara GIDC","Surat SEZ","Kadodara Industrial","Palsana Industrial","Kim Industrial","Kosamba GIDC"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specialized Solutions for Hazira's Gas &amp; Power Sector</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Hazira's industrial profile is dominated by gas processing and power generation, requiring specialized piping materials. Creative Metal Industries supplies <strong>NACE MR0175 compliant carbon steel</strong> for ONGC's sour gas service (controlled chemistry, max 22 HRC hardness), <strong>alloy steel P91/P22</strong> for NTPC's HRSG high-temperature sections, <strong>API 5L PSL2 line pipes</strong> for gas distribution networks, <strong>duplex 2205</strong> for produced water handling, <strong>Inconel 625</strong> for extreme corrosion in gas sweetening units, and <strong>SS 316L</strong> for general process piping. For L&T Shipyard, we stock marine-grade duplex, Cu-Ni, and Monel certified to international classification standards. One phone call, same-day delivery — that's the CMI advantage for Hazira.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Hazira</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel Pipes in Hazira? Same-Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>NACE Pipes, Alloy Steel, SS, Duplex — Ready stock. Same-day from Vadodara to Hazira (250 km).</p>
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
            {href:"/steel-supplier-jamnagar",label:"Steel Supplier Jamnagar"},
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier Vadodara"},
            {href:"/steel-supplier-vadodara-gidc",label:"Steel Supplier Vadodara GIDC"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-supplier-hazira" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Hazira | ONGC, NTPC, L&T Shipyard Pipes | Same-Day Delivery | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
