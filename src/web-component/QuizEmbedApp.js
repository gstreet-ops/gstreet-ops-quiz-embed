import React, { useEffect, useRef, useState } from 'react';
import { useQuestions } from '../hooks/useQuestions';
import { useAuth } from '../hooks/useAuth';
import { getSessionId, getGuestName } from '../utils/storage';
import { calculateScore, saveGame } from '../utils/scoring';
import { recordGameForStreak } from '../utils/streaks';
import { fireWebhook } from '../utils/webhook';
import { supabase } from '../supabaseClient';
import QuizEngine from '../components/QuizEngine';
import ResultScreen from '../components/ResultScreen';
import AuthModal from '../components/AuthModal';
import Leaderboard from '../components/Leaderboard';

/**
 * QuizEmbedApp
 * 
 * Root React component for the web component path.
 * Same logic as EmbedShell but:
 * - Injects theme CSS vars into shadow DOM (not document root)
 * - Dispatches custom events via the element's dispatch() method
 * - Loads Google Fonts into shadow DOM
 */
export function QuizEmbedApp({ params, shadowRoot, dispatch }) {
  const { community, questions, loading, error, refetch } = useQuestions(params);
  const { user, login, register, logout, claimAnonymousScores } = useAuth();
  const [screen, setScreen] = useState('loading');
  const [answers, setAnswers] = useState([]);
  const [scoreData, setScoreData] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [streakData, setStreakData] = useState(null);
  const sessionId = useRef(getSessionId());
  const guestName = useRef(getGuestName());
  const fontLoadedRef = useRef(null);

  // Inject CSS custom properties into shadow DOM host
  useEffect(() => {
    if (!shadowRoot) return;
    const host = shadowRoot.host;
    if (!host) return;

    host.style.setProperty('--embed-bg', params.bg);
    host.style.setProperty('--embed-surface', params.surface);
    host.style.setProperty('--embed-primary', params.primary);
    host.style.setProperty('--embed-accent', params.accent);
    host.style.setProperty('--embed-text', params.text);
    host.style.setProperty('--embed-font',
      params.font ? `"${params.font.replace(/\+/g, ' ')}", sans-serif` : 'sans-serif'
    );
  }, [shadowRoot, params.bg, params.surface, params.primary, params.accent, params.text, params.font]);

  // Load Google Font into shadow DOM
  useEffect(() => {
    if (!params.font || params.font === 'Inter' || !shadowRoot) return;
    if (fontLoadedRef.current === params.font) return;

    const fontName = params.font.replace(/\+/g, ' ');
    const linkId = 'embed-google-font';

    // Remove previous
    const existing = shadowRoot.getElementById(linkId);
    if (existing) existing.remove();

    // Google Fonts must be loaded in the main document for shadow DOM to use them
    const docLink = document.createElement('link');
    docLink.id = `${linkId}-doc`;
    docLink.rel = 'stylesheet';
    docLink.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontName)}:wght@400;600;700&display=swap`;
    // Remove old doc-level link
    const oldDocLink = document.getElementById(`${linkId}-doc`);
    if (oldDocLink) oldDocLink.remove();
    document.head.appendChild(docLink);

    fontLoadedRef.current = params.font;
  }, [params.font, shadowRoot]);

  // Transition to quiz when questions loaded
  useEffect(() => {
    if (!loading && !error && questions.length > 0) {
      setScreen('quiz');
      dispatch('quiz:started', { communitySlug: params.community });
    }
  }, [loading, error, questions, dispatch, params.community]);

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
    let streak = null;
    if (community?.id) {
      streak = recordGameForStreak(community.id);
      setStreakData(streak);

      // Fire webhook if configured
      const webhookUrl = community?.settings?.webhook_url;
      if (webhookUrl) {
        fireWebhook({
          webhookUrl,
          communitySlug: community.slug,
          communityName: community.name,
          score: score.score,
          total: score.total,
          percentage: score.percentage,
          playerName: user?.user_metadata?.username || guestName.current,
          isAnonymous: !user,
          streak: streak?.count,
        });
      }
    }

    setScreen('results');

    // Dispatch completion event
    dispatch('quiz:completed', {
      score: score.score,
      total: score.total,
      percentage: score.percentage,
      streak: streak?.count || null,
    });
  };

  // Play again
  const handlePlayAgain = () => {
    setAnswers([]);
    setScoreData(null);
    setScreen('loading');
    refetch();
  };

  // Container style — same as EmbedShell but uses CSS vars from shadow host
  const containerStyle = {
    backgroundColor: 'var(--embed-bg)',
    color: 'var(--embed-text)',
    fontFamily: 'var(--embed-font)',
    minHeight: '400px',
    padding: '1rem',
    boxSizing: 'border-box',
  };

  return (
    <div style={containerStyle}>
      {/* Loading */}
      {screen === 'loading' && loading && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Loading quiz...</div>
            <div style={{ opacity: 0.6 }}>{community?.name || params.community}</div>
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          <div style={{ textAlign: 'center', maxWidth: '400px' }}>
            <div style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>😕</div>
            <p>{error}</p>
          </div>
        </div>
      )}

      {/* Quiz */}
      {screen === 'quiz' && (
        <QuizEngine
          questions={questions}
          community={community}
          timer={params.timer}
          onComplete={handleQuizComplete}
        />
      )}

      {/* Results */}
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
