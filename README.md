# Karthick's portfolio

Live site: **https://karthickrahul.github.io/portfolio/**

## How to edit (no coding needed)

All the text on the site lives in one file: **`content.js`**.

1. Open `content.js` on GitHub and click the ✏️ pencil icon (top right of the file).
2. Change the text between the quotes. Wrap words in `**double stars**` to make them bold.
3. Click **Commit changes…** → **Commit changes**.
4. Wait about 1 minute, then refresh the live site.

Common edits:

| I want to… | Do this in `content.js` |
|---|---|
| Add a project | Copy one `{ ... },` block inside `projects`, paste it below, change the text |
| Add a job / step | Copy one line inside `career` and edit it (oldest first) |
| Change the red rotating words | Edit `rotatingWords` |
| Hide "Open to internships" | Change `status` (e.g. `"Open to work"`) |
| Show my phone | Fill in `phone: "+420 ..."` |

**Mistake?** If the page goes blank after an edit, a quote or comma is missing.
Open the file's **History**, compare with the previous version, or revert the commit.

## Adding your photo

1. In the repo, click **Add file → Upload files** and upload e.g. `photo.jpg`
   (portrait, about 800×1000 px, under 500 KB).
2. In `content.js` set `photo: "photo.jpg"` and commit.

## Files

- `index.html`: design and animation (you don't need to touch this)
- `content.js`: all your text and links
- `archive/2026-08-portfolio.html`: the previous version of this site
