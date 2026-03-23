import { u as useLanguageStore, a as useCommonStore, i as useRoute, g as useConstants, _ as __nuxt_component_0$2, p as prepareGetUrl } from './server.mjs';
import { ref, computed, watch, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { storeToRefs, defineStore } from 'pinia';
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

const state = () => ({
  categories: null
});
const actions = {
  emptyCategories() {
    this.categories = null;
  }
};
const useCategoryStore = defineStore("category", {
  state,
  actions
});
const _sfc_main = {
  __name: "CategoryListingLayout",
  __ssrInlineRender: true,
  props: {
    subCategoriesMap: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const categoryStore = useCategoryStore();
    const { emptyCategories } = categoryStore;
    const commonStore = useCommonStore();
    const { getRequest } = commonStore;
    const result = ref(null);
    const fetchingCategoryData = ref(true);
    const route = useRoute();
    useConstants();
    const isBrandPage = computed(() => {
      var _a;
      return (_a = route == null ? void 0 : route.name) == null ? void 0 : _a.includes("brands");
    });
    computed(() => {
      var _a;
      return ((_a = result.value) == null ? void 0 : _a.data) || [];
    });
    computed(() => {
      var _a;
      return (_a = result.value) == null ? void 0 : _a.last_page;
    });
    const fetchingData = async () => {
      var _a;
      fetchingCategoryData.value = true;
      let apiName = "categories";
      if (isBrandPage.value) {
        apiName = "brands";
      }
      const data = await getRequest({
        params: `?${prepareGetUrl({
          page: ((_a = route.query) == null ? void 0 : _a.page) || 1
        })}`,
        lang: langCode.value,
        api: apiName
      });
      result.value = data == null ? void 0 : data.data;
      fetchingCategoryData.value = false;
    };
    watch(() => route.query, async () => {
      emptyCategories();
      await fetchingData();
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CategoryListingLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CategoryListingLayout-BvbYA84j.mjs.map
