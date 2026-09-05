"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { restaurant } from "@/lib/restaurant";
import { useLogoLang } from "@/components/LogoLangProvider";
import { IconClose, IconMenu, IconPhone } from "@/components/Icons";

const navLinks = [
  { href: "#why", label: "Why Bansuri" },
  { href: "#food", label: "Food" },
  { href: "#gallery", label: "Atmosphere" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
] as const;

export function SiteHeader() {
  const { lang, setLang, logo } = useLogoLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-night/95 py-2.5 shadow-lg shadow-black/25 backdrop-blur-md"
          : "bg-transparent py-3.5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href="#top"
          className="flex min-w-0 items-center"
          aria-label="Kashvee's Bansuri Hotel home"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            priority
            className="h-9 w-auto object-contain object-left sm:h-10"
          />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream-on-dark/80 transition-colors hover:text-brand-orange"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div
            className="inline-flex rounded-full border border-white/20 bg-white/10 p-0.5 backdrop-blur-sm"
            role="group"
            aria-label="Logo language"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              className={
                lang === "en"
                  ? "rounded-full bg-brand-orange px-2.5 py-1 text-[0.7rem] font-bold text-night"
                  : "rounded-full px-2.5 py-1 text-[0.7rem] font-semibold text-cream-on-dark/80"
              }
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("mr")}
              className={
                lang === "mr"
                  ? "rounded-full bg-brand-orange px-2.5 py-1 text-[0.7rem] font-bold text-night"
                  : "rounded-full px-2.5 py-1 text-[0.7rem] font-semibold text-cream-on-dark/80"
              }
            >
              मराठी
            </button>
          </div>

          <a
            href={`tel:${restaurant.phoneTel}`}
            className="hidden min-h-10 items-center gap-2 rounded-full bg-brand-orange px-4 text-sm font-bold text-night transition hover:bg-brand-orange-deep sm:inline-flex"
          >
            <IconPhone className="h-4 w-4" />
            Call
          </a>

          <button
            type="button"
            className="p-2 text-cream-on-dark lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-112 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-3 rounded-2xl border border-white/10 bg-night-soft/95 p-4 backdrop-blur-md sm:mx-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3 text-cream-on-dark/90 last:border-0 hover:text-brand-orange"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${restaurant.phoneTel}`}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-bold text-night"
          >
            <IconPhone className="h-4 w-4" />
            {restaurant.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
