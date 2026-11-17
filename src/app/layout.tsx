import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import IdleAnimations from "@/components/IdleAnimations";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://outkast-studio.vercel.app"),
  alternates: {
    canonical: "https://outkast-studio.vercel.app",
  },
  title: "Outkast Studios | Creative Growth Studio",
  description:
    "We help businesses grow with premium website development, AI video advertising, branding, social media management and Meta Ads.",
  keywords: [
    "Creative agency India",
    "AI video advertising agency",
    "AI UGC ads India",
    "Social media management agency",
    "Brand building agency",
    "Website development agency",
    "Digital marketing agency",
    "Creative Growth Studio",
    "Meta Ads agency",
    "OUTKAST STUDIOS",
  ],
  authors: [{ name: "OUTKAST STUDIOS" }],
  openGraph: {
    title: "Outkast Studios | Creative Growth Studio",
    description:
      "We help businesses grow with premium website development, AI video advertising, branding, social media management and Meta Ads.",
    url: "https://outkast-studio.vercel.app",
    siteName: "Outkast Studios",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://outkast-studio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Outkast Studios — Creative Growth Studio. Websites, AI Video Ads, Branding, Digital Growth.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outkast Studios | Creative Growth Studio",
    description:
      "We help businesses grow with premium website development, AI video advertising, branding, social media management and Meta Ads.",
    images: ["https://outkast-studio.vercel.app/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "FOuUKFwrdb0KIo-LUtIINkVlE3tssKswWiTSDRUuvCk",
  },
  manifest: "/manifest.webmanifest",
};

/* A custom viewport export replaces Next's default rather than extending it,
   so width/initialScale have to be restated here. Without them no viewport
   meta is emitted at all and phones render the page at their ~980px fallback
   width, then scale it down — the desktop layout, shrunk to nothing. */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7C1117",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="bg-[#7C1117] text-[#F8F3EF] antialiased selection:bg-[#D03412] selection:text-white relative">
        <LoadingScreen />
        <IdleAnimations />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
