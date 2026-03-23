import _sfc_main$1 from './ProductList-BMKndfQw.mjs';
import { toRefs, ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as useCommonStore, u as useLanguageStore, i as useRoute, p as prepareGetUrl } from './server.mjs';
import { u as useListingStore } from './listing-DfEq-fQC.mjs';
import { storeToRefs } from 'pinia';
import './FilterCategory-DFocfuH1.mjs';
import './TreeNode-BtlE5zWY.mjs';
import './util-D0P5KPFP.mjs';
import './FilterPrice-BDxDFIEZ.mjs';
import './FilterRating-DLKxXJ_u.mjs';
import './RatingStar-DUn_scU4.mjs';
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
  __name: "ListingLayout",
  __ssrInlineRender: true,
  props: {
    productParams: {
      type: Object,
      default() {
        return {};
      }
    },
    resultTitle: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const { productParams, resultTitle } = toRefs(props);
    const listingStore = useListingStore();
    const { brands, shippingRules, collections, allCategories } = storeToRefs(listingStore);
    const { emptyProducts, setProducts } = listingStore;
    const commonStore = useCommonStore();
    const { unAuthGet } = commonStore;
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const route = useRoute();
    const sourceTitle = ref("");
    const products = ref(null);
    const fetchingProductData = ref(false);
    const productListRef = ref(null);
    const fetchingData = async () => {
      var _a, _b, _c, _d;
      fetchingProductData.value = true;
      const data = await unAuthGet({
        params: `?${prepareGetUrl({
          ...productParams.value,
          ...{
            sortby: route.query.sortby || "",
            shipping: route.query.shipping || "",
            brand: route.query.brand || "",
            collection: route.query.collection || "",
            rating: route.query.rating || 0,
            max: ((_a = route.query) == null ? void 0 : _a.max) || 0,
            min: ((_b = route.query) == null ? void 0 : _b.min) || 0,
            q: route.query.q || "",
            page: route.query.page || "",
            all_categories: !allCategories.value,
            sidebar_data: !brands.value || !shippingRules.value || !collections.value
          }
        })}`,
        lang: langCode.value,
        api: "products"
      });
      sourceTitle.value = (_d = (_c = data.data) == null ? void 0 : _c.source) == null ? void 0 : _d.title;
      setProducts(data);
      products.value = data.data.result;
      fetchingProductData.value = false;
    };
    watch(() => route.query, async () => {
      emptyProducts();
      await fetchingData();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_product_list = _sfc_main$1;
      _push(ssrRenderComponent(_component_product_list, mergeProps({
        ref_key: "productListRef",
        ref: productListRef,
        categories: unref(allCategories),
        "result-title": unref(sourceTitle) || unref(resultTitle),
        "product-params": unref(productParams),
        "back-btn": false,
        "fetching-product-data": unref(fetchingProductData)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ListingLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ListingLayout-DrCUkE5G.mjs.map
