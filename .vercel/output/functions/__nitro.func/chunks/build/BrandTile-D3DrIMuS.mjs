import { j as _export_sfc, h as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$1 from './ImageLazy-C91HtcbD.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  name: "BrandTile",
  props: {
    brand: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  data() {
    return {};
  },
  components: {
    ImageLazy: _sfc_main$1
  },
  mixins: [util],
  computed: {},
  mounted() {
  },
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_ImageLazy = _sfc_main$1;
  _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
    class: "block page-link",
    to: _ctx.brandLink($props.brand),
    title: $props.brand.title
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="img-wrapper"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ImageLazy, {
          "lazy-src": _ctx.thumbImageURL($props.brand),
          title: $props.brand.title,
          alt: $props.brand.title
        }, null, _parent2, _scopeId));
        _push2(`</div><h5 class="item-title ellipsis ellipsis-1"${_scopeId}>${ssrInterpolate($props.brand.title)}</h5>`);
      } else {
        return [
          createVNode("div", { class: "img-wrapper" }, [
            createVNode(_component_ImageLazy, {
              "lazy-src": _ctx.thumbImageURL($props.brand),
              title: $props.brand.title,
              alt: $props.brand.title
            }, null, 8, ["lazy-src", "title", "alt"])
          ]),
          createVNode("h5", { class: "item-title ellipsis ellipsis-1" }, toDisplayString($props.brand.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BrandTile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=BrandTile-D3DrIMuS.mjs.map
