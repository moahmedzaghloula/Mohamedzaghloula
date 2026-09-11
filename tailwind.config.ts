import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#07111B",
          900: "#0B121A",
          850: "#0F1720",
          800: "#132131",
        },
        signal: {
          red: "#FF4655",
          blue: "#3B82F6",
          yellow: "#FACC15",
          green: "#22C55E",
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', "Impact", "sans-serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        hand: ['"Caveat"', "cursive"],
        mono: ['"SFMono-Regular"', "Consolas", '"Liberation Mono"', "monospace"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(59, 130, 246, 0.18)",
        red: "0 20px 60px rgba(255, 70, 85, 0.2)",
      },
      backgroundImage: {
        "technical-grid":
          "linear-gradient(rgba(148, 163, 184, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.055) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
