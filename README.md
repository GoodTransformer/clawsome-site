# Clawsome Marketing Site

Production-ready Astro marketing site for Clawsome, built around the quick-win-first commercial model from the vision document.

## Stack

- Astro 5
- TypeScript
- Custom CSS with self-hosted variable fonts from Fontsource
- Data-driven content in `src/data`
- Static output with lightweight client-side scripts only where interaction improves conversion

## Local setup

1. Copy `.env.example` to `.env` and replace the placeholder values you have.
   Keep `BASE_PATH=/` for local development.
2. Install dependencies:

```bash
npm install
```

3. Start the local server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Run Astro checks:

```bash
npm run check
```

## Content structure

- `src/data/site.ts`
  Global site settings, navigation, hero messaging, trust principles, CTA copy, and contact helpers.
- `src/data/useCases.ts`
  The three lead example agents and the reusable structure for future use-case landing pages.
- `src/data/offers.ts`
  Offer ladder, scope, and indicative pricing bands.
- `src/data/faqs.ts`
  FAQ copy.
- `src/data/proof.ts`
  Proof section placeholders and assets.
- `src/data/legal.ts`
  Privacy, cookie, and terms content blocks.

## Key directories

- `src/components`
  Reusable UI components, layout parts, and interactive modules.
- `src/pages`
  All pages, legal routes, sitemap, robots, thank-you page, and the dynamic use-case route.
- `public/brand`
  Brand assets and logo lockups.
- `public/favicons`
  Favicon set for browser and Apple touch usage.
- `public/images`
  OG image assets.
- `public/proof`
  Honest proof placeholders ready to be replaced with live demos.

## Deployment notes

- The site is static by default and builds to `dist/`.
- The contact form posts to `PUBLIC_CONTACT_FORM_ENDPOINT` if set.
- If no form endpoint is configured, the form falls back to a mailto route using `PUBLIC_CONTACT_EMAIL`.
- Analytics event hooks are already wired. Add IDs in `.env` to enable GA4, Plausible, or Meta Pixel without rewriting components.
- GitHub Pages deployment is included in `.github/workflows/deploy-pages.yml` and automatically computes the correct base path for project-site repos.

## Included routes

- `/`
- `/example-agents/`
- `/use-cases/meta-ads-agent/`
- `/use-cases/lead-response-agent/`
- `/use-cases/admin-recovery-agent/`
- `/how-it-works/`
- `/trust-and-control/`
- `/pricing/`
- `/about/`
- `/contact/`
- `/faq/`
- `/privacy-policy/`
- `/cookie-notice/`
- `/terms/`
- `/thank-you/`
- `/404.html`

## Verification completed

- `npm run build`
- `npm run check`

See [`IMPLEMENTATION_NOTES.md`](/Users/patrickhussey/Desktop/Clawsome%20site%20/IMPLEMENTATION_NOTES.md), [`BRAND_GUIDE.md`](/Users/patrickhussey/Desktop/Clawsome%20site%20/BRAND_GUIDE.md), [`LAUNCH_CHECKLIST.md`](/Users/patrickhussey/Desktop/Clawsome%20site%20/LAUNCH_CHECKLIST.md), and [`TODO.md`](/Users/patrickhussey/Desktop/Clawsome%20site%20/TODO.md) for handover detail.
