// Entry point for the <quiz-embed> web component bundle
import QuizEmbedElement from './QuizEmbedElement';

if (!customElements.get('quiz-embed')) {
  customElements.define('quiz-embed', QuizEmbedElement);
}

export { QuizEmbedElement };
