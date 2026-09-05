/** Restaurant facts from MARKET_RESEARCH.md — keep copy grounded here. */

export const restaurant = {
  name: "Bansuri",
  ownerBrand: "Kashvee's",
  fullName: "Kashvee's Bansuri Hotel",
  fullNameMr: "काशीज् बांसुरी हॉटेल",
  listingName: "Bansuri Pure Veg Garden & Family Restaurant",
  tagline: "Pure veg. Open garden. Family table.",
  promise:
    "A peaceful pure-veg stop for families on the Shirdi road — glass-deck dining with 360° views, cover in every season, and space for kids.",
  logos: {
    en: {
      src: "/brand/logo-en-solid.png",
      alt: "Kashvee's Bansuri Hotel logo",
      width: 372,
      height: 129,
    },
    mr: {
      src: "/brand/logo-mr-solid.png",
      alt: "काशीज् बांसुरी हॉटेल लोगो",
      width: 418,
      height: 222,
    },
  },
  /** Leaf mark only — no wordmark text */
  mark: {
    src: "/brand/mark-leaf.png",
    alt: "Bansuri leaf emblem",
    width: 325,
    height: 463,
  },
  phoneDisplay: "+91 98901 48008",
  phoneTel: "+919890148008",
  whatsapp: "https://wa.me/919890148008",
  mapsUrl: "https://maps.app.goo.gl/XSHPgAACpUqtxpBs8",
  mapsEmbed:
    "https://maps.google.com/maps?q=19.8231246,74.4509533&z=15&output=embed",
  /** Same Google listing — guests open Maps to read / leave reviews */
  reviewsUrl: "https://maps.app.goo.gl/XSHPgAACpUqtxpBs8",
  locality: "Chandekasare, Sawali Vihir Kh.",
  region: "Maharashtra",
  pin: "423601",
  corridor: "Shirdi–Nashik Highway",
  distanceShirdi: "About 6–7 km from the Sai Baba temple area",
  distanceKopargaon: "About 7 km from Kopargaon",
  hours: "Daily 8:30 AM – 11:30 PM",
  hoursShort: "8:30 AM – 11:30 PM",
  hoursOpen: "8:30 AM",
  hoursClose: "11:30 PM",
  cuisine: "Indian · Pure vegetarian",
  rating: "4.0",
  localRank: "#1 of ~5 places to eat in Chandekasare",
  amenities: [
    { title: "Pure vegetarian kitchen", detail: "Full veg menu — clear trust for pilgrims and families." },
    { title: "Garden seating", detail: "Outdoor tables and greenery around the property — not a cramped highway box." },
    { title: "Kids play area", detail: "A kids zone guests mention again and again." },
    { title: "Free parking", detail: "Ample parking for cars on the Shirdi corridor." },
    { title: "Double-deck glass dining", detail: "Elevated glass pavilion with 360° views — covered for sun and rain, open for every season." },
    { title: "Birthday & party hall", detail: "Dedicated hall for birthdays and functions — call to book your celebration." },
    { title: "Takeaway & delivery", detail: "Listed for takeaway and delivery when you need a quick stop." },
    { title: "Card payments", detail: "Credit cards accepted." },
    { title: "Wheelchair accessible", detail: "Listed as accessible seating." },
  ],
  whyIntro:
    "Most roadside veg restaurants are a quick, forgettable break. Bansuri was built to be the opposite — a place worth slowing down for.",
  pillars: [
    {
      id: "veg",
      title: "Pure Vegetarian",
      body: "A 100% vegetarian kitchen — no ambiguity, no compromise. Trusted by pilgrims, Jain families, and vegetarians alike.",
    },
    {
      id: "garden",
      title: "Glass Deck Dining",
      body: "Our signature double-decker pavilion — sit upstairs for fine dining with glass all around, a 360° view, and cover from sun and rain.",
    },
    {
      id: "kids",
      title: "Kids Play Area",
      body: "A dedicated play zone keeps little ones happy while you relax. A rare find on the Shirdi highway.",
    },
    {
      id: "parking",
      title: "Ample Free Parking",
      body: "Plenty of space to park with ease. Pull in, stretch out, and enjoy a calm meal before the road ahead.",
    },
  ],
  dishes: [
    {
      name: "Garlic Butter Naan",
      note: "Fresh from the tandoor — soft, buttery, and fragrant. The bread guests rave about.",
      badge: "Must Order",
    },
    {
      name: "Paneer Butter Masala",
      note: "Cottage cheese in a rich tomato gravy — classic comfort for family tables.",
      badge: "House Favourite",
    },
    {
      name: "Dal & thali favourites",
      note: "Home-style gravies, thalis, and everyday plates — ask for the full board in-store.",
      badge: "Comfort",
    },
  ],
  travelers: {
    eyebrow: "For travelers & pilgrims",
    title: "Your stop between Shirdi & Nashik",
    body: "Whether you're returning from the Sai Baba temple or heading toward Nashik, Bansuri sits on your route — a calm, clean, family-friendly break from the road.",
    points: [
      {
        id: "highway",
        title: "On the highway",
        body: "Right on the Shirdi–Nashik corridor — an easy stop without hunting for signs.",
      },
      {
        id: "hours",
        title: "Open early to late",
        body: "8:30 AM to 11:30 PM, every day. Breakfast through dinner.",
      },
      {
        id: "welcome",
        title: "Clean & welcoming",
        body: "Guests consistently praise the cleanliness and calm atmosphere.",
      },
      {
        id: "party",
        title: "Birthday & party hall",
        body: "Dedicated hall for celebrations — call ahead to book your date.",
      },
    ],
  },
  story: {
    eyebrow: "The place",
    title: "Come for the food. Stay for the view.",
    body: "Our double-decker glass pavilion lifts you above the garden — fine dining upstairs, glass all around for a full 360° view, and a covered roof so sun or rain never cuts the meal short.",
  },
  reviews: [
    {
      id: "garden-kids",
      quote:
        "Beautiful place… children’s play area, garden and lawn — food was authentic and too yummy.",
      source: "Google review",
      stars: 5,
    },
    {
      id: "pure-veg",
      quote:
        "Pure veg restaurant and best quality of food… best veg restaurant near to Shirdi — must visit once.",
      source: "Google review",
      stars: 5,
    },
    {
      id: "parking-calm",
      quote:
        "Peaceful place. Loved the ambience. Food quality was awesome… ample parking space.",
      source: "Google review",
      stars: 5,
    },
  ],
  audiences: [
    {
      title: "Shirdi pilgrim families",
      need: "Pure veg meal before or after darshan, with kids and parking sorted.",
    },
    {
      title: "Highway travelers",
      need: "A reliable stop with parking, clear hours, and honest mid-range food.",
    },
    {
      title: "Local families",
      need: "Weekend garden outing near Kopargaon / Chandekasare.",
    },
  ],
  photoSlots: [
    {
      id: "deck",
      label: "Double-deck dining",
      span: "lg:col-span-2 lg:row-span-2",
      minH: "min-h-[16rem] sm:min-h-[22rem]",
      src: "/photos/glass-deck-day.jpg",
      alt: "Bansuri double-decker glass dining pavilion rising above the garden",
      images: [
        {
          src: "/photos/glass-deck-day.jpg",
          alt: "Bansuri double-decker glass dining pavilion rising above the garden",
        },
        {
          src: "/photos/glass-deck-night.jpg",
          alt: "Bansuri double-decker glass dining pavilion lit up at night",
        },
        {
          src: "/photos/glass-deck-angle.jpg",
          alt: "Angled view of Bansuri double-decker glass dining pavilion in the garden",
        },
      ],
    },
    {
      id: "entrance",
      label: "Lit garden entrance",
      span: "",
      minH: "min-h-[11rem]",
      src: "/photos/garden-entrance-night.jpg",
      alt: "Nighttime lit archway entrance into the Bansuri garden",
    },
    {
      id: "kids",
      label: "Kids play area",
      span: "",
      minH: "min-h-[11rem]",
      src: "/photos/kids-play-area.jpg",
      alt: "Kids play area with swings and slide beside the garden lawn",
    },
    {
      id: "terrace",
      label: "Upper deck evenings",
      span: "sm:col-span-2 lg:col-span-1",
      minH: "min-h-[13rem]",
      src: "/photos/terrace-party-night.jpg",
      alt: "Upper glass deck at night decorated for a birthday celebration",
    },
    {
      id: "hall",
      label: "Party hall",
      span: "lg:col-span-2",
      minH: "min-h-[12rem]",
      src: "/photos/party-hall.jpg",
      alt: "Banquet hall set with white chairs and floral stage backdrop",
      images: [
        {
          src: "/photos/party-hall.jpg",
          alt: "Banquet hall set with white chairs and floral stage backdrop",
        },
        {
          src: "/photos/party-hall-birthday.jpg",
          alt: "Party hall decorated with balloons and a happy birthday setup",
        },
      ],
    },
    {
      id: "parking",
      label: "Parking & approach",
      span: "",
      minH: "min-h-[10rem]",
      src: "/photos/exterior-overview.jpg",
      alt: "Bansuri Pure Veg Family Garden Restaurant exterior with parking forecourt",
    },
    {
      id: "sign",
      label: "Highway sign",
      span: "",
      minH: "min-h-[10rem]",
      src: "/photos/highway-sign.jpg",
      alt: "Bansuri Pure Veg roadside pylon sign on the Shirdi–Nashik highway",
      images: [
        {
          src: "/photos/highway-sign.jpg",
          alt: "Bansuri Pure Veg roadside pylon sign on the Shirdi–Nashik highway",
        },
        {
          src: "/photos/signboard-night.jpg",
          alt: "Illuminated Bansuri night signboard with cuisine and banquet hall",
        },
      ],
    },
    {
      id: "family",
      label: "Family dining",
      span: "sm:col-span-2",
      minH: "min-h-[14rem]",
      src: "/photos/dining-hall.jpg",
      alt: "Bright indoor family dining hall with long tables and booth seating",
    },
  ],
  photos: {
    hero: {
      src: "/photos/glass-deck-night.jpg",
      alt: "Bansuri double-decker glass dining pavilion lit up at night",
    },
    /** No plated-food shots yet — dining hall stands in for kitchen ambience */
    food: {
      src: "/photos/dining-hall.jpg",
      alt: "Bansuri indoor dining hall where family thalis and North Indian plates are served",
    },
    evening: {
      src: "/photos/garden-night-palms.jpg",
      alt: "Palm-lined garden path and entrance lit up for evening dining",
    },
  },
} as const;
