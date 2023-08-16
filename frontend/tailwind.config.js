/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Allison': ['Allison'],
      'Jost': ['Jost']
    },
    extend: {
      display: ['responsive'],
      screens: {
        'xs': '300px'
      },
      gridTemplateColumns: {
        sidebar: "300px auto", // 👈 for sidebar layout. adds grid-cols-sidebar class
      },
      gridTemplateRows: {
        header: "64px auto", // 👈 for the navbar layout. adds grid-rows-header class
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
