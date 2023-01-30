# configs

Opinionable configs

## ESLint config

```shell
$ pnpm add eslint typescript @ntnyq/eslint-config -D
```

### Configuration

Create a file `.eslintrc.json` in project root:

```json
{
  "root": true,
  "extends": [
    "@ntnyq"
  ]
}
```

Add lint scripts in `package.json`:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

Intergrated with VS Code:

```json
{
  "eslint.enable": true,
  "eslint.validate": [
    "vue",
    "html",
    "yaml",
    "json",
    "jsonc",
    "json5",
    "astro",
    "markdown",
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

Avoid conflict with other formatter:

```json
{
  "[javascript][typescript][vue]": {
    "editor.formatOnSave": false
  }
}
```

## Prettier config

```shell
$ pnpm add prettier @ntnyq/prettier-config -D
```

### Configuration

Config in `package.json`:

```json
{
  "prettier": "@ntnyq/prettier-config"
}
```

## Prior Art

- [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [@element-plus/eslint-config](https://github.com/element-plus/element-plus/tree/dev/internal/eslint-config)

## License

[MIT](./LICENSE) License © 2020-PRESENT [ntnyq](https://github.com/ntnyq)
