# stylelint-config-prettier

> ntnyq's stylelint config with prettier

## Usage

### Install

```bash
$ npm i @ntnyq/stylelint-config-prettier -D
# OR
$ yarn add @ntnyq/stylelint-config-prettier -D
```

### Extend this config

in `.stylelintrc.yml`

```yml
extends:
    - '@ntnyq/stylelint-config-prettier'

rules:
    # Override rules
```

in `package.json`

```json
{
    "stylelint": {
        "extends": "@ntnyq/stylelint-config-prettier"
    }
}
```
