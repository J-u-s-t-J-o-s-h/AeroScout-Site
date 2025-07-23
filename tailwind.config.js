/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        flagRed: "#C62828",
        parchment: "#F5F5DC",
        oldGold: "#B39264",
        midnight: "#0A0A0A",
        oldNavy: "#003366",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        stencil: ['"Special Elite"', 'serif'],
      },
      animation: {
        floatUp: 'floatUp 3s ease-in-out infinite',
        fadeIn: 'fadeIn 1.2s ease-out',
        eagleFlyIn: 'eagleFlyIn 1.5s ease-out forwards',
      },
      keyframes: {
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        eagleFlyIn: {
          '0%': { 
            transform: 'scale(0.3) rotate(-15deg) translateY(-50px)',
            opacity: 0 
          },
          '50%': { 
            transform: 'scale(1.1) rotate(-5deg) translateY(-10px)',
            opacity: 0.8 
          },
          '100%': { 
            transform: 'scale(1) rotate(0deg) translateY(0)',
            opacity: 1 
          },
        },
      },
    },
  },
  plugins: [],
}