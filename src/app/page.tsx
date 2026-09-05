import Image from "next/image";
import type { ReactNode } from "react";
import { restaurant } from "@/lib/restaurant";
import {
  buildFaqJsonLd,
  buildRestaurantJsonLd,
  buildWebSiteJsonLd,
  faqs,
} from "@/lib/seo";
import { AtmosphereGallery } from "@/components/AtmosphereGallery";
import { BrandHero } from "@/components/BrandHero";
import {
  IconClock,
  IconGarden,
  IconGoogle,
  IconKids,
  IconLeaf,
  IconMapPin,
  IconNav,
  IconParking,
  IconParty,
  IconPhone,
  IconQuote,
  StarRow,
} from "@/components/Icons";
import { LogoLangProvider } from "@/components/LogoLangProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyDock } from "@/components/StickyDock";
import { TrustStrip } from "@/components/TrustStrip";

const pillarIcons = {
  veg: IconLeaf,
  garden: IconGarden,
  kids: IconKids,
  parking: IconParking,
} as const;

const travelerIcons = {
  highway: IconMapPin,
  hours: IconClock,
  welcome: IconLeaf,
  party: IconParty,
} as const;

function SectionHeading({
  eyebrow,
  title,
  light,
  center,
  children,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
  center?: boolean;
  children?: ReactNode;
}) {
  return (
    <header className={`mb-10 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p
        className={`mb-2 text-[0.7rem] font-bold uppercase tracking-[0.22em] ${
          light ? "text-brand-orange" : "text-brand-orange"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-[1.85rem] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[2.35rem] ${
          light ? "text-cream-on-dark" : "text-leaf"
        }`}
      >
        {title}
      </h2>
      {children ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-cream-on-dark/65" : "text-muted"
          }`}
        >
          {children}
        </p>
      ) : null}
    </header>
  );
}

