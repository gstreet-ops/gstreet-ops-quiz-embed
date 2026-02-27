/**
 * Streak Tracking
 * 
 * Tracks daily play streaks per community.
 * Uses localStorage for anonymous players, with optional
 * Supabase persistence for logged-in users.
 */

const STREAK_KEY_PREFIX = 'quiz-streak-';

/**
 * Get the date string (YYYY-MM-DD) for a given date in local time.
 */
function toDateStr(date) {
  return date.toLocaleDateString('en-CA'); // en-CA gives YYYY-MM-DD
}

/**
 * Get today's date string.
 */
function today() {
  return toDateStr(new Date());
}

/**
 * Get yesterday's date string.
 */
function yesterday() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return toDateStr(d);
}

/**
 * Load streak data from localStorage for a community.
 * @param {string} communityId
 * @returns {{ count: number, lastPlayDate: string|null }}
 */
function loadStreak(communityId) {
  try {
    const raw = localStorage.getItem(STREAK_KEY_PREFIX + communityId);
    if (!raw) return { count: 0, lastPlayDate: null };
    return JSON.parse(raw);
  } catch {
    return { count: 0, lastPlayDate: null };
  }
}

/**
 * Save streak data to localStorage.
 */
function saveStreak(communityId, streakData) {
  try {
    localStorage.setItem(
      STREAK_KEY_PREFIX + communityId,
      JSON.stringify(streakData)
    );
  } catch {
    // localStorage full or unavailable — silent fail
  }
}

/**
 * Record a game completion and update the streak.
 * Call this after every completed game.
 * 
 * @param {string} communityId
 * @returns {{ count: number, isNew: boolean }}
 *   count = current streak length
 *   isNew = true if this game extended the streak (vs same-day replay)
 */
export function recordGameForStreak(communityId) {
  const streak = loadStreak(communityId);
  const todayStr = today();
  const yesterdayStr = yesterday();

  // Already played today — streak unchanged
  if (streak.lastPlayDate === todayStr) {
    return { count: streak.count, isNew: false };
  }

  // Played yesterday — extend streak
  if (streak.lastPlayDate === yesterdayStr) {
    const updated = { count: streak.count + 1, lastPlayDate: todayStr };
    saveStreak(communityId, updated);
    return { count: updated.count, isNew: true };
  }

  // First play ever or gap > 1 day — start new streak
  const updated = { count: 1, lastPlayDate: todayStr };
  saveStreak(communityId, updated);
  return { count: 1, isNew: streak.count === 0 };
}

/**
 * Get current streak without modifying it.
 * Useful for displaying on the start screen.
 * 
 * @param {string} communityId
 * @returns {{ count: number, active: boolean }}
 */
export function getStreak(communityId) {
  const streak = loadStreak(communityId);
  const todayStr = today();
  const yesterdayStr = yesterday();

  // Active if played today or yesterday
  const active = streak.lastPlayDate === todayStr ||
                 streak.lastPlayDate === yesterdayStr;

  return {
    count: active ? streak.count : 0,
    active,
  };
}
