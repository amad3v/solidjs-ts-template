# SolidJS TypeScript Template

A full project structure for SolidJS + TailwindCSS v3.

## Usage

```bash
pnpm install
```

## Included Dependencies

 - [Auth0 SPA JS](https://auth0.github.io/auth0-spa-js/index.html).
 - [Solid-Router](https://docs.solidjs.com/solid-router).
 - [Axios](https://axios-http.com/).

## Project Tree

```bash
├──  src
│   ├──  assets
│   ├──  App.module.css
│   ├──  App.tsx
│   ├──  index.css
│   └──  index.tsx
├──  .gitignore
├──  .prettierignore
├──  eslint.config.js
├──  index.html
├──  LICENSE
├──  package.json
├──  pnpm-lock.yaml
├──  postcss.config.js
├──  prettier.config.js
├── 󰂺 README.md
├──  tailwind.config.js
├──  tsconfig.json
└──  vite.config.ts
```

## Notes
Make sure to change `index.html` to set `favicon`
```html
<!-- ICO file -->
<link rel="shortcut icon" type="image/ico" href="/src/assets/favicon.ico" />
<title>Solid App</title>

<!-- SVG file -->
<link rel="shortcut icon" type="image/svg" href="/src/assets/favicon.svg" />
<title>Solid App</title>

<!-- PNG file -->
<link rel="shortcut icon" type="image/png" href="/src/assets/favicon.png" />
<title>Solid App</title>
```

and the `title`
```html
<title>Solid App</title>
```
