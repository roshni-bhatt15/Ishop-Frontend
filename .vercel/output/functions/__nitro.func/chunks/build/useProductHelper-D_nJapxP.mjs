import { storeToRefs } from 'pinia';
import { a as useCommonStore, g as useConstants, c as useI18n } from './server.mjs';

function useProductHelper() {
  const refundable = (product) => {
    return parseInt(product == null ? void 0 : product.refundable) === 1;
  };
  const warranty = (product) => {
    const { t } = useI18n();
    return parseInt(product == null ? void 0 : product.warranty) === 1 ? t("productHelper.available") : t("productHelper.notAvailable");
  };
  const getPriceType = (item) => {
    const { currencyIcon, setting } = storeToRefs(useCommonStore());
    const { priceType } = useConstants();
    return parseInt(item.type) === priceType.FLAT ? priceFormat(currencyIcon.value, item.price, setting.value) : `${decimalSeparator(item.price)}%`;
  };
  const decimalSeparator = (price, decimalSeparator2 = "en-US") => {
    if (!decimalSeparator2) {
      decimalSeparator2 = "en-US";
    }
    return parseFloat(price).toLocaleString(decimalSeparator2, { maximumFractionDigits: 2 });
  };
  const priceFormat = (currencyIcon, price, setting) => {
    const { currencyPositionsIn } = useConstants();
    if (parseInt(setting.currency_position) === currencyPositionsIn.PRE) {
      return currencyIcon + decimalSeparator(price, setting.decimal_format);
    }
    return `${decimalSeparator(price, setting.decimal_format)}${currencyIcon}`;
  };
  const arraySimilarity = (arr1, arr2) => {
    let similarity = 0;
    for (let item of arr1) {
      if (arr2.includes(item)) {
        similarity++;
      }
    }
    return similarity;
  };
  const findBestMatchKey = (targetArray, object) => {
    let bestMatchKey = null;
    let bestSimilarity = -1;
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        const array = object[key];
        const similarity = arraySimilarity(targetArray, array);
        if (similarity > bestSimilarity) {
          bestSimilarity = similarity;
          bestMatchKey = key;
        }
      }
    }
    return bestMatchKey;
  };
  const getProductImage = (product, inventoryAttributes) => {
    return attrImage(product, inventoryAttributes) || (product == null ? void 0 : product.image);
  };
  const attrImage = (product, inventoryAttributes) => {
    var _a;
    const images = {};
    const imageData = {};
    (_a = product == null ? void 0 : product.product_images) == null ? void 0 : _a.forEach((i) => {
      i == null ? void 0 : i.attributes.forEach((j) => {
        if (!images[i == null ? void 0 : i.id]) {
          images[i.id] = [];
          imageData[i.id] = i == null ? void 0 : i.image;
        }
        images[i.id].push(j == null ? void 0 : j.attribute_value_id);
      });
    });
    const attributeValues = inventoryAttributes == null ? void 0 : inventoryAttributes.map((i) => {
      return i == null ? void 0 : i.attribute_value_id;
    });
    const matched = findBestMatchKey(attributeValues, images);
    return imageData[matched];
  };
  return {
    refundable,
    warranty,
    getPriceType,
    getProductImage
  };
}

export { useProductHelper as u };
//# sourceMappingURL=useProductHelper-D_nJapxP.mjs.map
