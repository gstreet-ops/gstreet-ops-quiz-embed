import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/web-component/entry.js'),
      name: 'QuizEmbed',
      fileName: (format) => `quiz-embed.${format}.js`,
      formats: ['es', 'umd'],
    },
    outDir: 'dist',
    // Bundle everything — consumers get a single file with zero deps
    rollupOptions: {
      // No externals — React, Supabase, everything bundled in
      output: {
        // Ensure CSS is injected into the shadow DOM, not a separate file
        inlineDynamicImports: true,
      },
    },
    // Target modern browsers that support custom elements
    target: 'es2020',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // Keep console.debug for webhook
      },
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});
