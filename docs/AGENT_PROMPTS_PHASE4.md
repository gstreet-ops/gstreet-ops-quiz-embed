# Phase 4 — Web Component Agent Prompts

Run Phase 1 agents (Build + Component) in parallel.
After both complete and merge, run Phase 2 agents (Events + Docs) in parallel.

Launch each with: `claude --dangerously-skip-permissions`
Then paste the prompt block.

---

## AGENT 1: Build Agent (Phase 1)

```
cd C:\Users\brian\projects\quiz-embed

You are the BUILD AGENT for the quiz-embed web component. Your job is to set up a Vite build pipeline that compiles a `<quiz-embed>` custom element into a standalone JS bundle.

READ THESE FILES FIRST (do not skip):
- docs/AGENTS.md (your file ownership and rules)
- docs/ARCHITECTURE.md (project context)
- package.json (current deps and scripts)
- src/supabaseClient.js (Supabase config that must be bundled)
- src/index.js (existing CRA entry — DO NOT MODIFY)

YOUR FILE OWNERSHIP (only touch these files):
- vite.config.wc.js (create)
- package.json (add scripts and devDeps only — do not remove anything)
- src/wc/index.js (create)
- .npmignore (create)

TASK:
1. Install devDependencies: vite, @vitejs/plugin-react
   Use: npm install --save-dev vite @vitejs/plugin-react

2. Create vite.config.wc.js:
   - Library mode build
   - Entry: src/wc/index.js
   - Output formats: IIFE (dist/quiz-embed.js) and ESM (dist/quiz-embed.esm.js)
   - IIFE global name: QuizEmbed
   - Bundle everything — NO externals (React, ReactDOM, Supabase all go in the bundle)
   - Plugin: @vitejs/plugin-react
   - Define process.env.NODE_ENV as 'production' for React prod build
   - Set resolve.alias for 'react' and 'react-dom' to resolve correctly
   - minify: true

3. Create src/wc/index.js:
   - Import QuizEmbedElement from './QuizEmbedElement' (Component Agent will create this)
   - Register custom element: customElements.define('quiz-embed', QuizEmbedElement)
   - Export QuizEmbedElement as default and named export
   - Add a guard: if (customElements.get('quiz-embed')) don't re-register
   - This file is the ONLY entry point for the web component bundle

4. Add package.json scripts:
   - "build:wc": "vite build --config vite.config.wc.js"
   - "build:wc:watch": "vite build --config vite.config.wc.js --watch"

5. Create .npmignore:
   - Exclude: src/, public/, docs/, demo/, node_modules/, .git/
   - Include: dist/, package.json, README.md, LICENSE

6. Add to package.json for npm publishing:
   - "main": "dist/quiz-embed.js"
   - "module": "dist/quiz-embed.esm.js"
   - "files": ["dist"]
   - Change "private": true to "private": false
   - Add "name": "@gstreet-ops/quiz-embed" (scoped package)

CONSTRAINTS:
- Do NOT modify any existing src/ files outside src/wc/
- Do NOT modify existing scripts (start, build, deploy, etc.)
- Do NOT touch CRA config — it must still work for iframe builds
- The wc/index.js should import from './QuizEmbedElement' even though that file doesn't exist yet (Component Agent creates it) — that's fine, the build will be tested after both agents merge
- Use PowerShell syntax (semicolons, not &&)

WHEN DONE:
- Run: npm install (to verify deps resolve)
- Run: git add vite.config.wc.js src/wc/index.js .npmignore package.json package-lock.json
- Commit: git commit -m "feat(build): add Vite web component build pipeline"
- Push: git push origin main
```

---

## AGENT 2: Component Agent (Phase 1)

