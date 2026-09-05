"use client";

import Image from "next/image";
import { restaurant } from "@/lib/restaurant";
import { useLogoLang } from "@/components/LogoLangProvider";

export function BrandHero() {
  const { lang } = useLogoLang();
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
        <div className="absolute inset-0 bg-linear-to-b from-night/70 via-night/50 to-night/88" />
        <div className="absolute inset-0 bg-linear-to-r from-night/65 via-night/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-4 pb-32 pt-24 sm:px-6 sm:pb-36 sm:pt-28">
        <div className="max-w-2xl">
          <div className="fade-up flex items-center gap-3.5 sm:gap-5">
            <Image
              src={r.mark.src}
              alt=""
              width={r.mark.width}
              height={r.mark.height}
              priority
              className="h-16 w-auto shrink-0 object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.4)] sm:h-22"
            />
            <div className="min-w-0">
              <p className="mb-0.5 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-brand-orange sm:mb-1 sm:text-[0.7rem]">
                {lang === "en" ? "Kashvee's" : "काशीज्"}
              </p>
              <h1
                className={
                  lang === "en"
                    ? "font-brand brand-wordmark text-[clamp(2.6rem,11vw,5.5rem)]"
                    : "font-brand-mr brand-wordmark-mr text-[clamp(2.35rem,10vw,4.75rem)] font-black"
                }
              >
                {lang === "en" ? "Bansuri" : "बांसुरी"}
              </h1>
            </div>
          </div>

          <p className="fade-up fade-up-1 mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cream-on-dark/70 sm:text-xs">
            {lang === "en"
              ? r.geoLockup
              : "शुद्ध शाकाहारी गार्डन व फॅमिली रेस्टॉरंट · शिरडीजवळ · चांदेकसरे"}
          </p>

          <p className="fade-up fade-up-1 mt-3 max-w-lg text-base leading-snug text-cream-on-dark/90 sm:mt-4 sm:text-xl sm:leading-relaxed">
            {lang === "en" ? r.heroLead : r.heroLeadMr}
          </p>

          <div className="fade-up fade-up-2 mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
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
        </div>
      </div>
    </section>
  );
}
