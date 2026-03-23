import PopOver from './PopOver-CEd84c-C.mjs';
import __nuxt_component_1 from './ErrorHandler-JOumkKzj.mjs';
import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import { p as paymentHelper } from './paymentHelper-DD2LjzWi.mjs';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { j as _export_sfc, a as useCommonStore } from './server.mjs';
import { storeToRefs } from 'pinia';
import { mergeProps, withCtx, createVNode, toDisplayString, withModifiers, createBlock, createCommentVNode, withDirectives, vModelText, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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
  setup() {
    const userStore = useUserStore();
    const { getUserToken } = userStore;
    const commonStore = useCommonStore();
    const { paymentGateway } = storeToRefs(commonStore);
    const { unAuthGet, postRequest, setToastMessage, setToastError } = commonStore;
    return {
      getUserToken,
      paymentGateway,
      postRequest,
      setToastMessage,
      setToastError,
      unAuthGet
    };
  },
  name: "BankPopup",
  data() {
    return {
      formSubmitting: false,
      hasFormError: false,
      transId: "",
      errors: []
    };
  },
  watch: {},
  props: {
    order: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  components: {
    ErrorHandler: __nuxt_component_1,
    AjaxButton: _sfc_main$1,
    PopOver
  },
  computed: {
    orderId() {
      return parseInt(this.$route.params.id);
    }
  },
  mixins: [paymentHelper],
  methods: {
    async formSubmit() {
      var _a;
      if (this.transId) {
        this.hasFormError = false;
        this.formSubmitting = true;
        const data = await this.postRequest({
          params: {
            data: this.phpEncryption({
              id: this.orderId,
              trans_id: this.transId,
              user_token: await this.getUserToken()
            })
          },
          api: "setTransaction"
        });
        if ((data == null ? void 0 : data.status) === 200) {
          this.closeBankVerify();
          this.setToastMessage(this.$t("date.pds"));
        } else {
          this.errors = (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.form;
        }
        this.formSubmitting = false;
      } else {
        this.hasFormError = true;
      }
    },
    closeBankVerify() {
      this.$emit("close", this.transId);
    }
  },
  created() {
  },
  async mounted() {
    var _a;
    this.transId = (_a = this.order) == null ? void 0 : _a.trans_id;
    if (!this.paymentGateway) {
      const data = await this.unAuthGet({
        params: "",
        api: "paymentGateway"
      });
      this.setPaymentGateway(data.data);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_pop_over = PopOver;
  const _component_error_handler = __nuxt_component_1;
  const _component_ajax_button = _sfc_main$1;
  _push(ssrRenderComponent(_component_pop_over, mergeProps({
    title: _ctx.$t("date.pv"),
    onClose: $options.closeBankVerify,
    layer: true,
    class: "bank-popup",
    "elem-id": "verify-bank"
  }, _attrs), {
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="mn-w-350x mn-w-sm-0"${_scopeId}>${ssrInterpolate(_ctx.$t("date.kr"))}</p><div class="bank-detail mt-30 mt-sm-20 mb-30 mb-sm-20"${_scopeId}><div${_scopeId}><label class="bold block mb-5"${_scopeId}>${ssrInterpolate(_ctx.$t("date.bn"))}</label><label class="color-lite"${_scopeId}>${ssrInterpolate($setup.paymentGateway.bank_name)}</label></div><div${_scopeId}><label class="bold block mb-5"${_scopeId}>${ssrInterpolate(_ctx.$t("date.ahn"))}</label><label class="color-lite"${_scopeId}>${ssrInterpolate($setup.paymentGateway.account_name)}</label></div><div${_scopeId}><label class="bold block mb-5"${_scopeId}>${ssrInterpolate(_ctx.$t("date.an"))}</label><label class="color-lite"${_scopeId}>${ssrInterpolate($setup.paymentGateway.account_number)}</label></div><div${_scopeId}><label class="bold block mb-5"${_scopeId}>${ssrInterpolate(_ctx.$t("date.brn"))}</label><label class="color-lite"${_scopeId}>${ssrInterpolate($setup.paymentGateway.branch_name)}</label></div></div><form${_scopeId}>`);
        _push2(ssrRenderComponent(_component_error_handler, { errors: $data.errors }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass([{ invalid: !$data.transId && $data.hasFormError }, "input-wrap"])}"${_scopeId}><label class="color-lite"${_scopeId}>${ssrInterpolate(_ctx.$t("date.ti"))}</label><div class="icon-input"${_scopeId}><i class="icon trans-icon"${_scopeId}></i><input type="text"${ssrRenderAttr("value", $data.transId)} placeholder="eg. 20230704N2H5X2"${_scopeId}></div>`);
        if (!$data.transId && $data.hasFormError) {
          _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("date.ti") }))}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="flex right gap-10 no-space"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ajax_button, {
          type: "button",
          class: "outline-btn plr-20 w-100x",
          text: _ctx.$t("addressPopup.cancel"),
          "loading-text": _ctx.$t("forgotPassword.registering"),
          onClicked: $options.closeBankVerify
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ajax_button, {
          class: "primary-btn plr-20 w-150x",
          "fetching-data": $data.formSubmitting,
          "loading-text": _ctx.$t("forgotPassword.registering")
        }, null, _parent2, _scopeId));
        _push2(`</div></form>`);
      } else {
        return [
          createVNode("p", { class: "mn-w-350x mn-w-sm-0" }, toDisplayString(_ctx.$t("date.kr")), 1),
          createVNode("div", { class: "bank-detail mt-30 mt-sm-20 mb-30 mb-sm-20" }, [
            createVNode("div", null, [
              createVNode("label", { class: "bold block mb-5" }, toDisplayString(_ctx.$t("date.bn")), 1),
              createVNode("label", { class: "color-lite" }, toDisplayString($setup.paymentGateway.bank_name), 1)
            ]),
            createVNode("div", null, [
              createVNode("label", { class: "bold block mb-5" }, toDisplayString(_ctx.$t("date.ahn")), 1),
              createVNode("label", { class: "color-lite" }, toDisplayString($setup.paymentGateway.account_name), 1)
            ]),
            createVNode("div", null, [
              createVNode("label", { class: "bold block mb-5" }, toDisplayString(_ctx.$t("date.an")), 1),
              createVNode("label", { class: "color-lite" }, toDisplayString($setup.paymentGateway.account_number), 1)
            ]),
            createVNode("div", null, [
              createVNode("label", { class: "bold block mb-5" }, toDisplayString(_ctx.$t("date.brn")), 1),
              createVNode("label", { class: "color-lite" }, toDisplayString($setup.paymentGateway.branch_name), 1)
            ])
          ]),
          createVNode("form", {
            onSubmit: withModifiers($options.formSubmit, ["prevent"])
          }, [
            createVNode(_component_error_handler, { errors: $data.errors }, null, 8, ["errors"]),
            createVNode("div", {
              class: ["input-wrap", { invalid: !$data.transId && $data.hasFormError }]
            }, [
              createVNode("label", { class: "color-lite" }, toDisplayString(_ctx.$t("date.ti")), 1),
              createVNode("div", { class: "icon-input" }, [
                createVNode("i", { class: "icon trans-icon" }),
                withDirectives(createVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": ($event) => $data.transId = $event,
                  placeholder: "eg. 20230704N2H5X2"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $data.transId]
                ])
              ]),
              !$data.transId && $data.hasFormError ? (openBlock(), createBlock("span", {
                key: 0,
                class: "error"
              }, toDisplayString(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("date.ti") })), 1)) : createCommentVNode("", true)
            ], 2),
            createVNode("div", {
              ref: "submitBtn",
              class: "flex right gap-10 no-space"
            }, [
              createVNode(_component_ajax_button, {
                type: "button",
                class: "outline-btn plr-20 w-100x",
                text: _ctx.$t("addressPopup.cancel"),
                "loading-text": _ctx.$t("forgotPassword.registering"),
                onClicked: $options.closeBankVerify
              }, null, 8, ["text", "loading-text", "onClicked"]),
              createVNode(_component_ajax_button, {
                class: "primary-btn plr-20 w-150x",
                "fetching-data": $data.formSubmitting,
                "loading-text": _ctx.$t("forgotPassword.registering")
              }, null, 8, ["fetching-data", "loading-text"])
            ], 512)
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BankPopup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BankPopup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { BankPopup as default };
//# sourceMappingURL=BankPopup-DJtffZxX.mjs.map
