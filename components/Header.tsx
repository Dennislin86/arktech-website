"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const capabilityMenu = [
  { label: "Custom Injection Mold Tooling", href: "/services/injection-mold-manufacturing" },
  { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding" },
  { label: "Precision CNC Machining", href: "/services/cnc-metal-parts" },
  { label: "Die Casting", href: "/services/die-casting-mold" },
  { label: "Sheet Metal Fabrication", href: "/seo/sheet-metal-fabrication" },
  { label: "Rapid Prototyping", href: "/seo/rapid-prototyping-services" },
  { label: "Vacuum Casting", href: "/seo/vacuum-casting-services" },
  { label: "Assembly & Secondary Operations", href: "/services/plastic-metal-assembly" },
  { label: "Product Engineering & Development", href: "/services/dfm-engineering" }
];

const industryMenu = [
  { label: "Automotive & Electric Vehicles", href: "/industries/new-energy" },
  { label: "Home Appliances & Smart Home Products", href: "/industries/smart-home" },
  { label: "Consumer Electronics & Electrical Devices", href: "/industries" },
  { label: "Smart Devices & IoT Products", href: "/industries/smart-home" },
  { label: "Medical & Healthcare Devices", href: "/industries/medical-devices" },
  { label: "Aerospace & Defense", href: "/industries" },
  { label: "Industrial Equipment & Automation", href: "/industries/industrial-automation" },
  { label: "Pet & Lifestyle Products", href: "/industries/pet-tech" }
];

const injectionMoldMenu = [
  { label: "Insert Molding Tools", href: "/tooling-examples/insert-molds" },
  { label: "Unscrewing Molds", href: "/tooling-examples/unscrewing-molds" },
  { label: "Gas-Assisted Injection Molds", href: "/tooling-examples" },
  { label: "Multi-Cavity Injection Molds", href: "/tooling-examples/multi-cavity-molds" },
  { label: "Large Component Molds", href: "/tooling-examples" },
  { label: "Two-Shot (2K / Bi-Injection) Molds", href: "/tooling-examples/overmolding-tools" },
  { label: "Thermoset Molds", href: "/tooling-examples" },
  { label: "Die Casting Tooling", href: "/tooling-examples/die-casting-molds" }
];

const navigation = [
  { label: "Capabilities", href: "/services", menu: capabilityMenu },
  { label: "Industries", href: "/industries", menu: industryMenu },
  { label: "Injection Molds", href: "/tooling-examples", menu: injectionMoldMenu },
  { label: "Quality", href: "/#trust-system" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" }
];

type MenuItem = { label: string; href: string };

function MegaMenu({ items, overviewHref, overviewLabel }: { items: MenuItem[]; overviewHref: string; overviewLabel: string }) {
  return (
    <div className="invisible absolute left-0 top-full z-[9999] w-72 overflow-visible pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
      <div className="rounded-md border border-[var(--line)] bg-white p-3 shadow-[0_20px_50px_rgba(15,35,60,0.18)]">
        <div className="grid grid-cols-1 gap-1">
          {items.map((item) => (
            <Link className="focus-ring rounded-sm px-3 py-3 text-sm font-medium text-[var(--brand-dark)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--brand)]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-3 border-t border-[var(--line)] pt-3">
          <Link className="focus-ring text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={overviewHref}>{overviewLabel} →</Link>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-[100] overflow-visible border-b border-[var(--line)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-[min(1320px,calc(100%-24px))] items-center justify-between gap-3 overflow-visible lg:h-[72px] lg:w-[min(1320px,calc(100%-32px))]">
        <Link aria-label="Arktech home" className="focus-ring flex shrink-0 items-center rounded-sm" href="/">
          <Image
            src="/images/arktech-mold-logo.png"
            alt="Arktech injection mold tooling and manufacturing"
            width={220}
            height={68}
            priority
            className="h-8 w-auto object-contain lg:h-9"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center overflow-visible lg:flex">
          {navigation.map((item) => (
            <div className="group relative overflow-visible" key={item.label}>
              <Link
                className="focus-ring whitespace-nowrap rounded-sm px-2.5 py-2 text-[14px] font-medium tracking-[0.015em] text-[var(--brand-dark)] transition hover:text-[var(--brand)] xl:px-3"
                href={item.href}
              >
                {item.label}
              </Link>
              {item.menu ? <MegaMenu items={item.menu} overviewHref={item.href} overviewLabel={`View All ${item.label}`} /> : null}
            </div>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link className="focus-ring inline-flex h-10 items-center justify-center rounded-sm bg-[var(--brand)] px-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-hover)] sm:px-4" href="/request-a-quote">
            Upload CAD
          </Link>
          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="focus-ring inline-flex size-10 items-center justify-center rounded-sm border border-[var(--line)] text-[var(--brand-dark)] lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span aria-hidden="true" className="text-xl leading-none">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      <nav
        aria-label="Mobile navigation"
        className={`overflow-hidden border-t border-[var(--line)] bg-white transition-[max-height,opacity] duration-200 lg:hidden ${menuOpen ? "max-h-[620px] opacity-100" : "max-h-0 border-t-0 opacity-0"}`}
        id="mobile-menu"
      >
        <div className="mx-auto grid w-[min(720px,calc(100%-24px))] gap-1 py-3">
          <Link className="mb-2 inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-4 text-sm font-semibold text-white" href="/request-a-quote" onClick={() => setMenuOpen(false)}>
            Upload CAD for DFM Review
          </Link>
          {navigation.map((item) => (
            <div className="border-b border-[var(--line)] last:border-b-0" key={item.label}>
              <div className="flex items-center">
                <Link
                  className="focus-ring flex-1 rounded-sm px-3 py-2.5 text-[15px] font-medium tracking-[0.015em] text-[var(--brand-dark)] hover:bg-[var(--surface-soft)] hover:text-[var(--brand)]"
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.menu ? (
                  <button
                    aria-expanded={openMobileItem === item.label}
                    aria-label={`${openMobileItem === item.label ? "Collapse" : "Expand"} ${item.label}`}
                    className="focus-ring size-10 rounded-sm text-[var(--brand-dark)]"
                    onClick={() => setOpenMobileItem((current) => current === item.label ? null : item.label)}
                    type="button"
                  >
                    <span aria-hidden="true">{openMobileItem === item.label ? "−" : "+"}</span>
                  </button>
                ) : null}
              </div>
              {item.menu && openMobileItem === item.label ? (
                <div className="grid gap-1 bg-[var(--surface-soft)] px-3 py-2">
                  {item.menu.map((subItem) => (
                    <Link
                      className="rounded-sm px-3 py-2 text-sm font-medium text-[var(--muted)] hover:bg-white hover:text-[var(--brand)]"
                      href={subItem.href}
                      key={subItem.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
