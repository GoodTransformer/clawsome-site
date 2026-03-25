import type { APIRoute } from "astro";
import { getAbsoluteSiteUrl } from "@data/site";
import { useCases } from "@data/useCases";

const routes = [
  "/",
  "/example-agents/",
  "/how-it-works/",
  "/trust-and-control/",
  "/pricing/",
  "/about/",
  "/contact/",
  "/faq/",
  "/privacy-policy/",
  "/cookie-notice/",
  "/terms/",
  "/thank-you/"
];

export const GET: APIRoute = () => {
  const allRoutes = [
    ...routes,
    ...useCases.map((item) => `/use-cases/${item.slug}/`)
  ];

  const urls = allRoutes
    .map((path) => `<url><loc>${getAbsoluteSiteUrl(path)}</loc></url>`)
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
