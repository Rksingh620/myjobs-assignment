/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#EDF6FF',
        "secondary": "#303F60",
        "dark": "#1A253C",
        "white": "#FFFFFF",
        "blue": "#43AFFF",
        "light": "#43AFFF33",
        "light-dark": "#4D618E",
        "light-white": "#557DA526",
        "light2": "#EEEFF2"
      }
    },
  },
  plugins: [],
}
