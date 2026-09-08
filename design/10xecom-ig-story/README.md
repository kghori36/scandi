# Instagram Story teaser

One 1080x1920 (9:16) story for a personal profile: announces that a launch is
coming without revealing what it is. Dark `#0B0B0F` ground, acid `#C6FF3D`
accent, Archivo Black display + Space Mono.

The hook is a redaction: "I've been building ███ █████". The product is never
named. CTA is `Follow me + stay tuned` (personal profile, not a brand page),
with `Reply with your best guess` to pull story replies into DMs.

## Build

```
node build.mjs    # inlines fonts/*.woff2 as @font-face data URIs -> ./Main.dc.html
node render.mjs   # screenshots each artboard -> png/10xecom-story-main.png (1080x1920)
```

Fonts are inlined rather than linked because PNG export does not embed webfonts
fetched from a CDN.

Layout keeps the top and bottom 250px clear of content for Instagram's profile
row and reply bar. The gap between the guess line and the CTA is deliberate
room for a poll or question sticker.
