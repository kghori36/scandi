# 10xecom — Instagram Story launch graphics

Three 1080x1920 (9:16) story directions for the 10xecom cohort launch.
Dark `#0B0B0F` ground, acid `#C6FF3D` accent, Archivo Black display + Space Mono.

| Direction | File | Idea |
| --- | --- | --- |
| Main | `src/Main.dc.html` | Stacked wordmark drop, single CTA pill |
| B | `src/DirectionB.dc.html` | Acid ticker bands, outlined/filled type, three pillars |
| C | `src/DirectionC.dc.html` | Editorial, hairline rules, restrained |

## Build

```
node build.mjs    # inlines fonts/*.woff2 as @font-face data URIs -> ./*.dc.html
node render.mjs   # screenshots each artboard -> png/10xecom-story-*.png (1080x1920)
```

Fonts are inlined rather than linked because PNG export does not embed webfonts
fetched from a CDN.

Layout keeps the top and bottom 250px clear of content for Instagram's profile
row and reply bar.
