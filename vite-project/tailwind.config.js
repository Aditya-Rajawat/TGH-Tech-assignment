/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      'xsm': {'max': '360px'},
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      boxShadow: {
        '3xl': '2px 4px 10px 2px #00000040',
      }
    },
  },
  plugins: [],
}



