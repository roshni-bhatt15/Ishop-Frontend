import __nuxt_component_0 from './Breadcrumb-wLTDRst4.mjs';
import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import { j as _export_sfc, h as __nuxt_component_0$1, u as useLanguageStore, a as useCommonStore } from './server.mjs';
import __nuxt_component_1 from './Spinner-CfK0SFd4.mjs';
import { a as addressHelper } from './addressHelper-BBaujjhf.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { v as validation } from './validation-Cjx0gTHd.mjs';
import { u as useResourceStore } from './resource-Did0obd8.mjs';
import { storeToRefs } from 'pinia';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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
  setup() {
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const resourceStore = useResourceStore();
    const { countryList, phoneList } = storeToRefs(resourceStore);
    const { setCountryList, setPhoneList } = resourceStore;
    const commonStore = useCommonStore();
    const { setting } = storeToRefs(commonStore);
    const { unAuthGet, unAuthPost } = commonStore;
    return { countryList, phoneList, langCode, setCountryList, setting, unAuthGet, setPhoneList, unAuthPost };
  },
  name: "Contact",
  components: { Spinner: __nuxt_component_1, AjaxButton: _sfc_main$1, Breadcrumb: __nuxt_component_0 },
  props: {
    pageTitle: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      errors: [],
      message: "",
      formSubmitting: false,
      loading: false,
      hasFormError: false,
      messageSent: false
    };
  },
  mixins: [util, validation, addressHelper],
  computed: {
    invalidEmail() {
      return !this.isValidEmail(this.email);
    },
    emailValid() {
      return this.email && !this.invalidEmail;
    },
    contactEmail() {
      var _a;
      return (_a = this.setting) == null ? void 0 : _a.email;
    },
    phone() {
      var _a;
      return (_a = this.setting) == null ? void 0 : _a.phone;
    }
  },
  methods: {
    async formSubmit() {
      var _a;
      if (this.email && this.name && this.subject && this.message) {
        this.formSubmitting = true;
        const data = await this.unAuthPost({
          api: "contact",
          params: {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message
          }
        });
        if ((data == null ? void 0 : data.status) === 200) {
          this.messageSent = true;
          this.hasFormError = false;
          this.errors = [];
        } else {
          this.errors = (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.form;
        }
        this.formSubmitting = false;
      } else {
        this.hasFormError = true;
      }
    }
  },
  async mounted() {
    if (!this.countryList || !this.phoneList) {
      this.loading = true;
      const { data } = await this.unAuthGet({
        params: "",
        lang: this.langCode,
        api: "countriesPhones"
      });
      this.setCountryList(data == null ? void 0 : data.countries);
      this.setPhoneList(data == null ? void 0 : data.phones);
      this.loading = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_breadcrumb = __nuxt_component_0;
  const _component_ajax_button = _sfc_main$1;
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_spinner = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="contact-wrapper">`);
  _push(ssrRenderComponent(_component_breadcrumb, { page: $props.pageTitle }, null, _parent));
  _push(`<h1 class="page-title">${ssrInterpolate(_ctx.$t("contact.contactUs"))}</h1><p class="mt-10 mb-30 mb-sm-15 f-12">${ssrInterpolate(_ctx.$t("contact.feelFree"))}</p><div class="flex"><div class="contact-form">`);
  if (!$data.messageSent) {
    _push(`<form>`);
    if ($data.errors.length) {
      _push(`<ul class="error-list mb-15"><li class="mb-10">${ssrInterpolate(_ctx.$t("contact.errorOccurred"))}</li><!--[-->`);
      ssrRenderList($data.errors, (value, index) => {
        _push(`<li>${ssrInterpolate(value)}</li>`);
      });
      _push(`<!--]--></ul>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="flex"><div class="${ssrRenderClass([{ invalid: !$data.name && $data.hasFormError }, "input-wrap"])}"><label>${ssrInterpolate(_ctx.$t("addressPopup.name"))}</label><input type="text"${ssrRenderAttr("value", $data.name)}${ssrRenderAttr("placeholder", _ctx.$t("contact.your", { type: _ctx.$t("contact.name") }))}>`);
    if (!$data.name && $data.hasFormError) {
      _push(`<span class="error">${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.name") }))}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="${ssrRenderClass([{ invalid: !$options.emailValid && $data.hasFormError }, "input-wrap"])}"><label>${ssrInterpolate(_ctx.$t("addressPopup.email"))}</label><input type="text"${ssrRenderAttr("value", $data.email)}${ssrRenderAttr("placeholder", _ctx.$t("contact.your", { type: _ctx.$t("contact.email") }))}>`);
    if (!$data.email && $data.hasFormError) {
      _push(`<span class="error">${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.email") }))}</span>`);
    } else if ($options.invalidEmail && $data.hasFormError) {
      _push(`<span class="error">${ssrInterpolate(_ctx.$t("contact.invalidEmail"))}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div><div class="${ssrRenderClass([{ invalid: !$data.subject && $data.hasFormError }, "input-wrap"])}"><label>${ssrInterpolate(_ctx.$t("addressPopup.subject"))}</label><input type="text"${ssrRenderAttr("value", $data.subject)}${ssrRenderAttr("placeholder", _ctx.$t("addressPopup.subject"))}>`);
    if (!$data.subject && $data.hasFormError) {
      _push(`<span class="error">${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.subject") }))}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="${ssrRenderClass([{ invalid: !$data.message && $data.hasFormError }, "input-wrap"])}"><label>${ssrInterpolate(_ctx.$t("addressPopup.message"))}</label><textarea${ssrRenderAttr("placeholder", _ctx.$t("addressPopup.message"))}>${ssrInterpolate($data.message)}</textarea>`);
    if (!$data.message && $data.hasFormError) {
      _push(`<span class="error">${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.message") }))}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="flex j-end m-0">`);
    _push(ssrRenderComponent(_component_ajax_button, {
      class: "primary-btn plr-30 plr-sm-15",
      "fetching-data": $data.formSubmitting
    }, null, _parent));
    _push(`</div></form>`);
  } else {
    _push(`<div><h4 class="mb-15 bold">${ssrInterpolate(_ctx.$t("contact.success"))}!!! </h4><h5 class="mb-15">${ssrInterpolate(_ctx.$t("contact.successMessage"))}</h5><p class="mb-15">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/",
      class: "link bold color-primary"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("contact.goToHome"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("contact.goToHome")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(` ${ssrInterpolate(_ctx.$t("contact.now"))}. </p></div>`);
  }
  _push(`</div><div class="contact-info pos-rel">`);
  if ($data.loading) {
    _push(`<div class="spinner-wrapper flex">`);
    _push(ssrRenderComponent(_component_spinner, { radius: 100 }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.phone) {
    _push(`<div class="flex"><span><i class="icon phone-icon"></i></span><div><h4 class="mb-10 bold">${ssrInterpolate(_ctx.$t("addressPopup.phone"))}</h4><a${ssrRenderAttr("href", `tel:${$options.phone}`)}>${ssrInterpolate($options.phone)}</a></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="flex"><span><i class="icon email-icon"></i></span><div><h4 class="mb-10 bold">${ssrInterpolate(_ctx.$t("addressPopup.email"))}</h4><a${ssrRenderAttr("href", `mailto:${$options.contactEmail}`)}>${ssrInterpolate($options.contactEmail)}</a></div></div><div class="flex"><span><i class="icon location-icon"></i></span>`);
  if ($setup.countryList) {
    _push(`<div><h4 class="mb-10 bold">${ssrInterpolate(_ctx.$t("addressPopup.address"))}</h4><p>${(_a = _ctx.formatAddress($setup.setting)) != null ? _a : ""}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Contact as default };
//# sourceMappingURL=Contact-C0dY6xHM.mjs.map
