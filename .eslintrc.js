/* eslint-disable @typescript-eslint/no-unused-vars */
const OFF = 0
const WARN = 1
const ERROR = 2
/* eslint-enable @typescript-eslint/no-unused-vars */

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    React: "writable",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // React
    "react/react-in-jsx-scope": OFF,
    "react/jsx-curly-newline": OFF,
    "react/jsx-one-expression-per-line": OFF,
    "react/jsx-props-no-spreading": OFF,
    "react/display-name": OFF,
    "react/require-default-props": OFF,
    "react/prop-types": OFF,
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    // TS
    "@typescript-eslint/explicit-function-return-type": OFF,
    "@typescript-eslint/interface-name-prefix": OFF,
    "@typescript-eslint/semi": OFF,
    "@typescript-eslint/no-unused-vars": ERROR,
    // Other
    "import/prefer-default-export": OFF,
    "space-infix-ops": OFF,
    "jsx-a11y/accessible-emoji": WARN,
  },
}
