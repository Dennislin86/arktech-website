export type DetailPageData = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroBody: string;
  intro?: string;
  sections: {
    title: string;
    items: string[];
  }[];
  processFlow?: string[];
  galleryImages?: {
    src: string;
    alt: string;
  }[];
  relatedLinks?: {
    label: string;
    href: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
};

export type CaseStudyData = {
  slug: string;
  title: string;
  description: string;
  projectName: string;
  customerType: string;
  region: string;
  productCategory: string;
  serviceScope: string[];
  challenge: string[];
  solution: string[];
  manufacturingScope: string[];
  result: string[];
  related: {
    label: string;
    href: string;
  }[];
};

export const servicePages: DetailPageData[] = [
  {
    slug: "injection-mold-manufacturing",
    title: "Export Injection Mold Manufacturing",
    description:
      "Export injection mold manufacturing in China for product companies and injection molding companies needing DFM engineering, mold trial support, inspection documentation and export packing.",
    eyebrow: "Capability",
    heroTitle: "Export injection mold manufacturing for product companies and injection molding companies.",
    heroBody:
      "Arktech is a plastic injection mold manufacturer in Shenzhen, China supporting export injection molds with DFM engineering, mold design review, precision mold manufacturing, mold trial support, tooling spare parts and export packing.",
    intro:
      "This service is built for buyers who need injection mold manufacturing China support with clear engineering communication before tooling release and practical documentation before shipment. Arktech helps overseas product companies and injection molding companies control mold design risk, review multi-cavity injection molds, hot runner molds, insert molding tools and overmolding tools, and prepare production-ready export tooling packages.",
    sections: [
      {
        title: "What This Service Supports",
        items: [
          "Export injection molds for European and North American production environments",
          "DFM engineering, mold design review and practical tooling strategy before steel cutting",
          "Multi-cavity injection molds, hot runner molds, insert molding tools and overmolding tools",
          "Mold trial support, sample review, tooling corrections and final approval support",
          "Tooling spare parts, mold trial report, dimensional inspection report and export packing"
        ]
      },
      {
        title: "Typical Applications",
        items: [
          "Plastic housings for electronics, smart devices, medical devices and industrial controls",
          "Functional plastic components with ribs, bosses, snap-fits, threaded inserts or sealing features",
          "Automotive, robotics, home appliance, pet tech and industrial automation molded components",
          "Export molds that will run in customer molding plants after delivery"
        ]
      },
      {
        title: "Engineering / DFM Considerations",
        items: [
          "Draft angle, wall thickness, rib design, undercuts, shutoffs and parting line risk",
          "Gate location, weld line control, cooling layout, ejection strategy and cosmetic surface protection",
          "Steel selection, cavity balance, hot runner system planning and wear component access",
          "Tolerance stack-up, assembly interfaces, resin shrinkage and dimensional stability"
        ]
      },
      {
        title: "Quality & Documentation",
        items: [
          "DFM report and mold design review records before manufacturing",
          "Mold trial report, process parameter sheet and sample photos after trial",
          "FAI / dimensional inspection report for critical features",
          "Steel certificate, spare parts list, mold packing photos and export packing checklist"
        ]
      },
      {
        title: "Best Fit Customers",
        items: [
          "Product companies developing new plastic products for overseas markets",
          "Injection molding companies that need additional export tooling capacity",
          "Engineering and sourcing teams looking for a plastic injection mold manufacturer with English communication",
          "Programs where mold trial support, inspection documentation and export packing are required before shipment"
        ]
      }
    ],
    processFlow: ["RFQ & CAD review", "DFM engineering feedback", "Mold design review", "Mold manufacturing", "Mold trial and sample inspection", "Correction loop and final approval", "Export packing and mold shipping"],
    relatedLinks: [
      { label: "Mold Trial & Validation", href: "/injection-molds/mold-trial-validation" },
      { label: "Mold Spare Parts", href: "/injection-molds/mold-spare-parts" },
      { label: "Hot Runner Molds", href: "/injection-molds/hot-runner-molds" },
      { label: "Multi-Cavity Molds", href: "/injection-molds/multi-cavity-molds" }
    ],
    faqs: [
      {
        question: "Can Arktech build export injection molds for overseas molding factories?",
        answer: "Yes. Arktech builds export injection molds for product companies and injection molding companies, including mold design review, trials, inspection documentation, spare parts and export packing before shipment."
      },
      {
        question: "Do you provide DFM engineering before mold manufacturing?",
        answer: "Yes. We review CAD files, drawings, materials, tolerances, gate risk, cooling, ejection and assembly interfaces before final mold design and manufacturing."
      },
      {
        question: "What documentation can be provided before shipment?",
        answer: "Typical documentation includes DFM feedback, mold trial report, process parameter sheet, dimensional inspection report, steel certification, spare parts list and mold packing photos."
      }
    ]
  },
  {
    slug: "mold-trial-sampling-support",
    title: "Mold Trial & Validation",
    description:
      "Mold trial and sampling support for export injection molds, including trial reports, process parameters, sample inspection and customer approval follow-up.",
    eyebrow: "Capability",
    heroTitle: "Mold trial and sampling support before export mold shipment.",
    heroBody:
      "Arktech supports export injection mold projects with T1 trials, sample review, process parameter records, dimensional inspection reports, improvement actions and customer approval follow-up before mold shipping.",
    intro:
      "Mold trial support is one of the most important control points for export tooling. Before a mold is shipped overseas, Arktech validates molding behavior, sample quality, dimensional performance and open tooling issues so customers can prepare for installation and production with fewer surprises.",
    sections: [
      {
        title: "What This Service Supports",
        items: [
          "T1 mold trial planning and production sample preparation",
          "Injection process parameter sheet and molding condition records",
          "Sample photos, sample labeling and customer feedback follow-up",
          "Dimensional inspection report for critical features",
          "Engineering change tracking after mold trial feedback"
        ]
      },
      {
        title: "Typical Applications",
        items: [
          "Export injection molds that must be approved before overseas shipment",
          "Plastic housings with cosmetic surfaces, assembly interfaces or tight dimensions",
          "Multi-cavity injection molds needing cavity balance review",
          "Hot runner molds requiring processing stability and gate vestige review"
        ]
      },
      {
        title: "Engineering / DFM Considerations",
        items: [
          "Short shot, sink, weld line, warpage, flash and gate mark risk",
          "Mold movement, ejection, cooling performance and venting effectiveness",
          "Material drying, melt temperature, holding pressure, cycle time and shrinkage behavior",
          "Customer feedback alignment before tooling correction or final approval"
        ]
      },
      {
        title: "Quality & Documentation",
        items: [
          "Mold Trial Report",
          "Process Parameter Sheet",
          "FAI / Sample Dimensional Inspection Report",
          "Mold Test Video and sample photos",
          "Engineering change record and final approval notes"
        ]
      },
      {
        title: "Best Fit Customers",
        items: [
          "Injection molding companies importing molds from China",
          "Product companies that need sample validation before tooling shipment",
          "Engineering teams requiring mold trial report and dimensional inspection report",
          "Projects where mold correction loops must be controlled before final approval"
        ]
      }
    ],
    processFlow: ["Trial plan confirmation", "T1 mold trial", "Sample and parameter recording", "Dimensional inspection", "Customer feedback review", "Tool correction if required", "Final approval and shipping preparation"],
    relatedLinks: [
      { label: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" },
      { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding" },
      { label: "Project Management", href: "/company/project-management" }
    ],
    faqs: [
      {
        question: "Can Arktech provide trial samples before shipping the mold?",
        answer: "Yes. Trial samples can be prepared after T1 and later trials, with sample photos, process parameters and inspection information for customer review."
      },
      {
        question: "Do you provide a mold trial report?",
        answer: "Yes. We can provide a mold trial report, process parameter sheet, sample photos and dimensional inspection report depending on project requirements."
      },
      {
        question: "Can tooling changes be managed after trial feedback?",
        answer: "Yes. Engineering changes can be tracked after sample feedback, then validated through additional trial or inspection before final approval."
      }
    ]
  },
  {
    slug: "tooling-spare-parts",
    title: "Mold Spare Parts",
    description:
      "Tooling spare parts support for export injection molds, including inserts, wear components, ejector parts, hot runner components and documented spare parts packages.",
    eyebrow: "Capability",
    heroTitle: "Tooling spare parts support for export injection molds.",
    heroBody:
      "Arktech prepares practical spare parts packages for export injection molds, helping overseas customers maintain production after mold installation and reduce downtime caused by wear components or damaged inserts.",
    intro:
      "For export tooling, spare parts are not an afterthought. A clear spare parts package helps injection molding companies and product companies keep molds running after delivery, especially when replacement inserts, ejectors, sliders, lifters or hot runner components may take time to source locally.",
    sections: [
      {
        title: "What This Service Supports",
        items: [
          "Replacement inserts, cavity/core inserts and wear components",
          "Ejector pins, sleeves, springs, sliders, lifters and guide components",
          "Hot runner spare components and standard system references",
          "Documented spare parts list before mold shipment",
          "Packing, labeling and export preparation for spare parts"
        ]
      },
      {
        title: "Typical Applications",
        items: [
          "Export injection molds running in Europe or North America",
          "High-wear molds using glass-filled materials or abrasive resins",
          "Multi-cavity molds requiring cavity-specific replacement components",
          "Molds with complex sliders, lifters, hot runners or unscrewing mechanisms"
        ]
      },
      {
        title: "Engineering / DFM Considerations",
        items: [
          "Wear part access and replacement method",
          "Standard component selection such as HASCO, Meusburger or DME where required",
          "Material hardness, coating, fit tolerance and maintenance frequency",
          "Spare part labeling and documentation for overseas maintenance teams"
        ]
      },
      {
        title: "Quality & Documentation",
        items: [
          "Spare Parts List",
          "Mold component inspection photos",
          "Steel certification for critical inserts when required",
          "Assembly reference notes and packing photos",
          "Hot runner information and supplier references when applicable"
        ]
      },
      {
        title: "Best Fit Customers",
        items: [
          "Injection molding companies importing production tools from China",
          "Product companies that need long-term mold maintenance planning",
          "Programs using high-temperature, glass-filled or abrasive materials",
          "Molds that must be maintained by overseas production teams after shipment"
        ]
      }
    ],
    processFlow: ["Identify wear and critical components", "Confirm standard systems and material requirements", "Manufacture or source spare parts", "Inspect and label spare parts", "Prepare spare parts list", "Pack with mold shipment"],
    relatedLinks: [
      { label: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" },
      { label: "Project Management", href: "/company/project-management" },
      { label: "Hot Runner Molds", href: "/injection-molds/hot-runner-molds" }
    ],
    faqs: [
      {
        question: "Can spare parts be shipped together with the export mold?",
        answer: "Yes. Spare parts can be prepared, labeled and packed together with the mold shipment when agreed during project planning."
      },
      {
        question: "What spare parts are commonly included?",
        answer: "Common spare parts include inserts, ejector pins, springs, wear plates, sliders, lifter components and hot runner spare components depending on the mold structure."
      },
      {
        question: "Can Arktech follow HASCO, Meusburger or DME standards?",
        answer: "Yes. Standard systems can be discussed during mold design review so overseas maintenance and replacement are easier after delivery."
      }
    ]
  },
  {
    slug: "plastic-injection-molding",
    title: "Plastic Injection Molding",
    description:
      "Plastic injection molding production for engineering components, industrial housings, consumer products and OEM assemblies with DFM review, sampling and inspection support.",
    eyebrow: "Capability",
    heroTitle: "Plastic injection molding production for engineering components and OEM assemblies.",
    heroBody:
      "Arktech supports plastic injection molding from resin review and mold sampling through low and high-volume production, inspection, secondary operations, assembly and export packaging.",
    intro:
      "Plastic injection molding programs often depend on stable tooling, resin behavior, dimensional control and assembly fit. Arktech supports product companies with molded plastic components while connecting production needs back to DFM engineering, mold trial feedback and quality documentation.",
    sections: [
      {
        title: "What This Service Supports",
        items: [
          "Low and high-volume plastic injection molding for OEM product programs",
          "Engineering plastic components, cosmetic housings and industrial enclosures",
          "Insert molding, overmolding and assembly-ready molded parts",
          "Secondary operations such as printing, ultrasonic welding, heat staking and packaging",
          "Production inspection and export-ready delivery planning"
        ]
      },
      {
        title: "Typical Applications",
        items: [
          "Electronic housings, smart device enclosures and control panels",
          "Medical device housings, diagnostic device parts and clean assembly components",
          "Robotics sensor covers, cable routing components and plastic structural parts",
          "Industrial automation covers, machine components and functional plastic parts"
        ]
      },
      {
        title: "Engineering / DFM Considerations",
        items: [
          "Material selection, resin shrinkage, glass-filled material behavior and warpage risk",
          "Gate location, weld line, ejector mark, texture and cosmetic surface control",
          "Tolerance planning, critical-to-quality features and assembly repeatability",
          "Insert retention, snap-fit performance, screw boss strength and ultrasonic welding zones"
        ]
      },
      {
        title: "Quality & Documentation",
        items: [
          "First article inspection and dimensional inspection report for key dimensions",
          "Production sampling, visual standard review and packaging confirmation",
          "Material certificate and color / texture reference when required",
          "Process parameter tracking for repeat production programs"
        ]
      },
      {
        title: "Best Fit Customers",
        items: [
          "Product companies moving from tool approval to production supply",
          "OEM and EMS teams sourcing plastic housings or functional molded components",
          "Customers who need injection molding plus assembly or secondary operations",
          "Programs where stable quality and scalable production capacity are required"
        ]
      }
    ],
    processFlow: ["DFM and resin review", "Mold sampling and approval", "Production planning", "Injection molding production", "Inspection and secondary operations", "Assembly and packaging", "Export delivery"],
    relatedLinks: [
      { label: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" },
      { label: "Mold Trial & Validation", href: "/injection-molds/mold-trial-validation" },
      { label: "Plastic Housing Manufacturing", href: "/services/plastic-housing-manufacturing" },
      { label: "Assembly & Secondary Services", href: "/services/plastic-metal-assembly" }
    ],
    faqs: [
      {
        question: "Can Arktech support both tooling and injection molding production?",
        answer: "Yes. Arktech can support export injection molds and selected plastic injection molding production, including sampling, inspection, secondary operations and packaging."
      },
      {
        question: "What materials can be used for plastic injection molding?",
        answer: "Common materials include ABS, PC, PC/ABS, PP, PA, POM, PMMA, TPU/TPE and glass-filled engineering plastics depending on performance requirements."
      },
      {
        question: "Can molded parts be assembled or packed before shipment?",
        answer: "Yes. Depending on the program, Arktech can support inserts, ultrasonic welding, heat staking, printing, simple assembly, inspection and export packaging."
      }
    ]
  },
  {
    slug: "injection-molding-production-options",
    title: "Injection Molding Production Options",
    description:
      "Prototype, low-volume and mass-production injection molding paths with tooling, DFM, inspection, secondary operations and assembly support.",
    eyebrow: "Production Options",
    heroTitle: "Injection molding from prototype to mass production.",
    heroBody:
      "Choose an injection molding production path based on engineering validation, launch requirements, repeatability and long-term supply needs.",
    sections: [
      { title: "Prototype Injection Molding", items: ["Engineering validation", "Functional samples", "Design and assembly checks"] },
      { title: "Low-Volume Production", items: ["Bridge and pilot production", "Market launch", "Controlled repeatability"] },
      { title: "Mass Production", items: ["Stable repeat production", "Process control", "Recurring delivery"] }
    ]
  },
  {
    slug: "die-casting-mold",
    title: "Die Casting Mold Manufacturing",
    description:
      "Die casting mold manufacturing support for aluminum and zinc components, including tooling strategy, tryout support, and production readiness.",
    eyebrow: "Service",
    heroTitle: "Die casting mold manufacturing support for metal component programs.",
    heroBody:
      "Arktech supports die casting tooling projects with attention to parting lines, slide actions, cooling, vents, trimming, machining allowance, and production reliability.",
    sections: [
      {
        title: "Tooling Scope",
        items: ["Aluminum and zinc die casting dies", "Core, slide, venting, and cooling planning", "Trim die and machining datum coordination", "Sample review and tooling correction support"]
      },
      {
        title: "Typical Parts",
        items: ["Control housings and enclosures", "Heat sinks and brackets", "Mechanical covers and frames", "Industrial product components"]
      }
    ]
  },
  {
    slug: "cnc-metal-parts",
    title: "CNC Metal Parts",
    description:
      "CNC machined aluminum, steel, stainless steel, brass, and fixture components for prototypes, bridge production, and OEM assemblies.",
    eyebrow: "Service",
    heroTitle: "CNC machined metal parts for prototypes, fixtures, and production components.",
    heroBody:
      "We support machined metal components for OEM products and manufacturing programs where tolerance, finish, datum control, and repeatability matter.",
    sections: [
      {
        title: "Machining Support",
        items: ["Aluminum, steel, stainless steel, and brass components", "Prototype, bridge, and low-volume production runs", "Tapped holes, inserts, sealing surfaces, and precision features", "Surface finishing and inspection documentation"]
      },
      {
        title: "Program Fit",
        items: ["Metal subassemblies used with molded plastic parts", "Fixtures and validation parts before tooling release", "CNC finishing after die casting"]
      }
    ]
  },
  {
    slug: "plastic-metal-assembly",
    title: "Plastic and Metal Assembly",
    description:
      "Plastic and metal component manufacturing, finishing, inserts, fasteners, subassembly, inspection, and export packaging from Arktech.",
    eyebrow: "Service",
    heroTitle: "Plastic and metal assembly support for OEM product companies.",
    heroBody:
      "Arktech coordinates molded plastic parts, machined or die cast metal components, inserts, secondary processes, inspection, assembly, and export-ready packaging.",
    sections: [
      {
        title: "Assembly Scope",
        items: ["Plastic molded parts with metal inserts or fasteners", "CNC and die cast metal components", "Heat staking, ultrasonic welding, threaded inserts, and fastening", "Functional checks, labeling, packaging, and shipment preparation"]
      },
      {
        title: "Buyer Value",
        items: ["Fewer handoffs between tooling and component suppliers", "DFM review across plastic and metal interfaces", "More complete shipment lots for OEM production teams"]
      }
    ]
  },
  {
    slug: "dfm-engineering",
    title: "DFM Engineering Support",
    description:
      "DFM engineering support for plastic and metal products, including manufacturability review, cost drivers, tolerance risk, and tooling strategy.",
    eyebrow: "Service",
    heroTitle: "DFM engineering support before tooling and production decisions.",
    heroBody:
      "Arktech reviews drawings and 3D models to identify manufacturability risks, cost drivers, tolerance issues, material concerns, and practical tooling or production strategies.",
    sections: [
      {
        title: "Review Areas",
        items: ["Draft, wall thickness, ribs, bosses, shutoffs, and undercuts", "Gate, ejector, cooling, parting line, and cosmetic surface risk", "Tolerance stackups, datum strategy, material choice, and assembly interfaces", "Die casting and CNC machining allowances where relevant"]
      },
      {
        title: "Outputs",
        items: ["Clear engineering questions before quotation", "Manufacturing recommendations for cost and reliability", "Tooling and sampling strategy for launch planning"]
      }
    ]
  },
  {
    slug: "plastic-housing-manufacturing",
    title: "Plastic Housing Manufacturing",
    description:
      "Plastic housing manufacturing for OEM product companies needing injection molds, molded enclosures, cosmetic surfaces, assembly features, and export production.",
    eyebrow: "Service",
    heroTitle: "Plastic housing manufacturing for OEM products and industrial devices.",
    heroBody:
      "Arktech supports plastic housing programs from DFM and mold manufacturing through injection molding, surface review, assembly features, inspection, and export packaging.",
    sections: [
      {
        title: "Housing Types",
        items: ["Electronics and smart device housings", "Industrial control enclosures and covers", "Medical, pet tech, outdoor, and energy product housings", "Plastic housings with inserts, fasteners, seals, and cosmetic surfaces"]
      },
      {
        title: "Manufacturing Focus",
        items: ["Draft, ribs, bosses, snap-fits, and assembly interfaces", "Gate location, weld line risk, texture, and surface finish", "Dimensional control, material choice, and packaging for export programs"]
      }
    ]
  }
];

export const solutionPages: DetailPageData[] = [
  {
    slug: "product-companies",
    title: "Solutions for Product Companies",
    description:
      "DFM engineering, export tooling, plastic injection molding, CNC machining, die casting, assembly, and quality documentation for product companies.",
    eyebrow: "Solution",
    heroTitle: "Manufacturing support for product companies from DFM to production.",
    heroBody:
      "Arktech supports OEMs, EMS manufacturers, hardware brands, and product development teams with coordinated tooling, plastic and metal components, inspection, assembly, and export delivery.",
    sections: [
      {
        title: "Common Needs",
        items: ["Early manufacturability feedback for new product designs", "Coordinated plastic and metal component production", "Reliable quality documentation and production-ready delivery"]
      },
      {
        title: "Arktech Support",
        items: ["DFM engineering and export tooling", "Plastic injection molding, CNC machining, and die casting", "Secondary operations, assembly, inspection, and export support"]
      }
    ]
  },
  {
    slug: "injection-molding-companies",
    title: "Solutions for Injection Molding Companies",
    description:
      "Export mold tooling support for medium-sized injection molding companies in Europe and North America.",
    eyebrow: "Solution",
    heroTitle: "Solutions for injection molding companies in Europe and North America.",
    heroBody:
      "Arktech helps molders increase tooling capacity with production molds, sampling data, documentation, spare parts, and clear communication before tools arrive at your plant.",
    sections: [
      {
        title: "Common Needs",
        items: ["Additional tool build capacity without adding local overhead", "Molds prepared for production in European or North American facilities", "DFM, trial samples, correction loops, and inspection records"]
      },
      {
        title: "Arktech Support",
        items: ["Export injection mold manufacturing", "Tool design review and manufacturability feedback", "Sampling, documentation, spare parts, and shipment coordination"]
      }
    ]
  },
  {
    slug: "oem-product-companies",
    title: "Solutions for OEM Product Companies",
    description:
      "Tooling, plastic molding, die casting, CNC metal parts, assembly, and DFM support for OEM product development teams.",
    eyebrow: "Solution",
    heroTitle: "Manufacturing support for OEM product companies developing plastic and metal products.",
    heroBody:
      "Arktech helps OEM teams move from CAD and drawings to manufacturable tooling, molded plastic parts, metal components, assemblies, inspection, and export shipment.",
    sections: [
      {
        title: "Common Needs",
        items: ["A supplier that can review manufacturability early", "Coordinated plastic and metal component production", "Support from prototype or pilot stage into stable production"]
      },
      {
        title: "Arktech Support",
        items: ["DFM review and tooling strategy", "Injection molds, molded parts, die casting molds, and CNC parts", "Secondary operations, assembly, inspection, and packaging"]
      }
    ]
  },
  {
    slug: "ems-manufacturers",
    title: "Solutions for EMS Manufacturers",
    description:
      "Export tooling, injection molded plastic components, die casting support, precision metal parts, and engineering documentation for EMS manufacturers.",
    eyebrow: "Solution",
    heroTitle: "Manufacturing support for EMS companies and electronics supply chains.",
    heroBody:
      "Arktech Mold supports EMS manufacturers with DFM, export tooling, plastic components, die casting tooling, precision metal parts, inspection records, and production-ready documentation.",
    sections: [
      {
        title: "Common Needs",
        items: ["Reliable component supply for electronics manufacturing programs", "Coordinated plastic, die cast, and machined metal parts", "Engineering documentation and inspection records for customer approval"]
      },
      {
        title: "Arktech Mold Support",
        items: ["Export injection molds and plastic injection molding", "Die casting tooling and precision metal components", "DFM review, sampling, inspection, assembly, and export delivery"]
      }
    ]
  }
];

export const industryPages: DetailPageData[] = [
  {
    slug: "robotics",
    title: "Robotics Manufacturing",
    description:
      "Manufacturing support for robotics components including robot controller housings, sensor covers, AMR / AGV plastic housings, end effector components and machined brackets.",
    eyebrow: "Industry",
    heroTitle: "Robotics component manufacturing support for plastic and metal parts.",
    heroBody:
      "Arktech supports robotics programs with export injection molds, plastic injection molding, CNC machining, die casting and assembly support for robot housings, sensor covers, AMR / AGV parts and precision brackets.",
    intro:
      "Robotics products often combine molded plastic housings, machined aluminum brackets, sensor covers, cable routing components and lightweight structural parts. Arktech helps robotics companies and product teams review manufacturability, control tolerance stack-up and prepare components for repeatable assembly.",
    sections: [
      {
        title: "Industry Manufacturing Support Overview",
        items: [
          "Export injection molds for robot controller housings and protective plastic covers",
          "Plastic injection molding for sensor covers, AMR / AGV plastic housings and cable routing parts",
          "CNC machining for machined aluminum brackets, end effector components and fixture parts",
          "Assembly support for housings, inserts, fasteners and precision interfaces"
        ]
      },
      {
        title: "Typical Components",
        items: [
          "Robot controller housings and electronic control enclosures",
          "Sensor covers, lens carriers and protective plastic components",
          "AMR / AGV plastic housings, covers and cable routing components",
          "End effector components, machined aluminum brackets and lightweight structural parts"
        ]
      },
      {
        title: "Relevant Capabilities",
        items: [
          "Injection mold manufacturing for durable plastic housings",
          "Plastic injection molding for functional and cosmetic robot components",
          "CNC machining for aluminum brackets and precision mounting parts",
          "Secondary operations and assembly for fasteners, inserts and labels"
        ]
      },
      {
        title: "Common Engineering Challenges",
        items: [
          "Dimensional stability for moving assemblies and sensor alignment",
          "Assembly repeatability across plastic housings, metal brackets and PCBA interfaces",
          "Tolerance stack-up between molded parts, machined brackets and fasteners",
          "Wear resistance, impact resistance and lightweight structural design"
        ]
      },
      {
        title: "Materials & Surface Finishing",
        items: [
          "PC/ABS, ABS, PA-GF, POM and PP for molded robotics components",
          "Aluminum, stainless steel and brass for machined brackets and fittings",
          "Texture, painting, printing, anodizing and powder coating where required",
          "Material selection based on stiffness, wear resistance, weight and assembly load"
        ]
      },
      {
        title: "Quality & Documentation",
        items: [
          "DFM feedback for housing geometry, ribs, bosses and snap features",
          "Dimensional inspection report for critical assembly and mounting points",
          "Sample photos, material certificates and inspection documentation",
          "Packing review for export delivery and assembly-ready components"
        ]
      },
      {
        title: "Related Case Studies",
        items: [
          "Electronics enclosure tooling with cosmetic and assembly interface review",
          "CNC machined bracket and mounting component support",
          "Plastic housing sampling with dimensional inspection before production"
        ]
      }
    ],
    processFlow: ["CAD and requirement review", "DFM and tolerance stack-up feedback", "Tooling or machining plan", "Sampling and dimensional inspection", "Assembly fit review", "Production and export delivery"],
    relatedLinks: [
      { label: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" },
      { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding" },
      { label: "CNC Metal Parts", href: "/services/cnc-metal-parts" },
      { label: "Upload CAD for RFQ", href: "/request-a-quote" }
    ],
    faqs: [
      {
        question: "Can Arktech manufacture robot controller housings?",
        answer: "Yes. Arktech supports robot controller housings with DFM review, export injection molds, plastic injection molding, inspection and assembly-ready packaging."
      },
      {
        question: "Can you support both plastic and metal robotics components?",
        answer: "Yes. Robotics projects often combine molded plastic covers with machined aluminum brackets, inserts and fasteners. Arktech can coordinate these related manufacturing needs."
      },
      {
        question: "What engineering risks are common in robotics parts?",
        answer: "Common risks include tolerance stack-up, sensor alignment, assembly repeatability, wear resistance, lightweight structural strength and dimensional stability."
      }
    ]
  },
  {
    slug: "smart-home",
    title: "Smart Home Product Manufacturing",
    description:
      "Injection molds, molded housings, CNC parts, and assemblies for smart home devices and connected consumer products.",
    eyebrow: "Industry",
    heroTitle: "Smart home product manufacturing support for plastic and metal components.",
    heroBody:
      "We support smart home product teams with cosmetic housings, internal brackets, molded parts, metal inserts, and assembly-ready components.",
    sections: [
      { title: "Typical Components", items: ["Device housings and bezels", "Button, lens, and internal carrier parts", "Metal brackets, inserts, and heat-management components"] },
      { title: "Key Requirements", items: ["Cosmetic surface control", "Snap-fit and assembly function", "Material choice for durability and appearance"] }
    ]
  },
  {
    slug: "medical-devices",
    title: "Medical Device Plastic Parts",
    description:
      "Manufacturing support for medical device housings, diagnostic device components, cartridge parts, clean assembly and precision plastic components.",
    eyebrow: "Industry",
    heroTitle: "Medical and healthcare device manufacturing support for precision plastic parts.",
    heroBody:
      "Arktech supports medical and healthcare device projects with DFM review, export injection molds, plastic injection molding, dimensional inspection, traceability planning, clean assembly and packaging support.",
    intro:
      "Medical and healthcare device programs require practical engineering review, controlled sampling and clear documentation. Arktech helps product teams develop medical device housings, diagnostic device components, cartridge parts and precision plastic components with attention to material choice, dimensional inspection and packaging requirements.",
    sections: [
      {
        title: "Industry Manufacturing Support Overview",
        items: [
          "Export injection molds for medical device housings and diagnostic device components",
          "Plastic injection molding for cartridge parts, covers, trays and functional components",
          "DFM engineering for wall thickness, ribs, gates, snap-fits and assembly interfaces",
          "Clean assembly, inspection documentation and packaging requirement review"
        ]
      },
      {
        title: "Typical Components",
        items: [
          "Medical device housings and handheld diagnostic enclosures",
          "Diagnostic device components, cartridge parts and transparent plastic parts",
          "Clean assembly components, covers, trays and precision molded features",
          "Fixtures, brackets and machined parts used with medical plastic assemblies"
        ]
      },
      {
        title: "Relevant Capabilities",
        items: [
          "Injection mold manufacturing for medical plastic housings",
          "Plastic injection molding with PC, ABS, PC/ABS and PP materials",
          "Mold trial support, sample inspection and dimensional validation",
          "Assembly, packaging review and documentation before shipment"
        ]
      },
      {
        title: "Common Engineering Challenges",
        items: [
          "Dimensional control for cartridge interfaces, covers and assembly features",
          "Material selection for clarity, impact resistance, chemical resistance or sterilization needs",
          "Traceability planning for samples, changes, inspection records and packaging lots",
          "Gate location, cosmetic surface risk, flash control and clean handling expectations"
        ]
      },
      {
        title: "Materials & Surface Finishing",
        items: [
          "PC for transparent or impact-resistant medical housings",
          "ABS and PC/ABS for durable diagnostic device enclosures",
          "PP for cartridge parts, covers and chemically resistant components",
          "Texture, polishing, printing and packaging requirements reviewed by project"
        ]
      },
      {
        title: "Quality & Documentation",
        items: [
          "DFM report and mold design review records",
          "FAI / dimensional inspection report for critical features",
          "Material certificate and sample approval records when required",
          "Packaging requirement review and clean assembly planning"
        ]
      },
      {
        title: "Related Case Studies",
        items: [
          "Medical device cartridge molding with tight-tolerance PC material",
          "Diagnostic device housing tooling and sampling support",
          "Plastic component inspection planning for medical product launch"
        ]
      }
    ],
    processFlow: ["CAD and medical requirement review", "DFM and material feedback", "Mold design and sampling plan", "Mold trial and sample inspection", "Clean assembly and packaging review", "Production support and documentation"],
    relatedLinks: [
      { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding" },
      { label: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" },
      { label: "Mold Trial & Validation", href: "/injection-molds/mold-trial-validation" },
      { label: "Medical Case Study", href: "/case-studies/medical-device-cartridge-molding" }
    ],
    faqs: [
      {
        question: "Can Arktech support medical device housings?",
        answer: "Yes. Arktech supports medical device housings with DFM review, export tooling, plastic injection molding, sample inspection and packaging requirement review."
      },
      {
        question: "Which plastics are common for medical and diagnostic device parts?",
        answer: "Common materials include PC, ABS, PC/ABS and PP. Final material choice depends on transparency, impact strength, chemical resistance, assembly requirements and customer standards."
      },
      {
        question: "Can Arktech provide dimensional inspection for medical parts?",
        answer: "Yes. Arktech can provide dimensional inspection reports for critical dimensions and support sample approval records before production."
      }
    ]
  },
  {
    slug: "medical-healthcare-devices",
    title: "Medical & Healthcare Devices",
    description:
      "Manufacturing support for medical device housings, diagnostic device components, cartridge parts, clean assembly and precision plastic components.",
    eyebrow: "Industry",
    heroTitle: "Medical and healthcare device manufacturing support for precision plastic parts.",
    heroBody:
      "Arktech supports medical and healthcare device projects with DFM review, export injection molds, plastic injection molding, dimensional inspection, traceability planning, clean assembly and packaging support.",
    intro:
      "Medical and healthcare device programs require practical engineering review, controlled sampling and clear documentation. Arktech helps product teams develop medical device housings, diagnostic device components, cartridge parts and precision plastic components with attention to material choice, dimensional inspection and packaging requirements.",
    sections: [
      {
        title: "Industry Manufacturing Support Overview",
        items: [
          "Export injection molds for medical device housings and diagnostic device components",
          "Plastic injection molding for cartridge parts, covers, trays and functional components",
          "DFM engineering for wall thickness, ribs, gates, snap-fits and assembly interfaces",
          "Clean assembly, inspection documentation and packaging requirement review"
        ]
      },
      {
        title: "Typical Components",
        items: [
          "Medical device housings and handheld diagnostic enclosures",
          "Diagnostic device components, cartridge parts and transparent plastic parts",
          "Clean assembly components, covers, trays and precision molded features",
          "Fixtures, brackets and machined parts used with medical plastic assemblies"
        ]
      },
      {
        title: "Relevant Capabilities",
        items: [
          "Injection mold manufacturing for medical plastic housings",
          "Plastic injection molding with PC, ABS, PC/ABS and PP materials",
          "Mold trial support, sample inspection and dimensional validation",
          "Assembly, packaging review and documentation before shipment"
        ]
      },
      {
        title: "Common Engineering Challenges",
        items: [
          "Dimensional control for cartridge interfaces, covers and assembly features",
          "Material selection for clarity, impact resistance, chemical resistance or sterilization needs",
          "Traceability planning for samples, changes, inspection records and packaging lots",
          "Gate location, cosmetic surface risk, flash control and clean handling expectations"
        ]
      },
      {
        title: "Materials & Surface Finishing",
        items: [
          "PC for transparent or impact-resistant medical housings",
          "ABS and PC/ABS for durable diagnostic device enclosures",
          "PP for cartridge parts, covers and chemically resistant components",
          "Texture, polishing, printing and packaging requirements reviewed by project"
        ]
      },
      {
        title: "Quality & Documentation",
        items: [
          "DFM report and mold design review records",
          "FAI / dimensional inspection report for critical features",
          "Material certificate and sample approval records when required",
          "Packaging requirement review and clean assembly planning"
        ]
      },
      {
        title: "Related Case Studies",
        items: [
          "Medical device cartridge molding with tight-tolerance PC material",
          "Diagnostic device housing tooling and sampling support",
          "Plastic component inspection planning for medical product launch"
        ]
      }
    ],
    processFlow: ["CAD and medical requirement review", "DFM and material feedback", "Mold design and sampling plan", "Mold trial and sample inspection", "Clean assembly and packaging review", "Production support and documentation"],
    relatedLinks: [
      { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding" },
      { label: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" },
      { label: "Mold Trial & Validation", href: "/injection-molds/mold-trial-validation" },
      { label: "Medical Case Study", href: "/case-studies/medical-device-cartridge-molding" }
    ],
    faqs: [
      {
        question: "Can Arktech support medical device housings?",
        answer: "Yes. Arktech supports medical device housings with DFM review, export tooling, plastic injection molding, sample inspection and packaging requirement review."
      },
      {
        question: "Which plastics are common for medical and diagnostic device parts?",
        answer: "Common materials include PC, ABS, PC/ABS and PP. Final material choice depends on transparency, impact strength, chemical resistance, assembly requirements and customer standards."
      },
      {
        question: "Can Arktech provide dimensional inspection for medical parts?",
        answer: "Yes. Arktech can provide dimensional inspection reports for critical dimensions and support sample approval records before production."
      }
    ]
  },
  {
    slug: "industrial-automation",
    title: "Industrial Automation Components",
    description:
      "Manufacturing support for industrial automation components including control housings, sensor housings, connector components, machine covers, brackets and durable assemblies.",
    eyebrow: "Industry",
    heroTitle: "Industrial automation component manufacturing for durable equipment and control systems.",
    heroBody:
      "Arktech supports industrial automation programs with export injection molds, plastic injection molding, CNC machining, die casting, sheet metal fabrication and assembly support for durable control and equipment components.",
    intro:
      "Industrial automation parts must survive demanding factory environments while fitting reliably into machines, sensors, controllers and electrical systems. Arktech helps teams develop control housings, sensor housings, connector components, machine covers and brackets with attention to industrial durability, heat resistance and dimensional control.",
    sections: [
      {
        title: "Industry Manufacturing Support Overview",
        items: [
          "Export injection molds for control housings, sensor housings and machine covers",
          "Plastic injection molding for durable industrial enclosures and connector components",
          "CNC machining and die casting for brackets, frames and metal housings",
          "Assembly support for inserts, fasteners, gaskets and labeled components"
        ]
      },
      {
        title: "Typical Components",
        items: [
          "Control housings, HMI covers and industrial electrical enclosures",
          "Sensor housings, connector components and protective caps",
          "Machine covers, brackets, mounting plates and structural frames",
          "Plastic and metal assemblies for automation equipment"
        ]
      },
      {
        title: "Relevant Capabilities",
        items: [
          "Injection mold manufacturing for industrial plastic housings",
          "Plastic injection molding for functional and durable components",
          "CNC machining and die casting for precision metal parts",
          "Sheet metal fabrication, finishing and secondary operations"
        ]
      },
      {
        title: "Common Engineering Challenges",
        items: [
          "Industrial durability under vibration, repeated use and factory handling",
          "Heat resistance and dimensional control for equipment environments",
          "Assembly fit between plastic housings, PCBs, connectors, brackets and fasteners",
          "Surface finish, labeling, sealing and installation reliability"
        ]
      },
      {
        title: "Materials & Surface Finishing",
        items: [
          "ABS, PC/ABS, PC, PA-GF, PBT and POM for industrial molded parts",
          "Aluminum, zinc, stainless steel and sheet metal for structural and protective parts",
          "Texture, painting, pad printing, laser marking, anodizing and powder coating",
          "Material selection based on heat, impact, wear, electrical and assembly requirements"
        ]
      },
      {
        title: "Quality & Documentation",
        items: [
          "DFM review for ribs, bosses, mounting features, clips and sealing areas",
          "Dimensional inspection report for mounting and assembly-critical areas",
          "Material certificate, finishing reference and sample approval records",
          "Packaging and export delivery planning for industrial components"
        ]
      },
      {
        title: "Related Case Studies",
        items: [
          "Die cast control housing with CNC finishing plan",
          "Industrial electronics enclosure tooling and molding support",
          "Plastic and metal assembly planning for control equipment"
        ]
      }
    ],
    processFlow: ["CAD and application review", "DFM and material selection", "Tooling or machining plan", "Sample validation and fit check", "Inspection and finishing review", "Production and export packing"],
    relatedLinks: [
      { label: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" },
      { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding" },
      { label: "CNC Metal Parts", href: "/services/cnc-metal-parts" },
      { label: "Die Casting Mold Manufacturing", href: "/services/die-casting-mold" }
    ],
    faqs: [
      {
        question: "Can Arktech support industrial control housings?",
        answer: "Yes. Arktech supports control housings with DFM review, injection mold manufacturing, plastic injection molding, inspection and secondary operations."
      },
      {
        question: "What materials are common for industrial automation parts?",
        answer: "Common materials include ABS, PC/ABS, PC, PA-GF, PBT, POM, aluminum, zinc and stainless steel depending on heat, strength, wear and assembly needs."
      },
      {
        question: "Can you support plastic and metal automation components together?",
        answer: "Yes. Industrial automation programs often require molded plastic housings plus CNC machined, die cast or sheet metal components. Arktech can coordinate related parts under one project workflow."
      }
    ]
  },
  {
    slug: "new-energy",
    title: "New Energy Enclosures",
    description:
      "Molded plastic and metal component manufacturing for EV, energy storage, charging, and new energy equipment programs.",
    eyebrow: "Industry",
    heroTitle: "New energy enclosures and components for EV, charging, and storage programs.",
    heroBody:
      "Arktech supports EV, charging, battery accessory, and energy equipment programs with engineered plastic parts, die cast tooling, CNC parts, and assemblies.",
    sections: [
      { title: "Typical Components", items: ["Electrical housings and covers", "Connectors, brackets, and insulation-related parts", "Die cast and CNC machined metal components"] },
      { title: "Key Requirements", items: ["Heat and material performance", "Dimensional consistency", "Reliable supplier communication for launch timing"] }
    ]
  },
  {
    slug: "outdoor-products",
    title: "Outdoor Product Housings",
    description:
      "Plastic injection molding, tooling, CNC metal parts, and assemblies for outdoor equipment, hardware, and durable product programs.",
    eyebrow: "Industry",
    heroTitle: "Outdoor product housings and durable plastic-metal components.",
    heroBody:
      "We support outdoor product companies with molded plastic housings, handles, brackets, metal parts, fasteners, and assembled components designed for real-use durability.",
    sections: [
      { title: "Typical Components", items: ["Handles, covers, housings, and clips", "Brackets, hinges, machined parts, and inserts", "Weather-exposed plastic and metal assemblies"] },
      { title: "Key Requirements", items: ["Impact and UV resistance", "Fit and fastening reliability", "Surface finish and packaging consistency"] }
    ]
  },
  {
    slug: "pet-tech",
    title: "Pet Tech Product Parts",
    description:
      "Tooling and component manufacturing for pet tech devices, dispensers, feeders, housings, mechanisms, and plastic-metal assemblies.",
    eyebrow: "Industry",
    heroTitle: "Pet tech product parts for connected devices, feeders, and dispensers.",
    heroBody:
      "Arktech supports connected pet products, feeders, dispensers, housings, and mechanisms where molded plastic quality and assembly details affect user experience.",
    sections: [
      { title: "Typical Components", items: ["Device housings, bowls, covers, and dispenser parts", "Internal mechanisms, brackets, and fastened assemblies", "Cosmetic molded parts with functional interfaces"] },
      { title: "Key Requirements", items: ["Food-contact and material considerations", "Smooth assembly and cleaning details", "Cosmetic consistency for consumer-facing products"] }
    ]
  }
];

const commonToolingServices = [
  { label: "Export Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" },
  { label: "Mold Trial & Validation", href: "/injection-molds/mold-trial-validation" },
  { label: "Mold Spare Parts", href: "/injection-molds/mold-spare-parts" },
  { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding" },
  { label: "Request an RFQ", href: "/request-a-quote" }
];

const commonToolingIndustries = [
  { label: "Automotive Components", href: "/industries/automotive" },
  { label: "Medical Devices", href: "/industries/medical-devices" },
  { label: "Industrial Automation", href: "/industries/industrial-automation" }
];

type ToolingPageConfig = {
  slug: string;
  title: string;
  keyword: string;
  heroTitle: string;
  description: string;
  intro: string;
  primaryApplications: string[];
  advantages: string[];
  engineering: string[];
  designFeatures: string[];
  materials: string[];
  validation: string[];
  docs: string[];
  why: string[];
  gallery: { src: string; alt: string }[];
  faqs: { question: string; answer: string }[];
};

function toolingPage(config: ToolingPageConfig): DetailPageData {
  return {
    slug: config.slug,
    title: config.title,
    description: config.description,
    eyebrow: "Injection Mold Type",
    heroTitle: config.heroTitle,
    heroBody:
      `${config.description} Arktech supports export tooling buyers with DFM engineering, mold trial support, inspection documentation, tooling spare parts and export packing for production-ready delivery.`,
    intro: config.intro,
    galleryImages: config.gallery,
    sections: [
      {
        title: "Overview",
        items: [
          `${config.title} is handled as an export tooling program, not only as a steel-cutting task. Arktech reviews part geometry, resin behavior, molding process, inspection needs and customer production environment before tooling release.`,
          `For European and North American product companies and injection molding companies, the goal is to receive export injection molds that are easier to sample, maintain and transfer into local production after shipment.`,
          `Each project connects DFM engineering, mold design review, machining, fitting, trial, sampling, correction records, dimensional inspection and export packing into one controlled workflow.`
        ]
      },
      {
        title: "Advantages",
        items: config.advantages
      },
      {
        title: "Typical Applications",
        items: config.primaryApplications
      },
      {
        title: "Engineering / DFM Considerations",
        items: config.engineering
      },
      {
        title: "Mold Design Features",
        items: config.designFeatures
      },
      {
        title: "Material Compatibility",
        items: config.materials
      },
      {
        title: "Manufacturing Process",
        items: [
          "RFQ and CAD review covering part function, drawing requirements, annual volume, resin, tolerance targets and expected receiving molding environment.",
          "DFM engineering review before tooling release, including parting line, gate location, ejection, steel selection, cooling, shrinkage, surface finish and inspection priorities.",
          "Mold design, customer review, steel purchase, CNC machining, EDM, wire cutting, polishing, fitting, assembly and internal mechanism verification.",
          "Mold trial, sampling, correction loop, dimensional inspection and customer approval preparation before export packing."
        ]
      },
      {
        title: "Mold Trial & Validation",
        items: config.validation
      },
      {
        title: "Quality & Documentation",
        items: config.docs
      },
      {
        title: "Why Arktech",
        items: config.why
      },
      {
        title: "Related Industries",
        items: commonToolingIndustries.map((item) => `${item.label}: tooling and molded component support where ${config.keyword} planning can improve manufacturability, sampling confidence and production stability.`)
      },
      {
        title: "Related Case Studies",
        items: [
          "Automotive sensor housing tooling: DFM review, export mold manufacturing, sampling and dimensional inspection for a European injection molder.",
          "Medical device cartridge molding: precision plastic tooling and inspection planning for tight assembly interfaces.",
          "Smart home plastic housing: cosmetic part design review, injection mold manufacturing and sample approval support."
        ]
      }
    ],
    processFlow: [
      "CAD, RFQ and production requirement review",
      "DFM engineering and mold concept alignment",
      "3D mold design and customer design review",
      "Steel purchase, CNC machining, EDM, fitting and assembly",
      "T1 mold trial, sampling and correction actions",
      "Inspection documentation, spare parts and export packing"
    ],
    relatedLinks: commonToolingServices,
    faqs: config.faqs
  };
}

export const toolingExamplePages: DetailPageData[] = [
  toolingPage({
    slug: "multi-cavity-molds",
    title: "Multi-Cavity Injection Molds",
    keyword: "multi cavity mold",
    description:
      "Multi-cavity mold manufacturing for high-volume plastic parts requiring balanced filling, repeatable dimensions, efficient cycle time and stable export production.",
    heroTitle: "Multi-cavity injection molds for repeatable export production.",
    intro:
      "Multi-cavity injection molds are often selected when product demand, part size and unit cost targets require multiple identical parts in every cycle. For overseas injection molding companies, the risk is not only building more cavities; the real challenge is keeping filling balance, cooling balance, cavity-to-cavity dimensions, venting, ejection and maintenance access consistent across the tool. Arktech designs multi cavity mold programs with DFM engineering, mold flow thinking, steel selection, replaceable wear areas, cavity identification and trial validation so export molds can be transferred into production with fewer surprises.",
    gallery: [
      { src: "/images/mold-types/multi-cavity-injection-molds.png", alt: "Multi-cavity injection mold for export production tooling" },
      { src: "/images/capabilities/injection-mold-manufacturing.jpg", alt: "Injection mold manufacturing and design review for multi-cavity molds" },
      { src: "/images/seo/injection-mold-manufacturing.png", alt: "Plastic parts and export injection mold engineering review" }
    ],
    advantages: [
      "Improves output per cycle for high-volume molded components while reducing unit part cost when cavity balance is properly controlled.",
      "Supports repeatable dimensions across cavities through balanced runner design, cooling strategy, venting and cavity-specific inspection planning.",
      "Allows cavity identification, interchangeable inserts and practical tooling spare parts for maintenance after the mold arrives at the customer site.",
      "Fits product companies and injection molding companies that need export injection molds prepared for stable local production rather than short-term sampling only."
    ],
    primaryApplications: [
      "Caps, clips, brackets, electrical housings, connector components, medical disposable parts, smart device parts and repeated functional plastic components.",
      "Automotive and EV plastic parts where cavity-to-cavity consistency, assembly fit and dimensional repeatability affect downstream production.",
      "Consumer electronics, appliance and smart product components requiring consistent cosmetic surfaces and controlled gate vestige across many cavities.",
      "Industrial automation parts where high volume and reliable replacement cavity components matter for long production life."
    ],
    engineering: [
      "Runner or hot runner layout must be reviewed to reduce short shots, flash differences, pressure imbalance and inconsistent packing between cavities.",
      "Cooling channels, baffles, bubblers and insert cooling should be planned so the first and last cavities do not show different shrinkage behavior.",
      "Parting line, venting and ejector design need cavity repeatability; small venting differences can create burn marks or filling variation in production.",
      "Inspection planning should compare critical dimensions cavity by cavity, not only one sample from the whole mold trial."
    ],
    designFeatures: [
      "Balanced cold runner or hot runner systems with cavity numbering, serviceable gates and practical maintenance access.",
      "Interchangeable cavity/core inserts for wear control, faster repair and future engineering changes.",
      "Consistent ejection layout, cooling circuit labeling and mold base standards suitable for export tooling maintenance.",
      "Spare inserts, gate components, ejector pins, springs, heaters or thermocouples prepared according to mold complexity."
    ],
    materials: [
      "ABS, PC, PC/ABS, PP, PA, POM, PBT, TPE, TPU and filled engineering plastics depending on part function and expected production volume.",
      "Glass-filled resins require special attention to gate wear, venting, steel hardness and dimensional stability across cavities.",
      "Flame-retardant and cosmetic materials require careful thermal control and surface finish review during mold trial support.",
      "Material shrinkage assumptions are confirmed during DFM and adjusted after sampling data when needed."
    ],
    validation: [
      "T1 trial checks filling balance, cavity pressure behavior, flash, short shot risk, gate freeze, warpage and part dimensions across all cavities.",
      "Dimensional inspection reports should identify cavity numbers so correction actions can target specific cavity conditions.",
      "Sampling includes process notes, visual review and recommendations for mold correction before shipment.",
      "Final approval preparation can include mold trial report, sample photos, correction log, spare parts list and export packing checklist."
    ],
    docs: [
      "3D mold design review files, 2D mold drawings where required and final mold layout records.",
      "Mold trial report, dimensional inspection report, material record and cavity-specific measurement summary.",
      "Steel certificate, heat treatment record when applicable and purchased component list for HASCO, DME, Meusburger or equivalent standards.",
      "Export packing photos, mold maintenance notes and tooling spare parts list before shipment."
    ],
    why: [
      "Arktech treats multi-cavity injection molds as engineering-controlled export tooling projects with clear DFM review before steel cutting.",
      "Our team supports English project communication, mold design review, sampling feedback and documentation for overseas injection molders.",
      "We can coordinate related plastic injection molding, CNC machining, die casting and assembly support when the mold is part of a larger product launch.",
      "The objective is a production-ready mold package with practical documentation, not only a good-looking T1 sample."
    ],
    faqs: [
      { question: "What is the key risk in a multi cavity mold?", answer: "The key risk is cavity imbalance. Filling, cooling, venting, ejection and shrinkage must be controlled so every cavity can produce parts within the same acceptance standard." },
      { question: "Can Arktech build export multi-cavity molds for overseas molding factories?", answer: "Yes. Arktech supports export injection molds for injection molding companies with mold trial support, dimensional inspection reports, spare parts and export packing." },
      { question: "Do you support hot runner multi-cavity molds?", answer: "Yes. Multi-cavity molds can be designed with cold runners, hot runners or hybrid approaches depending on resin, volume, part geometry and customer molding requirements." }
    ]
  }),
  toolingPage({
    slug: "hot-runner-molds",
    title: "Hot Runner Injection Molds",
    keyword: "hot runner mold manufacturer",
    description:
      "Hot runner mold manufacturing for production plastic parts requiring reduced runner waste, balanced filling, stable gate control and validated export tooling.",
    heroTitle: "Hot runner injection molds for efficient export molding programs.",
    intro:
      "Hot runner molds are widely used by injection molding companies and product companies that need high-volume production, reduced material waste and controlled gate performance. A hot runner mold manufacturer must consider thermal balance, resin sensitivity, gate location, manifold service access, heater and thermocouple routing, maintenance needs and mold trial behavior. Arktech supports hot runner injection mold projects from DFM engineering and mold design review through T1 sampling, correction actions, documentation and export packing.",
    gallery: [
      { src: "/images/seo/injection-mold-manufacturing.png", alt: "Hot runner injection mold engineering and export tooling review" },
      { src: "/images/capabilities/injection-mold-manufacturing.jpg", alt: "Injection mold manufacturing for hot runner molds" },
      { src: "/images/mold-types/multi-cavity-injection-molds.png", alt: "Production injection mold with multi-cavity and hot runner planning" }
    ],
    advantages: [
      "Reduces cold runner waste and improves material efficiency for high-volume plastic injection molding programs.",
      "Supports faster cycle targets when thermal balance, gate freeze and cooling are properly reviewed during mold design.",
      "Improves cosmetic and dimensional repeatability for parts where gate position and packing control are important.",
      "Can be configured for valve gate, open gate, multi-drop or family mold requirements depending on resin and part geometry."
    ],
    primaryApplications: [
      "Automotive connectors, housings, clips, appliance components, medical device parts and consumer electronics enclosures.",
      "Large-volume programs using ABS, PP, PC/ABS, PA, PBT, POM, TPE or engineering resins where runner waste affects cost.",
      "Cosmetic covers, smart device housings and functional parts where gate vestige, weld lines and flow marks must be reviewed early.",
      "Multi-cavity injection molds that require stable filling and balanced thermal control."
    ],
    engineering: [
      "Gate location must consider filling path, weld line position, cosmetic surface, part strength and trimming or vestige expectations.",
      "Thermal expansion, manifold balance and heater access should be reviewed so maintenance after export is practical.",
      "Resin sensitivity matters; materials such as PC, POM, PA, flame-retardant grades or filled resins may require special temperature control.",
      "Mold trial should confirm gate vestige, drool, stringing, short shot, color change behavior and cavity balance."
    ],
    designFeatures: [
      "Hot runner manifold layout with serviceable heater and thermocouple routing.",
      "Open gate or valve gate selection based on cosmetic, cycle, resin and gate vestige requirements.",
      "Insulation, cooling and wiring protection designed for safe operation and future maintenance.",
      "Compatible purchased components and clear documentation for the receiving molding team."
    ],
    materials: [
      "ABS, PP, PE, PC, PC/ABS, PA, PBT, POM, TPE and TPU can be used when the hot runner system is selected for the resin behavior.",
      "Heat-sensitive or flame-retardant materials require careful residence time and temperature control.",
      "Glass-filled materials require attention to gate wear and steel selection around high-flow areas.",
      "Color and cosmetic requirements should be communicated before design because gate style affects appearance and process window."
    ],
    validation: [
      "T1 mold trial checks gate balance, drool, stringing, vestige, filling pattern, pressure, temperature stability and cavity consistency.",
      "Sampling records include process windows, visual inspection notes and recommendations for design or tooling correction.",
      "For valve gate systems, timing, sequence and pneumatic or hydraulic function are checked before shipment.",
      "Final export validation confirms wiring labels, controller compatibility, spare heaters, thermocouples and maintenance records."
    ],
    docs: [
      "Hot runner layout, wiring diagram, component list and purchased component specifications.",
      "Mold trial report, sample inspection record and gate/cavity balance notes.",
      "Steel certificate, hot runner component records and spare heater or thermocouple list when applicable.",
      "Export packing checklist and maintenance notes for the customer molding team."
    ],
    why: [
      "Arktech combines mold design review with practical hot runner manufacturing experience for export tooling programs.",
      "We focus on serviceability because overseas injection molding companies need molds that can be maintained after arrival.",
      "DFM engineering and mold trial support help identify gate, flow, heat and cosmetic risks before the tool is shipped.",
      "Our documentation package supports easier handover from China tooling to customer-side production."
    ],
    faqs: [
      { question: "When should a hot runner mold be used?", answer: "Hot runner molds are useful for high-volume parts, multi-cavity molds, expensive resins or applications where runner waste and cycle time affect production cost." },
      { question: "Can you support customer-specified hot runner brands?", answer: "Yes. We can review customer requirements for common hot runner systems and align the mold design with maintenance and controller expectations." },
      { question: "Do hot runner molds need special validation before export?", answer: "Yes. Heater function, thermal balance, gate behavior, wiring labels, spare parts and sampling records should be checked before export packing." }
    ]
  }),
  toolingPage({
    slug: "insert-molds",
    title: "Insert Molding Tools",
    keyword: "insert molding tools",
    description:
      "Insert molding tools for plastic parts with threaded inserts, terminals, bushings, pins and integrated metal features requiring stable positioning and export tooling discipline.",
    heroTitle: "Insert molding tools for plastic-metal component production.",
    intro:
      "Insert molding tools are used when metal terminals, threaded inserts, bushings, pins or reinforcement features must be molded directly into plastic parts. The tooling challenge is controlling insert location, insert retention, plastic flow, operator loading, automation options, thermal behavior and inspection. Arktech supports insert molding tools with DFM engineering, mold design review, insert fixture planning, mold trial support and export documentation so product companies and injection molding companies can reduce assembly steps without creating molding instability.",
    gallery: [
      { src: "/images/mold-types/insert-molding-tools.png", alt: "Insert molding tools for molded parts with integrated metal features" },
      { src: "/images/capabilities/plastic-injection-molding.webp", alt: "Plastic injection molding quality inspection for insert molded components" },
      { src: "/images/seo/oem-industry-components.png", alt: "Plastic and metal components for insert molding applications" }
    ],
    advantages: [
      "Reduces secondary assembly by molding metal inserts or functional hardware directly into the plastic part.",
      "Improves strength, electrical connection, threaded fastening or wear resistance when insert placement is controlled.",
      "Supports product designs where plastic and metal interfaces must be repeatable across production batches.",
      "Can reduce total cost when tooling, loading method, inspection and production cycle are planned correctly."
    ],
    primaryApplications: [
      "Threaded inserts, metal terminals, electrical contacts, bushings, pins, shafts, magnets and reinforced mounting points.",
      "Robotics, industrial automation, consumer electronics, medical device, smart home and automotive plastic components.",
      "Connector housings, control housings, sensor brackets, device bases and components requiring integrated metal functionality.",
      "Parts where post-mold assembly would create alignment risk or added labor cost."
    ],
    engineering: [
      "Insert tolerance and plating thickness should be reviewed because metal part variation directly affects mold loading and part dimensions.",
      "Insert preheating, retention features and plastic flow path may affect bond strength, sink marks, voids or stress around the metal feature.",
      "Manual loading, semi-automatic loading or robotic loading should be considered early because it affects mold layout and cycle time.",
      "Inspection planning must confirm insert position, pull-out resistance where required, plastic coverage and assembly fit."
    ],
    designFeatures: [
      "Insert nests, magnets, pins, slides or mechanical retention details to keep inserts stable during mold closing and injection.",
      "Operator-friendly loading access, poka-yoke orientation features and safe ejection to reduce production mistakes.",
      "Venting and gate strategy that fills around inserts without trapping gas or shifting the insert.",
      "Replaceable wear components around insert areas for long-term maintenance."
    ],
    materials: [
      "ABS, PC, PC/ABS, PA, PBT, PPS, POM, PP and filled engineering plastics are common depending on heat, strength and electrical needs.",
      "Brass, stainless steel, copper alloy, aluminum and plated steel inserts can be evaluated for compatibility with the molding process.",
      "High-temperature materials may require mold steel, insert retention and thermal expansion review.",
      "Glass-filled plastics require attention to wear and insert-area stress concentration."
    ],
    validation: [
      "Mold trials check insert movement, short shot around inserts, flash, sink, cracks, voids and ejection damage.",
      "Dimensional inspection confirms both molded plastic features and insert position relative to functional datums.",
      "Where required, pull-out testing, torque testing or assembly checks can be built into the validation plan.",
      "Operator loading notes and process window recommendations are recorded before export shipment."
    ],
    docs: [
      "Insert loading instructions, mold trial report, dimensional inspection report and key insert measurement records.",
      "Steel certificate, insert nest material notes and replaceable component list.",
      "Sample approval photos, correction log and packaging records for insert molded samples.",
      "Spare parts list for insert nests, pins, ejectors, springs and wear components."
    ],
    why: [
      "Arktech reviews both the plastic part and insert interface before tooling release, which helps reduce production surprises.",
      "We understand insert molding tools require practical manufacturing behavior, not only a CAD model that closes.",
      "Our mold trial support focuses on insert stability, operator repeatability and dimensional inspection.",
      "Export tooling packages can include spare insert nests and clear maintenance records for overseas molding teams."
    ],
    faqs: [
      { question: "What files are useful for an insert molding RFQ?", answer: "Please send the plastic part CAD, insert drawings, insert material, plating information, annual volume, tolerance requirements and any assembly or pull-out requirements." },
      { question: "Can Arktech help review insert positioning before tooling?", answer: "Yes. DFM engineering includes insert location, retention, loading access, plastic flow and inspection planning before mold design release." },
      { question: "Do insert molding tools need spare parts?", answer: "Usually yes. Insert nests, pins, ejectors and wear areas should be considered for tooling spare parts because they are exposed to repeated loading and contact." }
    ]
  }),
  toolingPage({
    slug: "overmolding-tools",
    title: "Overmolding Tools",
    keyword: "overmolding tools",
    description:
      "Overmolding tools for multi-material plastic parts, soft-touch surfaces, seals, grips and protective features requiring substrate control and validated bonding.",
    heroTitle: "Overmolding tools for multi-material product components.",
    intro:
      "Overmolding tools are used when a second material is molded over a plastic, metal or previously molded substrate. Common goals include soft-touch feel, sealing, grip, vibration reduction, impact protection or functional integration. The engineering challenge is material compatibility, substrate positioning, shutoff control, bonding, flash prevention and cosmetic quality. Arktech supports overmolding tools through DFM engineering, substrate review, mold design, sampling and export tooling documentation.",
    gallery: [
      { src: "/images/capabilities/plastic-injection-molding-v2.png", alt: "Overmolding tool support for multi-material plastic components" },
      { src: "/images/mold-types/two-shot-2k-bi-injection-molds.png", alt: "Two-shot and overmolding tooling for multi-material parts" },
      { src: "/images/seo/plastic-injection-molding.png", alt: "Plastic injection molding and overmolding engineering support" }
    ],
    advantages: [
      "Combines multiple materials into one component to improve grip, sealing, protection or appearance.",
      "Can reduce assembly steps by replacing adhesive, gasket or secondary manual installation operations.",
      "Supports premium product feel for handles, wearable parts, outdoor devices, medical devices and smart products.",
      "Improves functional integration when substrate geometry, material bond and shutoff surfaces are reviewed correctly."
    ],
    primaryApplications: [
      "Soft-touch grips, seals, buttons, protective covers, cable grommets, wearable device parts and handheld product housings.",
      "Medical device handles, diagnostic product covers, outdoor product seals and consumer electronics protection features.",
      "Plastic-over-plastic, rubber-over-plastic, TPE-over-PC/ABS and plastic-over-metal components.",
      "Products requiring water resistance, impact protection, ergonomic feel or multi-color appearance."
    ],
    engineering: [
      "Material compatibility and chemical bonding should be confirmed before tooling because not every soft material bonds to every substrate.",
      "Substrate location and deformation risk must be reviewed; a weak substrate can shift during second-shot injection.",
      "Shutoff surfaces require enough strength and precision to prevent flash between the substrate and overmold material.",
      "Gate location, flow length, venting and material temperature must be planned to avoid burns, bubbles, short shots and cosmetic marks."
    ],
    designFeatures: [
      "Substrate holding fixtures, nests, pins or shutoff surfaces designed for repeatable loading and stable molding.",
      "Controlled flash shutoffs around sealing edges, grip boundaries and visible cosmetic transitions.",
      "Ejection and handling strategy that avoids damaging the soft material after molding.",
      "Replaceable inserts around high-wear shutoff and gate areas."
    ],
    materials: [
      "TPE, TPU, TPV, silicone-like thermoplastics, ABS, PC/ABS, PC, PP, PA and metal substrates can be evaluated depending on bond requirements.",
      "Soft material hardness, melt temperature and shrinkage need to be matched with substrate strength and surface condition.",
      "Medical or skin-contact applications may require material certificates and packaging review.",
      "Outdoor applications may require UV, chemical or weather resistance discussion before tooling."
    ],
    validation: [
      "T1 samples are reviewed for bond strength, flash, short shot, surface quality, soft material deformation and substrate alignment.",
      "Assembly or pull tests can be planned when overmolded features serve as seals, grips or protective parts.",
      "Dimensional inspection checks the substrate and overmolded surfaces around critical shutoffs and assembly areas.",
      "Process notes document material temperature, injection speed and handling recommendations."
    ],
    docs: [
      "DFM review notes for material compatibility, substrate control and shutoff risks.",
      "Mold trial report, sample photos, dimensional inspection report and correction records.",
      "Material certificate, color reference and surface appearance records where required.",
      "Spare parts list for shutoff inserts, gates, ejectors and fixture components."
    ],
    why: [
      "Arktech treats overmolding as a material and process engineering problem, not only a second mold cavity.",
      "Our team reviews substrate geometry, bond risk and flash control before mold release.",
      "We support product companies developing premium functional plastic components and injection molders needing export-ready overmolding tools.",
      "Mold trial support helps confirm whether the design can move from prototype idea to repeatable production."
    ],
    faqs: [
      { question: "Is overmolding the same as two-shot molding?", answer: "Not always. Overmolding often uses a pre-molded or inserted substrate, while two-shot molding uses a specialized machine and mold system to mold two materials in one automated sequence." },
      { question: "How do you reduce flash in overmolding tools?", answer: "Flash reduction depends on substrate control, shutoff design, material pressure, mold precision and trial correction. These points are reviewed during DFM and sampling." },
      { question: "Can Arktech help choose overmolding materials?", answer: "Yes. We can review common substrate and overmold material combinations and highlight bonding, hardness, shrinkage and appearance risks." }
    ]
  }),
  toolingPage({
    slug: "unscrewing-molds",
    title: "Unscrewing Molds",
    keyword: "unscrewing mold",
    description:
      "Unscrewing mold manufacturing for threaded plastic components, closures, caps, connectors and technical parts requiring controlled mechanical release.",
    heroTitle: "Unscrewing molds for threaded plastic components.",
    intro:
      "An unscrewing mold is required when molded threads cannot be released with a simple straight ejection, slide or collapsible core. These tools require reliable mechanical motion, precise thread geometry, wear-resistant components and stable cycle behavior. Arktech supports unscrewing molds for export tooling programs where threaded plastic parts must be sampled, validated, documented and transferred into customer production with clear maintenance planning.",
    gallery: [
      { src: "/images/mold-types/unscrewing-molds.png", alt: "Unscrewing mold for threaded plastic parts" },
      { src: "/images/seo/injection-mold-manufacturing.png", alt: "Export injection mold engineering for unscrewing mold projects" },
      { src: "/images/capabilities/injection-mold-manufacturing.jpg", alt: "Precision mold manufacturing for threaded plastic components" }
    ],
    advantages: [
      "Allows internal or external threads to be molded directly with accurate thread form and consistent release.",
      "Reduces secondary machining or thread-forming operations when the tool mechanism is stable.",
      "Supports caps, closures, fittings, connector housings and technical plastic parts with functional threaded interfaces.",
      "Provides better repeatability than forcing thread release through deformation when the part material or geometry cannot tolerate it."
    ],
    primaryApplications: [
      "Threaded caps, closures, medical connectors, industrial fittings, sensor housings, fluid components and electrical connector parts.",
      "Plastic parts with internal threads, external threads, bayonet features or screw-on assembly interfaces.",
      "Components using PP, PE, PA, POM, PC/ABS, PBT or filled engineering plastics where release reliability matters.",
      "Export molds for injection molding companies that need production-ready thread forming and maintenance guidance."
    ],
    engineering: [
      "Thread pitch, depth, draft, root radius and material shrinkage must be reviewed before mold design.",
      "Mechanism type may include motor, rack, gear, hydraulic or collapsible solutions depending on geometry and cycle target.",
      "Cooling and lubrication around rotating cores are important because heat and wear can affect thread accuracy.",
      "Part ejection after unscrewing must be stable to avoid thread damage or cosmetic defects."
    ],
    designFeatures: [
      "Driven thread cores, gears, racks or motorized systems designed for reliable release and repeatable cycle timing.",
      "Hardened and wear-resistant components around rotating cores and thread-forming areas.",
      "Serviceable mechanism layout with clear lubrication points and spare component planning.",
      "Sensors or mechanical sequence protection when required by mold complexity."
    ],
    materials: [
      "PP, PE, POM, PA, PC, ABS, PC/ABS and PBT are common, with shrinkage and thread strength reviewed by material.",
      "Glass-filled materials require wear review around thread cores and possible steel upgrades.",
      "Flexible materials may not require unscrewing in some cases, but deformation risk must be evaluated.",
      "Materials exposed to fluid, chemicals or heat should be reviewed for thread durability and sealing requirements."
    ],
    validation: [
      "Mold trial checks unscrewing sequence, thread release, cycle timing, thread dimensions, part deformation and ejection reliability.",
      "Thread gauges, assembly checks or mating-part tests can be used when thread function is critical.",
      "Dimensional inspection focuses on thread pitch, diameter, depth and functional assembly interfaces.",
      "Mechanism noise, wear, lubrication and repeatability are checked before export packing."
    ],
    docs: [
      "Mold mechanism explanation, maintenance notes and lubrication guidance.",
      "Mold trial report, dimensional inspection report and threaded fit check results.",
      "Steel certificate, purchased component list and spare gear/core/ejector planning when applicable.",
      "Export packing records and tooling spare parts list for receiving molding teams."
    ],
    why: [
      "Arktech understands that unscrewing molds must be designed for long-term mechanical reliability, not only first sample success.",
      "We review threaded geometry during DFM so tooling risk is addressed before machining.",
      "Mold trial support verifies thread function, sequence timing and maintenance-sensitive areas.",
      "Export documentation helps overseas injection molding companies operate and maintain the mechanism after delivery."
    ],
    faqs: [
      { question: "When is an unscrewing mold required?", answer: "It is usually required when a molded thread cannot be released by draft, deformation, slides or collapsible cores without damaging the part or losing thread accuracy." },
      { question: "Can you validate thread function before shipment?", answer: "Yes. We can support thread gauges, mating-part checks, dimensional inspection and mold trial reports before export delivery." },
      { question: "Are unscrewing molds difficult to maintain?", answer: "They require more maintenance than simple molds. Clear lubrication, spare components and mechanism documentation are important for overseas production." }
    ]
  }),
  toolingPage({
    slug: "two-shot-2k-molds",
    title: "Two-Shot / 2K Injection Molds",
    keyword: "2k mold",
    description:
      "Two-shot and 2K mold support for multi-material or multi-color plastic components requiring rotating mold systems, bonding review and production validation.",
    heroTitle: "Two-shot 2K injection molds for integrated multi-material parts.",
    intro:
      "Two-shot injection molds, also called 2K molds or bi-injection molds, allow two materials or two colors to be molded into one finished component using a specialized molding sequence. These tools require careful review of machine compatibility, rotating mold layout, material bonding, shrinkage, shutoff surfaces and cosmetic transition lines. Arktech supports 2K mold programs with DFM engineering, tooling strategy, mold trial support and export-ready documentation for product companies and injection molding companies.",
    gallery: [
      { src: "/images/mold-types/two-shot-2k-bi-injection-molds.png", alt: "Two-shot 2K bi-injection mold tooling for multi-material components" },
      { src: "/images/capabilities/plastic-injection-molding-v2.png", alt: "Two-shot and overmolded plastic parts for product development" },
      { src: "/images/seo/plastic-injection-molding.png", alt: "Plastic injection molding support for 2K mold programs" }
    ],
    advantages: [
      "Integrates two materials or two colors into one part with stronger repeatability than many secondary assembly processes.",
      "Improves product feel, sealing, function or appearance for handles, controls, covers, buttons and device housings.",
      "Can reduce labor and assembly variation when the product volume supports 2K tooling investment.",
      "Supports premium OEM product designs where cosmetic transitions and functional materials must be controlled."
    ],
    primaryApplications: [
      "Soft-touch controls, two-color covers, grips, seals, buttons, medical handles, consumer electronics and smart device housings.",
      "Automotive interior components, appliance control interfaces and industrial handheld devices.",
      "Parts combining hard plastic with TPE/TPU or two compatible rigid materials.",
      "Programs where repeatability, appearance and automation are more important than the lowest initial tooling cost."
    ],
    engineering: [
      "Machine platen size, rotary table, injection unit configuration and shot sequence must match the mold concept.",
      "Material bonding, shrinkage difference and thermal behavior must be reviewed before mold design release.",
      "Shutoff and transition lines should be designed to control flash, cosmetic edges and second-shot overflow.",
      "Part geometry should be reviewed for first-shot stability during rotation or transfer."
    ],
    designFeatures: [
      "Rotary or index mold structure with first-shot and second-shot cavity alignment.",
      "Precision shutoff surfaces, transition-line control and ejection layout for finished multi-material parts.",
      "Cooling and venting designed for two different materials or molding conditions.",
      "Maintenance-friendly inserts and documentation for overseas molding teams."
    ],
    materials: [
      "Common combinations include PC/ABS with TPE, PP with compatible elastomer, ABS with TPU, or rigid-rigid two-color combinations.",
      "Material compatibility should be verified because poor bonding can cause peeling, leakage or functional failure.",
      "Medical, wearable and consumer applications may require special material certificates or surface feel requirements.",
      "Shrinkage mismatch must be considered to prevent warpage or stress after the second shot."
    ],
    validation: [
      "T1 trials verify first-shot positioning, second-shot filling, bonding, flash, transition line quality and dimensional stability.",
      "Samples are inspected for visual appearance, fit, soft material adhesion and assembly function.",
      "Correction actions may include shutoff adjustment, gate tuning, venting changes or process optimization.",
      "Final records help the customer understand the validated process before export mold delivery."
    ],
    docs: [
      "2K mold design review files, machine requirement notes and material compatibility notes.",
      "Mold trial report, sample inspection report and bonding/appearance review records.",
      "Steel certificate, purchased component list and spare insert plan.",
      "Export packing checklist and operating notes for the receiving injection molding company."
    ],
    why: [
      "Arktech reviews two-shot molds from both tooling and molding perspectives, which is essential for export success.",
      "We help customers clarify whether true 2K molding or overmolding is the better path for their product and volume.",
      "Our DFM engineering focuses on machine compatibility, material compatibility and validation before shipment.",
      "The result is a clearer tooling package for global product launches and overseas production transfer."
    ],
    faqs: [
      { question: "What is the difference between 2K molding and overmolding?", answer: "2K molding uses a specialized two-shot machine and mold sequence, while overmolding may use a separate pre-molded substrate loaded into another mold." },
      { question: "Can Arktech review material bonding for 2K parts?", answer: "Yes. We review material compatibility, shrinkage, transition lines and processing risks during DFM engineering." },
      { question: "Do 2K molds require machine information before quotation?", answer: "Yes. Machine configuration, platen size, rotary table or transfer requirements should be confirmed early." }
    ]
  }),
  toolingPage({
    slug: "large-component-molds",
    title: "Large Component Molds",
    keyword: "large component injection mold",
    description:
      "Large component injection molds for industrial housings, appliance parts, outdoor products and structural plastic components requiring controlled cooling and dimensional stability.",
    heroTitle: "Large component molds for structural plastic parts and housings.",
    intro:
      "Large component molds require a different tooling mindset than small precision parts. The challenge is not only mold size; cooling uniformity, part shrinkage, warpage, mold movement, injection pressure, machine compatibility, ejection force and export handling all become more important. Arktech supports large component mold programs for product companies and injection molding companies needing export injection molds for industrial housings, appliance parts, outdoor products and structural plastic components.",
    gallery: [
      { src: "/images/mold-types/large-component-molds.JPG", alt: "Large component injection mold for industrial housing production" },
      { src: "/images/seo/oem-manufacturing-hero.png", alt: "Large plastic housing and mold engineering support" },
      { src: "/images/capabilities/injection-mold-manufacturing.jpg", alt: "Export tooling manufacturing for large component molds" }
    ],
    advantages: [
      "Supports large housings and structural components that require stable geometry across wide surfaces.",
      "Controls warpage risk through early DFM review, rib design, wall thickness review, gate planning and cooling strategy.",
      "Helps overseas buyers receive export molds prepared for machine fit, lifting, maintenance and shipping requirements.",
      "Allows product teams to move from prototype evaluation to production tooling with clearer risk control."
    ],
    primaryApplications: [
      "Industrial equipment covers, machine panels, appliance housings, outdoor product shells, robotic covers and large smart device enclosures.",
      "Plastic parts requiring large visible surfaces, controlled assembly interfaces and dimensional stability.",
      "Products using ABS, PP, PC/ABS, HDPE, PA or filled materials for impact, stiffness or weather resistance.",
      "Programs where part size makes mold trial, shipping and receiving production preparation especially important."
    ],
    engineering: [
      "Wall thickness transitions, rib design, boss design and large flat surfaces should be reviewed for sink and warpage risk.",
      "Gate type, gate location and flow length must match resin behavior and available injection pressure.",
      "Cooling layout needs special attention because uneven cooling can create dimensional drift across large parts.",
      "Machine size, tie-bar spacing, shot capacity, lifting method and mold weight should be confirmed before tooling release."
    ],
    designFeatures: [
      "Robust mold base, lifting provisions, support pillars and guided movement for large mold stability.",
      "Cooling circuits designed for large-area temperature control and practical maintenance.",
      "Slides, lifters or inserts for undercuts, vents, clips and assembly features.",
      "Mold protection, handling and export packing designed for heavier tools."
    ],
    materials: [
      "ABS, PC/ABS, PP, HDPE, PA, PBT and glass-filled plastics are selected based on stiffness, impact, heat and outdoor exposure.",
      "UV-resistant or weather-resistant grades may be needed for outdoor and new energy products.",
      "Flame-retardant materials may require special gate, venting and process review.",
      "Large parts magnify shrinkage differences, so material selection must be connected with tolerance expectations."
    ],
    validation: [
      "T1 trial checks filling, short shots, weld lines, sink, warpage, ejection marks and assembly interface stability.",
      "Dimensional inspection may require fixture planning or agreed measurement datum because large flexible parts can move during measurement.",
      "Correction actions often focus on cooling, gate, rib, shrinkage and local steel-safe adjustments.",
      "Export validation includes mold lifting, packing, spare parts and receiving machine compatibility notes."
    ],
    docs: [
      "DFM report, mold design review, mold trial report and dimensional inspection report.",
      "Machine requirement notes, mold weight, lifting points and export packing checklist.",
      "Steel certificate, material certificate where applicable and maintenance/spare parts record.",
      "Sample approval photos and correction records before shipment."
    ],
    why: [
      "Arktech handles large component molds with attention to practical production transfer, not only sample appearance.",
      "We review machine compatibility, mold weight, cooling, warpage and export packing before shipment.",
      "Our DFM engineering helps product companies avoid late redesign when large plastic surfaces reveal sink or deformation.",
      "We support related CNC machining, die casting or assembly when large plastic components are part of a full product system."
    ],
    faqs: [
      { question: "What information is needed for a large component mold quote?", answer: "Please provide CAD, material, part size, surface requirements, expected annual volume, target machine information if available and delivery country." },
      { question: "How do you reduce warpage in large molded parts?", answer: "Warpage control starts with DFM review, wall thickness, rib design, gate location, material selection, cooling design and mold trial correction." },
      { question: "Can large molds be exported safely?", answer: "Yes. Export packing, lifting points, mold protection, spare parts and documentation should be planned before shipment." }
    ]
  }),
  toolingPage({
    slug: "gas-assisted-injection-molds",
    title: "Gas-Assisted Injection Molds",
    keyword: "gas assisted mold",
    description:
      "Gas-assisted injection mold support for thick-wall, large or structural plastic parts requiring controlled hollow sections, reduced sink and lighter weight.",
    heroTitle: "Gas-assisted injection molds for thick-wall and structural plastic parts.",
    intro:
      "Gas-assisted injection molding uses controlled gas pressure to form hollow channels or assist packing in selected areas of a plastic part. The process can reduce sink marks, part weight and clamp force for thick-wall or large components, but it requires careful part design, gas channel planning, material review and mold trial validation. Arktech supports gas assisted mold projects with DFM engineering, tooling strategy, sampling and documentation for export tooling buyers.",
    gallery: [
      { src: "/images/mold-types/large-component-molds.JPG", alt: "Large plastic component mold for gas-assisted molding review" },
      { src: "/images/seo/injection-mold-manufacturing.png", alt: "Export injection mold engineering support for gas-assisted molds" }
    ],
    advantages: [
      "Reduces sink marks and weight in thick-wall plastic parts when gas channel design is appropriate.",
      "Can improve surface quality and dimensional stability for handles, large housings and structural parts.",
      "May reduce injection pressure and clamp force requirements compared with conventional thick-wall molding.",
      "Supports product designs that need strength and stiffness without excessive material usage."
    ],
    primaryApplications: [
      "Handles, appliance parts, automotive interior components, large covers, thick ribs, structural housings and furniture-related plastic parts.",
      "Parts where conventional molding would create sink, long cycle time, high pressure or excessive weight.",
      "Industrial and outdoor products requiring thick sections with controlled appearance.",
      "Product companies evaluating lightweight structural plastic alternatives."
    ],
    engineering: [
      "Gas channel design, gas pin location and melt flow path must be reviewed together to prevent gas blow-through or incomplete packing.",
      "Wall thickness, rib structure and transition areas affect gas penetration and final part strength.",
      "Material viscosity and processing window influence whether gas-assisted molding is practical.",
      "Mold trial support is essential because gas pressure, timing and packing behavior must be tuned with real samples."
    ],
    designFeatures: [
      "Gas pins, gas channels and venting designed for controlled gas penetration.",
      "Cooling layout around thick sections to reduce cycle time and dimensional drift.",
      "Gate location coordinated with gas inlet and flow path to avoid unstable hollow channels.",
      "Serviceable gas components and clear process notes for the receiving production team."
    ],
    materials: [
      "ABS, PC/ABS, PP, PA and some filled engineering plastics can be considered depending on part geometry and process goals.",
      "Materials with stable melt behavior and suitable viscosity are better candidates for gas-assisted molding.",
      "Cosmetic requirements, paintability or texture should be reviewed because gas-assisted parts may have different surface behavior.",
      "Structural requirements should be confirmed through sample testing when hollow sections affect strength."
    ],
    validation: [
      "T1 trial checks gas channel formation, sink, surface quality, short shot, blow-through, strength and dimensional behavior.",
      "Process tuning includes gas pressure, delay timing, hold time, melt temperature and injection speed.",
      "Samples may be sectioned or tested to confirm hollow channel consistency when required.",
      "Documentation records process settings, sample observations and correction actions before export."
    ],
    docs: [
      "DFM notes explaining gas channel assumptions and risk areas.",
      "Mold trial report, process setting summary and dimensional inspection report.",
      "Sample photos, correction records and material certificate when required.",
      "Gas component notes, spare parts list and export packing checklist."
    ],
    why: [
      "Arktech evaluates gas-assisted molds as process-sensitive tooling projects requiring real trial validation.",
      "We help customers determine whether gas assistance is appropriate or whether conventional molding, structural redesign or material change is safer.",
      "Our mold trial support focuses on practical sample behavior, not only theoretical benefits.",
      "Export documentation helps overseas buyers understand the validated gas-assisted process before production transfer."
    ],
    faqs: [
      { question: "When is gas-assisted molding useful?", answer: "It is useful for thick-wall, large or structural parts where sink marks, weight, pressure or cycle time are difficult to control with conventional injection molding." },
      { question: "Can all plastics use gas-assisted molding?", answer: "No. Material viscosity, geometry and functional requirements must be reviewed before selecting a gas-assisted mold strategy." },
      { question: "Do gas-assisted molds need special trial support?", answer: "Yes. Gas pressure, timing, channel formation and sample performance must be validated during mold trial." }
    ]
  }),
  toolingPage({
    slug: "thermoset-molds",
    title: "Thermoset Molds",
    keyword: "thermoset mold",
    description:
      "Thermoset mold support for heat-resistant, electrical, industrial and high-performance components requiring controlled curing, venting and material handling.",
    heroTitle: "Thermoset molds for heat-resistant and electrical components.",
    intro:
      "Thermoset molding is different from thermoplastic injection molding because the material cures permanently under heat and pressure. Mold design must consider flow, curing time, venting, flash control, material handling, insert compatibility and post-processing. Arktech supports thermoset mold projects for industrial, electrical, automotive and appliance applications where heat resistance, dimensional stability and material performance are important.",
    gallery: [
      { src: "/images/seo/die-casting-cnc-metal-parts.png", alt: "Precision tooling and metal components for industrial thermoset applications" },
      { src: "/images/capabilities/injection-mold-manufacturing.jpg", alt: "Mold manufacturing support for thermoset tooling" }
    ],
    advantages: [
      "Supports parts requiring heat resistance, electrical insulation, chemical stability or high dimensional stability.",
      "Can be suitable for industrial electrical components, appliance parts, automotive components and high-temperature applications.",
      "Provides material performance advantages where standard thermoplastics may deform, creep or lose strength.",
      "Enables insert molding with metal hardware when thermal and electrical performance are required."
    ],
    primaryApplications: [
      "Electrical switchgear components, insulating parts, appliance handles, heat-resistant covers, terminal blocks and industrial connectors.",
      "Automotive and EV electrical components requiring heat and dimensional stability.",
      "Parts using phenolic, epoxy, BMC, SMC or other thermoset molding compounds.",
      "Products where fire, heat, stiffness or electrical insulation requirements drive material selection."
    ],
    engineering: [
      "Curing behavior, flow length, venting and flash control must be reviewed because thermoset materials behave differently from thermoplastics.",
      "Mold temperature control and curing time affect cycle stability and final part properties.",
      "Insert compatibility and preheating may be important for metal-integrated thermoset components.",
      "Post-mold finishing, deflashing and inspection should be planned before tooling release."
    ],
    designFeatures: [
      "Venting and flash control features designed for thermoset flow and curing behavior.",
      "Heated mold design, controlled temperature zones and durable surfaces for abrasive compounds.",
      "Insert loading and retention features for metal hardware when required.",
      "Ejection and handling strategy that protects brittle or high-stiffness parts."
    ],
    materials: [
      "Phenolic, epoxy molding compounds, BMC, SMC and other thermoset materials may be reviewed according to application.",
      "Glass-filled or mineral-filled compounds require wear-resistant steel and careful surface planning.",
      "Electrical and heat-resistant applications may require material certificates and compliance documentation.",
      "Material storage and handling requirements should be clarified before production planning."
    ],
    validation: [
      "Trial validation checks filling, curing, flash, voids, burns, dimensions and post-mold handling behavior.",
      "Dimensional inspection confirms critical assembly, insulation or mounting features.",
      "Material and process records support future repeat production.",
      "Correction actions may focus on venting, flash land, temperature, cure time or material flow."
    ],
    docs: [
      "DFM notes for thermoset material behavior, venting and curing risks.",
      "Mold trial report, dimensional inspection report and material certificate where required.",
      "Steel certificate, maintenance notes and spare component list.",
      "Export packing checklist and sample approval records."
    ],
    why: [
      "Arktech approaches thermoset molds with attention to process behavior, not only cavity geometry.",
      "We help customers review whether thermoset molding is the correct method for heat, electrical or structural requirements.",
      "Our documentation and validation process supports export tooling handover to overseas customers.",
      "Related CNC, die casting and assembly support can be coordinated when thermoset parts are part of a larger industrial product."
    ],
    faqs: [
      { question: "How are thermoset molds different from injection molds for thermoplastics?", answer: "Thermoset molds manage material curing under heat and pressure. Venting, flash control, curing time and material handling are different from standard thermoplastic injection molding." },
      { question: "What applications use thermoset molds?", answer: "Electrical insulation parts, heat-resistant components, terminal blocks, appliance parts and industrial components often use thermoset molding." },
      { question: "Can Arktech support thermoset mold documentation?", answer: "Yes. We can support DFM notes, trial records, dimensional inspection, material records and export packing documentation." }
    ]
  }),
  toolingPage({
    slug: "die-casting-molds",
    title: "Die Casting Tooling",
    keyword: "die casting tooling",
    description:
      "Die casting tooling for aluminum and zinc metal parts requiring controlled parting, slides, venting, trimming, machining allowance and export documentation.",
    heroTitle: "Die casting tooling for aluminum and zinc production components.",
    intro:
      "Die casting tooling supports metal components where strength, heat transfer, dimensional repeatability or integrated metal geometry is required. Compared with plastic injection molds, die casting tooling must handle molten aluminum or zinc, thermal fatigue, venting, overflow, trimming, ejector layout, slide action and CNC finishing allowance. Arktech supports die casting tooling projects together with machining, surface finishing and inspection documentation for global OEM manufacturing programs.",
    gallery: [
      { src: "/images/capabilities/die-casting.webp", alt: "Die casting tooling and finished aluminum housing components" },
      { src: "/images/capabilities/die-casting.png", alt: "Die cast metal parts and machining support" },
      { src: "/images/seo/die-casting-cnc-metal-parts.png", alt: "CNC machined and die cast metal components for OEM manufacturing" }
    ],
    advantages: [
      "Supports strong, repeatable aluminum or zinc components with integrated ribs, bosses, heat sinks or mounting features.",
      "Enables production of metal housings, brackets, covers and structural components with stable tooling strategy.",
      "Can be paired with CNC machining, tapping, drilling, deburring, polishing, coating or assembly support.",
      "Provides a route for OEM product companies needing both plastic injection molds and metal component tooling under coordinated project management."
    ],
    primaryApplications: [
      "Industrial control housings, motor covers, heat sinks, brackets, EV charging components, smart device frames and automation parts.",
      "Aluminum and zinc parts requiring machining allowance, surface finishing or assembly with plastic components.",
      "Robotics, industrial automation, energy storage, EV charging, consumer electronics and appliance applications.",
      "Programs where dimensional control, metal strength and export documentation are important."
    ],
    engineering: [
      "Parting line, draft, wall thickness, ribs and bosses should be reviewed to reduce porosity, shrinkage and ejection risk.",
      "Gate, runner, overflow and venting layout affect fill quality, trapped gas, surface defects and tool life.",
      "Machining allowance must be planned around critical dimensions, sealing surfaces, threaded holes and assembly datums.",
      "Thermal management and steel selection affect die life, dimensional stability and maintenance frequency."
    ],
    designFeatures: [
      "Die casting die structure with slides, ejectors, overflow, venting, cooling and trimming considerations.",
      "CNC machining datum planning for critical post-cast features.",
      "Replaceable inserts in high-wear or high-heat areas for maintenance.",
      "Export packing and documentation suitable for customer review and repeat production."
    ],
    materials: [
      "Aluminum alloys and zinc alloys are selected based on strength, weight, surface finish, heat transfer and machining needs.",
      "Surface finishing options may include shot blasting, polishing, anodizing, powder coating, painting or plating depending on alloy and product use.",
      "CNC machining can be added for precision bores, threaded holes, sealing faces and assembly interfaces.",
      "Material certificates and inspection records can be prepared for controlled OEM programs."
    ],
    validation: [
      "Tool trial checks fill, flash, porosity, surface defects, ejector marks, trimming behavior and dimensional condition.",
      "Dimensional inspection includes casting datums and machined features when post-processing is included.",
      "Sample validation may include machining trials, surface finishing review and assembly checks.",
      "Export documentation captures trial conditions, correction actions and production-readiness notes."
    ],
    docs: [
      "Die design review, mold trial report, dimensional inspection report and machining inspection records.",
      "Material certificate, surface finish record and post-processing notes where required.",
      "Steel certificate, die component list, spare parts list and maintenance notes.",
      "Export packing checklist and sample approval record."
    ],
    why: [
      "Arktech can coordinate die casting tooling with CNC machining, plastic injection molding and assembly when projects include mixed plastic and metal components.",
      "Our engineering process reviews casting geometry, machining allowance and inspection requirements before tooling release.",
      "We support export documentation for OEM product companies and injection molding companies sourcing die casting tooling from China.",
      "The goal is practical tooling and production support, not only a sample casting."
    ],
    faqs: [
      { question: "Is die casting tooling part of the injection mold section?", answer: "It is related export tooling for metal components. Many OEM programs need both plastic injection molds and die casting tooling, so Arktech presents it alongside injection mold solutions." },
      { question: "Can Arktech provide machined die cast parts?", answer: "Yes. Die cast parts can be supported with CNC machining, tapping, drilling, deburring, finishing, inspection and assembly planning." },
      { question: "What documents are useful before die casting tooling starts?", answer: "3D CAD, 2D drawings, alloy requirement, surface finish, critical dimensions, annual volume and assembly requirements help us review tooling and machining strategy." }
    ]
  })
];

export const caseStudyPages: CaseStudyData[] = [
  {
    slug: "automotive-sensor-housing-tooling",
    title: "Automotive Sensor Housing Tooling Case Study",
    description:
      "See how Arktech supported an injection molder with DFM, export tooling, sampling, and inspection for an automotive sensor housing project.",
    projectName: "Automotive Sensor Housing Tooling",
    customerType: "Injection Molder",
    region: "Germany",
    productCategory: "Automotive and EV components",
    serviceScope: ["DFM review", "Injection mold manufacturing", "Tool trial", "Dimensional inspection", "Export tooling package"],
    challenge: [
      "The customer needed an export mold prepared for production in its local molding facility.",
      "Glass-filled material created dimensional stability and wear considerations.",
      "Critical assembly areas required clear inspection planning before shipment."
    ],
    solution: [
      "Arktech reviewed draft, ribs, shutoffs, and tolerance risks before tooling release.",
      "The mold strategy included hardened inserts, controlled cooling, and export-ready spare components.",
      "Sampling records and inspection points were prepared for the customer engineering team."
    ],
    manufacturingScope: [
      "Mold type: production injection mold",
      "Material: PBT-GF30",
      "Focus: dimensional stability and insert wear control",
      "Documentation: trial report, sample inspection, spare-part list, export packing"
    ],
    result: [
      "The project moved from DFM review into stable sampling with fewer late tooling questions.",
      "Inspection data helped the customer prepare the tool for local production launch.",
      "The mold package was shipped with practical documentation and spare-part support."
    ],
    related: [
      { label: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" },
      { label: "Solutions for Injection Molding Companies", href: "/solutions/injection-molding-companies" },
      { label: "Multi-Cavity Mold Manufacturing", href: "/injection-molds/multi-cavity-molds" }
    ]
  },
  {
    slug: "medical-device-cartridge-molding",
    title: "Medical Device Cartridge Molding Case Study",
    description:
      "A medical device plastic parts case study covering DFM review, tight-tolerance PC molding, inspection planning, and clean packaging.",
    projectName: "Medical Device Cartridge Molding",
    customerType: "OEM Product Company",
    region: "United States",
    productCategory: "Medical devices",
    serviceScope: ["DFM engineering support", "Plastic injection molding", "Inspection planning", "Packaging review"],
    challenge: [
      "The part required tight dimensional control and clean handling expectations.",
      "Assembly interfaces made tolerance stackup and gate location important early decisions.",
      "The buyer needed engineering feedback before committing to production tooling."
    ],
    solution: [
      "Arktech reviewed wall thickness, gate location, ejector areas, and critical dimensions.",
      "The sampling plan focused on critical-to-quality features and repeatable molding conditions.",
      "Packaging and handling assumptions were included in the manufacturing review."
    ],
    manufacturingScope: [
      "Mold type: precision injection mold",
      "Material: PC",
      "Focus: tight-tolerance molded cartridge features",
      "Inspection: critical dimensions and assembly interface checks"
    ],
    result: [
      "The customer received practical DFM feedback before production ramp decisions.",
      "Sampling focused on the dimensions most likely to affect assembly performance.",
      "The program had a clearer inspection standard for repeat production."
    ],
    related: [
      { label: "Medical Device Plastic Parts", href: "/industries/medical-devices" },
      { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding" },
      { label: "DFM Engineering Support", href: "/injection-molding-engineering" }
    ]
  },
  {
    slug: "smart-home-plastic-housing",
    title: "Smart Home Plastic Housing Case Study",
    description:
      "A smart home plastic housing manufacturing case study covering cosmetic surfaces, snap-fit features, tooling strategy, and assembly review.",
    projectName: "Smart Home Plastic Housing",
    customerType: "OEM Product Company",
    region: "Canada",
    productCategory: "Smart home products",
    serviceScope: ["Plastic housing manufacturing", "Injection mold manufacturing", "Plastic injection molding", "Assembly review"],
    challenge: [
      "The product family needed consistent cosmetic A-surfaces across multiple housing parts.",
      "Snap-fit features and internal carriers created assembly and tolerance risks.",
      "The buyer wanted to reduce tooling investment while keeping product appearance consistent."
    ],
    solution: [
      "Arktech reviewed wall thickness, ribs, bosses, snap features, and gate positions.",
      "A shared tooling strategy was proposed for related enclosure parts where practical.",
      "Surface finish and inspection expectations were defined before sampling."
    ],
    manufacturingScope: [
      "Mold type: housing and enclosure injection molds",
      "Material: PC/ABS",
      "Focus: cosmetic surface control and assembly fit",
      "Secondary review: inserts, fastening points, and packaging"
    ],
    result: [
      "The housing family had a clearer tooling plan before release.",
      "Cosmetic and assembly risks were addressed earlier in DFM.",
      "The buyer had a practical path from tooling to molded production parts."
    ],
    related: [
      { label: "Smart Home Product Manufacturing", href: "/industries/smart-home-iot" },
      { label: "Plastic Housing Manufacturing", href: "/services/plastic-housing-manufacturing" },
      { label: "For OEM Product Companies", href: "/solutions/oem-product-companies" }
    ]
  },
  {
    slug: "die-cast-control-housing",
    title: "Die Cast Control Housing Case Study",
    description:
      "A die casting mold manufacturing case study for an aluminum control housing requiring parting strategy, sealing surfaces, and CNC finishing review.",
    projectName: "Die Cast Control Housing",
    customerType: "OEM Product Company",
    region: "United Kingdom",
    productCategory: "Industrial automation components",
    serviceScope: ["Die casting mold manufacturing", "CNC finishing review", "Inspection planning", "Manufacturing DFM"],
    challenge: [
      "The aluminum housing required reliable sealing surfaces and stable machining datums.",
      "Parting line and venting decisions could affect downstream CNC finishing.",
      "The customer needed the tooling plan reviewed before committing to production."
    ],
    solution: [
      "Arktech reviewed parting, slide action, venting, cooling, trimming, and machining allowance.",
      "The CNC datum strategy was considered together with the die casting mold plan.",
      "Inspection focus areas were defined around sealing and assembly interfaces."
    ],
    manufacturingScope: [
      "Mold type: aluminum die casting mold",
      "Material: aluminum alloy",
      "Focus: sealing surface consistency and CNC finishing allowance",
      "Inspection: machined datum and housing interface checks"
    ],
    result: [
      "The tooling and CNC finishing plan reduced uncertainty before production release.",
      "The buyer had clearer inspection expectations for functional housing features.",
      "Manufacturing risks were addressed before mold build and sampling."
    ],
    related: [
      { label: "Die Casting Mold Manufacturing", href: "/services/die-casting-mold" },
      { label: "Industrial Automation Components", href: "/industries/industrial-automation" },
      { label: "CNC Metal Parts", href: "/services/cnc-metal-parts" }
    ]
  },
  {
    slug: "two-shot-2k-injection-mold-tooling",
    title: "Two-Shot 2K Injection Mold Tooling Case Study",
    description: "A real Arktech two-shot injection mold project showing first-shot and second-shot tooling for an integrated multi-material light-cover component.",
    projectName: "Two-Shot Light Cover Injection Mold",
    customerType: "Confidential OEM Program",
    region: "Confidential",
    productCategory: "Multi-material plastic component",
    serviceScope: ["Two-shot mold engineering", "Injection mold manufacturing", "First-shot and second-shot coordination", "Tooling validation"],
    challenge: [
      "The component required coordinated first-shot and second-shot geometry.",
      "The two tools needed repeatable alignment between the first molded substrate and the second-shot feature.",
      "Visible surfaces required tooling and sampling review across both molding stages."
    ],
    solution: [
      "Arktech engineered the first-shot and second-shot mold relationship as one tooling system.",
      "Part transfer, locating features and the second-shot interface were reviewed before tooling approval.",
      "The documented project image shows both molds and the resulting two-stage component structure."
    ],
    manufacturingScope: [
      "Mold type: coordinated two-shot / 2K tooling",
      "Material: customer-specified two-material application",
      "Focus: first-shot and second-shot alignment",
      "Validation: interface, appearance and part-release review"
    ],
    result: [
      "The project established a controlled relationship between both tooling stages.",
      "The molded component provided physical evidence for interface and appearance review.",
      "Tooling records remained linked to the two-shot manufacturing sequence."
    ],
    related: [
      { label: "Two-Shot / 2K Molds", href: "/injection-molds/two-shot-2k-molds" },
      { label: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" },
      { label: "Transparent Plastic Molding", href: "/resources/injection-molding/transparent-plastic-molding" }
    ]
  },
  {
    slug: "unscrewing-threaded-component-mold",
    title: "Unscrewing Injection Mold Case Study",
    description: "A real Arktech motor-driven unscrewing mold project for molded components with internal threaded features.",
    projectName: "Motor-Driven Unscrewing Mold",
    customerType: "Confidential OEM Program",
    region: "Confidential",
    productCategory: "Threaded plastic component",
    serviceScope: ["DFM review", "Unscrewing mold engineering", "Injection mold manufacturing", "Mechanical validation"],
    challenge: [
      "The internal thread prevented straight-line part ejection.",
      "The mold required controlled rotation and release before the next molding cycle.",
      "The unscrewing mechanism needed to remain accessible for production maintenance."
    ],
    solution: [
      "Arktech used a motor-driven unscrewing concept to release the internal threaded geometry.",
      "The mold layout coordinated the rotating cores with guidance, actuation and the normal mold cycle.",
      "The documented project image shows the mold, drive system and molded threaded components."
    ],
    manufacturingScope: [
      "Mold type: motor-driven unscrewing injection mold",
      "Material: customer-specified thermoplastic",
      "Focus: controlled threaded-core release",
      "Validation: mold movement, release and molded-thread review"
    ],
    result: [
      "The tooling solution enabled automated release of the internal threaded geometry.",
      "The molded components provided physical evidence for thread and release review.",
      "The mechanism and service points were documented for the tooling program."
    ],
    related: [
      { label: "Unscrewing Molds", href: "/injection-molds/unscrewing-molds" },
      { label: "Undercut Design", href: "/resources/injection-molding/undercut-design" },
      { label: "Mold Design Guidelines", href: "/resources/mold-design-guidelines" }
    ]
  }
];

export const resourcePages: DetailPageData[] = [
  {
    slug: "injection-mold-rfq-checklist",
    title: "Injection Mold RFQ Checklist",
    description:
      "A practical RFQ checklist for buyers preparing injection mold drawings, CAD files, material details, tolerances, annual volume, and shipment requirements.",
    eyebrow: "Resource",
    heroTitle: "Injection mold RFQ checklist for OEM and molding buyers.",
    heroBody:
      "Prepare the information engineering teams need to quote tooling accurately and identify manufacturability risks early.",
    sections: [
      { title: "Files to Prepare", items: ["3D CAD files such as STEP, STP, IGS, or X_T", "2D drawings with critical tolerances", "PDF specifications, photos, or existing sample notes"] },
      { title: "Project Information", items: ["Material, color, finish, and texture requirements", "Annual volume and target lead time", "Mold export requirements, destination country, and production expectations"] }
    ]
  },
  {
    slug: "dfm-checklist-for-plastic-housing",
    title: "DFM Checklist for Plastic Housing Manufacturing",
    description:
      "A DFM checklist for plastic housing manufacturing covering draft, wall thickness, ribs, bosses, snap-fits, gates, weld lines, and cosmetic surfaces.",
    eyebrow: "Resource",
    heroTitle: "DFM checklist for plastic housing manufacturing.",
    heroBody:
      "Use this checklist before tooling release to reduce avoidable housing design changes and sampling delays.",
    sections: [
      { title: "Geometry Review", items: ["Draft angle for textured and cosmetic surfaces", "Wall thickness consistency and sink risk", "Ribs, bosses, snaps, shutoffs, and assembly features"] },
      { title: "Molding Review", items: ["Gate location and weld line visibility", "Ejector marks and A-surface protection", "Material shrinkage, warpage risk, and dimensional controls"] }
    ]
  },
  {
    slug: "hot-runner-mold-design-considerations",
    title: "Hot Runner Mold Design Considerations",
    description:
      "Buyer-focused hot runner mold design considerations covering gate strategy, thermal balance, resin sensitivity, cosmetic risk, and maintenance planning.",
    eyebrow: "Resource",
    heroTitle: "Hot runner mold design considerations for production parts.",
    heroBody:
      "Hot runner tools can improve production efficiency, but the project should review gate strategy, material behavior, and maintenance expectations before tool build.",
    sections: [
      { title: "Design Questions", items: ["What gate type and location best support filling and appearance?", "Does the resin require special thermal control?", "How will gate vestige and cosmetic surfaces be evaluated?"] },
      { title: "Production Questions", items: ["What spare parts should ship with the tool?", "How will hot runner maintenance be documented?", "What sampling data should be reviewed before export?"] }
    ]
  },
  {
    slug: "plastic-and-metal-assembly-sourcing-guide",
    title: "Plastic and Metal Assembly Sourcing Guide",
    description:
      "A sourcing guide for OEM buyers managing plastic molded parts, CNC metal components, inserts, fasteners, finishing, inspection, and export packaging.",
    eyebrow: "Resource",
    heroTitle: "Plastic and metal assembly sourcing guide for OEM product teams.",
    heroBody:
      "Plastic-metal assemblies need early coordination between tooling, molding, machining, fasteners, finishing, inspection, and packaging.",
    sections: [
      { title: "Inputs to Share", items: ["Assembly drawings and exploded views", "Insert, fastener, and torque requirements", "Surface treatment, labeling, and packaging needs"] },
      { title: "Risks to Review", items: ["Tolerance stackup between plastic and metal features", "Fastening, heat staking, welding, or insert retention", "Inspection fixtures and functional checks before shipment"] }
    ]
  }
];
