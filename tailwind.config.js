/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fdf4e7',
          100: '#fbe8cf',
          200: '#f7d19f',
          300: '#f3ba6f',
          400: '#efa33f',
          500: '#eb8c0f',
          600: '#bc700c',
          700: '#8d5409',
          800: '#5e3806',
          900: '#2f1c03',
        },
        secondary: {
          50: '#e6f0eb',
          100: '#cde1d7',
          200: '#9bc3af',
          300: '#69a587',
          400: '#37875f',
          500: '#056937',
          600: '#04542c',
          700: '#033f21',
          800: '#022a16',
          900: '#01150b',
        },
        terracotta: {
          50: '#fbeae6',
          100: '#f7d5cd',
          200: '#efab9b',
          300: '#e78169',
          400: '#df5737',
          500: '#d72d05',
          600: '#ac2404',
          700: '#811b03',
          800: '#561202',
          900: '#2b0901',
        },
      },
    },
  },
  plugins: [],
};