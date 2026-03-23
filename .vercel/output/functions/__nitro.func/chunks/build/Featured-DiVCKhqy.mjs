import { j as _export_sfc, h as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$2 from './ImageSlider-ByQM7FE3.mjs';
import __nuxt_component_2 from './SubCategoryTile-YC2vuUC-.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import _sfc_main$1 from './ImageLazy-C91HtcbD.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createVNode, useSSRContext } from 'vue';
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

const _sfc_main = {
  name: "Featured",
  data() {
    return {};
  },
  watch: {},
  props: {
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
  components: {
    SubCategoryTile: __nuxt_component_2,
    ImageSlider: _sfc_main$2,
    ImageLazy: _sfc_main$1
  },
  computed: {},
  mixins: [util],
  methods: {},
  created() {
  },
  mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_image_slider = _sfc_main$2;
  const _component_sub_category_tile = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "area home-section" }, _attrs))}>`);
  if ($props.itemList && $props.itemList.length) {
    _push(`<!--[--><div class="flex sided title"><h4>${ssrInterpolate(_ctx.$t("filter.featured", { title: $props.title }))}</h4>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      class: "link",
      to: "/categories"
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
      "image-count": $props.itemList.length,
      "per-view": 9,
      gap: 15,
      responsive: [7, 5, 4, 3, 2]
    }, {
      content: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.itemList, (value, index) => {
            _push2(`<li class="center-text"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_sub_category_tile, {
              category: value.category,
              "sub-category": value
            }, null, _parent2, _scopeId));
            _push2(`</li>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.itemList, (value, index) => {
              return openBlock(), createBlock("li", {
                key: index,
                class: "center-text"
              }, [
                createVNode(_component_sub_category_tile, {
                  category: value.category,
                  "sub-category": value
                }, null, 8, ["category", "sub-category"])
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Featured.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_5 as default };
//# sourceMappingURL=Featured-DiVCKhqy.mjs.map
