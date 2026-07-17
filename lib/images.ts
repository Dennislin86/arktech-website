const imageMap: Record<string, string> = {
  "injection-mold-manufacturing": "/images/capabilities/injection-mold-manufacturing.png",
  "mold-trial-sampling-support": "/images/capabilities/mold-trial-sampling-support.png",
  "tooling-spare-parts": "/images/capabilities/tooling-spare-parts.png",
  "plastic-injection-molding": "/images/capabilities/plastic-injection-molding-production.png",
  "die-casting": "/images/capabilities/die-casting.webp",
  "die-casting-mold": "/images/capabilities/die-casting.webp",
  "cnc-machining": "/images/capabilities/cnc-machining.jpg",
  "cnc-metal-parts": "/images/capabilities/cnc-machining.jpg",
  "sheet-metal-fabrication": "/images/capabilities/sheet-metal-fabrication.jpg",
  "rapid-prototyping": "/images/capabilities/rapid-prototyping-v3.png",
  "vacuum-casting": "/images/capabilities/vacuum-casting-v3.png",
  "assembly-secondary-operations": "/images/capabilities/assembly-secondary-operations.webp",
  "product-engineering-development": "/images/capabilities/rd-product-development.webp",
  "plastic-metal-assembly": "/images/capabilities/assembly-secondary-operations.webp",
  "dfm-engineering": "/images/capabilities/rd-product-development.webp",
  "plastic-housing-manufacturing": "/images/seo/plastic-injection-molding.png",
  "injection-molding-companies": "/images/seo/injection-mold-manufacturing.png",
  "oem-product-companies": "/images/seo/oem-manufacturing-hero.png",
  "ems-manufacturers": "/images/seo/oem-industry-components.png",
  robotics: "/images/industries/robotics-injection-mold-components.jpg",
  "medical-devices": "/images/industries/medical-healthcare-device-parts.jpg",
  "medical-healthcare-devices": "/images/industries/medical-healthcare-device-parts.jpg",
  "industrial-automation": "/images/industries/robotics-injection-mold-components.jpg",
  "smart-home": "/images/industries/smart-iot-device-housings.jpg",
  "energy-storage-ev-charging": "/images/industries/automotive-ev-components.jpg",
  "new-energy": "/images/industries/automotive-ev-components.jpg",
  "outdoor-products": "/images/industries/home-appliance-smart-home-components.jpg",
  "home-appliance": "/images/industries/home-appliance-smart-home-components.jpg",
  "pet-tech": "/images/industries/pet-lifestyle-product-parts.jpg",
  "consumer-electronics": "/images/industries/consumer-electronics-enclosures.jpg",
  "multi-cavity-molds": "/images/mold-types/multi-cavity-injection-molds.png",
  "hot-runner-molds": "/images/mold-types/hot-runner-molds.webp",
  "insert-molds": "/images/mold-types/insert-molding-tools.png",
  "overmolding-tools": "/images/capabilities/plastic-injection-molding-v2.png",
  "unscrewing-molds": "/images/mold-types/unscrewing-molds.png",
  "two-shot-2k-molds": "/images/mold-types/two-shot-2k-bi-injection-molds.png",
  "large-component-molds": "/images/mold-types/large-component-molds.webp",
  "gas-assisted-injection-molds": "/images/mold-types/gas-assisted-injection-molds.png",
  "thermoset-molds": "/images/mold-types/thermoset-molds.png",
  "die-casting-molds": "/images/mold-types/die-casting-tooling.png",
  "automotive-sensor-housing-tooling": "/images/case-studies/automotive-multi-cavity-mold.webp",
  "medical-device-cartridge-molding": "/images/case-studies/medical-education-device.webp",
  "smart-home-plastic-housing": "/images/case-studies/smart-home-iot-project.webp",
  "die-cast-control-housing": "/images/case-studies/die-casting-control-housing.webp",
  "injection-mold-rfq-checklist": "/images/seo/rfq-engineering-review.png",
  "dfm-checklist-for-plastic-housing": "/images/seo/rfq-engineering-review.png",
  "hot-runner-mold-design-considerations": "/images/seo/injection-mold-manufacturing.png",
  "plastic-and-metal-assembly-sourcing-guide": "/images/seo/oem-industry-components.png"
};

export function seoImageForSlug(slug: string) {
  return imageMap[slug] ?? "/images/seo/oem-manufacturing-hero.png";
}

export function seoImageAlt(title: string) {
  return `${title} for OEM manufacturing and RFQ review by Arktech Mold`;
}
