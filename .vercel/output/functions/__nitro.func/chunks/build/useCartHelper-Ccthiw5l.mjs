import { storeToRefs } from 'pinia';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { e as useRouter, u as useLanguageStore, a as useCommonStore, b as useAuthStore, c as useI18n, q as navigateTo } from './server.mjs';
import { u as useCartStore } from './cart-BePPNdc0.mjs';
import { u as useDetailStore } from './detail-CmpxRn50.mjs';
import { ref, computed } from 'vue';

function useCartHelper({ product, productInventory, emit }) {
  const ajaxingWishlist = ref(false);
  const ajaxing = ref(false);
  const buyingNow = ref(false);
  const quantity = ref(1);
  const cartError = ref({
    attribute: null,
    quantity: null
  });
  const router = useRouter();
  const languageStore = useLanguageStore();
  const { langCode } = storeToRefs(languageStore);
  const cartStore = useCartStore();
  const { cartAction, buyNow } = cartStore;
  const userStore = useUserStore();
  const { getUserToken } = userStore;
  const { profile } = storeToRefs(userStore);
  const commonStore = useCommonStore();
  const { setting } = storeToRefs(commonStore);
  const { setToastError, postRequest, setToastMessage } = commonStore;
  const authStore = useAuthStore();
  const { authenticated } = storeToRefs(authStore);
  const detailStore = useDetailStore();
  const { updateWishlist } = detailStore;
  const { t } = useI18n();
  const wishListed = computed(() => {
    var _a, _b;
    return ((_a = profile.value) == null ? void 0 : _a.id) && ((_b = product.value) == null ? void 0 : _b.wishlisted);
  });
  const wishListAction = async () => {
    if (!authenticated.value) {
      return navigateTo("/login");
    }
    ajaxingWishlist.value = true;
    const data = await postRequest({
      api: "userWishlistAction",
      params: {
        product_id: product.value.id
      }
    });
    ajaxingWishlist.value = false;
    if ((data == null ? void 0 : data.status) === 200) {
      setToastMessage(data.message);
      updateWishlist(data);
    } else {
      setToastError(data.data.form.join(", "));
    }
  };
  const emitCartError = () => {
    emit("cart-error", cartError.value);
  };
  const addToCart = async (isBuyNow = false) => {
    var _a, _b, _c;
    if (!((_a = setting.value) == null ? void 0 : _a.guest_checkout)) {
      if (!authenticated.value) {
        return navigateTo("/login");
      }
    }
    cartError.value = {
      attribute: null,
      quantity: null
    };
    if (!((_b = product.value) == null ? void 0 : _b.in_stock)) {
      setToastError(t("detailRight.outOfStock"));
      return false;
    }
    if (Object.values(productInventory.value).length === 0) {
      const attr = (_c = product.value) == null ? void 0 : _c.attribute.map((i) => {
        return i == null ? void 0 : i.title;
      });
      cartError.value.attribute = t("detailRight.requiredAttributes");
      if (attr.length) {
        cartError.value.attribute += `(${attr.join(" / ")})`;
      }
      emitCartError();
      return false;
    }
    if (productInventory.value.quantity < quantity.value) {
      cartError.value.quantity = t("detailRight.exceedsInventory");
      emitCartError();
      return false;
    }
    if (isBuyNow) {
      await buyNowProduct();
      setTimeout(() => {
        router.push({ path: "/shipping" });
      }, 300);
    } else {
      await cartAdd();
    }
  };
  const buyNowProduct = async () => {
    const { langCode: langCode2 } = storeToRefs(useLanguageStore());
    const userStore2 = useUserStore();
    const { getUserToken: getUserToken2 } = userStore2;
    buyingNow.value = true;
    const data = await buyNow({
      payload: {
        user_token: await getUserToken2(),
        product_id: product.value.id,
        inventory_id: productInventory.value.id,
        quantity: quantity.value
      },
      lang: langCode2.value
    });
    buyingNow.value = false;
    return data;
  };
  const cartAdd = async () => {
    var _a, _b, _c;
    ajaxing.value = true;
    const userToken = await getUserToken();
    await cartAction({
      payload: {
        user_token: userToken,
        apiVal: {
          user_token: userToken,
          product_id: product.value.id,
          inventory_id: (_a = productInventory.value) == null ? void 0 : _a.id,
          quantity: quantity.value
        },
        isBundle: !!((_b = product.value) == null ? void 0 : _b.bundle_deal),
        storeVal: {
          product: {
            id: product.value.id,
            title: product.value.title,
            offered: product.value.offered,
            selling: product.value.selling,
            image: product.value.image,
            shipping_rule: product.value.shipping_rule
          },
          inventory: productInventory.value,
          quantity: quantity.value,
          selected: 1,
          offered: 0,
          bundle_deal: (_c = product.value) == null ? void 0 : _c.bundle_deal,
          shipping_type: 1
        }
      },
      lang: langCode.value
    });
    ajaxing.value = false;
  };
  return {
    wishListAction,
    cartAdd,
    cartError,
    ajaxingWishlist,
    buyingNow,
    addToCart,
    quantity,
    ajaxing,
    wishListed
  };
}

export { useCartHelper as u };
//# sourceMappingURL=useCartHelper-Ccthiw5l.mjs.map
