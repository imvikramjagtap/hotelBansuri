import { restaurant } from "@/lib/restaurant";
import { getSiteUrl } from "@/lib/site";

const r = restaurant;

/** Primary search intents from MARKET_RESEARCH.md — geo-qualified, no invented claims. */
export const seo = {
  title:
    "Kashvee's Bansuri Hotel | Pure Veg Garden Restaurant near Shirdi",
  titleShort: "Pure Veg Garden Restaurant near Shirdi | Bansuri",
  description:
    "Kashvee's Bansuri Hotel (काशीज् बांसुरी हॉटेल) — 100% pure vegetarian garden & family restaurant near Shirdi on the Shirdi–Nashik Highway, Chandekasare. Trusted by pilgrims & Jain families. Kids play area, free parking, glass-deck dining. Open daily 8:30 AM–11:30 PM. Call +91 98901 48008.",
  ogDescription:
    "Standout pure-veg garden stop near Shirdi for families and pilgrims — glass-deck views, kids play area, free parking. Chandekasare · Shirdi–Nashik Highway.",
  keywords: [
    "pure veg restaurant near Shirdi",
    "vegetarian restaurant Shirdi",
    "best veg restaurant near Shirdi",
    "Jain friendly restaurant near Shirdi",
    "garden restaurant Shirdi",
    "family restaurant Chandekasare",
    "pure vegetarian hotel Shirdi Nashik highway",
    "Bansuri pure veg garden restaurant",
    "Kashvee's Bansuri Hotel",
    "काशीज् बांसुरी हॉटेल",
    "veg restaurant Kopargaon",
    "Sai Baba temple food nearby",
    "kids play area restaurant Shirdi",
  ],
  ogImage: {
    url: "/photos/glass-deck-night.jpg",
    width: 1600,
    height: 1200,
    alt: "Kashvee's Bansuri Hotel glass-deck dining pavilion near Shirdi at night",
  },
} as const;

/** Traveler FAQs — visible copy + FAQPage schema for search/AI. */
export const faqs = [
  {
    question: "Is Bansuri a pure vegetarian restaurant near Shirdi?",
    answer:
      "Yes. Kashvee's Bansuri Hotel is a 100% pure vegetarian kitchen — no non-veg ambiguity. Guests often call it one of the best veg restaurant stops near Shirdi for families and pilgrims.",
  },
  {
    question: "Is Bansuri suitable for Jain families and pilgrims?",
    answer:
      "Our kitchen is fully vegetarian, which is why many Jain families and Shirdi pilgrims trust us. Ask our staff about daily preparations that suit your preferences — we do not list separate Jain dishes online until confirmed in-store.",
  },
  {
    question: "How far is Bansuri from the Shirdi Sai Baba temple?",
    answer:
      "About 6–7 km from the Sai Baba temple area, on the Shirdi–Nashik Highway in Chandekasare (near Kopargaon).",
  },
  {
    question: "What are the opening hours and do you have parking?",
    answer:
      "Open daily 8:30 AM to 11:30 PM with ample free parking — an easy highway stop before or after darshan.",
  },
  {
    question: "Is there a kids play area and garden seating?",
    answer:
      "Yes. Guests love the garden lawn, outdoor seating, kids play zone, and our double-deck glass dining pavilion with 360° views, covered for every season.",
  },
] as const;

export function buildRestaurantJsonLd() {
  const site = getSiteUrl();
  const image = `${site}${seo.ogImage.url}`;

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site}/#restaurant`,
    name: r.fullName,
    alternateName: [r.listingName, r.fullNameMr, "Bansuri Pure Veg", "Hotel Bansuri"],
    description: seo.description,
    url: site,
    image: [
      image,
      `${site}/photos/exterior-overview.jpg`,
      `${site}/photos/kids-play-area.jpg`,
      `${site}/photos/dining-hall.jpg`,
    ],
    telephone: r.phoneTel,
    servesCuisine: ["Indian", "Vegetarian", "North Indian", "South Indian"],
    priceRange: "₹₹",
    acceptsReservations: "True",
    menu: `${site}/#food`,
    hasMenu: `${site}/#food`,
    address: {
      "@type": "PostalAddress",
      streetAddress: r.locality,
      addressLocality: "Chandekasare",
      addressRegion: r.region,
      postalCode: r.pin,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: r.geo.lat,
      longitude: r.geo.lng,
    },
    hasMap: r.mapsUrl,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:30",
      closes: "23:30",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: r.rating,
      bestRating: "5",
      worstRating: "1",
      ratingCount: String(r.reviewCount),
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Pure vegetarian kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Garden seating", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kids play area", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wheelchair accessible", value: true },
      { "@type": "LocationFeatureSpecification", name: "Party / banquet hall", value: true },
    ],
    sameAs: [r.mapsUrl],
    areaServed: [
      { "@type": "Place", name: "Shirdi" },
      { "@type": "Place", name: "Kopargaon" },
      { "@type": "Place", name: "Chandekasare" },
    ],
    keywords: seo.keywords.join(", "),
  };
}

export function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildWebSiteJsonLd() {
  const site = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site}/#website`,
    name: r.fullName,
    alternateName: r.listingName,
    url: site,
    description: seo.ogDescription,
    inLanguage: ["en-IN", "mr-IN"],
    about: { "@id": `${site}/#restaurant` },
  };
}
