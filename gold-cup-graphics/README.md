# Gold Cup Instagram graphics

Renders 1080×1080 Instagram posts in the Gold Cup style. The brand parts never change: font, colours, logo,
photo overlay, pill and button styles. Each post picks a layout and a background, so the feed doesn't repeat itself.

`out/ref-1-u12-program.png` and `out/ref-2-volunteer-callout.png` recreate two real Gold Cup posts. They're
the calibration check: if a change to `template.html` makes them drift from the originals, the change is off-brand.

## Make a new post

1. Copy a file in `posts/` that has the layout you want, then edit the text.
2. `npm install` (first time only), then `npm run render` — PNGs land in `out/`.
   Render one file with `node render.mjs posts/my-post.json`.
   `node render.mjs --scale 2` renders at 2160×2160 instead (Instagram itself displays 1080×1080).
3. Read the warnings it prints. A "too small for this crop" warning means the photo would be upscaled and look soft:
   use a bigger photo or less `photoZoom`. "Shrunk to N%" means the copy is too long; shorten it rather than accept tiny text.

## Layouts

| `layout` | Use it for | Fields |
| --- | --- | --- |
| `info` | Announcements with details (the U12 "is back" post) | `kicker`, `headline`, `sub`, `pills` (≤3), `cta` |
| `callout` | A question or one clear action (the volunteer post) | `kicker`, `headline` (bigger), `sub`, `button` |
| `countdown` | "3 days to go", "4 locations", any big number | `kicker`, `number`, `headline`, `sub`, `pills` or `button`, `cta` |

- `kicker` / `sub`: gold lines above / below the white headline. `sub` can be one line or a list.
- `headline`: white lines, one string per line, ~12 characters each.
- `pills`: `{ "icon": "...", "lines": ["...", "..."] }`, 2 lines of ~20 characters.
- `button`: `{ "text": "...", "icon": "cursor-click" }` — the wide white button; the icon is optional.
- `cta`: 1–2 short lines on the green brush stroke, bottom right.

## Backgrounds — vary these

Every background gets the same deep-green overlay, so different backgrounds still read as one series.
Don't use the same background two posts in a row.

- A photo: `"photo": "assets/photos/x.jpg"`, optionally `"photoFlip": true`, `"photoZoom": 1.4`,
  `"photoFocus": "50% 0%"` (which part of the photo stays in frame). Close-ups and flips of one photo
  can look like a new shot.
- A drawn pitch: `"pattern": { "type": "pitch", "angle": -18, "x": 78, "y": 62, "r": 235 }`. `x`/`y` (percent)
  place the centre circle, `angle` turns the field, `r` sizes the circle. Put the circle behind a countdown number.
- A goal net: `"pattern": { "type": "net", "x": 55, "y": 22 }`. `x`/`y` place the floodlight glow.

Real session photos are the best option. Drop them in `assets/photos/` and don't pre-edit them;
action shots and details (boots, balls, cones, bibs, clipboards) work better than faces behind text.

Icons (`assets/icons/`): `calendar-days`, `clock`, `location-dot`, `trophy`, `medal`, `people-group`, `users`,
`user-plus`, `hand-holding-heart`, `graduation-cap`, `clipboard-list`, `bullhorn`, `futbol`, `hand-pointer`,
`cursor-click`. More can be copied from Font Awesome Free (solid set).

## Brand spec

- Font: Poppins ExtraBold (800), all caps, everywhere.
- Colours: gold `#CFA833` (kicker, sub, number, borders), white `#FFFFFF` (headline, pills, button, CTA),
  pill/button text `#002A1A`, icons black, brush green `#2B6A43`.
- Overlay on every background: `rgba(11, 54, 26, 0.63)`.
- Logo always top-left; text centred; pills left-aligned and bottom-anchored; button centred at the bottom.

## Before posting for real

- `assets/logo.png` was cut out of a screenshot and is soft. Replace it with the official logo file
  (transparent PNG, same crest).
- Both photos in `assets/photos/` are Gold Cup's own post photos with the text digitally removed, so they
  have soft patches where the text was. Fine behind new text, but replace them with originals or new photos when you can.

Licences: Poppins (SIL OFL, `assets/fonts/OFL.txt`), Font Awesome Free icons (CC BY 4.0, `assets/icons/LICENSE.txt`).
