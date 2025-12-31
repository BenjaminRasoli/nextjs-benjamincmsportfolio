import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        black: "#000000",
        secondary: "#060918",
        tertiary: "#4F46E5",
        white: "#FFFFFF",
      },
      fontSize: {
        h1: ["2.25rem", { lineHeight: "2.5rem", fontWeight: "bold" }],
        h2: ["1.875rem", { lineHeight: "2.25rem" }],
        h3: ["1.5rem", { lineHeight: "2rem" }],
        h4: ["1.3rem", { lineHeight: "1.75rem" }],
        h5: ["1.1rem", { lineHeight: "1.55rem" }],
        p: ["1rem", { lineHeight: "1.35rem" }],
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "custom-lg": "1100px",
    },
  },
  plugins: [],
} satisfies Config;
