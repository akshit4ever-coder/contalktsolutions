/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        secondary: '#FF6B35',
        accent: '#1ECC4B',
        dark: '#001F3F',
      }
    },
  },
  plugins: [],
}
