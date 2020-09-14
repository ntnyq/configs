/**
 * Standard CSS style for SCSS
 *
 * @see https://github.com/kristerkari/stylelint-scss
 */

module.exports = {
  extends: ['@ntnyq/stylelint-config'],

  plugins: ['stylelint-scss'],

  // Overrides rules
  rules: {
    // =============================== //
    // Disable rules overrides by SCSS //
    // =============================== //
    'at-rule-no-unknown': null,

    // =============================== //
    // SCSS Rules //
    // =============================== //
    // Disallow unknown at-rules
    'scss/at-rule-no-unknown': true,
  },
}
