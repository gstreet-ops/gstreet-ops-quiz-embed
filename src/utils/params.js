/**
 * URL Parameter Parser & Validator
 * 
 * Reads all embed configuration from URL search params.
 * Provides defaults for every optional param so components
 * never need to check for undefined.
 */

const DEFAULTS = {
  // Required (no default — validated separately)
  community: null,

  // Theme
  bg: '#0D0D0D',
  surface: '#1A1A2E',
  primary: '#6B2D5E',
  accent: '#8B0000',
  text: '#F5F0EB',
  font: 'Inter',

  // Behavior
  count: 10,
  difficulty: 'mixed',
  timer: 0,
  leaderboard: 'community',
  category: 'all',

  // Version — stability contract for embed clients
  v: 1,
};

const VALID_COUNTS = [5, 10, 15, 20];
const VALID_DIFFICULTIES = ['easy', 'medium', 'hard', 'mixed'];
const VALID_LEADERBOARDS = ['community', 'platform', 'both'];

/**
 * Validates a hex color string.
 * Accepts with or without #, 3 or 6 digit hex.
 */
function isValidHex(value) {
  if (!value) return false;
  const cleaned = value.startsWith('#') ? value.slice(1) : value;
  return /^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(cleaned);
}

/**
 * Normalizes a hex value to always include #.
 */
function normalizeHex(value, fallback) {
  if (!value) return fallback;
  const decoded = decodeURIComponent(value);
  if (!isValidHex(decoded)) return fallback;
  return decoded.startsWith('#') ? decoded : `#${decoded}`;
}

/**
 * Parse and validate all embed parameters from the URL.
 * Returns a complete config object with defaults for any missing/invalid params.
 * 
 * @param {URLSearchParams} searchParams - from window.location or passed in
 * @returns {{ params: object, errors: string[] }}
 */
export function parseEmbedParams(searchParams) {
  const errors = [];

  // Required: community
  const community = searchParams.get('community')?.trim() || null;
  if (!community) {
    errors.push('Missing required parameter: community');
  }

  // Theme colors
  const bg = normalizeHex(searchParams.get('bg'), DEFAULTS.bg);
  const surface = normalizeHex(searchParams.get('surface'), DEFAULTS.surface);
  const primary = normalizeHex(searchParams.get('primary'), DEFAULTS.primary);
  const accent = normalizeHex(searchParams.get('accent'), DEFAULTS.accent);
  const text = normalizeHex(searchParams.get('text'), DEFAULTS.text);

  // Font
  const font = searchParams.get('font')?.trim() || DEFAULTS.font;

  // Count — must be one of VALID_COUNTS
  let count = parseInt(searchParams.get('count'), 10);
  if (isNaN(count) || !VALID_COUNTS.includes(count)) {
    count = DEFAULTS.count;
  }

  // Difficulty
  let difficulty = searchParams.get('difficulty')?.toLowerCase().trim();
  if (!VALID_DIFFICULTIES.includes(difficulty)) {
    difficulty = DEFAULTS.difficulty;
  }

  // Timer — non-negative integer, 0 = disabled
  let timer = parseInt(searchParams.get('timer'), 10);
  if (isNaN(timer) || timer < 0) {
    timer = DEFAULTS.timer;
  }

  // Leaderboard scope
  let leaderboard = searchParams.get('leaderboard')?.toLowerCase().trim();
  if (!VALID_LEADERBOARDS.includes(leaderboard)) {
    leaderboard = DEFAULTS.leaderboard;
  }

  // Category
  const category = searchParams.get('category')?.trim() || DEFAULTS.category;

  // Version — defaults to current (1). Future versions will branch behavior.
  let v = parseInt(searchParams.get('v'), 10);
  if (isNaN(v) || v < 1) {
    v = DEFAULTS.v;
  }

  return {
    params: {
      community,
      bg, surface, primary, accent, text, font,
      count, difficulty, timer, leaderboard, category,
      v,
    },
    errors,
  };
}
