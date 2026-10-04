import Image from "next/image";
import Link from "next/link";

type HeroImage = {
  src: string;
  alt: string;
  position?: "center" | "right" | "top";
};

type HeroLink = {
  label: string;
  href: string;
};

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type FullBleedHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  supportingLine?: string;
  primaryCta: HeroLink;
  secondaryCta?: HeroLink;
  backgroundImages: HeroImage[];
  breadcrumbs?: BreadcrumbItem[];
  height?: "compact" | "standard" | "tall";
  overlay?: "standard" | "strong" | "light";
};

const heightClasses = {
  compact: "min-h-[560px] sm:min-h-[580px] lg:min-h-[610px]",
  standard: "min-h-[600px] sm:min-h-[630px] lg:min-h-[660px]",
  tall: "min-h-[620px] sm:min-h-[660px] lg:min-h-[700px]"
};

const overlayClasses = {
  standard: "bg-[linear-gradient(90deg,rgba(5,25,45,0.96)_0%,rgba(5,25,45,0.88)_43%,rgba(5,25,45,0.52)_72%,rgba(5,25,45,0.32)_100%)]",
  strong: "bg-[linear-gradient(90deg,rgba(5,25,45,0.97)_0%,rgba(5,25,45,0.91)_46%,rgba(5,25,45,0.66)_76%,rgba(5,25,45,0.48)_100%)]",
  light: "bg-[linear-gradient(90deg,rgba(5,25,45,0.94)_0%,rgba(5,25,45,0.82)_46%,rgba(5,25,45,0.43)_76%,rgba(5,25,45,0.24)_100%)]"
};

const positionClasses = {
  center: "object-center",
  right: "object-right",
  top: "object-top"
};

export function FullBleedHero({
  eyebrow,
  title,
  description,
  supportingLine,
  primaryCta,
  secondaryCta,
  backgroundImages,
  breadcrumbs,
  height = "standard",
  overlay = "standard"
}: FullBleedHeroProps) {
  const multipleImages = backgroundImages.length > 1;
  const imageGridClass = backgroundImages.length === 4 ? "grid grid-cols-2 grid-rows-2" : multipleImages ? "grid grid-cols-2" : "";

  return (
    <section className={`relative isolate flex overflow-hidden text-white ${heightClasses[height]}`}>
      <div className={`absolute inset-0 -z-20 ${imageGridClass}`} aria-hidden="true">
        {backgroundImages.map((image, index) => (
          <div className={`relative overflow-hidden ${multipleImages ? "min-h-0" : "min-h-full"}`} key={`${image.src}-${index}`}>
            <Image
              alt={image.alt}
              className={`object-cover ${positionClasses[image.position ?? "center"]}`}
              fill
              priority={index === 0}
              quality={86}
              sizes={multipleImages ? "(min-width: 768px) 50vw, 100vw" : "100vw"}
              src={image.src}
            />
          </div>
        ))}
      </div>
      <div className={`absolute inset-0 -z-10 ${overlayClasses[overlay]}`} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,25,45,0.18)_0%,rgba(5,25,45,0.06)_58%,rgba(5,25,45,0.32)_100%)]" />

      <div className="container-page flex w-full flex-col justify-center py-12 sm:py-14 lg:py-16">
        {breadcrumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-7 text-sm text-slate-200/85 sm:text-[15px]">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((item, index) => (
                <li className="flex items-center gap-2" key={`${item.label}-${index}`}>
                  {index > 0 ? <span aria-hidden="true" className="text-slate-300/60">/</span> : null}
                  {item.href ? (
                    <Link className="focus-ring rounded-sm transition hover:text-white" href={item.href}>{item.label}</Link>
                  ) : (
                    <span aria-current="page" className="font-medium text-white/90">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className="max-w-[58rem]">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-red-300 sm:text-[15px]">{eyebrow}</p>
          <h1 className="mt-4 max-w-[58rem] text-balance text-[clamp(2.25rem,6vw,2.75rem)] font-bold leading-[1.06] tracking-[-0.025em] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.26)] sm:text-[clamp(2.625rem,5vw,3.125rem)] lg:text-[clamp(2.875rem,4vw,3.75rem)]">{title}</h1>
          <p className="mt-5 max-w-[49rem] text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">{description}</p>
          {supportingLine ? <p className="mt-5 max-w-[52rem] text-sm font-bold leading-6 tracking-[0.02em] text-white sm:text-base">{supportingLine}</p> : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link className="focus-ring inline-flex min-h-13 items-center justify-center rounded-sm bg-[var(--brand)] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[var(--brand-hover)] sm:text-base" href={primaryCta.href}>{primaryCta.label}<span className="ml-2" aria-hidden="true">→</span></Link>
            {secondaryCta ? <Link className="focus-ring inline-flex min-h-13 items-center justify-center rounded-sm border border-white/80 bg-white/5 px-5 py-3 text-center text-sm font-bold text-white backdrop-blur-[2px] transition hover:border-white hover:bg-white hover:text-[var(--brand-dark)] sm:text-base" href={secondaryCta.href}>{secondaryCta.label}<span className="ml-2" aria-hidden="true">→</span></Link> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
