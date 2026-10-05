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
    heroCopy: "Review mold performance, molded samples, process parameters and critical dimensions before tooling moves to export or production.",
    heroImage: "/images/Mold trail/Mold trial video photos.png",
    heroAlt: "Injection mold installed in a molding machine for trial and validation",
    ogImage: "/images/injection-mold-manufacturing/mold-trial-report-evidence.webp",
    primaryCta: "Discuss Mold Trial Requirements",
    secondaryCta: "View Trial Evidence",
    faqs: [
      { question: "What is checked during an injection mold trial?", answer: "The review can cover filling, gate and runner behavior, mold opening, part release, appearance, agreed critical dimensions and recorded molding conditions." },
      { question: "What are T0 and T1 mold trials?", answer: "T0 commonly refers to an initial tool trial. T1 may refer to a subsequent trial, including after changes where required. Trial labels, scope and sequence follow the agreed project process." },
      { question: "What samples and records can be provided?", answer: "According to the agreed project scope, records can include molded samples, trial findings, molding parameters, dimensional inspection results, correction status and open items." },
      { question: "How are critical dimensions reviewed?", answer: "Agreed critical dimensions are compared with the customer drawing and inspection scope. Results and open items are reviewed before approval or the next correction step." },
      { question: "When is a correction or re-trial required?", answer: "Findings against the agreed product or tooling requirements may lead to correction actions and another trial where necessary. The scope is discussed before the next validation step." },
      { question: "What happens after tooling validation?", answer: "After the agreed confirmation, tooling can move toward export transfer or continue into plastic injection molding production at Arktech, depending on the project path." }
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
    eyebrow: "Custom Mold Components & Tooling Support",
    title: "Injection Mold Components, Spare Parts & Replacement Inserts",
    seoTitle: "Injection Mold Components, Spare Parts & Replacement Inserts | Arktech",
    description: "Custom injection mold components manufactured from customer drawings, plus spare parts and replacement inserts for existing tooling, reviewed to project requirements.",
    heroCopy: "Arktech manufactures custom injection mold components from customer drawings and supports project-specific spare parts and replacement inserts for existing tooling.",
    heroImage: "/images/mold-components/mold-component-cmm-inspection-poster.webp",
    heroAlt: "CMM probe positioned above a machined mold component",
    ogImage: "/images/mold-components/mold-component-cmm-inspection-poster.webp",
    primaryCta: "Request a Mold Component Quote",
    secondaryCta: "Explore Mold Components",
    faqs: [
      { question: "Can Arktech manufacture individual mold components without building the complete mold?", answer: "Yes. Standalone component requests can be reviewed from customer drawings and agreed technical requirements without requiring a complete-mold order." },
      { question: "Can components be made for molds built by another supplier?", answer: "Requirements can be reviewed using available drawings and component information. Manufacturing feasibility and fit requirements must be confirmed for the project." },
      { question: "What information is needed for a component quotation?", answer: "Useful information includes the applicable drawings, material and treatment requirements, critical features, quantity and delivery needs." },
      { question: "Can spare core or cavity inserts be prepared with export tooling?", answer: "They may be planned where required by the mold design, maintenance needs and customer agreement." },
      { question: "Can replacement components be manufactured after mold delivery?", answer: "Support can be reviewed against available tooling data, component condition and confirmed replacement requirements." }
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
