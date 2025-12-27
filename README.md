# Academic Website

A bilingual (English/Chinese) academic website built with Astro, inspired by [shen-lab.org](https://www.shen-lab.org/).

## Features

- 🌐 Bilingual support (English/Chinese)
- 🎨 Light/Dark/Auto theme switching
- 📱 Responsive design
- 🔍 Full-text search
- 📄 Content management via Markdown
- 🚀 Static site generation with Astro

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview

```bash
npm run preview
```

## Content Management

Content is managed through Markdown files in `src/content/`:

- `publications/` - Research publications
- `news/` - News and updates
- `research/` - Research areas/projects
- `teaching/` - Teaching activities
- `team/` - Team members
- `photos/` - Photo albums

Each content file should include frontmatter with metadata. See example files for reference.

## Customization

1. **Site Information**: Update `src/i18n/ui.ts` for UI text and site name
2. **Personal Info**: Edit contact information in `src/pages/[lang]/contact.astro`
3. **CV**: Update CV content in `src/pages/[lang]/cv.astro`
4. **Theme Colors**: Modify CSS variables in `src/styles/theme.css`

## Deployment

This site is configured for GitHub Pages deployment via GitHub Actions. Simply push to the `main` branch and the site will be automatically built and deployed.

Make sure to:
1. Enable GitHub Pages in your repository settings
2. Set the source to "GitHub Actions"
3. Update the `site` URL in `astro.config.mjs` if using a custom domain

## License

MIT
