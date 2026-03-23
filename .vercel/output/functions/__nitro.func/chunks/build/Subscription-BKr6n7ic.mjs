import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import { v as validation } from './validation-Cjx0gTHd.mjs';
import { j as _export_sfc, a as useCommonStore } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
import 'pinia';
import 'vue-router';
import 'vue-dompurify-html';

const _sfc_main = {
  setup() {
    const commonStore = useCommonStore();
    const { unAuthPost } = commonStore;
    return { unAuthPost };
  },
  name: "Subscription",
  data() {
    return {
      errors: [],
      formSubmitting: false,
      email: "",
      hasFormError: false,
      messageSent: false
    };
  },
  components: {},
  props: {},
  mixins: [validation],
  computed: {
    invalidEmail() {
      return !this.isValidEmail(this.email);
    }
  },
  methods: {
    async formSubmit() {
      var _a;
      if (this.email && !this.invalidEmail) {
        this.formSubmitting = true;
        const data = await this.unAuthPost({
          params: { email: this.email },
          api: "emailSubscription"
        });
        if ((data == null ? void 0 : data.status) === 200) {
          this.messageSent = true;
          this.hasFormError = false;
        } else {
          this.hasFormError = true;
          this.errors = (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.form;
        }
        this.formSubmitting = false;
      } else {
        this.hasFormError = true;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ajax_button = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "subscription-wrapper pt-20 pb-15" }, _attrs))}><div class="container"><div class="flex sided block-md"><div class="mn-w-50 mb-10"><h3 class="bold">${ssrInterpolate(_ctx.$t("home.subscribeNewsletter"))}</h3><p class="color-lite">${ssrInterpolate(_ctx.$t("home.getLatestEmail"))}</p></div><form class="flex mn-w-50 j-end j-start-md mb-10"><div class="mx-w-400x grow"><div class="grow">`);
  if (!$data.messageSent) {
    _push(`<div class="flex grow wrap gap-10"><div class="m-0 icon-input flex grow"><i class="icon email-icon"></i><input type="text"${ssrRenderAttr("value", $data.email)}${ssrRenderAttr("placeholder", _ctx.$t("contact.your", { type: _ctx.$t("contact.email") }))} class="plr-15 grow"></div>`);
    _push(ssrRenderComponent(_component_ajax_button, {
      class: "primary-btn plr-25 plr-sm-15",
      "fetching-data": $data.formSubmitting,
      text: _ctx.$t("home.subscribe")
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<div class="success-msg flex"><i class="mr-10 icon tick-icon"></i><h4>${ssrInterpolate(_ctx.$t("home.subscribeSuccessMsg"))}</h4></div>`);
  }
  _push(`</div>`);
  if ($data.hasFormError && $data.errors && $data.errors.length) {
    _push(`<div><!--[-->`);
    ssrRenderList($data.errors, (value, index) => {
      _push(`<span class="error">${ssrInterpolate(value)}</span>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.email && $data.hasFormError) {
    _push(`<span class="error">${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.email") }))}</span>`);
  } else if ($options.invalidEmail && $data.hasFormError) {
    _push(`<span class="error">${ssrInterpolate(_ctx.$t("contact.invalidEmail"))}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></form></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Subscription.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Subscription-BKr6n7ic.mjs.map
