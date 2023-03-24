/**
 * @file ESLint config for React
 */

module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],

  settings: {
    react: {
      version: '18.0',
    },
  },

  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/react-in-jsx-scope': 'off',
  },
}
