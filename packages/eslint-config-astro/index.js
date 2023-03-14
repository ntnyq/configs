/**
 * @file ESLint config for Astro
 */

module.exports = {
  extends: ['plugin:astro/recommended', '@ntnyq/eslint-config-typescript'],

  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {},
    },
    {
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      parserOptions: {
        sourceType: 'module',
      },
      rules: {},
    },
  ],
}
