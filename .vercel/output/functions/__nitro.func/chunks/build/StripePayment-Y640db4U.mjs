import PopOver from './PopOver-CEd84c-C.mjs';
import __nuxt_component_2 from './PriceFormat-BQp9_8mt.mjs';
import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import { p as paymentHelper } from './paymentHelper-DD2LjzWi.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { j as _export_sfc, u as useLanguageStore, a as useCommonStore } from './server.mjs';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { storeToRefs } from 'pinia';
import { withCtx, createVNode, toDisplayString, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const commonStore = useCommonStore();
    const { currencyIcon, setting } = storeToRefs(commonStore);
    const { setToastMessage, setToastError, postRequest } = commonStore;
    const userStore = useUserStore();
    const { getUserToken } = userStore;
    const { profile } = storeToRefs(userStore);
    const currencyPosition = computed(() => {
      return setting.value.currency_position;
    });
    return {
      getUserToken,
      currencyPosition,
      langCode,
      profile,
      postRequest,
      currencyIcon,
      setting,
      setToastMessage,
      setToastError
    };
  },
  name: "StripePayment",
  data() {
    return {
      stripe: null,
      card: null,
      showPopup: true,
      loader: true,
      submitting: false,
      errorText: ""
    };
  },
  mixins: [util, paymentHelper],
  watch: {},
  props: {
    orderId: {
      type: Number,
      default: ""
    },
    stripeKey: {
      type: String,
      default: ""
    },
    currency: {
      type: String,
      default: "USD"
    },
    amount: {
      type: Number,
      default: 0
    },
    userName: {
      type: String,
      default: ""
    },
    siteName: {
      type: String,
      default: ""
    },
    userEmail: {
      type: String,
      default: ""
    }
  },
  components: {
    PopOver,
    AjaxButton: _sfc_main$1,
    PriceFormat: __nuxt_component_2
  },
  computed: {
    payBtnText() {
      return this.$t("stripePayment.pay", { amount: this.formattedPrice });
    },
    formattedPrice() {
      return this.priceFormat(this.currencyPosition, this.currencyIcon, this.amount, this.setting);
    }
  },
  methods: {
    closePopOver() {
      this.$emit("closed");
      this.showPopup = false;
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    },
    initPayment() {
      this.stripe = Stripe(this.stripeKey);
      var elements = this.stripe.elements();
      var style = {
        base: {
          iconColor: "#666EE8",
          color: "#31325F",
          lineHeight: "40px",
          "::placeholder": {
            color: "#CFD7E0"
          }
        }
      };
      this.card = elements.create("cardNumber", {
        style,
        showIcon: true
      });
      const cardExpiry = elements.create("cardExpiry", {
        style
      });
      const cardCvc = elements.create("cardCvc", {
        style
      });
      this.card.mount("#card-number");
      cardExpiry.mount("#card-expiry");
      cardCvc.mount("#card-cvc");
      this.loader = false;
    },
    createStripeToken() {
      var _a;
      this.errorText = "";
      this.submitting = true;
      this.stripe.createToken(this.card, { name: (_a = this.profile) == null ? void 0 : _a.name }).then(async (result) => {
        if (result.error) {
          this.submitting = false;
          this.errorText = result.error.message;
        } else {
          await this.paymentDoneFn(this.orderId, result.token.id, this.orderMethods.STRIPE);
        }
      });
    }
  },
  created() {
  },
  async mounted() {
    let recaptchaScript = (void 0).createElement("script");
    recaptchaScript.setAttribute("src", "https://js.stripe.com/v3/");
    (void 0).head.appendChild(recaptchaScript);
    recaptchaScript.onload = () => {
      this.initPayment();
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_pop_over = PopOver;
  const _component_price_format = __nuxt_component_2;
  const _component_ajax_button = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($data.showPopup) {
    _push(ssrRenderComponent(_component_pop_over, {
      onClose: $options.closePopOver,
      "elem-id": "card-pop-over",
      class: "card-popup popup-top-auto",
      layer: true,
      "outside-click-on": false
    }, {
      heading: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div${_scopeId}><h3 class="color-inherit semi-bold"${_scopeId}>${ssrInterpolate($props.siteName)}</h3><h6 class="color-inherit opacity-8 mb-5"${_scopeId}>${ssrInterpolate(_ctx.$t("stripePayment.bestDeal"))}</h6><h3 class="color-inherit"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_price_format, { price: $props.amount }, null, _parent2, _scopeId));
          _push2(`</h3></div>`);
        } else {
          return [
            createVNode("div", null, [
              createVNode("h3", { class: "color-inherit semi-bold" }, toDisplayString($props.siteName), 1),
              createVNode("h6", { class: "color-inherit opacity-8 mb-5" }, toDisplayString(_ctx.$t("stripePayment.bestDeal")), 1),
              createVNode("h3", { class: "color-inherit" }, [
                createVNode(_component_price_format, { price: $props.amount }, null, 8, ["price"])
              ])
            ])
          ];
        }
      }),
      content: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<form action="" method="post" id="payment-form" class="${ssrRenderClass([{ "opacity-0": $data.loader }, "stripe-form"])}"${_scopeId}><div class="input-wrap"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("stripePayment.creditDebit"))}</label><div id="card-number"${_scopeId}></div></div><div class="flex"${_scopeId}><div class="input-wrap"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("stripePayment.creditExpiry"))}</label><div id="card-expiry"${_scopeId}></div></div><div class="input-wrap"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("stripePayment.creditCvc"))}</label><div id="card-cvc"${_scopeId}></div></div></div><div id="card-errors" role="alert"${_scopeId}></div><p class="error"${_scopeId}>${ssrInterpolate($data.errorText)}</p></form>`);
        } else {
          return [
            createVNode("form", {
              action: "",
              method: "post",
              id: "payment-form",
              class: ["stripe-form", { "opacity-0": $data.loader }]
            }, [
              createVNode("div", { class: "input-wrap" }, [
                createVNode("label", null, toDisplayString(_ctx.$t("stripePayment.creditDebit")), 1),
                createVNode("div", { id: "card-number" })
              ]),
              createVNode("div", { class: "flex" }, [
                createVNode("div", { class: "input-wrap" }, [
                  createVNode("label", null, toDisplayString(_ctx.$t("stripePayment.creditExpiry")), 1),
                  createVNode("div", { id: "card-expiry" })
                ]),
                createVNode("div", { class: "input-wrap" }, [
                  createVNode("label", null, toDisplayString(_ctx.$t("stripePayment.creditCvc")), 1),
                  createVNode("div", { id: "card-cvc" })
                ])
              ]),
              createVNode("div", {
                id: "card-errors",
                role: "alert"
              }),
              createVNode("p", { class: "error" }, toDisplayString($data.errorText), 1)
            ], 2)
          ];
        }
      }),
      "pop-footer": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_ajax_button, {
            class: "primary-btn w-100",
            type: "button",
            "fetching-data": $data.submitting,
            onClicked: $options.createStripeToken,
            "loading-text": _ctx.$t("stripePayment.placing"),
            text: $options.payBtnText
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_ajax_button, {
              class: "primary-btn w-100",
              type: "button",
              "fetching-data": $data.submitting,
              onClicked: $options.createStripeToken,
              "loading-text": _ctx.$t("stripePayment.placing"),
              text: $options.payBtnText
            }, null, 8, ["fetching-data", "onClicked", "loading-text", "text"])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StripePayment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const StripePayment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { StripePayment as default };
//# sourceMappingURL=StripePayment-Y640db4U.mjs.map
