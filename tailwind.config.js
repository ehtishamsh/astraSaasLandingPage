/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: {
          100: "#f1e9f8",
          200: "#ddcdef",
          300: "#be9fdf",
          400: "#9871c9",
          500: "#7151ac",
          600: "#50388a",
          700: "#34235c",
          800: "#160f22",
          900: "#0f0b19",
          950: "#0a0711",
        },
      },
    },
  },
  plugins: [],
};
