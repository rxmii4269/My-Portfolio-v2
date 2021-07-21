import { faExternalLinkAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import customTheme from './custom-theme'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Romaine Murray',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Learn about my endeavours as a developer and what I have built',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#76e4f7' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'alternate icon', type: 'image/png', href: '/favicon.png' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  loadingIndicator: {
    name: 'folding-cube',
    color: '#76e4f7',
    background: '#000A21',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/animate.css.js', '@/plugins/animate-on-scroll.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Romaine Murray',
      short_name: 'Romaine Murray',
    },
    meta: {
      theme_color: '#000A21',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      preset: {
        autoprefixer: {
          grid: true,
          flexbox: true,
          overrideBrowserslist: ['last 3 versions', '> 1%', 'ie 8', 'ie 7'],
        },
      },
    },
  },

  chakra: {
    extendTheme: customTheme,
    icons: {
      iconPack: ['fas', 'fab'],
      iconSet: {
        faExternalLinkAlt,
        faGithub,
        faLinkedinIn,
        faBars,
      },
    },
  },
  googleFonts: {
    families: {
      Roboto: true,
      'IBM+Plex+Sans': true,
    },
    display: 'swap',
  },
}
