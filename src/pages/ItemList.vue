<template>
  <div>
    <h2 class="tagName dark:text-gray-100">{{ name }}</h2>
    <div
      class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
      data-scroll="false"
    >
      <router-link
        v-for="product in filteredProducts"
        :key="product.id"
        :to="`/product/${product.id}`"
      >
        <div
          :class="[
            $style.div,
            'card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal',
          ]"
        >
          <figure :class="$style.figure">
            <img :src="product.image" :alt="product.title" />
          </figure>
          <div
            :class="[
              $style.explain,
              'bg-gray-100 dark:bg-gray-700 dark:text-gray-100',
            ]"
          >
            <span class="line-clamp-4 mb-5">{{ product.title }}</span>
            <p>${{ product.price }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useProductsStore } from "@/stores/productsStore";

const props = defineProps<{ category: string; name: string }>();

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

const productsStore = useProductsStore();
const products = productsStore.products as Product[];

const filteredProducts = computed(() =>
  products.filter((product) => product.category === props.category)
);
</script>

<style module>
.div {
  border-radius: 14px;
  margin: 10px;
  width: 100%;
  height: 477px;
}
.div:hover img {
  transform: scale(1.3);
}

.figure {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56% !important;
  overflow: hidden;
  background-color: white;
  border-radius: 14px 14px 0 0;
}
.figure > img {
  max-width: 50%;
  max-height: 50%;
  transition: transform 0.3s ease;
}

.explain {
  background-color: rgb(247, 247, 247);
  width: 100%;
  height: 44% !important;
  border-radius: 0 0 14px 14px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.explain > h2 {
  font-weight: 600;
  margin-bottom: 1.5rem;
}
.explain > p {
  font-size: 1rem;
  line-height: 1rem;
}
</style>

<style scoped>
.tagName {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
}
</style>