export default function Home() {
  const r = restaurant;
  const featuredQuote = r.reviews[0];
  const jsonLd = [buildRestaurantJsonLd(), buildFaqJsonLd(), buildWebSiteJsonLd()];

  return (
    <LogoLangProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <a
        href="#trust"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-60 focus:rounded-lg focus:bg-brand-orange focus:px-3 focus:py-2 focus:text-night"
      >
        Skip to details
      </a>

      <SiteHeader />

      <main className="flex-1 pb-28 md:pb-0">
        <BrandHero />
        <TrustStrip />

        {/* Why — Ref B cards + current copy */}
        <section className="px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-14" id="why">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Why Bansuri near Shirdi"
              title="A pure-veg garden stop worth the pause"
              center
            >
              {r.whyIntro}
            </SectionHeading>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {r.pillars.map((pillar, i) => {
                const Icon = pillarIcons[pillar.id];
                return (
                  <article
                    key={pillar.id}
                    className="group rounded-2xl border border-line/80 bg-panel p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-leaf text-cream-on-dark transition-colors group-hover:bg-brand-orange group-hover:text-night">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-leaf">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.body}</p>
                  </article>
                );
              })}
            </div>
            <p className="mt-10 text-center">
              <a
                href={r.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange hover:text-brand-orange-deep"
              >
                See it on Google Maps
                <span aria-hidden>→</span>
              </a>
            </p>
          </div>
        </section>

        {/* Atmosphere masonry — Ref B + empty slots */}
        <section className="bg-night px-4 py-20 sm:px-6 sm:py-24" id="gallery">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="The atmosphere"
              title="Elevated dining, every season"
              light
              center
            >
              {r.story.body}
            </SectionHeading>

            <AtmosphereGallery slots={r.photoSlots} />
          </div>
        </section>

        {/* Food cards — Ref B + A restraint */}
        <section className="relative overflow-hidden bg-night-soft px-4 py-20 sm:px-6 sm:py-24" id="food">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
          <div className="relative mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Pure veg Indian kitchen"
              title="Home-style plates for Shirdi travelers"
              light
              center
            >
              Fresh ingredients and traditional recipes — North Indian favourites, thalis, and family comfort food from a 100% vegetarian kitchen.
            </SectionHeading>

            <div className="grid gap-6 md:grid-cols-3">
              {r.dishes.map((dish) => (
                <article
                  key={dish.name}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-night"
                >
                  <div className="relative h-56 overflow-hidden sm:h-64">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
                    <span className="absolute right-4 top-4 rounded-full bg-brand-orange px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-night">
                      {dish.badge}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-2xl font-bold text-cream-on-dark">
                      {dish.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream-on-dark/60">
                      {dish.note}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-cream-on-dark/45">
              Full menu in-store · Thalis, South Indian, North Indian · Ask staff about
              Jain-friendly preparations
            </p>
          </div>
        </section>

        {/* Travelers — Ref B split */}
        <section className="vein-bg px-4 py-20 sm:px-6 sm:py-24" id="travelers">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeading eyebrow={r.travelers.eyebrow} title={r.travelers.title}>
                {r.travelers.body}
              </SectionHeading>
              <div className="space-y-5">
                {r.travelers.points.map((point) => {
                  const Icon = travelerIcons[point.id];
                  return (
                    <div key={point.id} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf/10 text-leaf">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ink">{point.title}</h3>
                        <p className="mt-0.5 text-sm text-muted">{point.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-night/20">
              <div className="relative h-88 sm:h-112">
                <Image
                  src={r.photos.evening.src}
                  alt={r.photos.evening.alt}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-linear-to-b from-night/75 via-night/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 top-0 p-5 sm:p-7">
                <div className="rounded-2xl border border-white/10 bg-night/70 p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-center">
                      <p className="font-display text-3xl font-bold text-brand-orange">~7</p>
                      <p className="text-[0.65rem] uppercase tracking-wider text-cream-on-dark/55">
                        km to Shirdi
                      </p>
                    </div>
                    <div className="h-10 w-px bg-white/15" />
                    <div className="text-center">
                      <p className="font-display text-3xl font-bold text-brand-orange">
                        {r.hoursOpen}
                      </p>
                      <p className="text-[0.65rem] uppercase tracking-wider text-cream-on-dark/55">
                        Opening
                      </p>
                    </div>
                    <div className="h-10 w-px bg-white/15" />
                    <div className="text-center">
                      <p className="font-display text-3xl font-bold text-brand-orange">Hall</p>
                      <p className="text-[0.65rem] uppercase tracking-wider text-cream-on-dark/55">
                        Parties
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rating banner — Ref A + reviews */}
        <section className="bg-brand-orange px-4 py-10 sm:px-6 sm:py-12" id="rating-banner">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-3">
                <p className="font-display text-5xl font-extrabold text-night">{r.rating}</p>
                <div>
                  <StarRow rating={4} className="text-night" />
                  <p className="mt-1 text-sm font-semibold text-night/80">Google rating</p>
                </div>
              </div>
              <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-night/90">
                “{featuredQuote.quote}”
              </p>
            </div>
            <a
              href={r.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-night px-6 text-sm font-bold text-cream-on-dark hover:bg-night-soft"
            >
              <IconGoogle className="h-5 w-5 rounded-full bg-white p-0.5" />
              Read on Google Maps
            </a>
          </div>
        </section>

        <section className="vein-bg px-4 py-20 sm:px-6 sm:py-24" id="reviews">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Guest reviews"
              title="Why guests call it a top veg stop near Shirdi"
              center
            >
              Warm words about the garden, pure vegetarian kitchen, kids zone, and calm pause on the Sai Baba journey.
            </SectionHeading>

            <div className="grid gap-5 md:grid-cols-3">
              {r.reviews.map((review) => (
                <figure
                  key={review.id}
                  className="relative flex h-full flex-col rounded-2xl border border-line bg-panel p-6 shadow-sm sm:p-7"
                >
                  <IconQuote className="absolute right-5 top-5 h-8 w-8 text-line" />
                  <StarRow rating={review.stars} />
                  <blockquote className="mt-4 flex-1 text-[1.02rem] leading-relaxed text-ink-soft">
                    “{review.quote}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-2 text-sm font-semibold text-muted">
                    <IconGoogle className="h-4 w-4" />
                    {review.source}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — traveler answers + FAQPage schema */}
        <section className="px-4 py-20 sm:px-6 sm:py-24" id="faq" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Good to know"
              title="Pure veg near Shirdi — common questions"
              center
            >
              Straight answers for pilgrims, Jain families, and highway travelers planning a stop.
            </SectionHeading>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-line bg-panel px-5 py-4 open:shadow-sm sm:px-6"
                >
                  <summary className="cursor-pointer list-none font-display text-lg font-bold tracking-tight text-leaf marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {faq.question}
                      <span
                        aria-hidden
                        className="mt-1 shrink-0 text-brand-orange transition group-open:rotate-45"
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Compact Visit — A + B + current */}
        <section className="bg-night px-4 py-20 sm:px-6 sm:py-24" id="visit">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Visit us"
              title="Find Kashvee's Bansuri near Shirdi"
              light
              center
            >
              Pure veg garden restaurant on the Shirdi–Nashik highway in Chandekasare. Look for
              the glass decks.
            </SectionHeading>

            <div className="grid gap-6 lg:grid-cols-2">
              <address className="rounded-2xl border border-white/10 bg-night-soft p-7 not-italic sm:p-9">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                      <IconMapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-cream-on-dark">
                        Location
                      </h3>
                      <p className="mt-1 text-sm text-cream-on-dark/60">
                        {r.locality} · Near Shirdi / Kopargaon · {r.pin}
                      </p>
                      <p className="text-sm text-cream-on-dark/60">
                        {r.corridor} · {r.distanceShirdi}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                      <IconClock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-cream-on-dark">
                        Hours
                      </h3>
                      <p className="mt-1 text-sm text-cream-on-dark/60">{r.hoursShort}</p>
                      <p className="text-sm text-cream-on-dark/60">Open daily</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                      <IconPhone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-cream-on-dark">
                        Contact
                      </h3>
                      <p className="mt-1 text-sm text-cream-on-dark/60">{r.phoneDisplay}</p>
                      <p className="text-sm text-cream-on-dark/60">
                        Pure veg · Party hall · Free parking
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={r.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand-orange px-5 text-sm font-bold text-night hover:bg-brand-orange-deep"
                  >
                    <IconNav className="h-4 w-4" />
                    Get directions
                  </a>
                  <a
                    href={`tel:${r.phoneTel}`}
                    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-cream-on-dark/25 px-5 text-sm font-semibold text-cream-on-dark hover:bg-white/10"
                  >
                    <IconPhone className="h-4 w-4" />
                    Call to book
                  </a>
                </div>
              </address>

              <div className="min-h-[20rem] overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="Kashvee's Bansuri Hotel — pure veg garden restaurant near Shirdi on Google Maps"
                  src={r.mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-[20rem] w-full border-0"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-night px-4 py-12 text-cream-on-dark sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
          <div>
            <Image
              src={r.logos.en.src}
              alt=""
              width={160}
              height={56}
              className="h-9 w-auto object-contain"
            />
            <p className="mt-3 max-w-xs text-sm text-cream-on-dark/50">
              {r.fullName} · {r.fullNameMr}. Pure vegetarian garden &amp; family restaurant near
              Shirdi on the {r.corridor} — trusted by pilgrims and Jain families.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-brand-orange">
              Find us
            </h4>
            <div className="space-y-2 text-sm text-cream-on-dark/50">
              <p>
                {r.locality} · {r.corridor}
              </p>
              <p>{r.phoneDisplay}</p>
              <p>
                {r.hoursShort} · Open daily
              </p>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-brand-orange">
              Quick links
            </h4>
            <div className="space-y-2 text-sm">
              <a href="#why" className="block text-cream-on-dark/50 hover:text-brand-orange">
                Why Bansuri
              </a>
              <a href="#food" className="block text-cream-on-dark/50 hover:text-brand-orange">
                Our food
              </a>
              <a href="#gallery" className="block text-cream-on-dark/50 hover:text-brand-orange">
                Atmosphere
              </a>
              <a href="#faq" className="block text-cream-on-dark/50 hover:text-brand-orange">
                FAQ
              </a>
              <a href="#visit" className="block text-cream-on-dark/50 hover:text-brand-orange">
                Visit us
              </a>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-cream-on-dark/35">
          © {new Date().getFullYear()} {r.fullName}. All rights reserved.
        </p>
      </footer>

      <StickyDock />
    </LogoLangProvider>
  );
}
