import getCssModulesNamesGenerator from './utils/css-modules-names-generator';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['@/assets/styles/main.scss'],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  i18n: {
    customRoutes: 'config',
    defaultDirection: 'ltr',
    defaultLocale: 'ru',
    lazy: true,
    locales: [
      {
        code: 'ru',
        dir: 'ltr',
        file: 'ru.json',
        language: 'ru-BY',
        isCatchallLocale: true,
        name: 'Russian',
      },
    ],
    pages: {},
    strategy: 'prefix_except_default',
    types: 'composition',
  },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
  runtimeConfig: {
    public: {
      baseApiUrl: '',
    },
  },
  vite: {
    css: {
      modules: {
        generateScopedName: getCssModulesNamesGenerator(process.env.NODE_ENV === 'production'),
      },
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: "@use '@/assets/styles/global.scss' as *;",
        },
      },
    },
  },
});
