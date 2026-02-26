/**
 * Score Calculation Logic
 */

/**
 * Calculate score summary from an array of answers.
 * 
 * @param {Array<{ correct: boolean }>} answers
 * @returns {{ score: number, total: number, percentage: number }}
 */
export function calculateScore(answers) {
  const total = answers.length;
  const score = answers.filter(a => a.correct).length;
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  return { score, total, percentage };
}

/**
 * Save a completed game to Supabase.
 * Handles both anonymous (session_id) and authenticated (user_id) saves.
 * 
 * @param {object} supabase - Supabase client
 * @param {object} opts
 * @returns {Promise<{ gameId: string|null, error: string|null }>}
 */
export async function saveGame(supabase, {
  userId = null,
  sessionId = null,
  communityId,
  score,
  totalQuestions,
  category = null,
  difficulty = null,
  answers = [],
}) {
  try {
    // Detect host origin for embed analytics
    let hostOrigin = null;
    try {
      if (window.self !== window.top && document.referrer) {
        hostOrigin = new URL(document.referrer).hostname;
      }
    } catch (e) {
      // Cross-origin referrer access blocked — that's fine
    }

    const gameRecord = {
      community_id: communityId,
      score: Math.min(score, totalQuestions),
      total_questions: totalQuestions,
      category,
      difficulty,
      source: 'embed',
      host_origin: hostOrigin,
    };

    // Attach user or session identifier
    if (userId) {
      gameRecord.user_id = userId;
    }
    if (sessionId) {
      gameRecord.session_id = sessionId;
    }

    const { data, error } = await supabase
      .from('games')
      .insert([gameRecord])
      .select()
      .single();

    if (error) throw error;

    // Save individual answers if we have a game ID
    if (data?.id && answers.length > 0) {
      const answerRecords = answers.map(a => ({
        game_id: data.id,
        question_id: a.questionId || null,
        selected_answer: a.selectedAnswer,
        correct_answer: a.correctAnswer,
        is_correct: a.correct,
        ...(userId ? { user_id: userId } : {}),
      }));

      await supabase.from('game_answers').insert(answerRecords);
    }

    return { gameId: data?.id || null, error: null };
  } catch (err) {
    console.error('saveGame error:', err);
    return { gameId: null, error: err.message };
  }
}
