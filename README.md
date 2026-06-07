# Ascension of Christ Lutheran Church Website

A modern, accessible website for Ascension of Christ Lutheran Church, built with [11ty](https://www.11ty.dev/) (Eleventy) and deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

## Overview

This repository contains the source code for the Ascension of Christ Lutheran Church website. The site is built using Eleventy, a simple static site generator, which allows for easy content management by myself, or the church staff.

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
├── src/                              # Source directory
│   ├── _data/                        # Eleventy global data
│   │   └── site.json                 # Site metadata and configuration
│   ├── _includes/                    # Reusable template components
│   │   ├── layouts/                  # Page layout templates
│   │   └── partials/                 # Partial components
│   ├── assets/                       # Static assets
│   │   ├── css/                      # Stylesheets
│   │   ├── fonts/                    # Custom fonts
│   │   ├── images/                   # Image files
│   │   └── js/                       # JavaScript files
│   ├── pages/                        # Page content files
│   └── .gitkeep
├── _site/                            # Build output directory (generated)
├── node_modules/                     # NPM dependencies
├── .eleventy.js                      # Eleventy main configuration file
├── .gitignore                        # Git ignore rules
├── .prettierignore                   # Prettier ignore rules
├── .prettierrc.json                  # Prettier configuration
├── cloudflare.toml                   # Cloudflare Pages configuration
├── package.json                      # NPM dependencies and scripts
├── package-lock.json                 # Locked NPM dependency versions
├── README.md                         # This file
└── [other config files]              # Various configuration files
```

## Technology Stack

- **Static Site Generator**: [11ty (Eleventy)](https://www.11ty.dev/)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Templating**: HTML, Markdown, Nunjucks
- **Styling**: SCSS & CSS
- **Source Control**: GitHub

---
