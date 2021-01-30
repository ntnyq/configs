# EsLint config for Vue.js and TypeScript

## Usage

### Install

```bash
$ npm i @ntnyq/eslint-config-typescript-vue -D
# OR
$ yarn add @ntnyq/eslint-config-typescript-vue -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@ntnyq/typescript-vue'],

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
        "extends": "@ntnyq/typescript-vue"
    }
}
```
