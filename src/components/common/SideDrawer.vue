<template>
  <div class="drawer-side custom-drawer">
    <label for="side-menu" class="drawer-overlay" ref="buttonBRef"></label>
    <ul
      class="min-h-full menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100"
    >
      <li>
        <router-link
          to="/fashion"
          class="dark:text-gray-100"
          @click="handleClickA"
          >패션</router-link
        >
      </li>
      <li>
        <router-link
          to="/jewelery"
          class="dark:text-gray-100"
          @click="handleClickA"
          >액세서리</router-link
        >
      </li>
      <li>
        <router-link
          to="/electronics"
          class="dark:text-gray-100"
          @click="handleClickA"
          >디지털</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SideDrawer",
  setup() {
    const buttonBRef = ref<HTMLLabelElement | null>(null);
    const handleClickA = () => {
      if (buttonBRef.value) {
        buttonBRef.value.click();
      }
    };

    return { buttonBRef, handleClickA };
  },
});
</script>

<style scoped>
.custom-drawer {
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  z-index: 10;
}
</style>
