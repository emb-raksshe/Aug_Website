// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  // compatibilityDate: '2024-04-03',
  // devtools: { enabled: true },
  alias: {
    // "@" : resolve(__dirname,"/"),
    assets: "/<rootDir>/assets",
  },

  css : ['~/assets/main.scss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
});