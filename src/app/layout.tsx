import type { Metadata, Viewport } from "next";
import { Archivo_Black, Figtree, Montserrat, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-display-family",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

/** Heavy block sans close to the English logo wordmark */
const archivoBlack = Archivo_Black({
  variable: "--font-brand-family",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-brand-mr-family",
  subsets: ["devanagari"],
  weight: ["800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kashvee's Bansuri Hotel — Pure Veg Garden near Shirdi",
  description:
    "Kashvee's Bansuri Hotel (काशीज् बांसुरी हॉटेल) — pure vegetarian garden & family restaurant in Chandekasare on the Shirdi–Nashik Highway. Call +91 98901 48008.",
  openGraph: {
    title: "Kashvee's Bansuri Hotel — Pure Veg near Shirdi",
    description:
      "Peaceful pure-veg garden dining for families and pilgrims. Open 8:30 AM – 11:30 PM.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#089040",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${montserrat.variable} ${archivoBlack.variable} ${notoDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
