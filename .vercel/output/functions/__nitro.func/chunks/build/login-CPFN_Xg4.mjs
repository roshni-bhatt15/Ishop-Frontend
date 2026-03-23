import __nuxt_component_1 from './PasswordField-DoDe4gf3.mjs';
import { a as useCommonStore, b as useAuthStore, c as useI18n, d as useHead, u as useLanguageStore, h as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import { ref, computed, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
import { u as useValidationHelper } from './useValidationHelper-CV8fh1WP.mjs';
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
import './Spinner-CfK0SFd4.mjs';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    const { customScripts, site_setting } = storeToRefs(commonStore);
    const { unAuthPost, getRequest } = commonStore;
    const email = ref("");
    const password = ref("");
    const userStore = useUserStore();
    const { setProfile, getUserToken } = userStore;
    const authStore = useAuthStore();
    const { setToken } = authStore;
    const passwordChange = (evt) => {
      password.value = evt;
    };
    const { t } = useI18n();
    const { pageMeta } = useMetaData();
    useHead(pageMeta({
      ...site_setting.value,
      ...{ meta_title: `${t("header.login")} | ${site_setting.value.meta_title}` }
    }));
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    ref("");
    const hasFormError = ref(false);
    const errors = ref([]);
    const formSubmitting = ref(false);
    const { isValidEmail, isValidLength } = useValidationHelper();
    const invalidEmail = computed(() => {
      return !isValidEmail(email.value);
    });
    const emailValid = computed(() => {
      return email.value && !invalidEmail.value;
    });
    const invalidPassword = computed(() => {
      return !isValidLength(password.value);
    });
    const passwordValid = computed(() => {
      return password.value && !invalidPassword.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_password_field = __nuxt_component_1;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_ajax_button = _sfc_main$1;
      _push(`<form${ssrRenderAttrs(_attrs)}>`);
      if (unref(errors).length) {
        _push(`<ul class="error-list mb-15"><li class="mb-10">${ssrInterpolate(_ctx.$t("forgotPassword.errorOccurred"))}</li><!--[-->`);
        ssrRenderList(unref(errors), (value, index) => {
          _push(`<li>${ssrInterpolate(value)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ invalid: !unref(emailValid) && unref(hasFormError) }, "input-wrap"])}"><label>${ssrInterpolate(_ctx.$t("addressPopup.email"))}</label><div class="icon-input"><i class="icon email-icon"></i><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("contact.your", { type: _ctx.$t("contact.email") }))}${ssrRenderAttr("value", unref(email))}></div>`);
      if (!unref(email) && unref(hasFormError)) {
        _push(`<span class="error">${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.email") }))}</span>`);
      } else if (unref(invalidEmail) && unref(hasFormError)) {
        _push(`<span class="error">${ssrInterpolate(_ctx.$t("contact.invalidEmail"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([{ invalid: !unref(passwordValid) && unref(hasFormError) }, "input-wrap"])}"><label>${ssrInterpolate(_ctx.$t("profile.password"))}</label>`);
      _push(ssrRenderComponent(_component_password_field, {
        value: unref(password),
        onOnChange: passwordChange
      }, null, _parent));
      if (!unref(password) && unref(hasFormError)) {
        _push(`<span class="error">${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("profile.password") }))}</span>`);
      } else if (unref(invalidPassword) && unref(hasFormError)) {
        _push(`<span class="error">${ssrInterpolate(_ctx.$t("profile.invalidLength"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="no-space flex sided">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/forgot-password",
        class: "link color-lite"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("login.forgotPassword"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("login.forgotPassword")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ajax_button, {
        class: "primary-btn plr-30 plr-sm-15",
        "fetching-data": unref(formSubmitting),
        "loading-text": _ctx.$t("login.loggingIn")
      }, null, _parent));
      _push(`</div><div class="mt-20 mt-sm-15 mb-10">${ssrInterpolate(_ctx.$t("forgotPassword.noAccount"))} `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/register",
        class: "mlr-10 link bold color-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("forgotPassword.createAccount"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("forgotPassword.createAccount")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-CPFN_Xg4.mjs.map
