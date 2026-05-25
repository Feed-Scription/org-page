<p align="right"><b>English</b> · <a href="./README.md">中文</a></p>

# org-page

> Showcase site for the **Feed-Scription** team (a.k.a. the *Tenure-Track Chili* crew) — one page covering everything we shipped this year.

Single-page, pure static. Five chapters, one team narrative. **No build step, no dependencies** — deploy anywhere that serves files.

## What's on the page

| Chapter | Content |
|---|---|
| I · Games | 5 shipped AI-native games (Tenure-Track Chili, Fate River, Cyber Cricket Poker, QuQuer, Neuralchemy) |
| II · Platform | FeedScription — the unified AI / auth / analytics layer powering every team app |
| III · Tools | KAL AI Layer, Fate-River Autotest |
| IV · Events | Douyin AI Creators Program · Suzhou AI Game Hackathon (co-host) |
| V · Press | Nature · Science Net · GameCha · 405 Podcast |

## Stack

- Single `index.html` (HTML + inline CSS)
- `assets/` all WebP (~376 KB total)
- Fonts via Google Fonts CDN
- Modern browsers (WebP supported in 97%+ globally)

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Anywhere that serves static files:

- **Vercel / Netlify / Cloudflare Pages**: import the repo, done
- **GitHub Pages**: Settings → Pages → Source = `main` / root
  > Note: this org's current plan doesn't support Pages (HTTP 422). Upgrade or use another host.

## File layout

```
.
├── index.html          # All markup + inline styles
└── assets/             # 8 WebP screenshots + 1 brand pepper watermark
```

## Adding a card

Every card is an `<article class="card">`. Copy-paste and edit:

```html
<article class="card">
  <div class="thumb"><img src="assets/xxx.webp" alt="..."></div>
  <div class="body">
    <div class="title-row">
      <span class="vbar"></span>
      <h3 class="card-title">Title<span class="en">English subtitle</span></h3>
    </div>
    <div class="tags"><span class="tag">Tag</span></div>
    <p class="one-liner">One-line description</p>
    <div class="cta-row">
      <a class="cta" href="..." target="_blank" rel="noopener">CTA text</a>
    </div>
  </div>
</article>
```

Swap the accent color via `.card.indigo` / `.card.rose` / `.card.emerald` (amber is the default).

## Adding an image

CDN-grade compression pipeline:

```bash
sips -Z 1400 input.png --out resized.png      # downscale to retina-safe size
cwebp -q 80 -m 6 resized.png -o assets/output.webp
```

For portrait shots (e.g. phone UI), use `<div class="thumb contain">` instead of `<div class="thumb">` — the image will be centered on a tinted backdrop so the whole frame is visible.

## License

MIT
