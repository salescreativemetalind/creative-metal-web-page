/**
 * /steel-supplier-indore
 * Target: "steel supplier Indore", "SS pipe Indore",
 * "structural steel Indore", "pipe fittings Indore"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310, 904L", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L, IS 1239", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P11, P22, P91, P5, P9", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "Structural Steel", grades: "TMT Fe500D, MS Angle, ISMC, ISMB, Plates", sizes: "Per IS standards", type: "Hot Rolled", stock: "Ready Stock" },
  { category: "Pipe Fittings", grades: "SS, CS, Alloy — BW & Forged", sizes: "1/2\" to 48\"", type: "Elbows, Tees, Reducers", stock: "Ready Stock" },
  { category: "Flanges", grades: "SS 304/316L, CS A105, Alloy F11/F22", sizes: "1/2\" to 48\"", type: "WN, SO, Blind", stock: "Ready Stock" },
  { category: "Steel Plates", grades: "SA 516 Gr.70, IS 2062, BQ, NACE HIC", sizes: "6mm to 150mm", type: "Hot Rolled", stock: "Available" },
  { category: "Duplex & Exotic Alloys", grades: "Duplex 2205, Inconel, Hastelloy, Monel", sizes: "1/2\" to 16\"", type: "Seamless", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F48A}", name: "Pharmaceutical Industry", desc: "Indore pharma hub (Pithampur SEZ) — SS 316L pipes, electropolished tubes for cGMP facilities" },
  { icon: "\u{1F697}", name: "Automobile & Engineering", desc: "Pithampur auto cluster — precision tubes, hydraulic pipes, SS and MS fittings" },
  { icon: "\u{1F3ED}", name: "Food Processing", desc: "Soya processing units, edible oil refineries — SS 304/316L piping for food-grade applications" },
  { icon: "\u26A1", name: "Power Plants", desc: "Mahan TPS, Sasan UMPP — alloy steel P91/P22/P11 with IBR Form III-C" },
  { icon: "\u{1F3D7}\uFE0F", name: "Construction & Real Estate", desc: "Smart city projects, commercial complexes — TMT bars, structural steel, MS plates" },
  { icon: "\u{1F331}", name: "Chemical & Fertilizer", desc: "Chemical plants, pigment manufacturers — SS, alloy and duplex piping for corrosive environments" },
];

const FAQS = [
  { q: "Who is the best steel supplier in Indore?", a: "Creative Metal Industries (CMI) is a trusted steel supplier serving Indore and Madhya Pradesh since 2012. We supply stainless steel pipes (304, 316L, 321, 310, 904L), carbon steel (A106, A53, API 5L), alloy steel (P91, P22, P11), structural steel (TMT, angles, channels, beams), pipe fittings and flanges. We serve Pithampur's auto and pharma industries, Indore's food processing sector, and MP's power plants. Our Vadodara warehouse (just 400 km away) ensures 1-day delivery." },
  { q: "What is the delivery time from Vadodara to Indore?", a: "Delivery from our Vadodara warehouse to Indore is just 1 day via road (approx 400 km via NH48/NH52). This makes us the fastest steel supplier to Indore — quicker than Mumbai or Delhi based suppliers. Express same-day dispatch available. We deliver to Pithampur SEZ, Sanwer Road industrial area, Polo Ground, Rau industrial area, Dewas industrial belt and all surrounding areas." },
  { q: "Do you supply SS pipes for pharma industry in Indore?", a: "Yes, we supply SS 316L seamless pipes and electropolished tubes specifically for pharmaceutical applications in Indore's Pithampur SEZ and surrounding pharma clusters. Supplied as per ASTM A312/A269 with internal surface finish Ra 0.4 micron, complete with material certificates, surface roughness reports and passivation certificates. We also supply sanitary fittings (tri-clamp), DIN standard tubes and SS 316L plates for pharma equipment fabrication." },
  { q: "What structural steel do you supply to Indore?", a: "We supply complete structural steel range to Indore: TMT bars (Fe 500D from SAIL, Tata Tiscon, Jindal — 8mm to 32mm diameter), MS angles (25x25mm to 200x200mm), ISMC channels (75mm to 400mm), ISMB beams (100mm to 600mm), MS plates (6mm to 80mm thick as per IS 2062), and MS flats/rounds. All supplied with original mill test certificates. Competitive bulk rates for construction projects." },
  { q: "Can you supply to Pithampur industrial area?", a: "Absolutely. Pithampur SEZ is one of our key supply areas in MP. We supply SS 316L pipes for pharma units, precision tubes for automobile manufacturers, MS/SS piping for food processing plants, and structural steel for new factory construction. Door-to-door delivery within 1 day from Vadodara. We serve 50+ companies in Pithampur including pharma, auto components, food processing and engineering firms." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-indore#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Indore","description":"Leading steel supplier in Indore offering SS pipes, carbon steel, structural steel, pipe fittings and flanges for pharma, automobile and food processing industries.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-indore","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"City","name":"Indore","containedInPlace":{"@type":"State","name":"Madhya Pradesh"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Indore","item":"https://www.creativemetalind.com/steel-supplier-indore"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierIndore() {
  return (
    <>
      <Title>Steel Supplier Indore | SS Pipe & Structural | CMI</Title>
      <Meta name="robots" content="noindex, follow" />
      <Meta name="description" content="Steel supplier Indore — SS 304/316L pipes, structural steel, TMT bars, pipe fittings. Pithampur SEZ specialist. 1-day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-indore" />
      <Meta property="og:title" content="Steel Supplier Indore | SS Pipe, Structural Steel | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Indore — SS pipes, structural steel, fittings. 1-day delivery. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-indore" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Indore | SS Pipe & Structural | CMI" />
      <Meta name="twitter:description" content="Steel supplier Indore — SS, CS, structural steel. 1-day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Indore" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Indore</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Indore — SS Pipes, Structural Steel &amp; Industrial Piping
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is Madhya Pradesh's most reliable <strong>steel supplier in Indore</strong>, delivering stainless steel pipes, carbon steel pipes, structural steel, pipe fittings, flanges and alloy steel to Central India's fastest-growing industrial hub. We serve Pithampur SEZ's pharmaceutical and automobile manufacturers, Indore's food processing industry, MP's thermal power stations, and the region's booming construction sector. Located just 400 km from Indore, our Vadodara warehouse delivers in <strong>just 1 day</strong> — making us the fastest steel supplier to Indore, beating Mumbai and Delhi-based competitors on both price and delivery time.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range for Indore Industries</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Indore Industries Choose CMI</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>1-day delivery — fastest to Indore:</strong> Only 400 km from Vadodara — same-day dispatch, next-day delivery. Unbeatable in Central India</li>
            <li><strong>Pithampur SEZ specialist:</strong> SS 316L pharma-grade pipes, auto-grade precision tubes, food-grade SS piping — all for Pithampur industries</li>
            <li><strong>Structural steel for construction:</strong> TMT bars, MS angles, channels, beams, plates — bulk supply for Indore's building boom</li>
            <li><strong>Complete piping solutions:</strong> SS, CS, alloy pipes + fittings + flanges — single source eliminates multiple vendor coordination</li>
            <li><strong>Direct mill pricing:</strong> No Indore dealer markup — sourced from Jindal, SAIL, Sumitomo, Vallourec, ISMT directly</li>
            <li><strong>Full documentation:</strong> Original MTC 3.1/3.2, IBR Form III-C, surface roughness reports, PMI — as per project specifications</li>
            <li><strong>Competitive on quantity:</strong> From 1 piece to 100 tonnes — same quality, proportional pricing. No minimum order barrier</li>
            <li><strong>13+ years reliability:</strong> Supplying to MP industries since 2012 — consistent quality, on-time delivery</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Indore &amp; MP</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas — Indore &amp; Madhya Pradesh</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Pithampur SEZ","Sanwer Road Industrial","Polo Ground Area","Rau Industrial Area","Dewas Industrial Belt","Ujjain Industrial Area","Bhopal (BHEL)","Jabalpur Ordnance","Mandideep Industrial","Mhow Cantonment","Dhar Industrial Area","Sasan UMPP (Singrauli)"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete CMI Product Lines for Indore</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          CMI is your single-source steel supplier for all industrial needs in Indore and MP. Our range spans <strong>SS pipes and tubes</strong> (seamless, welded, electropolished for pharma), <strong>carbon steel pipes</strong> (A106, A53, ERW IS 1239), <strong>alloy steel pipes</strong> (P91/P22/P11 with IBR), <strong>pipe fittings</strong> (buttweld and forged in all materials), <strong>flanges</strong> (WN, SO, blind — class 150 to 2500), <strong>steel plates</strong> (SA 516, IS 2062, BQ), <strong>TMT bars</strong> (Fe 500D — 8mm to 32mm), <strong>structural steel</strong> (angles, channels, beams, flats), <strong>exotic alloys</strong> (Inconel, Hastelloy, Monel, Duplex), and <strong>fasteners</strong>. One PO, one supplier, complete traceability — delivered in 1 day.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Indore</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel in Indore? Get Quote — 1-Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS Pipes, Structural Steel, Fittings, Flanges — All grades. Ready stock Vadodara. Next-day Indore.</p>
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
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/steel-pipe-supplier-jaipur",label:"Steel Pipe Supplier Jaipur"},
            {href:"/steel-supplier-bhopal",label:"Steel Supplier Bhopal"},
            {href:"/steel-supplier-nagpur",label:"Steel Supplier Nagpur"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <LocationContent slug="indore" />
      
        <RelatedPages currentPath="/steel-supplier-indore" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Indore | SS Pipes, Structural Steel, Fittings | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
