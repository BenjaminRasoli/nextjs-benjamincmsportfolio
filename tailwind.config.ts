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
        primary: "#1D3557",
        secondary: "#FFFFFF",
        tertiary: "#4F46E5",
        fourth: "#000000"
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
