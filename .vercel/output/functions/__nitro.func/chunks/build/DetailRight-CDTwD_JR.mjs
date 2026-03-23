import __nuxt_component_2 from './PriceFormat-BQp9_8mt.mjs';
import { c as useI18n, a as useCommonStore, u as useLanguageStore, b as useAuthStore, _ as __nuxt_component_0$2 } from './server.mjs';
import PopOver from './PopOver-CEd84c-C.mjs';
import __nuxt_component_3 from './QuantityNav-BsBh_DF4.mjs';
import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import __nuxt_component_5 from './StoreTile-qfPzOBxa.mjs';
import { toRefs, ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import moment from 'moment';
import { u as useCartHelper } from './useCartHelper-Ccthiw5l.mjs';
import { u as usePriceHelper } from './usePriceHelper-DzuasYxT.mjs';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { u as useCartStore } from './cart-BePPNdc0.mjs';
import { storeToRefs } from 'pinia';
import './util-D0P5KPFP.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'vue-dompurify-html';
import './Spinner-CfK0SFd4.mjs';
import './FollowBtn-DRaJlaSD.mjs';
import './detail-CmpxRn50.mjs';

const _sfc_main = {
  __name: "DetailRight",
  __ssrInlineRender: true,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    product: {
      type: Object
    },
    productInventory: {
      type: Object
    }
  },
  emits: ["cart-error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const { disabled, product, productInventory } = toRefs(props);
    const emit = __emit;
    const { wishListAction, addToCart, buyingNow, cartError, quantity, ajaxing } = useCartHelper({ product, productInventory, emit });
    __expose({ wishListAction });
    const { productPrice, prevPrice } = usePriceHelper({ product, productInventory });
    const { t } = useI18n();
    ref(null);
    ref(0);
    const pricePopOver = ref(false);
    const secureTrans = ref(false);
    const commonStore = useCommonStore();
    const { currencyIcon, setting } = storeToRefs(commonStore);
    const { setToastMessage, setToastError, postRequest } = commonStore;
    const userStore = useUserStore();
    const { getUserToken } = userStore;
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const cartStore = useCartStore();
    const { cartAction, buyNow } = cartStore;
    const { cartProducts } = storeToRefs(cartStore);
    const authStore = useAuthStore();
    const { authenticated } = storeToRefs(authStore);
    const maxQuantity = computed(() => {
      var _a;
      return parseInt(((_a = productInventory.value) == null ? void 0 : _a.quantity) || 0);
    });
    const closeSecureTrans = () => {
      secureTrans.value = false;
    };
    const quantityChanged = (evt) => {
      quantity.value = evt.value;
    };
    computed(() => {
      return parseFloat(productPrice.value) + parseFloat(shippingPrice.value);
    });
    const shippingPlace = computed(() => {
      var _a, _b;
      const all = (_a = shippingRule.value) == null ? void 0 : _a.find((obj) => {
        return obj.country.toUpperCase() === "ALL";
      });
      if (!all) {
        let maxPrice = 0;
        let maxObj = 0;
        (_b = shippingRule.value) == null ? void 0 : _b.forEach((obj) => {
          if (parseFloat(obj.price) > maxPrice) {
            maxPrice = obj.price;
            maxObj = obj;
          }
        });
        return maxObj;
      } else return all;
    });
    computed(() => {
      var _a;
      const momentDate = moment().add((_a = shippingPlace.value) == null ? void 0 : _a.day_needed, "days");
      const day = momentDate.format("ddd").toLowerCase();
      const mon = momentDate.format("MMM").toLowerCase();
      const date = momentDate.format("D");
      return t("date.ddddMMMD", { day: t(`date.${day}`), mon: t(`date.${mon}`), date });
    });
    const isFreeShipping = computed(() => {
      return !(parseFloat(shippingPrice.value) > 0);
    });
    const shippingPrice = computed(() => {
      var _a;
      return ((_a = shippingPlace.value) == null ? void 0 : _a.price) || 0;
    });
    const shippingRule = computed(() => {
      var _a, _b;
      return (_b = (_a = product.value) == null ? void 0 : _a.shipping_rule) == null ? void 0 : _b.shipping_places;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_price_format = __nuxt_component_2;
      const _component_client_only = __nuxt_component_0$2;
      const _component_pop_over = PopOver;
      const _component_quantity_nav = __nuxt_component_3;
      const _component_ajax_button = _sfc_main$1;
      const _component_store_tile = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-right" }, _attrs))}><div class="sticky-right"><div class="content"><h2 class="price-wrapper mb-5"><span class="color-deep price">`);
      _push(ssrRenderComponent(_component_price_format, { price: unref(productPrice) }, null, _parent));
      _push(`</span>`);
      if (unref(prevPrice)) {
        _push(`<span class="strike-through f-7">`);
        _push(ssrRenderComponent(_component_price_format, { price: unref(prevPrice) }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h2><div>`);
      if (unref(isFreeShipping)) {
        _push(`<span class="mr-5 block color-free">${ssrInterpolate(_ctx.$t("invent.fs"))}</span>`);
      } else {
        _push(`<span class="mr-5 block"> + `);
        _push(ssrRenderComponent(_component_price_format, {
          price: parseInt(unref(shippingPrice))
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("detailRight.shippingFee"))}</span>`);
      }
      _push(`<div class="pos-rel lh-30 z-7 inline"><button class="semi-bold clear-height mt-10" aria-label="submit" data-ignore="price-pop-over"><span class="flex no-click"><span class="mt-2">${ssrInterpolate(_ctx.$t("detailRight.details"))}</span><i class="${ssrRenderClass([[{ "arrow-up": unref(pricePopOver) }, { "arrow-down": !unref(pricePopOver) }], "icon black scale-8"])}"></i></span></button>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="start flex gap-10 mb-10 wrap"><span class="mt-5 mn-w-70x">${ssrInterpolate(_ctx.$t("detailRight.quantity"))}</span>`);
      _push(ssrRenderComponent(_component_quantity_nav, {
        class: "mt-5",
        quantity: unref(quantity),
        "product-inventory": unref(productInventory),
        max: unref(maxQuantity),
        onValueChanged: quantityChanged
      }, null, _parent));
      if (unref(cartError).inventory) {
        _push(`<p class="error mb-10">${ssrInterpolate(unref(cartError).inventory)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex-sm mlr-sm--2-5">`);
      _push(ssrRenderComponent(_component_ajax_button, {
        id: "add-to-cart",
        class: "w-100 w-sm-50 primary-btn mtb-10 mlr-sm-2-5",
        disabled: unref(disabled),
        type: "button",
        "fetching-data": unref(ajaxing),
        onClicked: unref(addToCart),
        "loading-text": _ctx.$t("detailRight.adding"),
        text: _ctx.$t("detailRight.addToCart")
      }, null, _parent));
      _push(ssrRenderComponent(_component_ajax_button, {
        class: "w-100 w-sm-50 outline-btn mtb-10 mlr-sm-2-5",
        disabled: unref(disabled),
        type: "button",
        color: "primary",
        "fetching-data": unref(buyingNow),
        onClicked: ($event) => unref(addToCart)(true),
        "loading-text": _ctx.$t("detailRight.buyNow"),
        text: _ctx.$t("detailRight.buyNow")
      }, null, _parent));
      _push(`</div><div class="pos-rel inline"><button class="clear-height ml--7-5 mtb-10 f-10 semi-bold flex color-deep" aria-label="submit" data-ignore="secure-trans"><i class="no-click icon lock-icon mr-5 opacity-35 dimen-20x"></i> ${ssrInterpolate(_ctx.$t("detailRight.secureTransaction"))}</button>`);
      if (unref(secureTrans)) {
        _push(ssrRenderComponent(_component_pop_over, {
          title: _ctx.$t("detailRight.transactionIsSecured"),
          onClose: closeSecureTrans,
          class: "secure-trans",
          "elem-id": "secure-trans"
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="mn-w-350x mn-w-sm-0"${_scopeId}>${ssrInterpolate(_ctx.$t("detailRight.secureTransaction"))} ${ssrInterpolate(_ctx.$t("detailRight.secureTransactionMsg"))}</p>`);
            } else {
              return [
                createVNode("p", { class: "mn-w-350x mn-w-sm-0" }, toDisplayString(_ctx.$t("detailRight.secureTransaction")) + " " + toDisplayString(_ctx.$t("detailRight.secureTransactionMsg")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(ssrRenderComponent(_component_store_tile, {
        class: "mt-10",
        store: unref(product).store
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DetailRight.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DetailRight-CDTwD_JR.mjs.map
