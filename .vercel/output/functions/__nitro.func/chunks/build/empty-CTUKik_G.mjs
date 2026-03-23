import { u as useLanguageStore, a as useCommonStore, i as useRoute, f as useUtils, h as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$1 from './ToastMessage-DLdJYyBP.mjs';
import { computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "empty",
  __ssrInlineRender: true,
  setup(__props) {
    const languageStore = useLanguageStore();
    const { currentLanguage } = storeToRefs(languageStore);
    const commonStore = useCommonStore();
    const { site_setting, setting, toastMessage, toastError, toastMessageStatus, current_year } = storeToRefs(commonStore);
    const { hideToast } = commonStore;
    const route = useRoute();
    const googleLogin = computed(() => {
      var _a;
      return (_a = setting.value) == null ? void 0 : _a.google_login;
    });
    const facebookLogin = computed(() => {
      var _a;
      return (_a = setting.value) == null ? void 0 : _a.facebook_login;
    });
    const routeName = computed(() => {
      var _a;
      return ((_a = route == null ? void 0 : route.name) == null ? void 0 : _a.split("___")[0]) || "error";
    });
    const { pageLink, getImageURL } = useUtils();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_ToastMessage = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["body-bg", unref(routeName)]
      }, _attrs))}><section class="section"><div class="container"><div class="center-text mb-30 mb-sm-15">`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="mx-h-55x"${ssrRenderAttr("src", unref(getImageURL)(unref(site_setting).header_logo))}${ssrRenderAttr("alt", _ctx.$t("footer.siteLogo"))} height="40" width="139"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "mx-h-55x",
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
      _push(`</div><div class="user-form"><h4 class="mb-15 bold">${ssrInterpolate(_ctx.$t("empty.welcome", { name: unref(site_setting).site_name }))}</h4>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (unref(facebookLogin) || unref(googleLogin)) {
        _push(`<h5 class="bold mtb-15 center-text">${ssrInterpolate(_ctx.$t("empty.or"))}</h5>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-xs gap-10">`);
      if (unref(facebookLogin)) {
        _push(`<button aria-label="submit" class="flex flex-1 gap-5 primary-btn facebook-btn"><i class="icon facebook-icon"></i> ${ssrInterpolate(_ctx.$t("empty.loginFacebook"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(googleLogin)) {
        _push(`<button aria-label="submit" class="flex flex-1 gap-5 primary-btn google-btn"><i class="icon google-icon"></i> ${ssrInterpolate(_ctx.$t("empty.loginGoogle"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="mt-20 mt-sm-15 f-9 plr-40">${ssrInterpolate(_ctx.$t("empty.agreement"))} `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(pageLink)({ slug: "privacy-policy" }),
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("empty.privacyPolicy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("empty.privacyPolicy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` . </p></div><p class="ptb-15 mt-30 mt-sm-15 b-t center-text"> \xA9 ${ssrInterpolate(unref(current_year))} - ${ssrInterpolate(unref(site_setting).copyright_text)}</p></div></section>`);
      if (unref(toastMessageStatus)) {
        _push(ssrRenderComponent(_component_ToastMessage, {
          "is-error": unref(toastError),
          onHide: unref(hideToast),
          message: unref(toastMessage)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/empty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=empty-CTUKik_G.mjs.map
