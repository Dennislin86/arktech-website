# Image Asset Library

This is the source of truth for website image selection. Paths are relative to `public` and must be referenced in code as `/images/...`.

## Homepage Commercial Flow

The optimized Homepage reuses approved first-party and existing local assets; it does not add stock, competitor or newly generated imagery. Below-fold videos use muted lazy autoplay with documented poster fallbacks.

| Homepage use | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Hero | `/images/hero/export-injection-mold-manufacturing-hero.webp` | Export injection molds and molded plastic parts manufactured by Arktech | Existing approved Arktech hero image; priority-loaded above the fold |
| Tooling gallery — Injection Molds | `/images/tooling-gallery/Mould/` | Per-image factual alt text is maintained in the gallery metadata | Eight copied source assets from the approved real Arktech Mold Types library; generated derivatives are used on the Homepage |
| Tooling gallery — Plastic Parts | `/images/tooling-gallery/Plastic part/` | Per-image factual alt text is maintained in the gallery metadata | Seven copied source assets from approved real Arktech project and molded-part imagery; generated derivatives are used on the Homepage |
| DFM engineering proof | `/images/Engineering/arktech-dfm-mold-design-report-overview.webp` | Overview of 21 DFM report pages for injection mold design review | Lossless 1600 × 2964 WebP derivative of the complete real `/images/Engineering/DFM report.png`; used as the Homepage thumbnail with the original 4960 × 9188 PNG loaded on demand in the zoomable preview |
| DFM engineering — 2D mold drawing | `/images/Engineering/Mold 2d drawing.png` | 2D mold design drawing with dimensions and tooling details | Existing user-supplied 3146 × 2200 technical drawing; active in the Homepage DFM section with independent full-resolution preview |
| DFM engineering — 3D mold drawing | `/images/Engineering/Mold 3d drawing.png` | 3D CAD view of an injection mold assembly | Existing user-supplied 2074 × 2024 technical drawing; active in the Homepage DFM section with independent full-resolution preview |
| Injection mold manufacturing video | `https://www.youtube.com/watch?v=Fch2Y-y6cYI` | Arktech Injection Mold Manufacturing | Official YouTube embed on the Homepage and Manufacturing Capabilities page; API and single iframe load only when eligible desktop visibility or an explicit play action requests the player |
| Injection mold manufacturing poster | `/images/injection-mold-manufacturing/mold-manufacturing-video-poster.webp` | Injection mold fitting and assembly at Arktech | Existing optimized first-party frame used on the Homepage and Manufacturing Capabilities page before the YouTube player loads and for reduced-motion/mobile fallback |
| Validation — Mold Trial Report | `/images/quality/arktech-mold-trial-report-overview.webp` | Injection mold trial report | Lossless 2000 × 4221 WebP derivative of the complete real 22-page `/images/Mold trail/Mold trail report.png`; active in the Homepage validation gallery |
| Validation — Mold Trial | `/images/quality/arktech-mold-trial-machine.webp` | Injection mold trial at Arktech | High-quality 1400 × 924 WebP derivative of the real `/images/Mold trail/Mold trial video photos.png`; active in the Homepage validation gallery |
| Validation — Dimensional Inspection | `/images/Mold trail/Sample Inspection Report.png` | Sample inspection report with dimensional measurement results | Existing real 874 × 1024 PNG supplied in the Mold trail folder; active in the Homepage validation gallery without cropping |
| Validation — Process Parameters | `/images/quality/arktech-injection-molding-parameters.webp` | Injection molding process parameter record | Lossless 1450 × 2048 WebP derivative of the complete real `/images/Mold trail/Injection parameter.png`; active in the Homepage validation gallery |
| Plastic injection molding video | `/videos/injection-molding-production.mp4` | Plastic injection molding production at Arktech | Existing real Arktech production video; reused through the approved production-video component |

The six Homepage Injection Mold Capability cards reuse the approved Mold Type assets documented below. The six Homepage Industries cards reuse the approved Homepage Industries assets documented below.

### Homepage Tooling & Molded Parts Gallery

The Homepage gallery is generated from two user-managed source directories. Original source files remain unchanged; `scripts/generate-tooling-gallery.mjs` writes optimized, content-hashed WebP derivatives to `/images/tooling-gallery/optimized/` and creates `generated/tooling-gallery-manifest.json`. The generated output directory is never scanned as source input.

- Injection mold sources: `/images/tooling-gallery/Mould/`
- Molded-part sources: `/images/tooling-gallery/Plastic part/`
- Optional metadata: `/images/tooling-gallery/metadata.json`
- Asset instructions: `/images/tooling-gallery/README.md`

The initial set contains eight completed-mold images and seven molded-part/project images. All are copied from approved local Arktech assets already documented in the Injection Mold Types, Material Capabilities and Arktech Group Case Studies sections below. No external, competitor, stock or newly generated asset was introduced. Web paths containing the `Plastic part` source-folder space are not emitted into the page: the generated derivatives use safe lowercase hyphenated filenames under `/images/tooling-gallery/optimized/`.

Gallery titles are displayed only when an explicit descriptive title exists in `/images/tooling-gallery/metadata.json`. Newly discovered files without reviewed metadata use the category-level factual alt fallback and never expose their filename as a caption, tooltip, dialog heading or accessible control name.

## Who We Serve

| Content | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| OEM & Product Companies | `/images/company/arktech-product-design-injection-mold-production.webp` | Product design, DFM, mold development and injection molding production workflow | Optimized 1024 × 512 WebP derived from the existing first-party `product-design-injection-mold-production.jpg`; active on the Homepage buyer-identification card |
| Injection Molding & Tooling Companies | `/images/company/arktech-export-injection-mold-global-delivery.webp` | Completed export injection mold with mold trial validation and packing preparation | Optimized 1200 × 675 WebP derived from the existing first-party `Precision Mold to Global Delivery.png`; active on the Homepage buyer-identification card |

## Manufacturing Capabilities

| Capability | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Injection Mold Manufacturing | `/images/capabilities/injection-mold-manufacturing.png` | Production injection molds and molded components manufactured by Arktech | User-supplied image; active |
| Mold Trial & Sampling Support | `/images/capabilities/mold-trial-sampling-support.png` | Injection mold trial, sample validation and dimensional inspection support | User-supplied image; active |
| Plastic Injection Molding | `/images/capabilities/plastic-injection-molding-production.webp` | Plastic injection molding quality inspection with digital caliper measuring a white plastic enclosure | User-supplied image; active |
| Tooling Spare Parts | `/images/capabilities/tooling-spare-parts.jpg` | Precision tooling inserts and spare parts for export injection molds | User-supplied image; active |
| CNC Machining | `/images/capabilities/cnc-machining.jpg` | Precision CNC machining for aluminum and stainless steel components | Real legacy-site photo; active |
| Die Casting | `/images/capabilities/die-casting.webp` | Aluminum and zinc die casting for industrial products | User-supplied image; active |
| Sheet Metal Fabrication | `/images/capabilities/sheet-metal-fabrication.jpg` | Sheet metal fabrication for industrial enclosures and assemblies | Real legacy-site photo; active |
| Rapid Prototyping | `/images/capabilities/rapid-prototyping-v3.png` | SLA SLS and CNC rapid prototyping for product validation | AI-generated; active |
| Vacuum Casting | `/images/capabilities/vacuum-casting-v3.png` | Polyurethane vacuum casting for bridge production and prototypes | AI-generated; active |
| Assembly & Secondary Operations | `/images/capabilities/assembly-secondary-operations.webp` | Electronics assembly line for component assembly and secondary operations | User-supplied AI-generated image; active |
| R&D & Product Development | `/images/capabilities/rd-product-development.webp` | DFM engineering review and product development for manufactured components | User-supplied AI-generated image; active |
| Connected Manufacturing flow | `/images/capabilities/arktech-connected-tooling-production-process.webp` | Production flow chart showing DFM, mold design, machining, assembly, validation, plastic part production and delivery | Lossless WebP derivative of the user-supplied `/images/capabilities/Connected Manufacturing.png`; active on the Manufacturing Capabilities page |

## Arktech Group Supporting Capabilities

| Capability | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| CNC Machining | `/images/capabilities/cnc-machining.webp` | CNC machined components arranged on a work surface | Existing real manufactured-components image; active in the Homepage supporting-capability grid |
| Die Casting | `/images/capabilities/die-casting.webp` | Die-cast component housings and structural parts on a workbench | Existing manufactured-components image; active in the Homepage supporting-capability grid |
| Sheet Metal Fabrication | `/images/capabilities/sheet-metal-fabrication.jpg` | Sheet metal clips brackets and formed components arranged on a surface | Real legacy-site photo; active in the Homepage supporting-capability grid |
| Rapid Prototyping | `/images/capabilities/rapid-prototyping-v3.webp` | Transparent and white prototype components displayed on a workshop table | Existing approved 1586 × 992 WebP; active in the Homepage supporting-capability grid with a 16:10 cover treatment |
| Vacuum Casting | `/images/case-studies/vacuum-casting-prototype.webp` | Silicone vacuum casting molds with a clear prototype part | Existing real vacuum-casting project image; active in the Homepage supporting-capability grid with a Homepage-specific cover crop |
| Assembly & Secondary Operations | `/images/capabilities/molded-part-component-assembly.webp` | Operator assembling molded plastic components at a work fixture | Optimized derivative of an existing real assembly photo; active in the Homepage supporting-capability grid and `/services` Extended Manufacturing card |
| Secondary Operations | `/images/capabilities/secondary-operations-pad-printing.webp` | Secondary operations for molded plastic components including welding printing and insert installation | Optimized WebP derivative of the user-supplied real Arktech pad-printing workshop photo; active on the `/services` Extended Manufacturing card and distinct from Assembly |

## Homepage Industries & Industries Hub

| Industry | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Robotics & Automation | `/images/industries/robotics-automation.png` | Industrial robot handling components on an automated production line | User-supplied industry image; active in the Homepage six-panel industry module |
| Medical & Healthcare Devices | `/images/industries/medial-industry.webp` | Medical device housings and precision molded plastic components | User-supplied industry image; active outside the Homepage panel |
| Automotive Components | `/images/industries/Automotive-Components.png` | Automotive interior with dashboard controls and molded trim components | User-supplied industry image; active in the Homepage six-panel industry module |
| Energy Storage & EV Charging | `/images/industries/autimotive-ev.webp` | EV charging housings connectors and molded power components | User-supplied industry image; active outside the Homepage panel |
| Smart Home & IoT | `/images/industries/smart-device-housings.png` | Smart home cameras hubs sensors and connected control devices | User-supplied industry image; active in the Homepage six-panel industry module |
| Home Appliance | `/images/industries/home-appliance.png` | Home appliances with molded housings and control panels in a kitchen | User-supplied industry image; active in the Homepage six-panel industry module |
| Pet Tech Products | `/images/industries/pet-lifestyle-product-parts.png` | Dog and cat using connected pet feeder water and camera products | User-supplied industry image; active in the Homepage six-panel industry module |
| Consumer Electronics | `/images/industries/consumer-electronics-enclosures.png` | Consumer electronics including headphones phone watch camera and speaker | User-supplied industry image; active in the Homepage six-panel industry module |

