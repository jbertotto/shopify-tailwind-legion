module.exports = {
  prefix: 'tw-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    /*
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },*/
    fontSize: {
      xs: '1.2rem',
      sm: '1.4rem',
      base: '1.6rem',
      lg: '1.8rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl': '3.6rem',
      '4xl': '4.8rem',
      '5xl': '6rem',
    },
    extend: {
      fontFamily: {
        heading: 'var(--font-heading-family)',
      },
      strokeWidth: {
        1: ' 1.6rem',
        2: '1.8rem',
        3: '2rem',
      },
      height: {
        icon: '3.2rem',
      },
      width: {
        icon: '3.2rem',
      },
    },
    color: {
      black: '#000000',
    },
  },
  plugins: [],
};
