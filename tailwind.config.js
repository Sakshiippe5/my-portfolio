/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Dark blue for professionalism
        accent: '#3B82F6', // Blue accent for buttons/links
        bgLight: '#F9FAFB', // Light background
        bgDark: '#111827', // Dark mode option if we add later
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern font
      },
    },
  },
  plugins: [],
};