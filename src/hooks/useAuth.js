import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabaseClient';

/**
 * useAuth
 * 
 * Manages Supabase auth state for the embed.
 * Supports login, registration, logout, and session persistence.
 */
export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Login with email/password
  const login = useCallback(async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      if (error.message === 'Invalid login credentials') {
        throw new Error('Incorrect email or password.');
      }
      throw error;
    }
  }, []);

  // Register new account
  const register = useCallback(async (email, password, username) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username },
      },
    });
    if (error) throw error;

    // Check for existing account
    if (data?.user?.identities?.length === 0) {
      throw new Error('An account with this email already exists.');
    }

    return data;
  }, []);

  // Claim anonymous scores after login
  const claimAnonymousScores = useCallback(async (sessionId) => {
    if (!user) return;
    try {
      await supabase
        .from('games')
        .update({ user_id: user.id })
        .eq('session_id', sessionId)
        .is('user_id', null);
    } catch (err) {
      console.error('Failed to claim anonymous scores:', err);
    }
  }, [user]);

  // Logout
  const logout = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  return { user, loading, login, register, logout, claimAnonymousScores };
}
