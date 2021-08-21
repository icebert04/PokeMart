module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'nos': "url('../public/background-pokemon.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
