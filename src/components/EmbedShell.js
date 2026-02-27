import React, { useEffect, useRef, useState } from 'react';
import { useQuestions } from '../hooks/useQuestions';
import { useAuth } from '../hooks/useAuth';
import { getSessionId, getGuestName } from '../utils/storage';
import { calculateScore, saveGame } from '../utils/scoring';
import { recordGameForStreak, getStreak } from '../utils/streaks';
import { supabase } from '../supabaseClient';
import QuizEngine from './QuizEngine';
import ResultScreen from './ResultScreen';
import AuthModal from './AuthModal';
import Leaderboard from './Leaderboard';

/**
 * EmbedShell
 * 
 * Outer container for the quiz embed. Manages:
 * - Screen state (loading → quiz → results)
 * - postMessage resize for iframe hosts
 * - Theme wrapper via CSS custom properties
 * - Score saving on quiz completion
 */
function EmbedShell({ params }) {
  const { community, questions, loading, error, refetch } = useQuestions(params);
  const { user, login, register, logout, claimAnonymousScores } = useAuth();
  const [screen, setScreen] = useState('loading'); // loading | quiz | results
  const [answers, setAnswers] = useState([]);
  const [scoreData, setScoreData] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [streakData, setStreakData] = useState(null);
  const containerRef = useRef(null);
  const sessionId = useRef(getSessionId());
  const guestName = useRef(getGuestName());

  // postMessage resize — notify parent iframe of height changes
  useEffect(() => {
    const sendHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.scrollHeight;
        window.parent.postMessage({ type: 'quiz-embed-resize', height }, '*');
      }
    };

    const observer = new ResizeObserver(sendHeight);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    sendHeight();

    return () => observer.disconnect();
  }, [screen]);

  // Transition to quiz when questions are loaded
  useEffect(() => {
    if (!loading && !error && questions.length > 0) {
      setScreen('quiz');
    }
  }, [loading, error, questions]);

  // Handle quiz completion
  const handleQuizComplete = async (quizAnswers) => {
    setAnswers(quizAnswers);
    const score = calculateScore(quizAnswers);
    setScoreData(score);

    // Save game to Supabase
    await saveGame(supabase, {
      userId: user?.id || null,
      sessionId: sessionId.current,
      communityId: community?.id,
      score: score.score,
      totalQuestions: score.total,
      category: params.category !== 'all' ? params.category : null,
      difficulty: params.difficulty,
      answers: quizAnswers.map(a => ({
        questionId: a.questionId,
        selectedAnswer: a.selectedAnswer,
        correctAnswer: a.correctAnswer,
        correct: a.correct,
      })),
    });

    // Record streak
    if (community?.id) {
      const streak = recordGameForStreak(community.id);
      setStreakData(streak);
    }

    setScreen('results');
  };

  // Play again — refetch questions and reset
  const handlePlayAgain = () => {
    setAnswers([]);
    setScoreData(null);
    setScreen('loading');
    refetch();
  };

  // Render
  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor: 'var(--embed-bg)',
        color: 'var(--embed-text)',
        fontFamily: 'var(--embed-font)',
        minHeight: '100vh',
        padding: '1rem',
        boxSizing: 'border-box',
      }}
    >
      {/* Loading state */}
      {(screen === 'loading' && loading) && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Loading quiz...</div>
            <div style={{ opacity: 0.6 }}>{community?.name || params.community}</div>
          </div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          <div style={{ textAlign: 'center', maxWidth: '400px' }}>
            <div style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>😕</div>
            <p>{error}</p>
          </div>
        </div>
      )}

      {/* Quiz engine */}
      {screen === 'quiz' && (
        <QuizEngine
          questions={questions}
          community={community}
          timer={params.timer}
          onComplete={handleQuizComplete}
        />
      )}

      {/* Results screen */}
      {screen === 'results' && scoreData && (
        <>
          <ResultScreen
            scoreData={scoreData}
            answers={answers}
            questions={questions}
            community={community}
            guestName={guestName.current}
            user={user}
            onPlayAgain={handlePlayAgain}
            onLoginClick={() => setShowAuthModal(true)}
            onLogout={logout}
            streakData={streakData}
          />
          {params.leaderboard !== 'none' && (
            <Leaderboard
              community={community}
              leaderboardParam={params.leaderboard}
              user={user}
              guestName={guestName.current}
            />
          )}
        </>
      )}

      {/* Auth modal */}
      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onLogin={login}
          onRegister={register}
          onSuccess={() => claimAnonymousScores(sessionId.current)}
        />
      )}
    </div>
  );
}

export default EmbedShell;
