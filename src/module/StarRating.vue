<template>
  <div class="rating rating-half">
    <input
      v-for="idx in checkedArr"
      :key="idx"
      type="radio"
      name="rating-10"
      :class="[
        'bg-yellow-400',
        'cursor-default',
        'mask',
        'mask-star-2',
        idx % 2 === 0 ? 'mask-half-1' : 'mask-half-2',
      ]"
      disabled
      :checked="idx < filledStars"
    />
  </div>
</template>

<script setup lang="ts">
interface StarRatingProps {
  rate: number;
}

const props = defineProps<StarRatingProps>();

const filledStars = Math.floor(props.rate * 2);

const checkedArr = Array.from({ length: 10 }, (_, i) => i);
</script>