```
cd C:\Users\brian\projects\quiz-embed

You are the COMPONENT AGENT for the quiz-embed web component. Your job is to create the <quiz-embed> custom element that wraps the existing React quiz app inside Shadow DOM.

READ THESE FILES FIRST (do not skip):
- docs/AGENTS.md (your file ownership and rules)
- docs/ARCHITECTURE.md (project context)
- src/App.js (current React root — understand what it does)
- src/components/EmbedShell.js (the main component you'll mount)
- src/hooks/useEmbedTheme.js (theme injection — you'll reimplement for shadow DOM)
- src/hooks/useQuestions.js
- src/hooks/useAuth.js
- src/utils/params.js (param parsing — reuse this)
- src/supabaseClient.js

YOUR FILE OWNERSHIP (only touch these files):
- src/wc/QuizEmbedElement.js (create)
- src/wc/shadow-styles.js (create)
- src/wc/theme.js (create)

TASK:
1. Create src/wc/QuizEmbedElement.js — a class extending HTMLElement:

   OBSERVED ATTRIBUTES (same as URL params):
   community, bg, surface, primary, accent, text, font, count, difficulty, timer, leaderboard, category, v

   LIFECYCLE:
   - constructor(): Create shadow root (mode: 'open'). Create a mount div inside it.
   - connectedCallback(): Read all attributes, inject styles, load Google Font into shadow root, mount React.
   - disconnectedCallback(): Unmount React root.
   - attributeChangedCallback(): Re-render React with new props when attributes change.

   REACT MOUNTING:
   - Import React, ReactDOM (createRoot), and EmbedShell from the existing components
   - Import parseEmbedParams from utils/params.js — convert attributes to a URLSearchParams-like object, then call parseEmbedParams() to get the same validated params object
   - Create a React root on the mount div inside shadow root
   - Render <EmbedShell params={params} /> (same as App.js does, but skip the error UI — handle missing community in the element itself)

   THEME IN SHADOW DOM:
   - Do NOT use useEmbedTheme hook (it targets document.documentElement which leaks outside shadow)
   - Instead, set CSS custom properties directly on the shadow root host or mount div
   - Import theme mapping from ./theme.js

   GOOGLE FONTS IN SHADOW DOM:
   - Create a <link> element for Google Fonts and append it to the shadow root (not document.head)
   - This keeps font loading scoped

   ERROR HANDLING:
   - If `community` attribute is missing, render an error message inside shadow DOM (don't mount React)
   - Use a simple styled div, no React needed for error state

2. Create src/wc/theme.js:
   - Export a function: applyTheme(element, params)
   - Sets CSS custom properties on the element: --embed-bg, --embed-surface, --embed-primary, --embed-accent, --embed-text, --embed-font
   - Same property names as useEmbedTheme.js uses
   - Export a function: loadFont(shadowRoot, fontName)
   - Creates/updates a <link> tag in the shadow root for the Google Font

3. Create src/wc/shadow-styles.js:
   - Export a string or CSSStyleSheet containing base styles for the shadow DOM
   - Reset styles inside shadow (box-sizing, margin, padding)
   - Host element: display: block, min-height: 200px
   - Mount container: inherits theme custom properties
   - Must include all the same structural styles that the React components expect (they use var(--embed-bg) etc.)
   - The key insight: React components already use CSS custom properties — we just need those properties set on the shadow root

CONSTRAINTS:
- Do NOT modify any existing files — only create new files in src/wc/
- Do NOT duplicate component logic — reuse EmbedShell and all its children as-is
- Import paths from existing src/ must be relative: '../components/EmbedShell', '../utils/params', etc.
- The element must work when registered by the Build Agent's src/wc/index.js
- All styles must be inside shadow DOM — nothing leaks to host page
- Must handle the case where React components use document.body or window — these still work from shadow DOM, the only risk is style leakage which shadow DOM handles

WHEN DONE:
- Verify files created: src/wc/QuizEmbedElement.js, src/wc/shadow-styles.js, src/wc/theme.js
- Run: git add src/wc/QuizEmbedElement.js src/wc/shadow-styles.js src/wc/theme.js
- Commit: git commit -m "feat(component): create quiz-embed custom element with Shadow DOM"
- Push: git push origin main
```

---

## AGENT 3: Events Agent (Phase 2 — run after Agents 1+2 merge)

```
cd C:\Users\brian\projects\quiz-embed

You are the EVENTS AGENT for the quiz-embed web component. Your job is to add custom DOM events that fire from the <quiz-embed> element during quiz lifecycle.

READ THESE FILES FIRST (do not skip):
- docs/AGENTS.md (your file ownership and rules)
- src/wc/QuizEmbedElement.js (the custom element — you'll wire events to it)
- src/components/EmbedShell.js (you'll add optional callback props)
- src/components/QuizEngine.js (you'll add onQuizStarted callback)

YOUR FILE OWNERSHIP:
- src/wc/events.js (create)
- src/components/EmbedShell.js (partial — add callback props, do not restructure)
- src/components/QuizEngine.js (partial — add onQuizStarted callback only)

TASK:
1. Create src/wc/events.js — event factory functions:

   export function createQuizStartedEvent(detail) {
     return new CustomEvent('quiz:started', {
       bubbles: true, composed: true,
       detail // { communitySlug, questionCount, difficulty }
     });
   }

   export function createQuizCompletedEvent(detail) {
     return new CustomEvent('quiz:completed', {
       bubbles: true, composed: true,
       detail // { score, total, percentage, streak, communitySlug }
     });
   }

   export function createQuizAnswerEvent(detail) {
     return new CustomEvent('quiz:answer', {
       bubbles: true, composed: true,
       detail // { questionIndex, correct, selectedAnswer, correctAnswer }
     });
   }

2. Modify src/components/EmbedShell.js:
   - Add three optional callback props: onQuizStarted, onQuizCompleted, onAnswered
   - In handleQuizComplete, after existing logic, call: onQuizCompleted?.({ score, total, percentage, streak, communitySlug })
   - Pass onQuizStarted down to QuizEngine as a prop
   - In the QuizEngine onComplete handler area, wire onAnswered for per-question callbacks
   - IMPORTANT: These callbacks must be optional — when undefined (iframe mode), nothing changes

3. Modify src/components/QuizEngine.js:
   - Add optional prop: onQuizStarted
   - Call onQuizStarted?.({ communitySlug, questionCount, difficulty }) in useEffect on mount (when questions load)
   - Add optional prop: onAnswered
   - Call onAnswered?.({ questionIndex, correct, selectedAnswer, correctAnswer }) when an answer is selected

4. Wire events in QuizEmbedElement.js (modify the React render):
   - Pass callback functions as props to EmbedShell that dispatch CustomEvents from the host element
   - Example: onQuizCompleted={(detail) => this.dispatchEvent(createQuizCompletedEvent(detail))}
   - Import event factories from './events.js'

CONSTRAINTS:
- Do NOT restructure EmbedShell or QuizEngine — add props only
- All callbacks must be optional (no breaking changes for iframe path)
- Events must use composed: true so they cross the shadow DOM boundary
- Event names use colon separator: quiz:started, quiz:completed, quiz:answer
- Keep changes minimal in existing files — surgical additions only

WHEN DONE:
- Test that existing CRA build still works: npm run build (should succeed with no errors)
- Run: git add src/wc/events.js src/components/EmbedShell.js src/components/QuizEngine.js src/wc/QuizEmbedElement.js
- Commit: git commit -m "feat(events): add custom DOM events for quiz lifecycle"
- Push: git push origin main
```

