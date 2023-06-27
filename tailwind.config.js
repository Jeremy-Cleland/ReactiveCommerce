/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ChillaxExtraLight: ["Chillax-ExtraLight", "sans-serif"],
      ChillaxLight: ["Chillax-Light", "sans-serif"],
      ChillaxRegular: ["Chillax-Regular", "sans-serif"],
      ChillaxMedium: ["Chillax-Medium", "sans-serif"],
      ChillaxSemiBold: ["Chillax-SemiBold", "sans-serif"],
      ChillaxBold: ["Chillax-Bold", "sans-serif"],
    },
    extend: {
      colors: {
        dark: {
          50: "#f4f6f7",
          100: "#e2e5e9",
          // 200: "#232323",
          300: "#202020",
          400: "#1d1d1d",
          // 500: "#0E0E0E",
          600: "#171717",
          // 700: "#111111",
          800: "#1d1d1d",
          900: "#141414",
          // 950: "#121212",
          // 1000: "#0d0d0d",
        },
      },
    },
    plugins: [],
  },
};
