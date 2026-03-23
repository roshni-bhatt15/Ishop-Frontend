import PopOver from './PopOver-CEd84c-C.mjs';
import __nuxt_component_1 from './PaymentGateways-DcJBOKM7.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import RazorpayPayment from './RazorpayPayment-CqxnzU4N.mjs';
import StripePayment from './StripePayment-Y640db4U.mjs';
import { j as _export_sfc, a as useCommonStore } from './server.mjs';
import { storeToRefs } from 'pinia';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './AjaxButton-DzViXcHL.mjs';
import './IyzicoPayment-CDjyEdX6.mjs';
import './FlutterwavePayBtn-Co9vVLle.mjs';
import './paymentHelper-DD2LjzWi.mjs';
import './productPriceHelper-BjqO3bPN.mjs';
import './cart-BePPNdc0.mjs';
import './PriceFormat-BQp9_8mt.mjs';

const _sfc_main = {
  setup() {
    const commonStore = useCommonStore();
    const { currencyIcon, setting, paymentGateway } = storeToRefs(commonStore);
    const { setToastMessage, setToastError } = commonStore;
    const userStore = useUserStore();
    const { profile } = storeToRefs(userStore);
    return { currencyIcon, setting, paymentGateway, setToastMessage, setToastError, profile };
  },
  name: "PaymentPopup",
  data() {
    return {
      payNow: false
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
    PaymentGateways: __nuxt_component_1,
    StripePayment,
    RazorpayPayment,
    PopOver
  },
  computed: {
    userEmail() {
      var _a, _b;
      return ((_a = this.order) == null ? void 0 : _a.userEmail) || ((_b = this.profile) == null ? void 0 : _b.email);
    },
    currencyData() {
      var _a;
      return ((_a = this.order) == null ? void 0 : _a.currency) || this.currency;
    },
    userName() {
      var _a, _b;
      return ((_a = this.order) == null ? void 0 : _a.userName) || ((_b = this.profile) == null ? void 0 : _b.name);
    },
    razorpayPaymentToken() {
      var _a;
      return ((_a = this.order) == null ? void 0 : _a.payment_token) || null;
    },
    amount() {
      var _a;
      return ((_a = this.order) == null ? void 0 : _a.total_amount) || 0;
    },
    orderId() {
      var _a;
      return ((_a = this.order) == null ? void 0 : _a.id) || null;
    }
  },
  mixins: [util],
  methods: {
    isOrderPlaced(evt) {
      if (evt) {
        (void 0).location.reload(true);
        this.setToastMessage(this.$t("payButton.placedSuccess"));
        this.payNow = false;
      } else {
        this.orderPlaced("closed");
      }
    },
    orderPlaced(type = "success", event = "Error") {
      if (type === "success") {
        this.setToastMessage(this.$t("payButton.placedSuccess"));
        this.$emit("success");
      } else if (type === "error") {
        this.setToastError(event);
      } else if (type === "closed") {
        this.payNow = false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_pop_over = PopOver;
  const _component_payment_gateways = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if (!$data.payNow) {
    _push(ssrRenderComponent(_component_pop_over, {
      title: _ctx.$t("checkout.selectPayment"),
      "elem-id": "pay-now-pop-over",
      layer: true,
      class: "rating-popup payment-popup popup-top-auto",
      onClose: ($event) => _ctx.$emit("close")
    }, {
      content: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_payment_gateways, {
            page: "order",
            order: $props.order,
            "total-price": parseFloat($options.amount),
            onOrderStatus: $options.isOrderPlaced,
            onOrderConfirm: ($event) => $data.payNow = true,
            onClose: ($event) => _ctx.$emit("close")
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_payment_gateways, {
              page: "order",
              order: $props.order,
              "total-price": parseFloat($options.amount),
              onOrderStatus: $options.isOrderPlaced,
              onOrderConfirm: ($event) => $data.payNow = true,
              onClose: ($event) => _ctx.$emit("close")
            }, null, 8, ["order", "total-price", "onOrderStatus", "onOrderConfirm", "onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PaymentPopup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=PaymentPopup-CgOZB-_O.mjs.map
