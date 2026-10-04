export type IndustryItem = readonly [title: string, body: string];
export type IndustryLinkItem = { title: string; body: string; href: string };
export type IndustryMoldType = { title: string; body: string; href?: string };
export type IndustryMaterialGroup = { title: string; body: string; items: string[] };
export type IndustryProjectExample = { title: string; application: string; focus: string; support: string };
export type IndustryFaq = readonly [question: string, answer: string];

export type IndustryLandingPageData = {
  slug: string;
  navTitle: string;
  eyebrow: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroCopy: string;
  heroImage: string;
  heroAlt: string;
  applicationImage: string;
  applicationAlt: string;
  applicationsEyebrow?: string;
  applicationsHeading: string;
  applicationsIntro: string;
  applications: IndustryItem[];
  engineeringHeading: string;
  engineeringIntro: string;
  engineeringConsiderations: IndustryItem[];
  capabilityIntro: string;
  capabilitiesHeading?: string;
  capabilities: IndustryLinkItem[];
  extendedManufacturing?: string[];
  lifecycleIntro: string;
  lifecycleHeading?: string;
  lifecycle: IndustryItem[];
  materialIntro: string;
  materialsHeading?: string;
  materials: IndustryMaterialGroup[];
  qualityIntro: string;
  qualityHeading?: string;
  qualityItems: IndustryItem[];
  moldTypesIntro: string;
  moldTypes: IndustryMoldType[];
  examplesIntro: string;
  examplesHeading?: string;
  examples: IndustryProjectExample[];
  resources: IndustryLinkItem[];
  relatedCapabilities: IndustryLinkItem[];
  faqs: IndustryFaq[];
  ctaEyebrow: string;
  ctaHeading: string;
  ctaCopy: string;
};

const related = (industry: string): IndustryLinkItem[] => [
  { title: "Injection Mold Manufacturing", body: `Tooling development for ${industry} programs.`, href: "/services/injection-mold-manufacturing" },
  { title: "Plastic Injection Molding", body: `Molded-part supply from samples to repeat production.`, href: "/services/plastic-injection-molding" },
  { title: "DFM Engineering", body: `Resolve geometry and tooling risks before steel release.`, href: "/injection-molding-engineering" },
  { title: "Mold Trial & Validation", body: "Review samples, process conditions and improvement actions before release.", href: "/injection-molds/mold-trial-validation" },
  { title: "Quality & Documentation", body: "Connect inspection evidence with tooling approval and export delivery.", href: "/company/quality-documentation" }
];

const lifecycle = (noun: string): IndustryItem[] => [
  ["CAD & DFM Review", `Review ${noun} geometry, interfaces, resin targets and production requirements.`],
  ["Prototype / Engineering Samples", "Build early parts or molded samples for fit, function and design learning."],
  ["Production Tooling", "Release mold design and manufacture tooling around approved project requirements."],
  ["Mold Trial & Validation", "Establish a molding window, inspect samples and manage engineering corrections."],
  ["Injection Production", "Run approved process conditions for low-volume or repeat molded-part supply."],
  ["Secondary Operations & Delivery", "Complete required finishing, assembly, packaging and shipment preparation."]
];

const mold = {
  precision: { title: "Precision Injection Molds", body: "Controlled tooling for repeatable dimensions, alignment features and stable assembly interfaces.", href: "/injection-molds#precision-injection-molds" },
  complex: { title: "Complex Injection Molds", body: "Tooling with coordinated sliders, lifters, shutoffs or other geometry-driven mold actions.", href: "/injection-molds#complex-injection-molds" },
  multi: { title: "Multi-Cavity Injection Molds", body: "Balanced multi-cavity tooling for repeat production of consistent components.", href: "/injection-molds/multi-cavity-molds" },
  hot: { title: "Hot Runner Molds", body: "Runner-system strategies for production programs where material, gate and volume support the approach.", href: "/injection-molds/hot-runner-molds" },
  insert: { title: "Insert Molding Tools", body: "Tooling for molded components with integrated metal or functional inserts.", href: "/injection-molds/insert-molding-tools" },
  over: { title: "Overmolding Tools", body: "Tooling for integrated soft-touch, sealing or multi-material product features.", href: "/injection-molds/overmolding-tools" },
  twoK: { title: "Two-Shot / 2K Molds", body: "Multi-material tooling for integrated interfaces, seals or product differentiation.", href: "/injection-molds/two-shot-2k-molds" },
  large: { title: "Large Injection Molds", body: "Large-format tooling for structural housings, covers and visible panels.", href: "/injection-molds/large-injection-molds" }
} satisfies Record<string, IndustryMoldType>;

const baseResources: IndustryLinkItem[] = [
  { title: "DFM Guide", body: "Prepare molded-part geometry for a practical tooling review.", href: "/resources/dfm-guide" },
  { title: "Material Selection Guide", body: "Compare resin families against product and manufacturing requirements.", href: "/resources/material-selection-guide" },
  { title: "Mold Design Guidelines", body: "Understand mold structure, actions, runner choices and export-tool details.", href: "/resources/mold-design-guidelines" },
  { title: "Wall Thickness Guidelines", body: "Review walls, transitions and local mass before tooling release.", href: "/resources/injection-molding/wall-thickness-guidelines" }
];

