/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hero-yellow': 'rgb(255, 219, 52)',
        'primary-black': 'rgb(33, 38, 44)',
        'dark-grey': 'rgb(61, 70, 89)',
        'primary-white': 'rgb(245, 245, 245)',
      },
      fontFamily: {
        archivo: ['var(--font-archivo)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
