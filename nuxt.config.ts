// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@nuxtjs/sitemap'
  ],

  // Sitemap 配置
  sitemap: {
    hostname: 'https://www.chetuoche.com',
    gzip: true,
    routes: [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/big-carrier', changefreq: 'weekly', priority: 0.9 },
      { url: '/small-carrier', changefreq: 'weekly', priority: 0.9 },
      { url: '/rescue', changefreq: 'weekly', priority: 0.9 },
      { url: '/valet', changefreq: 'weekly', priority: 0.9 },
      { url: '/luxury-transport', changefreq: 'weekly', priority: 0.8 },
      { url: '/supply-chain', changefreq: 'weekly', priority: 0.8 },
      { url: '/personal-travel', changefreq: 'weekly', priority: 0.8 },
      { url: '/about', changefreq: 'monthly', priority: 0.7 },
      { url: '/contact', changefreq: 'monthly', priority: 0.7 },
      { url: '/partners', changefreq: 'monthly', priority: 0.7 },
      { url: '/solutions', changefreq: 'monthly', priority: 0.8 },
      { url: '/news', changefreq: 'daily', priority: 0.8 },
      { url: '/pricing', changefreq: 'weekly', priority: 0.9 },
      { url: '/guide', changefreq: 'monthly', priority: 0.6 },
      { url: '/careers', changefreq: 'monthly', priority: 0.6 },
      { url: '/truck-sales', changefreq: 'weekly', priority: 0.7 },
      { url: '/partner-recruit', changefreq: 'monthly', priority: 0.7 },
      { url: '/download', changefreq: 'monthly', priority: 0.6 },
      { url: '/download/client', changefreq: 'monthly', priority: 0.6 },
      { url: '/download/driver', changefreq: 'monthly', priority: 0.6 },
      { url: '/driver', changefreq: 'monthly', priority: 0.6 },
      { url: '/driver/home', changefreq: 'monthly', priority: 0.6 },
      { url: '/transport', changefreq: 'weekly', priority: 0.8 },
      { url: '/cybersecurity', changefreq: 'monthly', priority: 0.5 }
    ],
    exclude: [
      '/test-hero',
      '/api/**',
      '/admin/**'
    ]
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/fonts.css',
    '~/assets/css/qimoor-hide.css'
  ],


  app: {
    head: {
      title: '车拖车 - 智能汽车物流生态平台',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: '连接运力、货主与救援服务的综合性数字平台。自研 AI 智能调度系统，连接 70万+ 运力，已安全交付 2500万+ 台次。'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.VITE_APP_API || 'https://git.chetuoche.net/official-website-server',
      proxyApi: process.env.VITE_APP_PROXY_API || 'https://test.chetuoche.net',
      tmapKey: process.env.TMAP_KEY || 'QH6BZ-IBD37-SIAXU-HFYOF-TQJWE-BBFJD'
    }
  },



  typescript: {
    strict: true,
    typeCheck: false  // 暂时禁用，避免中文引号错误
  },

  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost'
      }
    }
  },

  nitro: {
    devProxy: {}
  },

  devServer: {
    port: 3001,
    host: '127.0.0.1'
  }
})
