/**
 * @file ESLint config for TypeScript
 */

const fs = require('node:fs')
const { join } = require('node:path')
const process = require('node:process')
const basic = require('@ntnyq/eslint-config-basic')

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.eslint.json'

module.exports = {
  extends: [
    '@ntnyq/eslint-config-basic',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],

  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },

  overrides: [
    ...basic.overrides,
    ...(fs.existsSync(join(process.cwd(), tsconfig))
      ? [
          {
            parserOptions: {
              tsconfigRootDir: process.cwd(),
              project: [tsconfig],
            },
            parser: '@typescript-eslint/parser',
            excludedFiles: ['**/*.md/*.*'],
            files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
            // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-type-checked-only.ts
            rules: {
              'dot-notation': 'off',
              'require-await': 'off',
              'no-implied-eval': 'off',
              'no-throw-literal': 'off',
              '@typescript-eslint/require-await': 'error',
              '@typescript-eslint/no-unsafe-call': 'error',
              '@typescript-eslint/unbound-method': 'error',
              '@typescript-eslint/await-thenable': 'error',
              '@typescript-eslint/no-for-in-array': 'error',
              '@typescript-eslint/no-implied-eval': 'error',
              '@typescript-eslint/no-throw-literal': 'error',
              '@typescript-eslint/no-unsafe-return': 'error',
              '@typescript-eslint/no-unsafe-argument': 'error',
              '@typescript-eslint/no-misused-promises': 'error',
              '@typescript-eslint/no-unsafe-assignment': 'error',
              '@typescript-eslint/no-floating-promises': 'error',
              '@typescript-eslint/restrict-plus-operands': 'error',
              '@typescript-eslint/no-unsafe-member-access': 'error',
              '@typescript-eslint/no-unnecessary-type-assertion': 'error',
              '@typescript-eslint/restrict-template-expressions': 'error',
              '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
              '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                  prefer: 'type-imports',
                  disallowTypeAnnotations: false,
                },
              ],
            },
          },
          {
            files: ['tsconfig.json', 'tsconfig.*.json'],
            parser: 'jsonc-eslint-parser',
            rules: {
              'jsonc/sort-keys': [
                'error',
                {
                  pathPattern: '^$',
                  order: [
                    'extends',
                    'compilerOptions',
                    'references',
                    'files',
                    'include',
                    'exclude',
                  ],
                },
                {
                  pathPattern: '^compilerOptions$',
                  order: [
                    /* Projects */
                    'incremental',
                    'composite',
                    'tsBuildInfoFile',
                    'disableSourceOfProjectReferenceRedirect',
                    'disableSolutionSearching',
                    'disableReferencedProjectLoad',
                    /* Language and Environment */
                    'target',
                    'lib',
                    'jsx',
                    'experimentalDecorators',
                    'emitDecoratorMetadata',
                    'jsxFactory',
                    'jsxFragmentFactory',
                    'jsxImportSource',
                    'reactNamespace',
                    'noLib',
                    'useDefineForClassFields',
                    'moduleDetection',
                    /* Modules */
                    'module',
                    'rootDir',
                    'moduleResolution',
                    'baseUrl',
                    'paths',
                    'rootDirs',
                    'typeRoots',
                    'types',
                    'allowUmdGlobalAccess',
                    'moduleSuffixes',
                    'allowImportingTsExtensions',
                    'resolvePackageJsonExports',
                    'resolvePackageJsonImports',
                    'customConditions',
                    'resolveJsonModule',
                    'allowArbitraryExtensions',
                    'noResolve',
                    /* JavaScript Support */
                    'allowJs',
                    'checkJs',
                    'maxNodeModuleJsDepth',
                    /* Emit */
                    'declaration',
                    'declarationMap',
                    'emitDeclarationOnly',
                    'sourceMap',
                    'inlineSourceMap',
                    'outFile',
                    'outDir',
                    'removeComments',
                    'noEmit',
                    'importHelpers',
                    'importsNotUsedAsValues',
                    'downlevelIteration',
                    'sourceRoot',
                    'mapRoot',
                    'inlineSources',
                    'emitBOM',
                    'newLine',
                    'stripInternal',
                    'noEmitHelpers',
                    'noEmitOnError',
                    'preserveConstEnums',
                    'declarationDir',
                    'preserveValueImports',
                    /* Interop Constraints */
                    'isolatedModules',
                    'verbatimModuleSyntax',
                    'allowSyntheticDefaultImports',
                    'esModuleInterop',
                    'preserveSymlinks',
                    'forceConsistentCasingInFileNames',
                    /* Type Checking */
                    'strict',
                    'noImplicitAny',
                    'strictNullChecks',
                    'strictFunctionTypes',
                    'strictBindCallApply',
                    'strictPropertyInitialization',
                    'noImplicitThis',
                    'useUnknownInCatchVariables',
                    'alwaysStrict',
                    'noUnusedLocals',
                    'noUnusedParameters',
                    'exactOptionalPropertyTypes',
                    'noImplicitReturns',
                    'noFallthroughCasesInSwitch',
                    'noUncheckedIndexedAccess',
                    'noImplicitOverride',
                    'noPropertyAccessFromIndexSignature',
                    'allowUnusedLabels',
                    'allowUnreachableCode',
                    /* Completeness */
                    'skipDefaultLibCheck',
                    'skipLibCheck',
                  ],
                },
              ],
            },
          },
        ]
      : []),
  ],

  rules: {
    'import/named': 'off',

    // TS
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: { delimiter: 'none' },
      },
    ],
    '@typescript-eslint/type-annotation-spacing': ['error', {}],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/no-require-imports': 'error',

    // Override JS
    'no-useless-constructor': 'off',

    indent: 'off',
    '@typescript-eslint/indent': [
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
          'TSTypeParameterInstantiation',
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
        ],
        offsetTernaryExpressions: true,
      },
    ],

    // handled by unused-imports/no-unused-imports
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    quotes: 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],

    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': ['error', 'always'],

    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'error',

    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],

    'brace-style': 'off',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],

    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],

    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],

    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error', 'functions'],

    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',

    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',

    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],

    // OFF
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
  },
}
