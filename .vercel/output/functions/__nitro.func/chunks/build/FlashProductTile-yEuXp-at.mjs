import { a as useCommonStore, b as useAuthStore, f as useUtils, h as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$1 from './ImageLazy-C91HtcbD.mjs';
import __nuxt_component_2 from './PriceFormat-BQp9_8mt.mjs';
import { toRefs, computed, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { storeToRefs } from 'pinia';
import { u as usePriceHelper } from './usePriceHelper-DzuasYxT.mjs';
import { u as useCompareHelper } from './useCompareHelper-of9z6jwL.mjs';
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
import 'vue-router';
import 'vue-dompurify-html';
import './util-D0P5KPFP.mjs';

const _sfc_main = {
  __name: "FlashProductTile",
  __ssrInlineRender: true,
  props: {
    flashProduct: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  emits: ["removed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { flashProduct } = toRefs(props);
    const commonStore = useCommonStore();
    const { currencyIcon, setting } = storeToRefs(commonStore);
    const { unAuthPost, setToastMessage, setToastError } = commonStore;
    const authStore = useAuthStore();
    const { authenticated } = storeToRefs(authStore);
    const { getThumbImageURL, productLink } = useUtils();
    const product = computed(() => {
      var _a;
      return ((_a = flashProduct.value) == null ? void 0 : _a.product_data) || flashProduct.value;
    });
    const emit = __emit;
    const { prevPrice } = usePriceHelper({ product });
    const reducedPercent = computed(() => {
      return 100 - parseInt((reducedPrice.value / prevPrice.value * 100).toString());
    });
    const { addToCompare } = useCompareHelper({ product, emit });
    const reducedPrice = computed(() => {
      var _a;
      return (_a = flashProduct.value) == null ? void 0 : _a.price;
    });
    computed(() => {
      var _a;
      return ((_a = flashProduct.value) == null ? void 0 : _a.quantity) || 0;
    });
    computed(() => {
      var _a;
      return ((_a = flashProduct.value) == null ? void 0 : _a.sold) || 0;
    });
    const detailStore = useDetailStore();
    const { setProduct } = detailStore;
    const goToProduct = () => {
      setProduct(product.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_ImageLazy = _sfc_main$1;
      const _component_price_format = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-tile" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(productLink)(unref(product)),
        class: "block page-link",
        title: unref(product).title,
        onClick: goToProduct
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="img-wrapper"${_scopeId}>`);
            if (unref(product).badge) {
              _push2(`<span class="badge"${_scopeId}>${ssrInterpolate(unref(product).badge)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<button aria-label="submit" class="compare-btn"${ssrRenderAttr("title", _ctx.$t("product.compare"))}${_scopeId}><i class="icon reload-icon"${_scopeId}></i></button>`);
            _push2(ssrRenderComponent(_component_ImageLazy, {
              "lazy-src": unref(getThumbImageURL)(unref(product).image),
              title: unref(product).title,
              alt: unref(product).title
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex wrap sided align-end item-title mt-0"${_scopeId}><h4 class="price-wrapper"${_scopeId}><span class="price"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_price_format, { price: unref(reducedPrice) }, null, _parent2, _scopeId));
            _push2(`</span><span class="strike-through"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_price_format, { price: unref(prevPrice) }, null, _parent2, _scopeId));
            _push2(`</span></h4><h5 class="color-primary"${_scopeId}><span class="discount"${_scopeId}>${ssrInterpolate(_ctx.$t("home.off", { percent: unref(reducedPercent) }))}</span></h5></div>`);
          } else {
            return [
              createVNode("div", { class: "img-wrapper" }, [
                unref(product).badge ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "badge"
                }, toDisplayString(unref(product).badge), 1)) : createCommentVNode("", true),
                createVNode("button", {
                  "aria-label": "submit",
                  class: "compare-btn",
                  title: _ctx.$t("product.compare"),
                  onClick: withModifiers(unref(addToCompare), ["prevent"])
                }, [
                  createVNode("i", { class: "icon reload-icon" })
                ], 8, ["title", "onClick"]),
                createVNode(_component_ImageLazy, {
                  "lazy-src": unref(getThumbImageURL)(unref(product).image),
                  title: unref(product).title,
                  alt: unref(product).title
                }, null, 8, ["lazy-src", "title", "alt"])
              ]),
              createVNode("div", { class: "flex wrap sided align-end item-title mt-0" }, [
                createVNode("h4", { class: "price-wrapper" }, [
                  createVNode("span", { class: "price" }, [
                    createVNode(_component_price_format, { price: unref(reducedPrice) }, null, 8, ["price"])
                  ]),
                  createVNode("span", { class: "strike-through" }, [
                    createVNode(_component_price_format, { price: unref(prevPrice) }, null, 8, ["price"])
                  ])
                ]),
                createVNode("h5", { class: "color-primary" }, [
                  createVNode("span", { class: "discount" }, toDisplayString(_ctx.$t("home.off", { percent: unref(reducedPercent) })), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FlashProductTile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=FlashProductTile-yEuXp-at.mjs.map
