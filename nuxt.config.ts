// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel-edge',
  },
  postcss: {
    plugins: {
      autoprefixer: {},
      cssnano: {},
    },
  },
  css: ["@/assets/styles/style.scss"],
  app: {
    head: {
      title: "Bakerwid",
      charset: "utf8",
      meta: [
        { name: "keywords", content: "nuxt" },
        { name: "author", content: "Networkant" },
        { "http-equiv": "content-type", content: "text/html;charset=UTF-8" },
        { "http-equiv": "x-ua-compatible", content: "IE=edge" },
      ],
      link: [
        { href: "manifest.json", type: "application/json", rel: "manifest" },
        { href: "favicon.png", rel: "icon", type: "image/png" },
      ],
      noscript: [],
    },
    pageTransition: true,
    rootId: "_bakerwid",
  },
  appConfig: {
    cookie: "sessionid",
  },
  devServer: {
    port: 3000,
  },
  modules: [],
  telemetry: false,
  runtimeConfig: {
    public: {},
  },
});
