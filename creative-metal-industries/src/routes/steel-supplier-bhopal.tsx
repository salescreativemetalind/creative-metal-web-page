/**
 * /steel-supplier-bhopal
 * Target: "steel supplier Bhopal", "SS pipe Bhopal",
 * "structural steel Bhopal", "pipe fittings Bhopal"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

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
  { icon: "\u{1F50C}", name: "BHEL Bhopal (Heavy Electricals)", desc: "India's largest heavy electrical equipment manufacturer — alloy steel pipes, SS tubes, precision piping for turbine and boiler components" },
  { icon: "\u{1F6E1}\uFE0F", name: "Ordnance & Defence Factories", desc: "Ordnance Factory Itarsi, Gun Carriage Factory Jabalpur — special alloy steel, high-pressure pipes and defence-grade materials" },
  { icon: "\u{1F3ED}", name: "Mandideep Industrial Area", desc: "Major industrial hub near Bhopal — CS and SS piping, fittings, flanges for pharmaceutical, chemical and manufacturing plants" },
  { icon: "\u{1F3D7}\uFE0F", name: "Government & Infrastructure", desc: "State capital projects, Smart City, AIIMS Bhopal expansion — TMT bars, structural steel, MS plates for government construction" },
  { icon: "\u{1F9F1}", name: "Cement Belt (Sagar-Satna)", desc: "ACC, Prism, Birla cement plants in MP cement belt — abrasion-resistant plates, structural steel, heavy piping for kiln and mills" },
  { icon: "\u26A1", name: "Power & Energy", desc: "Sanjay Gandhi TPS (Birsinghpur), Vindhyachal STPP — alloy P91/P22/P11 boiler tubes with IBR, high-pressure fittings and flanges" },
];

const FAQS = [
  { q: "Who is the best steel supplier in Bhopal?", a: "Creative Metal Industries (CMI) is a premier steel supplier serving Bhopal and entire Madhya Pradesh since 2012. We supply stainless steel pipes (304, 316L, 321, 310, 904L), carbon steel (A106, A53, API 5L), alloy steel (P91, P22, P11 with IBR), structural steel (TMT, MS angles, channels, beams), pipe fittings and flanges. We serve BHEL Bhopal, Mandideep industrial area, state government projects, and MP's thermal power stations. Just 500 km from Bhopal, we deliver in 1 day." },
  { q: "What is the delivery time from Vadodara to Bhopal?", a: "Delivery from our Vadodara warehouse to Bhopal is just 1 day via road (approximately 500 km via NH48/NH46). This makes CMI one of the fastest steel suppliers to Bhopal — quicker than most Delhi or Mumbai based suppliers. We deliver to Govindpura industrial area, Mandideep AKVN, BHEL Township, Bairagarh industrial, Hoshangabad Road belt and all areas across Bhopal and surrounding districts." },
  { q: "Do you supply steel to BHEL Bhopal?", a: "Yes, we supply alloy steel pipes (ASTM A335 P91, P22, P11, P5), stainless steel tubes (SS 304, 316L, 321, 310), carbon steel pipes and special alloy materials suitable for BHEL Bhopal's heavy electrical manufacturing. All materials supplied with complete documentation — MTC 3.1/3.2, IBR Form III-C, third-party inspection reports, PMI certificates. We understand BHEL's stringent quality requirements and supply accordingly." },
  { q: "What structural steel do you supply to Bhopal?", a: "We supply the complete structural steel range to Bhopal: TMT bars (Fe 500D from SAIL, Tata Tiscon, Jindal — 8mm to 32mm), MS angles (25x25mm to 200x200mm), ISMC channels (75mm to 400mm), ISMB beams (100mm to 600mm), MS plates (6mm to 80mm per IS 2062), and MS flats/rounds. Widely used for government construction projects, Smart City development, AIIMS expansion and commercial building projects across Bhopal." },
  { q: "Can you supply to Mandideep industrial area?", a: "Absolutely. Mandideep AKVN industrial area is one of our regular supply points in MP. We deliver SS 316L pipes for pharma companies, carbon steel piping for chemical plants, flanges and fittings for process industries, and structural steel for new factory construction. With 1-day delivery from Vadodara, we serve over 30 companies in Mandideep industrial belt including pharmaceutical, chemical, food processing and engineering firms." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","name":"Creative Metal Industries — Steel Supplier Bhopal","description":"Leading steel supplier in Bhopal offering SS pipes, carbon steel, alloy steel, structural steel, pipe fittings and flanges for BHEL, Mandideep industries and government projects.","telephone":"+91-99982-80619","url":"https://www.creativemetalind.com/steel-supplier-bhopal","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"City","name":"Bhopal","containedInPlace":{"@type":"State","name":"Madhya Pradesh"}},"priceRange":"$$","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"34","bestRating":"5"}},{"@type":"Product","name":"Steel Pipes & Structural Steel — Bhopal Supply","description":"SS, CS, alloy pipes, structural steel, fittings and flanges supplied to Bhopal industries including BHEL and Mandideep.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"55","highPrice":"15000","offerCount":"5000+","availability":"https://schema.org/InStock"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Bhopal","item":"https://www.creativemetalind.com/steel-supplier-bhopal"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierBhopal() {
  return (
    <>
      <Title>Steel Supplier Bhopal | SS Pipe & Structural | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Bhopal — SS pipes, structural steel, pipe fittings for BHEL & Mandideep industries. 1-day delivery from Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-bhopal" />
      <Meta property="og:title" content="Steel Supplier Bhopal | SS Pipe, Structural Steel | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Bhopal — SS pipes, structural steel, fittings. 1-day delivery. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-bhopal" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Bhopal | SS Pipe & Structural | CMI" />
      <Meta name="twitter:description" content="Steel supplier Bhopal — SS, CS, structural steel. 1-day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Bhopal" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Bhopal</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Bhopal — SS Pipes, Structural Steel &amp; Industrial Piping
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is Madhya Pradesh's leading <strong>steel supplier in Bhopal</strong>, serving the state capital's industrial ecosystem with stainless steel pipes, carbon steel pipes, structural steel, pipe fittings, flanges and alloy steel tubes. We supply BHEL Bhopal — India's largest heavy electrical equipment manufacturer, Mandideep industrial area's pharmaceutical and chemical plants, state government infrastructure projects, and MP's power generation sector including Vindhyachal STPP and Sanjay Gandhi TPS. Located just 500 km from Bhopal, our Vadodara warehouse ensures <strong>1-day delivery</strong> — making us the most responsive steel supplier in Madhya Pradesh, faster than Delhi or Mumbai-based competitors for the entire MP region.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range for Bhopal Industries</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Bhopal Industries Choose CMI</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>1-day delivery — closest major supplier:</strong> Just 500 km from Vadodara — same-day dispatch, next-day delivery to anywhere in Bhopal</li>
            <li><strong>BHEL Bhopal expertise:</strong> Alloy steel pipes, precision SS tubes, exotic alloys meeting BHEL's stringent quality specifications</li>
            <li><strong>Government project ready:</strong> All materials as per IS/ASTM standards with complete documentation for government tender compliance</li>
            <li><strong>Mandideep industrial specialist:</strong> SS 316L for pharma, CS piping for chemical, structural steel for factory construction — daily deliveries</li>
            <li><strong>Power plant IBR stock:</strong> P91, P22, P11 alloy pipes with IBR Form III-C for Vindhyachal, Birsinghpur and MP thermal plants</li>
            <li><strong>Direct mill pricing:</strong> No Bhopal dealer markup — materials sourced directly from Jindal, SAIL, Sumitomo, Vallourec, ISMT</li>
            <li><strong>Full documentation:</strong> Original MTC 3.1/3.2, IBR certification, PMI reports, third-party inspection — as per project requirements</li>
            <li><strong>13+ years serving MP:</strong> Trusted by 100+ MP companies since 2012 — consistent quality and delivery across the state</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Bhopal &amp; MP</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas — Bhopal &amp; Madhya Pradesh</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Govindpura Industrial","Mandideep AKVN","BHEL Township","Bairagarh Industrial","Hoshangabad Road","Raisen Industrial Area","Vidisha Industrial","Sagar Cement Belt","Satna Cement Hub","Itarsi Ordnance","Jabalpur Industrial","Singrauli Power Belt"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete CMI Product Lines for Bhopal</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          CMI is your single-source steel supplier for all industrial requirements in Bhopal and Madhya Pradesh. Our comprehensive range includes <strong>SS pipes and tubes</strong> (seamless, welded, electropolished — 304, 316L, 321, 310, 904L), <strong>carbon steel pipes</strong> (A106, A53, API 5L, ERW IS 1239 for water and gas), <strong>alloy steel pipes</strong> (P91/P22/P11 with IBR certification for power plants), <strong>pipe fittings</strong> (buttweld and forged — elbows, tees, reducers, caps in all materials), <strong>flanges</strong> (WN, SO, blind, lap-joint — class 150 to 2500#), <strong>steel plates</strong> (SA 516 Gr.70, IS 2062, boiler quality, NACE HIC), <strong>TMT bars</strong> (Fe 500D — 8mm to 32mm from SAIL, Tata, Jindal), <strong>MS structural steel</strong> (angles, channels, beams, flats, rounds), and <strong>exotic alloys</strong> (Inconel, Hastelloy, Monel, Duplex 2205). One supplier, complete traceability, next-day Bhopal delivery.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Bhopal</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel in Bhopal? Get Quote — 1-Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS Pipes, Structural Steel, Fittings, Flanges — All grades. Ready stock Vadodara. Next-day Bhopal.</p>
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
            {href:"/steel-supplier-indore",label:"Steel Supplier Indore"},
            {href:"/steel-supplier-nagpur",label:"Steel Supplier Nagpur"},
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/steel-supplier-raipur",label:"Steel Supplier Raipur"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-supplier-bhopal" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Bhopal | SS Pipes, Structural Steel, Fittings | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
