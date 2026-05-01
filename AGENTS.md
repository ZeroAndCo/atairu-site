# Repository Guidelines

## Project Structure & Module Organization
This repository is a Vite + React + TypeScript frontend. Application code lives under `src/`. Page-level routes are in `src/pages`, shared layout and feature components are in `src/components`, reusable UI primitives are in `src/components/ui`, and static data such as heritage records lives in `src/data`. Localization is managed from `src/i18n` with locale files in `src/i18n/locales`. Tests and test setup are in `src/test`. Public static files belong in `public/`, while imported images and patterns live in `src/assets/`.

## Build, Test, and Development Commands
Use `npm install` to install dependencies. Key scripts:

- `npm run dev`: start the Vite dev server with hot reload.
- `npm run build`: create a production build in `dist/`.
- `npm run build:dev`: build using the development mode configuration.
- `npm run preview`: serve the latest build locally for verification.
- `npm run lint`: run ESLint across the repo.
- `npm test`: run Vitest once in `jsdom`.
- `npm run test:watch`: run Vitest in watch mode during development.

## Coding Style & Naming Conventions
Write React components in TypeScript using functional components and ES modules. Follow the existing file style in the area you edit: some files use single quotes, others double quotes, so keep local diffs consistent with surrounding code. Use `PascalCase` for components and page files (`BrazilMap.tsx`), `camelCase` for variables/functions, and descriptive data names. Prefer the `@/` alias for imports from `src`. Run `npm run lint` before opening a PR; ESLint enforces TypeScript, React Hooks, and React Refresh rules.

## Testing Guidelines
Vitest is configured in `vitest.config.ts` with Testing Library and `src/test/setup.ts`. Place tests next to the relevant code or under `src/test` using `*.test.ts` or `*.spec.tsx`. Cover new UI behavior, route logic, and data transformations. Run `npm test` before submitting changes.

## Commit & Pull Request Guidelines
Recent commits use short, imperative summaries such as `Adjust heritage cards layout` and `Update heritage details for clarity and consistency`. Keep commit titles concise, sentence case, and focused on one change. PRs should include a clear description, note any affected routes or translations, link related issues when applicable, and attach screenshots for visible UI changes.

## Configuration Notes
This project uses npm even though Bun lockfiles are present. Prefer npm scripts for consistency unless the repo owners direct otherwise.
