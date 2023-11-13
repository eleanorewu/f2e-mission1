import { createI18n } from "vue-i18n";
import zhTW from "../locales/zh-TW.json";
import meow from "../locales/meow.json";

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "zhTW",
    messages: {
      zhTW,
      meow,
    },
  });
  nuxtApp.vueApp.use(i18n);
});
