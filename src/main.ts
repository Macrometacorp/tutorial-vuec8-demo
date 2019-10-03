import Vue from "vue";
import App from "./App.vue";
import { vuec8 } from "vuec8";

Vue.use(vuec8, {
  auth: {
    email: "",
    password: "",
  },
  config: ""
});

Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");
