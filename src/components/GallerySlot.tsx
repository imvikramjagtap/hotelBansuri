"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type GallerySlotProps = {
  label: string;
  span: string;
  minH: string;
  src: string;
  alt: string;
  images?: readonly GalleryImage[];
  onOpen?: (src: string) => void;
};

const INTERVAL_MS = 4000;
const SWIPE_THRESHOLD = 40;

export function GallerySlot({
  label,
  span,
  minH,
  src,
  alt,
  images,
  onOpen,
}: GallerySlotProps) {
  const slides = images && images.length > 0 ? images : [{ src, alt }];
  const multi = slides.length > 1;
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const didSwipe = useRef(false);

  const goTo = (next: number) => {
    const len = slides.length;
    setIndex(((next % len) + len) % len);
  };

  const goPrev = () => goTo(index - 1);
  const goNext = () => goTo(index + 1);

  useEffect(() => {
    if (!multi) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [multi, slides.length, index]);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    touchX.current = event.clientX;
    didSwipe.current = false;
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (touchX.current == null) return;
    const delta = event.clientX - touchX.current;
    touchX.current = null;

    if (multi && Math.abs(delta) >= SWIPE_THRESHOLD) {
      didSwipe.current = true;
      if (delta < 0) goNext();
      else goPrev();
      return;
    }

    if (!didSwipe.current && Math.abs(delta) < SWIPE_THRESHOLD) {
      onOpen?.(slides[index]?.src ?? src);
    }
  };

  return (
    <div
      role={onOpen ? "button" : undefined}
      tabIndex={onOpen ? 0 : undefined}
      aria-label={onOpen ? `Open ${label} in full gallery` : undefined}
      className={`group relative flex h-full ${minH} ${span} cursor-pointer flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-night-soft`}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        touchX.current = null;
      }}
      onKeyDown={(event) => {
        if (!onOpen) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(slides[index]?.src ?? src);
        }
      }}
    >
      <div className="absolute inset-0 overflow-hidden" aria-live="polite">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={slide.src} className="relative h-full min-w-full shrink-0">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width:1024px) 50vw, 25vw"
                priority={i === 0}
                className={`pointer-events-none object-cover transition duration-700 group-hover:scale-105 ${
                  slide.src.includes("signboard-night") ? "object-top" : "object-center"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-night/90 via-night/25 to-transparent" />

      {multi ? (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            onPointerDown={(e) => e.stopPropagation()}
            className="absolute top-1/2 left-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-night/55 text-cream-on-dark opacity-100 backdrop-blur-sm transition hover:bg-night/75 sm:opacity-0 sm:group-hover:opacity-100"
            aria-label={`Previous ${label} photo`}
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            onPointerDown={(e) => e.stopPropagation()}
            className="absolute top-1/2 right-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-night/55 text-cream-on-dark opacity-100 backdrop-blur-sm transition hover:bg-night/75 sm:opacity-0 sm:group-hover:opacity-100"
            aria-label={`Next ${label} photo`}
          >
            <Chevron dir="right" />
          </button>
        </>
      ) : null}

      <div className="relative z-10 flex items-end justify-between gap-2 p-4 sm:p-5">
        <p className="font-semibold text-cream-on-dark">{label}</p>
        {multi ? (
          <div className="flex gap-1.5" role="tablist" aria-label={`${label} photos`}>
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show photo ${i + 1} of ${slides.length}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(i);
                }}
                onPointerDown={(e) => e.stopPropagation()}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? "scale-110 bg-brand-orange" : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
      <path
        d={dir === "left" ? "M12 4L6 10l6 6" : "M8 4l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
