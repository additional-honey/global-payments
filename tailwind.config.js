/** @type {import('tailwindcss').Config} */
import tailwindcssDebugScreens from 'tailwindcss-debug-screens'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssDebugScreens],
}
