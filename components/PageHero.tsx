type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function PageHero({ eyebrow, title, body }: PageHeroProps) {
  return (
    <section className="border-b border-[var(--line)] bg-white">
      <div className="container-page py-14 sm:py-16">
        <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-[var(--brand-dark)] sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">{body}</p>
      </div>
    </section>
  );
}
