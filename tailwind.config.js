/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Roboto':['Roboto','sans-serif'],
        'Arima': ['Arima', 'system-ui'],
      }
    },
  },
  plugins: [],
}

