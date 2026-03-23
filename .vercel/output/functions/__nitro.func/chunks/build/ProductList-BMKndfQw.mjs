import { a as useCommonStore, i as useRoute, e as useRouter, c as useI18n, _ as __nuxt_component_0$2 } from './server.mjs';
import __nuxt_component_1 from './FilterCategory-DFocfuH1.mjs';
import __nuxt_component_2 from './FilterPrice-BDxDFIEZ.mjs';
import __nuxt_component_3 from './FilterRating-DLKxXJ_u.mjs';
import __nuxt_component_4 from './FilterBrand-BmteqgJl.mjs';
import __nuxt_component_5 from './FilterCollection--r9eDqOk.mjs';
import __nuxt_component_6 from './FilterShipping-tD0qyesP.mjs';
import __nuxt_component_0 from './Breadcrumb-wLTDRst4.mjs';
import __nuxt_component_1$1 from './TileShimmer-CoHt9eD1.mjs';
import _sfc_main$1 from './ProductTile-B00mx6gH.mjs';
import __nuxt_component_3$1 from './Pagination-1kX6F26r.mjs';
import { ref, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { u as useListingStore } from './listing-DfEq-fQC.mjs';
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
import './TreeNode-BtlE5zWY.mjs';
import './util-D0P5KPFP.mjs';
import './RatingStar-DUn_scU4.mjs';
import './ImageLazy-C91HtcbD.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './useCompareHelper-of9z6jwL.mjs';
import './usePriceHelper-DzuasYxT.mjs';
import './detail-CmpxRn50.mjs';

const _sfc_main = {
  __name: "ProductList",
  __ssrInlineRender: true,
  props: {
    categories: {
      type: Array,
      default: []
    },
    backBtn: {
      type: Boolean,
      default: true
    },
    hasBreadcrumb: {
      type: Boolean,
      default: false
    },
    slugs: {
      type: Array,
      default() {
        return [];
      }
    },
    fetchingProductData: {
      type: Boolean,
      default: false
    },
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
  emits: ["fetch-data"],
  setup(__props, { emit: __emit }) {
    const listingStore = useListingStore();
    const { products, brands, shippingRules, collections } = storeToRefs(listingStore);
    const commonStore = useCommonStore();
    const { currencyIcon, setting } = storeToRefs(commonStore);
    const route = useRoute();
    const router = useRouter();
    const { t } = useI18n();
    ref(false);
    const filterPopup = ref(true);
    ref({
      featured: { title: t("featured.featured") },
      price_low_to_high: { title: t("listingLayout.priceLowToHigh") },
      price_high_to_low: { title: t("listingLayout.priceHighToLow") },
      avg_customer_review: { title: t("listingLayout.avgCustomerReview") }
    });
    const sortby = ref(route.query.sortby || "");
    computed(() => {
      var _a, _b, _c, _d;
      let count = 0;
      if ((_a = route.query) == null ? void 0 : _a.shipping) {
        count++;
      }
      if ((_b = route.query) == null ? void 0 : _b.rating) {
        count++;
      }
      if ((_c = route.query) == null ? void 0 : _c.min) {
        count++;
      }
      if ((_d = route.query) == null ? void 0 : _d.max) {
        count++;
      }
      return count;
    });
    const isXsDevice = computed(() => {
      return void 0;
    });
    const pageHeading = computed(() => {
      var _a, _b, _c, _d;
      if (products.value) {
        if (((_a = products.value) == null ? void 0 : _a.total) > 0) {
          return t("listingLayout.paginationResult", {
            from: (_b = products.value) == null ? void 0 : _b.from,
            to: (_c = products.value) == null ? void 0 : _c.to,
            total: (_d = products.value) == null ? void 0 : _d.total
          });
        }
      }
      return t("listingLayout.showingResult");
    });
    const currentItems = computed(() => {
      var _a;
      return ((_a = products.value) == null ? void 0 : _a.data) || null;
    });
    const totalPage = computed(() => {
      var _a;
      return (_a = products.value) == null ? void 0 : _a.last_page;
    });
    const closeFilter = () => {
      filterPopup.value = false;
      (void 0).body.classList.remove("no-scroll");
    };
    const productPaginationRef = ref(null);
    const clearSortby = () => {
      sortby.value = "featured";
    };
    const filterPriceRef = ref(null);
    const filterShippingRef = ref(null);
    const filterRatingRef = ref(null);
    const clearQuery = () => {
      var _a, _b, _c;
      (_a = filterPriceRef.value) == null ? void 0 : _a.clearPrice();
      (_b = filterShippingRef.value) == null ? void 0 : _b.clearShipping();
      clearSortby();
      (_c = filterRatingRef.value) == null ? void 0 : _c.clearRating();
      if (isXsDevice.value) {
        closeFilter();
      }
    };
    const changeRoute = (evt) => {
      var _a;
      (_a = productPaginationRef.value) == null ? void 0 : _a.resettingRoute(evt);
      fetchingData();
    };
    const goingNext = (url) => {
      clearQuery();
      if (url === route.path) {
        router.push({
          query: {}
        });
        fetchingData();
      } else {
        router.push({ path: url });
      }
    };
    const fetchingData = () => {
      (void 0).scrollTo(0, 0);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$2;
      const _component_filter_category = __nuxt_component_1;
      const _component_filter_price = __nuxt_component_2;
      const _component_filter_rating = __nuxt_component_3;
      const _component_filter_brand = __nuxt_component_4;
      const _component_filter_collection = __nuxt_component_5;
      const _component_filter_shipping = __nuxt_component_6;
      const _component_breadcrumb = __nuxt_component_0;
      const _component_tile_shimmer = __nuxt_component_1$1;
      const _component_product_tile = _sfc_main$1;
      const _component_pagination = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="detail-menu"><div class="container-fluid"><div class="list-heading flex sided"><p class="hide-sm">${ssrInterpolate(pageHeading.value)} `);
      if (__props.resultTitle) {
        _push(`<span>${ssrInterpolate(_ctx.$t("listingLayout.for"))} <span class="bold"> &quot;${ssrInterpolate(__props.resultTitle)}&quot; </span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p><div class="flex gap-5"><span class="hide-sm">${ssrInterpolate(_ctx.$t("listingLayout.sortBy"))}</span>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div></div></div><div class="container-fluid mtb-20 mtb-sm-15"><div class="product-list"><div style="${ssrRenderStyle(unref(filterPopup) ? null : { display: "none" })}" class="left-area"><div class="layer"></div><div class="sticky"><div class="close-btn-wrapper"><button aria-label="submit">${ssrInterpolate(_ctx.$t("listingLayout.close"))}</button></div><div class="sidebar">`);
      if (__props.backBtn) {
        _push(`<button class="flex start mb-15 clear-btn"><span class="flex"><i class="dimen-16x icon double-arrow-left-icon mr-5 opacity-6"></i> ${ssrInterpolate(_ctx.$t("date.gb"))}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_filter_category, {
        ref: "filterCategory",
        categories: __props.categories,
        onGoingNext: goingNext
      }, null, _parent));
      _push(ssrRenderComponent(_component_filter_price, {
        ref_key: "filterPriceRef",
        ref: filterPriceRef,
        onResetRoute: changeRoute
      }, null, _parent));
      _push(ssrRenderComponent(_component_filter_rating, {
        ref_key: "filterRatingRef",
        ref: filterRatingRef,
        onResetRoute: changeRoute
      }, null, _parent));
      _push(ssrRenderComponent(_component_filter_brand, {
        ref: "filterBrand",
        brands: unref(brands),
        onResetRoute: changeRoute
      }, null, _parent));
      _push(ssrRenderComponent(_component_filter_collection, {
        ref: "filterCollection",
        collections: unref(collections),
        onResetRoute: changeRoute
      }, null, _parent));
      _push(ssrRenderComponent(_component_filter_shipping, {
        ref_key: "filterShippingRef",
        ref: filterShippingRef,
        "shipping-rules": unref(shippingRules),
        onResetRoute: changeRoute
      }, null, _parent));
      _push(`</div></div></div><div class="main-content">`);
      if (__props.hasBreadcrumb) {
        _push(ssrRenderComponent(_component_breadcrumb, {
          class: "mb-15 mt-0",
          page: __props.resultTitle,
          slugs: __props.slugs
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.fetchingProductData) {
        _push(`<div class="tile-container"><div class="shimmer-wrapper"><!--[-->`);
        ssrRenderList(20, (index) => {
          _push(ssrRenderComponent(_component_tile_shimmer, { key: index }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div class="pos-rel">`);
        if (currentItems.value && !currentItems.value.length) {
          _push(`<div class="info-msg">${ssrInterpolate(_ctx.$t("listingLayout.noProductFound"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="hide block-sm ml-10 ml-xs-5 mb-10">${ssrInterpolate(pageHeading.value)} `);
        if (__props.resultTitle) {
          _push(`<span class="bold">&quot;${ssrInterpolate(__props.resultTitle)}&quot;</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p><div class="tile-container"><!--[-->`);
        ssrRenderList(currentItems.value, (value, index) => {
          _push(ssrRenderComponent(_component_product_tile, {
            key: index,
            product: value
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(_component_pagination, {
          class: "mt-30",
          ref_key: "productPaginationRef",
          ref: productPaginationRef,
          "total-page": totalPage.value
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProductList-BMKndfQw.mjs.map
