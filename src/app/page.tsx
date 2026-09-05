import Image from "next/image";
import type { ReactNode } from "react";
import { restaurant } from "@/lib/restaurant";
import { StickyDock } from "@/components/StickyDock";

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
      <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-leaf">
        {eyebrow}
      </p>
      <h2 className="font-display text-[1.85rem] font-medium leading-[1.15] tracking-[-0.02em] text-ink sm:text-4xl">
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
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-marigold focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to details
      </a>

      {/* Desktop top actions — mobile uses StickyDock */}
      <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div>
            <p className="font-display text-xl font-medium leading-none tracking-tight text-ink">
              {r.name}
            </p>
            <p className="mt-1 hidden text-xs text-muted sm:block">
              Pure veg garden · Near Shirdi
            </p>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <a
              href={`tel:${r.phoneTel}`}
              className="inline-flex min-h-10 items-center rounded-full bg-leaf px-4 text-sm font-semibold text-cream-on-dark hover:bg-leaf-deep"
            >
              Call
            </a>
            <a
              href={r.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center rounded-full border border-line bg-panel px-4 text-sm font-semibold text-ink hover:border-leaf"
            >
              Directions
            </a>
            <a
              href={r.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center rounded-full border border-line bg-panel px-4 text-sm font-semibold text-ink hover:border-leaf"
            >
              WhatsApp
            </a>
          </div>
          <a
            href={`tel:${r.phoneTel}`}
            className="inline-flex min-h-10 items-center rounded-full bg-leaf px-3.5 text-sm font-semibold text-cream-on-dark md:hidden"
          >
            Call
          </a>
        </div>
      </header>

      <main className="flex-1 pb-28 md:pb-0">
        {/* Hero — one composition, brand first, mobile full-bleed */}
        <section className="relative isolate min-h-[88svh] overflow-hidden bg-night text-cream-on-dark sm:min-h-[78vh]">
          <Image
            src={r.photos.hero.src}
            alt={r.photos.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-night via-night/70 to-night/35"
            aria-hidden
          />
          <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-5xl flex-col justify-end px-4 pb-10 pt-24 sm:min-h-[78vh] sm:px-6 sm:pb-14">
            <p className="rise text-[0.72rem] font-bold uppercase tracking-[0.18em] text-marigold">
              Near Shirdi · {r.corridor}
            </p>
            <h1 className="rise rise-delay-1 mt-3 font-display text-[clamp(3.1rem,14vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.03em]">
              {r.name}
            </h1>
            <p className="rise rise-delay-2 mt-3 max-w-md text-base text-cream-on-dark/85 sm:text-lg">
              Pure Veg Garden &amp; Family Restaurant
            </p>
            <p className="rise rise-delay-3 mt-4 max-w-md text-[1.05rem] leading-snug text-cream-on-dark/75 sm:text-lg">
              {r.promise}
            </p>
            <div className="rise rise-delay-3 mt-7 flex flex-wrap gap-2.5">
              <a
                href={`tel:${r.phoneTel}`}
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-marigold px-5 text-sm font-bold text-ink sm:flex-none"
              >
                Call {r.phoneDisplay}
              </a>
              <a
                href={r.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-cream-on-dark/35 px-5 text-sm font-semibold text-cream-on-dark sm:flex-none"
              >
                Get directions
              </a>
            </div>
            <p className="mt-4 text-[0.7rem] text-cream-on-dark/45">
              {r.photos.hero.credit} · replace with your garden photo
            </p>
          </div>
        </section>

        {/* At a glance — after hero */}
        <section id="details" className="border-b border-line bg-panel px-4 py-8 sm:px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
              { k: "Hours", v: r.hoursShort },
              { k: "Price", v: r.priceBand },
              { k: "Cuisine", v: "Pure vegetarian" },
              { k: "Rating", v: `${r.rating} · ${r.reviewCount}` },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-2xl border border-line bg-bg px-3.5 py-3.5"
              >
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-leaf">
                  {item.k}
                </p>
                <p className="mt-1.5 text-sm font-semibold leading-snug text-ink sm:text-[0.95rem]">
                  {item.v}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Bansuri */}
        <section className="vein-bg px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <SectionHeading eyebrow="Why stop here" title="Garden dining with room to breathe">
              Built for pilgrim families and highway travelers who want pure veg, parking, and a calm outdoor meal — not a rushed dhaba box.
            </SectionHeading>
            <div className="grid gap-4 sm:grid-cols-3">
              {r.pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-2xl border border-line bg-panel p-5"
                >
                  <h3 className="font-display text-xl font-medium tracking-tight text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">
                    {pillar.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-panel px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              eyebrow="Who visits"
              title="Made for the Shirdi journey"
            />
            <ul className="space-y-3">
              {r.audiences.map((a) => (
                <li
                  key={a.title}
                  className="flex gap-4 rounded-2xl border border-line bg-bg px-4 py-4"
                >
                  <span
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-marigold"
                    aria-hidden
                  />
                  <div>
                    <p className="font-semibold text-ink">{a.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{a.need}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Food */}
        <section className="vein-bg px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Food"
                title="Honest North Indian veg favorites"
              >
                Mid-range comfort food guests praise for taste and value. Dish names below are provisional until the kitchen confirms the full menu.
              </SectionHeading>
              <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-panel">
                {r.dishes.map((dish) => (
                  <li key={dish.name} className="px-4 py-4 sm:px-5">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-marigold-deep">
                      {dish.status}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-medium text-ink">
                      {dish.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{dish.note}</p>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={r.photos.food.src}
                alt={r.photos.food.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/80 to-transparent px-4 pb-3 pt-10 text-[0.7rem] text-cream-on-dark/80">
                {r.photos.food.credit}
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Amenities — detailed */}
        <section className="bg-panel px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              eyebrow="On site"
              title="Everything travelers ask about"
            >
              Amenities listed on directories and repeated in guest reviews.
            </SectionHeading>
            <div className="grid gap-3 sm:grid-cols-2">
              {r.amenities.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-line bg-bg px-4 py-4"
                >
                  <h3 className="text-[1.02rem] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Atmosphere strip */}
        <section className="night-panel px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-marigold">
                Atmosphere
              </p>
              <h2 className="font-display text-[1.85rem] font-medium leading-tight tracking-[-0.02em] sm:text-4xl">
                Lawn by day, terrace by evening
              </h2>
              <p className="mt-3 max-w-md text-[1.02rem] leading-relaxed text-cream-on-dark/70">
                Guests talk about a peaceful ambience, a maintained garden, and terrace views that shine at dinner time. Bring your own photos of the lawn and kids zone to replace these stand-ins.
              </p>
              <p className="mt-6 text-sm text-cream-on-dark/55">{r.localRank}</p>
            </div>
            <figure className="relative aspect-[16/11] overflow-hidden rounded-3xl">
              <Image
                src={r.photos.evening.src}
                alt={r.photos.evening.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-night/55 px-3 py-1 text-[0.65rem] text-cream-on-dark/85 backdrop-blur-sm">
                {r.photos.evening.credit}
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Reviews */}
        <section className="vein-bg px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <SectionHeading eyebrow="Guests say" title="Warm words from the road">
              Paraphrased from public Google reviews. Rating roughly {r.rating} across {r.reviewCount}.
            </SectionHeading>
            <div className="grid gap-4 md:grid-cols-3">
              {r.reviews.map((review) => (
                <blockquote
                  key={review.source}
                  className="rounded-2xl border border-line bg-panel p-5"
                >
                  <p className="font-display text-lg leading-snug text-ink">
                    “{review.quote}”
                  </p>
                  <footer className="mt-4 text-xs font-medium text-muted">
                    {review.source}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Visit / contact — dense details */}
        <section className="bg-panel px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Visit" title="Find us on the highway" />
              <dl className="space-y-4 rounded-2xl border border-line bg-bg p-5">
                <div>
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-leaf">
                    Full name
                  </dt>
                  <dd className="mt-1 text-[0.98rem] font-medium text-ink">{r.fullName}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-leaf">
                    Location
                  </dt>
                  <dd className="mt-1 text-[0.98rem] text-ink">
                    {r.locality}
                    <br />
                    Near Kopargaon / Shirdi, {r.region} {r.pin}
                    <br />
                    <span className="text-muted">{r.corridor}</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-leaf">
                    Distance
                  </dt>
                  <dd className="mt-1 text-[0.98rem] text-ink">
                    {r.distanceShirdi}
                    <br />
                    {r.distanceKopargaon}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-leaf">
                    Hours
                  </dt>
                  <dd className="mt-1 text-[0.98rem] font-medium text-ink">{r.hours}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-leaf">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${r.phoneTel}`}
                      className="text-[0.98rem] font-semibold text-leaf underline-offset-2 hover:underline"
                    >
                      {r.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-leaf">
                    Price band
                  </dt>
                  <dd className="mt-1 text-[0.98rem] text-ink">{r.priceBand}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-leaf">
                    Cuisine
                  </dt>
                  <dd className="mt-1 text-[0.98rem] text-ink">{r.cuisine}</dd>
                </div>
              </dl>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <a
                  href={`tel:${r.phoneTel}`}
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-leaf px-5 text-sm font-bold text-cream-on-dark sm:flex-none"
                >
                  Call now
                </a>
                <a
                  href={r.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-line bg-panel px-5 text-sm font-semibold text-ink sm:flex-none"
                >
                  WhatsApp
                </a>
                <a
                  href={r.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-line bg-panel px-5 text-sm font-semibold text-ink sm:w-auto"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-line">
              <iframe
                title="Bansuri on Google Maps"
                src={r.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[min(22rem,55vh)] w-full border-0 sm:h-full sm:min-h-[28rem]"
              />
            </div>
          </div>
        </section>

        {/* Note for Marathi */}
        <section className="border-t border-line bg-bg-deep px-4 py-8 sm:px-6">
          <div className="mx-auto max-w-5xl text-sm text-muted">
            <p>
              <span className="font-semibold text-ink">Marathi copy:</span>{" "}
              English first for this pass. Marathi headlines and CTAs can be layered in next — label ready for bilingual.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-night px-4 py-8 text-cream-on-dark sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl font-medium">{r.name}</p>
            <p className="mt-1 text-sm text-cream-on-dark/65">
              Pure veg garden restaurant · {r.locality}
            </p>
          </div>
          <p className="text-sm text-cream-on-dark/55">{r.phoneDisplay}</p>
        </div>
      </footer>

      <StickyDock />
    </>
  );
}