The Homepage uses six approved application images in its full-width interactive panel. Other approved industry images remain active on the Industries Hub and deeper application pages. No external, competitor, stock or newly generated images are used for these modules.

### Industries Hub — seven-industry application structure

The current `/industries/` hub uses seven primary application groups. It reuses approved local assets only; no new, external, competitor or generated image was added for this rebuild.

| Hub use | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Smart Home & IoT | `/images/industries/smart-device-housings.png` | Smart home cameras hubs sensors and connected devices with molded plastic housings | Existing approved local industry image; active |
| Home Appliances | `/images/industries/home-appliance.png` | Home appliances with molded plastic housings controls and functional components in a kitchen | Existing approved local industry image; active |
| Consumer Electronics | `/images/industries/consumer-electronics-enclosures.png` | Consumer electronics with molded plastic housings controls and product enclosures | Existing approved local industry image; active |
| Pet Tech Products | `/images/industries/pet-lifestyle-product-parts.png` | Dog and cat using a smart pet feeder water device and connected pet camera | Existing approved local industry image; active |
| Automotive Components | `/images/industries/Automotive-Components.png` | Automotive interior controls panels and functional molded plastic components | Existing approved local industry image; active |
| Industrial Automation | `/images/industries/robotics-injection-mold-components.webp` | Industrial automation components including sensor housings controllers and precision parts | Existing approved local automation-component image; active |
| Medical Device Components | `/images/industries/medial-industry.webp` | Medical equipment with molded plastic housings functional components and control interfaces | Existing approved local industry image; active |
| Smart Home project proof | `/images/case-studies/ihgs-housing.webp` | Smart home housing components and product assembly developed through injection molding engineering | Existing real Arktech project image; active |
| Automotive project proof | `/images/case-studies/automotive-multi-cavity-mold.webp` | Automotive sensor housing multi-cavity injection mold and molded components | Existing real Arktech tooling-project image; active |
| Medical project proof | `/images/case-studies/medical-education-device.webp` | Medical education device housing development engineering and injection molding project | Existing local Arktech Group case-study image; active |

## Technical Resources Hub

The `/resources/` Technical Resources Hub reuses approved local technical and project assets only. No external, competitor, stock or newly generated image was added for this rebuild.

| Hub use | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Hero — DFM engineering | `/images/Engineering/injection-mold-engineering-dfm-analysis.webp` | Injection mold DFM engineering review on CAD workstations | Existing approved Arktech engineering image; active |
| Hero — complex tooling | `/images/mold-types/complex-injection-molds.png` | Completed complex injection mold with multiple tooling actions | Existing approved mold-type image; active |
| Hero — dimensional report | `/images/quality/dimensional-inspection-report-anonymized.webp` | Anonymized dimensional inspection report for molded trial samples | Existing approved anonymized quality record; active |
| Featured guide — injection molding | `/images/capabilities/plastic-injection-molding-production.webp` | Plastic injection molding production and molded component validation | Existing approved capability image; active |
| Automotive case study | `/images/case-studies/automotive-multi-cavity-mold.webp` | Multi-cavity injection mold and molded automotive sensor housings | Existing real Arktech tooling-project image; active |
| Smart Home case study | `/images/case-studies/ihgs-housing.webp` | Smart home device housing components and assembly concept | Existing real Arktech project image; active |
| Two-Shot / 2K case study | `/images/case-studies/two-shot-light-cover.webp` | Two-shot injection molds and transparent molded light-cover component | Existing real Arktech tooling-project image; active |

All remaining technical-resource cards inherit their approved image paths and factual alt text from `lib/engineering-resources.ts`.

## Robotics Industry Page

No new image files, hotlinked images, competitor images or external stock assets were added for `/industries/robotics`. The page reuses the following approved local assets.

| Page use | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Robotics hero | `/images/industries/robotics-automation.png` | Industrial robot handling molded robotics components in an automated production environment | Existing user-supplied Robotics application image; active and priority-loaded only in the hero |
| Robotics applications and example scopes | `/images/industries/robotics-injection-mold-components.webp` | Robotics housings, sensor modules and precision components for automation applications | Existing user-supplied industry application visual; active as illustrative product context, not presented as a customer case study |
| Robotics DFM engineering | `/images/process/dfm-engineering-feedback-old-website.png` | DFM engineering review for injection molded robotics component geometry | Existing Arktech DFM engineering graphic; reused on Robotics page |
| Robotics quality control | `/images/process/sample-validation-inspection-cmm.png` | Dimensional inspection of molded robotics components for sample validation | Existing real Arktech inspection photo; reused on Robotics page |

## Industry Child Pages

The eight high-intent Industry child pages reuse approved local application imagery. No external, competitor, stock or newly generated image was added. The shared quality-evidence layout also reuses the documented real Arktech inspection photo, anonymized dimensional report and trial-sample evidence.

| Industry / page use | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Robotics hero | `/images/industries/robotics-automation.png` | Industrial robot handling molded robotics components in an automated production environment | Existing approved user-supplied industry image; active on `/industries/robotics` |
| Robotics applications | `/images/industries/robotics-injection-mold-components.webp` | Robotics housings sensor modules and precision components for automation applications | Existing approved industry visual; active |
| Medical hero | `/images/industries/medial-industry.webp` | Medical and diagnostic equipment with molded plastic housings and functional components | Existing approved user-supplied industry image; active on `/industries/medical-devices` |
| Medical applications | `/images/industries/medical-healthcare-device-parts.webp` | Medical device housings transparent components and diagnostic equipment parts | Existing approved industry visual; active |
| Automotive hero | `/images/industries/Automotive-Components.png` | Automotive interior controls display housing and functional molded plastic components | Existing approved user-supplied industry image; active on `/industries/automotive-components` |
| Automotive applications | `/images/industries/automotive-ev-components.webp` | Automotive molded housings connectors and functional production components | Existing approved industry visual; active |
| Smart Home & IoT hero | `/images/industries/smart-device-housings.png` | Smart home cameras hubs sensors and connected device housings | Existing approved user-supplied industry image; active on `/industries/smart-home` |
| Smart Home & IoT applications | `/images/industries/smart-iot-device-housings.jpg` | Smart home product housings sensors hubs and connected controls | Existing approved industry visual; active |
| Energy Storage & EV hero | `/images/industries/autimotive-ev.webp` | Electric vehicle charging stations and molded EV charging product housings | Existing approved user-supplied industry image; active on `/industries/new-energy` |
| Energy Storage & EV applications | `/images/industries/automotive-ev-components.jpg` | EV charging housings connector components and power electronics enclosures | Existing approved industry visual; active |
| Home Appliance hero | `/images/industries/home-appliance.png` | Home appliances with molded housings control panels and functional plastic parts | Existing approved user-supplied industry image; active on `/industries/home-appliance` |
| Home Appliance applications | `/images/industries/home-appliance-smart-home-components.webp` | Molded home appliance housings control interfaces and functional components | Existing approved industry visual; active |
| Pet Tech hero | `/images/industries/pet-lifestyle-product-parts.png` | Smart pet feeders water devices cameras and connected pet products | Existing approved user-supplied industry image; active on `/industries/pet-tech` |
| Pet Tech applications | `/images/industries/pet-lifestyle-product-parts.webp` | Smart pet product housings bowls cameras and molded functional components | Existing approved industry visual; active |
| Consumer Electronics hero | `/images/industries/consumer-electronics-enclosures.png` | Consumer electronics products including enclosures mobile devices audio products and accessories | Existing approved user-supplied industry image; active on `/industries/consumer-electronics` |
| Consumer Electronics applications | `/images/industries/consumer-electronics-enclosures.webp` | Consumer electronics housings enclosures circuit interfaces and functional components | Existing approved industry visual; active |

## Injection Mold Types

| Capability | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Precision Injection Molds | `/images/mold-types/Precision-Molds.png` | Precision injection mold for controlled-dimension plastic parts and repeatable production | Existing user-supplied tooling image; active as the first Homepage Mold Types card |
| Multi-Cavity Injection Molds | `/images/mold-types/multi-cavity-injection-molds.webp` | Multi-cavity injection mold with multiple production cavities | User-supplied real Arktech tooling image; active on the Homepage, Injection Molds Hub and dedicated Multi-Cavity Injection Molds child page |
| Hot Runner Molds | `/images/mold-types/hot-runner-molds.webp` | Hot runner injection molds for efficient high-volume plastic production | User-supplied tooling image; active |
| Insert Molding Tools | `/images/mold-types/insert-molding-tools.webp` | Insert molding tools for plastic components with integrated metal inserts | User-supplied tooling image; active |
| Complex Injection Molds | `/images/mold-types/complex-injection-molds.png` | Complex injection molds for precision industrial plastic components | User-supplied real tooling photo; active in Mold Types, Company navigation and Resources Case Studies panel |
| Prototype Injection Molds | `/images/mold-types/prototype-injection-mold.webp` | Prototype injection molds for product validation and early production | User-supplied tooling image; active on the homepage Custom / Production Molds and Prototype Injection Molds cards, plus production options |
| Unscrewing Molds | `/images/mold-types/unscrewing-molds.webp` | Unscrewing injection molds for plastic parts with internal and external threads | User-supplied tooling image; active |
| Two-Shot / 2K Injection Molds | `/images/mold-types/two-shot-2k-bi-injection-molds.webp` | Two-shot 2K bi-injection molds for multi-material plastic components | User-supplied tooling image; active |
| Large Component Molds | `/images/mold-types/large-component-molds.JPG` | Large component injection molds for industrial housings and structural plastic parts | Real Arktech tooling photo; active in Mold Types and Company navigation |
| Family Molds | `/images/mold-types/Family-molds.JPG` | Family injection mold with multiple part geometries in one tooling set | Existing real Arktech tooling photo; active on the Injection Molds Hub |
| High-Gloss Injection Molds | `/images/mold-types/High-Gloss Injection Molds.JPG` | Mirror-polished mold cavities for high-gloss visible plastic parts | Existing user-supplied tooling photo; active on the Injection Molds Hub |
| In-Mold Labeling (IML) | `/images/mold-types/In-mould labelling (IML).png` | Diagram of decorative film placement and in-mold labeling integration | Existing user-supplied technical visual; active on the Plastic Injection Molding page and presented without unsupported automation claims |
| Die Casting Tooling | `/images/case-studies/die-casting-control-housing.webp` | Die casting die with raw and finished metal control housing | Existing verified 1024 × 768 tooling-and-component image; active on the Injection Molds Hub as supporting tooling from Arktech Group |

