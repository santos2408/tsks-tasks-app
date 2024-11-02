/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        "brand-white": "rgb(var(--brand-white))",
        "brand-black": "rgb(var(--brand-black))",

        "brand-primary": {
          50: "rgb(var(--brand-primary-50))",
          100: "rgb(var(--brand-primary-100))",
          200: "rgb(var(--brand-primary-200))",
          300: "rgb(var(--brand-primary-300))",
          400: "rgb(var(--brand-primary-400))",
          500: "rgb(var(--brand-primary-500))",
          600: "rgb(var(--brand-primary-600))",
          700: "rgb(var(--brand-primary-700))",
          800: "rgb(var(--brand-primary-800))",
          900: "rgb(var(--brand-primary-900))",
        },

        "brand-secondary": {
          50: "rgb(var(--brand-secondary-50))",
          100: "rgb(var(--brand-secondary-100))",
          200: "rgb(var(--brand-secondary-200))",
          300: "rgb(var(--brand-secondary-300))",
          400: "rgb(var(--brand-secondary-400))",
          500: "rgb(var(--brand-secondary-500))",
          600: "rgb(var(--brand-secondary-600))",
          700: "rgb(var(--brand-secondary-700))",
          800: "rgb(var(--brand-secondary-800))",
          900: "rgb(var(--brand-secondary-900))",
        },

        "brand-neutral": {
          50: "rgb(var(--brand-neutral-50))",
          100: "rgb(var(--brand-neutral-100))",
          200: "rgb(var(--brand-neutral-200))",
          300: "rgb(var(--brand-neutral-300))",
          400: "rgb(var(--brand-neutral-400))",
          500: "rgb(var(--brand-neutral-500))",
          600: "rgb(var(--brand-neutral-600))",
          700: "rgb(var(--brand-neutral-700))",
          800: "rgb(var(--brand-neutral-800))",
          900: "rgb(var(--brand-neutral-900))",
        },
      },
    },
  },
  plugins: [],
};
