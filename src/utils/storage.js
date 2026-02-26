/**
 * Anonymous Session Storage
 * 
 * Manages a persistent anonymous session ID in localStorage.
 * Used to track scores for non-authenticated users and to
 * claim those scores on login.
 */

const SESSION_KEY = 'quiz-embed-session-id';
const GUEST_NAME_KEY = 'quiz-embed-guest-name';

/**
 * Generate a UUID v4.
 */
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Get or create the anonymous session ID.
 * Persists across page loads via localStorage.
 */
export function getSessionId() {
  try {
    let sessionId = localStorage.getItem(SESSION_KEY);
    if (!sessionId) {
      sessionId = generateUUID();
      localStorage.setItem(SESSION_KEY, sessionId);
    }
    return sessionId;
  } catch {
    // localStorage unavailable (e.g., some iframe contexts)
    return generateUUID();
  }
}

/**
 * Get or create a guest display name.
 * Format: "Guest-XXXX" where XXXX is derived from session ID.
 */
export function getGuestName() {
  try {
    let name = localStorage.getItem(GUEST_NAME_KEY);
    if (!name) {
      const sessionId = getSessionId();
      name = `Guest-${sessionId.slice(0, 4).toUpperCase()}`;
      localStorage.setItem(GUEST_NAME_KEY, name);
    }
    return name;
  } catch {
    return 'Guest';
  }
}

/**
 * Clear session data (used on logout or reset).
 */
export function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(GUEST_NAME_KEY);
  } catch {
    // Silently fail
  }
}
