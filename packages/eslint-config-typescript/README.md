# ESLint config for TypeScript

## Usage

### Install

```bash
$ npm i @ntnyq/eslint-config-typescript -D
# OR
$ yarn add @ntnyq/eslint-config-typescript -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
  root: true,

  extends: [`@ntnyq/typescript`],

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
    "extends": "@ntnyq/typescript"
  }
}
```
