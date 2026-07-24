/**
 * /ss-flanges-supplier-vadodara
 * Target: "SS flange supplier Vadodara", "SS flanges supplier Gujarat",
 * "ASTM A182 flanges Vadodara", "stainless steel flanges supplier"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"F304/F304L", spec:"ASTM A182", class:"150–2500", sizes:"1/2\" to 60\"", apps:"General chemical, food, dairy", stock:"Ready Stock" },
  { grade:"F316/F316L", spec:"ASTM A182", class:"150–2500", sizes:"1/2\" to 60\"", apps:"Marine, pharma, chloride service", stock:"Ready Stock" },
  { grade:"F317L", spec:"ASTM A182", class:"150–1500", sizes:"1/2\" to 24\"", apps:"Aggressive acid, pulp & paper", stock:"Available" },
  { grade:"F321", spec:"ASTM A182", class:"150–2500", sizes:"1/2\" to 24\"", apps:"High-temp stabilised piping", stock:"Ready Stock" },
  { grade:"F310", spec:"ASTM A182", class:"150–600", sizes:"1/2\" to 24\"", apps:"Furnace, kiln, high-temp", stock:"Available" },
  { grade:"F904L", spec:"ASTM A182", class:"150–600", sizes:"1/2\" to 12\"", apps:"Sulphuric acid, phosphoric acid", stock:"Available" },
  { grade:"F51 (Duplex 2205)", spec:"ASTM A182", class:"150–2500", sizes:"1/2\" to 24\"", apps:"Oil & gas, desalination", stock:"Ready Stock" },
  { grade:"F53 (Super Duplex 2507)", spec:"ASTM A182", class:"150–2500", sizes:"1/2\" to 16\"", apps:"Offshore, subsea, seawater", stock:"Available" },
];

const FLANGE_TYPES = [
  { type:"Weld Neck (WNRF)", desc:"Full penetration butt-weld, highest integrity for high-pressure and high-temperature service" },
  { type:"Slip-On (SORF)", desc:"Slides over pipe, fillet welded both sides. Economical for lower-pressure applications" },
  { type:"Blind (BLRF)", desc:"Closes pipe end or vessel nozzle. Full pressure containment, allows future expansion" },
  { type:"Socket Weld (SWRF)", desc:"Pipe inserts into socket, fillet welded. For small-bore high-pressure piping (up to 2 inch)" },
  { type:"Threaded (Screwed)", desc:"NPT/BSP threaded, no welding required. For low-pressure utility and instrument connections" },
  { type:"Lap Joint", desc:"Used with stub end for easy alignment and bolt-up. Allows rotation, ideal for lined piping" },
  { type:"Orifice Flange", desc:"Tapping points for flow measurement. Used with orifice plate for differential pressure metering" },
  { type:"Ring Type Joint (RTJ)", desc:"Metal-to-metal seal with ring gasket. For high-pressure high-temperature critical service" },
];

const FAQS = [
  { q:"What types of SS flanges do you supply in Vadodara?", a:"We supply all standard flange types — Weld Neck (WNRF/WNFF), Slip-On (SORF), Blind (BLRF), Socket Weld (SWRF), Threaded, Lap Joint, Orifice, Long Weld Neck, Spectacle Blind, Spade and Ring Spacer. All flanges manufactured to ASTM A182, conforming to ASME B16.5 (1/2\" to 24\") and ASME B16.47 Series A and B (26\" to 60\")." },
  { q:"What pressure classes are available?", a:"We stock SS flanges in all ASME B16.5 pressure classes: Class 150, 300, 600, 900, 1500 and 2500. For large-bore flanges (above 24 inch), ASME B16.47 Series A (MSS SP-44) and Series B (API 605) are available. Pressure-temperature ratings are per ASME B16.5 Table 2." },
  { q:"Do you supply IBR certified SS flanges?", a:"Yes. All grades are available with IBR Form III-C certification from the manufacturer for boiler and pressure vessel applications. We are an authorised IBR material supplier. The IBR certification covers Weld Neck, Blind and Slip-On flanges in forged grades F304L, F316L and F321 for power plant and boiler applications." },
  { q:"What face types do you offer?", a:"We supply flanges in all face types: Raised Face (RF) — standard 1.6mm or 6.4mm raised, Flat Face (FF) — for mating with cast iron flanges, and Ring Type Joint (RTJ) — with machined groove for metal ring gasket seal. RTJ is used for high-pressure high-temperature critical applications in oil & gas." },
  { q:"Do you deliver flanges across Vadodara and Gujarat same day?", a:"Yes. We maintain ready stock of 5,000+ SS flanges at our GIDC Makarpura, Vadodara warehouse. Same-day dispatch for Vadodara city, Bharuch, Dahej, Ankleshwar, Ahmedabad, Surat, Rajkot and all Gujarat industrial areas. 2-4 day delivery across India — Mumbai, Delhi, Chennai, Hyderabad, Pune." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"SS Flanges","description":"Stainless steel flanges to ASTM A182 — Weld Neck, Slip-On, Blind, Socket Weld in SS 304L, 316L, 321, Duplex F51. ASME B16.5/B16.47. Class 150–2500. IBR, MTC certified.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"250","highPrice":"95000","offerCount":"5000+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"63","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS Flanges Supplier Vadodara","item":"https://www.creativemetalind.com/ss-flanges-supplier-vadodara"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SsFlangesSupplierVadodara() {
  return (
    <>
      <Title>SS Flanges Supplier Vadodara | ASTM A182 | ASME B16.5 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS flanges supplier Vadodara — weld neck, slip-on, blind, socket weld, threaded in SS 304L, 316L, 321, Duplex F51, Super Duplex F53. ASTM A182, ASME B16.5/B16.47. IBR certified. Creative Metal Industries." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-flanges-supplier-vadodara" />
      <Meta property="og:title" content="SS Flanges Supplier Vadodara | ASTM A182 | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS flanges supplier Vadodara — WNRF, SORF, Blind, SWRF. SS 304L, 316L, Duplex F51. ASTM A182, ASME B16.5. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-flanges-supplier-vadodara" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS Flanges Supplier Vadodara | ASTM A182 | ASME B16.5 | CMI" />
      <Meta name="twitter:description" content="SS flanges supplier Vadodara — 304L, 316L, 321, Duplex F51. ASME B16.5. Class 150–2500. Ready stock." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS Flanges Supplier Vadodara" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>SS Flanges Supplier Vadodara</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            SS Flanges Supplier in Vadodara — ASTM A182, All Types &amp; Grades
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is Vadodara's most trusted <strong>SS flange supplier</strong> with 5,000+ flanges in ready stock. We supply Weld Neck, Slip-On, Blind, Socket Weld, Threaded, Lap Joint and Orifice flanges in SS 304/304L, 316/316L, 317L, 321, 310, 904L, Duplex F51 (2205) and Super Duplex F53 (2507). All flanges forged to <strong>ASTM A182</strong>, dimensioned per <strong>ASME B16.5</strong> (Class 150-2500) and ASME B16.47 (Series A/B for large bore). IBR Form III-C certified, PMI tested. Same-day delivery across Vadodara, Gujarat and pan-India dispatch from our GIDC Makarpura facility.
          </p>
        </div>

        {/* Flange Types */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Types of SS Flanges We Supply</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {FLANGE_TYPES.map(f => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.95rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{f.type}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS Flange Grades — Ready Stock Vadodara</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"700px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Specification</th><th style={{padding:"0.7rem 0.8rem"}}>Class</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.spec}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.class}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Material Standard",value:"ASTM A182 / SA182"},
            {label:"Dimensions (Small)",value:"ASME B16.5 (1/2\" to 24\")"},
            {label:"Dimensions (Large)",value:"ASME B16.47 Series A/B (26\" to 60\")"},
            {label:"Pressure Class",value:"150, 300, 600, 900, 1500, 2500"},
            {label:"Face Types",value:"RF (Raised Face), FF (Flat Face), RTJ (Ring Type Joint)"},
            {label:"Size Range",value:"1/2\" to 60\" (15NB to 1500NB)"},
            {label:"Testing",value:"UT, Hardness, PMI, Hydro (where applicable)"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, IBR Form III-C"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Choose CMI as Your SS Flange Supplier in Vadodara?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>5,000+ flanges in stock:</strong> All types, grades and classes at our GIDC Makarpura warehouse — same-day dispatch across Vadodara and Gujarat</li>
          <li><strong>Local delivery advantage:</strong> Same-day delivery to Vadodara, Bharuch, Dahej PCPIR, Ankleshwar GIDC, Ahmedabad, Surat and all Gujarat industrial areas</li>
          <li><strong>Reputed forges:</strong> We stock flanges from Kanak Metal, Raaj Sagar, Guru Gautam, Metal Forge India — guaranteed IS/ASTM compliance</li>
          <li><strong>Full range:</strong> Small bore 1/2 inch to large bore 60 inch. Class 150 to 2500. RF, FF and RTJ faces</li>
          <li><strong>IBR certified:</strong> Dedicated IBR stock for boiler and power plant applications with Form III-C documentation</li>
          <li><strong>PMI verified:</strong> 100% Positive Material Identification on every flange before dispatch using handheld XRF</li>
          <li><strong>Project support:</strong> Bulk orders for EPC projects with complete documentation, tagging and custom packing</li>
          <li><strong>Since 2012:</strong> 13+ years serving Gujarat's refineries, pharma companies, chemical plants and EPC contractors</li>
        </ul>

        {/* Local Coverage */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Vadodara &amp; Gujarat Delivery Coverage</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
          As a Vadodara-based SS flange supplier, we offer same-day delivery to all major industrial areas in Gujarat:
        </p>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Vadodara GIDC Makarpura","Dahej PCPIR / SEZ","Bharuch GIDC","Ankleshwar GIDC","Ahmedabad Odhav/Vatva","Surat Sachin/Pandesara","Rajkot Metoda","Vapi / Silvassa","Jamnagar Reliance","Hazira Gas Complex"].map(loc => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{loc}</div>
          ))}
        </div>

        {/* Industries */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Supply SS Flanges To</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"\u{1F6E2}\uFE0F",name:"Oil & Gas Refineries"},{icon:"\u{1F3ED}",name:"Petrochemical Plants"},{icon:"\u26A1",name:"Power & Energy"},{icon:"\u{1F9EA}",name:"Pharmaceutical"},{icon:"\u{1F331}",name:"Fertilizer Industry"},{icon:"\u{1F4A7}",name:"Water Treatment"},{icon:"\u2693",name:"Marine & Offshore"},{icon:"\u{1F3D7}\uFE0F",name:"EPC Contractors"}].map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem","text-align":"center"}}>
              <span style={{"font-size":"1.3rem"}}>{ind.icon}</span>
              <p style={{"font-size":"0.85rem","font-weight":"600",color:"#111827",margin:"0.3rem 0 0"}}>{ind.name}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS Flanges Vadodara</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SS Flanges in Vadodara? Get Quote Today.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>WNRF, SORF, Blind, SWRF. SS 304L, 316L, Duplex F51. ASTM A182. Class 150–2500. IBR + MTC. Ready stock.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote →</a>
          </div>
        </div>

        {/* Internal Links */}
        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/ss-pipe-supplier-vadodara",label:"SS Pipe Supplier Vadodara"},
            {href:"/stainless-steel-supplier-vadodara",label:"Full SS Range Vadodara"},
            {href:"/ss-buttweld-fittings-supplier-india",label:"SS Buttweld Fittings India"},
            {href:"/blog/ss-pipe-fittings-flanges-guide",label:"SS Fittings & Flanges Guide"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe India"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/ss-flanges-supplier-vadodara" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS Flange Supplier Vadodara | ASTM A182 | ASME B16.5 | Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
