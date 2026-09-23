# Recursis — brand sheet (v1, 2026-08-29)

The canonical brand reference for Recursis Holdings. Anything that carries the
Recursis name draws from this file.

## The name

**Recursis** is a coined word — it didn't exist until we made it. It leans on
**recursion** (a thing defined in terms of itself) and the Latin **recurrere**,
"to run back." That's the company's heart: you run it back. Try, learn, return,
try again.

## The mark — serpent ouroboros

A snake eating its own tail, drawn as a ring: clear head, eye, open jaw closed
on the tail, a rhythm of scales cut into the body.

- **The loop** = persistence. The cycle of never giving up, of always coming
  back to the problem.
- **The bite** = ingenuity. It closes the circle itself; nothing outside it
  finishes the shape.
- Together: *keep coming back, and come back sharper.*

**NOT the triangular ouroboros** (retired 2026-09-23, owner ruling). The
triangle-spiral form read as a triangle-within-triangle symbol the FBI has
documented in another context; the resemblance alone is disqualifying for a
company mark. The meaning carried over unchanged — only the form changed.
**NOT nested squares** (retired 2026-08-29 — v0 placeholder, never use again).

### Canonical SVG (viewBox 0 0 100 100)

Large sizes (tapered body, head + eye, scale rhythm cut in background colour):

```svg
<svg viewBox="0 0 100 100">
<path class="body" d="M54.24 20.80 A30.50 30.50 0 0 1 79.74 44.24" stroke-width="3.00"/>
    <path class="body" d="M79.59 43.62 A30.50 30.50 0 0 1 67.41 76.05" stroke-width="4.60"/>
    <path class="body" d="M67.93 75.68 A30.50 30.50 0 0 1 33.30 76.52" stroke-width="6.20"/>
    <path class="body" d="M33.84 76.87 A30.50 30.50 0 0 1 20.08 45.08" stroke-width="7.80"/>
    <path class="body" d="M19.96 45.70 A30.50 30.50 0 0 1 43.66 21.17" stroke-width="9.20"/>
    <path class="fillbody" d="M39.85 15.77 C49.57 11.68 55.14 12.57 57.65 14.68 L48.23 20.30 L57.22 25.32 C50.41 27.56 43.35 28.38 42.38 27.65 Z"/>
    <circle class="eye" cx="44.83" cy="18.98" r="2.45"/>
    <path class="scale" d="M71.56 32.91 A28.14 28.14 0 1 1 26.95 34.86" stroke-width="2.74" stroke-dasharray="0.9 5.2"/>
</svg>
<!-- .body: fill:none; stroke:accent; round caps/joins (widths are on the paths)
     .fillbody: fill+stroke accent   .eye/.scale: background colour -->
```

Small sizes (≤32px — drop the scale rhythm; ≤16px — drop the eye as well):

```svg
<svg viewBox="0 0 100 100">
<path class="body" d="M54.24 20.80 A30.50 30.50 0 0 1 79.74 44.24" stroke-width="3.00"/>
    <path class="body" d="M79.59 43.62 A30.50 30.50 0 0 1 67.41 76.05" stroke-width="4.60"/>
    <path class="body" d="M67.93 75.68 A30.50 30.50 0 0 1 33.30 76.52" stroke-width="6.20"/>
    <path class="body" d="M33.84 76.87 A30.50 30.50 0 0 1 20.08 45.08" stroke-width="7.80"/>
    <path class="body" d="M19.96 45.70 A30.50 30.50 0 0 1 43.66 21.17" stroke-width="9.20"/>
    <path class="fillbody" d="M39.85 15.77 C49.57 11.68 55.14 12.57 57.65 14.68 L48.23 20.30 L57.22 25.32 C50.41 27.56 43.35 28.38 42.38 27.65 Z"/>
    <circle class="eye" cx="44.83" cy="18.98" r="2.45"/>  <!-- keep at ≤32px; drop only at ≤16px -->
</svg>
```

Social avatar (FB/IG, rendered at 40px): ticks at half depth (`stroke-width="1.5"`
on the scale path) so the ring reads machined, not beaded; mark at ~69% of the
canvas, centred at (512, 508) on 1024. Recipe: `social-kits-staging/recursis-avatar.png`.

Working sources: the header `<svg class="mark">` in every page of
`Recursis-Site`, `logo.svg`, `logo-light.svg`.

### Mark rules

- Head at the top of the ring, mouth closed on the tail — the bite must read.
- Round caps and joins everywhere; never sharp corners.
- One color on dark ground is the default. Never add gradients, 3D, or outline
  effects.
- Nested/concentric snakes are allowed as a *background motif only* (see the
  site hero, where the three rings are rotated so the heads never stack) — the
  recursion nod. The standalone logo is always a single snake.

## Palette

| Token        | Hex       | Use                                  |
|--------------|-----------|--------------------------------------|
| `--bg`       | `#0a0b0d` | Ground — near-black                  |
| `--panel`    | `#121417` | Cards, raised surfaces               |
| `--panel-2`  | `#0e1013` | Quieter panels                       |
| `--line`     | `#23272e` | Borders, rules                       |
| `--text`     | `#e9eaec` | Primary text                         |
| `--muted`    | `#8b9099` | Secondary text                       |
| `--accent`   | `#5eead4` | The teal — mark, links, highlights   |
| `--accent-dim` | `#2f4f4a` | Hover borders, quiet accent uses   |

Dark-first is the identity. The teal is used sparingly — it should feel like a
signal, not a paint job.

## Typography

- **Display / headings:** Space Grotesk (500, 700), tight letter-spacing
  (−.01 to −.02em). The wordmark: RECURSIS, 700, letter-spacing .14em.
- **Body:** system stack (-apple-system, Segoe UI, Inter, Roboto…).
- **Labels / eyebrows:** monospace (ui-monospace, SF Mono, Menlo), uppercase,
  wide tracking (.12–.22em).

## Voice

- Plain, warm, human. Never corporate.
- Honest to the letter: copy never claims what the product doesn't do.
- Confidence without hype — "no hype, no dark patterns, no selling your data."
- Humor lands at shared-life absurdity ("Please do not overthink it."), never
  punching at people or institutions.
- Short sentences. Say the true thing, then stop.

## One-liners (approved)

- "We build honest software people actually use."
- "A small company that builds small, sharp things."
- "Keep coming back, and come back sharper."

## Where it's applied

recursisdigital.com (header, favicon, hero motif, about-page story). Venture
brands (TOCTalk, KitID/GWA, Lane Alerts, PokéSpa) keep their own identities —
Recursis is the parent mark, not a badge on their products.

## Mobile nav drawer (2026-08-31)
Header links collapse into a slide-in drawer below 760px — `.menu-btn`,
`.drawer` and `.scrim` live in `styles.css`, behavior in `/nav.js`, markup on
index / about / hire / ideas. The old flex row overflowed the right edge on a
phone, so About, Pitch and Hire us were unreachable.
**If you add a nav link, add it in BOTH places on that page:** the `.links` row
(desktop) and the `.drawer` list (mobile).
