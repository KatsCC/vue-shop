import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ErrorPage from "../views/ErrorPage.vue";
import IndexPage from "../views/IndexPage.vue";
import FashionPage from "../views/FashionPage.vue";
import ElectronicsPage from "../views/ElectronicsPage.vue";
import JeweleryPage from "../views/JeweleryPage.vue";
import ProductPage from "../views/ProductPage.vue";
import CartView from "../components/carts/CartView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: ErrorPage,
  },
  {
    path: "/",
    name: "Index",
    component: IndexPage,
  },
  {
    path: "/fashion",
    name: "Fashion",
    component: FashionPage,
  },
  {
    path: "/jewelery",
    name: "Jewelery",
    component: JeweleryPage,
  },
  {
    path: "/electronics",
    name: "Electronics",
    component: ElectronicsPage,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: ProductPage,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
