import _sfc_main$1 from './CartStickyBtn-D39G1hRB.mjs';
import { a as useCommonStore, c as useI18n, u as useLanguageStore, f as useUtils, h as __nuxt_component_0$1, _ as __nuxt_component_0$2$1, p as prepareGetUrl, d as useHead } from './server.mjs';
import __nuxt_component_0 from './Breadcrumb-wLTDRst4.mjs';
import _sfc_main$2 from './ProductImages-mymLTfsU.mjs';
import __nuxt_component_0$2 from './RatingStar-DUn_scU4.mjs';
import __nuxt_component_5 from './Countdown-BmVJhrfs.mjs';
import PopOver from './PopOver-CEd84c-C.mjs';
import _sfc_main$3 from './Vouchers-CXRMlOqV.mjs';
import _sfc_main$4 from './DetailRight-CDTwD_JR.mjs';
import { ref, withAsyncContext, watchEffect, watch, computed, resolveDirective, unref, withCtx, createTextVNode, toDisplayString, createVNode, mergeProps, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseEqual, ssrGetDirectiveProps } from 'vue/server-renderer';
import { u as useDetailStore } from './detail-CmpxRn50.mjs';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { u as useAsyncData } from './asyncData-LCoVf7VD.mjs';
import { storeToRefs } from 'pinia';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
import { u as useProductHelper } from './useProductHelper-D_nJapxP.mjs';
import './ImageLazy-C91HtcbD.mjs';
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
import './AjaxButton-DzViXcHL.mjs';
import './Spinner-CfK0SFd4.mjs';
import './cart-BePPNdc0.mjs';
import './useCartHelper-Ccthiw5l.mjs';
import './ImageZoom-DPoiLqVR.mjs';
import './ImageSlider-ByQM7FE3.mjs';
import 'embla-carousel-vue';
import './ImagePopup-B797CJ91.mjs';
import './SocialShare-CVzFsphV.mjs';
import './useSliderHelper-C7WfA-Bc.mjs';
import 'moment-timezone';
import './PriceFormat-BQp9_8mt.mjs';
import './util-D0P5KPFP.mjs';
import './Pagination-1kX6F26r.mjs';
import './QuantityNav-BsBh_DF4.mjs';
import './StoreTile-qfPzOBxa.mjs';
import 'moment';
import './FollowBtn-DRaJlaSD.mjs';
import './usePriceHelper-DzuasYxT.mjs';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const commonStore = useCommonStore();
    const { customScripts } = storeToRefs(commonStore);
    const { fetchLocation } = commonStore;
    const detailStore = useDetailStore();
    const { product } = storeToRefs(detailStore);
    const { emptySuggestedProducts, setProduct } = detailStore;
    const userStore = useUserStore();
    const { emptyVoucher } = userStore;
    const { t } = useI18n();
    const detailRightEl = ref(null);
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const { pageMeta, route, preloadScript } = useMetaData();
    const { getThumbImageURL, categoryLink } = useUtils();
    const { unAuthGet } = commonStore;
    const settingMetaData = () => {
      var _a, _b, _c, _d, _e;
      useHead({
        ...pageMeta({
          meta_title: (_a = product.value) == null ? void 0 : _a.meta_title,
          meta_description: (_b = product.value) == null ? void 0 : _b.meta_description,
          meta_keywords: (_c = product.value) == null ? void 0 : _c.meta_keywords,
          image_url: getThumbImageURL((_d = product.value) == null ? void 0 : _d.image)
        }),
        ...{
          link: [
            preloadScript(getThumbImageURL((_e = product.value) == null ? void 0 : _e.image), "image")
          ]
        }
      });
    };
    const fetchingData = async () => {
      return useAsyncData(`product-${route.params.id}`, async () => {
        const response = await unAuthGet({
          api: "product",
          params: `/${route.params.id}?${prepareGetUrl({ id: route.params.id, user_id: "" })}`,
          lang: langCode.value
        });
        setProduct(response.data);
        return response.data;
      });
    };
    {
      [__temp, __restore] = withAsyncContext(() => fetchingData()), await __temp, __restore();
    }
    watchEffect(() => {
      settingMetaData();
    });
    const { refundable, warranty, getPriceType } = useProductHelper();
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (void 0).body.classList.remove("show-cart");
        } else {
          (void 0).body.classList.add("show-cart");
        }
      });
    };
    const detailRightDoc = ref(null);
    const sectionObserver = ref(null);
    const initIntersection = async () => {
      if (detailRightDoc.value) {
        return;
      }
      await nextTick();
      detailRightDoc.value = (void 0).querySelector("#detail-right");
      if (detailRightDoc.value) {
        sectionObserver.value = new IntersectionObserver(handleIntersection, {});
        sectionObserver.value.observe(detailRightDoc.value);
      }
    };
    watch(product, async () => {
      var _a, _b, _c, _d, _e, _f;
      await initIntersection();
      if (((_b = (_a = product.value) == null ? void 0 : _a.inventory) == null ? void 0 : _b.length) === 1 && ((_e = (_d = (_c = product.value) == null ? void 0 : _c.inventory[0]) == null ? void 0 : _d.inventory_attributes) == null ? void 0 : _e.length) === 0) {
        selectedInventory.value = (_f = product.value) == null ? void 0 : _f.inventory[0];
      }
    });
    const clickedAttributes = ref([]);
    const cartError = ref({
      attribute: null,
      quantity: null
    });
    const selectedInventory = ref({});
    ref([]);
    const descriptionExpand = ref(false);
    const optionChange = ref(false);
    const productInventory = ref(null);
    const imagePopup = ref(false);
    ref(true);
    ref(true);
    ref(false);
    const voucherPopOver = ref(false);
    const addWishList = () => {
      detailRightEl.value.wishListAction();
    };
    const description = computed(() => {
      var _a;
      return ((_a = product.value) == null ? void 0 : _a.description) || null;
    });
    const overview = computed(() => {
      var _a;
      return ((_a = product.value) == null ? void 0 : _a.overview) || "";
    });
    const reviewCount = computed(() => {
      var _a;
      return ((_a = product.value) == null ? void 0 : _a.review_count) || 0;
    });
    const productRating = computed(() => {
      var _a;
      return ((_a = product.value) == null ? void 0 : _a.rating) || 0;
    });
    const productImage = computed(() => {
      var _a;
      return ((_a = product.value) == null ? void 0 : _a.image) || null;
    });
    const productImageList = computed(() => {
      var _a;
      return ((_a = product.value) == null ? void 0 : _a.images) || [];
    });
    const endTime = computed(() => {
      var _a;
      return ((_a = product.value) == null ? void 0 : _a.end_time) || null;
    });
    computed(() => {
      return route.params.id;
    });
    const statusPublic = computed(() => {
      var _a;
      return parseInt((_a = product.value) == null ? void 0 : _a.status) === 1;
    });
    computed(() => {
      var _a;
      return (_a = product.value) == null ? void 0 : _a.category;
    });
    const currentCategories = computed(() => {
      var _a;
      return (_a = product.value) == null ? void 0 : _a.current_categories;
    });
    const productTitle = computed(() => {
      var _a;
      return ((_a = product.value) == null ? void 0 : _a.title) || "";
    });
    const preparedSlug = computed(() => {
      var _a, _b;
      return (_b = (_a = categoryData.value) == null ? void 0 : _a.map((i) => {
        return { title: i.title, link: categoryLink(i) };
      })) == null ? void 0 : _b.reverse();
    });
    const categoryData = computed(() => {
      var _a;
      return (_a = product.value) == null ? void 0 : _a.category_data;
    });
    const bundleDeal = computed(() => {
      var _a;
      return (_a = product.value) == null ? void 0 : _a.bundle_deal;
    });
    const isInStock = computed(() => {
      var _a;
      if (optionChange.value) {
        return ((_a = productInventory.value) == null ? void 0 : _a.quantity) > 0;
      }
      if (product.value.in_stock !== void 0) {
        return product.value.in_stock;
      }
      return true;
    });
    const inStock = computed(() => {
      return isInStock.value ? t("detail.inStock") : t("detail.outOfStock");
    });
    const vouchers = computed(() => {
      var _a;
      return (_a = product.value) == null ? void 0 : _a.vouchers;
    });
    const brand = computed(() => {
      var _a, _b;
      return ((_b = (_a = product.value) == null ? void 0 : _a.brand) == null ? void 0 : _b.title) || "";
    });
    const productAttributes = computed(() => {
      var _a, _b, _c, _d;
      (_b = (_a = product.value) == null ? void 0 : _a.attribute) == null ? void 0 : _b.forEach((i) => {
        clickedAttributes.value[i.id] = [];
      });
      return (_d = (_c = product.value) == null ? void 0 : _c.attribute) == null ? void 0 : _d.map((i) => {
        return {
          ...i,
          ...{
            values: i.values.reduce((a, item) => {
              a[`${item.attribute_id}-${item.attribute_value_id}`] = item;
              return a;
            }, {})
          }
        };
      });
    });
    const attrRef = ref(null);
    const productImagesRef = ref(null);
    const hasCartError = (event) => {
      cartError.value = event;
      attrRef.value.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    };
    const setImagePopup = (event) => {
      imagePopup.value = event;
    };
    const closeVoucherPopOver = () => {
      voucherPopOver.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_CartStickyBtn = _sfc_main$1;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_breadcrumb = __nuxt_component_0;
      const _component_product_images = _sfc_main$2;
      const _component_rating_star = __nuxt_component_0$2;
      const _component_countdown = __nuxt_component_5;
      const _component_pop_over = PopOver;
      const _component_Vouchers = _sfc_main$3;
      const _component_detail_right = _sfc_main$4;
      const _component_client_only = __nuxt_component_0$2$1;
      const _directive_dompurify_html = resolveDirective("dompurify-html");
      let _temp0, _temp1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CartStickyBtn, {
        "product-inventory": selectedInventory.value,
        disabled: !unref(statusPublic),
        product: unref(product),
        onCartError: hasCartError
      }, null, _parent));
      if (unref(product)) {
        _push(`<div>`);
        if (unref(product).store && unref(product).store.whatsapp_btn) {
          _push(`<a class="whatsapp-btn-wrap" target="_blank"${ssrRenderAttr("href", `https://wa.me/${unref(product).store.whatsapp_number}?text=${unref(product).store.whatsapp_default_msg}`)}><i class="icon whatsapp-icon"></i></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="detail-menu hide-sm"><div class="container-fluid">`);
        if (unref(currentCategories) && unref(currentCategories).length) {
          _push(`<div class="mlr--15"><!--[-->`);
          ssrRenderList(unref(currentCategories), (value, i) => {
            _push(ssrRenderComponent(_component_nuxt_link, {
              title: value.title,
              to: unref(categoryLink)(value),
              key: i
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
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="mlr--15 mn-h-40x"><a></a></div>`);
        }
        _push(`</div></div><div class="container-fluid mtb-15 mt-sm-10 mn-h-700x"><div>`);
        _push(ssrRenderComponent(_component_breadcrumb, {
          class: "mb-20 mb-sm-15",
          slugs: unref(preparedSlug),
          page: unref(productTitle)
        }, null, _parent));
        _push(`<div class="product-detail"><div class="detail-left pr-30 pr-sm-0"><div class="flex start align-start block-md"><div class="product-main"><div class="detail-image-wrapper"><div class="${ssrRenderClass([{ "z-2": imagePopup.value }, "detail-image-inner"])}">`);
        if (unref(productImage) || unref(productImageList)) {
          _push(ssrRenderComponent(_component_product_images, {
            ref_key: "productImagesRef",
            ref: productImagesRef,
            title: unref(productTitle),
            product: unref(product),
            "main-image": unref(productImage),
            images: unref(productImageList),
            onImagePopup: setImagePopup,
            onAddToWishlist: addWishList
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="pl-30 pl-md grow"><h1 class="f-16">${ssrInterpolate(unref(productTitle))}</h1><div class="mt-10">`);
        _push(ssrRenderComponent(_component_rating_star, {
          rating: parseFloat(unref(productRating))
        }, null, _parent));
        _push(`<span class="f-10 ml-5 semi-bold color-lite">${ssrInterpolate(_ctx.$t("productReview.reviews", { count: unref(reviewCount) }))}</span></div><div class="devider w-md-100 mtb-15">\xA0</div>`);
        if (unref(endTime)) {
          _push(`<div class="flex sided warning-msg ptb-10 plr-15 mb-15 wrap gap-10"><h5 class="color-inherit">${ssrInterpolate(_ctx.$t("product.shocking"))}</h5><div class="gap-10 flex"><h5 class="color-inherit">${ssrInterpolate(_ctx.$t("product.endsIn"))}</h5><b>`);
          _push(ssrRenderComponent(_component_countdown, {
            "time-zone": unref(product).time_zone,
            "end-time": unref(endTime)
          }, null, _parent));
          _push(`</b></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h4 class="${ssrRenderClass([[{ "color-success": unref(isInStock) }, { "color-danger": !unref(isInStock) }], "mb-15 bold"])}">${ssrInterpolate(unref(inStock))}</h4>`);
        if (unref(description)) {
          _push(`<!--[-->`);
          if (unref(bundleDeal)) {
            _push(`<div class="two-sided mb-15"><h6 class="left">${ssrInterpolate(_ctx.$t("product.bundleDeal"))}</h6><div class="right bundle-deal">${ssrInterpolate(unref(bundleDeal).title)}</div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(brand)) {
            _push(`<div class="two-sided mb-15"><h6 class="left">${ssrInterpolate(_ctx.$t("product.brand"))}</h6><div class="right">`);
            _push(ssrRenderComponent(_component_nuxt_link, {
              class: "link",
              to: `/${unref(product).brand.slug}/brand?brand=${unref(product).brand.id}`
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(brand))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(brand)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div></div><!--]-->`);
        } else {
          _push(`<!--[--><div class="two-sided mb-15"><h6 class="left">${ssrInterpolate(_ctx.$t("product.bundleDeal"))}</h6><div class="right bundle-deal opacity-0">xxx</div></div><div class="two-sided mb-15"><h6 class="left">${ssrInterpolate(_ctx.$t("product.brand"))}</h6><div class="right opacity-0">xxx</div></div><div class="two-sided mb-15 opacity-0"><span class="left">xxx</span><div class="start flex wrap gap-10"><label class="rd-container rd-attr"><span class="input-content">xxx</span></label></div></div><div class="wrap two-sided mb-15 align-start"><h6 class="left">${ssrInterpolate(_ctx.$t("product.refundWarranty"))}</h6><div class="right"><div class="mb-5"><div>${ssrInterpolate(_ctx.$t("productHelper.refundable"))}</div><div class="mb-10 mt-5 block color-lite">${ssrInterpolate(_ctx.$t("productHelper.mindChange"))}</div></div><div class="mt-5">${ssrInterpolate(_ctx.$t("product.authentic"))}</div></div></div><div class="two-sided mb-15"><h6 class="left">${ssrInterpolate(_ctx.$t("accountLayout.vouchers"))}</h6><div class="pos-rel"><div class="right mlr--2-5"></div></div></div><!--]-->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(unref(productAttributes), (value, index) => {
          _push(`<div class="two-sided mb-15"><span class="left">${ssrInterpolate(value.title)}</span><div class="start flex wrap gap-10"><!--[-->`);
          ssrRenderList(value.values, (av, avIndex) => {
            _push(`<label class="rd-container rd-attr"><input type="radio"${ssrRenderAttr("name", `${value.id}`)}${ssrIncludeBooleanAttr(ssrLooseEqual(clickedAttributes.value[value.id], av.id)) ? " checked" : ""}${ssrRenderAttr("value", av.id)}><span class="rd-checkmark"></span><span class="input-content">${ssrInterpolate(av.title)}</span></label>`);
          });
          _push(`<!--]--></div></div>`);
        });
        _push(`<!--]-->`);
        if (cartError.value.attribute) {
          _push(`<div class="two-sided mb-15 align-start"><h6 class="left"></h6><div class="right"><p class="error mb-10">${ssrInterpolate(cartError.value.attribute)}</p></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="wrap two-sided mb-15 align-start"><h6 class="left">${ssrInterpolate(_ctx.$t("product.refundWarranty"))}</h6><div class="right"><div class="mb-5">`);
        if (unref(refundable)(unref(product))) {
          _push(`<!--[--><div>${ssrInterpolate(_ctx.$t("productHelper.refundable"))}</div><div class="mb-10 mt-5 block color-lite">${ssrInterpolate(_ctx.$t("productHelper.mindChange"))}</div><!--]-->`);
        } else {
          _push(`<!--[-->${ssrInterpolate(_ctx.$t("productHelper.notRefundable"))}<!--]-->`);
        }
        _push(`</div>`);
        if (unref(product).warranty) {
          _push(`<div>${ssrInterpolate(unref(warranty)(unref(product)))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-5">${ssrInterpolate(_ctx.$t("product.authentic"))}</div></div></div>`);
        if (unref(vouchers) && unref(vouchers).length) {
          _push(`<div class="two-sided mb-15"><h6 class="left">${ssrInterpolate(_ctx.$t("accountLayout.vouchers"))}</h6><div class="pos-rel"><div class="right mlr--2-5 cp" data-ignore="voucher-pop-over"><!--[-->`);
          ssrRenderList(unref(vouchers), (value, index) => {
            _push(`<span class="no-click info-msg ptb-5 mlr-2-5 mb-5 f-9">${ssrInterpolate(_ctx.$t("detailRight.off", { amount: unref(getPriceType)(value) }))}</span>`);
          });
          _push(`<!--]--></div>`);
          if (voucherPopOver.value) {
            _push(ssrRenderComponent(_component_pop_over, {
              title: _ctx.$t("filter.shop"),
              onClose: closeVoucherPopOver,
              "elem-id": "voucher-pop-over",
              layer: false
            }, {
              content: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_Vouchers, {
                    ref: "voucherPagination",
                    "changing-route": false
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_Vouchers, {
                      ref: "voucherPagination",
                      "changing-route": false
                    }, null, 512)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div${ssrRenderAttrs(_temp0 = mergeProps({ class: "editor mt-30 mt-sm-15" }, ssrGetDirectiveProps(_ctx, _directive_dompurify_html, unref(overview))))}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : (_a = _temp0.innerHTML) != null ? _a : ""}</div></div></div></div><div${ssrRenderAttrs(_temp1 = mergeProps({
          class: ["ellipsis-para editor mt-30 mt-sm-15", { "expanded": descriptionExpand.value }]
        }, ssrGetDirectiveProps(_ctx, _directive_dompurify_html, unref(description))))}>${"textContent" in _temp1 ? ssrInterpolate(_temp1.textContent) : (_b = _temp1.innerHTML) != null ? _b : ""}</div><button aria-label="Read less" class="link mt-15 mb-5">${ssrInterpolate(descriptionExpand.value ? _ctx.$t("product.readLess") : _ctx.$t("product.readMore"))}</button></div>`);
        _push(ssrRenderComponent(_component_detail_right, {
          ref_key: "detailRightEl",
          ref: detailRightEl,
          id: "detail-right",
          "product-inventory": selectedInventory.value,
          disabled: !unref(statusPublic),
          product: unref(product),
          onCartError: hasCartError
        }, null, _parent));
        _push(`</div></div></div>`);
        _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[main]/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CBYWdCGi.mjs.map
