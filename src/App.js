import React from 'react';
import { parseEmbedParams } from './utils/params';
import { useEmbedTheme } from './hooks/useEmbedTheme';
import EmbedShell from './components/EmbedShell';

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const { params, errors } = parseEmbedParams(searchParams);

  // Apply theme CSS custom properties and load Google Font
  useEmbedTheme(params);

  // Show error if community is missing
  if (errors.length > 0 || !params.community) {
    return (
      <div style={{
        padding: '2rem',
        fontFamily: 'sans-serif',
        color: '#F5F0EB',
        backgroundColor: '#0D0D0D',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
        <div>
          <h2 style={{ marginBottom: '1rem' }}>Quiz Embed</h2>
          <p>Missing required parameter: <code>community</code></p>
          <p style={{ opacity: 0.6, marginTop: '0.5rem', fontSize: '0.875rem' }}>
            Add <code>?community=your-community-slug</code> to the URL.
          </p>
        </div>
      </div>
    );
  }

  return <EmbedShell params={params} />;
}

export default App;