## Injection Molds Taxonomy & Overview Page

| Mold category | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Precision Injection Molds | `/images/mold-types/Precision-Molds.png` | Precision injection mold for controlled-dimension plastic parts and repeatable production | Existing real Arktech tooling image; active on the Hub and dedicated Precision Injection Molds child page |
| Multi-Cavity Injection Molds | `/images/mold-types/multi-cavity-injection-molds.webp` | Multi-cavity injection mold with repeated production cavities | Existing real Arktech tooling image; active on the Hub, homepage and dedicated child page; High-Cavitation intent is consolidated here because no distinct route, content or asset exists |
| Large Injection Molds | `/images/mold-types/large-component-molds.JPG` | Large injection mold for industrial housing and structural plastic parts | Existing real Arktech tooling photo; active on overview and homepage |
| Complex Injection Molds | `/images/mold-types/complex-injection-molds.png` | Complex injection mold with multiple sliders and tooling mechanisms | Existing real Arktech tooling image; active on overview, homepage and dedicated Complex Injection Molds child page |
| Prototype Injection Molds | `/images/mold-types/prototype-injection-mold.webp` | Prototype injection mold with a molded part for engineering validation | Existing real Arktech tooling image; active on the Hub and dedicated Prototype Injection Molds child page |
| Insert Molding Tools | `/images/mold-types/insert-molding-tools.webp` | Insert molding tool for plastic parts with integrated inserts | Existing real Arktech tooling image; active on Hub and dedicated child page |
| Overmolding Tools | `/images/mold-types/insert-molding-tools.webp` | Production mold used for insert and overmolding tooling applications | Existing approved real tooling image remains on the Injection Molds Hub and child route; the Manufacturing Capabilities card uses its separately approved Overmolding asset below |
| Two-Shot / 2K Molds | `/images/mold-types/two-shot-2k-bi-injection-molds.webp` | Two-shot and 2K injection mold for multi-material plastic parts | Existing real Arktech tooling image; active on overview and homepage |
| Unscrewing Molds | `/images/mold-types/unscrewing-molds.webp` | Unscrewing injection mold for internally threaded plastic components | Existing real Arktech tooling image; active on overview and homepage |
| Hot Runner Molds | `/images/mold-types/hot-runner-molds.webp` | Hot runner injection mold for controlled production molding | Existing real Arktech tooling image; active on overview and homepage |
| Valve Gate Molds | `/images/mold-types/hot-runner-molds.webp` | Hot runner injection mold representative of valve gate tooling engineering | Existing real Arktech hot-runner tooling image; reused because no separate verified valve-gate asset exists |
| Slider & Lifter engineering resource | `/images/mold-types/complex-injection-molds.png` | Complex injection mold with sliders and lifters for side-action release | Removed as a standalone Hub Mold Type; retained only as a Complex Mold mechanism and engineering-resource topic |

### Dedicated Mold Type Child Pages

The reusable Mold Type page system uses only approved local assets and factual alt text. Dedicated child routes now use the following primary/supporting evidence pairs:

| Page | Primary asset | Supporting asset | Asset status |
| --- | --- | --- | --- |
| Precision Injection Molds | `/images/mold-types/Precision-Molds.png` | `/images/injection-mold-manufacturing/mold-trial-report-evidence.webp` | Verified mold + real validation record |
| Complex Injection Molds | `/images/mold-types/complex-injection-molds.png` | `/images/case-studies/fan-blade-mold.webp` | Verified complex mold + real multi-action project |
| Family Injection Molds | `/images/mold-types/Family-molds.JPG` | `/images/mold-types/multi-cavity-injection-molds.webp` | Verified family mold + factual comparison visual |
| Large Injection Molds | `/images/mold-types/large-component-molds.JPG` | `/images/process/tooling-manufacturing-plan-mold.png` | Verified large mold + real inspection image |
| Prototype Injection Molds | `/images/mold-types/prototype-injection-mold.webp` | `/images/capabilities/product-design-injection-mold-production.webp` | Verified prototype mold + real development components |
| Unscrewing Injection Molds | `/images/mold-types/unscrewing-molds.webp` | `/images/case-studies/unscrewing-mold.webp` | Verified tooling + real unscrewing project |
| High-Gloss Injection Molds | `/images/mold-types/High-Gloss Injection Molds.JPG` | `/images/factory-workshop/injection-mold-cavity-polishing-room.webp` | Verified polished mold + real polishing work |
| Insert Molding Tools | `/images/mold-types/insert-molding-tools.webp` | `/images/capabilities/plastic-injection-molding-v2.png` | Verified insert tool + general molded-component context |
| Two-Shot / 2K Injection Molds | `/images/mold-types/two-shot-2k-bi-injection-molds.webp` | `/images/case-studies/two-shot-light-cover.webp` | Verified 2K tool + real two-shot project |
| Overmolding Tools | `/images/material-capabilities/silicone-tpu-tpe-elastomer-components.webp` | `/images/mold-types/insert-molding-tools.webp` | Existing child-page pairing retained; the new verified Overmolding mold asset is scoped to the Manufacturing Capabilities card in this update |
| Hot Runner Injection Molds | `/images/mold-types/hot-runner-molds.webp` | `/images/injection-mold-manufacturing/injection-molding-process-parameters.webp` | Verified hot-runner tool + real process record |
| Gas-Assisted Injection Molds | `/images/mold-types/complex-injection-molds.png` | `/images/plastic-injection-molding/gate-flow-analysis.webp` | Temporary: factual Arktech mold + flow-analysis context; replace with verified gas-assisted tool and molded section |
| Thermoset Molds | `/images/mold-types/hot-runner-molds.webp` | `/images/factory-workshop/injection-mold-precision-grinding-workshop.webp` | Temporary: factual Arktech tooling + real component machining; replace with verified thermoset tooling and molded part |

High-Temperature Injection Molds and In-Mold Labeling remain overview/resource topics only. No standalone child page is indexed because the current asset and project evidence is insufficient for a differentiated, non-thin page.

The `/injection-molds` page uses approved real case-study assets for Automotive Sensor Housing, Medical Device Cartridge, Smart Home Housing, Two-Shot Light Cover, Threaded Component Unscrewing and Fan Blade tooling in the horizontal **Real Injection Mold Projects** portfolio. The Medical Device Cartridge card uses `/images/case-studies/Medical device.png`, which shows a medical diagnostic device together with injection molds and molded housing components. Every carousel card uses a unique factual alt description. No toolroom overview, operator, polishing, trial-report or inspection-only image is included in that completed-mold portfolio.

No new image files were created for the synchronized taxonomy. Missing dedicated High-Cavitation and Valve Gate mold images remain documented rather than being replaced with generated or external placeholders. High-Cavitation is merged into Multi-Cavity on the Hub, the Overmolding Hub and child-page visuals remain unchanged by the later card-only update, and Valve Gate reuses the approved Hot Runner tooling image.

## Engineering-to-Production Delivery

| Process step | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| RFQ & CAD Review | `/images/process/rfq-cad-review-old-website.png` | CAD files and engineering review for export injection mold RFQ | Real legacy-site engineering photo; active |
| DFM Engineering Feedback | `/images/process/dfm-engineering-feedback-old-website.png` | DFM engineering feedback for plastic part design and tooling risk review | Existing DFM engineering graphic; active |
| Tooling & Manufacturing Plan | `/images/process/tooling-manufacturing-plan-mold.png` | Injection mold manufacturing plan and export tooling development | Real tooling photo; active |
| Sample Validation & Inspection | `/images/process/sample-validation-inspection-cmm.png` | Plastic injection molded sample validation and dimensional inspection | Real inspection photo; active |
| Export Delivery & Production Support | `/images/process/export-delivery-production-support-molding.png` | Production support and export delivery preparation for manufacturing projects | Real mold production photo; active |

## Injection Molding Production

| Content | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Production video poster | `/images/process/export-delivery-production-support-molding.png` | Injection mold installed for plastic injection molding production | Existing real mold production photo; active as the homepage injection molding video poster |
| Production video | `/videos/injection-molding-production.mp4` | Plastic injection molding production after mold trial and process validation | Existing user-supplied real production video; 3.25 MiB portrait source displayed with a responsive centered crop on the homepage and Plastic Injection Molding service-page hero |

## Arktech Group Case Studies

| Case study | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Laparoscopic Simulator | `/images/case-studies/medical-education-device.webp` | Medical laparoscopic simulator product development and manufacturing case study | Existing local copy of Arktech Group case study image; active |
| Motion Tracker | `/images/case-studies/smart-home-iot-project.webp` | Smart home motion tracker product development and injection molding case study | Existing local copy of Arktech Group case study image; active |
| Fan Blade Mold with 7 Sliders | `/images/case-studies/fan-blade-mold.webp` | Industrial fan blade injection mold with seven sliders and lifters | Existing local copy of Arktech Group case study image; active |
| Zinc Die Casting Control Housing | `/images/case-studies/die-casting-control-housing.webp` | Die casting die with raw and finished metal control housing | Existing local copy of Arktech Group case study image; active in the case study library and as supporting tooling evidence on the Injection Mold Manufacturing page |
| Automotive Multi-Cavity Mold Project | `/images/case-studies/automotive-multi-cavity-mold.webp` | Multi-cavity injection mold and molded automotive sensor housings | Existing real Arktech tooling project image; active on the case study hub and detail page |
| Export Tool Fixed and Moving Sides | `/images/case-studies/eject-fixed-side-tooling.webp` | Fixed-side and moving-side export injection mold engineering layout | Existing real Arktech tooling image; supporting evidence on the automotive case study |
| Smart Home Housing Project | `/images/case-studies/ihgs-housing.webp` | Smart home device housing components and assembly concept | Existing real Arktech product engineering image; active on the case study hub and detail page |
| Two-Shot Light Cover Tooling | `/images/case-studies/two-shot-light-cover.webp` | First-shot and second-shot injection molds with a transparent molded light cover | Existing real Arktech tooling project image; active on the case study hub, detail page and transparent molding article |
| Motor-Driven Unscrewing Mold | `/images/case-studies/unscrewing-mold.webp` | Motor-driven unscrewing injection mold and internally threaded molded components | Existing real Arktech tooling project image; active on the case study hub, detail page and undercut article |

## Engineering Resources Phase 1

No new image files were created for Phase 1. The resource hub, four pillar guides and twelve engineering articles reuse the following approved local Arktech assets.

