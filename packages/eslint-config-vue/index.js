/**
 * @file ESLint config for VueJS
 */

module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        // Only in Vue SFC
        'vue/prefer-import-from-vue': 'error',
      },
    },
  ],

  extends: ['plugin:vue/vue3-recommended', '@ntnyq/eslint-config-typescript'],

  rules: {
    // OFF
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-setup-props-reactivity-loss': 'off',

    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always',
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        // Force auto-import components to be PascalCase
        registeredComponentsOnly: false,
        ignores: ['slot', 'component'],
      },
    ],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits', 'defineOptions', 'defineSlots'],
      },
    ],
    'vue/html-comment-content-spacing': [
      'error',
      'always',
      {
        exceptions: ['-'],
      },
    ],
    'vue/no-restricted-v-bind': ['error', '/^v-/'],
    'vue/no-useless-v-bind': 'error',
    'vue/no-v-text-v-html-on-component': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prefer-separate-static-class': 'error',
    'vue/next-tick-style': ['error', 'promise'],
    'vue/no-constant-condition': 'error',
    'vue/prefer-true-attribute-shorthand': ['error', 'always'],
    'vue/prefer-define-options': 'error',
    'vue/valid-define-options': 'error',

    // TypeScript enhance
    'vue/define-emits-declaration': ['error', 'type-literal'],

    // extensions
    'vue/v-if-else-key': 'error',
    'vue/no-unused-emit-declarations': 'error',
    'vue/this-in-template': ['error', 'never'],
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/comma-spacing': ['error', { before: false, after: true }],
    'vue/comma-style': ['error', 'last'],
    'vue/dot-location': ['error', 'property'],
    'vue/dot-notation': ['error', { allowKeywords: true }],
    'vue/eqeqeq': ['error', 'smart'],
    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'vue/keyword-spacing': ['error', { before: true, after: true }],
    'vue/no-empty-pattern': 'error',
    'vue/no-loss-of-precision': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-use-v-else-with-v-for': 'error',
    'vue/require-typed-object-prop': 'error',
    'vue/no-extra-parens': ['error', 'functions'],
    'vue/no-restricted-syntax': ['error', 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
    'vue/no-sparse-arrays': 'error',
    'vue/no-deprecated-model-definition': [
      'error',
      {
        allowVue3Compat: true,
      },
    ],
    'vue/object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true,
      },
    ],
    'vue/no-static-inline-styles': [
      'error',
      {
        allowBinding: true,
      },
    ],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: true,
      },
    ],
    'vue/object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'vue/operator-linebreak': ['error', 'before'],
    'vue/prefer-template': 'error',
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/quote-props': ['error', 'consistent-as-needed'],
    'vue/space-in-parens': ['error', 'never'],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],
    'vue/template-curly-spacing': 'error',
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'EVENTS', // `@click="functionCall"`, `v-on="event"`
          'TWO_WAY_BINDING', // `v-model`
          'OTHER_DIRECTIVES', // `v-custom-directive`
          'LIST_RENDERING', // `v-for item in items`
          'CONDITIONALS', //  `v-if`, `v-show`, `v-cloak`
          'CONTENT', // `v-text`, `v-html`
          'SLOT', // `v-slot`, `slot`
          'UNIQUE', // `ref`, `key`
          'DEFINITION', // `is`, `v-is`
          'ATTR_DYNAMIC', // `v-bind:prop="foo"`, `:prop="foo"`
          // `OTHER_ATTR`, // `custom-prop="foo"`, `:prop="foo"`, `disabled`
          'RENDER_MODIFIERS', // `v-once`, `v-pre`
          'GLOBAL', // `id`
          'ATTR_STATIC', // `prop="foo", `static attributes
          'ATTR_SHORTHAND_BOOL', // `disabled`, prop shorthand
        ],
        alphabetical: false,
      },
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['provide', 'inject'],
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'emits',
          'setup',
          'asyncData',
          'computed',
          'data',
          'fetch',
          'head',
          'methods',
          ['template', 'render'],
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'renderError',
          'ROUTER_GUARDS',
        ],
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: 1,
      },
    ],
  },
}
