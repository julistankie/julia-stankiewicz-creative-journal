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
- `gallery.html`: four original photo entries grouped by month, craft/project filters, larger-photo dialog.
- `add-entry.html`: local photo preview with required photo, title, and date.
- `style.css`: shared green/cream palette, typography, responsive layout, keyboard focus styles.
- `script.js`: counter, filters, lightbox, map buttons, FAQ, form preview.
- `images/`: original artwork photographs, video poster, favicon, and credits.
- `fonts/`: Bree Serif and its Open Font License.
- `video/`: original drawing process clip.

## Draft features

The counter counts distinct activity dates, across all time. The four dates come from Julia’s supplied activity dates. Craft buttons show the days for a selected medium.

Gallery filters work together. Clicking a photo opens a larger view, closed with Close, Escape, or the outside backdrop. The Google Map switches between five inspiration places, showing one place at a time. FAQ buttons expand their answers.

Add Entry requires a photo, title, and activity date. Craft, project, and note are optional. Choosing Create new project reveals a required project-name field. The form creates a preview only in the current tab. It does not upload, save permanently, or change the public Gallery. Refreshing clears the preview. The class version's Gallery is edited directly in the HTML.

## Brand

Bree Serif is self-hosted for the wordmark and main headings. Georgia provides body text. Verdana Bold provides navigation. Georgia and Verdana use the visitor's installed system fonts, with fallbacks.

Forest `#284B37`, cream `#F5F0DF`, sage `#BAC7A6`, ink `#28352B`, muted `#606B5D`. Olive is an accent only.

## Credits

Concept and design preferences: Julia Stankiewicz. AI assistance: OpenAI ChatGPT/Codex helped prepare first-draft HTML, CSS, JavaScript, written copy, and presentation materials. 

Artwork, photographs, and drawing process video: Julia Stankiewicz. Contact address is used exactly as supplied.

Bree Serif: Google Fonts, under the SIL Open Font License included in `fonts/OFL.txt`.

Inspiration places link to official visitor information on the Home page. The embedded interactive map is provided by Google Maps. Pinterest references informed the earlier mood board.

## Draft 2 progress

Hover and active states now cover links and buttons. Current-page navigation uses a persistent underline. Font sizes use rem units. Flexible grid columns, responsive photos and media, and narrow-screen form stacking were checked at desktop width and in live 390px browser frames.

All nine authored text/background combinations pass WebAIM AA normal-text contrast. Evidence and check notes are in `docs/`. All sample artwork, dates, video, project labels, and contact links have been replaced. Four original photos are supplied at 1152 × 1536 pixels. The earlier project brief requires six different photos at least 1250 pixels wide, so two additional photos and higher-resolution originals remain needed. Add Entry is still a local preview.
