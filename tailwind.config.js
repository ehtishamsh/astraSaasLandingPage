/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        borderMainColor: "rgba(255, 255, 255, 0.1)",
        customGray: "rgb(31, 25, 41)",
        textColor: "rgb(243, 236, 254)",
        mainColor: {
          100: "#f1e9f8",
          200: "#ddcdef",
          300: "#be9fdf",
          400: "#9871c9",
          500: "#7151ac",
          600: "#50388a",
          700: "rgb(53, 37, 79)",
          800: "rgb(22, 15, 34)",
          900: "#0f0b19",
          950: "#0a0711",
        },
      },
    },
  },
  plugins: [],
};
