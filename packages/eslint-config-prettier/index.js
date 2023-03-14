/**
 * @file ESLint config with prettier
 */

module.exports = {
  extends: ['plugin:yml/prettier', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'operator-linebreak': 'off',
    '@typescript-eslint/indent': 'off',
  },
}
