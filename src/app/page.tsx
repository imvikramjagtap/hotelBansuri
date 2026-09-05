import Image from "next/image";
import type { ReactNode } from "react";
import { restaurant } from "@/lib/restaurant";
import { BrandHero } from "@/components/BrandHero";
import {
  IconClock,
  IconGarden,
  IconGoogle,
  IconKids,
  IconLeaf,
  IconParking,
  IconParty,
  IconQuote,
  StarRow,
} from "@/components/Icons";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyDock } from "@/components/StickyDock";

const pillarIcons = {
  veg: IconLeaf,
  garden: IconGarden,
  kids: IconKids,
  parking: IconParking,
} as const;

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="mb-6 max-w-xl">
      <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brand-orange">
        {eyebrow}
      </p>
      <h2 className="font-display text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] text-leaf sm:text-[2.1rem]">
        {title}
      </h2>
      {children ? (
        <p className="mt-3 text-[1.02rem] leading-relaxed text-muted">{children}</p>
      ) : null}
    </header>
  );
}

export default function Home() {
  const r = restaurant;

  return (
    <>
      <a
        href="#details"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-brand-orange focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to details
      </a>

      <SiteHeader />

      <main className="flex-1 pb-28 md:pb-0">
        <BrandHero />

        <section id="details" className="relative overflow-hidden bg-night px-4 py-10 text-cream-on-dark sm:px-6 sm:py-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(248,144,32,0.22), transparent 55%), radial-gradient(ellipse 50% 70% at 100% 40%, rgba(8,144,64,0.28), transparent 50%)",
            }}
          />
          <div className="relative mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-brand-orange">
                <IconClock className="h-5 w-5" />
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em]">
                  Open daily
                </p>
              </div>
              <p className="mt-3 font-display text-[1.45rem] font-bold leading-snug tracking-tight text-white sm:text-[1.55rem]">
                {r.hoursOpen}
                <span className="mx-1.5 text-brand-orange">–</span>
                {r.hoursClose}
              </p>
              <p className="mt-2 text-sm text-cream-on-dark/60">Morning tea to late dinner</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-brand-orange">
                <IconLeaf className="h-5 w-5" />
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em]">
                  Kitchen
                </p>
              </div>
              <p className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-[1.7rem]">
                Pure veg
              </p>
              <p className="mt-2 text-sm text-cream-on-dark/60">Indian · family favourites</p>
            </div>

            <a
              href={r.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block overflow-hidden rounded-3xl bg-brand-orange p-5 text-white shadow-[0_16px_40px_rgba(248,144,32,0.35)] transition hover:brightness-105"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/80">
                  Google rating
                </p>
                <IconGoogle className="h-5 w-5 rounded-full bg-white p-0.5" />
              </div>
              <div className="mt-2 flex items-end gap-2">
                <p className="font-display text-5xl font-extrabold leading-none tracking-tight">
                  {r.rating}
                </p>
                <p className="mb-1.5 text-lg font-bold text-white/85">/ 5</p>
              </div>
              <div className="mt-2">
                <StarRow rating={4} className="text-white" />
              </div>
              <p className="mt-2 text-sm font-medium text-white/90">
                See reviews on Google →
              </p>
            </a>

            <div className="rounded-3xl border border-leaf/40 bg-leaf p-5 text-white shadow-[0_16px_40px_rgba(8,144,64,0.35)]">
              <div className="flex items-center gap-2 text-white/90">
                <IconParty className="h-5 w-5" />
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em]">
                  Celebrations
                </p>
              </div>
              <p className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight sm:text-[1.7rem]">
                Party hall
              </p>
              <p className="mt-2 text-sm text-white/85">
                Birthdays &amp; functions — call to book
              </p>
            </div>
          </div>
        </section>

        <section className="vein-bg px-4 py-12 sm:px-6 sm:py-16" id="why">
          <div className="mx-auto max-w-5xl">
            <SectionHeading eyebrow="Why Bansuri" title="More than a highway stop">
              {r.whyIntro}
            </SectionHeading>
            <div className="grid gap-4 sm:grid-cols-2">
              {r.pillars.map((pillar) => {
                const Icon = pillarIcons[pillar.id];
                return (
                  <article
                    key={pillar.id}
                    className="flex gap-4 rounded-3xl border border-line bg-panel p-5 sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-leaf/10 text-leaf">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-leaf">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">
                        {pillar.body}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Photo-first gallery — empty slots until owner photos arrive */}
        <section className="bg-panel px-4 py-12 sm:px-6 sm:py-16" id="gallery" aria-label="Photo gallery">
          <div className="mx-auto max-w-5xl">
            <header className="mb-6 max-w-lg">
              <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brand-orange">
                See the place
              </p>
              <h2 className="font-display text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] text-leaf sm:text-[2.1rem]">
                Garden, food &amp; celebrations
              </h2>
            </header>

            <div className="grid auto-rows-fr grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
              {r.photoSlots.map((slot) => (
                <div
                  key={slot.id}
                  className={`group relative flex ${slot.minH} ${slot.span} flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-line bg-bg-deep sm:rounded-3xl`}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-60"
                    aria-hidden
                    style={{
                      background:
                        slot.id === "lawn" || slot.id === "family"
                          ? "radial-gradient(ellipse at 30% 20%, rgba(8,144,64,0.12), transparent 55%)"
                          : slot.id === "hall" || slot.id === "terrace"
                            ? "radial-gradient(ellipse at 70% 80%, rgba(248,144,32,0.12), transparent 50%)"
                            : "radial-gradient(ellipse at 50% 50%, rgba(8,144,64,0.06), transparent 60%)",
                    }}
                  />
                  <span className="relative text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted/80">
                    Photo
                  </span>
                  <span className="relative mt-1.5 px-3 text-center text-sm font-semibold text-ink-soft">
                    {slot.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="vein-bg px-4 py-14 sm:px-6 sm:py-20" id="reviews">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
              <header className="max-w-xl">
                <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brand-orange">
                  Guests say
                </p>
                <h2 className="font-display text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] text-leaf sm:text-[2.1rem]">
                  Warm words from the road
                </h2>
                <p className="mt-3 text-[1.02rem] leading-relaxed text-muted">
                  Real Google reviews about the garden, pure veg kitchen, and calm stop near Shirdi.
                </p>
              </header>

              <a
                href={r.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 shrink-0 items-center gap-3 rounded-2xl border border-line bg-panel px-4 py-3 shadow-sm transition hover:border-brand-orange"
              >
                <IconGoogle className="h-8 w-8" />
                <span className="text-left">
                  <span className="flex items-center gap-2">
                    <span className="font-display text-2xl font-extrabold text-ink">
                      {r.rating}
                    </span>
                    <StarRow rating={4} />
                  </span>
                  <span className="block text-sm font-semibold text-leaf">
                    Read on Google Maps →
                  </span>
                </span>
              </a>
            </div>

            <div className="grid gap-5 md:grid-cols-3 md:gap-6">
              {r.reviews.map((review) => (
                <blockquote
                  key={review.quote}
                  className="flex h-full flex-col rounded-[1.75rem] border border-line bg-panel p-6 sm:p-7"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <IconQuote className="h-7 w-7 text-brand-orange/70" />
                    <StarRow rating={review.stars} />
                  </div>
                  <p className="flex-1 font-display text-[1.05rem] font-semibold leading-relaxed text-ink">
                    “{review.quote}”
                  </p>
                  <footer className="mt-6 flex items-center gap-2 border-t border-line pt-4 text-xs font-semibold text-muted">
                    <IconGoogle className="h-4 w-4" />
                    {review.source}
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="mt-8 text-center sm:mt-10">
              <a
                href={r.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-leaf px-6 text-sm font-bold text-white hover:bg-leaf-deep"
              >
                <IconGoogle className="h-5 w-5 rounded-full bg-white p-0.5" />
                See all Google reviews
              </a>
            </div>
          </div>
        </section>

        <section className="bg-panel px-4 py-10 sm:px-6 sm:py-12" id="visit">
          <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div>
              <p className="mb-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brand-orange">
                Visit
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-leaf sm:text-[1.85rem]">
                Find us on the highway
              </h2>

              <div className="mt-4 space-y-3 rounded-2xl border border-line bg-bg px-4 py-4 text-sm">
                <p className="font-semibold text-ink">
                  {r.fullName}
                  <span className="mt-0.5 block font-medium text-leaf">{r.fullNameMr}</span>
                </p>
                <p className="text-muted">
                  {r.locality} · Near Shirdi / Kopargaon
                  <span className="mt-0.5 block">{r.corridor}</span>
                </p>
                <p className="text-ink">
                  <span className="font-semibold">{r.hoursShort}</span>
                  <span className="text-muted"> · daily</span>
                </p>
                <p>
                  <a
                    href={`tel:${r.phoneTel}`}
                    className="font-semibold text-leaf underline-offset-2 hover:underline"
                  >
                    {r.phoneDisplay}
                  </a>
                </p>
                <p className="text-muted">Pure veg · Party hall · Free parking</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={`tel:${r.phoneTel}`}
                  className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-brand-orange px-4 text-sm font-bold text-white sm:flex-none"
                >
                  Call
                </a>
                <a
                  href={r.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-leaf px-4 text-sm font-bold text-white sm:flex-none"
                >
                  Open Maps
                </a>
                <a
                  href={r.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-panel px-4 text-sm font-semibold text-ink"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Bansuri on Google Maps"
                src={r.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full border-0 sm:h-full sm:min-h-[18rem]"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-night px-4 py-8 text-cream-on-dark sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={r.logos.en.src}
              alt=""
              width={160}
              height={56}
              className="h-10 w-auto rounded bg-white px-2 py-1 object-contain"
            />
            <div>
              <p className="text-sm font-semibold">{r.fullName}</p>
              <p className="text-sm text-cream-on-dark/65">{r.fullNameMr}</p>
            </div>
          </div>
          <p className="text-sm text-cream-on-dark/55">{r.phoneDisplay}</p>
        </div>
      </footer>

      <StickyDock />
    </>
  );
}
