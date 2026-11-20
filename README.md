# Know Vinayak

Personal website of Vinayak Gupta: mechanical engineer, former Senior Associate Manager at Maruti Suzuki India, PGDM International Business at MDI Gurgaon with a Master in Management at emlyon business school.

A plain static site: HTML, CSS and a little JavaScript. No build step, no backend, no frameworks.

## Files

```
index.html     the page
404.html       shown for any wrong URL
css/style.css  all styles
js/main.js     journey hover, copy-email button
img/           photos
.nojekyll      tells GitHub Pages to serve files as they are
```

## Deploy on GitHub Pages

1. Create a new public repository on github.com, for example `vinayak-gupta`.
2. Upload everything in this folder (not the folder itself) to the repository root. Make sure `.nojekyll` is included.
3. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, the branch to **main** and the folder to **/ (root)**. Save.
4. After a minute or two the site is live at `https://<your-username>.github.io/<repository-name>/`.

To get the shorter address `https://<your-username>.github.io/`, name the repository exactly `<your-username>.github.io`.

## Editing

- Text: edit `index.html` directly on GitHub (pencil icon) and commit. The site updates within a minute or two.
- Photos: replace a file in `img/` with one of the same name, or add a new file and change the `src` in `index.html`.
- Colours and fonts: the tokens at the top of `css/style.css` (`--white`, `--black`, `--signal` and the three font families).

## Preview locally

Open `index.html` in a browser. Everything works offline except the Google Fonts, which fall back to system fonts.
