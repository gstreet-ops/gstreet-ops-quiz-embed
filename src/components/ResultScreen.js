import React, { useState } from 'react';

/**
 * ResultScreen
 * 
 * Score summary, expandable answer review, play again, and login prompt.
 */
function ResultScreen({ scoreData, answers, questions, community, guestName, user, onPlayAgain, onLoginClick, onLogout }) {
  const [showReview, setShowReview] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const emoji = scoreData.percentage >= 80 ? '🎉' : scoreData.percentage >= 50 ? '👍' : '💪';
  const message = scoreData.percentage === 100
    ? 'Perfect score!'
    : scoreData.percentage >= 80
    ? 'Great job!'
    : scoreData.percentage >= 50
    ? 'Not bad!'
    : 'Keep practicing!';

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1.5rem 0' }}>
      {/* Score summary */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '0.25rem' }}>{emoji}</div>
        <h2 style={{ margin: '0 0 0.25rem', fontSize: '2rem', fontWeight: '700' }}>
          {scoreData.score} / {scoreData.total}
        </h2>
        <p style={{ opacity: 0.7, fontSize: '1.1rem', margin: '0 0 0.25rem' }}>
          {scoreData.percentage}% correct
        </p>
        <p style={{ opacity: 0.5, fontSize: '0.875rem', margin: 0 }}>
          {message} — {guestName}
        </p>
        {community && (
          <p style={{ opacity: 0.4, fontSize: '0.75rem', marginTop: '0.5rem' }}>
            {community.name}
          </p>
        )}
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <button
          onClick={onPlayAgain}
          style={{
            flex: 1,
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
          Play Again
        </button>
        <button
          onClick={() => setShowReview(!showReview)}
          style={{
            flex: 1,
            padding: '0.875rem',
            backgroundColor: 'var(--embed-surface)',
            color: 'var(--embed-text)',
            border: '2px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            fontFamily: 'var(--embed-font)',
            cursor: 'pointer',
          }}
        >
          {showReview ? 'Hide Review' : 'Review Answers'}
        </button>
      </div>

      {/* Auth section */}
      <div style={{
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: 'var(--embed-surface)',
        textAlign: 'center',
        marginBottom: '1.5rem',
        border: '1px solid rgba(255,255,255,0.05)',
      }}>
        {user ? (
          <>
            <p style={{ margin: '0 0 0.5rem', fontSize: '0.9rem' }}>
              ✅ Signed in as <strong>{user.user_metadata?.username || user.email}</strong>
            </p>
            <button
              onClick={onLogout}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--embed-text)',
                opacity: 0.5,
                fontSize: '0.75rem',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <p style={{ margin: '0 0 0.5rem', fontSize: '0.9rem' }}>
              🔒 Sign in to save your scores and appear on the leaderboard
            </p>
            <button
              onClick={onLoginClick}
              style={{
                padding: '0.5rem 1.5rem',
                backgroundColor: 'var(--embed-primary)',
                color: 'var(--embed-text)',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: '600',
                fontFamily: 'var(--embed-font)',
                cursor: 'pointer',
                marginTop: '0.5rem',
              }}
            >
              Sign In / Register
            </button>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.75rem', opacity: 0.5 }}>
              Playing as {guestName}
            </p>
          </>
        )}
      </div>

      {/* Answer review (expandable) */}
      {showReview && (
        <div>
          <h3 style={{ fontSize: '1rem', marginBottom: '1rem', opacity: 0.7 }}>Answer Review</h3>
          {answers.map((answer, idx) => {
            const question = questions[idx];
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                style={{
                  padding: '0.75rem 1rem',
                  marginBottom: '0.5rem',
                  borderRadius: '8px',
                  backgroundColor: 'var(--embed-surface)',
                  cursor: 'pointer',
                  border: '2px solid',
                  borderColor: answer.correct ? 'rgba(0,180,0,0.3)' : 'rgba(231,76,60,0.3)',
                }}
              >
                {/* Question header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ fontSize: '0.875rem' }}>
                    {answer.correct ? '✅' : answer.timedOut ? '⏰' : '❌'}{' '}
                    <strong>Q{idx + 1}:</strong>{' '}
                    {question ? question.question.slice(0, 60) + (question.question.length > 60 ? '...' : '') : ''}
                  </span>
                  <span style={{ opacity: 0.4, fontSize: '0.75rem' }}>
                    {isExpanded ? '▲' : '▼'}
                  </span>
                </div>

                {/* Expanded details */}
                {isExpanded && question && (
                  <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    <p style={{ margin: '0 0 0.5rem' }}>
                      <strong>Question:</strong> {question.question}
                    </p>
                    {answer.timedOut ? (
                      <p style={{ margin: '0 0 0.25rem', color: '#e74c3c' }}>
                        ⏰ Time ran out
                      </p>
                    ) : (
                      <p style={{
                        margin: '0 0 0.25rem',
                        color: answer.correct ? 'rgba(0,200,0,0.9)' : '#e74c3c',
                      }}>
                        <strong>Your answer:</strong> {answer.selectedAnswer}
                      </p>
                    )}
                    {!answer.correct && (
                      <p style={{ margin: '0 0 0.25rem', color: 'rgba(0,200,0,0.9)' }}>
                        <strong>Correct answer:</strong> {answer.correctAnswer}
                      </p>
                    )}
                    {question.explanation && (
                      <p style={{ margin: '0.5rem 0 0', opacity: 0.7 }}>
                        💡 {question.explanation}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ResultScreen;
