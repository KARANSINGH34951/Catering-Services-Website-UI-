/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceInUp: {
          '0%, 60%, 75%, 90%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-30px)',
          },
        },
      },
      animation: {
        bounceInUp: 'bounceInUp 1s ease-in-out', 
      },
    },
    fontFamily: {
      'Playball': ['"Playball", cursive'], 
      'Open Sans': ['"Open Sans", sans-serif'], 
    },
  },
  plugins: [],
};
