import React, { useState } from 'react';

/**
 * AuthModal
 * 
 * Lightweight login/signup modal for the embed.
 * Toggles between login and register modes.
 */
function AuthModal({ onClose, onLogin, onRegister, onSuccess }) {
  const [mode, setMode] = useState('login'); // login | register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === 'login') {
        await onLogin(email, password);
        onSuccess?.();
        onClose();
      } else {
        // Validate username
        if (!username.trim() || username.trim().length < 3) {
          throw new Error('Username must be at least 3 characters.');
        }
        if (!/^[a-zA-Z0-9_]+$/.test(username.trim())) {
          throw new Error('Username: letters, numbers, and underscores only.');
        }
        if (password.length < 8) {
          throw new Error('Password must be at least 8 characters.');
        }
        await onRegister(email, password, username.trim());
        setSuccess(true);
        setTimeout(() => {
          setMode('login');
          setSuccess(false);
        }, 2000);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: 'var(--embed-bg)',
    color: 'var(--embed-text)',
    border: '2px solid rgba(255,255,255,0.15)',
    borderRadius: '6px',
    fontSize: '0.9rem',
    fontFamily: 'var(--embed-font)',
    boxSizing: 'border-box',
    marginBottom: '0.75rem',
    outline: 'none',
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem',
    }}>
      <div style={{
        backgroundColor: 'var(--embed-surface)',
        borderRadius: '12px',
        padding: '1.5rem',
        maxWidth: '380px',
        width: '100%',
        position: 'relative',
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            background: 'none',
            border: 'none',
            color: 'var(--embed-text)',
            fontSize: '1.25rem',
            cursor: 'pointer',
            opacity: 0.6,
          }}
        >
          ✕
        </button>

        <h3 style={{ margin: '0 0 1rem', fontSize: '1.1rem', textAlign: 'center' }}>
          {mode === 'login' ? 'Sign In' : 'Create Account'}
        </h3>

        {success && (
          <div style={{
            padding: '0.75rem',
            borderRadius: '6px',
            backgroundColor: 'rgba(0,180,0,0.15)',
            marginBottom: '1rem',
            fontSize: '0.85rem',
            textAlign: 'center',
          }}>
            ✅ Account created! Check your email to confirm, then sign in.
          </div>
        )}

        {error && (
          <div style={{
            padding: '0.75rem',
            borderRadius: '6px',
            backgroundColor: 'rgba(231,76,60,0.15)',
            marginBottom: '1rem',
            fontSize: '0.85rem',
            color: '#e74c3c',
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {mode === 'register' && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
            minLength={mode === 'register' ? 8 : undefined}
          />
          <button
            type="submit"
            disabled={loading}
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
              cursor: loading ? 'wait' : 'pointer',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? '...' : mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p style={{
          textAlign: 'center',
          marginTop: '1rem',
          marginBottom: 0,
          fontSize: '0.8rem',
          opacity: 0.6,
        }}>
          {mode === 'login' ? (
            <>Don't have an account?{' '}
              <span onClick={() => { setMode('register'); setError(null); }}
                style={{ color: 'var(--embed-primary)', cursor: 'pointer', textDecoration: 'underline' }}>
                Sign up
              </span>
            </>
          ) : (
            <>Already have an account?{' '}
              <span onClick={() => { setMode('login'); setError(null); }}
                style={{ color: 'var(--embed-primary)', cursor: 'pointer', textDecoration: 'underline' }}>
                Sign in
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default AuthModal;
