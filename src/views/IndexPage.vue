<template>
  <ImageSlider />

  <section
    class="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto"
  >
    <HomeProduct category="men's clothing" name="패션" />
  </section>

  <section class="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
    <HomeProduct category="jewelery" name="액세서리" />
  </section>

  <section
    class="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto"
  >
    <HomeProduct category="electronics" name="디지털" />
  </section>
</template>

<script setup lang="ts">
import ImageSlider from "../components/common/ImageSlider.vue";
import HomeProduct from "./HomeProduct.vue";
</script>
