import _sfc_main$1 from './SiteFeature-Y5o5rWoO.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import './ImageLazy-C91HtcbD.mjs';
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

const _sfc_main = {
  __name: "StaticSection",
  __ssrInlineRender: true,
  props: {
    siteFeatures: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_site_feature = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex wrap static-container mb-20 mb-sm-15" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.siteFeatures, (value, i) => {
        _push(ssrRenderComponent(_component_site_feature, {
          key: i,
          "site-feature": value
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StaticSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=StaticSection-Davrn8fR.mjs.map
