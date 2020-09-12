# EsLint config for Vue.js and TypeScript with Prettier

## Usage

### Install

```bash
$ npm i @ntnyq/eslint-config-prettier-typescript-vue -D
# OR
$ yarn add @ntnyq/eslint-config-prettier-typescript-vue -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
  root: true,

  extends: ['@ntnyq/prettier-typescript-vue'],

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
    "extends": "@ntnyq/prettier-typescript-vue"
  }
}
```
