import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import App from "./App.vue";
import createStore from "./store/index.js";
import createRouter from "./router/index.js";
import Meta from "vue-meta";
// console.log(createRouter(), "123456789", "router");
// console.log(createStore,"121212121","store")
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Meta);
export default () => {
  const router = createRouter();
  // console.log(router);
  const store = createStore();
  const app = new Vue({
    store,
    router,
    render: h => h(App)
  });
  return { app, router, store };
};
