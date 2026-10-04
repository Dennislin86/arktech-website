export type MoldTypePageData = {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroBody: string;
  heroImage: string;
  heroAlt: string;
  supportImage: string;
  supportAlt: string;
  difference: string;
  criteria: string[];
  engineering: { title: string; body: string }[];
  critical: { title: string; body: string; points: string[] };
  validation: { title: string; body: string }[];
  evidence: string;
  related: { label: string; href: string }[];
  faqs: { question: string; answer: string }[];
  needsAssetReplacement?: boolean;
};

const manufacturing = { label: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" };
const molding = { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding" };
const trial = { label: "Mold Trial & Validation", href: "/injection-molds/mold-trial-validation" };
const engineering = { label: "Injection Molding Engineering", href: "/injection-molding-engineering" };

export const moldTypePages: MoldTypePageData[] = [
  {
    slug: "precision-injection-molds",
    name: "Precision Injection Molds",
    seoTitle: "Precision Injection Molds & Tooling | Arktech",
    metaDescription: "Precision injection molds for plastic parts with critical dimensions, repeatable fit and controlled production, supported by DFM and dimensional validation.",
    h1: "Precision Injection Molds for Critical Dimensions",
    heroBody: "Precision injection tooling is developed around the dimensions, alignment features and assembly interfaces that must remain controlled from mold trial through repeat production.",
    heroImage: "/images/mold-types/Precision-Molds.png",
    heroAlt: "Precision injection mold for controlled-dimension plastic parts and repeatable production",
    supportImage: "/images/injection-mold-manufacturing/mold-trial-report-evidence.webp",
    supportAlt: "Dimensional inspection and mold trial records used for tooling validation",
    difference: "A precision mold is defined by the small set of dimensions and interfaces that govern fit, motion, sealing or assembly—not by applying a blanket tight tolerance to every feature. Tool construction, insert alignment and inspection planning are therefore developed around measurable functional risk.",
    criteria: ["Critical fit, sealing or alignment dimensions", "Repeatable assembly interfaces across production runs", "Parts requiring controlled insert or shutoff relationships"],
    engineering: [
      { title: "Tolerance Strategy", body: "Separate functional dimensions from non-critical geometry so steel-safe adjustments and inspection effort remain focused." },
      { title: "Insert & Component Precision", body: "Define insert fits, shutoffs and replaceable steel conditions around the dimensions that control part function." },
      { title: "Mold Alignment", body: "Review interlocks, guidance and cavity/core support where mismatch could affect wall, flash or assembly." },
      { title: "Repeatability", body: "Consider resin shrinkage, cooling, ejection and process stability together with machining accuracy." }
    ],
    critical: { title: "Critical-Dimension Control Plan", body: "Precision tooling needs an agreed measurement strategy before trial samples are evaluated.", points: ["Drawing datum and inspection reference", "Steel-safe or correction allowance", "Measurement method and sample stage", "Fit check with mating components where required"] },
    validation: [
      { title: "Critical Dimensions", body: "Measure agreed product dimensions against drawing tolerances and sample identity." },
      { title: "Fit & Assembly", body: "Check the interfaces that drive alignment, fastening, sealing or motion." },
      { title: "Repeatability", body: "Compare samples from stable cycles rather than relying on one isolated measurement." },
      { title: "Correction Record", body: "Trace steel adjustments and re-trial results to the affected feature." }
    ],
    evidence: "The supporting visual shows real dimensional and mold-trial documentation used to review tooling status; it does not represent a fabricated customer result.",
    related: [engineering, trial, molding],
    faqs: [
      { question: "What makes an injection mold a precision mold?", answer: "The tooling is planned around critical product dimensions, controlled steel relationships, stable process behavior and a defined inspection method. Precision is demonstrated through validated part results, not only machining specifications." },
      { question: "Can every molded dimension be held to a tight tolerance?", answer: "No. Resin shrinkage, geometry, flow, cooling and measurement method all affect capability. Functional dimensions should be prioritized during DFM so the tolerance strategy is realistic." },
      { question: "How are precision molded parts validated?", answer: "Validation may include dimensional inspection, cavity identification where applicable, fit checks with mating parts and re-trial after agreed tooling corrections." },
      { question: "Do precision molds require replaceable inserts?", answer: "Replaceable inserts can be useful around critical or wear-sensitive features, but the decision depends on geometry, adjustment strategy and long-term service requirements." }
    ]
  },
  {
    slug: "complex-injection-molds",
    name: "Complex Injection Molds",
    seoTitle: "Complex Injection Molds & Tooling | Arktech",
    metaDescription: "Complex injection molds for challenging part geometry, undercuts, slides, lifters and coordinated release actions, with DFM and mold-trial validation.",
    h1: "Complex Injection Molds for Challenging Part Geometry",
    heroBody: "Complex tooling coordinates parting lines, side actions, lifters, shutoffs and ejection so parts with undercuts or difficult release geometry can be molded without damaging critical features.",
    heroImage: "/images/mold-types/complex-injection-molds.png",
    heroAlt: "Complex injection mold with multiple sliders and tooling mechanisms",
    supportImage: "/images/case-studies/fan-blade-mold.webp",
    supportAlt: "Injection mold with coordinated sliders and lifters for a complex fan-blade component",
    difference: "Complex molds add interacting mechanisms and release sequences that must remain protected throughout every cycle. The tooling concept must resolve how the mold opens, which action moves first, how shutoffs seal and how the part leaves the tool.",
    criteria: ["Parts with multiple undercuts or non-linear release", "Geometry requiring coordinated slides, lifters or side actions", "Complex parting lines and flash-sensitive shutoffs"],
    engineering: [
      { title: "Undercut Mapping", body: "Identify each undercut and assign the simplest reliable release method before mold design release." },
      { title: "Action Sequence", body: "Define movement order and protection for slides, lifters, cores and ejection." },
      { title: "Complex Shutoffs", body: "Review sealing angle, steel strength and wear at intersecting parting surfaces." },
      { title: "Part Release", body: "Control deformation, drag and witness marks as the part clears multiple actions." }
    ],
    critical: { title: "Mechanism & Release Strategy", body: "The mold movement sequence should be understandable, serviceable and protected against incorrect return positions.", points: ["Slide and lifter travel", "Positive return and sequence protection", "Wear inserts at shutoff areas", "Ejection after all actions clear"] },
    validation: [
      { title: "Dry-Run Sequence", body: "Verify every action moves and returns without interference before molding." },
      { title: "Part Release", body: "Review drag, deformation and witness marks around released undercuts." },
      { title: "Flash & Shutoffs", body: "Inspect complex split lines and sealing surfaces under trial pressure." },
      { title: "Critical Features", body: "Check molded geometry and functional fit after the complete action sequence." }
    ],
    evidence: "The project visual shows a real multi-action mold with visible tooling mechanisms used to release a complex molded component.",
    related: [engineering, trial, { label: "Unscrewing Injection Molds", href: "/injection-molds/unscrewing-molds" }],
    faqs: [
      { question: "When does a part need a complex injection mold?", answer: "A complex mold is considered when part geometry cannot release through a simple two-plate opening and requires multiple side actions, lifters, cores or coordinated shutoffs." },
      { question: "How are slide and lifter collisions prevented?", answer: "The mold design defines travel, return position and action sequence. Mechanical protection, sensors or other safeguards may be evaluated when the tool and receiving machine require them." },
      { question: "Do complex molds require more maintenance?", answer: "They generally include more moving and wear-sensitive components. Service access, lubrication, replaceable inserts and spare-part planning therefore need earlier attention." },
      { question: "How is a complex mold validated before export?", answer: "Validation includes dry-run movement, mold trials, release review, flash inspection, critical dimensions and confirmation of agreed correction actions." }
    ]
  },
  {
    slug: "family-molds",
    name: "Family Injection Molds",
    seoTitle: "Family Injection Molds for Related Plastic Parts | Arktech",
    metaDescription: "Family injection molds for producing multiple related plastic parts in one cycle, with demand-ratio, runner-balance and process-compatibility review.",
    h1: "Family Injection Molds for Multiple Related Parts",
    heroBody: "Family molds combine different related parts in one tool when their material, molding conditions, demand ratio and filling behavior can be managed together.",
    heroImage: "/images/mold-types/Family-molds.JPG",
    heroAlt: "Family injection mold with cavities for several related plastic parts",
    supportImage: "/images/mold-types/multi-cavity-injection-molds.webp",
    supportAlt: "Multi-cavity injection mold with repeated identical production cavities",
    difference: "Unlike a multi-cavity mold, which repeats the same part, a family mold produces different components. The decision depends on whether unequal geometry, fill demand and production quantity can share one stable molding window without creating excess inventory or part imbalance.",
    criteria: ["Related parts needed in a predictable production ratio", "Parts using the same compatible resin and molding window", "Geometry that can be balanced within one runner and cooling concept"],
    engineering: [
      { title: "Demand Ratio", body: "Match cavity quantity to how the related parts are consumed so one component does not accumulate." },
      { title: "Runner & Gate Balance", body: "Account for different part volumes and flow lengths rather than assuming equal branches are balanced." },
      { title: "Process Compatibility", body: "Confirm the parts can share melt temperature, mold temperature, packing and cycle conditions." },
      { title: "Cooling Difference", body: "Review unequal wall and part mass so one cavity does not control the entire cycle unexpectedly." }
    ],
    critical: { title: "Family vs Multi-Cavity Tooling", body: "Family tooling combines different related parts; multi-cavity tooling repeats an identical part. Selection should follow production demand and molding compatibility.", points: ["Different parts versus identical parts", "Part-demand ratio", "Shared molding window", "Inventory and scheduling impact"] },
    validation: [
      { title: "Part-by-Part Filling", body: "Review each geometry for short shot, packing and gate behavior." },
      { title: "Dimensional Results", body: "Inspect the critical dimensions of every related component, not only the largest part." },
      { title: "Cycle Compatibility", body: "Confirm all cavities reach acceptable quality under the same stable process." },
      { title: "Production Ratio", body: "Check whether the mold output matches how the parts will be assembled or consumed." }
    ],
    evidence: "The hero image is an existing real family-mold asset showing different cavity geometries within one tooling set.",
    related: [{ label: "Multi-Cavity Injection Molds", href: "/injection-molds/multi-cavity-molds" }, molding, manufacturing],
    faqs: [
      { question: "What is a family injection mold?", answer: "A family mold produces two or more different but related plastic parts in one molding cycle, usually from the same resin and under one shared process window." },
      { question: "How is a family mold different from a multi-cavity mold?", answer: "A multi-cavity mold repeats one identical part. A family mold combines different parts, which makes runner balance, cooling and demand ratio more difficult to coordinate." },
      { question: "When is a family mold not a good choice?", answer: "It may be unsuitable when parts need very different materials, molding conditions, production quantities or fill and cooling behavior." },
      { question: "How are family-mold samples approved?", answer: "Each related part should be inspected and functionally reviewed under the same validated molding conditions before the tooling is approved." }
    ]
  },
  {
    slug: "large-injection-molds",
    name: "Large Injection Molds",
    seoTitle: "Large Injection Molds for Plastic Components | Arktech",
    metaDescription: "Large injection molds for housings, panels and structural plastic parts, with cooling, rigidity, handling, machine compatibility and warpage validation.",
    h1: "Large Injection Molds for Housings & Structural Parts",
    heroBody: "Large injection tooling is engineered around mold rigidity, cooling coverage, part shrinkage, handling and the machine interface required to produce stable housings and structural components.",
    heroImage: "/images/mold-types/large-component-molds.JPG",
    heroAlt: "Large injection mold for structural plastic housings",
    supportImage: "/images/process/tooling-manufacturing-plan-mold.png",
    supportAlt: "Large injection mold undergoing structure and component inspection",
    difference: "As mold and part size increase, cooling uniformity, steel support, injection pressure, ejection force and safe handling become system-level decisions. A large mold must fit the receiving machine and utilities as well as the product geometry.",
    criteria: ["Large housings, covers or structural plastic components", "Parts with broad flatness or appearance requirements", "Programs with confirmed machine, crane and handling constraints"],
    engineering: [
      { title: "Mold Rigidity", body: "Support large cavity areas against pressure, deflection and long-term wear." },
      { title: "Cooling Coverage", body: "Plan temperature control across broad surfaces and deep geometry." },
      { title: "Machine Compatibility", body: "Confirm mold envelope, tie-bar spacing, shot capacity, clamp force and utility interfaces." },
      { title: "Large-Part Ejection", body: "Distribute release force to reduce whitening, distortion and handling damage." }
    ],
    critical: { title: "Warpage & Handling Strategy", body: "Large surfaces amplify uneven shrinkage and handling stress, so geometry, cooling, ejection and post-mold support must be reviewed together.", points: ["Flatness and assembly datums", "Cooling circuit coverage", "Balanced ejection", "Lifting and transport provisions"] },
    validation: [
      { title: "Flatness & Warpage", body: "Measure agreed surfaces after the defined conditioning period." },
      { title: "Appearance", body: "Review flow, gloss, sink and gate effects across large visible zones." },
      { title: "Assembly Dimensions", body: "Check fastening, sealing and mating interfaces on the full-size part." },
      { title: "Machine Trial", body: "Record conditions on equipment suitable for the mold and shot requirement." }
    ],
    evidence: "The supporting photo shows a real large mold during structural and component inspection before trial.",
    related: [manufacturing, trial, molding],
    faqs: [
      { question: "What information is needed to quote a large injection mold?", answer: "CAD data, resin, part weight, annual volume, receiving-machine details, appearance requirements, critical dimensions and mold-handling standards help define the tooling concept." },
      { question: "How is warpage managed in a large molded part?", answer: "DFM, wall design, gating, cooling, ejection and molding conditions are reviewed together. Final acceptance should use agreed flatness and assembly criteria." },
      { question: "Why is receiving-machine information important?", answer: "The mold must match platen and tie-bar space, injection capacity, clamp requirements, utility connections and handling limits at the destination plant." },
      { question: "How are large molds prepared for export?", answer: "The agreed handover can include validation records, lifting provisions, spare parts, preservation and export packing appropriate to the receiving production environment." }
    ]
  },
  {
    slug: "prototype-injection-molds",
    name: "Prototype Injection Molds",
    seoTitle: "Prototype Injection Molds for Product Validation | Arktech",
    metaDescription: "Prototype injection molds for production-intent plastic parts, design validation, pilot builds and transition planning before repeat production tooling.",
    h1: "Prototype Injection Molds for Product Validation",
    heroBody: "Prototype injection molds produce molded parts in the intended resin for engineering validation, pilot builds and design learning before a program commits to repeat-production tooling.",
    heroImage: "/images/mold-types/prototype-injection-mold.webp",
    heroAlt: "Prototype injection mold and molded part for design validation",
    supportImage: "/images/capabilities/product-design-injection-mold-production.webp",
    supportAlt: "Product design components reviewed for injection molding production planning",
    difference: "Prototype tooling is a molding strategy, not a substitute for every prototype method. It is useful when production-intent resin, molded geometry and process behavior must be evaluated before higher-investment production tooling is released.",
    criteria: ["Functional testing in the intended molding resin", "Pilot or bridge quantities before production tooling", "Programs expecting controlled design changes after molded validation"],
    engineering: [
      { title: "Development Stage", body: "Define which product questions the prototype mold must answer before selecting its construction." },
      { title: "Change Strategy", body: "Use replaceable or steel-safe areas where likely engineering changes are already understood." },
      { title: "Pilot Build Needs", body: "Align cavity count and tool life with validation quantity rather than future peak demand." },
      { title: "Production Transition", body: "Record DFM and trial learning so it can inform the later production mold." }
    ],
    critical: { title: "Prototype-to-Production Tooling Plan", body: "The project should define what is temporary, what must represent production intent and which decisions carry into the next tool.", points: ["Intended resin and finish", "Validation quantity", "Expected design changes", "Transfer of trial and inspection learning"] },
    validation: [
      { title: "Functional Parts", body: "Evaluate product function using molded samples in the intended material where possible." },
      { title: "Assembly & Fit", body: "Check mating interfaces and identify geometry changes before production tooling." },
      { title: "Pilot Consistency", body: "Review whether repeat samples support the required build or test plan." },
      { title: "Learning Record", body: "Document product, tooling and process findings for the production transition." }
    ],
    evidence: "The hero shows an actual prototype injection mold with a molded part; the supporting image shows real product-development components used for manufacturing review.",
    related: [{ label: "Production Options", href: "/services/plastic-injection-molding#production-options" }, engineering, manufacturing],
    faqs: [
      { question: "What is a prototype injection mold?", answer: "It is tooling intended to produce injection-molded parts for engineering validation, pilot builds or early supply before a full repeat-production tool is justified." },
      { question: "Is prototype injection molding the same as 3D printing?", answer: "No. Prototype injection molding forms parts in a mold using an injection process, while additive prototypes use a different manufacturing route and may not represent molded material or process behavior." },
      { question: "Can a prototype mold be changed after trial?", answer: "Corrections may be possible, especially when likely change areas were planned as inserts or steel-safe conditions. The scope depends on the actual geometry and change." },
      { question: "When should a project move to production tooling?", answer: "The transition is considered when design, material, functional testing and demand are sufficiently stable to define the production cavity count, tool life and automation requirements." }
    ]
  },
  {
    slug: "unscrewing-molds",
    name: "Unscrewing Injection Molds",
    seoTitle: "Unscrewing Injection Molds for Threaded Parts | Arktech",
    metaDescription: "Unscrewing injection molds for threaded plastic parts, with controlled drive, timing, release, ejection and thread validation before export delivery.",
    h1: "Unscrewing Injection Molds for Threaded Plastic Parts",
    heroBody: "Unscrewing molds release molded threads through a controlled rotating core or related mechanism before ejection, protecting functional thread geometry that cannot be stripped from the tool.",
    heroImage: "/images/mold-types/unscrewing-molds.webp",
    heroAlt: "Unscrewing injection mold for internally threaded plastic components",
    supportImage: "/images/case-studies/unscrewing-mold.webp",
    supportAlt: "Motor-driven unscrewing mold and internally threaded molded components",
    difference: "The tool must synchronize thread rotation, core travel and part ejection. Thread geometry, drive concept, wear and maintenance are therefore central to the mold—not secondary details.",
    criteria: ["Internal or external threads that cannot release by deformation", "Functional threaded interfaces requiring controlled form", "Parts where a collapsible core or slide is not the practical release route"],
    engineering: [
      { title: "Thread Geometry", body: "Review pitch, depth, start, shrinkage and assembly engagement." },
      { title: "Drive Concept", body: "Select motor, gear, rack or other verified mechanism around stroke and receiving-machine needs." },
      { title: "Timing & Protection", body: "Coordinate unscrewing completion before ejection and protect the return sequence." },
      { title: "Wear & Lubrication", body: "Plan service access and wear components around rotating cores and gears." }
    ],
    critical: { title: "Thread Release Sequence", body: "A stable sequence protects both the molded thread and the mechanism during every cycle.", points: ["Unscrewing stroke and turns", "Core rotation before ejection", "Part restraint during release", "Return confirmation and maintenance access"] },
    validation: [
      { title: "Thread Completeness", body: "Inspect thread form for short fill, damage and incomplete release." },
      { title: "Functional Fit", body: "Use the agreed mating part or gauge when thread performance is critical." },
      { title: "Surface Damage", body: "Check drag and witness marks after unscrewing and ejection." },
      { title: "Action Sequence", body: "Repeat the mechanism cycle and review timing, noise and return position." }
    ],
    evidence: "The project image shows a real motor-driven unscrewing tool beside internally threaded molded components.",
    related: [{ label: "Complex Injection Molds", href: "/injection-molds/complex-injection-molds" }, trial, manufacturing],
    faqs: [
      { question: "When is an unscrewing injection mold required?", answer: "It is considered when molded threads cannot be released reliably by normal draft, deformation, a slide or another simpler release method." },
      { question: "How is the unscrewing mechanism driven?", answer: "The verified drive can use a motor, gear, rack, hydraulic or other mechanism depending on thread geometry, travel, cycle and receiving-machine conditions." },
      { question: "How is a molded thread validated?", answer: "Validation can include visual thread review, dimensional inspection, mating-part assembly or an agreed gauge, plus repeated mechanism cycling." },
      { question: "What spare parts are useful for an unscrewing mold?", answer: "Project-specific spares may include wear-sensitive cores, gears, bearings, seals or related mechanism components identified during design and trial." }
    ]
  },
  {
    slug: "high-gloss-injection-molds",
    name: "High-Gloss Injection Molds",
    seoTitle: "High-Gloss Injection Molds & Mirror-Polished Tooling | Arktech",
    metaDescription: "High-gloss injection molds and mirror-polished tooling for appearance-critical plastic parts, with surface, gate, venting and cosmetic validation review.",
    h1: "High-Gloss Injection Molds for Appearance-Critical Parts",
    heroBody: "High-gloss tooling combines controlled steel surface preparation with gate, venting, parting-line and ejection decisions that protect visible molded surfaces.",
    heroImage: "/images/mold-types/High-Gloss Injection Molds.JPG",
    heroAlt: "Mirror-polished mold cavities for high-gloss visible plastic parts",
    supportImage: "/images/factory-workshop/injection-mold-cavity-polishing-room.webp",
    supportAlt: "Injection mold cavity polishing work in the Arktech toolroom",
    difference: "A polished cavity alone does not guarantee an acceptable cosmetic part. Steel quality, gate position, venting, thermal control, release and handling all influence the visible result.",
    criteria: ["Visible housings, covers or panels with defined gloss targets", "Parts where ejector, gate and parting marks must be controlled", "Programs with an agreed cosmetic standard or approval sample"],
    engineering: [
      { title: "Mirror Polish", body: "Define the required surface level and steel condition before final polishing." },
      { title: "Gate Position", body: "Place gates around flow, vestige and visible-surface requirements." },
      { title: "Parting & Ejection", body: "Keep witness lines and ejector effects away from appearance-critical zones where practical." },
      { title: "Venting & Surface Protection", body: "Manage trapped gas and protect polished steel through fitting, trial and handling." }
    ],
    critical: { title: "Cosmetic Surface Control", body: "Visible zones need a shared review standard so tooling corrections are based on agreed evidence rather than subjective descriptions.", points: ["Defined Class-A or visible surface zones", "Approved texture or gloss reference", "Gate and weld-line visibility", "Handling and packaging after molding"] },
    validation: [
      { title: "Gloss & Appearance", body: "Review the molded part under agreed lighting and viewing conditions." },
      { title: "Flow & Weld Lines", body: "Inspect visible surfaces for filling patterns, trapped gas and transition marks." },
      { title: "Gate / Ejector Marks", body: "Confirm witness marks remain within the agreed cosmetic limits." },
      { title: "Surface Protection", body: "Check mold and sample handling before final approval and packing." }
    ],
    evidence: "The visuals show real mirror-polished mold cavities and actual cavity-polishing work; no optical-grade claim is implied.",
    related: [manufacturing, { label: "Consumer Electronics", href: "/industries/consumer-electronics" }, trial],
    faqs: [
      { question: "What is a high-gloss injection mold?", answer: "It is tooling prepared for molded parts with demanding visible-surface requirements, using suitable mold steel, surface finishing and a molding concept that controls cosmetic defects." },
      { question: "Does mirror polishing alone create a high-gloss part?", answer: "No. Resin, mold temperature, gate location, venting, filling behavior, release and surface handling also influence the molded appearance." },
      { question: "How are cosmetic surfaces approved?", answer: "The project should define visible zones, reference standards, lighting or viewing conditions and acceptable witness marks before trial approval." },
      { question: "Can ejector and parting-line marks be eliminated?", answer: "Their position and appearance can be managed through design, but complete elimination is not always realistic. DFM should define acceptable locations early." }
    ]
  },
  {
    slug: "insert-molding-tools",
    name: "Insert Molding Tools",
    seoTitle: "Insert Molding Tools for Metal & Plastic Components | Arktech",
    metaDescription: "Insert molding tools for integrated metal and plastic components, with insert positioning, retention, flash control and functional validation.",
    h1: "Insert Molding Tools for Integrated Components",
    heroBody: "Insert molding tools locate and retain prepared metal or other components while plastic is molded around them to create a controlled integrated part.",
    heroImage: "/images/mold-types/insert-molding-tools.webp",
    heroAlt: "Insert molding tool for plastic parts with integrated metal inserts",
    supportImage: "/images/capabilities/plastic-injection-molding-v2.png",
    supportAlt: "Molded plastic components and metal inserts prepared for manufacturing review",
    difference: "Insert position must remain stable against injection pressure while shutoffs control flash and protect the inserted component. Loading access, poka-yoke and mold protection need to be designed around the real insert condition.",
    criteria: ["Metal terminals, bushings or threaded inserts integrated into plastic", "Components requiring repeatable insert orientation", "Programs seeking to reduce a later assembly operation"],
    engineering: [
      { title: "Insert Positioning", body: "Locate the insert from stable features and define orientation clearly." },
      { title: "Retention During Filling", body: "Prevent movement, lift or deformation under injection pressure." },
      { title: "Flash Control", body: "Develop durable shutoffs around insert interfaces without damaging the insert." },
      { title: "Loading & Mold Protection", body: "Review manual or verified automated loading, error prevention and missing-insert protection." }
    ],
    critical: { title: "Insert Interface Strategy", body: "The insert, plastic flow and tooling shutoff should be evaluated as one functional interface.", points: ["Insert drawing and incoming tolerance", "Location and anti-rotation features", "Plastic coverage and knit-line risk", "Pull-out, torque or electrical function where required"] },
    validation: [
      { title: "Insert Position", body: "Inspect location, depth and orientation against the drawing." },
      { title: "Retention", body: "Perform agreed pull, torque or functional checks where the interface requires them." },
      { title: "Flash & Damage", body: "Review sealing areas and confirm the insert is not bent, marked or contaminated." },
      { title: "Functional Interface", body: "Check thread, electrical, sealing or assembly performance as applicable." }
    ],
    evidence: "The hero is an approved real insert-molding tool image. The supporting production visual is used only to show molded-component manufacturing context.",
    related: [{ label: "Overmolding Tools", href: "/injection-molds/overmolding-tools" }, molding, trial],
    faqs: [
      { question: "What inserts can be used in insert molding?", answer: "Common examples include threaded inserts, bushings, terminals, pins and prepared metal components. Suitability depends on geometry, tolerance, surface condition and functional requirements." },
      { question: "How is insert movement prevented during molding?", answer: "The mold uses locating and retention features designed around the insert, plastic pressure and loading method. Trial samples confirm whether the position remains stable." },
      { question: "Can insert molding be manually loaded?", answer: "Manual loading can be appropriate for some volumes and insert types. Automated loading should only be specified when the project, equipment and insert presentation support it." },
      { question: "How are insert-molded parts validated?", answer: "Checks can include insert position, flash, molded dimensions, pull or torque performance, electrical continuity or assembly fit according to the part function." }
    ]
  },
  {
    slug: "two-shot-2k-molds",
    name: "Two-Shot / 2K Injection Molds",
    seoTitle: "Two-Shot / 2K Injection Molds | Arktech",
    metaDescription: "Two-shot and 2K injection molds for multi-material or multi-color parts, with shot sequencing, material compatibility and machine-interface validation.",
    h1: "Two-Shot / 2K Injection Molds for Multi-Material Parts",
    heroBody: "Two-shot tooling forms a first shot and a coordinated second shot within a specialized molding sequence to create an integrated multi-material or multi-color component.",
    heroImage: "/images/mold-types/two-shot-2k-bi-injection-molds.webp",
    heroAlt: "Two-shot 2K injection mold for multi-material plastic parts",
    supportImage: "/images/case-studies/two-shot-light-cover.webp",
    supportAlt: "First-shot and second-shot molds with a transparent molded light-cover component",
    difference: "A 2K mold is engineered around machine configuration, rotation or transfer, first-shot retention and second-shot alignment. It differs from conventional overmolding because both shots are coordinated within one dedicated production sequence.",
    criteria: ["Two compatible materials or colors in one integrated part", "Volumes that justify dedicated 2K tooling and machine setup", "Parts requiring repeatable first-shot to second-shot alignment"],
    engineering: [
      { title: "First-Shot Stability", body: "Keep the first shot located and dimensionally stable during rotation or transfer." },
      { title: "Material Compatibility", body: "Review bonding, melt temperature, shrinkage and interface geometry." },
      { title: "Rotation / Transfer", body: "Match index, rotary or transfer motion to the receiving machine and mold layout." },
      { title: "Second-Shot Shutoff", body: "Control flash and appearance at the material transition." }
    ],
    critical: { title: "Machine & Shot-Sequence Compatibility", body: "A 2K concept cannot be released without verified receiving-machine configuration and shot sequence.", points: ["Injection-unit arrangement", "Rotary or index interface", "First-shot orientation", "Second-shot volume and process window"] },
    validation: [
      { title: "Shot Alignment", body: "Inspect the interface between first and second materials." },
      { title: "Bonding", body: "Use project-appropriate adhesion or functional checks." },
      { title: "Appearance", body: "Review flash, transition lines, color boundary and surface condition." },
      { title: "Machine Sequence", body: "Validate rotation or transfer, injection timing and ejection on suitable equipment." }
    ],
    evidence: "The project image shows real first- and second-shot tooling with a molded light-cover component.",
    related: [{ label: "Overmolding Tools", href: "/injection-molds/overmolding-tools" }, molding, manufacturing],
    faqs: [
      { question: "What is the difference between 2K molding and overmolding?", answer: "2K molding uses coordinated first and second shots in a dedicated machine and mold sequence. Overmolding often loads a separate substrate into a second molding operation." },
      { question: "What machine information is needed for a 2K mold?", answer: "Injection-unit configuration, platen and tie-bar dimensions, rotary or index arrangement, shot capacities and utility interfaces should be confirmed before mold design." },
      { question: "How is material compatibility checked?", answer: "Material data, bonding expectations, shrinkage and processing windows are reviewed before tooling; trial samples then confirm the actual interface and appearance." },
      { question: "How are two-shot parts validated?", answer: "Validation covers shot alignment, bonding, flash, color or material transition, dimensions, function and the complete machine sequence." }
    ]
  },
  {
    slug: "overmolding-tools",
    name: "Overmolding Tools",
    seoTitle: "Overmolding Tools for Multi-Material Plastic Parts | Arktech",
    metaDescription: "Overmolding tools for multi-material components, with substrate positioning, bonding, shutoff, interface and flash-control review.",
    h1: "Overmolding Tools for Multi-Material Components",
    heroBody: "Overmolding tools position a preformed substrate for a subsequent molding operation that adds grip, sealing, protection or another functional material layer.",
    heroImage: "/images/material-capabilities/silicone-tpu-tpe-elastomer-components.webp",
    heroAlt: "Rigid and soft molded components used in multi-material product applications",
    supportImage: "/images/mold-types/insert-molding-tools.webp",
    supportAlt: "Production injection mold manufactured by Arktech",
    difference: "Unlike a dedicated 2K sequence, overmolding commonly treats the substrate as a separate loaded component. The tool must control its position, withstand second-shot pressure and seal the material boundary without damaging the first part.",
    criteria: ["Pre-molded plastic or metal substrate with a second material", "Soft-touch, sealing, impact or grip functions", "Programs where manual or transfer loading is practical"],
    engineering: [
      { title: "Substrate Positioning", body: "Locate the first part repeatably and resist second-shot pressure." },
      { title: "Material Bonding", body: "Review chemical compatibility, mechanical locks and surface condition." },
      { title: "Shutoff & Flash", body: "Protect the substrate while sealing the overmold boundary." },
      { title: "First-Part Stability", body: "Evaluate distortion, reheating and dimensional variation before the second shot." }
    ],
    critical: { title: "Substrate-to-Overmold Interface", body: "The interface must balance bonding, seal geometry, material flow and visible transition requirements.", points: ["Substrate datum and loading direction", "Mechanical lock or chemical bond", "Shutoff pressure and flash risk", "Overmold edge and appearance"] },
    validation: [
      { title: "Substrate Position", body: "Confirm the first part remains correctly located after molding." },
      { title: "Bonding & Function", body: "Use agreed peel, pull, sealing or handling checks where required." },
      { title: "Flash Control", body: "Inspect the material boundary and shutoff edges." },
      { title: "Appearance", body: "Review transition lines, sink, deformation and surface condition." }
    ],
    evidence: "No dedicated verified overmolding mold photograph is available. The hero truthfully shows rigid and soft molded components; the supporting image is labeled only as a real Arktech production mold.",
    related: [{ label: "Two-Shot / 2K Injection Molds", href: "/injection-molds/two-shot-2k-molds" }, { label: "Insert Molding Tools", href: "/injection-molds/insert-molding-tools" }, molding],
    needsAssetReplacement: true,
    faqs: [
      { question: "How is overmolding different from 2K molding?", answer: "Overmolding commonly uses a separately produced or inserted substrate, while 2K molding coordinates both shots in a dedicated mold and machine sequence." },
      { question: "Do all thermoplastic materials bond during overmolding?", answer: "No. Compatibility, processing window, surface condition and interface design must be reviewed for the specific material combination." },
      { question: "How is the substrate held during the second shot?", answer: "The tool uses locating and support features designed around the actual substrate and injection pressure. Trial confirms movement and deformation risk." },
      { question: "How are overmolded parts validated?", answer: "Typical checks include substrate location, flash, bonding or mechanical retention, dimensional condition, appearance and the intended product function." }
    ]
  },
  {
    slug: "hot-runner-molds",
    name: "Hot Runner Injection Molds",
    seoTitle: "Hot Runner Injection Molds & Tooling Systems | Arktech",
    metaDescription: "Hot runner injection molds for production tooling, with nozzle, gate, temperature, thermal-balance, electrical and maintenance requirements reviewed.",
    h1: "Hot Runner Injection Molds for Production Tooling",
    heroBody: "Hot runner tooling keeps resin in the feed system molten between cycles and requires coordinated nozzle, gate, temperature-control and maintenance planning for the selected resin and production program.",
    heroImage: "/images/mold-types/hot-runner-molds.webp",
    heroAlt: "Hot runner injection mold for controlled production molding",
    supportImage: "/images/injection-mold-manufacturing/injection-molding-process-parameters.webp",
    supportAlt: "Injection molding process parameter record used during mold trial",
    difference: "The manifold and nozzle system become part of the mold's thermal and electrical architecture. Gate quality, residence time, heat balance, controller interface and service access must be considered together.",
    criteria: ["Production programs where runner waste or gate control matters", "Cavity layouts suited to a verified manifold concept", "Receiving plants able to operate and maintain the selected system"],
    engineering: [
      { title: "Nozzle Layout", body: "Coordinate nozzle positions with cavity layout, steel strength and cooling." },
      { title: "Thermal Balance", body: "Control manifold and nozzle temperatures while limiting heat transfer into surrounding steel." },
      { title: "Gate Strategy", body: "Review vestige, shear and valve-gate needs where applicable." },
      { title: "Electrical & Maintenance", body: "Plan zones, connectors, controller compatibility and service access." }
    ],
    critical: { title: "Hot Runner System Integration", body: "System selection should follow resin, cavity layout, production demand and the receiving plant's maintenance capability—not brand preference alone.", points: ["Resin and residence-time sensitivity", "Open gate or valve gate where applicable", "Temperature zones and connections", "Nozzle and manifold service access"] },
    validation: [
      { title: "Fill & Gate Balance", body: "Review cavity filling and gate condition under stable process settings." },
      { title: "Temperature Stability", body: "Record hot-runner zones and investigate abnormal heat behavior." },
      { title: "Appearance & Vestige", body: "Inspect stringing, drool, blush or gate marks as applicable." },
      { title: "Connection Check", body: "Verify heaters, thermocouples, connectors and agreed controller interface." }
    ],
    evidence: "The support visual is a real process-parameter record used as validation context; it does not disclose fabricated hot-runner performance data.",
    related: [{ label: "Multi-Cavity Injection Molds", href: "/injection-molds/multi-cavity-molds" }, trial, manufacturing],
    faqs: [
      { question: "When should a mold use a hot runner?", answer: "It may be considered when resin, cavity layout, runner waste, gate requirements, production demand and maintenance capability justify the added system complexity." },
      { question: "Can a hot runner use valve gates?", answer: "Valve gates may be evaluated where cavity layout, appearance, filling control and the selected system support them; they are not required for every hot-runner mold." },
      { question: "What receiving-plant information is needed?", answer: "Controller compatibility, electrical connectors, machine interface, resin handling and maintenance expectations should be confirmed before release." },
      { question: "How is a hot-runner mold validated?", answer: "Trial review covers zone stability, filling balance, gate condition, molded appearance, process parameters and the agreed electrical and connection checks." }
    ]
  },
  {
    slug: "gas-assisted-injection-molds",
    name: "Gas-Assisted Injection Molds",
    seoTitle: "Gas-Assisted Injection Molds for Structural Parts | Arktech",
    metaDescription: "Gas-assisted injection molds for structural and thick-section plastic parts, with gas-channel, penetration, surface and process validation planning.",
    h1: "Gas-Assisted Injection Molds for Structural Plastic Parts",
    heroBody: "Gas-assisted tooling uses a controlled gas channel during filling to support selected thick or structural geometry while reducing uncontrolled sink and material concentration.",
    heroImage: "/images/mold-types/complex-injection-molds.png",
    heroAlt: "Complex injection mold manufactured by Arktech",
    supportImage: "/images/plastic-injection-molding/gate-flow-analysis.webp",
    supportAlt: "Injection molding gate and material-flow engineering analysis",
    difference: "The gas path, polymer front and part wall design must be developed together. Results depend on actual geometry, resin and equipment, so gas assistance should not be treated as a generic solution for every thick part.",
    criteria: ["Structural parts with intentional hollow channels", "Geometry where sink and weight require deeper process review", "Programs with suitable gas-assist molding equipment"],
    engineering: [
      { title: "Gas Channel Design", body: "Define intentional paths and wall transitions around the desired penetration." },
      { title: "Injection & Gas Timing", body: "Coordinate polymer fill, switchover and gas pressure for the actual part." },
      { title: "Gate & Inlet Position", body: "Place polymer gates and gas inlets around flow and appearance requirements." },
      { title: "Surface Risk", body: "Review gas fingering, hesitation and witness marks on visible zones." }
    ],
    critical: { title: "Gas Penetration Strategy", body: "The engineering target is a controlled internal channel without breakthrough or unstable visible defects.", points: ["Intended hollow section", "Polymer flow front", "Gas inlet and overflow concept", "Equipment and pressure-control interface"] },
    validation: [
      { title: "Penetration Pattern", body: "Confirm the gas channel follows the intended section." },
      { title: "Surface Condition", body: "Inspect sink, gloss and gas-related witness marks." },
      { title: "Section & Weight", body: "Review agreed part weight and cut sections where required." },
      { title: "Process Window", body: "Record injection and gas timing used for approved samples." }
    ],
    evidence: "A dedicated verified gas-assisted project photo is not available. The images show a real Arktech mold and factual flow-analysis context without claiming that either depicts a completed gas-assisted project.",
    related: [engineering, molding, trial],
    needsAssetReplacement: true,
    faqs: [
      { question: "What is gas-assisted injection molding?", answer: "It is a molding process that introduces controlled gas into selected part sections during filling to form an internal channel and influence material distribution." },
      { question: "Can gas assistance eliminate all sink marks?", answer: "No. Geometry, resin, gas path, gate location and process control still affect surface results, and each part needs project-specific validation." },
      { question: "What equipment information is required?", answer: "The gas-control system, injection machine, gas interface and available process controls should be confirmed before the tooling concept is finalized." },
      { question: "How is gas penetration validated?", answer: "Methods can include part weight, cut-section review, surface inspection and process records according to the project's actual acceptance requirements." }
    ]
  },
  {
    slug: "thermoset-molds",
    name: "Thermoset Molds",
    seoTitle: "Thermoset Molds for Heat-Resistant Components | Arktech",
    metaDescription: "Thermoset molds for heat-resistant and electrical components, with cure, venting, flash, ejection and material-specific process review.",
    h1: "Thermoset Molds for Heat-Resistant Components",
    heroBody: "Thermoset tooling is developed around material cure behavior, mold temperature, venting, flash control and release requirements that differ from conventional thermoplastic molding.",
    heroImage: "/images/mold-types/hot-runner-molds.webp",
    heroAlt: "Injection mold tooling manufactured by Arktech",
    supportImage: "/images/factory-workshop/injection-mold-precision-grinding-workshop.webp",
    supportAlt: "Precision grinding of injection mold components in the Arktech toolroom",
    difference: "Thermoset material cures irreversibly in the mold. Tool temperature, feed concept, venting and flash management therefore require a process-specific review rather than reusing a thermoplastic mold approach.",
    criteria: ["Verified thermoset material and process requirements", "Heat-resistant or electrical part applications", "Programs with suitable molding equipment and cure control"],
    engineering: [
      { title: "Cure Behavior", body: "Review material data, mold temperature and expected cure window." },
      { title: "Venting", body: "Provide controlled gas release while limiting flash at fine sealing areas." },
      { title: "Tool Surface & Wear", body: "Select tool conditions around material abrasion and release." },
      { title: "Ejection", body: "Release cured parts without cracking critical or brittle geometry." }
    ],
    critical: { title: "Cure & Flash-Control Strategy", body: "The mold must achieve the required cure while keeping fine flash and trapped gas within the agreed product requirements.", points: ["Verified material data", "Mold heating and temperature zones", "Venting and sealing edges", "Deflashing and handling expectations"] },
    validation: [
      { title: "Cure Condition", body: "Review the molded state under the agreed material and process criteria." },
      { title: "Flash", body: "Inspect thin sealing edges and define any allowed deflashing operation." },
      { title: "Dimensions", body: "Measure critical features after the agreed conditioning stage." },
      { title: "Release & Damage", body: "Inspect cracks, chips and ejection marks on the cured component." }
    ],
    evidence: "No verified page-specific thermoset project image is available. The visuals are labeled as real Arktech tooling and mold-component manufacturing only.",
    related: [engineering, manufacturing, trial],
    needsAssetReplacement: true,
    faqs: [
      { question: "How is a thermoset mold different from a thermoplastic mold?", answer: "Thermoset material cures irreversibly in the tool, so temperature, cure time, venting, feed and flash behavior require a different process review." },
      { question: "Why is venting important in thermoset molding?", answer: "Gas generated or displaced during filling and cure must escape through controlled vents without creating unacceptable flash or burn." },
      { question: "What material information is needed before tool design?", answer: "Verified resin data, cure and temperature guidance, shrinkage, handling and any electrical, thermal or appearance requirements are needed." },
      { question: "How are thermoset parts validated?", answer: "Project-specific checks may include cure condition, dimensions, flash, surface, release damage and relevant functional requirements." }
    ]
  }
];

export const moldTypePageMap = Object.fromEntries(moldTypePages.map((page) => [page.slug, page])) as Record<string, MoldTypePageData>;
export const moldTypeSlugs = moldTypePages.map((page) => page.slug);
