<template>
  <router-link to="/cart" class="btn btn-ghost w-10 sm:w-12 ml-1">
    <span class="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 stroke-gray-700 dark:stroke-white"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      <span
        class="inline-flex items-center justify-center absolute top-0 right-0 px-2 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 transform translate-x-1/2 -translate-y-1/2"
      >
        {{ count }}
      </span>
    </span>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{ count: number }>();
</script>
