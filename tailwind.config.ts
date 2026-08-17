import type { Config } from "tailwindcss";

// Devil Insurance brand palette — oxblood/deep true-crimson, gold, warm charcoal.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Warm charcoal backgrounds
        charcoal: {
          DEFAULT: "#17120F",
          surface: "#241A15",
          light: "#3A2A22",
          800: "#100E0C",
        },
        // Oxblood / deep true-crimson primary
        flame: {
          DEFAULT: "#AB0428",
          light: "#C5042E",
          dark: "#7D041C",
        },
        // Gold accent
        "devil-gold": "#FFCB05",
        "devil-maroon": "#AB0428",
        "devil-dark": "#17120F",
        // Warm stone neutrals
        steel: {
          DEFAULT: "#C4B4A6",
          light: "#E6DBCF",
          dark: "#9A8878",
        },
        // Keep sage for accent use
        sage: {
          DEFAULT: "#C4B4A6",
          light: "#E6DBCF",
          dark: "#9A8878",
        },
        bone: "#fdf8f2",
        caution: "#FFCB05",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "hazard-stripes":
          "repeating-linear-gradient(45deg, #241A15, #241A15 12px, #17120F 12px, #17120F 24px)",
        "steel-sheen":
          "linear-gradient(135deg, #241A15 0%, #3A2A22 50%, #100E0C 100%)",
        "sand-fade":
          "linear-gradient(180deg, #fdf8f2 0%, #F1EAE0 100%)",
      },
      borderRadius: {
        xl: "0.875rem",
      },
    },
  },
  plugins: [],
};

export default config;
