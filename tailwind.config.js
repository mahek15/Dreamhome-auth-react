/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue' : '#0984E3',
      },
      backgroundImage:{
          // 'hero-background': "url('../../assets/hero.svg')",
      }
    },
    container:{
      center: true,
    }
  },
  plugins: [],
}