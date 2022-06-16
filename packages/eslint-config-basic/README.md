# ESLint config

## Usage

### Install

```bash
$ npm i @ntnyq/eslint-config -D
# OR
$ yarn add @ntnyq/eslint-config -D
```

### Extend this config

in `.eslintrc.js`

```js
module.exports = {
  root: true,

  extends: [`@ntnyq`],

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
    "extends": "@ntnyq"
  }
}
```
