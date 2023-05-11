import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/pages/index.vue"),
    name: "todo",
    meta: {
      title: "Kick Started",
    },
    children: [],
  },
];

export default routes;
