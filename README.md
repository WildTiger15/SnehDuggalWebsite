# Sneh Duggal — Personal Website

A single-page animated portfolio site. No build step, no framework — plain HTML/CSS/JS, so it runs anywhere (open the file directly, or host it for free).

## Updating your resume / content

Edit **`js/resume-data.js`** only. It's one plain-text object — name, education,
experience bullets, projects, publications, skills, links. Save the file and
refresh the page; nothing else needs to change.

- Set `link: null` on a project/paper to show a "coming soon" tag instead of a broken link.
- To swap the downloadable résumé file, drop a new file into `assets/` and update
  `resumeFile` in `resume-data.js` to match its filename.
- `about` / `goals` at the top of the file are the bio paragraphs on the About
  section — **written as a first draft from your resume, worth personalizing.**

## Running locally

No install needed — just open `index.html` in a browser, or serve it:

```bash
npx serve .
```

## Deploying (free options)

**GitHub Pages** — push this repo to GitHub, then in the repo Settings → Pages,
set the source to the `main` branch / root. Your site will be live at
`https://<username>.github.io/<repo-name>/`.

**Netlify / Vercel** — drag-and-drop this folder onto app.netlify.com/drop, or
connect the GitHub repo for auto-deploys on every push. No build command needed.

## Structure

```
index.html          page structure
css/style.css        all styling + animations (theme colors as CSS variables)
js/resume-data.js    ← edit this to update content
js/main.js           renders resume-data.js into the page + drives animations
assets/              résumé file + any future images
```

## Notes

- Light/dark theme toggle (top right) — persists via localStorage.
- Animations respect `prefers-reduced-motion`.
- Project links: only the Hubble morphology pipeline demo (hst-mpp.testapp.ca) is
  live right now — add more URLs to `resume-data.js` as you get them.
- Publications are marked "In Submission" — update the `status` field per entry
  once anything is accepted/published, and add a `link` for the paper/DOI.
