/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',  // Customize small screens
      'md': '993px',  // Customize medium screens
      'lg': '1024px', // Customize large screens
      'xl': '1280px', // Customize extra-large screens
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}