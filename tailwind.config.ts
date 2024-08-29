import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bonaNova: ["var(--font-bonaNova)"],
        cormorant: ["var(--font-cormorant)"],
        arial: ["var(--font-arial)"],
      },
      colors: {
        primary: "#4D1513",
        dark: "#0F0F0F",
        gray: "gray",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2.5rem",
          xl: "5rem",
          "2xl": "7rem",
        },
        screens: {
          'sm': '576px',

          'md': '768px',
    
          'lg': '1024px',
    
          'xl': '1280px',

          "2xl": "1440px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
