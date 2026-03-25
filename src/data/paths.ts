const protocolPattern = /^(?:[a-z]+:)?\/\//i;

export function withBase(path: string) {
  if (!path) return path;
  if (
    protocolPattern.test(path) ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL || "/";

  if (path === "/") {
    return base;
  }

  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBase}${normalizedPath}`;
}

export function absoluteUrl(path: string, siteUrl: string) {
  if (protocolPattern.test(path)) {
    return path;
  }

  const normalizedSite = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;
  const basedPath = withBase(path).replace(/^\//, "");
  return new URL(basedPath, normalizedSite).toString();
}
