# configs

Opinionable configs

## ESLint config

```bash
pnpm add eslint typescript @ntnyq/eslint-config prettier @ntnyq/prettier-config -D
```

### Configuration

Create a file `.eslintrc.json` in project root:

```json
{
  "root": true,
  "extends": ["@ntnyq"]
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
  "prettier.enable": true,
  "eslint.enable": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
  "eslint.validate": [
    "vue",
    "html",
    "yaml",
    "json",
    "jsonc",
    "json5",
    "markdown",
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact"
  ]
}
```

## Prettier config

```bash
pnpm add prettier @ntnyq/prettier-config -D
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
