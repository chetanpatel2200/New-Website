/* =========================================================
   Bhoomi Investment — interactions
   ========================================================= */
(function () {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const inr = n => "₹" + Math.round(n).toLocaleString("en-IN");

  /* ---------- Header: sticky shadow, mobile nav, services dropdown ---------- */
  const header = $("#siteHeader");
  const navToggle = $("#navToggle");
  const mainNav = $("#mainNav");
  const svcBtn = $("#servicesBtn");
  const svcMenu = $("#servicesMenu");
  const toTop = $("#toTop");

  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 8);
    if (toTop) toTop.classList.toggle("show", y > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  function setNav(open) {
    if (!mainNav) return;
    if (open) sizeNav();
    mainNav.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("nav-open", open);
  }
  if (navToggle) navToggle.addEventListener("click", () => setNav(!mainNav.classList.contains("open")));
  // Size the mobile menu to fill the space below the header (the top bar may still be visible above it)
  const sizeNav = () => { if (mainNav) mainNav.style.height = (window.innerHeight - header.getBoundingClientRect().bottom) + "px"; };
  ["scroll", "resize"].forEach(ev => window.addEventListener(ev, () => { if (mainNav && mainNav.classList.contains("open")) sizeNav(); }, { passive: true }));

  function setDropdown(open) {
    if (!svcMenu) return;
    svcMenu.classList.toggle("open", open);
    svcBtn.setAttribute("aria-expanded", String(open));
  }
  if (svcBtn) {
    const li = svcBtn.parentElement;
    const desktop = window.matchMedia("(min-width: 1241px)");
    const hover = window.matchMedia("(hover: hover)");
    svcBtn.addEventListener("click", e => {
      e.stopPropagation();
      // With a mouse the menu is already open from hovering, so a click shouldn't close it.
      if (desktop.matches && hover.matches) setDropdown(true);
      else setDropdown(!svcMenu.classList.contains("open"));
    });
    let t;
    li.addEventListener("mouseenter", () => { if (desktop.matches) { clearTimeout(t); setDropdown(true); } });
    li.addEventListener("mouseleave", () => { if (desktop.matches) { t = setTimeout(() => setDropdown(false), 150); } });
    document.addEventListener("click", e => { if (!li.contains(e.target)) setDropdown(false); });
  }
  // Close menus after navigating (incl. same-page anchors) and on Escape
  $$(".main-nav a").forEach(a => a.addEventListener("click", () => { setNav(false); setDropdown(false); }));
  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    if (svcMenu && svcMenu.classList.contains("open")) { setDropdown(false); svcBtn.focus(); }
    if (mainNav && mainNav.classList.contains("open")) { setNav(false); navToggle.focus(); }
  });

  /* ---------- Reveal on scroll ---------- */
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add("in"));
  }

  /* ---------- Services page: highlight current section in sub-nav ---------- */
  const svcLinks = $$(".service-nav a");
  if (svcLinks.length && "IntersectionObserver" in window) {
    const map = new Map(svcLinks.map(a => [a.getAttribute("href").slice(1), a]));
    const so = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        svcLinks.forEach(a => a.classList.remove("active"));
        const a = map.get(en.target.id);
        if (a) {
          a.classList.add("active");
          a.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    map.forEach((_, id) => { const s = document.getElementById(id); if (s) so.observe(s); });
  }

  /* ---------- Investment calculator ---------- */
  const calc = $("#calculator");
  if (calc) {
    const MODES = {
      sip: {
        amountLabel: "Monthly investment", min: 500, max: 100000, step: 500, def: 5000,
        resultLabel: "Estimated value", investedLabel: "Total invested"
      },
      lumpsum: {
        amountLabel: "One-time investment", min: 5000, max: 10000000, step: 5000, def: 100000,
        resultLabel: "Estimated value", investedLabel: "Total invested"
      },
      goal: {
        amountLabel: "Target goal amount", min: 100000, max: 50000000, step: 50000, def: 2500000,
        resultLabel: "Monthly SIP required", investedLabel: "Total you will invest"
      }
    };
    let mode = "sip";
    const amount = $("#calcAmount"), amountN = $("#calcAmountN");
    const rate = $("#calcRate"), rateN = $("#calcRateN");
    const years = $("#calcYears"), yearsN = $("#calcYearsN");

    const fill = r => r.style.setProperty("--fill", ((r.value - r.min) / (r.max - r.min)) * 100 + "%");
    const clamp = (v, r) => Math.min(Number(r.max), Math.max(Number(r.min), Number(v) || Number(r.min)));

    function compute() {
      const P = Number(amount.value), r = Number(rate.value), t = Number(years.value);
      const i = r / 12 / 100, n = t * 12;
      const sipFactor = i === 0 ? n : ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
      let invested, value, headline;
      if (mode === "sip") {
        invested = P * n; value = P * sipFactor; headline = value;
      } else if (mode === "lumpsum") {
        invested = P; value = P * Math.pow(1 + r / 100, t); headline = value;
      } else {
        const monthly = P / sipFactor;
        invested = monthly * n; value = P; headline = monthly;
      }
      const gains = Math.max(0, value - invested);
      $("#resInvested").textContent = inr(invested);
      $("#resGains").textContent = inr(gains);
      $("#resTotal").textContent = inr(headline);
      $("#resTotalValue").textContent = inr(value);
      const invPct = value > 0 ? (invested / value) * 100 : 100;
      $("#barInv").style.width = Math.min(100, invPct) + "%";
      $("#barGain").style.width = Math.max(0, 100 - invPct) + "%";
      [amount, rate, years].forEach(fill);
    }

    function setMode(m) {
      mode = m;
      const cfg = MODES[m];
      $$(".calc-tab", calc).forEach(b => b.setAttribute("aria-selected", String(b.dataset.mode === m)));
      $("#calcAmountLabel").textContent = cfg.amountLabel;
      $("#resTotalLabel").textContent = cfg.resultLabel;
      $("#resInvestedLabel").textContent = cfg.investedLabel;
      $("#resValueRow").style.display = m === "goal" ? "" : "none";
      Object.assign(amount, { min: cfg.min, max: cfg.max, step: cfg.step });
      Object.assign(amountN, { min: cfg.min, max: cfg.max, step: cfg.step });
      amount.value = amountN.value = cfg.def;
      compute();
    }

    [[amount, amountN], [rate, rateN], [years, yearsN]].forEach(([range, num]) => {
      range.addEventListener("input", () => { num.value = range.value; compute(); });
      num.addEventListener("change", () => { const v = clamp(num.value, range); num.value = v; range.value = v; compute(); });
    });
    $$(".calc-tab", calc).forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode)));
    setMode("sip");
  }

  /* ---------- Forms: validation + submission ---------- */
  const validators = {
    required: v => v.trim().length > 0,
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
    phone: v => /^(\+?91[-\s]?)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, "")) || /^0\d{2,4}[-\s]?\d{6,8}$/.test(v.trim())
  };

  function validateField(input) {
    const field = input.closest(".field");
    if (!field) return true;
    let ok = true;
    const v = input.type === "checkbox" ? (input.checked ? "y" : "") : input.value;
    if (input.required && !validators.required(v)) ok = false;
    else if (v && input.type === "email" && !validators.email(v)) ok = false;
    else if (v && input.type === "tel" && !validators.phone(v)) ok = false;
    else if (v && input.type === "date" && input.min && v < input.min) ok = false;
    field.classList.toggle("invalid", !ok);
    input.setAttribute("aria-invalid", String(!ok));
    return ok;
  }

  function showStatus(el, type, html) {
    el.className = "form-status show " + type;
    el.innerHTML = html;
    el.setAttribute("role", type === "error" ? "alert" : "status");
  }

  $$("form[data-ajax]").forEach(form => {
    const status = $(".form-status", form);
    const btn = $("button[type=submit]", form);
    const inputs = $$("input, select, textarea", form).filter(i => !i.closest(".hp"));

    inputs.forEach(i => {
      i.addEventListener("blur", () => { if (i.value || i.closest(".field.invalid")) validateField(i); });
      i.addEventListener("input", () => { if (i.closest(".field.invalid")) validateField(i); });
    });

    form.addEventListener("submit", async e => {
      e.preventDefault();
      const results = inputs.map(validateField);
      if (results.includes(false)) {
        const first = inputs[results.indexOf(false)];
        first.focus();
        showStatus(status, "error", "Please correct the highlighted fields and try again.");
        return;
      }
      // Honeypot: bots fill hidden fields — silently pretend success.
      const hp = $(".hp input", form);
      if (hp && hp.value) { form.reset(); showStatus(status, "success", "Thank you!"); return; }

      const data = Object.fromEntries(new FormData(form).entries());
      delete data._honey;
      data._subject = form.dataset.subject || "New enquiry from bhoomiinvestment.org";
      data._template = "table";
      data.page = location.pathname;

      const label = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Sending…";
      try {
        const res = await fetch(SITE.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data)
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || json.success === "false" || json.success === false) throw new Error(json.message || "Request failed");
        form.reset();
        showStatus(status, "success",
          `<strong>Thank you${data.name ? ", " + escapeHtml(data.name.split(" ")[0]) : ""}!</strong> Your request has been received. Our financial expert will contact you shortly.`);
      } catch (err) {
        const msg = buildMessage(data);
        showStatus(status, "error",
          `We couldn't send your message online right now. Please reach us directly —
           <a href="https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">send on WhatsApp</a>,
           <a href="mailto:${SITE.email}?subject=${encodeURIComponent(data._subject)}&body=${encodeURIComponent(msg)}">email us</a>
           or call <a href="tel:${SITE.mobileHref}">${SITE.mobile}</a>.`);
      } finally {
        btn.disabled = false;
        btn.textContent = label;
      }
    });
  });

  function buildMessage(d) {
    const skip = new Set(["_subject", "_template", "page", "consent"]);
    return Object.entries(d).filter(([k, v]) => !skip.has(k) && v)
      .map(([k, v]) => `${k.charAt(0).toUpperCase() + k.slice(1)}: ${v}`).join("\n");
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  window.escapeHtml = escapeHtml;

  // Date inputs: no past dates
  const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  $$('input[type="date"]').forEach(d => { d.min = today; });

  // Pre-select a service in forms from ?service=<id>
  const svcParam = new URLSearchParams(location.search).get("service");
  if (svcParam) {
    $$('select[name="service"]').forEach(sel => {
      const s = SERVICES.find(x => x.id === svcParam);
      if (s) sel.value = s.name;
    });
  }

  /* ---------- Client portal (login page) ---------- */
  const portalBtn = $("#portalBtn");
  if (portalBtn) {
    if (SITE.portalUrl) {
      portalBtn.href = SITE.portalUrl;
      portalBtn.target = "_blank";
      portalBtn.rel = "noopener";
    } else {
      portalBtn.addEventListener("click", e => {
        e.preventDefault();
        const note = $("#portalNote");
        note.className = "form-status show success";
        note.innerHTML = `Online portal access is activated for each client individually. Please submit the request form
          or call <a href="tel:${SITE.mobileHref}">${SITE.mobile}</a> and we'll share your login credentials.`;
      });
    }
  }
})();