| Resource use | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| DFM Guide and draft guidance | `/images/Engineering/injection-mold-engineering-dfm-analysis.webp` | Injection molding DFM engineering review for plastic part design | Existing Arktech engineering visual; active |
| Injection Molding Guide | `/images/capabilities/plastic-injection-molding-production.webp` | Plastic injection molding production and molded component validation | Existing approved production image; active |
| Material Selection and engineering plastics | `/images/material-capabilities/engineering-plastic-parts-abs-pc-pa-pom.webp` | Engineering plastic parts manufactured from common thermoplastic material families | Existing approved materials image; active |
| Mold Design Guidelines | `/images/mold-types/complex-injection-molds.png` | Complex export injection mold design with multiple tooling actions | Existing real Arktech tooling image; active |
| Wall, ribs and molded-part DFM | `/images/process/dfm-engineering-feedback-old-website.png` | DFM review of plastic part geometry and injection mold engineering feedback | Existing Arktech engineering graphic; active |
| Undercut guidance | `/images/mold-types/unscrewing-molds.webp` | Injection mold mechanism for threaded and undercut plastic features | Existing real Arktech tooling image; active |
| Hot runner comparison | `/images/mold-types/hot-runner-molds.webp` | Hot runner injection mold and molded production components | Existing real Arktech tooling image; active |
| Multi-cavity comparison | `/images/mold-types/multi-cavity-injection-molds.webp` | Multi-cavity injection mold for repeated plastic components | Existing real Arktech tooling image; active |
| Slider and lifter comparison | `/images/case-studies/fan-blade-mold.webp` | Complex injection mold with multiple sliders and lifters | Existing real Arktech case-study image; active |
| Sink and warpage troubleshooting | `/images/process/sample-validation-inspection-cmm.png` | Molded-part dimensional and cosmetic inspection | Existing real inspection image; active |
| Transparent plastic molding | `/images/case-studies/two-shot-light-cover.webp` | Transparent molded plastic light cover and precision tooling project | Existing real Arktech project image; active |

## Tooling Documentation

| Content | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Tooling Documentation & Pre-Shipment Validation | `/images/documentation/tooling-documentation-package.png` | Export injection mold tooling documentation and pre-shipment validation package | User-supplied documentation screenshot copied from `/public/images/document/Mold-checking-document.png`; active |

## Quality Documentation Page

| Content | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Hero and dimensional inspection evidence | `/images/quality/dimensional-inspection-report-anonymized.webp` | Anonymized dimensional inspection report for molded trial samples | Existing approved anonymized quality record; active with accessible click-to-enlarge viewing |
| Inspection environment | `/images/process/sample-validation-inspection-cmm.png` | Operator reviewing a measurement screen beside dimensional inspection equipment | Existing real inspection photo; active as context and not presented as the same project as the report |
| Mold insert CMM inspection poster | `/images/quality/mold-insert-cmm-inspection-poster.webp` | CMM probe checking a machined mold component | 720 × 1264 WebP frame extracted at 10 seconds from the real first-party inspection source; active as the poster for the click-to-load evidence video |
| Mold insert CMM inspection video | `/videos/quality/mold-insert-cmm-inspection.mp4` | Mold insert dimensional inspection using CMM equipment | 11.07-second, 720 × 1264 H.264 derivative of `/videos/injection-mold-manufacturing/insert QC CMM check.mp4`; audio removed, faststart enabled, and loaded only after an explicit play action |
| Trial process record | `/images/injection-mold-manufacturing/injection-molding-process-parameters.webp` | Anonymized injection molding process parameter record from a mold trial | Existing privacy-safe crop excluding project and personnel identifiers; active with accessible click-to-enlarge viewing |
| Trial observation record | `/images/injection-mold-manufacturing/mold-trial-report-evidence.webp` | Mold trial report page showing an open injection mold installed in a molding machine | Existing privacy-safe Arktech report crop; active with accessible click-to-enlarge viewing |
| Tooling documentation package | `/images/documentation/tooling-documentation-package.png` | Injection mold documentation package with tooling drawings and validation records | Existing asset retained for the Tooling Documentation page; intentionally no longer displayed as primary quality evidence |

## Injection Mold Manufacturing Page

| Content | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Mold-trial video | `/videos/Mold manufacturing/Mold-trial.mp4` | Arktech injection mold trial and validation process | Existing real Arktech mold-trial video; retained in the later manufacturing proof content with muted lazy autoplay |
| Mold-trial poster | `/images/Mold trail/Mold trial video photos.png` | Injection mold installed in a molding machine for trial and validation | Existing real mold-trial video frame; retained as the video loading and reduced-motion fallback |
| Export tooling overview | `/images/injection-mold-manufacturing/Precision Mold to Global Delivery.png` | Precision injection mold manufacturing, validation and global delivery preparation | Existing first-party export tooling visual; active in the Injection Mold Manufacturing export-tooling overview |
| Export tooling overview manufacturing video | `/videos/injection-mold-manufacturing/mold-manufacturing.mp4` | Arktech injection mold manufacturing process | Optimized 1280 × 720 H.264 excerpt from the existing real Arktech `/videos/Mold manufacturing/Mold manufacturing.mp4` source; 8-second fitting and assembly sequence, muted, lazy-loaded and active below the retained export-tooling composite image |
| Mold manufacturing video poster | `/images/injection-mold-manufacturing/mold-manufacturing-video-poster.webp` | Injection mold fitting and assembly at Arktech | Optimized 1280 × 720 WebP frame extracted from the same real Arktech manufacturing sequence; active as the loading, autoplay-fallback and reduced-motion visual |
| Core capabilities — DFM & Mold Design | `/images/Engineering/injection-mold-engineering-dfm-analysis.webp` | DFM engineering and mold design review for export injection mold manufacturing | Existing Arktech engineering-office visual; reused in the Core Capabilities proof strip |
| Core capabilities — Precision Mold Manufacturing | `/images/factory-workshop/injection-mold-cnc-machining-workshop.webp` | Precision mold manufacturing with CNC machining equipment for injection tooling | Real Arktech workshop photo; reused in the Core Capabilities proof strip |
| Core capabilities — Mold Trial & Validation | `/images/process/export-delivery-production-support-molding.png` | Injection mold trial and sample validation before export delivery | Real Arktech process photo; reused in the Core Capabilities proof strip |
| Mold type discovery grid | `/images/mold-types/` approved assets | Descriptive alt text for each supported injection mold type | Existing approved tooling images; reused in the two-column image-led mold type grid |
| Export tooling spare parts | `/images/capabilities/tooling-spare-parts.jpg` | Precision tooling inserts and spare parts prepared for export injection molds | User-supplied tooling image; reused in Export-Ready Tooling section |
| Tooling documentation | `/images/documentation/tooling-documentation-package.png` | Export injection mold tooling documentation and validation package | User-supplied documentation screenshot; reused in Quality & Documentation section |
| Toolroom capabilities video | `/videos/injection-mold-manufacturing/mold-manufacturing.mp4` | Arktech injection mold manufacturing and toolroom process | Existing optimized first-party H.264 video; lazy-loaded with muted inline playback and native controls in Toolroom Capabilities |
| Retained local toolroom video | `/videos/injection-mold-manufacturing/arktech-mold-toolroom.mp4` | Arktech mold manufacturing and toolroom process | Optimized 10-second, 1280 × 720 H.264 excerpt from the existing real first-party `/videos/Arktech mold.mp4`; retained in the asset library and no longer requested by Toolroom Capabilities |
| Retained local toolroom poster | `/images/injection-mold-manufacturing/arktech-toolroom-video-poster.webp` | Mold fitting and assembly in the Arktech toolroom | Optimized 1280 × 720 WebP frame from the retained local toolroom video; retained in the asset library and no longer displayed in Toolroom Capabilities |
| Toolroom factory video poster | `/images/injection-mold-manufacturing/mold-manufacturing-video-poster.webp` | Toolmaker fitting an injection mold in the Arktech workshop | Existing optimized first-party workshop frame; fills the Toolroom Capabilities media area before playback and is reused by the Company YouTube player before activation |
| CNC machining equipment | `/images/factory-workshop/injection-mold-cnc-machining-workshop.webp` | Rows of CNC machining centers in the injection mold toolroom | Real Arktech workshop photo; active in the compact Toolroom equipment strip |
| EDM equipment | `/images/factory-workshop/injection-mold-edm-machine.webp` | Electrical discharge machining machine in the injection mold toolroom | Real Arktech equipment photo converted from `/images/facility/43081d0f-b20d-4505-b4c6-db4d44b05076.jpg`; active in the compact Toolroom equipment strip |
| Mold spotting machine | `/images/factory-workshop/injection-mold-spotting-machine.webp` | Mold spotting machine with an injection mold positioned on the worktable | Optimized 549 × 435 WebP derivative of the existing real Arktech `/images/facility/ebefbcb8-0274-4787-8437-55e0bebd891b.jpg`; active in the compact Toolroom equipment strip |
| Retained Wire EDM equipment | `/images/facility/41fc5d07-28a3-4fbf-9826-edaca9de7b2a.jpg` | Wire cutting equipment in the injection mold toolroom | Existing real Arktech toolroom photo; retained but no longer displayed in the removed standalone Equipment section |
| Retained grinding and milling | `/images/factory-workshop/injection-mold-precision-grinding-workshop.webp` | Grinding and milling equipment for injection mold components and inserts | Real Arktech workshop photo; retained but no longer displayed in the removed standalone Equipment section |
| Mold fitting and assembly | `/images/factory-workshop/injection-mold-fitting-workshop.webp` | Toolmakers fitting and assembling injection mold components | Real Arktech workshop photo; active in Core Toolmaking Capabilities and retained after removal of the standalone Equipment section |
| Mold manufacturing process overview | `/images/Project/project-management-system.webp` | Injection mold manufacturing and project management process from DFM through mold trial and export delivery | Existing real Arktech workflow composite; retained in the asset library and no longer displayed on the Injection Mold Manufacturing page |
| Mold polishing | `/images/factory-workshop/injection-mold-cavity-polishing-room.webp` | Injection mold cavity polishing before assembly | Real Arktech workshop photo; retained in the asset library and intentionally excluded from the completed-mold portfolio |
| Mold trial | `/images/process/export-delivery-production-support-molding.png` | Injection mold trial before customer approval | Real Arktech process photo; active in Validation and intentionally excluded from the completed-mold portfolio |
| Dimensional inspection | `/images/process/sample-validation-inspection-cmm.png` | Dimensional inspection for injection mold sample validation | Real Arktech inspection photo; retained for quality and validation contexts and intentionally excluded from the completed-mold portfolio |
| Production mold design review | `/images/factory-workshop/injection-mold-engineering-office.webp` | Injection mold engineering team reviewing production mold design before steel cutting | Existing real Arktech engineering-office photo; retained in the asset library and no longer displayed on the Injection Mold Manufacturing page |
| Complete DFM engineering review | `/images/injection-mold-manufacturing/complete-dfm-engineering-review.webp` | Complete injection mold DFM engineering review covering parting, cooling, gating and moving mechanisms | Optimized 1800 × 1095 WebP crop from the existing first-party `/images/Molding/DFM.png`; cover and general-information pages containing customer and project identifiers were excluded; active |
| DFM engineering report preview | `/images/injection-mold-manufacturing/dfm-engineering-report.webp` | Injection molding DFM engineering report with tooling review items | Optimized 2000 × 3705 WebP derivative of the existing real first-party `/images/Engineering/DFM report.png`; original PNG retained unchanged; retained in the asset library and no longer displayed on the Injection Mold Manufacturing page |
| Engineering to Toolroom bridge | `/images/factory-workshop/injection-mold-fitting-workshop.webp` | Injection mold fitting and tooling component verification in the Arktech toolroom | Existing real Arktech toolroom photo; active in Core Toolmaking Capabilities and Manufacturing Equipment |
| Mold trial validation — Mold Trial Report | `/images/injection-mold-manufacturing/mold-trial-report-evidence.webp` | Injection mold trial report documenting mold condition and validation | Optimized 1400 × 1037 WebP crop from the existing real Arktech `/images/Mold trail/Mold trail report.png`; customer and project identifiers excluded; promoted to the large primary evidence visual in Injection Mold Manufacturing |
| Mold trial validation — Process Parameters | `/images/injection-mold-manufacturing/injection-molding-process-parameters.webp` | Injection molding process parameter sheet from mold trial | Optimized 1200 × 1142 WebP crop from the existing real Arktech `/images/Mold trail/Injection parameter.png`; mold, part and personnel identifiers excluded; retained as supporting validation evidence |
| Mold trial validation — Dimensional Inspection | `/images/quality/dimensional-inspection-report-anonymized.webp` | Dimensional inspection report for injection molded trial samples | Existing anonymized real Arktech dimensional-report preview; retained as supporting validation evidence |
| Mold trial validation — Trial Sample | `/images/injection-mold-manufacturing/molded-trial-sample-evidence.webp` | Injection molded trial samples for tooling approval | Optimized 1400 × 919 WebP crop from the existing real Arktech `/images/Mold trail/Mold trail report.png`; customer and project identifiers excluded; removed from the Injection Mold Manufacturing validation group but retained for other approved uses |

