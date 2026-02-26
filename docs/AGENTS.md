# Agent Architecture

This document defines the multi-agent system used to maintain and extend the project.
Each agent has a fixed scope — a set of files it owns and rules that govern its output.
Agents must not modify files outside their ownership list.
Cross-domain issues are recorded in `docs/AGENT_FLAGS.md`.

---

## Agents

### [AGENT_NAME]
[One-line description of what this agent owns and is responsible for.]

| File | Notes |
|------|-------|
| `src/path/to/file.js` | Full ownership |
| `src/path/to/other.js` | Partial — [specific section only] |

**Business rules:**
- [Rule 1]
- [Rule 2]

---

### [AGENT_NAME]
[One-line description]

| File | Notes |
|------|-------|
| `src/path/to/file.js` | Full ownership |

**Business rules:**
- [Rule 1]

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
  - Scope: agent name in lowercase (e.g. `fix(content): ...`, `feat(community): ...`)
- A push to `main`
