import { a as useCommonStore, c as useI18n, d as useHead, u as useLanguageStore, _ as __nuxt_component_0$2 } from './server.mjs';
import { ref, computed, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "track-order",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    const { customScripts, site_setting } = storeToRefs(commonStore);
    const { unAuthPost } = commonStore;
    const { t } = useI18n();
    const { pageMeta } = useMetaData();
    useHead(pageMeta({
      ...site_setting.value,
      ...{ meta_title: `${t("header.trackOrder")} | ${site_setting.value.meta_title}` }
    }));
    const languageStore = useLanguageStore();
    const { langData, currentLanguage, langCode } = storeToRefs(languageStore);
    ref(false);
    ref(false);
    ref([]);
    ref(null);
    ref(null);
    computed(() => {
      return t("header.trackOrder");
    });
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/track-order.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=track-order-CUKk08Kd.mjs.map
