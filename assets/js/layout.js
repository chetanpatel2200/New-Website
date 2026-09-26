/* =========================================================
   Bhoomi Investment — site configuration, icons, shared layout
   Edit SITE below to change contact details site-wide.
   ========================================================= */

const SITE = {
  name: "Bhoomi Investment",
  tagline: "Financial Services for Your Financial Growth",
  url: "https://bhoomiinvestment.org/",
  email: "info@bhoomiinvestment.org",
  landline: "02778-259-961",
  landlineHref: "+912778259961",
  mobile: "+91-6353616059",
  mobileHref: "+916353616059",
  whatsapp: "916353616059",
  hours: "By Appointment",
  address: [
    "BF - 15, First Floor, Sahkari Jin Market,",
    "Near SK Bank, Idar-HMT Highway,",
    "Idar, Sabarkantha, Gujarat, India – 383430"
  ],
  mapQuery: "Sahkari Jin Market, Idar-HMT Highway, Idar, Sabarkantha, Gujarat 383430",

  // Contact / appointment forms are delivered by FormSubmit (https://formsubmit.co).
  // The first submission sends a one-time activation email to the address below.
  formEndpoint: "https://formsubmit.co/ajax/info@bhoomiinvestment.org",

  // URL of the third-party client portal (e.g. your MF back-office provider).
  // Leave empty to show a "contact us for access" message instead.
  portalUrl: "",

  // AMFI registration — replace with your actual ARN before going live.
  arn: "ARN-XXXXXX"
};

const SERVICES = [
  { id: "mutual-funds",       icon: "chart",    name: "Mutual Funds & SIP",             short: "Equity, Debt, Hybrid, SIP, STP, SWP" },
  { id: "alternate",          icon: "diamond",  name: "Alternate Investments",          short: "PMS, AIF, SIF" },
  { id: "life-insurance",     icon: "shield",   name: "Life Insurance",                 short: "Term, Guaranteed Income, Endowment" },
  { id: "health-insurance",   icon: "heart",    name: "Mediclaim / Health Insurance",   short: "Individual, Family Floater, Critical Illness" },
  { id: "motor-insurance",    icon: "car",      name: "Motor Insurance",                short: "Own Damage, Comprehensive, Third-party" },
  { id: "las",                icon: "key",      name: "Loan Against Securities",        short: "Instant liquidity on MF/share units" },
  { id: "fd-bonds",           icon: "bank",     name: "Fixed Deposits & Bonds",         short: "Corporate FDs, SGBs, PSU Bonds" },
  { id: "financial-planning", icon: "compass",  name: "Personalized Financial Planning", short: "Goal & milestone mapping" },
  { id: "retirement",         icon: "sun",      name: "Retirement Planning",            short: "Pension, Annuity, Drawdown plans" },
  { id: "tax",                icon: "receipt",  name: "Tax Planning",                   short: "ELSS & tax-efficient investing" }
];

