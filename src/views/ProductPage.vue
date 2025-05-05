<template>
  <section
    class="min-w-[100vw] min-h-[80vh] pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto"
  >
    <BreadCrumb :category="itemValue.category" :crumb="itemValue.title" />

    <div class="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
      <figure
        :class="[
          $style.viewImage,
          'flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white',
        ]"
      >
        <img
          :src="itemValue.image"
          class="object-contain w-full h-72"
          :alt="itemValue.title"
        />
      </figure>

      <div class="card-body px-1 lg:px-12 dark:text-gray-100">
        <h2 class="card-title">
          {{ itemValue.title }}
          <span class="badge badge-accent ml-2">NEW</span>
        </h2>

        <p>{{ itemValue.description }}</p>

        <div class="flex items-center mt-3">
          <StarRating :rate="itemValue.rating.rate" />
          <div class="ml-2">
            {{ itemValue.rating.rate }} / {{ itemValue.rating.count }} 참여
          </div>
        </div>

        <p class="mt-2 mb-4 text-3xl">${{ itemValue.price }}</p>

        <div class="card-actions">
          <button class="btn btn-primary" @click="handleAddToCart">
            장바구니에 담기
          </button>
          <router-link class="btn btn-outline ml-1" to="/cart">
            장바구니로 이동
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import BreadCrumb from "../components/common/BreadCrumb.vue";
import StarRating from "../module/StarRating.vue";
import { useProductsStore } from "@/stores/productsStore";
import { useCartStore } from "@/stores/cartStore";

const route = useRoute();
const id = Number(route.params.id);

const productsStore = useProductsStore();
const cartStore = useCartStore();

const itemValue = computed(() => {
  return productsStore.products[id - 1];
});

function handleAddToCart() {
  if (itemValue.value) {
    cartStore.addToCart(itemValue.value.id);
  }
}
</script>

<style module>
.viewImage {
  min-width: 20em;
}
</style>
