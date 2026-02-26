/**
 * Share Card Generator
 * 
 * Creates a styled canvas image for social sharing after quiz completion.
 * Uses the embed's theme colors for consistent branding.
 */

/**
 * Generate a share card image as a Blob.
 * 
 * @param {object} opts
 * @param {number} opts.score - Correct answers
 * @param {number} opts.total - Total questions
 * @param {number} opts.percentage - Score percentage
 * @param {string} opts.emoji - Result emoji
 * @param {string} opts.message - Result message (e.g. "Great job!")
 * @param {string} opts.communityName - Community display name
 * @param {string} opts.playerName - Player display name
 * @param {object} opts.theme - { bg, surface, primary, accent, text }
 * @returns {Promise<Blob>}
 */
export async function generateShareCard({
  score, total, percentage, emoji, message,
  communityName, playerName, theme,
}) {
  const width = 600;
  const height = 340;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = theme.bg || '#0D0D0D';
  ctx.fillRect(0, 0, width, height);

  // Accent stripe at top
  ctx.fillStyle = theme.primary || '#6B2D5E';
  ctx.fillRect(0, 0, width, 4);

  // Surface card area
  const cardMargin = 24;
  const cardY = 20;
  const cardH = height - 44;
  ctx.fillStyle = theme.surface || '#1A1A2E';
  roundRect(ctx, cardMargin, cardY, width - cardMargin * 2, cardH, 16);
  ctx.fill();

  const centerX = width / 2;
  const textColor = theme.text || '#F5F0EB';

  // Emoji
  ctx.font = '52px serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = textColor;
  ctx.fillText(emoji, centerX, cardY + 64);

  // Score
  ctx.font = 'bold 44px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = textColor;
  ctx.fillText(`${score} / ${total}`, centerX, cardY + 120);

  // Percentage
  ctx.font = '20px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = textColor;
  ctx.globalAlpha = 0.7;
  ctx.fillText(`${percentage}% correct`, centerX, cardY + 152);
  ctx.globalAlpha = 1;

  // Message + player
  ctx.font = '15px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = textColor;
  ctx.globalAlpha = 0.5;
  ctx.fillText(`${message} — ${playerName}`, centerX, cardY + 182);
  ctx.globalAlpha = 1;

  // Progress bar
  const barY = cardY + 204;
  const barW = width - cardMargin * 2 - 60;
  const barH = 8;
  const barX = centerX - barW / 2;

  // Bar background
  ctx.fillStyle = 'rgba(255,255,255,0.1)';
  roundRect(ctx, barX, barY, barW, barH, 4);
  ctx.fill();

  // Bar fill
  const fillW = Math.max((percentage / 100) * barW, 4);
  ctx.fillStyle = theme.accent || '#8B0000';
  roundRect(ctx, barX, barY, fillW, barH, 4);
  ctx.fill();

  // Community name
  if (communityName) {
    ctx.font = '13px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = textColor;
    ctx.globalAlpha = 0.35;
    ctx.fillText(communityName, centerX, cardY + 248);
    ctx.globalAlpha = 1;
  }

  // Branding footer
  ctx.font = '11px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = textColor;
  ctx.globalAlpha = 0.2;
  ctx.fillText('Powered by GStreet Trivia', centerX, cardY + cardH - 12);
  ctx.globalAlpha = 1;

  // Convert to blob
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), 'image/png');
  });
}

/**
 * Share or download the card.
 * Uses Web Share API if available (mobile), falls back to download.
 */
export async function shareOrDownload(blob, communityName) {
  const fileName = `trivia-score-${communityName || 'quiz'}.png`;

  // Try Web Share API (mainly mobile)
  if (navigator.share && navigator.canShare) {
    const file = new File([blob], fileName, { type: 'image/png' });
    const shareData = { files: [file] };
    if (navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return 'shared';
      } catch (e) {
        if (e.name === 'AbortError') return 'cancelled';
        // Fall through to download
      }
    }
  }

  // Fallback: download
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  return 'downloaded';
}

/**
 * Helper: draw a rounded rectangle path.
 */
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
