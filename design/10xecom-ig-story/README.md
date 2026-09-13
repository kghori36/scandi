# Instagram Story teaser sequence

Three 1080x1920 (9:16) stories for a personal profile, posted in order. They
announce that a launch is coming without ever naming it. Dark `#0B0B0F` ground,
acid `#C6FF3D` accent, Archivo Black display + Space Mono.

| # | File | Device |
| --- | --- | --- |
**Clues** — post one per day, in order:

| # | File | Device |
| --- | --- | --- |
| 01 | `src/Main.dc.html` | "Still up after your shift?" + "I've been building ███" |
| 02 | `src/Clue.dc.html` | `AOV / CAC / LTV` — an audience filter, not a description |
| 03 | `src/LastClue.dc.html` | "It's not traffic. It's ███████." |

**Answers** — the payoff, before the reveal:

| # | File | Device |
| --- | --- | --- |
| 04 | `src/AnswerOne.dc.html` | Decodes the three acronyms |
| 05 | `src/AnswerTwo.dc.html` | Fills 03's redaction bar: "It's math." |

The clues run a visible `01 / 03` counter; the answers switch to `Answer 01` /
`Answer 02`, so story 03 does not read as the end of the campaign. Answer 05
ties both threads together — the three metrics were the math all along — and
closes on "turn on notifications" ahead of the reveal.

**Reveal:**

| # | File | Device |
| --- | --- | --- |
| 06 | `src/Reveal.dc.html` | The name where the redaction bars were |

Story 06 opens in story 01's voice ("So — this is what I've been building") and
drops the wordmark into the slot the redaction bars occupied, so the campaign's
signature device is what pays it off.

Its CTA is a DM keyword (`10X`) rather than a link — it opens a conversation
that can be qualified.

## Avatar

From 10xecom.ca: complete beginners — shift workers and newcomers to North
America, building alongside a job on a tight budget, and heavily targeted by
scams. The promise on story 06 is the site's own line, and the site's
disclaimer ("no income guarantees, real business, real work") is set on the
image on purpose: for this audience, saying it out loud is a trust asset.

Story 01 names the person rather than the product: the headline filters *in*
(a shift worker recognises themselves) instead of filtering out, and the
redaction bar introduces the device story 06 pays off.

**Stories 02–05 are written for the wrong person.** `AOV / CAC / LTV` and "it's
not traffic, it's math" assume an experienced operator. A complete beginner
working shifts does not know those acronyms and will read them as "not for me".
Stories 01 and 06 are rebuilt on the real avatar and are safe to post.

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
