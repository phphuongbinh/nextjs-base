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
        primaryText: "#11142D",
        gray80: "#808191",
        primary: "#475BE8",
        secondary: "#DADEFA"
      },
      spacing: {
        c10: "10px"
      }
    },
  },
  plugins: [],
}