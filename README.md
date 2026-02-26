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
- Shared Supabase auth with trivia-app

## Development

```bash
npm install
npm start        # localhost:3000
npm run deploy   # builds and pushes to gh-pages
```

## Docs

- [Architecture](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Embed Parameters](docs/EMBED_PARAMS.md)
- [Client Setup](docs/CLIENT_SETUP.md)
- [Supabase Scripts](docs/SUPABASE_SCRIPTS.md)
