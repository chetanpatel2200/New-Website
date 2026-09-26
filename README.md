# Bhoomi Investment — Website

Static, responsive website for **Bhoomi Investment** — *Financial Services for Your Financial Growth*.
No build step or server code is needed. It runs on any static host (GitHub Pages, Netlify, cPanel/Hostinger, etc.).

## Pages

| File | Page |
|---|---|
| `index.html` | Home: hero, callback form, about, services, process, SIP/Lumpsum/Goal calculator, testimonials, latest insights, CTA |
| `about.html` | About Us: mission, vision, key strengths, values, FAQs |
| `team.html` | Our Team (**placeholder names, so edit before launch**) |
| `services.html` | All 10 services, each with an anchor (`services.html#mutual-funds`, `#las`, `#tax`…) |
| `insights.html` / `article.html?slug=…` | Blog listing with search and category filters, plus the article view |
| `contact.html` | Contact details, appointment booking form, message form, Google Map |
| `login.html` | Client portal entry and portal access request form |
| `privacy.html`, `terms.html` | Privacy Policy, Terms & Conditions, Copyright Notice (`terms.html#copyright`) |
| `404.html` | Not-found page |

## Editing content

- **Contact details, portal URL, ARN, form endpoint:** edit the `SITE` object at the top of `assets/js/layout.js`. The header, footer and contact links update on every page.
- **Header/footer/navigation:** `assets/js/layout.js` (`renderHeader`, `renderFooter`, `SERVICES`).
- **Blog articles:** add an entry to `POSTS` in `assets/js/posts.js`.
- **Styles/colours:** CSS variables at the top of `assets/css/style.css`.

## Forms

The callback, appointment, contact and portal access forms are sent to `info@bhoomiinvestment.org` through [FormSubmit](https://formsubmit.co). This needs no backend.
The **first** submission triggers an activation email to that inbox. Click the link in it once to activate the form.
If a submission fails, the site shows WhatsApp, email and phone links with the message pre-filled.

## Before going live

1. Replace `ARN-XXXXXX` in `SITE.arn` with your AMFI ARN.
2. Set `SITE.portalUrl` to your client portal's login URL.
3. Replace the placeholder team names, roles and photos in `team.html`.
4. Submit one test form and confirm the FormSubmit activation email.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
