# Quiz Embed Platform — Architecture

**Repo:** `gstreet-ops/quiz-embed`  
**Purpose:** A standalone, URL-configurable trivia embed served via iframe to third-party websites. Connects to the existing Supabase backend shared with `trivia-app`. Independent deployment cycle so client sites are never affected by trivia platform updates.

---

## Core Concept

Client websites include a single iframe tag. The embed reads URL parameters to determine which community's questions to load and how to style the quiz. All quiz logic, leaderboard data, and user auth live in this repo and its Supabase backend — the host site knows nothing about any of it.

```html
<!-- Everything a client needs to install the quiz -->
<iframe
  src="https://quiz.yourdomain.com/embed?community=ellie-hallaron&bg=%230D0D0D&primary=%236B2D5E&accent=%238B0000&font=Cormorant+Garamond"
  width="100%"
  height="600"
  frameborder="0"
  allowtransparency="true">
</iframe>
```

---

## Repository Structure

```
quiz-embed/
├── public/
│   └── index.html
├── src/
│   ├── App.js                    # Reads URL params, renders EmbedShell
│   ├── index.js                  # Entry point
│   ├── supabaseClient.js         # Shared Supabase connection
│   ├── hooks/
│   │   ├── useEmbedTheme.js      # Reads URL params → CSS custom properties
│   │   ├── useQuestions.js       # Fetches community questions from Supabase
│   │   └── useAuth.js            # Anonymous + optional Supabase Auth
│   ├── components/
│   │   ├── EmbedShell.js         # Outer container, theme injection, resize messaging
│   │   ├── QuizEngine.js         # Question display, answer selection, timer, scoring
│   │   ├── ResultScreen.js       # Score summary, login prompt, share button
│   │   ├── Leaderboard.js        # Community tab + platform tab
│   │   └── AuthModal.js          # Lightweight login/signup modal
│   └── utils/
│       ├── params.js             # URL param parsing and validation
│       ├── scoring.js            # Score calculation logic
│       └── storage.js            # localStorage for anonymous session scores
├── docs/
│   ├── ARCHITECTURE.md           # This file
│   ├── ROADMAP.md                # Phased build plan
│   ├── AGENTS.md                 # Multi-agent session definitions
│   └── AGENT_FLAGS.md            # Cross-domain issue tracker
├── package.json
└── README.md
```

---

## URL Parameter Schema

All configuration is passed via URL parameters. No server-side config needed per client.

### Required

| Parameter | Type | Example | Description |
|-----------|------|---------|-------------|
| `community` | string | `ellie-hallaron` | Supabase community slug |

### Theme Parameters

| Parameter | Type | Example | Description |
|-----------|------|---------|-------------|
| `bg` | hex (URL encoded) | `%230D0D0D` | Background color |
| `surface` | hex | `%231A1A2E` | Card/surface color |
| `primary` | hex | `%236B2D5E` | Primary accent (buttons, highlights) |
| `accent` | hex | `%238B0000` | Secondary accent (correct answer, progress bar) |
| `text` | hex | `%23F5F0EB` | Body text color |
| `font` | string | `Cormorant+Garamond` | Google Font name for display text |

### Behavior Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `count` | number | `10` | Questions per game (5, 10, 15, 20) |
| `difficulty` | string | `mixed` | `easy`, `medium`, `hard`, or `mixed` |
| `timer` | number | `0` | Seconds per question. `0` = no timer |
| `leaderboard` | string | `community` | `community`, `platform`, or `both` |
| `category` | string | `all` | Filter questions by category slug |

### Example — Ellie Hallaron

```
https://quiz.yourdomain.com/embed
  ?community=ellie-hallaron
  &bg=%230D0D0D
  &surface=%231A1A2E
  &primary=%236B2D5E
  &accent=%238B0000
  &text=%23F5F0EB
  &font=Cormorant+Garamond
  &count=10
  &difficulty=mixed
  &leaderboard=both
```

---

## Supabase Connection

The embed connects to the **same Supabase project** as `trivia-app`. Read-heavy client — fetches questions, writes scores and auth events only.

### Tables Used

| Table | Operations | Notes |
|-------|-----------|-------|
| `communities` | SELECT | Validate community slug, fetch settings |
| `community_questions` | SELECT | Fetch question bank filtered by community + category + difficulty |
| `profiles` | SELECT, UPDATE | Read/write for logged-in users |
| `games` | INSERT | Save completed game record |
| `game_answers` | INSERT | Save per-answer log |
| `community_leaderboards` | SELECT | Community-scoped leaderboard |
| `games` (aggregated) | SELECT | Platform-wide leaderboard query |

### Anonymous Score Tracking

Generate a UUID session ID on first load, store in localStorage scoped to the embed origin. Pass as `session_id` on game inserts. Anonymous scores appear as "Guest-XXXX" on leaderboard. On login, optionally claim previous anonymous scores by matching session_id to the new profile.

---

## Authentication Model

| State | Description |
|-------|-------------|
| Anonymous | No login required. Score tracked in localStorage. Prompted to register after game. |
| Returning Player | Supabase Auth via lightweight modal. Scores saved to `games` table. |
| New Registration | Registers directly from embed. Account works on trivia-app immediately (shared auth). |

---

## Leaderboard Model

**Community Leaderboard** — filtered to community_id, top 10 by average score (min 3 games), refreshes after each game.

**Platform Leaderboard** — aggregates across all communities, top 10 platform-wide, adds Community column. Only shown when `leaderboard=both` or `leaderboard=platform`.

---

## iframe Resize (postMessage)

```js
// Inside embed — sent on every height change
window.parent.postMessage({ type: 'quiz-embed-resize', height: document.body.scrollHeight }, '*');

// On client site — optional listener
window.addEventListener('message', (e) => {
  if (e.data.type === 'quiz-embed-resize') {
    document.querySelector('#quiz-iframe').style.height = e.data.height + 'px';
  }
});
```

---

## Theming System

URL params injected as CSS custom properties on root element via `useEmbedTheme.js`. All component CSS references only custom properties — no hardcoded colors. Google Fonts loaded dynamically from `font` param.

---

## Deployment

```bash
npm start        # localhost:3000
npm run deploy   # builds and pushes to gh-pages branch
```

Custom domain: point `quiz.yourdomain.com` CNAME to `gstreet-ops.github.io`. Add in GitHub Pages settings.

---

## Relationship to trivia-app

| Concern | trivia-app | quiz-embed |
|---------|-----------|-----------|
| Question management | ✅ Commissioner Dashboard | ❌ Read only |
| Community setup | ✅ Full CRUD | ❌ Read only |
| Quiz experience | ✅ Full platform | ✅ Embed only |
| Auth | ✅ Full flow | ✅ Lightweight modal |
| Deployment | Independent | Independent |
| Supabase project | Shared | Shared |

**Rule:** All data management happens in `trivia-app`. The `quiz-embed` is purely a read/play interface.

---

## Future Considerations

- **Embed code generator** — visual configurator in trivia-app Commissioner Dashboard
- **Versioned embeds** — `/embed/v2` alongside `/embed/v1` for non-breaking upgrades
- **Web component** — graduate from iframe to `<quiz-embed>` custom element
- **Analytics** — embed-specific play counts separate from direct trivia-app plays
