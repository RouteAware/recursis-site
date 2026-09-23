# Recursis-Site — STATE (written by Hale at close, 2026-09-23)
<!-- machine header (hale-close): branch master · HEAD 00f0852 · dirty 0 · unpushed 0 · worktrees 1 · verified-at 2026-09-23 06:38 -->

## Now
- ✅ 2026-09-23 07:05 · `recursis-craft` MERGED + LIVE (d1510fd → Vercel dpl_ATsaDJ6E, READY): serpent mark A in header + hero, About "The mark is an ouroboros" paragraph verified on prod by Hale's own screenshot, og:image:alt on all 5 pages, favicon/touch/og files, motion pass (reduced-motion respected), ladder showpiece, mobile hire fix. Gate: Ansel read about.html + og alt at 06:52 PASS (correction: the paragraph lives in about.html, not ideas.html). Rollback: `git revert -m 1 d1510fd && git push origin master`.
- Alexander · NEXT SESSION (gate b), upload only: FB/IG avatar + cover with the serpent mark, Delacroix PASS 07:45 (v2: avatar 69% fill + half-depth ticks, cover mark clear of the FB profile circle, Space Grotesk wordmark). Files `~/Desktop/social-kits-staging/recursis-avatar.png` + `recursis-cover.png` (triangle versions kept as `*-triangle-2026-08-30.png`; reproducible: `python3 brand/social/render.py`). Steps: (1) facebook.com → Recursis page → click the profile photo → Update → upload recursis-avatar.png, no crop; (2) Edit cover photo → Upload photo → recursis-cover.png → drag nothing, Save; (3) Instagram app → Edit profile → Change photo → same avatar; (4) open the FB page on your phone — if the '+' of 'Persistence +' is cropped at the right edge, tell Hale ('tagline 31'). Fourthwall merch art (`merch-art/print-recursis-*.png`, four files) still carries the triangle — printed goods = his call before Hale redraws.
- Hale · later: BRAND.md ≤32px SVG snippet omits the eye circle that every page header includes (Ansel note 09-23) — one-line doc fix; refinement round on the mark if the owner's "lukewarm" holds.

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
