import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import screen from "screen";

Vue.config.productionTip = false;

// Vue.component(screen, [screen]);

// vue.filter("to-uppercase", function(value) {
//   return value.touppercase();
// });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