const ICONS = {
  chart:    '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 6-6"/><path d="M16 8h4v4"/>',
  diamond:  '<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20"/><path d="m10 3-2 6 4 12 4-12-2-6"/>',
  shield:   '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  heart:    '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/><path d="M3.5 12h4l2-3 3 6 2-3h6"/>',
  car:      '<path d="M5 17h14M5 17a2 2 0 1 1-4 0v-4l2.5-6h17L23 13v4a2 2 0 1 1-4 0"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M3 13h18"/>',
  key:      '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>',
  bank:     '<path d="M3 21h18"/><path d="M3 10h18"/><path d="m12 3 9 5H3z"/><path d="M5 10v8M9 10v8M15 10v8M19 10v8"/>',
  compass:  '<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z"/>',
  sun:      '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  receipt:  '<path d="M4 2v20l3-2 3 2 2-2 2 2 3-2 3 2V2l-3 2-3-2-2 2-2-2-3 2z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  phone:    '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  mobile:   '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
  mail:     '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
  pin:      '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  clock:    '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  user:     '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  lock:     '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  check:    '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
  arrow:    '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chev:     '<path d="m6 9 6 6 6-6"/>',
  up:       '<path d="m18 15-6-6-6 6"/>',
  quote:    '<path d="M3 21c3 0 7-1 7-8V5H3v8h4c0 4-2 5-4 5zM14 21c3 0 7-1 7-8V5h-7v8h4c0 4-2 5-4 5z"/>',
  star:     '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" fill="currentColor"/>',
  target:   '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  handshake:'<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.9-3.9a3 3 0 0 0-4.2 0l-.9.9a1 1 0 1 1-3-3l2.8-2.8a5.8 5.8 0 0 1 7.1-.9l.5.3a4 4 0 0 0 2.6.6L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
  eye:      '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  users:    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  search:   '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  book:     '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  leaf:     '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.4 5.2-6.1 2.4-.5 4.9-2 5.8-3.9"/>',
  whatsapp: '<path fill="currentColor" stroke="none" d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.6.1a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.4-.5.3-.5a.6.6 0 0 0 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.5 13.5 0 0 0 5.2 4.6c1.9.8 2.7.9 3.6.7a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.2-.3-.2-.6-.4zM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 1 1 12 21.8zm8.4-18.3A11.8 11.8 0 0 0 1.8 17.7L.1 24l6.4-1.7a11.8 11.8 0 0 0 5.6 1.4A11.8 11.8 0 0 0 20.4 3.5z"/>'
};

