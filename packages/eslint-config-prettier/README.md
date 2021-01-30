# EsLint config with Prettier

## Usage

### Install

```bash
$ npm i @ntnyq/eslint-config-prettier -D
# OR
$ yarn add @ntnyq/eslint-config-prettier -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@ntnyq/prettier'],

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
        "extends": "@ntnyq/prettier"
    }
}
```
