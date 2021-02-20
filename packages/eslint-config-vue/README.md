# EsLint config for Vue.js

## Usage

### Install

```bash
$ npm i @ntnyq/eslint-config-vue -D
# OR
$ yarn add @ntnyq/eslint-config-vue -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@ntnyq/vue'],

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
        "extends": "@ntnyq/vue"
    }
}
```
