/**
 * /steel-supplier-kanpur
 * Target: "steel supplier Kanpur", "MS plate Kanpur",
 * "TMT bar Kanpur", "pipe fittings Kanpur"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310, 904L", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L, IS 1239", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "MS Plates & HR Sheets", grades: "IS 2062, SA 516 Gr.70, BQ Plates", sizes: "6mm to 150mm", type: "Hot Rolled", stock: "Ready Stock" },
  { category: "TMT Bars", grades: "Fe 500D (SAIL, Tata, Jindal, RINL)", sizes: "8mm to 32mm dia", type: "Quenched & Tempered", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P11, P22, P91, P5, P9", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "Pipe Fittings", grades: "SS, CS, Alloy — BW & Forged", sizes: "1/2\" to 48\"", type: "Elbows, Tees, Reducers", stock: "Ready Stock" },
  { category: "Flanges", grades: "SS 304/316L, CS A105, Alloy F11/F22", sizes: "1/2\" to 48\"", type: "WN, SO, Blind", stock: "Ready Stock" },
  { category: "Structural Steel", grades: "MS Angle, ISMC, ISMB, Flats, Rounds", sizes: "Per IS standards", type: "Hot Rolled", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u{1F9F4}", name: "Leather & Tannery Industry", desc: "India's leather capital — SS 316L pipes for chemical-resistant tanning process lines, acid-proof piping and effluent treatment plants" },
  { icon: "\u26FD", name: "IOCL Pipeline & Refinery", desc: "Indian Oil pipeline network, Mathura Refinery (nearby) — API 5L pipes, alloy fittings, CS piping for oil and gas transmission" },
  { icon: "\u{1F6E1}\uFE0F", name: "Ordnance & Defence", desc: "Ordnance Factory Kanpur, DRDO labs — special alloy steel, high-pressure pipes, defence-specification materials with full traceability" },
  { icon: "\u{1F33E}", name: "Fertilizer (IFFCO) & Chemical", desc: "IFFCO Phulpur, chemical manufacturing — alloy steel, SS piping, NACE HIC plates for high-pressure corrosive environments" },
  { icon: "\u{1F3D7}\uFE0F", name: "Construction & Real Estate", desc: "Kanpur development boom, Smart City, IIT Kanpur expansion — TMT bars, MS plates, structural steel, angles, beams" },
  { icon: "\u26A1", name: "Panki Thermal Power Station", desc: "Panki TPS, Obra TPS, UP power sector — alloy steel P91/P22/P11 boiler tubes with IBR Form III-C certification" },
];

const FAQS = [
  { q: "Who is the best steel supplier in Kanpur?", a: "Creative Metal Industries (CMI) is a leading steel supplier serving Kanpur and Uttar Pradesh since 2012. We supply stainless steel pipes (304, 316L, 321, 310, 904L), carbon steel (A106, A53, API 5L), MS plates (IS 2062, SA 516), TMT bars (Fe 500D), alloy steel (P91, P22, P11 with IBR), pipe fittings and flanges. We serve Kanpur's leather industry, IOCL pipeline projects, ordnance factories, IFFCO fertilizer plants and UP's thermal power stations. Delivery from Vadodara in 2-3 days." },
  { q: "What is the delivery time from Vadodara to Kanpur?", a: "Delivery from our Vadodara warehouse to Kanpur is 2-3 days via road (approximately 1,100 km via NH48/NH44/NH19). We dispatch regularly to UP and North India, making us a reliable supplier for Kanpur's industrial sector. We deliver to Panki Industrial Area, Fazalganj, Dada Nagar, UPSIDC Rooma, Jajmau leather belt, IIT Kanpur campus and all locations across Kanpur and surrounding cities like Lucknow and Unnao." },
  { q: "Do you supply SS pipes for leather/tannery industry in Kanpur?", a: "Yes, we supply SS 316L seamless and welded pipes specifically for Kanpur's Jajmau tannery belt and leather processing industry. SS 316L is essential for acid-resistant process piping in tanning operations, chrome processing lines and effluent treatment plants. We also supply SS 316L fittings, flanges and plates. All materials supplied with complete certificates — material test certificates, intergranular corrosion test reports and PMI verification." },
  { q: "What TMT bars and MS plates do you supply to Kanpur?", a: "We supply complete structural range to Kanpur: TMT bars (Fe 500D from SAIL, Tata Tiscon, Jindal, RINL — 8mm to 32mm diameter), MS plates (6mm to 80mm thick as per IS 2062 Grade A/B/C), boiler quality plates (as per IS 2002), SA 516 Gr.70 plates, MS angles (25x25mm to 200x200mm), channels, beams, flats and rounds. Used for construction, factory buildings, bridges and infrastructure projects across Kanpur and UP." },
  { q: "Can you supply API 5L pipes for IOCL projects in Kanpur?", a: "Absolutely. We supply API 5L Grade B, X42, X46, X52, X60 and X70 carbon steel pipes for IOCL pipeline projects in the Kanpur and UP region. Available in seamless and SAW/ERW as per project specification. Complete with MTC 3.2, hydro test certificates, radiography reports and third-party inspection from BVIS/TUV/Lloyds. We have experience supplying to oil and gas pipeline contractors across North India." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","name":"Creative Metal Industries — Steel Supplier Kanpur","description":"Leading steel supplier in Kanpur offering MS plates, TMT bars, SS pipes, pipe fittings and structural steel for leather industry, IOCL, fertilizer and construction.","telephone":"+91-99982-80619","url":"https://www.creativemetalind.com/steel-supplier-kanpur","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"City","name":"Kanpur","containedInPlace":{"@type":"State","name":"Uttar Pradesh"}},"priceRange":"$$","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"31","bestRating":"5"}},{"@type":"Product","name":"Steel Plates, TMT Bars & Pipes — Kanpur Supply","description":"MS plates, TMT bars, SS pipes, pipe fittings and structural steel supplied to Kanpur industries.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"45","highPrice":"15000","offerCount":"5000+","availability":"https://schema.org/InStock"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Kanpur","item":"https://www.creativemetalind.com/steel-supplier-kanpur"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierKanpur() {
  return (
    <>
      <Title>Steel Supplier Kanpur | MS Plate & TMT Bar | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Kanpur — MS plates, TMT bars, SS pipes, pipe fittings for leather, IOCL & construction. 2-3 day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-kanpur" />
      <Meta property="og:title" content="Steel Supplier Kanpur | MS Plate, TMT Bar, SS Pipes | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Kanpur — MS plates, TMT bars, SS pipes, fittings. 2-3 day delivery. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-kanpur" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Kanpur | MS Plate & TMT Bar | CMI" />
      <Meta name="twitter:description" content="Steel supplier Kanpur — MS plates, TMT bars, SS, CS pipes. 2-3 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Kanpur" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Kanpur</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Kanpur — MS Plates, TMT Bars &amp; Industrial Piping
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is a trusted <strong>steel supplier in Kanpur</strong>, delivering MS plates, TMT bars, stainless steel pipes, carbon steel pipes, pipe fittings, flanges and structural steel to Uttar Pradesh's largest industrial city. Kanpur has India's largest leather and tannery cluster at Jajmau requiring specialized SS 316L chemical-resistant piping, IOCL petroleum pipeline network, ordnance factories demanding defence-grade alloy steel, IFFCO fertilizer plants at Phulpur, and a massive construction sector driving demand for TMT bars and structural steel. Our Vadodara warehouse, located 1,100 km away, delivers within <strong>2-3 days</strong> — providing consistent supply with direct mill pricing that undercuts local traders for bulk industrial orders.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range for Kanpur Industries</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Kanpur Industries Choose CMI</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Leather industry specialist:</strong> SS 316L pipes and fittings for acid-resistant tanning lines, chrome processing and ETP systems in Jajmau belt</li>
            <li><strong>IOCL pipeline grade stock:</strong> API 5L X42-X70, complete with MTC 3.2, hydro test, radiography — for petroleum transmission projects</li>
            <li><strong>TMT bars bulk supply:</strong> Fe 500D from SAIL, Tata Tiscon, Jindal, RINL — 8mm to 32mm — for Kanpur's construction boom</li>
            <li><strong>MS plates all thicknesses:</strong> 6mm to 150mm in IS 2062, SA 516 Gr.70, BQ — for fabrication, storage tanks and pressure vessels</li>
            <li><strong>Direct mill pricing:</strong> No middlemen — sourced directly from Jindal, SAIL, ISMT, Sumitomo. Better rates than Kanpur traders</li>
            <li><strong>Defence-grade materials:</strong> Special alloy steel, high-pressure pipes meeting ordnance factory specifications with full traceability</li>
            <li><strong>Complete documentation:</strong> Original MTC 3.1/3.2, IBR Form III-C, third-party inspection, IGC test, PMI — as required</li>
            <li><strong>Consistent 2-3 day delivery:</strong> Regular North India dispatch schedule — reliable transit to Kanpur, Lucknow, Allahabad region</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Kanpur &amp; UP</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas — Kanpur &amp; Uttar Pradesh</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Panki Industrial Area","Jajmau Leather Belt","Fazalganj Industrial","Dada Nagar UPSIDC","Rooma Industrial","IIT Kanpur Campus","Unnao Industrial","Lucknow Industrial","Allahabad/Prayagraj","IFFCO Phulpur","Obra TPS (Sonbhadra)","Rae Bareli (BHEL)"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete CMI Product Lines for Kanpur</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          CMI is your single-source steel supplier for all industrial needs in Kanpur and Uttar Pradesh. Our range spans <strong>MS plates</strong> (IS 2062 Gr.A/B/C, SA 516 Gr.70, boiler quality — 6mm to 150mm), <strong>TMT bars</strong> (Fe 500D — 8mm to 32mm from SAIL, Tata, Jindal), <strong>SS pipes and tubes</strong> (seamless, welded — 304, 316L, 321 for chemical and leather process), <strong>carbon steel pipes</strong> (A106, A53, API 5L for pipeline and process), <strong>alloy steel pipes</strong> (P91/P22/P11 with IBR for thermal power), <strong>pipe fittings</strong> (buttweld and forged in SS, CS, alloy), <strong>flanges</strong> (WN, SO, blind — class 150 to 2500#), <strong>structural steel</strong> (MS angles, channels, beams, flats), <strong>NACE HIC plates</strong> (for sour service), and <strong>exotic alloys</strong> (Inconel, Hastelloy, Monel, Duplex). One purchase order, complete material traceability, 2-3 day UP delivery.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Kanpur</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel in Kanpur? Get Quote — 2-3 Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>MS Plates, TMT Bars, SS Pipes, Fittings — All grades. Ready stock Vadodara. Fast delivery to Kanpur & UP.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/carbon-steel-sa516-plate-stockist-india",label:"Carbon Steel SA516 Plate Stockist"},
            {href:"/steel-pipe-supplier-delhi",label:"Steel Pipe Supplier Delhi"},
            {href:"/steel-pipe-supplier-ludhiana",label:"Steel Pipe Supplier Ludhiana"},
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/tmt-bars-supplier-gujarat",label:"TMT Bars Supplier Gujarat"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-supplier-kanpur" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Kanpur | MS Plates, TMT Bars, SS Pipes | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
