module.exports = {
  plugins: ['ejs'],
  extends: ['airbnb'],
  globals: {
    document: true,
    foo: true,
    window: true,
    CustomEvent: true,
  },
};
