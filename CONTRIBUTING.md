# Contributing to React Film Explorer

Thanks for your interest in contributing! 🎬 This document explains how to set up the project locally and submit changes.

## Getting started

1. **Fork** the repository and clone your fork:
   ```bash
   git clone https://github.com/<your-username>/react-film-explorer.git
   cd react-film-explorer
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Add your TMDB API key** (required for the app to fetch data):
   ```bash
   cp .env.example .env
   # then set VITE_TMDB_API_KEY in .env — get a free key at
   # https://www.themoviedb.org/settings/api
   ```
4. **Start the dev server:**
   ```bash
   npm run dev
   ```

## Making changes

1. Create a descriptive branch:
   ```bash
   git checkout -b feature/short-description   # or fix/… , docs/… , a11y/…
   ```
2. Make your changes, keeping each pull request focused on **one logical improvement**.
3. Before opening a PR, make sure the project builds and lints cleanly:
   ```bash
   npm run lint
   npm run build
   ```
4. Commit with a clear message (see below), push your branch, and open a pull request against `main`.

## Commit messages

Use short, imperative, prefixed messages so history stays readable:

- `feat: …` – a new feature
- `fix: …` – a bug fix
- `docs: …` – documentation only
- `a11y: …` – accessibility improvements
- `refactor: …` – code changes that neither fix a bug nor add a feature
- `chore: …` – tooling/config/maintenance

## Code style

- The project uses **ESLint**; please resolve warnings before submitting.
- Match the existing React + functional-component style and formatting.
- Prefer small, readable components and meaningful names.

## Pull requests

- Fill in the PR template.
- Describe **what** changed and **why**.
- Confirm `npm run build` passes.

Every contribution — from a typo fix to a new feature — is appreciated. Thank you! 🙌
