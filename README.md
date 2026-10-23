# Győző Róbert — Portfolio

A personal portfolio website showcasing my web development and design work, background, and ways to get in touch. Built as a responsive single-page React app.

**Live site:** [gyozorobeert.github.io](https://gyozorobeert.github.io/)

## Features

- Responsive home, about, projects, and contact sections
- Education and work experience timelines
- Interactive project cards with centered detail dialogs
- Project image or icon previews, tags, descriptions, and external links
- Mobile navigation and smooth in-page navigation
- Tailwind CSS styling with a custom dark-and-cyan visual theme

## Tech stack

- React 19
- Vite
- Tailwind CSS 4
- React Icons

## Getting started

### Requirements

- Node.js and npm

### Install dependencies

```sh
npm install
```

### Start the development server

```sh
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
├── assets/                 # Images and favicon
├── components/
│   ├── sections/
│   │   ├── HomeSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectSection.jsx
│   │   └── ContactSection.jsx
│   ├── BackToTheTop.jsx
│   ├── Footer.jsx
│   └── Navigation.jsx
├── css/
│   └── app.css
├── App.jsx
└── main.jsx
```

## Updating portfolio content

### Education and work experience

Edit the `education` and `workExperience` arrays in `src/components/sections/AboutSection.jsx`. Each timeline entry accepts:

```js
{
  period: "2025 - Present",
  title: "Degree or role",
  subtitle: "School or organization",
  description: "A short summary of the experience.",
}
```

### Projects

Edit the `projects` array in `src/components/sections/ProjectSection.jsx`. Project entries support:

```js
{
  number: "01",
  label: "COMPLETED",
  title: "Project name",
  description: "A short summary shown on the card.",
  details: "More information shown when the card is opened.",
  links: [
    { label: "View source", url: "https://github.com/username/repository" },
    { label: "Visit live site", url: "https://example.com" },
  ],
  tags: ["React", "Tailwind CSS"],
  Icon: FaCode,
  image: null,
  imageAlt: "",
  visual: "from-cyan-400/25 via-cyan-400/5 to-transparent",
}
```

To use an image preview, place the image in `src/assets/`, import it at the top of `ProjectSection.jsx`, then assign the imported value to `image` and provide descriptive `imageAlt` text. Set `image` to `null` to show the icon instead. Add one or more objects to `links` to show action buttons in the detail dialog; each link's `label` is its button text and `url` is its destination.

## Build

Create and preview the production build:

```sh
npm run build
npm run preview
```

The production files are written to `dist/`. The site is configured for deployment at the domain root (`/`), as used by the GitHub Pages site URL above.
