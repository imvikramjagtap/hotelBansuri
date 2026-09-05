"use client";

import Image from "next/image";
import { restaurant } from "@/lib/restaurant";
import { useLogoLang } from "@/components/LogoLangProvider";
import {
  IconClock,
  IconKids,
  IconParking,
  IconParty,
  StarRow,
} from "@/components/Icons";

const chipIcons = {
  parking: IconParking,
  kids: IconKids,
  hours: IconClock,
  party: IconParty,
} as const;

export function BrandHero() {
  const { lang, logo } = useLogoLang();
  const r = restaurant;

  return (
    <section
      id="top"
      className="relative min-h-svh overflow-hidden"
      aria-label="Kashvee's Bansuri Hotel"
    >
      <div className="absolute inset-0">
        <Image
          src={r.photos.hero.src}
          alt={r.photos.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-night/75 via-night/55 to-night/90" />
        <div className="absolute inset-0 bg-linear-to-r from-night/70 via-night/35 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-4 pb-28 pt-28 sm:px-6 sm:pb-32 sm:pt-32">
        <div className="max-w-2xl">
          <a
            href={r.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fade-up inline-flex items-center gap-2 rounded-full border border-brand-orange/35 bg-brand-orange/15 px-4 py-1.5 backdrop-blur-sm"
          >
            <StarRow rating={4} className="text-brand-orange" />
            <span className="text-xs font-semibold text-cream-on-dark">
              {r.rating} / 5 · Google
            </span>
          </a>

          <div className="fade-up fade-up-1 mt-6">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              priority
              className="h-auto w-full max-w-68 object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] sm:max-w-88"
            />
          </div>

          <p className="fade-up fade-up-2 mt-5 text-xl font-light tracking-wide text-brand-orange sm:text-2xl">
            Pure Veg Garden &amp; Family Restaurant
          </p>

          <p className="fade-up fade-up-3 mt-4 max-w-xl text-base leading-relaxed text-cream-on-dark/85 sm:text-lg">
            {lang === "en"
              ? r.promise
              : "शिरडीच्या वाटेवर कुटुंबासाठी शुद्ध शाकाहारी गार्डन रेस्टॉरंट — शांत वातावरण, मुलांसाठी जागा आणि सोयीचे पार्किंग."}
          </p>

          <div className="fade-up fade-up-4 mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#visit"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-orange px-7 text-sm font-bold text-night shadow-[0_12px_32px_rgba(248,144,32,0.35)] transition hover:-translate-y-0.5 hover:bg-brand-orange-deep"
            >
              Plan your visit
            </a>
            <a
              href="#food"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-cream-on-dark/30 px-7 text-sm font-semibold text-cream-on-dark transition hover:border-cream-on-dark/50 hover:bg-white/10"
            >
              Explore the food
            </a>
          </div>

          <div className="fade-up fade-up-5 mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream-on-dark/70">
            <span>~7 km from Shirdi temple</span>
            <span>
              {r.hoursShort} · Open daily
            </span>
          </div>

          <div className="fade-up fade-up-5 mt-6 flex flex-wrap gap-2">
            {r.amenityChips.map((chip) => {
              const Icon = chipIcons[chip.id];
              return (
                <span
                  key={chip.id}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-night/50 px-3.5 py-2 text-xs font-semibold text-cream-on-dark/90 backdrop-blur-md"
                >
                  <Icon className="h-3.5 w-3.5 text-brand-orange" />
                  {chip.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
