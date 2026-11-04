import { Title, Meta, Link } from "@solidjs/meta";
import { PageLayout } from "../components/Layout";

const ABOUT_SCHEMA = JSON.stringify({
  "@context":"https://schema.org","@type":"Organization",
  "name":"Creative Metal Industries",
  "alternateName":["CMI Vadodara","Creative Metal Ind"],
  "url":"https://www.creativemetalind.com",
  "logo":"https://www.creativemetalind.com/logo_cmi.png",
  "description":"Creative Metal Industries is a Vadodara-based contact for specification-led industrial metal enquiries. Buyers can submit product form, grade, standard, dimensions, quantity and documentation requirements for order-specific review.",
  "address":{"@type":"PostalAddress","streetAddress":"F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"},
  "contactPoint":[{"@type":"ContactPoint","telephone":"+919998280619","contactType":"sales","name":"Sunny Shah"},{"@type":"ContactPoint","telephone":"+919825506110","contactType":"customer support","name":"Ghewar Shah"}],
  "sameAs":["https://www.indiamart.com/creativemetalindustries/","https://x.com/CreativeMetal","https://t.me/Creativemetal_Industries"],
  "areaServed":[{"@type":"State","name":"Gujarat"},{"@type":"Country","name":"India"}],
  "knowsAbout":["Stainless steel pipe enquiries","Carbon steel pipe enquiries","Alloy steel pipe enquiries","Pipe and tube specification distinctions","Industrial metal procurement requirements","Material documentation requirements"]
});

