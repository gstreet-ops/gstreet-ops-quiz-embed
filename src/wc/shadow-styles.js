/**
 * Shadow DOM base styles for <quiz-embed>
 *
 * Provides a CSS reset inside the shadow root and sets up the mount container
 * to inherit theme custom properties. The React components already use
 * var(--embed-bg), var(--embed-text), etc. — we just need those properties
 * defined on an ancestor inside the shadow tree.
 */

const SHADOW_CSS = `
  :host {
    display: block;
    min-height: 200px;
    contain: content;
  }

  :host([hidden]) {
    display: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .quiz-embed-mount {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: inherit;
    background-color: var(--embed-bg, #0D0D0D);
    color: var(--embed-text, #F5F0EB);
    font-family: var(--embed-font, sans-serif);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .quiz-embed-error {
    padding: 2rem;
    font-family: sans-serif;
    color: #F5F0EB;
    background-color: #0D0D0D;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .quiz-embed-error h2 {
    margin: 0 0 1rem;
    font-size: 1.25rem;
  }

  .quiz-embed-error p {
    margin: 0.5rem 0;
  }

  .quiz-embed-error code {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.15em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
  }

  .quiz-embed-error .hint {
    opacity: 0.6;
    font-size: 0.875rem;
  }
`;

export default SHADOW_CSS;
