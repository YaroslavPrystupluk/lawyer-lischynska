/** @type {import('tailwindcss').Config} */

import {
  black,
  white,
  transparent,
  slate,
  cyan,
  red,
} from "tailwindcss/colors";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1399px",
    },
    colors: {
      black,
      white,
      slate,
      cyan,
      transparent,
      red,
      primary: "#D0AC83",
      secondary: "#DBDDE9",
    },

    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
