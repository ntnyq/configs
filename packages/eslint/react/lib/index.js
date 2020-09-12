/**
 * React with hooks
 */

module.exports = {
  extends: ['@ntnyq', 'react'],

  plugins: ['jsx-a11y', 'react-hooks'],

  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  // Overrides ruls
  rules: {},
}
