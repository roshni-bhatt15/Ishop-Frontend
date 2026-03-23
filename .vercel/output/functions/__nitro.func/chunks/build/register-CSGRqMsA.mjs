import __nuxt_component_1 from './PasswordField-DoDe4gf3.mjs';
import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import { a as useCommonStore, c as useI18n, d as useHead, u as useLanguageStore, h as __nuxt_component_0$1 } from './server.mjs';
import { ref, computed, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
import { u as useValidationHelper } from './useValidationHelper-CV8fh1WP.mjs';
import { storeToRefs } from 'pinia';
import './Spinner-CfK0SFd4.mjs';
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    const { customScripts, site_setting } = storeToRefs(commonStore);
    const { unAuthPost } = commonStore;
    const { t } = useI18n();
    const { pageMeta } = useMetaData();
    useHead(pageMeta({
      ...site_setting.value,
      ...{ meta_title: `${t("header.register")} | ${site_setting.value.meta_title}` }
    }));
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const name = ref("");
    const code = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const formSubmitting = ref(false);
    const hasFormError = ref(false);
    const emailVerificationForm = ref(false);
    const verified = ref(false);
    const errors = ref([]);
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
      const _component_ajax_button = _sfc_main$1;
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(errors).length) {
        _push(`<ul class="error-list mb-15"><li class="mb-10">${ssrInterpolate(_ctx.$t("forgotPassword.errorOccurred"))}</li><!--[-->`);
        ssrRenderList(unref(errors), (value, index) => {
          _push(`<li>${ssrInterpolate(value)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(emailVerificationForm) && !unref(verified)) {
        _push(`<form><div class="${ssrRenderClass([{ invalid: !unref(name) && unref(hasFormError) }, "input-wrap"])}"><label>${ssrInterpolate(_ctx.$t("addressPopup.name"))}</label><div class="icon-input"><i class="icon user-icon"></i><input type="text"${ssrRenderAttr("value", unref(name))}${ssrRenderAttr("placeholder", _ctx.$t("contact.your", { type: _ctx.$t("contact.name") }))}></div>`);
        if (!unref(name) && unref(hasFormError)) {
          _push(`<span class="error">${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.name") }))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="${ssrRenderClass([{ invalid: !unref(emailValid) && unref(hasFormError) }, "input-wrap"])}"><label>${ssrInterpolate(_ctx.$t("addressPopup.email"))}</label><div class="icon-input"><i class="icon email-icon"></i><input type="text"${ssrRenderAttr("value", unref(email))}${ssrRenderAttr("placeholder", _ctx.$t("contact.your", { type: _ctx.$t("contact.email") }))}></div>`);
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
          onOnChange: ($event) => password.value = $event
        }, null, _parent));
        if (!unref(password) && unref(hasFormError)) {
          _push(`<span class="error">${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("profile.password") }))}</span>`);
        } else if (unref(invalidPassword) && unref(hasFormError)) {
          _push(`<span class="error">${ssrInterpolate(_ctx.$t("profile.invalidLength"))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="${ssrRenderClass([{ invalid: (!unref(passwordValid) || unref(confirmPassword) !== unref(password)) && unref(hasFormError) }, "input-wrap"])}"><label>${ssrInterpolate(_ctx.$t("profile.confirmPassword"))}</label>`);
        _push(ssrRenderComponent(_component_password_field, {
          value: unref(confirmPassword),
          onOnChange: ($event) => confirmPassword.value = $event
        }, null, _parent));
        if (!unref(confirmPassword) && unref(hasFormError)) {
          _push(`<span class="error">${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("profile.password") }))}</span>`);
        } else if (unref(confirmPassword) !== unref(password) && unref(hasFormError)) {
          _push(`<span class="error">${ssrInterpolate(_ctx.$t("profile.noMatch"))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex right no-space">`);
        _push(ssrRenderComponent(_component_ajax_button, {
          class: "primary-btn plr-20 w-50",
          "fetching-data": unref(formSubmitting),
          "loading-text": _ctx.$t("forgotPassword.registering")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("ajaxButton.submit"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("ajaxButton.submit")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mt-20 mt-sm-15 mb-10">${ssrInterpolate(_ctx.$t("register.haveAccount"))} `);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/login",
          class: "mlr-10 link bold color-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("forgotPassword.signIn"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("forgotPassword.signIn")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></form>`);
      } else if (unref(emailVerificationForm) && !unref(verified)) {
        _push(`<form><p class="mb-15">${ssrInterpolate(_ctx.$t("register.sentEmail"))}</p><div class="${ssrRenderClass([{ invalid: !unref(code) && unref(hasFormError) }, "input-wrap"])}"><label>${ssrInterpolate(_ctx.$t("forgotPassword.code"))}</label><input type="text"${ssrRenderAttr("value", unref(code))}${ssrRenderAttr("placeholder", _ctx.$t("forgotPassword.codeFrom"))}>`);
        if (!unref(code) && unref(hasFormError)) {
          _push(`<span class="error">${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("forgotPassword.code") }))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex right no-space">`);
        _push(ssrRenderComponent(_component_ajax_button, {
          class: "primary-btn plr-20 w-50",
          "fetching-data": unref(formSubmitting),
          "loading-text": _ctx.$t("checkoutRight.submitting")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("ajaxButton.submit"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("ajaxButton.submit")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></form>`);
      } else if (unref(emailVerificationForm) && unref(verified)) {
        _push(`<div><h4 class="mb-15 bold">${ssrInterpolate(_ctx.$t("contact.success"))}!!! </h4><p class="mb-15"><b>${ssrInterpolate(_ctx.$t("forgotPassword.congratulations"))}</b>. ${ssrInterpolate(_ctx.$t("forgotPassword.verified"))}</p><p class="mb-15">${ssrInterpolate(_ctx.$t("forgotPassword.youCan"))} `);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/login",
          class: "mlr-10 link bold color-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("forgotPassword.signIn"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("forgotPassword.signIn")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("contact.now"))}. </p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-CSGRqMsA.mjs.map
