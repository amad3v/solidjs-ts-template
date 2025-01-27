/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        display: '"Alegreya", serif',
      },
      typography: {
        smallCaps: {
          css: {
            fontVariant: 'small-caps',
          },
        },
      },
    },
  },
  plugins: [],
};
