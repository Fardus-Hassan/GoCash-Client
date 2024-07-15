/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        pmColor : "#badc58",
        secColor: "#A3CB38"
      },
      fontFamily : {
        poppins : ["Poppins", "sans-serif"],
        montserrat : ["Montserrat", "sans-serif"]
      },
      screens: {
        'xs': {'max': '320px'},
      },
    },
  },
  plugins: [],
}