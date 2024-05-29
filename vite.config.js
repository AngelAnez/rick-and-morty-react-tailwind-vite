import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://angelanez.github.io/rick-and-morty-react-tailwind-vite/"
})
