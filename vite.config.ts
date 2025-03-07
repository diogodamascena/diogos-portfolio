import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Substitua 'portfolio' pelo nome do seu repositório
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});