import { CART_ITEM } from "@/constants/category";
import { defineStore } from "pinia";

export interface ICartInfo {
  id: number;
  count: number;
}

export interface ICartItems {
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly count: number;
  readonly image: string;
}

export interface ICartState {
  items: Record<string | number, ICartInfo>;
  count: number;
}

export interface InCartItem {
  id: string;
  count: number;
}

export interface InCartState {
  [key: string]: InCartItem;
}

export const useCartStore = defineStore("cart", {
  state: (): ICartState => {
    let savedItems: Record<string | number, ICartInfo> = {};
    try {
      const stored = localStorage.getItem(CART_ITEM);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          savedItems = parsed;
        } else {
          savedItems = {};
        }
      }
    } catch (error) {
      console.error("로컬스토리지 데이터를 파싱하는 중 에러 발생:", error);
      savedItems = {};
    }
    return {
      items: savedItems,
      count: 0,
    };
  },
  getters: {
    totalCount(state): number {
      return Object.values(state.items || {}).reduce(
        (total, item) => total + item.count,
        0
      );
    },
  },
  actions: {
    syncLocalStorage() {
      localStorage.setItem(CART_ITEM, JSON.stringify(this.items));
    },
    removeFromCart(id: string | number) {
      if (this.items[id]) {
        this.items[id].count -= 1;
        if (this.items[id].count <= 0) {
          delete this.items[id];
        }
        this.syncLocalStorage();
      }
    },
    addToCart(productId: string | number) {
      const id = String(productId);

      if (!this.items) {
        this.items = {};
      }

      const existingItem = this.items[id];
      const newItem = existingItem
        ? { id: Number(id), count: existingItem.count + 1 }
        : { id: Number(id), count: 1 };

      this.items = {
        ...this.items,
        [id]: newItem,
      };

      this.syncLocalStorage();
    },
    setCount(newCount: number) {
      this.count = newCount;
    },
    clearCart() {
      this.items = {};
      this.count = 0;
      this.syncLocalStorage();
    },
  },
  persist: true,
});
