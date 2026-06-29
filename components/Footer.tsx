import Link from "next/link";

const footerColumns = [
  {
    title: "Company",
    links: [
      ["About Arktech", "/company"],
      ["Why Arktech", "/company"],
      ["Quality & Certifications", "/company"],
      ["Export Tooling Experience", "/tooling-examples"],
      ["Contact Us", "/contact"]
    ]
  },
  {
    title: "Capabilities",
    links: [
      ["Injection Mold Tooling", "/services/injection-mold-manufacturing"],
      ["Plastic Injection Molding", "/services/plastic-injection-molding"],
      ["CNC Machining", "/services/cnc-metal-parts"],
      ["Die Casting", "/services/die-casting-mold"],
      ["Sheet Metal Fabrication", "/services"],
      ["Rapid Prototyping", "/services"],
      ["Assembly & Secondary Services", "/services/plastic-metal-assembly"],
      ["Product Engineering & Development", "/services/dfm-engineering"]
    ]
  },
  {
    title: "Industries",
    links: [
      ["Automotive & Electric Vehicles", "/industries/new-energy"],
      ["Home Appliances & Smart Home Products", "/industries/smart-home"],
      ["Consumer Electronics & Electrical Devices", "/industries"],
      ["Medical & Healthcare Devices", "/industries/medical-devices"],
      ["Aerospace & Defense", "/industries"],
      ["Industrial Equipment & Automation", "/industries/industrial-automation"],
      ["Smart Devices & IoT Products", "/industries/smart-home"],
      ["Pet & Lifestyle Products", "/industries/pet-tech"]
    ]
  },
  {
    title: "Resources",
    links: [
      ["Case Studies", "/case-studies"],
      ["DFM Guide", "/resources/dfm-checklist-for-plastic-housing"],
      ["Material Selection Guide", "/materials"],
      ["Mold Design Guidelines", "/resources/hot-runner-mold-design-considerations"],
      ["FAQ", "/resources"]
    ]
  }
];

export function Footer() {
  return (
    <>
      <footer className="bg-[var(--brand-dark)] text-white">
        <div className="container-page grid gap-9 py-12 sm:grid-cols-2 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <nav aria-label={`${column.title} footer links`} key={column.title}>
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#f4c7ca]">{column.title}</h2>
              <ul className="mt-4 grid gap-2.5 text-sm text-white/75">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <Link className="leading-6 transition hover:text-white" href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#f4c7ca]">Contact / RFQ</h2>
            <div className="mt-4 grid gap-2.5 text-sm leading-6 text-white/75">
              <Link className="font-bold text-[#f4c7ca] hover:text-white" href="/request-a-quote">Upload CAD for DFM Review</Link>
              <Link className="font-bold text-[#f4c7ca] hover:text-white" href="/request-a-quote">Request Manufacturing Quote</Link>
              <a className="break-all hover:text-white" href="mailto:sales@arktech-group.com">sales@arktech-group.com</a>
              <p>Response within 24 hours</p>
              <p>NDA available</p>
            </div>
          </div>
        </div>

        <div className="border-y border-white/10 bg-white/5">
          <div className="container-page py-4 text-center text-sm font-semibold leading-6 text-white/80">
            ISO 9001 Certified <span aria-hidden="true">|</span> 15+ Years Experience <span aria-hidden="true">|</span> NDA Protected Projects <span aria-hidden="true">|</span> Export Tooling for Europe & North America
          </div>
        </div>

        <div className="container-page flex flex-col gap-3 py-5 text-xs leading-5 text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Arktech. Injection Mold Tooling, Plastic & Metal Components Manufacturing from China. All rights reserved.</p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              <li><Link className="hover:text-white" href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link className="hover:text-white" href="/terms-of-use">Terms of Use</Link></li>
              <li><Link className="hover:text-white" href="/cookie-policy">Cookie Policy</Link></li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
