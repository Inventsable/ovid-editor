import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "abstract",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/:id?",
      name: "home",
      component: Home
    }
  ]
});
