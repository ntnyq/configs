# EsLint config for React.js

## Usage

### Install

```bash
$ npm i @ntnyq/eslint-config-react -D
# OR
$ yarn add @ntnyq/eslint-config-react -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@ntnyq/react'],

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
        "extends": "@ntnyq/react"
    }
}
```
