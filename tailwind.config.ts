import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2C4A",
          light: "#1E4666",
          dark: "#081A2E",
        },
        teal: {
          DEFAULT: "#14919B",
          light: "#E4F4F4",
          dark: "#0C6E76",
        },
        orange: {
          DEFAULT: "#FF5A1F",
          light: "#FFE9DE",
          dark: "#E04A12",
        },
        cream: "#FAF8F3",
        ink: "#16243A",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        kenburns: "kenburns 7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
