/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'sage': {
          100: '#9dc183',
          200: '#7d9a68',
          300: '#5e734e',
          400: '#3e4d34',
          500: '#1f261a',
        },
      },
      fontFamily: {
        'montserrat' : "Montserrat",
        'junge' : "Junge"
      },
      screens: {
        'phone': '480px',
  
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}

