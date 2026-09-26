/* =========================================================
   Insights / Blog content.
   To add an article, append an object to POSTS (newest first is not required —
   posts are sorted by date). `body` is HTML.
   ========================================================= */
const POSTS = [
  {
    slug: "why-start-sip-early",
    title: "Why Starting a SIP Early Makes All the Difference",
    category: "Mutual Funds",
    date: "2026-08-20",
    readTime: 5,
    icon: "chart",
    cover: "",
    excerpt: "The single most powerful ingredient in wealth creation is time. Here's how a few extra years can change your final corpus dramatically.",
    body: `
      <p>A Systematic Investment Plan (SIP) lets you invest a fixed amount in a mutual fund every month. It builds discipline, removes the stress of timing the market and — most importantly — gives compounding the time it needs to work.</p>
      <h2>The cost of waiting</h2>
      <p>Consider two investors who each invest ₹5,000 a month, assuming an illustrative 12% annual return:</p>
      <ul>
        <li><strong>Investor A</strong> starts at 25 and invests until 55 (30 years): total invested ₹18 lakh, estimated value about ₹1.76 crore.</li>
        <li><strong>Investor B</strong> starts at 35 and invests until 55 (20 years): total invested ₹12 lakh, estimated value about ₹50 lakh.</li>
      </ul>
      <p>Investor A invested only ₹6 lakh more, yet ended with more than three times the corpus. That is the power of starting early.</p>
      <div class="callout"><p>Try different amounts and durations with the <a href="index.html#calculator-section">SIP calculator</a> on our home page.</p></div>
      <h2>Rupee cost averaging</h2>
      <p>Because you invest the same amount every month, you automatically buy more units when prices are low and fewer when prices are high. Over time, this can lower your average cost per unit and smooth out market volatility.</p>
      <h2>Getting started</h2>
      <ol>
        <li>Define your goal and time horizon.</li>
        <li>Choose the right fund category (equity, hybrid or debt) for that horizon.</li>
        <li>Start with an amount you can sustain, and step it up as your income grows.</li>
        <li>Review annually — but stay invested through market ups and downs.</li>
      </ol>
      <p>It's never too early to start investing. <a href="contact.html#appointment">Talk to our expert</a> to build a SIP portfolio tailored to your goals.</p>`
  },
  {
    slug: "term-insurance-first",
    title: "Term Insurance: The Foundation of Every Financial Plan",
    category: "Insurance",
    date: "2026-07-28",
    readTime: 4,
    icon: "shield",
    cover: "c-gold",
    excerpt: "Before you invest for growth, protect what matters most. Why pure term cover should come first and how much you really need.",
    body: `
      <p>Investments help you build wealth; insurance protects your family if you are not there to build it. A term insurance plan provides a large life cover at an affordable premium, making it the most efficient form of life protection.</p>
      <h2>How much cover do you need?</h2>
      <p>A common starting point is <strong>10–15 times your annual income</strong>, adjusted for:</p>
      <ul>
        <li>Outstanding loans (home, vehicle, personal)</li>
        <li>Future goals such as children's education and marriage</li>
        <li>Existing investments and cover you already have</li>
      </ul>
      <h2>Term vs. traditional plans</h2>
      <p>Term plans offer pure protection. Guaranteed income and endowment plans combine savings with insurance and suit those who want assured, predictable payouts. The right mix depends on your goals — we help you compare them transparently.</p>
      <div class="callout"><p>Tip: Buy term cover early. Premiums are lower when you are younger and healthier, and they stay locked for the policy term.</p></div>
      <p>Not sure whether your family is adequately protected? <a href="contact.html#appointment">Book a free insurance review</a>.</p>`
  },
  {
    slug: "health-insurance-checklist",
    title: "Choosing a Mediclaim Policy: A Practical Checklist",
    category: "Insurance",
    date: "2026-06-30",
    readTime: 5,
    icon: "heart",
    cover: "c-teal",
    excerpt: "Room rent limits, waiting periods, co-pay — what to check before buying health insurance for your family.",
    body: `
      <p>One hospitalization can wipe out years of savings. A good health insurance policy protects both your family's health and your financial plan.</p>
      <h2>Individual or family floater?</h2>
      <p>A <strong>family floater</strong> shares one sum insured across the family and is usually cost-effective for young families. Senior parents are often better covered under a separate policy.</p>
      <h2>Checklist before you buy</h2>
      <ul>
        <li><strong>Sum insured:</strong> consider medical inflation and the cost of hospitals in your city.</li>
        <li><strong>Room rent limits:</strong> caps can reduce the entire claim proportionately.</li>
        <li><strong>Waiting periods:</strong> for pre-existing diseases and specific illnesses.</li>
        <li><strong>Co-payment clauses</strong> and sub-limits on treatments.</li>
        <li><strong>Network hospitals</strong> near you for cashless treatment.</li>
        <li><strong>Restoration and no-claim bonus</strong> benefits.</li>
      </ul>
      <h2>Add critical illness cover</h2>
      <p>A critical illness plan pays a lump sum on diagnosis of listed illnesses, helping replace lost income during recovery.</p>
      <p><a href="services.html#health-insurance">Explore our health insurance solutions</a> or <a href="contact.html">get in touch</a> for a comparison.</p>`
  },
  {
    slug: "loan-against-mutual-funds",
    title: "Need Funds? Borrow Against Your Mutual Funds Instead of Selling",
    category: "Loans",
    date: "2026-05-18",
    readTime: 4,
    icon: "key",
    cover: "c-deep",
    excerpt: "A loan against securities gives you quick liquidity while your investments keep compounding.",
    body: `
      <p>When an urgent need arises, many investors redeem their mutual funds — interrupting compounding and sometimes triggering taxes and exit loads. A <strong>Loan Against Securities (LAS)</strong> offers an alternative.</p>
      <h2>How it works</h2>
      <ul>
        <li>Your mutual fund units or shares are pledged with the lender.</li>
        <li>You receive a credit limit based on the value and type of securities.</li>
        <li>Interest is charged only on the amount you actually use.</li>
        <li>Your investments stay invested and continue to earn returns.</li>
      </ul>
      <h2>Things to keep in mind</h2>
      <p>If markets fall sharply, the lender may ask you to add securities or repay part of the loan (a margin call). Borrow for short-term needs and plan repayment in advance.</p>
      <p>Learn more about our <a href="services.html#las">Loan Against Securities</a> service.</p>`
  },
  {
    slug: "tax-saving-elss",
    title: "Save Tax and Build Wealth with ELSS Funds",
    category: "Tax Planning",
    date: "2026-04-10",
    readTime: 4,
    icon: "receipt",
    cover: "c-gold",
    excerpt: "ELSS funds combine tax deductions with equity growth and the shortest lock-in among popular tax-saving options.",
    body: `
      <p>Equity Linked Savings Schemes (ELSS) are diversified equity mutual funds that qualify for tax deductions under the old tax regime (Section 80C, subject to prevailing limits).</p>
      <h2>Why investors like ELSS</h2>
      <ul>
        <li><strong>Shortest lock-in</strong> of 3 years among common Section 80C options.</li>
        <li><strong>Equity growth potential</strong> for long-term wealth creation.</li>
        <li><strong>SIP-friendly</strong> — spread your tax-saving investment across the year instead of a March rush.</li>
      </ul>
      <div class="callout"><p>Tax rules change from time to time and benefits depend on the tax regime you choose. Always review your situation with a tax professional.</p></div>
      <p>Tax planning works best when it is part of your overall financial plan. <a href="contact.html#appointment">Speak with us</a> to optimise deductions while compounding long-term wealth.</p>`
  },
  {
    slug: "retirement-corpus-basics",
    title: "How Much Do You Need to Retire Comfortably?",
    category: "Retirement",
    date: "2026-03-05",
    readTime: 6,
    icon: "sun",
    cover: "",
    excerpt: "A simple framework to estimate your retirement corpus — and how SIPs, annuities and drawdown plans fit together.",
    body: `
      <p>Retirement may be your longest financial goal — it can last 25 years or more. Planning for it early is the key to lifelong financial independence.</p>
      <h2>Step 1: Estimate your expenses</h2>
      <p>Start with today's monthly household expenses, then adjust for inflation until your retirement age. At 6% inflation, expenses roughly double every 12 years.</p>
      <h2>Step 2: Estimate the corpus</h2>
      <p>Your corpus must fund those inflation-adjusted expenses for your entire retirement. Healthcare costs deserve a separate buffer.</p>
      <h2>Step 3: Build and protect</h2>
      <ul>
        <li><strong>Accumulation years:</strong> equity-oriented SIPs for long-term growth.</li>
        <li><strong>Pre-retirement:</strong> gradually shift to lower-volatility assets using STPs.</li>
        <li><strong>Retirement:</strong> combine annuities for assured income with SWPs from a balanced portfolio.</li>
      </ul>
      <p>Use the <a href="index.html#calculator-section">Goal Planner</a> to see the monthly SIP required, then <a href="contact.html#appointment">plan it with our expert</a>.</p>`
  }
];

