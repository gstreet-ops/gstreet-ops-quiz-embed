import React from 'react';
import ReactDOM from 'react-dom/client';
import { QuizEmbedElement } from './quiz-embed-element';

/**
 * Web Component Entry Point
 * 
 * Self-registers <quiz-embed> custom element on import.
 * This is the bundle entry for Vite library mode.
 * 
 * Usage:
 *   <script src="quiz-embed.es.js" type="module"></script>
 *   <quiz-embed community="ellie-hallaron"></quiz-embed>
 * 
 * Or UMD:
 *   <script src="quiz-embed.umd.js"></script>
 *   <quiz-embed community="ellie-hallaron"></quiz-embed>
 */

// Register the custom element if not already defined
if (!customElements.get('quiz-embed')) {
  customElements.define('quiz-embed', QuizEmbedElement);
}

// Export for programmatic use
export { QuizEmbedElement };
