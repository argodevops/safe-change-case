# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm test                # Run all tests (Jest, serial)
npm test -- --testNamePattern="pattern"  # Run a single test by name
npm run build           # Build with Parcel (src/ → dist/)
npm run lint            # ESLint with auto-fix on src/
npm run pretty          # Prettier formatting on src/
npm run watch           # Parcel watch mode for development
```

Coverage is enforced at 100% for branches, functions, lines, and statements.

## Architecture

This is a thin, safe wrapper around the [`change-case`](https://github.com/blakeembrey/change-case) npm library, published as `@argodevops/safe-change-case`.

**Entry point:** `src/index.js` (ES module; compiled to `dist/` by Parcel)

**Two exported APIs:**

1. **`safeChangeCase(input, caseType, options?)`** — The core function. Accepts strings, arrays (joined with spaces), or objects (JSON-stringified). Returns `''` for `null`/`undefined` instead of throwing. Throws for invalid inputs or unrecognised `caseType` values.

2. **`CaseType` enum** — Frozen object: `CAMEL`, `SNAKE`, `KEBAB`, `PASCAL`, `CAPITAL`, `SENTENCE`. Used to select the transformation.

3. **Six standalone helpers** — `camelCase()`, `snakeCase()`, `kebabCase()`, `pascalCase()`, `capitalCase()`, `sentenceCase()` — each calls `safeChangeCase` with the corresponding `CaseType`.

All tests live in `src/index.test.js` alongside the source (126 cases, 11 suites).

## Toolchain Notes

- **Bundler:** Parcel 2 — no manual Webpack/Rollup config needed.
- **Transpiler:** Babel via `@parcel/babel-preset-env`.
- **Linting:** ESLint 9 flat config (`eslint.config.mjs`) using `@argodevops/eslint-config/node`.
- **Releases:** Fully automated via Semantic Release on push to `main`/`alpha` (see `release.config.js`). Commit messages drive version bumps and changelog generation.
- **Git hooks:** Husky runs pre-commit and prepare-commit-msg hooks.