/* ---------- Rendering helpers (used on home, insights and article pages) ---------- */
(function () {
  const fmtDate = d => new Date(d + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  const sorted = POSTS.slice().sort((a, b) => b.date.localeCompare(a.date));

  function card(p) {
    return `
      <article class="card post-card reveal in">
        <a class="post-cover ${p.cover}" href="article.html?slug=${p.slug}" aria-hidden="true" tabindex="-1">${icon(p.icon)}</a>
        <div class="post-body">
          <div class="post-meta"><span class="cat">${p.category}</span><span>${fmtDate(p.date)}</span><span>${p.readTime} min read</span></div>
          <h3><a href="article.html?slug=${p.slug}">${p.title}</a></h3>
          <p>${p.excerpt}</p>
          <a class="more" href="article.html?slug=${p.slug}">Read article →</a>
        </div>
      </article>`;
  }

  // Home: latest N posts
  const latest = document.getElementById("latestPosts");
  if (latest) latest.innerHTML = sorted.slice(0, Number(latest.dataset.limit || 3)).map(card).join("");

  // Insights: list with category filter + search
  const list = document.getElementById("postList");
  if (list) {
    const bar = document.getElementById("filterBar");
    const search = document.getElementById("postSearch");
    const cats = ["All", ...new Set(sorted.map(p => p.category))];
    let current = new URLSearchParams(location.search).get("category") || "All";
    if (!cats.includes(current)) current = "All";

    bar.innerHTML = cats.map(c => `<button type="button" data-cat="${c}" aria-pressed="${c === current}">${c}</button>`).join("");

    const draw = () => {
      const q = (search.value || "").trim().toLowerCase();
      const items = sorted.filter(p =>
        (current === "All" || p.category === current) &&
        (!q || (p.title + " " + p.excerpt + " " + p.category).toLowerCase().includes(q)));
      list.innerHTML = items.length ? items.map(card).join("") : `<p class="empty-state">No articles match your search.</p>`;
    };
    bar.addEventListener("click", e => {
      const b = e.target.closest("button[data-cat]");
      if (!b) return;
      current = b.dataset.cat;
      bar.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
      draw();
    });
    search.addEventListener("input", draw);
    draw();
  }

  // Article page
  const art = document.getElementById("article");
  if (art) {
    const slug = new URLSearchParams(location.search).get("slug");
    const p = POSTS.find(x => x.slug === slug);
    if (!p) {
      document.getElementById("articleTitle").textContent = "Article not found";
      art.innerHTML = `<p>Sorry, we couldn't find that article.</p><p><a class="btn btn-dark" href="insights.html">Browse all insights</a></p>`;
      return;
    }
    document.title = p.title + " | Bhoomi Investment Insights";
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", p.excerpt);
    document.getElementById("articleTitle").textContent = p.title;
    document.getElementById("articleCrumb").textContent = p.category;
    document.getElementById("articleMeta").textContent = `${p.category} · ${fmtDate(p.date)} · ${p.readTime} min read`;
    art.innerHTML = p.body + `
      <div class="callout"><p><strong>Disclaimer:</strong> This article is for general education only and is not investment, tax or insurance advice.
      Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p></div>`;

    const related = document.getElementById("relatedPosts");
    if (related) {
      const rel = sorted.filter(x => x.slug !== p.slug).sort((a, b) => (b.category === p.category) - (a.category === p.category)).slice(0, 3);
      related.innerHTML = rel.map(card).join("");
    }
  }
})();
