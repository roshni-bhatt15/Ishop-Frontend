import { i as useRoute, a as useCommonStore, d as useHead, _ as __nuxt_component_0$2 } from './server.mjs';
import { ref, watch, computed, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useListingStore } from './listing-DfEq-fQC.mjs';
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
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const commonStore = useCommonStore();
    const { customScripts, site_setting } = storeToRefs(commonStore);
    const { pageMeta } = useMetaData();
    useHead(pageMeta(site_setting.value));
    const listingStore = useListingStore();
    const { searched } = storeToRefs(listingStore);
    const { emptyProducts } = listingStore;
    const productListElemRef = ref(null);
    watch(searched, async () => {
      try {
        productListElemRef.value.clearQuery();
        await productListElemRef.value.fetchingData();
      } catch (e) {
        console.log(e);
      }
    });
    computed(() => {
      var _a;
      return ((_a = route.query) == null ? void 0 : _a.q) || "";
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-B6UUNBz9.mjs.map
