import { defineStore } from 'pinia';

const state = () => ({
  slider: null,
  banners: null,
  collections: null,
  siteFeatures: null,
  featuredCategories: null,
  featuredBrands: null,
  flashSales: null,
  hasHomeData: null,
  products: null
});
const actions = {
  setHomeProducts(data) {
    this.products = data;
  },
  setFlashSale(data) {
    this.flashSales = data;
  },
  setHomeData(data) {
    const home = data.data;
    this.hasHomeData = true;
    this.slider = home == null ? void 0 : home.slider;
    this.siteFeatures = home == null ? void 0 : home.site_features;
    this.banners = home == null ? void 0 : home.banners;
    this.collections = home == null ? void 0 : home.collections;
    this.featuredCategories = home == null ? void 0 : home.featured_categories;
    this.featuredBrands = home == null ? void 0 : home.featured_brands;
    this.flashSales = home == null ? void 0 : home.flash_sales;
  }
};
const useHomeStore = defineStore("home", {
  state,
  actions
});

export { useHomeStore as u };
//# sourceMappingURL=home-DZI1jLoy.mjs.map
