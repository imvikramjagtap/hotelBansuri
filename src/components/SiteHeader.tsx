"use client";

import Image from "next/image";
import { useState } from "react";
import { restaurant } from "@/lib/restaurant";

export function SiteHeader() {
  const [lang, setLang] = useState<"en" | "mr">("en");
  const logo = lang === "en" ? restaurant.logos.en : restaurant.logos.mr;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-panel/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3">
        <a href="#top" className="flex min-w-0 items-center" aria-label="Kashvee's Bansuri Hotel home">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            priority
            className="h-10 w-auto object-contain object-left sm:h-12"
          />
        </a>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div
            className="inline-flex rounded-full border border-line bg-bg p-0.5"
            role="group"
            aria-label="Logo language"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              className={
                lang === "en"
                  ? "rounded-full bg-leaf px-2.5 py-1 text-[0.7rem] font-bold text-white"
                  : "rounded-full px-2.5 py-1 text-[0.7rem] font-semibold text-muted"
              }
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("mr")}
              className={
                lang === "mr"
                  ? "rounded-full bg-leaf px-2.5 py-1 text-[0.7rem] font-bold text-white"
                  : "rounded-full px-2.5 py-1 text-[0.7rem] font-semibold text-muted"
              }
            >
              मराठी
            </button>
          </div>

          <a
            href={`tel:${restaurant.phoneTel}`}
            className="hidden min-h-10 items-center rounded-full bg-brand-orange px-4 text-sm font-bold text-white hover:bg-brand-orange-deep sm:inline-flex"
          >
            Call
          </a>
          <a
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center rounded-full border border-line bg-panel px-4 text-sm font-semibold text-ink hover:border-leaf md:inline-flex"
          >
            Directions
          </a>
        </div>
      </div>
    </header>
  );
}
