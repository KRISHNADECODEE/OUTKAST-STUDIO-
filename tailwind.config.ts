import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#7C1117",
        surface: "#8D161D",
        accent: "#D03412",
        textPrimary: "#F8F3EF",
        dark: "#111111",
        kraft: "#D4B896",
      },
      fontFamily: {
        editorial: ["var(--font-editorial)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        brush: ["var(--font-brush)", "cursive"],
        handwritten: ["var(--font-handwritten)", "cursive"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
