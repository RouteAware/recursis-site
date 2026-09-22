# Recursis-Site — STATE (written by Hale at close, 2026-09-21)
<!-- machine header (hale-close): branch master · HEAD 42e1f3c · dirty 0 · unpushed 0 · worktrees 1 · verified-at 2026-09-21 09:14 -->

## Now
- Hale · branch `vivaris-card` is pushed and NOT merged: The Miniverse card → **Vivaris**, link
  `https://vivaris.app`, and `logos/vivaris.png` (96×96, the same size as every other card logo).
  Merge it only once vivaris.app actually resolves — until then the card would link to nothing.
- Alexander · the logo ask below is CLOSED: the sim has a real mark now (sim-v2 branch
  `vivaris-identity`, `apps/web/public/brand/`), and the card logo is cut from it.

## Verified live
- The Miniverse card (In development) live on recursisdigital.com · `curl -s https://recursisdigital.com | grep -c sim-v2-eta` → 1 · 2026-09-18 · SUPERSEDED by `vivaris-card` once merged
- Vercel production deploy Ready from commit 6252d08 · `npx vercel ls` in this folder · 2026-09-18

## Open owner calls
- ~~A logo for The Miniverse card~~ · CLOSED 2026-09-21: the mark exists and is on the card
- The card's status flips to "Live" only when a stranger flow is proven (council 09-18) · default: In development
- Merging `vivaris-card` before vivaris.app resolves ships a dead link · Hale's default: hold the merge

## Rollback
- `git revert 6252d08 && git push origin master` — Vercel auto-redeploys in ~6 s.

## Do-not-touch
- The navbar: hand-duplicated 8× across index/about/hire/ideas (memory `recursis-site-nav-gotcha`) — change all eight or none · no expiry.
- This folder is on the iCloud Desktop: check for ` 2.html` duplicates before every commit · no expiry.
