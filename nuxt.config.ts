// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/supabase',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@formkit/nuxt'
  ],
  googleFonts: {
    families: {
      Inter: true
    }
  },
  tailwindcss: {
    jit: true,
  },
  colorMode: {
    classSuffix: ""
  }
})
