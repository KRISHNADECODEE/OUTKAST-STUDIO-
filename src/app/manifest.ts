import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OUTKAST STUDIOS — Creative Growth Studio",
    short_name: "OUTKAST",
    description:
      "Outkast Studios is a creative growth studio building brands that get noticed, digital experiences that build trust, and creative campaigns that move businesses forward.",
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
