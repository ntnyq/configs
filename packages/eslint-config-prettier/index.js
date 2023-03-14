/**
 * @file ESLint config with prettier
 */

const { rules: prettierRules } = require('eslint-config-prettier')

delete prettierRules['vue/html-self-closing']

module.exports = {
  extends: ['plugin:yml/prettier'],
  plugins: ['prettier'],
  rules: {
    ...prettierRules,
    'prettier/prettier': 'warn',
    'operator-linebreak': 'off',
    '@typescript-eslint/indent': 'off',
  },
}
