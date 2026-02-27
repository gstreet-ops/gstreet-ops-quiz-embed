# Quiz Embed Platform

A standalone, URL-configurable trivia widget served via iframe to third-party websites. Connects to an existing Supabase backend shared with [trivia-app](https://github.com/gstreet-ops).

## Live URL

https://gstreet-ops.github.io/gstreet-ops-quiz-embed/

## Quick Start

```html
<iframe
  id="quiz-iframe"
  src="https://gstreet-ops.github.io/gstreet-ops-quiz-embed/?community=ellie-hallaron&bg=%230D0D0D&primary=%236B2D5E&accent=%238B0000&font=Cormorant+Garamond"
  width="100%" height="600" frameborder="0"
  allowtransparency="true" style="border:none">
</iframe>
```

## Features

- URL-driven configuration — no server setup per client
- Full theming via URL params (colors, fonts)
- Anonymous play with optional auth
- Community and platform leaderboards
- iframe auto-resize via postMessage
- `<quiz-embed>` web component with Shadow DOM isolation
- Custom DOM events: `quiz:started`, `quiz:answer`, `quiz:completed`
- Shared Supabase auth with trivia-app

## Web Component

For developer clients who want tighter integration than an iframe, use the `<quiz-embed>` custom element:

```html
<script src="https://cdn.jsdelivr.net/npm/@gstreet-ops/quiz-embed@latest/dist/quiz-embed.js"></script>

<quiz-embed
  community="ellie-hallaron"
  bg="#0D0D0D"
  primary="#6B2D5E"
  accent="#8B0000"
  font="Cormorant Garamond"
></quiz-embed>
```

Or install via npm:

```bash
npm install @gstreet-ops/quiz-embed
```

```js
import '@gstreet-ops/quiz-embed';
```

Listen for quiz lifecycle events:

```js
document.querySelector('quiz-embed').addEventListener('quiz:completed', (e) => {
  console.log(`Score: ${e.detail.score}/${e.detail.total}`);
});
```

Full API reference: [docs/WEB_COMPONENT.md](docs/WEB_COMPONENT.md)

## Development

```bash
npm install
npm start            # CRA dev server (iframe path)
npm run build:wc     # Build web component bundle to dist/
npm run deploy       # Deploy iframe version to gh-pages
```

## Docs

- [Architecture](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Embed Parameters](docs/EMBED_PARAMS.md)
- [Client Setup (iframe)](docs/CLIENT_SETUP.md)
- [Web Component API](docs/WEB_COMPONENT.md)
- [Supabase Scripts](docs/SUPABASE_SCRIPTS.md)
