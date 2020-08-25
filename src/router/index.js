import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
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
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active-nav",
  routes
});

export default router;
