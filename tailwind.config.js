/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  theme: {
    extend: {
      screens:{
          'xx': {'min':'200px', 'max':'640px'},
          'bug': {'min':'750px', 'max':'767px'}
      },
      // backgroundImage:{
      //   'hero-image':"url('../../../assets/images/HeroIcons/photo-1623387641168-d9803ddd3f35.avif')"
      // },

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

