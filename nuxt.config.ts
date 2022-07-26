import { defineNuxtConfig } from 'nuxt'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // app
    app: {
        head: {
          title: 'Nuxt 3 Awesome Starter',
          titleTemplate: '%s - Nuxt 3 Awesome Starter',
          meta: [
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              {
              hid: 'description',
              name: 'description',
              content: 'Nuxt 3 Awesome Starter',
              },
          ],
          link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },

    // css
    css: [
        'virtual:windi-base.css',
        'virtual:windi-components.css',
        'virtual:windi-utilities.css',
        '~/assets/sass/app.scss',
    ],

    // plugins
    plugins: ['~/plugins/navbar.ts'],

    
    // build
    build: {
      transpile: ['@headlessui/vue'],
    },

    // build modules
    buildModules: [
        'nuxt-windicss',
        '@intlify/nuxt3',
        'unplugin-icons/nuxt',
        '@pinia/nuxt'
    ],
    // auto import components
    components: true,

    // vite plugins
    vite: {
        plugins: [
            UnpluginComponentsVite({
                dts: true,
                resolvers: [
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                ],
            }),
        ],
    },

    // localization - i18n config
    intlify: {
      localeDir: 'locales',
      vueI18n: {
        locale: 'en',
        fallbackLocale: 'en',
        availableLocales: ['en', 'id', 'ja', 'ko'],
      },
    },

    // windicss
    windicss: {
      analyze: {
        analysis: {
          interpretUtilities: false,
        },
        server: {
          port: 4000,
          open: false,
        },
      },
      scan: true,
    },
})
