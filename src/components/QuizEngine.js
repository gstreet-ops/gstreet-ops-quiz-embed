import React, { useState, useEffect, useCallback, useRef } from 'react';

/**
 * QuizEngine
 * 
 * Core quiz gameplay: question display, answer grid, selection,
 * immediate feedback, timer, progression, and score tracking.
 */
function QuizEngine({ questions, community, timer: timerSeconds, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(timerSeconds || 0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const timerRef = useRef(null);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const hasTimer = timerSeconds > 0;

  // Extract hint: first sentence of explanation, or null if no explanation
  const getHintText = (question) => {
    if (!question?.explanation) return null;
    const firstSentence = question.explanation.split(/(?<=[.!?])\s+/)[0];
    // If the explanation is just one sentence, give a partial hint instead
    if (firstSentence === question.explanation) {
      const words = question.explanation.split(' ');
      if (words.length > 6) {
        return words.slice(0, Math.ceil(words.length * 0.5)).join(' ') + '...';
      }
      return firstSentence;
    }
    return firstSentence;
  };

  // Shuffle answers for current question
  useEffect(() => {
    if (!currentQuestion) return;
    const all = [currentQuestion.correctAnswer, ...currentQuestion.incorrectAnswers];
    // Fisher-Yates shuffle
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [all[i], all[j]] = [all[j], all[i]];
    }
    setShuffledAnswers(all);
  }, [currentIndex, currentQuestion]);

  // Timer countdown
  useEffect(() => {
    if (!hasTimer || showFeedback) return;
    setTimeLeft(timerSeconds);

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentIndex, hasTimer, timerSeconds, showFeedback]);

  // Handle time running out
  const handleTimeUp = useCallback(() => {
    if (showFeedback) return;
    const answer = {
      questionId: currentQuestion.id,
      selectedAnswer: null,
      correctAnswer: currentQuestion.correctAnswer,
      correct: false,
      timedOut: true,
      usedHint: showHint,
    };
    setSelectedAnswer('__timed_out__');
    setShowFeedback(true);
    setAnswers(prev => [...prev, answer]);
  }, [currentQuestion, showFeedback, showHint]);

  // Handle answer selection
  const handleSelect = (answer) => {
    if (showFeedback) return;
    clearInterval(timerRef.current);

    const isCorrect = answer === currentQuestion.correctAnswer;
    const answerRecord = {
      questionId: currentQuestion.id,
      selectedAnswer: answer,
      correctAnswer: currentQuestion.correctAnswer,
      correct: isCorrect,
      timedOut: false,
      usedHint: showHint,
    };

    setSelectedAnswer(answer);
    setShowFeedback(true);
    setAnswers(prev => [...prev, answerRecord]);
  };

  // Advance to next question or finish
  const handleNext = () => {
    if (isLastQuestion) {
      onComplete(answers);
    } else {
      setSelectedAnswer(null);
      setShowFeedback(false);
      setShowHint(false);
      setCurrentIndex(prev => prev + 1);
    }
  };

  if (!currentQuestion) return null;

  const correctCount = answers.filter(a => a.correct).length;

  // Answer button styling
  const getAnswerStyle = (answer) => {
    const base = {
      width: '100%',
      padding: '0.875rem 1rem',
      marginBottom: '0.5rem',
      border: '2px solid',
      borderRadius: '8px',
      cursor: showFeedback ? 'default' : 'pointer',
      fontSize: '1rem',
      fontFamily: 'var(--embed-font)',
      color: 'var(--embed-text)',
      textAlign: 'left',
      transition: 'all 0.2s ease',
      backgroundColor: 'var(--embed-surface)',
      borderColor: 'transparent',
    };

    if (!showFeedback) {
      return { ...base, borderColor: 'rgba(255,255,255,0.1)' };
    }

    // Feedback state
    if (answer === currentQuestion.correctAnswer) {
      return { ...base, borderColor: 'var(--embed-accent)', backgroundColor: 'rgba(0,180,0,0.15)' };
    }
    if (answer === selectedAnswer && answer !== currentQuestion.correctAnswer) {
      return { ...base, borderColor: '#e74c3c', backgroundColor: 'rgba(231,76,60,0.15)' };
    }
    return { ...base, opacity: 0.5 };
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      {/* Header: progress + score */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
        fontSize: '0.875rem',
        opacity: 0.7,
      }}>
        <span>{community?.name}</span>
        <span>{correctCount}/{answers.length + (showFeedback ? 0 : 0)} correct</span>
      </div>

      {/* Progress bar */}
      <div style={{
        width: '100%',
        height: '4px',
        backgroundColor: 'var(--embed-surface)',
        borderRadius: '2px',
        marginBottom: '1.5rem',
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${((currentIndex + (showFeedback ? 1 : 0)) / questions.length) * 100}%`,
          height: '100%',
          backgroundColor: 'var(--embed-accent)',
          transition: 'width 0.3s ease',
        }} />
      </div>

      {/* Timer */}
      {hasTimer && (
        <div style={{
          textAlign: 'center',
          marginBottom: '1rem',
          fontSize: '1.25rem',
          fontWeight: '600',
          color: timeLeft <= 5 ? '#e74c3c' : 'var(--embed-text)',
        }}>
          ⏱ {timeLeft}s
        </div>
      )}

      {/* Question number + text */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '0.8rem', opacity: 0.5, marginBottom: '0.25rem' }}>
          Question {currentIndex + 1} of {questions.length}
        </div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0, lineHeight: 1.4 }}>
          {currentQuestion.question}
        </h2>
      </div>

      {/* Answer grid */}
      <div style={{ marginBottom: '1rem' }}>
        {shuffledAnswers.map((answer, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(answer)}
            disabled={showFeedback}
            style={getAnswerStyle(answer)}
            onMouseOver={(e) => {
              if (!showFeedback) e.target.style.borderColor = 'var(--embed-primary)';
            }}
            onMouseOut={(e) => {
              if (!showFeedback) e.target.style.borderColor = 'rgba(255,255,255,0.1)';
            }}
          >
            {answer}
          </button>
        ))}
      </div>

      {/* Hint button — only before answering, only if explanation exists */}
      {!showFeedback && currentQuestion.explanation && (
        <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
          {!showHint ? (
            <button
              onClick={() => setShowHint(true)}
              style={{
                padding: '0.5rem 1.25rem',
                backgroundColor: 'transparent',
                color: 'var(--embed-text)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontFamily: 'var(--embed-font)',
                cursor: 'pointer',
                opacity: 0.7,
                transition: 'opacity 0.2s ease',
              }}
              onMouseOver={(e) => { e.target.style.opacity = '1'; }}
              onMouseOut={(e) => { e.target.style.opacity = '0.7'; }}
            >
              💡 Need a hint?
            </button>
          ) : (
            <div style={{
              padding: '0.75rem',
              borderRadius: '8px',
              backgroundColor: 'rgba(255,193,7,0.1)',
              border: '1px solid rgba(255,193,7,0.2)',
              fontSize: '0.85rem',
              lineHeight: 1.5,
              textAlign: 'left',
            }}>
              💡 {getHintText(currentQuestion)}
            </div>
          )}
        </div>
      )}

      {/* Timed out message */}
      {showFeedback && selectedAnswer === '__timed_out__' && (
        <div style={{
          padding: '0.75rem',
          borderRadius: '8px',
          backgroundColor: 'rgba(231,76,60,0.15)',
          marginBottom: '1rem',
          fontSize: '0.9rem',
        }}>
          ⏰ Time's up! The correct answer was <strong>{currentQuestion.correctAnswer}</strong>
        </div>
      )}

      {/* Explanation (if available and feedback shown) */}
      {showFeedback && currentQuestion.explanation && (
        <div style={{
          padding: '0.75rem',
          borderRadius: '8px',
          backgroundColor: 'var(--embed-surface)',
          marginBottom: '1rem',
          fontSize: '0.875rem',
          lineHeight: 1.5,
        }}>
          💡 {currentQuestion.explanation}
        </div>
      )}

      {/* Next / Finish button */}
      {showFeedback && (
        <button
          onClick={handleNext}
          style={{
            width: '100%',
            padding: '0.875rem',
            backgroundColor: 'var(--embed-primary)',
            color: 'var(--embed-text)',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            fontFamily: 'var(--embed-font)',
            cursor: 'pointer',
          }}
        >
          {isLastQuestion ? 'See Results' : 'Next Question →'}
        </button>
      )}
    </div>
  );
}

export default QuizEngine;
