export const seoIndexingRedirects = [
  { source: "/seo", destination: "/manufacturing-capabilities" },
  { source: "/seo/injection-molding-tooling", destination: "/injection-mold-manufacturing" },
  { source: "/seo/plastic-injection-molding", destination: "/plastic-injection-molding" },
  { source: "/seo/cnc-machining-parts", destination: "/services/cnc-metal-parts" },
  { source: "/seo/die-casting-manufacturing", destination: "/services/die-casting-mold" },
  { source: "/seo/oem-manufacturing-services", destination: "/solutions/oem-product-companies" },
  { source: "/seo/ems-electronics-manufacturing-support", destination: "/solutions/ems-manufacturers" },
  { source: "/seo/dfm-engineering-services", destination: "/injection-molding-engineering" }
] as const;

export const solutionIndexingRedirects = [
  { source: "/solutions/product-companies", destination: "/solutions/oem-product-companies" }
] as const;

function slugFromSource(source: string) {
  return source.slice(source.lastIndexOf("/") + 1);
}

export const seoRedirectDestinationBySlug: Record<string, string> = Object.fromEntries(
  seoIndexingRedirects
    .filter(({ source }) => source !== "/seo")
    .map(({ source, destination }) => [slugFromSource(source), destination])
);

export const solutionRedirectDestinationBySlug: Record<string, string> = Object.fromEntries(
  solutionIndexingRedirects.map(({ source, destination }) => [slugFromSource(source), destination])
);

export function isRedirectedSeoSlug(slug: string) {
  return slug in seoRedirectDestinationBySlug;
}

export function isRedirectedSolutionSlug(slug: string) {
  return slug in solutionRedirectDestinationBySlug;
}
