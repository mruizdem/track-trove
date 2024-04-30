/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": '640px',
      "md": '768px',
      "lg": '1280px',
      "xl": '1920px',
      "2xl": '2560px',
      "3xl": '3440px',
    },
    extend: {},
  },
  plugins: [],
}

