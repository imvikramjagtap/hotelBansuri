"use client";

import { useMemo, useState } from "react";
import { GallerySlot } from "@/components/GallerySlot";
import { MobileGalleryCoverflow } from "@/components/MobileGalleryCoverflow";
import { PhotoLightbox } from "@/components/PhotoLightbox";
import { flattenGalleryPhotos } from "@/lib/gallery";

type Slot = {
  id: string;
  label: string;
  span: string;
  minH: string;
  src: string;
  alt: string;
  images?: readonly { src: string; alt: string }[];
};

const OUTDOOR_IDS = new Set(["deck", "entrance", "kids", "terrace", "swings"]);
const INDOOR_IDS = new Set(["sign", "hall", "parking", "family"]);

export function AtmosphereGallery({ slots }: { slots: readonly Slot[] }) {
  const photos = useMemo(() => flattenGalleryPhotos(slots), [slots]);
  const outdoor = useMemo(
    () => slots.filter((slot) => OUTDOOR_IDS.has(slot.id)),
    [slots],
  );
  const indoor = useMemo(
    () => slots.filter((slot) => INDOOR_IDS.has(slot.id)),
    [slots],
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const openAtSrc = (src: string) => {
    const i = photos.findIndex((photo) => photo.src === src);
    setOpenIndex(i >= 0 ? i : 0);
  };

  return (
    <>
      <div className="space-y-10 overflow-x-clip lg:hidden">
        <MobileGalleryCoverflow
          title="Garden & decks"
          slots={outdoor}
          onOpen={openAtSrc}
        />
        <MobileGalleryCoverflow
          title="Hall, parking & signs"
          slots={indoor}
          onOpen={openAtSrc}
        />
      </div>

      <div className="hidden auto-rows-[minmax(11rem,auto)] grid-cols-2 gap-3 lg:grid lg:grid-cols-4 lg:auto-rows-[minmax(12rem,auto)] lg:gap-4">
        {slots.map((slot) => (
          <GallerySlot
            key={slot.id}
            label={slot.label}
            span={slot.span}
            minH={slot.minH}
            src={slot.src}
            alt={slot.alt}
            images={slot.images}
            onOpen={openAtSrc}
          />
        ))}
      </div>

      {openIndex !== null ? (
        <PhotoLightbox
          photos={photos}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      ) : null}
    </>
  );
}
