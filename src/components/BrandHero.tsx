"use client";

import Image from "next/image";
import { useState } from "react";
import { restaurant } from "@/lib/restaurant";

export function BrandHero() {
  const [lang, setLang] = useState<"en" | "mr">("en");
  const r = restaurant;
  const logo = lang === "en" ? r.logos.en : r.logos.mr;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-panel"
      aria-label="Kashvee's Bansuri Hotel"
    >
      {/* Soft brand wash — matches logo boards, not photo overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(248,144,32,0.14), transparent 55%), radial-gradient(ellipse 70% 50% at 100% 100%, rgba(8,144,64,0.10), transparent 50%), radial-gradient(ellipse 50% 40% at 0% 80%, rgba(8,144,64,0.08), transparent 45%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[78svh] max-w-5xl flex-col items-center justify-center px-4 py-12 text-center sm:min-h-[70vh] sm:px-6 sm:py-16">
        <p className="rise text-[0.72rem] font-bold uppercase tracking-[0.18em] text-brand-orange">
          Near Shirdi · Pure vegetarian
        </p>

        <div className="rise rise-delay-1 mt-6 w-full max-w-md sm:max-w-lg">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            priority
            className="mx-auto h-auto w-full max-w-[20rem] object-contain sm:max-w-[26rem]"
          />
        </div>

        <div
          className="rise rise-delay-2 mt-5 inline-flex rounded-full border border-line bg-bg p-1"
          role="group"
          aria-label="Show English or Marathi logo"
        >
          <button
            type="button"
            onClick={() => setLang("en")}
            className={
              lang === "en"
                ? "rounded-full bg-leaf px-4 py-2 text-sm font-bold text-white"
                : "rounded-full px-4 py-2 text-sm font-semibold text-muted"
            }
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLang("mr")}
            className={
              lang === "mr"
                ? "rounded-full bg-leaf px-4 py-2 text-sm font-bold text-white"
                : "rounded-full px-4 py-2 text-sm font-semibold text-muted"
            }
          >
            मराठी
          </button>
        </div>

        <p className="rise rise-delay-2 mt-6 max-w-md text-[1.05rem] leading-snug text-ink-soft sm:text-lg">
          {lang === "en"
            ? r.promise
            : "शिरडीच्या वाटेवर कुटुंबासाठी शुद्ध शाकाहारी गार्डन रेस्टॉरंट — शांत वातावरण, मुलांसाठी जागा आणि सोयीचे पार्किंग."}
        </p>

        <p className="rise rise-delay-3 mt-3 text-sm font-medium text-muted">
          {r.locality} · {r.corridor}
        </p>

        <div className="rise rise-delay-3 mt-8 flex w-full max-w-md flex-col gap-2.5 sm:max-w-none sm:flex-row sm:justify-center">
          <a
            href={`tel:${r.phoneTel}`}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-orange px-6 text-sm font-bold text-white shadow-[0_10px_24px_rgba(248,144,32,0.35)] hover:bg-brand-orange-deep"
          >
            Call {r.phoneDisplay}
          </a>
          <a
            href={r.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-leaf px-6 text-sm font-bold text-white hover:bg-leaf-deep"
          >
            Get directions
          </a>
          <a
            href={r.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-panel px-6 text-sm font-semibold text-ink hover:border-leaf"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Brand bar under hero — orange/green identity strip */}
      <div className="grid grid-cols-2">
        <div className="h-1.5 bg-brand-orange" />
        <div className="h-1.5 bg-leaf" />
      </div>
    </section>
  );
}