## Manufacturing Capabilities Hub Page

The former `/services/` Hub moved permanently to `/manufacturing-capabilities/`. The rebuilt page reuses approved local assets only; no new image, stock media or generated placeholder was added.

| Content | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Hero tooling, mold trial and engineering composite | `/images/hero/tooling-mold-trial-engineering-capabilities.webp` | Injection mold tooling, mold trial and engineering support at Arktech Mold | Existing approved optimized WebP; active on `/manufacturing-capabilities/` |
| Primary injection mold manufacturing video | `/videos/injection-mold-manufacturing/mold-manufacturing.mp4` | Arktech injection mold manufacturing process | Existing optimized 1.8 MB first-party H.264 tooling video; lazy-loaded with muted inline playback |
| Primary injection mold manufacturing poster | `/images/injection-mold-manufacturing/mold-manufacturing-video-poster.webp` | Injection mold manufacturing in the Arktech toolroom | Existing first-party video frame; loading and reduced-motion fallback |
| Primary plastic injection molding video | `/videos/Injection Molding/injection-molding-production1.mp4` | Plastic injection molding production process at Arktech | Existing 5.6 MB, 1280 × 720 Arktech-owned production video; lazy-loaded with muted inline playback to preserve a landscape production view without embedded side bars |
| Primary plastic injection molding poster | `/images/capabilities/plastic-injection-molding-production-video-frame.webp` | Plastic injection molding production on an Arktech molding machine | Existing Arktech-owned production-video frame; loading and reduced-motion fallback |
| DFM & Co-Design | `/images/Engineering/injection-molding-dfm-report-anonymized.webp` | DFM report for injection mold design review | Existing privacy-safe real DFM report; active with live HTML explanation |
| Mold Trial & Validation | `/images/process/export-delivery-production-support-molding.png` | Injection mold trial and sample validation before approval | Existing real Arktech mold-trial photo; active |
| Quality Inspection | `/images/process/sample-validation-inspection-cmm.png` | Dimensional inspection during injection mold trial validation | Existing real Arktech inspection photo; active |
| Insert Molding | `/images/mold-types/insert-molding-tools.webp` | Insert molding tool for integrated inserts in plastic components | Existing approved real tooling image; active only on the Insert Molding card |
| Overmolding | `/images/mold-types/arktech-overmolding-tool.webp` | Injection mold for overmolding applications | Optimized 1200 × 675 WebP derivative of the user-supplied real `/images/mold-types/Overmold.png`; active only on the Manufacturing Capabilities Overmolding card |
| Two-Shot / 2K Molding | `/images/mold-types/two-shot-2k-bi-injection-molds.webp` | Two-shot 2K injection mold for multi-material plastic components | Existing approved real tooling image; active |
| Supporting manufacturing — CNC Machining | `/images/capabilities/cnc-machining.webp` | CNC machined components arranged on a work surface | Existing real manufactured-components image; active in the three-column Arktech Group support grid |
| Supporting manufacturing — Die Casting | `/images/capabilities/die-casting.webp` | Die-cast component housings and structural parts on a workbench | Existing manufactured-components image; active in the three-column Arktech Group support grid |
| Supporting manufacturing — Sheet Metal Fabrication | `/images/capabilities/sheet-metal-fabrication.jpg` | Sheet metal clips brackets and formed components arranged on a surface | Existing real legacy-site photo; shown with contained fit to preserve the complete component arrangement |
| Supporting manufacturing — Rapid Prototyping | `/images/capabilities/rapid-prototyping-v3.webp` | Prototype components displayed beside additive manufacturing and machining equipment | Existing approved 1586 × 992 WebP; active in the Manufacturing Capabilities supporting grid with a full-frame 16:10 cover treatment |
| Supporting manufacturing — Vacuum Casting | `/images/case-studies/vacuum-casting-prototype.webp` | Silicone vacuum casting molds with a clear prototype part | Existing real vacuum-casting project image; active in the Manufacturing Capabilities supporting grid with a full-frame cover crop that removes the card padding and blank strips |
| Supporting manufacturing — Assembly & Secondary Operations | `/images/capabilities/molded-part-component-assembly.webp` | Operator assembling molded plastic components at a work fixture | Existing real assembly photo; active in the three-column Arktech Group support grid |
| Industry application cards | Existing approved assets under `/images/industries/` | Page-specific factual alt text | Reuses the approved Robotics, Medical, Automotive, Smart Home, Home Appliance and Consumer Electronics images; below-fold and lazy-loaded |

### Former `/services/` Hub asset record (superseded by the migration)

| Content | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Hero tooling, mold trial and engineering composite | `/images/hero/tooling-mold-trial-engineering-capabilities.webp` | Injection mold tooling, mold trial and engineering support at Arktech Mold | Optimized WebP derivative of the user-selected `/images/capabilities/Industrial Mold Engineering Showcase.png`; active as the single `/services` hero visual |
| Core injection molding | `/images/capabilities/plastic-injection-molding-production-video-frame.webp` | Plastic injection molding production for OEM plastic parts | Optimized 1200 × 675 WebP frame captured at approximately 00:09.6 from the existing Arktech-owned `/videos/injection-molding-production.mp4`; active in the `/services` core capability block and development-to-production workflow |
| Core engineering support | `/images/factory-workshop/injection-mold-engineering-office.webp` | Engineering support for DFM review, mold flow analysis and product development | Existing real Arktech engineering-office photo; active in the `/services` core capability block |
| Core export tooling | `/images/capabilities/injection-mold-manufacturing.png` | Export injection mold manufacturing for OEM tooling programs | User-supplied tooling image; reused in the `/services` core capability block |
| Workflow engineering review | `/images/factory-workshop/injection-mold-engineering-office.webp` | Engineering review for DFM, materials and injection molding requirements | Existing real Arktech engineering-office photo; reused in the `/services` development-to-production workflow |
| Workflow export tooling | `/images/mold-types/large-component-molds.JPG` | Export injection mold manufacturing and tooling preparation at Arktech | Existing real Arktech injection mold photo; reused in the `/services` development-to-production workflow |
| Workflow mold trial and validation | `/images/process/export-delivery-production-support-molding.png` | Injection mold trial and sample validation before production approval | Existing real Arktech mold-trial photo; reused in the `/services` development-to-production workflow |
| Workflow extended manufacturing | `/images/capabilities/cnc-machining.webp` | Extended manufacturing support for CNC parts assembly and secondary operations | Existing approved real manufactured-components photo; reused in the `/services` development-to-production workflow |
| Extended manufacturing — CNC Machining | `/images/capabilities/cnc-machining.webp` | CNC machined metal and plastic components by Arktech Group | Existing approved manufactured-components image; active in the `/services` secondary capability grid |
| Extended manufacturing — Die Casting | `/images/capabilities/die-casting.webp` | Die cast aluminum components for structural and functional applications | Existing approved die-cast-components image; active in the `/services` secondary capability grid |
| Extended manufacturing — Sheet Metal Fabrication | `/images/capabilities/sheet-metal-fabrication.jpg` | Sheet metal fabricated brackets housings and formed components | Existing real legacy-site image; active in the `/services` secondary capability grid |
| Extended manufacturing — Rapid Prototyping | `/images/capabilities/rapid-prototyping-v3.webp` | Rapid prototype parts for design validation and functional testing | Existing approved prototyping image; active in the `/services` secondary capability grid |
| Extended manufacturing — Assembly | `/images/capabilities/molded-part-component-assembly.webp` | Product and component assembly support by Arktech Group | Existing optimized real project assembly photo; active in the `/services` secondary capability grid |
| Extended manufacturing — Secondary Operations | `/images/capabilities/secondary-operations-pad-printing.webp` | Secondary operations for molded plastic components including welding printing and insert installation | Existing optimized real Arktech pad-printing workshop photo; active in the `/services` secondary capability grid and replaces the missing `/images/capabilities/Secondary-Operations.png` reference |
| Who We Support — Product Companies & OEM Teams | `/images/process/rfq-cad-review-old-website.png` | Product development and DFM review for new plastic products | Existing real Arktech engineering-office photo; active in the `/services` buyer-path section |
| Who We Support — Injection Molding Companies | `/images/process/tooling-manufacturing-plan-mold.png` | Export injection mold manufacturing for injection molding companies | Existing real Arktech export-tooling photo; active in the `/services` buyer-path section |
| Who We Support — EMS & Manufacturing Partners | `/images/capabilities/assembly-secondary-operations-v2.jpg` | Coordinated plastic metal and assembly manufacturing support | Existing real component-assembly process photo; active in the `/services` buyer-path section |
| Services industries — Robotics | `/images/industries/robotics-automation.png` | Robotics products supported by injection tooling and molded plastic components | User-supplied homepage industry image; reused in the `/services` traffic-distribution grid |
| Services industries — Medical & Healthcare Devices | `/images/industries/medial-industry.webp` | Medical device housings and precision molded plastic components | User-supplied homepage industry image; reused in the `/services` traffic-distribution grid |
| Services industries — Automotive Components | `/images/industries/Automotive-Components.png` | Automotive interior and functional injection molded plastic components | User-supplied homepage industry image; reused in the `/services` traffic-distribution grid |
| Services industries — Smart Home & IoT | `/images/industries/smart-device-housings.png` | Smart home and IoT device housings and sensor enclosures | User-supplied homepage industry image; reused in the `/services` traffic-distribution grid |
| Services industries — Energy Storage & EV Charging | `/images/industries/autimotive-ev.webp` | EV charging housings and molded connector components | User-supplied homepage industry image; reused in the `/services` traffic-distribution grid |
| Services industries — Home Appliance | `/images/industries/home-appliance.png` | Home appliance housings control panels and molded plastic components | User-supplied homepage industry image; reused in the `/services` traffic-distribution grid |
| Services industries — Pet Tech Products | `/images/industries/pet-lifestyle-product-parts.png` | Smart pet product housings and molded plastic components | User-supplied homepage industry image; reused in the `/services` traffic-distribution grid |
| Services industries — Consumer Electronics | `/images/industries/consumer-electronics-enclosures.png` | Consumer electronics enclosures and functional injection molded components | User-supplied homepage industry image; reused in the `/services` traffic-distribution grid |

