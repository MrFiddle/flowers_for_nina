/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(5.0deg)" },
          "20%": { transform: "rotate(-2.0deg)" },
          "30%": { transform: "rotate(5.0deg)" },
          "40%": { transform: "rotate(-1.0deg)" },
          "50%": { transform: "rotate(2.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        zoomInOut: {
          "0%": { transform: "scale(1.0)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1.0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        wave: "wave 1s ease-in-out infinite",
        zoomInOut: "zoomInOut 1s ease-in-out infinite",
        fadeIn: "fadeIn 2s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
