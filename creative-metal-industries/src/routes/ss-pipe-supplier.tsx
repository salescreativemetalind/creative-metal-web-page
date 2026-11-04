/**
 * /ss-pipe-supplier
 * 
 * PRIMARY KEYWORD: "stainless steel pipe supplier"
 * Commercial landing page for Creative Metal Industries' stainless-steel pipe enquiries
 * Target audience: Procurement managers, engineers, contractors, industrial buyers
 * Search intent: Commercial / transactional
 */

import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";


const SEAMLESS_VS_WELDED: string[][] = [
  ["Factor", "Seamless SS Pipe", "Welded SS Pipe"],
  ["Manufacturing", "Pierced from solid billet", "Welded from coil/strip (ERW/EFW)"],
  ["Typical Service", "Where a seamless product is required by the project specification", "Where the specified standard and project design permit welded pipe"],
];

const FAQs = [
  {
    q: "What types of stainless steel pipes can I enquire about?",
    a: "This page covers stainless-steel seamless and welded pipe enquiries for industrial and commercial requirements. Include the required pipe type, grade, specification, size and quantity so the team can confirm whether it can be offered for your order.",
  },
  {
    q: "Which SS pipe grades can I enquire about?",
    a: "Grades listed on this page as enquiry references include SS 304, 304L, 316, 316L, 317L, 321, 310/310S, 347 and 904L, as well as Duplex 2205 and Super Duplex 2507. Confirm the exact grade, product form and availability against your project specification.",
  },
  {
    q: "What sizes and schedules should I include in an enquiry?",
    a: "State the nominal pipe size or outside diameter, schedule or wall thickness, required length and quantity exactly as shown in the purchase specification. The team will confirm whether the requested dimensions can be offered; this page does not represent live dimensional inventory.",
  },
  {
    q: "Which standards and documents should I specify?",
    a: "State the governing product standard and any inspection or documentation requirements in your purchase specification. Include any MTC, IBR or NACE requirements in your enquiry so the team can confirm what applies to the specific grade and order.",
  },
  {
    q: "How do I request a quotation?",
    a: "Call, use WhatsApp or submit our enquiry form. Include grade, seamless or welded type, size, schedule or wall thickness, quantity, required documents and delivery location so the team can respond to your requirement.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.creativemetalind.com" },
        { "@type": "ListItem", position: 2, name: "Stainless Steel Pipe Supplier", item: "https://www.creativemetalind.com/ss-pipe-supplier" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.creativemetalind.com/ss-pipe-supplier",
      url: "https://www.creativemetalind.com/ss-pipe-supplier",
      name: "SS Pipe Supplier in India | Seamless & Welded Pipes",
      description: "SS pipe supplier in India for seamless and welded stainless steel pipe enquiries. Send the grade, standard, dimensions, quantity and delivery destination for review.",
      isPartOf: { "@id": "https://www.creativemetalind.com/#website" },
      about: { "@id": "https://www.creativemetalind.com/#organization" },
      primaryImageOfPage: "https://www.creativemetalind.com/img/ss_seamless_pipes.jpeg",
    },
  ],
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

const H2 = {
  "font-size": "1.4rem",
  "font-weight": "700",
  color: "#111827",
  margin: "2.5rem 0 1rem",
  "border-bottom": "2px solid #E8821A",
  "padding-bottom": "0.5rem",
} as const;

