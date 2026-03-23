import { f as useUtils, h as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$1 from './ImageLazy-C91HtcbD.mjs';
import __nuxt_component_0 from './RatingStar-DUn_scU4.mjs';
import __nuxt_component_2 from './PriceFormat-BQp9_8mt.mjs';
import { toRefs, computed, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, renderSlot, openBlock, toDisplayString, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { u as useCompareHelper } from './useCompareHelper-of9z6jwL.mjs';
import { u as usePriceHelper } from './usePriceHelper-DzuasYxT.mjs';
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
  __name: "ProductTile",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      default() {
        return null;
      }
    },
    isLazyImage: {
      type: Boolean,
      default: true
    },
    compared: {
      type: Boolean,
      default: false
    },
    titleEllipsis: {
      type: Number,
      default: 2
    }
  },
  emits: ["removed"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const { product, isLazyImage, compared, titleEllipsis } = toRefs(props);
    const emit = __emit;
    const { addToCompare } = useCompareHelper({ product, emit });
    __expose({ addToCompare });
    const { prevPrice, currentPricing, reducedPercent } = usePriceHelper({ product });
    const { getThumbImageURL, productLink } = useUtils();
    const badge = computed(() => {
      var _a;
      return (_a = product.value) == null ? void 0 : _a.badge;
    });
    const detailStore = useDetailStore();
    const { setProduct } = detailStore;
    const goToProduct = () => {
      setProduct(product.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_ImageLazy = _sfc_main$1;
      const _component_rating_star = __nuxt_component_0;
      const _component_price_format = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-tile" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        title: unref(product).title,
        to: unref(productLink)(unref(product)),
        draggable: "false",
        class: "page-link",
        onClick: goToProduct
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block img-wrapper"${_scopeId}>`);
            if (unref(badge)) {
              _push2(`<span class="badge"${_scopeId}>${ssrInterpolate(unref(badge))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "floating-btn", {}, () => {
              _push2(`<button aria-label="submit" class="compare-btn"${ssrRenderAttr("title", _ctx.$t("product.compare"))}${_scopeId}><i class="icon reload-icon"${_scopeId}></i></button>`);
            }, _push2, _parent2, _scopeId);
            if (unref(isLazyImage)) {
              _push2(ssrRenderComponent(_component_ImageLazy, {
                "lazy-src": unref(getThumbImageURL)(unref(product).image),
                title: unref(product).title,
                alt: unref(product).title
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<img${ssrRenderAttr("src", unref(getThumbImageURL)(unref(product).image))}${ssrRenderAttr("title", unref(product).title)}${ssrRenderAttr("alt", unref(product).title)} height="50" width="50"${_scopeId}>`);
            }
            _push2(`</span><div class="item-title"${_scopeId}><h5 class="${ssrRenderClass([`ellipsis-${unref(titleEllipsis)}`, "ellipsis"])}"${_scopeId}>${ssrInterpolate(unref(product).title)}</h5><span class="block mtb-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rating_star, {
              rating: parseFloat(unref(product).rating)
            }, null, _parent2, _scopeId));
            _push2(`<span class="f-10 ml-5 semi-bold color-lite"${_scopeId}>${ssrInterpolate(_ctx.$t("productReview.reviews", { count: unref(product).review_count }))}</span></span><span class="flex wrap start"${_scopeId}><h4 class="price-wrapper"${_scopeId}>`);
            if (unref(prevPrice)) {
              _push2(`<span class="strike-through"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_price_format, { price: unref(prevPrice) }, null, _parent2, _scopeId));
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="price"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_price_format, { price: unref(currentPricing) }, null, _parent2, _scopeId));
            _push2(`</span></h4>`);
            if (unref(reducedPercent)) {
              _push2(`<span class="discount ml-10"${_scopeId}> -${ssrInterpolate(unref(reducedPercent))}%</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</span></div>`);
          } else {
            return [
              createVNode("span", { class: "block img-wrapper" }, [
                unref(badge) ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "badge"
                }, toDisplayString(unref(badge)), 1)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "floating-btn", {}, () => [
                  createVNode("button", {
                    "aria-label": "submit",
                    class: "compare-btn",
                    title: _ctx.$t("product.compare"),
                    onClick: withModifiers(unref(addToCompare), ["prevent"])
                  }, [
                    createVNode("i", { class: "icon reload-icon" })
                  ], 8, ["title", "onClick"])
                ]),
                unref(isLazyImage) ? (openBlock(), createBlock(_component_ImageLazy, {
                  key: 1,
                  "lazy-src": unref(getThumbImageURL)(unref(product).image),
                  title: unref(product).title,
                  alt: unref(product).title
                }, null, 8, ["lazy-src", "title", "alt"])) : (openBlock(), createBlock("img", {
                  key: 2,
                  src: unref(getThumbImageURL)(unref(product).image),
                  title: unref(product).title,
                  alt: unref(product).title,
                  height: "50",
                  width: "50"
                }, null, 8, ["src", "title", "alt"]))
              ]),
              createVNode("div", { class: "item-title" }, [
                createVNode("h5", {
                  class: ["ellipsis", `ellipsis-${unref(titleEllipsis)}`]
                }, toDisplayString(unref(product).title), 3),
                createVNode("span", { class: "block mtb-5" }, [
                  createVNode(_component_rating_star, {
                    rating: parseFloat(unref(product).rating)
                  }, null, 8, ["rating"]),
                  createVNode("span", { class: "f-10 ml-5 semi-bold color-lite" }, toDisplayString(_ctx.$t("productReview.reviews", { count: unref(product).review_count })), 1)
                ]),
                createVNode("span", { class: "flex wrap start" }, [
                  createVNode("h4", { class: "price-wrapper" }, [
                    unref(prevPrice) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "strike-through"
                    }, [
                      createVNode(_component_price_format, { price: unref(prevPrice) }, null, 8, ["price"])
                    ])) : createCommentVNode("", true),
                    createVNode("span", { class: "price" }, [
                      createVNode(_component_price_format, { price: unref(currentPricing) }, null, 8, ["price"])
                    ])
                  ]),
                  unref(reducedPercent) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "discount ml-10"
                  }, " -" + toDisplayString(unref(reducedPercent)) + "%", 1)) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductTile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProductTile-B00mx6gH.mjs.map