export const industryLandingPages: IndustryLandingPageData[] = [
  {
    slug: "robotics",
    navTitle: "Robotics",
    eyebrow: "ROBOTICS & AUTOMATION",
    seoTitle: "Robotics Injection Molding & Injection Molds | Arktech Mold",
    metaDescription: "Injection molds and plastic injection molding for robotics products, including robot housings, sensor enclosures, AMR / AGV covers and functional plastic components. DFM, tooling, validation and production support.",
    h1: "Robotics Injection Molding & Tooling",
    heroCopy: "Arktech supports robotics and automation product teams with DFM engineering, injection mold manufacturing and plastic injection molding for robot housings, sensor enclosures, controller components, AMR / AGV applications and functional plastic parts.",
    heroImage: "/images/industries/robotics-automation.png",
    heroAlt: "Industrial robot handling molded robotics components in an automated production environment",
    applicationImage: "/images/industries/robotics-injection-mold-components.webp",
    applicationAlt: "Robotics housings sensor modules and precision components for automation applications",
    applicationsEyebrow: "ROBOTICS APPLICATIONS",
    applicationsHeading: "Plastic Components for Robotics & Automation Products",
    applicationsIntro: "Tooling and molding programs are developed around the mechanical, sensing and assembly functions of each robotics product.",
    applications: [
      ["Robot Controller Housings", "Protective molded housings with PCB mounts, connector openings and service access."],
      ["Sensor & Camera Housings", "Compact enclosures with controlled optical, mounting and sealing interfaces."],
      ["AMR / AGV Covers", "Structural and cosmetic covers for autonomous mobile robot platforms."],
      ["End-Effector Covers", "Lightweight guards and housings around grippers, drives and tooling interfaces."],
      ["Joint & Motor Covers", "Molded covers designed around motion, cable routing and repeated assembly."],
      ["Electronics Enclosures", "Functional enclosures for controls, power electronics and connected modules."]
    ],
    engineeringHeading: "Engineering Considerations for Robotics Plastic Components",
    engineeringIntro: "Robotics plastic parts often combine sensor alignment, cable routing, threaded inserts, repeated motion and tight assembly interfaces. DFM review should consider these requirements together with moldability, material behavior and tooling feasibility.",
    engineeringConsiderations: [
      ["Dimensional Stability", "Control geometry that affects axes, mounts and assembly references."],
      ["Sensor & Camera Alignment", "Protect optical and sensing interfaces from avoidable tooling variation."],
      ["Tolerance Stack-Up", "Review mating components as a complete assembly rather than isolated parts."],
      ["Threaded Inserts & Fasteners", "Plan insert location, pull-out needs and service cycles before mold release."],
      ["Ribs, Bosses & Snap-Fits", "Balance stiffness and assembly function against sink, stress and release."],
      ["Cable Routing", "Coordinate channels, pass-throughs and connector access with tooling direction."],
      ["Assembly Interfaces", "Validate fits, gaps and datum relationships across plastic and metal parts."],
      ["Repeated Motion & Wear", "Consider contact zones and material behavior around moving mechanisms."]
    ],
    capabilityIntro: "Four connected capabilities support robotics programs from part review through validated molded-part supply.",
    capabilitiesHeading: "Core Manufacturing Capabilities for Robotics Products",
    capabilities: [
      { title: "Injection Mold Manufacturing", body: "Production molds developed around robotics housings, side actions, inserts and the receiving molding-machine requirements.", href: "/services/injection-mold-manufacturing" },
      { title: "Plastic Injection Molding", body: "Engineering samples, low-volume builds and repeat supply for approved robotics components and enclosures.", href: "/services/plastic-injection-molding" },
      { title: "DFM Engineering", body: "Review sensor alignment, cable routes, fastening features and mold release before committing to steel.", href: "/injection-molding-engineering" },
      { title: "Mold Trial & Validation", body: "Trial samples checked around critical interfaces, assembly fit and agreed dimensional requirements.", href: "/injection-molds/mold-trial-validation" }
    ],
    extendedManufacturing: ["CNC Machining", "Sheet Metal", "Rapid Prototyping", "Assembly"],
    lifecycleIntro: "A staged engineering path helps robotics teams move from CAD data to approved tooling and repeat production.",
    lifecycleHeading: "From Robotics Prototype to Production",
    lifecycle: lifecycle("robotics component"),
    materialIntro: "Material selection is based on housing, functional and flexible-feature requirements rather than a single default resin.",
    materialsHeading: "Materials for Robotics Plastic Components",
    materials: [
      { title: "Housings & Covers", body: "Materials for visible and protective enclosures.", items: ["PC/ABS", "ABS", "PC"] },
      { title: "Functional Components", body: "Materials for stable, wear-related or reinforced features.", items: ["PA / PA-GF", "PBT", "POM"] },
      { title: "Flexible Interfaces", body: "Elastomer families for grips, protection or compliant interfaces.", items: ["TPU", "TPE"] }
    ],
    qualityIntro: "Validation focuses on the interfaces that determine robotics assembly, sensing and repeatable operation.",
    qualityHeading: "Quality & Validation for Robotics Components",
    qualityItems: [
      ["Critical Dimension Verification", "Measure agreed dimensions tied to mounting, motion or assembly."],
      ["Sensor / Mounting Interfaces", "Review alignment and locating features against drawings and mating parts."],
      ["Insert Position Verification", "Confirm molded-in or installed insert location and orientation."],
      ["Assembly & Fit", "Check representative mating parts, gaps and fastening conditions."],
      ["Cosmetic Inspection", "Review visible surfaces, texture and allowable molding marks."],
      ["Sample Approval", "Document trial status and agreed correction actions before release."]
    ],
    moldTypesIntro: "Robotics programs can require precision, side actions, inserts or production-focused runner and cavitation strategies.",
    moldTypes: [
      { ...mold.precision, body: "Controlled tooling for sensor, mounting and motion-related interfaces in robotics assemblies." },
      { ...mold.complex, body: "Sliders, lifters and coordinated actions for robotics housings with difficult release geometry." },
      { ...mold.insert, body: "Tools for integrating threaded or functional inserts into robot and automation components." },
      { ...mold.multi, body: "Balanced cavitation for repeat production of smaller robotics covers or functional parts." },
      { ...mold.hot, body: "Runner strategies considered for robotics programs with suitable resin, gate and volume needs." }
    ],
    examplesIntro: "Representative project scopes show how tooling decisions connect to typical robotics product needs; they are not customer case-study claims.",
    examplesHeading: "Typical Robotics Tooling Applications",
    examples: [
      { title: "Robot Controller Housing Tooling", application: "Controller enclosure", focus: "PCB mounts, connector access and cosmetic surfaces", support: "DFM, mold design, trial and molded samples" },
      { title: "Sensor Housing Mold & Production", application: "Camera or sensor module", focus: "Optical alignment, sealing interface and insert position", support: "Precision tooling, inspection and repeat molding" },
      { title: "AMR / AGV Cover Tooling", application: "Mobile robot exterior cover", focus: "Large geometry, assembly datums and visible finish", support: "Tooling, trial corrections and production support" },
      { title: "End-Effector Housing", application: "Gripper or actuator cover", focus: "Cable routing, fasteners and motion clearance", support: "DFM review, tooling and sample validation" }
    ],
    resources: [baseResources[0], baseResources[1], { title: "Slider vs Lifter", body: "Compare tooling actions for robotics undercuts and side features.", href: "/resources/injection-molds/slider-vs-lifter" }, baseResources[2]],
    relatedCapabilities: related("robotics"),
    faqs: [
      ["What plastic parts are commonly injection molded for robotics products?", "Programs can include controller housings, sensor and camera enclosures, AMR or AGV covers, joint covers, end-effector housings and other functional molded parts."],
      ["What materials are commonly used for robotics housings and components?", "Common candidates include ABS, PC/ABS and PC, while PA, PBT, POM, TPU or TPE may suit specific functional needs. Final selection depends on the application."],
      ["Can Arktech support threaded inserts and complex undercuts for robotics parts?", "Yes. Insert molding, installed inserts, sliders, lifters and other release strategies can be reviewed around geometry, loading and production needs."],
      ["Can Arktech manufacture AMR / AGV plastic housings?", "AMR and AGV cover programs can be reviewed for part size, assembly datums, finish, molding equipment and repeat-production requirements."],
      ["Can you support prototype and low-volume robotics production?", "Arktech can support engineering samples, low-volume builds and repeat injection molding after tooling and sample approval."],
      ["How are sensor and assembly interfaces inspected?", "The inspection plan can identify critical locating and mounting dimensions, then compare molded samples with the agreed drawing and representative mating parts."],
      ["Can you build tooling for our existing injection molding machine?", "Tooling can be reviewed against the receiving machine, controller, connection, mold-base and plant standards when those requirements are supplied before design approval."]
    ],
    ctaEyebrow: "START YOUR ROBOTICS PROJECT",
    ctaHeading: "Developing a Robotics Product?",
    ctaCopy: "Send your CAD files, drawings, material requirements, expected production volume and key assembly interfaces for DFM, tooling and molding review."
  },
  {
    slug: "medical-devices",
    navTitle: "Medical & Healthcare Devices",
    eyebrow: "MEDICAL & HEALTHCARE DEVICES",
    seoTitle: "Medical Device Injection Molding & Injection Molds | Arktech Mold",
    metaDescription: "Injection molds and plastic injection molding for medical and diagnostic device housings, precision components and assembly interfaces, with DFM, tooling validation and dimensional inspection support.",
    h1: "Medical Device Molding & Tooling",
    heroCopy: "Arktech supports medical and diagnostic product teams with DFM review, injection mold manufacturing, sample validation and plastic injection molding for precision housings, covers and functional components.",
    heroImage: "/images/industries/medial-industry.webp",
    heroAlt: "Medical and diagnostic equipment with molded plastic housings and functional components",
    applicationImage: "/images/industries/medical-healthcare-device-parts.webp",
    applicationAlt: "Medical device housings transparent components and diagnostic equipment parts",
    applicationsHeading: "Typical Medical and Diagnostic Device Components",
    applicationsIntro: "Support is focused on moldable product components and documented engineering review without implying device certification or regulatory approval.",
    applications: [
      ["Diagnostic Housings", "Molded enclosures for displays, controls and internal electronics."],
      ["Medical Equipment Enclosures", "Protective covers and panels for equipment assemblies."],
      ["Cartridge & Device Housings", "Controlled interfaces for replaceable or assembled device modules."],
      ["Precision Molded Covers", "Covers with repeatable mounting, gap and fastener conditions."],
      ["Transparent Components", "Clear molded parts where geometry, polish and visual quality require early review."],
      ["Assembly Interfaces", "Mating features, inserts, snaps and sealing surfaces used in final assembly."]
    ],
    engineeringHeading: "Engineering Considerations for Medical Device Components",
    engineeringIntro: "Part geometry, material intent and inspection requirements are reviewed around the device assembly and intended manufacturing process.",
    engineeringConsiderations: [
      ["Critical Dimensions", "Identify drawing features that control assembly, movement or device interfaces."],
      ["Tight Assembly Interfaces", "Review fits, gaps, snaps and fastening geometry with mating parts."],
      ["Material Selection", "Align resin choice with product, molding and documented customer requirements."],
      ["Transparent & Cosmetic Parts", "Plan gates, ejection and surface requirements around visible components."],
      ["Insert Features", "Coordinate molded-in or installed inserts with loading and inspection needs."],
      ["Sealing Surfaces", "Protect flatness and contact geometry where a seal or gasket interface exists."],
      ["Traceable Inspection", "Define which dimensions and sample stages require recorded results."],
      ["Sample Validation", "Review molded samples and engineering actions before production release."]
    ],
    capabilityIntro: "Medical-related component programs connect part review, tooling, molding and sample evidence within an agreed project scope.",
    capabilities: [
      { title: "Injection Mold Manufacturing", body: "Precision tooling built around medical-equipment housings, transparent features and critical assembly geometry.", href: "/services/injection-mold-manufacturing" },
      { title: "Plastic Injection Molding", body: "Controlled sample and production molding for validated diagnostic-device components.", href: "/services/plastic-injection-molding" },
      { title: "DFM Engineering", body: "Early review of critical dimensions, sealing contact, inserts and visible surfaces without inferring device approval.", href: "/injection-molding-engineering" },
      { title: "Mold Trial & Validation", body: "Documented sample review and correction actions tied to the agreed drawing and inspection scope.", href: "/injection-molds/mold-trial-validation" }
    ],
    lifecycleIntro: "A controlled development path keeps geometry, tooling actions and sample evidence connected from design review to production.",
    lifecycle: lifecycle("medical-device component"),
    materialIntro: "Resin selection is reviewed against the customer's specified performance, appearance and manufacturing requirements; Arktech does not infer regulatory suitability.",
    materials: [
      { title: "Equipment Housings", body: "Common housing families selected around appearance and structure.", items: ["ABS", "PC/ABS", "PC"] },
      { title: "Functional Components", body: "Engineering resins considered for stable or wear-related features.", items: ["PBT", "PA", "POM"] },
      { title: "Clear / Flexible Features", body: "Material families reviewed only where the component requires them.", items: ["Transparent PC", "TPU", "TPE"] }
    ],
    qualityIntro: "Inspection planning focuses on agreed product dimensions, interfaces and sample-stage evidence rather than unsupported regulatory claims.",
    qualityItems: [
      ["Critical Dimension Verification", "Record agreed product dimensions from the customer drawing."],
      ["Assembly Interface Inspection", "Check locating, fastening and mating features."],
      ["Transparent / Cosmetic Review", "Inspect visible surfaces for agreed appearance requirements."],
      ["Insert Position Verification", "Confirm insert location, orientation and surrounding molded geometry."],
      ["Sample Comparison", "Compare trial parts against drawings, references and agreed criteria."],
      ["Dimensional Report", "Prepare measurement results for defined critical dimensions when required."]
    ],
    moldTypesIntro: "Medical-device components may need precision tooling, repeat cavitation or controlled insert and runner strategies.",
    moldTypes: [
      { ...mold.precision, body: "Tooling for diagnostic housings and components with controlled interfaces and dimensions." },
      { ...mold.multi, body: "Repeat-cavity tooling for suitable smaller medical-equipment components." },
      { ...mold.insert, body: "Tools that locate specified inserts within molded equipment housings or functional parts." },
      { ...mold.hot, body: "Runner systems assessed around material behavior, gate needs and documented production demand." },
      { ...mold.complex, body: "Mold actions for difficult housing geometry, side openings and release conditions." }
    ],
    examplesIntro: "These representative scopes illustrate typical medical-component engineering work and are not presented as certified customer programs.",
    examples: [
      { title: "Diagnostic Control Housing", application: "Equipment enclosure", focus: "Display opening, PCB mounts and assembly gaps", support: "DFM, tooling, samples and dimensional review" },
      { title: "Transparent Device Cover", application: "Visible protective component", focus: "Flow, gate, polish and cosmetic criteria", support: "Mold engineering, trial and appearance review" },
      { title: "Precision Cartridge Housing", application: "Replaceable device module", focus: "Critical fits, datum features and repeat molding", support: "Precision mold, inspection report and production support" }
    ],
    resources: [baseResources[0], baseResources[1], { title: "Engineering Plastics Guide", body: "Compare engineering-resin behavior without inferring medical suitability.", href: "/resources/injection-molding/engineering-plastics-guide" }, { title: "Quality & Documentation", body: "Review dimensional reports, trial evidence and tooling documentation.", href: "/company/quality-documentation" }],
    relatedCapabilities: related("medical-device component"),
    faqs: [
      ["What medical-device components can Arktech support?", "Support can include diagnostic equipment housings, covers, cartridge housings, transparent components and precision assembly interfaces."],
      ["Does Arktech claim medical-device certification or regulatory approval?", "No. This page describes manufacturing support only. Product compliance, regulatory approval and material suitability remain project-specific customer responsibilities."],
      ["Can critical dimensions be reported?", "Yes. Agreed critical dimensions can be measured and recorded in a dimensional inspection report based on the drawing and inspection scope."],
      ["Can you mold transparent medical components?", "Transparent molding can be reviewed when the resin, geometry, gate strategy, polish and visual criteria are defined for the project."],
      ["How are sample approvals managed?", "Trial samples are reviewed against agreed dimensional, assembly and appearance requirements, with correction actions managed before release."],
      ["What information is needed for a tooling quote?", "Provide CAD, drawings, material specification, volume, appearance requirements, critical dimensions and any inspection or documentation expectations."]
    ],
    ctaEyebrow: "START YOUR MEDICAL COMPONENT PROJECT",
    ctaHeading: "Developing a Medical or Diagnostic Device Component?",
    ctaCopy: "Share your part data and project requirements for a practical review of moldability, tooling, sample validation and production support."
  },
  {
    slug: "automotive-components",
    navTitle: "Automotive Components",
    eyebrow: "AUTOMOTIVE COMPONENTS",
    seoTitle: "Automotive Injection Molding & Injection Molds | Arktech Mold",
    metaDescription: "Injection molds and plastic injection molding for automotive interior, control and functional components. DFM, textured tooling, insert molding, sample validation and repeat production support.",
    h1: "Automotive Injection Molding & Tooling",
    heroCopy: "Arktech supports automotive product and component teams with DFM engineering, export tooling, mold trials and plastic injection molding for interior, control and functional plastic parts.",
    heroImage: "/images/industries/Automotive-Components.png",
    heroAlt: "Automotive interior controls display housing and functional molded plastic components",
    applicationImage: "/images/industries/automotive-ev-components.webp",
    applicationAlt: "Automotive molded housings connectors and functional production components",
    applicationsHeading: "Typical Automotive Plastic Component Applications",
    applicationsIntro: "Programs are reviewed around appearance, assembly, environment and repeat-production requirements.",
    applications: [
      ["Interior Trim", "Visible trim, bezels and covers with controlled gaps and texture."],
      ["Control Housings", "Enclosures for switches, displays and electronic control modules."],
      ["Switch & Button Components", "Molded interfaces designed around feel, movement and assembly."],
      ["Connector Housings", "Functional components with alignment, retention and terminal interfaces."],
      ["Brackets & Mounts", "Structural molded components for locating and fastening assemblies."],
      ["Ventilation & Console Parts", "Duct, vent and console components with visible and functional geometry."]
    ],
    engineeringHeading: "Engineering Considerations for Automotive Components",
    engineeringIntro: "Automotive molded parts often combine visible surfaces, clips, assembly datums and production-volume requirements in one geometry.",
    engineeringConsiderations: [
      ["Cosmetic Surfaces", "Define visible zones, gate limitations and acceptable witness marks."],
      ["Texture & Draft", "Coordinate draft with texture depth and release direction."],
      ["Snap-Fits & Clips", "Review strain, retention, root geometry and tool access."],
      ["Insert Features", "Plan inserts around loading, molding sequence and verification."],
      ["Heat Resistance", "Select materials around the documented operating environment."],
      ["Dimensional Stability", "Manage datums and long geometry that influence assembly fit."],
      ["Assembly Interfaces", "Evaluate mating panels, fasteners, connectors and gap conditions."],
      ["Multi-Cavity Production", "Assess balance and cavitation when demand supports repeat output."]
    ],
    capabilityIntro: "Automotive component programs combine product DFM, tooling, sample validation and repeat molding support.",
    capabilities: [
      { title: "Injection Mold Manufacturing", body: "Export tooling for automotive trim, controls, connectors and functional components with defined plant standards.", href: "/services/injection-mold-manufacturing" },
      { title: "Plastic Injection Molding", body: "Sample, bridge and repeat molding support for approved automotive plastic parts.", href: "/services/plastic-injection-molding" },
      { title: "DFM Engineering", body: "Coordinate texture, clips, inserts, assembly datums and repeat-production risks before mold release.", href: "/injection-molding-engineering" },
      { title: "Mold Trial & Validation", body: "Evaluate dimensional, assembly and visible-surface results before production approval.", href: "/injection-molds/mold-trial-validation" }
    ],
    lifecycleIntro: "Project stages connect appearance approval, tool build and production evidence without separating design decisions from manufacturing reality.",
    lifecycle: lifecycle("automotive component"),
    materialIntro: "Material families are evaluated against the documented application environment, appearance and mechanical needs.",
    materials: [
      { title: "Interior & Cosmetic Parts", body: "Resin families commonly considered for visible components.", items: ["PP", "ABS", "PC/ABS"] },
      { title: "Functional Components", body: "Engineering resins for stable or structural molded features.", items: ["PA", "PBT", "POM"] },
      { title: "Flexible / Reinforced Options", body: "Used only where the application and project specification support them.", items: ["TPE", "TPU", "Reinforced grades"] }
    ],
    qualityIntro: "Validation focuses on fit, appearance and production-critical dimensions defined for the component program.",
    qualityItems: [
      ["Datum & Interface Dimensions", "Check mounting and mating dimensions against the drawing."],
      ["Clip & Fastener Features", "Inspect retention geometry and assembly locations."],
      ["Texture / Cosmetic Review", "Compare visible surfaces with agreed appearance criteria."],
      ["Insert & Connector Position", "Verify functional interface location and orientation."],
      ["Assembly Trial", "Use available mating parts or fixtures to review practical fit."],
      ["Production Sample Approval", "Record trial status and correction actions before repeat supply."]
    ],
    moldTypesIntro: "Automotive applications may use large-format, multi-cavity, insert, multi-material or hot-runner tooling according to geometry and volume.",
    moldTypes: [
      { ...mold.large, body: "Large-format tooling for automotive panels, consoles and structural interior housings." },
      { ...mold.multi, body: "Cavity strategies for repeat automotive clips, controls and smaller functional parts." },
      { ...mold.insert, body: "Tooling that integrates specified metal features into automotive molded components." },
      { ...mold.over, body: "Overmolding for suitable grip, sealing or interface requirements in automotive products." },
      { ...mold.twoK, body: "Two-material tooling for integrated automotive controls or interface features." },
      { ...mold.hot, body: "Hot-runner concepts assessed for production demand, material and gate requirements." }
    ],
    examplesIntro: "Representative scopes illustrate common automotive tooling decisions without identifying confidential customer projects.",
    examples: [
      { title: "Interior Control Bezel", application: "Visible cabin interface", focus: "Texture, display opening and assembly gaps", support: "DFM, textured mold, trial and cosmetic review" },
      { title: "Connector Housing Tooling", application: "Electrical interface component", focus: "Terminal alignment, latches and dimensional stability", support: "Precision tooling, inspection and repeat molding" },
      { title: "Console / Vent Component", application: "Interior functional part", focus: "Long geometry, clips and visible surfaces", support: "Complex mold, sample validation and production" }
    ],
    resources: [{ title: "Draft Angle Guidelines", body: "Coordinate part release, depth and textured automotive surfaces.", href: "/resources/injection-molding/draft-angle-guidelines" }, baseResources[1], { title: "Hot Runner vs Cold Runner", body: "Compare runner strategies for repeat automotive production.", href: "/resources/injection-molds/hot-runner-vs-cold-runner" }, { title: "Multi-Cavity vs Family Mold", body: "Review cavitation options for related or repeat-use components.", href: "/resources/injection-molds/multi-cavity-vs-family-mold" }],
    relatedCapabilities: related("automotive component"),
    faqs: [
      ["Which automotive plastic components can Arktech support?", "Typical scopes include interior trim, control housings, switch components, connector housings, brackets, vent and console parts."],
      ["Can textured automotive parts be reviewed before tooling?", "Yes. Texture intent, draft, parting lines, gates, ejection and visible-surface requirements should be reviewed together before steel release."],
      ["Can you support insert or two-shot molding?", "Insert, overmolding and two-shot tooling can be evaluated when the component design and receiving production setup support the process."],
      ["How are automotive appearance parts validated?", "Validation can include trial sample review, agreed cosmetic zones, texture comparison, dimensional checks and assembly fit."],
      ["Do you support low-volume and repeat production?", "Programs can progress from samples or low-volume builds into repeat production after tooling and process approval."],
      ["What data should be included in an automotive RFQ?", "Send 3D and 2D data, resin and texture requirements, annual demand, appearance zones, critical dimensions and receiving-plant standards."]
    ],
    ctaEyebrow: "START YOUR AUTOMOTIVE COMPONENT PROJECT",
    ctaHeading: "Need Tooling for an Automotive Plastic Component?",
    ctaCopy: "Upload your CAD, drawings, material, texture and production requirements for DFM and tooling review."
  },
  {
    slug: "smart-home",
    navTitle: "Smart Home & IoT",
    eyebrow: "SMART HOME & IOT",
    seoTitle: "Smart Home & IoT Injection Molding & Tooling | Arktech Mold",
    metaDescription: "Injection molds and plastic injection molding for smart home and IoT device housings, sensors, hubs, locks, cameras and connected products. DFM, tooling and production support.",
    h1: "Smart Home & IoT Injection Molding",
    heroCopy: "Arktech supports connected-product teams with DFM, export injection molds, sample validation and plastic injection molding for hubs, sensors, smart locks, cameras and electronic device housings.",
    heroImage: "/images/industries/smart-device-housings.png",
    heroAlt: "Smart home cameras hubs sensors and connected device housings",
    applicationImage: "/images/industries/smart-iot-device-housings.jpg",
    applicationAlt: "Smart home product housings sensors hubs and connected controls",
    applicationsHeading: "Typical Smart Home and IoT Product Components",
    applicationsIntro: "Connected products combine cosmetic housings with electronics, sensors, connectors and assembly features that must be resolved before tooling.",
    applications: [
      ["Hub Housings", "Cosmetic enclosures with PCB mounts, ventilation and connector access."],
      ["Sensor Enclosures", "Compact housings with controlled openings and mounting geometry."],
      ["Smart Lock Components", "Covers, bezels and internal carriers for connected access products."],
      ["Router & Gateway Housings", "Larger enclosures with ventilation, antenna and assembly requirements."],
      ["Camera Housings", "Visible shells designed around optical alignment and cable interfaces."],
      ["Device Covers & Controls", "Buttons, panels and protective components for smart products."]
    ],
    engineeringHeading: "Engineering Considerations for Connected Devices",
    engineeringIntro: "Smart-device enclosures must protect electronics while maintaining appearance, connectivity, sensor function and efficient final assembly.",
    engineeringConsiderations: [
      ["Cosmetic Housing Surfaces", "Plan gates, parting lines and ejection away from key visible zones."],
      ["PCB & Electronic Interfaces", "Coordinate bosses, standoffs and clearances with board geometry."],
      ["Sensor Openings", "Protect alignment and aperture dimensions for sensing performance."],
      ["Connector & Cable Access", "Review ports, channels and strain-relief geometry for tooling release."],
      ["Snap-Fits", "Balance assembly retention with stress, repeated access and molding limits."],
      ["Insert Mounting", "Define insert load, position and installation or molding approach."],
      ["Heat & Ventilation", "Review airflow and local wall conditions around heat-generating electronics."],
      ["Assembly Fit", "Control gaps, flushness and mating relationships across enclosure parts."]
    ],
    capabilityIntro: "Smart-product programs benefit from connected DFM, tooling, molded samples and repeat-production support.",
    capabilities: [
      { title: "Injection Mold Manufacturing", body: "Tooling for connected-device enclosures with sensor openings, electronic interfaces and cosmetic surfaces.", href: "/services/injection-mold-manufacturing" },
      { title: "Plastic Injection Molding", body: "Molded samples and repeat supply for approved hubs, sensors, cameras and device covers.", href: "/services/plastic-injection-molding" },
      { title: "DFM Engineering", body: "Review PCB mounts, ports, vents, snap-fits and appearance zones before final mold design.", href: "/injection-molding-engineering" },
      { title: "Mold Trial & Validation", body: "Check sample fit, opening alignment and surface quality across connected-product assemblies.", href: "/injection-molds/mold-trial-validation" }
    ],
    lifecycleIntro: "The workflow keeps electronics interfaces and cosmetic requirements visible throughout tooling development and sample approval.",
    lifecycle: lifecycle("smart-home enclosure"),
    materialIntro: "Material choices are reviewed around enclosure appearance, impact, heat, dimensional and flexible-interface requirements.",
    materials: [
      { title: "Device Housings", body: "Common families for cosmetic connected-product enclosures.", items: ["ABS", "PC/ABS", "PC"] },
      { title: "Functional Parts", body: "Engineering families for internal carriers and interfaces.", items: ["PBT", "PA", "POM"] },
      { title: "Flexible Features", body: "Options for grips, seals or compliant interfaces where specified.", items: ["TPU", "TPE"] }
    ],
    qualityIntro: "Inspection focuses on visible housing quality and the electronic, sensor and assembly interfaces that make the device function.",
    qualityItems: [
      ["Housing Dimensions", "Verify agreed envelope, gap and mating dimensions."],
      ["PCB / Boss Location", "Check mounting points and internal clearance features."],
      ["Sensor & Port Openings", "Inspect alignment and edge conditions around apertures."],
      ["Insert / Fastener Position", "Confirm locations used in repeated product assembly."],
      ["Cosmetic Surface Review", "Review visible molding marks, texture and finish."],
      ["Device Assembly Fit", "Evaluate enclosure halves and available electronic or mating parts."]
    ],
    moldTypesIntro: "Connected-device parts frequently combine precision interfaces, side actions, inserts or multi-material features.",
    moldTypes: [
      { ...mold.precision, body: "Precision tools for smart-device sensor, PCB and connector interfaces." },
      { ...mold.complex, body: "Side actions and shutoffs for port openings and detailed connected-product housings." },
      { ...mold.insert, body: "Insert tools for threaded or functional attachment points in smart devices." },
      { ...mold.over, body: "Overmolding for selected grips, seals or compliant smart-product features." },
      { ...mold.multi, body: "Multi-cavity production for suitable smaller sensors, covers and controls." },
      { ...mold.hot, body: "Runner concepts for repeat housing production where material and gate needs align." }
    ],
    examplesIntro: "Representative scopes describe common smart-product work without implying named customer programs.",
    examples: [
      { title: "Smart Hub Housing", application: "Connected home gateway", focus: "PCB standoffs, vents and cosmetic enclosure gaps", support: "DFM, mold, samples and repeat production" },
      { title: "Sensor Enclosure Tooling", application: "Environmental or occupancy sensor", focus: "Aperture alignment, wall control and snap assembly", support: "Precision tooling and dimensional validation" },
      { title: "Camera Housing Program", application: "Connected indoor camera", focus: "Optical interface, cable route and visible finish", support: "Complex mold, cosmetic review and molded parts" }
    ],
    resources: [baseResources[0], baseResources[1], baseResources[3], { title: "Ribs & Bosses Design", body: "Design electronics mounts and housing reinforcement for molding.", href: "/resources/injection-molding/ribs-bosses-design" }],
    relatedCapabilities: related("smart-home and IoT device"),
    faqs: [
      ["What smart-home components can Arktech support?", "Typical scopes include hub, sensor, lock, router, gateway and camera housings plus buttons, bezels and internal functional parts."],
      ["Can DFM include PCB and connector interfaces?", "Yes. CAD review can consider standoffs, bosses, ports, cable routes and accessible assembly information before tooling release."],
      ["Can smart-device housings include overmolded features?", "Overmolding or two-shot concepts can be reviewed for grips, seals or integrated interfaces when the design and material combination support them."],
      ["How are cosmetic enclosure surfaces handled?", "Visible zones, parting lines, gates, ejection, texture and sample appearance criteria are defined before approval."],
      ["Can you support sample builds before repeat production?", "Yes. Programs can include mold trials, engineering samples, low-volume builds and later repeat production."],
      ["What should be provided for an IoT housing review?", "Share CAD, drawings, resin, finish, annual volume, PCB or mating geometry, critical openings and assembly requirements."]
    ],
    ctaEyebrow: "START YOUR SMART PRODUCT PROJECT",
    ctaHeading: "Developing a Smart Home or IoT Device?",
    ctaCopy: "Send your enclosure CAD, electronic interface data and production requirements for DFM and tooling review."
  },
  {
    slug: "new-energy",
    navTitle: "Energy Storage & EV Charging",
    eyebrow: "ENERGY STORAGE & EV CHARGING",
    seoTitle: "EV Charging & Energy Storage Injection Molding | Arktech Mold",
    metaDescription: "Injection molds and plastic injection molding for EV charging and energy products, including charging housings, connectors, control enclosures and functional molded components.",
    h1: "EV Charging Injection Molding",
    heroCopy: "Arktech supports EV charging and energy-product teams with DFM engineering, injection mold manufacturing, validation and molding for housings, connectors, power-electronics covers and functional components.",
    heroImage: "/images/industries/autimotive-ev.webp",
    heroAlt: "Electric vehicle charging stations and molded EV charging product housings",
    applicationImage: "/images/industries/automotive-ev-components.jpg",
    applicationAlt: "EV charging housings connector components and power electronics enclosures",
    applicationsHeading: "Typical EV Charging and Energy Product Components",
    applicationsIntro: "Tooling and molding are developed around the product's electrical interfaces, assembly geometry and documented environmental requirements.",
    applications: [
      ["Charging Housings", "Structural and visible enclosures for charging equipment."],
      ["Connector Components", "Molded shells, carriers and protective interfaces around connectors."],
      ["Control Housings", "Enclosures for controls, displays and connected electronics."],
      ["Power Electronics Covers", "Protective covers designed around heat, service and fasteners."],
      ["Protective Enclosures", "Molded barriers and housings for energy-related assemblies."],
      ["Functional Molded Components", "Mounts, carriers and internal components with defined interfaces."]
    ],
    engineeringHeading: "Engineering Considerations for EV and Energy Products",
    engineeringIntro: "These components often combine connector alignment, heat, inserts, structural features and environmental interfaces in large or complex molded geometry.",
    engineeringConsiderations: [
      ["Electrical Interfaces", "Coordinate openings, barriers and connector geometry with the product design."],
      ["Heat Considerations", "Review ventilation and material targets around heat-generating assemblies."],
      ["Dimensional Stability", "Control datums and large geometry that influence sealing and assembly."],
      ["Connector Alignment", "Protect locating and terminal-interface dimensions through tooling and inspection."],
      ["Sealing Features", "Review gasket grooves and contact surfaces for moldability and verification."],
      ["Insert Features", "Define inserts, busbar interfaces or fasteners around loads and process sequence."],
      ["Structural Strength", "Use ribs and wall transitions without creating avoidable sink or stress."],
      ["Assembly & Service Access", "Plan fastening, cable and maintenance access into the molded geometry."]
    ],
    capabilityIntro: "EV and energy-product work connects DFM, production tooling, sample validation and molding without implying product electrical certification.",
    capabilities: [
      { title: "Injection Mold Manufacturing", body: "Tooling for charging housings, connector parts and power-product enclosures with defined receiving-plant interfaces.", href: "/services/injection-mold-manufacturing" },
      { title: "Plastic Injection Molding", body: "Sample and repeat molding for approved EV charging and energy-product components.", href: "/services/plastic-injection-molding" },
      { title: "DFM Engineering", body: "Review connector alignment, sealing geometry, inserts, structure and heat-related product requirements.", href: "/injection-molding-engineering" },
      { title: "Mold Trial & Validation", body: "Validate critical interfaces, insert position and enclosure assembly before production release.", href: "/injection-molds/mold-trial-validation" }
    ],
    lifecycleIntro: "A staged path helps teams validate connector, enclosure and assembly geometry before repeat molded-part supply.",
    lifecycle: lifecycle("EV charging component"),
    materialIntro: "Material selection follows the customer's documented mechanical, thermal and product requirements; no UL, flammability or electrical certification is implied.",
    materials: [
      { title: "Housings & Covers", body: "Candidate families for structural or visible enclosures.", items: ["PC/ABS", "PC", "PBT"] },
      { title: "Functional Components", body: "Engineering families considered for stable connector or carrier geometry.", items: ["PA", "PA-GF", "POM"] },
      { title: "Flexible Interfaces", body: "Options for compliant features where the application specifies them.", items: ["TPU", "TPE"] }
    ],
    qualityIntro: "Validation is organized around agreed connector, sealing, mounting and assembly requirements.",
    qualityItems: [
      ["Connector Interface Dimensions", "Measure agreed locating and mating geometry."],
      ["Insert Position Verification", "Confirm metal or threaded insert position and orientation."],
      ["Sealing Feature Review", "Inspect gasket channels and contact surfaces against requirements."],
      ["Housing Assembly Fit", "Check enclosure halves, fasteners and available mating components."],
      ["Visual / Surface Inspection", "Review visible molding marks and finish criteria."],
      ["Sample Validation Records", "Document critical results and correction actions before approval."]
    ],
    moldTypesIntro: "EV and energy products may require large, insert, complex, multi-cavity, hot-runner or precision tooling according to component geometry.",
    moldTypes: [
      { ...mold.large, body: "Large molds for charging enclosures and structural energy-product housings." },
      { ...mold.insert, body: "Tools for molded components that integrate specified threaded or conductive inserts." },
      { ...mold.complex, body: "Complex actions for connector, sealing and service-access geometry." },
      { ...mold.multi, body: "Repeat-cavity tooling for suitable connector and functional components." },
      { ...mold.hot, body: "Flow systems considered around engineering resin behavior and production demand." },
      { ...mold.precision, body: "Controlled tools for connector alignment and critical energy-product interfaces." }
    ],
    examplesIntro: "Representative scopes describe common engineering work and do not imply electrical compliance or named customer programs.",
    examples: [
      { title: "EV Charging Control Housing", application: "Charging equipment enclosure", focus: "Display, connector and service-access geometry", support: "DFM, large tooling, trial and samples" },
      { title: "Connector Component Tooling", application: "Charging connector assembly", focus: "Alignment, inserts and assembly interfaces", support: "Precision mold, dimensional review and production" },
      { title: "Power Electronics Cover", application: "Protective energy-product enclosure", focus: "Heat, fastening and structural rib layout", support: "Mold engineering, validation and molded parts" }
    ],
    resources: [baseResources[1], { title: "Engineering Plastics Guide", body: "Compare engineering resin families for demanding molded components.", href: "/resources/injection-molding/engineering-plastics-guide" }, { title: "PPS vs PBT vs PA", body: "Compare three engineering material families around performance and processing.", href: "/resources/materials/pps-vs-pbt-vs-pa" }, baseResources[0]],
    relatedCapabilities: related("EV charging and energy-product"),
    faqs: [
      ["Which EV charging components can Arktech support?", "Potential scopes include charging housings, connector components, control enclosures, power-electronics covers and internal functional parts."],
      ["Does this page claim UL or electrical certification?", "No. Product compliance, flammability and electrical certification depend on customer specifications, materials and product-level testing."],
      ["Can metal inserts be integrated into charging components?", "Insert molding or post-mold insert installation can be evaluated around geometry, loading, material and process requirements."],
      ["How are connector interfaces inspected?", "Agreed alignment, locating and mating dimensions can be included in dimensional inspection and assembly-fit review."],
      ["Can large charging housings be tooled?", "Large-format tooling can be assessed from CAD geometry, press requirements, material, projected area and receiving production constraints."],
      ["What information is needed for an EV product RFQ?", "Provide CAD, drawings, resin specification, application requirements, expected volume, insert details, critical dimensions and inspection expectations."]
    ],
    ctaEyebrow: "START YOUR EV OR ENERGY PROJECT",
    ctaHeading: "Need Tooling for an EV Charging or Energy Product?",
    ctaCopy: "Share the component data, material specification, interfaces and production demand for a practical DFM and tooling review."
  },
  {
    slug: "home-appliance",
    navTitle: "Home Appliance",
    eyebrow: "HOME APPLIANCE",
    seoTitle: "Home Appliance Injection Molding & Injection Molds | Arktech Mold",
    metaDescription: "Injection molds and plastic injection molding for home appliance housings, control panels, covers and functional plastic components. DFM, tooling, validation and production support.",
    h1: "Home Appliance Molding & Tooling",
    heroCopy: "Arktech supports appliance product teams with DFM engineering, export molds, sample validation and injection molding for housings, panels, covers and functional plastic components.",
    heroImage: "/images/industries/home-appliance.png",
    heroAlt: "Home appliances with molded housings control panels and functional plastic parts",
    applicationImage: "/images/industries/home-appliance-smart-home-components.webp",
    applicationAlt: "Molded home appliance housings control interfaces and functional components",
    applicationsHeading: "Typical Plastic Components for Home Appliances",
    applicationsIntro: "Appliance components are reviewed around visible finish, assembly, heat or moisture exposure and efficient production.",
    applications: [
      ["Appliance Housings", "Large and medium enclosures for countertop and household products."],
      ["Control Panels", "Visible interfaces with buttons, displays and mounting features."],
      ["Protective Covers", "Molded covers for internal mechanisms, electronics or service areas."],
      ["Internal Functional Parts", "Carriers, brackets, guides and assembly components."],
      ["Air / Water Management Parts", "Ducts, channels and interfaces where geometry controls flow."],
      ["Buttons & User Interfaces", "Molded controls designed around movement, appearance and assembly."]
    ],
    engineeringHeading: "Engineering Considerations for Appliance Components",
    engineeringIntro: "Appliance parts often combine broad visible surfaces, snaps, ribs and interfaces with heat, moisture or repeated household use.",
    engineeringConsiderations: [
      ["Large Cosmetic Surfaces", "Manage gate, flow, ejection and deformation risks on visible panels."],
      ["Snap-Fits", "Review strain, retention and assembly sequence."],
      ["Assembly Interfaces", "Control gaps, fasteners and mating relationships across housings."],
      ["Heat / Moisture Conditions", "Select materials from documented use requirements."],
      ["Dimensional Stability", "Protect datums and long features that influence final fit."],
      ["Structural Ribs", "Create stiffness without avoidable sink or heavy local mass."],
      ["Surface Finish", "Define texture, gloss and visible molding criteria before release."],
      ["Multi-Cavity Production", "Evaluate cavitation for smaller repeat-use appliance parts."]
    ],
    capabilityIntro: "Appliance programs connect housing DFM, tooling, sample approval and production support within one engineering path.",
    capabilities: [
      { title: "Injection Mold Manufacturing", body: "Production tooling for appliance housings, panels, ducts and functional components across varied part sizes.", href: "/services/injection-mold-manufacturing" },
      { title: "Plastic Injection Molding", body: "Samples, launch quantities and repeat molded-part supply for approved appliance components.", href: "/services/plastic-injection-molding" },
      { title: "DFM Engineering", body: "Review broad cosmetic surfaces, ribs, snaps, air or water paths and final assembly before steel release.", href: "/injection-molding-engineering" },
      { title: "Mold Trial & Validation", body: "Assess enclosure fit, control interfaces, appearance and critical dimensions during trial approval.", href: "/injection-molds/mold-trial-validation" }
    ],
    lifecycleIntro: "From enclosure review through molded-part delivery, each stage addresses both product appearance and manufacturing stability.",
    lifecycle: lifecycle("home-appliance component"),
    materialIntro: "Resin families are selected around specified appearance, temperature, moisture, strength and production needs.",
    materials: [
      { title: "Visible Housings", body: "Common families for cosmetic appliance enclosures and panels.", items: ["ABS", "PP", "PC/ABS"] },
      { title: "Functional Components", body: "Engineering families for carriers, mechanisms and stable features.", items: ["POM", "PA", "PBT"] },
      { title: "Flexible Interfaces", body: "Options for grips, seals and compliant product features.", items: ["TPE", "TPU"] }
    ],
    qualityIntro: "Inspection combines visible-surface review with dimensions and assembly checks that affect appliance performance.",
    qualityItems: [
      ["Housing Envelope Dimensions", "Check overall size, datums and mounting interfaces."],
      ["Panel & Control Fit", "Review gaps, flushness and button or display openings."],
      ["Snap / Fastener Features", "Inspect assembly geometry and retention locations."],
      ["Cosmetic Surface Review", "Assess visible finish, texture and agreed molding marks."],
      ["Assembly Verification", "Fit representative housing parts and available mechanisms."],
      ["Production Sample Approval", "Confirm required corrections before repeat molding."]
    ],
    moldTypesIntro: "Appliance programs can require large molds for housings and multi-cavity, hot-runner or multi-material tools for repeat components.",
    moldTypes: [
      { ...mold.large, body: "Large-format molds for visible appliance shells, panels and structural covers." },
      { ...mold.multi, body: "Balanced cavities for suitable appliance buttons, controls and small repeat components." },
      { ...mold.hot, body: "Runner systems reviewed for housing size, gate appearance and production needs." },
      { ...mold.complex, body: "Actions and shutoffs for appliance ducts, openings and detailed enclosure geometry." },
      { ...mold.insert, body: "Insert tools for appliance components with specified threaded or functional hardware." },
      { ...mold.twoK, body: "Multi-material tools for suitable controls, seals and soft-touch appliance features." }
    ],
    examplesIntro: "Representative scopes show typical appliance tooling work without presenting confidential customer projects.",
    examples: [
      { title: "Countertop Appliance Housing", application: "Visible outer enclosure", focus: "Large surfaces, vents and assembly gaps", support: "DFM, large mold, cosmetic trial and production" },
      { title: "Control Panel Tooling", application: "User-interface panel", focus: "Display opening, buttons and texture", support: "Precision tool, samples and fit review" },
      { title: "Internal Air-Flow Component", application: "Duct or functional carrier", focus: "Flow geometry, ribs and mounting features", support: "Complex tooling and dimensional validation" }
    ],
    resources: [baseResources[3], { title: "Draft Angle Guidelines", body: "Review draft for deep housings and textured appliance surfaces.", href: "/resources/injection-molding/draft-angle-guidelines" }, baseResources[1], { title: "Hot Runner vs Cold Runner", body: "Compare runner choices for appliance production tooling.", href: "/resources/injection-molds/hot-runner-vs-cold-runner" }],
    relatedCapabilities: related("home-appliance component"),
    faqs: [
      ["What appliance components can Arktech support?", "Typical scopes include housings, control panels, covers, buttons, ducts, carriers and other functional molded parts."],
      ["Can large appliance housings be tooled?", "Large housing tooling can be reviewed against part size, material, wall geometry, projected area and receiving molding equipment."],
      ["How are visible appliance surfaces controlled?", "DFM and mold design review gates, parting lines, ejection, texture and deformation risks before trial samples are assessed."],
      ["Can appliance parts include soft-touch features?", "Overmolding or 2K concepts can be evaluated when geometry, material compatibility and production requirements support them."],
      ["Can you support assembly of molded appliance parts?", "Secondary operations and assembly support can be scoped where drawings, components and acceptance requirements are defined."],
      ["What should be included in an appliance tooling RFQ?", "Provide CAD, drawings, resin, finish or texture, volume, critical surfaces, assembly information and expected production location."]
    ],
    ctaEyebrow: "START YOUR APPLIANCE PROJECT",
    ctaHeading: "Developing a Home Appliance Plastic Component?",
    ctaCopy: "Upload your CAD, drawings, material and appearance requirements for an engineering-led tooling review."
  },
  {
    slug: "pet-tech",
    navTitle: "Pet Tech Products",
    eyebrow: "PET TECH PRODUCTS",
    seoTitle: "Pet Tech Injection Molding & Plastic Tooling | Arktech Mold",
    metaDescription: "Injection molds and plastic injection molding for smart pet feeders, water devices, cameras, sensors and connected pet-product housings. DFM, tooling and production support.",
    h1: "Pet Tech Injection Molding & Tooling",
    heroCopy: "Arktech supports smart pet-product teams with DFM review, injection mold manufacturing and molding for feeders, dispensers, cameras, sensors, housings and connected device components.",
    heroImage: "/images/industries/pet-lifestyle-product-parts.png",
    heroAlt: "Smart pet feeders water devices cameras and connected pet products",
    applicationImage: "/images/industries/pet-lifestyle-product-parts.webp",
    applicationAlt: "Smart pet product housings bowls cameras and molded functional components",
    applicationsHeading: "Typical Components for Connected Pet Products",
    applicationsIntro: "Pet-tech products combine appliance-like housings with sensors, moving features, water or food interfaces and frequent cleaning needs.",
    applications: [
      ["Smart Feeder Housings", "Molded enclosures for food storage, dispensing and controls."],
      ["Water Device Components", "Reservoir, channel and housing parts designed around cleaning and assembly."],
      ["Pet Camera Housings", "Connected camera enclosures with optical and cable interfaces."],
      ["Sensor Components", "Compact housings and mounts for presence, weight or activity sensing."],
      ["Control Covers", "Visible panels, buttons and protective covers for electronics."],
      ["Connected Device Parts", "Internal carriers, mounts and enclosure components for smart products."]
    ],
    engineeringHeading: "Engineering Considerations for Smart Pet Products",
    engineeringIntro: "Product geometry should support daily use, assembly and cleaning without creating avoidable tooling or production risks.",
    engineeringConsiderations: [
      ["Food / Water Interfaces", "Review channels and contact geometry where the product design includes them."],
      ["Assembly & Cleaning", "Avoid inaccessible traps and define practical disassembly where required."],
      ["Sensor Openings", "Control aperture and mounting geometry for sensing functions."],
      ["Cosmetic Surfaces", "Plan gates, parting lines and texture around visible home-use products."],
      ["Snap-Fits", "Balance retention, service access and molded-part strain."],
      ["Inserts & Fasteners", "Coordinate repeated assembly points and structural loads."],
      ["Cable Routing", "Provide molded channels and protected connector access."],
      ["Moisture-Related Geometry", "Review sealing contact and drainage features without claiming certification."]
    ],
    capabilityIntro: "Pet-tech programs can move from product DFM and tooling into samples, repeat molding and scoped assembly support.",
    capabilities: [
      { title: "Injection Mold Manufacturing", body: "Tooling for feeder, water-device, camera and sensor housings with cleaning and assembly needs considered.", href: "/services/injection-mold-manufacturing" },
      { title: "Plastic Injection Molding", body: "Engineering samples and repeat molding for approved smart pet-product components.", href: "/services/plastic-injection-molding" },
      { title: "DFM Engineering", body: "Review dispensing paths, sensor openings, electronics, snaps and moisture-related geometry before tooling.", href: "/injection-molding-engineering" },
      { title: "Mold Trial & Validation", body: "Evaluate housing fit, functional interfaces and visible quality without making food-contact claims.", href: "/injection-molds/mold-trial-validation" }
    ],
    lifecycleIntro: "A linked development path keeps user-facing appearance, connected-device interfaces and practical assembly under review.",
    lifecycle: lifecycle("pet-tech product component"),
    materialIntro: "Material candidates are evaluated against the actual product specification; no food-contact or water-contact certification is implied.",
    materials: [
      { title: "Product Housings", body: "Common families for visible pet-device enclosures.", items: ["ABS", "PC/ABS", "PP"] },
      { title: "Moving / Functional Parts", body: "Engineering families considered for mechanisms and stable interfaces.", items: ["POM", "PA", "PBT"] },
      { title: "Flexible Features", body: "Options for grips, seals or compliant interfaces where specified.", items: ["TPE", "TPU"] }
    ],
    qualityIntro: "Validation focuses on housing fit, device interfaces and the molded geometry used in repeated operation or cleaning.",
    qualityItems: [
      ["Housing & Assembly Dimensions", "Check interfaces across enclosure and functional parts."],
      ["Sensor / Camera Alignment", "Verify critical openings and mounting features."],
      ["Dispensing Interfaces", "Inspect functional geometry against drawing requirements."],
      ["Insert / Fastener Position", "Confirm locations used during assembly and service."],
      ["Cosmetic Surface Review", "Review visible finish and agreed appearance criteria."],
      ["Sample Fit & Function", "Evaluate available mating components and documented sample needs."]
    ],
    moldTypesIntro: "Smart pet products may use precision, complex, multi-cavity, insert, overmolding or hot-runner tools depending on product architecture.",
    moldTypes: [
      { ...mold.precision, body: "Precision tools for sensor, camera and dispensing interfaces in connected pet products." },
      { ...mold.complex, body: "Mold actions for channels, undercuts and detailed pet-device enclosure geometry." },
      { ...mold.multi, body: "Multi-cavity concepts for suitable buttons, covers and smaller functional parts." },
      { ...mold.insert, body: "Insert tooling for repeated fastening and loaded attachment points." },
      { ...mold.over, body: "Overmolding for selected grips, seals or compliant pet-product interfaces." },
      { ...mold.hot, body: "Runner strategies considered around resin, appearance and repeat-production requirements." }
    ],
    examplesIntro: "Representative scopes reflect typical pet-tech engineering without making food-contact claims or identifying customer programs.",
    examples: [
      { title: "Smart Feeder Housing", application: "Connected dispensing product", focus: "Food-path interfaces, motor mounts and cosmetic enclosure", support: "DFM, tooling, samples and molded parts" },
      { title: "Pet Camera Enclosure", application: "Connected monitoring device", focus: "Optical opening, PCB mounts and cable access", support: "Precision tooling and assembly-fit review" },
      { title: "Water Device Component Set", application: "Circulation or dispensing product", focus: "Channels, sealing geometry and cleaning access", support: "Complex molds, sample validation and production" }
    ],
    resources: [baseResources[1], baseResources[0], baseResources[3], { title: "Undercut Design", body: "Review snaps, service features and release strategies for pet products.", href: "/resources/injection-molding/undercut-design" }],
    relatedCapabilities: related("smart pet-product"),
    faqs: [
      ["Which smart pet products can Arktech support?", "Potential scopes include feeder, water-device, camera, sensor and control housings plus internal functional components."],
      ["Does Arktech claim food-contact certification?", "No. Material compliance and product certification depend on customer requirements, resin documentation and product-level evaluation."],
      ["Can water-related geometry be reviewed during DFM?", "Yes. Channels, sealing contact, drainage, wall geometry and assembly access can be reviewed for moldability and inspection."],
      ["Can pet-product housings include electronic interfaces?", "PCB mounts, sensor openings, cable channels and connector access can be included in the DFM and sample-fit scope."],
      ["Do you support assembly after molding?", "Assembly and secondary operations can be scoped when components, work instructions and acceptance criteria are available."],
      ["What is needed for a pet-tech tooling quote?", "Send CAD, drawings, materials, annual volume, food or water interface requirements, electronics data and critical dimensions."]
    ],
    ctaEyebrow: "START YOUR PET TECH PROJECT",
    ctaHeading: "Developing a Smart Pet Product?",
    ctaCopy: "Send the product CAD, material targets, interfaces and volume requirements for DFM, tooling and molding review."
  },
  {
    slug: "consumer-electronics",
    navTitle: "Consumer Electronics",
    eyebrow: "CONSUMER ELECTRONICS",
    seoTitle: "Consumer Electronics Injection Molding & Tooling | Arktech Mold",
    metaDescription: "Injection molds and plastic injection molding for consumer electronics enclosures, router housings, handheld covers, control housings and functional plastic components.",
    h1: "Consumer Electronics Molding",
    heroCopy: "Arktech supports consumer-electronics teams with DFM engineering, export injection molds, sample validation and molding for product enclosures, handheld covers and functional components.",
    heroImage: "/images/industries/consumer-electronics-enclosures.png",
    heroAlt: "Consumer electronics products including enclosures mobile devices audio products and accessories",
    applicationImage: "/images/industries/consumer-electronics-enclosures.webp",
    applicationAlt: "Consumer electronics housings enclosures circuit interfaces and functional components",
    applicationsHeading: "Typical Consumer Electronics Plastic Components",
    applicationsIntro: "Electronics enclosures require a coordinated review of visible surfaces, PCB and connector interfaces, assembly features and production finish.",
    applications: [
      ["Electronic Enclosures", "Cosmetic shells for connected, powered and portable products."],
      ["Router Housings", "Ventilated enclosures with ports, antennas and internal mounts."],
      ["Power-Bank Housings", "Compact shells with battery, connector and assembly interfaces."],
      ["Handheld Covers", "Ergonomic exterior parts with controlled gaps and visible finish."],
      ["Control Housings", "Enclosures for displays, buttons and electronics modules."],
      ["Insert-Molded Components", "Functional plastic parts integrating specified metal features."]
    ],
    engineeringHeading: "Engineering Considerations for Electronics Enclosures",
    engineeringIntro: "Consumer products often place cosmetic expectations, thin geometry and dense internal interfaces into a compact molded assembly.",
    engineeringConsiderations: [
      ["Cosmetic Surfaces", "Protect visible zones from avoidable gates, ejection and witness marks."],
      ["Thin / Controlled Walls", "Balance filling, stiffness, sink and cooling across the enclosure."],
      ["PCB & Connector Interfaces", "Coordinate mounts, port locations and internal clearances."],
      ["Snap-Fits", "Review strain, retention and assembly or service cycles."],
      ["Threaded Inserts", "Define insert locations and loads before mold and process selection."],
      ["Heat & Ventilation", "Design openings and local structure around electronic heat sources."],
      ["Assembly Gaps", "Control datums and mating geometry across enclosure halves."],
      ["Surface Finish", "Define texture, gloss and visible acceptance criteria before trial."]
    ],
    capabilityIntro: "Consumer-electronics programs connect enclosure DFM, precision tooling, sample approval and molded-part production.",
    capabilities: [
      { title: "Injection Mold Manufacturing", body: "Precision and complex tooling for electronics shells, ports, inserts and visible enclosure surfaces.", href: "/services/injection-mold-manufacturing" },
      { title: "Plastic Injection Molding", body: "Engineering samples, launch builds and repeat supply for approved electronics components.", href: "/services/plastic-injection-molding" },
      { title: "DFM Engineering", body: "Review walls, PCB interfaces, vents, snaps and cosmetic requirements within compact enclosure geometry.", href: "/injection-molding-engineering" },
      { title: "Mold Trial & Validation", body: "Inspect housing gaps, connector openings, surface finish and assembly fit before production release.", href: "/injection-molds/mold-trial-validation" }
    ],
    lifecycleIntro: "A staged workflow keeps product appearance and electronic interfaces aligned through tooling, trial and repeat supply.",
    lifecycle: lifecycle("consumer-electronics enclosure"),
    materialIntro: "Materials are selected around documented appearance, strength, heat and product-use requirements.",
    materials: [
      { title: "Cosmetic Enclosures", body: "Common families for visible electronics housings.", items: ["ABS", "PC/ABS", "PC"] },
      { title: "Functional Components", body: "Engineering families for carriers, connectors and mechanisms.", items: ["PBT", "PA", "POM"] },
      { title: "Flexible / Clear Features", body: "Options used where the actual product design requires them.", items: ["TPU", "TPE", "Transparent PC"] }
    ],
    qualityIntro: "Validation combines visible-surface criteria with the internal dimensions needed for electronics and final assembly.",
    qualityItems: [
      ["Enclosure & Gap Dimensions", "Check mating edges, flushness and overall assembly datums."],
      ["PCB / Connector Position", "Verify mounts and openings used by electronic components."],
      ["Insert Location", "Confirm threaded or functional insert position and orientation."],
      ["Cosmetic Surface Inspection", "Review texture, gloss and allowable molding marks."],
      ["Assembly Fit", "Test available housing halves, boards or representative components."],
      ["Sample Approval", "Document dimensional and appearance results before repeat production."]
    ],
    moldTypesIntro: "Electronics programs may need precision, complex, insert, overmolding, 2K, multi-cavity or hot-runner tooling.",
    moldTypes: [
      { ...mold.precision, body: "Controlled tools for compact electronics housings and internal alignment features." },
      { ...mold.complex, body: "Tooling actions for side ports, detailed vents and enclosure undercuts." },
      { ...mold.insert, body: "Insert tools for threaded and functional features in electronic products." },
      { ...mold.over, body: "Overmolding for selected grips, protection and compliant enclosure interfaces." },
      { ...mold.twoK, body: "Two-material tools for integrated controls, seals or cosmetic product features." },
      { ...mold.multi, body: "Multi-cavity tools for suitable smaller electronics components and controls." },
      { ...mold.hot, body: "Runner systems evaluated around surface quality, resin and production economics." }
    ],
    examplesIntro: "Representative scopes illustrate common consumer-electronics tooling needs without identifying customer programs.",
    examples: [
      { title: "Router Housing Tooling", application: "Connected network device", focus: "Ventilation, ports, PCB mounts and cosmetic finish", support: "DFM, mold, samples and repeat molding" },
      { title: "Handheld Product Enclosure", application: "Portable electronic product", focus: "Ergonomics, snap assembly and controlled gaps", support: "Precision tooling and cosmetic validation" },
      { title: "Insert-Molded Control Part", application: "Functional electronic interface", focus: "Insert location, molded geometry and assembly datum", support: "Insert tool, inspection and production support" }
    ],
    resources: [baseResources[3], { title: "Draft Angle Guidelines", body: "Coordinate part release with enclosure depth and texture.", href: "/resources/injection-molding/draft-angle-guidelines" }, baseResources[1], { title: "Transparent Plastic Molding", body: "Review clear windows, light paths and cosmetic molding requirements.", href: "/resources/injection-molding/transparent-plastic-molding" }],
    relatedCapabilities: related("consumer-electronics"),
    faqs: [
      ["Which consumer-electronics parts can Arktech support?", "Typical scopes include product enclosures, router housings, handheld covers, control housings, internal carriers and insert-molded components."],
      ["Can you review PCB and connector geometry before tooling?", "Yes. Mounting bosses, ports, internal clearances and assembly datums can be reviewed with available electronic and mating data."],
      ["How are cosmetic electronics housings validated?", "Visible zones, finish criteria, gates, parting lines and sample appearance are reviewed together with dimensional and assembly requirements."],
      ["Can enclosures include transparent or soft-touch features?", "Transparent molding, overmolding or 2K concepts can be assessed when the design, materials and process requirements support them."],
      ["Can Arktech support prototype through repeat production?", "Programs can include engineering samples, trial builds, low-volume molding and repeat production after approval."],
      ["What data is needed for an electronics enclosure RFQ?", "Provide CAD, drawings, resin and finish, annual demand, PCB or connector data, appearance zones and critical dimensions."]
    ],
    ctaEyebrow: "START YOUR ELECTRONICS PROJECT",
    ctaHeading: "Developing a Consumer Electronics Product?",
    ctaCopy: "Upload your enclosure CAD, interface data, material and finish requirements for DFM and tooling review."
  }
];

export const industryLandingPageBySlug = new Map(industryLandingPages.map((page) => [page.slug, page]));
