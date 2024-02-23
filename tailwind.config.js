/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#7B8FF4",
      }
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'great-vibes': ['Great Vibes', 'cursive']
    },
  },
  plugins: [],
 
}

