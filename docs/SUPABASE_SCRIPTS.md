# Quiz Embed — Supabase RLS Policies

Run in **Supabase SQL Editor** (Dashboard → SQL Editor → New Query).
These policies enable the embed to function for anonymous (non-authenticated) users.
Applied to the shared Supabase project (`qxozqgpuzthemsfotmvo`).

**Date applied:** 2026-02-26

---

## Anon Read Policies

```sql
-- Allow anonymous reads on communities (lookup by slug)
CREATE POLICY "Anon can read communities"
  ON communities FOR SELECT
  TO anon
  USING (true);

-- Allow anonymous reads on community_questions (fetch quiz questions)
CREATE POLICY "Anon can read community questions"
  ON community_questions FOR SELECT
  TO anon
  USING (true);
```

## Anon Write Policies

```sql
-- Allow anonymous inserts on games (save scores with session_id)
CREATE POLICY "Anon can insert games"
  ON games FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anonymous inserts on game_answers (save answer details)
CREATE POLICY "Anon can insert game answers"
  ON game_answers FOR INSERT
  TO anon
  WITH CHECK (true);
```

## Leaderboard View Access

```sql
-- Allow anonymous reads on community_leaderboards view
GRANT SELECT ON community_leaderboards TO anon;
```

---

## Migrations

| Migration | Date | Doc |
|-----------|------|-----|
| Add `status` column to `community_questions` | 2026-02-26 | [MIGRATION_STATUS_COLUMN.md](MIGRATION_STATUS_COLUMN.md) |
