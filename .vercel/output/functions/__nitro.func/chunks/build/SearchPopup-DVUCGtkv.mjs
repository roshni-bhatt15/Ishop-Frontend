import __nuxt_component_1 from './Spinner-CfK0SFd4.mjs';
import { u as useLanguageStore, a as useCommonStore, i as useRoute, f as useUtils, p as prepareGetUrl, h as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$1 from './ImageLazy-C91HtcbD.mjs';
import _sfc_main$2 from './SearchedProductTile-C0cfEThI.mjs';
import { watch, computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { storeToRefs } from 'pinia';
import debounce from 'debounce';
import { u as useListingStore } from './listing-DfEq-fQC.mjs';
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
import './PriceFormat-BQp9_8mt.mjs';
import './util-D0P5KPFP.mjs';
import './usePriceHelper-DzuasYxT.mjs';
import './useCompareHelper-of9z6jwL.mjs';
import './detail-CmpxRn50.mjs';

const _sfc_main = {
  __name: "SearchPopup",
  __ssrInlineRender: true,
  props: {
    searchedText: {
      type: String,
      default: ""
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const listingStore = useListingStore();
    const { searchedSuggestion, searched } = storeToRefs(listingStore);
    const { fetchSearchedSuggestion, updateSearch, setSearchedSuggestion } = listingStore;
    const commonStore = useCommonStore();
    const { unAuthGet } = commonStore;
    useRoute();
    const handleSearch = debounce((value) => {
      if (value) {
        fetchData();
      } else {
        emit("close");
      }
    }, 700);
    watch(() => props.searchedText, (value) => {
      handleSearch(value);
    });
    const { getImageURL, categoryLink } = useUtils();
    const matchedResult = computed(() => {
      return products.value.length || suggested.value.length || categories.value.length;
    });
    const products = computed(() => {
      var _a;
      return ((_a = searchedSuggestion.value) == null ? void 0 : _a.product) || [];
    });
    const suggested = computed(() => {
      var _a;
      return ((_a = searchedSuggestion.value) == null ? void 0 : _a.suggested) || [];
    });
    const categories = computed(() => {
      var _a;
      return ((_a = searchedSuggestion.value) == null ? void 0 : _a.category) || [];
    });
    const fetchingData = ref(false);
    const fetchData = async () => {
      fetchingData.value = true;
      const data = await unAuthGet({
        api: "search",
        params: `?${prepareGetUrl({ q: props.searchedText })}`,
        lang: langCode.value
      });
      fetchingData.value = false;
      setSearchedSuggestion(data.data);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_spinner = __nuxt_component_1;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_ImageLazy = _sfc_main$1;
      const _component_SearchedProductTile = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "search-popup" }, _attrs))}><div class="sb popup-inner"><div class="pop-over-content">`);
      if (unref(fetchingData)) {
        _push(`<div class="spinner-wrapper flex layer-white">`);
        _push(ssrRenderComponent(_component_spinner, { radius: 100 }, null, _parent));
        _push(`</div>`);
      } else if (unref(matchedResult)) {
        _push(`<div>`);
        if (unref(suggested).length) {
          _push(`<div class="mb-15"><h4 class="bold">${ssrInterpolate(_ctx.$t("searchPopup.suggestedSearch"))}</h4><div class="search-section"><!--[-->`);
          ssrRenderList(unref(suggested), (value, index) => {
            _push(`<button class="item lite-btn" aria-label="search">${ssrInterpolate(value.title)}</button>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(categories).length) {
          _push(`<div class="mb-15"><h4 class="bold">${ssrInterpolate(_ctx.$t("searchPopup.categories"))}</h4><div class="search-section category-wrapper"><!--[-->`);
          ssrRenderList(unref(categories), (value, index) => {
            _push(ssrRenderComponent(_component_nuxt_link, {
              key: `c-${index}`,
              to: unref(categoryLink)(value),
              class: "page-link center-text item"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="img-wrapper"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_ImageLazy, {
                    "lazy-src": unref(getImageURL)(value.image),
                    title: value.title,
                    alt: value.title,
                    height: "50",
                    width: "50"
                  }, null, _parent2, _scopeId));
                  _push2(`</div><h5 class="title ellipsis ellipsis-1"${_scopeId}>${ssrInterpolate(value.title)}</h5>`);
                } else {
                  return [
                    createVNode("div", { class: "img-wrapper" }, [
                      createVNode(_component_ImageLazy, {
                        "lazy-src": unref(getImageURL)(value.image),
                        title: value.title,
                        alt: value.title,
                        height: "50",
                        width: "50"
                      }, null, 8, ["lazy-src", "title", "alt"])
                    ]),
                    createVNode("h5", { class: "title ellipsis ellipsis-1" }, toDisplayString(value.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(products).length) {
          _push(`<div class="mb-15"><h4 class="bold">${ssrInterpolate(_ctx.$t("searchPopup.products"))}</h4><div class="search-section search-product-tile"><!--[-->`);
          ssrRenderList(unref(products), (value, index) => {
            _push(ssrRenderComponent(_component_SearchedProductTile, {
              key: `prod-${index}`,
              product: value
            }, null, _parent));
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div><h4>${ssrInterpolate(_ctx.$t("searchPopup.nothingFound"))} &quot;<span class="color-primary semi-bold">${ssrInterpolate(props.searchedText)}</span>&quot;</h4></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchPopup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SearchPopup-DVUCGtkv.mjs.map
