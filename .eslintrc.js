/* eslint-disable no-undef */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["./src"],
      },
    },
  },
  rules: {
    "comma-dangle": "off",
    "function-paren-newline": "off",
    "global-require": "off",
    "import/no-dynamic-require": "off",
    "no-inner-declarations": "error",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-var-requires": "warn",
    "react/display-name": "off",
    "@typescript-eslint/no-unused-vars": "off"
  },
};
