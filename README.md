# Osama Ahmed — Portfolio

A black-and-white, interactive professional story built from Osama Ahmed's CV,
his three CREATIVA certificates and his portrait. Static HTML, CSS and vanilla
JavaScript — no framework, no build step, no tracking.

**Design principle:** at first glance, simplicity. After interacting, depth.
The career journey and the business philosophy are revealed one chapter at a
time instead of being printed on the page all at once.

---

## The experience

| Section | Behaviour |
|---|---|
| **Hero** | Oversized Dosis typography, outlined second line, a monochrome portrait and a thin rule system. Four verified numbers from the CV sit on the baseline. |
| **Business Mindset** | Closed state shows only the title and an *Explore my mindset* control. Opening it reveals the exact statement, surrounded by an orbit of PEOPLE, OPPORTUNITIES, REAL VALUE, RELATIONSHIPS, LONG-TERM THINKING and CONTINUOUS LEARNING, with animated connector lines. Collapse returns to the quiet state. |
| **Career Timeline** | Three minimal cards — number, stage name, indicator. Clicking one opens a full-screen chapter with the complete description, relevant areas, learning outcomes, training details and certificate actions. Previous / next navigation moves between chapters with a directional transition. |
| **Ventures** | An editorial accordion. Each venture opens in place with its real status, role, description and key contributions. |
| **Capabilities** | Text-only competency groups and the CV's freelance-service list. No percentages, progress bars or invented ratings. |
| **Contact** | Large type, copy-to-clipboard email, WhatsApp, LinkedIn, Instagram, CV download and native share with a copy-link fallback. |

### Certificate privacy

Certificates never appear on the main timeline and are never shown as thumbnails
inside a chapter. A chapter only lists the training and displays a **View
Certificate** button where a real certificate file exists. The certificate image
is inserted into the DOM only when that button is pressed, inside a dedicated
viewer with zoom, fullscreen, open-file and close controls.

- Stage 01 → Digital Marketing, 35 hours.
- Stage 02 → professional sales training. No certificate file was supplied, so no
  certificate action is shown.
- Stage 03 → Ideation Bootcamp, 38.5 hours and 77 hours.

No certificate is generated, mocked or replaced with a placeholder.

---

## Visual system

- Pure black `#000000`, pure white `#FFFFFF`, secondary grey `#A0A0A0`, line grey `#242424`.
- Display type: **Dosis** (200–700) — narrow, rounded, tall and geometric.
- Body type: **Barlow** (300–600) — clean and readable without feeling corporate.
- Hairline borders, no cards with drop shadows, no colour accents, no decorative gradients.
- Motion: fade and rise reveals, card expansion, chapter curtain transition, text reveals,
  drawn orbit lines, slow rotating rings, number transitions and minimal hover shifts.
- Every animation is disabled or reduced under `prefers-reduced-motion`.

---

## Accessibility

- Semantic landmarks, skip link, visible focus rings, labelled controls.
- Chapter and certificate dialogs use `role="dialog"`, `aria-modal`, focus trapping,
  Escape handling and focus restoration.
- The certificate viewer supports `+`, `-` and `0` for zoom; chapters support
  left/right arrow navigation.
- Body scroll is locked only while an overlay is open.
- Reduced-motion and keyboard paths are supported throughout.

---

## Files

```
index.html                      single page, semantic markup
assets/css/styles.css           design tokens and every component
assets/js/data.js               verified content: chapters, ventures, skills, certificates
assets/js/app.js                interactions, dialogs, viewer, copy/share
assets/img/profile/             portrait
assets/img/certificates/        the three original certificate images
assets/img/projects/            Wady Le3b logo
assets/img/favicon.svg
Osama-Ahmed-CV.pdf              original CV, unchanged
site.webmanifest, robots.txt, sitemap.xml
```

---

## Run locally

```bash
python -m http.server 8000
# open http://localhost:8000
```

A local server is preferred over opening `index.html` directly, because the
certificate viewer and CV download behave more consistently over HTTP.

---

## Publish

1. Push the contents of this folder to the root of a repository.
2. **Settings → Pages → Deploy from a branch → main / (root)**.
3. Replace `https://osama-ahmed.github.io/` in `index.html`, `sitemap.xml` and
   `robots.txt` with the final domain if it differs.

---

## Content rules followed

- Only figures printed in the CV are used: 2 years in sales, 20+ real estate
  deals, 60+ client meetings, 150+ training hours, four venture concepts.
- Concept-stage ventures are labelled as concepts. No invented live URLs,
  testimonials, pricing, availability status or campaign results.
- The business-mindset statement is reproduced exactly as supplied.
- The three career-stage descriptions follow the supplied copy.
- The CV file is the original shared PDF, not a regenerated document.
