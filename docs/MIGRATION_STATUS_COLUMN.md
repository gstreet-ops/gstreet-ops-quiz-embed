# Question Status Migration

Run in **Supabase SQL Editor** (Dashboard → SQL Editor → New Query).
Adds a `status` column to `community_questions` for soft-archival of stale/non-conforming content.

**Date:** 2026-02-26

---

## Step 1: Add status column

```sql
-- Add status column with default 'active'
-- Valid values: 'active', 'archived', 'draft', 'retired'
ALTER TABLE community_questions
  ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'active';

-- Index for fast filtering (most queries filter on community_id + status)
CREATE INDEX IF NOT EXISTS idx_community_questions_status
  ON community_questions (community_id, status);
```

## Step 2: Archive old Ellie Hallaron questions (no explanations)

```sql
-- Archive existing questions for community_id 18 that lack explanations
UPDATE community_questions
  SET status = 'archived'
  WHERE community_id = 18
    AND (explanation IS NULL OR explanation = '');
```

## Step 3: Verify

```sql
-- Should show 10 archived, 0 active (until new questions are generated)
SELECT status, count(*)
  FROM community_questions
  WHERE community_id = 18
  GROUP BY status;
```

---

## Status Values Reference

| Status | Meaning | Served to players? |
|--------|---------|-------------------|
| `active` | Live content, fully conforming | ✅ Yes |
| `archived` | Soft-removed, kept for reference | ❌ No |
| `draft` | Not yet published (future use) | ❌ No |
| `retired` | Permanently deprecated | ❌ No |
