# EsLint config for TypeScript with Prettier

## Usage

### Install

```bash
$ npm i @ntnyq/eslint-config-prettier-typescript -D
# OR
$ yarn add @ntnyq/eslint-config-prettier-typescript -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
  root: true,

  extends: ['@ntnyq/prettier-typescript'],

  rules: {
    // Override rules
  },
}
```

in `package.json`

```json
{
  "eslintConfig": {
    "root": true,
    "extends": "@ntnyq/prettier-typescript"
  }
}
```
