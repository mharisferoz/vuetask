import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import infiniteScroll from 'vue-infinite-scroll'

Vue.config.productionTip = true;
Vue.use(infiniteScroll)

new Vue({
  vuetify: vuetify,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
