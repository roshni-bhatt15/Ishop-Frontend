import { h as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$1 from './ImageSlider-ByQM7FE3.mjs';
import __nuxt_component_2 from './BrandTile-D3DrIMuS.mjs';
import { ref, toRefs, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
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
import './util-D0P5KPFP.mjs';

const _sfc_main = {
  __name: "BrandsFeatured",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "brand"
    },
    title: {
      type: String,
      default: ""
    },
    itemList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(__props) {
    const props = __props;
    const brands = ref([]);
    const { type, title, itemList } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_image_slider = _sfc_main$1;
      const _component_brand_tile = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "area home-section" }, _attrs))}>`);
      if (unref(brands) && unref(brands).length) {
        _push(`<!--[--><div class="flex sided title"><h4>${ssrInterpolate(_ctx.$t("filter.featured", { title: unref(title) }))}</h4>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "link",
          to: "/brands"
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
        _push(`</div><div class="area-content">`);
        _push(ssrRenderComponent(_component_image_slider, {
          "image-count": unref(brands).length,
          gap: 15
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(brands), (value, index) => {
                _push2(`<li class="center-text"${_scopeId}><!--[-->`);
                ssrRenderList(value, (v, i) => {
                  _push2(ssrRenderComponent(_component_brand_tile, {
                    key: i,
                    brand: v
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></li>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(brands), (value, index) => {
                  return openBlock(), createBlock("li", {
                    key: index,
                    class: "center-text"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(value, (v, i) => {
                      return openBlock(), createBlock(_component_brand_tile, {
                        key: i,
                        brand: v
                      }, null, 8, ["brand"]);
                    }), 128))
                  ]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BrandsFeatured.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=BrandsFeatured-DaVB-n_d.mjs.map
