/**
 * /steel-pipe-supplier-coimbatore
 * Target: "pipe supplier Coimbatore", "SS tube Coimbatore",
 * "flanges Coimbatore", "steel pipe Coimbatore"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "Stainless Steel Pipes & Tubes", grades: "SS 304, 316L, 321, 310, 904L, 202", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L, IS 1239", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P11, P22, P91, P5", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "SS Tubes (Precision)", grades: "SS 304, 316L — Cold Drawn, Bright Annealed", sizes: "6mm to 101.6mm OD", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Flanges", grades: "SS 304/316L, CS A105, Alloy F11/F22", sizes: "1/2\" to 48\"", type: "WN, SO, Blind, Threaded", stock: "Ready Stock" },
  { category: "Pipe Fittings", grades: "SS, CS, Alloy — BW & Forged", sizes: "1/2\" to 48\"", type: "Elbows, Tees, Reducers", stock: "Ready Stock" },
  { category: "Steel Plates", grades: "SA 516 Gr.70, IS 2062, SS 304/316L", sizes: "6mm to 150mm", type: "Hot & Cold Rolled", stock: "Available" },
  { category: "Structural Steel", grades: "TMT Fe500D, MS Angle, ISMC, ISMB", sizes: "Per IS standards", type: "Hot Rolled", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u{1F3ED}", name: "Textile Machinery & Pumps", desc: "Coimbatore pump/valve/motor industry — SS tubes, precision pipes, fittings for rotating equipment" },
  { icon: "\u{1F697}", name: "Automobile & Auto Components", desc: "Auto ancillary cluster — precision cold-drawn tubes, hydraulic pipes, SS fittings" },
  { icon: "\u{1F48A}", name: "Pharmaceutical & Food", desc: "Pharma and food processing — SS 316L electropolished pipes, sanitary fittings" },
  { icon: "\u26A1", name: "Power & Energy", desc: "Mettur TPS, wind energy projects — alloy steel P91/P22 pipes, structural steel" },
  { icon: "\u{1F30A}", name: "Water Treatment", desc: "Desalination, ETP/STP plants — SS 316L, duplex, FRP-lined piping systems" },
  { icon: "\u{1F3D7}\uFE0F", name: "Construction & Infra", desc: "Commercial projects, industrial sheds — TMT bars, structural steel, MS plates" },
];

const FAQS = [
  { q: "Who is the best pipe supplier in Coimbatore?", a: "Creative Metal Industries (CMI) is a trusted pipe supplier serving Coimbatore and western Tamil Nadu since 2012. We supply stainless steel pipes and tubes (304, 316L, 321, 310, 904L), carbon steel (A106, A53, IS 1239), alloy steel (P91, P22, P11), plus fittings and flanges. We serve Coimbatore's pump manufacturing cluster, textile machinery industry, auto components sector and food processing units. Delivery in 2-3 days from our 2000+ tonne Vadodara warehouse." },
  { q: "What is the delivery time for SS tubes to Coimbatore?", a: "Standard delivery from Vadodara to Coimbatore is 2-3 working days via road (approx 1,400 km). Express 48-hour delivery available for urgent requirements. We deliver to SIDCO Coimbatore, Ganapathy, Singanallur, Kalapatti industrial areas, and surrounding districts including Tirupur, Erode and Salem. For Coimbatore's pump industry, we maintain ready stock of commonly required SS tube sizes (OD 25.4mm to 76.2mm)." },
  { q: "Do you supply SS tubes for pump and valve manufacturers?", a: "Yes, SS tubes for Coimbatore's pump and valve industry are our specialty. We supply SS 304 and 316L seamless tubes in OD 6mm to 101.6mm, wall thickness 0.5mm to 6mm — both hot-finished and cold-drawn. Also available: bright annealed (BA) finish tubes, electropolished tubes for pharma pumps, and hydraulic tubes (DIN 2391). All tubes supplied with original MTC, dimensional inspection reports, and surface finish certificates." },
  { q: "What is the price of SS 304 tube in Coimbatore?", a: "SS 304 seamless tube prices in Coimbatore range from Rs 280-500 per kg depending on OD, wall thickness and finish (mill finish vs bright annealed). Welded SS 304 tubes start from Rs 200 per kg. SS 316L commands a 30-40% premium over 304. Prices fluctuate with LME nickel. For exact pricing, call +91 99982 80619 — formal quotation within 4 hours. Direct mill supply from Jindal, SAIL Salem, and import mills — no Coimbatore dealer markup." },
  { q: "Can you supply flanges and fittings for Coimbatore industries?", a: "Absolutely. We supply comprehensive range of flanges and fittings to Coimbatore's pump, valve and piping industries. Flanges: weld neck, slip-on, blind, threaded, lap joint in SS 304/316L, CS A105, alloy F11/F22 — class 150 to 2500 (ASME B16.5). Fittings: buttweld (elbows, tees, reducers) and forged (socket weld, threaded) in all materials. We also supply spectacle blinds, orifice flanges, and long weld neck flanges for OEM pump manufacturers." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-pipe-supplier-coimbatore#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Pipe Supplier Coimbatore","description":"Leading pipe supplier in Coimbatore offering SS pipes, SS tubes, flanges, fittings for pump manufacturers, textile machinery and industrial applications.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-pipe-supplier-coimbatore","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"City","name":"Coimbatore","containedInPlace":{"@type":"State","name":"Tamil Nadu"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Pipe Supplier Coimbatore","item":"https://www.creativemetalind.com/steel-pipe-supplier-coimbatore"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelPipeSupplierCoimbatore() {
  return (
    <>
      <Title>Pipe Supplier Coimbatore | SS Tubes & Flanges | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Pipe supplier Coimbatore — SS tubes, pipes, flanges for pump & valve industry. SS 304/316L, carbon steel. 2-3 day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-pipe-supplier-coimbatore" />
      <Meta property="og:title" content="Pipe Supplier Coimbatore | SS Tubes, Flanges | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Pipe supplier Coimbatore — SS tubes, flanges for pump industry. 2-3 day delivery. CMI." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-pipe-supplier-coimbatore" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Pipe Supplier Coimbatore | SS Tubes & Flanges | CMI" />
      <Meta name="twitter:description" content="Pipe supplier Coimbatore — SS tubes, pipes, flanges. 2-3 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Pipe Supplier Coimbatore" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Pipe Supplier Coimbatore</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Pipe Supplier in Coimbatore — SS Tubes, Flanges &amp; Industrial Piping
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is a trusted <strong>pipe supplier in Coimbatore</strong>, serving Tamil Nadu's manufacturing powerhouse with stainless steel pipes, precision SS tubes, flanges, pipe fittings and carbon steel piping. Coimbatore is India's pump capital — home to 600+ pump and motor manufacturers — and CMI is the preferred source for SS tubes, flanges and precision piping materials that drive this industry. We also serve textile machinery manufacturers, auto component makers, food processors and power plant projects across western Tamil Nadu. Our 2000+ tonne Vadodara warehouse delivers to Coimbatore in 2-3 days.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Product Range — Pipes, Tubes, Flanges for Coimbatore</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Coimbatore's Pump Industry Trusts CMI</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Pump industry specialist:</strong> SS 304/316L seamless tubes in all OD sizes (6mm to 101.6mm) for pump shafts, sleeves and casings</li>
            <li><strong>Precision tube inventory:</strong> Cold-drawn, bright annealed, electropolished — tight tolerance tubes for OEM pump/valve manufacturing</li>
            <li><strong>Complete flanges range:</strong> WN, SO, blind, threaded flanges in SS/CS/alloy — class 150 to 2500 for pump discharge and suction piping</li>
            <li><strong>2-3 day reliable delivery:</strong> Dedicated transport from Vadodara to Coimbatore (1,400 km) — consistent delivery schedule</li>
            <li><strong>Direct mill pricing:</strong> Sourced from Jindal, SAIL Salem (just 200 km from Coimbatore), and import mills — no dealer chain markup</li>
            <li><strong>Full documentation:</strong> MTC EN 10204 3.1/3.2, dimensional certificates, surface finish reports — as per OEM specifications</li>
            <li><strong>Small to bulk quantities:</strong> From 10 kg to 10 tonnes — no minimum order restrictions for pump OEMs</li>
            <li><strong>13+ years serving TN industry:</strong> Trusted supplier to Coimbatore's leading pump manufacturers and EPC contractors</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Coimbatore</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas — Coimbatore &amp; Western TN</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["SIDCO Coimbatore","Ganapathy Industrial","Singanallur","Kalapatti","SIPCOT Perundurai","Tirupur (Textile)","Erode Industrial","Salem Steel Zone","Pollachi","Palladam","Mettupalayam","Annur Industrial"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete CMI Product Lines for Coimbatore</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Beyond SS tubes and pipes, Creative Metal Industries supplies the full spectrum of steel products to Coimbatore. Our range includes <strong>precision SS tubes</strong> (cold-drawn, BA finish for pump OEMs), <strong>SS and CS pipes</strong> (seamless, welded, ERW), <strong>alloy steel pipes</strong> (P91/P22/P11 for power plants), <strong>flanges</strong> (all types, materials and pressure classes), <strong>pipe fittings</strong> (buttweld and forged), <strong>steel plates</strong> (SA 516, IS 2062, SS plates for fabrication), <strong>TMT bars</strong> (Fe 500D for construction), <strong>structural steel</strong>, <strong>duplex and exotic alloys</strong> (for corrosion-resistant pump applications), and <strong>fasteners</strong>. One source for your complete manufacturing and project needs.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Pipe Supplier Coimbatore</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SS Tubes or Flanges in Coimbatore? Get Quote!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS Tubes, Pipes, Flanges, Fittings — All grades for pump & valve industry. 2-3 day delivery.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe Supplier India"},
            {href:"/ss-flanges-supplier-vadodara",label:"SS Flanges Supplier India"},
            {href:"/steel-pipe-supplier-chennai",label:"Steel Pipe Supplier Chennai"},
            {href:"/steel-pipe-supplier-bangalore",label:"Steel Pipe Supplier Bangalore"},
            {href:"/steel-pipe-supplier-vizag",label:"Steel Pipe Supplier Vizag"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-pipe-supplier-coimbatore" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Pipe Supplier Coimbatore | SS Tubes, Flanges, Industrial Piping | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
