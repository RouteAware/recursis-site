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
- Theme polish: current theme is default w/ stock painting banner — replace
  with dark brand look (Site design → Theme/Style; brand: bg #0a0b0d, accent #5eead4)
- Alexander: payout check (shared account — if NWIC payout is set, all shops inherit? verify), optional shop.recursisdigital.com domain
- Recursis-Site: add shop link to the directory (footer or a card) — pending
  next deploy (machine was in disk distress 2026-08-30 ~01:00; see ~/Desktop/.hale-pending-2026-08-30.md)

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