## Mold Trial, Sampling & Validation Page

The canonical `/injection-molds/mold-trial-validation/` page uses the verified first-party Arktech mold-trial source video, a page-specific muted H.264 derivative and previously prepared privacy-safe evidence crops. The original video remains unchanged.

| Content | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Hero mold-trial source video | `/videos/Mold manufacturing/Mold-trial.mp4` | Arktech injection mold trial and validation process | Existing real 10.5-second, 720 × 1264, 30fps Arktech mold-trial video; preserved as the original source and not requested by the page |
| Hero mold-trial web video | `/videos/mold-trial-validation/arktech-mold-trial-validation-loop.mp4` | Decorative background video showing an injection mold opening during trial | Page-specific 10.5-second, 720 × 1264, 30fps H.264 derivative; audio removed, fast-start enabled, 1.26 MB, desktop-only deferred loading |
| Hero video poster | `/images/quality/arktech-mold-trial-validation-poster.jpg` | Injection mold open during a tooling trial | Page-specific 720 × 1264 JPEG frame extracted from the verified source video; priority-loaded as the Hero poster and retained for mobile, reduced-motion, save-data and playback-error fallback |
| Mold Trial Report evidence | `/images/injection-mold-manufacturing/mold-trial-report-evidence.webp` | Anonymized Arktech mold trial report showing an injection mold installed for validation | Existing optimized crop from a real Arktech mold-trial report; customer and project identifiers excluded; active in the evidence board |
| Process Parameter evidence | `/images/injection-mold-manufacturing/injection-molding-process-parameters.webp` | Anonymized injection molding process parameter sheet recorded during mold trial | Existing optimized crop from a real Arktech parameter sheet; customer and project identifiers excluded; active in the evidence board and Process Parameters section |
| Dimensional Inspection evidence | `/images/quality/dimensional-inspection-report-anonymized.webp` | Anonymized dimensional inspection report for molded trial samples | Existing anonymized dimensional-report preview; customer and project identifiers masked; active in the evidence board |
| Trial Sample evidence | `/images/injection-mold-manufacturing/molded-trial-sample-evidence.webp` | Injection molded trial samples photographed from multiple views | Existing optimized crop from a real Arktech trial report; customer and project identifiers excluded; active as the larger evidence visual with click-to-enlarge viewing |

## Plastic Injection Molding Page

| Content | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Full-width Hero production video | `/videos/Injection%20Molding/injection-molding-production1.mp4` | Plastic injection molding production process at Arktech | Existing user-supplied 1280 × 720 H.264 real production video; active in the Plastic Injection Molding Hero with a controlled 10-second loop segment, metadata preload and reduced-motion/data-saver handling |
| Full-width Hero video poster / mobile fallback | `/images/hero/plastic-injection-molding-video-poster.webp` | Plastic injection molding machine running an Arktech mold trial | Optimized 1280 × 720 WebP frame extracted from the same approved Hero production video; active as the initial loading poster, reduced-motion fallback and poster-only mobile background |
| Injection molding capability production video | `/videos/injection-molding-production-homepage.mp4` | Plastic injection molding production process at Arktech | Existing optimized 995 KB H.264 user-supplied production video; retained in the second-screen Injection Molding Capabilities section with metadata preload and reduced-motion/data-saver handling |
| Real Production video poster | `/images/capabilities/plastic-injection-molding-production.webp` | Plastic injection molding production at Arktech | Existing user-supplied real production image; retained as the lightweight poster for below-the-fold production video |
| Real Production video | `/videos/injection-molding-production.mp4` | Plastic injection molding production process at Arktech | Existing user-supplied real production video; below-the-fold instances load only near the viewport |
| Production-process and mold-trial visual | `/images/process/export-delivery-production-support-molding.png` | Injection mold trial and process setup before production | Existing real Arktech mold-production photo; reused in the five-stage production timeline and Real Production proof card |
| Production options video poster | `/images/capabilities/plastic-injection-molding-production.webp` | Plastic injection molding production line at Arktech | Existing user-supplied real production image; reused as the lightweight poster for the Production Options video |
| Production options video | `/videos/Injection%20Molding/injection-molding-production1.mp4` | Plastic injection molding production process | Existing user-supplied 1280 × 720 real production video; selected as the landscape Production Planning visual and loaded near the viewport with metadata preload |
| Material selection and molded parts | `/images/material-capabilities/engineering-plastic-parts-abs-pc-pa-pom.webp` | Engineering plastic injection molded housings and functional components | Existing approved molded-component image; reused as the single editorial visual in the material-selection section |
| DFM report overview — desktop moldability review | `/images/Engineering/arktech-dfm-mold-design-report-overview.webp` | Overview of 21 DFM report pages for injection mold design review | Existing lossless 1600 × 2964 WebP overview; active on desktop in the Plastic Injection Molding DFM & Moldability Review section |
| Slider and lifter DFM construction review — mobile | `/images/injection-mold-manufacturing/ejection-slider-lifter.webp` | DFM analysis showing slider and lifter directions for undercut mold construction | Anonymized technical crop from `/images/Molding/DFM.png`; customer identity, project data and footer excluded; retained as the compact mobile DFM engineering visual |
| Specialty molding — Two-Shot / 2K | `/images/mold-types-images/two-shot-2k-bi-injection-molds.png` | Two-shot 2K injection molds for multi-material plastic components | Existing 1672 × 941 real tooling image; active as the second Specialty Molding card |
| Specialty molding — In-Mold Labeling (IML) | `/images/mold-types/In-mould labelling (IML).png` | In-mold labeling process integrating a decorative film with a plastic part | Existing 1145 × 523 technical illustration; active as the third Specialty Molding card with contained fit to preserve the complete process diagram |
| Wall thickness and rib design | `/images/plastic-injection-molding/wall-thickness-rib-design.webp` | Wall thickness and rib design review for molded plastic parts | Anonymized technical crop from `/images/Molding/DFM.png`; customer identity, project data and footer excluded; active |
| Draft and undercut review | `/images/plastic-injection-molding/draft-undercut-review.webp` | Draft and undercut analysis for injection molded component | Anonymized technical crop from `/images/Molding/DFM.png`; customer identity, project data and footer excluded; active |
| Gate location and flow review | `/images/plastic-injection-molding/gate-flow-analysis.webp` | Gate location and flow analysis for plastic injection molding | Anonymized technical crop from `/images/Molding/DFM.png`; customer identity, project data and footer excluded; active |
| Shrinkage, tolerance and assembly | `/images/process/sample-validation-inspection-cmm.png` | Shrinkage tolerance and assembly review for molded plastic parts | Existing real Arktech dimensional-inspection photo; reused as supporting validation evidence |
| Molded part dimensional inspection | `/images/process/sample-validation-inspection-cmm.png` | Dimensional inspection and validation of injection molded plastic parts | Existing real Arktech inspection photo; reused in the quality-control section and Real Production proof card |
| Molded sample and visual inspection | `/images/capabilities/mold-trial-sampling-support.png` | Visual and dimensional inspection of molded plastic components | Existing user-supplied approved inspection visual; reused in the Plastic Injection Molding quality-control section |
| Dimensional inspection report preview | `/images/quality/dimensional-inspection-report-anonymized.webp` | Anonymized dimensional inspection report for molded plastic parts | Anonymized crop from the existing real Arktech `/images/Project/project-management-system.webp` source; customer and project identification masked; active |
| Secondary operations main visual | `/images/capabilities/secondary-operations-pad-printing.webp` | Secondary operations and pad printing for injection molded plastic parts | Optimized WebP derivative of the existing real Arktech workshop photo; active in the Secondary Operations & Assembly section |
| Molded-part assembly detail | `/images/capabilities/molded-part-component-assembly.webp` | Component assembly and fit-up for molded plastic parts | Optimized WebP derivative of an existing project process photograph; active as the supporting process detail |
| Specialty molding — Insert Molding | `/images/mold-types/insert-molding-tools.webp` | Insert molding tool for plastic components with integrated metal inserts | Existing real Arktech tooling image; reused in the Specialty Molding section |
| Specialty molding — Overmolding | `/images/material-capabilities/silicone-tpu-tpe-elastomer-components.webp` | Overmolded plastic components with rigid and soft materials | Existing user-supplied molded-component visual; reused in the Specialty Molding section |
| Specialty molding — Two-Shot / 2K Molding | `/images/case-studies/two-shot-light-cover.webp` | Two-shot 2K molded component with two materials | Existing real Arktech tooling project image; reused in the Specialty Molding section |

## Injection Molding Engineering Page

