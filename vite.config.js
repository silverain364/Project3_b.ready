import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Project3_b.ready/', // 필수: GitHub repo 이름
  build: {
    outDir: 'docs', // ← build 결과를 docs 폴더로!
  },
  plugins: [react()],
  css: {
    devSourcemap: true  // ✅ 요게 핵심!
  }
})