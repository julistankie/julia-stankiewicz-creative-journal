# julia.stan — a creative journal

An introductory class website built with HTML, CSS, and JavaScript. There is no framework, build step, or account system.

## Open in VS Code

1. Download and extract the project folder, or clone this repository.
2. In VS Code, choose File > Open Folder and select the extracted folder. Alternatively, open `creative-journal.code-workspace`.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Use the shared navigation to visit Home, Gallery, and Add Entry.

This remote workspace cannot open VS Code on your own computer. Complete those opening steps on your computer.

## Files

- `index.html`: introduction, craft-day counter, process video, Google Map, FAQ.
- `gallery.html`: six photo entries grouped by month, craft/project filters, larger-photo dialog.
- `add-entry.html`: local photo preview with required photo, title, and date.
- `style.css`: shared green/cream palette, typography, responsive layout, keyboard focus styles.
- `script.js`: counter, filters, lightbox, map buttons, FAQ, form preview.
- `images/`: six temporary reference photos, favicon, and source credits.
- `fonts/`: Bree Serif and its Open Font License.
- `video/`: instructions for adding the original process clip.

## Draft features

The counter counts distinct activity dates, across all time. Its six dates are sample data, not Julia's activity history. Craft buttons show the days for a selected medium.

Gallery filters work together. Clicking a photo opens a larger view, closed with Close, Escape, or the outside backdrop. The Google Map switches between five inspiration places, showing one place at a time. FAQ buttons expand their answers.

Add Entry requires a photo, title, and activity date. Craft, project, and note are optional. Choosing Create new project reveals a required project-name field. The form creates a preview only in the current tab. It does not upload, save permanently, or change the public Gallery. Refreshing clears the preview. The class version's Gallery is edited directly in the HTML.

## Before final submission

- Replace all six reference photos and sample dates with Julia's actual projects. Use source photos at least 1250 pixels wide and update captions, alt text, craft labels, and projects.
- Update the `activityDates` list in `script.js` to match the real activity dates.
- Replace the temporary drawing tutorial with Julia's own vertical 9:16 fineliner clip. Change its CSS aspect ratio to `9 / 16` when replacing it.
- Put Julia's chosen email address after `mailto:` in all three footer links. The draft link opens an email composer with a subject but has no recipient yet.
- Check the photo picker and preview on a phone.

## Brand

Bree Serif is self-hosted for the wordmark and main headings. Georgia provides body text. Verdana Bold provides navigation. Georgia and Verdana use the visitor's installed system fonts, with fallbacks.

Forest `#284B37`, cream `#F5F0DF`, sage `#BAC7A6`, ink `#28352B`, muted `#606B5D`. Olive is an accent only.

## Credits

Concept and design preferences: Julia Stankiewicz. AI assistance: OpenAI ChatGPT/Codex helped prepare first-draft HTML, CSS, JavaScript, written copy, and presentation materials. Julia should review and adapt the work for the course.

Reference photos are from Pexels and are labeled as references, not Julia's work. Individual photographer, source, license, dimensions, and alt text appear in `images/credits.json` and the Gallery photo credits. Photographers: Anete Lusina, Ivan S, Berna, Pavel Danilyuk, and Saundarya Srinivasan. License: https://www.pexels.com/license/

Temporary video: Sakura of America, “Sakura Creative Kit — Cherry Blossom.” Source: https://www.sakuraofamerica.com/cherry-blossom-creative-kit/ . Embedded video: https://www.youtube.com/watch?v=--EoHSBART8 . Julia's own clip has not been supplied.

Bree Serif: Google Fonts, under the SIL Open Font License included in `fonts/OFL.txt`.

Inspiration places link to official visitor information on the Home page. The embedded interactive map is provided by Google Maps. Pinterest references informed the earlier mood board.

The Week 10 Figma deck could not be retrieved in this environment. Features follow the written assignment requirements.
