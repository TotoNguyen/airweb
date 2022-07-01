/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-app-bg': '#E5E5E5',
        'gray-button-bg': '#4F4F4F',
        'gray-total-bg': '#DADADA',
        'gray-price-bg': '#EDEDED',
        'gray-title': '#535353',
        'gray-text': '#DEDEDE',
        'black-text': '#292929',
      },
    },
  },
  plugins: [],
}
