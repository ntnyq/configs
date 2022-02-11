# stylelint-config-vue

> ntnyq's stylelint config for vue SFC

## Usage

### Install

```bash
$ npm i @ntnyq/stylelint-config-vue -D
# OR
$ yarn add @ntnyq/stylelint-config-vue -D
```

### Extend this config

in `.stylelintrc.yml`

```yml
extends:
    - '@ntnyq/stylelint-config-vue'

rules:
    # Override rules
```

in `package.json`

```json
{
    "stylelint": {
        "extends": "@ntnyq/stylelint-config-vue"
    }
}
```
