# Aaron Lysaght Walsh: portfolio website

Personal portfolio of Aaron Lysaght Walsh, a Computer Science with Data Science graduate based in Chicago.
Live site: https://aaronlysaghtwalsh.github.io/

A static site: plain HTML, one CSS file and one small JavaScript file. No build step, nothing to install.
Site designed and developed with Claude; content written and checked by Aaron.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| GetMeAJob case study | `getmeajob/index.html` |
| Harris Group case study | `harris-group/index.html` |
| UCD Research case study | `ucd-research/index.html` |
| About | `about/index.html` |
| Contact | `contact/index.html` |
| Page not found | `404.html` |

## Folder map

```
assets/css/styles.css   All styling. Colors and sizes are at the top (section 2).
assets/js/main.js       Mobile menu and screenshot lightbox
assets/fonts/           Newsreader and IBM Plex (SIL Open Font License; licenses included)
assets/img/             Images, as WebP
favicon.svg, og-image.png, robots.txt, sitemap.xml, .nojekyll
```

## Editing

- **Preview on your computer:** double-click `index.html`.
- **Change wording:** open the page's `index.html` in a text editor (Notepad works), change the text between the tags, save, and refresh the browser.
- **Change a color:** edit the values under `:root` near the top of `assets/css/styles.css`. Dark-mode colors sit just below them.
- **Swap an image:** put the new file in `assets/img/...`, then update `src`, `width`, `height` and `alt` on the `<img>` tag.
- **Update the live site:** on GitHub, open the file, click the pencil icon, make the change and commit. The site updates within a few minutes.

## Notes on content

- GetMeAJob screenshots show a fictional applicant and simulated AI output.
- Original Harris Group dashboards and data are confidential and are not included.
