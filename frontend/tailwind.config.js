/** @type {import('tailwindcss').Config} */

const primaryColor = "#1aac83";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: { DEFAULT: primaryColor },
        error: { DEFAULT: "#e7195a", bg: "#ffefef" },
      },
    },
  },
  plugins: [],
};
