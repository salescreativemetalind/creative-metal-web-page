import { For, JSX } from "solid-js";

const NAV_LINKS = [
  { href: "/",                 label: "Home"       },
  { href: "/#about",           label: "About Us"   },
  { href: "/#product-tabs",    label: "Products"   },
  { href: "/#metals",          label: "Materials"  },
  { href: "/#services",        label: "Services"   },
  { href: "/#industries",      label: "Industries" },
  { href: "/#faq",             label: "FAQ"        },
  { href: "/blog",             label: "Blog"       },
  { href: "/metal-trading",    label: "Trading"    },
  { href: "/reviews",          label: "Reviews"    },
  { href: "/#contact",         label: "Contact"    },
];

export function SiteNav(props: { active?: string }) {
  return (
    <nav class="nav scrolled" id="site-nav" aria-label="Main navigation">
      <div class="container nav-inner">
        <a href="/" class="nav-logo" aria-label="Creative Metal Industries — Home">
          <img
            src="/logo_cmi.png"
            alt="Creative Metal Industries — SS Pipes, Plates & Fittings Manufacturer, Vadodara"
            class="logo-img"
            width="160"
            height="81"
            fetchpriority="high"
          />
        </a>
        <ul class="nav-links">
          <For each={NAV_LINKS.filter(l => l.label !== "Home")}>{(l) => (
            <li>
              <a href={l.href} class={props.active === l.label ? "nav-active" : ""}>
                {l.label}
              </a>
            </li>
          )}</For>
        </ul>
        <div class="nav-cta">
          <a href="tel:+919998280619" class="btn btn-outline" style="padding:0.5rem 1rem;font-size:0.83rem">
            📞 +91 99982 80619
          </a>
          <a href="/#contact" class="btn btn-primary" style="padding:0.5rem 1rem;font-size:0.83rem">
            Get a Quote
          </a>
        </div>
        <button class="hamburger" aria-label="Open menu" id="hamburger-btn">
          <span/><span/><span/>
        </button>
      </div>
      <div class="mobile-menu" id="mobile-nav" role="dialog" aria-label="Navigation menu">
        <button class="mobile-close" id="mobile-close-btn" aria-label="Close menu">✕</button>
        <For each={NAV_LINKS}>{(l) => (
          <a href={l.href}>{l.label}</a>
        )}</For>
        <a href="/#contact" class="btn btn-primary">Get a Quote</a>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer aria-label="Site footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="/" class="footer-logo nav-logo">
              <img
                src="/logo_cmi.png"
                alt="Creative Metal Industries — Vadodara"
                class="logo-img"
                width="180"
                height="91"
                loading="lazy"
              />
            </a>
            <p>Manufacturer, stockist &amp; supplier of SS, Carbon &amp; Alloy Steel Pipes, Plates, Fittings, Flanges and Exotic Alloys. Vadodara, Gujarat. Est. 2012.</p>
            <nav class="social-links" aria-label="Contact links">
              <a href="mailto:creativemetalind@gmail.com" class="social-link" aria-label="Email">✉</a>
              <a href="tel:+919998280619" class="social-link" aria-label="Phone">📞</a>
              <a href="https://wa.me/919998280619" class="social-link" aria-label="WhatsApp" target="_blank" rel="noopener">💬</a>
              <a href="https://www.creativemetalind.com" class="social-link" aria-label="Website" target="_blank" rel="noopener">🌐</a>
            </nav>
          </div>
          <nav aria-label="Site pages">
            <h4>Navigation</h4>
            <ul>
              <For each={NAV_LINKS}>{(l) => <li><a href={l.href}>{l.label}</a></li>}</For>
            </ul>
          </nav>
          <nav aria-label="Materials">
            <h4>Materials</h4>
            <ul>
              <li><a href="/#metals">Stainless Steel</a></li>
              <li><a href="/#metals">Carbon &amp; Alloy Steel</a></li>
              <li><a href="/#metals">Duplex &amp; Super Duplex</a></li>
              <li><a href="/#metals">Inconel / Monel / Hastelloy</a></li>
              <li><a href="/#metals">Titanium &amp; Aluminium</a></li>
              <li><a href="/#metals">Copper &amp; Bronze</a></li>
            </ul>
          </nav>
          <div>
            <h4>Contact</h4>
            <div class="footer-cert" style="margin-bottom:1.25rem">
              <div class="cert-badge">📍 F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001</div>
              <div class="cert-badge">📞 +91 99982 80619 (Sunny Shah)</div>
              <div class="cert-badge">📞 +91 98255 06110 (Ghewar Shah)</div>
              <div class="cert-badge">✉ creativemetalind@gmail.com</div>
              <div class="cert-badge">🕐 Mon–Sat: 9 AM – 7 PM</div>
            </div>
            <h4>Certifications</h4>
            <div class="footer-cert">
              <div class="cert-badge">🏅 IBR Form III-C</div>
              <div class="cert-badge">✅ NACE / HIC Compliant</div>
              <div class="cert-badge">📄 MTC on All Material</div>
              <div class="cert-badge">🌍 Export to 50+ Countries</div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© {year} Creative Metal Industries, Vadodara. All rights reserved.</p>
          <nav class="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Trade</a>
            <a href="https://www.creativemetalind.com" target="_blank" rel="noopener">www.creativemetalind.com</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export function PageLayout(props: { children: JSX.Element; active?: string }) {
  return (
    <>
      <SiteNav active={props.active} />
      <main id="main-content" style="padding-top:72px">
        {props.children}
      </main>
      <SiteFooter />
    </>
  );
}
