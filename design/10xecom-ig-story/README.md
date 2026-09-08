# Instagram Story teaser sequence

Three 1080x1920 (9:16) stories for a personal profile, posted in order. They
announce that a launch is coming without ever naming it. Dark `#0B0B0F` ground,
acid `#C6FF3D` accent, Archivo Black display + Space Mono.

| # | File | Device |
| --- | --- | --- |
| 01 | `src/Main.dc.html` | Redaction bars: "I've been building ███ █████" |
| 02 | `src/Clue.dc.html` | `AOV / CAC / LTV` — an audience filter, not a description |
| 03 | `src/LastClue.dc.html` | "It's not traffic. It's ███████." |

Each opens on an `01 / 03` counter, so the sequence announces its own length.

The curiosity is about the viewer's business, not about the product's name —
a name nobody has heard yet carries no stakes, so there is no name puzzle.
Story 02 narrows the audience without naming the category: operators recognise
the three metrics, nobody else does. Story 03 states a tension they already
feel and redacts the answer.

CTA on all three is `Follow me + stay tuned` (personal profile, not a brand
page), with a reply/DM prompt to pull story replies into DMs.

## Build

```
node build.mjs    # inlines fonts + src/_base.css into each artboard -> ./*.dc.html
node render.mjs   # screenshots each artboard -> png/10xecom-story-*.png (1080x1920)
```

`src/_base.css` holds the styling shared by all three artboards; each source
file carries only what is specific to it. Fonts are inlined rather than linked
because PNG export does not embed webfonts fetched from a CDN.

Layout keeps the top and bottom 250px clear of content for Instagram's profile
row and reply bar. The gap above each CTA is deliberate room for a poll or
question sticker.
