/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ['bg-zinc-200', 'text-zinc-900'],
  theme: {
    extend: {},
  },
  plugins: [],
}

