/** Restaurant facts from MARKET_RESEARCH.md — keep copy grounded here. */

export const restaurant = {
  name: "Bansuri",
  ownerBrand: "Kashvee's",
  fullName: "Kashvee's Bansuri Hotel",
  fullNameMr: "काशीज् बांसुरी हॉटेल",
  listingName: "Bansuri Pure Veg Garden & Family Restaurant",
  tagline: "Pure veg. Open garden. Family table.",
  promise:
    "A peaceful pure-veg garden restaurant near Shirdi for families and pilgrims — glass-deck dining with 360° views, cover in every season, and space for kids.",
  /** Visible geo lockup for crawlers & travelers (name collision risk). */
  geoLockup: "Pure Veg Garden & Family Restaurant · Near Shirdi · Chandekasare",
  heroLead:
    "Pure veg garden dining near Shirdi — trusted by pilgrims and Jain families, with kids play, free parking, and 360° glass-deck views.",
  heroLeadMr:
    "शिरडीजवळ शुद्ध शाकाहारी गार्डन डायनिंग — यात्रेकरू व जैन कुटुंबांचा विश्वास; मुलांसाठी प्ले झोन, मोफत पार्किंग आणि ३६०° ग्लास डेक दृश्य.",
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
  geo: { lat: 19.8231246, lng: 74.4509533 },
  plusCode: "RFF2+69",
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
  /** Approximate Google review volume from MARKET_RESEARCH.md */
  reviewCount: 345,
  localRank: "#1 of ~5 places to eat in Chandekasare",
  priceBand: "₹200–400 per person",
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
    "Most veg stops near Shirdi are a quick, forgettable break. Bansuri was built to be the opposite — a pure-veg garden restaurant worth slowing down for.",
  pillars: [
    {
      id: "veg",
      title: "Pure Vegetarian",
      body: "A 100% vegetarian kitchen — no ambiguity, no compromise. Trusted by Shirdi pilgrims, Jain families, and vegetarians who want clear pure-veg dining.",
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
    body: "Whether you're returning from the Sai Baba temple or heading toward Nashik, Bansuri sits on your route — a calm, clean, pure-veg family stop about 6–7 km from Shirdi.",
    points: [
      {
        id: "highway",
        title: "On the Shirdi–Nashik highway",
        body: "Chandekasare corridor stop — easy for pilgrims, highway travelers, and Kopargaon families.",
      },
      {
        id: "hours",
        title: "Open early to late",
        body: "8:30 AM to 11:30 PM, every day. Breakfast through dinner after darshan.",
      },
      {
        id: "welcome",
        title: "Pure veg trust",
        body: "100% vegetarian kitchen — a clear choice for pilgrims and Jain-leaning travelers.",
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
      alt: "Bansuri double-decker glass dining pavilion rising above the garden near Shirdi",
      images: [
        {
          src: "/photos/glass-deck-day.jpg",
          alt: "Bansuri double-decker glass dining pavilion rising above the garden near Shirdi",
        },
        {
          src: "/photos/glass-deck-night.jpg",
          alt: "Bansuri pure veg glass dining pavilion lit up at night near Shirdi",
        },
        {
          src: "/photos/glass-deck-angle.jpg",
          alt: "Angled view of Bansuri glass dining pavilion in the Chandekasare garden",
        },
      ],
    },
    {
      id: "entrance",
      label: "Lit garden entrance",
      span: "",
      minH: "min-h-[11rem]",
      src: "/photos/garden-entrance-night.jpg",
      alt: "Nighttime lit archway entrance into the Bansuri pure veg garden near Shirdi",
      images: [
        {
          src: "/photos/garden-entrance-night.jpg",
          alt: "Nighttime lit archway entrance into the Bansuri pure veg garden near Shirdi",
        },
        {
          src: "/photos/garden-night-palms.jpg",
          alt: "Palm-lined garden path at Bansuri family restaurant near Shirdi",
        },
      ],
    },
    {
      id: "kids",
      label: "Kids play area",
      span: "",
      minH: "min-h-[11rem]",
      src: "/photos/kids-play-area.jpg",
      alt: "Kids play area with swings and slide at Bansuri garden restaurant near Shirdi",
    },
    {
      id: "terrace",
      label: "Upper deck evenings",
      span: "sm:col-span-2 lg:col-span-1",
      minH: "min-h-[13rem]",
      src: "/photos/terrace-party-night.jpg",
      alt: "Upper glass deck at night at Kashvee's Bansuri Hotel near Shirdi",
    },
    {
      id: "sign",
      label: "Highway sign",
      span: "lg:row-span-2",
      minH: "min-h-[14rem] sm:min-h-[16rem] lg:min-h-0",
      src: "/photos/highway-sign.jpg",
      alt: "Bansuri Pure Veg roadside pylon sign on the Shirdi–Nashik highway",
      images: [
        {
          src: "/photos/highway-sign.jpg",
          alt: "Bansuri Pure Veg roadside pylon sign on the Shirdi–Nashik highway",
        },
        {
          src: "/photos/signboard-night.jpg",
          alt: "Illuminated Bansuri Pure Veg night signboard near Shirdi with banquet hall",
        },
      ],
    },
    {
      id: "hall",
      label: "Party hall",
      span: "lg:col-span-2",
      minH: "min-h-[12rem]",
      src: "/photos/party-hall.jpg",
      alt: "Banquet hall at Bansuri pure veg restaurant Chandekasare near Shirdi",
      images: [
        {
          src: "/photos/party-hall.jpg",
          alt: "Banquet hall at Bansuri pure veg restaurant Chandekasare near Shirdi",
        },
        {
          src: "/photos/party-hall-birthday.jpg",
          alt: "Party hall decorated for a birthday celebration at Bansuri near Shirdi",
        },
      ],
    },
    {
      id: "parking",
      label: "Parking & approach",
      span: "col-span-2 lg:col-span-2",
      minH: "min-h-[14rem] sm:min-h-[18rem] lg:min-h-[20rem]",
      src: "/photos/exterior-overview.jpg",
      alt: "Bansuri Pure Veg Family Garden Restaurant exterior with parking near Shirdi",
    },
    {
      id: "swings",
      label: "Evening swings",
      span: "",
      minH: "min-h-[11rem]",
      src: "/photos/garden-swing-night.jpg",
      alt: "Garden swing lit with fairy lights for evening seating at Bansuri near Shirdi",
      images: [
        {
          src: "/photos/garden-swing-night.jpg",
          alt: "Garden swing lit with fairy lights for evening seating at Bansuri near Shirdi",
        },
        {
          src: "/photos/garden-swings-night.jpg",
          alt: "Covered twin garden swings glowing under string lights at night near Shirdi",
        },
      ],
    },
    {
      id: "family",
      label: "Family dining",
      span: "sm:col-span-2",
      minH: "min-h-[14rem]",
      src: "/photos/dining-hall.jpg",
      alt: "Bright indoor family dining hall at Kashvee's Bansuri pure veg restaurant near Shirdi",
    },
  ],
  photos: {
    hero: {
      src: "/photos/glass-deck-night.jpg",
      alt: "Kashvee's Bansuri Hotel glass-deck dining pavilion near Shirdi lit up at night",
    },
    /** No plated-food shots yet — dining hall stands in for kitchen ambience */
    food: {
      src: "/photos/dining-hall.jpg",
      alt: "Pure veg family dining hall at Bansuri garden restaurant near Shirdi",
    },
    evening: {
      src: "/photos/garden-night-palms.jpg",
      alt: "Palm-lined garden path at Bansuri pure veg restaurant near Shirdi for evening dining",
    },
  },
} as const;
