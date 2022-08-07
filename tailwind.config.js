/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'myBlack': '#000000',
        'darkBlue': '#14213d',
        'mutedYellow': '#fdff74',
        'lightGray': '#e5e5e5',
        'myWhite': '#ffffff',
      },
      fontFamily: {
        boxing: ['Boxing', 'sans-serif'],
        averia: ['Averia Libre', 'cursive'],
        elite: ['Special Elite', 'cursive'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
