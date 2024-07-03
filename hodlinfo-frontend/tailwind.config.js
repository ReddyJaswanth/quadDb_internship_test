/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif", "Oswald"],
    },
    extend: {
      colors: {
        "hodlinfo-dark": "#191d28",
        "primary-color": "#3dc6c1",
        "secondary-color": "#2e3241",
      },
    },
  },
  plugins: [],
};
