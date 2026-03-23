import { g as useConstants, a as useCommonStore, u as useLanguageStore, d as useHead, i as useRoute, _ as __nuxt_component_0$2 } from './server.mjs';
import { ref, computed, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useFlashSaleStore } from './flashSale-Gpk8vfm-.mjs';
import { storeToRefs } from 'pinia';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useConstants();
    const commonStore = useCommonStore();
    const { customScripts, site_setting } = storeToRefs(commonStore);
    const { unAuthGet } = commonStore;
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const flashSaleStore = useFlashSaleStore();
    const { products } = storeToRefs(flashSaleStore);
    const { emptyFlashProducts, setFlashProducts } = flashSaleStore;
    const { pageMeta } = useMetaData();
    useHead(pageMeta(site_setting.value));
    ref(false);
    ref(false);
    const route = useRoute();
    computed(() => {
      var _a;
      return ((_a = products.value) == null ? void 0 : _a.data) || null;
    });
    computed(() => {
      var _a;
      return (_a = products.value) == null ? void 0 : _a.last_page;
    });
    computed(() => {
      var _a;
      return (_a = route == null ? void 0 : route.params) == null ? void 0 : _a.id;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/flash-sale/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-B7wRtQ2k.mjs.map
