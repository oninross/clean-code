module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["prettier", "simple-import-sort", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: true,
        singleQuote: false,
        endOfLine: "lf",
        tabWidth: 2,
        bracketSpacing: true,
        printWidth: 100,
        trailingComma: "es5",
      },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^\\w"],
          ["^@"],
          ["^\\."],
          ["^.*\\.types$"],
          ["^.*\\.(css|scss|sass)$"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/strict-boolean-expressions": "error",
  },
};
