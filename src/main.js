import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import axios from "axios";


Vue.config.productionTip = false;
console.log(process.env.VUE_APP_BASE_API_URL);
axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
