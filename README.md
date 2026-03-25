# Clawsome Marketing Site

Production-ready Astro marketing site for Clawsome, rebuilt as a tighter, more editorial quick-win service brand.

## Stack

- Astro 5
- TypeScript
- Custom CSS
- Fontsource-hosted Newsreader Variable and Manrope Variable
- Data-driven content in `src/data`

## Local setup

1. Copy `.env.example` to `.env`
2. Keep `BASE_PATH=/` for local development
3. Install dependencies

```bash
npm install
```

4. Start local development

```bash
npm run dev
```

5. Build and verify

```bash
npm run build
npm run check
```

## Content structure

- `src/data/site.ts`
  Global brand copy, navigation, trust strip, founder note, contact helpers, and CTA text.
- `src/data/useCases.ts`
  The three quick-win use cases.
- `src/data/offers.ts`
  Offer ladder and pricing bands.
- `src/data/faqs.ts`
  FAQ content used on the pricing page.
- `src/data/legal.ts`
  Legal page copy blocks.

## Live page architecture

- `/`
- `/use-cases/`
- `/how-it-works/`
- `/pricing/`
- `/contact/`
- `/privacy-policy/`
- `/cookie-notice/`
- `/terms/`
- `/thank-you/`
- `/404.html`

## Brand assets

- `public/brand/clawsome-mark-red.svg`
- `public/brand/clawsome-mark-light.svg`
- `public/brand/clawsome-mark-dark.svg`
- `public/brand/clawsome-wordmark-light.svg`
- `public/brand/clawsome-wordmark-dark.svg`
- `public/brand/clawsome-logo-light.svg`
- `public/brand/clawsome-logo-dark.svg`
- `public/favicons/*`
- `public/images/og-clawsome.svg`
- `public/images/og-clawsome.png`

## Deployment

- Static output builds to `dist/`
- GitHub Pages deployment is handled by `.github/workflows/deploy-pages.yml`
- Internal links and assets are base-path aware for GitHub Pages project sites

## Contact flow

- `PUBLIC_BOOKING_URL` controls the primary CTA when present
- `PUBLIC_CONTACT_FORM_ENDPOINT` enables direct form submissions
- `PUBLIC_CONTACT_EMAIL` is used as a fallback mail route when it is real and not a placeholder

## Verification completed

- `npm run build`
- `npm run check`

See [`IMPLEMENTATION_NOTES.md`](/Users/patrickhussey/Desktop/Clawsome%20site%20/IMPLEMENTATION_NOTES.md), [`BRAND_GUIDE.md`](/Users/patrickhussey/Desktop/Clawsome%20site%20/BRAND_GUIDE.md), [`LAUNCH_CHECKLIST.md`](/Users/patrickhussey/Desktop/Clawsome%20site%20/LAUNCH_CHECKLIST.md), and [`TODO.md`](/Users/patrickhussey/Desktop/Clawsome%20site%20/TODO.md).
