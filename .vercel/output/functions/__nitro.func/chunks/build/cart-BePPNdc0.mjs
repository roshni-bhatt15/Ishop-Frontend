import { b as useAuthStore, S as Service, k as json, s as showError, a as useCommonStore, l as useNuxtApp, p as prepareGetUrl } from './server.mjs';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { defineStore, storeToRefs } from 'pinia';

const state = () => ({
  cartCount: 0,
  cartProducts: []
});
const actions = {
  emptyCartProduct() {
    this.cartProducts = [];
    this.cartCount = 0;
  },
  subtractCartProductCount(payload) {
    this.cartProducts = this.cartProducts.filter((i) => {
      return parseInt(i.selected) !== (payload == null ? void 0 : payload.status);
    });
    this.cartCount = parseInt(this.cartCount) - parseInt(payload.qty);
  },
  setCartCount(count) {
    this.cartCount = count;
  },
  setCartProducts(cartProducts) {
    this.cartProducts = cartProducts;
    this.cartCount = cartProducts.reduce((accum, item) => accum + parseInt(item.quantity), 0);
  },
  cartProductAction(cartProduct) {
    const index = this.cartProducts.findIndex((obj) => {
      return obj.id === cartProduct.id;
    });
    if (index === -1) {
      this.cartProducts.push(cartProduct);
    } else {
      this.cartProducts[index].quantity = 0;
      this.cartProducts[index].quantity = cartProduct.quantity;
    }
  },
  deleteCart(cartProduct) {
    const index = this.cartProducts.findIndex((obj) => {
      return obj.id === cartProduct.id;
    });
    this.cartProducts.splice(index, 1);
    this.cartCount -= parseInt(cartProduct.quantity);
  },
  async getCartByUser({ lang }) {
    try {
      const { token } = useAuthStore();
      const { getUserToken } = useUserStore();
      const data = await Service.getRequest(`${json.api.cartByUser}?${prepareGetUrl({
        user_token: await getUserToken()
      })}`, token, lang);
      if ((data == null ? void 0 : data.status) === 200) {
        this.setCartProducts(data.data);
      } else {
        showError({
          statusCode: data == null ? void 0 : data.status,
          message: data == null ? void 0 : data.message
        });
      }
    } catch (e) {
      showError({
        statusCode: 400,
        message: e.message
      });
    }
  },
  async buyNow({ payload, lang }) {
    try {
      const { token } = useAuthStore();
      const data = await Service.postRequest(json.api.buyNow, payload, token);
      if ((data == null ? void 0 : data.status) === 200) {
        await this.getCartByUser({
          lang,
          params: payload
        });
      }
      return data;
    } catch (e) {
      showError({
        statusCode: 400,
        message: e.message
      });
    }
  },
  async cartAction({ payload, lang }) {
    var _a;
    try {
      const { setToastMessage, setToastError } = useCommonStore();
      const authStore = useAuthStore();
      const { token } = storeToRefs(authStore);
      const apiVal = payload.apiVal;
      const storeVal = payload.storeVal;
      const data = await Service.postRequest(json.api.cartAction, apiVal, token.value);
      if ((data == null ? void 0 : data.status) === 200) {
        const { t } = useNuxtApp().$i18n;
        setToastMessage(t("cart.productAdded"));
        if (payload.isBundle) {
          await this.getCartByUser({
            lang,
            params: payload
          });
        }
      } else if ((data == null ? void 0 : data.status) === 201) {
        setToastError((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.form[0]);
      } else {
        showError({
          statusCode: data == null ? void 0 : data.status,
          message: data == null ? void 0 : data.message
        });
      }
    } catch (e) {
      showError({
        statusCode: 400,
        message: e.message
      });
    }
  },
  async cartDelete({ payload, lang }) {
    try {
      const authStore = useAuthStore();
      const { token } = storeToRefs(authStore);
      const data = await Service.deleteRequest(`${json.api.cartDelete}/${payload.id}`, token.value);
      if ((data == null ? void 0 : data.status) === 200) {
        await this.getCartByUser({ params: payload, lang });
      } else {
        showError({
          statusCode: data == null ? void 0 : data.status,
          message: data == null ? void 0 : data.message
        });
      }
    } catch (e) {
      showError({
        statusCode: 400,
        message: e.message
      });
    }
  },
  async cartChanged({ payload, lang }) {
    var _a;
    try {
      const { setToastError } = useCommonStore();
      const authStore = useAuthStore();
      const { token } = storeToRefs(authStore);
      const req = {
        checked: payload.checked,
        unchecked: [],
        isBundle: false
      };
      this.cartProducts.forEach((obj, key) => {
        if (req.checked.indexOf(parseInt(obj.id)) === -1) {
          req.unchecked.push(obj.id);
          this.cartProducts[key].selected = 2;
        } else {
          this.cartProducts[key].selected = 1;
        }
        if (!req.isBundle && obj.bundle_deal) {
          req.isBundle = true;
        }
      });
      const data = await Service.postRequest(json.api.cartChanged, req, token.value);
      if ((data == null ? void 0 : data.status) !== 200) {
        setToastError((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.form[0]);
      } else {
        if (req.isBundle) {
          await this.getCartByUser({ lang });
        }
      }
    } catch (e) {
      showError({
        statusCode: 400,
        message: e.message
      });
    }
  },
  async updateCartShipping(payload) {
    try {
      const authStore = useAuthStore();
      const { token } = storeToRefs(authStore);
      const data = await Service.postRequest(json.api.updateCartShipping, payload, token.value);
      if ((data == null ? void 0 : data.status) === 200) {
        this.cartProducts = data.data;
      }
      return data;
    } catch (e) {
      showError({
        statusCode: 400,
        message: e.message
      });
    }
  }
};
const useCartStore = defineStore("cart", {
  state,
  actions
});

export { useCartStore as u };
//# sourceMappingURL=cart-BePPNdc0.mjs.map
