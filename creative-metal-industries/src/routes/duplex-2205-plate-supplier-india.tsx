/**
 * /duplex-2205-plate-supplier-india
 * Target: "Duplex 2205 plate supplier India", "S31803 plate",
 * "duplex stainless steel 2205 plate India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "Duplex 2205 (S31803)", composition: "22Cr-5Ni-3Mo-0.14N", sizes: "3mm to 60mm", schedule: "Width up to 2500mm", apps: "Chemical tanks, heat exchangers, pressure vessels", ht: "Solution Annealed 1020-1100°C", stock: "Ready Stock" },
  { grade: "Duplex 2205 (S32205)", composition: "22Cr-5Ni-3.2Mo-0.17N", sizes: "3mm to 100mm", schedule: "Width up to 3000mm", apps: "Offshore structures, bridges, FGD systems", ht: "Solution Annealed + Water Quenched", stock: "Ready Stock" },
  { grade: "Duplex 2205 (Hot Rolled)", composition: "22Cr-5Ni-3Mo-N", sizes: "6mm to 100mm", schedule: "Width 1500-3000mm", apps: "Storage tanks, structural members, clad plates", ht: "Solution Annealed 1050°C + WQ", stock: "Available" },
  { grade: "Duplex 2205 (ASTM A240)", composition: "22Cr-5Ni-3Mo-0.17N", sizes: "3mm to 50mm", schedule: "Width 1000-2500mm", apps: "Pressure vessels (ASME), process equipment", ht: "SA + Impact Tested", stock: "Available" },
];

const FAQS = [
  { q: "What is the difference between Duplex 2205 and SS 316L?", a: "Duplex 2205 offers roughly double the yield strength of 316L (450 MPa vs 205 MPa), allowing thinner sections and weight savings of 30-40%. Its PREN of ~35 provides far superior pitting resistance compared to 316L's ~25. Duplex 2205 also resists stress corrosion cracking (SCC) in chloride environments where 316L fails. Cost-wise, 2205 plate is 20-30% more expensive per kg than 316L, but the ability to use thinner plates often makes the total fabricated cost comparable or lower. Choose 2205 when strength, pitting, or SCC resistance are critical." },
  { q: "What is the difference between UNS S31803 and S32205?", a: "Both designations refer to Duplex 2205, but S32205 has tighter composition controls — specifically higher minimum nitrogen (0.14-0.20% vs 0.08-0.20%) and molybdenum (3.0-3.5% vs 2.5-3.5%). S32205 was introduced to ensure consistent PREN above 35 and reliable corrosion performance. Modern production typically meets S32205 requirements. For new projects, specify S32205 for guaranteed performance. Existing equipment designed to S31803 is perfectly acceptable. Creative Metal Industries stocks plates meeting both designations." },
  { q: "Can Duplex 2205 plate be cut and fabricated easily?", a: "Yes, but Duplex 2205 requires more force than austenitic grades due to its high strength. Plasma cutting and laser cutting work well. Oxy-fuel cutting is not recommended. For shearing, use equipment rated for double the force needed for 316L. Drilling requires slower speeds with higher feed rates and carbide tooling. Bending requires larger radii (typically 2-3t minimum) and more force. Hot forming should be done between 1100-1150°C followed by water quenching. CMI provides fabrication guidance and can supply pre-cut plates to your dimensions." },
  { q: "What is the maximum service temperature for Duplex 2205?", a: "Duplex 2205 should not be used above 300°C for extended service. The critical concern is 475°C embrittlement — prolonged exposure between 300-550°C causes spinodal decomposition of the ferrite phase into chromium-rich alpha-prime, drastically reducing toughness and ductility. Even brief exposure at 475°C can cause damage. For temperatures above 300°C, consider austenitic grades like 316L or 310. Below 300°C, Duplex 2205 excels with its combination of strength, corrosion resistance, and cost-effectiveness." },
  { q: "How is Duplex 2205 welded? What precautions are needed?", a: "Duplex 2205 is readily weldable with proper procedures. Key requirements: use over-alloyed filler metals (2209 or matching) to promote austenite formation in the weld. Control heat input between 0.5-2.5 kJ/mm — too low retains excess ferrite, too high causes sigma phase. Interpass temperature maximum 150°C. Post-weld heat treatment is generally not required. The target weld metal microstructure is 35-65% ferrite (measured by ferrite scope). No pre-heat needed for thickness above 3mm. CMI can recommend qualified WPS for your application." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"Duplex 2205 Stainless Steel Plate","description":"Duplex 2205 (UNS S31803/S32205) stainless steel plates per ASTM A240. 2x strength of 316L, PREN ~35. Thickness 3mm to 100mm. Creative Metal Industries, Vadodara.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"400","highPrice":"8000","offerCount":"400+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"36","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Duplex 2205 Plate Supplier India","item":"https://www.creativemetalind.com/duplex-2205-plate-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Duplex2205PlateSupplierIndia() {
  return (
    <>
      <Title>Duplex 2205 Plate Supplier India | S31803/S32205 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Duplex 2205 plate supplier India — ASTM A240 UNS S31803/S32205. 2x yield strength of 316L, PREN ~35. Thickness 3-100mm. Ready stock Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/duplex-2205-plate-supplier-india" />
      <Meta property="og:title" content="Duplex 2205 Plate Supplier India | S31803/S32205 High Strength | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Duplex 2205 plate supplier India — double strength of 316L, superior pitting resistance. ASTM A240. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/duplex-2205-plate-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Duplex 2205 Plate Supplier India | S31803 | CMI" />
      <Meta name="twitter:description" content="Duplex 2205 plate supplier India — S31803/S32205, 2x strength of 316L. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Duplex 2205 Plate Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Duplex 2205 Plate Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Duplex 2205 Plate Supplier in India — S31803/S32205
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's leading <strong>Duplex 2205 plate supplier</strong> stocking ASTM A240 UNS S31803/S32205 plates for high-strength corrosion-resistant applications. Duplex 2205 with its balanced 50% ferrite + 50% austenite microstructure delivers twice the yield strength of SS 316L (450 MPa vs 205 MPa) with a PREN of ~35 for excellent pitting and stress corrosion cracking resistance. The 22Cr-5Ni-3Mo-0.17N composition makes it a cost-effective alternative to exotic alloys for chemical storage tanks, heat exchangers, pressure vessels, offshore structures, and FGD systems. Ready stock from 3mm to 100mm thickness at our Vadodara warehouse.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Duplex 2205 Plate Grades — Ready Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Thickness</th><th style={{padding:"0.7rem 0.8rem"}}>Width</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Condition</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
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
            {label:"Standard",value:"ASTM A240 / SA240 (Plate) · EN 10088-2"},
            {label:"Grade",value:"Duplex 2205 (UNS S31803 / S32205)"},
            {label:"Type",value:"Hot Rolled Plate"},
            {label:"Thickness Range",value:"3mm to 100mm"},
            {label:"Width",value:"Up to 3000mm (standard 1500, 2000, 2500mm)"},
            {label:"Max Service Temp",value:"Up to 300°C (avoid 475°C embrittlement zone)"},
            {label:"Composition",value:"21-23% Cr, 4.5-6.5% Ni, 2.5-3.5% Mo, 0.14-0.20% N"},
            {label:"Mechanical Properties",value:"YS ≥450 MPa · UTS ≥620 MPa · Elongation ≥25%"},
            {label:"PREN Value",value:"~35 (Pitting Resistance Equivalent Number)"},
            {label:"Testing",value:"UT (SA578), Impact (-46°C), Ferrite Count, ASTM A923 (Sigma Phase)"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Duplex 2205 Plate in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Chemical processing:</strong> Storage tanks for chloride-containing chemicals, reactor vessels, agitators</li>
            <li><strong>Heat exchangers:</strong> Tubesheets, baffles, and shell plates for aggressive cooling water service</li>
            <li><strong>Pressure vessels:</strong> ASME Section VIII vessels — thinner walls due to high yield strength</li>
            <li><strong>Offshore oil & gas:</strong> Process piping, manifolds, subsea equipment, risers, umbilicals</li>
            <li><strong>Bridges & structures:</strong> Structural members in coastal/marine environments, pedestrian bridges</li>
            <li><strong>FGD systems:</strong> Flue gas desulphurization absorbers, quench towers, mist eliminators</li>
            <li><strong>Pulp & paper:</strong> Digesters, bleach washers, evaporators in kraft mills</li>
            <li><strong>Desalination:</strong> Reverse osmosis pressure vessels, flash chambers, brine heaters</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy Duplex 2205 Plate from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Extensive stock:</strong> Duplex 2205 plates from 3mm to 100mm thickness available ex-stock Vadodara</li>
          <li><strong>Both designations:</strong> Plates meeting S31803 and S32205 — dual certified material available</li>
          <li><strong>ASME compliant:</strong> SA240 material with full ASME documentation for pressure vessel fabrication</li>
          <li><strong>Full testing:</strong> UT (SA578 Level B), Impact tested at -46°C, Ferrite count (40-60%), ASTM A923 Method C</li>
          <li><strong>Plate cutting:</strong> Plasma and waterjet cutting to your dimensions — no minimum order for standard stock sizes</li>
          <li><strong>Fabrication support:</strong> Welding procedure guidance, heat input recommendations, ferrite measurement</li>
          <li><strong>Cost-effective:</strong> Duplex 2205 eliminates need for expensive alloys like 904L, Hastelloy in many applications</li>
          <li><strong>Pan-India delivery:</strong> Heavy plate transport with proper packaging — same-day dispatch for stock items</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Duplex 2205 Plate</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need Duplex 2205 Plates? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. S31803/S32205. ASME SA240 with full documentation.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+Duplex+2205+plate+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/ss-904l-pipe-supplier-india", label:"SS 904L Pipe (Acid Resistant)"},
              {href:"/duplex-steel-supplier-vadodara", label:"Duplex 2507 Super Duplex"},
              {href:"/ss-310-pipe-supplier-india", label:"SS 310 High Temp Pipe"},
              {href:"/ss-410-pipe-supplier-india", label:"SS 410 Martensitic Pipe"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel 625/600 Pipe"},
              {href:"/alloy-steel-pipe-supplier-india", label:"Alloy Steel Pipe"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/duplex-2205-plate-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Duplex 2205 Plate Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
