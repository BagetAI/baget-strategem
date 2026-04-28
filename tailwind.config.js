/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,tsx,mdx}",
    "./components/**/*.{js,ts,tsx,mdx}",
    "./app/**/*.{js,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0F172A",
        copper: "#B45309",
        parchment: "#F8FAFC",
        slate: "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-playfair)"],
        mono: ["var(--font-jetbrains)"],
      },
      borderRadius: {
        '3xl': '24px',
      }
    },
  },
  plugins: [],
};