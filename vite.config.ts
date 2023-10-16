import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name].[hash].mjs`,
        chunkFileNames: `[name].[hash].mjs`,
      },
    },
  },
  plugins: [react()],
})
