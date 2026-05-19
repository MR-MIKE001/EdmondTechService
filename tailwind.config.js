/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040C18',
          900: '#091830',
          800: '#0D2245',
          700: '#163659',
          600: '#1B4677',
          500: '#1F5499',
          400: '#2E6AB8',
        },
        gold: {
          500: '#A67C35',
          400: '#C9A84C',
          300: '#DDB95C',
          200: '#EDD07A',
          100: '#F8EFC4',
        },
        steel: {
          50:  '#F2F6FB',
          100: '#E4EDF7',
          200: '#C8D9EC',
          300: '#A0BBC9',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body:    ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
