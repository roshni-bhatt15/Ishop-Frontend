import { f as useUtils, g as useConstants, h as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$1 from './ImageLazy-C91HtcbD.mjs';
import __nuxt_component_2 from './PriceFormat-BQp9_8mt.mjs';
import { toRefs, computed, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useProductHelper } from './useProductHelper-D_nJapxP.mjs';
import { u as useDetailStore } from './detail-CmpxRn50.mjs';
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
import 'pinia';
import 'vue-router';
import 'vue-dompurify-html';
import './util-D0P5KPFP.mjs';

const _sfc_main = {
  __name: "OrderedProduct",
  __ssrInlineRender: true,
  props: {
    ordered: {
      type: Object
    },
    cart: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    const { cart } = toRefs(props);
    const detailStore = useDetailStore();
    const { setProduct } = detailStore;
    const { dataFromObject, productLink, getThumbImageURL } = useUtils();
    const { shippingTypes } = useConstants();
    const { getProductImage } = useProductHelper();
    const goToProduct = () => {
      setProduct(product.value);
    };
    const productImage = computed(() => {
      return getProductImage(product.value, inventoryAttributes.value);
    });
    computed(() => {
      var _a;
      return (_a = cart.value) == null ? void 0 : _a.product_images;
    });
    const product = computed(() => {
      var _a;
      return (_a = cart.value) == null ? void 0 : _a.product;
    });
    const inventoryAttributes = computed(() => {
      var _a, _b;
      return (_b = (_a = cart.value) == null ? void 0 : _a.updated_inventory) == null ? void 0 : _b.inventory_attributes;
    });
    const currentAttribute = computed(() => {
      var _a;
      return (_a = inventoryAttributes.value) == null ? void 0 : _a.map((i) => {
        var _a2, _b, _c;
        return [(_b = (_a2 = i == null ? void 0 : i.attribute_value) == null ? void 0 : _a2.attribute) == null ? void 0 : _b.title, (_c = i == null ? void 0 : i.attribute_value) == null ? void 0 : _c.title];
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_ImageLazy = _sfc_main$1;
      const _component_price_format = __nuxt_component_2;
      _push(`<tr${ssrRenderAttrs(_attrs)}><td>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(productLink)(unref(cart).product),
        class: "img-wrap",
        title: unref(cart).product.title,
        onClick: goToProduct
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ImageLazy, {
              "lazy-src": unref(getThumbImageURL)(unref(productImage)),
              title: unref(cart).product.title,
              alt: unref(cart).product.title
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ImageLazy, {
                "lazy-src": unref(getThumbImageURL)(unref(productImage)),
                title: unref(cart).product.title,
                alt: unref(cart).product.title
              }, null, 8, ["lazy-src", "title", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</td><td class="mn-w-200x-md">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(productLink)(unref(cart).product),
        title: unref(cart).product.title,
        class: "mb-5 block",
        onClick: goToProduct
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(cart).product.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(cart).product.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="block"><!--[-->`);
      ssrRenderList(unref(currentAttribute), (i) => {
        _push(`<span class="mr-15"><b class="mr-10">${ssrInterpolate(i[0])}</b> : ${ssrInterpolate(i[1])}</span>`);
      });
      _push(`<!--]--></span>`);
      if (!!!__props.ordered.cancelled) {
        _push(`<button aria-label="submit" class="link-color">${ssrInterpolate(_ctx.$t("ratePopup.rateNow"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</td><td>${ssrInterpolate(unref(shippingTypes)[unref(cart).shipping_type])}</td><td>`);
      _push(ssrRenderComponent(_component_price_format, {
        price: unref(cart).shipping_price
      }, null, _parent));
      _push(`</td><td>${ssrInterpolate(unref(cart).quantity)}</td><td>`);
      _push(ssrRenderComponent(_component_price_format, {
        price: unref(cart).selling * unref(dataFromObject)(unref(cart), "bundle_offer", 0)
      }, null, _parent));
      _push(`</td><td>`);
      _push(ssrRenderComponent(_component_price_format, {
        price: unref(cart).selling
      }, null, _parent));
      _push(`</td><td>`);
      _push(ssrRenderComponent(_component_price_format, {
        price: unref(cart).selling * unref(cart).quantity
      }, null, _parent));
      _push(`</td></tr>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OrderedProduct.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=OrderedProduct-CzRQcjOC.mjs.map
