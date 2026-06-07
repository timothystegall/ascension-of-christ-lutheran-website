# Ascension of Christ Lutheran Church Website

A modern, accessible website for Ascension of Christ Lutheran Church, built with [11ty](https://www.11ty.dev/) (Eleventy) and deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

## Overview

This repository contains the source code for the Ascension of Christ Lutheran Church website. The site is built using Eleventy, a simpler static site generator, which allows for easy content management and deployment through Cloudflare Pages.

## Getting Started

### Installation & Development

```bash
# Install project dependencies
npm i

# Run the project locally
npm run dev
```

Visit `http://localhost:8080` to see the site in development mode.

### Project Structure

```
ascension-of-christ-lutheran-website/
├── src/                          # Source directory
│   ├── assets/                   # Site assets
│   │   ├── fonts/                # Font files
│   │   ├── images/               # Image assets
│   │   ├── scripts/              # JavaScript files
│   │   ├── styles/               # SCSS and CSS styles
│   │   ├── views/                # Template views
│   │   │   ├── layouts/          # Page layouts
│   │   │   └── partials/         # Reusable components
│   │   └── assets.json           # Asset configuration
│   ├── config/                   # Eleventy configuration
│   │   ├── build.js              # Build & bundler config
│   │   ├── collections.js        # Collections config
│   │   ├── filters.js            # Template filters
│   │   ├── passthroughs.js       # Static file passthroughs
│   │   ├── plugins.js            # Eleventy plugins
│   │   ├── shortcodes.js         # Template shortcodes
│   │   ├── templateLanguages.js  # Custom template languages
│   │   ├── watchtargets.js       # Watch targets for dev
│   │   └── config.json           # Config metadata
│   ├── content/                  # Site content
│   │   └── pages/                # Page files
│   └── data/                     # Site data
│       ├── navigation.json       # Navigation configuration
│       └── site.json             # Site branding & metadata
├── .eleventy.js                  # Eleventy config entry point
├── cloudflare.toml               # Cloudflare Pages configuration
├── netlify.toml                  # Netlify configuration (optional)
└── README.md                     # This file
```

## Technology Stack

- **Static Site Generator**: [11ty (Eleventy)](https://www.11ty.dev/)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Templating**: HTML, Markdown, Nunjucks
- **Styling**: SCSS & CSS
- **Source Control**: GitHub

---
