<template>
  <div class="mt-6 md:mt-14 px-2 lg:px-0 dark:text-gray-100">
    <div v-if="isCartEmpty" class="text-center">
      <h1 class="text-2xl">장바구니에 물품이 없습니다.</h1>
      <router-link to="/" class="btn btn-primary mt-10">
        담으러 가기
      </router-link>
    </div>
    <div v-else class="lg:flex justify-between mb-20">
      <div>
        <div
          v-for="item in Object.values(cartStore.items)"
          :key="item.id"
          class="lg:flex lg:items-center mt-4 px-2 lg:px-0"
        >
          <router-link :to="`/product/${item.id}`">
            <figure
              class="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white"
            >
              <img
                :src="getProduct(item.id).image"
                :alt="getProduct(item.id).title"
                class="object-contain w-full h-48"
              />
            </figure>
          </router-link>
          <div class="card-body px-1 lg:px-12">
            <h2 class="card-title">
              <router-link :to="`/product/${item.id}`" class="link link-hover">
                {{ getProduct(item.id).title }}
              </router-link>
            </h2>
            <p class="mt-2 mb-4 text-3xl">
              ${{ getProduct(item.id).price * item.count }}
              <span class="text-2xl">(${{ getProduct(item.id).price }})</span>
            </p>
            <div class="card-actions">
              <div class="btn-group">
                <button class="btn btn-primary" @click="removeFromCart(item)">
                  -
                </button>
                <button class="btn btn-ghost no-animation">
                  {{ item.count }}
                </button>
                <button class="btn btn-primary" @click="addToCart(item)">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="self-start shrink-0 flex items-center mt-10 mb-20">
        <span class="text-xl md:text-2xl">총 : ${{ totalPrice }}</span>
        <label for="confirm-modal" class="modal-button btn btn-primary ml-5">
          구매하기
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useCartStore } from "@/stores/cartStore";
import { useProductsStore } from "@/stores/productsStore";

export default defineComponent({
  name: "CartList",
  setup() {
    const cartStore = useCartStore();
    const productsStore = useProductsStore();

    const isCartEmpty = computed(() => {
      return Object.keys(cartStore.items).length === 0;
    });

    function getProduct(id: string | number) {
      const product = productsStore.products.find((p) => p.id === Number(id));
      return product || { image: "", title: "", price: 0 };
    }

    const totalPrice = computed(() => {
      let sum = 0;
      for (const key in cartStore.items) {
        const item = cartStore.items[key];
        const product = productsStore.products.find(
          (p) => p.id === Number(item.id)
        );
        if (product) {
          sum += product.price * item.count;
        }
      }
      return sum;
    });

    function addToCart(item: { id: string | number; count: number }) {
      cartStore.$patch((state) => {
        if (state.items[item.id]) {
          state.items[item.id].count += 1;
        } else {
          state.items[item.id] = { id: Number(item.id), count: 1 };
        }
      });
      cartStore.syncLocalStorage();
    }

    function removeFromCart(item: { id: string | number; count: number }) {
      cartStore.removeFromCart(item.id);
    }

    return {
      cartStore,
      isCartEmpty,
      totalPrice,
      getProduct,
      addToCart,
      removeFromCart,
    };
  },
});
</script>
