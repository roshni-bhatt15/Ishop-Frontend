import _sfc_main$1 from './ProductTile-B00mx6gH.mjs';
import { ref, mergeProps, withCtx, createVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import './server.mjs';
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
import './ImageLazy-C91HtcbD.mjs';
import './RatingStar-DUn_scU4.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './util-D0P5KPFP.mjs';
import './useCompareHelper-of9z6jwL.mjs';
import './usePriceHelper-DzuasYxT.mjs';
import './detail-CmpxRn50.mjs';

const _sfc_main = {
  __name: "ComparedTile",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  setup(__props) {
    const tileRef = ref(null);
    const removeFromCompared = () => {
      tileRef.value.addToCompare();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_product_tile = _sfc_main$1;
      _push(ssrRenderComponent(_component_product_tile, mergeProps({
        ref_key: "tileRef",
        ref: tileRef,
        product: __props.product,
        onRemoved: ($event) => _ctx.$emit("removed")
      }, _attrs), {
        "floating-btn": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="compare-btn" aria-label="compare"${ssrRenderAttr("title", _ctx.$t("product.removeCompare"))}${_scopeId}><i class="icon close-icon"${_scopeId}></i></button>`);
          } else {
            return [
              createVNode("button", {
                class: "compare-btn",
                "aria-label": "compare",
                title: _ctx.$t("product.removeCompare"),
                onClick: withModifiers(removeFromCompared, ["prevent"])
              }, [
                createVNode("i", { class: "icon close-icon" })
              ], 8, ["title"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ComparedTile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ComparedTile-DVfVk_h_.mjs.map
