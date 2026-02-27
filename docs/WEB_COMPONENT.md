# `<quiz-embed>` Web Component — API Reference

Drop a fully interactive trivia quiz into any page with a single HTML tag. No iframe, no build step, no framework required.

```html
<script src="https://cdn.jsdelivr.net/npm/@gstreet-ops/quiz-embed@latest/dist/quiz-embed.js"></script>

<quiz-embed community="ellie-hallaron"></quiz-embed>
```

---

## Installation

### CDN (simplest)

Add the script tag anywhere in your page. The `<quiz-embed>` element registers automatically.

```html
<script src="https://cdn.jsdelivr.net/npm/@gstreet-ops/quiz-embed@latest/dist/quiz-embed.js"></script>
```

Pin to a specific version to avoid surprise changes:

```html
<script src="https://cdn.jsdelivr.net/npm/@gstreet-ops/quiz-embed@0.1.0/dist/quiz-embed.js"></script>
```

### npm

```bash
npm install @gstreet-ops/quiz-embed
```

Then import in your JavaScript:

```js
// ESM
import '@gstreet-ops/quiz-embed';

// Or import the class directly
import { QuizEmbedElement } from '@gstreet-ops/quiz-embed';
```

The IIFE build (`dist/quiz-embed.js`) auto-registers the custom element on load. The ESM build (`dist/quiz-embed.esm.js`) does the same but as a module.

---

## Basic Usage

```html
<quiz-embed community="ellie-hallaron"></quiz-embed>
```

The `community` attribute is **required**. All other attributes are optional and have sensible defaults.

### Fully Themed Example

```html
<quiz-embed
  community="ellie-hallaron"
  bg="#0D0D0D"
  surface="#1A1A2E"
  primary="#6B2D5E"
  accent="#8B0000"
  text="#F5F0EB"
  font="Cormorant Garamond"
  count="10"
  difficulty="mixed"
  leaderboard="both"
></quiz-embed>
```

---

## Attributes

All attributes map 1:1 to the iframe URL parameters documented in [EMBED_PARAMS.md](./EMBED_PARAMS.md). The web component uses the same validation and defaults.

### Required

| Attribute | Type | Description |
|-----------|------|-------------|
| `community` | string | Community slug from trivia-app. Shows error if missing. |

### Theme

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `bg` | hex color | `#0D0D0D` | Background color |
| `surface` | hex color | `#1A1A2E` | Card / surface color |
| `primary` | hex color | `#6B2D5E` | Primary accent (buttons, highlights) |
| `accent` | hex color | `#8B0000` | Secondary accent (correct answers, progress bar) |
| `text` | hex color | `#F5F0EB` | Body text color |
| `font` | string | `Inter` | Google Font name (spaces, not `+`) |

> Unlike the iframe URL params, hex colors on the web component do **not** need URL encoding. Use `bg="#0D0D0D"` directly.

### Behavior

| Attribute | Type | Default | Options | Description |
|-----------|------|---------|---------|-------------|
| `count` | number | `10` | 5, 10, 15, 20 | Questions per game |
| `difficulty` | string | `mixed` | easy, medium, hard, mixed | Difficulty filter |
| `timer` | number | `0` | any positive int | Seconds per question (0 = off) |
| `leaderboard` | string | `community` | community, platform, both | Leaderboard tabs shown |
| `category` | string | `all` | any category slug | Filter by question category |
| `v` | number | `1` | 1 | Embed version pin |

---

## Custom Events

The `<quiz-embed>` element dispatches three lifecycle events. All events use `bubbles: true` and `composed: true`, so they cross the Shadow DOM boundary and can be caught on any ancestor element.

### `quiz:started`

Fired when the quiz begins (questions loaded, first question displayed).

```js
document.querySelector('quiz-embed').addEventListener('quiz:started', (e) => {
  console.log(e.detail);
  // { communitySlug: "ellie-hallaron", questionCount: 10, difficulty: "mixed" }
});
```

