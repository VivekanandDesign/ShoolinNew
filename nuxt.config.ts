export default {
  head: {
    title: 'Nuxt Appointment App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'A simple appointment booking application' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap' }
    ]
  },
  css: [
    '@/assets/css/main.css',
    '@/assets/css/services.css'
  ],
  plugins: [
    '@/plugins/google-reviews.js'
  ],
  build: {
    transpile: []
  },
  modules: [],
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      '/**': { 
        headers: {
          'Cache-Control': process.env.NODE_ENV === 'production' ? 
            'public, max-age=31536000, immutable' : 'no-cache'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NODE_ENV === 'production' ? 
        'https://your-production-domain.com' : 'http://localhost:3000'
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  }
}