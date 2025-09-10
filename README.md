# @oninross/clean-code

Opinionated linting, formatting, and TS + Jest setup for projects.

## Features

- ESLint + Prettier + import sort (alias-aware)
- Strict TypeScript (no `any`, strict null checks)
- Pre-commit hooks for staged files
- CLI commands: `npx @oninross/clean-code --fix | --check | --test` or with flags
- Nuclear commands for full repo: lint, format, type-check
- Optional Jest integration

## Installation

```
npm i -D @oninross/clean-code
```

## Usage

Extend configs:

### package.json

Add these scripts for easier usage:

```
{
  "scripts": {
    "clean-code:fix": "npx @oninross/clean-code fix",
    "clean-code:check": "npx @oninross/clean-code check",
    "clean-code:test": "npx @oninross/clean-code test"
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

You can use either the npm scripts or npx directly:

```
npm run clean-code:fix   # format + lint + type-check
npm run clean-code:check # check only
npm run clean-code:test  # run jest tests
```

Or use npx with commands or flags:

```
npx @oninross/clean-code fix        # or --fix / -f
npx @oninross/clean-code check      # or --check / -c
npx @oninross/clean-code test       # or --test / -t
npx @oninross/clean-code --install  # or -i
```

- `--fix` / `-f`: format + lint + type-check
- `--check` / `-c`: check formatting, linting, and types
- `--test` / `-t`: run jest tests
- `--install` / `-i`: auto-configure package.json and tsconfig.json