export default function SSPipeSupplierPage() {
  return (
    <>
      <Title>SS Pipe Supplier in India | Seamless &amp; Welded Pipes</Title>
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-pipe-supplier" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS pipe supplier in India for seamless and welded stainless steel pipe enquiries. Send the grade, standard, dimensions, quantity and delivery destination for review." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-pipe-supplier" />
      <Meta property="og:title" content="SS Pipe Supplier in India | Seamless & Welded Pipes" />
      <Meta property="og:description" content="Send seamless or welded stainless steel pipe requirements with the grade, standard, dimensions, quantity and delivery destination for review." />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS Pipe Supplier in India | Seamless & Welded Pipes" />
      <Meta name="twitter:description" content="Send seamless or welded stainless steel pipe requirements with the grade, standard, dimensions, quantity and delivery destination for review." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" />
        <div style={{flex:1}} />
        <a href="tel:+919998280619" class="btn btn-outline" style={{"font-size":"0.85rem",padding:"0.45rem 1rem"}}>📞 Call</a>
        <a href="/#contact" class="btn btn-primary" style={{"font-size":"0.85rem",padding:"0.45rem 1rem"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a> <span style={{margin:"0 0.5rem"}}>›</span>
        <span>Stainless Steel Pipe Supplier in India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <h1 style={{"font-size":"clamp(1.8rem,4vw,2.8rem)","font-weight":"800",color:"#111827","margin-bottom":"1.5rem"}}>Stainless Steel (SS) Pipe Supplier in India</h1>

        <div style={{display:"flex",gap:"1.5rem","align-items":"flex-start","flex-wrap":"wrap","margin-bottom":"1.5rem"}}>
          <img
            src="/img/ss_seamless_pipes.jpeg"
            alt="Stainless steel pipes for industrial supply"
            width="274"
            height="184"
            loading="eager"
            decoding="async"
            style={{"border-radius":"10px",border:"1px solid #e5e7eb","flex-shrink":"0"}}
          />
          <div style={{"min-width":"280px",flex:"1"}}>
            <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8",margin:"0 0 1rem"}}>
              Creative Metal Industries handles India-focused enquiries for seamless and welded stainless-steel pipes. Send the required grade, governing product standard, nominal size or outside diameter, wall thickness or schedule, length, quantity, documentation requirements and delivery destination for an order-specific review.
            </p>
            <div style={{display:"flex",gap:"0.75rem","flex-wrap":"wrap"}}>
              <a href="/#contact" class="btn btn-primary" style={{"font-size":"0.88rem",padding:"0.6rem 1rem"}}>Request a Pipe Quote</a>
              <a href="https://wa.me/919998280619?text=Hi%2C%20I%20need%20a%20stainless%20steel%20pipe%20quotation" target="_blank" rel="noopener" class="btn btn-outline" style={{"font-size":"0.88rem",padding:"0.6rem 1rem"}}>Send RFQ on WhatsApp</a>
            </div>
          </div>
        </div>

        <p style={{"font-size":"1rem","color":"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          For our broader local stainless-steel product range, visit the <a href="/stainless-steel-supplier-vadodara" style={{color:"#E8821A","font-weight":"600"}}>Stainless Steel Supplier in Vadodara</a> page. This page focuses on pipe types, grades, dimensions and the information needed to request a quote.
        </p>

        <h2 style={H2}>Seamless and Welded Stainless Steel Pipe Enquiries</h2>
        <p style={{"font-size":"1rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
          Creative Metal Industries is based in Vadodara, Gujarat. For a stainless-steel pipe enquiry, send the project specification and delivery destination so the team can confirm whether the requested product, documentation and terms can be offered for that order.
        </p>

        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <h3 style={{"font-size":"1.05rem","font-weight":"600",color:"#111827","margin-bottom":"1rem"}}>Details to Include in Your Pipe Enquiry</h3>
          <div style={{"display":"grid","grid-template-columns":"repeat(auto-fit,minmax(240px,1fr))",gap:"1rem"}}>
            {[
              {title:"Pipe type",desc:"Specify seamless or welded as required by the project"},
              {title:"Grade",desc:"Provide the grade designation from your material specification"},
              {title:"Dimensions",desc:"Include nominal size, schedule or wall thickness, and length"},
              {title:"Product standard",desc:"Name the governing ASTM or other project specification"},
              {title:"Quantity",desc:"State the number of lengths or required total quantity"},
              {title:"Documentation",desc:"List MTC, inspection and testing requirements for confirmation"},
              {title:"Delivery",desc:"Provide delivery destination and requested date"},
              {title:"Processing",desc:"Mention end finish or any required processing"},
            ].map(item => (
              <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
                <h4 style={{"font-size":"0.9rem","font-weight":"600",color:"#111827","margin-bottom":"0.35rem"}}>✓ {item.title}</h4>
                <p style={{"font-size":"0.82rem",color:"#6b7280",margin:0,"line-height":"1.5"}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 style={H2}>SS Pipe Grades and Product Specifications</h2>
        <p style={{"font-size":"1rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          The grade list below is an enquiry reference for austenitic and duplex stainless steels. Confirm the exact grade, product form, standard, dimensions and documentation against your purchase specification before placing an order.
        </p>

        <h3 style={{"font-size":"1.15rem","font-weight":"700",color:"#111827",margin:"1.75rem 0 0.75rem"}}>SS Pipe Grades</h3>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Grades listed here as enquiry references include <strong>SS 304, 304L, 316, 316L, 317L, 321, 310S, 347 and 904L</strong>, plus Duplex 2205 and Super Duplex 2507. Use the dedicated <a href="/ss-304-316l-pipe-supplier-india" style={{color:"#E8821A","font-weight":"600"}}>304/304L/316/316L pipe page</a> for grade-specific information, or the <a href="/ss-310-pipe-supplier-india" style={{color:"#E8821A","font-weight":"600"}}>SS 310 pipe page</a> for that grade. Confirm the requested grade, pipe standard and availability against your project specification.
        </p>

        <h2 style={H2}>SS Pipe Dimensions, Wall Thickness and Schedules</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
          State the nominal pipe size or outside diameter and the required schedule or wall thickness exactly as defined by the purchase specification. Schedule designations such as SCH 5S, 10S, 40S and 80S identify dimensional series; they do not by themselves establish pressure rating or suitability for an application.
        </p>
        <ul style={{"font-size":"0.9rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem","padding-left":"1.5rem"}}>
          <li>Nominal pipe size (NPS/NB) or specified outside diameter</li>
          <li>Schedule designation or minimum/nominal wall thickness</li>
          <li>Required random, fixed or cut length</li>
          <li>Plain, bevelled, threaded or other specified end preparation</li>
          <li>Applicable dimensional standard and tolerances</li>
        </ul>
        <p style={{"font-size":"0.88rem",color:"#6b7280","line-height":"1.7","margin-bottom":"1.5rem"}}>
          Pressure and service suitability depend on the material grade, actual dimensions, temperature, corrosion allowance, joining method, design code and engineering calculation. This page does not assign an application or pressure rating from schedule alone.
        </p>

        <h2 style={H2}>Standards and Documentation</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          This page references ASTM A312 for austenitic stainless-steel pipe and ASTM A790 for duplex pipe. Identify the governing specification in your enquiry and ask the sales team to confirm its applicability and any supporting documents for the requested product.
        </p>

        <h3 style={{"font-size":"1.15rem","font-weight":"700",color:"#111827",margin:"1.75rem 0 0.75rem"}}>Material Test Certificates and Inspection Requirements</h3>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
          Include any Mill Test Certificate (MTC), inspection and testing requirements in your RFQ. The team can confirm which documents and inspection scope apply to the requested material and order.
        </p>
        <ul style={{"font-size":"0.9rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem","padding-left":"1.5rem"}}>
          <li>Grade and heat/lot identification, where applicable</li>
          <li>Product standard and dimensional requirements</li>
          <li>Required chemical and mechanical test documentation</li>
          <li>Inspection and testing scope required by the order</li>
        </ul>

        <h2 style={H2}>Grade-Specific Stainless Steel Pipe Requirements</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>
          This national page covers the general pipe enquiry process rather than duplicating detailed grade selection. For composition, low-carbon grade distinctions and order details, use the <a href="/ss-304-316l-pipe-supplier-india" style={{color:"#E8821A","font-weight":"600"}}>SS 304, 304L, 316 and 316L pipe page</a>. For elevated-temperature grade enquiries, use the <a href="/ss-310-pipe-supplier-india" style={{color:"#E8821A","font-weight":"600"}}>SS 310/310S pipe page</a>. Select material against the project specification and obtain engineering approval before substituting grades.
        </p>

        <h2 style={H2}>Seamless vs Welded Pipe: Project Requirements</h2>
        
        <h3 style={{"font-size":"1.15rem","font-weight":"700",color:"#111827",margin:"1.75rem 0 0.75rem"}}>Seamless Stainless Steel Pipe</h3>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Seamless pipe is produced without a longitudinal weld seam. Where a seamless product is required, specify the grade, applicable standard and dimensions in the RFQ. Pressure suitability depends on the complete design, including material, wall thickness, temperature and governing code.
        </p>

        <h3 style={{"font-size":"1.15rem","font-weight":"700",color:"#111827",margin:"1.75rem 0 0.75rem"}}>Welded Stainless Steel Pipe</h3>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Welded pipe is formed from stainless-steel strip or coil and joined along a longitudinal seam. Specify the required product standard, manufacturing type, grade and inspection requirements. Confirm that the selected product is permitted by the project design and service conditions.
        </p>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          When contacting a stainless steel welded pipe supplier, include the grade, governing standard, dimensions, quantity and any required weld inspection or documentation in your enquiry. Creative Metal Industries can review these order details and confirm applicable availability and terms.
        </p>

        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem","min-width":"600px"}}>
            <thead>
              <tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}>
                {SEAMLESS_VS_WELDED[0].map(h => <th style={{padding:"0.7rem 1rem","text-align":"left"}}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {SEAMLESS_VS_WELDED.slice(1).map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}>
                  <td style={{padding:"0.6rem 1rem","font-weight":"600","white-space":"nowrap"}}>{r[0]}</td>
                  <td style={{padding:"0.6rem 1rem"}}>{r[1]}</td>
                  <td style={{padding:"0.6rem 1rem"}}>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={H2}>Industries and Applications</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(250px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {icon:"🧪",name:"Chemical Processing",desc:"Project enquiries may specify process piping for defined chemical service conditions."},
            {icon:"🍶",name:"Food & Beverage",desc:"Projects may require hygienic piping with a specified grade, finish and documentation scope."},
            {icon:"💊",name:"Pharmaceutical",desc:"Water and process systems may specify controlled finish, cleanliness and inspection requirements."},
            {icon:"🛢️",name:"Oil & Gas",desc:"Project specifications determine the permitted grade, pipe form, testing and documentation."},
            {icon:"💧",name:"Water Treatment",desc:"Material selection depends on water chemistry, temperature, pressure and design requirements."},
            {icon:"🏗️",name:"Construction",desc:"Architectural or structural requirements should state the product form, finish and dimensions."},
            {icon:"⚡",name:"Power Generation",desc:"Service conditions and the governing code determine the required material and pipe specification."},
            {icon:"🚗",name:"Automotive",desc:"Fabrication requirements should define grade, dimensions, finish and applicable specification."},
            {icon:"🌊",name:"Marine",desc:"Material selection must be checked against the actual chloride exposure and engineering design."},
          ].map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.25rem"}}>
              <span style={{"font-size":"1.5rem"}}>{ind.icon}</span>
              <h3 style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.5rem 0 0.25rem"}}>{ind.name}</h3>
              <p style={{"font-size":"0.84rem",color:"#6b7280",margin:0,"line-height":"1.5"}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={H2}>Request a Quote for Stainless Steel Pipes</h2>
        <p style={{"font-size":"1rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
          To receive an accurate, complete quotation from a <strong>stainless steel pipe supplier</strong>, provide the following information in your Request for Quotation (RFQ):
        </p>

        <div style={{background:"#fff7ed",border:"1px solid #fed7aa","border-radius":"10px",padding:"1.5rem 2rem","margin-bottom":"2rem"}}>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(260px,1fr))",gap:"0.5rem"}}>
            {[
              "Material grade (e.g., TP304, TP316L, TP321)",
              "Seamless or welded pipe",
              "Nominal pipe size (e.g., 2 inch NB, 100NB)",
              "Schedule or wall thickness (e.g., SCH 40S, SCH 80S)",
              "Length required (random length, fixed 6m, or cut-to-length)",
              "Quantity (number of pieces or total length in meters)",
              "ASTM/ASME specification (e.g., ASTM A312, ASTM A790)",
              "Surface finish (pickled & passivated, bright annealed, polished)",
              "End connection (plain end, beveled, threaded NPT/BSP)",
              "Required material certificate type, if specified by the order",
              "Third-party inspection scope and nominated agency, if required",
              "Delivery location (city, state, country)",
              "Required delivery date",
              "Required commercial or shipping terms for quotation review",
            ].map(item => (
              <div style={{display:"flex","align-items":"start"}}>
                <span style={{color:"#ea580c","font-weight":"bold","margin-right":"0.5rem","flex-shrink":"0"}}>✓</span>
                <span style={{"font-size":"0.88rem",color:"#431407"}}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p style={{"font-size":"0.88rem",color:"#6b7280","line-height":"1.7","margin-bottom":"2rem"}}>
          Include complete technical and delivery details to help the team review your requirement. Pricing, lead time and order terms are confirmed in the quotation.
        </p>


        <h2 style={H2}>How Your Stainless Steel Pipe RFQ Is Reviewed</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(240px,1fr))",gap:"1rem","margin-bottom":"1.25rem"}}>
          {[
            {title:"Material identity",desc:"State the exact TP or UNS grade designation required by the purchase specification."},
            {title:"Product definition",desc:"Identify seamless or welded pipe. Do not use a tube standard unless the requirement is actually for tube."},
            {title:"Dimensional definition",desc:"Provide NPS/NB or outside diameter, wall thickness or schedule, length and end preparation."},
            {title:"Compliance definition",desc:"Name the governing standard and edition, plus any project clauses that apply to the order."},
            {title:"Documentation scope",desc:"List certificate, test and inspection requirements exactly as stated in the purchase documents."},
            {title:"Commercial logistics",desc:"Provide quantity, destination, requested date and the commercial terms needed in the quotation."},
          ].map(item => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <h3 style={{"font-size":"0.9rem","font-weight":"600",color:"#111827",margin:"0 0 0.25rem"}}>{item.title}</h3>
              <p style={{"font-size":"0.82rem",color:"#6b7280",margin:0,"line-height":"1.5"}}>{item.desc}</p>
            </div>
          ))}
        </div>
        <p style={{"font-size":"0.88rem",color:"#4b5563","line-height":"1.7","margin-bottom":"2rem"}}>
          Before ordering, check that the quotation explicitly confirms the offered grade and pipe form, governing standard, dimensions, documentation scope, source when required, availability, lead time and commercial terms. An enquiry submission does not confirm that every requested item or document can be offered.
        </p>

        <h2 style={H2}>Frequently Asked Questions — SS Pipe Supplier</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQs.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}>
              <summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary>
              <p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.75rem"}}>Request a Stainless Steel Pipe Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Send the grade, seamless or welded requirement, standard, dimensions, quantity, documentation needs and delivery location for an order-specific review.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C%20I%20need%20a%20stainless%20steel%20pipe%20quotation" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        <h2 style={{...H2,margin:"3rem 0 1rem"}}>Related Stainless Steel Pipe Resources</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {[
            {href:"/stainless-steel-supplier-vadodara",label:"Stainless Steel Supplier in Vadodara"},
            {href:"/ss-304-316l-pipe-supplier-india",label:"SS 304 & 316L Pipe Supplier India"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe Supplier India"},
            {href:"/ss-321-pipe-supplier-india",label:"SS 321 Pipe Supplier India"},
            {href:"/ss-310-pipe-supplier-india",label:"SS 310 Pipe Supplier India"},
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex 2205 Supplier India"},
          ].map(l => (
            <a href={l.href} style={{background:"#fff8f0",border:"1px solid #fde8cc","border-radius":"8px",padding:"0.85rem 1rem","font-size":"0.88rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>

        <RelatedPages currentPath="/ss-pipe-supplier" />
      </main>
      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}><p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — stainless-steel pipe enquiries | <a href="/stainless-steel-supplier-vadodara" style={{color:"#E8821A"}}>Stainless steel products in Vadodara</a></p></footer>
    </>
  );
}
