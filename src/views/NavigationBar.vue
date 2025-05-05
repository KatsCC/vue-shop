<template>
  <div
    class="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content"
  >
    <div class="relative flex w-full xl:container xl:m-auto">
      <label
        for="side-menu"
        class="flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-gray-700 dark:stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>

      <h1 class="shrink-0 flex items-center md:flex-none flex-1 mx-1 sm:mx-2">
        <router-link
          to="/"
          class="text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap"
        >
          Vue Shop
        </router-link>
      </h1>

      <div class="flex-none items-center hidden md:flex md:flex-1 ml-2">
        <router-link
          to="/fashion"
          class="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
        >
          패션
        </router-link>
        <router-link
          to="/jewelery"
          class="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
        >
          액세서리
        </router-link>
        <router-link
          to="/electronics"
          class="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
        >
          디지털
        </router-link>
      </div>

      <div class="flex items-center px-2">
        <ThemeSwitcher />

        <SearchBar
          :searchQuery="searchQuery"
          @update:searchQuery="(val) => (searchQuery = val)"
        />

        <ul
          v-if="filteredItems.length !== 0"
          class="absolute sm:top-full mt-1 menu flex-nowrap dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-600"
        >
          <li
            v-for="(item, index) in filteredItems"
            :key="index"
            class="bg-white dark:bg-gray-800"
          >
            <router-link :to="`/product/${item.id}`">
              <button
                type="button"
                class="text-left js-searchedItem bg-white dark:bg-gray-800"
                @click="clearSearch"
              >
                <span class="text-gray-600 dark:text-white line-clamp-2">
                  {{ item.title }}
                </span>
              </button>
            </router-link>
          </li>
        </ul>
        <CartIcon :count="count" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useProductsStore } from "@/stores/productsStore";
import { useCartStore } from "@/stores/cartStore";
import ThemeSwitcher from "../module/ThemeSwitcher.vue";
import SearchBar from "../module/SearchBar.vue";
import CartIcon from "../module/CartIcon.vue";

const searchQuery = ref("");

const productsStore = useProductsStore();
const cartStore = useCartStore();
onMounted(() => {
  productsStore.fetchProducts();
});

const filteredItems = computed(() => {
  return searchQuery.value
    ? productsStore.products.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    : [];
});

watch(
  () => cartStore.items,
  (newItems) => {
    let sum = 0;
    Object.values(newItems || {}).forEach((item: any) => {
      sum += item.count;
    });
    cartStore.setCount(sum);
  },
  { deep: true, immediate: true }
);

const count = computed(() => cartStore.count);

function clearSearch() {
  searchQuery.value = "";
}
</script>
