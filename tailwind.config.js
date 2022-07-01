/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '480px'},
        'nomobile': {'min': '480px'},
        'sm': {'min': '480px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px'},
      },
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
