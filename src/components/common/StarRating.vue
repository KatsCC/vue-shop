<template>
  <div class="flex items-center mt-3">
    <div class="rating rating-half">
      <input
        v-for="(star, index) in stars"
        :key="`rating${index}`"
        type="radio"
        name="rating-10"
        class="bg-yellow-400 cursor-default mask mask-star-2"
        :class="index % 2 === 0 ? 'mask-half-1' : 'mask-half-2'"
        disabled
        :checked="index + 1 <= rate * 2"
      />
    </div>
    <div class="ml-2">{{ rate }} / {{ count }} 참여</div>
  </div>
</template>

<script setup lang="ts">
interface RatingProps {
  rate?: number;
  count?: number;
}

const props = defineProps<RatingProps>();
const rate = props.rate ?? 0;
const count = props.count ?? 0;

const stars = Array.from({ length: 10 });
</script>
