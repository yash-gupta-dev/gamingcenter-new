/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "border": "var(--border)",
        "gray": "var(--gray)",
        "gray-light": "var(--gray-light)",
        "custom-red": "var(--red)",
      },
      fontSize: {
        xxs: "0.60rem",
      },
    },
  },
  plugins: [],
}

