/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      animation:{
        "slide-in": "slide"
      },
      colors:{
        'cc' : "#2C7DF2"
      }
    },
  },
  plugins: [],
};
