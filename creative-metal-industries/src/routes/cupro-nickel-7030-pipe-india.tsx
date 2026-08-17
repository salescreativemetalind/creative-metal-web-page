import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { name: "CuNi 70/30 Seamless Pipe", spec: "ASTM B466", composition: "70Cu-30Ni (C71500)", size: '1/2"-10" NB', schedule: "SCH 10S-80S", application: "Naval / high-velocity seawater", condition: "Annealed", availability: "Ready Stock" },
  { name: "CuNi 70/30 Welded Pipe", spec: "ASTM B467", composition: "UNS C71500", size: '2"-10" NB', schedule: "SCH 10S-40S", application: "Condenser tubes / offshore", condition: "Annealed + Pickled", availability: "Ready Stock" },
  { name: "CuNi 70/30 Tube", spec: "ASTM B111", composition: "70Cu-30Ni", size: "OD 12.7-88.9 mm", schedule: "BWG 14-20", application: "Condenser / heat exchanger tubes", condition: "Annealed", availability: "Available" },
  { name: "CuNi 70/30 Fittings", spec: "ASTM B466", composition: "C71500", size: '1/2"-10" NB', schedule: "SCH 10S-80S", application: "Complete naval piping", condition: "Annealed", availability: "Available" },
];

const FAQS = [
  { q: "What is CuNi 70/30 pipe?", a: "CuNi 70/30 pipe is a copper-nickel alloy containing 70% copper and 30% nickel, designated as UNS C71500. It offers outstanding resistance to seawater corrosion, biofouling, and stress-corrosion cracking. This alloy is widely used in naval, marine, and offshore applications where exposure to high-velocity seawater is expected. It performs reliably at elevated temperatures up to 350°C." },
  { q: "Why choose CuNi 70/30 over 90/10?", a: "CuNi 70/30 provides significantly higher resistance to erosion-corrosion and can tolerate seawater velocities up to 4 m/s compared to 2.5 m/s for 90/10 grade. The higher nickel content delivers greater mechanical strength and improved performance in high-temperature environments. It is the preferred choice for naval condensers, submarine cooling systems, and critical offshore heat exchangers where 90/10 would not meet velocity or temperature requirements." },
  { q: "What is the maximum seawater velocity for CuNi 70/30?", a: "CuNi 70/30 can handle seawater velocities up to 4 m/s (approximately 13 ft/s) without significant erosion-corrosion. This is considerably higher than CuNi 90/10 which is limited to about 2.5 m/s. The superior velocity tolerance makes 70/30 ideal for high-flow naval condensers, fire-water systems, and offshore heat exchangers operating at elevated flow rates." },
  { q: "Is CuNi 70/30 used in naval and defense applications?", a: "Yes, CuNi 70/30 is extensively used across naval and defense platforms worldwide. It is the standard material for submarine cooling systems, warship condensers, and naval heat exchangers due to its exceptional seawater resistance and biofouling properties. The Indian Navy and international defense organizations specify this alloy for critical seawater piping systems where reliability and longevity are paramount." },
  { q: "What sizes of CuNi 70/30 pipe does CMI supply?", a: "Creative Metal Industries supplies CuNi 70/30 pipes from 1/2 inch to 10 inch NB (15NB to 250NB) in seamless and welded types. Schedules range from SCH 10S through SCH 80S depending on type. We also stock tubes from 12.7 mm to 88.9 mm OD in various BWG gauges. Custom sizes and lengths can be arranged for project requirements." },
  { q: "What is the price of CuNi 70/30 pipe in India?", a: "CuNi 70/30 pipe prices in India typically range from Rs 1,500 to Rs 4,000 per kg depending on size, schedule, type (seamless vs welded), and current copper-nickel market rates. Seamless pipes and thicker schedules command higher pricing. Creative Metal Industries offers competitive rates with ready stock availability from our Vadodara warehouse. Contact us for live pricing on your specific requirement." },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "CuNi 70/30 (C71500) Pipe",
  "description": "CuNi 70/30 seamless and welded pipes as per ASTM B466 and ASTM B467 supplied by Creative Metal Industries, Vadodara, India. Sizes 1/2\" to 10\" NB for naval, marine, and offshore applications.",
  "brand": { "@type": "Brand", "name": "Creative Metal Industries" },
  "manufacturer": {
    "@type": "Organization",
    "name": "Creative Metal Industries",
    "address": { "@type": "PostalAddress", "streetAddress": "F-3, Loha Bhavan, Lakkadpitha Rd", "addressLocality": "Vadodara", "addressRegion": "Gujarat", "postalCode": "390001", "addressCountry": "IN" },
    "telephone": "+91-99982-80619",
    "url": "https://www.creativemetalind.com"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "lowPrice": "1500",
    "highPrice": "4000",
    "unitCode": "KGM",
    "availability": "https://schema.org/InStock"
  },
  "material": "Copper-Nickel 70/30 (UNS C71500)",
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Standard (Seamless)", "value": "ASTM B466 / SB466" },
    { "@type": "PropertyValue", "name": "Standard (Welded)", "value": "ASTM B467 / SB467" },
    { "@type": "PropertyValue", "name": "Composition", "value": "70% Cu, 30% Ni, 0.5% Fe, 1% Mn" },
    { "@type": "PropertyValue", "name": "Size Range", "value": "1/2\" to 10\" NB" },
    { "@type": "PropertyValue", "name": "Schedules", "value": "SCH 10S, 20S, 40S, 80S" }
  ]
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
});

