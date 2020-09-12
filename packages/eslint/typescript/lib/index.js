/**
 * Based on TypeScript ESLint Rules
 *
 * @see https://github.com/typescript-eslint/typescript-eslint
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 */

module.exports = {
  extends: [
    'ntnyq',
    // Enable all the recommended rules for @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
  ],

  // Use @typescript-eslint/eslint-plugin
  plugins: ['@typescript-eslint'],

  // Use @typescript-eslint/parser
  parser: '@typescript-eslint/parser',

  // Set options for @typescript-eslint/parser
  parserOptions: {
    // Set default project value
    // @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject
    project: ['tsconfig.json', 'packages/**/tsconfig.json'],
  },

  // Rules overrides
  rules: {
    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    'brace-style': 'off',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],

    // Default export should not be encouraged in typescript
    'import/prefer-default-export': 'off',

    // Allow functions in expressions not to be checked
    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
  },
}
