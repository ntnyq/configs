// @ts-check

import { defineESLintConfig } from '@ntnyq/eslint-config'

export default defineESLintConfig({
  sort: {
    additionalJsonFiles: [
      'packages/renovate-config/default.json',
      'packages/tsconfig/base.json',
      'packages/tsconfig/strict.json',
    ],
  },
})
