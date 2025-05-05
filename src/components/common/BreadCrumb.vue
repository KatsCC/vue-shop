<template>
  <div class="text-sm breadcrumbs dark:text-gray-100">
    <ul>
      <li>{{ resolvedCategory }}</li>
      <li>{{ crumb }}</li>
      <!-- props의 crumb는 자동으로 인스턴스에 병합됩니다. -->
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { Category } from "../../constants/category";

export default defineComponent({
  name: "BreadCrumb",
  props: {
    category: {
      type: String,
      default: "",
    },
    crumb: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const resolvedCategory = computed(() => {
      return Category[props.category] || props.category;
    });
    // props.crumb는 이미 인스턴스에 자동으로 노출되므로 반환할 필요가 없습니다.
    return {
      resolvedCategory,
    };
  },
});
</script>

<style scoped>
/* 추가 스타일 작성 */
</style>
