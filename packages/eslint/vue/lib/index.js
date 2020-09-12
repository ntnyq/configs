/**
 * Based on Vue.js rules
 *
 * @see https://eslint.vuejs.org/rules
 */

module.exports = {
  extends: [
    '@ntnyq',
    //
    'plugin:vue/recommended',
  ],

  plugins: ['vue'],

  parserOptions: {
    parser: 'babel-eslint',
  },

  // Rules overrides
  rules: {
    // Put multiple attrs in multiple lines
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
  },
}
