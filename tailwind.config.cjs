/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sunset: "#FF6154",
        primary: "#448CE4",
        success: "#16A349",
        error: "#E4352F",
        warning: "#EEB857",
        privy: "#E42E2C",
      },
      dropShadow: {
        card: "0 5px 5px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
