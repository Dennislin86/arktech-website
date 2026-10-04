import { caseStudyPages } from "@/lib/page-data";

export type CaseStudyProfile = (typeof caseStudyPages)[number] & {
  industry: string;
  industryLink: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  capabilities: string[];
  challenges: string[];
  projectOverview: string;
  dfmReview: string[];
  toolingSolution: string[];
  trialValidation: string[];
  inspectionValidation: string[];
  gallery: { src: string; alt: string; caption: string }[];
};

const profiles: Record<string, Omit<CaseStudyProfile, keyof (typeof caseStudyPages)[number]>> = {
  "automotive-sensor-housing-tooling": {
    industry: "Automotive & EV",
    industryLink: "/industries/automotive",
    image: "/images/case-studies/automotive-multi-cavity-mold.webp",
    imageAlt: "Multi-cavity injection mold and molded automotive sensor housings",
    featured: true,
    capabilities: ["DFM Engineering", "Injection Mold Manufacturing", "Mold Trial", "Dimensional Inspection", "Export Tooling"],
    challenges: ["Dimensional Stability", "Glass-Filled Materials", "Export Tooling"],
    projectOverview: "An export production mold program for an automotive sensor housing molded in glass-filled PBT and prepared for operation at the customer’s local molding facility.",
    dfmReview: ["Draft, ribs, shutoffs and tolerance-sensitive assembly areas were reviewed before tooling release.", "Material behavior and wear at critical insert areas were considered in the tooling plan."],
    toolingSolution: ["The mold strategy used hardened inserts and controlled cooling for the glass-filled material application.", "Export-ready spare components and the receiving molder’s production requirements were included in the release plan."],
    trialValidation: ["Tool trials focused on stable sampling and the dimensions most relevant to downstream assembly.", "Sampling records supported engineering review before export release."],
    inspectionValidation: ["Critical assembly interfaces were included in the dimensional inspection plan.", "The shipment package included trial records, sample inspection information and a spare-parts list."],
    gallery: [
      { src: "/images/case-studies/automotive-multi-cavity-mold.webp", alt: "Automotive sensor housing multi-cavity injection mold project", caption: "Production mold and molded housing project overview" },
      { src: "/images/case-studies/eject-fixed-side-tooling.webp", alt: "Fixed-side and moving-side export injection mold engineering layout", caption: "Representative export tooling structure review" }
    ]
  },
  "medical-device-cartridge-molding": {
    industry: "Medical & Healthcare Devices",
    industryLink: "/industries/medical-devices",
    image: "/images/seo/plastic-injection-molding.png",
    imageAlt: "Precision molded plastic components under dimensional inspection",
    featured: true,
    capabilities: ["DFM Engineering", "Plastic Injection Molding", "Sample Validation", "Dimensional Inspection"],
    challenges: ["Tight Tolerances", "Assembly Fit", "Sample Validation"],
    projectOverview: "A precision plastic cartridge program requiring early manufacturability review, controlled sampling and defined inspection points for assembly-critical features.",
    dfmReview: ["Wall thickness, gate location, ejector areas and critical dimensions were reviewed before production tooling decisions.", "Tolerance stack-up at assembly interfaces was treated as an early engineering priority."],
    toolingSolution: ["The precision mold concept was planned around repeatable cartridge features and the selected PC material.", "The engineering review connected tooling decisions with handling and packaging expectations."],
    trialValidation: ["Sampling concentrated on critical-to-quality features and repeatable molding conditions.", "Review points were organized around the interfaces most likely to affect assembly performance."],
    inspectionValidation: ["Critical dimensions and assembly interfaces formed the basis of the inspection plan.", "The agreed inspection standard gave the customer a clearer basis for repeat-production review."],
    gallery: [{ src: "/images/seo/plastic-injection-molding.png", alt: "Precision plastic injection molded samples undergoing dimensional inspection", caption: "Representative sample and dimensional review" }]
  },
  "smart-home-plastic-housing": {
    industry: "Smart Home & IoT",
    industryLink: "/industries/smart-home-iot",
    image: "/images/case-studies/ihgs-housing.webp",
    imageAlt: "Smart home device housing components and assembly concept",
    featured: true,
    capabilities: ["DFM Engineering", "Injection Mold Manufacturing", "Plastic Injection Molding", "Assembly Review"],
    challenges: ["Cosmetic Surfaces", "Assembly Fit", "Tooling Strategy"],
    projectOverview: "A family of smart-home enclosure parts requiring consistent visible surfaces, reliable snap-fit assembly and a coordinated tooling plan.",
    dfmReview: ["Wall thickness, ribs, bosses, snap features and gate positions were reviewed across the housing family.", "Cosmetic surfaces and assembly interfaces were defined before sampling."],
    toolingSolution: ["A shared tooling strategy was evaluated for related enclosure parts where practical.", "The mold plan connected surface-finish expectations with inserts and fastening features."],
    trialValidation: ["Sampling review focused on cosmetic consistency and fit between enclosure components.", "Assembly risks identified during DFM remained visible through the sample review stage."],
    inspectionValidation: ["Surface appearance, snap-fit behavior and fastening interfaces were included in the validation focus.", "The resulting review path connected tooling approval with molded-part production requirements."],
    gallery: [
      { src: "/images/case-studies/ihgs-housing.webp", alt: "Smart home plastic housing components and product assembly", caption: "Housing architecture and component relationship" },
      { src: "/images/case-studies/smart-home-iot-project.webp", alt: "Smart home IoT enclosure project development and assembly", caption: "Related smart-home product development evidence" }
    ]
  },
  "die-cast-control-housing": {
    industry: "Industrial Products",
    industryLink: "/industries/industrial-automation",
    image: "/images/case-studies/die-casting-control-housing.webp",
    imageAlt: "Zinc die casting mold and finished control housing",
    featured: false,
    capabilities: ["Manufacturing DFM", "Die Casting Tooling", "CNC Finishing", "Inspection Planning"],
    challenges: ["Sealing Surfaces", "Machining Allowance", "Tooling Strategy"],
    projectOverview: "A control-housing die casting program requiring coordinated tooling, machining allowance and inspection planning around sealing and assembly interfaces.",
    dfmReview: ["Parting, slide action, venting, cooling and trimming requirements were reviewed before tooling release.", "Machining datums and finishing allowance were considered together with the casting strategy."],
    toolingSolution: ["The die casting mold plan was aligned with the downstream CNC datum strategy.", "Sealing surfaces and functional interfaces remained visible in both tooling and inspection planning."],
    trialValidation: ["Sampling review considered casting condition, trimming and the features prepared for CNC finishing.", "The project review linked mold output with the next manufacturing operation."],
    inspectionValidation: ["Inspection focus areas were defined around sealing surfaces, machined datums and housing interfaces.", "The tooling and finishing plan provided a clearer approval basis before production release."],
    gallery: [{ src: "/images/case-studies/die-casting-control-housing.webp", alt: "Die casting tooling and finished industrial control housing", caption: "Die casting mold, raw casting and finished housing" }]
  },
  "two-shot-2k-injection-mold-tooling": {
    industry: "Consumer & Industrial Products",
    industryLink: "/industries",
    image: "/images/case-studies/two-shot-light-cover.webp",
    imageAlt: "Two-shot injection molds and transparent molded light-cover component",
    featured: false,
    capabilities: ["Two-Shot Mold Engineering", "Injection Mold Manufacturing", "Tooling Validation"],
    challenges: ["Two-Shot Alignment", "Multi-Material Interface", "Visible Surfaces"],
    projectOverview: "A documented Arktech tooling project with coordinated first-shot and second-shot molds for an integrated multi-material light-cover component.",
    dfmReview: ["The interface between the first molded substrate and second-shot feature was reviewed as one system.", "Transfer, locating and visible surfaces were considered before tooling approval."],
    toolingSolution: ["Separate first-shot and second-shot molds were engineered around a repeatable part relationship.", "The tooling concept coordinated the second-shot interface with part location and release."],
    trialValidation: ["Sample review focused on the interface between both molding stages and the visible molded surfaces.", "The project image documents both tools and the resulting component structure."],
    inspectionValidation: ["The two-shot interface and appearance zones formed the main validation focus.", "Tooling evidence remained linked to the intended molding sequence."],
    gallery: [{ src: "/images/case-studies/two-shot-light-cover.webp", alt: "First-shot and second-shot injection molds with finished transparent light cover", caption: "Coordinated two-shot tooling and molded component" }]
  },
  "unscrewing-threaded-component-mold": {
    industry: "Industrial Products",
    industryLink: "/industries",
    image: "/images/case-studies/unscrewing-mold.webp",
    imageAlt: "Motor-driven unscrewing injection mold and internally threaded plastic components",
    featured: false,
    capabilities: ["DFM Engineering", "Unscrewing Mold Engineering", "Mechanical Validation"],
    challenges: ["Internal Thread Release", "Mold Motion", "Maintenance Access"],
    projectOverview: "A documented Arktech motor-driven unscrewing mold project for components whose internal thread prevented straight-line ejection.",
    dfmReview: ["The thread direction and required rotating-core movement were identified before mold design release.", "Mechanism access, release sequence and molded-thread review were treated as linked requirements."],
    toolingSolution: ["A motor-driven mechanism rotates the threaded cores before normal part release.", "The mold layout coordinates the drive, core movement, guidance and molding cycle."],
    trialValidation: ["Mechanical validation focused on controlled unscrewing and reliable part release.", "Molded components were reviewed as physical evidence of the thread-forming process."],
    inspectionValidation: ["The molded thread and release condition formed the main validation focus.", "The mechanism and service points were documented for the tooling program."],
    gallery: [{ src: "/images/case-studies/unscrewing-mold.webp", alt: "Unscrewing injection mold with motor drive and threaded molded parts", caption: "Motor-driven unscrewing tooling system" }]
  }
};

export const caseStudies: CaseStudyProfile[] = caseStudyPages.map((item) => ({ ...item, ...profiles[item.slug] }));

export const caseStudyBySlug = new Map(caseStudies.map((item) => [item.slug, item]));
