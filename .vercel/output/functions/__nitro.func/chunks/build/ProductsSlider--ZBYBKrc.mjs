import { f as useUtils, h as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$1 from './ImageSlider-ByQM7FE3.mjs';
import _sfc_main$2 from './ProductTile-B00mx6gH.mjs';
import { toRefs, computed, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
import './RatingStar-DUn_scU4.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './util-D0P5KPFP.mjs';
import './useCompareHelper-of9z6jwL.mjs';
import './usePriceHelper-DzuasYxT.mjs';
import './detail-CmpxRn50.mjs';

const _sfc_main = {
  __name: "ProductsSlider",
  __ssrInlineRender: true,
  props: {
    collection: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    const { collectionLink } = useUtils();
    const { collection } = toRefs(props);
    const productCollectionsCount = computed(() => {
      var _a, _b;
      return (_b = (_a = itemList.value) == null ? void 0 : _a.products) == null ? void 0 : _b.length;
    });
    const itemList = computed(() => {
      return collection.value;
    });
    const title = computed(() => {
      var _a;
      return (_a = collection.value) == null ? void 0 : _a.title;
    });
    const slug = computed(() => {
      var _a;
      return (_a = collection.value) == null ? void 0 : _a.slug;
    });
    const linkObj = computed(() => {
      var _a;
      return {
        slug: slug.value,
        title: title.value,
        id: (_a = collection.value) == null ? void 0 : _a.id
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_image_slider = _sfc_main$1;
      const _component_product_tile = _sfc_main$2;
      if (unref(productCollectionsCount)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "area home-section" }, _attrs))}><div class="flex sided title"><h4>${ssrInterpolate(unref(title))}</h4>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "link",
          to: unref(collectionLink)(unref(linkObj))
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
          _: 1
        }, _parent));
        _push(`</div><div class="area-content shimmer-wrapper">`);
        _push(ssrRenderComponent(_component_image_slider, null, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(itemList).products, (value, index) => {
                _push2(`<li${_scopeId}>`);
                _push2(ssrRenderComponent(_component_product_tile, { product: value }, null, _parent2, _scopeId));
                _push2(`</li>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(itemList).products, (value, index) => {
                  return openBlock(), createBlock("li", { key: index }, [
                    createVNode(_component_product_tile, { product: value }, null, 8, ["product"])
                  ]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductsSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProductsSlider--ZBYBKrc.mjs.map
