import React from 'react';
import { createRoot } from 'react-dom/client';
import EmbedShell from '../components/EmbedShell';
import { parseEmbedParams } from '../utils/params';
import { applyTheme, loadFont } from './theme';
import SHADOW_CSS from './shadow-styles';

/**
 * <quiz-embed> Custom Element
 *
 * Wraps the existing React quiz app inside Shadow DOM for style isolation.
 * Attributes map 1:1 to URL params used by the iframe version.
 *
 * Usage:
 *   <quiz-embed community="ellie-hallaron" bg="#0D0D0D" primary="#6B2D5E"></quiz-embed>
 */

const OBSERVED = [
  'community', 'bg', 'surface', 'primary', 'accent', 'text', 'font',
  'count', 'difficulty', 'timer', 'leaderboard', 'category', 'v',
];

class QuizEmbedElement extends HTMLElement {
  static get observedAttributes() {
    return OBSERVED;
  }

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: 'open' });
    this._root = null;
    this._mounted = false;

    // Inject base stylesheet
    const style = document.createElement('style');
    style.textContent = SHADOW_CSS;
    this._shadow.appendChild(style);

    // Create mount point for React
    this._mountEl = document.createElement('div');
    this._mountEl.className = 'quiz-embed-mount';
    this._shadow.appendChild(this._mountEl);
  }

  connectedCallback() {
    this._mounted = true;
    this._render();
  }

  disconnectedCallback() {
    this._mounted = false;
    if (this._root) {
      this._root.unmount();
      this._root = null;
    }
  }

  attributeChangedCallback() {
    if (this._mounted) {
      this._render();
    }
  }

  /**
   * Read all attributes and convert to a URLSearchParams-compatible object,
   * then run through the same parseEmbedParams() validator the iframe path uses.
   */
  _getParams() {
    const searchParams = new URLSearchParams();
    for (const attr of OBSERVED) {
      const val = this.getAttribute(attr);
      if (val !== null) {
        searchParams.set(attr, val);
      }
    }
    return parseEmbedParams(searchParams);
  }

  /**
   * Render React into the shadow root, or show an error if community is missing.
   */
  _render() {
    const { params, errors } = this._getParams();

    // Missing community — show plain HTML error (no React needed)
    if (!params.community || errors.length > 0) {
      this._unmountReact();
      this._mountEl.innerHTML = `
        <div class="quiz-embed-error">
          <div>
            <h2>Quiz Embed</h2>
            <p>Missing required attribute: <code>community</code></p>
            <p class="hint">Add <code>community="your-slug"</code> to the element.</p>
          </div>
        </div>
      `;
      return;
    }

    // Apply theme custom properties to the mount div
    applyTheme(this._mountEl, params);

    // Load Google Font into shadow root
    loadFont(this._shadow, params.font);

    // Mount or re-render React
    if (!this._root) {
      this._mountEl.innerHTML = '';
      this._root = createRoot(this._mountEl);
    }

    this._root.render(
      React.createElement(EmbedShell, { params })
    );
  }

  /**
   * Tear down React root if it exists (used before switching to error HTML).
   */
  _unmountReact() {
    if (this._root) {
      this._root.unmount();
      this._root = null;
    }
  }
}

export default QuizEmbedElement;
