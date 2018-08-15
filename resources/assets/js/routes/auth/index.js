const Login = () => import("Pages/Auth/Login.vue");
const Logout = () => import("Pages/Auth/Logout.vue");
const Register = () => import("Pages/Auth/Register.vue");
const ResetPassword = () => import("Pages/Auth/ResetPassword.vue");
const ForgotPassword = () => import("Pages/Auth/ForgotPassword.vue");

export default [
  /* Start Authentication Routes */
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: {
      permission: "guest",
      fail: "/404.html"
    }
  },
  {
    path: "/forgotpassword",
    component: ForgotPassword,
    name: "forgotpassword",
    meta: {
      permission: "guest",
      fail: "/404.html"
    }
  },
  {
    path: "/forgotpassword/:token",
    props: true,
    component: ResetPassword,
    name: "resetpassword",
    meta: {
      permission: "guest",
      fail: "/404.html"
    }
  },
  {
    path: "/logout",
    component: Logout,
    name: "logout",
    meta: {
      permission: "guest",
      fail: "/404.html"
    }
  },
  {
    path: "/register",
    component: Register,
    name: "register",
    meta: {
      permission: "guest",
      fail: "/404.html"
    }
  }
  /* End Authentication Routes */
];
