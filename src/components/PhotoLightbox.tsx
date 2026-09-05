"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import type { GalleryPhoto } from "@/lib/gallery";

const SWIPE_THRESHOLD = 50;

type PhotoLightboxProps = {
  photos: GalleryPhoto[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function PhotoLightbox({
  photos,
  index,
  onClose,
  onIndexChange,
}: PhotoLightboxProps) {
  const titleId = useId();
  const touchX = useRef<number | null>(null);
  const [dragX, setDragX] = useState(0);
  const photo = photos[index];

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        onIndexChange((index - 1 + photos.length) % photos.length);
      }
      if (event.key === "ArrowRight") {
        onIndexChange((index + 1) % photos.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, photos.length, onClose, onIndexChange]);

  const goPrev = () => {
    onIndexChange((index - 1 + photos.length) % photos.length);
  };

  const goNext = () => {
    onIndexChange((index + 1) % photos.length);
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    touchX.current = event.clientX;
    setDragX(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (touchX.current == null) return;
    setDragX(event.clientX - touchX.current);
  };

  const onPointerUp = () => {
    if (touchX.current == null) return;
    if (dragX <= -SWIPE_THRESHOLD) goNext();
    else if (dragX >= SWIPE_THRESHOLD) goPrev();
    touchX.current = null;
    setDragX(0);
  };

  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-100 flex flex-col bg-night/95 backdrop-blur-md"
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <p id={titleId} className="truncate font-semibold text-cream-on-dark">
            {photo.label}
          </p>
          <p className="text-xs text-cream-on-dark/55">
            {index + 1} / {photos.length}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-cream-on-dark hover:bg-white/20"
          aria-label="Close gallery"
        >
          <CloseIcon />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-6 sm:px-12"
        onClick={(e) => e.stopPropagation()}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          touchX.current = null;
          setDragX(0);
        }}
      >
        <button
          type="button"
          onClick={goPrev}
          className="absolute top-1/2 left-2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-cream-on-dark hover:bg-white/20 sm:flex"
          aria-label="Previous photo"
        >
          <Chevron dir="left" />
        </button>

        <div
          className="relative h-[70svh] w-full max-w-5xl touch-pan-y"
          style={{
            transform: `translateX(${dragX * 0.35}px)`,
            transition: touchX.current == null ? "transform 0.25s ease" : "none",
          }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            priority
            className="object-contain"
            draggable={false}
          />
        </div>

        <button
          type="button"
          onClick={goNext}
          className="absolute top-1/2 right-2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-cream-on-dark hover:bg-white/20 sm:flex"
          aria-label="Next photo"
        >
          <Chevron dir="right" />
        </button>
      </div>

      <p className="pb-5 text-center text-xs text-cream-on-dark/45 sm:hidden">
        Swipe for more photos
      </p>
    </div>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
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

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d="M5 5l10 10M15 5L5 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
