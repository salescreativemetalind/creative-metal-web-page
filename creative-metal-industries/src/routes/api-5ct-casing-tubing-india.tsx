/**
 * /api-5ct-casing-tubing-india
 * Target: "API 5CT casing tubing supplier India", "OCTG casing pipe India",
 * "J55 K55 N80 L80 P110 casing supplier"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { grade: "API 5CT J55", type: "Casing", sizes: "4.5 to 13.375 inch", connection: "STC / LTC / BTC", apps: "Surface casing, conductor pipe", ht: "Normalized / As-rolled", stock: "Ready Stock" },
  { grade: "API 5CT K55", type: "Casing", sizes: "4.5 to 13.375 inch", connection: "STC / LTC / BTC", apps: "Surface and intermediate casing", ht: "Normalized", stock: "Ready Stock" },
  { grade: "API 5CT N80 Type 1", type: "Casing", sizes: "4.5 to 9.625 inch", connection: "LTC / BTC / Premium", apps: "Intermediate casing, production casing", ht: "Normalized + Tempered", stock: "Ready Stock" },
  { grade: "API 5CT L80 Type 1", type: "Casing and Tubing", sizes: "2.375 to 9.625 inch", connection: "LTC / BTC / EUE / Premium", apps: "Sour service (H2S), production casing", ht: "Quench + Tempered", stock: "Available" },
  { grade: "API 5CT P110", type: "Casing", sizes: "4.5 to 9.625 inch", connection: "LTC / BTC / Premium", apps: "Deep wells, high-pressure production casing", ht: "Quench + Tempered", stock: "Available" },
  { grade: "API 5CT J55/K55", type: "Tubing", sizes: "2.375 to 4.5 inch", connection: "EUE / NUE / Premium", apps: "Production tubing, injection tubing", ht: "Normalized", stock: "Ready Stock" },
];

const FAQS = [
  { q: "What is API 5CT and what products does it cover?", a: "API 5CT is the American Petroleum Institute specification that covers seamless and welded steel casing and tubing used in oil and gas well drilling and completion operations. Casing is the structural pipe cemented in the wellbore to prevent collapse and isolate geological formations. Tubing is the smaller diameter pipe installed inside the casing through which oil or gas flows to the surface. The specification defines grades from H40 through Q125 with increasing yield strength, and covers requirements for chemical composition, mechanical properties, dimensions, threading, and testing. Creative Metal Industries supplies the most commonly used grades: J55, K55, N80, L80, and P110." },
  { q: "What is the difference between J55, K55, N80, L80, and P110 grades?", a: "These grades differ primarily in minimum yield strength and heat treatment, which determines their suitability for different well depths and conditions. J55 and K55 have minimum yield strength of 55,000 psi and are used for shallow to intermediate depth surface casing. N80 has 80,000 psi minimum yield and is used for intermediate and production casing at greater depths. L80 also has 80,000 psi yield but has a maximum hardness limit of 23 HRC making it suitable for sour service (H2S environments) per NACE MR0175. P110 has 110,000 psi minimum yield for the deepest, highest-pressure wells. Grade selection depends on well depth, formation pressures, and presence of corrosive gases." },
  { q: "What casing and tubing connections does Creative Metal Industries supply?", a: "We supply API 5CT casing and tubing with standard API connections as well as premium connections. Standard API casing connections include STC (Short Thread and Coupling), LTC (Long Thread and Coupling), and BTC (Buttress Thread and Coupling). Standard tubing connections include NUE (Non-Upset End) and EUE (External Upset End). We also supply premium connections from manufacturers like Tenaris (Blue, Dopeless), Vallourec (VAM), and TPCF that provide superior gas-tight sealing and higher torque resistance for critical wells including HPHT (High Pressure High Temperature) and deviated wellbore applications." },
  { q: "Do you supply NACE MR0175 compliant sour service casing?", a: "Yes, Creative Metal Industries stocks API 5CT L80 Type 1 casing and tubing that fully complies with NACE MR0175/ISO 15156 for sour service applications. L80 is specifically designed for wells containing hydrogen sulfide (H2S) with a controlled maximum hardness of 23 HRC to resist sulfide stress cracking (SSC). We supply L80 with complete documentation including hardness survey reports, NACE compliance certificates, and full traceability. For extremely sour environments, we also offer C90 and T95 grades with even more stringent metallurgical controls. All sour service products come from approved mills with documented quality management systems." },
  { q: "What sizes of OCTG casing and tubing are available from stock?", a: "Creative Metal Industries maintains ready stock of API 5CT casing in sizes from 4.5 inches (114.3mm) through 13.375 inches (339.7mm) in J55 and K55 grades with standard LTC/BTC connections. Popular production casing sizes of 5.5 inch, 7 inch, and 9.625 inch are stocked in N80 and L80 grades. Tubing is stocked from 2.375 inches (60.3mm) through 4.5 inches (114.3mm) in J55 and L80 grades with EUE connections. Standard lengths are Range 2 (7.62-9.14m) and Range 3 (11.58-13.72m). Non-standard sizes, premium connections, and higher grades like P110 are available on order with typical lead times of 6-10 weeks." },
  { q: "Which mills manufacture the API 5CT casing and tubing you supply?", a: "We source API 5CT OCTG products from globally recognized mills including Tenaris (Argentina/global), Vallourec (France/Brazil), TPCO and Baosteel (China), Jindal SAW (India), Maharashtra Seamless (India), and ISMT (India). All mills hold API Monogram license (API Q1 quality system) and are audited by major oil companies. For critical sour service wells, we recommend Tenaris or Vallourec products with their proprietary premium connections. For cost-effective surface casing applications, Indian and Chinese API-licensed mills offer excellent value with full API compliance. All products come with API monogram marking and complete material traceability." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"API 5CT Casing and Tubing","description":"API 5CT OCTG casing and tubing in J55, K55, N80, L80, P110 grades. Casing 4.5 to 13.375 inch, Tubing 2.375 to 4.5 inch. STC/LTC/BTC/EUE connections. Oil well and gas drilling. Creative Metal Industries, Vadodara.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"1500","highPrice":"35000","offerCount":"500+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"42","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"API 5CT Casing Tubing India","item":"https://www.creativemetalind.com/api-5ct-casing-tubing-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Api5ctCasingTubingIndia() {
  return (
    <>
      <Title>API 5CT Casing and Tubing Supplier India | J55 K55 N80 L80 P110 | OCTG | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="API 5CT casing and tubing supplier India. J55, K55, N80, L80, P110 OCTG. Casing 4.5 to 13.375 inch, tubing 2.375 to 4.5 inch. STC/LTC/BTC/EUE connections. Oil well drilling. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/api-5ct-casing-tubing-india" />
      <Meta property="og:title" content="API 5CT Casing and Tubing Supplier India | OCTG | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="API 5CT OCTG casing tubing supplier India. J55, K55, N80, L80, P110. Casing 4.5-13.375 inch. Complete connections." />
      <Meta property="og:url" content="https://www.creativemetalind.com/api-5ct-casing-tubing-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="API 5CT Casing Tubing Supplier India | OCTG | CMI" />
      <Meta name="twitter:description" content="API 5CT casing tubing. J55/K55/N80/L80/P110. OCTG supplier India." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — API 5CT Casing Tubing Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>API 5CT Casing and Tubing Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            API 5CT Casing and Tubing Supplier in India — OCTG
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a trusted <strong>API 5CT casing and tubing supplier in India</strong> providing Oil Country Tubular Goods (OCTG) for oil well drilling, gas well completion, and workover operations. We stock casing in J55, K55, N80, L80, and P110 grades with diameters from 4.5 inches to 13.375 inches, and production tubing from 2.375 inches to 4.5 inches. All products carry API Monogram certification with complete traceability from licensed mills. NACE MR0175 compliant L80 grade available for sour service wells. Immediate dispatch from Vadodara with pan-India and export delivery.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>API 5CT OCTG Products — Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Type</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Connection</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Heat Treatment</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {PRODUCTS.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.type}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.connection}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.ht}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications and Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"API 5CT / ISO 11960 (Casing and Tubing for Wells)"},
            {label:"Grades",value:"J55, K55, N80 Type 1, L80 Type 1, P110"},
            {label:"Casing Sizes",value:"4.5 inch (114.3mm) to 13.375 inch (339.7mm)"},
            {label:"Tubing Sizes",value:"2.375 inch (60.3mm) to 4.5 inch (114.3mm)"},
            {label:"Connections",value:"STC, LTC, BTC, NUE, EUE, Premium (VAM, Blue)"},
            {label:"Length Range",value:"R2 (7.62-9.14m), R3 (11.58-13.72m)"},
            {label:"Sour Service",value:"L80 Type 1 per NACE MR0175/ISO 15156 — HRC max 23"},
            {label:"Testing",value:"Hydrostatic, EMI/UT, Drift, Tensile, Charpy (L80/P110)"},
            {label:"Marking",value:"API Monogram, Grade, Size, Weight, Connection, Heat No."},
            {label:"Certification",value:"API Monogram License, MTC 3.1, NACE, Third Party"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of API 5CT OCTG in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Oil well drilling:</strong> Surface casing, intermediate casing, and production casing for onshore and offshore oil wells</li>
            <li><strong>Gas well completion:</strong> High-pressure gas well casing and production tubing for natural gas extraction</li>
            <li><strong>Sour gas fields:</strong> L80 casing and tubing for H2S-bearing formations (ONGC, RIL, Cairn fields)</li>
            <li><strong>Deep wells:</strong> P110 high-strength casing for deep wells exceeding 4000m depth with high formation pressures</li>
            <li><strong>Water injection:</strong> Injection tubing for water flooding and enhanced oil recovery (EOR) operations</li>
            <li><strong>Geothermal wells:</strong> High-temperature well casing for geothermal energy extraction</li>
            <li><strong>CBM wells:</strong> Coal bed methane well casing and tubing for CBM extraction projects</li>
            <li><strong>Workover operations:</strong> Replacement tubing and casing patches for well maintenance and repair</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy API 5CT OCTG from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>API licensed sources:</strong> All products from mills with valid API Monogram license and Q1 quality system</li>
          <li><strong>Complete grade range:</strong> J55 through P110 — single-source supply for entire well casing program</li>
          <li><strong>NACE compliant:</strong> L80 sour service grade with documented hardness survey and NACE MR0175 compliance</li>
          <li><strong>Connection variety:</strong> Standard API (STC/LTC/BTC/EUE) and premium gas-tight connections available</li>
          <li><strong>Third party inspection:</strong> TPI by BV, SGS, Lloyds, or ONGC-approved agencies at our facility</li>
          <li><strong>Rig-ready delivery:</strong> Threading inspection, drift testing, and protector fitting before dispatch</li>
          <li><strong>Project supply:</strong> Bulk quantities for complete well programs with scheduled deliveries to rig site</li>
          <li><strong>ONGC/OIL approved:</strong> Experience supplying to ONGC, Oil India, Cairn, and private E and P operators</li>
        </ul>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — API 5CT Casing and Tubing</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"1rem","margin-bottom":"2rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.1rem 1.4rem"}}>
              <summary style={{"font-weight":"700","font-size":"0.95rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary>
              <p style={{"font-size":"0.9rem",color:"#374151","line-height":"1.7","margin-top":"0.75rem","margin-bottom":0}}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-top":"3rem"}}>
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need API 5CT Casing or Tubing? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>J55 to P110 ready stock. API Monogram certified. Rig-ready with connections.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Call +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+API+5CT+casing+tubing+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry</a>
          </div>
        </div>

        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/alloy-steel-pipe-supplier-india", label:"Alloy Steel Pipe (P91/P22)"},
              {href:"/carbon-steel-pipe-fittings-vadodara", label:"Carbon Steel Pipe Fittings"},
              {href:"/ss-304-316l-pipe-supplier-india", label:"SS 316L Pipe Supplier"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel Pipe Supplier"},
              {href:"/duplex-steel-supplier-vadodara", label:"Duplex Steel Supplier"},
              {href:"/a358-welded-pipe-supplier-india", label:"A358 EFW Welded Pipe"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label}</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/api-5ct-casing-tubing-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — API 5CT Casing and Tubing Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
