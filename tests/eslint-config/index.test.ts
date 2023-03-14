import { ESLint } from 'eslint'
import { describe, expect, it } from 'vitest'
import { resolve } from '../utils'

const overrideConfigFile = resolve('packages/eslint-config/index.js')

describe('invalid', () => {
  it('error', async () => {
    const eslint = new ESLint({ overrideConfigFile })
    const result = await eslint.lintText('export const foo = `bar`')

    expect(result[0].errorCount).toBe(0)
    expect(result[0].messages).toMatchInlineSnapshot(`
      [
        {
          "column": 25,
          "endColumn": 25,
          "endLine": 1,
          "fix": {
            "range": [
              24,
              24,
            ],
            "text": "
      ",
          },
          "line": 1,
          "message": "Insert \`⏎\`",
          "messageId": "insert",
          "nodeType": null,
          "ruleId": "prettier/prettier",
          "severity": 1,
        },
      ]
    `)
  })
})
