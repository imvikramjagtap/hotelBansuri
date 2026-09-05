import type { Metadata, Viewport } from "next";
import { Archivo_Black, Figtree, Montserrat, Noto_Sans_Devanagari } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { seo } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";
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

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: "%s | Kashvee's Bansuri Hotel",
  },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: "Kashvee's Bansuri Hotel",
  authors: [{ name: "Kashvee's Bansuri Hotel" }],
  creator: "Kashvee's Bansuri Hotel",
  publisher: "Kashvee's Bansuri Hotel",
  category: "restaurant",
  classification: "Pure Vegetarian Garden Restaurant",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "mr-IN": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["mr_IN"],
    url: "/",
    siteName: "Kashvee's Bansuri Hotel",
    title: seo.titleShort,
    description: seo.ogDescription,
    images: [
      {
        url: seo.ogImage.url,
        width: seo.ogImage.width,
        height: seo.ogImage.height,
        alt: seo.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.titleShort,
    description: seo.ogDescription,
    images: [seo.ogImage.url],
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Chandekasare, Shirdi",
    "geo.position": "19.8231246;74.4509533",
    ICBM: "19.8231246, 74.4509533",
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
      <body className="flex min-h-full max-w-full flex-col overflow-x-clip font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
