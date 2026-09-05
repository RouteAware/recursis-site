# Recursis merch — Fourthwall shop

_Built by Hale 2026-08-30 (~02:00-03:00). Shop is LIVE._

## Shop
- **https://recursis-shop.fourthwall.com** — site LIVE (password page off).
- Same Fourthwall account as NWIC/GWA/Terrible Shirt Co (site switcher,
  bottom-left avatar → Your shop).
- OWNER RULE (2026-08-30): **front logos small, over the left breast** on all
  garments. Applied everywhere.

## Products (all Public)
| Product | Price | Design |
|---|---|---|
| Recursis Tee (black Bella+Canvas) | $28 | teal lockup ~3.4" left chest |
| Portfolio Tee (black) | $34 | lockup left chest front; FULL BACK: mark + RECURSIS + venture roster + RUN IT BACK |
| Recursis Polo (black Port Authority K500) | $42 | EMBROIDERED mark 4" left chest, Kelly Green thread (no true teal thread in standard palette) + black eye |
| Recursis Mug (Black Glossy WGM79B) | $18/$21 (11/15oz) | teal lockup ~2.1×2.6" left of handle |
| Recursis × Never Watch iCarley Mug (white WGM78) | $16/19/22 | mug-nwic strip: mark × prohibition TV |
| Recursis × TrailBrief Mug (white) | $16/19/22 | mug-trailbrief strip |
| Recursis × PokéSpa Mug (white) | $16/19/22 | mug-pokespa strip |
| Recursis × TOCTalk Mug (white) | $16/19/22 | mug-toctalk strip |
| Recursis × Never Watch iCarley Tee (black) | $32 | lockup left chest / NWIC seal+wordmark full back |
| Recursis × TrailBrief Tee (black) | $32 | lockup left chest / TrailBrief mark 10" back |
| Recursis × PokéSpa Tee (black) | $32 | lockup left chest / PokéSpa card frame 10" back |
| Recursis × TOCTalk Tee (black) | $32 | lockup left chest / TOCTalk app icon 6.8" back (1024px master = 150dpi cap) |

