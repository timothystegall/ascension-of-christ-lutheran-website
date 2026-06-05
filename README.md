# Ascension of Christ Lutheran Church Website

A modern, accessible website for Ascension of Christ Lutheran Church, built with [11ty](https://www.11ty.dev/) (Eleventy) and deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

## Overview

This repository contains the source code for the Ascension of Christ Lutheran Church website. The site is built using Eleventy, a simpler static site generator, which allows for easy content management and deployment through Cloudflare Pages.

## Getting Started

### Quick Start

1. **Edit content directly** - Create and edit your site **right from the GitHub interface**!

2. **Use the web-based editor** - Or edit your entire site in VS Code Online by [clicking here](https://github.dev/timothystegall/ascension-of-christ-lutheran-website/).

### Installation & Development

```bash
# Install project dependencies
npm i

# Run the project locally
npm run dev
```

Visit `http://localhost:8080` to see your site in development.

## Managing Content

<details>
  <summary><strong>📝 Pages and Content</strong></summary>

### Creating and Editing Pages

Pages can be written in HTML or [Markdown](https://www.markdownguide.org/basic-syntax/).

* [Edit the homepage](https://github.com/timothystegall/ascension-of-christ-lutheran-website/edit/main/src/content/pages/index.md)
* [Create a new page](https://github.com/timothystegall/ascension-of-christ-lutheran-website/new/main/?filename=/src/content/pages/&value=---%0Atitle%3A%20Enter%20page%20title%20here%0A---)

</details>

<details>
  <summary><strong>🎨 Customizing Look and Feel</strong></summary>

### Navigation

Edit the site's navigation menu in [JSON format](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON):

* [Edit the navigation](https://github.com/timothystegall/ascension-of-christ-lutheran-website/edit/main/src/data/navigation.json)

### Styles & Branding

Customize colors, spacing, fonts, and overall branding using CSS, SCSS, and CSS variables:

* [Edit branding](https://github.com/timothystegall/ascension-of-christ-lutheran-website/edit/main/src/assets/styles/_branding.scss)
* [Edit overall styles](https://github.com/timothystegall/ascension-of-christ-lutheran-website/edit/main/src/assets/styles/styles.scss)

For CSS learning resources, check out [SmolCSS](https://smolcss.dev).

### JavaScript

Add interactive functionality to your site (optional):

* [Add JavaScript](https://github.com/timothystegall/ascension-of-christ-lutheran-website/edit/main/src/assets/scripts/main.js)

</details>

## Building & Deployment

<details>
  <summary><strong>🚀 Deploy to Cloudflare Pages</strong></summary>

### Setup:

1. Connect your GitHub repository to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Set the build command to: `npm run production`
3. Set the publish directory to: `_site`

Any time you commit to the `main` branch, Cloudflare Pages will automatically build and deploy your site.

</details>

<details>
  <summary><strong>🚀 Deploy to GitHub Pages (Alternative)</strong></summary>

### Setup:

1. [Enable GitHub Pages](https://github.com/timothystegall/ascension-of-christ-lutheran-website/settings/pages) in your repository settings, choose "GitHub Actions" as the source.
2. [Allow "Read and write permissions" for GitHub Workflows](https://github.com/timothystegall/ascension-of-christ-lutheran-website/settings/actions) in your repository settings.

</details>

<details>
  <summary><strong>🚀 Deploy to Netlify (Alternative)</strong></summary>

### Setup:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/timothystegall/ascension-of-christ-lutheran-website/)

</details>

## Build Commands

```bash
# Development build with live reload
npm run dev

# Build for staging (pages flagged as noindex)
npm run staging

# Build for production
npm run production
```

## Project Structure

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

## How Eleventy Is Configured

Eleventy configuration is organized in `/src/config/` for easy management of collections, filters, passthroughs, plugins, and other customizations—rather than keeping everything in a single `.eleventy.js` file.

## Technology Stack

- **Static Site Generator**: [11ty (Eleventy)](https://www.11ty.dev/)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Templating**: HTML, Markdown, Nunjucks
- **Styling**: SCSS & CSS
- **Source Control**: GitHub

## Support

For questions about Eleventy, visit the [official documentation](https://www.11ty.dev/docs/). For Cloudflare Pages support, see the [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/).

---

**Last updated**: June 5, 2026
