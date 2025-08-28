# masterbuilder-style-guide

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
npm i -D masterbuilder-style-guide
```

## Usage

Extend configs:

```
// .eslintrc.js

module.exports = {
  extends:
  ["masterbuilder-style-guide/configs/.eslintrc.js"]
};
```

```
// tsconfig.json

{
  "extends": "masterbuilder-style-guide/configs/tsconfig.json"
}
```

CLI

```
npx masterbuilder-style fix   # format + lint + type-check
npx masterbuilder-style check # check only
npx masterbuilder-style test  # run jest tests
```

And devs can immediately use it:

```
npm i -D masterbuilder-style-guide
```

```
npx masterbuilder-style fix
```
