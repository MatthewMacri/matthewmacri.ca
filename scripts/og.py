"""Renders public/og.png (the link-preview image) from the site's own fonts.
Needs fonttools, brotli and Pillow: python3 scripts/og.py"""
import glob, sys, tempfile
from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFont

tmp = tempfile.mkdtemp()

def ttf(pattern):
    font = TTFont(sorted(glob.glob(pattern))[0])
    font.flavor = None
    out = f"{tmp}/{len(glob.glob(tmp + '/*'))}.ttf"
    font.save(out)
    return out

serif = ttf('node_modules/@fontsource-variable/newsreader/files/newsreader-latin-opsz-normal.woff2')
sans = ttf('node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2')
mono = ttf('node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2')

im = Image.new('RGB', (1200, 630), '#f7f7f4')
d = ImageDraw.Draw(im)
title = ImageFont.truetype(serif, 96)
try:
    title.set_variation_by_axes([72, 500])
except Exception:
    pass
d.text((96, 190), 'Matthew Macri', font=title, fill='#18181a')
d.text((100, 330), 'Full-stack developer in Montréal.', font=ImageFont.truetype(sans, 38), fill='#18181a')
d.text((100, 385), 'Tokidos · Euro Gear · KernelOp · Concordia', font=ImageFont.truetype(sans, 30), fill='#65656a')
d.line((100, 500, 1100, 500), fill='#e1e1db', width=2)
d.text((100, 525), 'matthewmacri.ca', font=ImageFont.truetype(mono, 26), fill='#9b2c2c')
im.save('public/og.png', optimize=True)
print('public/og.png')
