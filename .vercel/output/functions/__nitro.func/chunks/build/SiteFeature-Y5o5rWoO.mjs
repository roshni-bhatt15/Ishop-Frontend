import _sfc_main$1 from './ImageLazy-C91HtcbD.mjs';
import { toRefs, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { f as useUtils } from './server.mjs';
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
  __name: "SiteFeature",
  __ssrInlineRender: true,
  props: {
    siteFeature: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  setup(__props) {
    const props = __props;
    const { siteFeature } = toRefs(props);
    const { getImageURL } = useUtils();
    const image = computed(() => {
      var _a;
      return (_a = siteFeature.value) == null ? void 0 : _a.image;
    });
    const detail = computed(() => {
      var _a;
      return (_a = siteFeature.value) == null ? void 0 : _a.detail;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ImageLazy = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "static-area" }, _attrs))}><div class="img-wrap">`);
      _push(ssrRenderComponent(_component_ImageLazy, {
        "lazy-src": unref(getImageURL)(unref(image)),
        title: _ctx.$t("date.fi"),
        alt: _ctx.$t("date.fi")
      }, null, _parent));
      _push(`</div><div class="detail">${(_a = unref(detail)) != null ? _a : ""}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteFeature.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SiteFeature-Y5o5rWoO.mjs.map
