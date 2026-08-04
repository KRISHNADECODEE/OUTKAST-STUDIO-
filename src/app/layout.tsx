import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Permanent_Marker, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-editorial",
  weight: ["700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  variable: "--font-brush",
  weight: "400",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwritten",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://outkast-studio.vercel.app"),
  title: "OUTKAST STUDIO | Creative Websites • AI Advertising • Brand Building",
  description:
    "We craft bold, high-performance websites and digital experiences for brands that don't follow trends, they set them. AI UGC Ads, Meta Ads, Brand Building.",
  keywords: [
    "OUTKAST STUDIO",
    "Creative Agency",
    "AI UGC Ads",
    "Portfolio Websites",
    "Brand Building",
    "Meta Ads",
  ],
  authors: [{ name: "OUTKAST STUDIO" }],
  openGraph: {
    title: "OUTKAST STUDIO | Creative Websites • AI Advertising",
    description: "Creative Websites for Brands That Refuse To Look Ordinary.",
    url: "https://outkast-studio.vercel.app",
    siteName: "OUTKAST STUDIO",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OUTKAST STUDIO | Creative Websites • AI Advertising",
    description: "Creative Websites for Brands That Refuse To Look Ordinary.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  themeColor: "#7C1117",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${plusJakarta.variable} ${permanentMarker.variable} ${caveat.variable}`}>
      <body className="bg-[#7C1117] text-[#F8F3EF] antialiased selection:bg-[#D03412] selection:text-white relative">
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
