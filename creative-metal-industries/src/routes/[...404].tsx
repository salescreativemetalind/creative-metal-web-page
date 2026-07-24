import { Title, Meta } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { PageLayout } from "../components/Layout";

export default function NotFoundPage() {
  return (
    <PageLayout>
      <Title>Page Not Found | Creative Metal Industries</Title>
      <Meta name="robots" content="noindex, nofollow" />
      <Meta name="description" content="The page you are looking for does not exist. Browse our products or return to the homepage." />

      <section style="background:var(--white);padding:6rem 0;text-align:center;min-height:60vh;display:flex;align-items:center">
        <div class="container" style="max-width:680px">
          <p style="font-size:5rem;margin:0;line-height:1">🔩</p>
          <h1 style="font-size:3rem;margin:1rem 0 0.5rem;color:var(--primary)">404</h1>
          <h2 style="font-size:1.5rem;margin:0 0 1rem;color:var(--dark)">Page Not Found</h2>
          <p style="font-size:1.1rem;color:#6b7280;margin-bottom:2rem">
            The page you're looking for doesn't exist or may have been moved. Don't worry — you can find what you need below.
          </p>

          <div style="display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;margin-bottom:3rem">
            <A href="/" class="btn btn-primary" style="padding:0.75rem 1.5rem">
              ← Back to Home
            </A>
            <A href="/products" class="btn btn-outline" style="padding:0.75rem 1.5rem">
              Browse Products
            </A>
            <A href="/blog" class="btn btn-outline" style="padding:0.75rem 1.5rem">
              Read Our Blog
            </A>
          </div>

          <div style="background:#f9fafb;border-radius:12px;padding:2rem;text-align:left">
            <h3 style="margin:0 0 1rem;font-size:1.1rem">Popular Pages</h3>
            <ul style="columns:2;column-gap:2rem;list-style:none;padding:0;margin:0">
              <li style="margin-bottom:0.5rem"><A href="/ss-seamless-pipe-supplier-india">SS Seamless Pipe</A></li>
              <li style="margin-bottom:0.5rem"><A href="/alloy-steel-pipe-supplier-india">Alloy Steel Pipe</A></li>
              <li style="margin-bottom:0.5rem"><A href="/duplex-steel-supplier-vadodara">Duplex Steel</A></li>
              <li style="margin-bottom:0.5rem"><A href="/inconel-pipe-supplier-india">Inconel Pipe</A></li>
              <li style="margin-bottom:0.5rem"><A href="/ss-buttweld-fittings-supplier-india">SS Fittings</A></li>
              <li style="margin-bottom:0.5rem"><A href="/ss-flanges-supplier-vadodara">SS Flanges</A></li>
              <li style="margin-bottom:0.5rem"><A href="/carbon-steel-sa516-plate-stockist-india">CS SA516 Plate</A></li>
              <li style="margin-bottom:0.5rem"><A href="/tmt-bars-supplier-gujarat">TMT Bars Gujarat</A></li>
            </ul>
          </div>

          <p style="margin-top:2rem;color:#9ca3af;font-size:0.9rem">
            Need help? Call us at <a href="tel:+919998280619" style="color:var(--primary)">+91 99982 80619</a> or <a href="https://wa.me/919998280619" style="color:var(--primary)">WhatsApp</a>
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
