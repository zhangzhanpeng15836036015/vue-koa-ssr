// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App.vue";
import createRouter from "./router";
import Vuex from "vuex";
import VueRouter from "vue-router";
import createStore from "./store";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = createRouter();
const store = createStore();
/* eslint-disable no-new */
new Vue({
  router,
  store,
  components: { App },
  template: "<App/>"
});
