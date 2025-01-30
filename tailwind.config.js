module.exports = {
  darkMode: 'class',
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      backgroundColor: {
        'light': '#f3f4f6',
        'dark': '#111827',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      zIndex: {
        'hover': '30',
      }
    },
  },
  plugins: [],
};
