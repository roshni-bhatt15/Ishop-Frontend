import _sfc_main$1 from './ProductList-BMKndfQw.mjs';
import { withAsyncContext, watch, computed, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as useCommonStore, u as useLanguageStore, i as useRoute, f as useUtils, d as useHead, p as prepareGetUrl } from './server.mjs';
import { u as useListingStore } from './listing-DfEq-fQC.mjs';
import { storeToRefs } from 'pinia';
import { u as useAsyncData } from './asyncData-LCoVf7VD.mjs';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
import './FilterCategory-DFocfuH1.mjs';
import './TreeNode-BtlE5zWY.mjs';
import './util-D0P5KPFP.mjs';
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
import './FilterPrice-BDxDFIEZ.mjs';
import './FilterRating-DLKxXJ_u.mjs';
import './RatingStar-DUn_scU4.mjs';
import './FilterBrand-BmteqgJl.mjs';
import './FilterCollection--r9eDqOk.mjs';
import './FilterShipping-tD0qyesP.mjs';
import './Breadcrumb-wLTDRst4.mjs';
import './TileShimmer-CoHt9eD1.mjs';
import './ProductTile-B00mx6gH.mjs';
import './ImageLazy-C91HtcbD.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './useCompareHelper-of9z6jwL.mjs';
import './usePriceHelper-DzuasYxT.mjs';
import './detail-CmpxRn50.mjs';
import './Pagination-1kX6F26r.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d;
    let __temp, __restore;
    const commonStore = useCommonStore();
    const { customScripts } = storeToRefs(commonStore);
    const { unAuthGet } = commonStore;
    const listingStore = useListingStore();
    const { brands, shippingRules, collections, categoryData } = storeToRefs(listingStore);
    const { emptyProducts, setProducts } = listingStore;
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const route = useRoute();
    const categoryKey = `category-${route.params.category}}`;
    const fetchCategoryData = async () => {
      var _a2, _b2, _c2;
      return await unAuthGet({
        api: "all",
        params: `?${prepareGetUrl({
          category: (_a2 = route == null ? void 0 : route.params) == null ? void 0 : _a2.category,
          sortby: route.query.sortby || "",
          shipping: route.query.shipping || "",
          brand: route.query.brand || "",
          collection: route.query.collection || "",
          rating: route.query.rating || 0,
          max: ((_b2 = route == null ? void 0 : route.query) == null ? void 0 : _b2.max) || 0,
          min: ((_c2 = route == null ? void 0 : route.query) == null ? void 0 : _c2.min) || 0,
          page: route.query.page || "",
          sidebar_data: !brands.value || !shippingRules.value || !collections.value
        })}`,
        lang: langCode.value
      });
    };
    const { data: category, pending, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(categoryKey, async () => {
      const result = await fetchCategoryData();
      setProducts(result);
      return result.data.category;
    }, "$vrvFBjAx8i")), __temp = await __temp, __restore(), __temp);
    const { pageMeta } = useMetaData();
    const { getImageURL } = useUtils();
    watch(() => route.query, () => {
      fetchingData();
    });
    useHead(pageMeta({
      meta_title: (_a = category.value) == null ? void 0 : _a.meta_title,
      meta_description: (_b = category.value) == null ? void 0 : _b.meta_description,
      meta_keywords: (_c = category.value) == null ? void 0 : _c.meta_keywords,
      image_url: getImageURL((_d = category.value) == null ? void 0 : _d.image)
    }));
    const categoryTitle = computed(() => {
      return category.value.title;
    });
    const fetchingProductData = ref(false);
    const fetchingData = async () => {
      fetchingProductData.value = true;
      if (route.params.category !== category.value.slug) {
        return false;
      }
      emptyProducts();
      const result = await fetchCategoryData();
      setProducts(result);
      fetchingProductData.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_product_list = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(category)) {
        _push(ssrRenderComponent(_component_product_list, {
          "result-title": categoryTitle.value,
          "has-breadcrumb": true,
          categories: [unref(category)],
          "fetching-product-data": unref(fetchingProductData),
          onFetchData: fetchingData
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/all/[category]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DuBSt11d.mjs.map
