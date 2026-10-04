export type ManufacturingFaqItem = {
  question: string;
  answer: string;
};

export type ManufacturingFaqCategory = {
  id: string;
  shortLabel: string;
  title: string;
  description: string;
  relatedLabel: string;
  relatedHref: string;
  items: ManufacturingFaqItem[];
};

export const manufacturingFaqCategories: ManufacturingFaqCategory[] = [
  {
    id: "injection-mold-manufacturing",
    shortLabel: "Injection Molds",
    title: "Injection Mold Manufacturing FAQs",
    description: "Questions about export tooling scope, mold construction and preparation for overseas production.",
    relatedLabel: "Explore Injection Mold Manufacturing",
    relatedHref: "/services/injection-mold-manufacturing",
    items: [
      {
        question: "What information do you need to quote an injection mold?",
        answer: "A useful tooling RFQ normally includes a 3D CAD model, a dimensioned 2D drawing, resin and color requirements, expected annual volume, surface or texture requirements, and the mold destination. If the mold will run in your facility, share the target injection molding machine information and preferred tooling standards so compatibility can be reviewed before quotation."
      },
      {
        question: "Can you build export molds for overseas molding factories?",
        answer: "Yes. Arktech supports export injection mold projects for overseas product companies and injection molding factories. The project can include DFM feedback, mold design review, manufacturing, trials, sample inspection, documentation, spare-parts planning and export packing, with the exact deliverables agreed for each project."
      },
      {
        question: "Can the mold be designed for our injection molding machine?",
        answer: "The mold can be reviewed against customer-supplied machine data such as platen and tie-bar limits, shot capacity, nozzle radius, locating ring, clamp arrangement, ejection, electrical connections and cooling interfaces. Final compatibility depends on complete and accurate machine specifications and should be confirmed during mold design approval."
      },
      {
        question: "What mold types can Arktech manufacture?",
        answer: "Verified Arktech tooling capabilities include production injection molds, multi-cavity molds, hot runner molds, insert and overmolding tools, two-shot or 2K molds, unscrewing molds, large-component molds and other complex injection molds. The appropriate structure depends on part geometry, resin, volume, quality requirements and the intended molding equipment."
      },
      {
        question: "Do you support multi-cavity molds?",
        answer: "Yes. Multi-cavity tooling can be evaluated when production volume, part geometry and molding stability justify it. DFM and mold design reviews consider cavity layout, filling balance, cooling, ejection, dimensional consistency and maintenance access before the design is released for manufacturing."
      },
      {
        question: "Do you build hot runner and valve gate molds?",
        answer: "Arktech supports hot runner tooling, including valve-gate concepts where the application requires them. System selection, gate location, resin sensitivity, electrical connections, controller compatibility and maintenance expectations must be reviewed with the customer and hot runner supplier before final mold approval."
      },
      {
        question: "Can you build unscrewing molds?",
        answer: "Yes. Unscrewing mold solutions can be developed for molded threads and rotating release features. The engineering review considers thread geometry, drive method, release stroke, cycle sequence, wear areas, sensor requirements and the available space in the customer’s target molding machine."
      },
      {
        question: "Can you provide spare inserts and wear components?",
        answer: "Spare inserts and selected wear components can be supplied as part of an agreed export tooling package. Typical needs may include replaceable inserts, ejector components, sliders, lifters or other project-specific service parts. The final list is defined from the approved mold design and customer maintenance requirements."
      }
    ]
  },
  {
    id: "plastic-injection-molding",
    shortLabel: "Injection Molding",
    title: "Plastic Injection Molding FAQs",
    description: "Production-stage questions covering samples, volumes, molding methods and secondary operations.",
    relatedLabel: "Explore Plastic Injection Molding",
    relatedHref: "/services/plastic-injection-molding",
    items: [
      {
        question: "What plastic materials can Arktech injection mold?",
        answer: "Arktech reviews common thermoplastics and engineering resins including ABS, PC, PC/ABS, PP, PA, POM, PMMA, TPE, PBT, PPS and filled grades. Processing suitability is confirmed against the specific resin grade, part geometry, performance requirements, tooling construction and available molding equipment before production is committed."
      },
      {
        question: "Do you support prototype injection molding?",
        answer: "Prototype injection molding can be considered when molded material behavior, part function or early assembly validation is important. The tooling and sampling approach is selected from the required part quantity, resin, geometry, test objectives and likely transition to production rather than from a fixed prototype formula."
      },
      {
        question: "Can you support low-volume production?",
        answer: "Yes. Low-volume molding can support launch builds, validation programs, replacement demand and products with limited annual volume. The practical solution depends on tooling life, resin, color changes, inspection needs and order pattern, so these inputs should be included in the RFQ."
      },
      {
        question: "Can you provide mass production after mold approval?",
        answer: "Production molding support can be arranged after the mold, samples and process expectations are approved. Capacity, resin supply, inspection plan, packaging and release requirements are reviewed for the specific program before a production commitment is made."
      },
      {
        question: "Do you support insert molding and overmolding?",
        answer: "Yes. Arktech supports insert molding and overmolding projects where insert retention, material compatibility, sealing, part location and molding sequence have been validated. Metal or plastic inserts, substrate preparation and secondary material adhesion should be defined during DFM and confirmed through trials."
      },
      {
        question: "Do you support Two-Shot / 2K molding?",
        answer: "Two-shot or 2K molding can be evaluated for parts that integrate two materials, colors or functions in one molded component. Feasibility depends on material compatibility, part transfer or rotation method, tooling structure and available production equipment, so project-specific engineering review is required."
      },
      {
        question: "Can you mold transparent plastic parts?",
        answer: "Transparent molded parts can be reviewed using materials such as PC or PMMA where appropriate. Optical appearance depends on resin grade, drying, polishing, gate and vent design, contamination control, wall transitions and acceptance criteria, all of which should be agreed before tooling release."
      },
      {
        question: "Can you provide secondary operations and assembly?",
        answer: "Secondary operations and assembly can be coordinated depending on the project, including processes such as printing, painting, plating, ultrasonic welding, heat staking and component assembly. Required finishes, inspection criteria, approved suppliers and functional checks should be defined in the RFQ and validated before production."
      }
    ]
  },
  {
    id: "dfm-mold-design",
    shortLabel: "DFM & Design",
    title: "DFM & Mold Design FAQs",
    description: "Engineering questions that should be resolved before mold design approval and steel cutting.",
    relatedLabel: "Explore DFM Engineering",
    relatedHref: "/injection-molding-engineering",
    items: [
      {
        question: "What is DFM for injection molding?",
        answer: "Design for manufacturability reviews how a plastic part can be molded reliably and how the mold should be constructed. The review typically considers draft, wall thickness, ribs, bosses, undercuts, parting lines, gates, weld lines, ejection, cooling, shrinkage, cosmetic surfaces and critical dimensions before tooling decisions are finalized."
      },
      {
        question: "Do you provide DFM before mold manufacturing?",
        answer: "Yes. DFM should be completed before mold design approval and before irreversible tooling work begins. Early review gives the product and tooling teams time to resolve moldability, appearance, tolerance and assembly risks while design changes are still easier to evaluate and control."
      },
      {
        question: "What does a DFM report include?",
        answer: "The exact report depends on the project, but it may document part orientation, shrinkage, parting line, gate and ejector locations, draft, wall and rib concerns, undercuts, slides or lifters, cosmetic risks and proposed mold structure. Open questions and required customer decisions should be clearly identified for approval."
      },
      {
        question: "Do you review wall thickness and draft angle?",
        answer: "Yes. Wall transitions are reviewed for filling, sink and warpage risk, while draft is reviewed for part release and surface protection. Appropriate values depend on resin, texture, depth, geometry and ejection conditions, so DFM recommendations are made for the actual part rather than applying one universal number."
      },
      {
        question: "Can Arktech suggest changes to the plastic part design?",
        answer: "Arktech can propose manufacturability changes such as adjusting walls, ribs, bosses, draft, shutoffs or undercut features. Product function and appearance remain customer decisions, so suggested changes are documented for engineering review and approval before they are incorporated into the tooling design."
      },
      {
        question: "How are ribs, bosses and snap-fits reviewed?",
        answer: "These features are checked for wall relationships, sink risk, strength, draft, tool access, ejection and assembly function. The review also considers whether the geometry creates thin steel, difficult venting, visible read-through or an undercut requiring a slider, lifter or design adjustment."
      },
      {
        question: "How are undercuts handled?",
        answer: "Undercuts may be released through sliders, lifters, collapsible or unscrewing mechanisms, removable inserts or a product design change. The selected solution depends on geometry, expected volume, reliability, cycle requirements, maintenance access and customer acceptance of parting or witness lines."
      },
      {
        question: "Can mold flow analysis be included?",
        answer: "Mold flow analysis can be included when the project requires additional evaluation of filling, pressure, weld lines, air traps, cooling or warpage. The analysis scope and input data should be agreed in advance, and the results are used with engineering judgment rather than treated as a substitute for mold trials."
      }
    ]
  },
  {
    id: "materials",
    shortLabel: "Materials",
    title: "Injection Molding Material FAQs",
    description: "Material-selection considerations for performance, moldability, appearance and dimensional stability.",
    relatedLabel: "Explore the Material Selection Guide",
    relatedHref: "/materials",
    items: [
      {
        question: "How do you help select plastic materials?",
        answer: "Material review starts with the product’s mechanical, thermal, chemical, cosmetic, regulatory and cost requirements. Arktech can compare molding implications and discuss production-friendly options, but final resin selection and compliance approval remain tied to the customer’s application and the chosen supplier grade."
      },
      {
        question: "What materials are commonly used for molded housings?",
        answer: "ABS, PC, PC/ABS, PP, PA and other engineering thermoplastics are commonly considered for housings, depending on impact, heat, appearance, chemical exposure, flame rating and cost. A named resin family is not enough for approval; the exact grade, additives, color and certification needs should be confirmed."
      },
      {
        question: "What engineering plastics can Arktech process?",
        answer: "Arktech’s published material scope includes engineering materials such as PA, PBT, PC, PC/ABS, POM, PPS and selected specialty or filled grades. Every project is checked against the exact grade, drying and temperature requirements, mold design and available equipment before processing capability is confirmed."
      },
      {
        question: "What should be considered when molding glass-filled materials?",
        answer: "Glass-filled grades can change flow, shrinkage, warpage, surface appearance and tool wear. Gate location, fiber orientation, steel choice, venting, ejection, dimensional direction and cosmetic expectations should therefore be reviewed together during DFM and confirmed through sampling."
      },
      {
        question: "What factors affect shrinkage and dimensional stability?",
        answer: "Resin grade, filler content, wall thickness, flow direction, gate location, packing, cooling and mold temperature all influence shrinkage and warpage. Critical dimensions should be identified on the 2D drawing so tooling steel strategy, process trials and inspection can focus on the features that matter most."
      },
      {
        question: "What should be considered for transparent parts?",
        answer: "Transparent parts require early agreement on optical and cosmetic expectations. Resin handling, drying, polish, gate and vent position, wall transitions, weld lines, ejector placement, contamination control and packaging can all affect clarity and appearance, so acceptance samples should be defined where practical."
      },
      {
        question: "What are the tooling considerations for high-temperature materials?",
        answer: "High-temperature resins may require suitable mold steel, controlled heating, robust cooling, appropriate hot runner components, careful venting and processing equipment that can meet the grade’s temperature requirements. Capability must be verified against the exact customer-specified resin rather than assumed from the material family name."
      },
      {
        question: "Can customer-specified resin grades be used?",
        answer: "Yes, customer-specified grades can be reviewed. Arktech will check availability, drying and processing requirements, color or additive needs, certification expectations and mold compatibility. Trial quantity and supply responsibility should be agreed before sampling, especially for imported or specialized materials."
      }
    ]
  },
  {
    id: "mold-trial-validation",
    shortLabel: "Mold Trial",
    title: "Mold Trial & Validation FAQs",
    description: "Questions about trial stages, sample review, corrections and readiness for customer approval.",
    relatedLabel: "Explore Mold Trial & Validation",
    relatedHref: "/services/mold-trial-sampling-support",
    items: [
      {
        question: "What happens during a T0 mold trial?",
        answer: "A T0 trial is an initial engineering run used to confirm basic mold movement, filling, ejection and early part condition. It helps identify tooling or process issues that require correction. T0 is not automatically a production approval stage, and its scope depends on the mold’s readiness and project plan."
      },
      {
        question: "What is the difference between T0 and T1?",
        answer: "Naming conventions vary by customer. In many projects, T0 is an early internal engineering check and T1 is the first structured customer-sample trial after the mold is sufficiently complete. Arktech confirms the intended trial stage, sample quantity and reporting requirements in the project plan to avoid ambiguity."
      },
      {
        question: "How are trial samples reviewed?",
        answer: "Samples may be reviewed for filling, flash, sink, weld lines, deformation, appearance, assembly and critical dimensions. Findings are compared with approved drawings and agreed acceptance criteria, then recorded as open issues, process actions or tooling corrections for customer review."
      },
      {
        question: "What happens if defects are found after the first trial?",
        answer: "The team identifies whether each issue is related to tooling, product design, resin or process conditions. Proposed actions are documented and agreed before changes are made. A later trial or targeted inspection is then used to verify the result before final approval."
      },
      {
        question: "Can process parameter sheets be provided?",
        answer: "Process parameter sheets can be supplied depending on project requirements and the agreed trial scope. They provide a reference for the tested machine, resin and mold condition, but parameters may require adjustment when the mold is transferred to a different press, material lot or production environment."
      },
      {
        question: "How are engineering changes tracked?",
        answer: "Engineering changes are recorded against the affected part or mold area, the reason for change, the agreed action and the verification result. Customer approval points should be clear before geometry or tooling is modified, particularly when a change affects function, appearance or critical dimensions."
      },
      {
        question: "When is a mold considered ready for approval?",
        answer: "Approval is based on the agreed project criteria, which may include acceptable samples, critical dimensions, stable mold movement, completed corrections, required documentation and customer sign-off. A mold is not treated as approved solely because it can produce a part during an early trial."
      },
      {
        question: "Can trial videos and sample photos be provided?",
        answer: "Trial videos and sample photos can be included when agreed for the project. They help remote engineering teams review mold operation and sample condition, but they supplement rather than replace dimensional reports, physical samples and the customer’s formal approval process."
      }
    ]
  },
  {
    id: "quality-documentation",
    shortLabel: "Quality",
    title: "Quality & Documentation FAQs",
    description: "Typical inspection and tooling records available according to project requirements.",
    relatedLabel: "Explore Quality & Documentation",
    relatedHref: "/company/quality-documentation",
    items: [
      {
        question: "What dimensional inspection reports can be provided?",
        answer: "Dimensional reports can record drawing references, nominal dimensions, tolerances, actual measurements, status and sample stage for agreed critical features. The measurement scope, sample quantity, method and report format should be confirmed for each project rather than assumed to cover every drawing dimension."
      },
      {
        question: "Do you provide steel certificates?",
        answer: "Steel certificates can be included when required and agreed in the tooling documentation package. The certificate scope depends on the selected material, supplier documentation and project specification, so customers should identify certification requirements during quotation and mold design review."
      },
      {
        question: "Can you provide material certificates?",
        answer: "Material certificates or supplier records can be provided where available and required by the project. The expected document type, resin grade, traceability level and any customer-specific compliance requirements should be stated before material purchasing and production."
      },
      {
        question: "What tooling drawings are included before shipment?",
        answer: "The final tooling record package can include approved 2D or 3D mold information and relevant component records depending on the commercial and project agreement. Required formats, revision status and ownership expectations should be defined before tooling release rather than left until shipment."
      },
      {
        question: "Can you provide mold trial reports?",
        answer: "Yes. Mold trial reports can summarize trial stage, machine and resin information, observed part or tooling issues, sample status and improvement actions. The report content is matched to the project and may be supplied with parameter sheets, photos, video or dimensional data where agreed."
      },
      {
        question: "Can you provide hot runner and cooling information?",
        answer: "Hot runner and cooling connection information can be documented for export tools when applicable. The level of detail depends on the approved mold design and customer installation needs, including connection identification, electrical requirements, circuit layout and component references."
      },
      {
        question: "What packing records are provided?",
        answer: "Depending on the project, packing records may include mold-condition checks, preservation steps, packing photos, packing list and export packing checklist. Shipping marks, lifting, blocking, moisture protection and included accessories should be confirmed before dispatch."
      },
      {
        question: "Can spare parts lists be included?",
        answer: "Yes. A spare-parts list can identify agreed inserts, wear parts, ejector components or other service items packed with the mold. The list should match the approved tooling design and purchase scope so customers can verify what is included before shipment."
      }
    ]
  },
  {
    id: "tooling-transfer-export",
    shortLabel: "Export",
    title: "Tooling Transfer & Export FAQs",
    description: "Preparation for installing and running an approved mold in an overseas production facility.",
    relatedLabel: "Explore Export Tooling Support",
    relatedHref: "/services/injection-mold-manufacturing",
    items: [
      {
        question: "Can molds be shipped for production at our own factory?",
        answer: "Yes. Arktech builds export molds intended for production in customer or nominated molding facilities. Successful transfer depends on early alignment around machine compatibility, tooling standards, utilities, resin, hot runner controls, handling, documentation and local production expectations."
      },
      {
        question: "How do you check compatibility with customer injection molding machines?",
        answer: "The engineering team compares the approved mold concept with customer-supplied press information, including platen, tie bars, clamp and shot capacity, mold height, nozzle, locating ring, ejection, cooling and electrical interfaces. Final compatibility requires accurate machine data and customer review."
      },
      {
        question: "What information is needed about the customer's machine?",
        answer: "Useful inputs include make and model, clamp tonnage, tie-bar spacing, platen drawing, minimum and maximum mold height, opening stroke, shot capacity, nozzle and locating-ring details, ejector pattern, available water connections and controller or electrical standards. Project-specific requirements may add further checks."
      },
      {
        question: "How are cooling, electrical and hot runner connections documented?",
        answer: "Connections can be identified in approved mold drawings, circuit information, labels or project documentation as appropriate. Customers should confirm local connector, voltage, controller and hose standards before mold manufacture so the final arrangement can be reviewed before export."
      },
      {
        question: "How is an export mold prepared for shipment?",
        answer: "Preparation typically includes final condition review, draining and protection as appropriate, securing moving components, checking accessories, applying agreed corrosion protection and packing the mold for the selected transport method. Exact export packing and documentation requirements are confirmed for each shipment."
      },
      {
        question: "Can spare parts be packed with the mold?",
        answer: "Yes. Agreed spare inserts, wear parts and accessories can be identified, protected and packed with the tool or in a clearly referenced package. The packing list should make the included items and quantities easy to verify on receipt."
      },
      {
        question: "Can Arktech support tooling transfer after approval?",
        answer: "Arktech can provide agreed records and remote engineering communication to support installation and startup after shipment. The exact support scope depends on the project, destination, receiving plant capability and commercial agreement; universal plug-and-play performance should not be assumed without machine and process validation."
      },
      {
        question: "What information is provided for installation and setup?",
        answer: "Depending on the project, the transfer package may include approved mold records, connection information, hot runner references, trial parameters, sample and inspection records, spare-parts list and packing documents. Receiving teams should use these as starting references and validate the process on their own equipment."
      }
    ]
  },
  {
    id: "rfq-project-process",
    shortLabel: "RFQ",
    title: "RFQ & Project Process FAQs",
    description: "How to prepare a clear request and move from quotation into engineering review and tooling approval.",
    relatedLabel: "Start Your RFQ",
    relatedHref: "/request-a-quote",
    items: [
      {
        question: "What files should I send for quotation?",
        answer: "Send a current 3D CAD file, a dimensioned 2D drawing and any specifications that affect tooling, molding, appearance, inspection or assembly. STEP or STP is useful for geometry, while PDF or DWG drawings help identify tolerances, materials, finishes and critical notes."
      },
      {
        question: "Do you need both 3D and 2D drawings?",
        answer: "Both are strongly preferred. The 3D model defines part geometry for DFM and mold design, while the 2D drawing identifies tolerances, material, finish, critical dimensions and acceptance notes that may not be clear in the model alone. If one is unavailable, explain which file controls the quotation."
      },
      {
        question: "What information should be included in an RFQ?",
        answer: "Include part files, resin and color, expected annual volume, target production location, cosmetic or texture requirements, critical tolerances, assembly needs, required documents and timing expectations. For export tooling, also include the target molding machine and preferred mold standards where available."
      },
      {
        question: "When should material requirements be confirmed?",
        answer: "Material family and key performance requirements should be identified during quotation, with the exact grade confirmed before final DFM, mold design and resin purchasing. Late material changes can affect shrinkage, tooling details, hot runner selection, processing and dimensional expectations."
      },
      {
        question: "Should annual volume be provided?",
        answer: "Yes. Annual volume and expected order pattern influence cavity count, mold steel, runner strategy, automation, maintenance planning and the choice between prototype, low-volume and production tooling. A realistic range is more useful than leaving production expectations undefined."
      },
      {
        question: "Do you need injection molding machine information?",
        answer: "Machine information is important when the mold will run outside Arktech or when a specific press must be used. Sharing the machine data early helps engineering review mold size, clamp and shot requirements, mounting, ejection, nozzle, cooling and electrical compatibility."
      },
      {
        question: "How are engineering questions handled before quotation?",
        answer: "The engineering team reviews the supplied files and raises questions about geometry, materials, tolerances, mold structure, machine compatibility, samples and documentation. Assumptions should be recorded in the quotation so both sides understand the proposed scope before the project is released."
      },
      {
        question: "How does the project move from RFQ to DFM and mold design?",
        answer: "After quotation scope and commercial release, the project moves into structured engineering review. DFM questions are resolved first, then mold design details and customer approval points are documented before manufacturing. Trials, corrections, inspection and export preparation follow the agreed project plan."
      }
    ]
  }
];

export const popularFaqLinks = [
  { question: "What information do you need to quote an injection mold?", categoryId: "injection-mold-manufacturing", itemIndex: 0 },
  { question: "Do you provide DFM before mold manufacturing?", categoryId: "dfm-mold-design", itemIndex: 1 },
  { question: "Can the mold be designed for our injection molding machine?", categoryId: "injection-mold-manufacturing", itemIndex: 2 },
  { question: "What plastic materials can Arktech injection mold?", categoryId: "plastic-injection-molding", itemIndex: 0 },
  { question: "What documentation is provided before mold shipment?", categoryId: "quality-documentation", itemIndex: 6 },
  { question: "Do you support prototype, low-volume and mass production?", categoryId: "plastic-injection-molding", itemIndex: 1 },
  { question: "Can Arktech provide mold trials before export?", categoryId: "mold-trial-validation", itemIndex: 0 },
  { question: "Can you provide spare inserts and tooling spare parts?", categoryId: "injection-mold-manufacturing", itemIndex: 7 }
];
