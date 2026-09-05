import type { Metadata, Viewport } from "next";
import { Figtree, Montserrat } from "next/font/google";
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
      className={`${figtree.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
