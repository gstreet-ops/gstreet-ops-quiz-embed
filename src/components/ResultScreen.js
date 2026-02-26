import React from 'react';

/**
 * ResultScreen — placeholder for 1.5
 * Shows score summary and play again button.
 */
function ResultScreen({ scoreData, answers, questions, community, guestName, onPlayAgain }) {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '2rem 0' }}>
      <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
        {scoreData.percentage >= 80 ? '🎉' : scoreData.percentage >= 50 ? '👍' : '💪'}
      </div>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem' }}>
        {scoreData.score} / {scoreData.total}
      </h2>
      <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
        {scoreData.percentage}% correct — {guestName}
      </p>
      <button
        onClick={onPlayAgain}
        style={{
          padding: '0.875rem 2rem',
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
    </div>
  );
}

export default ResultScreen;
