/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],


  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },

      boxShadow: {
        'custom': '0px 4px 65px 1px #00072B36', // Custom box shadow
      },
    },
  },
  plugins: [],

};






