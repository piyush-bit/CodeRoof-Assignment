/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'garet': ['Garet-Book', 'ui-sans-serif', 'system-ui'],
        'garet-heavy': ['Garet-Heavy', 'ui-sans-serif', 'system-ui'],
        'glacial': ['GlacialIndifference', 'sans-serif'],
        // You can define more font families if needed
      },
    },
  },
  plugins: [],
}

