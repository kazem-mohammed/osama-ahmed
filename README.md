# Osama Ahmed — Business Development Portfolio

A premium, bilingual (EN/AR) single-page portfolio for **Osama Ahmed** — Business Development · Business Strategy · Market Research.

## Primary conversion goal
**Job seeker.** CTAs: Download My CV · Let's Work Together (WhatsApp/email) · LinkedIn.
A freelance-services block is included as a secondary section (it is part of the CV).

## Visual identity
- **Industry:** Business → elegant dark navy + gold, serif display headings (Playfair Display), clean body type (Inter), IBM Plex Sans Arabic for Arabic.
- **Dark mode is the default**; light and system modes supported with LocalStorage persistence and a no-flash inline boot script.
- **Custom cursor:** minimal gold dot + ring, desktop (hover + fine pointer) only, disabled on touch.

## Everything on this site is real
| Content | Source |
|---|---|
| Experience, achievements (20+ deals, 60+ meetings) | `Osama-Ahmed-CV.pdf` (original, unchanged) |
| Projects: Daira, CarValue, BanqOK, EZ Souq | CV "Selected Business Projects" (concept-stage, statuses quoted) |
| Wady Le3b logo project | Provided logo image (owner-confirmed design work) |
| Timeline: 3 career steps | Provided career narrative |
| Future by AI coordinator role | CV "Additional Experience" |
| 3 certificates (35h / 38.5h / 77h) | Provided certificate images |
| Portrait | Provided photo |
| Contact channels | Provided email / phone / LinkedIn / Instagram |

**Deliberately omitted (nothing invented):** testimonials, availability status, pricing, skill percentages, fake live URLs for concept-stage projects, fake form backend. The contact composer opens the visitor's own email app via `mailto:`.

## Featured rule
Featured = most complete data + visual asset: **Daira**, **CarValue**, **Wady Le3b**.

## Structure
```
index.html            all markup + SEO/OG + JSON-LD Person
assets/css/styles.css design system (tokens, dark/light, responsive, reduced-motion, print)
assets/js/data.js     EN/AR dictionary, timeline, skills, projects, wins, certificates
assets/js/app.js      theme, i18n, cursor, filters, project modal, lightbox, CV modal, composer
assets/img/           portrait, logo, certificates, favicon
Osama-Ahmed-CV.pdf    original CV — never regenerated
site.webmanifest · robots.txt · sitemap.xml
```

## Publish (GitHub Pages)
1. Update the canonical URL in `sitemap.xml` and the JSON-LD `url` field to the real GitHub Pages URL.
2. Push the folder to a repository (e.g. `osama-ahmed-portfolio`).
3. Settings → Pages → Deploy from branch → `main` / root.
4. Optional: add a custom domain.

## Local preview
```bash
python -m http.server 8812
# → http://127.0.0.1:8812
```