| Detail field | Type | Description |
|-------------|------|-------------|
| `communitySlug` | string | The community slug |
| `questionCount` | number | Total questions in this game |
| `difficulty` | string | Difficulty setting |

### `quiz:answer`

Fired after each answer (including timeouts).

```js
document.querySelector('quiz-embed').addEventListener('quiz:answer', (e) => {
  console.log(e.detail);
  // { questionIndex: 0, correct: true, selectedAnswer: "Paris", correctAnswer: "Paris" }
});
```

| Detail field | Type | Description |
|-------------|------|-------------|
| `questionIndex` | number | Zero-based question index |
| `correct` | boolean | Whether the answer was correct |
| `selectedAnswer` | string \| null | The selected answer (null if timed out) |
| `correctAnswer` | string | The correct answer |

### `quiz:completed`

Fired when the quiz finishes and score is saved.

```js
document.querySelector('quiz-embed').addEventListener('quiz:completed', (e) => {
  console.log(e.detail);
  // { score: 8, total: 10, percentage: 80, streak: 3, communitySlug: "ellie-hallaron" }
});
```

| Detail field | Type | Description |
|-------------|------|-------------|
| `score` | number | Correct answers |
| `total` | number | Total questions |
| `percentage` | number | Score as percentage |
| `streak` | number | Current daily play streak |
| `communitySlug` | string | The community slug |

---

## Styling

### Shadow DOM Isolation

The web component uses Shadow DOM (`mode: 'open'`), which means:

- Host page CSS **cannot** leak into the quiz
- Quiz styles **cannot** leak into the host page
- Google Fonts load inside the shadow root

### Sizing

The element defaults to `display: block` with `min-height: 200px`. Control the size from the host page:

```css
quiz-embed {
  width: 100%;
  max-width: 700px;
  height: 600px;
}
```

### CSS Custom Properties

The component sets these CSS custom properties internally based on attribute values. They are scoped to the shadow root and not accessible from the host page:

- `--embed-bg`
- `--embed-surface`
- `--embed-primary`
- `--embed-accent`
- `--embed-text`
- `--embed-font`

---

## Dynamic Attribute Updates

Changing attributes after the element is connected triggers a React re-render:

```js
const quiz = document.querySelector('quiz-embed');
quiz.setAttribute('difficulty', 'hard');
quiz.setAttribute('count', '5');
```

---

## Browser Support

Requires ES2020+ and Custom Elements v1:

| Browser | Supported |
|---------|-----------|
| Chrome 80+ | Yes |
| Edge 80+ | Yes |
| Firefox 63+ | Yes |
| Safari 13.1+ | Yes |
| iOS Safari 13.4+ | Yes |
| Opera 67+ | Yes |
| IE 11 | No |

---

## iframe vs Web Component

| Feature | iframe | Web Component |
|---------|--------|---------------|
| Setup | Paste URL | Add script + tag |
| Style isolation | Full (separate document) | Shadow DOM |
| Custom events | postMessage only | Native DOM events |
| Bundle size | N/A (loads full page) | Single JS file |
| SEO | Not indexed | In-page content |
| Auth persistence | Subject to 3P cookie rules | Same-origin storage |
| Framework integration | Any | Any |

**Recommendation:** Use the web component for developer clients who want event hooks and tighter integration. Use the iframe for non-technical clients who just need to paste a snippet.

---

## Troubleshooting

**Element shows "Missing required attribute: community"**
- Ensure the `community` attribute is set and matches an active community slug in the trivia platform.

**Quiz loads but no questions appear**
- The community may not have active questions. Check the trivia-app Commissioner Dashboard.

**Fonts don't load**
- Google Fonts are loaded inside the shadow root. Ensure the page allows network requests to `fonts.googleapis.com`.

**Events not firing**
- Verify you're listening on the `<quiz-embed>` element itself (or an ancestor, since events bubble).
- Check the browser console for errors.
