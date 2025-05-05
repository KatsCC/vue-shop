<template>
  <section
    class="min-w-[100vw] min-h-[80vh] pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 mx-auto"
  >
    <BreadCrumb category="홈" crumb="장바구니" />
    <div class="mt-6 md:mt-14 px-2 lg:px-0">
      <CartList />
    </div>
    <ConfirmModal />
  </section>
</template>

<script setup lang="ts">
import BreadCrumb from "../common/BreadCrumb.vue";
import ConfirmModal from "../common/ConfirmModal.vue";
import CartList from "./CartList.vue";
</script>
