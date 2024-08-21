/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_prime: "#131129",
        dark_sec: "#1D1932",
        dark_btn: "#6F4FF2",
      },
    },
  },
  plugins: [],
};

