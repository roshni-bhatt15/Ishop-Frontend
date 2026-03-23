const productHelper = {
  data() {
    return {
      ajaxingWishlist: false
    };
  },
  methods: {
    refundable(product) {
      return parseInt(product == null ? void 0 : product.refundable) === 1;
    },
    warranty(product) {
      return parseInt(product == null ? void 0 : product.warranty) === 1 ? this.$t("productHelper.available") : this.$t("productHelper.notAvailable");
    },
    getPriceType(item) {
      if (parseInt(item.type) === this.priceType.FLAT) {
        return this.priceFormat(this.currencyPosition, this.currencyIcon, item.price, this.setting);
      } else {
        return item.price + "%";
      }
    }
  }
};
const productPriceHelper = {
  data() {
    return {};
  },
  computed: {
    productPrice() {
      var _a, _b, _c, _d;
      if (((_b = (_a = this.productInventory) == null ? void 0 : _a.inventory_attributes) == null ? void 0 : _b.length) > 0 && ((_c = this.productInventory) == null ? void 0 : _c.price) > 0) {
        return (_d = this.productInventory) == null ? void 0 : _d.price;
      }
      return this.product.price > 0 ? this.product.price : this.product.offered > 0 ? this.product.offered : this.product.selling;
    },
    reducedPercent() {
      return 100 - parseInt((this.currentPricing / this.prevPrice * 100).toString());
    },
    flashPrice() {
      var _a, _b;
      return ((_a = this.product) == null ? void 0 : _a.price) !== null ? parseFloat((_b = this.product) == null ? void 0 : _b.price) : null;
    },
    sellPrice() {
      var _a;
      return parseFloat(((_a = this.product) == null ? void 0 : _a.selling) || 0);
    },
    offeredPrice() {
      var _a;
      return parseFloat(((_a = this.product) == null ? void 0 : _a.offered) || 0);
    },
    prevPrice() {
      return parseFloat(this.offeredPrice > 0 ? this.sellPrice : this.flashPrice ? this.sellPrice : 0);
    },
    currentPricing() {
      return parseFloat(this.flashPrice !== null ? this.flashPrice : this.offeredPrice > 0 ? this.offeredPrice : this.sellPrice);
    },
    inventoryPrice() {
      var _a, _b;
      if (((_a = this.inventory) == null ? void 0 : _a.inventory_attributes.length) > 0) {
        return parseFloat((_b = this.inventory) == null ? void 0 : _b.price) || 0;
      }
      return 0;
    },
    currentInventoryPrice() {
      return parseFloat(this.inventoryPrice > 0 ? this.inventoryPrice : this.currentPricing);
    }
  },
  methods: {
    flashPriceCalc(product) {
      var _a;
      return (product == null ? void 0 : product.end_time) ? (_a = product == null ? void 0 : product.price) != null ? _a : null : null;
    },
    sellPriceCalc(product) {
      return parseFloat((product == null ? void 0 : product.selling) || 0);
    },
    offeredPriceCalc(product) {
      return parseFloat((product == null ? void 0 : product.offered) || 0);
    },
    currentPricingCalc(product) {
      const flashPrice = this.flashPriceCalc(product);
      return flashPrice !== null ? flashPrice : this.offeredPriceCalc(product) > 0 ? this.offeredPriceCalc(product) : parseFloat((product == null ? void 0 : product.selling) || 0);
    },
    prevPriceCalc(product) {
      return parseFloat(this.offeredPriceCalc(product) > 0 ? this.sellPriceCalc(product) : this.flashPriceCalc(product) ? this.sellPriceCalc(product) : 0);
    },
    currentInventoryPriceCalc(inventory, product) {
      var _a;
      if (((_a = inventory == null ? void 0 : inventory.inventory_attributes) == null ? void 0 : _a.length) > 0) {
        return parseFloat((inventory == null ? void 0 : inventory.price) || 0) > 0 ? (inventory == null ? void 0 : inventory.price) || 0 : this.currentPricingCalc(product);
      }
      return this.currentPricingCalc(product);
    }
  }
};

export { productPriceHelper as a, productHelper as p };
//# sourceMappingURL=productPriceHelper-BjqO3bPN.mjs.map
