import { f as useUtils, h as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$1 from './ImageLazy-C91HtcbD.mjs';
import __nuxt_component_2 from './PriceFormat-BQp9_8mt.mjs';
import { toRefs, mergeProps, unref, withCtx, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
import 'pinia';
import 'vue-router';
import 'vue-dompurify-html';
import './util-D0P5KPFP.mjs';

const _sfc_main = {
  __name: "SearchedProductTile",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  emits: ["removed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { product } = toRefs(props);
    const emit = __emit;
    const { prevPrice, currentPricing, reducedPercent } = usePriceHelper({ product });
    const { getThumbImageURL, productLink } = useUtils();
    const { addToCompare } = useCompareHelper({ product, emit });
    const detailStore = useDetailStore();
    const { setProduct } = detailStore;
    const goToProduct = () => {
      setProduct(product.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_ImageLazy = _sfc_main$1;
      const _component_price_format = __nuxt_component_2;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        to: unref(productLink)(unref(product)),
        class: "page-link center-text item",
        onClick: goToProduct
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="item-inner"${_scopeId}><div class="img-container"${_scopeId}><div class="img-wrapper"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ImageLazy, {
              "lazy-src": unref(getThumbImageURL)(unref(product).image),
              title: unref(product).title,
              alt: unref(product).title,
              height: "50",
              width: "50"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="title-wrap"${_scopeId}><h5 class="ellipsis ellipsis-1 mb-5"${_scopeId}>${ssrInterpolate(unref(product).title)}</h5><div class="pos-rel flex start"${_scopeId}><h5${_scopeId}>`);
            if (unref(prevPrice)) {
              _push2(`<span class="strike-through"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_price_format, { price: unref(prevPrice) }, null, _parent2, _scopeId));
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="f-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_price_format, { price: unref(currentPricing) }, null, _parent2, _scopeId));
            _push2(`</span></h5>`);
            if (unref(reducedPercent)) {
              _push2(`<span class="discount ml-10"${_scopeId}> -${ssrInterpolate(unref(reducedPercent))}% </span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<button aria-label="submit" class="compare-btn"${ssrRenderAttr("title", _ctx.$t("product.compare"))}${_scopeId}><i class="icon reload-icon"${_scopeId}></i></button></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "item-inner" }, [
                createVNode("div", { class: "img-container" }, [
                  createVNode("div", { class: "img-wrapper" }, [
                    createVNode(_component_ImageLazy, {
                      "lazy-src": unref(getThumbImageURL)(unref(product).image),
                      title: unref(product).title,
                      alt: unref(product).title,
                      height: "50",
                      width: "50"
                    }, null, 8, ["lazy-src", "title", "alt"])
                  ])
                ]),
                createVNode("div", { class: "title-wrap" }, [
                  createVNode("h5", { class: "ellipsis ellipsis-1 mb-5" }, toDisplayString(unref(product).title), 1),
                  createVNode("div", { class: "pos-rel flex start" }, [
                    createVNode("h5", null, [
                      unref(prevPrice) ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "strike-through"
                      }, [
                        createVNode(_component_price_format, { price: unref(prevPrice) }, null, 8, ["price"])
                      ])) : createCommentVNode("", true),
                      createVNode("span", { class: "f-12" }, [
                        createVNode(_component_price_format, { price: unref(currentPricing) }, null, 8, ["price"])
                      ])
                    ]),
                    unref(reducedPercent) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "discount ml-10"
                    }, " -" + toDisplayString(unref(reducedPercent)) + "% ", 1)) : createCommentVNode("", true),
                    createVNode("button", {
                      "aria-label": "submit",
                      class: "compare-btn",
                      title: _ctx.$t("product.compare"),
                      onClick: withModifiers(unref(addToCompare), ["prevent"])
                    }, [
                      createVNode("i", { class: "icon reload-icon" })
                    ], 8, ["title", "onClick"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchedProductTile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SearchedProductTile-C0cfEThI.mjs.map
