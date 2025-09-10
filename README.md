# @oninross/clean-code

Opinionated linting, formatting, and TS + Jest setup for projects.

## Features

- ESLint + Prettier + import sort (alias-aware)
- Strict TypeScript (no `any`, strict null checks)
- Pre-commit hooks for staged files
- CLI commands: `npx clean-code fix | check | test`
- Nuclear commands for full repo: lint, format, type-check
- Optional Jest integration

## Installation

```
npm i -D @oninross/clean-code
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
  "extends": "@oninross/clean-code/configs/tsconfig.json"
}
```

### CLI

```
npx clean-code-style fix   # format + lint + type-check
npx clean-code-style check # check only
npx clean-code-style test  # run jest tests
```

And devs can immediately use it:

```
npm i -D @oninross/clean-code
```

```
npx clean-code-style fix
```
