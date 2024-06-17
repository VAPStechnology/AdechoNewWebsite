/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
    
      },

      fontFamily:{
        Poppins:["Poppins", 'sans-serif'],
        sans:["Noto Sans", 'sans-serif']
      },
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

