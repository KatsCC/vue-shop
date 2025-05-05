<template>
  <div>
    <template v-if="limit > 0">
      <div
        v-for="(item, index) in skeletons"
        :key="index"
        class="card bordered animate-pulse"
      >
        <div class="h-80 rounded bg-gray-100"></div>
        <div class="card-body">
          <div class="space-y-4">
            <div class="h-6 bg-gray-100 rounded"></div>
            <div class="h-6 bg-gray-100 rounded w-5/6"></div>
            <div class="h-6 bg-gray-100 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div>제품이 없습니다.</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface ProductsSkeletonProps {
  limit: number;
}

const props = defineProps<ProductsSkeletonProps>();
const skeletons = computed(() => Array.from({ length: props.limit }));
</script>
