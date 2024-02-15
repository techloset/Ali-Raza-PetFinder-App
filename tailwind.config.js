/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    }
  },
  theme: {
    extend: {
      screens:{
          'xx': {'min':'200px', 'max':'640px'},
          'bug': {'min':'750px', 'max':'767px'},
          'footerbug': {'min':'1000px', 'max':'1320px'},
          'footerbug2': {'min':'1027px', 'max':'1220px'}
      },
      

      colors: {
        purp:'#6504b5;',
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
      fontFamily: {
        arial : ['Arial']
      }
     
    },
  },
  plugins: [],
}

