# ECE ePortfolio

A static ePortfolio site (plain HTML, CSS, and a little vanilla JavaScript) published with GitHub Pages. No build step and no dependencies.

## Preview locally

```
python -m http.server 8000
```

Then open http://localhost:8000. (Use `python3` or `py` if `python` isn't found.)

## Pages and the rubric

| Page | What's on it | Rubric item |
| --- | --- | --- |
| `index.html` | Hero (headshot + brand statement), short Welcome, links to everything | Step 2.1 Welcome statement |
| `about.html` | `#bio` Biography (story arc), `#pitch` written Elevator Pitch, `#goals` Career Goals + How I'll Get There | Step 2.2 About Me, Step 2.4 Career Goals, Step 3 Elevator Pitch |
| `projects.html` | Project card grid: Featured Discovery Project + Project 2 (add more from the template comment) | Step 2.5 Technical projects |
| `discovery.html` | Discovery Project Feature: Overview, The Problem, The Process, The Outcome, What I Learned, optional Video | Step 2.5 Discovery Project Feature |
| `resume.html` | Embedded `resume.pdf` with Download button and mobile fallback link | Step 2.3 Resume |
| `contact.html` | Email, LinkedIn, GitHub | Step 3 Contact |

Other files: `style.css` (all styling; colors, fonts and spacing are variables at the top, dark mode under `prefers-color-scheme: dark`), `script.js` (mobile menu and header shadow; the site works without it), `favicon.svg`, and `images/`.

## Finishing the content

- Search the project for `TODO`. Every unfinished spot is wrapped in `<span class="todo">…</span>` and highlighted yellow. Delete the span once you've written the real text.
- Replace every `YOUR NAME` (titles, header, hero, footer, meta descriptions), plus `YOUR_EMAIL`, `YOUR-PROFILE` and `YOUR-USERNAME` on the Contact page.
- Add `resume.pdf` (exact name) to the repo root.
- Discovery Project Feature: at least 400 words across Overview, Problem, Process, Outcome and What I Learned, and at least one photo or visual you took or created yourself. Due by the Discovery Project Showcase; remove the "In progress" note when it's done.

## Adding a project

1. Copy `project-2.html` to a new file (e.g. `project-3.html`) and update its title, breadcrumb, text and images.

## Images

| File | Used on | Replace with |
| --- | --- | --- |
| `images/headshot.svg` | Home hero | A square photo of you |
| `images/discovery-thumb.svg` | Projects, Discovery card | A cropped project photo (16:10) |
| `images/discovery-photo.svg` | Discovery, Overview | **A photo you took of your project** (required) |
| `images/process-diagram.svg` | Discovery, The Process | Edit the step notes, or your own diagram or prototype photo |
| `images/results-chart.svg` | Discovery, The Outcome | Edit metrics and bar heights, or your own chart |
| `images/project-2-thumb.svg` | Projects, Project 2 card | A cropped photo or screenshot (16:10) |

To use a photo instead of an SVG, save it in `images/` and change the `src` (and the `alt` text) in the HTML. `images/skills-chart.svg`, `images/project-placeholder.svg` and the SVGs in the repo root are older placeholders that no page uses any more; you can delete them.

## Editing tips

- **Video (optional):** in `discovery.html` or `project-2.html`, paste the YouTube `<iframe>` inside `<div class="video-embed">` and delete the placeholder div.
- **Section links:** `about.html#bio`, `#pitch`, `#goals`; `discovery.html` and `project-2.html` both have `#overview`, `#problem`, `#process`, `#outcome`, `#learned`, `#video`.
- Keep all links relative (`page.html`, `images/x.svg`, no leading `/`) so the site works under a GitHub Pages subpath.
