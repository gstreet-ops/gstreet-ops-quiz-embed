import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabaseClient';

/**
 * useQuestions
 * 
 * Fetches community questions from Supabase by community slug.
 * Validates the community exists, then fetches and shuffles questions
 * based on category, difficulty, and count params.
 * 
 * @param {object} params - Parsed embed params
 * @returns {{ community, questions, loading, error, refetch }}
 */
export function useQuestions(params) {
  const [community, setCommunity] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuestions = useCallback(async () => {
    if (!params.community) {
      setError('No community specified.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // 1. Look up community by slug
      const { data: communityData, error: communityError } = await supabase
        .from('communities')
        .select('id, name, slug, settings')
        .eq('slug', params.community)
        .single();

      if (communityError || !communityData) {
        setError(`Community "${params.community}" not found. Check the community parameter in your embed URL.`);
        setLoading(false);
        return;
      }

      setCommunity(communityData);

      // 2. Build question query
      let query = supabase
        .from('community_questions')
        .select('*')
        .eq('community_id', communityData.id);

      if (params.difficulty !== 'mixed') {
        query = query.eq('difficulty', params.difficulty);
      }

      if (params.category !== 'all') {
        query = query.eq('category', params.category);
      }

      const { data: questionsData, error: questionsError } = await query;

      if (questionsError) {
        setError('Failed to load questions. Please try again.');
        setLoading(false);
        return;
      }

      if (!questionsData || questionsData.length === 0) {
        setError('No questions available for this community. Check back soon!');
        setLoading(false);
        return;
      }

      // 3. Fisher-Yates shuffle
      const shuffled = [...questionsData];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      // 4. Take requested count and format for quiz engine
      const selected = shuffled.slice(0, params.count).map(q => ({
        id: q.id,
        question: q.question_text,
        correctAnswer: q.correct_answer,
        incorrectAnswers: q.incorrect_answers || [],
        difficulty: q.difficulty,
        category: q.category,
        imageUrl: q.image_url || null,
        videoUrl: q.video_url || null,
        explanation: q.explanation || null,
      }));

      setQuestions(selected);
    } catch (err) {
      console.error('useQuestions error:', err);
      setError('Something went wrong loading the quiz.');
    } finally {
      setLoading(false);
    }
  }, [params.community, params.difficulty, params.category, params.count]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  return { community, questions, loading, error, refetch: fetchQuestions };
}
