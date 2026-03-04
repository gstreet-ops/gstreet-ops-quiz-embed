import React from 'react';
import ReactDOM from 'react-dom/client';
import { parseEmbedParams } from '../utils/params';
import { QuizEmbedApp } from './QuizEmbedApp';

/**
 * <quiz-embed> Custom Element
 * 
 * Renders the full quiz experience inside Shadow DOM.
 * Attributes map to the same URL params used in the iframe embed.
 * 
 * Attributes:
 *   community (required), bg, surface, primary, accent, text, font,
 *   count, difficulty, timer, leaderboard, category, v
 * 
 * Events dispatched:
 *   quiz:started  — { communitySlug }
 *   quiz:completed — { score, total, percentage, streak }
 *   quiz:answer — { questionIndex, correct, usedHint }
 * 
 * Example:
 *   <quiz-embed
 *     community="ellie-hallaron"
 *     bg="#0D0D0D"
 *     primary="#6B2D5E"
 *     accent="#8B0000"
 *     count="10">
 *   </quiz-embed>
 */

// All configurable attributes — same as URL params
const OBSERVED_ATTRIBUTES = [
  'community', 'bg', 'surface', 'primary', 'accent', 'text', 'font',
  'count', 'difficulty', 'timer', 'leaderboard', 'category', 'v',
];

export class QuizEmbedElement extends HTMLElement {
  static get observedAttributes() {
    return OBSERVED_ATTRIBUTES;
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._reactRoot = null;
    this._mountPoint = null;
  }

  connectedCallback() {
    // Create mount point inside shadow DOM
    this._mountPoint = document.createElement('div');
    this._mountPoint.setAttribute('id', 'quiz-embed-root');
    this._shadowRoot.appendChild(this._mountPoint);

    // Inject base styles into shadow DOM
    this._injectStyles();

    // Mount React
    this._reactRoot = ReactDOM.createRoot(this._mountPoint);
    this._render();
  }

  disconnectedCallback() {
    // Clean up React tree
    if (this._reactRoot) {
      this._reactRoot.unmount();
      this._reactRoot = null;
    }
  }

  attributeChangedCallback(_name, oldValue, newValue) {
    if (oldValue !== newValue && this._reactRoot) {
      this._render();
    }
  }

  /**
   * Build params object from HTML attributes.
   * Reuses the same parseEmbedParams() logic as the iframe version,
   * but feeds it from element attributes instead of URL search params.
   */
  _getParams() {
    const searchParams = new URLSearchParams();
    for (const attr of OBSERVED_ATTRIBUTES) {
      const val = this.getAttribute(attr);
      if (val !== null) {
        searchParams.set(attr, val);
      }
    }
    const { params } = parseEmbedParams(searchParams);
    return params;
  }

  /**
   * Dispatch a custom event from this element.
   * Host pages listen with: el.addEventListener('quiz:completed', ...)
   */
  _dispatch(eventName, detail = {}) {
    this.dispatchEvent(new CustomEvent(eventName, {
      bubbles: true,
      composed: true, // Crosses shadow DOM boundary
      detail,
    }));
  }

  /**
   * Inject scoped styles into shadow DOM.
   * No styles leak out, no host styles leak in.
   */
  _injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        contain: content;
      }
      #quiz-embed-root {
        font-family: system-ui, -apple-system, sans-serif;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
      }
      #quiz-embed-root *, #quiz-embed-root *::before, #quiz-embed-root *::after {
        box-sizing: border-box;
      }
      /* Reset inherited styles that could bleed through shadow DOM */
      #quiz-embed-root {
        font-size: 16px;
        color: var(--embed-text, #F5F0EB);
        background-color: var(--embed-bg, #0D0D0D);
      }
    `;
    this._shadowRoot.appendChild(style);
  }

  _render() {
    if (!this._reactRoot) return;

    const params = this._getParams();

    // Error state: missing community
    if (!params.community) {
      this._reactRoot.render(
        React.createElement('div', {
          style: {
            padding: '2rem',
            fontFamily: 'sans-serif',
            color: '#F5F0EB',
            backgroundColor: '#0D0D0D',
            textAlign: 'center',
          }
        },
          React.createElement('h2', null, 'Quiz Embed'),
          React.createElement('p', null, 'Missing required attribute: community'),
          React.createElement('p', {
            style: { opacity: 0.6, fontSize: '0.875rem' }
          }, 'Add community="your-community-slug" to the element.')
        )
      );
      return;
    }

    this._reactRoot.render(
      React.createElement(QuizEmbedApp, {
        params,
        shadowRoot: this._shadowRoot,
        dispatch: this._dispatch.bind(this),
      })
    );
  }
}
