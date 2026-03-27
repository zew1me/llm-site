# Repository Guidelines

## Project Structure & Module Organization
- `src/app/page.tsx` contains the landing page content and primary copy.
- `src/app/layout.tsx` defines root layout metadata such as title and description.
- `src/app/globals.css` holds the global visual system, layout, and motion rules.
- `public/` stores static assets served directly by Next.js, including brand artwork such as `large-language-music-landing-icon.png`.
- Root config lives in `package.json`, `tsconfig.json`, `next.config.ts`, and `eslint.config.mjs`.

This repository is intentionally small. Prefer extending the existing landing page rather than introducing new folders or abstractions too early.

## Build, Test, and Development Commands
- `npm install` installs project dependencies.
- `npm run dev -- --hostname 127.0.0.1` starts the local Next.js dev server on localhost.
- `npm run build` creates the production build and catches TypeScript or Next.js integration issues.
- `npm run start` serves the production build locally.
- `npm run lint` runs ESLint across the repository.

Run `npm run lint` and `npm run build` before pushing UI changes.

## Coding Style & Naming Conventions
- Use TypeScript and React function components.
- Follow the existing style: double quotes, semicolons, and immutable top-level `const` content/config objects.
- Keep components small and readable; this repo currently favors a single-page composition over deep component trees.
- Use descriptive CSS class names in `globals.css` such as `landing-grid`, `hero-copy`, and `brand-frame`.
- Keep asset names lowercase and hyphenated, for example `large-language-music-landing-icon.png`.

## Testing Guidelines
- There is no dedicated test suite yet.
- Treat `npm run lint` and `npm run build` as the required validation baseline.
- For UI edits, manually verify the page at `http://127.0.0.1:3000` on both desktop and mobile widths.

## Commit & Pull Request Guidelines
- Follow the existing history: concise, imperative commit messages such as `feat: launch Large Language Music landing page`.
- Prefer conventional prefixes like `feat:`, `fix:`, and `docs:` when the change type is clear.
- PRs should include a short summary, note any asset additions under `public/`, and include screenshots or preview links for visible design changes.
- Do not reference assets in code without adding them to the diff.

## Security & Configuration Tips
- Do not commit secrets or `.env` files.
- Large media files should be reviewed before adding; small launch assets can live in normal git, but revisit Git LFS if artwork or audio files grow substantially.
