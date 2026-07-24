/**
 * /ss-seamless-pipe-supplier-india
 * Target: "SS seamless pipe supplier India", "SS seamless pipe manufacturer India",
 * "ASTM A312 pipe supplier", "stainless steel seamless pipe India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"SS 304/304L", spec:"ASTM A312 TP304/TP304L", sizes:"6NB–600NB, SCH 5S–XXS", apps:"General chemical, food, dairy", stock:"Ready Stock" },
  { grade:"SS 316/316L", spec:"ASTM A312 TP316/TP316L", sizes:"6NB–600NB, SCH 5S–XXS", apps:"Marine, pharma, chloride service", stock:"Ready Stock" },
  { grade:"SS 321", spec:"ASTM A312 TP321", sizes:"6NB–400NB, SCH 10S–160", apps:"High-temp stabilised service", stock:"Ready Stock" },
  { grade:"SS 317L", spec:"ASTM A312 TP317L", sizes:"6NB–300NB", apps:"Aggressive acid, pulp & paper", stock:"Available" },
  { grade:"SS 310/310S", spec:"ASTM A312 TP310S", sizes:"6NB–300NB", apps:"Furnace, kiln, high-temp oxidation", stock:"Available" },
  { grade:"SS 347", spec:"ASTM A312 TP347", sizes:"6NB–300NB", apps:"High-temp Nb-stabilised", stock:"Available" },
  { grade:"SS 904L", spec:"ASTM A312 N08904", sizes:"6NB–200NB", apps:"Sulphuric/phosphoric acid", stock:"Available" },
  { grade:"Duplex 2205", spec:"ASTM A790 S31803", sizes:"6NB–300NB, SCH 5S–80S", apps:"Oil & gas, desalination", stock:"Ready Stock" },
  { grade:"Super Duplex 2507", spec:"ASTM A790 S32750", sizes:"6NB–200NB", apps:"Offshore, subsea, seawater", stock:"Available" },
];

const FAQS = [
  { q:"What sizes of SS seamless pipe do you stock in India?", a:"We stock SS seamless pipe from 6NB (1/8 inch) to 600NB (24 inch) in all schedules — SCH 5S, 10S, 20, 40S, 40, 80S, 80, 120, 160 and XXS. Standard random lengths 5-7 metres. Cut-to-length and fixed-length available on request. Ready stock at our Vadodara warehouse for immediate dispatch across India." },
  { q:"Which mills do you source SS seamless pipe from?", a:"We are authorised stockists for Sandvik (Sweden), Salzgitter Mannesmann (Germany), Ratnamani Metals (India), Venus Pipes (India) and Tubacex (Spain). All pipes come with original Mill Test Certificates and full heat number traceability." },
  { q:"Do you supply IBR certified SS seamless pipe?", a:"Yes. All grades available with IBR Form III-C certification from the mill for boiler and pressure vessel applications. We are an authorised IBR material supplier servicing power plants and boiler manufacturers across India." },
  { q:"What is the difference between SS seamless and SS welded pipe?", a:"SS seamless pipe is manufactured by piercing a solid billet — no weld seam exists. This gives uniform wall thickness and higher pressure rating. SS welded pipe (ERW/EFW) is rolled from flat strip and welded longitudinally — more economical for larger diameters and lower-pressure service. We stock both types." },
  { q:"Do you deliver SS seamless pipe across India?", a:"Yes. We deliver pan-India from our Vadodara stockyard. Same-day dispatch for Gujarat (Vadodara, Ahmedabad, Surat, Bharuch, Dahej). 2-4 day delivery to Mumbai, Delhi, Chennai, Kolkata, Hyderabad and all other locations." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"SS Seamless Pipe","description":"Stainless steel seamless pipe to ASTM A312 in grades SS 304, 316L, 321, 310S, Duplex 2205. Sizes 6NB–600NB, schedules SCH 5S–XXS. IBR, MTC certified.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"280","highPrice":"1800","offerCount":"500+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"47","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS Seamless Pipe Supplier India","item":"https://www.creativemetalind.com/ss-seamless-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SsSeamlessPipeSupplierIndia() {
  return (
    <>
      <Title>SS Seamless Pipe Supplier India | ASTM A312 All Grades | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="India's leading SS seamless pipe supplier and manufacturer. SS 304, 316L, 321, 310S, 904L, Duplex 2205 to ASTM A312. 6NB–600NB, SCH 5S–XXS. IBR, MTC certified. Ready stock Vadodara. Creative Metal Industries." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-seamless-pipe-supplier-india" />
      <Meta property="og:title" content="SS Seamless Pipe Supplier India | ASTM A312 | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS seamless pipe manufacturer India — SS 304, 316L, Duplex 2205. ASTM A312, 6NB–600NB, all schedules. IBR, NACE, MTC. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-seamless-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS Seamless Pipe Supplier India | ASTM A312 All Grades | CMI" />
      <Meta name="twitter:description" content="SS seamless pipe supplier India — 304, 316L, 321, Duplex 2205. 6NB–600NB. IBR, MTC. Ready stock Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS Seamless Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>›</span>
        <span>SS Seamless Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            SS Seamless Pipe Supplier in India — ASTM A312, All Grades
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's trusted <strong>SS seamless pipe supplier</strong> and <strong>stainless steel seamless pipe manufacturer</strong> stockist, holding 1,000+ pipe sizes in ready stock. We supply all austenitic grades (SS 304, 316L, 321, 317L, 310S, 347, 904L) plus Duplex 2205 and Super Duplex 2507 seamless pipes to <strong>ASTM A312</strong>, A213 and A790 — with IBR Form III-C, NACE and full MTC documentation. Same-day dispatch from our 1,092 sq.mtr GIDC Makarpura facility in Vadodara, Gujarat to anywhere in India.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS Seamless Pipe Grades — Ready Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"650px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Specification</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.spec}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standards",value:"ASTM A312, A213, A269, A790, A789"},
            {label:"Size Range",value:"6NB to 600NB (1/8\" to 24\")"},
            {label:"Schedules",value:"SCH 5S, 10S, 20, 40S, 40, 80S, 80, 120, 160, XXS"},
            {label:"Length",value:"Random 5–7m, Fixed, Cut-to-length"},
            {label:"End Finish",value:"Plain end, bevelled, threaded"},
            {label:"Testing",value:"Hydrostatic, UT, ET, IGC, PMI"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, IBR Form III-C"},
            {label:"Compliance",value:"NACE MR-01-75, HIC per TM-0284"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Choose CMI as Your SS Seamless Pipe Supplier in India?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>India's largest ready stock:</strong> 1,000+ SS seamless pipe sizes at GIDC Makarpura, Vadodara — same-day dispatch nationwide</li>
          <li><strong>Mill-authorised stockist:</strong> Sandvik, Ratnamani, Venus Pipes, Salzgitter, Tubacex — direct pricing, full traceability</li>
          <li><strong>All grades covered:</strong> 304 to 904L + Duplex 2205 + Super Duplex 2507 — one supplier for everything</li>
          <li><strong>IBR + NACE + MTC:</strong> Every pipe supplied with mandatory certifications for boiler, pressure vessel and sour service</li>
          <li><strong>TPI accepted:</strong> Inspection under DNV, TUV, SGS, BVIS, LRIS at our Vadodara facility</li>
          <li><strong>Value-added processing:</strong> Cut-to-length, beveling, threading, polishing, pickling, passivation in-house</li>
          <li><strong>Competitive pricing:</strong> Direct from manufacturer — no broker markup. Quote within 2 hours</li>
          <li><strong>Since 2012:</strong> 13+ years supplying India's refineries, power plants and EPC contractors</li>
        </ul>

        {/* Industries */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Supply SS Seamless Pipe To</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"🛢️",name:"Oil & Gas Refineries"},{icon:"🏭",name:"Petrochemical Plants"},{icon:"⚡",name:"Power & Energy"},{icon:"🧪",name:"Chemical & Pharma"},{icon:"🌱",name:"Fertilizer Industry"},{icon:"💧",name:"Water & Desalination"},{icon:"⚓",name:"Marine & Offshore"},{icon:"🏗️",name:"EPC Contractors"}].map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem","text-align":"center"}}>
              <span style={{"font-size":"1.3rem"}}>{ind.icon}</span>
              <p style={{"font-size":"0.85rem","font-weight":"600",color:"#111827",margin:"0.3rem 0 0"}}>{ind.name}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS Seamless Pipe India</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SS Seamless Pipe? Get a Quote in 2 Hours.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS 304, 316L, 321, Duplex 2205. ASTM A312. 6NB–600NB. IBR + MTC + NACE. Ready stock India.</p>
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
            {href:"/ss-304-316l-pipe-supplier-india",label:"SS 304 316L Pipe India"},
            {href:"/stainless-steel-supplier-vadodara",label:"Full SS Range Vadodara"},
            {href:"/blog/erw-vs-seamless-pipe",label:"ERW vs Seamless Comparison"},
            {href:"/blog/pipe-schedule-chart",label:"Pipe Schedule Chart"},
            {href:"/blog/ss-304-stainless-steel-guide",label:"SS 304 Grade Guide"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/ss-seamless-pipe-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS Seamless Pipe Supplier & Manufacturer India | ASTM A312 | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