function icon(name, cls) {
  const body = ICONS[name] || "";
  return `<svg class="${cls || ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}

function renderHeader(active) {
  const link = (href, label, key) =>
    `<li><a class="nav-link${active === key ? " active" : ""}" href="${href}"${active === key ? ' aria-current="page"' : ""}>${label}</a></li>`;

  const dd = SERVICES.map(s => `
    <li><a href="services.html#${s.id}">
      <span class="dd-icon">${icon(s.icon)}</span>
      <span><strong>${s.name}</strong><small>${s.short}</small></span>
    </a></li>`).join("");

  return `
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="topbar">
    <div class="container">
      <ul class="topbar-list">
        <li>${icon("phone")}<a href="tel:${SITE.landlineHref}">${SITE.landline}</a></li>
        <li>${icon("mobile")}<a href="tel:${SITE.mobileHref}">${SITE.mobile}</a></li>
        <li class="hide-sm">${icon("mail")}<a href="mailto:${SITE.email}">${SITE.email}</a></li>
      </ul>
      <ul class="topbar-list hide-sm">
        <li>${icon("clock")}Office Hours: ${SITE.hours}</li>
      </ul>
    </div>
  </div>
  <header class="site-header" id="siteHeader">
    <div class="container header-inner">
      <a class="brand" href="index.html" aria-label="${SITE.name} — Home">
        <img src="assets/img/logo.svg" alt="" width="46" height="46">
        <span class="brand-text">
          <span class="brand-name">Bhoomi Investment</span>
          <span class="brand-tag">Your Financial Growth</span>
        </span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="mainNav"><span></span></button>
      <nav class="main-nav" id="mainNav" aria-label="Main">
        <ul class="nav-list">
          ${link("index.html", "Home", "home")}
          ${link("about.html", "About Us", "about")}
          ${link("team.html", "Our Team", "team")}
          <li class="has-dropdown">
            <button class="nav-link${active === "services" ? " active" : ""}" aria-expanded="false" aria-controls="servicesMenu" id="servicesBtn">
              Our Services ${icon("chev", "chev")}
            </button>
            <ul class="dropdown" id="servicesMenu">
              ${dd}
              <li class="dd-all"><a href="services.html">View all services ${icon("arrow")}</a></li>
            </ul>
          </li>
          ${link("insights.html", "Insights", "insights")}
          ${link("contact.html", "Contact Us", "contact")}
        </ul>
        <div class="header-cta">
          <a class="btn btn-outline btn-sm login-link" href="login.html">${icon("lock")} Client Login</a>
          <a class="btn btn-primary btn-sm" href="contact.html#appointment">Schedule an Appointment</a>
        </div>
      </nav>
    </div>
  </header>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  const svcLinks = SERVICES.slice(0, 7).map(s => `<li><a href="services.html#${s.id}">${s.name}</a></li>`).join("");
  return `
  <div class="disclaimer-strip">
    <div class="container">Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</div>
  </div>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="brand" href="index.html">
            <img src="assets/img/logo.svg" alt="" width="46" height="46">
            <span class="brand-text"><span class="brand-name">Bhoomi Investment</span></span>
          </a>
          <p>${SITE.tagline}. Mastering the art of financial growth through disciplined planning, mutual funds, alternate investments and insurance.</p>
          <a class="btn btn-primary btn-sm" href="contact.html#appointment">Connect with Our Financial Expert</a>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="team.html">Our Team</a></li>
            <li><a href="services.html">Our Services</a></li>
            <li><a href="insights.html">Insights / Blog</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="login.html">Client Login</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul class="footer-links">${svcLinks}<li><a href="services.html">More services →</a></li></ul>
        </div>
        <div>
          <h4>Contact &amp; Office</h4>
          <ul class="footer-contact">
            <li>${icon("pin")}<address>${SITE.address.join("<br>")}</address></li>
            <li>${icon("phone")}<span><a href="tel:${SITE.landlineHref}">${SITE.landline}</a> (Landline)</span></li>
            <li>${icon("mobile")}<span><a href="tel:${SITE.mobileHref}">${SITE.mobile}</a> (Mobile)</span></li>
            <li>${icon("mail")}<a href="mailto:${SITE.email}">${SITE.email}</a></li>
            <li>${icon("clock")}<span>Hours: ${SITE.hours}</span></li>
          </ul>
        </div>
      </div>
      <p class="footer-disclaimer">
        Bhoomi Investment is an AMFI-registered Mutual Fund Distributor (${SITE.arn}). Mutual Fund investments are subject to market risks,
        read all scheme related documents carefully. Past performance is not indicative of future returns. Insurance is the subject matter
        of solicitation. Investments in PMS, AIF and SIF carry higher risk and are meant for eligible investors only. Information on this
        website is for general awareness and does not constitute investment advice.
      </p>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <span>© <span id="year">${year}</span> Bhoomi Investment. All rights reserved.</span>
        <ul class="legal-links">
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="terms.html">Terms &amp; Conditions</a></li>
          <li><a href="terms.html#copyright">Copyright Notice</a></li>
        </ul>
      </div>
    </div>
  </footer>
  <div class="fab-stack">
    <a class="fab fab-wa" href="https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello Bhoomi Investment, I would like to know more about your services.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${icon("whatsapp")}</a>
    <button class="fab fab-top" id="toTop" aria-label="Back to top">${icon("up")}</button>
  </div>`;
}

(function mountLayout() {
  document.documentElement.classList.remove("no-js");
  const page = document.body.dataset.page || "";
  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.outerHTML = renderHeader(page);
  if (f) f.outerHTML = renderFooter();

  // Replace <span data-icon="name"></span> placeholders with inline SVGs
  document.querySelectorAll("[data-icon]").forEach(el => {
    el.innerHTML = icon(el.dataset.icon);
  });
  // Fill contact placeholders: <a data-contact="email|mobile|landline">
  document.querySelectorAll("[data-contact]").forEach(el => {
    const k = el.dataset.contact;
    if (k === "email")    { el.href = "mailto:" + SITE.email;     if (!el.textContent.trim()) el.textContent = SITE.email; }
    if (k === "mobile")   { el.href = "tel:" + SITE.mobileHref;   if (!el.textContent.trim()) el.textContent = SITE.mobile; }
    if (k === "landline") { el.href = "tel:" + SITE.landlineHref; if (!el.textContent.trim()) el.textContent = SITE.landline; }
    if (k === "whatsapp") { el.href = "https://wa.me/" + SITE.whatsapp; el.target = "_blank"; el.rel = "noopener"; }
  });
})();
