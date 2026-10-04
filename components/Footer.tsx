import Link from "next/link";
import { site } from "@/lib/site";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  groupLink?: boolean;
};

const footerColumns: Array<{ title: string; links: FooterLink[] }> = [
  {
    title: "Core Capabilities",
    links: [
      { label: "Manufacturing Capabilities", href: "/manufacturing-capabilities" },
      { label: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" },
      { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding" },
      { label: "Mold Trial & Validation", href: "/injection-molds/mold-trial-validation" },
      { label: "Injection Molding Engineering", href: "/injection-molding-engineering" },
      { label: "Tooling Documentation", href: "/injection-molds/tooling-documentation" },
      { label: "Mold Spare Parts", href: "/injection-molds/mold-spare-parts" },
      { label: "Export Tooling & Mold Transfer", href: "/injection-molds/export-tooling-transfer" },
      { label: "Extended Manufacturing by Arktech Group ↗", href: "https://www.arktech-group.com", external: true, groupLink: true }
    ]
  },
  {
    title: "Industries",
    links: [
      { label: "Smart Home & IoT", href: "/industries/smart-home-iot" },
      { label: "Home Appliances", href: "/industries/home-appliances" },
      { label: "Consumer Electronics", href: "/industries/consumer-electronics" },
      { label: "Pet Tech Products", href: "/industries/pet-tech" },
      { label: "Automotive Components", href: "/industries/automotive" },
      { label: "Industrial Automation", href: "/industries/industrial-automation" },
      { label: "Medical Device Components", href: "/industries/medical-devices" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "DFM Guide", href: "/resources/dfm-guide" },
      { label: "Material Selection Guide", href: "/resources/material-selection-guide" },
      { label: "Mold Design Guidelines", href: "/resources/mold-design-guidelines" },
      { label: "Quality & Documentation", href: "/company/quality-documentation" },
      { label: "Project Management", href: "/company/project-management" },
      { label: "Contact Us", href: "/contact" }
    ]
  }
];

function FooterNavLink({ link }: { link: FooterLink }) {
  const className = link.groupLink
    ? "font-medium leading-5 text-[#D8E1EA] transition hover:text-[var(--brand)] focus-visible:text-[var(--brand)]"
    : "leading-5 text-[#CBD5E1] transition hover:text-white";

  if (link.external) {
    return (
      <a className={className} href={link.href} target="_blank" rel="noopener noreferrer">
        {link.label}
      </a>
    );
  }

  return <Link className={className} href={link.href}>{link.label}</Link>;
}

export function Footer() {
  return (
    <footer className="bg-[#102A43] text-white">
      <div className="container-page border-b border-white/10 py-6">
        <p className="max-w-3xl text-sm leading-6 text-[#CBD5E1]">
          Export injection mold and molding partner for global product companies and injection molding companies.
        </p>
      </div>

      <div className="container-page grid gap-x-8 gap-y-10 py-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1.05fr)_minmax(0,0.9fr)_minmax(0,1.05fr)]">
        <div>
          <div>
            <p className="whitespace-nowrap text-[20px] font-semibold leading-[1.25] tracking-[0.3px] text-[var(--brand)] sm:text-[24px]">
              ARKTECH Mold Ltd
            </p>
            <p className="mt-[10px] text-sm font-normal leading-[1.5] text-[var(--muted)]">
              Export Injection Molds &amp; Plastic Injection Molding
            </p>
          </div>

          <address className="mt-5 grid gap-5 not-italic">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#f4c7ca]">Shenzhen Head Office</h2>
              <p className="mt-2 max-w-[31ch] text-sm leading-6 text-[#CBD5E1]">{site.company.headOffice}</p>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#f4c7ca]">Factory</h2>
              <p className="mt-2 max-w-[31ch] text-sm leading-6 text-[#CBD5E1]">{site.company.factoryAddress}</p>
            </div>
            <div className="grid gap-1.5 text-sm font-medium text-[#E5EDF5]">
              <a className="w-fit transition hover:text-[var(--brand)]" href="tel:+8675523148996">{site.phone}</a>
              <a className="w-fit break-all transition hover:text-[var(--brand)]" href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </address>

          <a
            className="mt-5 inline-flex font-medium text-[#D8E1EA] transition hover:text-[var(--brand)]"
            href={site.company.legacyWebsite}
            rel="noopener noreferrer"
            target="_blank"
          >
            Arktech Group ↗
          </a>
        </div>

        {footerColumns.map((column) => (
          <nav aria-label={`${column.title} footer links`} key={column.title}>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#f4c7ca]">{column.title}</h2>
            <ul className="mt-4 grid gap-2 text-sm">
              {column.links.map((link) => (
                <li key={link.label}>
                  <FooterNavLink link={link} />
                </li>
              ))}
            </ul>
            {column.title === "Core Capabilities" ? (
              <div className="mt-7">
                <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#f4c7ca]">Start Your Project</h3>
                <div className="mt-3 grid gap-2 text-sm leading-5">
                  <Link className="font-bold text-[var(--brand)] transition hover:text-white" href="/request-a-quote">
                    Upload CAD for DFM Review →
                  </Link>
                  <Link className="font-semibold text-white transition hover:text-[var(--brand)]" href="/request-a-quote">
                    Request Tooling Quote →
                  </Link>
                </div>
              </div>
            ) : null}
          </nav>
        ))}
      </div>

      <div className="border-y border-white/10 bg-white/[0.035]">
        <div className="container-page py-3 text-center text-xs font-medium leading-5 text-[#CBD5E1]">
          ISO 9001 Certified <span className="mx-1.5 text-white/35" aria-hidden="true">·</span>
          15+ Years Experience <span className="mx-1.5 text-white/35" aria-hidden="true">·</span>
          NDA Protected Projects <span className="mx-1.5 text-white/35" aria-hidden="true">·</span>
          Export Tooling for Europe &amp; North America
        </div>
      </div>

      <div className="container-page flex flex-col gap-3 py-4 text-xs leading-5 text-white/55 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Arktech. All rights reserved.</p>
        <nav aria-label="Legal">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            <li><Link className="transition hover:text-white" href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link className="transition hover:text-white" href="/terms-of-use">Terms of Use</Link></li>
            <li><Link className="transition hover:text-white" href="/cookie-policy">Cookie Policy</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
