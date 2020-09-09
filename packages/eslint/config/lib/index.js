/**
 * Based on Standard JavaScript Style
 *
 * @see https://github.com/standard/eslint-config-standard
 */

module.exports = {
  extends: [
    // Standard JavaScript style
    'standard',
  ],

  rules: {
    /**
     * Requires the use of single quotes wherever possible
     *
     * @see https://eslint.org/docs/rules/quotes
     */
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],

    /**
     * Requires the use of `const` or `let` instead of `var`
     *
     * @see https://eslint.org/docs/rules/no-var
     */
    'no-var': ['error'],

    /**
     * Requires the use of trailing commas in object and array literals
     *
     * @see https://eslint.org/docs/rules/comma-dangle
     */
    'comma-dangle': ['error', 'always-multiline'],
  },
}
