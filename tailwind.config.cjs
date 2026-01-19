/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
          dark: '#6D28D9',
        },
        accent: {
          DEFAULT: '#06B6D4',
          light: '#22D3EE',
        },
        dark: {
          DEFAULT: '#0F172A',
          card: '#1E293B',
          border: '#334155',
        },
      },
    },
  },
  plugins: [],
}