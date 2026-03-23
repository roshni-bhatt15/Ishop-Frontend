import { defineStore } from 'pinia';

const state = () => ({
  products: null
});
const actions = {
  emptyFlashProducts() {
    this.products = null;
  },
  setFlashProducts(products) {
    this.products = products;
  }
};
const useFlashSaleStore = defineStore("flashSale", {
  state,
  actions
});

export { useFlashSaleStore as u };
//# sourceMappingURL=flashSale-Gpk8vfm-.mjs.map
