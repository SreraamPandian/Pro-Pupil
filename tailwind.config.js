/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'propupil-blue': '#00a1e4',
        'propupil-green': '#00a65a',
        'propupil-teal': '#00c0ef',
        'propupil-header': '#007ba7',
        'propupil-sidebar': '#222d32',
        'propupil-sidebar-text': '#b8c7ce',
        'propupil-sidebar-hover': '#1e282c',
        'propupil-bg': '#ecf0f5',
        'propupil-dark-blue': '#2c3e50',
      },
    },
  },
  plugins: [],
}
