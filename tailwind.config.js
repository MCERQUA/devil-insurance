/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        foreground: "#1A0A0F",
        "muted-foreground": "#6B5B5F",
        border: "#E8DCDC",
        maroon: {
          dark: "#5C0A1E",
          DEFAULT: "#8B1538",
          light: "#B01E45",
          pale: "#F5F0F0",
        },
        gold: {
          DEFAULT: "#C8A42A",
          dark: "#A88520",
          light: "#E4C050",
          pale: "#FBF6E6",
        },
        primary: { DEFAULT: "#8B1538", foreground: "#FFFFFF" },
        accent: { DEFAULT: "#C8A42A", foreground: "#1A0A0F" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Barlow Condensed", "Impact", "ui-sans-serif"],
        body: ["var(--font-body)", "Barlow", "Inter", "ui-sans-serif"],
      },
      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
      },
      spacing: { 4.5: "1.125rem", 18: "4.5rem" },
      opacity: { 8: "0.08", 12: "0.12", 15: "0.15", 85: "0.85" },
      boxShadow: {
        card: "0 2px 8px rgba(139,21,56,0.12)",
        lift: "0 8px 30px rgba(139,21,56,0.18)",
      },
      maxWidth: { "7xl": "80rem" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
