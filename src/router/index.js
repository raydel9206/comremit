import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/Home/Home.vue"),
        },
        {
          path: "/login",
          name: "login",
          component: () => import("@/views/Login/Login.vue"),
        },
        {
          path: "/register",
          name: "register",
          component: () => import("@/views/Register/Register.vue"),
        },
        {
          path: "/verification",
          name: "verification",
          component: () => import("@/views/Verification/Verification.vue"),
        },
        {
          path: "/contact",
          name: "contact",
          component: () => import("@/views/Contacts/Contacts.vue"),
        },
        {
          path: "/orders",
          name: "orders",
          component: () => import("@/views/Orders/Orders.vue"),
        },
        {
          path: "/account",
          name: "account",
          component: () => import("@/views/Account/Account.vue"),
        },
        {
          path: "/recharge",
          name: "recharge",
          component: () => import("@/views/Recharge/Recharge.vue"),
        },
      ]
    }
  ]
});
export default router;