| Content | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Hero engineering review | `/images/injection-mold-manufacturing/complete-dfm-engineering-review.webp` | Injection molding DFM engineering report reviewing product and tooling risks | Anonymized technical crop from the existing first-party `/images/Molding/DFM.png`; active as the primary Hero visual |
| Product co-design engineering visual | `/images/Engineering/injection-mold-engineering-dfm-analysis.webp` | Injection mold DFM engineering review on CAD workstations | Existing approved engineering visual; active in the Product Co-Design section with zoomable preview |
| Co-design example — bird feeder | `/images/Engineering/Co-design/Bird-feed-2.jpg` | Bird feeder product concept with hanging and pole-mounted configurations | Existing local product-concept reference; active in the Product Development & Application Examples panel |
| Co-design example — medical training device | `/images/Engineering/Co-design/Medical-device.jpg` | Hands using a laparoscopic medical training device | Existing local application reference; active in the Product Development & Application Examples panel |
| Co-design example — smart home devices | `/images/Engineering/Co-design/SMARK-HOME-DEVICE.webp` | Smart home hub sensors switches and remote controls | Existing local product reference; active in the Product Development & Application Examples panel |
| Co-design example — robotic cleaner | `/images/Engineering/Co-design/cleaning-machine.webp` | Robotic floor cleaner with its docking station | Existing local product reference; active in the Product Development & Application Examples panel |
| Co-design example — coffee machine | `/images/Engineering/Co-design/coffee-maching.jpg` | Industrial design sketch of a countertop coffee machine | Existing local concept reference; active in the Product Development & Application Examples panel |
| Co-design example — connected pet product | `/images/Engineering/Co-design/dog-house.jpg` | Small dog inside an enclosed connected pet product | Existing local product reference; active in the Product Development & Application Examples panel |
| Co-design example — ultrasound system | `/images/Engineering/Co-design/medice-b.jpeg` | Portable ultrasound system with display and control panel | Existing local application reference; active in the Product Development & Application Examples panel |
| Co-design example — outdoor climate product | `/images/Engineering/Co-design/outdoor-AC-e1753620674893.jpg` | Portable outdoor climate unit beside a campsite table | Existing local product reference; active in the Product Development & Application Examples panel |
| DFM review report | `/images/Engineering/injection-molding-dfm-report-anonymized.webp` | Anonymized injection molding DFM report with moldability and tooling review | Privacy-safe 1812 × 817 WebP derivative of the existing real `/images/Engineering/DFM report.png`; cover/general-information pages excluded and customer/project response areas masked; active in the DFM and engineering-deliverables sections |
| DFM deliverables report example | `/images/Engineering/dfm-report-tooling-review-example.webp` | DFM tooling review example documenting engineering decisions and open items | Privacy-safe 1600 × 490 WebP derivative of the existing real `/images/Molding/DFM.png`; cover and customer/project pages excluded; active in Engineering Deliverables |
| Moldflow filling analysis | `/images/capabilities/moldflow-filling-analysis.webp` | Moldflow filling analysis showing progressive fill results for an injection molded component | Privacy-safe 1653 × 1100 WebP crop from the existing real `/images/Engineering/Moldflow report.png`; customer/project cover data excluded; original PNG retained unchanged; active in the Hero and Moldflow section |
| Mold design engineering | `/images/process/dfm-engineering-feedback-old-website.png` | 3D injection mold design with core cavity layout and mold engineering details | Existing Arktech engineering graphic; active in Engineering Deliverables and Mold Design Engineering |
| Mold trial evidence | `/images/injection-mold-manufacturing/mold-trial-report-evidence.webp` | Injection mold trial report documenting mold condition and validation | Existing real Arktech report asset; active in Engineering Validation |
| Dimensional inspection | `/images/quality/dimensional-inspection-report-anonymized.webp` | Dimensional inspection report for injection molded trial samples | Existing anonymized Arktech inspection report; active in Engineering Validation |
| Molding parameters | `/images/injection-mold-manufacturing/injection-molding-process-parameters.webp` | Injection molding process parameter sheet from mold trial | Existing real Arktech process record; active in Engineering Validation |

## Injection Molding Production Options Page

| Content | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Hero and low-volume production | `/images/capabilities/plastic-injection-molding-production.webp` | Arktech plastic injection molding production for molded component programs | Existing real production image; active in the hero, Low-Volume and production-evidence sections |
| Prototype tooling | `/images/mold-types/prototype-injection-mold.webp` | Prototype injection mold and molded plastic component for engineering validation | Existing real tooling image; active in Prototype and Tooling Strategy sections |
| Mass-production mold setup | `/images/process/export-delivery-production-support-molding.png` | Injection mold running in a molding machine for repeat plastic part production | Existing real molding image; active in the Mass Production section |
| Production quality control | `/images/process/sample-validation-inspection-cmm.png` | Molded plastic sample dimensional inspection for production approval | Existing real inspection image; active in Quality Control and production-evidence sections |
| Secondary operations | `/images/capabilities/Secondary-Operations.jpg` | Arktech secondary operations workshop for printed and finished molded parts | Existing real Arktech workshop image; active in Secondary Operations |
| Assembly support | `/images/capabilities/assembly-secondary-operations.webp` | Assembly line supporting finished molded product programs | Existing approved assembly visual; active in production evidence |

The migrated `/plastic-injection-molding/production-options/` page uses the approved 1200 × 675 production-video frame for its Hero instead of enlarging the lower-resolution portrait production image. Prototype, installed-tool, dimensional-inspection and pad-printing assets remain factual supporting evidence. No new image files or generated imagery were added for the migration.

## Plastic Injection Molding Process Pages

| Page use | Approved asset | Alt text in use | Source/status |
| --- | --- | --- | --- |
| Insert Molding Hero and tooling evidence | `/images/mold-types/insert-molding-tools.webp` | Injection molding tool with long black components positioned in front of the mold halves | Existing approved real tooling image; active on `/plastic-injection-molding/insert-molding/` |
| Overmolding Hero and part evidence | `/images/material-capabilities/silicone-tpu-tpe-elastomer-components.webp` | Molded components with visible rigid and soft material boundaries | Existing approved molded-component image; active on `/plastic-injection-molding/overmolding/` without inferring material identities from color |
| Overmolding tooling evidence | `/images/mold-types/arktech-overmolding-tool.webp` | Injection mold for overmolding applications | Existing approved real tooling image; active as supporting tooling evidence |
| Two-Shot / 2K Hero and project evidence | `/images/case-studies/two-shot-light-cover.webp` | First-shot and second-shot injection molds with a transparent molded light-cover component | Existing approved real Arktech project image; active on `/plastic-injection-molding/two-shot-molding/` |
| Two-Shot / 2K tooling evidence | `/images/mold-types/two-shot-2k-bi-injection-molds.webp` | Two-shot 2K injection molds with first-shot and second-shot components | Existing approved real tooling image; active as supporting tooling evidence |
| Transparent Part Molding Hero and part evidence | `/images/case-studies/two-shot-light-cover.webp` | Transparent molded light-cover component displayed with its injection molds | Existing approved real Arktech project image; active on `/plastic-injection-molding/transparent-parts/`; no optical-grade claim is made |
| Engineering Plastics Molding Hero and part evidence | `/images/material-capabilities/engineering-plastic-parts-abs-pc-pa-pom.webp` | Assorted molded housings brackets gears and functional plastic components | Existing approved molded-component image; active on `/plastic-injection-molding/engineering-plastics/`; individual grades are not inferred from the photo |
| Shared production context | `/images/capabilities/plastic-injection-molding-production-video-frame.webp` | Clear molded parts beside an automated injection molding cell | Existing approved 1200 × 675 real production-video frame; active as qualified supporting context, not process-specific proof |
| Shared inspection context | `/images/process/sample-validation-inspection-cmm.png` | Operator reviewing a measurement screen beside inspection equipment | Existing approved real inspection photo; active as qualified supporting context and not presented as the same project as other evidence |

## Project Management Page

| Content | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Retained workflow source | `/images/Project/project-management-system.webp` | Arktech project management workflow from RFQ to export delivery | Existing real Arktech workflow composite; retained as source/reference, not displayed as the primary workflow |
| Project Management Hero | `/images/process/tooling-manufacturing-plan-mold.png` | Open injection mold showing two matched tooling halves | Existing real tooling photo; active as the single Hero visual |
| Progress visibility | `/images/project-management/weekly-tooling-progress-report.webp` | Tooling progress report with a project schedule and manufacturing photos | Existing approved anonymized derivative; active with accessible click-to-enlarge. The factual “Weekly Report” heading is treated as an example, not a universal reporting-frequency promise |
| Retained design-review source | `/images/process/dfm-engineering-feedback-old-website.png` | Annotated mold design review | Existing Arktech engineering graphic; retained but no longer presented as evidence of action tracking on the Project Management page |
| Retained mold-trial source | `/images/process/export-delivery-production-support-molding.png` | Injection mold installed in a molding machine | Existing real mold production photo; retained but not displayed in the compact Project Management page |
| Retained handover source | `/images/documentation/tooling-documentation-package.png` | Example tooling documentation folder listing | Existing project-specific documentation screenshot; retained but no longer displayed because its contents are not universal deliverables |

## Contact Page

| Content | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Contact hero factory workshop | `/images/Contact/contact-mold-factory-workshop.webp` | Arktech injection mold manufacturing workshop in China | Existing real Arktech factory workshop photo; active |

## Injection Molds Tooling Support Pages

The four Tooling Support pages reuse approved first-party project media and privacy-safe engineering records. No stock, competitor or newly generated media was added.

| Page / content | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Mold Trial & Validation hero poster | `/images/quality/arktech-mold-trial-validation-poster.jpg` | Injection mold open during a tooling trial | Page-specific frame from the verified Arktech trial video; active as the immediate and fallback Hero visual |
| Mold Trial & Validation hero video | `/videos/mold-trial-validation/arktech-mold-trial-validation-loop.mp4` | Decorative background video showing an injection mold opening during trial | Muted H.264 derivative of the real `/videos/Mold manufacturing/Mold-trial.mp4`; deferred on desktop and never requested by the mobile/reduced-motion/save-data fallback |
| Mold Trial Report evidence | `/images/injection-mold-manufacturing/mold-trial-report-evidence.webp` | Injection mold trial report documenting mold condition and validation | Existing privacy-safe Arktech report image; active |
| Trial process parameters | `/images/injection-mold-manufacturing/injection-molding-process-parameters.webp` | Injection molding process parameter sheet from mold trial | Existing real project record; active |
| Trial dimensional inspection | `/images/quality/dimensional-inspection-report-anonymized.webp` | Dimensional inspection report for injection molded trial samples | Existing anonymized project record; active |
| Trial molded samples | `/images/injection-mold-manufacturing/molded-trial-sample-evidence.webp` | Injection molded trial samples photographed from multiple views | Existing privacy-safe crop from the real mold-trial report; active |
| Tooling Documentation hero | `/images/documentation/tooling-documentation-package.png` | Injection mold documentation package with tooling drawings and validation records | Existing real Arktech tooling-package screenshot; active |
| Tooling design review example | `/images/Engineering/injection-molding-dfm-report-anonymized.webp` | Anonymized injection mold drawing and DFM tooling documentation | Existing privacy-safe engineering record; active |
| Mold Spare Parts Hero poster | `/images/mold-components/mold-component-cmm-inspection-poster.webp` | CMM probe positioned above a machined mold component | Existing optimized 1600 × 900 frame; active as the immediate, mobile, reduced-motion, save-data and playback-error Hero fallback |
| Mold Spare Parts Hero video | `/videos/mold-components/mold-component-cmm-inspection-hero.mp4` | Decorative background video showing CMM inspection of a machined mold component | Existing optimized 462 KB derivative; deferred on eligible desktop screens and not requested by mobile, reduced-motion or save-data modes |
| Mold Spare Parts supporting evidence | `/images/capabilities/tooling-spare-parts.jpg` | Replacement core and cavity inserts for an injection mold | Existing real mold-insert photograph; retained in the page body |
| Export Tooling hero and handover | `/images/company/Precision Mold to Global Delivery.png` | Completed export injection mold with molded part and tooling packing preparation | Existing approved first-party handover composite; active |
| Export Tooling Open Graph | `/images/hero/export-injection-mold-manufacturing-hero.webp` | Completed export injection mold prepared for customer production | Existing approved export-tooling hero; active |

