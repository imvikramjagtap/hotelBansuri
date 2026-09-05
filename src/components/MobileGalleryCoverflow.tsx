"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type Slot = {
  id: string;
  label: string;
  src: string;
  alt: string;
  images?: readonly GalleryImage[];
};

type MobileGalleryCoverflowProps = {
  slots: readonly Slot[];
  onOpen: (src: string) => void;
  title: string;
  hint?: string;
};

const SWIPE_THRESHOLD = 45;
const AUTO_MS = 4500;
const INNER_MS = 3200;

function circularOffset(index: number, active: number, total: number) {
  let delta = index - active;
  const half = Math.floor(total / 2);
  if (delta > half) delta -= total;
  if (delta < -half) delta += total;
  return delta;
}

export function MobileGalleryCoverflow({
  slots,
  onOpen,
  title,
  hint = "Swipe for more · Tap to open",
}: MobileGalleryCoverflowProps) {
  const [active, setActive] = useState(0);
  const [inner, setInner] = useState(0);
  const touchX = useRef<number | null>(null);
  const dragging = useRef(false);

  const activeSlot = slots[active];
  const slides =
    activeSlot?.images && activeSlot.images.length > 0
      ? activeSlot.images
      : activeSlot
        ? [{ src: activeSlot.src, alt: activeSlot.alt }]
        : [];

  useEffect(() => {
    setInner(0);
  }, [active]);

  useEffect(() => {
    if (slots.length < 2) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slots.length);
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [slots.length, active]);

  useEffect(() => {
    if (slides.length < 2) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setInner((current) => (current + 1) % slides.length);
    }, INNER_MS);

    return () => window.clearInterval(id);
  }, [slides.length, active, inner]);

  if (slots.length === 0) return null;

  const go = (next: number) => {
    const len = slots.length;
    setActive(((next % len) + len) % len);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    touchX.current = event.clientX;
    dragging.current = false;
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (touchX.current == null) return;
    if (Math.abs(event.clientX - touchX.current) > 8) dragging.current = true;
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (touchX.current == null) return;
    const delta = event.clientX - touchX.current;
    touchX.current = null;

    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      if (delta < 0) go(active + 1);
      else go(active - 1);
      return;
    }

    if (!dragging.current) {
      const src = slides[inner]?.src ?? activeSlot?.src;
      if (src) onOpen(src);
    }
  };

  return (
    <div>
      <p className="mb-3 text-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-orange">
        {title}
      </p>
      <div
        className="relative mx-auto h-[22rem] w-full touch-pan-y select-none sm:h-[25rem]"
        style={{ perspective: "1100px" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          touchX.current = null;
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {slots.map((slot, index) => {
            const offset = circularOffset(index, active, slots.length);
            const abs = Math.abs(offset);
            if (abs > 2) return null;

            const isActive = offset === 0;
            const tall = slot.id === "sign" || slot.id === "deck";
            const cardSlides =
              slot.images && slot.images.length > 0
                ? slot.images
                : [{ src: slot.src, alt: slot.alt }];
            const shown = isActive ? cardSlides[inner % cardSlides.length] : cardSlides[0];

            return (
              <article
                key={slot.id}
                aria-hidden={!isActive}
                className={`absolute overflow-hidden rounded-2xl border border-white/15 bg-night-soft shadow-[0_24px_60px_rgba(0,0,0,0.45)] ${
                  tall ? "h-[88%] w-[78%]" : "h-[78%] w-[82%]"
                }`}
                style={{
                  transform: `
                    translateX(${offset * 42}%)
                    translateZ(${isActive ? 48 : -abs * 90}px)
                    rotateY(${offset * -38}deg)
                    scale(${isActive ? 1 : 0.82 - abs * 0.04})
                  `,
                  zIndex: 40 - abs * 10,
                  opacity: abs === 0 ? 1 : abs === 1 ? 0.55 : 0.22,
                  transition:
                    "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.55s ease",
                  transformStyle: "preserve-3d",
                  pointerEvents: abs > 1 ? "none" : "auto",
                }}
                onPointerDown={(event) => {
                  if (!isActive) event.stopPropagation();
                }}
                onClick={(event) => {
                  if (!isActive) {
                    event.stopPropagation();
                    go(index);
                  }
                }}
              >
                <div className="absolute inset-0">
                  {shown ? (
                    <Image
                      src={shown.src}
                      alt={shown.alt}
                      fill
                      sizes="90vw"
                      className={`object-cover ${
                        slot.id === "sign" && shown.src.includes("signboard")
                          ? "object-top"
                          : "object-center"
                      }`}
                      priority={isActive}
                      draggable={false}
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-linear-to-t from-night/90 via-night/15 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand-orange">
                    {index + 1} / {slots.length}
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-cream-on-dark">
                    {slot.label}
                  </p>
                  {isActive && cardSlides.length > 1 ? (
                    <div className="mt-3 flex gap-1.5">
                      {cardSlides.map((slide, i) => (
                        <span
                          key={slide.src}
                          className={`h-1 rounded-full transition-all ${
                            i === inner % cardSlides.length
                              ? "w-5 bg-brand-orange"
                              : "w-1.5 bg-white/35"
                          }`}
                        />
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center gap-2.5">
        <div className="flex max-w-full gap-1.5 overflow-x-auto px-1 py-1">
          {slots.map((slot, index) => (
            <button
              key={slot.id}
              type="button"
              aria-label={`Show ${slot.label}`}
              aria-current={index === active}
              onClick={() => go(index)}
              className={`h-2 shrink-0 rounded-full transition-all ${
                index === active ? "w-6 bg-brand-orange" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
        <p className="text-center text-xs text-cream-on-dark/50">{hint}</p>
      </div>
    </div>
  );
}
