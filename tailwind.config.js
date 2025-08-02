/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'custom-brown': '#80471c',
        'custom-hover': '#652a0e',
        'custom-active': '#a14217'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #f5f0e1 0%, #e6e2d3 100%)'
      }
    }
  },
  plugins: []
}