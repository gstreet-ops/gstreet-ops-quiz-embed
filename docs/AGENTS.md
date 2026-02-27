# Agent Architecture

This document defines the multi-agent system used to maintain and extend the project.
Each agent has a fixed scope — a set of files it owns and rules that govern its output.
Agents must not modify files outside their ownership list.
Cross-domain issues are recorded in `docs/AGENT_FLAGS.md`.

---

## Agents

### Build Agent
Sets up the Vite-based build pipeline that compiles the web component into a single standalone JS bundle. Owns all build config and the wc entry point.

| File | Notes |
|------|-------|
| `vite.config.wc.js` | Full ownership — Vite config for web component build |
| `package.json` | Partial — scripts (`build:wc`, `build:wc:watch`) and devDependencies (vite, @vitejs/plugin-react) only |
| `src/wc/index.js` | Full ownership — entry point that imports QuizEmbedElement and registers it |
| `.npmignore` | Full ownership |
| `dist/` | Full ownership — build output directory |

**Business rules:**
- Must NOT touch existing CRA build (`npm run build`, `npm run deploy`) — iframe path stays intact
- Output must be a single self-contained file: `dist/quiz-embed.js` (IIFE) + `dist/quiz-embed.esm.js` (ESM)
- Bundle must include React, ReactDOM, and Supabase client — zero external dependencies for consumers
- Target: ES2020+ browsers (no IE11)
- Must externalize nothing — the bundle is fully self-contained

---

### Component Agent
Creates the `<quiz-embed>` custom element class with Shadow DOM encapsulation. Mounts the existing React app inside the shadow root.

| File | Notes |
|------|-------|
| `src/wc/QuizEmbedElement.js` | Full ownership — HTMLElement subclass |
| `src/wc/shadow-styles.js` | Full ownership — all CSS for shadow DOM |
| `src/wc/theme.js` | Full ownership — attribute-to-CSS-property mapping |

**Business rules:**
- Must use Shadow DOM (`mode: 'open'`) for style isolation
- HTML attributes map 1:1 to existing URL params: `community`, `bg`, `surface`, `primary`, `accent`, `text`, `font`, `count`, `difficulty`, `timer`, `leaderboard`, `category`, `v`
- `community` attribute is required — show error state if missing
- `attributeChangedCallback` must trigger React re-render when attributes change
- Google Fonts must load inside shadow root, not leak to host document
- Must NOT import from `./hooks/useEmbedTheme.js` — theme injection is handled differently in shadow DOM
- All existing components (EmbedShell, QuizEngine, ResultScreen, etc.) are used as-is via React render
- Container must be `display: block` with configurable height

---

### Events Agent
Adds custom DOM events dispatched from the `<quiz-embed>` element so host pages can listen for quiz lifecycle events.

| File | Notes |
|------|-------|
| `src/wc/events.js` | Full ownership — event factory functions |
| `src/components/EmbedShell.js` | Partial — add event dispatch callback props only, do not restructure |
| `src/components/QuizEngine.js` | Partial — add `onQuizStarted` callback prop only |

**Business rules:**
- Three custom events: `quiz:started`, `quiz:completed`, `quiz:answer`
- Events must be `CustomEvent` with `bubbles: true`, `composed: true` (crosses shadow DOM)
- `quiz:completed` detail: `{ score, total, percentage, streak, communitySlug }`
- `quiz:answer` detail: `{ questionIndex, correct, selectedAnswer, correctAnswer }`
- `quiz:started` detail: `{ communitySlug, questionCount, difficulty }`
- Events dispatch from the custom element (not internal React components)
- EmbedShell receives callback props that bubble data up to the element
- Must not break existing iframe behavior — callbacks are optional/no-op when not provided

---

### Docs Agent
Writes all documentation, demo pages, and updates the roadmap.

| File | Notes |
|------|-------|
| `docs/WEB_COMPONENT.md` | Full ownership — API reference for web component |
| `docs/ROADMAP.md` | Partial — check off Phase 4 items only |
| `README.md` | Partial — add web component section only |
| `demo/web-component.html` | Full ownership — standalone demo page |
| `demo/side-by-side.html` | Full ownership — iframe vs web component comparison |

**Business rules:**
- WEB_COMPONENT.md must include: installation (npm + CDN), all attributes, custom events, styling guide, browser support
- Demo pages must work with local dev server AND production CDN URL
- README update must not remove existing iframe documentation
- All code examples must be copy-pasteable
- Include jsDelivr CDN URL pattern: `https://cdn.jsdelivr.net/npm/@gstreet-ops/quiz-embed@latest/dist/quiz-embed.js`

---

## Execution Order

```
Phase 1 (parallel):  Build Agent + Component Agent
Phase 2 (parallel):  Events Agent + Docs Agent (after Phase 1 merges)
```

Build Agent and Component Agent can run simultaneously — Build owns config/entry, Component owns the element class. Events Agent needs EmbedShell to exist with the web component wired up. Docs Agent needs everything working to write accurate docs.

---

## Cross-Domain Flag Protocol

When an agent discovers an issue outside its file ownership:
1. Do **not** modify the out-of-scope file.
2. Append a flag entry to `docs/AGENT_FLAGS.md` with status `PENDING`, the target agent, and a description.
3. Continue with in-scope work.

---

## Output Format

Each agent session must end with:
- All changed files committed (specific files, never `git add -A`)
- A conventional commit message: `type(scope): description`
  - Types: `feat`, `fix`, `docs`, `chore`, `refactor`
  - Scope: agent name in lowercase (e.g. `feat(build): ...`, `feat(component): ...`)
- A push to `main`
