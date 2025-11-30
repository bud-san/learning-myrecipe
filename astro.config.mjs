// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
// @ts-ignore - TailwindCSS 4のViteプラグインの型定義が不完全
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    // @ts-ignore - TailwindCSS 4のViteプラグインの型定義が不完全
    plugins: [tailwindcss()]
  },
  output: 'static',
  site: 'https://bud-san.github.io/',
  base: '/learning-myrecipe/'
})


