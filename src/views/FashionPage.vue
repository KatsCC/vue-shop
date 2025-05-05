<template>
  <section
    class="min-w-[100vw] min-h-[80vh] pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto"
  >
    <BreadCrumb :category="MENUS.HOME" :crumb="MENUS.FASHION" />
    <article
      class="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto"
    >
      <ItemList category="men's clothing" name="패션" />
      <ItemList category="women's clothing" name="" />
    </article>
  </section>
</template>

<script setup lang="ts">
import BreadCrumb from "../components/common/BreadCrumb.vue";
import ItemList from "../pages/ItemList.vue";
import { MENUS } from "../constants/category";
</script>
