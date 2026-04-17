/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"], // aponta para HTML e JS
  theme: {
    extend: {
      colors: {
        'bg-dark': '#071113',
        'accent-primary': '#6366f1',
        'accent-secondary': '#fbbf24',
        'accent-tertiary': '#10b981',
        'white-5': 'rgba(255,255,255,0.05)',
        'white-10': 'rgba(255,255,255,0.1)',
      },
      fontFamily: {
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
   plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },

};

