export type SeoCaseStudy = {
  productType: string;
  material: string;
  challenge: string;
  solution: string;
  result: string;
};

export type SeoLandingPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  painPointHeading: string;
  painPoints: Array<{ title: string; body: string }>;
  capabilityHeading: string;
  capabilities: Array<{ title: string; body: string }>;
  industries: string[];
  caseStudy: SeoCaseStudy;
  trustPoints: string[];
  faqs: Array<{ question: string; answer: string }>;
  serviceLinks: Array<{ label: string; href: string }>;
  relatedSeoSlugs: string[];
};

export const seoPages: SeoLandingPage[] = [
  {
    slug: "injection-molding-tooling",
    metaTitle: "Injection Mold Tooling Supplier for OEM Product Companies",
    metaDescription:
      "Export-ready injection mold tooling, DFM, sampling and documentation from a China manufacturer supporting OEMs and molding companies worldwide.",
    h1: "Injection Mold Tooling Supplier for OEM Product Companies",
    subtitle:
      "Arktech builds export-ready production molds in China with DFM review, tool design, sampling, inspection records and shipment support for OEM teams and injection molding companies.",
    heroImage: "/images/seo/plastic-injection-molding.png",
    heroAlt: "Export injection mold tooling for OEM product companies",
    painPointHeading: "Reduce export tooling risk before mold steel is cut",
    painPoints: [
      { title: "Tooling risk", body: "Unclear mold standards, steel choices and maintenance plans can create costly corrections after export." },
      { title: "Lead-time pressure", body: "Late DFM decisions and slow sampling loops delay local production validation." },
      { title: "Transfer readiness", body: "Production teams need drawings, spare parts, trial data and packing prepared before the mold arrives." },
      { title: "Cost control", body: "Gate strategy, cavity count and component selection must balance investment with expected production volume." }
    ],
    capabilityHeading: "Export injection mold manufacturing capabilities",
    capabilities: [
      { title: "DFM engineering", body: "Review draft, wall thickness, ribs, shutoffs, tolerances and resin behavior before release." },
      { title: "Tool design", body: "2D and 3D mold design aligned with DME, HASCO or customer-specific standards." },
      { title: "Mold making", body: "CNC, EDM, wire EDM, fitting, polishing and controlled assembly for production tools." },
      { title: "Sampling", body: "Tool trials, dimensional checks, correction records and approved sample preparation." },
      { title: "Export package", body: "Drawings, steel records, spare parts, trial reports and export packing." },
      { title: "Transfer support", body: "Engineering communication through mold arrival and local production launch." }
    ],
    industries: ["OEM Product Companies", "Injection Molding Companies", "Automotive Components", "Medical Devices", "Smart Home Devices", "Industrial Equipment"],
    caseStudy: {
      productType: "Automotive sensor housing production mold",
      material: "PBT-GF30",
      challenge: "The German molding customer required a durable export mold with stable dimensions for glass-filled resin.",
      solution: "Arktech reviewed wear areas, cooling, draft and critical assembly dimensions, then supplied hardened inserts and an export tooling package.",
      result: "Sampling reached stable dimensions with a clearer local launch plan and fewer tooling questions after delivery."
    },
    trustPoints: ["15+ years of tooling experience", "300+ export molds per year", "ISO 9001 quality-management background", "DFM and trial documentation", "Export packing and spare-part planning"],
    faqs: [
      { question: "Can Arktech build molds for production outside China?", answer: "Yes. Export molds can be designed around customer machine, component and tooling standards for production in Europe or North America." },
      { question: "What information is required for a mold RFQ?", answer: "Send 3D CAD, 2D drawings, resin, annual volume, target cycle time, destination and any preferred mold standards." },
      { question: "Do you provide tool trial and inspection records?", answer: "Yes. Trial samples, correction notes and agreed dimensional inspection records can be included before shipment." }
    ],
    serviceLinks: [
      { label: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" },
      { label: "DFM Engineering Support", href: "/services/dfm-engineering" },
      { label: "Tooling Examples", href: "/tooling-examples" }
    ],
    relatedSeoSlugs: ["plastic-injection-molding", "dfm-engineering-services", "oem-manufacturing-services"]
  },
  {
    slug: "plastic-injection-molding",
    metaTitle: "Plastic Injection Molding China for OEM Product Companies",
    metaDescription:
      "Plastic injection molding in China for OEM and EMS manufacturers, including tooling, engineering resins, quality inspection, assembly and export delivery.",
    h1: "Plastic Injection Molding Manufacturer for OEM & EMS Companies",
    subtitle:
      "Source production tooling and molded engineering-plastic components from one China manufacturing partner, with DFM, controlled sampling, quality inspection and assembly-ready delivery.",
    heroImage: "/images/capabilities/plastic-injection-molding.webp",
    heroAlt: "Plastic injection molding quality inspection for OEM components",
    painPointHeading: "Control molding quality from first tool trial to repeat production",
    painPoints: [
      { title: "Part consistency", body: "Warpage, shrinkage and process variation can disrupt assembly performance across production lots." },
      { title: "Cosmetic quality", body: "Weld lines, gate vestige, texture and handling require clear acceptance standards." },
      { title: "Material risk", body: "Engineering resins need appropriate drying, tooling, shrinkage and processing controls." },
      { title: "Supplier coordination", body: "Separating tooling, molding and assembly creates avoidable handoffs and accountability gaps." }
    ],
    capabilityHeading: "Plastic injection molding capabilities for export programs",
    capabilities: [
      { title: "DFM engineering", body: "Geometry, material, gating, cooling and tolerance review before tooling release." },
      { title: "Production tooling", body: "Single- and multi-cavity molds, hot runners, inserts, overmolding and tool transfers." },
      { title: "Engineering plastics", body: "ABS, PC, PC/ABS, PA, POM, PBT, PPS, TPE and glass-filled grades." },
      { title: "Process validation", body: "Sampling, parameter control and critical dimension inspection for repeatable production." },
      { title: "Secondary operations", body: "Printing, ultrasonic welding, heat staking, inserts and component assembly." },
      { title: "Export supply", body: "Production packaging, inspection records and shipment coordination for overseas programs." }
    ],
    industries: ["OEM Product Companies", "EMS Manufacturers", "Smart Home Devices", "Medical Devices", "Robotics Companies", "Automotive Components"],
    caseStudy: {
      productType: "Medical device cartridge housing",
      material: "Medical-grade polycarbonate",
      challenge: "Tight assembly interfaces and clean handling requirements created dimensional and cosmetic risk.",
      solution: "The team reviewed gates, ejectors and critical dimensions, then defined sampling and clean packaging checks.",
      result: "The customer received stable samples and a repeatable inspection standard before production ramp."
    },
    trustPoints: ["Engineering resin experience", "Tooling and molding under one project team", "Critical-dimension inspection", "Assembly and packaging support", "Export production coordination"],
    faqs: [
      { question: "What injection molding volumes can you support?", answer: "Programs can move from prototype or bridge quantities into repeat production, subject to part size, material and tooling strategy." },
      { question: "Can you mold cosmetic plastic housings?", answer: "Yes. DFM reviews can address texture, gate location, weld lines, sink, ejector marks and protected A-surfaces." },
      { question: "Can molded parts be assembled before shipment?", answer: "Yes. Inserts, printing, welding, heat staking, fasteners, inspection and packaging can be coordinated." }
    ],
    serviceLinks: [
      { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding" },
      { label: "Plastic Housing Manufacturing", href: "/services/plastic-housing-manufacturing" },
      { label: "Request a Production Quote", href: "/request-a-quote" }
    ],
    relatedSeoSlugs: ["injection-molding-tooling", "oem-manufacturing-services", "ems-electronics-manufacturing-support"]
  },
  {
    slug: "cnc-machining-parts",
    metaTitle: "Precision CNC Machining Parts Supplier for OEM Manufacturers",
    metaDescription:
      "Precision CNC machining supplier in China for OEM metal parts, prototypes and production in aluminum, stainless steel, brass and engineering plastics.",
    h1: "Precision CNC Machining Parts Supplier for OEM Manufacturers",
    subtitle:
      "Arktech supplies prototype and production CNC parts from China with material traceability, tolerance review, surface finishing and inspection for OEM, EMS and robotics programs.",
    heroImage: "/images/capabilities/cnc-machining.jpg",
    heroAlt: "Precision CNC machined aluminum and stainless steel parts",
    painPointHeading: "Protect tolerance, finish and delivery across machined-part orders",
    painPoints: [
      { title: "Tolerance risk", body: "Unclear datum and inspection methods create disagreement on complex machined features." },
      { title: "Material control", body: "Alloy grade and temper directly affect machining, finish and functional performance." },
      { title: "Finish consistency", body: "Anodizing, plating, polishing and cosmetic requirements must be defined before production." },
      { title: "Volume transition", body: "Prototype methods must scale into fixtures, repeat setups and controlled production." }
    ],
    capabilityHeading: "CNC machining capabilities from prototype to production",
    capabilities: [
      { title: "Engineering review", body: "Datum, tolerance, tool access, wall thickness and finish-risk review." },
      { title: "CNC milling", body: "Complex housings, brackets, heat sinks, fixtures and precision mechanical parts." },
      { title: "CNC turning", body: "Shafts, bushings, threaded parts and concentric features." },
      { title: "Material range", body: "Aluminum, stainless steel, carbon steel, brass, copper and engineering plastics." },
      { title: "Surface finishing", body: "Anodizing, plating, passivation, polishing, brushing and laser marking." },
      { title: "Inspection", body: "Critical dimensions, threads, surface finish and agreed functional features." }
    ],
    industries: ["Robotics Companies", "OEM Product Companies", "EMS Manufacturers", "Medical Devices", "Industrial Automation", "New Energy Products"],
    caseStudy: {
      productType: "Robotics controller aluminum chassis",
      material: "6061-T6 aluminum",
      challenge: "Thin walls, sealing features and connector locations required stable datums and cosmetic anodizing.",
      solution: "Arktech adjusted fixture strategy, defined critical inspection points and protected cosmetic surfaces through finishing.",
      result: "The customer received assembly-ready chassis with repeatable interfaces and consistent finish."
    },
    trustPoints: ["Prototype-to-production support", "Material and finish coordination", "Critical-feature inspection", "Plastic and metal project integration", "Export documentation"],
    faqs: [
      { question: "What CNC materials can Arktech machine?", answer: "Common materials include aluminum, stainless steel, carbon steel, brass, copper, POM, nylon and other engineering plastics." },
      { question: "Can you manage anodizing and plating?", answer: "Yes. Finishing can be quoted with masking, color, surface and inspection requirements." },
      { question: "Do you support low-volume CNC production?", answer: "Yes. CNC machining is suitable for prototypes, bridge production and repeat low- to medium-volume programs." }
    ],
    serviceLinks: [
      { label: "CNC Metal Parts", href: "/services/cnc-metal-parts" },
      { label: "Manufacturing Materials", href: "/materials" },
      { label: "Contact Engineering", href: "/contact" }
    ],
    relatedSeoSlugs: ["rapid-prototyping-services", "oem-manufacturing-services", "ems-electronics-manufacturing-support"]
  },
  {
    slug: "die-casting-manufacturing",
    metaTitle: "Die Casting Manufacturer for OEM Aluminum and Zinc Parts",
    metaDescription:
      "China die casting manufacturer for OEM aluminum and zinc parts with tooling, CNC finishing, surface treatment, inspection and assembly support.",
    h1: "Die Casting Manufacturer for OEM Aluminum & Zinc Components",
    subtitle:
      "Combine die casting tooling, aluminum or zinc production, CNC machining, finishing and inspection with one China manufacturing team for export-ready industrial components.",
    heroImage: "/images/seo/die-casting-cnc-metal-parts.png",
    heroAlt: "Aluminum die casting manufacturing and precision finishing",
    painPointHeading: "Address casting and machining risks as one manufacturing system",
    painPoints: [
      { title: "Porosity control", body: "Part geometry, venting, process windows and sealing areas must be reviewed together." },
      { title: "Tooling life", body: "Cooling, ejection and steel choices influence stability and long-term maintenance." },
      { title: "Machining allowance", body: "Casting datums and CNC stock affect sealing surfaces, threads and assembly fit." },
      { title: "Finish quality", body: "Blasting, coating, plating and cosmetic zones require controlled handling." }
    ],
    capabilityHeading: "Integrated die casting manufacturing capabilities",
    capabilities: [
      { title: "Casting DFM", body: "Parting, draft, ribs, wall thickness, slides, venting and overflow review." },
      { title: "Die tooling", body: "Aluminum and zinc die casting tool design, manufacturing, trials and correction." },
      { title: "Production casting", body: "Industrial housings, brackets, heat-management parts and structural components." },
      { title: "CNC finishing", body: "Machined sealing faces, datums, holes, threads and precision interfaces." },
      { title: "Surface treatment", body: "Shot blasting, powder coating, plating, polishing and protective finishes." },
      { title: "Assembly support", body: "Inserts, fasteners, seals, inspection and packaged subassemblies." }
    ],
    industries: ["Automotive Components", "Industrial Automation", "New Energy Products", "Telecommunications", "Robotics Companies", "OEM Product Companies"],
    caseStudy: {
      productType: "Industrial control housing",
      material: "ADC12 aluminum",
      challenge: "The enclosure required stable sealing faces and controlled machining after casting.",
      solution: "Parting, venting, machining allowance and datum strategy were reviewed before tool release.",
      result: "Sealing interfaces remained consistent through sampling and the customer received a clearer production inspection plan."
    },
    trustPoints: ["Tooling and casting coordination", "CNC finishing integration", "Functional-surface inspection", "Surface-treatment management", "Export program communication"],
    faqs: [
      { question: "Do you supply both die casting tools and finished parts?", answer: "Yes. Projects can cover tooling only or complete cast, machined, finished and inspected components." },
      { question: "Which die casting alloys are available?", answer: "Common projects use aluminum and zinc alloys selected around strength, weight, finish, corrosion and production requirements." },
      { question: "Can sealing surfaces be CNC machined?", answer: "Yes. Machining datums and allowance should be defined during casting DFM to protect sealing performance." }
    ],
    serviceLinks: [
      { label: "Die Casting Mold Manufacturing", href: "/services/die-casting-mold" },
      { label: "CNC Metal Parts", href: "/services/cnc-metal-parts" },
      { label: "Die Casting Case Study", href: "/case-studies/die-cast-control-housing" }
    ],
    relatedSeoSlugs: ["cnc-machining-parts", "oem-manufacturing-services", "dfm-engineering-services"]
  },
  {
    slug: "sheet-metal-fabrication",
    metaTitle: "Sheet Metal Fabrication Supplier for OEM Product Companies",
    metaDescription:
      "China sheet metal fabrication supplier for OEM enclosures, brackets and assemblies with laser cutting, bending, welding, finishing and inspection.",
    h1: "Sheet Metal Fabrication Supplier for OEM Enclosures & Assemblies",
    subtitle:
      "Source laser-cut, bent, welded and finished sheet metal components from China with drawing review, controlled fabrication and assembly support for industrial OEM and EMS programs.",
    heroImage: "/images/capabilities/sheet-metal-fabrication.jpg",
    heroAlt: "Sheet metal fabrication for industrial enclosures and brackets",
    painPointHeading: "Control fit, finish and assembly across fabricated components",
    painPoints: [
      { title: "Drawing gaps", body: "Bend radii, weld callouts and finish zones need practical fabrication review." },
      { title: "Assembly fit", body: "Hole locations, PEM hardware and tolerance stacks affect final enclosure assembly." },
      { title: "Cosmetic damage", body: "Visible surfaces require handling controls through welding, grinding and coating." },
      { title: "Supplier handoffs", body: "Separate fabricators, finishers and assemblers make accountability harder." }
    ],
    capabilityHeading: "Sheet metal fabrication capabilities for industrial products",
    capabilities: [
      { title: "Fabrication DFM", body: "Material, bend relief, tolerance, hardware and weld-access review." },
      { title: "Laser cutting", body: "Accurate profiles for steel, stainless steel and aluminum sheet." },
      { title: "Bending", body: "Controlled bends for enclosures, covers, panels and structural brackets." },
      { title: "Welding", body: "MIG, TIG, spot welding, grinding and fixture-controlled assemblies." },
      { title: "Hardware and finish", body: "PEM inserts, powder coating, plating, brushing and marking." },
      { title: "Assembly", body: "Mechanical integration, inspection, packaging and export delivery." }
    ],
    industries: ["EMS Manufacturers", "Industrial Automation", "New Energy Products", "Telecommunications", "Robotics Companies", "OEM Product Companies"],
    caseStudy: {
      productType: "Electronics control enclosure",
      material: "Powder-coated SPCC steel",
      challenge: "Connector openings, internal hardware and cosmetic panels required consistent fit after coating.",
      solution: "Bend sequence, PEM locations, welding fixtures and coating allowance were reviewed before production.",
      result: "The enclosure assembled without rework and maintained consistent visible surfaces across the pilot run."
    },
    trustPoints: ["Drawing and bend review", "Integrated hardware installation", "Welding fixture planning", "Finish and cosmetic control", "Assembly-ready packaging"],
    faqs: [
      { question: "What sheet metal materials are available?", answer: "Common materials include cold-rolled steel, stainless steel and aluminum in project-appropriate thicknesses." },
      { question: "Can you install PEM hardware?", answer: "Yes. Press-in nuts, studs, standoffs and other specified hardware can be integrated." },
      { question: "Do you provide powder coating?", answer: "Yes. Color, gloss, texture, masking and cosmetic acceptance requirements should be included in the RFQ." }
    ],
    serviceLinks: [
      { label: "Plastic + Metal Assembly", href: "/services/plastic-metal-assembly" },
      { label: "CNC Metal Parts", href: "/services/cnc-metal-parts" },
      { label: "Request a Fabrication Quote", href: "/request-a-quote" }
    ],
    relatedSeoSlugs: ["ems-electronics-manufacturing-support", "cnc-machining-parts", "oem-manufacturing-services"]
  },
  {
    slug: "rapid-prototyping-services",
    metaTitle: "Rapid Prototyping Manufacturer for OEM Product Companies",
    metaDescription:
      "Rapid prototyping services in China for OEM product validation using SLA, SLS and CNC machining, with engineering review and low-volume support.",
    h1: "Rapid Prototyping Services for OEM Product Development",
    subtitle:
      "Validate product geometry, assembly and function with fast SLA, SLS and CNC prototypes supported by manufacturing feedback and a direct path into tooling or low-volume production.",
    heroImage: "/images/capabilities/rapid-prototyping-v3.png",
    heroAlt: "SLA SLS and CNC rapid prototyping for OEM product validation",
    painPointHeading: "Learn earlier before committing to production tooling",
    painPoints: [
      { title: "Design uncertainty", body: "CAD alone cannot validate ergonomics, assembly access and physical interfaces." },
      { title: "Material mismatch", body: "Prototype process and material must fit the test objective." },
      { title: "Slow iteration", body: "Long quotation and handoff cycles delay engineering decisions." },
      { title: "Production disconnect", body: "Prototype geometry should be reviewed against future molding or machining constraints." }
    ],
    capabilityHeading: "Rapid prototyping capabilities for engineering teams",
    capabilities: [
      { title: "Prototype review", body: "Select process and material around appearance, fit, strength and testing goals." },
      { title: "SLA printing", body: "Detailed resin models for appearance, fit checks and master patterns." },
      { title: "SLS printing", body: "Durable nylon parts for functional testing and complex geometry." },
      { title: "CNC prototypes", body: "Production-like metal and plastic parts with controlled tolerances." },
      { title: "Finishing", body: "Sanding, painting, inserts, texture simulation and assembly." },
      { title: "Production transition", body: "Use prototype findings to guide DFM, tooling and bridge production." }
    ],
    industries: ["OEM Product Companies", "Robotics Companies", "Smart Home Devices", "Medical Devices", "Automotive Components", "Industrial Equipment"],
    caseStudy: {
      productType: "Smart home controller enclosure prototype",
      material: "SLA resin and CNC-machined ABS",
      challenge: "The team needed to validate snap fits, internal PCB clearance and cosmetic proportions before tooling.",
      solution: "Arktech supplied appearance and functional prototypes, then reviewed wall thickness and snap geometry for molding.",
      result: "Assembly issues were corrected before tool release, reducing the risk of late mold changes."
    },
    trustPoints: ["Multiple prototype processes", "Manufacturing-oriented feedback", "Appearance and functional finishing", "Bridge-production options", "Direct tooling transition"],
    faqs: [
      { question: "How do I choose SLA, SLS or CNC machining?", answer: "Choose based on material behavior, tolerance, surface, part size, quantity and the specific validation objective." },
      { question: "Can prototype parts be painted and assembled?", answer: "Yes. Finishing, inserts, printing and assembly can be quoted for presentation or functional evaluation." },
      { question: "Can Arktech move the design into production tooling?", answer: "Yes. Prototype learning can feed into DFM, mold manufacturing, sampling and production planning." }
    ],
    serviceLinks: [
      { label: "DFM Engineering Support", href: "/services/dfm-engineering" },
      { label: "CNC Metal Parts", href: "/services/cnc-metal-parts" },
      { label: "Request a Prototype Quote", href: "/request-a-quote" }
    ],
    relatedSeoSlugs: ["vacuum-casting-services", "cnc-machining-parts", "injection-molding-tooling"]
  },
  {
    slug: "vacuum-casting-services",
    metaTitle: "Vacuum Casting Manufacturer for OEM Prototype Production",
    metaDescription:
      "Vacuum casting services in China for polyurethane prototypes, appearance models and bridge production with silicone tooling, finishing and inspection.",
    h1: "Vacuum Casting Services for OEM Prototypes & Bridge Production",
    subtitle:
      "Produce high-quality polyurethane parts from silicone molds for appearance validation, functional testing and low-volume bridge production before injection tooling is ready.",
    heroImage: "/images/capabilities/vacuum-casting-v3.png",
    heroAlt: "Polyurethane vacuum casting process and finished prototype housings",
    painPointHeading: "Bridge the gap between one-off prototypes and production tooling",
    painPoints: [
      { title: "Low-volume economics", body: "Production tooling may not be justified for early market or engineering quantities." },
      { title: "Appearance needs", body: "Stakeholder and customer reviews require production-like color and finish." },
      { title: "Material simulation", body: "Parts need rigid, flexible or transparent behavior closer to molded plastics." },
      { title: "Tooling schedule", body: "Bridge parts may be needed while production tooling is still being built." }
    ],
    capabilityHeading: "Polyurethane vacuum casting capabilities",
    capabilities: [
      { title: "Master pattern", body: "SLA or CNC masters prepared around surface and dimensional requirements." },
      { title: "Silicone tooling", body: "Controlled mold construction for short-run repeatability." },
      { title: "Material selection", body: "Rigid, flexible, clear and colored polyurethane systems." },
      { title: "Casting production", body: "Low-volume parts for validation, field trials and bridge supply." },
      { title: "Finishing", body: "Color matching, painting, texture, inserts and assembly." },
      { title: "Inspection", body: "Visual, dimensional and functional checks aligned with prototype purpose." }
    ],
    industries: ["OEM Product Companies", "Medical Devices", "Smart Home Devices", "Consumer Electronics", "Robotics Companies", "Automotive Components"],
    caseStudy: {
      productType: "Handheld diagnostic device housings",
      material: "ABS-like polyurethane",
      challenge: "The OEM needed 30 presentation-quality housings before injection mold completion.",
      solution: "A finished SLA master and silicone tools were used to cast color-matched housings with inserts.",
      result: "The team completed customer trials and packaging validation without waiting for production tooling."
    },
    trustPoints: ["Production-like appearance", "Rigid and flexible materials", "Low-volume bridge supply", "Color and finish coordination", "Assembly-ready prototypes"],
    faqs: [
      { question: "How many parts can a silicone mold produce?", answer: "Tool life depends on geometry, material and finish; the project plan should match quantity and acceptance requirements." },
      { question: "Can vacuum-cast parts match a production color?", answer: "Color matching and painting are available, with practical tolerance based on material and finish." },
      { question: "Is vacuum casting suitable for functional testing?", answer: "Yes, when the selected polyurethane properties reasonably match the intended test loads and environment." }
    ],
    serviceLinks: [
      { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding" },
      { label: "DFM Engineering Support", href: "/services/dfm-engineering" },
      { label: "Request a Vacuum Casting Quote", href: "/request-a-quote" }
    ],
    relatedSeoSlugs: ["rapid-prototyping-services", "plastic-injection-molding", "oem-manufacturing-services"]
  },
  {
    slug: "oem-manufacturing-services",
    metaTitle: "OEM Manufacturing Services in China for Product Companies",
    metaDescription:
      "OEM manufacturing in China for plastic and metal products, combining DFM, tooling, molding, CNC machining, die casting, assembly and export delivery.",
    h1: "OEM Manufacturing Services in China for Product Companies",
    subtitle:
      "Move plastic and metal products from CAD and prototype validation through tooling, production, assembly, inspection and export delivery with one accountable manufacturing partner.",
    heroImage: "/images/seo/oem-manufacturing-hero.png",
    heroAlt: "OEM manufacturing services for plastic and metal products in China",
    painPointHeading: "Reduce engineering and supplier fragmentation during product launch",
    painPoints: [
      { title: "Multiple suppliers", body: "Separate tooling, molding, metal-part and assembly vendors create schedule and ownership gaps." },
      { title: "Design maturity", body: "Product designs often need practical DFM before production investment." },
      { title: "Launch risk", body: "Late interface issues can delay samples, certifications and market introduction." },
      { title: "Supply continuity", body: "Repeat production requires documented quality, packaging and change control." }
    ],
    capabilityHeading: "Integrated OEM manufacturing capabilities in China",
    capabilities: [
      { title: "DFM and prototyping", body: "Validate geometry, material, interfaces and manufacturing strategy early." },
      { title: "Tooling", body: "Injection molds and die casting tools designed for production requirements." },
      { title: "Plastic production", body: "Engineering-plastic molding, inserts, overmolding and cosmetic housings." },
      { title: "Metal components", body: "CNC machining, die casting and sheet metal fabrication." },
      { title: "Assembly", body: "Hardware, welding, staking, printing, inspection and packaging." },
      { title: "Export delivery", body: "Quality records, production coordination and international shipment support." }
    ],
    industries: ["OEM Product Companies", "Robotics Companies", "Smart Home Devices", "Medical Devices", "Automotive Components", "Industrial Automation"],
    caseStudy: {
      productType: "Connected industrial monitoring device",
      material: "PC/ABS housing, aluminum heat sink and steel brackets",
      challenge: "The program combined cosmetic plastics, thermal metal parts and final enclosure assembly across several interfaces.",
      solution: "Arktech coordinated DFM, tooling, molding, CNC machining, sheet metal and assembly inspection through one launch plan.",
      result: "The customer reduced supplier handoffs and entered pilot production with a documented component and assembly baseline."
    },
    trustPoints: ["Plastic and metal manufacturing", "One coordinated project team", "Prototype-to-production support", "NDA project support", "Export quality documentation"],
    faqs: [
      { question: "Can Arktech manage both plastic and metal components?", answer: "Yes. Programs can combine tooling, molding, machining, die casting, sheet metal, finishing and assembly." },
      { question: "Do you support OEM product development before tooling?", answer: "Yes. DFM, prototypes and manufacturing planning can be used before committing to production tools." },
      { question: "Can you ship assembled products or subassemblies?", answer: "Yes. Scope can include component integration, inspection, packaging and agreed export delivery." }
    ],
    serviceLinks: [
      { label: "OEM Product Company Solutions", href: "/solutions/oem-product-companies" },
      { label: "Plastic + Metal Assembly", href: "/services/plastic-metal-assembly" },
      { label: "Request an OEM Quote", href: "/request-a-quote" }
    ],
    relatedSeoSlugs: ["plastic-injection-molding", "cnc-machining-parts", "die-casting-manufacturing"]
  },
  {
    slug: "ems-electronics-manufacturing-support",
    metaTitle: "EMS Mechanical Parts Supplier in China for OEM Manufacturers",
    metaDescription:
      "China mechanical parts supplier for EMS manufacturers, providing plastic housings, molds, CNC parts, die castings, sheet metal and assembly support.",
    h1: "Mechanical Manufacturing Support for EMS Manufacturers",
    subtitle:
      "Source production molds, plastic housings, precision metal parts, die cast enclosures and mechanical assemblies from a China partner familiar with EMS documentation and launch requirements.",
    heroImage: "/images/seo/oem-industry-components.png",
    heroAlt: "Mechanical component manufacturing support for EMS companies",
    painPointHeading: "Improve mechanical-part readiness for electronics programs",
    painPoints: [
      { title: "Customer deadlines", body: "EMS schedules depend on mechanical parts arriving alongside electronics and test readiness." },
      { title: "Interface control", body: "Housings, PCBs, connectors, heat sinks and brackets must assemble without late rework." },
      { title: "Documentation", body: "Customer approvals require clear samples, inspection records and revision control." },
      { title: "Mixed processes", body: "Plastic, die cast, CNC and sheet metal parts often share one final enclosure." }
    ],
    capabilityHeading: "Mechanical manufacturing capabilities for EMS programs",
    capabilities: [
      { title: "DFM coordination", body: "Review enclosure, PCB, connector, heat and fastening interfaces." },
      { title: "Plastic housings", body: "Tooling and molding for cosmetic and industrial electronics enclosures." },
      { title: "Precision metal parts", body: "CNC heat sinks, brackets, frames and functional components." },
      { title: "Die cast enclosures", body: "Tooling, casting, machining and finishing for robust housings." },
      { title: "Sheet metal", body: "Panels, chassis, brackets, hardware and coated assemblies." },
      { title: "Mechanical assembly", body: "Inserts, seals, fasteners, inspection and production packaging." }
    ],
    industries: ["EMS Manufacturers", "Smart Home Devices", "Industrial Electronics", "Telecommunications", "Medical Devices", "New Energy Products"],
    caseStudy: {
      productType: "Industrial IoT gateway enclosure set",
      material: "PC/ABS, aluminum and powder-coated steel",
      challenge: "Multiple mechanical suppliers created revision and fit risk around PCB, antenna and connector interfaces.",
      solution: "Arktech consolidated housing tooling, CNC heat sinks and sheet metal brackets under one interface inspection plan.",
      result: "Pilot assembly required fewer mechanical corrections and the EMS team gained one coordinated component source."
    },
    trustPoints: ["Mixed-process component supply", "Engineering-document review", "Revision and interface control", "Mechanical assembly support", "Export delivery coordination"],
    faqs: [
      { question: "Can you work from EMS customer drawings and BOMs?", answer: "Yes. CAD, drawings, specifications and mechanical BOM information can be reviewed for quotation and manufacturability." },
      { question: "Can one project include plastic and metal parts?", answer: "Yes. Mixed-process projects are particularly suitable for electronics housings and mechanical assemblies." },
      { question: "Do you support inspection records for customer approval?", answer: "Yes. Agreed sample and critical-feature inspection records can support customer review." }
    ],
    serviceLinks: [
      { label: "EMS Manufacturer Solutions", href: "/solutions/ems-manufacturers" },
      { label: "Plastic Housing Manufacturing", href: "/services/plastic-housing-manufacturing" },
      { label: "Contact Arktech", href: "/contact" }
    ],
    relatedSeoSlugs: ["sheet-metal-fabrication", "plastic-injection-molding", "cnc-machining-parts"]
  },
  {
    slug: "dfm-engineering-services",
    metaTitle: "DFM Engineering Services in China for OEM Manufacturers",
    metaDescription:
      "DFM engineering services from a China manufacturer for injection molding, CNC machining, die casting and assembly, reducing tooling and launch risk.",
    h1: "DFM Engineering Services for OEM Manufacturing Programs",
    subtitle:
      "Identify geometry, material, tooling, tolerance and assembly risks before production investment with practical DFM feedback connected directly to manufacturing in China.",
    heroImage: "/images/seo/rfq-engineering-review.png",
    heroAlt: "DFM engineering review for OEM plastic and metal products",
    painPointHeading: "Make production decisions before problems become tooling changes",
    painPoints: [
      { title: "Late design changes", body: "Manufacturing issues discovered after tool release create schedule and cost escalation." },
      { title: "Tolerance conflict", body: "Part tolerances may not reflect process capability or assembly function." },
      { title: "Material uncertainty", body: "Resin and alloy choices influence shrinkage, finish, strength and cost." },
      { title: "Process mismatch", body: "Geometry should be aligned with molding, casting, machining or fabrication constraints." }
    ],
    capabilityHeading: "DFM engineering across plastic and metal manufacturing",
    capabilities: [
      { title: "Injection molding DFM", body: "Draft, walls, ribs, bosses, gates, cooling, shrinkage and cosmetic risk." },
      { title: "Tooling strategy", body: "Cavity count, actions, steel, components, maintenance and export requirements." },
      { title: "CNC review", body: "Datum, tolerance, tool access, setups, wall thickness and finishing." },
      { title: "Die casting DFM", body: "Parting, draft, venting, wall thickness, machining allowance and porosity risk." },
      { title: "Assembly review", body: "Interfaces, tolerance stacks, fasteners, inserts, seals and process access." },
      { title: "Cost optimization", body: "Practical alternatives that balance function, quality, lead time and investment." }
    ],
    industries: ["OEM Product Companies", "EMS Manufacturers", "Injection Molding Companies", "Robotics Companies", "Medical Devices", "Automotive Components"],
    caseStudy: {
      productType: "Smart lock enclosure family",
      material: "PC/ABS with die cast and steel components",
      challenge: "Snap fits, sealing interfaces and mixed-material tolerances created assembly and cosmetic risk.",
      solution: "DFM aligned wall thickness, fastening, datum strategy and component interfaces before tooling release.",
      result: "The customer reduced late geometry changes and entered sampling with a clearer inspection plan."
    },
    trustPoints: ["Cross-process engineering review", "Tooling-linked recommendations", "Tolerance and interface focus", "Cost-driver visibility", "Confidential CAD review"],
    faqs: [
      { question: "What files are needed for a DFM review?", answer: "Provide 3D CAD, relevant 2D drawings, material, volume, finish, assembly context and critical requirements." },
      { question: "Is DFM included with a manufacturing quotation?", answer: "The depth depends on project stage; practical manufacturability feedback is normally part of engineering and quotation review." },
      { question: "Can DFM cover assemblies with plastic and metal parts?", answer: "Yes. Mixed-material interface, tolerance, fastening and process risks can be reviewed together." }
    ],
    serviceLinks: [
      { label: "DFM Engineering Support", href: "/services/dfm-engineering" },
      { label: "DFM Checklist", href: "/resources/dfm-checklist-for-plastic-housing" },
      { label: "Upload CAD for Review", href: "/request-a-quote" }
    ],
    relatedSeoSlugs: ["injection-molding-tooling", "die-casting-manufacturing", "oem-manufacturing-services"]
  }
];

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}
