export type InjectionMoldingProcessPageData = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  heroFit?: "cover" | "contain";
  requirementsTitle: string;
  requirementsIntro: string;
  requirements: Array<{ title: string; body: string }>;
  considerationsTitle: string;
  considerationsIntro: string;
  considerations: Array<{ title: string; body: string }>;
  evidenceTitle: string;
  evidenceIntro: string;
  evidence: Array<{ title: string; body: string; image: string; alt: string; fit?: "cover" | "contain" }>;
  inspectionTitle: string;
  inspectionIntro: string;
  inspectionPoints: string[];
  quoteInputs: string[];
  related: Array<{ label: string; href: string }>;
  faqs: Array<{ question: string; answer: string }>;
  ctaLabel: string;
};

export const injectionMoldingProcessPages: InjectionMoldingProcessPageData[] = [
  {
    slug: "insert-molding",
    navLabel: "Insert Molding",
    eyebrow: "INSERT MOLDING",
    h1: "Insert Molding for Plastic Parts",
    seoTitle: "Insert Molding for Plastic Parts | Arktech",
    metaDescription: "Insert molding for plastic parts with review of insert geometry, positioning, plastic coverage, dimensional requirements and agreed inspection needs.",
    intro: "Insert molding places a specified component in the mold before plastic is molded around selected areas. The insert, part geometry and inspection requirements must be reviewed together before production.",
    heroImage: "/images/mold-types/insert-molding-tools.webp",
    heroAlt: "Injection molding tool with long black components positioned in front of the mold halves",
    requirementsTitle: "When Insert Molding Fits a Part Design",
    requirementsIntro: "The process can reduce a later assembly step when an insert and molded body need a controlled, integrated relationship.",
    requirements: [
      { title: "Specified Insert", body: "Provide the insert drawing, material, dimensions, tolerances and surface condition." },
      { title: "Position & Orientation", body: "Define the insert datums, loading direction and features that prevent incorrect orientation." },
      { title: "Plastic Coverage", body: "Mark the areas that must be covered and the functional areas that must remain exposed." },
      { title: "Assembly Requirement", body: "Identify the mating interface, critical dimensions and functional relationship to the finished part." }
    ],
    considerationsTitle: "Insert-to-Plastic Interface Review",
    considerationsIntro: "Tooling and molding decisions follow the real insert condition rather than a generic insert category.",
    considerations: [
      { title: "Location & Retention", body: "The mold should locate the insert consistently and resist movement during filling." },
      { title: "Shutoff & Flash", body: "Sealing surfaces are reviewed around the insert so plastic coverage and exposed zones remain controlled." },
      { title: "Loading Method", body: "Manual or other loading arrangements are evaluated only after the insert presentation and production needs are understood." },
      { title: "Part Release", body: "Ejection, undercuts and insert features are reviewed to avoid damaging the molded part or functional interface." },
      { title: "Drawing Requirements", body: "Critical dimensions should identify how the insert location relates to molded datums and mating features." }
    ],
    evidenceTitle: "Tooling, Production & Inspection Context",
    evidenceIntro: "The insert-molding tool is process-specific evidence. The production and inspection images show the supporting manufacturing context, not a claim that they depict the same project.",
    evidence: [
      { title: "Insert Molding Tool", body: "Real tooling with mold halves and finished black components visible in front.", image: "/images/mold-types/insert-molding-tools.webp", alt: "Insert molding tool with mold halves and finished black components", fit: "contain" },
      { title: "Molding Production", body: "Production planning is matched to the approved tool, insert and part requirements.", image: "/images/capabilities/plastic-injection-molding-production-video-frame.webp", alt: "Clear molded parts beside an automated injection molding cell" },
      { title: "Dimensional Review", body: "Inspection is planned around the agreed relationship between the insert and molded part.", image: "/images/process/sample-validation-inspection-cmm.png", alt: "Operator reviewing a measurement screen beside inspection equipment" }
    ],
    inspectionTitle: "Insert-Molded Part Inspection",
    inspectionIntro: "Inspection requirements should identify what must be checked at the insert-to-plastic interface and how the finished part will be used.",
    inspectionPoints: ["Insert location, depth and orientation", "Plastic coverage and exposed functional areas", "Flash, damage and contamination around the interface", "Critical molded dimensions and assembly fit"],
    quoteInputs: ["Part drawing and 3D data", "Insert drawing and specification", "Required plastic coverage", "Expected production stage", "Inspection and assembly requirements"],
    related: [
      { label: "Insert Molding Tools", href: "/injection-molds/insert-molding-tools" },
      { label: "Plastic Injection Molding", href: "/plastic-injection-molding" },
      { label: "Production Options", href: "/plastic-injection-molding/production-options" },
      { label: "Injection Molding Engineering", href: "/injection-molding-engineering" }
    ],
    faqs: [
      { question: "What insert information is needed for review?", answer: "Provide the insert drawing, material, dimensions, tolerances, surface condition, orientation and the areas that must remain exposed after molding." },
      { question: "Can customer-supplied inserts be reviewed?", answer: "Yes. The project review should confirm the insert specification, condition, presentation, incoming checks and the agreed responsibility for supply." },
      { question: "How are insert position and exposed areas controlled?", answer: "Tooling datums, retention and shutoff features are developed around the actual insert and drawing requirements, then checked on molded samples." },
      { question: "What inspection can be agreed for insert-molded parts?", answer: "Checks may cover insert position, depth, orientation, flash, damage, critical molded dimensions and assembly fit according to the part requirements." }
    ],
    ctaLabel: "Request an Insert Molding Quote"
  },
  {
    slug: "overmolding",
    navLabel: "Overmolding",
    eyebrow: "OVERMOLDING",
    h1: "Overmolding for Multi-Material Plastic Parts",
    seoTitle: "Overmolding for Plastic Parts | Arktech",
    metaDescription: "Overmolding for multi-material plastic parts with review of the substrate, overmold material, coverage, functional requirements and agreed inspection needs.",
    intro: "Overmolding adds material around a prepared substrate to create an integrated part. Material compatibility, mechanical retention, coverage and visible boundaries must be reviewed for the actual combination.",
    heroImage: "/images/material-capabilities/silicone-tpu-tpe-elastomer-components.webp",
    heroAlt: "Molded components with visible rigid and soft material boundaries",
    requirementsTitle: "Product Requirements for Overmolding",
    requirementsIntro: "A useful project review starts with the substrate and the intended function of the second material.",
    requirements: [
      { title: "Substrate Information", body: "Define the first component, its material, dimensions, surface condition and loading datums." },
      { title: "Overmold Material", body: "Provide the exact proposed grade or performance requirements for compatibility review." },
      { title: "Coverage Boundary", body: "Mark the overmold edge, exposed surfaces and cosmetic zones on the drawing." },
      { title: "Functional Need", body: "Describe the intended grip, sealing, protection, appearance or assembly requirement without assuming a specific bond result." }
    ],
    considerationsTitle: "Substrate and Overmold Review",
    considerationsIntro: "Bonding cannot be guaranteed from material family names or color alone; the real grade, interface and product requirement need review.",
    considerations: [
      { title: "Compatibility", body: "Material data and the intended processing conditions are reviewed for the proposed combination." },
      { title: "Mechanical Retention", body: "Geometry may use openings, ribs or other retention features when chemical bonding alone is not sufficient." },
      { title: "Substrate Location", body: "The first part must remain located against second-shot pressure and tooling shutoffs." },
      { title: "Visible Boundary", body: "Transition lines, flash risk and cosmetic limits should be identified before tooling release." },
      { title: "Part Function", body: "Dimensional, assembly and functional checks are agreed around the actual application." }
    ],
    evidenceTitle: "Overmolded Parts & Supporting Evidence",
    evidenceIntro: "The product visual shows identifiable material boundaries. Tooling and inspection are presented as supporting project evidence.",
    evidence: [
      { title: "Multi-Material Components", body: "Real molded components with visible changes in color, geometry and material zones.", image: "/images/material-capabilities/silicone-tpu-tpe-elastomer-components.webp", alt: "Molded components with visible rigid and soft material zones" },
      { title: "Overmolding Tool", body: "A dedicated tool is reviewed around the substrate location and second-material boundary.", image: "/images/mold-types/arktech-overmolding-tool.webp", alt: "Injection mold for overmolding applications", fit: "contain" },
      { title: "Inspection Context", body: "Agreed dimensional and visual checks support review of the finished multi-material part.", image: "/images/process/sample-validation-inspection-cmm.png", alt: "Operator reviewing a measurement screen beside inspection equipment" }
    ],
    inspectionTitle: "Overmolded Part Review",
    inspectionIntro: "Acceptance criteria should be tied to the substrate, material boundary and intended product function.",
    inspectionPoints: ["Substrate position after molding", "Coverage and visible transition boundary", "Flash, deformation and surface condition", "Agreed retention, dimensional or assembly checks"],
    quoteInputs: ["Part and substrate data", "Proposed material grades", "Coverage and visible-surface requirements", "Functional or retention requirements", "Expected production and inspection scope"],
    related: [
      { label: "Overmolding Tools", href: "/injection-molds/overmolding-tools" },
      { label: "Plastic Injection Molding", href: "/plastic-injection-molding" },
      { label: "Production Options", href: "/plastic-injection-molding/production-options" },
      { label: "Material Selection Guide", href: "/resources/material-selection-guide" }
    ],
    faqs: [
      { question: "How is material compatibility reviewed?", answer: "The proposed substrate and overmold grades, supplier data, interface geometry and intended function are reviewed together. Suitability cannot be confirmed from generic material names alone." },
      { question: "Can a customer-provided substrate be overmolded?", answer: "It can be reviewed. The project should define the substrate specification, dimensional condition, cleanliness, presentation and responsibility for supply." },
      { question: "How are coverage and appearance requirements defined?", answer: "The drawing or approved visual reference should identify the overmold boundary, exposed areas, transition lines and appearance-critical surfaces." },
      { question: "How is overmolding different from two-shot molding?", answer: "Overmolding commonly uses a separately prepared substrate in a later molding step. Two-shot molding coordinates two shots through a dedicated mold and machine sequence." }
    ],
    ctaLabel: "Request an Overmolding Quote"
  },
  {
    slug: "two-shot-molding",
    navLabel: "Two-Shot / 2K Molding",
    eyebrow: "TWO-SHOT / 2K MOLDING",
    h1: "Two-Shot / 2K Injection Molding",
    seoTitle: "Two-Shot / 2K Injection Molding | Arktech",
    metaDescription: "Two-shot and 2K injection molding project review for two-material or two-color parts, coordinated tooling, interface requirements and inspection planning.",
    intro: "Two-shot / 2K molding coordinates two material or color shots within a dedicated tooling and machine sequence. Product geometry, material combinations and the intended interface need project-specific review.",
    heroImage: "/images/case-studies/two-shot-light-cover.webp",
    heroAlt: "First-shot and second-shot injection molds with a transparent molded light-cover component",
    heroFit: "contain",
    requirementsTitle: "Two-Shot Product Requirements",
    requirementsIntro: "The product and tooling concept should be reviewed as one coordinated sequence rather than two independent molded parts.",
    requirements: [
      { title: "Two Materials or Colors", body: "Provide the exact proposed grades, colors and interface requirements for review." },
      { title: "First-Shot Function", body: "Define how the first shot is retained and which surfaces remain available for the second shot." },
      { title: "Second-Shot Coverage", body: "Identify the material boundary, visible transition and functional second-shot zones." },
      { title: "Finished-Part Criteria", body: "Specify critical dimensions, appearance, assembly and interface checks for the completed component." }
    ],
    considerationsTitle: "Tooling and Shot-Sequence Coordination",
    considerationsIntro: "Machine arrangement and production capacity are not assumed. They are confirmed only after the project, tool and proposed manufacturing setup have been reviewed.",
    considerations: [
      { title: "Molding Sequence", body: "The first and second shots require a defined transfer, rotation or other verified sequence." },
      { title: "Material Combination", body: "Processing windows, shrinkage and the required material relationship are reviewed for the selected grades." },
      { title: "Shot Alignment", body: "Tooling datums and shutoffs control the position and boundary between the two shots." },
      { title: "First-Shot Stability", body: "The first component must remain located and dimensionally suitable for the second shot." },
      { title: "Receiving Setup", body: "The project requires a verified machine and tooling arrangement before production release." }
    ],
    evidenceTitle: "Two-Shot Tooling & Part Evidence",
    evidenceIntro: "The project image shows first-shot and second-shot tools with the resulting transparent component; it does not establish a universal machine arrangement.",
    evidence: [
      { title: "Two-Shot Project", body: "First-shot and second-shot molds shown with a finished light-cover component.", image: "/images/case-studies/two-shot-light-cover.webp", alt: "Two-shot injection molds and transparent molded light-cover component", fit: "contain" },
      { title: "2K Tooling", body: "Coordinated tooling is reviewed around the sequence, alignment and material interface.", image: "/images/mold-types/two-shot-2k-bi-injection-molds.webp", alt: "Two-shot 2K injection molds with first-shot and second-shot components", fit: "contain" },
      { title: "Inspection Context", body: "Dimensional and visual checks are agreed for the completed two-shot part.", image: "/images/process/sample-validation-inspection-cmm.png", alt: "Operator reviewing a measurement screen beside inspection equipment" }
    ],
    inspectionTitle: "Two-Shot Interface Inspection",
    inspectionIntro: "Inspection should address the interface between the shots as well as the finished-part drawing and function.",
    inspectionPoints: ["First-shot and second-shot alignment", "Material or color boundary and flash", "Critical finished-part dimensions", "Agreed appearance, assembly and functional checks"],
    quoteInputs: ["Finished-part and shot-specific data", "Proposed material grades and colors", "First-shot and second-shot boundary", "Expected tooling or machine arrangement", "Inspection and production requirements"],
    related: [
      { label: "Two-Shot / 2K Molds", href: "/injection-molds/two-shot-2k-molds" },
      { label: "Plastic Injection Molding", href: "/plastic-injection-molding" },
      { label: "Production Options", href: "/plastic-injection-molding/production-options" },
      { label: "Overmolding", href: "/plastic-injection-molding/overmolding" }
    ],
    faqs: [
      { question: "How is two-shot molding different from overmolding?", answer: "Two-shot molding coordinates both shots in a dedicated tool and verified machine sequence. Overmolding commonly loads a separately prepared substrate for a later molding step." },
      { question: "What material information is required?", answer: "Provide the exact proposed grades, colors, supplier data and the required relationship at the material interface." },
      { question: "Why must tooling and product design be reviewed together?", answer: "The first-shot retention, second-shot coverage, transfer or rotation concept, shutoffs and finished-part geometry all depend on one coordinated sequence." },
      { question: "How is the material interface inspected?", answer: "Checks may cover shot alignment, flash, transition appearance, critical dimensions and project-specific bonding or functional requirements." }
    ],
    ctaLabel: "Discuss a Two-Shot Molding Project"
  },
  {
    slug: "transparent-parts",
    navLabel: "Transparent Part Molding",
    eyebrow: "TRANSPARENT PART MOLDING",
    h1: "Transparent Plastic Part Injection Molding",
    seoTitle: "Transparent Plastic Injection Molding | Arktech",
    metaDescription: "Transparent plastic injection molding with review of the confirmed resin grade, gate location, visible surfaces, handling and agreed visual and dimensional requirements.",
    intro: "Transparent molded parts make flow, gate, surface and handling conditions more visible. The exact resin grade and acceptance criteria should be confirmed before tooling and production decisions are released.",
    heroImage: "/images/case-studies/two-shot-light-cover.webp",
    heroAlt: "Transparent molded light-cover component displayed with its injection molds",
    heroFit: "contain",
    requirementsTitle: "Define the Transparency Requirement",
    requirementsIntro: "A decorative clear cover and a functionally transparent component can require different review criteria.",
    requirements: [
      { title: "Confirmed Resin Grade", body: "Provide the exact material and supplier data rather than only a generic transparent-resin family." },
      { title: "Visible Areas", body: "Mark appearance-critical zones, allowed gate areas and surfaces protected from handling marks." },
      { title: "Product Function", body: "Describe the required visual, light-transmission or protective function without assuming optical-grade performance." },
      { title: "Acceptance Reference", body: "Use drawings, approved samples or agreed viewing conditions to define the visual requirement." }
    ],
    considerationsTitle: "Tooling, Molding & Handling Considerations",
    considerationsIntro: "Clear-part quality depends on the selected material, tool surface, flow path, process and post-molding handling.",
    considerations: [
      { title: "Gate & Flow Path", body: "Gate vestige, weld lines and flow features are reviewed against visible areas." },
      { title: "Tool Surface", body: "Polish and surface condition should follow the specified visible and functional zones." },
      { title: "Material Preparation", body: "Handling and processing requirements are reviewed for the confirmed grade." },
      { title: "Part Release", body: "Ejection and handling are planned to limit marks on agreed appearance-critical areas." },
      { title: "Protection After Molding", body: "Packaging and assembly requirements should protect the actual surface and edge condition." }
    ],
    evidenceTitle: "Transparent Part & Production Evidence",
    evidenceIntro: "The project visual shows a real transparent molded component with its tooling. Supporting production and inspection images provide context rather than a claim of optical performance.",
    evidence: [
      { title: "Transparent Molded Component", body: "A transparent light-cover component shown with first-shot and second-shot tooling.", image: "/images/case-studies/two-shot-light-cover.webp", alt: "Transparent molded light-cover component with injection molds", fit: "contain" },
      { title: "Molding Production", body: "Tooling and machine setup are reviewed around the selected material and part requirements.", image: "/images/capabilities/plastic-injection-molding-production-video-frame.webp", alt: "Clear molded parts beside an automated injection molding cell" },
      { title: "Inspection Context", body: "Visual and dimensional criteria should be agreed for the actual part and viewing conditions.", image: "/images/process/sample-validation-inspection-cmm.png", alt: "Operator reviewing a measurement screen beside inspection equipment" }
    ],
    inspectionTitle: "Visual & Dimensional Acceptance",
    inspectionIntro: "No universal zero-defect promise applies. Inspection is agreed around the part drawing, visible zones, reference samples and functional needs.",
    inspectionPoints: ["Visible gate and flow-related features", "Surface marks, contamination and handling condition", "Critical dimensions and assembly interfaces", "Agreed viewing, lighting and packaging requirements"],
    quoteInputs: ["3D data and dimensioned drawing", "Exact resin grade or performance requirement", "Visible and appearance-critical zones", "Gate-area and surface requirements", "Inspection, packaging and handling expectations"],
    related: [
      { label: "Transparent Plastic Molding Guide", href: "/resources/injection-molding/transparent-plastic-molding" },
      { label: "Plastic Injection Molding", href: "/plastic-injection-molding" },
      { label: "Production Options", href: "/plastic-injection-molding/production-options" },
      { label: "High-Gloss Injection Molds", href: "/injection-molds/high-gloss-injection-molds" }
    ],
    faqs: [
      { question: "Why is the exact material grade important for transparent parts?", answer: "Grades can differ in processing, appearance and functional behavior. The proposed grade and supplier data are needed for a useful tooling and molding review." },
      { question: "How should visible gate areas be specified?", answer: "Mark allowed gate zones and appearance-critical surfaces on the drawing so gate location and vestige can be reviewed before tooling release." },
      { question: "What visual acceptance references are useful?", answer: "Approved samples, drawings, defined visible zones and agreed lighting or viewing conditions give the project team a clearer basis for review." },
      { question: "How are transparent parts protected after molding?", answer: "Handling, assembly and packaging requirements are planned around the agreed surface and edge condition for the actual project." }
    ],
    ctaLabel: "Request a Transparent Part Molding Quote"
  },
  {
    slug: "engineering-plastics",
    navLabel: "Engineering Plastics Molding",
    eyebrow: "ENGINEERING PLASTICS",
    h1: "Engineering Plastics Injection Molding",
    seoTitle: "Engineering Plastics Injection Molding | Arktech",
    metaDescription: "Engineering plastics injection molding planned around the exact confirmed resin grade, part function, tooling, dimensions, assembly and inspection requirements.",
    intro: "Engineering-plastic parts should be planned around the exact confirmed resin grade and application requirements. Material family names alone do not establish processing, performance or compliance.",
    heroImage: "/images/material-capabilities/engineering-plastic-parts-abs-pc-pa-pom.webp",
    heroAlt: "Assorted molded housings, brackets, gears and functional plastic components",
    requirementsTitle: "Start with the Confirmed Material & Part Requirement",
    requirementsIntro: "This page focuses on producing parts in a specified engineering material; the Material Selection Guide supports earlier comparison and selection.",
    requirements: [
      { title: "Exact Resin Grade", body: "Provide the supplier, grade and technical data sheet when a material has been specified." },
      { title: "Product Function", body: "Identify loads, interfaces, environment and other requirements that affect part and tooling decisions." },
      { title: "Critical Geometry", body: "Mark dimensions, wall transitions, ribs, bosses, fits and assembly datums that require review." },
      { title: "Appearance & Assembly", body: "Define visible surfaces, texture, color and mating-part requirements for the finished component." }
    ],
    considerationsTitle: "Material-Specific Molding Review",
    considerationsIntro: "Requirements depend on the selected grade and application. No unsupported material performance or certification is inferred from the image or material family.",
    considerations: [
      { title: "Material Data", body: "Supplier information supports review of shrinkage, processing and part-design considerations for the proposed grade." },
      { title: "Tooling Strategy", body: "Gate, venting, cooling, ejection and wear considerations are reviewed around the actual part and material." },
      { title: "Dimensional Needs", body: "Tolerances and datums are assessed against geometry, shrinkage, assembly and the agreed inspection method." },
      { title: "Surface Requirement", body: "Appearance, texture and visible defects are defined using project-specific criteria." },
      { title: "Production Planning", body: "Material supply, conditioning, inspection and repeat-demand needs are aligned with the selected production route." }
    ],
    evidenceTitle: "Engineering & Specialty Plastic Parts",
    evidenceIntro: "The part image shows varied molded geometries. It does not identify each resin grade; material labels are used only when the project record confirms them.",
    evidence: [
      { title: "Molded Functional Parts", body: "Assorted housings, gears, brackets and other molded component geometries.", image: "/images/material-capabilities/engineering-plastic-parts-abs-pc-pa-pom.webp", alt: "Assorted molded housings brackets gears and functional plastic components" },
      { title: "Production Context", body: "Machine and tooling selection are reviewed for the confirmed material and part requirements.", image: "/images/capabilities/plastic-injection-molding-production-video-frame.webp", alt: "Clear molded parts beside an automated injection molding cell" },
      { title: "Inspection Context", body: "Critical dimensions and functional interfaces are checked to the agreed project scope.", image: "/images/process/sample-validation-inspection-cmm.png", alt: "Operator reviewing a measurement screen beside inspection equipment" }
    ],
    inspectionTitle: "Inspection & Production Planning",
    inspectionIntro: "Inspection and production planning should reflect the exact grade, part geometry, assembly interfaces and intended supply stage.",
    inspectionPoints: ["Critical drawing dimensions and datums", "Appearance and molded condition", "Assembly or fit requirements", "Agreed batch and recurring-production checks"],
    quoteInputs: ["Part files and dimensioned drawing", "Exact resin grade and TDS", "Functional and environmental requirements", "Appearance and assembly criteria", "Expected demand and inspection scope"],
    related: [
      { label: "Material Selection Guide", href: "/resources/material-selection-guide" },
      { label: "Plastic Injection Molding", href: "/plastic-injection-molding" },
      { label: "Production Options", href: "/plastic-injection-molding/production-options" },
      { label: "Injection Molding Engineering", href: "/injection-molding-engineering" }
    ],
    faqs: [
      { question: "Do you need the exact resin grade or TDS?", answer: "Yes. The supplier, exact grade and technical data help the team review processing, tooling, dimensions and the intended application without relying on generic material assumptions." },
      { question: "What critical dimensions and functional requirements should be shared?", answer: "Provide drawing datums, tolerances, mating interfaces, loads and any functional checks that affect the molded part and assembly." },
      { question: "Can customer-specified materials be reviewed?", answer: "Yes. A customer-specified grade can be reviewed against the part, tooling and proposed production requirements, subject to material availability and project confirmation." },
      { question: "How are inspection and production requirements planned?", answer: "The scope is agreed around the drawing, material, project stage, critical characteristics, assembly and expected batch or repeat demand." }
    ],
    ctaLabel: "Request an Engineering Plastics Molding Quote"
  }
];

export const injectionMoldingProcessSlugs = injectionMoldingProcessPages.map((page) => page.slug);

export const injectionMoldingProcessPageMap = Object.fromEntries(injectionMoldingProcessPages.map((page) => [page.slug, page])) as Record<string, InjectionMoldingProcessPageData>;
