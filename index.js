module.exports = {
  "parser": "@babel/eslint-parser",
  "env": {
    "node": true,
    "browser": true,
    "es2021": true
  },
  "ignorePatterns": ["**/node_modules/*", "**/vendor/*"],
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "requireConfigFile": false
  },
  "rules": {
    "no-var": "error",
    "indent": [
      "error",
      "tab"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ],
    "prefer-arrow-callback": [
      "error",
      {
        "allowUnboundThis": false
      }
    ],
    "no-prototype-builtins": 0
  }
}
