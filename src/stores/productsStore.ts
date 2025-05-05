import { defineStore } from "pinia";

interface IRating {
  rate?: number;
  count?: number;
}

export interface IProduct {
  [x: string]: any;
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  rating: IRating;
}

const productsURL = "https://fakestoreapi.com/products";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [] as IProduct[],
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await fetch(productsURL);
        console.log(response);

        this.products = (await response.json()) || [];
      } catch (error) {
        console.error(`Error: \n${error}`);
        this.products = [];
      }
    },
  },
  persist: true,
});
