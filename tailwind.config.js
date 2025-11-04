/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
      },
      colors: {
        blue: {
          400: '#60a5fa',
          600: '#2563eb',
        }
      }
    },
  },
  safelist: [
    'py-4',
    'px-6',
    'py-8',
    'px-8',
    'bg-blue-600',
    'hover:bg-blue-400',
    'cursor-pointer',
    'inline-block',
    'block'
  ]
}