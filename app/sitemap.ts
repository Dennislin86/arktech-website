import type { MetadataRoute } from "next";
import { caseStudyPages, resourcePages, servicePages, solutionPages, toolingExamplePages } from "@/lib/page-data";
import { site } from "@/lib/site";
import { seoPages } from "@/lib/seo-pages";
import { allEngineeringResources } from "@/lib/engineering-resources";
import { industryLandingPages } from "@/lib/industry-landing-pages";

const injectionMoldSlug = (slug: string) => slug === "large-component-molds" ? "large-injection-molds" : slug === "insert-molds" ? "insert-molding-tools" : slug;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    ...site.nav.map((item) => item.href),
    "/request-a-quote",
    "/injection-molding-engineering",
    "/resources/faq",
    "/seo",
    "/company/arktech-group",
    "/company/project-management",
    "/company/quality-documentation",
    "/materials",
    "/privacy-policy",
    "/terms-of-use",
    "/cookie-policy"
  ];
  const detailRoutes = [
    ...servicePages.filter((page) => page.slug !== "dfm-engineering").map((page) => `/services/${page.slug}`),
    ...solutionPages.map((page) => `/solutions/${page.slug}`),
    ...industryLandingPages.map((page) => `/industries/${page.slug}`),
    ...toolingExamplePages.filter((page) => page.slug !== "die-casting-molds").map((page) => `/injection-molds/${injectionMoldSlug(page.slug)}`),
    ...caseStudyPages.map((page) => `/case-studies/${page.slug}`),
    ...resourcePages.map((page) => `/resources/${page.slug}`),
    ...allEngineeringResources.map((page) => page.path),
    ...seoPages.map((page) => `/seo/${page.slug}`)
  ];

  return [...new Set([...staticRoutes, ...detailRoutes])].map((href) => ({
    url: `${site.url}${href === "/" ? "" : href}`,
    lastModified: new Date(),
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : href.split("/").length > 2 ? 0.7 : 0.8
  }));
}
