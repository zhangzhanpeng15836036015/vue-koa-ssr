import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default () => {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "layout",
        component: resolve => require(["../views/layout.vue"], resolve),
        redirect: "/home",
        children: [
          {
            path: "/home",
            name: "home",
            component: resolve => require(["../views/home.vue"], resolve)
          },
          {
            path: "/min",
            name: "min",
            component: resolve => require(["../views/min.vue"], resolve)
          },
          {
            path: "/myOrder",
            name: "myOrder",
            component: resolve => require(["../views/myOrder.vue"], resolve)
          },
          {
            path: "/myCard",
            name: "myCard",
            component: resolve => require(["../views/myCard.vue"], resolve)
          }
        ]
      }
    ]
  });
};
