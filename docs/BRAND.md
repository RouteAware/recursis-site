# Recursis — brand sheet (v1, 2026-08-29)

The canonical brand reference for Recursis Holdings. Anything that carries the
Recursis name draws from this file.

## The name

**Recursis** is a coined word — it didn't exist until we made it. It leans on
**recursion** (a thing defined in terms of itself) and the Latin **recurrere**,
"to run back." That's the company's heart: you run it back. Try, learn, return,
try again.

## The mark — triangular ouroboros

A snake eating its own tail, drawn as a triangle.

- **The loop** = persistence. The cycle of never giving up, of always coming
  back to the problem.
- **The triangle** = ingenuity. The simplest, strongest shape there is.
- Together: *keep coming back, and come back sharper.*

**NOT nested squares** (retired 2026-08-29 — v0 placeholder, never use again).

### Canonical SVG (viewBox 0 0 100 100)

Large sizes (head + eye + tapered tail into open mouth):

```svg
<svg viewBox="0 0 100 100">
  <path stroke-width="7" d="M41,15 Q49,8 55,18 L82,66 Q88,77 76,77 L24,77 Q12,77 18,66 L33,40"/>
  <path stroke-width="5.5" d="M33,40 L38,31"/>
  <path stroke-width="4" d="M38,31 L44,20"/>
  <circle cx="47" cy="13" r="2.3"/> <!-- eye: fill = background color -->
</svg>
<!-- all paths: fill:none; stroke:accent; stroke-linecap/linejoin:round -->
```

Small sizes (≤32px — thicker strokes 9/7/5, eye optional; ≤16px — 11/7 two
paths, no eye). Working sources: `index.html` header/hero/favicon.

### Mark rules

- Head at the apex, mouth open toward the tail — the bite must read.
- Round caps and joins everywhere; never sharp corners.
- One color on dark ground is the default. Never add gradients, 3D, or outline
  effects.
- Nested/concentric snakes are allowed as a *background motif only* (see the
  site hero) — the recursion nod. The standalone logo is always a single snake.

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
