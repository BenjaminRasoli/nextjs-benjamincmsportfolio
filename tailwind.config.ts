import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        secondary: "#060918",
        tertiary: "#4F46E5",
        white: "#FFFFFF",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontSize: {
        h1: ["2.25rem", { lineHeight: "2.5rem", fontWeight: "bold" }],
        h2: ["1.875rem", { lineHeight: "2.25rem" }],
        h3: ["1.5rem", { lineHeight: "2rem" }],
        h4: ["1.2rem", { lineHeight: "1.75rem" }],
        p: ["1rem", { lineHeight: "1.5rem" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
