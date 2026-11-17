import { MetadataRoute } from "next";
import { BUSINESS_CONFIG } from "@/lib/business-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/haridwar/",
          "/rishikesh/",
          "/website-development-haridwar/",
          "/website-development-rishikesh/",
          "/social-media-management-haridwar/",
          "/social-media-management-rishikesh/",
          "/branding-agency-haridwar/",
          "/ai-video-advertising/",
          "/work/",
          "/blog/",
        ],
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BUSINESS_CONFIG.canonicalUrl}/sitemap.xml`,
  };
}
