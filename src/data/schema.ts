import { getAbsoluteSiteUrl, siteConfig } from "./site";

export const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: getAbsoluteSiteUrl("/"),
  description: siteConfig.description,
  areaServed: "GB",
  founder: {
    "@type": "Person",
    name: siteConfig.founder
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: getAbsoluteSiteUrl("/"),
  description: siteConfig.description
};

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: getAbsoluteSiteUrl("/")
    },
    areaServed: "GB",
    description,
    url: getAbsoluteSiteUrl(path)
  };
}
