/**
 * Theme utilities for Shadow DOM
 *
 * Mirrors the CSS custom properties from useEmbedTheme.js but applies them
 * directly to an element inside the shadow root instead of document.documentElement.
 */

/**
 * Apply theme CSS custom properties to an element.
 * @param {HTMLElement} element - The element to set properties on (mount div or shadow host)
 * @param {object} params - Parsed embed params from parseEmbedParams()
 */
export function applyTheme(element, params) {
  element.style.setProperty('--embed-bg', params.bg);
  element.style.setProperty('--embed-surface', params.surface);
  element.style.setProperty('--embed-primary', params.primary);
  element.style.setProperty('--embed-accent', params.accent);
  element.style.setProperty('--embed-text', params.text);

  const fontFamily = params.font && params.font !== 'Inter'
    ? `"${params.font.replace(/\+/g, ' ')}", sans-serif`
    : 'sans-serif';
  element.style.setProperty('--embed-font', fontFamily);
}

/**
 * Load a Google Font inside a shadow root.
 * Creates or updates a <link> tag scoped to the shadow root so fonts
 * don't leak to the host document.
 *
 * @param {ShadowRoot} shadowRoot
 * @param {string} fontName - Font name with + for spaces (e.g. "Cormorant+Garamond")
 */
export function loadFont(shadowRoot, fontName) {
  if (!fontName || fontName === 'Inter') return;

  const linkId = 'quiz-embed-google-font';
  const existing = shadowRoot.getElementById(linkId);
  if (existing) existing.remove();

  const displayName = fontName.replace(/\+/g, ' ');
  const link = document.createElement('link');
  link.id = linkId;
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(displayName)}:wght@400;600;700&display=swap`;
  shadowRoot.appendChild(link);
}
