module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Gotham',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      borderRadius: {
        xl: '1rem', 
      },
    },
  },
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
};