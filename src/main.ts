import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "./assets/css/tailwind.css";
import "./App.css";
import "./index.css";

import { CART_ITEM } from "./constants/category";
import { useCartStore } from "./stores/cartStore";
import piniaPersist from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPersist);

const app = createApp(App);
app.use(pinia);
app.use(router);

const cartStore = useCartStore();

const storedCart = localStorage.getItem(CART_ITEM);
if (storedCart) {
  try {
    const parsedCart = JSON.parse(storedCart);
    if (
      parsedCart &&
      typeof parsedCart === "object" &&
      !Array.isArray(parsedCart)
    ) {
      cartStore.items = parsedCart;
    } else {
      cartStore.items = {};
    }
  } catch (error) {
    console.error("Error parsing cart from localStorage:", error);
    cartStore.items = {};
  }
}

app.mount("#app");
