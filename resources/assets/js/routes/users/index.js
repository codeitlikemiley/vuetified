const Index = () => import("Pages/User/Index.vue");
const Create = () => import("Pages/User/Create.vue");
const Edit = () => import("Pages/User/Edit.vue");

export default [
  /* Start Authenticated Routes */
  {
    path: "/users",
    component: Index,
    name: "users",
    meta: {
      requiresAuth: true,
      permission: "guest",
      fail: "/404.html"
    }
  },
  {
    path: "/users/create",
    component: Create,
    name: "create-user",
    meta: {
      requiresAuth: true,
      permission: "guest",
      fail: "/404.html"
    }
  },
  {
    path: "/users/:id",
    component: Edit,
    name: "edit-user",
    meta: {
      requiresAuth: true,
      permission: "guest",
      fail: "/404.html"
    }
  }
  /* End Authenticated Routes */
];
