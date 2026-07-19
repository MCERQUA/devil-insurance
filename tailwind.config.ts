import type { Config } from "tailwindcss";

// Devil Insurance brand palette — maroon, gold, dark desert theme.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Devil dark backgrounds
        charcoal: {
          DEFAULT: "#1a0a0d",
          surface: "#2a0e18",
          light: "#3a1020",
          800: "#150608",
        },
        // Maroon primary (was "flame")
        flame: {
          DEFAULT: "#8C1D40",
          light: "#a82050",
          dark: "#6a1530",
        },
        // Gold accent
        "devil-gold": "#FFC627",
        "devil-maroon": "#8C1D40",
        "devil-dark": "#1a0a0d",
        // Muted rose neutrals (was "steel")
        steel: {
          DEFAULT: "#c9a0a8",
          light: "#e0c0c8",
          dark: "#a07888",
        },
        // Keep sage for accent use
        sage: {
          DEFAULT: "#c9a0a8",
          light: "#e0c0c8",
          dark: "#a07888",
        },
        bone: "#fdf8f2",
        caution: "#FFC627",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "hazard-stripes":
          "repeating-linear-gradient(45deg, #2a0e18, #2a0e18 12px, #1a0a0d 12px, #1a0a0d 24px)",
        "steel-sheen":
          "linear-gradient(135deg, #2a0e18 0%, #3a1020 50%, #150608 100%)",
        "sand-fade":
          "linear-gradient(180deg, #fdf8f2 0%, #f0e8e8 100%)",
      },
      borderRadius: {
        xl: "0.875rem",
      },
    },
  },
  plugins: [],
};

export default config;
