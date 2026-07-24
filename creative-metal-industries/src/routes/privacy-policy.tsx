import { Title, Meta, Link } from "@solidjs/meta";
import { PageLayout } from "../components/Layout";

export default function PrivacyPolicyPage() {
  return (
    <PageLayout breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}>
      <Title>Privacy Policy | Creative Metal Industries — Vadodara</Title>
      <Meta name="description" content="Privacy Policy for Creative Metal Industries. Learn how we collect, use and protect your personal information when you visit our website or submit enquiries." />
      <Meta name="robots" content="index, follow" />
      <Link rel="canonical" href="https://www.creativemetalind.com/privacy-policy" />
      <Meta property="og:title" content="Privacy Policy | Creative Metal Industries" />
      <Meta property="og:description" content="Privacy Policy — how Creative Metal Industries handles your personal data and enquiry information." />
      <Meta property="og:url" content="https://www.creativemetalind.com/privacy-policy" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary" />

      <section class="page-hero" style="padding:3rem 0 2rem">
        <div class="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: July 2026</p>
        </div>
      </section>

      <section style="background:var(--white);padding:3rem 0 5rem">
        <div class="container" style="max-width:860px">

          <h2>1. Information We Collect</h2>
          <p>When you visit <strong>www.creativemetalind.com</strong> or submit an enquiry through our contact form, we may collect the following information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, company name, email address, phone number — provided voluntarily through our enquiry form.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, referring URL — collected automatically via analytics tools.</li>
            <li><strong>Cookies:</strong> Small data files stored on your device to improve your browsing experience and track website performance.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To respond to your product enquiries and provide quotations</li>
            <li>To communicate about orders, deliveries and after-sales support</li>
            <li>To improve our website content and user experience</li>
            <li>To analyse website traffic patterns and performance</li>
            <li>To send relevant product updates or industry news (only if you opt in)</li>
          </ul>

          <h2>3. Data Sharing</h2>
          <p>We do <strong>not</strong> sell, trade, or rent your personal information to third parties. We may share information only in these cases:</p>
          <ul>
            <li><strong>Service Providers:</strong> Email hosting (Gmail/Google Workspace), analytics (Google Analytics), and hosting (Vercel) — strictly for operational purposes.</li>
            <li><strong>Legal Requirements:</strong> If required by law, court order, or government authority.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure or destruction. Our website uses HTTPS encryption for all data transfers.</p>

          <h2>5. Cookies</h2>
          <p>Our website uses cookies for:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site (Google Analytics).</li>
          </ul>
          <p>You can control cookies through your browser settings. Disabling cookies may affect some website functionality.</p>

          <h2>6. Third-Party Links</h2>
          <p>Our website may contain links to external sites (IndiaMART, WhatsApp, etc.). We are not responsible for the privacy practices of these third-party websites.</p>

          <h2>7. Data Retention</h2>
          <p>We retain your enquiry data for up to 3 years for business reference and follow-up purposes. Analytics data is retained as per Google Analytics default settings.</p>

          <h2>8. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to your personal data we hold</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
          </ul>

          <h2>9. Children's Privacy</h2>
          <p>Our website is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.</p>

          <h2>10. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

          <h2>11. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or wish to exercise your data rights, contact us:</p>
          <ul style="list-style:none;padding:0">
            <li><strong>Creative Metal Industries</strong></li>
            <li>F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road</li>
            <li>Vadodara – 390001, Gujarat, India</li>
            <li>Email: <a href="mailto:creativemetalind@gmail.com">creativemetalind@gmail.com</a></li>
            <li>Phone: <a href="tel:+919998280619">+91 99982 80619</a></li>
          </ul>

        </div>
      </section>
    </PageLayout>
  );
}
