import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f5f7fa",
          100: "#e6ebf2",
          200: "#c3cedc",
          300: "#97a8be",
          400: "#65798f",
          500: "#435870",
          600: "#304258",
          700: "#1f2d3e",
          800: "#151f2d",
          900: "#0c131d",
          950: "#060a11",
        },
        gold: {
          50: "#fbf7ed",
          100: "#f5ead0",
          200: "#ead29b",
          300: "#dfb964",
          400: "#d4a43f",
          500: "#b98827",
          600: "#9a6f1f",
          700: "#7a581d",
          800: "#5c431a",
          900: "#3f2f14",
        },
        ivory: {
          50: "#fdfcf8",
          100: "#faf6ec",
          200: "#f3ecd8",
          300: "#ebdfb9",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fade-in 0.7s ease-out forwards",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "slide-in-right": "slide-in-right 0.4s ease-out forwards",
        shine: "shine 3s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(-8px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        shine: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gold-shine":
          "linear-gradient(120deg, rgba(212,164,63,0) 0%, rgba(212,164,63,0.25) 50%, rgba(212,164,63,0) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
