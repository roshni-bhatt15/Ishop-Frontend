import __nuxt_component_5 from './Countdown-BmVJhrfs.mjs';
import { h as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$1 from './ImageSlider-ByQM7FE3.mjs';
import _sfc_main$2 from './FlashProductTile-yEuXp-at.mjs';
import { withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import 'moment-timezone';
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
import 'embla-carousel-vue';
import './ImageLazy-C91HtcbD.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './util-D0P5KPFP.mjs';
import './usePriceHelper-DzuasYxT.mjs';
import './useCompareHelper-of9z6jwL.mjs';
import './detail-CmpxRn50.mjs';

const _sfc_main = {
  __name: "FlashSale",
  __ssrInlineRender: true,
  props: {
    deactivate: {
      type: Boolean,
      default: true
    },
    flashSales: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_countdown = __nuxt_component_5;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_image_slider = _sfc_main$1;
      const _component_flash_product_tile = _sfc_main$2;
      if (__props.flashSales && __props.flashSales.length) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="flash-slider"><div><!--[-->`);
        ssrRenderList(__props.flashSales, (flashSale, index) => {
          _push(`<div class="area home-section"><div class="flex sided title"><div class="flex gap-10"><h4>${ssrInterpolate(flashSale.title)}</h4>`);
          _push(ssrRenderComponent(_component_countdown, {
            "end-time": flashSale.end_time
          }, null, _parent));
          _push(`</div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "link",
            to: `/flash-sale/${flashSale.id}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("featured.showAll"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("featured.showAll")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="area-content">`);
          if (flashSale.products && flashSale.products.length) {
            _push(ssrRenderComponent(_component_image_slider, {
              addInitEvt: true,
              "image-count": flashSale.products.length
            }, {
              content: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<!--[-->`);
                  ssrRenderList(flashSale.products, (value, index2) => {
                    _push2(`<li class="center-text"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_flash_product_tile, { "flash-product": value }, null, _parent2, _scopeId));
                    _push2(`</li>`);
                  });
                  _push2(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(flashSale.products, (value, index2) => {
                      return openBlock(), createBlock("li", {
                        key: index2,
                        class: "center-text"
                      }, [
                        createVNode(_component_flash_product_tile, { "flash-product": value }, null, 8, ["flash-product"])
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FlashSale.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=FlashSale-C6ZiTiZY.mjs.map
