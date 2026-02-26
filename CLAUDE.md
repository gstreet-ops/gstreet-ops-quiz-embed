# CLAUDE.md — [Project Name]

This file is read automatically by Claude Code at the start of every session.
Follow these rules for all work in this project.

---

## Project Overview

[Brief description of the project]

- **Frontend:** [e.g. React 18]
- **Backend / DB:** [e.g. Supabase, Firebase, etc.]
- **Hosting:** [e.g. GitHub Pages, Vercel, etc.]
- **Live URL:** [URL if deployed]
- **Repo:** [GitHub URL]

---

## Deployment

```bash
[deployment command, e.g. npm run deploy]
```

[Notes about deployment process]

---

## Documentation Maintenance

The `docs/` folder and `README.md` must stay in sync with the code.
After completing any task, update the relevant docs **in the same session**:

| When you... | Update... |
|-------------|-----------|
| Add or change any UI screen or user-facing behavior | Relevant user-facing docs |
| Add, rename, or modify a database table, column, or query | `docs/DATABASE_SCHEMA.md` |
| Complete a planned feature | Move it to **Completed** in `docs/ROADMAP.md` |
| Discover or fix a bug | Add to / remove from **Known Issues** in `docs/ROADMAP.md` |
| Add a dependency or change the deploy process | Update `README.md` tech stack and/or setup sections |

Do not batch doc updates for later — update them before ending the session.

---

## User Preferences

- **Avoid manual copy-paste tasks.** Whenever a value is needed (API key, DSN, config value, etc.), retrieve it programmatically, prompt for it interactively, or provide a direct command that inserts it automatically. Do not ask the user to copy a value from one place and paste it into a file manually. The user prefers to stay in Claude Code rather than switching to manual file editing.

---

## Project Conventions

- [List your color palette, naming conventions, routing approach, etc.]
- [e.g. All screens route through `src/App.js` using a `screen` state string (no React Router)]
- [e.g. Georgetown color palette: navy `#041E42`, gray `#54585A`]

---

## Key Files

| File | Purpose |
|------|---------|
| [path] | [description] |
| [path] | [description] |
