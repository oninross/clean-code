# @oninross/masterbuilder-style-guide

Opinionated linting, formatting, and TS + Jest setup for projects.

## Features

- ESLint + Prettier + import sort (alias-aware)
- Strict TypeScript (no `any`, strict null checks)
- Pre-commit hooks for staged files
- CLI commands: `npx masterbuilder-style fix | check | test`
- Nuclear commands for full repo: lint, format, type-check
- Optional Jest integration

## Installation

```
npm i -D @oninross/masterbuilder-style-guide
```

## Usage

Extend configs:

### package.json

```
{
  "scripts": {
    "check:format": "prettier --check './**/*.{js,jsx,ts,tsx,json}' --ignore-path .prettierignore --config ./.prettierrc.js",
    "check:lint": "next lint",
    "format": "prettier --write './**/*.{js,jsx,ts,tsx,json}' --ignore-path .prettierignore --config ./.prettierrc.js",
    "lint": "next lint"
  }
}
```

### .edlintrc.js

```
module.exports = {
  extends: [
    '@oninross/masterbuilder-style-guide',
  ],
};
```

### .eslintrc.js

```
module.exports = {
  extends:
  ["@oninross/masterbuilder-style-guide/configs/.eslintrc.js"]
};
```

or

### .eslintrc.json

```
{
  "extends": [
    "@oninross/masterbuilder-style-guide/configs/.eslintrc.js"
  ]
}
```

### tsconfig.json

```
{
  "extends": "@oninross/masterbuilder-style-guide/configs/tsconfig.json"
}
```

### .prettierrc.js

```
const msg = require('@oninross/masterbuilder-style-guide');

module.exports = {
  ...msg,
  const msg = require('@oninross/masterbuilder-style-guide');

module.exports = {
  ...msg,
  // Note tab width purposefully not configured,
  // to allow developer preference in their IDE
  useTabs: false,

  // { foo: bar } as opposed to {foo:bar}, for readability
  bracketSpacing: true,

  // Single quotes for strings, except in JSX
  singleQuote: true,
  quoteProps: 'consistent',
  jsxSingleQuote: false,
  jsxBracketSameLine: false,

  // Trailing commas for improved diff
  trailingComma: 'all',

  // enforce LF for line breaks
  endOfLine: 'lf',
};
```

### CLI

```
npx masterbuilder-style fix   # format + lint + type-check
npx masterbuilder-style check # check only
npx masterbuilder-style test  # run jest tests
```

And devs can immediately use it:

```
npm i -D @oninross/masterbuilder-style-guide
```

```
npx masterbuilder-style fix
```
