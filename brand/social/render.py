#!/usr/bin/env python3
"""Recursis FB/IG avatar + cover. Delacroix PASS 2026-09-23.
Run from the repo root:  python3 brand/social/render.py <outdir>
avatar.svg = logo.svg with ticks at half depth + viewBox "0.2 0 97.6 97.6" (mark ~69% fill, centre 512,508).
Cover: mark 259px at (413,175) clears the FB desktop profile circle; text x=750; tagline right edge must stay <1445 (mobile side-crop) — if a phone crops the "+", drop the tagline size 33→31."""
import subprocess, sys, os
from PIL import Image, ImageDraw, ImageFont
out = sys.argv[1] if len(sys.argv) > 1 else os.path.expanduser("~/Desktop/social-kits-staging"); os.makedirs(out, exist_ok=True)
here = os.path.dirname(os.path.abspath(__file__)); root = os.path.dirname(os.path.dirname(here))
BG=(10,11,13); INK=(232,234,237); MUTED=(169,176,184); TEAL=(94,234,212)
# avatar: qlmanage renders the SVG (macOS, no rsvg needed)
subprocess.run(["qlmanage","-t","-s","1024","-o",out,os.path.join(here,"avatar.svg")],capture_output=True)
av=Image.open(os.path.join(out,"avatar.svg.png")).convert("RGB"); av.save(os.path.join(out,"recursis-avatar.png"),optimize=True); os.remove(os.path.join(out,"avatar.svg.png"))
# cover
mark=Image.open(os.path.join(root,"logos","recursis-mark-1024.png")).convert("RGBA"); m=mark.crop(mark.getbbox())
mk=m.resize((259,int(m.height*259/m.width)),Image.LANCZOS)
cv=Image.new("RGBA",(1640,624),BG+(255,)); cv.alpha_composite(mk,(413,175))
d=ImageDraw.Draw(cv); F="/System/Library/Fonts/HelveticaNeue.ttc"
bold=ImageFont.truetype(os.path.join(here,"SpaceGrotesk-Bold.ttf"),104); reg=ImageFont.truetype(F,33,index=0); dom=ImageFont.truetype(F,30,index=1)
x=750
d.text((x,186),"Recursis",font=bold,fill=INK)
d.text((x,318),"Independent software ventures. Persistence +",font=reg,fill=MUTED)
d.text((x,361),"ingenuity — the snake doesn’t let go.",font=reg,fill=MUTED)
d.text((x,418),"recursisdigital.com",font=dom,fill=TEAL)
cv.convert("RGB").save(os.path.join(out,"recursis-cover.png"),optimize=True)
print("avatar", av.size, "cover", cv.size, "→", out)
