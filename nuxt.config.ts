// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
      link: [],
      noscript: [],
    },
    pageTransition: true,
    rootId: "_bakerwid",
  },
  appConfig: {
    cookie: 'sessionid',
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
