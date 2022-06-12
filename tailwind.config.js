module.exports = {
  important: true,
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0BC05D',
          normal: '#3ECC7C',
          light: '#86E0AE',
        },
        mono: {
          dark: '#000000',
          normal: '#595959',
          light: '#808080',
          lightest: '#ECECEC',
        },
        pepper: {
          normal: '#E2E2E2',
          light: '#F3F3F3',
        },
        action: {
          normal: '#2363AF',
        },
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
    },
  },
  plugins: [],
}
