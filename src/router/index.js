import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/details/:slug",
    name: "destinationDetails",
    component: () =>
      import(
        /* webpackChunkName: destinationDetails */ "../views/DestinationDetails.vue"
      ),
    props: true,
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () =>
          /*  webpackChunkName: experienceDetails */ "../views/ExperienceDetails.vue"
      }
    ]
  },
  {
    path: "/user",
    name: "user",
    component: () => /* webpackChunkName: user */ "../views/User.vue",
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "login",
    component: () => /* webpackChunkName: login */ "../views/Login.vue"
  }
  // {
  //   path: "/404",
  //   alias: "*",
  //   name: "notFound",
  //   component: () => /*  webpackChunkName: notFound */ "../views/NotFound.vue"
  // }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active-nav",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.user) {
      next({
        name: "login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
