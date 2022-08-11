/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#CBBEE7",
        "primary-2": "#8B949E",
        "primary-3": "#242C37",
        "primary-4": "#161B22",
        "primary-5": "#0D1117",
        "primary-6": "#ACB4FE",
        "primary-7": "#CDD0F3",

        "primary-1-light": "#242C37",
        "primary-2-light": "#CDD0F3",
        "primary-3-light": "#ACB4FE",
        "primary-4-light": "#AE88FE",
        "primary-5-light": "#E1E3F9",
        "primary-6-light": "#212121",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
  darkMode: ["class"],
}
