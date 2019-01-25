import Vue from "vue";
import VueRouter from "vue-router";
import routes from "~/routes";

Vue.use(VueRouter);

/* Our Vue Router Object */
const router = new VueRouter({
  routes,
  /* Use Pretty URL */
  mode: "history",
  /* Save The Scroll Position , Useful When Redirecting Back */
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

/* Middlewares */
router.beforeEach((to, from, next) => {
  /* for all authenticated routes */
  if (to.matched.some(m => m.meta.requiresAuth)) {
    /* Check For Laravel Passport Access Token Cookie */
    if (to.matched.some(m => m.meta.requiresAuth)) {
      return axios.post(route("api.auth.check")).then(() => {
        return next();
      });
    }
  }
  /* If No Middleware, Then Just Proceed As Normal */
  return next();
});

export default router;
