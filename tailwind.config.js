module.exports = {
  purge: [],
  theme: {
    colors: {
      white: '#ffffff',
      primary: {
        light: '#03989e',
        dark: '#709fa1'
      },
      gray: {
        light: '#a6a6a6',
        dark: '#424242'
      }
    },
    extend: {
      backgroundImage: theme => ({
        'cashier': "url('/cashier.jpg')"
      }),
      height: theme => ({
        '70': '70vh'
      })
    }
  },
  variants: {},
  plugins: [],
}
