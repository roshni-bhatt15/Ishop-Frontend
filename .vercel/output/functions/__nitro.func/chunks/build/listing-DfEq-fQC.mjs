import { S as Service, k as json, s as showError } from './server.mjs';
import { defineStore } from 'pinia';

const state = () => ({
  products: null,
  allCategories: null,
  categoryData: null,
  brands: null,
  collections: null,
  shippingRules: null,
  searched: "",
  searchedSuggestion: null
});
const actions = {
  setProducts(data) {
    var _a, _b, _c, _d, _e, _f;
    this.products = (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.result;
    if ((_b = data == null ? void 0 : data.data) == null ? void 0 : _b.all_categories) {
      this.allCategories = data.data.all_categories;
    }
    if ((_c = data == null ? void 0 : data.data) == null ? void 0 : _c.category) {
      this.categoryData = data.data.category;
    }
    if ((_d = data == null ? void 0 : data.data) == null ? void 0 : _d.collections) {
      this.collections = data.data.collections;
    }
    if ((_e = data == null ? void 0 : data.data) == null ? void 0 : _e.brands) {
      this.brands = data.data.brands;
    }
    if ((_f = data == null ? void 0 : data.data) == null ? void 0 : _f.shipping) {
      this.shippingRules = data.data.shipping;
    }
  },
  updateSearch(data) {
    this.searched = data;
  },
  setSearchedSuggestion(search = null) {
    this.searchedSuggestion = search;
  },
  emptyProducts() {
    this.products = null;
  },
  async fetchProducts(params) {
    try {
      const { data } = await Service.unAuthGet(json.api.products, params);
      if ((data == null ? void 0 : data.status) === 200) {
        this.setProducts(data);
      } else {
        showError({
          statusCode: 400,
          message: data == null ? void 0 : data.message
        });
      }
    } catch (e) {
      showError({
        statusCode: 400,
        message: e.message
      });
    }
  }
};
const useListingStore = defineStore("listing", {
  state,
  actions
});

export { useListingStore as u };
//# sourceMappingURL=listing-DfEq-fQC.mjs.map
