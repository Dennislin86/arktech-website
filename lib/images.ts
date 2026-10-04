const imageMap: Record<string, string> = {
  "injection-mold-manufacturing": "/images/seo/injection-mold-manufacturing.png",
  "plastic-injection-molding": "/images/seo/plastic-injection-molding.png",
  "die-casting-mold": "/images/seo/die-casting-cnc-metal-parts.png",
  "cnc-metal-parts": "/images/seo/die-casting-cnc-metal-parts.png",
  "plastic-metal-assembly": "/images/seo/oem-industry-components.png",
  "dfm-engineering": "/images/seo/rfq-engineering-review.png",
  "plastic-housing-manufacturing": "/images/seo/plastic-injection-molding.png",
  "injection-molding-companies": "/images/seo/injection-mold-manufacturing.png",
  "oem-product-companies": "/images/seo/oem-manufacturing-hero.png",
  "ems-manufacturers": "/images/seo/oem-industry-components.png",
  robotics: "/images/seo/oem-industry-components.png",
  "smart-home": "/images/seo/oem-industry-components.png",
  "medical-devices": "/images/seo/oem-industry-components.png",
  "industrial-automation": "/images/seo/die-casting-cnc-metal-parts.png",
  "new-energy": "/images/seo/die-casting-cnc-metal-parts.png",
  "outdoor-products": "/images/seo/oem-industry-components.png",
  "pet-tech": "/images/seo/oem-industry-components.png",
  "multi-cavity-molds": "/images/mold-types/multi-cavity-injection-molds.png",
  "hot-runner-molds": "/images/seo/injection-mold-manufacturing.png",
  "insert-molds": "/images/mold-types/insert-molding-tools.png",
  "overmolding-tools": "/images/capabilities/plastic-injection-molding-v2.png",
  "unscrewing-molds": "/images/mold-types/unscrewing-molds.png",
  "two-shot-2k-molds": "/images/mold-types/two-shot-2k-bi-injection-molds.png",
  "large-component-molds": "/images/mold-types/large-component-molds.JPG",
  "die-casting-molds": "/images/capabilities/die-casting.webp",
  "automotive-sensor-housing-tooling": "/images/seo/injection-mold-manufacturing.png",
  "medical-device-cartridge-molding": "/images/seo/plastic-injection-molding.png",
  "smart-home-plastic-housing": "/images/seo/oem-industry-components.png",
  "die-cast-control-housing": "/images/seo/die-casting-cnc-metal-parts.png",
  "injection-mold-rfq-checklist": "/images/seo/rfq-engineering-review.png",
  "dfm-checklist-for-plastic-housing": "/images/seo/rfq-engineering-review.png",
  "hot-runner-mold-design-considerations": "/images/seo/injection-mold-manufacturing.png",
  "plastic-and-metal-assembly-sourcing-guide": "/images/seo/oem-industry-components.png"
};

const slugsWithoutApprovedHeroMedia = new Set([
  "gas-assisted-injection-molds",
  "thermoset-molds",
  "die-casting-molds"
]);

export function seoImageForSlug(slug: string) {
  return imageMap[slug] ?? "/images/seo/oem-manufacturing-hero.png";
}

export function approvedHeroImageForSlug(slug: string) {
  return slugsWithoutApprovedHeroMedia.has(slug) ? null : seoImageForSlug(slug);
}

export function seoImageAlt(title: string) {
  return `${title} for OEM manufacturing and RFQ review by Arktech Mold`;
}
