/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--black)",
        "secondary": "var(--gray)",
        "gray-border": "var(--gray-border)",
        "secondary-light": "var(--gray-light)",
        "custom-red": "var(--red)",
      },
    },
  },
  plugins: [],
}

