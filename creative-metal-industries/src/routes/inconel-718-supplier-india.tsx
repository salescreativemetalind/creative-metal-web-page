/**
 * /inconel-718-supplier-india
 * Target: "Inconel 718 round bar pipe supplier India", "Inconel 718 bar",
 * "N07718 nickel alloy supplier India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "Inconel 718 Round Bar (B637)", composition: "52Ni-19Cr-18Fe-5Nb-3Mo", sizes: "6mm to 300mm dia", schedule: "Forged / Hot Rolled", apps: "Gas turbines, rocket motors, fasteners", ht: "Solution + Age Hardened", stock: "Ready Stock" },
  { grade: "Inconel 718 Seamless Pipe (B444)", composition: "UNS N07718", sizes: "1/2\" to 8\" NB", schedule: "SCH 10S–80S", apps: "Oil & gas downhole, nuclear reactors", ht: "Solution Treated 980°C + Aged", stock: "Ready Stock" },
  { grade: "Inconel 718 Flat Bar", composition: "52Ni-19Cr-18Fe-5Nb-3Mo", sizes: "10mm to 150mm thick", schedule: "Hot Rolled / Forged", apps: "Tooling, dies, structural aerospace", ht: "Age Hardened (720°C + 620°C)", stock: "Available" },
  { grade: "Inconel 718 Wire / Filler", composition: "N07718 (AMS 5832)", sizes: "0.8mm to 4.0mm dia", schedule: "Spools / Coils", apps: "TIG/MIG welding, additive manufacturing", ht: "Annealed", stock: "Available" },
];

const FAQS = [
  { q: "Why is Inconel 718 age-hardenable and what makes it so strong?", a: "Inconel 718's exceptional strength comes from precipitation hardening through gamma double-prime (γ\") Ni3Nb precipitates that form during aging heat treatment. The alloy contains approximately 5% niobium which combines with nickel to form these coherent precipitates within the FCC matrix. The standard heat treatment involves solution treating at 980°C followed by two-step aging at 720°C (8 hours) and 620°C (8 hours). This produces yield strengths of 1035-1240 MPa — roughly 3x stronger than solution-annealed Inconel 625. The γ\" precipitates are sluggish to form, giving 718 excellent weldability compared to other precipitation-hardened superalloys." },
  { q: "What is the difference between Inconel 718 and Inconel 625?", a: "Inconel 718 and 625 differ fundamentally in their strengthening mechanism and application range. Inconel 718 is precipitation-hardened (age-hardenable) achieving yield strength of 1035+ MPa, while 625 is solid-solution strengthened with yield strength of only 415 MPa. However, 625 has superior corrosion resistance due to higher Mo content (9% vs 3%) and can operate at higher temperatures for corrosion service. Inconel 718 is limited to approximately 700°C for structural applications because γ\" precipitates become unstable above this temperature. Choose 718 when high strength is primary (aerospace fasteners, turbine discs), and 625 when corrosion resistance is primary (marine, chemical processing)." },
  { q: "Is Inconel 718 difficult to machine?", a: "Inconel 718 is considered one of the more machinable nickel superalloys, though still challenging compared to steel. In the solution-annealed condition (before aging), it machines reasonably well using carbide tooling with low cutting speeds (15-25 m/min), high feed rates, and generous coolant flow. After age hardening, machinability decreases significantly due to the high hardness (36-44 HRC). Best practices include: rigid machine setup to minimize vibration, sharp positive-rake carbide or ceramic inserts, constant engagement to avoid work hardening, and high-pressure coolant delivery. Most aerospace components are rough-machined in the annealed condition and finish-machined after aging." },
  { q: "What aerospace certifications are available for Inconel 718 from CMI?", a: "Creative Metal Industries supplies Inconel 718 with full aerospace traceability per AMS 5662 (bar, solution treated), AMS 5663 (bar, solution treated and aged), AMS 5664 (bar, high strength), and AMS 5589/5590 (sheet/plate). All material is supplied with DFARS compliance documentation, full chemical and mechanical test certificates per ASTM B637, and heat-lot traceability. We source from aerospace-approved mills including Special Metals, Carpenter Technology, ATI, and VDM Metals. Dual certification (ASTM + AMS) is standard. Contact us for specific OEM-approved material requirements." },
  { q: "What is the price range for Inconel 718 in India?", a: "Inconel 718 is one of the most expensive commercial nickel superalloys, with pricing in India typically ranging from Rs 3,000 to Rs 8,000 per kg depending on product form, size, condition, and quantity. Round bars in standard sizes (25-100mm) are at the lower end, while precision-ground bars, small diameters, and aerospace-certified material command premium pricing. The high cost reflects the expensive raw materials (nickel, niobium, molybdenum), complex vacuum melting (VIM+VAR) required for aerospace grades, and extensive testing. Contact Creative Metal Industries at +91 99982 80619 for competitive pricing from our ready stock inventory." },
  { q: "Can Inconel 718 be used in cryogenic applications?", a: "Yes, Inconel 718 exhibits excellent mechanical properties at cryogenic temperatures down to -253°C (liquid hydrogen temperature). Unlike many materials that become brittle at low temperatures, Inconel 718 actually shows increased strength with good ductility and toughness at cryogenic conditions. This makes it ideal for liquid oxygen and liquid hydrogen turbopump components in rocket engines, cryogenic valves, LNG plant equipment, and superconducting magnet structures. The combination of high strength at both elevated (up to 700°C) and cryogenic temperatures makes Inconel 718 uniquely versatile among engineering alloys." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"Inconel 718 Round Bar & Pipe — N07718","description":"Inconel 718 (UNS N07718) round bars per ASTM B637 and seamless pipes per ASTM B444. Age-hardenable, aerospace grade. 6mm to 300mm bar, 1/2\" to 8\" pipe. Creative Metal Industries, Vadodara, India.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"3000","highPrice":"8000","offerCount":"100+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"15","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Inconel 718 Supplier India","item":"https://www.creativemetalind.com/inconel-718-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Inconel718SupplierIndia() {
  return (
    <>
      <Title>Inconel 718 Round Bar &amp; Pipe Supplier India | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Inconel 718 round bar & pipe supplier India — ASTM B637/B444 N07718 age-hardenable superalloy. Aerospace, gas turbines, oil & gas. Bar 6-300mm, Pipe 1/2&quot;-8&quot;. Ready stock. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/inconel-718-supplier-india" />
      <Meta property="og:title" content="Inconel 718 Supplier India | N07718 Round Bar & Pipe | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Inconel 718 supplier India — N07718 age-hardenable superalloy. Aerospace, turbines, cryogenic. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/inconel-718-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Inconel 718 Supplier India | N07718 | CMI" />
      <Meta name="twitter:description" content="Inconel 718 round bar & pipe supplier India — age-hardenable superalloy. Aerospace grade. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Inconel 718 Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Inconel 718 Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Inconel 718 Round Bar & Pipe Supplier in India — N07718
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's trusted <strong>Inconel 718 supplier</strong> stocking round bars per ASTM B637 and seamless pipes per ASTM B444 in UNS N07718 age-hardenable nickel superalloy. Inconel 718 with its unique 52Ni-19Cr-18Fe-5Nb-3Mo composition achieves extraordinary strength through precipitation hardening — yield strengths exceeding 1035 MPa while retaining excellent corrosion resistance. The alloy performs from cryogenic (-253°C) to elevated temperatures (700°C), making it indispensable for aerospace gas turbines, rocket motors, oil & gas downhole tools, and nuclear applications. Ready stock bars 6-300mm and pipes 1/2"-8" at our Vadodara facility.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Inconel 718 Product Range — Ready Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Form</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Heat Treatment</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
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
            {label:"Standard (Bar)",value:"ASTM B637 / AMS 5662 / AMS 5663"},
            {label:"Standard (Pipe)",value:"ASTM B444 / AMS 5589 / AMS 5590"},
            {label:"Grade",value:"Inconel 718 (UNS N07718)"},
            {label:"Bar Sizes",value:"6mm to 300mm diameter (Round, Hex, Flat)"},
            {label:"Pipe Sizes",value:"1/2\" to 8\" NB, SCH 10S to 80S"},
            {label:"Service Temp Range",value:"-253°C to +700°C (structural)"},
            {label:"Yield Strength (Aged)",value:"1035-1240 MPa (150-180 ksi)"},
            {label:"Hardness (Aged)",value:"36-44 HRC"},
            {label:"Composition",value:"50-55% Ni, 17-21% Cr, 4.75-5.5% Nb, 2.8-3.3% Mo"},
            {label:"Melting Practice",value:"VIM + VAR (Vacuum Induction + Vacuum Arc Remelted)"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Inconel 718 in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Aerospace gas turbines:</strong> Turbine discs, blades, shafts, casings, combustion chambers — accounts for 30%+ of modern jet engine weight</li>
            <li><strong>Rocket motors:</strong> Turbopump components, thrust chambers, injectors — SpaceX Merlin engine uses 718 extensively</li>
            <li><strong>Oil & gas:</strong> Downhole tools, drill collars, wellhead components, subsea equipment, completion tools</li>
            <li><strong>Nuclear reactors:</strong> Core structural components, springs, fasteners, fuel spacer grids</li>
            <li><strong>Cryogenic equipment:</strong> LNG plant components, liquid hydrogen/oxygen systems, superconducting magnet supports</li>
            <li><strong>High-temp fasteners:</strong> Bolts, studs, nuts for turbines, pressure vessels, and nuclear applications to 700°C</li>
            <li><strong>Tooling & dies:</strong> Hot extrusion dies, metal injection molding components, hot forging dies</li>
            <li><strong>Power generation:</strong> Industrial gas turbine components, steam turbine bolting, high-temperature springs</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy Inconel 718 from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Aerospace-grade stock:</strong> VIM+VAR melted material from approved mills — Carpenter, ATI, Special Metals, VDM</li>
          <li><strong>Multiple forms:</strong> Round bar, flat bar, hex bar, pipe, tube, wire, and forgings in Inconel 718</li>
          <li><strong>AMS certified:</strong> Material per AMS 5662, 5663, 5664 with full aerospace traceability and DFARS compliance</li>
          <li><strong>Solution treated & aged:</strong> Available in both conditions — annealed for machining, aged for direct use</li>
          <li><strong>Cut-to-size service:</strong> Precision band-saw cutting to your required lengths with minimal kerf loss</li>
          <li><strong>Technical expertise:</strong> Guidance on heat treatment, machining parameters, and alloy selection for your application</li>
          <li><strong>Competitive pricing:</strong> Ready stock eliminates expensive air-freight and long lead times from international mills</li>
          <li><strong>Pan-India + export:</strong> Fast delivery across India and export to global aerospace, oil & gas, and power projects</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Inconel 718</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need Inconel 718 Bar or Pipe? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. ASTM B637 / B444. Aerospace certified. VIM+VAR.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+Inconel+718+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/inconel-600-pipe-supplier-india", label:"Inconel 600 Pipe"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel 625 Pipe"},
              {href:"/hastelloy-c22-pipe-supplier-india", label:"Hastelloy C22 Pipe"},
              {href:"/monel-k500-supplier-india", label:"Monel K500 Round Bar"},
              {href:"/incoloy-825-pipe-supplier-india", label:"Incoloy 825 Pipe"},
              {href:"/alloy-steel-pipe-supplier-india", label:"Alloy Steel Pipe"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/inconel-718-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Inconel 718 Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
