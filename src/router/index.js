import Vue from "vue";
import VueRouter from "vue-router";
import screen from "../views/screen";
import baidu from "../views/baidu";
// import value from "../views/value";
import Error from "../views/Error";
import tela from "../views/tela";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// Vue.compile("screen", screen);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/baidu",
    name: "baidu",
    component: baidu
  },
  {
    path: "/tela",
    name: "tela",
    component: tela
  },
  {
    path: "/Error",
    name: "Error",
    component: Error
  },
  // {
  //   path: "/value",
  //   name: "value",
  //   component: value
  // },
  {
    path: "/screen",
    name: "screen",
    component: screen
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
