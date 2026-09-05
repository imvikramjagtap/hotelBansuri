/** Restaurant facts from MARKET_RESEARCH.md — keep copy grounded here. */

export const restaurant = {
  name: "Bansuri",
  fullName: "Bansuri Pure Veg Garden & Family Restaurant",
  tagline: "Pure veg. Open garden. Family table.",
  promise:
    "A peaceful pure-veg garden pause for families traveling to Shirdi — good food, open air, and space for kids.",
  phoneDisplay: "+91 98901 48008",
  phoneTel: "+919890148008",
  whatsapp: "https://wa.me/919890148008",
  mapsUrl:
    "https://www.google.com/maps/place/Bansuri+pure+veg+garden+and+family+restaurant/@19.8231246,74.4509533,17z",
  mapsEmbed:
    "https://maps.google.com/maps?q=19.8231246,74.4509533&z=15&output=embed",
  locality: "Chandekasare, Sawali Vihir Kh.",
  region: "Maharashtra",
  pin: "423601",
  corridor: "Shirdi–Nashik Highway",
  distanceShirdi: "About 6–7 km from the Sai Baba temple area",
  distanceKopargaon: "About 7 km from Kopargaon",
  hours: "Daily 8:30 AM – 11:30 PM",
  hoursShort: "8:30 AM – 11:30 PM",
  priceBand: "₹200–400 per person",
  cuisine: "Indian · Pure vegetarian",
  rating: "~4.0 / 5",
  reviewCount: "~345 Google reviews",
  localRank: "#1 of ~5 places to eat in Chandekasare",
  amenities: [
    { title: "Pure vegetarian kitchen", detail: "Full veg menu — clear trust for pilgrims and families." },
    { title: "Garden & lawn seating", detail: "Outdoor tables and open air, not a cramped highway box." },
    { title: "Kids play area", detail: "A kids zone guests mention again and again." },
    { title: "Free parking", detail: "Ample parking for cars on the Shirdi corridor." },
    { title: "Terrace dining", detail: "Especially nice for evening / dinner views." },
    { title: "Takeaway & delivery", detail: "Listed for takeaway and delivery when you need a quick stop." },
    { title: "Card payments", detail: "Credit cards accepted." },
    { title: "Wheelchair accessible", detail: "Listed as accessible seating." },
  ],
  pillars: [
    {
      title: "Pure veg certainty",
      body: "No non-veg ambiguity — the first thing Shirdi-bound families need to know.",
    },
    {
      title: "Garden for the whole family",
      body: "Lawn seating plus a kids play area so adults can eat while children stay busy.",
    },
    {
      title: "Easy highway stop",
      body: "Long hours, free parking, and a calm pause on the Shirdi–Nashik stretch.",
    },
  ],
  dishes: [
    {
      name: "Butter garlic naan",
      note: "Frequently praised as a standout bread.",
      status: "Confirm with kitchen",
    },
    {
      name: "Paneer butter masala",
      note: "Classic comfort gravy for family tables.",
      status: "Confirm with kitchen",
    },
    {
      name: "Paneer makhamali",
      note: "Mentioned as a possible house specialty.",
      status: "Confirm with kitchen",
    },
    {
      name: "Masala khakhra & papad",
      note: "Light starters for a traveler halt.",
      status: "Confirm with kitchen",
    },
  ],
  reviews: [
    {
      quote:
        "Beautiful place… children’s play area, garden and lawn — food was authentic and too yummy.",
      source: "Atmosphere-led guest · Google",
    },
    {
      quote:
        "Pure veg restaurant and best quality of food… best veg restaurant near to Shirdi — must visit once.",
      source: "Pilgrim traveler · Google",
    },
    {
      quote:
        "Peaceful place. Loved the ambience. Food quality was awesome… ample parking space.",
      source: "Highway traveler · Google",
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
  photos: {
    hero: {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
      alt: "Outdoor garden restaurant seating placeholder — replace with Bansuri lawn photo",
      credit: "Photo by shawnanggg on Unsplash",
    },
    food: {
      src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
      alt: "Indian vegetarian curry placeholder — replace with Bansuri plated dishes",
      credit: "Photo by Andy Hay on Unsplash",
    },
    evening: {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      alt: "Evening restaurant atmosphere placeholder — replace with Bansuri terrace",
      credit: "Photo by Jay Wennington on Unsplash",
    },
  },
} as const;
