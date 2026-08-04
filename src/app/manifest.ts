import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OUTKAST STUDIO",
    short_name: "OUTKAST",
    description:
      "Creative Websites for Brands That Refuse To Look Ordinary. AI UGC Ads, Meta Ads, Brand Building.",
    start_url: "/",
    display: "standalone",
    background_color: "#7C1117",
    theme_color: "#7C1117",
    icons: [
      { src: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
