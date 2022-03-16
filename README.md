# Installation

```bash
yarn add @antipodes-medical/eslint-config-antipodes -D
```

# Usage

`.eslintrc.json`
```json
{
  "extends": "@antipodes-medical/eslint-config-antipodes"
}
```

`package.json`
```json
{
  "scripts": {
    "eslint": "./node_modules/.bin/eslint '**/*.js'",
    "eslint:fix": "./node_modules/.bin/eslint '**/*.js' --fix"
  }
}
```

# Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to turn off the `no-console` rule:

```json
{
  "extends": "@antipodes-medical/eslint-config-antipodes",
  "rules": {
    "no-console": "off"
  }
}
```
