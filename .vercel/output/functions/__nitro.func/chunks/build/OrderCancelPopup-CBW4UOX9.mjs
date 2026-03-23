import PopOver from './PopOver-CEd84c-C.mjs';
import __nuxt_component_1 from './Spinner-CfK0SFd4.mjs';
import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { v as validation } from './validation-Cjx0gTHd.mjs';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { j as _export_sfc, p as prepareGetUrl, a as useCommonStore, u as useLanguageStore } from './server.mjs';
import { u as useOrderStore } from './order-_dkQJpfU.mjs';
import { storeToRefs } from 'pinia';
import { mergeProps, withCtx, createVNode, withModifiers, toDisplayString, createBlock, openBlock, withDirectives, createCommentVNode, vModelText, useSSRContext } from 'vue';
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

const _sfc_main = {
  setup() {
    const userStore = useUserStore();
    const { getUserToken } = userStore;
    const commonStore = useCommonStore();
    const { setToastMessage, setToastError, getRequest, postRequest } = commonStore;
    const orderStore = useOrderStore();
    const { cancellationFind } = orderStore;
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    return {
      getUserToken,
      cancellationFind,
      setToastMessage,
      getRequest,
      setToastError,
      langCode,
      postRequest
    };
  },
  name: "OrderCancelPopup",
  data() {
    return {
      title: "",
      cancellationMessage: "",
      submitting: false,
      hasFormError: false,
      fetchingCancelledData: false
    };
  },
  props: {
    orderId: {
      type: Number,
      required: true
    }
  },
  components: {
    AjaxButton: _sfc_main$1,
    PopOver,
    Spinner: __nuxt_component_1
  },
  mixins: [util, validation],
  methods: {
    serializing(obj) {
      this.title = obj.title;
      this.cancellationMessage = obj.message;
    },
    async submitForm() {
      var _a;
      if (this.title && this.cancellationMessage) {
        this.submitting = true;
        const data = await this.postRequest({
          api: "cancelOrder",
          params: {
            user_token: await this.getUserToken(),
            order_id: this.orderId,
            message: this.cancellationMessage,
            title: this.title
          },
          lang: this.langCode
        });
        this.submitting = false;
        if ((data == null ? void 0 : data.status) === 200) {
          this.$emit("success");
          this.setToastMessage(data.message);
        } else if ((data == null ? void 0 : data.status) === 204) {
          this.setToastError(data.message);
        } else {
          this.setToastError((_a = data.data) == null ? void 0 : _a.form.join(", "));
        }
      } else {
        this.hasFormError = true;
      }
    }
  },
  async mounted() {
    this.fetchingCancelledData = true;
    const data = await this.getRequest({
      api: "cancellationFind",
      params: `/${this.orderId}?${prepareGetUrl({
        id: this.orderId,
        user_token: await this.getUserToken()
      })}`,
      lang: this.langCode
    });
    if ((data == null ? void 0 : data.status) === 200) {
      this.serializing(data.data);
    }
    this.fetchingCancelledData = false;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_pop_over = PopOver;
  const _component_spinner = __nuxt_component_1;
  const _component_ajax_button = _sfc_main$1;
  _push(ssrRenderComponent(_component_pop_over, mergeProps({
    title: _ctx.$t("orderCancelPopup.cancelOrder"),
    onClose: ($event) => _ctx.$emit("close"),
    "elem-id": "cancel-order-pop-over",
    layer: true,
    class: "cancel-popup"
  }, _attrs), {
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($data.fetchingCancelledData) {
          _push2(`<div class="mn-h-200x flex"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_spinner, { radius: 70 }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<div${_scopeId}><div class="${ssrRenderClass([{ invalid: !$data.title && $data.hasFormError }, "input-wrap"])}"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("orderCancelPopup.title"))}</label><input type="text"${ssrRenderAttr("value", $data.title)}${ssrRenderAttr("placeholder", _ctx.$t("contact.your", { type: _ctx.$t("orderCancelPopup.titleSmall") }))}${_scopeId}>`);
          if (!$data.title && $data.hasFormError) {
            _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("orderCancelPopup.title") }))}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><div class="${ssrRenderClass([{ invalid: !$data.cancellationMessage && $data.hasFormError }, "input-wrap mb-0"])}"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.message"))}</label><textarea${_scopeId}>${ssrInterpolate($data.cancellationMessage)}</textarea>`);
          if (!$data.cancellationMessage && $data.hasFormError) {
            _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.message") }))}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div>`);
        }
      } else {
        return [
          $data.fetchingCancelledData ? (openBlock(), createBlock("div", {
            key: 0,
            class: "mn-h-200x flex"
          }, [
            createVNode(_component_spinner, { radius: 70 })
          ])) : (openBlock(), createBlock("div", { key: 1 }, [
            createVNode("div", {
              class: ["input-wrap", { invalid: !$data.title && $data.hasFormError }]
            }, [
              createVNode("label", null, toDisplayString(_ctx.$t("orderCancelPopup.title")), 1),
              withDirectives(createVNode("input", {
                type: "text",
                "onUpdate:modelValue": ($event) => $data.title = $event,
                placeholder: _ctx.$t("contact.your", { type: _ctx.$t("orderCancelPopup.titleSmall") })
              }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                [vModelText, $data.title]
              ]),
              !$data.title && $data.hasFormError ? (openBlock(), createBlock("span", {
                key: 0,
                class: "error"
              }, toDisplayString(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("orderCancelPopup.title") })), 1)) : createCommentVNode("", true)
            ], 2),
            createVNode("div", {
              class: ["input-wrap mb-0", { invalid: !$data.cancellationMessage && $data.hasFormError }]
            }, [
              createVNode("label", null, toDisplayString(_ctx.$t("addressPopup.message")), 1),
              withDirectives(createVNode("textarea", {
                "onUpdate:modelValue": ($event) => $data.cancellationMessage = $event
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, $data.cancellationMessage]
              ]),
              !$data.cancellationMessage && $data.hasFormError ? (openBlock(), createBlock("span", {
                key: 0,
                class: "error"
              }, toDisplayString(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.message") })), 1)) : createCommentVNode("", true)
            ], 2)
          ]))
        ];
      }
    }),
    "pop-footer": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex j-end gap-10"${_scopeId}><button aria-label="close" class="outline-btn plr-30 plr-sm-15"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.cancel"))}</button>`);
        _push2(ssrRenderComponent(_component_ajax_button, {
          class: "primary-btn plr-30 plr-sm-15",
          type: "button",
          "fetching-data": $data.submitting,
          "loading-text": _ctx.$t("checkoutRight.submitting"),
          text: _ctx.$t("orderCancelPopup.SendMessage"),
          disabled: $data.fetchingCancelledData,
          onClicked: $options.submitForm
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex j-end gap-10" }, [
            createVNode("button", {
              "aria-label": "close",
              class: "outline-btn plr-30 plr-sm-15",
              onClick: withModifiers(($event) => _ctx.$emit("close"), ["prevent"])
            }, toDisplayString(_ctx.$t("addressPopup.cancel")), 9, ["onClick"]),
            createVNode(_component_ajax_button, {
              class: "primary-btn plr-30 plr-sm-15",
              type: "button",
              "fetching-data": $data.submitting,
              "loading-text": _ctx.$t("checkoutRight.submitting"),
              text: _ctx.$t("orderCancelPopup.SendMessage"),
              disabled: $data.fetchingCancelledData,
              onClicked: $options.submitForm
            }, null, 8, ["fetching-data", "loading-text", "text", "disabled", "onClicked"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OrderCancelPopup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OrderCancelPopup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { OrderCancelPopup as default };
//# sourceMappingURL=OrderCancelPopup-CBW4UOX9.mjs.map
