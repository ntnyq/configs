/**
 * Standard CSS style
 *
 * @see https://stylelint.io/user-guide/rules/list
 */

module.exports = {
  extends: ['stylelint-config-standard'],

  // Overrides rules
  rules: {
    // Require or disallow an empty line before at-rules
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['inside-block'],
        ignore: ['first-nested'],
        ignoreAtRules: ['import'],
      },
    ],

    // Require a leading zero for fractional numbers less than 1
    'number-leading-zero': 'always',

    // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity
    'no-descending-specificity': [
      true,
      {
        ignore: ['selectors-within-list'],
      },
    ],

    // Require a newline or disallow whitespace after the colon of declarations
    'declaration-colon-newline-after': 'always-multi-line',

    // Disallow shorthand properties that override related longhand properties
    // TODO: ignore background for compatible
    'declaration-block-no-shorthand-property-overrides': null,

    // Specify lowercase or uppercase for keywords values
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: ['/^($?)font/'],
      },
    ],

    // Specify single or double colon notation for applicable pseudo-elements
    'selector-pseudo-element-colon-notation': 'single',

    // Disallow unknown pseudo-element selectors
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
}
