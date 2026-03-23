import _sfc_main$1 from './Banner-BuJz601-.mjs';
import _sfc_main$2 from './CommonHeader-LAPQA1jd.mjs';
import _sfc_main$3 from './CommonFooter-BicVHNBP.mjs';
import _sfc_main$4 from './ToastMessage-DLdJYyBP.mjs';
import PopOver from './PopOver-CEd84c-C.mjs';
import { ref, computed, resolveDirective, mergeProps, unref, withCtx, createVNode, toDisplayString, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { storeToRefs } from 'pinia';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { u as useLanguageStore, a as useCommonStore, d as useHead, i as useRoute, g as useConstants } from './server.mjs';
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
import './Dropdown-CUjYMb0K.mjs';
import './SearchPopup-DVUCGtkv.mjs';
import './Spinner-CfK0SFd4.mjs';
import './ImageLazy-C91HtcbD.mjs';
import './SearchedProductTile-C0cfEThI.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './util-D0P5KPFP.mjs';
import './usePriceHelper-DzuasYxT.mjs';
import './useCompareHelper-of9z6jwL.mjs';
import './detail-CmpxRn50.mjs';
import 'debounce';
import './listing-DfEq-fQC.mjs';
import './cart-BePPNdc0.mjs';
import './Subscription-BKr6n7ic.mjs';
import './AjaxButton-DzViXcHL.mjs';
import './validation-Cjx0gTHd.mjs';
import './FooterTreeNode-DEGfnUrz.mjs';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const { profile } = storeToRefs(userStore);
    const { setProfile, getUserToken } = userStore;
    const languageStore = useLanguageStore();
    const { currentLanguage } = storeToRefs(languageStore);
    const commonStore = useCommonStore();
    const { setting, site_setting, popupBanner, toastMessage, toastError, toastMessageStatus } = storeToRefs(commonStore);
    const { hideToast, getRequest } = commonStore;
    const { commonMeta } = useMetaData();
    useHead(commonMeta(site_setting.value));
    const route = useRoute();
    const isCookieBannerClosed = ref(true);
    const componentId = ref(null);
    ref(false);
    const isPopupWrapperVisible = ref(false);
    useConstants();
    const popupWrapperVisible = computed(() => {
      var _a;
      return isPopupWrapperVisible.value && parseInt((_a = popupBanner.value) == null ? void 0 : _a.status) === 1;
    });
    const routeName = computed(() => {
      var _a;
      return ((_a = route == null ? void 0 : route.name) == null ? void 0 : _a.split("___")[0]) || "error";
    });
    const closeCookieBanner = () => {
      localStorage.setItem("cookieBannerClosed", true);
      isCookieBannerClosed.value = true;
    };
    const goingNext = ({ id, url }) => {
      componentId.value = id + "-" + Date.now();
      router.push({ path: url });
    };
    const closedPermanently = () => {
      localStorage.setItem("popupBannerClosed", true);
      bannerClosed();
    };
    const bannerClosed = () => {
      isPopupWrapperVisible.value = false;
      (void 0).body.classList.remove("no-scroll");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_banner = _sfc_main$1;
      const _component_CommonHeader = _sfc_main$2;
      const _component_CommonFooter = _sfc_main$3;
      const _component_ToastMessage = _sfc_main$4;
      const _component_pop_over = PopOver;
      const _directive_outside_click = resolveDirective("outside-click");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: unref(routeName) }, _attrs))}>`);
      if (unref(popupWrapperVisible)) {
        _push(`<div class="popup-banner-wrapper">`);
        _push(ssrRenderComponent(_component_banner, mergeProps({
          class: "popup-banner",
          banner: unref(popupBanner),
          onClose: closedPermanently,
          onClicked: closedPermanently
        }, ssrGetDirectiveProps(_ctx, _directive_outside_click, bannerClosed)), null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_CommonHeader, { onGoingNext: goingNext }, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_CommonFooter, null, null, _parent));
      if (unref(toastMessageStatus)) {
        _push(ssrRenderComponent(_component_ToastMessage, {
          "is-error": unref(toastError),
          onHide: unref(hideToast),
          message: unref(toastMessage)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(isCookieBannerClosed)) {
        _push(ssrRenderComponent(_component_pop_over, {
          class: "cookie-banner",
          "elem-id": "cookie-pop-over",
          "layer-on-responsive": false,
          layer: false
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex gap-15"${_scopeId}><p class="f-9"${_scopeId}>${ssrInterpolate(_ctx.$t("date.cb"))}</p><button class="outline-btn plr-15"${_scopeId}>${ssrInterpolate(_ctx.$t("date.gi"))}</button></div>`);
            } else {
              return [
                createVNode("div", { class: "flex gap-15" }, [
                  createVNode("p", { class: "f-9" }, toDisplayString(_ctx.$t("date.cb")), 1),
                  createVNode("button", {
                    onClick: withModifiers(closeCookieBanner, ["prevent"]),
                    class: "outline-btn plr-15"
                  }, toDisplayString(_ctx.$t("date.gi")), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-kKbUerLl.mjs.map
