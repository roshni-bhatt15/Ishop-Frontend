import _sfc_main$1 from './CategoryListingLayout-BvbYA84j.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as useCommonStore, c as useI18n, d as useHead } from './server.mjs';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
import { storeToRefs } from 'pinia';
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
import 'vue-router';
import 'vue-dompurify-html';

const _sfc_main = {
  __name: "brands",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    const { customScripts, site_setting } = storeToRefs(commonStore);
    const { t } = useI18n();
    const { pageMeta } = useMetaData();
    useHead(
      pageMeta({
        ...site_setting.value,
        ...{
          meta_title: `${t("header.brands")} | ${site_setting.value.meta_title}`
        }
      })
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_category_listing_layout = _sfc_main$1;
      _push(ssrRenderComponent(_component_category_listing_layout, mergeProps({ type: "brand" }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/brands.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=brands-Btq1MiMo.mjs.map
