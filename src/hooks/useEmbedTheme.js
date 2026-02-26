import { useEffect, useRef } from 'react';

/**
 * useEmbedTheme
 * 
 * Injects theme params as CSS custom properties on the document root
 * and dynamically loads a Google Font if specified.
 * 
 * @param {object} params - Parsed embed params from parseEmbedParams()
 */
export function useEmbedTheme(params) {
  const fontLoadedRef = useRef(null);

  // Inject CSS custom properties
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--embed-bg', params.bg);
    root.style.setProperty('--embed-surface', params.surface);
    root.style.setProperty('--embed-primary', params.primary);
    root.style.setProperty('--embed-accent', params.accent);
    root.style.setProperty('--embed-text', params.text);
    root.style.setProperty('--embed-font', params.font ? `"${params.font.replace(/\+/g, ' ')}", sans-serif` : 'sans-serif');
  }, [params.bg, params.surface, params.primary, params.accent, params.text, params.font]);

  // Dynamically load Google Font
  useEffect(() => {
    if (!params.font || params.font === 'Inter') return;
    if (fontLoadedRef.current === params.font) return;

    const fontName = params.font.replace(/\+/g, ' ');
    const linkId = 'embed-google-font';

    // Remove previous font link if exists
    const existing = document.getElementById(linkId);
    if (existing) existing.remove();

    // Create and append new Google Fonts link
    const link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontName)}:wght@400;600;700&display=swap`;
    document.head.appendChild(link);

    fontLoadedRef.current = params.font;
  }, [params.font]);
}
