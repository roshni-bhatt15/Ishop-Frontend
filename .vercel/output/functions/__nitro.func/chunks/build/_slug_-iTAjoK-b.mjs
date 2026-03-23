import _sfc_main$1 from './FollowBtn-DRaJlaSD.mjs';
import __nuxt_component_0 from './Breadcrumb-wLTDRst4.mjs';
import _sfc_main$2 from './SortBy-C3lLDPnF.mjs';
import __nuxt_component_1 from './TileShimmer-CoHt9eD1.mjs';
import _sfc_main$3 from './ProductTile-B00mx6gH.mjs';
import __nuxt_component_3 from './Pagination-1kX6F26r.mjs';
import { ref, withAsyncContext, computed, watch, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import moment from 'moment';
import { a as useCommonStore, u as useLanguageStore, i as useRoute, f as useUtils, d as useHead, p as prepareGetUrl } from './server.mjs';
import { storeToRefs } from 'pinia';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
import { u as useAsyncData } from './asyncData-LCoVf7VD.mjs';
import './AjaxButton-DzViXcHL.mjs';
import './Spinner-CfK0SFd4.mjs';
import './ImageLazy-C91HtcbD.mjs';
import './RatingStar-DUn_scU4.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './util-D0P5KPFP.mjs';
import './useCompareHelper-of9z6jwL.mjs';
import './usePriceHelper-DzuasYxT.mjs';
import './detail-CmpxRn50.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const commonStore = useCommonStore();
    const { ssrGetRequest, unAuthGet, postRequest } = commonStore;
    const { customScripts } = storeToRefs(commonStore);
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    ref(null);
    const fetchingProductData = ref(false);
    const route = useRoute();
    const following = ref(false);
    const products = ref(null);
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`flash-sale`, async () => {
      var _a2;
      const { unAuthGet: unAuthGet2 } = commonStore;
      const response = await unAuthGet2({
        api: "store",
        params: `?${prepareGetUrl({
          slug: (_a2 = route == null ? void 0 : route.params) == null ? void 0 : _a2.slug,
          sortby: route.query.sortby || "",
          page: route.query.page || "",
          required_rating: true
        })}`,
        lang: langCode.value
      });
      return response.data;
    })), __temp = await __temp, __restore(), __temp);
    const toggleFollowing = () => {
      following.value = !following.value;
    };
    products.value = (_a = data.value) == null ? void 0 : _a.result;
    const { pageMeta } = useMetaData();
    const { getImageURL, formatPrice } = useUtils();
    const { review, store } = data.value;
    following.value = data.value.following;
    useHead(pageMeta({
      meta_title: store == null ? void 0 : store.meta_title,
      meta_description: store == null ? void 0 : store.meta_description,
      meta_keywords: store == null ? void 0 : store.meta_keywords,
      image_url: getImageURL(store == null ? void 0 : store.image)
    }));
    const storeId = computed(() => {
      return store == null ? void 0 : store.id;
    });
    const storeDate = computed(() => {
      return moment(store == null ? void 0 : store.created_at).format("MMM DD, YYYY");
    });
    const currentItems = computed(() => {
      var _a2;
      return ((_a2 = products.value) == null ? void 0 : _a2.data) || null;
    });
    const totalPage = computed(() => {
      var _a2;
      return (_a2 = products.value) == null ? void 0 : _a2.last_page;
    });
    const productPagination = ref(null);
    const shortByChanged = (filtered) => {
      var _a2;
      (_a2 = productPagination.value) == null ? void 0 : _a2.resettingRoute(filtered);
    };
    watch(() => route.query, async () => {
      await fetchingData();
    });
    const fetchingData = async () => {
      var _a2, _b;
      fetchingProductData.value = true;
      const data2 = await unAuthGet({
        params: `?${prepareGetUrl({
          slug: (_a2 = route == null ? void 0 : route.params) == null ? void 0 : _a2.slug,
          sortby: route.query.sortby || "",
          page: route.query.page || ""
        })}`,
        api: "store",
        lang: langCode.value
      });
      products.value = (_b = data2 == null ? void 0 : data2.data) == null ? void 0 : _b.result;
      fetchingProductData.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_follow_btn = _sfc_main$1;
      const _component_breadcrumb = __nuxt_component_0;
      const _component_sort_by = _sfc_main$2;
      const _component_tile_shimmer = __nuxt_component_1;
      const _component_product_tile = _sfc_main$3;
      const _component_pagination = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="store-container mb-30 mb-sm-15"><div class="container-fluid"><div class="store-info"><div class="left-area"><div class="img-wrap"><img${ssrRenderAttr("src", unref(getImageURL)(unref(store).image))}${ssrRenderAttr("alt", _ctx.$t("footer.siteLogo"))} height="50" width="50"></div><div class="store-content"><div><h4 class="bold mb-5">${ssrInterpolate(unref(store).name)}</h4>`);
      if (unref(review)) {
        _push(`<h6 class="store-rating ls-0">${ssrInterpolate(_ctx.$t("store.avgRating"))} <b class="f-12 ml-5">${ssrInterpolate(unref(formatPrice)(unref(review)))}</b></h6>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><p class="opacity-8 f-9">${ssrInterpolate(_ctx.$t("store.memberSince"))}</p><h6 class=""><b>${ssrInterpolate(unref(storeDate))}</b></h6></div></div></div><div class="right-area">`);
      _push(ssrRenderComponent(_component_follow_btn, {
        class: "primary-btn w-150x",
        following: unref(following),
        "store-id": unref(storeId),
        onChangeFollowing: toggleFollowing
      }, null, _parent));
      _push(`</div></div></div></div><div class="container-fluid mb-50 mb-sm-20"><div class="flex sided mb-15">`);
      _push(ssrRenderComponent(_component_breadcrumb, {
        class: "mtb-0",
        page: unref(store).name
      }, null, _parent));
      _push(ssrRenderComponent(_component_sort_by, { onFetchingData: shortByChanged }, null, _parent));
      _push(`</div><div class="main-content">`);
      if (unref(fetchingProductData)) {
        _push(`<div class="tile-container"><div class="shimmer-wrapper"><!--[-->`);
        ssrRenderList(20, (index) => {
          _push(ssrRenderComponent(_component_tile_shimmer, { key: index }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div class="pos-rel">`);
        if (unref(currentItems) && !unref(currentItems).length) {
          _push(`<div class="info-msg">${ssrInterpolate(_ctx.$t("listingLayout.noProductFound"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="tile-container"><!--[-->`);
        ssrRenderList(unref(currentItems), (value, index) => {
          _push(ssrRenderComponent(_component_product_tile, {
            key: index,
            product: value
          }, null, _parent));
        });
        _push(`<!--]--></div><div class="flow-hidden">`);
        _push(ssrRenderComponent(_component_pagination, {
          class: "mt-30",
          ref_key: "productPagination",
          ref: productPagination,
          "total-page": unref(totalPage)
        }, null, _parent));
        _push(`</div></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-iTAjoK-b.mjs.map
