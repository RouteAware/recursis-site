# Recursis-Site — STATE (written by Hale at close, 2026-09-23)
<!-- machine header (hale-close): branch master · HEAD 0844883 · dirty 1 · unpushed 0 · worktrees 1 · verified-at 2026-09-23 06:38 -->

## Now
- Hale · Morning 09-23: Ansel glances at the ONE changed copy line on `recursis-craft` (the mark is no longer "drawn as a triangle" → "loop = persistence, bite = ingenuity", commit 3bb0f93), then `git checkout master && git merge --no-edit recursis-craft && git push origin master`. That ships serpent mark A (owner pick 09-23 03:45, lukewarm → refinement round later), favicon/touch/og/logo files, the motion pass (craft.js 3.8 KB, CSS +10 KB, reduced-motion static), sticky header, ladder-as-climb, and the #hire 390px grid fix.
- Alexander · after the merge: replace the triangle mark off-site by hand — FB/IG avatar + cover (`~/Desktop/social-kits-staging/recursis-avatar.png`, `recursis-cover.png`), Fourthwall merch art (`merch-art/print-recursis-*.png`, four files; printed goods = his call). The old triangle form is disqualified (owner 09-23 02:55).

## Verified live
- master 7faf147 on recursisdigital.com: `#what-we-build` six-rung ladder + Vivaris card pill "Early alpha" · `curl -s https://recursisdigital.com/ | grep -o 'id="what-we-build"\|Early alpha'` · 2026-09-23 02:35 ET.
- Preview `recursis-craft` Ready (mark A + motion): https://recursis-site-6frmusa5n-alexander-hughes-projects.vercel.app · 2026-09-23 03:20 ET.

## Open owner calls
- Mark A refinement round (he "guesses he agrees with A") · default: ship A, refine within the week · decide-by 2026-09-26
- Printed merch with the old triangle mark: pull listings or let stock run out · default: pull the four Recursis merch listings until re-art · decide-by 2026-09-26
- Vivaris card flips to "Live" only when a stranger flow is proven (council 09-18) · default: Early alpha

## Rollback
- `git revert -m 1 7faf147 && git push origin master` removes tonight's two merges (Vercel redeploys in seconds). After the craft merge: `git revert -m 1 <merge-sha>`.

## Do-not-touch
- Branch `recursis-craft` — pushed, unmerged until Ansel's glance · expiry 2026-09-24.
- The navbar: hand-duplicated across index/about/hire/ideas (memory `recursis-site-nav-gotcha`) — change all or none · no expiry.
- This folder is on the iCloud Desktop: check for ` 2.html` duplicates before every commit · no expiry.
