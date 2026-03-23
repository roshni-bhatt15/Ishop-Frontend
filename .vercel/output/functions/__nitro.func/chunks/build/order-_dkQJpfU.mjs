import { defineStore } from 'pinia';

const state = () => ({
  orderedList: [],
  ordered: {}
});
const actions = {
  updateOrderData(order) {
    this.ordered = { ...this.ordered, ...order };
  },
  setOrderList(orderedList) {
    this.orderedList = orderedList;
  }
};
const useOrderStore = defineStore("order", {
  state,
  actions
});

export { useOrderStore as u };
//# sourceMappingURL=order-_dkQJpfU.mjs.map
