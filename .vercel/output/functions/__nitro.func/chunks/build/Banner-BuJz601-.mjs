import { g as useConstants, f as useUtils, h as __nuxt_component_0$1 } from './server.mjs';
import { toRefs, computed, unref, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "Banner",
  __ssrInlineRender: true,
  props: {
    banner: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  emits: ["close", "clicked"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { banner } = toRefs(props);
    const { status } = useConstants();
    const { sourceUrl, getImageURL } = useUtils();
    const isPublic = computed(() => {
      var _a;
      return parseInt((_a = banner.value) == null ? void 0 : _a.status) === status.PUBLIC;
    });
    const closable = computed(() => {
      var _a;
      return parseInt((_a = banner.value) == null ? void 0 : _a.closable) === status.PUBLIC;
    });
    const onClose = () => {
      emit("close");
    };
    const onClick = () => {
      emit("clicked");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      if (unref(isPublic)) {
        _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
          to: unref(sourceUrl)(unref(banner), "banner"),
          class: "block banner-wrapper",
          onClick
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", unref(getImageURL)(unref(banner).image))}${ssrRenderAttr("alt", unref(banner).title)} height="100" width="500"${_scopeId}>`);
              if (unref(closable)) {
                _push2(`<button aria-label="close" class="btn-banner-close"${_scopeId}><i class="icon close-icon"${_scopeId}></i></button>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("img", {
                  src: unref(getImageURL)(unref(banner).image),
                  alt: unref(banner).title,
                  height: "100",
                  width: "500"
                }, null, 8, ["src", "alt"]),
                unref(closable) ? (openBlock(), createBlock("button", {
                  key: 0,
                  "aria-label": "close",
                  class: "btn-banner-close",
                  onClick: withModifiers(onClose, ["prevent"])
                }, [
                  createVNode("i", { class: "icon close-icon" })
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Banner-BuJz601-.mjs.map
