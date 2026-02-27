/**
 * Custom DOM event factories for <quiz-embed>
 *
 * All events use bubbles + composed so they cross the shadow DOM boundary
 * and can be listened to on the host element or any ancestor.
 */

export function createQuizStartedEvent(detail) {
  return new CustomEvent('quiz:started', {
    bubbles: true,
    composed: true,
    detail, // { communitySlug, questionCount, difficulty }
  });
}

export function createQuizCompletedEvent(detail) {
  return new CustomEvent('quiz:completed', {
    bubbles: true,
    composed: true,
    detail, // { score, total, percentage, streak, communitySlug }
  });
}

export function createQuizAnswerEvent(detail) {
  return new CustomEvent('quiz:answer', {
    bubbles: true,
    composed: true,
    detail, // { questionIndex, correct, selectedAnswer, correctAnswer }
  });
}
