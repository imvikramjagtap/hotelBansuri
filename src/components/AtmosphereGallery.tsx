"use client";

import { useMemo, useState } from "react";
import { GallerySlot } from "@/components/GallerySlot";
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

export function AtmosphereGallery({ slots }: { slots: readonly Slot[] }) {
  const photos = useMemo(() => flattenGalleryPhotos(slots), [slots]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const openAtSrc = (src: string) => {
    const i = photos.findIndex((photo) => photo.src === src);
    setOpenIndex(i >= 0 ? i : 0);
  };

  return (
    <>
      <div className="grid auto-rows-[minmax(11rem,auto)] grid-cols-2 gap-3 lg:grid-cols-4 lg:auto-rows-[minmax(12rem,auto)] lg:gap-4">
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
