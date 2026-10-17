# Anon0ne portfolio

Static GitHub Pages site for https://anon0ne.github.io/.

Features AetherFTP, Marauder V8 Control, and Proxmark3 Easy GUI with repository links, descriptions, and screenshot enlargement. The palette follows AetherFTP's dark purple/cyan interface. No build system, tracking, external fonts, or runtime dependencies are required.

## Deploy

In repository Settings → Pages, select Deploy from a branch, branch master, folder /(root). The root index.html is the entrypoint. If Pages already has another deployment workflow, align that workflow with these static root files before publishing.

## Edit

- index.html: copy, project links, and image captions.
- style.css: responsive layout and colors.
- script.js: screenshot dialog, footer year, and contact email draft.
- assets/: original screenshots from the project repositories and the site favicon.

Relative asset paths support GitHub Pages without configuration. Screenshot previews contain illustrative/synthetic data and are labeled accordingly.

## Contact and Element invites

The contact form addresses Justin@bizhostnc.com and defaults its subject to “Request an invite to our Element server.” Visitors can edit the subject for other questions. JavaScript URL-encodes the subject and message into a mailto draft; the visitor must send it in their configured email app. The form does not send email from GitHub Pages or collect submissions in a database. A direct email link is provided as a fallback. No email credentials or third-party form service are used.

## Screenshot sources

- Anon0ne/AetherFTP: docs/images/aetherftp-0.1.2b.png.
- Anon0ne/marauder-v8-gui: docs/screenshots/workspace-0.4.2b.png.
- Anon0ne/Proxmark3-Easy-GUI-by-Justin: Proxmark3Suite/gui-card-preview.png.

Descriptions follow the project READMEs reviewed October 13, 2026. Screenshots can show an older interface than the current release. Requirements, limitations, and licenses are documented in each project repository.
