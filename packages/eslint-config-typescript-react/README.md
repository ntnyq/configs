# EsLint config for React.js and TypeScript

## Usage

### Install

```bash
$ npm i @ntnyq/eslint-config-typescript-react -D
# OR
$ yarn add @ntnyq/eslint-config-typescript-react -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
    root: true,

    extends: ['@ntnyq/typescript-react'],

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
        "extends": "@ntnyq/typescript-react"
    }
}
```
