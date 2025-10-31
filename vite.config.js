import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/green-plant-landing-page/', // 👈 مهم جدًا علشان GitHub Pages يشتغل
  plugins: [
    tailwindcss(),
  ],
})

