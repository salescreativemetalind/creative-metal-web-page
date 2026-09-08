/**
 * /blog/ss-304-stainless-steel-guide
 * Target: "SS 304 stainless steel", "stainless steel pipe manufacturer India", "SS pipe supplier Vadodara"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../../components/RelatedPages";

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SS 304 Stainless Steel — Complete Guide to Grades, Properties, and Applications",
  "author": {"@type": "Organization", "name": "Creative Metal Industries"},
  "publisher": {"@type": "Organization", "name": "Creative Metal Industries",
    "logo": {"@type": "ImageObject", "url": "https://www.creativemetalind.com/logo_cmi.png"}},
  "datePublished": "2026-06-17",
  "dateModified": "2026-06-17",
  "image": "https://www.creativemetalind.com/img/ss_seamless_pipes.jpeg",
  "url": "https://www.creativemetalind.com/blog/ss-304-stainless-steel-guide",
  "description": "Complete guide to SS 304 stainless steel — chemical composition, mechanical properties, applications, welding tips, and sourcing from India's leading manufacturer."
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"What is SS 304 stainless steel made of?","acceptedAnswer":{"@type":"Answer","text":"SS 304 contains approximately 18% Chromium and 8% Nickel (often called 18/8 stainless), with a maximum of 0.08% Carbon, up to 2% Manganese, and balance Iron. This composition creates a stable austenitic microstructure that provides excellent corrosion resistance in most atmospheric and mild chemical environments."}},
    {"@type":"Question","name":"Can SS 304 rust?","acceptedAnswer":{"@type":"Answer","text":"SS 304 is highly rust-resistant but not immune. It can develop surface rust (tea staining) in coastal or chloride-rich environments, at weld heat-affected zones if sensitised, or when contaminated with carbon steel particles. For chloride environments, SS 316L with molybdenum is the correct upgrade. Proper passivation after fabrication prevents most surface corrosion issues."}},
    {"@type":"Question","name":"What is the difference between SS 304 and SS 304L?","acceptedAnswer":{"@type":"Answer","text":"SS 304L is the low-carbon version (max 0.03% C vs 0.08% for 304). The lower carbon prevents chromium carbide precipitation at grain boundaries during welding (sensitisation), which eliminates intergranular corrosion risk in the heat-affected zone. For any welded construction, 304L is preferred. Mechanical properties are nearly identical — 304L has slightly lower tensile strength (485 MPa vs 515 MPa min)."}},
    {"@type":"Question","name":"Is SS 304 magnetic?","acceptedAnswer":{"@type":"Answer","text":"In the annealed condition SS 304 is essentially non-magnetic because it has an austenitic (face-centred cubic) structure. However, cold working — such as bending, deep drawing, or machining — can transform some austenite into martensite, making the worked areas slightly magnetic. So a 304 pipe or fitting may show mild magnetic response at cold-formed sections while the base material remains non-magnetic. This is normal and does not indicate the wrong grade."}},
    {"@type":"Question","name":"What is the difference between SS 304 and SS 202?","acceptedAnswer":{"@type":"Answer","text":"SS 304 is a chromium-nickel (18/8) austenitic grade with 8-10.5% nickel, giving strong corrosion resistance. SS 202 is a chromium-manganese grade that replaces most nickel with manganese and nitrogen, making it cheaper but noticeably less corrosion resistant, especially outdoors and in humid or coastal conditions. SS 304 is the correct choice for food, chemical, pharma and outdoor use; SS 202 suits low-cost decorative or indoor applications only."}},
  ]
});

export default function SS304Guide() {
  return (
    <>
      <Title>SS 304 Stainless Steel | CMI</Title>
      <Meta property="og:url" content="https://www.creativemetalind.com/blog/ss-304-stainless-steel-guide" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Complete guide to SS 304 stainless steel — 18/8 composition, mechanical properties, applications in food, chemical, pharma industries." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog/ss-304-stainless-steel-guide" />
      <Meta property="og:title" content="SS 304 Stainless Steel — Complete Guide | CMI India" />
      <Meta property="og:description" content="Everything about SS 304 — composition, properties, applications, welding, and sourcing from India's leading stainless steel pipe manufacturer." />
      <Meta property="og:type" content="article" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS 304 Stainless Steel — Grades, Properties & Applications | CMI" />
      <Meta name="twitter:description" content="Complete guide to SS 304 stainless steel — 18/8 composition, mechanical properties, applications in food, chemical, pharma industries. SS pipe supplier Vadodara. Creative Metal Industries." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      {/* Nav */}
      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/blog" style={{color:"#E8821A","font-weight":"600","font-size":"0.9rem","text-decoration":"none"}}>← All Articles</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a>
        <span style={{margin:"0 0.5rem"}}>›</span>
        <a href="/blog" style={{color:"#E8821A","text-decoration":"none"}}>Blog</a>
        <span style={{margin:"0 0.5rem"}}>›</span>
        <span>SS 304 Stainless Steel Guide</span>
      </div>

      <main style={{"max-width":"800px",margin:"0 auto",padding:"3rem 1.5rem"}}>

        {/* Header */}
        <div style={{"margin-bottom":"2.5rem"}}>
          <span style={{background:"#FEF3C7",color:"#92400E",padding:"0.25rem 0.7rem","border-radius":"99px","font-size":"0.75rem","font-weight":"700"}}>Material Guide</span>
          <span style={{color:"#9ca3af","font-size":"0.82rem","margin-left":"0.75rem"}}>June 2026 · 10 min read</span>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"1rem 0 1.25rem","line-height":"1.2"}}>
            SS 304 Stainless Steel — Complete Guide to Grades, Properties, and Applications
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8"}}>
            SS 304 is the world's most widely used stainless steel grade, accounting for over 50% of all stainless steel consumed globally. Its combination of excellent corrosion resistance, good formability, attractive appearance, and reasonable cost makes it the default choice for thousands of applications — from kitchen sinks to chemical reactors. As a leading <strong>stainless steel pipe manufacturer in India</strong> and <strong>SS pipe supplier in Vadodara</strong>, Creative Metal Industries stocks SS 304 in all product forms: pipes, plates, sheets, fittings, flanges, and bars.
          </p>
        </div>

        {/* Section: What is SS 304 */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>What is SS 304 Stainless Steel?</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>SS 304 (also designated UNS S30400, EN 1.4301, or AISI 304) is an austenitic chromium-nickel stainless steel. The term "austenitic" refers to its face-centred cubic crystal structure, which gives it non-magnetic properties, excellent ductility, and the ability to be work-hardened but not heat-treated for strength.</p>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>The "18/8" designation that SS 304 is often called reflects its nominal composition: 18% Chromium (which forms the protective passive oxide layer) and 8% Nickel (which stabilises the austenitic structure). This combination creates a steel that resists oxidation and corrosion in a wide range of atmospheric, chemical, and food-processing environments without requiring protective coatings or painting.</p>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>First developed in the early 1900s, SS 304 has become the backbone of the stainless steel industry. Every stainless steel pipe manufacturer in India — including Creative Metal Industries — produces and stocks this grade in greater quantity than any other.</p>

        {/* Chemical Composition */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Chemical Composition of SS 304</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Element</th><th style={{padding:"0.7rem 1rem"}}>SS 304</th><th style={{padding:"0.7rem 1rem"}}>SS 304L</th><th style={{padding:"0.7rem 1rem"}}>Role in the Alloy</th></tr></thead>
            <tbody>
              {[["Carbon (C)","0.08% max","0.030% max","Strengthens but promotes sensitisation at high levels"],["Chromium (Cr)","18.0–20.0%","18.0–20.0%","Forms passive Cr₂O₃ oxide film — primary corrosion barrier"],["Nickel (Ni)","8.0–10.5%","8.0–12.0%","Stabilises austenite; improves ductility and toughness"],["Manganese (Mn)","2.0% max","2.0% max","Deoxidiser; partially substitutes for nickel"],["Silicon (Si)","0.75% max","0.75% max","Deoxidiser; improves high-temperature oxidation resistance"],["Phosphorus (P)","0.045% max","0.045% max","Impurity — kept low to prevent embrittlement"],["Sulphur (S)","0.030% max","0.030% max","Impurity — kept low; improves machinability in free-cutting variants"],["Iron (Fe)","Balance","Balance","Base metal matrix"]].map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[2]}</td><td style={{padding:"0.6rem 1rem","font-size":"0.82rem",color:"#6b7280"}}>{r[3]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{"font-size":"0.88rem",color:"#6b7280","margin-bottom":"2rem"}}>The key to SS 304's corrosion resistance is the minimum 10.5% chromium content (actually 18%+ in 304) which spontaneously forms an invisible, self-healing chromium oxide (Cr₂O₃) passive film on the surface. This film is only 1-5 nanometres thick but prevents oxygen and corrosive media from reaching the underlying iron.</p>

        {/* Mechanical Properties */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Mechanical Properties of SS 304</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Property</th><th style={{padding:"0.7rem 1rem"}}>Value (Annealed Condition)</th><th style={{padding:"0.7rem 1rem"}}>Significance</th></tr></thead>
            <tbody>
              {[["Tensile Strength","515 MPa min (75 ksi)","Resistance to being pulled apart"],["Yield Strength (0.2%)","205 MPa min (30 ksi)","Stress at which permanent deformation begins"],["Elongation","40% min (in 50mm)","Excellent formability — deep drawing, bending"],["Hardness","92 HRB max (201 HBW max)","Relatively soft — easy to machine and form"],["Elastic Modulus","193 GPa","Stiffness — same as carbon steel"],["Density","8.0 g/cm³","Slightly heavier than carbon steel (7.85 g/cm³)"],["Melting Range","1400–1450°C","High — suitable for elevated temperature service"],["Thermal Conductivity","16.2 W/m·K at 100°C","Lower than carbon steel — retains heat longer"],["Specific Heat","500 J/kg·K","Higher than carbon steel — slow to heat and cool"]].map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","font-size":"0.82rem",color:"#6b7280"}}>{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>SS 304 cannot be hardened by heat treatment (unlike martensitic grades 410/420). It can only be strengthened by cold working — cold-drawn pipe and cold-rolled sheet have significantly higher tensile and yield strength but reduced ductility. For most piped applications, the annealed (solution treated at 1050°C, water quenched) condition is standard.</p>

        {/* Applications */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Applications of SS 304</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(250px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"🍽️",title:"Food & Kitchen Equipment",desc:"Sinks, countertops, cookware, commercial kitchen surfaces, food processing conveyors, storage tanks, dairy equipment. SS 304's non-reactive surface doesn't impart taste or colour to food."},{icon:"🧪",title:"Chemical Processing",desc:"Tanks, reactors, heat exchangers, piping for organic acids, mild inorganic acids, and alkali solutions. Not recommended for hydrochloric acid or hot concentrated sulphuric acid."},{icon:"💊",title:"Pharmaceutical & Biotech",desc:"Process vessels, piping (316L preferred for higher grades), water treatment equipment, clean room fittings. Surface finish Ra ≤ 0.8µm achievable for hygienic applications."},{icon:"🏗️",title:"Architecture & Construction",desc:"Curtain wall panels, handrails, elevator doors, signage, roofing, facade cladding. No.4 brushed and mirror finishes are popular for architectural use."},{icon:"⚡",title:"Automotive & Transport",desc:"Exhaust systems, trim, fuel tanks, structural components. SS 304's resistance to heat and road salt makes it ideal for underbody and exhaust applications."},{icon:"🌊",title:"Water Treatment",desc:"Filter housings, tank linings, distribution piping, desalination pre-treatment. For high-chloride water, 316L is recommended instead."}].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.25rem"}}>
              <span style={{"font-size":"1.5rem"}}>{app.icon}</span>
              <h3 style={{"font-size":"0.95rem","font-weight":"700",color:"#111827",margin:"0.5rem 0 0.3rem"}}>{app.title}</h3>
              <p style={{"font-size":"0.84rem",color:"#6b7280","line-height":"1.6",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Welding & Fabrication */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Welding and Fabrication Tips for SS 304</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>SS 304 is highly weldable by all common processes — TIG (GTAW), MIG (GMAW), MMA (SMAW), and SAW. However, certain precautions are essential to avoid corrosion problems in service:</p>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"1.5rem","padding-left":"1.25rem"}}>
          <li><strong>Use 304L or ER308L filler:</strong> Low-carbon filler prevents sensitisation (carbide precipitation at 450-850°C) in the heat-affected zone</li>
          <li><strong>Minimise heat input:</strong> Austenitic SS has low thermal conductivity — excessive heat causes distortion and wider HAZ. Use stringer beads, not wide weave</li>
          <li><strong>Back-purge with argon:</strong> The root side of TIG welds must be shielded with argon to prevent oxidation (sugaring) which creates corrosion initiation sites</li>
          <li><strong>No preheat required:</strong> Unlike carbon and alloy steel, SS 304 should NOT be preheated. Interpass temperature should not exceed 150°C</li>
          <li><strong>Post-weld treatment:</strong> Pickle and passivate (HNO₃ + HF) all welds to restore the chromium oxide passive layer. Remove all heat tint colours</li>
          <li><strong>Avoid carbon steel contamination:</strong> Use dedicated stainless steel wire brushes, grinding discs, and tools. Carbon steel particles embed in SS and cause rust spots</li>
        </ul>

        {/* Why Source from CMI */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Source SS 304 from Creative Metal Industries?</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>As one of India's established <strong>stainless steel pipe manufacturers</strong> and a trusted <strong>SS pipe supplier in Vadodara</strong>, we offer distinct advantages when you source SS 304 from us:</p>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{h:"Complete Product Range",d:"SS 304/304L in pipes (seamless + welded), plates, sheets, fittings, flanges, bars, and structural sections — all from one supplier."},{h:"Mill-Direct Stock",d:"Authorised stockist for Sandvik, Ratnamani, Venus, POSCO, Jindal. No middlemen — full traceability from mill to your site."},{h:"All Certifications",d:"MTC (EN 10204 3.1/3.2), IBR Form III-C, PMI verification, IGC test (ASTM A262), and third-party inspection under DNV/TUV/SGS."},{h:"Same-Day Dispatch",d:"Standard sizes dispatch same day from our 1092 sq.mtr GIDC Makarpura, Vadodara warehouse. Pan-India delivery in 2-5 days."}].map(c => (
            <div style={{background:"#fff8f0",border:"1px solid #fde8cc","border-radius":"10px",padding:"1.25rem"}}>
              <h3 style={{"font-size":"0.92rem","font-weight":"700",color:"#111827","margin-bottom":"0.4rem"}}>{c.h}</h3>
              <p style={{"font-size":"0.85rem",color:"#6b7280","line-height":"1.6",margin:0}}>{c.d}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS 304</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {[{q:"What is SS 304 stainless steel made of?",a:"SS 304 contains approximately 18% Chromium and 8% Nickel (18/8 stainless), with max 0.08% Carbon, up to 2% Manganese, and balance Iron. This creates a stable austenitic structure with excellent corrosion resistance in most environments."},{q:"Can SS 304 rust?",a:"SS 304 is rust-resistant, not rust-proof. It can develop surface corrosion in chloride-rich (coastal) environments, at contaminated surfaces (carbon steel particles), or at sensitised weld zones. For chloride service, upgrade to 316L. Proper passivation prevents most issues."},{q:"What is the difference between SS 304 and SS 304L?",a:"304L has lower carbon (0.03% max vs 0.08%). This prevents sensitisation during welding — eliminating intergranular corrosion risk in the HAZ. For any welded construction, specify 304L. Strength is nearly identical (485 MPa vs 515 MPa tensile)."},{q:"Is SS 304 magnetic?",a:"Annealed SS 304 is essentially non-magnetic due to its austenitic structure. Cold working (bending, drawing, machining) can make worked areas slightly magnetic as some austenite converts to martensite. So a 304 part can show mild magnetism at cold-formed sections while the base metal stays non-magnetic — this is normal, not a sign of wrong grade."},{q:"What is the difference between SS 304 and SS 202?",a:"SS 304 is a chromium-nickel 18/8 grade (8-10.5% Ni) with strong corrosion resistance. SS 202 is a cheaper chromium-manganese grade that swaps most nickel for manganese/nitrogen, giving lower corrosion resistance — poor for outdoor, humid or coastal use. Choose SS 304 for food, chemical, pharma and outdoor duty; SS 202 only for low-cost indoor/decorative use."}].map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.3rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SS 304 Pipes, Plates or Fittings?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.92rem"}}>Ready stock at Vadodara. Mill-direct pricing. MTC + IBR + PMI on every consignment.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Related */}
        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Articles & Products</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[{href:"/blog/ss-304-vs-316l",label:"SS 304 vs 316L Comparison"},{href:"/ss-304-316l-pipe-supplier-india",label:"SS 304/316L Pipe Supplier"},{href:"/ss-pipe-supplier-vadodara",label:"SS Pipe Supplier Vadodara"},{href:"/stainless-steel-supplier-vadodara",label:"Stainless Steel Vadodara"},{href:"/blog/how-to-read-mtc",label:"How to Read MTC"}].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/blog/ss-304-stainless-steel-guide" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Stainless Steel Pipe Manufacturer India | SS Pipe Supplier Vadodara</p>
        <p><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
