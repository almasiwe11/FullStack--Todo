/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "des-light": 'url("/bg-desktop-light.jpg")',
        "mob-light": 'url("/bg-mobile-light.jpg")',
        "des-dark": 'url("/bg-desktop-dark.jpg")',
        "mob-dark": 'url("/bg-mobile-dark.jpg")',
      },

      colors: {
        "dark-blue": "#171823",
        "gray-text": "#5B5E7E",
        "gray-menu": "#979797",
        "white-menu": "#C8CBE7",
        "gray-border-dark": "#393A4B",
        "gray-border-light": "#E3E4F1",
        selected: "#3A7CFD",
      },

      gridTemplateColumns: {
        field: "auto, 1fr",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },
  plugins: [],
}
