/**
 * /a358-welded-pipe-supplier-india
 * Target: "ASTM A358 welded pipe supplier India", "SS EFW pipe India",
 * "A358 TP304 TP316L large diameter pipe supplier"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "A358 TP304 Class 1", composition: "18Cr-8Ni (C ≤0.08%)", sizes: "8 to 60 inch OD", schedule: "SCH 5S / 10S / 20 / 40S", apps: "Chemical process, power plant piping", ht: "Solution Annealed 1040°C", stock: "Ready Stock" },
  { grade: "A358 TP316L Class 1", composition: "16Cr-12Ni-2Mo (C ≤0.03%)", sizes: "8 to 60 inch OD", schedule: "SCH 5S / 10S / 20 / 40S", apps: "Petrochemical, offshore, desalination", ht: "Solution Annealed 1040°C", stock: "Ready Stock" },
  { grade: "A358 TP321 Class 1", composition: "18Cr-10Ni-Ti", sizes: "8 to 48 inch OD", schedule: "SCH 5S / 10S / 20", apps: "High temperature service, refineries", ht: "Solution Annealed 1050°C", stock: "Available" },
  { grade: "A358 TP304L Class 3", composition: "18Cr-8Ni (C ≤0.03%)", sizes: "8 to 42 inch OD", schedule: "SCH 5S / 10S / 20", apps: "Water treatment, general chemical", ht: "Solution Annealed 1040°C", stock: "Available" },
  { grade: "A358 TP347 Class 1", composition: "18Cr-10Ni-Nb", sizes: "8 to 36 inch OD", schedule: "SCH 5S / 10S / 20", apps: "High temperature service, crackers", ht: "Solution Annealed + Stabilized", stock: "Made to Order" },
];

const FAQS = [
  { q: "What is ASTM A358 EFW pipe and how does it differ from seamless pipe?", a: "ASTM A358 covers Electric Fusion Welded (EFW) austenitic chromium-nickel stainless steel pipe intended for high-temperature and general corrosive service. Unlike seamless pipe manufactured from solid billets, A358 pipe is made by rolling plate and welding it using automatic welding processes such as GTAW, GMAW, or SAW. The key advantage is the ability to produce very large diameters (up to 60 inches and beyond) that are impractical to manufacture seamlessly. Class 1 requires 100% radiography of the weld, making it suitable for the most critical applications including ASME pressure vessels and nuclear service." },
  { q: "What are the different classes in ASTM A358 and which class should I specify?", a: "ASTM A358 defines five classes based on weld examination requirements. Class 1 requires 100% radiographic examination of the longitudinal weld and is mandatory for lethal service and most ASME Code applications. Class 2 requires spot radiography. Class 3 has no mandatory radiographic examination but requires visual inspection. Class 4 is for circumferential welds only with spot radiography. Class 5 requires 100% ultrasonic examination as an alternative to radiography. For critical chemical and petrochemical service, Class 1 is the standard specification. Creative Metal Industries stocks primarily Class 1 pipe for maximum reliability." },
  { q: "What sizes of A358 EFW pipe does Creative Metal Industries supply?", a: "Creative Metal Industries supplies ASTM A358 EFW pipe in outside diameters ranging from 8 inches (203mm) to 60 inches (1524mm) with wall thicknesses from Schedule 5S through Schedule 40S. Standard lengths are 6 meters and 12 meters, with custom cut lengths available. We maintain ready stock of popular sizes in TP304 and TP316L grades in 8 through 36 inch diameters. Larger sizes above 36 inches and exotic grades like TP321 and TP347 are available on a made-to-order basis with typical lead times of 8-12 weeks from our approved mills." },
  { q: "Can ASTM A358 pipe be used for ASME pressure vessel and piping applications?", a: "Yes, ASTM A358 pipe is specifically designed for ASME Code applications. The ASME equivalent is SA358, which is adopted in the ASME Boiler and Pressure Vessel Code Section II Part A. It is widely used in ASME Section VIII Division 1 and 2 pressure vessels, ASME B31.3 Process Piping, and ASME B31.1 Power Piping. Class 1 pipe with 100% radiography receives the full design stress allowance without any weld joint efficiency reduction. This makes A358 Class 1 EFW pipe equivalent to seamless pipe for pressure design purposes under the ASME Code." },
  { q: "What testing and certification comes with your A358 EFW pipe?", a: "All ASTM A358 pipe supplied by Creative Metal Industries comes with comprehensive documentation including Material Test Certificate (MTC) per EN 10204 Type 3.1 or 3.2, radiographic examination reports (100% RT for Class 1), hydrostatic test certificate at 1.5 times the design pressure, chemical composition analysis, mechanical test results (tensile, yield, elongation), intergranular corrosion test per ASTM A262 Practice E (when specified), and positive material identification (PMI) report. We also provide PED 2014/68/EU certification for European exports and NACE MR0175 compliance documentation for sour service applications." },
  { q: "What are the main applications of A358 EFW stainless steel pipe in India?", a: "In India, ASTM A358 EFW pipe is extensively used in chemical and petrochemical plants for large-diameter process piping carrying corrosive fluids. Major applications include fertilizer plant transfer lines, refinery crude distillation overhead piping, power plant main steam and feedwater headers, desalination plant seawater intake and brine piping, pharmaceutical plant utility distribution, and pulp and paper mill chemical recovery systems. The ability to produce large diameters economically makes A358 EFW pipe the preferred choice over seamless for sizes above 8 inches in most stainless steel piping systems." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"ASTM A358 SS EFW Welded Pipe","description":"ASTM A358 Electric Fusion Welded stainless steel pipe in TP304, TP316L, TP321 grades. Large diameter 8 to 60 inch. Class 1 with 100% RT. SCH 5S-40S. Creative Metal Industries, Vadodara, India.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"800","highPrice":"25000","offerCount":"300+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"34","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"A358 Welded Pipe Supplier India","item":"https://www.creativemetalind.com/a358-welded-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function A358WeldedPipeSupplierIndia() {
  return (
    <>
      <Title>ASTM A358 Welded Pipe Supplier India | TP304 TP316L | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="ASTM A358 SS EFW welded pipe supplier India. TP304, TP316L, TP321 grades. Large diameter 8 to 60 inch, SCH 5S-40S, Class 1 with 100% RT. Chemical and power plant piping. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/a358-welded-pipe-supplier-india" />
      <Meta property="og:title" content="ASTM A358 SS EFW Welded Pipe Supplier India | TP304 TP316L | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="ASTM A358 EFW stainless steel pipe supplier India. Large diameter 8-60 inch, Class 1 100% RT. TP304, TP316L, TP321." />
      <Meta property="og:url" content="https://www.creativemetalind.com/a358-welded-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="ASTM A358 EFW Welded Pipe Supplier India | CMI Vadodara" />
      <Meta name="twitter:description" content="A358 EFW SS pipe. TP304/316L/321, 8-60 inch OD, Class 1. Supplier in India." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — ASTM A358 EFW Welded Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>ASTM A358 EFW Welded Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            ASTM A358 SS EFW Welded Pipe Supplier in India
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a leading <strong>ASTM A358 Electric Fusion Welded stainless steel pipe supplier in India</strong>, providing large-diameter EFW pipes in TP304, TP316L, TP321, and TP347 grades for chemical plants, power stations, and petrochemical refineries. Our A358 Class 1 pipes undergo 100% radiographic examination of the longitudinal weld seam, ensuring full ASME Code compliance for critical pressure piping systems. Available in diameters from 8 inches to 60 inches with schedules ranging from 5S through 40S, supplied from our Vadodara warehouse with complete mill test certification.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>ASTM A358 EFW Pipe Grades — Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Schedule</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Heat Treatment</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.composition}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.schedule}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.ht}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications & Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A358 / SA358 (EFW Austenitic SS Pipe)"},
            {label:"Grades",value:"TP304, TP304L, TP316L, TP321, TP347"},
            {label:"Type",value:"Electric Fusion Welded (EFW) — Longitudinal Seam"},
            {label:"Size Range",value:"8 inch (203mm) to 60 inch (1524mm) OD"},
            {label:"Wall Thickness",value:"SCH 5S, 10S, 20, 40S (3mm to 40mm)"},
            {label:"Class",value:"Class 1 (100% RT), Class 3 (Visual), Class 5 (100% UT)"},
            {label:"Length",value:"6m, 12m standard; custom cut-to-length available"},
            {label:"Weld Process",value:"GTAW (TIG), GMAW, SAW — automatic welding"},
            {label:"Testing",value:"100% RT / UT, Hydrostatic, PMI, Dye Penetrant"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, ASME, PED 2014/68/EU, NACE"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of A358 EFW Pipe in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Chemical plants:</strong> Large bore process piping for acids, caustics, solvents — corrosion-resistant transfer lines</li>
            <li><strong>Power stations:</strong> Main steam headers, feedwater piping, condenser water boxes in thermal and nuclear plants</li>
            <li><strong>Petrochemical refineries:</strong> Crude distillation overhead lines, catalytic reformer piping, hydrocracker effluent piping</li>
            <li><strong>Desalination plants:</strong> Seawater intake piping, brine discharge, reverse osmosis feed headers</li>
            <li><strong>Fertilizer plants:</strong> Ammonia, urea, and phosphoric acid transfer piping in large diameters</li>
            <li><strong>Pulp and paper:</strong> Chemical recovery systems, bleach plant piping, white liquor lines</li>
            <li><strong>Offshore platforms:</strong> Firewater ring mains, seawater cooling systems, process piping on FPSOs</li>
            <li><strong>LNG terminals:</strong> Cryogenic transfer piping in 304L for temperatures down to -196 degrees Celsius</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy A358 EFW Pipe from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Large diameter specialist:</strong> Stock from 8 to 60 inch OD — one of few stockists in India for sizes above 36 inch</li>
          <li><strong>Class 1 certification:</strong> All pipe with 100% radiographic examination for full ASME Code design stress</li>
          <li><strong>Approved mill sources:</strong> JSL, Ratnamani, Buttweld, Welspun — all ASME and PED certified manufacturers</li>
          <li><strong>Complete documentation:</strong> RT film/reports, hydrostatic test, MTC 3.1/3.2, NACE compliance, PMI</li>
          <li><strong>Custom fabrication:</strong> Bevelling, flange welding, spool fabrication, coating and lining available</li>
          <li><strong>Competitive pricing:</strong> Direct mill relationships allow best pricing for project quantities</li>
          <li><strong>Fast delivery:</strong> Stock items shipped same-day from Vadodara; project orders in 8-12 weeks from mill</li>
          <li><strong>Technical selection:</strong> Grade and class selection support — A358 vs A312 vs A790 for your application</li>
        </ul>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — ASTM A358 EFW Pipe</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"1rem","margin-bottom":"2rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.1rem 1.4rem"}}>
              <summary style={{"font-weight":"700","font-size":"0.95rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary>
              <p style={{"font-size":"0.9rem",color:"#374151","line-height":"1.7","margin-top":"0.75rem","margin-bottom":0}}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-top":"3rem"}}>
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need A358 EFW Welded Pipe? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Large diameter stock in TP304 and TP316L. Class 1 with full RT reports. Same-day dispatch.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Call +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+A358+EFW+pipe+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry</a>
          </div>
        </div>

        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/ss-304-316l-pipe-supplier-india", label:"SS 304 Pipe Supplier"},
              {href:"/ss-304-316l-pipe-supplier-india", label:"SS 316L Pipe Supplier"},
              {href:"/ss-321-pipe-supplier-india", label:"SS 321 Pipe Supplier"},
              {href:"/duplex-steel-supplier-vadodara", label:"Duplex Steel Pipe"},
              {href:"/alloy-steel-pipe-supplier-india", label:"Alloy Steel Pipe"},
              {href:"/carbon-steel-pipe-fittings-vadodara", label:"CS Pipe Fittings"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label}</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/a358-welded-pipe-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — ASTM A358 EFW Welded Pipe Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
