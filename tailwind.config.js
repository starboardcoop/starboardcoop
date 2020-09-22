module.exports = {
  purge: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cashier': "url('/cashier-2.jpg')",
        'brewery': "url('/brewery-2.jpg')"
      }),
      height: theme => ({
        '70': '70vh'
      }),
      colors: {
        white: '#ffffff',
        primary: {
          light: '#03989e',
          dark: '#29797a'
        },
        gray: {
          light: '#a6a6a6',
          dark: '#424242'
        }
      },
    }
  },
  variants: {},
  plugins: [],
}
