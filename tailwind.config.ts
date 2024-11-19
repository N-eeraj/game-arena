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
        background: "#171515",
        foreground: "#cfc3c7",
        accent: "#ac1236",
      },
      fontFamily: {
        hemi: ['var(--font-hemi-head)'],
        blinker: ['var(--font-blinker)'],
      },
    },
  },
  plugins: [],
};
export default config;
