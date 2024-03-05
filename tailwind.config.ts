import { Manrope } from 'next/font/google';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grayf4: "#f4f4f4",
        grayfc: "#fcfcfc",
        grayf7: "#F7F7F7",
        primaryText: "#11142D",
        gray80: "#808191",
        primary: "#475BE8",
        secondary: "#2ED480",
        purpleda: "#DADEFA",
      },
      spacing: {
        c10: "10px"
      },
      boxShadow: {
        dropdown: "0px 25px 50px 0px rgba(91, 88, 88, 0.15)"
      }
    },
  },
  plugins: [],
}