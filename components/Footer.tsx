import Link from "next/link";

const footerColumns = [
  {
    title: "Company",
    links: [
      ["Arktech Mold", "/company"],
      ["Arktech Group", "https://www.arktech-group.com"],
      ["Quality & Documentation", "/company/quality-documentation"],
      ["Project Management", "/company/project-management"],
      ["Contact Us", "/contact"]
    ]
  },
  {
    title: "Capabilities",
    links: [
      ["Injection Mold Manufacturing", "/services/injection-mold-manufacturing"],
      ["Complex Injection Molds", "/injection-molds/complex-injection-molds"],
      ["Multi-Cavity Injection Molds", "/injection-molds/multi-cavity-molds"],
      ["Insert Molding", "/injection-molds/insert-molding"],
      ["Two-Shot / 2K Molds", "/injection-molds/2k-molds"],
      ["Plastic Injection Molding", "/services/plastic-injection-molding"],
      ["Mold Trial & Validation", "/services/mold-trial-sampling-support"],
      ["CNC Machining", "/services/cnc-metal-parts"]
    ]
  },
  {
    title: "Industries",
    links: [
      ["Smart Home", "/industries/smart-home"],
      ["Robotics", "/industries/robotics"],
      ["Medical Devices", "/industries/medical-devices"],
      ["Automotive Interior", "/industries/automotive-interior"],
      ["Consumer Electronics", "/industries/consumer-electronics"],
      ["EMS Manufacturing", "/industries/ems-manufacturing"]
    ]
  },
  {
    title: "Resources",
    links: [
      ["Case Studies", "/case-studies"],
      ["DFM Guide", "/resources/dfm-checklist-for-plastic-housing"],
      ["Mold Design Guidelines", "/resources/hot-runner-mold-design-considerations"],
      ["Material Selection Guide", "/materials"],
      ["FAQ", "/resources"],
      ["Injection Mold Blog", "/resources"]
    ]
  }
];

export function Footer() {
  return (
    <>
      <footer className="bg-[var(--brand-dark)] text-white">
        <div className="container-page border-b border-white/10 py-8">
          <p className="max-w-4xl text-sm leading-7 text-white/75">
            Arktech Mold is an export injection mold manufacturer and plastic injection molding partner supporting OEMs, EMS providers and global manufacturing companies.
          </p>
        </div>
        <div className="container-page grid gap-7 py-9 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {footerColumns.map((column) => (
            <nav aria-label={`${column.title} footer links`} key={column.title}>
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#f4c7ca]">{column.title}</h2>
              <ul className="mt-4 grid gap-2 text-sm text-white/75">
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
            <div className="mt-4 grid gap-2 text-sm leading-6 text-white/75">
              <Link className="font-bold text-[#f4c7ca] hover:text-white" href="/request-a-quote">Upload CAD for DFM Review</Link>
              <Link className="font-bold text-[#f4c7ca] hover:text-white" href="/request-a-quote">Get Mold Quotation</Link>
              <a className="break-all hover:text-white" href="mailto:Engineering@arktechmold.com">Engineering@arktechmold.com</a>
              <p>Response within 24 hours</p>
              <p>NDA Available</p>
            </div>
          </div>
        </div>

        <div className="border-y border-white/10 bg-white/5">
          <div className="container-page py-3 text-center text-sm font-semibold leading-6 text-white/80">
            ISO 9001 Quality System <span aria-hidden="true">|</span> 15+ Years Export Tooling Experience <span aria-hidden="true">|</span> NDA Protected Projects <span aria-hidden="true">|</span> Global OEM Support
          </div>
        </div>

        <div className="container-page flex flex-col gap-3 py-4 text-xs leading-5 text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Arktech Mold. Export injection mold manufacturer and plastic injection molding partner.</p>
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