---

## AGENT 4: Docs Agent (Phase 2 — run after Agents 1+2+3 merge)

```
cd C:\Users\brian\projects\quiz-embed

You are the DOCS AGENT for the quiz-embed web component. Your job is to write documentation, demo pages, and update the roadmap.

READ THESE FILES FIRST (do not skip):
- docs/AGENTS.md (your file ownership and rules)
- docs/ARCHITECTURE.md (project context)
- docs/ROADMAP.md (Phase 4 checkboxes to update)
- docs/CLIENT_SETUP.md (existing iframe docs — don't duplicate, complement)
- docs/EMBED_PARAMS.md (existing param reference)
- src/wc/QuizEmbedElement.js (the custom element — document its API)
- src/wc/events.js (custom events — document them)
- package.json (package name, version, dist files)
- README.md (add web component section)

YOUR FILE OWNERSHIP:
- docs/WEB_COMPONENT.md (create)
- docs/ROADMAP.md (partial — check off Phase 4 items only)
- README.md (partial — add web component section, do not remove existing content)
- demo/web-component.html (create)
- demo/side-by-side.html (create)

TASK:
1. Create docs/WEB_COMPONENT.md — full API reference:

   Sections:
   - Overview (what it is, when to use it vs iframe)
   - Installation: npm (@gstreet-ops/quiz-embed) + CDN (jsDelivr)
   - Quick Start (minimal HTML example)
   - Attributes (full table — same as EMBED_PARAMS.md but as HTML attributes)
   - Custom Events (quiz:started, quiz:completed, quiz:answer with detail schemas)
   - Styling (CSS custom properties that can be set from outside shadow DOM)
   - Browser Support (ES2020+, no IE11)
   - Migration from iframe (side-by-side comparison)
   - Troubleshooting

2. Create demo/web-component.html:
   - Standalone HTML page that loads quiz-embed.js from local dist/ or CDN
   - Shows a working <quiz-embed> element with Ellie Hallaron theme
   - Includes event listeners that log to a visible console panel on the page
   - Toggle between local (../dist/quiz-embed.js) and CDN source via script comment

3. Create demo/side-by-side.html:
   - Two-column layout: iframe embed on left, web component on right
   - Same community and theme params on both
   - Visual proof they produce identical results

4. Update docs/ROADMAP.md:
   - Check off all Phase 4 items that are complete
   - Add any remaining items as unchecked if work is still needed

5. Update README.md:
   - Add a "Web Component" section after the existing iframe section
   - Include: npm install command, CDN script tag, minimal HTML example
   - Link to docs/WEB_COMPONENT.md for full reference
   - Do NOT remove or modify existing iframe documentation

CONSTRAINTS:
- Do NOT modify any src/ files
- All code examples must be copy-pasteable and syntactically valid
- CDN URL pattern: https://cdn.jsdelivr.net/npm/@gstreet-ops/quiz-embed@latest/dist/quiz-embed.js
- Demo pages must use only vanilla HTML/JS — no build tools required to view them
- Use the Ellie Hallaron theme values for all examples:
  community="ellie-hallaron" bg="#0D0D0D" surface="#1A1A2E" primary="#6B2D5E" accent="#8B0000" text="#F5F0EB" font="Cormorant Garamond"

WHEN DONE:
- Run: git add docs/WEB_COMPONENT.md docs/ROADMAP.md README.md demo/
- Commit: git commit -m "docs(wc): add web component documentation and demos"
- Push: git push origin main
```
