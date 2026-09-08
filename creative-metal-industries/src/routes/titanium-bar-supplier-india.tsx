/**
 * /titanium-bar-supplier-india
 * Target: "titanium bar supplier India", "titanium bar", "titanium bars",
 * "titanium grade 2 bar", "titanium grade 5 bar" (Ti-6Al-4V)
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"Titanium Grade 2 Bar (CP Ti)", spec:"ASTM B348 Gr.2", composition:"Commercially pure titanium", form:"Round, square, hex bar", apps:"Chemical, marine, fasteners, machined parts", stock:"Ready Stock" },
  { grade:"Titanium Grade 5 Bar (Ti-6Al-4V)", spec:"ASTM B348 Gr.5", composition:"~90% Ti, 6% Al, 4% V", form:"Round, square, hex bar", apps:"Aerospace, defence, high-strength fasteners", stock:"Available" },
  { grade:"Titanium Grade 1 Bar (CP Ti)", spec:"ASTM B348 Gr.1", composition:"Soft commercially pure titanium", form:"Round bar", apps:"Deep-draw, corrosion service", stock:"Indent" },
  { grade:"Titanium Grade 5 ELI Bar", spec:"ASTM B348 Gr.23", composition:"Ti-6Al-4V Extra Low Interstitial", form:"Round bar", apps:"Medical implants, cryogenic", stock:"Indent" },
];

const FAQS = [
  { q:"What is the difference between Titanium Grade 2 and Grade 5 bar?", a:"Titanium Grade 2 is commercially pure (CP) titanium — chosen for excellent corrosion resistance and good formability at moderate strength, ideal for chemical, marine, and general machined components. Titanium Grade 5 (Ti-6Al-4V) is an alpha-beta alloy of roughly 90% titanium, 6% aluminium, and 4% vanadium; it offers substantially higher strength, which is why it dominates aerospace, defence, and high-strength fastener applications. Grade 2 is selected primarily for corrosion resistance, Grade 5 for strength-to-weight." },
  { q:"What sizes and forms of titanium bar do you supply?", a:"Creative Metal Industries supplies titanium bar per ASTM B348 in round, square, and hexagonal sections. Round bar is available across common diameters from small precision sizes up to larger machining stock, in standard mill lengths with cut-to-length on request. Grade 2 and Grade 5 are the primary stocked grades; Grade 1 and Grade 23 (Grade 5 ELI) are available on indent. Exact size availability is confirmed on enquiry, and all bar ships with Mill Test Certificate." },
  { q:"What is Grade 5 titanium (Ti-6Al-4V) used for?", a:"Grade 5 titanium (Ti-6Al-4V) is the most widely used titanium alloy. In bar form it is machined into aerospace structural components, engine and airframe parts, defence hardware, high-strength fasteners and bolts, marine fittings, and (in the ELI/Grade 23 variant) surgical implants. It is favoured wherever high strength combined with low weight and good corrosion resistance is required." },
  { q:"Is titanium bar corrosion resistant?", a:"Yes. Titanium forms a stable, self-healing oxide film that gives it outstanding resistance to seawater, chlorides, and many oxidizing acids — environments where stainless steels can pit or crack. Grade 2 (CP titanium) offers the best general corrosion resistance and is the usual choice for chemical and marine service. Grade 5 is slightly less corrosion resistant than CP grades but is selected when higher strength is the priority." },
  { q:"What standard covers titanium bar?", a:"Titanium bar and billet are supplied to ASTM B348 (Standard Specification for Titanium and Titanium Alloy Bars and Billets), which defines chemistry and mechanical properties for grades including Grade 1, 2, 5, and 23. Related titanium product standards include ASTM B265 (plate/sheet), B338 (tube), and B861/B862 (pipe). We supply against ASTM B348 with the appropriate grade certification on the MTC." },
  { q:"Do you supply titanium bar with test certificates?", a:"Yes. Every titanium bar is supplied with a Mill Test Certificate documenting chemical composition (including interstitial elements such as oxygen, nitrogen, and hydrogen that are critical for titanium) and mechanical properties. Additional testing and third-party inspection can be arranged on request for aerospace and critical applications. Titanium is stored segregated from carbon steel to avoid iron contamination." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/titanium-bar-supplier-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries","telephone":"+919998280619","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Titanium","item":"https://www.creativemetalind.com/titanium-pipe-supplier-india"},{"@type":"ListItem","position":3,"name":"Titanium Bar Supplier India","item":"https://www.creativemetalind.com/titanium-bar-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function TitaniumBarSupplierIndia() {
  return (
    <>
      <Title>Titanium Bar Supplier India | Grade 2 &amp; Grade 5 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Titanium bar supplier India — Grade 2 (CP Ti) & Grade 5 (Ti-6Al-4V) round, square & hex bar per ASTM B348. Aerospace, chemical, marine. MTC. Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/titanium-bar-supplier-india" />
      <Meta property="og:title" content="Titanium Bar Supplier India | Grade 2 & Grade 5 | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Titanium bar supplier India — Grade 2 & Grade 5 (Ti-6Al-4V) round, square & hex bar per ASTM B348. Aerospace, chemical, marine. MTC. Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/titanium-bar-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Titanium Bar Supplier India | Grade 2 & Grade 5 | CMI" />
      <Meta name="twitter:description" content="Titanium bar supplier India — Grade 2 & Grade 5 (Ti-6Al-4V) per ASTM B348. MTC. Ready stock Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Titanium Bar Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <a href="/titanium-pipe-supplier-india" style={{color:"#E8821A","text-decoration":"none"}}>Titanium</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Titanium Bar Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            Titanium Bar Supplier in India — Grade 2 &amp; Grade 5
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a specialist <strong>titanium bar supplier in India</strong>, stocking <strong>titanium Grade 2</strong> (commercially pure) and <strong>titanium Grade 5</strong> (Ti-6Al-4V) <strong>bars</strong> per ASTM B348 in round, square, and hex sections. Grade 2 delivers outstanding corrosion resistance for chemical and marine service, while Grade 5 offers high strength-to-weight for aerospace, defence, and fastener applications. All <strong>titanium bar</strong> is supplied with Mill Test Certificate from our Vadodara facility. For piping products see our <a href="/titanium-pipe-supplier-india" style={{color:"#E8821A","text-decoration":"underline"}}>titanium pipe supplier</a> page.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Titanium Bar Grades — Stock</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Specification</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Form</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.spec}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.composition}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.form}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":g.stock==="Available"?"#d97706":"#6b7280","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* About */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Titanium Grade 2 vs Grade 5 Bar</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
          <strong>Titanium Grade 2</strong> is commercially pure (CP) titanium — the workhorse grade for corrosion resistance. In bar form it is machined into components for chemical processing, marine hardware, heat-exchanger parts, and general corrosion-resistant fittings, and is chosen where the environment (seawater, chlorides, oxidizing acids) defeats stainless steel.
        </p>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>
          <strong>Titanium Grade 5 (Ti-6Al-4V)</strong> is the most widely used titanium alloy, combining aluminium and vanadium additions to deliver much higher strength than CP grades. Grade 5 bar is the standard feedstock for aerospace and defence machined parts, high-strength fasteners, and (as Grade 23 / ELI) medical implants. Choose Grade 2 for corrosion, Grade 5 for strength-to-weight.
        </p>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Titanium Bar Specifications</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Bar Standard",value:"ASTM B348 (Bars & Billets)"},
            {label:"Grades",value:"Grade 1, 2, 5 (Ti-6Al-4V), 23 (ELI)"},
            {label:"Sections",value:"Round, square, hexagonal bar"},
            {label:"Density",value:"~4.51 g/cm³ (Grade 2)"},
            {label:"Grade 2 Character",value:"CP titanium — corrosion resistant"},
            {label:"Grade 5 Character",value:"Ti-6Al-4V — high strength alloy"},
            {label:"Testing",value:"Chemical (incl. O/N/H), mechanical, PMI"},
            {label:"Certification",value:"MTC per mill; TPI on request"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Titanium Bar</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {title:"Machined Components",desc:"Precision machined parts, valve stems, spindles and fittings from Grade 2 and Grade 5 bar"},
            {title:"Fasteners & Bolts",desc:"High-strength Grade 5 fasteners, studs and bolts where light weight and strength matter"},
            {title:"Aerospace & Defence",desc:"Grade 5 (Ti-6Al-4V) structural and engine components, airframe and defence hardware"},
            {title:"Chemical & Marine",desc:"Grade 2 CP titanium parts for chloride, seawater and oxidizing-acid environments"},
            {title:"Medical Implants",desc:"Grade 23 (Ti-6Al-4V ELI) bar machined into biocompatible surgical implants and instruments"},
            {title:"Anodes & Electrodes",desc:"Grade 2 titanium bar and rod for electroplating anodes and electrochemical hardware"},
          ].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{app.title}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Why CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy Titanium Bar from Creative Metal Industries?</h2>
        <ul style={{"list-style":"none",padding:0,display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"2rem"}}>
          {[
            "Grade 2 and Grade 5 (Ti-6Al-4V) titanium bar in round, square and hex sections",
            "ASTM B348 material supplied with Mill Test Certificate",
            "Cut-to-length and machining stock available on request",
            "Segregated titanium storage to prevent iron contamination",
            "Third-party inspection available for aerospace and critical work",
            "Correct grade guidance — Grade 2 for corrosion, Grade 5 for strength",
          ].map(point => (
            <li style={{display:"flex",gap:"0.7rem","align-items":"flex-start","font-size":"0.92rem",color:"#374151","line-height":"1.5"}}>
              <span style={{"flex-shrink":"0",color:"#E8821A","font-weight":"700"}}>✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Internal Links */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Related Products</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {[
            {href:"/titanium-pipe-supplier-india",label:"Titanium Pipe Supplier"},
            {href:"/titanium-grade-2-pipe-india",label:"Titanium Grade 2 Pipe"},
            {href:"/titanium-grade-5-pipe-india",label:"Titanium Grade 5 Pipe"},
            {href:"/ss-round-bar-supplier-vadodara",label:"SS Round Bar Vadodara"},
            {href:"/nickel-200-pipe-supplier-india",label:"Nickel 200 Products"},
          ].map(link => (
            <a href={link.href} style={{background:"#fff8f0",border:"1px solid #fde8cc","border-radius":"8px",padding:"0.85rem 1rem","font-size":"0.88rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>
              {link.label} →
            </a>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Titanium Bar</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(faq => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}>
              <summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{faq.q}</summary>
              <p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{faq.a}</p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center"}}>
          <h2 style={{"font-size":"1.5rem","font-weight":"800",color:"#fff","margin-bottom":"0.75rem"}}>Need Titanium Grade 2 or Grade 5 Bar?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem","font-size":"0.95rem"}}>
            Get price and availability — round, square and hex bar. Pan-India delivery.
          </p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi+I+need+titanium+bar" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        <RelatedPages currentPath="/titanium-bar-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Titanium Bar Supplier India</p>
        <p>GIDC Makarpura, Vadodara 390010 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a></p>
      </footer>
    </>
  );
}
