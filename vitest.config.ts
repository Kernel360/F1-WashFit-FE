/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@app', replacement: path.resolve(__dirname, './src/app') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@shared', replacement: path.resolve(__dirname, './src/components/shared') },
      { find: '@styles', replacement: path.resolve(__dirname, './src/styles') },
      { find: '@remote', replacement: path.resolve(__dirname, './src/remote') },
      { find: '@constants', replacement: path.resolve(__dirname, './src/constants') },
      { find: '@contexts', replacement: path.resolve(__dirname, './src/contexts') },
      { find: '@model', replacement: path.resolve(__dirname, './src/model') },
      { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
      { find: '@stores', replacement: path.resolve(__dirname, './src/stores') },
      { find: '@lib', replacement: path.resolve(__dirname, './src/lib') },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
      { find: '@providers', replacement: path.resolve(__dirname, './src/providers') },
      { find: '@stories', replacement: path.resolve(__dirname, './src/stories') },
    ],
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
});
