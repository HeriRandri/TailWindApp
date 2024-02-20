/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "340px",
      // => @media (min-width: 340px) { ... }

      md: "624px",
      // => @media (min-width: 624px) { ... }

      lg: "1080px",
      // => @media (min-width: 1080px) { ... }
    },
  },
  plugins: [],
};
