# Implementation Notes

## What changed

This rebuild deliberately cut the site down.

- The IA was reduced to five primary pages: Home, Use Cases, How It Works, Pricing, and Contact
- About, FAQ, and Trust were folded into stronger pages instead of standing alone
- The three child use-case pages were removed in favour of one more forceful editorial Use Cases page
- The proof placeholder grid and ROI calculator were removed
- The animation language was stripped back to sticky-header and hover polish only

## Brand direction

The identity now runs on a tighter editorial system:

- Display: Newsreader Variable
- Body: Manrope Variable
- Palette: warm paper, charcoal, and signal red
- Mark: an abstract pincer or aperture form with a central slit

## Editing content

- `src/data/site.ts` for hero, nav, trust strip, founder note, and CTA copy
- `src/data/useCases.ts` for the three quick-win entry points
- `src/data/offers.ts` for pricing and offer copy
- `src/data/faqs.ts` for pricing-page FAQ answers
- `src/data/legal.ts` for legal page text

## Page structure

- `src/pages/index.astro`
  Main conversion page carrying most of the persuasion
- `src/pages/use-cases.astro`
  Three strong editorial use-case sections
- `src/pages/how-it-works.astro`
  Lightweight process and control page
- `src/pages/pricing.astro`
  Offer ladder plus FAQ
- `src/pages/contact.astro`
  Booking and form page

## Contact and deployment inputs

- Replace placeholder values in `.env`
- Keep `BASE_PATH=/` locally
- If using GitHub Pages, mirror the live values into repository variables
- Add a real `PUBLIC_BOOKING_URL`
- Add a real `PUBLIC_CONTACT_EMAIL` or `PUBLIC_CONTACT_FORM_ENDPOINT`

## Analytics

The generic analytics layer is still in place and supports:

- `primary_cta_click`
- `secondary_cta_click`
- `contact_form_submit`
- `booking_link_click`

Optional integrations remain environment-driven:

- `PUBLIC_GA_MEASUREMENT_ID`
- `PUBLIC_PLAUSIBLE_DOMAIN`
- `PUBLIC_META_PIXEL_ID`

## Brand assets

Core files:

- `public/brand/clawsome-mark-red.svg`
- `public/brand/clawsome-mark-light.svg`
- `public/brand/clawsome-mark-dark.svg`
- `public/brand/clawsome-logo-light.svg`
- `public/brand/clawsome-logo-dark.svg`
- `public/favicons/*`
- `public/images/og-clawsome.svg`
- `public/images/og-clawsome.png`
