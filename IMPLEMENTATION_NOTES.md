# Implementation Notes

## Stack choice

Astro was chosen because the repo started empty and the brief called for a premium, content-led marketing site with strong performance, tidy component boundaries, and minimal client-side JavaScript. A static Astro build gives us:

- fast pages and low runtime overhead
- clean page templates and reusable section components
- data-driven content that is easy to update without hunting through component files
- room to add more use-case landing pages through the existing dynamic route

## Visual direction

The design system uses a graphite and mineral foundation with a restrained sea-glass accent. The intent was to make Clawsome feel premium, sharp, and commercially serious while keeping enough atmosphere to avoid generic consultancy sameness.

- Display font: Fraunces Variable
- Body font: Manrope Variable
- Core palette lives in `src/styles/global.css`
- The hero uses a full-bleed branded signal field rather than a card-based layout
- The brand name is treated as a hero-level signal so the first viewport remains recognisably Clawsome

## Content editing

- Update hero, navigation, trust principles, and contact fallbacks in `src/data/site.ts`
- Update the three lead use cases in `src/data/useCases.ts`
- Update offers and pricing bands in `src/data/offers.ts`
- Update FAQs in `src/data/faqs.ts`
- Replace proof placeholders via `src/data/proof.ts` and files in `public/proof`
- Update legal wording in `src/data/legal.ts`

## Contact details and lead flow

- Replace the placeholder values in `.env`
- Keep `BASE_PATH=/` locally. The Pages workflow computes the deploy base automatically.
- `PUBLIC_BOOKING_URL` controls the primary booking CTA when set
- `PUBLIC_CONTACT_FORM_ENDPOINT` connects the form to a serverless or external form handler
- `PUBLIC_CONTACT_EMAIL` is used as the fallback mail route if no endpoint is configured

## Analytics

Interaction hooks are already built into the components. The following events are emitted through the generic tracking layer:

- `primary_cta_click`
- `secondary_cta_click`
- `contact_form_submit`
- `booking_link_click`
- `roi_calculator_completed`
- `proof_asset_play`
- `use_case_page_view`
- `use_case_page_conversion`

Enable tools through `.env`:

- `PUBLIC_GA_MEASUREMENT_ID`
- `PUBLIC_PLAUSIBLE_DOMAIN`
- `PUBLIC_META_PIXEL_ID`

## GitHub Pages

The site has been made base-path aware so it works properly on GitHub Pages project URLs as well as root Pages domains.

- Internal links and asset references are resolved through `src/data/paths.ts`
- The workflow at `.github/workflows/deploy-pages.yml` computes the correct `BASE_PATH`
- `PUBLIC_SITE_URL` is treated as the domain root and the workflow appends the repo path through `BASE_PATH`

## Adding a new use-case page

1. Add a new item to `src/data/useCases.ts`
2. The dynamic route at `src/pages/use-cases/[slug].astro` will generate the new page automatically
3. If you want it shown on the example agents page or homepage, include it in the page logic or content ordering there

## Proof assets

The proof section is deliberately honest. No fake testimonials or fabricated numbers were added. Replace the placeholder SVGs in `public/proof` with:

- short screen recordings
- before and after workflow snapshots
- concise outcome proof blocks

## Brand assets

- `public/brand/clawsome-mark-light.svg`
- `public/brand/clawsome-mark-dark.svg`
- `public/brand/clawsome-wordmark-light.svg`
- `public/brand/clawsome-wordmark-dark.svg`
- `public/brand/clawsome-logo-light.svg`
- `public/brand/clawsome-logo-dark.svg`
- `public/favicons/*`
- `public/images/og-clawsome.svg`
- `public/images/og-clawsome.png`

If you want print-ready or social-specific variants later, extend from these base files rather than redrawing the mark from scratch.
