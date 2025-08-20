// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      title:
        'Stunning UI is a collection of interactive Tailwind CSS components built for Vue and Nuxt.',
      link: [{ rel: 'icon', type: 'image/*', href: '/favicon.svg' }],
      meta: [
        {
          property: 'description',
          content:
            'Stunning UI is a collection of interactive Tailwind CSS components built for Vue and Nuxt.'
        },
        {
          property: 'og:title',
          content: 'Create Stunning Websites That Stand Out'
        },
        {
          property: 'og:description',
          content:
            'Stunning UI is a collection of interactive Tailwind CSS components built for Vue and Nuxt.'
        },
        {
          property: 'og:image',
          content: 'https://stunningui.design/preview.png'
        },
        { property: 'og:url', content: 'https://stunningui.design' },
        { property: 'og:site_name', content: 'One Tab Group' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '900' },
        {
          property: 'og:logo',
          content: 'https://stunningui.design/favicon.png'
        },
        {
          property: 'og:image:alt',
          content: 'Create Stunning Websites That Stand Out'
        },
        { property: 'twitter:site', content: 'One Tab Group' },
        {
          property: 'twitter:title',
          content: 'Create Stunning Websites That Stand Out'
        },
        { property: 'twitter:card', content: 'summary_large_image' },
        {
          property: 'twitter:description',
          content:
            'Stunning UI is a collection of interactive Tailwind CSS components built for Vue and Nuxt.'
        },
        {
          property: 'twitter:image:src',
          content: 'https://stunningui.design/preview.png'
        }
      ],
      script: [
        // {
        //   defer: true,
        //   'data-domain': 'stunningui.design',
        //   src: 'https://plausible.io/js/script.js'
        // },
        {
          src: 'https://analytics.ahrefs.com/analytics.js',
          'data-key': '4YJKXMwOAKfUo2943w5q1Q',
          defer: true
        }
      ]
    }
  },
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-icon'
  ],
  colorMode: {
    classSuffix: ''
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark'
      }
    }
  },
  components: {
    global: true,
    dirs: ['@/components']
  },
  build: {
    transpile: ['vue-sonner']
  }
})
