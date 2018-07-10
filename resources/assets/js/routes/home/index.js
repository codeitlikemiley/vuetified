const Home = () => import("Pages/Home.vue");
const About = () => import("Pages/About.vue");
const Support = () => import("Pages/Support.vue");

export default [
  /* Front End Routes */
  {
    path: "/about",
    component: About,
    name: "about",
    meta: {
      permission: "guest",
      fail: "/404.html"
    }
  },
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      permission: "guest",
      fail: "/404.html"
    }
  },
  {
    path: "/support",
    component: Support,
    name: "support",
    meta: {
      permission: "guest",
      fail: "/404.html"
    }
  }
];
