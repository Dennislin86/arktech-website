"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type MenuItem = { label: string; href: string };
type NavigationItem = MenuItem & { menu?: MenuItem[] };

const injectionMoldMenu: MenuItem[] = [
  { label: "Custom Injection Molds", href: "/injection-molds/custom-injection-molds" },
  { label: "Precision Injection Molds", href: "/injection-molds/precision-injection-molds" },
  { label: "Prototype Injection Molds", href: "/injection-molds/prototype-molds" },
  { label: "Insert Molding Tools", href: "/injection-molds/insert-molding" },
  { label: "Overmolding Tools", href: "/injection-molds/overmolding" },
  { label: "Two Shot / 2K Molds", href: "/injection-molds/2k-molds" },
  { label: "Unscrewing Molds", href: "/injection-molds/unscrewing-molds" }
];

const engineeringMenu: MenuItem[] = [
  { label: "Co-design & Product Review", href: "/engineering-support/co-design" },
  { label: "DFM Analysis", href: "/engineering-support/dfm-analysis" },
  { label: "Mold Design", href: "/engineering-support/mold-design" },
  { label: "Project Management", href: "/engineering-support/project-management" }
];

const industryMenu: MenuItem[] = [
  { label: "Smart Home", href: "/industries/smart-home" },
  { label: "Robotics", href: "/industries/robotics" },
  { label: "Medical Devices", href: "/industries/medical-devices" },
  { label: "Consumer Electronics", href: "/industries/consumer-electronics" },
  { label: "Automotive Interior", href: "/industries/automotive-interior" },
  { label: "Industrial Products", href: "/industries/industrial-products" },
  { label: "EMS Manufacturing", href: "/industries/ems-manufacturing" }
];

const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Injection Molds", href: "/injection-molds/custom-injection-molds", menu: injectionMoldMenu },
  { label: "Plastic Injection", href: "/services/plastic-injection-molding" },
  { label: "Engineering Support", href: "/engineering-support/dfm-analysis", menu: engineeringMenu },
  { label: "Industries", href: "/industries", menu: industryMenu },
  { label: "Quality", href: "/company/quality-documentation" },
  { label: "About Us", href: "/company" },
  { label: "Contact", href: "/contact" }
];

function Dropdown({ items }: { items: MenuItem[] }) {
  return (
    <div className="invisible absolute left-1/2 top-full z-[9999] w-72 -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
      <div className="rounded-sm border border-[var(--line)] bg-white p-2 shadow-[0_20px_50px_rgba(15,35,60,0.18)]">
        {items.map((item) => (
          <Link
            className="focus-ring block rounded-sm px-3 py-2.5 text-sm font-medium text-[var(--brand-dark)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--brand)]"
            href={item.href}
            key={item.label}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-[100] overflow-visible border-b border-[var(--line)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-[min(1400px,calc(100%-24px))] items-center justify-between gap-2 overflow-visible lg:h-[72px] lg:w-[min(1400px,calc(100%-32px))]">
        <Link aria-label="Arktech Mold home" className="focus-ring flex shrink-0 items-center rounded-sm" href="/">
          <Image
            src="/images/arktech-mold-logo.png"
            alt="Arktech Mold"
            width={220}
            height={68}
            priority
            className="h-12 w-auto object-contain xl:h-[58px]"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center overflow-visible lg:flex">
          {navigation.map((item) => (
            <div className="group relative overflow-visible" key={item.label}>
              <Link
                aria-haspopup={item.menu ? "menu" : undefined}
                className="focus-ring inline-flex items-center gap-1 whitespace-nowrap rounded-sm px-2 py-2 text-[13px] font-medium tracking-[0.01em] text-[var(--brand-dark)] transition hover:text-[var(--brand)] xl:px-2.5 xl:text-sm"
                href={item.href}
              >
                {item.label}
                {item.menu ? <span aria-hidden="true" className="text-[10px] text-[var(--muted)]">▼</span> : null}
              </Link>
              {item.menu ? <Dropdown items={item.menu} /> : null}
            </div>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link className="focus-ring hidden h-10 items-center justify-center rounded-sm bg-[var(--brand)] px-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-hover)] sm:inline-flex" href="/request-a-quote">
            Start RFQ
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
        className={`overflow-y-auto border-t border-[var(--line)] bg-white transition-[max-height,opacity] duration-200 lg:hidden ${menuOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 border-t-0 opacity-0"}`}
        id="mobile-menu"
      >
        <div className="mx-auto grid w-[min(720px,calc(100%-24px))] gap-1 py-3">
          <Link className="mb-2 inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-4 text-sm font-semibold text-white" href="/request-a-quote" onClick={() => setMenuOpen(false)}>
            Start Your RFQ
          </Link>
          {navigation.map((item) => (
            <div className="border-b border-[var(--line)] last:border-b-0" key={item.label}>
              <div className="flex items-center">
                <Link
                  className="focus-ring flex-1 rounded-sm px-3 py-2.5 text-[15px] font-medium text-[var(--brand-dark)] hover:bg-[var(--surface-soft)] hover:text-[var(--brand)]"
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
                      key={subItem.label}
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
