export type DetailPageData = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroBody: string;
  sections: {
    title: string;
    items: string[];
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
    title: "Injection Mold Manufacturing",
    description:
      "Export injection mold manufacturing for medium-sized molders and OEM product companies sourcing production tools from Arktech.",
    eyebrow: "Service",
    heroTitle: "Injection mold manufacturing for export tooling programs.",
    heroBody:
      "Arktech builds production injection molds with practical DFM input, mold design review, machining, fitting, tryout, inspection, and export preparation.",
    sections: [
      {
        title: "What We Support",
        items: ["Production mold design and manufacturing", "Multi-cavity, slider, lifter, insert, and overmolding tools", "Tool trials, correction loops, and sample inspection", "Export documentation, spares, and crate preparation"]
      },
      {
        title: "Best Fit",
        items: ["Injection molding companies expanding tool capacity", "OEM teams launching plastic product programs", "Projects requiring dimensional control and practical engineering feedback"]
      }
    ]
  },
  {
    slug: "plastic-injection-molding",
    title: "Plastic Injection Molding",
    description:
      "Plastic injection molding for engineering components, housings, assemblies, inserts, and export-ready OEM production.",
    eyebrow: "Service",
    heroTitle: "Plastic injection molding for OEM components and production parts.",
    heroBody:
      "We support molded plastic part production from resin review and mold sampling through repeat production, inspection, secondary operations, and packaging.",
    sections: [
      {
        title: "Capabilities",
        items: ["Commodity and engineering resin molding", "Insert molding and overmolding programs", "Cosmetic and functional plastic components", "Inspection, assembly, and export packaging"]
      },
      {
        title: "Engineering Focus",
        items: ["Material selection and shrinkage risk", "Gate, weld line, ejector, and surface finish review", "Tolerance planning and critical-to-quality checks"]
      }
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
      "Plastic and metal component manufacturing support for robotics products, housings, brackets, fixtures, and mechanical assemblies.",
    eyebrow: "Industry",
    heroTitle: "Robotics manufacturing support for plastic and metal components.",
    heroBody:
      "Arktech supports robotics programs requiring plastic housings, precision metal parts, brackets, covers, fixtures, and reliable assembly interfaces.",
    sections: [
      { title: "Typical Components", items: ["Sensor housings and covers", "Structural brackets and machined parts", "Cable routing and protective plastic components"] },
      { title: "Key Requirements", items: ["Dimensional control", "Assembly repeatability", "Material and finish consistency"] }
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
      "Tooling and component manufacturing support for medical device housings, cartridges, diagnostic parts, and precision plastic components.",
    eyebrow: "Industry",
    heroTitle: "Medical device plastic parts with DFM, tooling, and molding support.",
    heroBody:
      "Arktech supports medical product teams with DFM review, tight-tolerance plastic parts, inspection planning, clean packaging expectations, and reliable sampling discipline.",
    sections: [
      { title: "Typical Components", items: ["Diagnostic device housings", "Cartridges and functional plastic components", "Fixtures, brackets, and precision machined parts"] },
      { title: "Key Requirements", items: ["Critical-to-quality inspection", "Traceable engineering changes", "Clean handling and packaging planning"] }
    ]
  },
  {
    slug: "industrial-automation",
    title: "Industrial Automation Components",
    description:
      "Plastic and metal manufacturing support for industrial automation controls, enclosures, brackets, sensor housings, and equipment components.",
    eyebrow: "Industry",
    heroTitle: "Industrial automation components for equipment and control systems.",
    heroBody:
      "We build tooling and components for automation equipment where dimensional stability, material performance, and repeat production matter.",
    sections: [
      { title: "Typical Components", items: ["Control housings and covers", "Sensor and actuator components", "Machined brackets, frames, and mounting parts"] },
      { title: "Key Requirements", items: ["Robust materials", "Stable tolerances", "Assembly and installation reliability"] }
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

export const toolingExamplePages: DetailPageData[] = [
  {
    slug: "multi-cavity-molds",
    title: "Multi-Cavity Mold Manufacturing",
    description:
      "Multi-cavity injection mold manufacturing for production plastic parts requiring repeatability, balance, and efficient cycle performance.",
    eyebrow: "Tooling Example",
    heroTitle: "Multi-cavity mold manufacturing for efficient production programs.",
    heroBody:
      "Arktech builds multi-cavity injection molds with attention to cavity balance, cooling, venting, dimensional repeatability, and sampling discipline.",
    sections: [
      { title: "Tooling Focus", items: ["Balanced filling and cooling", "Consistent cavity dimensions", "Production-friendly maintenance and spare components"] },
      { title: "Typical Use", items: ["Caps, clips, brackets, housings, and repeated functional components", "Programs where cycle time and consistency affect unit cost"] }
    ]
  },
  {
    slug: "hot-runner-molds",
    title: "Hot Runner Mold Manufacturing",
    description:
      "Hot runner injection mold support for production plastic parts requiring reduced waste, stable filling, and clean processing.",
    eyebrow: "Tooling Example",
    heroTitle: "Hot runner mold manufacturing for production efficiency and stable processing.",
    heroBody:
      "We support hot runner mold projects with runner system selection, gate location review, thermal balance planning, and trial validation.",
    sections: [
      { title: "Tooling Focus", items: ["Hot runner layout and gate strategy", "Thermal balance and material sensitivity", "Sampling review for fill, gate vestige, and cosmetic risk"] },
      { title: "Typical Use", items: ["High-volume molded parts", "Cosmetic parts where runner waste and gate control matter"] }
    ]
  },
  {
    slug: "insert-molds",
    title: "Insert Molding Tools",
    description:
      "Insert mold tooling for plastic parts with metal inserts, terminals, threaded components, bushings, and hybrid assemblies.",
    eyebrow: "Tooling Example",
    heroTitle: "Insert molding tools for plastic parts with metal or functional inserts.",
    heroBody:
      "Arktech supports insert molding programs where plastic and metal interfaces need reliable positioning, retention, and repeatable production handling.",
    sections: [
      { title: "Tooling Focus", items: ["Insert location and retention strategy", "Operator loading and production repeatability", "Plastic flow around metal features and stress risk"] },
      { title: "Typical Use", items: ["Threaded inserts, terminals, pins, bushings, and reinforced mounting features", "Electrical, industrial, and consumer product assemblies"] }
    ]
  },
  {
    slug: "overmolding-tools",
    title: "Overmolding Tools",
    description:
      "Overmolding tool support for soft-touch grips, seals, hybrid materials, and plastic components with secondary molded features.",
    eyebrow: "Tooling Example",
    heroTitle: "Overmolding tools for hybrid plastic and elastomer components.",
    heroBody:
      "We support overmolding programs with substrate review, material compatibility, shutoff strategy, bond risk, and production handling planning.",
    sections: [
      { title: "Tooling Focus", items: ["Substrate fit and shutoff design", "Material compatibility and bonding risk", "Cosmetic surface and flash control"] },
      { title: "Typical Use", items: ["Soft-touch grips, seals, buttons, protective covers, and multi-material housings", "Consumer, industrial, outdoor, and medical product applications"] }
    ]
  },
  {
    slug: "unscrewing-molds",
    title: "Unscrewing Molds",
    description:
      "Unscrewing injection mold support for threaded plastic components, closures, caps, and technical parts with internal or external threads.",
    eyebrow: "Tooling Example",
    heroTitle: "Unscrewing molds for threaded plastic components.",
    heroBody:
      "Arktech builds unscrewing mold solutions for threaded geometry where ejection strategy, cycle reliability, and mechanism durability matter.",
    sections: [
      { title: "Tooling Focus", items: ["Internal and external thread release", "Gear, rack, hydraulic, or motor-driven mechanism planning", "Cooling, wear, and maintenance considerations"] },
      { title: "Typical Use", items: ["Caps, closures, connectors, fittings, and threaded housings", "Parts that cannot be released with simple slides or lifters"] }
    ]
  },
  {
    slug: "die-casting-molds",
    title: "Die Casting Molds",
    description:
      "Die casting mold examples for aluminum and zinc housings, brackets, heat sinks, and mechanical metal components.",
    eyebrow: "Tooling Example",
    heroTitle: "Die casting molds for aluminum and zinc product components.",
    heroBody:
      "We support die casting mold projects with parting, slide, venting, cooling, trimming, CNC finishing, and production-readiness considerations.",
    sections: [
      { title: "Tooling Focus", items: ["Parting line and slide-action planning", "Venting, cooling, trimming, and machining allowance", "Sampling review for porosity, flash, and dimensional risk"] },
      { title: "Typical Use", items: ["Control housings, brackets, heat sinks, frames, and mechanical covers", "Programs combining die cast parts with CNC finishing or plastic components"] }
    ]
  }
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
      { label: "Multi-Cavity Mold Manufacturing", href: "/tooling-examples/multi-cavity-molds" }
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
      { label: "DFM Engineering Support", href: "/services/dfm-engineering" }
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
      { label: "Smart Home Product Manufacturing", href: "/industries/smart-home" },
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
