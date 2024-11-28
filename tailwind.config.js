/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'back25': '#252525',
        'yellowFFD': '#FFD529',
        'blu055': '#0558A6',
        'blu02DB': '#2DBEFC',
        'blu008': '#0084CC',
        'bluB5E': '#B5E8FD',
        'green50C': '#50C557',
        'greenC4E': '#C4EACE',
        'black00':'#000000',
        'gray88':'#888888',
        'back45':'#454545',
        'redFF0':'#FF0000',
        'orangeFFB':'#FFB469',
        'orangeE57':'#E57709',
        'orangef8e':'#f8e0c8',
      },
      fontFamily: {
        'Roboto':['Roboto','sans-serif'],
        'Arima': ['Arima', 'system-ui'],
      },
      padding: {
        '13': '0.8125rem',
        '6px': '0.375rem',
      },
      fontSize: {
        '18': '1.125rem',
        '32': '2rem',
        '28': '1.75rem',
        '26': '1.625rem',
        '22': '1.375rem',
      },
      margin: {
        '88': '5.5rem',
        '01': '0.625rem',
        '224': '14rem',
      },
      lineHeight: {
        '44': '2.75rem',
      },
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px', 
        lg: '1024px',
        xl: '1280px',
        '2xl': '1408px',
      },
    },
  },
  plugins: [
  ],
}

