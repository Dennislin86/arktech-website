import type { MetadataRoute } from "next";
import { caseStudyPages, industryPages, resourcePages, servicePages, solutionPages, toolingExamplePages } from "@/lib/page-data";
import { site } from "@/lib/site";
import { seoPages } from "@/lib/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", ...site.nav.map((item) => item.href), "/request-a-quote", "/seo"];
  const detailRoutes = [
    ...servicePages.map((page) => `/services/${page.slug}`),
    ...solutionPages.map((page) => `/solutions/${page.slug}`),
    ...industryPages.map((page) => `/industries/${page.slug}`),
    ...toolingExamplePages.filter((page) => page.slug !== "die-casting-molds").map((page) => `/tooling-examples/${page.slug}`),
    ...caseStudyPages.map((page) => `/case-studies/${page.slug}`),
    ...resourcePages.map((page) => `/resources/${page.slug}`),
    ...seoPages.map((page) => `/seo/${page.slug}`)
  ];

  return [...staticRoutes, ...detailRoutes].map((href) => ({
    url: `${site.url}${href === "/" ? "" : href}`,
    lastModified: new Date(),
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : href.split("/").length > 2 ? 0.7 : 0.8
  }));
}
