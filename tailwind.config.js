/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        accent: '#6366F1',
        bgDark: '#0F172A',
        textLight: '#E2E8F0',
        textMuted: '#94A3B8',
        gradientStart: '#8B5CF6',
        gradientEnd: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};