<template>
  <div class="box">
    <Carousel :autoplay="6000" :wrapAround="true" class="carousel-container">
      <Slide v-for="item in items" :key="item.name">
        <div class="carousel-slide relative">
          <div
            class="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10"
          >
            <h2 class="text-2xl lg:text-4xl font-bold text-white">
              {{ item.title }}
            </h2>
            <p class="my-2 text-white">{{ item.text }}</p>
            <router-link
              :to="`/${item.name}`"
              class="btn btn-sm lg:btn-md mt-3"
            >
              바로가기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 
                    4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </router-link>
          </div>
          <img :src="item.img" :alt="item.name" class="w-full object-cover" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { RouterLink } from "vue-router";

import fashionImg from "@/assets/img/carousel/img_shop_fashion.jpeg";
import digitalImg from "@/assets/img/carousel/img_shop_digital.jpeg";
import groceryImg from "@/assets/img/carousel/img_shop_grocery.jpeg";

export default defineComponent({
  name: "ImageSlider",
  components: {
    Carousel,
    Slide,
    RouterLink,
  },
  setup() {
    const items = [
      {
        name: "fashion",
        title: "물빠진 청바지!",
        text: "이제 막 도착한 패션 청바지를 구경해 보세요.",
        img: fashionImg,
      },
      {
        name: "digital",
        title: "신속한 업무처리!",
        text: "다양한 디지털 상품을 둘러보세요.",
        img: digitalImg,
      },
      {
        name: "grocery",
        title: "신선한 식품!",
        text: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
        img: groceryImg,
      },
    ];

    return { items };
  },
});
</script>

<style scoped>
.box {
  width: 100%;
  max-height: 700px;
  overflow: hidden;
}
</style>
