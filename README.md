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

### tsconfig.json

```
{
  "extends": "@oninross/masterbuilder-style-guide/configs/tsconfig.json"
}
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
