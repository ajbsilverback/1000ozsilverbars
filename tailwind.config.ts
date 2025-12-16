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
        // Navy - Primary Accent (institutional, trust)
        navy: {
          50: "#eef3f9",
          100: "#d9e4f1",
          200: "#b3c9e3",
          300: "#8daed5",
          400: "#5a8ac2",
          500: "#3d6fa8",
          600: "#2d5a8a",
          700: "#1e3a5f",
          800: "#152a47",
          900: "#0d1a2d",
          950: "#060d17",
        },
        // Silver/Steel - Secondary Accent (material context)
        silver: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e4e8eb",
          300: "#d1d9e0",
          400: "#a8b4c0",
          500: "#7d8a96",
          600: "#6b7a8a",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
          950: "#0d1117",
        },
        // Bullion palette (light mode - institutional)
        bullion: {
          // Light mode backgrounds
          light: "#f8f9fa",
          lighter: "#ffffff",
          muted: "#f1f3f5",
          subtle: "#e9ecef",
          // Legacy dark (now maps to light)
          dark: "#f8f9fa",
          darker: "#f1f3f5",
          // Navy accents (unchanged)
          navy: "#1e3a5f",
          navyLight: "#2d5a8a",
          navyDark: "#152a47",
          // Silver/steel accents
          silver: "#6b7a8a",
          silverLight: "#a8b4c0",
          silverDark: "#4a5568",
          // Legacy (maps to silver for compatibility)
          gold: "#6b7a8a",
          goldLight: "#a8b4c0",
          accent: "#1e3a5f",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Source Sans 3", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
