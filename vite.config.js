import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/' cocok untuk repo mahardikaputra12.github.io.
// Kalau repo-nya bernama lain, ganti jadi '/nama-repo/'.
export default defineConfig({ plugins: [react()], base: '/' })
