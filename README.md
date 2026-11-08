# ECE ePortfolio

Stefan Spatariu's ECE ePortfolio: a static site (plain HTML, CSS, and a little vanilla JavaScript) published with GitHub Pages. No build step and no dependencies.

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
| `projects.html` | Project card grid: GlowBox (Featured Discovery Project) + BuzzStep | Step 2.5 Technical projects |
| `discovery.html` | GlowBox, the Discovery Project Feature: Overview, The Problem, The Process, The Outcome, What I Learned, optional Video | Step 2.5 Discovery Project Feature |
| `project-2.html` | BuzzStep, same layout as the Discovery Feature | Step 2.5 Technical projects |
| `resume.html` | Embedded `resume.pdf` with Download button and mobile fallback link | Step 2.3 Resume |
| `contact.html` | Email, LinkedIn, GitHub | Step 3 Contact |

Other files: `style.css` (all styling; colors, fonts and spacing are variables at the top, dark mode under `prefers-color-scheme: dark`), `script.js` (mobile menu and header shadow; the site works without it), `favicon.svg`, `resume.pdf`, and `images/`.

## Private materials

`materials/` (source documents and original photos/videos) is listed in `.gitignore` and must never be committed. Web-ready copies of photos go in `images/` with metadata stripped.

## Finishing the content

- Search the project for `TODO`. Every unfinished spot is wrapped in `<span class="todo">…</span>` and highlighted yellow. Delete the span once you've written the real text.
- The Home brand statement and welcome paragraph are marked `DRAFT` in HTML comments until approved.

## Adding a project

1. Copy `project-2.html` to a new file (e.g. `project-3.html`) and update its title, breadcrumb, text and images.
2. In `projects.html`, find the `HOW TO ADD ANOTHER PROJECT` comment, copy the card between `START` and `END`, paste it after the last project card, and fill in the image, title, link, summary and tools.
3. Put images in `images/` (thumbnails 16:10, e.g. 800x500; photos up to about 1600px on the long side). The grid adds columns automatically.

## Images

| File | Used on | Notes |
| --- | --- | --- |
| `images/headshot.jpg` | Home hero | Square crop of Stefan's profile photo (800x800, metadata stripped) |
| `images/glowbox-photo.jpg` | GlowBox, Overview | Still from Stefan's GlowBox video |
| `images/glowbox-thumb.jpg` | Projects, GlowBox card | 16:10 crop of the same still |
| `images/process-diagram.svg` | GlowBox, The Process | The six measurement steps from the GlowBox report |
| `images/results-chart.svg` | GlowBox, The Outcome | Test-strip absorbance values from the GlowBox report |
| `images/buzzstep-photo.jpg` | BuzzStep, Overview | Still from Stefan's BuzzStep video |
| `images/buzzstep-thumb.jpg` | Projects, BuzzStep card | 16:10 crop of the same still |
| `images/glowbox-video-poster.jpg` | GlowBox, Video | Poster frame for `videos/glowbox-demo.mp4` |
| `videos/glowbox-demo.mp4` | GlowBox, Video | Web copy of IMG_1663 (positive reading), H.264 720x1280, no audio track (muted), metadata stripped |
| `videos/buzzstep-demo.mp4` | BuzzStep, Video | Web copy of IMG_1378 (walking with BuzzStep), H.264/AAC 720x1280 with sound, metadata stripped |
| `images/buzzstep-video-poster.jpg` | BuzzStep, Video | Poster frame for `videos/buzzstep-demo.mp4` |

`images/skills-chart.svg`, `images/project-placeholder.svg` and the SVGs in the repo root are older placeholders that no page uses any more; you can delete them.

## Editing tips

- **Videos:** project videos live in `videos/` as H.264 MP4 (720px wide, metadata stripped) and play in a `<figure class="video-figure">` on each project page, with a poster image from `images/`. The `?v=` on each video/poster address forces browsers to fetch a replaced file; change it whenever you replace a video. To swap in a YouTube video instead, replace the `<video>` element with YouTube's Share → Embed `<iframe>`.
- **Section links:** `about.html#bio`, `#pitch`, `#goals`; `discovery.html` and `project-2.html` both have `#overview`, `#problem`, `#process`, `#outcome`, `#learned`, `#video`.
- Keep all links relative (`page.html`, `images/x.jpg`, no leading `/`) so the site works under a GitHub Pages subpath.
