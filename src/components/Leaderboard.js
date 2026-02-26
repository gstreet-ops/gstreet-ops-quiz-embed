import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabaseClient';

/**
 * Leaderboard
 * 
 * Community and platform leaderboard tabs.
 * Fetches from community_leaderboards view and games table.
 * Tab visibility controlled by leaderboard URL param.
 */
function Leaderboard({ community, leaderboardParam, user, guestName }) {
  const showCommunity = leaderboardParam === 'community' || leaderboardParam === 'both';
  const showPlatform = leaderboardParam === 'platform' || leaderboardParam === 'both';

  const [activeTab, setActiveTab] = useState(showCommunity ? 'community' : 'platform');
  const [communityData, setCommunityData] = useState([]);
  const [platformData, setPlatformData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCommunityLeaderboard = useCallback(async () => {
    if (!community?.id) return;
    const { data } = await supabase
      .from('community_leaderboards')
      .select('*')
      .eq('community_id', community.id)
      .order('rank', { ascending: true })
      .limit(10);
    setCommunityData(data || []);
  }, [community?.id]);

  const fetchPlatformLeaderboard = useCallback(async () => {
    // Aggregate across all communities from the view
    const { data } = await supabase
      .from('community_leaderboards')
      .select('user_id, username, games_played, total_score, total_questions, avg_percentage')
      .order('avg_percentage', { ascending: false })
      .limit(50);

    if (!data) { setPlatformData([]); return; }

    // Aggregate by user across communities
    const userMap = {};
    data.forEach(row => {
      if (!userMap[row.user_id]) {
        userMap[row.user_id] = {
          user_id: row.user_id,
          username: row.username,
          games_played: 0,
          total_score: 0,
          total_questions: 0,
        };
      }
      userMap[row.user_id].games_played += row.games_played;
      userMap[row.user_id].total_score += row.total_score;
      userMap[row.user_id].total_questions += row.total_questions;
    });

    const aggregated = Object.values(userMap)
      .map(u => ({
        ...u,
        avg_percentage: u.total_questions > 0
          ? Math.round((u.total_score / u.total_questions) * 1000) / 10
          : 0,
      }))
      .sort((a, b) => b.avg_percentage - a.avg_percentage)
      .slice(0, 10);

    setPlatformData(aggregated);
  }, []);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      await Promise.all([
        showCommunity ? fetchCommunityLeaderboard() : Promise.resolve(),
        showPlatform ? fetchPlatformLeaderboard() : Promise.resolve(),
      ]);
      setLoading(false);
    };
    fetchAll();
  }, [showCommunity, showPlatform, fetchCommunityLeaderboard, fetchPlatformLeaderboard]);

  // Expose refetch for parent to call after game completes
  const refetch = useCallback(async () => {
    await Promise.all([
      showCommunity ? fetchCommunityLeaderboard() : Promise.resolve(),
      showPlatform ? fetchPlatformLeaderboard() : Promise.resolve(),
    ]);
  }, [showCommunity, showPlatform, fetchCommunityLeaderboard, fetchPlatformLeaderboard]);

  const currentData = activeTab === 'community' ? communityData : platformData;

  const tabStyle = (isActive) => ({
    flex: 1,
    padding: '0.625rem',
    backgroundColor: isActive ? 'var(--embed-primary)' : 'transparent',
    color: 'var(--embed-text)',
    border: isActive ? 'none' : '1px solid rgba(255,255,255,0.1)',
    borderRadius: '6px',
    fontSize: '0.85rem',
    fontWeight: '600',
    fontFamily: 'var(--embed-font)',
    cursor: 'pointer',
    opacity: isActive ? 1 : 0.6,
  });

  const rankEmoji = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h3 style={{ fontSize: '1rem', margin: '0 0 0.75rem', opacity: 0.7 }}>Leaderboard</h3>

      {/* Tabs */}
      {showCommunity && showPlatform && (
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          <button style={tabStyle(activeTab === 'community')} onClick={() => setActiveTab('community')}>
            {community?.name || 'Community'}
          </button>
          <button style={tabStyle(activeTab === 'platform')} onClick={() => setActiveTab('platform')}>
            All Communities
          </button>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '1rem', opacity: 0.5 }}>Loading leaderboard...</div>
      )}

      {/* Empty state */}
      {!loading && currentData.length === 0 && (
        <div style={{ textAlign: 'center', padding: '1rem', opacity: 0.5, fontSize: '0.9rem' }}>
          No scores yet. Be the first!
        </div>
      )}

      {/* Leaderboard rows */}
      {!loading && currentData.length > 0 && (
        <div>
          {currentData.map((entry, idx) => {
            const rank = idx + 1;
            const isCurrentUser = user && entry.user_id === user.id;

            return (
              <div
                key={entry.user_id || idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.625rem 0.75rem',
                  marginBottom: '0.375rem',
                  borderRadius: '8px',
                  backgroundColor: isCurrentUser ? 'rgba(107,45,94,0.2)' : 'var(--embed-surface)',
                  border: isCurrentUser ? '2px solid var(--embed-primary)' : '2px solid transparent',
                }}
              >
                {/* Rank */}
                <div style={{ width: '2.5rem', fontWeight: '700', fontSize: '0.9rem' }}>
                  {rankEmoji(rank)}
                </div>

                {/* Username */}
                <div style={{ flex: 1, fontSize: '0.9rem' }}>
                  {entry.username || 'Anonymous'}
                  {isCurrentUser && <span style={{ opacity: 0.5, fontSize: '0.75rem' }}> (you)</span>}
                </div>

                {/* Stats */}
                <div style={{ textAlign: 'right', fontSize: '0.8rem' }}>
                  <div style={{ fontWeight: '600' }}>{entry.avg_percentage}%</div>
                  <div style={{ opacity: 0.5, fontSize: '0.7rem' }}>{entry.games_played} games</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Guest note */}
      {!user && !loading && (
        <p style={{ textAlign: 'center', fontSize: '0.75rem', opacity: 0.4, marginTop: '0.75rem' }}>
          Sign in to appear on the leaderboard • Playing as {guestName}
        </p>
      )}
    </div>
  );
}

Leaderboard.refetch = null;
export default Leaderboard;
