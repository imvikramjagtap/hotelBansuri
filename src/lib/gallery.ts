export type GalleryPhoto = {
  src: string;
  alt: string;
  label: string;
};

type SlotLike = {
  label: string;
  src: string;
  alt: string;
  images?: readonly { src: string; alt: string }[];
};

/** Flatten gallery slots into a unique ordered photo list for the lightbox. */
export function flattenGalleryPhotos(slots: readonly SlotLike[]): GalleryPhoto[] {
  const seen = new Set<string>();
  const photos: GalleryPhoto[] = [];

  for (const slot of slots) {
    const slides =
      slot.images && slot.images.length > 0
        ? slot.images
        : [{ src: slot.src, alt: slot.alt }];

    for (const slide of slides) {
      if (seen.has(slide.src)) continue;
      seen.add(slide.src);
      photos.push({ src: slide.src, alt: slide.alt, label: slot.label });
    }
  }

  return photos;
}
