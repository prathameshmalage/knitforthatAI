# KnitForThat

A landing page for a small-batch, handcrafted sweater brand. Built with React, Vite, and Tailwind CSS v4.

## Features

- Hero banner with background image and call-to-action
- Featured sweater product cards with add-to-cart buttons
- About section highlighting brand values (ethical sourcing, natural fibers, no fast fashion)
- Contact footer with email and Instagram link

## Tech Stack

- **React 19** — UI framework
- **Vite 7** — Build tool with HMR
- **Tailwind CSS v4** — Utility-first styling via `@tailwindcss/vite` plugin

## Getting Started

```bash
cd KnitForThat
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
KnitForThat/
  src/
    App.jsx        # Main landing page component
    main.jsx       # Entry point
    index.css      # Tailwind imports
  index.html       # HTML shell
  vite.config.js   # Vite + Tailwind plugin config
  package.json
```
