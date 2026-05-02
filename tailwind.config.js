/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // Next.js App Router-er jonno
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",    // Pages folder thakle
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Components folder thakle
    "./src/**/*.{js,ts,jsx,tsx,mdx}",      // src folder thakle
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};