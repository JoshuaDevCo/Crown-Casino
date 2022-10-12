/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        'layout': [
          'nav   header header ',
          'nav    main   main  ',
          'nav    main   main  ',
        ],
      },
      gridTemplateColumns: {
        'layout': '1fr 3fr 2fr',
      },
      gridTemplateRows: {
        'layout': '6rem 3rem 1fr auto',
      },
    },
    fontFamily: {
      mont: ['Montserrat', 'sans-serif']
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}