All collab tees: two-print base $17.70 → $14.30/sale margin. Mug collab run
completed 2026-08-30 (~03:30-04:15). Left-chest placement via the designer's
"Fit to area → Left chest" preset (~3.1×3.7") — faster + more consistent than
manual resize/position.

## Print masters (Recursis-Site/merch-art/, transparent, Space Grotesk verified)
- print-recursis-front.png 4500×5400 — mark + RECURSIS + RUN IT BACK (dark garments)
- print-recursis-back-portfolio.png 4500×6000 — tour-shirt back (roster lists 6 ventures; REGENERATE when portfolio changes — sources are the *.html files here, headless-Chrome rendered w/ --virtual-time-budget=10000 for fonts)
- print-recursis-seal.png 4500×4500 — mark only (embroidery/mugs)
- print-recursis-sticker.png 4500×4500 — dark tile + mark + wordmark (NOT YET used)

## Backlog
- ~~Mug (Black Glossy)~~ DONE · ~~per-venture collab mugs + tees~~ DONE (see table)
- Sticker ($6, print-recursis-sticker.png) — master ready, product not built
- KitID + Lane Alerts collab tees DEFERRED — only 512px rasters exist; need
  print-grade vector masters first
- ~~Theme polish~~ DONE 2026-08-30 (shop cleanup pass): stock hero replaced
  with two brand posters (masters in merch-art/shop-banner-*.png; "RUN IT
  *back*" headline), theme colors set to brand (Primary #5eead4, bg #0a0b0d,
  dark text over primary), two PUBLIC collections created and wired as
  homepage sections — "The Staples" (Tee/Portfolio Tee/Polo/Mug, manual
  order) then "Venture Collabs" (8 collab items, Newest-first sort so the
  $32 tees lead; storefront caches sort changes for a few minutes)
- Alexander: payout check (shared account — if NWIC payout is set, all shops inherit? verify), optional shop.recursisdigital.com domain
- ~~Recursis-Site: add shop link to the directory~~ DONE 2026-08-30 — "Merch"
  link in the index nav + all four page footers (index/about/ideas/hire)

## Fourthwall gotchas (hard-won)
- The "…" element menu REORDERS in edit mode ("Edit with Adobe Express"
  becomes item 1 where Resize was) — always find-by-ref, never fixed offsets.
  If Adobe Express opens by accident: its X → "Discard changes"; if stuck,
  clear onbeforeunload + reload.
- A second upload while the Front zone is active lands on the FRONT even
  after clicking the Back thumb — switch zones first, VERIFY via screenshot,
  then place from "Your uploads".
- Publish silently failing → reload details page (fields persist) and retry;
  if still failing, rebuild the draft fresh (corrupted-draft syndrome).
- "Fit to area" submenu paints LATE (opens as a blank white panel) — wait ~2s,
  screenshot, THEN click the preset. A click on the blank panel does nothing.
- After "Create another", the first click on the catalog search box usually
  no-ops (page still hydrating) — click/search twice, or use the Bella+Canvas
  card that sits on Discover's "Recommended" row directly.
- The mug "Add to shop" flow inserts a "Review your design on different
  sizes" dialog (Confirm bottom-right); tees skip straight to details.

## 2026-09-04 — Comfort Colors migration (portfolio polish; plan ~/Desktop/FOURTHWALL-POLISH-2026-09.md)
Same recipe as GWA (see Gear Wizard .LLC/MERCH-LINE-v2.md 2026-09-04 notes). Old Bella ids:
Recursis Tee b85f82b5 (recursis-tee) · Portfolio 5c9cdae9 (portfolio-tee) · ×TOCTalk 8c506879
(recursis-toctalk-tee) · ×PokéSpa d97fa029 (recursis-pokespa-tee) · ×TrailBrief 9d85f863
(recursis-trailbrief-tee) · ×NWIC c64238da (recursis-never-watch-icarley-tee).
Prices: Tee $28→$34 ($18.55/sale) · Portfolio $34→$40 · collabs $32→$38 ($16.60/sale).
- 🔄 HIDDEN builds: Recursis Tee — 3e496221-8136-424e-b672-5c278d5dc721 (left chest 3.39×4.06")
- 🔄 Portfolio Tee — a7669dfb-a39d-46e6-943a-1e4f5ac77504 ($40 / $18.60 per sale)
- 🔄 Recursis × TOCTalk Tee — 9785a505-3869-4983-9bd6-86f5800572df ($38 / $16.60; icon 6.80" back)
- 🔄 Recursis × PokéSpa Tee — fe6b6bde-84f2-4934-a520-d0f8b21e0135 ($38 / $16.60; frame 10" back)
- 🔄 Recursis × TrailBrief Tee — d4da8380-ba7d-4686-a7a5-d9434522bbe4 ($38 / $16.60; mark 10" back)
- 🔄 Recursis × Never Watch iCarley Tee — 0d48190e-ba13-4e3d-9e0f-d3fb7feb6c15 ($38 / $16.60; full back)
Old full ids: Recursis Tee b85f82b5-fc19-45a4-890f-8eb0ba36536a · Portfolio 5c9cdae9-71d0-4e1f-9d7d-49a66b859ce1 ·
×TOCTalk 8c506879-a116-4dd4-9792-87a5d06ecdcd · ×PokéSpa d97fa029-1fd4-4dfa-94b3-ef79f9e15ad5 ·
×TrailBrief 9d85f863-624f-48b5-ba8d-7521f294f77a · ×NWIC c64238da-be2f-47fc-b67d-59cc1cbabdd2
- ✅ FLIPPED LIVE 2026-09-04: all 6 new CC tees Public on the clean slugs; old Bella tees renamed `<slug>-bc` + Private
  (rollback = swap URLs back + Public). curl: clean 200 ×6, -bc 404 ×6. Prices now $34 / $40 / $38 ×4.
- ✅ Collections rebuilt (The Staples 4 / Venture Collabs 8). Hero verified. shop.recursisdigital.com CNAME live; LIVE over https ✅ (cert ~13 min after Entri).
