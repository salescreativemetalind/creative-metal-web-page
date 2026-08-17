/**
 * /ss-904l-pipe-supplier-india
 * Target: "SS 904L pipe supplier India acid resistant", "SS 904L pipe",
 * "stainless steel 904L seamless pipe India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "SS 904L (TP904L)", composition: "20Cr-25Ni-4.5Mo-1.5Cu", sizes: "1/2\" to 12\"", schedule: "SCH 10S–80S", apps: "Sulphuric acid plants, phosphoric acid", ht: "Solution Annealed 1100-1150°C", stock: "Ready Stock" },
  { grade: "SS 904L Welded", composition: "20Cr-25Ni-4.5Mo-1.5Cu", sizes: "2\" to 12\"", schedule: "SCH 10S–40S", apps: "Seawater cooling, bleach plants", ht: "Solution Annealed", stock: "Ready Stock" },
  { grade: "SS 904L (ASTM A312)", composition: "N08904 Super Austenitic", sizes: "1/2\" to 10\"", schedule: "SCH 10S–80S", apps: "Pulp & paper, chemical processing", ht: "Solution Annealed + Pickled", stock: "Available" },
  { grade: "SS 904L Tube (A213)", composition: "20Cr-25Ni-4.5Mo-1.5Cu", sizes: "OD 12.7mm to 114.3mm", schedule: "BWG 14-20", apps: "Heat exchangers, condensers", ht: "Solution Annealed", stock: "Available" },
];

const FAQS = [
  { q: "Why choose SS 904L over SS 316L for acid service?", a: "SS 904L was specifically designed for sulphuric acid service where 316L fails. The key advantages are: higher molybdenum (4.5% vs 2.5%) gives far better pitting and crevice corrosion resistance, copper addition (1.5%) provides specific resistance to hot concentrated sulphuric acid, and higher nickel (25% vs 10%) improves resistance to stress corrosion cracking. The PREN (Pitting Resistance Equivalent Number) of 904L is approximately 36 compared to 316L's 25. In sulphuric acid above 60% concentration and 40°C, 316L corrodes rapidly while 904L remains resistant." },
  { q: "What concentration of sulphuric acid can SS 904L handle?", a: "SS 904L shows excellent resistance to sulphuric acid across a wide range of concentrations. At room temperature, it resists all concentrations from 0-98%. At elevated temperatures (up to 80°C), it handles concentrations up to about 70% effectively. In hot concentrated H2SO4 (above 80°C), its resistance depends on velocity and aeration conditions. The copper content specifically improves performance in reducing acid environments. For concentrations above 90% at temperatures above 100°C, Hastelloy C-276 may be needed. Creative Metal Industries can help with material selection based on your exact operating conditions." },
  { q: "What is the PREN value of SS 904L and why does it matter?", a: "SS 904L has a PREN (Pitting Resistance Equivalent Number) of approximately 36, calculated as %Cr + 3.3(%Mo) + 16(%N) = 20 + 3.3(4.5) + 16(0.05) ≈ 36. This is significantly higher than 316L (PREN ~25) and approaches duplex 2205 (PREN ~35). PREN predicts resistance to pitting corrosion in chloride environments — higher is better. A PREN above 32 is generally considered resistant to seawater pitting. This makes 904L suitable for seawater cooling systems, chloride-containing chemical processes, and offshore applications." },
  { q: "How does SS 904L compare to Hastelloy in terms of cost?", a: "SS 904L costs approximately 40-50% less than Hastelloy C-276 while providing adequate performance for many acid service applications. Hastelloy C-276 is superior in hot concentrated acids and mixed acid environments, but 904L is sufficient for most sulphuric acid plants, phosphoric acid production, and seawater applications. This makes 904L a cost-effective alternative to exotic nickel alloys where the operating conditions are within its corrosion resistance envelope. Contact CMI at +91 99982 80619 for comparative pricing and material selection guidance." },
  { q: "What sizes of SS 904L pipe are available from CMI?", a: "Creative Metal Industries stocks SS 904L seamless pipes from 1/2 inch (15NB) to 12 inches (300NB) in schedules SCH 10S, 20S, 40S, and 80S per ASTM A312 TP904L. Welded pipes are available from 2 inches to 12 inches. Standard lengths are 5-7 metres (random length). We also stock 904L tubes per ASTM A213 in OD 12.7mm to 114.3mm for heat exchanger applications. Fittings (elbows, tees, reducers) and flanges in 904L are also available to complete your project requirements." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"SS 904L Super Austenitic Pipe","description":"SS 904L (N08904) super austenitic seamless and welded pipes per ASTM A312 TP904L. Acid resistant — sulphuric acid, phosphoric acid, seawater. Sizes 1/2\" to 12\". Creative Metal Industries, Vadodara.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"800","highPrice":"15000","offerCount":"200+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"22","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS 904L Pipe Supplier India","item":"https://www.creativemetalind.com/ss-904l-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Ss904lPipeSupplierIndia() {
  return (
    <>
      <Title>SS 904L Pipe Supplier India | Acid Resistant | Super Austenitic | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS 904L pipe supplier India — ASTM A312 TP904L super austenitic seamless & welded pipes. Acid resistant for H2SO4, H3PO4, seawater. Sizes 1/2&quot; to 12&quot;. Ready stock Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-904l-pipe-supplier-india" />
      <Meta property="og:title" content="SS 904L Pipe Supplier India | Super Austenitic Acid Resistant | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS 904L pipe supplier India — super austenitic, acid resistant. Sulphuric acid, phosphoric acid, seawater service. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-904l-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS 904L Pipe Supplier India | Acid Resistant | CMI" />
      <Meta name="twitter:description" content="SS 904L pipe supplier India — acid resistant super austenitic. H2SO4 service. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS 904L Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>SS 904L Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            SS 904L Pipe Supplier in India — Super Austenitic Acid Resistant
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's specialist <strong>SS 904L pipe supplier</strong> stocking ASTM A312 TP904L super austenitic seamless and welded pipes for aggressive acid environments. SS 904L (UNS N08904) with its unique 20Cr-25Ni-4.5Mo-1.5Cu composition was specifically designed for sulphuric acid service — the copper addition provides exceptional resistance to hot concentrated H2SO4. With a PREN of ~36, it also excels in seawater, phosphoric acid, and chloride-containing chemical processes. A cost-effective alternative to expensive Hastelloy and Inconel alloys. Ready stock sizes 1/2" to 12" NB at our Vadodara warehouse.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS 904L Pipe Grades — Ready Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Schedules</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Heat Treatment</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.composition}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.schedule}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.ht}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications & Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A312 / SA312 (Pipe) · ASTM A213 / SA213 (Tube)"},
            {label:"Grade",value:"TP904L (UNS N08904)"},
            {label:"Type",value:"Seamless & Welded (EFW)"},
            {label:"Size Range",value:"1/2\" to 12\" (15NB to 300NB)"},
            {label:"Schedules",value:"SCH 10S, 20S, 40S, 80S"},
            {label:"Max Service Temp",value:"Up to 400°C (limited by sensitization above this)"},
            {label:"Composition",value:"19-23% Cr, 23-28% Ni, 4-5% Mo, 1-2% Cu, ≤0.02% C"},
            {label:"PREN Value",value:"~36 (Pitting Resistance Equivalent Number)"},
            {label:"Testing",value:"Hydrostatic, UT, IGC (A262-E), PMI, Positive Material ID"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, NACE MR0175 compliance available"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of SS 904L Pipe in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Sulphuric acid plants:</strong> Piping for hot concentrated H2SO4, absorption towers, acid coolers</li>
            <li><strong>Phosphoric acid:</strong> Evaporators, heat exchangers, piping in fertilizer plants</li>
            <li><strong>Bleach plants:</strong> Chlorine dioxide piping, bleach washers in pulp & paper mills</li>
            <li><strong>Seawater systems:</strong> Cooling water piping, desalination plant components, offshore platforms</li>
            <li><strong>Petrochemical:</strong> Acetic acid production, isophthalic acid, terephthalic acid plants</li>
            <li><strong>Pharmaceutical:</strong> Reactor vessels, piping for corrosive pharmaceutical intermediates</li>
            <li><strong>Flue gas desulphurization:</strong> FGD scrubber components, slurry piping</li>
            <li><strong>Mining & metallurgy:</strong> Leaching circuits, copper refining, zinc processing</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SS 904L Pipe from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Specialist stock:</strong> One of the few suppliers in India maintaining 904L pipe inventory — not just indent-based</li>
          <li><strong>Acid service expertise:</strong> Material selection guidance for H2SO4, H3PO4, HCl, and mixed acid environments</li>
          <li><strong>Cost-effective alternative:</strong> 904L at 40-50% lower cost than Hastelloy C-276 for many acid applications</li>
          <li><strong>Full documentation:</strong> MTC (EN 10204 3.1/3.2), IGC test per ASTM A262, PMI report, solution annealing certificate</li>
          <li><strong>NACE compliance:</strong> Material meeting NACE MR0175/ISO 15156 for sour service applications available</li>
          <li><strong>Complete range:</strong> Pipes, tubes, fittings, flanges, sheets, and plates — all in 904L from single source</li>
          <li><strong>Pan-India delivery:</strong> Same-day dispatch from Vadodara to Gujarat, Maharashtra, Rajasthan, and all India</li>
          <li><strong>Export:</strong> Supplying to chemical plants in Middle East, Africa, Southeast Asia, and Europe</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS 904L Pipe</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"1rem","margin-bottom":"2rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.1rem 1.4rem"}}>
              <summary style={{"font-weight":"700","font-size":"0.95rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary>
              <p style={{"font-size":"0.9rem",color:"#374151","line-height":"1.7","margin-top":"0.75rem","margin-bottom":0}}>{f.a}</p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-top":"3rem"}}>
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need SS 904L Acid Resistant Pipes? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. ASTM A312 TP904L. Complete documentation.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+SS+904L+pipe+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/duplex-2205-plate-supplier-india", label:"Duplex 2205 Plate"},
              {href:"/ss-310-pipe-supplier-india", label:"SS 310 High Temp Pipe"},
              {href:"/ss-410-pipe-supplier-india", label:"SS 410 Martensitic Pipe"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel 625/600 Pipe"},
              {href:"/duplex-steel-supplier-vadodara", label:"Duplex 2507 Super Duplex"},
              {href:"/alloy-steel-pipe-supplier-india", label:"Alloy Steel Pipe"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/ss-904l-pipe-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS 904L Pipe Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
