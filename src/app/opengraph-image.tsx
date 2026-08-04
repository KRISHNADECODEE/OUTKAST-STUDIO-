import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

/* ==========================================================================
   15. OPEN GRAPH IMAGE — 1200x630
   Rendered at build time, so it needs no fonts or assets at runtime.
   ========================================================================== */

export const alt =
  "OUTKAST STUDIO — Creative Websites. AI Advertising. Brand Building.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Marker wordmark as a standalone SVG (pure paths, no font needed).
   Base64-encoded below — Satori will not parse a percent-encoded SVG URI. */
const WORDMARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 300" width="900" height="300">
<g fill="none" stroke="#F8F3EF" stroke-linecap="round" stroke-linejoin="round">
<path d="M88 116c34 0 56 36 55 78-1 42-22 76-55 76s-56-34-57-76c-1-42 23-78 57-78Z" stroke-width="30"/>
<path d="M62 168c9 7 11 18 8 28" stroke-width="11"/>
<path d="M178 138c-2 44-5 78 11 96 14 16 38 12 45-10 6-22 6-58 8-92" stroke-width="30"/>
<path d="M258 122c34-10 76-14 108-8" stroke-width="24"/>
<path d="M312 118c-2 44-4 80-6 110" stroke-width="28"/>
<path d="M400 104c-2 44-4 82-6 116" stroke-width="28"/>
<path d="M396 172c26-26 52-52 74-72" stroke-width="24"/>
<path d="M400 176c24 20 48 42 68 60" stroke-width="26"/>
<path d="M508 218c14-46 30-90 44-122" stroke-width="26"/>
<path d="M554 96c14 34 28 76 40 120" stroke-width="26"/>
<path d="M524 172c20-4 44-6 62-2" stroke-width="14"/>
<path d="M676 74c-24-12-58-8-64 14-6 22 22 34 44 44 22 10 36 26 26 44-10 18-44 20-66 8" stroke-width="26"/>
<path d="M718 58c34-12 80-16 112-8" stroke-width="24"/>
<path d="M772 54c-2 42-4 76-6 104" stroke-width="28"/>
</g></svg>`;

export default async function Image() {
  const statue = await readFile(
    path.join(process.cwd(), "public/assets/greek-statue.jpg")
  );
  const statueUri = `data:image/jpeg;base64,${statue.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#7C1117",
        }}
      >
        {/* Statue panel, right half */}
        <img
          src={statueUri}
          width={660}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 660,
            height: 630,
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 700,
            height: 630,
            display: "flex",
            backgroundImage:
              "linear-gradient(90deg, #7C1117 0%, rgba(124,17,23,0.94) 22%, rgba(124,17,23,0.6) 52%, rgba(124,17,23,0.18) 100%)",
          }}
        />

        {/* Copy block, left */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 64px",
            width: 760,
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 6,
              color: "#D03412",
              fontWeight: 700,
              marginBottom: 28,
            }}
          >
            OUTKAST STUDIO
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 66,
              lineHeight: 1.08,
              fontWeight: 800,
              color: "#F8F3EF",
              letterSpacing: -2,
            }}
          >
            <span>CREATIVE WEBSITES.</span>
            <span>AI ADVERTISING.</span>
            <span>BRAND BUILDING.</span>
          </div>

          <div
            style={{
              display: "flex",
              width: 220,
              height: 6,
              backgroundColor: "#D03412",
              marginTop: 36,
              marginBottom: 36,
            }}
          />

          <img
            src={`data:image/svg+xml;base64,${Buffer.from(WORDMARK).toString("base64")}`}
            width={330}
            height={110}
            style={{ width: 330, height: 110 }}
          />
        </div>
      </div>
    ),
    size
  );
}
