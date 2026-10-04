export type ToolingSupportSlug =
  | "mold-trial-validation"
  | "tooling-documentation"
  | "mold-spare-parts"
  | "export-tooling-transfer";

type Faq = { question: string; answer: string };

export type ToolingSupportPageData = {
  slug: ToolingSupportSlug;
  navLabel: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  heroCopy: string;
  heroImage: string;
  heroAlt: string;
  ogImage: string;
  primaryCta: string;
  secondaryCta: string;
  faqs: Faq[];
};

export const toolingSupportPages: Record<ToolingSupportSlug, ToolingSupportPageData> = {
  "mold-trial-validation": {
    slug: "mold-trial-validation",
    navLabel: "Mold Trial & Validation",
    eyebrow: "Tooling Validation",
    title: "Injection Mold Trial & Validation",
    seoTitle: "Injection Mold Trial & Validation | T0/T1 Testing | Arktech",
    description: "Injection mold trial and validation support including T0/T1 samples, molding parameters, dimensional inspection, engineering corrections and approval before export or production.",
    heroCopy: "Validate mold performance, molded parts and production conditions through mold trials, sample review, process recording and dimensional inspection before export or production.",
    heroImage: "/images/Mold trail/Mold trial video photos.png",
    heroAlt: "Injection mold installed in a molding machine for trial and validation",
    ogImage: "/images/injection-mold-manufacturing/mold-trial-report-evidence.webp",
    primaryCta: "Discuss Mold Trial Requirements",
    secondaryCta: "Upload CAD for Tooling Review",
    faqs: [
      { question: "What is checked during an injection mold trial?", answer: "The review can cover filling, gate and runner behavior, mold opening, part release, appearance, agreed critical dimensions and recorded molding conditions." },
      { question: "What are T0 and T1 mold trials?", answer: "T0 and T1 identify early tooling trial stages used to review mold function and samples. The number and sequence of trials remain project-specific, and re-trials are completed when required." },
      { question: "What information is recorded during a mold trial?", answer: "Project records can include trial findings, molding parameters, sample status, open items, dimensional inspection results and engineering correction status." },
      { question: "How are dimensional results reviewed before mold approval?", answer: "Agreed critical dimensions are compared with the customer drawing and inspection scope. Results and open items are reviewed before approval or the next correction step." },
      { question: "Can validated tooling continue into production at Arktech?", answer: "Yes. Projects that remain with Arktech can move from tooling validation into plastic injection molding production after the agreed approval steps." }
    ]
  },
  "tooling-documentation": {
    slug: "tooling-documentation",
    navLabel: "Tooling Documentation",
    eyebrow: "Technical Handover",
    title: "Injection Mold Documentation & Tooling Package",
    seoTitle: "Injection Mold Documentation & Tooling Package | Arktech",
    description: "Injection mold documentation for export tooling, including mold drawings, BOM, tooling records, trial information and project-specific maintenance references.",
    heroCopy: "Structured tooling documentation supports mold setup, maintenance, spare-part identification and technical handover after mold validation.",
    heroImage: "/images/documentation/tooling-documentation-package.png",
    heroAlt: "Injection mold documentation package with tooling drawings and validation records",
    ogImage: "/images/Engineering/injection-molding-dfm-report-anonymized.webp",
    primaryCta: "Discuss Export Tooling Requirements",
    secondaryCta: "Explore Documentation Package",
    faqs: [
      { question: "What documentation is provided with an export injection mold?", answer: "The project-specific package can include mold design files, drawings, BOM and component references, material or tooling records, and agreed trial and validation information." },
      { question: "Can mold drawings and BOM be included?", answer: "Yes. Mold drawings, 3D data, component drawings and BOM references can be included according to the agreed project documentation scope." },
      { question: "Are trial parameters included in the tooling package?", answer: "Molding parameters and related trial records can be included where they form part of the agreed validation and handover requirements." },
      { question: "How does tooling documentation support mold maintenance?", answer: "Drawings, BOM references and insert identification help maintenance teams identify project-specific components and communicate replacement requirements." }
    ]
  },
  "mold-spare-parts": {
    slug: "mold-spare-parts",
    navLabel: "Mold Spare Parts",
    eyebrow: "Tooling Maintenance Support",
    title: "Injection Mold Spare Parts & Replacement Inserts",
    seoTitle: "Injection Mold Spare Parts & Replacement Inserts | Arktech",
    description: "Injection mold spare parts and replacement inserts for export tooling, including project-specific cores, cavities, forming inserts and wear components where required.",
    heroCopy: "Project-specific spare inserts and replacement components can support maintenance, repair and long-term use of export tooling after delivery.",
    heroImage: "/images/capabilities/tooling-spare-parts.jpg",
    heroAlt: "Replacement core and cavity inserts for an injection mold",
    ogImage: "/images/capabilities/tooling-spare-parts.jpg",
    primaryCta: "Request Spare Part Support",
    secondaryCta: "Upload Tooling Data",
    faqs: [
      { question: "What injection mold spare parts can be supplied?", answer: "Support can include project-specific core, cavity and forming inserts, mold-action components and identified wear or replacement components where applicable." },
      { question: "Can spare core or cavity inserts be prepared with export tooling?", answer: "Yes. Spare inserts can be planned with export tooling when required by the mold design, expected wear areas, production needs and customer requirements." },
      { question: "How are replacement mold inserts identified?", answer: "The original tooling documentation, component drawings, BOM references and insert identification are reviewed to confirm the required replacement component." },
      { question: "Can replacement parts be manufactured after mold delivery?", answer: "Project-specific replacement support can be reviewed after delivery using available tooling records, reference data and the confirmed condition of the required component." }
    ]
  },
  "export-tooling-transfer": {
    slug: "export-tooling-transfer",
    navLabel: "Export Tooling & Mold Transfer",
    eyebrow: "Export Tooling",
    title: "Export Tooling & Mold Transfer Support",
    seoTitle: "Export Tooling & Injection Mold Transfer Support | Arktech",
    description: "Export injection mold support from mold validation and tooling documentation to spare parts, packing preparation and technical handover for customer production.",
    heroCopy: "Prepare injection molds for customer production through validation, documentation, spare-part planning, packing and technical handover before international mold transfer.",
    heroImage: "/images/company/Precision Mold to Global Delivery.png",
    heroAlt: "Completed export injection mold with molded part and tooling packing preparation",
    ogImage: "/images/hero/export-injection-mold-manufacturing-hero.webp",
    primaryCta: "Discuss an Export Tooling Project",
    secondaryCta: "Upload CAD for Tooling Review",
    faqs: [
      { question: "What is included before an injection mold is exported?", answer: "The agreed preparation can include mold trials, dimensional validation, tooling inspection, documentation, spare parts and packing preparation." },
      { question: "How is a mold prepared for production at the customer factory?", answer: "Machine compatibility, mold interfaces, ejection, cooling connections, electrical or hot-runner interfaces where applicable, and customer tooling standards are reviewed against project requirements." },
      { question: "Can spare parts and tooling documentation ship with the mold?", answer: "Yes. Project-specific documentation and agreed spare components can be prepared with the export tooling handover package." },
      { question: "What information is needed for customer machine compatibility?", answer: "Useful information includes target machine details, platen and tie-bar constraints, ejection requirements, water and electrical connections, hot-runner requirements and customer tooling standards where applicable." },
      { question: "Is support available after mold transfer?", answer: "Technical clarification, tooling records, replacement inserts or spare parts, and project-specific modification support can be reviewed after transfer where applicable." }
    ]
  }
};

export const toolingSupportSlugs = Object.keys(toolingSupportPages) as ToolingSupportSlug[];

export function isToolingSupportSlug(slug: string): slug is ToolingSupportSlug {
  return slug in toolingSupportPages;
}
