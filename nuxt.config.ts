// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt'
  ],

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/fonts.css'
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
  }
})
