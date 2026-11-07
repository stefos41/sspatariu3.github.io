# ECE ePortfolio

A static ePortfolio site (plain HTML, CSS, and a little vanilla JavaScript) published with GitHub Pages. No build step and no dependencies.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Home: hero, About Me, links to every section |
| `discovery.html` | Individual Discovery: strengths, values, interests |
| `roadmap.html` | ECE Roadmap: timeline, course plan, skills gap, career goals |
| `pitch.html` | Elevator pitch (with an optional 16:9 video embed box) |
| `resume.html` | Resume viewer and download (expects `resume.pdf` in the repo root) |
| `experience.html` | Projects, coursework, work, leadership |
| `reflection.html` | Where I've been / am / am going |
| `contact.html` | Email, LinkedIn, GitHub |
| `style.css` | All styling. Colors, fonts and spacing are variables at the top (`:root`); dark mode is under `prefers-color-scheme: dark` |
| `script.js` | Mobile hamburger menu and header shadow. The site works without it |
| `images/` | Placeholder graphics used by the pages |
| `favicon.svg` | Browser tab icon, also used as the logo mark in the header |

The SVGs in the repo root are the original placeholders. The pages use the copies in `images/`.

## Finishing the content

- Search the project for `TODO`. Every unfinished spot is wrapped in `<span class="todo">…</span>` and highlighted yellow. Delete the span once you've written the real text.
- Replace every `YOUR NAME` (titles, header, hero, footer, meta descriptions) and the three contact placeholders.
- Add your resume as `resume.pdf` (exact name) in the repo root.

## Editing tips

- **Photos:** replace `images/headshot.svg` with a square photo (or point the `<img>` at a `.jpg`). For a project screenshot, about 16:10 works well.
- **Graphics:** open `images/skills-chart.svg` or `images/roadmap-timeline.svg` in a text editor and change the labels. Comments in each file explain what to edit.
- **New project:** in `experience.html`, copy everything from `<article class="card project-card">` to `</article>`.
- **New table row:** copy a `<tr>…</tr>` line in `roadmap.html`.
- **Skill level pills (optional):** in the Skills Gap table, `<span class="level level-1">Beginner</span>` (`level-2` = intermediate, `level-3` = strong).
- **Video:** in `pitch.html`, paste the YouTube `<iframe>` inside `<div class="video-embed">` and delete the placeholder div.
- Keep all links relative (`page.html`, `images/x.svg`, no leading `/`) so the site works under a GitHub Pages subpath.
