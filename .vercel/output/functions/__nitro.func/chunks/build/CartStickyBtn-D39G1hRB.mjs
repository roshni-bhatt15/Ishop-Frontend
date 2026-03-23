import _sfc_main$1 from './ImageLazy-C91HtcbD.mjs';
import _sfc_main$2 from './AjaxButton-DzViXcHL.mjs';
import __nuxt_component_1 from './Spinner-CfK0SFd4.mjs';
import { toRefs, computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { f as useUtils, a as useCommonStore, u as useLanguageStore, b as useAuthStore } from './server.mjs';
import { u as useCartStore } from './cart-BePPNdc0.mjs';
import { storeToRefs } from 'pinia';
import { u as useCartHelper } from './useCartHelper-Ccthiw5l.mjs';
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
import './detail-CmpxRn50.mjs';

const _sfc_main = {
  __name: "CartStickyBtn",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      default() {
        return null;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    productInventory: {
      type: Object
    }
  },
  emits: ["cart-error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { product, disabled, productInventory } = toRefs(props);
    const { getThumbImageURL } = useUtils();
    const commonStore = useCommonStore();
    const { currencyIcon, setting } = storeToRefs(commonStore);
    const { setToastMessage, setToastError, unAuthPost, postRequest } = commonStore;
    const emit = __emit;
    const { addToCart, ajaxingWishlist, buyingNow, ajaxing, wishListed } = useCartHelper({ product, productInventory, emit });
    const userStore = useUserStore();
    const { getUserToken } = userStore;
    const { profile } = storeToRefs(userStore);
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const cartStore = useCartStore();
    const { cartAction, buyNow } = cartStore;
    const authStore = useAuthStore();
    const { authenticated } = storeToRefs(authStore);
    computed(() => {
      return authenticated.value || false;
    });
    const favouriteIcon = computed(() => {
      return wishListed.value ? "heart-fill-icon" : "heart-icon";
    });
    const productTitle = computed(() => {
      var _a;
      return (_a = product.value) == null ? void 0 : _a.title;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ImageLazy = _sfc_main$1;
      const _component_ajax_button = _sfc_main$2;
      const _component_spinner = __nuxt_component_1;
      if (unref(product)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "sticky-cart-wrap" }, _attrs))}><div class="container-fluid"><div class="sticky-cart"><div class="sticky-title">`);
        _push(ssrRenderComponent(_component_ImageLazy, {
          "lazy-src": unref(getThumbImageURL)(unref(product).image),
          title: productTitle.value,
          alt: productTitle.value
        }, null, _parent));
        _push(`<h5 class="ellipsis ellipsis-2">${ssrInterpolate(productTitle.value)}</h5></div><div class="btn-wrap">`);
        _push(ssrRenderComponent(_component_ajax_button, {
          id: "add-to-cart",
          class: "primary-btn btn",
          disabled: unref(disabled),
          type: "button",
          "fetching-data": unref(ajaxing),
          onClicked: unref(addToCart),
          "loading-text": _ctx.$t("detailRight.adding"),
          text: _ctx.$t("detailRight.addToCart")
        }, null, _parent));
        _push(ssrRenderComponent(_component_ajax_button, {
          class: "outline-btn btn",
          disabled: unref(disabled),
          type: "button",
          color: "primary",
          "fetching-data": unref(buyingNow),
          onClicked: ($event) => unref(addToCart)(true),
          "loading-text": _ctx.$t("detailRight.buyNow"),
          text: _ctx.$t("detailRight.buyNow")
        }, null, _parent));
        _push(`<button aria-label="submit" class="compare-btn">`);
        if (unref(ajaxingWishlist)) {
          _push(ssrRenderComponent(_component_spinner, { class: "mr-15" }, null, _parent));
        } else {
          _push(`<i class="${ssrRenderClass([favouriteIcon.value, "icon"])}"></i>`);
        }
        _push(`</button><button aria-label="submit" class="compare-btn"${ssrRenderAttr("title", _ctx.$t("product.compare"))}><i class="icon reload-icon"></i></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CartStickyBtn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CartStickyBtn-D39G1hRB.mjs.map
