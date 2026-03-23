import __nuxt_component_1 from './Spinner-CfK0SFd4.mjs';
import _sfc_main$1 from './CartProductTile-CcN_qkNj.mjs';
import { toRefs, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { u as useLanguageStore, f as useUtils } from './server.mjs';
import { u as useCartStore } from './cart-BePPNdc0.mjs';
import { storeToRefs } from 'pinia';
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
import './ImageLazy-C91HtcbD.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './util-D0P5KPFP.mjs';
import './QuantityNav-BsBh_DF4.mjs';
import './AjaxButton-DzViXcHL.mjs';
import './detail-CmpxRn50.mjs';
import './useProductHelper-D_nJapxP.mjs';
import './usePriceHelper-DzuasYxT.mjs';

const _sfc_main = {
  __name: "CartList",
  __ssrInlineRender: true,
  props: {
    cartProducts: {
      type: Array
    },
    checked: {
      type: Array
    },
    cartShipping: {
      type: Object,
      default() {
        return null;
      }
    },
    isShipping: {
      type: Boolean,
      default: false
    },
    ajaxing: {
      type: Boolean,
      default: false
    },
    currentAddresses: {
      type: Array,
      default() {
        return [];
      }
    },
    errorFromApi: {
      type: Object,
      default() {
        return null;
      }
    },
    address: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  emits: ["current-shipping", "shipping-changed", "cart-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { cartShipping, checked } = toRefs(props);
    const emit = __emit;
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const userStore = useUserStore();
    const { getUserToken } = userStore;
    const cartStore = useCartStore();
    const { cartDelete, cartAction, cartChanged } = cartStore;
    const fetchingCartData = ref(false);
    ref(0);
    const { dataFromObject } = useUtils();
    const currentShipping = (evt) => {
      emit("current-shipping", evt);
    };
    const updateCartShipping = () => {
      emit("shipping-changed", cartShipping.value);
    };
    const valueChanged = async ({ bundleDeal, product, inventory, direction }) => {
      await cartAction({
        payload: {
          apiVal: {
            user_token: await getUserToken(),
            product_id: product.id,
            inventory_id: inventory.id,
            quantity: direction
          },
          storeVal: {
            product,
            inventory,
            quantity: direction,
            selected: "1"
          },
          isBundle: !!bundleDeal
        },
        lang: langCode.value
      });
    };
    const deleting = async (evt) => {
      await cartDelete({
        payload: evt,
        lang: langCode.value
      });
    };
    const cbChangedFn = async (evt) => {
      const cbChecked = checked.value;
      if (evt.checked.target.checked) {
        cbChecked.push(evt.id);
      } else {
        const index = checked.value.findIndex((obj) => {
          return parseInt(obj) === parseInt(evt.id);
        });
        delete cbChecked[index];
      }
      await cartChanged({
        lang: langCode.value,
        payload: {
          checked: cbChecked
        }
      });
      emit("cart-changed", true);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_spinner = __nuxt_component_1;
      const _component_CartProductTile = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(fetchingCartData) || __props.ajaxing) {
        _push(`<div class="spinner-wrapper flex">`);
        _push(ssrRenderComponent(_component_spinner, { radius: 100 }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><!--[-->`);
        ssrRenderList(__props.cartProducts, (value) => {
          _push(ssrRenderComponent(_component_CartProductTile, {
            key: value.id,
            cart: value,
            checked: unref(checked),
            "is-shipping": __props.isShipping,
            "cart-shipping": unref(cartShipping),
            "current-addresses": __props.currentAddresses,
            address: __props.address,
            error: unref(dataFromObject)(__props.errorFromApi, value.id, null),
            onCbChanged: cbChangedFn,
            onDeleting: deleting,
            onQuantity: valueChanged,
            onUpdateCartShipping: updateCartShipping,
            onCurrentShipping: currentShipping
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CartList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CartList-sedxDV_N.mjs.map
