# EsLint config for React.js with Prettier

## Usage

### Install

```bash
$ npm i @ntnyq/eslint-config-prettier-react -D
# OR
$ yarn add @ntnyq/eslint-config-prettier-react -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@ntnyq/prettier-react'],

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
        "extends": "@ntnyq/prettier-react"
    }
}
```