## Company Trust & Entity Page

The `/company/` page reuses approved first-party manufacturing, tooling and validation media. No stock, competitor or newly generated visual was added.

| Company page use | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Hero — factory and mold assembly | `/images/factory-workshop/injection-mold-assembly-workshop.webp` | Arktech injection mold manufacturing and assembly workshop in Dongguan | Existing real Arktech factory photo; active and priority-loaded only in the hero |
| Core focus — injection mold manufacturing | `/images/injection-mold-manufacturing/Precision Mold to Global Delivery.png` | Finished injection molds and molded parts manufactured by Arktech | Existing first-party tooling composite; active |
| Core focus — plastic injection molding | `/images/capabilities/plastic-injection-molding-production.webp` | Plastic injection molded component undergoing dimensional inspection at Arktech | Existing approved production image; active |
| Manufacturing environment video | `https://www.youtube.com/watch?v=cd6X6xG0cgA` | Arktech factory and injection mold toolroom | User-specified YouTube video; click-to-load privacy-enhanced embed active in the Company Factory & Toolroom module |
| Manufacturing environment poster | `/images/injection-mold-manufacturing/mold-manufacturing-video-poster.webp` | Injection mold fitting and assembly at Arktech | Existing first-party video frame; active as the loading and reduced-motion fallback |
| Tool fitting proof | `/images/factory-workshop/injection-mold-fitting-workshop.webp` | Injection mold fitting and assembly at Arktech | Existing real Arktech workshop photo; active |
| Mold-trial proof | `/images/Mold trail/Mold trial video photos.png` | Injection mold installed for trial and sample validation at Arktech | Existing real Arktech mold-trial image; active |
| Engineering review proof | `/images/Engineering/injection-molding-dfm-report-anonymized.webp` | Anonymized DFM report for injection mold engineering review | Existing privacy-safe engineering record; active |
| Dimensional inspection proof | `/images/quality/dimensional-inspection-report-anonymized.webp` | Dimensional inspection report from injection mold trial validation | Existing anonymized validation record; active |
| Process parameter proof | `/images/injection-mold-manufacturing/injection-molding-process-parameters.webp` | Injection molding process parameter sheet from mold trial | Existing privacy-safe trial record; active |
| International tooling program | `/images/company/Precision Mold to Global Delivery.png` | Export injection mold prepared for customer production with validation and packing records | Existing first-party export-tooling composite; active |

## Existing General Assets

| Content | Asset | Source/status |
| --- | --- | --- |
| Arktech Mold logo | `/images/arktech-mold-logo.png` | Brand asset |
| Arktech logo | `/images/arktech-logo.svg` | Brand asset |
| Homepage tooling hero | `/images/hero/export-injection-mold-manufacturing-hero.webp` | User-supplied injection mold manufacturing hero image; active |
| OEM manufacturing hero | `/images/seo/oem-manufacturing-hero.png` | AI-generated |
| RFQ engineering review | `/images/seo/rfq-engineering-review.png` | AI-generated |

## Injection Molding Engineering Page (2026-10-05)

The Engineering page uses the confirmed local mold-design footage as a non-essential Hero background and retains live HTML for all page meaning. The source video is preserved; the browser receives only the short, silent derivative. The supporting application gallery reuses approved local assets and does not claim that Arktech designed every pictured product.

| Content | Approved asset | Recommended alt text | Source/status |
| --- | --- | --- | --- |
| Engineering Hero video | `/videos/engineering/arktech-mold-design-engineering-loop.mp4` | Decorative video; use an empty alt-equivalent and keep page meaning in HTML | 15-second, 1280×720, 25fps, H.264 derivative from `/videos/Mold design video.MP4`; audio removed; desktop deferred-load only |
| Engineering Hero poster | `/images/Engineering/arktech-mold-design-engineering-poster.webp` | Decorative engineering poster; use empty alt text | 1600×900 WebP frame from the approved mold-design video; mobile, reduced-motion, save-data and error fallback |
| Co-Design CAD review | `/images/plastic-injection-molding/wall-thickness-rib-design.webp` | Annotated product CAD showing local thickness and sink-risk areas | Existing annotated engineering crop; active with click-to-enlarge. Higher-resolution original not found; replacement still recommended for small annotation text |
| Co-Design application gallery | Existing approved assets under `/images/case-studies/` and `/images/industries/` | Describe only the visible device, component or application | Eight reused local assets; no hotlinks and no unverified project-design attribution |

## Full-Site Hero System Audit (2026-10-04)

The first-screen audit reuses approved local media only. No source image or video was edited. The six primary hub and commercial pages now share one full-width responsive background-image Hero system with live HTML content, page-specific imagery, a navy readability overlay and no more than two CTAs. The Homepage retains its separately approved full-width Hero treatment, and unrelated child-page Hero systems are unchanged.

| Page family | Hero media | Usage/status |
| --- | --- | --- |
| Homepage | `/images/hero/export-injection-mold-manufacturing-hero.webp` | Existing approved export-tooling hero restored as a full-width background with a stronger left-side navy readability overlay and complete tooling visible on the right |
| Capabilities hub | `/images/hero/tooling-mold-trial-engineering-capabilities.webp` | Existing approved tooling, mold-trial and engineering composite; active as the full-width background |
| Injection Mold Manufacturing | `/images/mold-types/Precision-Molds.png` | Existing approved completed precision mold image; active as the full-width export-tooling background |
| Injection Molds Hub | `/images/mold-types/complex-injection-molds.png` | Existing approved completed complex mold image; active as the full-width Hero background on `/injection-molds` |
| Industries hub | `/images/industries/robotics-automation.png`, `/images/industries/medial-industry.webp`, `/images/industries/Automotive-Components.png`, `/images/industries/autimotive-ev.webp` | Existing approved application images; active as a four-image full-width industry collage |
| Plastic Injection Molding | `/images/capabilities/plastic-injection-molding-production-video-frame.webp` | Existing approved real production frame; active as the full-width part-production background |
| Resources hub | `/images/Engineering/injection-mold-engineering-dfm-analysis.webp` | Existing approved Arktech DFM and mold-CAD engineering visual; active as the full-width editorial background |
| DFM Engineering | `/images/injection-mold-manufacturing/complete-dfm-engineering-review.webp` | Existing anonymized engineering review visual; active |
| Industry child pages | Per-page `heroImage` values in `lib/industry-landing-pages.ts` | Existing approved industry application media; active across the seven canonical industry routes |
| Generic capability and mold-type child pages | Approved slug mapping from `lib/images.ts` | Existing approved local media used only when the mapped file exists |
| Company, quality, materials, solutions and resource hubs | Existing approved page-specific assets in each `PageHero` call | Added to previously text-only first screens without creating new assets |

Known missing source media remain intentionally unassigned for the gas-assisted injection mold, thermoset mold and die-casting tooling detail heroes. These pages retain a text-led hero until a real approved project asset is supplied.

The pre-launch asset audit confirmed that dedicated gas-assisted injection mold and thermoset mold gallery images are not present in the repository. Their invalid image references were removed rather than replaced with unrelated media. The large-component mold reference now uses the exact existing case-sensitive filename `/images/mold-types/large-component-molds.JPG`, and the die-casting tooling gallery reuses the approved existing `/images/capabilities/die-casting.webp` and `/images/capabilities/die-casting.png` assets.

## Canonical Industry Child Pages (2026-10-04)

The seven canonical industry pages reuse approved local media and differentiated real-project evidence where available. No new image file was created or downloaded for this update.

| Industry page | Hero / application media | Selected evidence | Source/status |
| --- | --- | --- | --- |
| Smart Home & IoT | `/images/industries/smart-device-housings.png`, `/images/industries/smart-iot-device-housings.jpg` | `/images/case-studies/smart-home-iot-project.webp` | Approved industry media plus real existing Smart Home housing project evidence |
| Home Appliances | `/images/industries/home-appliance.png`, `/images/industries/home-appliance-smart-home-components.webp` | `/images/industries/home-appliance-smart-home-components.webp` | Approved application media; `needsAssetReplacement` is recorded in page data until a verified Arktech appliance project image is approved |
| Consumer Electronics | `/images/industries/consumer-electronics-enclosures.png`, `/images/industries/consumer-electronics-enclosures.webp` | `/images/case-studies/two-shot-light-cover.webp` | Approved application media plus real existing two-shot tooling project evidence |
| Pet Tech Products | `/images/industries/pet-lifestyle-product-parts.png`, `/images/industries/pet-lifestyle-product-parts.webp` | `/images/industries/pet-lifestyle-product-parts.webp` | Approved application media; `needsAssetReplacement` is recorded in page data until a verified Arktech pet-tech project image is approved |
| Automotive Components | `/images/industries/Automotive-Components.png`, `/images/industries/automotive-ev-components.webp` | `/images/case-studies/automotive-multi-cavity-mold.webp` | Approved industry media plus real existing automotive sensor-housing tooling evidence |
| Industrial Automation | `/images/industries/Industrial-parts.jpg`, `/images/industries/industrial-parts.webp` | `/images/case-studies/fan-blade-mold.webp` | Approved industrial component media plus real complex fan-blade mold evidence |
| Medical Device Components | `/images/industries/medial-industry.webp`, `/images/industries/medical-healthcare-device-parts.webp` | `/images/case-studies/medical-education-device.webp` | Approved medical application media plus real existing medical education device project evidence; no unverified certification claim |

## Maintenance notes

- Add a row whenever a new production asset is approved.
- When replacing an asset, update its row and all code references in the same change.
- Remove superseded files only after confirming they are not referenced anywhere.
- “Missing approved card asset” is intentional and must not be replaced by an invented path.
