/**
 * /steel-pipe-supplier-ludhiana
 * Target: "pipe supplier Ludhiana", "SS tube Ludhiana",
 * "ERW pipe Ludhiana", "steel pipe Ludhiana"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const PRODUCTS = [
  { category: "Stainless Steel Pipes & Tubes", grades: "SS 304, 316L, 321, 310, 904L", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "ERW Steel Pipes", grades: "IS 1239, IS 3589, API 5L Gr.B, IS 1161", sizes: "1/2\" to 14\"", type: "ERW (Black & GI)", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L X42-X70", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P11, P22, P91, P5, P9", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "Hydraulic & Precision Tubes", grades: "SAE 1020, ST52, E355, SS 304/316L", sizes: "6mm to 120mm OD", type: "Cold Drawn Seamless", stock: "Ready Stock" },
  { category: "Pipe Fittings", grades: "SS, CS, Alloy — BW & Forged", sizes: "1/2\" to 48\"", type: "Elbows, Tees, Reducers", stock: "Ready Stock" },
  { category: "Flanges", grades: "SS 304/316L, CS A105, Alloy F11/F22", sizes: "1/2\" to 48\"", type: "WN, SO, Blind", stock: "Ready Stock" },
  { category: "Steel Plates & Structural", grades: "IS 2062, SA 516 Gr.70, TMT Fe500D", sizes: "6mm to 150mm plates", type: "Hot Rolled", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F6B2}", name: "Bicycle & Auto Parts", desc: "India's bicycle capital — precision tubes, ERW pipes, cold-drawn seamless tubes for bicycle frames, auto components and axle manufacturing" },
  { icon: "\u{1F9F5}", name: "Textile Machinery", desc: "Ludhiana hosiery & textile cluster — SS 304/316L pipes, precision tubes for dyeing machines, calendering rollers and process equipment" },
  { icon: "\u{1F527}", name: "Hand Tools & Forging", desc: "Largest hand tool manufacturing hub — alloy steel bars, carbon steel pipes, precision tubes for spanners, wrenches and industrial tools" },
  { icon: "\u{1F3ED}", name: "Industrial Manufacturing", desc: "Focal Point, Gill Road industrial — MS/SS piping, ERW pipes, structural steel for diverse manufacturing and fabrication units" },
  { icon: "\u{2699}\uFE0F", name: "Auto & Tractor Components", desc: "Automotive parts cluster — hydraulic tubes, precision seamless pipes, alloy steel for transmission, steering and chassis components" },
  { icon: "\u26FD", name: "Oil & Gas (HPCL Bathinda)", desc: "Guru Gobind Singh Refinery nearby — API 5L pipes, alloy fittings, SS piping for refinery maintenance and expansion projects" },
];

const FAQS = [
  { q: "Who is the best pipe supplier in Ludhiana?", a: "Creative Metal Industries (CMI) is a trusted pipe supplier serving Ludhiana's manufacturing hub since 2012. We supply ERW pipes (IS 1239, IS 3589), stainless steel pipes and tubes (304, 316L, 321), carbon steel seamless (A106, A53, API 5L), hydraulic precision tubes (SAE 1020, ST52, E355), pipe fittings, flanges and structural steel. We serve Ludhiana's bicycle industry, textile machinery makers, hand tool manufacturers, auto parts cluster and the HPCL Bathinda refinery. Our Vadodara warehouse delivers within 2-3 days." },
  { q: "What is the delivery time from Vadodara to Ludhiana?", a: "Delivery from our Vadodara warehouse to Ludhiana is 2-3 days via road (approximately 1,200 km via NH48/NH44). We dispatch regularly to Punjab and North India. For urgent requirements, we offer express dispatch to ensure fastest possible transit. We deliver to Focal Point industrial area, Gill Road industrial belt, Dugri, Sherpur Chowk area, Jalandhar industrial and all locations across Ludhiana and Punjab." },
  { q: "Do you supply precision tubes for bicycle industry in Ludhiana?", a: "Yes, we supply cold-drawn seamless precision tubes specifically for Ludhiana's bicycle and auto parts industry. Available grades include SAE 1020, ST52, E355 and SS 304/316L in sizes from 6mm to 120mm OD with tight tolerance (H8/H9). These tubes are used for bicycle frames, handle bars, seat posts, auto axles and hydraulic cylinders. Supplied with mill certificates and dimensional inspection reports as required." },
  { q: "What ERW pipes do you supply to Ludhiana?", a: "We supply comprehensive ERW pipe range to Ludhiana: IS 1239 (Part 1) for water and gas in light/medium/heavy grades, IS 3589 for structural use, IS 1161 for tubular structures, API 5L Gr.B for pipeline, and galvanized pipes for plumbing. Sizes from 1/2 inch to 14 inch in black and galvanized finish. Suitable for construction, industrial, plumbing, scaffolding and general fabrication applications across Punjab." },
  { q: "Can you supply to Focal Point industrial area Ludhiana?", a: "Absolutely. Focal Point is one of our key delivery locations in Punjab. We supply ERW pipes and precision tubes for bicycle manufacturers, SS pipes for textile machinery, hydraulic tubes for auto components, structural steel for factory construction, and pipe fittings for process plants. We serve 40+ companies across Focal Point Phase 1-9, Gill Road, Dugri industrial, and Sherpur Chowk area in Ludhiana." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-pipe-supplier-ludhiana#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Pipe Supplier Ludhiana","description":"Leading pipe supplier in Ludhiana offering ERW pipes, SS tubes, precision tubes, hydraulic pipes and fittings for bicycle, textile and auto parts industries.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-pipe-supplier-ludhiana","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"City","name":"Ludhiana","containedInPlace":{"@type":"State","name":"Punjab"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Pipe Supplier Ludhiana","item":"https://www.creativemetalind.com/steel-pipe-supplier-ludhiana"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelPipeSupplierLudhiana() {
  return (
    <>
      <Title>Pipe Supplier Ludhiana | SS Tube & ERW Pipe | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Pipe supplier Ludhiana — ERW pipes, SS tubes, precision tubes for bicycle & auto industry. Ready stock. 2-3 day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-pipe-supplier-ludhiana" />
      <Meta property="og:title" content="Pipe Supplier Ludhiana | SS Tube, ERW Pipe, Precision Tubes | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Pipe supplier Ludhiana — ERW pipes, SS tubes, precision tubes. 2-3 day delivery. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-pipe-supplier-ludhiana" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Pipe Supplier Ludhiana | SS Tube & ERW Pipe | CMI" />
      <Meta name="twitter:description" content="Pipe supplier Ludhiana — ERW, SS tubes, precision pipes. 2-3 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Pipe Supplier Ludhiana" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Pipe Supplier Ludhiana</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Pipe Supplier in Ludhiana — ERW Pipes, SS Tubes &amp; Precision Tubes
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is Punjab's reliable <strong>pipe supplier in Ludhiana</strong>, delivering ERW pipes, stainless steel tubes, precision cold-drawn tubes, carbon steel pipes, hydraulic tubes, pipe fittings and flanges to India's manufacturing powerhouse. Ludhiana is the country's bicycle capital, a major hub for textile machinery, hand tools, auto components and forging — and all these industries require specialized steel tubes and pipes. We serve Focal Point industrial area (Phase 1-9), Gill Road belt, Dugri industrial, the hand tool cluster, and the HPCL Guru Gobind Singh Refinery at Bathinda. Our Vadodara warehouse delivers within <strong>2-3 days</strong>, offering competitive mill pricing that beats local traders on both quality and cost for bulk industrial requirements.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range for Ludhiana Industries</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Ludhiana Industries Choose CMI</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Precision tube specialist:</strong> Cold-drawn seamless tubes in SAE 1020, ST52, E355 — perfect for bicycle frames, auto axles and hydraulic cylinders</li>
            <li><strong>ERW pipe range for every application:</strong> IS 1239, IS 3589, IS 1161, API 5L — black and GI — for construction, structural and pipeline use</li>
            <li><strong>Bicycle industry focus:</strong> Tight-tolerance tubes (H8/H9) for bicycle frames, handle bars, seat posts — direct from mill</li>
            <li><strong>Textile machinery ready:</strong> SS 304/316L pipes and tubes for dyeing, calendering, and processing machines — ready stock</li>
            <li><strong>Competitive mill pricing:</strong> Direct sourcing eliminates middlemen — better rates than Ludhiana traders for equivalent quality</li>
            <li><strong>Bulk order capability:</strong> From 100 pieces to container loads — consistent supply for large-scale manufacturing operations</li>
            <li><strong>Full material certificates:</strong> Mill test certificates, dimensional reports, chemical composition — complete traceability for export manufacturers</li>
            <li><strong>Regular Punjab dispatch:</strong> Dedicated transport network to Ludhiana, Jalandhar, Amritsar — 2-3 day consistent delivery</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Ludhiana &amp; Punjab</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas — Ludhiana &amp; Punjab</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Focal Point (Phase 1-9)","Gill Road Industrial","Dugri Industrial Area","Sherpur Chowk Belt","Mullanpur Industrial","Jalandhar Industrial","Amritsar Industrial","Bathinda Refinery","Rajpura Industrial","Mandi Gobindgarh Steel","Dera Bassi (Mohali)","Chandigarh Industrial"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete CMI Product Lines for Ludhiana</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          CMI is your single-source pipe and steel supplier for all manufacturing needs in Ludhiana and Punjab. Our range covers <strong>ERW pipes</strong> (IS 1239, IS 3589, IS 1161 in black and galvanized), <strong>precision cold-drawn tubes</strong> (SAE 1020, ST52, E355 for bicycle and auto), <strong>SS pipes and tubes</strong> (seamless and welded — 304, 316L, 321 for textile and food machinery), <strong>carbon steel seamless pipes</strong> (A106, A53, API 5L for pipeline and process), <strong>hydraulic tubes</strong> (DIN 2391 high-precision for cylinders), <strong>pipe fittings</strong> (buttweld and forged in all materials), <strong>flanges</strong> (WN, SO, blind — class 150 to 2500#), <strong>alloy steel pipes</strong> (P11/P22/P91 for thermal plants), <strong>steel plates</strong> (IS 2062, SA 516), and <strong>structural steel</strong> (TMT bars, angles, channels). Direct mill pricing, regular Punjab dispatch, complete documentation.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Pipe Supplier Ludhiana</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Pipes in Ludhiana? Get Quote — 2-3 Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>ERW Pipes, SS Tubes, Precision Tubes, Fittings — All grades. Ready stock. Fast delivery to Punjab.</p>
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
            {href:"/steel-pipe-supplier-delhi",label:"Steel Pipe Supplier Delhi"},
            {href:"/steel-pipe-supplier-jaipur",label:"Steel Pipe Supplier Jaipur"},
            {href:"/steel-supplier-kanpur",label:"Steel Supplier Kanpur"},
            {href:"/carbon-steel-pipe-fittings-vadodara",label:"Carbon Steel Pipe Fittings Vadodara"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <LocationContent slug="ludhiana" />
      
        <RelatedPages currentPath="/steel-pipe-supplier-ludhiana" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Pipe Supplier Ludhiana | ERW Pipes, SS Tubes, Precision Tubes | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
