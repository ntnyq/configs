/**
 * @file ESLint config
 */

const { isInEditor } = require('is-in-editor')

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    es2021: true,
  },

  reportUnusedDisableDirectives: true,

  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },

  ignorePatterns: [
    '*.min.*',
    'CHANGELOG.md',
    'LICENSE*',

    // Production
    'dist',
    'output',

    'public',
    'static',

    // Nitro
    '.nitro',

    // Vercel
    '.vercel',

    // Nuxt
    '.nuxt',
    '.output',

    // Force lint
    '!.github',
    '!.vitepress',
    '!.vuepress',
    '!.vscode',

    // Generated
    'coverage',
    '__snapshots__',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    'bun.lockb',

    // Vite plugin
    '**/components.d.ts',
    '**/auto-imports.d.ts',

    // Force exclude
    '**/.vitepress/cache',
    '**/.eslintcache',
    '**/.stylelintcache',
  ],

  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },

  plugins: ['import', 'n', 'promise', 'html', 'unicorn', 'unused-imports'],

  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },

  extends: [
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
    'plugin:markdown/recommended-legacy',
  ],

  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc', '*rc'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/array-bracket-spacing': ['error', 'never'],
        'jsonc/comma-dangle': ['error', 'never'],
        'jsonc/comma-style': ['error', 'last'],
        'jsonc/indent': ['error', 2],
        'jsonc/key-spacing': [
          'error',
          {
            beforeColon: false,
            afterColon: true,
          },
        ],
        'jsonc/no-octal-escape': 'error',
        'jsonc/object-curly-newline': [
          'error',
          {
            multiline: true,
            consistent: true,
          },
        ],
        'jsonc/object-curly-spacing': ['error', 'always'],
        'jsonc/object-property-newline': [
          'error',
          {
            allowMultiplePropertiesPerLine: true,
          },
        ],
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      rules: {
        'spaced-comment': 'off',
      },
    },
    {
      files: ['**/package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'keywords',
              'license',
              'author',
              'homepage',
              'repository',
              'funding',
              'exports',
              'main',
              'module',
              'unpkg',
              'jsdelivr',
              // workaround for `type: "module"` with TS `moduleResolution: "node16"`
              'types',
              'typesVersions',
              'bin',
              'icon',
              'files',
              'sideEffects',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'activationEvents',
              'contributes',
              'categories',
              'engines',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'prettier',
              'nano-staged',
              'lint-staged',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^(?:resolutions|overrides|pnpm.overrides)$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            order: ['types', 'import', 'require', 'default'],
          },
          {
            pathPattern: '^scripts$',
            order: { type: 'asc' },
          },
        ],
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
        'import/newline-after-import': 'off',
      },
    },
    {
      files: ['*.js', '*.cjs', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      rules: {
        'no-void': ['error', { allowAsStatement: true }],
      },
    },
    {
      files: ['scripts/**/*.*', 'cli.*'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      rules: {
        'no-unused-expressions': 'off',
        'max-lines-per-function': 'off',
      },
    },
    {
      // Code blocks in markdown file
      files: ['**/*.md/*.*'],
      rules: {
        'no-undef': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-unused-vars': 'off',
        'no-restricted-imports': 'off',
        'no-unused-expressions': 'off',

        'import/no-unresolved': 'off',
        'n/prefer-global/process': 'off',
        'unused-imports/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
      },
    },
  ],

  rules: {
    'accessor-pairs': ['error', { setWithoutGet: true, enforceForClassMembers: true }],
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    camelcase: [
      'error',
      {
        allow: ['^UNSAFE_'],
        properties: 'never',
        ignoreGlobals: true,
      },
    ],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'default-case-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', { allowKeywords: true }],
    'eol-last': 'error',
    'func-call-spacing': ['error', 'never'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          'TemplateLiteral *',
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        offsetTernaryExpressions: true,
      },
    ],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-caller': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-constant-binary-expression': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-useless-backreference': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-prototype-builtins': 'error',
    'no-useless-catch': 'error',
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-redeclare': ['error', { builtinGlobals: false }],
    'no-regex-spaces': 'error',
    'no-self-assign': ['error', { props: true }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'quote-props': ['error', 'as-needed'],
    'rest-spread-spacing': ['error', 'never'],
    semi: ['error', 'never'],
    'semi-spacing': ['error', { before: false, after: true }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'symbol-description': 'error',
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'use-isnan': [
      'error',
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
    'yield-star-spacing': ['error', 'both'],
    yoda: ['error', 'never'],

    'n/handle-callback-err': ['error', '^(err|error)$'],
    'n/no-deprecated-api': 'error',
    'n/no-exports-assign': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/process-exit-as-throw': 'error',

    'promise/param-names': 'error',

    // es6+
    'no-var': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'generator-star-spacing': 'off',
    'no-invalid-this': 'error',
    'no-empty-static-block': 'error',
    'no-new-native-nonconstructor': 'error',
    'arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: false,
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['/', '#'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],

    // best-practice
    eqeqeq: ['error', 'smart'],
    complexity: ['error', { max: 30 }],
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'off',
    'no-alert': 'error',
    'no-case-declarations': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-with': 'error',
    'no-void': 'error',
    'no-useless-escape': 'off',
    'vars-on-top': 'error',
    'require-await': 'off',
    'no-return-assign': 'off',
    'one-var': ['error', 'never'],
    'operator-linebreak': ['error', 'before'],
    'comma-dangle': ['error', 'always-multiline'],
    'max-params': ['error', { max: 5 }],
    'max-depth': ['error', { max: 5 }],
    'max-nested-callbacks': ['error', { max: 10 }],
    'max-statements-per-line': ['error', { max: 2 }],
    'max-lines': [
      'error',
      {
        max: 1000,
        skipComments: true,
        skipBlankLines: true,
      },
    ],
    'max-lines-per-function': [
      'error',
      {
        max: 100,
        skipComments: true,
        skipBlankLines: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 200,
        tabWidth: 2,
        comments: 200,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],

    // import
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/no-named-as-default-member': 'off',

    'import/first': 'error',
    'import/export': 'error',
    'import/no-duplicates': 'error',
    'import/no-self-import': 'error',
    'import/no-named-default': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'never',
        pathGroups: [{ pattern: '{{@,~}/,#}**', group: 'internal' }],
        pathGroupsExcludedImportTypes: ['type'],
      },
    ],

    // unicorn
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/no-unnecessary-await': 'error',
    'unicorn/switch-case-braces': ['error', 'avoid'],
    'unicorn/no-typeof-undefined': 'error',
    'unicorn/prefer-set-size': 'error',
    'unicorn/better-regex': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-reflect-apply': 'error',

    'unicorn/prefer-date-now': 'error',

    // String
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',

    // DOM
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',

    // Array
    'unicorn/no-new-array': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-array-callback-reference': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',

    // yml
    'yml/quotes': [
      'error',
      {
        prefer: 'single',
        avoidEscape: false,
      },
    ],
    'yml/no-empty-document': 'off',

    // n
    'n/prefer-global/buffer': ['error', 'never'],
    'n/prefer-global/process': ['error', 'never'],
    'n/no-callback-literal': 'off',

    // unused-imports
    'unused-imports/no-unused-imports': isInEditor() ? 'off' : 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    // comments
    'eslint-comments/no-unused-disable': ['error'],
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  },
}
