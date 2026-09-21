# Recursis-Site — STATE (written by Hale at close, 2026-09-21)
<!-- machine header (hale-close): branch master · HEAD ccc6225 · dirty 1 · unpushed 0 · worktrees 1 · verified-at 2026-09-21 09:13 -->

## Now
- Hale · nothing queued; the site is static and live. Next touch only when a card changes.
- Alexander · optional: drop a `logos/miniverse.png` (40×40) so The Miniverse card matches the others.

## Verified live
- The Miniverse card (In development) live on recursisdigital.com · `curl -s https://recursisdigital.com | grep -c sim-v2-eta` → 1 · 2026-09-18
- Vercel production deploy Ready from commit 6252d08 · `npx vercel ls` in this folder · 2026-09-18

## Open owner calls
- A logo for The Miniverse card · Hale's default: text-only card stays · decide-by: whenever
- The card's status flips to "Live" only when a stranger flow is proven (council 09-18) · default: In development

## Rollback
- `git revert 6252d08 && git push origin master` — Vercel auto-redeploys in ~6 s.

## Do-not-touch
- The navbar: hand-duplicated 8× across index/about/hire/ideas (memory `recursis-site-nav-gotcha`) — change all eight or none · no expiry.
- This folder is on the iCloud Desktop: check for ` 2.html` duplicates before every commit · no expiry.
