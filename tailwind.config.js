/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        darkRed:"#BC1823",
        darkBlack:"#313638",
        darKblue: "#3F0071",
        carRed:"#FF1616",
        valentineRed: "#FB2576",
        lightOrange: "#C7493A",
        darkOrange: "#A33327"
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
        serif: ['Lora', 'serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
