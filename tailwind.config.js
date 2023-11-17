/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'false',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        tb: "768px",
        sm: "1024px",
        md: "1366px",
        lg: "1920px",
        xl: "1440px",
      },

      colors: {
        primary: "#d9000d",
        primary_lite: "#f52330",
        gray: {
          medium: "#acacac",
          card: "#F6F6F6",
          dark: "#e1dada",
        },
        blue: {
          ligth: "#9cddff",
          medium: "#171e28",
          dark: "#121921",
          sky: "#9cddff"
        },
        yellow: {
          hover: "#fcf3b2",
          dark: "#ef8908",
        },
        green: {
          primary: "#69b21b",
        },
        black: {
          header: "#2e2e2d",
        },
      },
      fontFamily: {
        regular: ["Montserrat-Regular", "regular"],
        medium: ["Montserrat-Medium", "medium"],
        semibold: ["Montserrat-Medium", "semibold"],
        bold: ["Montserrat-Medium", "bold"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
