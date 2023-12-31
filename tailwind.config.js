/** @type {import('tailwindcss').Config} */

// import defaultTheme from "tailwindcss/defaultTheme";

// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");
import tailwindFormPlugin from "@tailwindcss/forms";

export default {
  darkMode: ["class", '[class="dark-mode"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["Vazirmatn", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ["app-bg-color"]: "rgba(var(--background-app-rgb) / <alpha-value>)",
        primary: {
          900: "rgba(var(--color-primary-900) / <alpha-value>)",
          800: "rgb(var(--color-primary-800) / <alpha-value>)",
          700: "rgb(var(--color-primary-700) / <alpha-value>)",
          600: "rgb(var(--color-primary-600) / <alpha-value>)",
          500: "rgb(var(--color-primary-500) / <alpha-value>)",
          400: "rgb(var(--color-primary-400) / <alpha-value>)",
          300: "rgb(var(--color-primary-300) / <alpha-value>)",
          200: "rgb(var(--color-primary-200) / <alpha-value>)",
          100: "rgb(var(--color-primary-100) / <alpha-value>)",
          50: "rgb(var(--color-primary-50) / <alpha-value>)",
          0: "rgb(var(--color-primary-0) / <alpha-value>)",
        },
        secondary: {
          900: "rgba(var(--color-secondary-900) / <alpha-value>)",
          800: "rgb(var(--color-secondary-800) / <alpha-value>)",
          700: "rgb(var(--color-secondary-700) / <alpha-value>)",
          600: "rgb(var(--color-secondary-600) / <alpha-value>)",
          500: "rgb(var(--color-secondary-500) / <alpha-value>)",
          400: "rgb(var(--color-secondary-400) / <alpha-value>)",
          300: "rgb(var(--color-secondary-300) / <alpha-value>)",
          200: "rgb(var(--color-secondary-200) / <alpha-value>)",
          100: "rgb(var(--color-secondary-100) / <alpha-value>)",
          50: "rgb(var(--color-secondary-50) / <alpha-value>)",
          0: "rgb(var(--color-secondary-0) / <alpha-value>)",
        },
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        // red: {
        //     500: "rgb(var(--color-red-500) / <alpha-value>)",
        //     300: "rgb(var(--color-red-300) / <alpha-value>)",
        // },
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [tailwindFormPlugin({ strategy: "class" })],
};