export default function AboutPage() {
  return (
    <PageLayout active="About Us" breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}>
      <Title>About Creative Metal Industries | Vadodara | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="About Creative Metal Industries, a Vadodara-based industrial metal supplier. Product requirements, availability and order terms are confirmed by enquiry." />
      <Link rel="canonical" href="https://www.creativemetalind.com/about" />
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content="About Creative Metal Industries | Vadodara" />
      <Meta property="og:description" content="Learn about Creative Metal Industries in Vadodara. Contact the team to confirm product scope, availability, documentation and terms for an order." />
      <Meta property="og:url" content="https://www.creativemetalind.com/about" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="About Creative Metal Industries | Vadodara" />
      <Meta name="twitter:description" content="About Creative Metal Industries in Vadodara. Confirm product scope, availability and documentation for each order." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={ABOUT_SCHEMA} />
      <script type="application/ld+json" innerHTML={JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"About Us","item":"https://www.creativemetalind.com/about"}]})} />

      <section class="page-hero">
        <div class="container">
          <span class="section-label">About Us</span>
          <h1>About Creative Metal Industries — Vadodara</h1>
          <p>Industrial metal supplier enquiries for pipes, plates, fittings and related products. Confirm product scope, specifications and terms for each order.</p>
        </div>
      </section>

      {/* Company Story */}
      <section style="background:var(--white);padding:5rem 0">
        <div class="container">
          <div class="about-top" style="margin-bottom:4rem">
            <div class="about-top-left">
              <span class="section-label">Our Story</span>
              <h2>Who We Are</h2>
              <p class="about-tagline">Industrial Metal Supplier</p>
            </div>
            <div class="about-top-divider" aria-hidden="true"/>
            <div class="about-top-right">
              <p>Creative Metal Industries is a Vadodara-based contact for specification-led industrial metal enquiries. The website organizes enquiries for stainless, carbon and alloy steel, duplex stainless steel, nickel-alloy and titanium product categories without treating a web-page list as proof of current stock.</p>
              <p>Industrial buyers can send the required product form, exact grade or UNS designation, governing specification and edition, dimensions, quantity, destination and documentation clauses. The quotation should confirm the offered material, source when required, documents, availability, lead time and commercial terms for the specific order.</p>
            </div>
          </div>



          {/* Core Values */}
          <div class="about-pillars">
            {[
              { icon: "📋", title: "Product Enquiries", body: "Send the product form, grade and specification so the team can review the specific requirement." },
              { icon: "📄", title: "Documentation", body: "List any required certificates, inspection or testing in your enquiry. Confirm applicable documentation for the offered product and order." },
              { icon: "📦", title: "Availability", body: "Availability, source and delivery terms are not guaranteed by this page and must be confirmed for each order." },
              { icon: "💬", title: "Request a Quote", body: "Contact the team with quantity and delivery destination to request an order-specific quotation." },
            ].map(p => (
              <div class="pillar-card">
                <div class="pillar-icon-wrap"><span class="pillar-icon">{p.icon}</span></div>
                <div class="pillar-body"><h4>{p.title}</h4><p>{p.body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team — E-E-A-T: shows real people behind the business */}
      <section style="background:var(--sky2);padding:4rem 0;border-top:1px solid var(--border)">
        <div class="container">
          <div class="section-head-center" style="margin-bottom:2.5rem">
            <span class="section-label">Our Team</span>
            <h2>Leadership &amp; Key Contacts</h2>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem">
            <div class="pillar-card" style="flex-direction:column;gap:0.75rem;padding:2rem;text-align:center">
              <h4 style="font-size:1.1rem;margin-bottom:0.25rem">Sunny Shah</h4>
              <p style="font-size:0.85rem;color:var(--amber);font-weight:700;margin:0">Sales Contact</p>
              <p style="font-size:0.85rem;color:var(--muted);margin:0">📞 +91 99982 80619 · creativemetalind@gmail.com</p>
            </div>
            <div class="pillar-card" style="flex-direction:column;gap:0.75rem;padding:2rem;text-align:center">
              <h4 style="font-size:1.1rem;margin-bottom:0.25rem">Ghewar Shah</h4>
              <p style="font-size:0.85rem;color:var(--amber);font-weight:700;margin:0">Company Contact</p>
              <p style="font-size:0.85rem;color:var(--muted);margin:0">📞 +91 98255 06110</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation and inspection requirements */}
      <section style="background:var(--white);padding:4rem 0;border-top:1px solid var(--border)">
        <div class="container">
          <div class="section-head-center" style="margin-bottom:2.5rem">
            <span class="section-label">Order Requirements</span>
            <h2>Documentation &amp; Inspection Enquiries</h2>
          </div>
          <p style="max-width:760px;margin:0 auto;text-align:center">Specify any required material certificates, IBR or NACE requirements, testing and third-party inspection in your enquiry. The applicable scope and availability of documents or services must be confirmed for the specific product and order; no blanket certification or testing claim is made here.</p>
        </div>
      </section>

      {/* Local contact and enquiry routing */}
      <section style="background:var(--sky2);padding:4rem 0;border-top:1px solid var(--border)">
        <div class="container">
          <div class="section-head-center" style="margin-bottom:2.5rem">
            <span class="section-label">Vadodara Contact</span>
            <h2>Arrange a Local Product Enquiry</h2>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.5rem">
            {[
              { title:"Before visiting", body:"Call the sales contact to confirm the current office, meeting or collection location and a suitable time. The website does not independently verify warehouse facilities or opening hours." },
              { title:"For local delivery or collection", body:"State the Vadodara destination or collection requirement, product form, dimensions, quantity and requested date in the RFQ." },
              { title:"For technical review", body:"Send the governing standard, edition, grade designation, inspection clauses and required documents exactly as written in the purchase specification." },
            ].map(item => (
              <div class="pillar-card" style="flex-direction:column;gap:0.75rem;padding:2rem">
                <h3 style="font-size:1rem;margin:0">{item.title}</h3>
                <p style="font-size:0.88rem;color:var(--charcoal);line-height:1.7;margin:0">{item.body}</p>
              </div>
            ))}
          </div>
          <div style="margin-top:2rem;text-align:center">
            <p style="font-size:0.9rem;color:var(--charcoal)">Call <a href="tel:+919998280619" style="color:var(--amber);font-weight:700">+91 99982 80619</a> or use the website enquiry form to confirm contact and order details.</p>
          </div>
        </div>
      </section>

      {/* Industry procurement context */}
      <section style="background:var(--white);padding:4rem 0;border-top:1px solid var(--border)">
        <div class="container">
          <div class="section-head-center" style="margin-bottom:2rem">
            <span class="section-label">Industry Procurement Context</span>
            <h2>Information Industrial Buyers Should Include</h2>
            <p style="max-width:760px;margin:0.75rem auto 0;color:var(--muted)">These examples explain enquiry requirements; they do not claim completed projects, approvals or suitability for a specific service.</p>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.25rem">
            {[
              { industry:"Process, chemical and refinery projects", requirement:"State process medium, concentration, design temperature and pressure, corrosion allowance, governing code and required inspection clauses." },
              { industry:"Power and elevated-temperature projects", requirement:"State operating and design temperatures, continuous or cyclic service, applicable code, grade designation and heat-treatment requirements." },
              { industry:"Water, marine and chloride exposure", requirement:"Provide water chemistry or chloride conditions, temperature, pressure, product form and the engineer-approved material specification." },
              { industry:"Food, dairy and pharmaceutical systems", requirement:"Distinguish pipe from tube and define grade, finish, cleanliness, dimensional standard, documentation and inspection requirements." },
              { industry:"Fabrication and EPC procurement", requirement:"Provide drawings or bills of material, item-level standards, dimensions, quantities, end preparation, approved-source clauses and delivery destinations." },
              { industry:"Structural and general engineering", requirement:"State the product form, grade, dimensional standard, section or plate dimensions, quantity, fabrication condition and required documents." },
            ].map(item => (
              <article style="background:var(--sky2);border:1px solid var(--border);border-radius:12px;padding:1.5rem">
                <h3 style="font-size:1rem;margin:0 0 0.6rem;color:var(--navy)">{item.industry}</h3>
                <p style="font-size:0.86rem;color:var(--charcoal);line-height:1.7;margin:0">{item.requirement}</p>
              </article>
            ))}
          </div>
        </div>
      </section>





      {/* Quality Control Process */}
      <section style="background:var(--white);padding:4rem 0;border-top:1px solid var(--border)">
        <div class="container">
          <div class="section-head-center" style="margin-bottom:2rem">
            <span class="section-label">Order Review</span>
            <h2>Information to Confirm Before an Order</h2>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.5rem">
            {[
              {step:"1",title:"Specify",desc:"Identify the product, grade, dimensions and governing specification in the enquiry."},
              {step:"2",title:"Documents",desc:"List certificate, traceability and inspection requirements for the order."},
              {step:"3",title:"Confirm",desc:"Confirm the offered material, applicable technical scope and supporting documents before purchase."},
              {step:"4",title:"Review",desc:"Have a qualified project engineer or inspector review material suitability for the intended service."},
              {step:"5",title:"Agree Terms",desc:"Confirm availability, source, price and delivery terms in the quotation for the specific order."},
            ].map(s => (
              <div style="text-align:center">
                <span style="display:inline-block;width:2.5rem;height:2.5rem;line-height:2.5rem;background:linear-gradient(135deg,#E8821A,#d85c2a);color:#fff;border-radius:50%;font-weight:800;font-size:1.1rem">{s.step}</span>
                <h4 style="font-size:0.95rem;margin:0.75rem 0 0.3rem">{s.title}</h4>
                <p style="font-size:0.82rem;color:var(--charcoal);line-height:1.5;margin:0">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style="background:linear-gradient(135deg,#E8821A,#d85c2a);padding:3rem 0;text-align:center">
        <div class="container">
          <h2 style="color:#fff;font-size:1.4rem;margin-bottom:0.75rem">Ready to Work With Us?</h2>
          <p style="color:rgba(255,255,255,0.9);margin-bottom:1.5rem;font-size:0.95rem">Send your product specification and quantity to request an order-specific quotation. Availability and delivery terms require confirmation.</p>
          <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
            <a href="tel:+919998280619" class="btn btn-outline" style="background:#fff;color:#E8821A;border:none;font-weight:800">📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" class="btn btn-primary" style="background:#25D366;border:none;font-weight:800">💬 WhatsApp</a>
            <a href="/#contact" class="btn btn-outline" style="color:#fff;border-color:rgba(255,255,255,0.6);font-weight:700">Get a Quote →</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
