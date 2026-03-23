import _sfc_main$1 from './HomeHero-DBRFAwWc.mjs';
import _sfc_main$2 from './StaticSection-Davrn8fR.mjs';
import _sfc_main$3 from './FlashSale-C6ZiTiZY.mjs';
import __nuxt_component_3 from './ProductBanner-BRHLAVOA.mjs';
import _sfc_main$4 from './ProductsSlider--ZBYBKrc.mjs';
import __nuxt_component_5 from './Featured-DiVCKhqy.mjs';
import { u as useLanguageStore, a as useCommonStore, f as useUtils, d as useHead, g as useConstants, h as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$5 from './SearchedProductTile-C0cfEThI.mjs';
import _sfc_main$6 from './Banner-BuJz601-.mjs';
import _sfc_main$7 from './LoadSection-TWk7nJFC.mjs';
import __nuxt_component_10 from './Discover-B17w9pZ8.mjs';
import { withAsyncContext, computed, unref, withCtx, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useHomeStore } from './home-DZI1jLoy.mjs';
import { storeToRefs } from 'pinia';
import { u as useAsyncData } from './asyncData-LCoVf7VD.mjs';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
import './ImageSlider-ByQM7FE3.mjs';
import 'embla-carousel-vue';
import './useSliderHelper-C7WfA-Bc.mjs';
import './SiteFeature-Y5o5rWoO.mjs';
import './ImageLazy-C91HtcbD.mjs';
import './Countdown-BmVJhrfs.mjs';
import 'moment-timezone';
import './FlashProductTile-yEuXp-at.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './util-D0P5KPFP.mjs';
import './usePriceHelper-DzuasYxT.mjs';
import './useCompareHelper-of9z6jwL.mjs';
import './detail-CmpxRn50.mjs';
import './ProductTile-B00mx6gH.mjs';
import './RatingStar-DUn_scU4.mjs';
import './SubCategoryTile-YC2vuUC-.mjs';
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
import './TileShimmer-CoHt9eD1.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const commonStore = useCommonStore();
    const { unAuthGet } = commonStore;
    const { topBanner } = storeToRefs(commonStore);
    const homeStore = useHomeStore();
    const { hasHomeData } = storeToRefs(homeStore);
    const { setHomeData } = homeStore;
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("home", async () => {
      if (hasHomeData.value) {
        return null;
      }
      const response = await unAuthGet({
        api: "home",
        params: "",
        lang: langCode.value
      });
      setHomeData(response);
      return response.data;
    })), __temp = await __temp, __restore(), __temp);
    const { customScripts, site_setting } = storeToRefs(commonStore);
    const { pageMeta, preloadScript } = useMetaData();
    const { getImageURL, collectionLink } = useUtils();
    const {
      featuredCategories,
      flashSales,
      collections,
      featuredBrands,
      slider,
      banners,
      siteFeatures
    } = storeToRefs(homeStore);
    const heroMain = computed(() => {
      return slider.value.main[0];
    });
    const heroRightTop = computed(() => {
      return slider.value.right_top;
    });
    const heroRightBottom = computed(() => {
      return slider.value.right_bottom;
    });
    const getPreloadImages = computed(() => {
      return {
        link: [
          preloadScript(getImageURL(heroMain.value.image), "image"),
          preloadScript(getImageURL(heroRightTop.value.image), "image"),
          preloadScript(getImageURL(heroRightBottom.value.image), "image"),
          preloadScript(getImageURL(topBanner.value.image), "image")
        ]
      };
    });
    useHead({
      ...pageMeta({
        ...site_setting.value,
        ...{ image_url: getImageURL(site_setting.value.header_logo) }
      }),
      ...getPreloadImages.value
    });
    const hasSiteFeatures = computed(() => {
      var _a;
      return (_a = siteFeatures.value) == null ? void 0 : _a.length;
    });
    const banner5 = computed(() => {
      var _a;
      return (_a = bannerData.value) == null ? void 0 : _a.banner5;
    });
    const banner6 = computed(() => {
      var _a;
      return (_a = bannerData.value) == null ? void 0 : _a.banner6;
    });
    computed(() => {
      var _a;
      return (_a = bannerData.value) == null ? void 0 : _a.banner1;
    });
    const productCollection = computed(() => {
      if (collections.value) {
        const col = [...collections.value];
        col == null ? void 0 : col.pop();
        return col;
      }
      return [];
    });
    const productGrid = computed(() => {
      var _a, _b;
      return (_b = (_a = collections.value) == null ? void 0 : _a.slice(-1)) == null ? void 0 : _b.pop();
    });
    const { bannerType } = useConstants();
    const bannerData = computed(() => {
      var _a;
      let banner = {
        banner1: null,
        banner2: null,
        banner3: null,
        banner4: null,
        banner5: null,
        banner6: null
      };
      (_a = banners.value) == null ? void 0 : _a.forEach((i) => {
        banner["banner" + bannerType["BANNER_" + i.type]] = i;
      });
      return banner;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_home_hero = _sfc_main$1;
      const _component_static_section = _sfc_main$2;
      const _component_flashSale = _sfc_main$3;
      const _component_product_banner = __nuxt_component_3;
      const _component_products_slider = _sfc_main$4;
      const _component_featured = __nuxt_component_5;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_SearchedProductTile = _sfc_main$5;
      const _component_banner = _sfc_main$6;
      const _component_LoadSection = _sfc_main$7;
      const _component_discover = __nuxt_component_10;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container-fluid">`);
      _push(ssrRenderComponent(_component_home_hero, {
        slider: unref(slider),
        class: "home-section"
      }, null, _parent));
      if (unref(hasSiteFeatures)) {
        _push(ssrRenderComponent(_component_static_section, { "site-features": unref(siteFeatures) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_flashSale, { "flash-sales": unref(flashSales) }, null, _parent));
      _push(ssrRenderComponent(_component_product_banner, { "banner-data": unref(bannerData) }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(productCollection), (value, index) => {
        _push(ssrRenderComponent(_component_products_slider, {
          key: index,
          collection: value
        }, null, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_featured, {
        class: "category-wrapper",
        title: _ctx.$t("searchPopup.categories"),
        type: "subCategory",
        "item-list": unref(featuredCategories)
      }, null, _parent));
      if (unref(productGrid)) {
        _push(`<div class="area home-section grid-product-wrapper"><div class="flex sided title"><h4>${ssrInterpolate(unref(productGrid).title)}</h4>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "link",
          to: unref(collectionLink)(unref(productGrid))
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("featured.showAll"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("featured.showAll")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="search-product-tile"><!--[-->`);
        ssrRenderList(unref(productGrid).products, (value, index) => {
          _push(ssrRenderComponent(_component_SearchedProductTile, {
            key: `prod-${index}`,
            product: value
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(banner5)) {
        _push(ssrRenderComponent(_component_banner, {
          class: "home-section mb-0 br-primary flow-hidden",
          banner: unref(banner5)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_LoadSection, { class: "mn-h-400x" }, {
        default: withCtx(({ renderArea }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (renderArea) {
              _push2(ssrRenderComponent(_component_discover, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderArea ? (openBlock(), createBlock(_component_discover, { key: 0 })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(banner6)) {
        _push(ssrRenderComponent(_component_banner, {
          class: "home-section mt-0 br-primary flow-hidden",
          banner: unref(banner6)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-bimBWIdB.mjs.map