export default function CuproNickel7030PipeIndia() {
  return (
    <>
      <Title>CuNi 70/30 Pipe Supplier India | ASTM B466 C71500 Seamless &amp; Welded — Creative Metal Industries</Title>
      <Meta name="description" content="Leading CuNi 70/30 (C71500) pipe supplier in India. ASTM B466 seamless & ASTM B467 welded cupro-nickel pipes, 1/2&quot; to 10&quot; NB, for naval condensers, seawater systems & offshore platforms. Ready stock from Vadodara." />
      <Meta name="keywords" content="CuNi 70/30 pipe, cupro nickel 70/30 pipe supplier India, ASTM B466, ASTM B467, C71500 pipe, CuNi seamless pipe, CuNi welded pipe, naval condenser pipe, seawater pipe, copper nickel pipe India, Creative Metal Industries" />
      <Meta property="og:title" content="CuNi 70/30 Pipe Supplier India | ASTM B466 C71500 — Creative Metal Industries" />
      <Meta property="og:description" content="Premium CuNi 70/30 (C71500) pipes for naval, marine & offshore applications. ASTM B466 seamless & ASTM B467 welded. Ready stock from Vadodara, Gujarat." />
      <Meta property="og:type" content="product" />
      <Meta property="og:url" content="https://www.creativemetalind.com/cupro-nickel-7030-pipe-india" />
      <Link rel="canonical" href="https://www.creativemetalind.com/cupro-nickel-7030-pipe-india" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      {/* Navigation */}
      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — CuNi 70/30 Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>

      {/* Breadcrumb */}
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>CuNi 70/30 Pipe Supplier India</span>
      </div>

      {/* Main Content */}
      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>

        {/* Hero Section */}
        <section style={{"margin-bottom":"3rem"}}>
          <h1 style={{"font-size":"2rem","font-weight":"800",color:"#111827","line-height":"1.2","margin-bottom":"1rem"}}>CuNi 70/30 (C71500) Pipe Supplier in India</h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.7","margin-bottom":"1rem"}}>
            Creative Metal Industries is a trusted supplier of <strong>CuNi 70/30 (UNS C71500) seamless and welded pipes</strong> in India. We supply cupro-nickel 70/30 pipes conforming to <strong>ASTM B466</strong> (seamless) and <strong>ASTM B467</strong> (welded) standards from our Vadodara warehouse with ready stock availability.
          </p>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.7","margin-bottom":"1rem"}}>
            Our CuNi 70/30 pipes are manufactured from approved mills with full traceability and documentation including mill test certificates, third-party inspection reports, and compliance certificates. The 70% copper / 30% nickel composition provides exceptional resistance to high-velocity seawater corrosion, making it the preferred alloy for <strong>naval condensers, submarine cooling systems, offshore heat exchangers, and coastal power plants</strong>.
          </p>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.7"}}>
            Available in sizes from <strong>1/2" to 10" NB</strong> across schedules SCH 10S to SCH 80S. Price range: <strong>Rs 1,500 – Rs 4,000/kg</strong> depending on size, type, and schedule.
          </p>
        </section>

        {/* Grade Table */}
        <section style={{"margin-bottom":"3rem"}}>
          <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>CuNi 70/30 Pipe Grades &amp; Specifications</h2>
          <div style={{overflow:"auto"}}>
            <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
              <thead>
                <tr style={{background:"#f3f4f6"}}>
                  <th style={{padding:"0.75rem",border:"1px solid #e5e7eb","text-align":"left","font-weight":"700",color:"#111827"}}>Product</th>
                  <th style={{padding:"0.75rem",border:"1px solid #e5e7eb","text-align":"left","font-weight":"700",color:"#111827"}}>Spec</th>
                  <th style={{padding:"0.75rem",border:"1px solid #e5e7eb","text-align":"left","font-weight":"700",color:"#111827"}}>Composition</th>
                  <th style={{padding:"0.75rem",border:"1px solid #e5e7eb","text-align":"left","font-weight":"700",color:"#111827"}}>Size</th>
                  <th style={{padding:"0.75rem",border:"1px solid #e5e7eb","text-align":"left","font-weight":"700",color:"#111827"}}>Schedule</th>
                  <th style={{padding:"0.75rem",border:"1px solid #e5e7eb","text-align":"left","font-weight":"700",color:"#111827"}}>Application</th>
                  <th style={{padding:"0.75rem",border:"1px solid #e5e7eb","text-align":"left","font-weight":"700",color:"#111827"}}>Condition</th>
                  <th style={{padding:"0.75rem",border:"1px solid #e5e7eb","text-align":"left","font-weight":"700",color:"#111827"}}>Stock</th>
                </tr>
              </thead>
              <tbody>
                {GRADES.map((g, i) => (
                  <tr style={{background: i % 2 === 0 ? "#fff" : "#f9fafb"}}>
                    <td style={{padding:"0.75rem",border:"1px solid #e5e7eb","font-weight":"600",color:"#111827"}}>{g.name}</td>
                    <td style={{padding:"0.75rem",border:"1px solid #e5e7eb",color:"#374151"}}>{g.spec}</td>
                    <td style={{padding:"0.75rem",border:"1px solid #e5e7eb",color:"#374151"}}>{g.composition}</td>
                    <td style={{padding:"0.75rem",border:"1px solid #e5e7eb",color:"#374151"}}>{g.size}</td>
                    <td style={{padding:"0.75rem",border:"1px solid #e5e7eb",color:"#374151"}}>{g.schedule}</td>
                    <td style={{padding:"0.75rem",border:"1px solid #e5e7eb",color:"#374151"}}>{g.application}</td>
                    <td style={{padding:"0.75rem",border:"1px solid #e5e7eb",color:"#374151"}}>{g.condition}</td>
                    <td style={{padding:"0.75rem",border:"1px solid #e5e7eb",color:"#374151"}}>{g.availability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Specifications Grid */}
        <section style={{"margin-bottom":"3rem"}}>
          <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Technical Specifications</h2>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(280px, 1fr))",gap:"0.75rem"}}>
            {[
              { label: "Standard (Seamless)", value: "ASTM B466 / SB466" },
              { label: "Standard (Welded)", value: "ASTM B467 / SB467" },
              { label: "Grade", value: "CuNi 70/30 (UNS C71500)" },
              { label: "Type", value: "Seamless, Welded & Tube" },
              { label: "Size Range", value: '1/2" to 10" NB (15NB to 250NB)' },
              { label: "Schedules", value: "SCH 10S, 20S, 40S, 80S" },
              { label: "Max Service Temp", value: "Up to 350°C" },
              { label: "Composition", value: "70% Cu, 30% Ni, 0.5% Fe, 1% Mn" },
              { label: "Testing", value: "Hydrostatic, UT, Eddy Current, PMI" },
              { label: "Velocity Tolerance", value: "Up to 4 m/s seawater (higher than 90/10)" },
            ].map(spec => (
              <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
                <div style={{"font-size":"0.78rem","font-weight":"600",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em","margin-bottom":"0.25rem"}}>{spec.label}</div>
                <div style={{"font-size":"0.95rem","font-weight":"700",color:"#111827"}}>{spec.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Applications */}
        <section style={{"margin-bottom":"3rem"}}>
          <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Applications of CuNi 70/30 Pipe</h2>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(220px, 1fr))",gap:"0.75rem"}}>
            {[
              "Naval Condensers",
              "High-Velocity Seawater Systems",
              "Offshore Heat Exchangers",
              "Submarine Cooling Systems",
              "Coastal Power Plants",
              "Desalination Plants",
              "Fire Water Systems",
              "LNG Vaporizers",
            ].map(app => (
              <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem",display:"flex","align-items":"center",gap:"0.75rem"}}>
                <div style={{width:"8px",height:"8px","border-radius":"50%",background:"#E8821A","flex-shrink":"0"}} />
                <span style={{"font-size":"0.92rem",color:"#374151","font-weight":"500"}}>{app}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why CMI */}
        <section style={{"margin-bottom":"3rem"}}>
          <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Why Choose Creative Metal Industries for CuNi 70/30?</h2>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(280px, 1fr))",gap:"0.75rem"}}>
            {[
              { title: "CuNi Specialist", desc: "Dedicated copper-nickel alloy division with deep expertise in 70/30 and 90/10 grades for marine and naval applications." },
              { title: "Naval-Grade Material", desc: "All CuNi 70/30 pipes sourced from approved mills meeting stringent naval and defense specifications with full traceability." },
              { title: "Alloy Guidance 90/10 vs 70/30", desc: "Expert consultation on selecting between CuNi 90/10 and 70/30 based on velocity, temperature, and application requirements." },
              { title: "Approved Mills", desc: "Material sourced exclusively from internationally approved mills ensuring consistent quality, chemistry, and mechanical properties." },
              { title: "Full Documentation", desc: "Complete documentation package including EN 10204 3.1/3.2 MTCs, third-party inspection, PMI reports, and compliance certificates." },
              { title: "Complete Fittings Range", desc: "Full range of CuNi 70/30 fittings including elbows, tees, reducers, and flanges for complete piping system solutions." },
              { title: "Custom Fabrication", desc: "In-house capability for custom lengths, special schedules, and fabricated spools to meet project-specific requirements." },
              { title: "Pan-India + Export", desc: "Supply across India with export capability to Middle East, Southeast Asia, Africa, and global markets with proper export documentation." },
            ].map(item => (
              <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1.25rem"}}>
                <h3 style={{"font-size":"0.95rem","font-weight":"700",color:"#E8821A","margin-bottom":"0.5rem"}}>{item.title}</h3>
                <p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.6",margin:"0"}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{"margin-bottom":"3rem"}}>
          <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Frequently Asked Questions — CuNi 70/30 Pipe</h2>
          <div style={{display:"flex","flex-direction":"column",gap:"1rem"}}>
            {FAQS.map(faq => (
              <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1.25rem"}}>
                <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.5rem"}}>{faq.q}</h3>
                <p style={{"font-size":"0.9rem",color:"#374151","line-height":"1.7",margin:"0"}}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{background:"linear-gradient(135deg, #E8821A 0%, #d97706 100%)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"3rem"}}>
          <h2 style={{"font-size":"1.5rem","font-weight":"800",color:"#fff","margin-bottom":"0.75rem"}}>Need CuNi 70/30 Pipes? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","font-size":"1rem","margin-bottom":"1.5rem","line-height":"1.6"}}>
            Ready stock of CuNi 70/30 seamless and welded pipes from 1/2" to 10" NB. Contact Creative Metal Industries for competitive pricing and fast delivery across India.
          </p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="/#contact" style={{background:"#fff",color:"#E8821A",padding:"0.75rem 2rem","border-radius":"8px","font-weight":"700","font-size":"0.95rem","text-decoration":"none"}}>Request Quote</a>
            <a href="tel:+919998280619" style={{background:"transparent",color:"#fff",padding:"0.75rem 2rem","border-radius":"8px","font-weight":"700","font-size":"0.95rem","text-decoration":"none",border:"2px solid #fff"}}>Call +91 99982 80619</a>
          </div>
        </section>

        {/* Internal Links */}
        <section style={{"margin-bottom":"3rem"}}>
          <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h2>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(250px, 1fr))",gap:"0.75rem"}}>
            {[
              { href: "/cupro-nickel-9010-pipe-india", label: "CuNi 90/10 Pipe Supplier India" },
              { href: "/titanium-grade-2-pipe-india", label: "Titanium Grade 2 Pipe Supplier India" },
              { href: "/duplex-steel-supplier-vadodara", label: "Duplex Steel Supplier Vadodara" },
              { href: "/nickel-200-pipe-supplier-india", label: "Nickel 200 Pipe Supplier India" },
              { href: "/inconel-625-pipe-supplier-india", label: "Inconel 625 Pipe Supplier India" },
              { href: "/alloy-20-pipe-supplier-india", label: "Alloy 20 Pipe Supplier India" },
            ].map(link => (
              <a href={link.href} style={{display:"block",background:"#fff",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem","text-decoration":"none",color:"#E8821A","font-weight":"600","font-size":"0.9rem"}}>
                {link.label} →
              </a>
            ))}
          </div>
        </section>

      
        <RelatedPages currentPath="/cupro-nickel-7030-pipe-india" />
      </main>

      {/* Footer */}
      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{margin:"0 0 0.5rem 0"}}>Creative Metal Industries — CuNi 70/30 Pipe Supplier India</p>
        <p style={{margin:"0 0 0.5rem 0"}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001, Gujarat, India</p>
        <p style={{margin:"0 0 0.5rem 0"}}>Phone: <a href="tel:+919998280619" style={{color:"#E8821A","text-decoration":"none"}}>+91 99982 80619</a> | Website: <a href="https://www.creativemetalind.com" style={{color:"#E8821A","text-decoration":"none"}}>www.creativemetalind.com</a></p>
        <p style={{margin:"0",color:"#6b7280"}}>&copy; {new Date().getFullYear()} Creative Metal Industries. All rights reserved.</p>
      </footer>
    </>
  );
}
