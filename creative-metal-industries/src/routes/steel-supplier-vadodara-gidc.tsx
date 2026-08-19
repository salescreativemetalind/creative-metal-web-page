/**
 * /steel-supplier-vadodara-gidc
 * Target: "steel supplier GIDC Vadodara", "all industrial materials GIDC",
 * "pipe fittings Makarpura GIDC", "steel Vadodara GIDC"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 904L, 202", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L, IS 1239, IS 3589", sizes: "1/2\" to 48\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L/321 Elbows, Tees, Flanges — all types", sizes: "1/2\" to 48\"", type: "Buttweld, Forged, Socket Weld", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507, Lean 2101", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Exotic Alloys", grades: "Inconel 625/800, Hastelloy C276/C22, Monel 400, Alloy 20", sizes: "1/2\" to 12\"", type: "Seamless", stock: "Available" },
  { category: "Steel Plates & Sheets", grades: "SA 516 Gr.70, IS 2062, SS 304/316L sheets, HR/CR", sizes: "0.5mm to 150mm thick", type: "Hot/Cold Rolled", stock: "Ready Stock" },
  { category: "Structural & TMT", grades: "TMT Fe500D, MS Angle, Channel, Beam, Flat", sizes: "All standard sizes", type: "SAIL / Jindal / Tata", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u{1F3ED}", name: "Makarpura GIDC", desc: "Our HOME BASE — immediate delivery to all Makarpura GIDC units. Engineering, chemical, pharma, automotive — complete steel range on demand" },
  { icon: "\u2697\uFE0F", name: "Gorwa GIDC / Chemical", desc: "SS 316L for chemical reactors, Hastelloy C276 for acid service, duplex for chloride environments — corrosion-resistant piping for Gorwa's chemical belt" },
  { icon: "\u{1F48A}", name: "Pharmaceutical Cluster", desc: "SS 316L electropolished pipes, sanitary fittings, tri-clamp systems for GMP-compliant pharma installations — Alembic, Sun Pharma, Cadila" },
  { icon: "\u{1F6E2}\uFE0F", name: "IPCL / Reliance Complex", desc: "Process piping for petrochemical operations — alloy steel, SS 321/347 for high-temp service, exotic alloys for crackers and reactors" },
  { icon: "\u2699\uFE0F", name: "Engineering & Fabrication", desc: "MS pipes, plates, structural steel, precision tubes for Vadodara's 500+ engineering workshops and fabrication units" },
  { icon: "\u{1F3D7}\uFE0F", name: "Infrastructure & Construction", desc: "TMT bars, MS angles, channels, beams for ongoing Vadodara city expansion, metro, flyovers, and industrial construction" },
];

const FAQS = [
  { q: "Who is the best steel supplier in Vadodara GIDC?", a: "Creative Metal Industries (CMI) is located RIGHT INSIDE Makarpura GIDC at 386/B GIDC Estate — we are literally your neighbor! Being the only comprehensive steel supplier within GIDC, we offer IMMEDIATE delivery (often within hours) of SS pipes, fittings, carbon steel, alloy steel, duplex, exotic alloys, plates, and structural steel. From quick maintenance requirements to large project orders — one phone call gets material to your factory gate within Vadodara GIDC same day, often within 1-2 hours." },
  { q: "How fast can materials be delivered within Vadodara GIDC?", a: "IMMEDIATE — within 1-2 hours for ready stock items! Our warehouse is at 386/B GIDC Estate, Makarpura — the same industrial estate where most Vadodara factories are located. For Makarpura GIDC units, delivery is often under 30 minutes. For Gorwa GIDC, Maneja Industrial, and Halol — within 1-2 hours. This eliminates production downtime waiting for material from distant suppliers. No other steel supplier in Gujarat can match this speed for Vadodara industries." },
  { q: "What materials do you stock for Vadodara's pharmaceutical industry?", a: "For Vadodara's thriving pharma sector (Alembic, Sun Pharma, Cadila), we maintain comprehensive stock of pharma-grade piping materials. This includes SS 316L seamless pipes (electropolished and mill finish), sanitary fittings (tri-clamp elbows, tees, reducers), SS 316L sheets for clean room panels, instrument tubing, and dairy-grade butterfly valves. All materials supplied with 3.1 MTC, surface finish reports (Ra value), and material composition certificates meeting FDA/GMP requirements." },
  { q: "Do you supply exotic alloys for Vadodara's chemical industry?", a: "Yes, we maintain ready stock of exotic and corrosion-resistant alloys critical for Vadodara's chemical processing industry. Our range includes Hastelloy C276 (for hydrochloric/sulfuric acid), Hastelloy C22 (for mixed acid environments), Inconel 625 (for high-temperature corrosion), Monel 400 (for hydrofluoric acid), Alloy 20 (for sulfuric acid), and titanium Grade 2. All in pipe form (seamless) with matching fittings and flanges. Positive material identification (PMI) on every piece." },
  { q: "Can you supply structural steel and TMT for Vadodara construction?", a: "Absolutely. Beyond industrial piping, we are a complete structural steel supplier for Vadodara's construction boom. Our range includes TMT bars Fe500D (SAIL, Tata, Jindal) for RCC construction, MS angles for trusses and frames, ISMC channels for purlins and gantries, ISMB beams for industrial structures, MS plates for fabrication, and MS flats/rounds for general engineering. All from ready stock at our Makarpura GIDC warehouse — no waiting, immediate loading for your construction site or workshop." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-vadodara-gidc#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Vadodara GIDC","description":"YOUR LOCAL steel supplier in Makarpura GIDC Vadodara — SS pipes, alloy steel, fittings, structural steel. Immediate delivery within GIDC. Complete industrial materials.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-vadodara-gidc","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Vadodara GIDC","containedInPlace":{"@type":"State","name":"Gujarat"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Vadodara GIDC","item":"https://www.creativemetalind.com/steel-supplier-vadodara-gidc"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierVadodaraGIDC() {
  return (
    <>
      <Title>Steel Supplier Vadodara GIDC | Immediate Delivery | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Vadodara GIDC — SS pipes, fittings, alloy, structural steel. IMMEDIATE delivery from Makarpura GIDC warehouse. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-vadodara-gidc" />
      <Meta property="og:title" content="Steel Supplier Vadodara GIDC | All Materials, Immediate Delivery | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Vadodara GIDC — immediate delivery from our Makarpura warehouse. All industrial materials. CMI." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-vadodara-gidc" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Vadodara GIDC | Immediate Delivery | CMI" />
      <Meta name="twitter:description" content="Steel supplier Vadodara GIDC — your local supplier in Makarpura GIDC. All materials, immediate." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Vadodara GIDC" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Vadodara GIDC</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Vadodara GIDC — All Industrial Materials, Immediate Delivery
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is your <strong>LOCAL steel supplier in Vadodara GIDC</strong> — headquartered at <strong>386/B GIDC Estate, Makarpura</strong> with IMMEDIATE delivery across all Vadodara industrial areas. We are the only comprehensive steel supplier located right inside GIDC, offering the complete range of industrial materials — stainless steel pipes and fittings, carbon steel, alloy steel, duplex, exotic alloys (Inconel, Hastelloy, Monel), steel plates, and structural steel. From <strong>Makarpura GIDC</strong> to <strong>Gorwa GIDC</strong> to <strong>Maneja Industrial Area</strong> — we deliver within 1-2 hours. Vadodara's pharmaceutical, chemical, engineering, and petrochemical industries trust us for zero-downtime material supply at competitive direct-from-mill pricing.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Every Industrial Material for GIDC</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Vadodara GIDC Chooses Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>LOCATED IN YOUR GIDC:</strong> 386/B Makarpura GIDC Estate — we are your neighbor! Delivery within 30 minutes to 2 hours across all Vadodara industrial areas</li>
            <li><strong>Zero production downtime:</strong> Emergency material need? Call us — material reaches your factory gate before your machine cools down</li>
            <li><strong>Complete material range:</strong> SS, CS, alloy, duplex, exotic, plates, structural, TMT — one supplier for 100% of your steel requirements</li>
            <li><strong>Pharma-grade specialist:</strong> SS 316L electropolished, sanitary fittings, tri-clamp — GMP-compliant for Alembic, Sun Pharma, Cadila requirements</li>
            <li><strong>Chemical industry expertise:</strong> Hastelloy C276, Inconel 625, Alloy 20, titanium — corrosion engineering advice for Gorwa chemical belt</li>
            <li><strong>8000+ items in stock:</strong> 2000+ tonne warehouse at Makarpura — from 1/2\" SS tube to 48\" CS pipe, most items ex-stock today</li>
            <li><strong>13+ years in Vadodara:</strong> Trusted by 500+ GIDC units — engineering, pharma, chemical, oil & gas, food processing, automotive</li>
            <li><strong>Direct mill pricing:</strong> No middleman — Jindal, SAIL, Sumitomo, Sandvik pricing without Vadodara market dealer margins</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Vadodara GIDC</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Delivery Areas in Vadodara &amp; Surroundings</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Makarpura GIDC (local!)","Gorwa GIDC","Maneja Industrial","Halol GIDC","Savli Industrial","Padra Industrial","Waghodia GIDC","Nandesari GIDC","Karjan Industrial","Chhani Industrial","Dabhoi Road","Por-Ramangamdi GIDC"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Your One-Stop Industrial Materials Partner in GIDC</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Running a factory in Vadodara GIDC means you need materials NOW — not in days or weeks. Creative Metal Industries understands GIDC's pace because we live it every day. Whether it's a <strong>pharma project needing SS 316L electropolished tubes</strong> by afternoon, a <strong>chemical plant emergency requiring Hastelloy C276 pipes</strong> within hours, an <strong>engineering workshop needing MS plates and angles</strong> for same-day fabrication, or a <strong>construction site requiring TMT bars</strong> for tomorrow's pour — we deliver. Our 2000+ tonne warehouse at Makarpura GIDC stocks the complete industrial steel range. One supplier, one invoice, one phone call — and materials at your gate before you finish your chai.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Vadodara GIDC</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Materials in GIDC? We're Your Neighbor!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS, CS, Alloy, Exotic, Structural — 2000+ tonnes in stock at Makarpura GIDC. Immediate delivery!</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/ss-pipe-supplier-vadodara",label:"SS Pipe Supplier Vadodara"},
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier Vadodara"},
            {href:"/carbon-steel-pipe-fittings-vadodara",label:"Carbon Steel Pipe Fittings"},
            {href:"/inconel-pipe-supplier-india",label:"Inconel Pipe Supplier India"},
            {href:"/steel-supplier-ankleshwar-gidc",label:"Steel Supplier Ankleshwar GIDC"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-supplier-vadodara-gidc" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Vadodara GIDC | 386/B Makarpura GIDC Estate | Immediate Delivery</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
