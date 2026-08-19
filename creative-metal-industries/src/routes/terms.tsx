import { Title, Meta, Link } from "@solidjs/meta";
import { PageLayout } from "../components/Layout";

export default function TermsPage() {
  return (
    <PageLayout breadcrumb={[{ label: "Home", href: "/" }, { label: "Terms of Trade" }]}>
      <Title>Terms of Trade | Creative Metal Industries — Vadodara</Title>
      <Meta property="og:type" content="website" />
      <Meta name="description" content="Terms of Trade for Creative Metal Industries. General terms and conditions for purchase orders, quotations, delivery, payment and returns." />
      <Meta name="robots" content="index, follow" />
      <Link rel="canonical" href="https://www.creativemetalind.com/terms" />
      <Meta property="og:title" content="Terms of Trade | Creative Metal Industries" />
      <Meta property="og:description" content="General terms and conditions for purchase orders, deliveries, and payments at Creative Metal Industries." />
      <Meta property="og:url" content="https://www.creativemetalind.com/terms" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />

      <section class="page-hero" style="padding:3rem 0 2rem">
        <div class="container">
          <h1>Terms of Trade</h1>
          <p>Last updated: July 2026</p>
        </div>
      </section>

      <section style="background:var(--white);padding:3rem 0 5rem">
        <div class="container" style="max-width:860px">

          <h2>1. General</h2>
          <p>These Terms of Trade ("Terms") govern all transactions between <strong>Creative Metal Industries</strong> ("Seller", "We", "CMI") and the Buyer. By placing an order or accepting a quotation, the Buyer agrees to these Terms.</p>
          <p>Our registered address: F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Vadodara – 390001, Gujarat, India.</p>

          <h2>2. Quotations &amp; Orders</h2>
          <ul>
            <li>All quotations are valid for <strong>7 days</strong> from the date of issue unless otherwise specified.</li>
            <li>Prices are subject to change based on raw material market fluctuations (Nickel LME, SAIL/JSW list price changes).</li>
            <li>Orders are confirmed only upon receipt of a written Purchase Order (PO) and advance payment as agreed.</li>
            <li>Minimum order values may apply depending on the product and grade.</li>
          </ul>

          <h2>3. Pricing</h2>
          <ul>
            <li>All prices are quoted in <strong>Indian Rupees (INR)</strong> unless otherwise agreed for export orders (USD/EUR).</li>
            <li>Prices are <strong>Ex-Works Vadodara</strong> unless delivery terms are explicitly mentioned.</li>
            <li>GST (Goods and Services Tax) at the applicable rate will be charged separately as per Government of India regulations.</li>
            <li>For export orders, pricing is quoted on FOB/CIF/CFR basis as agreed.</li>
          </ul>

          <h2>4. Payment Terms</h2>
          <ul>
            <li><strong>Ready Stock:</strong> 100% advance payment via RTGS/NEFT/UPI before dispatch.</li>
            <li><strong>Indent/Import Orders:</strong> 50% advance with PO, balance before dispatch (or as mutually agreed).</li>
            <li><strong>Credit Terms:</strong> Available for repeat customers with satisfactory track record — subject to approval.</li>
            <li><strong>Export Orders:</strong> Advance TT or confirmed irrevocable Letter of Credit (LC) at sight.</li>
            <li>Late payments attract interest at 2% per month on the outstanding balance.</li>
          </ul>

          <h2>5. Delivery &amp; Dispatch</h2>
          <ul>
            <li><strong>Ready Stock:</strong> Dispatched within 1–3 working days after payment confirmation.</li>
            <li><strong>Indent/Import Orders:</strong> Lead time as communicated at the time of quotation (typically 2–8 weeks).</li>
            <li>Delivery dates are estimates and not guaranteed. CMI shall not be liable for delays caused by mill production schedules, transport disruptions, or force majeure.</li>
            <li>Transportation charges are borne by the Buyer unless included in the quoted price.</li>
            <li>Risk of loss transfers to the Buyer once material is dispatched from our warehouse/mill.</li>
          </ul>

          <h2>6. Inspection &amp; Testing</h2>
          <ul>
            <li>All material is supplied with Mill Test Certificates (MTC) as per EN 10204 Type 3.1.</li>
            <li>Third-party inspection (TPI) by agencies like DNV, TUV, SGS, BVIS, LRIS can be arranged at additional cost.</li>
            <li>IBR Form III-C certification is available for applicable products at additional charges.</li>
            <li>Buyer-specific testing (HIC, SSC, PMI, Charpy Impact) available on request.</li>
          </ul>

          <h2>7. Quality &amp; Specifications</h2>
          <ul>
            <li>Material is supplied strictly as per ASTM/ASME/IS/API/EN standards mentioned in the quotation.</li>
            <li>Dimensional tolerances shall be as per the applicable standard unless tighter tolerances are agreed in writing.</li>
            <li>Minor surface marks, handling scratches during transit are acceptable as per industry norms and do not constitute a defect.</li>
          </ul>

          <h2>8. Returns &amp; Claims</h2>
          <ul>
            <li>Claims for short supply, damage in transit, or wrong material must be raised within <strong>7 days</strong> of receipt with photographic evidence.</li>
            <li>Material cut to size or processed as per Buyer's specifications is <strong>non-returnable</strong>.</li>
            <li>Returns are accepted only with prior written approval from CMI and are subject to a restocking charge.</li>
            <li>Material must be returned in original packing and undamaged condition.</li>
          </ul>

          <h2>9. Cancellation</h2>
          <ul>
            <li>Ready stock orders can be cancelled before dispatch with a cancellation fee of 5% of order value.</li>
            <li>Indent/import orders <strong>cannot be cancelled</strong> once the mill has confirmed production.</li>
          </ul>

          <h2>10. Force Majeure</h2>
          <p>CMI shall not be liable for failure or delay in performance due to causes beyond reasonable control, including but not limited to: natural disasters, war, government restrictions, mill shutdowns, strikes, pandemics, or transportation disruptions.</p>

          <h2>11. Intellectual Property</h2>
          <p>All content on www.creativemetalind.com — including text, images, product data, charts, and guides — is the property of Creative Metal Industries. Reproduction without written permission is prohibited.</p>

          <h2>12. Governing Law &amp; Jurisdiction</h2>
          <p>These Terms shall be governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of courts in <strong>Vadodara, Gujarat, India</strong>.</p>

          <h2>13. Contact</h2>
          <p>For questions about these Terms of Trade:</p>
          <ul style="list-style:none;padding:0">
            <li><strong>Creative Metal Industries</strong></li>
            <li>F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road</li>
            <li>Vadodara – 390001, Gujarat, India</li>
            <li>Email: <a href="mailto:creativemetalind@gmail.com">creativemetalind@gmail.com</a></li>
            <li>Phone: <a href="tel:+919998280619">+91 99982 80619</a> (Sunny Shah)</li>
            <li>Phone: <a href="tel:+919825506110">+91 98255 06110</a> (Ghewar Shah)</li>
          </ul>

        </div>
      </section>
    </PageLayout>
  );
}
