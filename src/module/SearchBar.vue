<template>
  <input
    type="text"
    placeholder="검색"
    :value="searchQuery"
    @input="updateValue"
    class="sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white sm:transform-none transition-all js-searchInput"
  />
</template>

<script setup lang="ts">
interface SearchBarProps {
  searchQuery: string;
}

const props = defineProps<SearchBarProps>();
const emit = defineEmits<{ (e: "update:searchQuery", value: string): void }>();

function updateValue(e: Event) {
  const target = e.target as HTMLInputElement;
  emit("update:searchQuery", target.value);
}
</script>
