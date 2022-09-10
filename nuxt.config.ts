import { defineNuxtConfig } from 'nuxt'

// Tailwind Imports
import tailwindForms from '@tailwindcss/forms'
import tailwindTypography from '@tailwindcss/typography'
import tailwindAspectRatio from '@tailwindcss/aspect-ratio'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/supabase',
  ],
  googleFonts: {
    families: {
      Inter: true
    }
  },
  tailwindcss: {
    exposeConfig: true,
    jit: true,
    config: {
      plugins: [
        tailwindTypography,
        tailwindForms,
        tailwindAspectRatio
      ]
    },
  },
  build: {
    transpile: [
      '@headlessui/vue',
      '@heroicons/vue'
    ]
  }
})
