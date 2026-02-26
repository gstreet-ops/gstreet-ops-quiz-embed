# Quiz Embed Platform — Roadmap

**Repo:** `gstreet-ops/quiz-embed`  
**First client:** Ellie Hallaron author site (`ellie-hallaron-website`)  
**Backend:** Shared Supabase project with `trivia-app`

---

## Phase 1 — Foundation (First Client)
**Goal:** Ship a working embed on Ellie Hallaron's site. Validate the architecture with a real deployment.  
**Estimated effort:** 10–14 hours

### 1.1 Repo Setup (0.5 hr)
- [x] Create `gstreet-ops/quiz-embed` repo
- [x] Initialize React app scaffold
- [x] Add Supabase JS client
- [x] Configure gh-pages deploy script
- [x] Enable GitHub Pages
- [x] Connect to shared Supabase project

### 1.2 URL Param System (1 hr)
- [x] Build `utils/params.js` — parse, validate, and provide defaults for all embed params
- [x] Build `hooks/useEmbedTheme.js` — inject CSS custom properties from params
- [x] Dynamic Google Fonts loading from `font` param
- [x] Graceful fallback for missing or invalid params

### 1.3 Supabase Integration (1.5 hrs)
- [x] Build `hooks/useQuestions.js` — fetch community questions by slug, category, difficulty
- [x] Validate community slug on load — friendly error if not found
- [x] Anonymous session ID generation and localStorage persistence
- [x] Confirm RLS policies allow anon reads on `community_questions`
- [x] Add anon INSERT policy on `games` and `game_answers`

### 1.4 Core Quiz Engine (2.5 hrs)
- [x] `EmbedShell.js` — outer container, theme injection, postMessage resize
- [x] `QuizEngine.js` — question display, answer grid, selection, immediate feedback
- [x] Score tracking (correct count, percentage)
- [x] Question progression and end detection
- [x] Optional countdown timer (reads `timer` param, 0 = disabled)
- [x] Mobile responsive layout

### 1.5 Result Screen (1 hr)
- [x] Score summary with percentage and correct/total
- [x] Answer review (expandable)
- [x] Play Again button
- [x] Login prompt for anonymous users

### 1.6 Auth Modal (1.5 hrs)
- [x] Lightweight email/password login modal
- [x] Registration flow (shared Supabase Auth)
- [x] Anonymous score claim on login (match session_id to profile)
- [x] Persist auth state in localStorage

### 1.7 Leaderboard (2 hrs)
- [x] Community leaderboard tab — top 10 by average score
- [x] Platform leaderboard tab — top 10 across all communities
- [x] Tab visibility controlled by `leaderboard` URL param
- [x] Refresh after each completed game
- [x] Guest entries as "Guest-XXXX", highlight current player

### 1.8 Ellie Hallaron Integration (0.5 hr)
- [x] Confirm Ellie Hallaron community exists in trivia-app with questions loaded
- [x] Generate final embed URL with Dark Glamour theme params
- [x] Add `trivia.html` to `ellie-hallaron-website` with iframe + resize listener
- [x] Add nav link to author site
- [ ] Test desktop and mobile

### 1.9 Documentation (0.5 hr)
- [x] `docs/EMBED_PARAMS.md` — full parameter reference
- [x] `docs/CLIENT_SETUP.md` — install on any HTML site
- [x] Update `README.md`

---

## Phase 2 — Second Client + Generalization
**Goal:** Onboard a second client. Validate true reusability without custom code.  
**Estimated effort:** 4–6 hours

### 2.1 Embed Code Generator in trivia-app (3 hrs)
- [x] Visual theme configurator tab in Commissioner Dashboard
- [x] Color pickers for bg, primary, accent, text
- [x] Font selector (tested Google Fonts dropdown)
- [x] Behavior controls (count, difficulty, timer, leaderboard scope)
- [x] Live preview panel
- [x] Copy-to-clipboard iframe snippet
- [x] Save theme config to `communities.settings.embed_theme` JSONB

### 2.2 Second Client Onboarding (1–2 hrs)
- [ ] Create community in trivia-app
- [ ] Load questions via CSV
- [ ] Generate embed snippet
- [ ] Verify on client's live site

### 2.3 Cross-Origin Auth Polish (1 hr)
- [ ] Test auth persistence in Safari, Firefox strict mode, Brave (deferred — no Safari access currently)
- [x] Document browser-specific notes in CLIENT_SETUP.md

---

## Phase 3 — Platform Polish
**Goal:** Production-ready for 5+ active clients.  
**Estimated effort:** 8–12 hours

- [x] Versioned embeds — `?v=1` param parsed and documented, 12-month stability guarantee, configurator auto-pins v=1. Will graduate to React Router /v1/ paths when v2 ships.
- [x] Embed analytics — `source` + `host_origin` columns on `games`, embed stats dashboard in Commissioner Embed tab
- [ ] Custom domain — `quiz.yourdomain.com` CNAME, update all docs and generator
- [x] Category-scoped embeds — `?category=innocent-intentions` for book-specific quizzes (verified: param parsing → query filter → configurator UI → URL generation)

---

## Phase 4 — Web Component
**Goal:** Native web component for developer clients.  
**Estimated effort:** 15–20 hours

- [ ] `<quiz-embed>` custom element (vanilla JS or Lit)
- [ ] Shadow DOM for style isolation
- [ ] Custom events: `quiz:started`, `quiz:completed`, `quiz:score`
- [ ] npm publish as `@gstreet-ops/quiz-embed`
- [ ] CDN distribution via jsDelivr
- [ ] Maintain iframe path for non-developer clients

---

## Backlog

| Feature | Notes |
|---------|-------|
| Streak tracking | Daily play streak per community |
| Scheduled quiz events | All visitors get same questions simultaneously at set time |
| Social share card | Shareable image with score after game completion |
| Webhook on game complete | POST to client URL for custom integrations |
| White-label auth | Hide platform branding for fully private client deployments |

---

## Known Issues

| Issue | Notes |
|-------|-------|
| Safari third-party cookies | Auth persistence may fail in Safari — needs testing in Phase 2 |
| Fixed iframe height | Without postMessage listener on host, mobile may show internal scroll |
| ~~Result emoji for 0%~~ | ✅ Fixed — emoji now scales: 😅 0-29%, 💪 30-49%, 👍 50-79%, 🎉 80-100% |

---

## Next Up

| Feature | Priority | Notes |
|---------|----------|-------|
| Hint system | ~~High~~ ✅ Done | Shows first sentence of explanation as hint before answering. Tracked in answer record (usedHint). |
| Score-based result emoji | ~~Low~~ ✅ Done | Scale emoji to performance: 😅 0-29%, 💪 30-49%, 👍 50-79%, 🎉 80-100% |
