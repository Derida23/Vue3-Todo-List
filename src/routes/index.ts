import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, __) => {
  const title = to.meta.title;
  const description = "Todo Application";
  document.title = title ? `${title} - ${description}` : description;
});

export default router;
