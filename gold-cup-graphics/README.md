# Gold Cup Instagram graphics

Renders 1080×1080 Instagram posts in the Gold Cup "U12 Development Program is back" style.
Layout, type sizes and colours are measured from the original post, so every graphic comes out
on the same grid. `out/00-u12-program-is-back.png` is a recreation of the original, kept as a check.

## Make a new post

1. Copy a file in `posts/` (e.g. `01-volunteers-wanted.json`) and edit the text.
2. `npm install` (first time only), then `npm run render` — PNGs land in `out/`.
   Render one file with `node render.mjs posts/my-post.json`.
3. Read the warnings it prints. "Shrunk to N%" means the copy is too long; shorten it rather than accept tiny text.

| Field | What it is | Keep it to |
| --- | --- | --- |
| `kicker` | Gold line above the headline | a few words |
| `headline` | White lines, one string per line | 1–4 lines, ~12 characters each |
| `tagline` | Gold line under the headline | a short exclamation |
| `pills` | `{ "icon", "lines" }` info badges | 2–3 pills, 2 lines each, ~20 characters per line |
| `cta` | White text on the green brush, bottom right | 1–2 lines, ~13 characters each |
| `photo` | Background photo path | a real session photo |
| `photoFlip`, `photoZoom`, `photoFocus` | Optional framing (`true`, `1.2`, `"100% 60%"`) | |

Icons (`assets/icons/`): `calendar-days`, `clock`, `location-dot`, `trophy`, `medal`, `people-group`,
`users`, `user-plus`, `hand-holding-heart`, `graduation-cap`, `clipboard-list`, `bullhorn`, `futbol`.
More can be copied from Font Awesome Free (solid set).

## Brand spec

- Font: Poppins ExtraBold (800), all caps, everywhere.
- Colours: gold `#CFA833` (kicker, tagline, pill borders), white `#FFFFFF` (headline, pills, CTA),
  pill text `#002A1A`, icons black, brush green `#2B6A43`.
- Photo treatment: any photo gets a `rgba(11, 54, 26, 0.63)` deep-green overlay — this is what makes
  different photos look like one series. Don't pre-edit photos.
- Grid: logo top-left; headline block centred above the pills; pills left-aligned and bottom-anchored;
  CTA centred on the brush stroke.

## Before posting for real

- `assets/logo.png` was cut out of a screenshot and is soft. Replace it with the official logo file
  (transparent PNG, same crest).
- `assets/photos/cleat-and-ball.jpg` is the original post's photo with the text removed — a stand-in.
  Use real Gold Cup session photos; action shots without visible faces work best behind the text.

Licences: Poppins (SIL OFL, `assets/fonts/OFL.txt`), Font Awesome Free icons (CC BY 4.0, `assets/icons/LICENSE.txt`).
