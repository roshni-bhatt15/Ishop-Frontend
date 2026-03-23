import __nuxt_component_0 from './Breadcrumb-wLTDRst4.mjs';
import { withAsyncContext, computed, defineAsyncComponent, resolveDirective, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList } from 'vue/server-renderer';
import { a as useCommonStore, i as useRoute, u as useLanguageStore, d as useHead, g as useConstants, j as _export_sfc, h as __nuxt_component_0$1 } from './server.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { storeToRefs } from 'pinia';
import { u as useAsyncData } from './asyncData-LCoVf7VD.mjs';
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

const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const _sfc_main$2 = {
  name: "SitemapItem",
  data() {
    return {};
  },
  mixins: [util],
  watch: {},
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {},
  methods: {}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "item" }, _attrs))}><!--[-->`);
  ssrRenderList($props.categories, (category, i) => {
    _push(`<div class="category"><h4 class="title">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: _ctx.categoryLink(category)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(category.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(category.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h4><div class="content"><!--[-->`);
    ssrRenderList(category.public_sub_categories, (subCat, j) => {
      _push(`<div class="sub-category"><h4>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.subCategoryLink(subCat, category)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(subCat.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(subCat.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</h4><!--[-->`);
      ssrRenderList(subCat.products, (product, k) => {
        _push(`<div class="product"><p>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: _ctx.productLink(product),
          class: "ellipsis ellipsis-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(product.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(product.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</p></div>`);
      });
      _push(`<!--]--></div>`);
    });
    _push(`<!--]--></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SitemapItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SitemapItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const SitemapItem$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SitemapItem
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  name: "Sitemap",
  components: { Breadcrumb: __nuxt_component_0, SitemapItem },
  data() {
    return {};
  },
  mixins: [util],
  watch: {},
  props: {
    pageTitle: {
      type: String,
      default: ""
    },
    page: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {},
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_breadcrumb = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_breadcrumb, { page: $props.pageTitle }, null, _parent));
  _push(`<h1>${ssrInterpolate(_ctx.$t("sitemap.find"))}</h1><p class="mtb-10 f-12">${ssrInterpolate(_ctx.$t("sitemap.stock"))}</p><div class="mb-30 mb-sm-20"><h3 class="mb-20 mb-sm-15">${ssrInterpolate(_ctx.$t("searchPopup.categories"))}</h3><div class="flex gap-15 wrap start"><!--[-->`);
  ssrRenderList($props.page.categories, (value, index) => {
    _push(`<div><p class="title">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: _ctx.categoryLink(value)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(value.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(value.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</p></div>`);
  });
  _push(`<!--]--></div></div><div class=""><h3 class="mb-20 mb-sm-15">${ssrInterpolate(_ctx.$t("searchPopup.products"))}</h3><div class="flex gap-15 wrap start"><!--[-->`);
  ssrRenderList($props.page.products, (value, index) => {
    _push(`<div><p class="title">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: _ctx.productLink(value)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(value.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(value.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</p></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sitemap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Sitemap = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const Sitemap$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sitemap
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d;
    let __temp, __restore;
    const commonStore = useCommonStore();
    const { customScripts, site_setting } = storeToRefs(commonStore);
    const route = useRoute();
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const { data: page, pending, error } = ([__temp, __restore] = withAsyncContext(async () => {
      var _a2;
      return useAsyncData(`page-${(_a2 = route == null ? void 0 : route.params) == null ? void 0 : _a2.slug}`, async () => {
        var _a3;
        const { unAuthGet } = commonStore;
        const response = await unAuthGet({
          api: "page",
          params: `/${(_a3 = route == null ? void 0 : route.params) == null ? void 0 : _a3.slug}`,
          lang: langCode.value
        });
        return response.data;
      });
    }), __temp = await __temp, __restore(), __temp);
    const { pageMeta } = useMetaData();
    useHead(pageMeta({
      meta_title: (_a = page.value) == null ? void 0 : _a.meta_title,
      meta_description: (_b = page.value) == null ? void 0 : _b.meta_description,
      meta_keywords: (_c = page.value) == null ? void 0 : _c.meta_keywords,
      image_url: (_d = site_setting.value) == null ? void 0 : _d.image_url
    }));
    const pageDescription = computed(() => {
      var _a2;
      return ((_a2 = page.value) == null ? void 0 : _a2.description) || null;
    });
    const currentComponent = computed(() => {
      return defineAsyncComponent(() => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../components/AccountLayout.vue": () => import('./AccountLayout-CBcflmtQ.mjs'), "../../components/AddressPopup.vue": () => import('./AddressPopup-B1XjXnqS.mjs'), "../../components/AjaxButton.vue": () => import('./AjaxButton-DzViXcHL.mjs'), "../../components/BankPopup.vue": () => import('./BankPopup-DJtffZxX.mjs'), "../../components/Banner.vue": () => import('./Banner-BuJz601-.mjs'), "../../components/BrandTile.vue": () => import('./BrandTile-D3DrIMuS.mjs'), "../../components/BrandsFeatured.vue": () => import('./BrandsFeatured-DaVB-n_d.mjs'), "../../components/Breadcrumb.vue": () => import('./Breadcrumb-wLTDRst4.mjs'), "../../components/CartList.vue": () => import('./CartList-sedxDV_N.mjs'), "../../components/CartProductTile.vue": () => import('./CartProductTile-CcN_qkNj.mjs'), "../../components/CartStickyBtn.vue": () => import('./CartStickyBtn-D39G1hRB.mjs'), "../../components/CategoryListingLayout.vue": () => import('./CategoryListingLayout-BvbYA84j.mjs'), "../../components/CategoryTile.vue": () => import('./CategoryTile-pD_IsUIV.mjs'), "../../components/CheckoutRight.vue": () => import('./CheckoutRight-BeiQ3uzp.mjs'), "../../components/CommonFooter.vue": () => import('./CommonFooter-BicVHNBP.mjs'), "../../components/CommonHeader.vue": () => import('./CommonHeader-LAPQA1jd.mjs'), "../../components/ComparedTile.vue": () => import('./ComparedTile-DVfVk_h_.mjs'), "../../components/Contact.vue": () => import('./Contact-C0dY6xHM.mjs'), "../../components/Countdown.vue": () => import('./Countdown-BmVJhrfs.mjs'), "../../components/DetailRight.vue": () => import('./DetailRight-CDTwD_JR.mjs'), "../../components/Discover.vue": () => import('./Discover-B17w9pZ8.mjs'), "../../components/Dropdown.vue": () => import('./Dropdown-CUjYMb0K.mjs'), "../../components/ErrorHandler.vue": () => import('./ErrorHandler-JOumkKzj.mjs'), "../../components/Featured.vue": () => import('./Featured-DiVCKhqy.mjs'), "../../components/FilterBrand.vue": () => import('./FilterBrand-BmteqgJl.mjs'), "../../components/FilterCategory-3.vue": () => import('./FilterCategory-3-B3q455Xo.mjs'), "../../components/FilterCategory.vue": () => import('./FilterCategory-DFocfuH1.mjs'), "../../components/FilterCategory2.vue": () => import('./FilterCategory2-DkbFezbX.mjs'), "../../components/FilterCollection.vue": () => import('./FilterCollection--r9eDqOk.mjs'), "../../components/FilterPrice.vue": () => import('./FilterPrice-BDxDFIEZ.mjs'), "../../components/FilterRating.vue": () => import('./FilterRating-DLKxXJ_u.mjs'), "../../components/FilterShipping.vue": () => import('./FilterShipping-tD0qyesP.mjs'), "../../components/FlashProductTile.vue": () => import('./FlashProductTile-yEuXp-at.mjs'), "../../components/FlashSale.vue": () => import('./FlashSale-C6ZiTiZY.mjs'), "../../components/FlutterwavePayBtn.vue": () => import('./FlutterwavePayBtn-Co9vVLle.mjs'), "../../components/FollowBtn.vue": () => import('./FollowBtn-DRaJlaSD.mjs'), "../../components/FooterTreeNode.vue": () => import('./FooterTreeNode-DEGfnUrz.mjs'), "../../components/HomeHero.vue": () => import('./HomeHero-DBRFAwWc.mjs'), "../../components/ImageLazy.vue": () => import('./ImageLazy-C91HtcbD.mjs'), "../../components/ImagePopup.vue": () => import('./ImagePopup-B797CJ91.mjs'), "../../components/ImagePopup_2.vue": () => import('./ImagePopup_2-CEvLVY4U.mjs'), "../../components/ImageSlider.vue": () => import('./ImageSlider-ByQM7FE3.mjs'), "../../components/ImageSlider2.vue": () => import('./ImageSlider2-Cjhfa-J_.mjs'), "../../components/ImageZoom.vue": () => import('./ImageZoom-DPoiLqVR.mjs'), "../../components/IyzicoPayment.vue": () => import('./IyzicoPayment-CDjyEdX6.mjs'), "../../components/ListingLayout.vue": () => import('./ListingLayout-DrCUkE5G.mjs'), "../../components/LoadSection.vue": () => import('./LoadSection-TWk7nJFC.mjs'), "../../components/OrderCancelPopup.vue": () => import('./OrderCancelPopup-CBW4UOX9.mjs'), "../../components/OrderTabbing.vue": () => import('./OrderTabbing-Dq7M6Url.mjs'), "../../components/OrderedProduct.vue": () => import('./OrderedProduct-CzRQcjOC.mjs'), "../../components/OrderedStatus.vue": () => import('./OrderedStatus-xemSBeYJ.mjs'), "../../components/Pagination.vue": () => import('./Pagination-1kX6F26r.mjs'), "../../components/PasswordField.vue": () => import('./PasswordField-DoDe4gf3.mjs'), "../../components/PayButton.vue": () => import('./PayButton-5k60Ggt4.mjs'), "../../components/PaymentGateways.vue": () => import('./PaymentGateways-DcJBOKM7.mjs'), "../../components/PaymentPopup.vue": () => import('./PaymentPopup-CgOZB-_O.mjs'), "../../components/PopOver.vue": () => import('./PopOver-CEd84c-C.mjs'), "../../components/PriceFormat.vue": () => import('./PriceFormat-BQp9_8mt.mjs'), "../../components/ProductBanner.vue": () => import('./ProductBanner-BRHLAVOA.mjs'), "../../components/ProductImages.vue": () => import('./ProductImages-mymLTfsU.mjs'), "../../components/ProductImages_2.vue": () => import('./ProductImages_2-jtxZyt9z.mjs'), "../../components/ProductList.vue": () => import('./ProductList-BMKndfQw.mjs'), "../../components/ProductReview.vue": () => import('./ProductReview-CmJt6RpW.mjs'), "../../components/ProductTile.vue": () => import('./ProductTile-B00mx6gH.mjs'), "../../components/ProductsDynamic.vue": () => import('./ProductsDynamic-qe8UFoC_.mjs'), "../../components/ProductsSlider.vue": () => import('./ProductsSlider--ZBYBKrc.mjs'), "../../components/QuantityNav.vue": () => import('./QuantityNav-BsBh_DF4.mjs'), "../../components/RatePopup.vue": () => import('./RatePopup-uo9eUqs5.mjs'), "../../components/RatingStar.vue": () => import('./RatingStar-DUn_scU4.mjs'), "../../components/RazorpayPayment.vue": () => import('./RazorpayPayment-CqxnzU4N.mjs'), "../../components/SearchPopup.vue": () => import('./SearchPopup-DVUCGtkv.mjs'), "../../components/SearchedProductTile.vue": () => import('./SearchedProductTile-C0cfEThI.mjs'), "../../components/ShippingAddressPopup.vue": () => import('./ShippingAddressPopup-BfUZG0xZ.mjs'), "../../components/SiteFeature.vue": () => import('./SiteFeature-Y5o5rWoO.mjs'), "../../components/Sitemap.vue": () => Promise.resolve().then(function() {
        return Sitemap$1;
      }), "../../components/SitemapItem.vue": () => Promise.resolve().then(function() {
        return SitemapItem$1;
      }), "../../components/SocialShare.vue": () => import('./SocialShare-CVzFsphV.mjs'), "../../components/SortBy.vue": () => import('./SortBy-C3lLDPnF.mjs'), "../../components/Spinner.vue": () => import('./Spinner-CfK0SFd4.mjs'), "../../components/StaticSection.vue": () => import('./StaticSection-Davrn8fR.mjs'), "../../components/StoreTile.vue": () => import('./StoreTile-qfPzOBxa.mjs'), "../../components/StripePayment.vue": () => import('./StripePayment-Y640db4U.mjs'), "../../components/SubCategoryTile.vue": () => import('./SubCategoryTile-YC2vuUC-.mjs'), "../../components/Subscription.vue": () => import('./Subscription-BKr6n7ic.mjs'), "../../components/SuggestedAjaxSlider.vue": () => import('./SuggestedAjaxSlider-0ofB_iEU.mjs'), "../../components/SuggestedProducts.vue": () => import('./SuggestedProducts-I5nvyjXN.mjs'), "../../components/TileShimmer.vue": () => import('./TileShimmer-CoHt9eD1.mjs'), "../../components/ToastMessage.vue": () => import('./ToastMessage-DLdJYyBP.mjs'), "../../components/TreeNode.vue": () => import('./TreeNode-BtlE5zWY.mjs'), "../../components/UserAddress.vue": () => import('./UserAddress-DLDK1urt.mjs').then(function(n) {
        return n.U;
      }), "../../components/Vouchers.vue": () => import('./Vouchers-CXRMlOqV.mjs') }), `../../components/${pageDescription.value}.vue`, 4));
    });
    computed(() => {
      var _a2;
      return ((_a2 = page.value) == null ? void 0 : _a2.categories) || null;
    });
    const isSitemap = computed(() => {
      var _a2;
      return ((_a2 = page.value) == null ? void 0 : _a2.description) === "Sitemap";
    });
    const pageTitle = computed(() => {
      var _a2;
      return ((_a2 = page.value) == null ? void 0 : _a2.title) || "";
    });
    const { status } = useConstants();
    const isPageFromComponent = computed(() => {
      var _a2;
      return parseInt((_a2 = page.value) == null ? void 0 : _a2.page_from_component) === parseInt(status.PUBLIC);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_breadcrumb = __nuxt_component_0;
      const _directive_dompurify_html = resolveDirective("dompurify-html");
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-20 pb-30 pb-sm-20" }, _attrs))}>`);
      if (isSitemap.value) {
        _push(ssrRenderComponent(unref(Sitemap), {
          "page-title": pageTitle.value,
          page: unref(page)
        }, null, _parent));
      } else if (isPageFromComponent.value) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(currentComponent.value), { "page-title": pageTitle.value }, null), _parent);
      } else {
        _push(`<div class="mtb-20 mtb-sm-15 html-render"><div class="container">`);
        _push(ssrRenderComponent(_component_breadcrumb, { page: pageTitle.value }, null, _parent));
        _push(`<div${ssrRenderAttrs(_temp0 = mergeProps({ class: "editor" }, ssrGetDirectiveProps(_ctx, _directive_dompurify_html, pageDescription.value)))}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : (_a2 = _temp0.innerHTML) != null ? _a2 : ""}</div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-BlytNQe6.mjs.map
