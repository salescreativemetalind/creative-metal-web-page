/**
 * /steel-supplier-raipur
 * Target: "steel supplier Raipur", "SS pipe Raipur",
 * "structural steel Raipur", "pipe fittings Raipur"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310, 904L", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L, IS 1239", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P11, P22, P91, P5, P9", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "Structural Steel", grades: "TMT Fe500D, MS Angle, ISMC, ISMB, Plates", sizes: "Per IS standards", type: "Hot Rolled", stock: "Ready Stock" },
  { category: "Steel Plates", grades: "SA 516 Gr.70, IS 2062, BQ, NACE HIC", sizes: "6mm to 150mm", type: "Hot Rolled", stock: "Ready Stock" },
  { category: "Pipe Fittings", grades: "SS, CS, Alloy — BW & Forged", sizes: "1/2\" to 48\"", type: "Elbows, Tees, Reducers", stock: "Ready Stock" },
  { category: "Flanges", grades: "SS 304/316L, CS A105, Alloy F11/F22", sizes: "1/2\" to 48\"", type: "WN, SO, Blind", stock: "Ready Stock" },
  { category: "Duplex & Exotic Alloys", grades: "Duplex 2205, Inconel, Hastelloy, Monel", sizes: "1/2\" to 16\"", type: "Seamless", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F3ED}", name: "Bhilai Steel Plant (SAIL)", desc: "India's flagship integrated steel plant — alloy pipes, precision tubes, exotic alloy fittings for plant maintenance and expansion projects" },
  { icon: "\u{1F9F1}", name: "Sponge Iron & Steel Plants", desc: "Chhattisgarh steel corridor — Monnet, Jayaswal Neco, Godawari — complete piping solutions, structural steel and plates for mini steel plants" },
  { icon: "\u26A1", name: "Korba TPS (NTPC)", desc: "Korba Super Thermal Power Station — alloy steel P91/P22/P11 boiler tubes with IBR Form III-C, high-pressure fittings and flanges" },
  { icon: "\u26CF\uFE0F", name: "NMDC & Mining", desc: "NMDC Bailadila iron ore mines, Chhattisgarh mineral belt — heavy structural steel, abrasion-resistant plates, high-pressure piping" },
  { icon: "\u{1F4A8}", name: "Aluminum (BALCO)", desc: "Bharat Aluminium Company Korba — SS and alloy piping for smelter, carbon steel for material handling, precision tubes for process" },
  { icon: "\u{1F3D7}\uFE0F", name: "Cement & Construction", desc: "UltraTech, ACC, Ambuja, Lafarge plants — structural steel, abrasion-resistant piping, TMT bars for new capacity expansion" },
];

const FAQS = [
  { q: "Who is the best steel supplier in Raipur?", a: "Creative Metal Industries (CMI) is a leading steel supplier serving Raipur and Chhattisgarh since 2012. While Raipur itself is a steel hub with Bhilai Steel Plant nearby, CMI offers specialized products that local mills don't produce — SS pipes (304, 316L, 321, 904L), alloy steel (P91, P22, P11 with IBR), exotic alloys (Inconel, Hastelloy, Duplex), precision fittings and flanges. We serve Bhilai Steel Plant maintenance, sponge iron plants, NTPC Korba, NMDC mines and BALCO. Delivery from Vadodara in 1-2 days." },
  { q: "What is the delivery time from Vadodara to Raipur?", a: "Delivery from our Vadodara warehouse to Raipur is 1-2 days via road (approximately 900 km via NH48/NH53). This makes CMI one of the fastest suppliers for specialized steel products to Chhattisgarh. We deliver to Urla Industrial Area, Siltara Industrial, Bhilai Township, Korba NTPC, Bilaspur industrial, NMDC Bailadila and all locations across Raipur, Durg-Bhilai and the entire Chhattisgarh state." },
  { q: "Do you supply alloy steel pipes for NTPC Korba?", a: "Yes, we supply ASTM A335 P91, P22, P11, P5 and P9 alloy steel seamless pipes specifically for NTPC Korba Super Thermal Power Station and other Chhattisgarh power plants. All pipes supplied with IBR Form III-C certification, material test certificates (MTC 3.1/3.2), and third-party inspection reports from BVIS/TUV. We maintain ready stock for emergency boiler shutdown requirements, enabling fastest dispatch to Korba when critical." },
  { q: "What specialized products do you supply that Bhilai/local mills don't?", a: "While Bhilai Steel Plant produces structural steel and plates, CMI supplies specialized products they don't manufacture: stainless steel seamless/welded pipes (304, 316L, 321, 310, 904L), alloy steel IBR pipes (P91, P22, P11), exotic alloys (Inconel 600/625, Hastelloy C276, Monel 400, Duplex 2205), precision forged fittings and flanges (class 150-2500#), NACE HIC resistant plates and electropolished SS tubes. These niche products are essential for plant maintenance." },
  { q: "Can you supply structural steel to sponge iron plants in Raipur?", a: "Absolutely. Chhattisgarh's sponge iron and mini steel plant corridor is one of our key markets. We supply MS plates (IS 2062 — 6mm to 80mm) for storage silos and equipment fabrication, structural steel (TMT bars, angles, channels, beams) for plant construction, carbon steel pipes (IS 1239, A106) for process piping, and heavy-gauge flanges and fittings. We serve Monnet Ispat, Jayaswal Neco, Godawari Power, and 20+ other steel plants." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-raipur#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Raipur","description":"Leading specialized steel supplier in Raipur offering SS pipes, alloy steel, exotic alloys, pipe fittings and flanges for Bhilai Steel Plant, NTPC Korba, NMDC and sponge iron plants.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-raipur","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"City","name":"Raipur","containedInPlace":{"@type":"State","name":"Chhattisgarh"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Raipur","item":"https://www.creativemetalind.com/steel-supplier-raipur"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierRaipur() {
  return (
    <>
      <Title>Steel Supplier Raipur | SS Pipe & Alloy Steel | CMI</Title>
      <Meta name="robots" content="noindex, follow" />
      <Meta name="description" content="Steel supplier Raipur — SS pipes, alloy steel, structural steel for Bhilai, NTPC Korba & sponge iron plants. 1-2 day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-raipur" />
      <Meta property="og:title" content="Steel Supplier Raipur | SS Pipe, Alloy Steel, Exotic Alloys | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Raipur — SS pipes, alloy steel, exotic alloys. 1-2 day delivery. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-raipur" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Raipur | SS Pipe & Alloy Steel | CMI" />
      <Meta name="twitter:description" content="Steel supplier Raipur — SS, alloy, structural steel. 1-2 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Raipur" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Raipur</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Raipur — SS Pipes, Alloy Steel &amp; Structural Steel
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is Chhattisgarh's specialist <strong>steel supplier in Raipur</strong>, providing stainless steel pipes, alloy steel tubes, exotic alloys, pipe fittings, flanges and structural steel to India's steel heartland. While Raipur and Bhilai are known for primary steel production, they require specialized products that integrated mills don't manufacture — and that's where CMI fills the gap. We serve Bhilai Steel Plant (SAIL) for plant maintenance and upgrades, sponge iron and mini steel plants across the Chhattisgarh corridor, NTPC Korba Super Thermal Power Station, NMDC Bailadila iron ore mines, and BALCO aluminum at Korba. Located just 900 km away, our Vadodara warehouse delivers within <strong>1-2 days</strong> — faster than any Mumbai or Kolkata based specialized supplier for the Chhattisgarh region.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range for Raipur Industries</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Raipur Industries Choose CMI</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Specialized products local mills don't make:</strong> SS seamless pipes, alloy IBR tubes, Inconel, Hastelloy, Duplex — niche products for plant maintenance</li>
            <li><strong>Bhilai Steel Plant supplier:</strong> SS pipes, alloy fittings, exotic alloys for BSP maintenance, COB upgrades and coke oven piping</li>
            <li><strong>NTPC Korba IBR ready stock:</strong> P91, P22, P11 alloy pipes with IBR Form III-C for emergency boiler shutdown and planned outages</li>
            <li><strong>1-2 day delivery advantage:</strong> Just 900 km from Vadodara — faster than Mumbai, Kolkata or Chennai for Chhattisgarh deliveries</li>
            <li><strong>Sponge iron plant expertise:</strong> MS plates, structural steel, CS piping, flanges — complete package for mini steel plant maintenance and expansion</li>
            <li><strong>Direct mill pricing:</strong> Sourced directly from Jindal, ISMT, Sumitomo, Vallourec, Sandvik — no trader margins</li>
            <li><strong>Full documentation:</strong> MTC 3.1/3.2, IBR certification, NABL test reports, PMI, third-party inspection — meeting PSU procurement standards</li>
            <li><strong>13+ years industrial experience:</strong> Proven track record supplying to steel plants, power stations and mining operations across India</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Raipur &amp; Chhattisgarh</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas — Raipur &amp; Chhattisgarh</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Urla Industrial Area","Siltara Industrial","Bhilai Township (SAIL)","Durg Industrial","Korba NTPC Campus","BALCO Korba","NMDC Bailadila","Bilaspur Industrial","Raigarh Steel Belt","Rajnandgaon Industrial","Dhamtari Area","Jagdalpur (NMDC)"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete CMI Product Lines for Raipur</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          CMI is your specialist steel supplier for all specialized piping and alloy requirements in Raipur and Chhattisgarh. Our product range includes <strong>SS pipes and tubes</strong> (seamless, welded — 304, 316L, 321, 310, 904L for process and maintenance), <strong>alloy steel pipes</strong> (P91/P22/P11 with IBR for thermal power plants), <strong>carbon steel pipes</strong> (A106, A53, API 5L, IS 1239 for process and utility), <strong>exotic alloys</strong> (Inconel 600/625 for high-temperature, Hastelloy C276 for corrosion, Monel 400, Duplex 2205 for aggressive environments), <strong>pipe fittings</strong> (buttweld and forged in all materials — elbows, tees, reducers, caps), <strong>flanges</strong> (WN, SO, blind, ring-type-joint — class 150 to 2500#), <strong>steel plates</strong> (SA 516 Gr.70, IS 2062, NACE HIC, abrasion-resistant), <strong>structural steel</strong> (TMT bars, angles, channels, beams), and <strong>high-pressure valves and gaskets</strong>. One supplier for all specialized steel — delivered in 1-2 days.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Raipur</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel in Raipur? Get Quote — 1-2 Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS Pipes, Alloy Steel, Exotic Alloys, Fittings — All grades. Ready stock. Fast delivery to Chhattisgarh.</p>
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
            {href:"/inconel-pipe-supplier-india",label:"Inconel Pipe Supplier India"},
            {href:"/steel-supplier-nagpur",label:"Steel Supplier Nagpur"},
            {href:"/steel-supplier-bhopal",label:"Steel Supplier Bhopal"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe Supplier India"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <LocationContent slug="raipur" />
      
        <RelatedPages currentPath="/steel-supplier-raipur" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Raipur | SS Pipes, Alloy Steel, Exotic Alloys | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
