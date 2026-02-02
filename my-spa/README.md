# my-spa

A simple React Single Page App built with Vite for a React class.

## Local setup

1. Install dependencies:

   cd my-spa
   npm install

2. Start dev server:

   npm run dev

3. Build for production:

   npm run build

## Deploy
This repository includes a GitHub Actions workflow that builds the `my-spa` app and deploys the generated `dist` folder to the `gh-pages` branch using `peaceiris/actions-gh-pages`.

The site will be published at `https://<your-github-username>.github.io/<repo>/` once the workflow runs on pushes to `main` (ensure GitHub Pages is enabled for the `gh-pages` branch in repository settings).

---

## What I added for the React class

- A Material UI comparison page at `/react-class` (`src/pages/react-class/MuiVsBootstrap.jsx`) demonstrating MUI components.
- Roboto font linked in `index.html` and MUI packages installed.


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
