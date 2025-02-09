# configs

Opinionable configs.

## ESLint config

**Note**: eslint-config source code has been moved to [ntnyq/eslint-config](https://github.com/ntnyq/eslint-config), only ESLint v9 is supported.

## Prettier config

```shell
pnpm add prettier @ntnyq/prettier-config -D
```

### Configuration

Use `prettier.config.mjs`:

```js
// @ts-check

import { config, defineConfig } from '@ntnyq/prettier-config'

export default defineConfig({
  ...config,

  overrides: [
    {
      files: ['**/*.html'],
      options: {
        singleAttributePerLine: false,
      },
    },
    {
      files: ['**/*.{css,scss}'],
      options: {
        singleQuote: false,
      },
    },
  ],
})
```

## Renovate config

Config in `.github/renovate.json`:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["github>ntnyq/configs//packages/renovate-config/default.json"],
  "automerge": true
}
```

## License

[MIT](./LICENSE) License © 2020-PRESENT [ntnyq](https://github.com/ntnyq)
