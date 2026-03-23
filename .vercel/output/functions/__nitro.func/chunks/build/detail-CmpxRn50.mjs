import { defineStore } from 'pinia';

const state = () => ({
  product: null,
  suggested: null
});
const actions = {
  updateWishlist(data) {
    this.product = { ...this.product, ...{ wishlisted: (data == null ? void 0 : data.data) ? 1 : null } };
  },
  setProduct(data) {
    this.product = data;
  },
  emptySuggestedProducts() {
    this.suggested = null;
  }
};
const useDetailStore = defineStore("detail", {
  state,
  actions
});

export { useDetailStore as u };
//# sourceMappingURL=detail-CmpxRn50.mjs.map
