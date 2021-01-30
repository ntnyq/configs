# EsLint config for Vue.js with Prettier

## Usage

### Install

```bash
$ npm i @ntnyq/eslint-config-prettier-vue -D
# OR
$ yarn add @ntnyq/eslint-config-prettier-vue -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@ntnyq/prettier-vue'],

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
        "extends": "@ntnyq/prettier-vue"
    }
}
```
