/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#47AB2C',
        'brand-blue': '#2194F1',
        'brand-red': '#E64A2C',
        'brand-yellow': '#F9B600',
      },
      backgroundColor: {
        'bg-brand-green': '#47AB2C',
        'bg-brand-blue': '#2194F1',
        'bg-brand-red': '#E64A2C',
        'bg-brand-yellow': '#F9B600',
      },
    },
    minHeight: {
      '1/4': '25%',
      '1/2': '50%',
    },
  },
  plugins: [],
}

