# Recursis-Site — STATE (written by Hale at close, 2026-09-23)
<!-- machine header (hale-close): branch master · HEAD c3fcff6 · dirty 0 · unpushed 0 · worktrees 1 · verified-at 2026-09-24 06:44 -->

## Now
- ✅ 2026-09-23 09:25 · HERO MARK PLACEMENT MERGED (0764b2f, owner "post now"): owner said the mark was "awkwardly placed and sized" → two-column hero, mark centred on the copy, viewBox cropped, 34% (owner pick A over solid-mark B), 2+2 chip block, mark hidden <960px. Gates: Delacroix visual ×2 (08:35, 08:50) → Nyla merge gate BLOCK 09:05 (grid rule leaked to the five other `.hero` pages) → scoped to `.hero--split` (7fbbea2) → Nyla PASS 09:20 with About/404/index 1451px captures. Rollback: Vercel → Recursis-Site → Deployments → the ed156e8 production deploy → Instant Rollback (≈30 s, no build). Git path: `git revert -m 1 0764b2f && git push origin master`. Last known-good master = ed156e8.
- Standing test for this repo (Nyla 09-23, LESSONS.md): any styles.css diff touching a selector used on >1 page needs one non-index desktop capture in the merge evidence. Nits parked: `.hero-mark` base rules (styles.css ~77-79) are still unscoped — the next page that adds a mark inherits them; at 1000–1100px the mark centres on the lede not the h1 (`align-self:start;margin-top:4rem` under an 1100px query); Delacroix would take opacity .34 → .27 (owner's line).
- ✅ 2026-09-23 07:05 · `recursis-craft` MERGED + LIVE (d1510fd → Vercel dpl_ATsaDJ6E, READY): serpent mark A in header + hero, About "The mark is an ouroboros" paragraph verified on prod by Hale's own screenshot, og:image:alt on all 5 pages, favicon/touch/og files, motion pass (reduced-motion respected), ladder showpiece, mobile hire fix. Gate: Ansel read about.html + og alt at 06:52 PASS (correction: the paragraph lives in about.html, not ideas.html). Rollback: `git revert -m 1 d1510fd && git push origin master`.
- ✅ 2026-09-24 10:35 ET · FB avatar + cover with the serpent mark LIVE on facebook.com/recursisdigital (Hale, owner's Chrome) · 12:05 page bio rewritten to "Recursis Digital is a small independent studio…" (Ansel read 11:58, owner "post everything in queue now"). IG: no Recursis account exists (owner creates if wanted). Owner: phone-check the cover crop.
- Hale · later: BRAND.md ≤32px SVG snippet omits the eye circle that every page header includes (Ansel note 09-23) — one-line doc fix; refinement round on the mark if the owner's "lukewarm" holds.

## Verified live
- facebook.com/recursisdigital shows the serpent cover, serpent avatar, and a bio beginning "Recursis Digital is a small independent studio" · screenshot in chat 2026-09-24 12:07 ET · verify: open the page.
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
