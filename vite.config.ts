import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@containers': path.resolve(__dirname, './src/containers'),
      '@types': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: [
        './src/**/*.css',
        './src/**/*.ts',
        './src/**/*.tsx',
        './src/**/*.js',
        './src/**/*.jsx',
      ],
      exclude: ['src/**/*.css'],
    }),
  ],
});
