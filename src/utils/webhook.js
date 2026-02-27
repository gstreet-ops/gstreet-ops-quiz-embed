/**
 * Webhook — fire-and-forget POST on game complete.
 * 
 * Sends score data to a commissioner-configured URL.
 * Never blocks the UI — failures are silently logged.
 */

/**
 * Fire a webhook if the community has one configured.
 * 
 * @param {object} opts
 * @param {string} opts.webhookUrl - The URL to POST to
 * @param {string} opts.communitySlug - Community slug
 * @param {string} opts.communityName - Community display name
 * @param {number} opts.score - Correct answers
 * @param {number} opts.total - Total questions
 * @param {number} opts.percentage - Score percentage
 * @param {string} opts.playerName - Display name
 * @param {boolean} opts.isAnonymous - Whether player is logged in
 * @param {number|null} opts.streak - Current streak count
 */
export async function fireWebhook({
  webhookUrl, communitySlug, communityName,
  score, total, percentage, playerName,
  isAnonymous, streak,
}) {
  if (!webhookUrl) return;

  const payload = {
    event: 'game.completed',
    timestamp: new Date().toISOString(),
    community: {
      slug: communitySlug,
      name: communityName,
    },
    player: {
      name: playerName,
      anonymous: isAnonymous,
    },
    result: {
      score,
      total,
      percentage,
      streak: streak || null,
    },
  };

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      mode: 'no-cors', // Allow cross-origin without preflight
      signal: AbortSignal.timeout(5000),
    });
  } catch (err) {
    // Silent fail — never block the player experience
    console.debug('Webhook failed (non-blocking):', err.message);
  }
}
