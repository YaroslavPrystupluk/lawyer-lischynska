/** @type {import('tailwindcss').Config} */

import {
    black,
    white,
    transparent,
    slate,
    cyan,
    red,
    green,
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
            green,
            // primary: "#D0AC83",
            primary: "#538EA6",
            secondary: "#C7C9D8",
        },

        extend: {
            fontFamily: {
                sans: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [],
};
