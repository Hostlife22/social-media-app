import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://social-api-hostlife.herokuapp.com/',
    },
  },
  define: {
    'process.env': process.env,
  },
  plugins: [react()],
});
