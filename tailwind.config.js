/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-20px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
            
        },
        'fade-r-l': {
            '0%': {
                opacity: '0',
                transform: 'translateX(20px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateX(0)'
            },
            
        },
        'fade-l-r': {
            '0%': {
                opacity: '0',
                transform: 'translateX(-20px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateX(0)'
            },
            
        }
    },
    animation: {
        'fade-in-down': 'fade-in-down 0.8s ease-in-out',
        'fade-r-l': 'fade-r-l 1.8s ease-out',
        'fade-l-r': 'fade-l-r 1.5s ease-out',
    },
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
