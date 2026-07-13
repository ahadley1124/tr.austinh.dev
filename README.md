# Austin Hadley Field Readiness Profile

Static personal volunteer profile for Austin Hadley's Team Rubicon-related Field Readiness work in Northern Ohio. This is a sister site to `austinh.us`, using the same simple one-page approach with plain HTML, CSS, and minimal JavaScript.

## Personal-Site Disclaimer

This is Austin Hadley's personal website describing his volunteer experience. It is not an official Team Rubicon website and is not operated, reviewed, or endorsed by Team Rubicon. Team Rubicon and its associated marks are the property of their respective owner.

## Technology Overview

- Semantic HTML5
- Plain CSS with custom properties
- Minimal vanilla JavaScript
- Static assets only
- No framework, build process, backend, database, analytics, cookies, CMS, contact form, or third-party JavaScript

The site works by opening `index.html` locally.

## File Structure

```text
tr.austinh.dev/
├── index.html
├── styles.css
├── script.js
├── README.md
├── _headers
├── robots.txt
├── sitemap.xml
├── favicon.svg
└── assets/
    ├── README.md
    └── austin-headshot.jpg
```

## Local Preview

Open `index.html` directly in a browser.

For a local server:

```powershell
python -m http.server 8080
```

Then open `http://127.0.0.1:8080`.

Optional Wrangler preview:

```powershell
npx wrangler pages dev .
```

Wrangler is not required.

## Cloudflare Pages Deployment

Preferred deployment path: connect GitHub to Cloudflare Pages.

- Repository: `ahadley1124/tr.austinh.dev`
- Production branch: `main`
- Framework preset: none
- Build command: leave blank
- Build output directory: `/`
- Root directory: `/`

Optional direct deployment:

```powershell
npx wrangler pages deploy . --project-name tr-austinh-dev --branch main
```

Git integration is preferred so production deploys are tied to the `main` branch.

## Custom Domain Configuration

Add this custom domain in Cloudflare Pages:

```text
tr.austinh.dev
```

If `austinh.dev` is already managed in the same Cloudflare account, Cloudflare Pages should normally create or guide creation of the required DNS record. Do not hard-code account IDs, zone IDs, API tokens, or account email addresses in this repository.

## Updating Site Content

### Change The Appointment Summary

Edit the Current Appointment section in `index.html`. Keep the role written as `Field Readiness`, the geography as `Northern Ohio`, the appointment date as `May 2026`, and the position type as `Volunteer` unless the confirmed facts change.

### Add A Service-History Entry

Use the commented `Future experience entry template` in `index.html`. Copy it near the Experience section, remove the comment markers, and replace the date, type, public event name, location, role, and verified work performed.

### Add An Operation

Add only public, verified operation information. Do not publish internal operation details, private addresses, tactical information, survivor information, private documents, or unapproved photographs.

### Add A Training Item

Add the item to the relevant list in the Qualifications section. Do not call a qualification a certification unless that status is confirmed. Do not publish certificate numbers, private identifiers, instructor names, or nonpublic records.

### Replace The Headshot

Replace `assets/austin-headshot.jpg` with a personal photo Austin has permission to use. Keep a square or portrait crop and update the `width`, `height`, and `alt` text in `index.html` if the dimensions or image meaning change.

### Add An Approved Field Photo

Place approved images in `assets/`, document them in `assets/README.md`, and add descriptive alt text. Avoid stock disaster imagery, scraped Team Rubicon imagery, photos of disaster survivors without permission, photos of other volunteers without permission, and photos containing private operational information.

### Configure The Team Rubicon-Related Email Address

Replace `REPLACE_WITH_TEAM_RUBICON_EMAIL` in `script.js` with Austin's approved Team Rubicon-related contact email before production deployment. Until this is done, the site displays a non-clickable notice instead of a working `mailto:` link.

### Update External Official Links

Official Team Rubicon links are currently:

- Volunteer page: `https://teamrubiconusa.org/how-to-get-involved/volunteer-with-us/`
- Partnership page: `https://teamrubiconusa.org/how-to-get-involved/become-a-partner/`
- Main site: `https://teamrubiconusa.org/`

Verify these before production launch.

### Change The Custom Domain

Update the canonical URL, Open Graph URL, `robots.txt`, `sitemap.xml`, and Cloudflare Pages custom-domain settings.

## Adding Experience Entries

Future entries should include only verified public facts:

- Operation, exercise, training, or service-project name
- Location at an appropriate public level
- Month and year
- Austin's role
- Verified work performed
- Relevant qualifications used

Do not invent operation names, deployment dates, locations, impact numbers, awards, testimonials, or command responsibilities.

## Replacing Assets

See `assets/README.md` for asset provenance and photo rules.

Any future official Team Rubicon logo or photography must come from an approved Team Rubicon media or brand source and should only be added with appropriate authorization. Do not download, trace, recreate, redraw, approximate, or scrape the official Team Rubicon logo. Do not create a confusingly similar cross-and-river emblem.

## Configuring Contact Information

The public personal phone number from the source site is retained:

- Display: `419-528-8497`
- Link: `tel:+14195288497`

The H2 Technologies business email is intentionally not used. The Team Rubicon-related email placeholder is located near the top of `script.js`.

## Trademark And Branding Safeguards

This is Austin's personal volunteer profile, not an official Team Rubicon website. The header uses an original AH monogram and Austin's name. The site may truthfully refer to Team Rubicon, Team Rubicon volunteer service, Greyshirt context where appropriate, Field Readiness, and Northern Ohio, but it must not imply official endorsement, ownership, sponsorship, command authority, or public representation.

Fundraising forms, merchandise, sponsorship packages, cause-marketing claims, and personal donation collection are not included.

## Accessibility Notes

The site includes semantic landmarks, one `h1`, skip-to-content link, visible focus states, keyboard-accessible mobile navigation, `aria-expanded`, `aria-controls`, responsive layouts, reduced-motion support, meaningful link text, and readable contrast. Run a browser accessibility audit before launch and after major edits.

## Privacy And Security Notes

The site avoids analytics, cookies, remote JavaScript, embedded feeds, form processors, private credential identifiers, certificate images, internal operational details, tactical channels, and private Team Rubicon documents.

Cloudflare Pages headers are defined in `_headers`, including a restrictive Content Security Policy for self-hosted assets.

## Pre-Deployment Checklist

- [ ] Replace Team Rubicon email placeholder
- [ ] Confirm all public qualification names
- [ ] Confirm whether Co-ops needs expanded wording
- [ ] Review appointment description
- [ ] Add verified service-history entries when available
- [ ] Confirm permission for every photo
- [ ] Confirm no official logo is used without authorization
- [ ] Test all official Team Rubicon links
- [ ] Test mobile navigation
- [ ] Test keyboard navigation
- [ ] Run an accessibility audit
- [ ] Verify CSP and Cloudflare headers
- [ ] Add `tr.austinh.dev` in Cloudflare Pages
- [ ] Confirm the personal-site disclaimer remains visible

## TODO

- Replace `REPLACE_WITH_TEAM_RUBICON_EMAIL` with Austin's approved Team Rubicon-related contact email before production deployment.
- Confirm the preferred public expansion or wording for `Co-ops`.
