// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/style.css','@fortawesome/fontawesome-svg-core/styles.css'
  ],
  "app": {
    "head": {
      "viewport": "width=500, initial-scale=1",
      "title": "喵立翰｜競選官網",
      "meta": [
          { "name": "description", "content": "這是 喵立翰｜2024不分區立委競選官方網站" },
          { "property": "og:title", "content": "喵立翰｜2024不分區立委競選官方網站" },
          { "property": "og:url", "content": "http://localhost:3000/" },
          { "property": "og:description", "content": "這是 喵立翰｜2024不分區立委競選官方網站" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" }
      ]
    },
    baseURL: '/f2e-mission1/',
    buildAssetsDir: 'assets',
  },
  "imports": {
    "dirs": ['stores']
  },
  plugins:["~/plugins/i18n.js"],
  "modules": ['@pinia/nuxt', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
})
