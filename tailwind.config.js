/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '500': '500px',
      },
      height: {
        '450': '450px',
        '500': '500px',
      },
      colors: {
        primary: '#064c4f',
        quirkyYellow: '#FAC340',
        randomOrange: '#B15334',
        buttonBackground: '#F1F4EB',
        handleCountBackground: '#BBEA70',
        cta: '#BAE970'
      }
    },
  },
  plugins: [],
}

