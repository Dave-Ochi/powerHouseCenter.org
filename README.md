# Power House Center

A simple, responsive static website for Power House Center built with HTML, CSS, and a small amount of JavaScript.

Live demo: (add your published site URL here)

![Screenshot](assets/images/screenshot.png)

## Table of contents
- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Folder structure](#folder-structure)
- [Getting started](#getting-started)
- [Deployment (GitHub Pages)](#deployment-github-pages)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About
Power House Center is a static site intended to present information about the organization, events, and contact information. It’s built to be easy to host (GitHub Pages or any static host) and simple to maintain.

## Features
- Responsive layout for desktop and mobile
- Clean, minimal CSS-based design
- Small client-side JavaScript for interactivity (if needed)
- Easy to deploy via GitHub Pages or any static host

## Tech stack
- HTML
- CSS
- JavaScript (vanilla)

## Folder structure
Example structure — update if your repo differs:
- index.html
- /css — stylesheets
- /js — JavaScript files
- /assets — images, fonts, icons
- README.md

## Getting started

Prerequisites
- Any modern web browser
- (Optional) Node.js + npm if you want to use a local static server

Clone the repo

    git clone https://github.com/Dave-Ochi/powerHouseCenter.org.git
    cd powerHouseCenter.org

Open locally
- Open index.html in your browser
OR
- Use a simple static server:
  - With npm package live-server:

        npx live-server

  - Or with http-server:

        npx http-server -c-1

## Deployment (GitHub Pages)
To publish the site with GitHub Pages:
1. Ensure `index.html` is at the repository root (or put the built files in a `docs/` folder).
2. In the repository Settings → Pages:
   - Select Branch: `main`
   - Folder: `/ (root)` or `/docs`
   - Save and wait a few minutes for the site to publish.
3. (Optional) Add a `CNAME` file with your custom domain and update DNS records (A/ALIAS or CNAME) per GitHub Pages docs.
4. Enable HTTPS from the Pages settings after publication.

If you prefer automated deployments from a build step, I can add a GitHub Actions workflow to build and deploy.

## Contributing
Contributions are welcome. Suggestions:
- Open an issue for bugs or feature requests.
- Submit a pull request with a short description of changes.
- Follow existing code style for HTML/CSS/JS.

If you want a CONTRIBUTING.md, I can create one for you.

## License
Choose a license and replace this section (suggested: MIT). Example:

MIT License
See LICENSE file for details.

## Contact
Repository: https://github.com/Dave-Ochi/powerHouseCenter.org
Author: Dave-Ochi
