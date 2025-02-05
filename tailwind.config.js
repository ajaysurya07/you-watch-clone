/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
           primary: "#0c0c0c",
           shade :"#282828"
      }
    },
    container:{
      padding : {
          default : "1rem",
          sm:"2rem",
          md:"3rem",
          lg:"4rem",
          xl:"5rem",
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

