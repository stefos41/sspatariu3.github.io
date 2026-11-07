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
| `projects.html` | Scalable project card grid; Featured Discovery Project card first | Step 2.5 Technical projects |
| `discovery.html` | Discovery Project Feature: Overview, The Problem, The Process, The Outcome, What I Learned, optional Video | Step 2.5 Discovery Project Feature |
| `resume.html` | Embedded `resume.pdf` with Download button and mobile fallback link; optional Career Fair version | Step 2.3 Resume |
| `contact.html` | Email, LinkedIn, GitHub | Step 3 Contact |

Other files: `style.css` (all styling; colors, fonts and spacing are variables at the top, dark mode under `prefers-color-scheme: dark`), `script.js` (mobile menu and header shadow; the site works without it), `favicon.svg`, and `images/`.

## Finishing the content

- Search the project for `TODO`. Every unfinished spot is wrapped in `<span class="todo">…</span>` and highlighted yellow. Delete the span once you've written the real text.
- Replace every `YOUR NAME` (titles, header, hero, footer, meta descriptions), plus `YOUR_EMAIL`, `YOUR-PROFILE` and `YOUR-USERNAME` on the Contact page.
- Add `resume.pdf` (exact name) to the repo root. Optionally add `resume-career-fair.pdf` for the 1-page version, or delete that box on `resume.html`.
- Discovery Project Feature: at least 400 words across Overview, Problem, Process, Outcome and What I Learned, and at least one photo or visual you took or created yourself. Due by the Discovery Project Showcase; remove the "In progress" note when it's done.

## Adding a project

Open `projects.html` and find the `ADD A NEW PROJECT` comment. Copy the block between `START` and `END`, paste it above the "Your next project" placeholder card, and fill in the image, title, link, summary and tools. Put the image in `images/` (16:10, e.g. 1280x800). Delete the placeholder card once you no longer need it.

## Images

| File | Used on | Replace with |
| --- | --- | --- |
| `images/headshot.svg` | Home hero | A square photo of you |
| `images/banner.svg` | Home, Welcome | Optional: a photo of you working on a project |
| `images/roadmap-timeline.svg` | About, Career Goals | Edit the milestone text in the SVG |
| `images/discovery-thumb.svg` | Projects, Discovery card | A cropped project photo (16:10) |
| `images/discovery-photo.svg` | Discovery, Overview | **A photo you took of your project** (required) |
| `images/process-diagram.svg` | Discovery, The Process | Edit stage notes, or your own diagram or prototype photo |
| `images/results-chart.svg` | Discovery, The Outcome | Edit metrics and bar heights, or your own chart |
| `images/project-placeholder.svg` | Projects, template card | Not needed once you add real projects |

To use a photo instead of an SVG, save it in `images/` and change the `src` (and the `alt` text) in the HTML. `images/skills-chart.svg` and the SVGs in the repo root are older placeholders that no page uses any more; you can delete them.

## Editing tips

- **Video (optional):** in `discovery.html`, paste the YouTube `<iframe>` inside `<div class="video-embed">` and delete the placeholder div.
- **Section links:** `about.html#bio`, `#pitch`, `#goals`; `discovery.html#overview`, `#problem`, `#process`, `#outcome`, `#learned`, `#video`.
- Keep all links relative (`page.html`, `images/x.svg`, no leading `/`) so the site works under a GitHub Pages subpath.
