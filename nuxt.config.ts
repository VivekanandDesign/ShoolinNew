export default {
  // Static site generation for Netlify
  target: 'static',
  ssr: false,
  
  head: {
    title: 'Shoolin Consultancy - Professional Legal Services',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Professional legal consultation and advisory services at Shoolin Consultancy. Excellence in every legal solution with comprehensive business law, corporate services, and litigation support.' },
      { name: 'keywords', content: 'legal consultation, corporate legal services, business law, litigation, legal documentation, Shoolin Consultancy' },
      { property: 'og:title', content: 'Shoolin Consultancy - Professional Legal Services' },
      { property: 'og:description', content: 'Excellence in every legal solution with comprehensive business law, corporate services, and litigation support.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' }
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
  
  // Generate static files
  generate: {
    fallback: true,
    routes: [
      '/',
      '/services',
      '/about',
      '/contact'
    ]
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