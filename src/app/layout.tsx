import type { Metadata, Viewport } from "next";
import { Figtree, Newsreader } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bansuri — Pure Veg Garden Restaurant near Shirdi",
  description:
    "Pure vegetarian garden & family restaurant in Chandekasare on the Shirdi–Nashik Highway. Lawn seating, kids play area, free parking. Call +91 98901 48008.",
  openGraph: {
    title: "Bansuri — Pure Veg Garden Restaurant near Shirdi",
    description:
      "Peaceful pure-veg garden dining for families and pilgrims. Open 8:30 AM – 11:30 PM.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f6a45",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
