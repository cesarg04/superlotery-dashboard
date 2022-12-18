/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }, 
      colors:{
        dark: "#1F2937"
      },
      fontFamily:{
        title: ['Nunito', 'sans-serif'],
        content: ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar')
  ],
}