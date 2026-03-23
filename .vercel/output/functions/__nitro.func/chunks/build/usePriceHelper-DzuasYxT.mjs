import { computed } from 'vue';

function usePriceHelper({ product, productInventory }) {
  const productPrice = computed(() => {
    var _a, _b, _c, _d;
    if (((_b = (_a = productInventory.value) == null ? void 0 : _a.inventory_attributes) == null ? void 0 : _b.length) > 0 && ((_c = productInventory.value) == null ? void 0 : _c.price) > 0) {
      return (_d = productInventory.value) == null ? void 0 : _d.price;
    }
    return product.value.price > 0 ? product.value.price : product.value.offered > 0 ? product.value.offered : product.value.selling;
  });
  const reducedPercent = computed(() => {
    return 100 - parseInt((currentPricing.value / prevPrice.value * 100).toString());
  });
  const flashPrice = computed(() => {
    var _a, _b;
    return ((_a = product.value) == null ? void 0 : _a.price) !== null ? parseFloat((_b = product.value) == null ? void 0 : _b.price) : null;
  });
  const sellPrice = computed(() => {
    var _a;
    return parseFloat(((_a = product.value) == null ? void 0 : _a.selling) || 0);
  });
  const offeredPrice = computed(() => {
    var _a;
    return parseFloat(((_a = product.value) == null ? void 0 : _a.offered) || 0);
  });
  const prevPrice = computed(() => {
    return parseFloat(offeredPrice.value > 0 ? sellPrice.value : flashPrice.value ? sellPrice.value : 0);
  });
  const currentPricing = computed(() => {
    return parseFloat(flashPrice.value !== null ? flashPrice.value : offeredPrice.value > 0 ? offeredPrice.value : sellPrice.value);
  });
  const inventoryPrice = computed(() => {
    var _a, _b;
    if (((_a = inventory.value) == null ? void 0 : _a.inventory_attributes.length) > 0) {
      return parseFloat((_b = inventory.value) == null ? void 0 : _b.price) || 0;
    }
    return 0;
  });
  computed(() => {
    return parseFloat(inventoryPrice.value > 0 ? inventoryPrice.value : currentPricing.value);
  });
  return {
    prevPrice,
    currentPricing,
    reducedPercent,
    productPrice
  };
}

export { usePriceHelper as u };
//# sourceMappingURL=usePriceHelper-DzuasYxT.mjs.map
