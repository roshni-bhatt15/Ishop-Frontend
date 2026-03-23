import _sfc_main$1 from './Banner-BuJz601-.mjs';
import __nuxt_component_0 from './Dropdown-CUjYMb0K.mjs';
import { u as useLanguageStore, a as useCommonStore, b as useAuthStore, i as useRoute, c as useI18n, g as useConstants, f as useUtils, v as useCookie, h as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$2 from './SearchPopup-DVUCGtkv.mjs';
import { computed, ref, watch, resolveDirective, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrGetDirectiveProps, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { storeToRefs } from 'pinia';
import { u as useCartStore } from './cart-BePPNdc0.mjs';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
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
import './Spinner-CfK0SFd4.mjs';
import './ImageLazy-C91HtcbD.mjs';
import './SearchedProductTile-C0cfEThI.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './util-D0P5KPFP.mjs';
import './usePriceHelper-DzuasYxT.mjs';
import './useCompareHelper-of9z6jwL.mjs';
import './detail-CmpxRn50.mjs';
import 'debounce';

const _sfc_main = {
  __name: "CommonHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const languageStore = useLanguageStore();
    const { setDefaultLanguage, getLangData } = languageStore;
    const { currentLanguage, languages, langCode } = storeToRefs(languageStore);
    const cartStore = useCartStore();
    const { emptyCartProduct, setCartCount } = cartStore;
    const { cartCount } = storeToRefs(cartStore);
    const userStore = useUserStore();
    const { profile } = storeToRefs(userStore);
    const { setProfile, getUserToken } = userStore;
    const commonStore = useCommonStore();
    const { site_setting, setting, topBanner, headerLinks } = storeToRefs(commonStore);
    const { bgGetRequest } = commonStore;
    const listingStore = useListingStore();
    const { searched } = storeToRefs(listingStore);
    const { updateSearch, setSearchedSuggestion } = listingStore;
    const authStore = useAuthStore();
    const { authenticated } = storeToRefs(authStore);
    const { logUserOut } = authStore;
    const isLoggedIn = computed(() => {
      return authenticated.value || false;
    });
    useRoute();
    const beforeLogin = () => {
    };
    const showDropdown = ref(false);
    const closeDropdown = () => {
      showDropdown.value = false;
    };
    const { setLocale } = useI18n();
    const selectedLanguage = (data) => {
      setLocale(data.key);
      (void 0).cookie = "currentLanguage=" + data.key + "; path=/; max-age=" + 365 * 60 * 60 * 24;
      (void 0).reload();
    };
    const headerSticky = ref(false);
    const topBannerLoaded = ref(false);
    const isTopBannerClosed = ref(false);
    const searchPopup = ref(false);
    const searchFocused = ref(false);
    const searchedText = ref("");
    const { status } = useConstants();
    const { getImageURL, getUrl, getTitle } = useUtils();
    computed(() => {
      return (void 0).innerWidth <= 576;
    });
    const headerLeft = computed(() => {
      var _a;
      return ((_a = headerLinks.value) == null ? void 0 : _a.left) || [];
    });
    const headerRight = computed(() => {
      var _a;
      return ((_a = headerLinks.value) == null ? void 0 : _a.right) || [];
    });
    const isPublic = computed(() => {
      var _a;
      return parseInt((_a = topBanner.value) == null ? void 0 : _a.status) === status.PUBLIC;
    });
    const cartCountCom = computed(() => {
      var _a;
      return (_a = profile.value) == null ? void 0 : _a.cart_count;
    });
    computed(() => {
      var _a, _b;
      return (_b = (_a = profile.value) == null ? void 0 : _a.name) == null ? void 0 : _b.split(" ")[0];
    });
    const email = computed(() => {
      var _a;
      return (_a = setting.value) == null ? void 0 : _a.email;
    });
    const phone = computed(() => {
      var _a;
      return (_a = setting.value) == null ? void 0 : _a.phone;
    });
    const sellerSignUp = computed(() => {
      var _a;
      return (_a = setting.value) == null ? void 0 : _a.vendor_registration;
    });
    watch(cartCountCom, (value) => {
      setCartCount(value);
    });
    watch(searchedText, () => {
      if (!searchPopup.value && searchFocused.value) {
        setSearchedSuggestion();
        openSearchPopup();
      }
    });
    const closeTopBanner = () => {
      const topBannerClosed2 = useCookie("topBannerClosed", {
        maxAge: 60 * 60 * 24 * 7 * 30,
        path: "/",
        secure: true
      });
      topBannerClosed2.value = true;
      isTopBannerClosed.value = true;
    };
    const openSearchPopup = () => {
      if (searchedText.value.length > 0) {
        searchPopup.value = true;
      }
      searchFocused.value = true;
    };
    const closeSearchPopup = () => {
      setTimeout(() => {
        searchPopup.value = false;
      }, 100);
    };
    ref(null);
    const topBannerClosed = useCookie("topBannerClosed");
    if (topBannerClosed.value !== null) {
      isTopBannerClosed.value = topBannerClosed.value;
      topBannerLoaded.value = true;
    } else {
      isTopBannerClosed.value = false;
      topBannerLoaded.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_banner = _sfc_main$1;
      const _component_dropdown = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_SearchPopup = _sfc_main$2;
      const _directive_outside_click = resolveDirective("outside-click");
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: { "no-banner": unref(topBannerLoaded) && unref(isTopBannerClosed) || !isPublic.value }
      }, _attrs))}>`);
      if (!unref(isTopBannerClosed)) {
        _push(ssrRenderComponent(_component_banner, {
          class: "top-banner",
          banner: unref(topBanner),
          onClose: closeTopBanner
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="top-wrapper"><div class="container-fluid"><div class="wrap flex sided"><div class="left-side wrap flex gap-10">`);
      if (Object.keys(unref(languages)).length) {
        _push(ssrRenderComponent(_component_dropdown, {
          "selected-key": unref(currentLanguage).code,
          options: unref(languages),
          positionFixed: false,
          "key-name": "name",
          class: "lang-dropdown",
          onClicked: selectedLanguage
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<a${ssrRenderAttr("href", `mailto:${email.value}`)} class="flex gap-5"><i class="icon email-icon"></i><span><span class="hide-md">${ssrInterpolate(_ctx.$t("home.mail"))}</span> ${ssrInterpolate(email.value)}</span></a>`);
      if (phone.value) {
        _push(`<!--[--><span>|</span><a${ssrRenderAttr("href", `tel:${phone.value}`)} class="flex gap-5"><i class="icon phone-icon"></i><span><span class="hide-md">${ssrInterpolate(_ctx.$t("home.helpline"))}</span> ${ssrInterpolate(phone.value)}</span></a><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex right-side text-upper">`);
      if (!isLoggedIn.value) {
        _push(`<div class="flex gap-5">`);
        if (sellerSignUp.value) {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: "/seller/sign-up",
            class: "flex gap-5"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("date.bav"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("date.bav")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<span>|</span><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/login",
          onClick: beforeLogin,
          class: "flex gap-5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="icon login-icon"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("header.login"))}`);
            } else {
              return [
                createVNode("i", { class: "icon login-icon" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("header.login")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span>|</span>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/register",
          class: "flex gap-5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="icon register-icon"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("header.register"))}`);
            } else {
              return [
                createVNode("i", { class: "icon register-icon" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("header.register")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/user/profile",
          class: "flex gap-5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="icon user-icon"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("header.profile"))}`);
            } else {
              return [
                createVNode("i", { class: "icon user-icon" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("header.profile")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div></div></div></div><div class="${ssrRenderClass([{ sticky: unref(headerSticky) }, "header-sticky"])}"><div class="container-fluid flex pos-rel"><div class="left-area">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(getImageURL)(unref(site_setting).header_logo))}${ssrRenderAttr("alt", _ctx.$t("footer.siteLogo"))} height="40" width="139"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(getImageURL)(unref(site_setting).header_logo),
                alt: _ctx.$t("footer.siteLogo"),
                height: "40",
                width: "139"
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><form class="search-input grow"><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("header.searchHere"))}${ssrRenderAttr("value", unref(searchedText))}><button aria-label="submit" type="submit" class="flex"><i class="icon search-icon"></i></button>`);
      if (unref(searchPopup)) {
        _push(ssrRenderComponent(_component_SearchPopup, {
          "searched-text": unref(searchedText),
          onClose: closeSearchPopup
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</form><div class="right-area flex gap-15 right"><div${ssrRenderAttrs(mergeProps({ class: "pos-rel" }, ssrGetDirectiveProps(_ctx, _directive_outside_click, closeDropdown)))}><button aria-label="submit" class="flex gap-10">${ssrInterpolate(_ctx.$t("header.account"))} <i class="icon arrow-down black"></i></button><div class="${ssrRenderClass([{ active: unref(showDropdown) }, "dropdown"])}">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/user/orders",
        onClick: closeDropdown
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("header.orders"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("header.orders")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/user/wishlists",
        onClick: closeDropdown
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("header.wishList"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("header.wishList")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/user/compared",
        onClick: closeDropdown
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("header.comparedList"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("header.comparedList")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/user/vouchers",
        onClick: closeDropdown
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("header.vouchers"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("header.vouchers")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button aria-label="Logout" style="${ssrRenderStyle(isLoggedIn.value ? null : { display: "none" })}" class="clear-btn">${ssrInterpolate(_ctx.$t("header.logout"))}</button></div></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/cart",
        class: "cart-btn flex pos-rel h-40x gap-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(cartCount)) {
              _push2(`<span class="cart-badge"${_scopeId}>${ssrInterpolate(unref(cartCount))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<i class="icon cart-icon black"${_scopeId}></i><span class="title"${_scopeId}>${ssrInterpolate(_ctx.$t("header.cart"))}</span>`);
          } else {
            return [
              unref(cartCount) ? (openBlock(), createBlock("span", {
                key: 0,
                class: "cart-badge"
              }, toDisplayString(unref(cartCount)), 1)) : createCommentVNode("", true),
              createVNode("i", { class: "icon cart-icon black" }),
              createVNode("span", { class: "title" }, toDisplayString(_ctx.$t("header.cart")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bottom-area text-nowrap"><div class="container-fluid"><div class="flex sided"><div><!--[-->`);
      ssrRenderList(headerLeft.value, (item, index) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: index,
          to: unref(getUrl)(item)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(unref(getTitle)(item))}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(unref(getTitle)(item)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div><!--[-->`);
      ssrRenderList(headerRight.value, (item, index) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: index,
          to: unref(getUrl)(item)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(unref(getTitle)(item))}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(unref(getTitle)(item)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommonHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CommonHeader-LAPQA1jd.mjs.map
