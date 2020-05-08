import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import messages from "./localization";
import VueI18n from "vue-i18n";

Vue.config.productionTip = false;
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "en",
  messages,
});

new Vue({
  i18n: i18n,
  router: router,
  render: (h) => h(App),
}).$mount("#app");
