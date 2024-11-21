/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./src/*"
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Kích hoạt plugin DaisyUI
};
