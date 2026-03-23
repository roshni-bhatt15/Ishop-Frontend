import { p as paymentHelper } from './paymentHelper-DD2LjzWi.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { j as _export_sfc, a as useCommonStore } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import 'pinia';
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
    const { setToastMessage, setToastError, postRequest } = commonStore;
    return { getUserToken, setToastMessage, setToastError, postRequest };
  },
  name: "RazorpayPayment",
  data() {
    return {};
  },
  watch: {},
  props: {
    orderId: {
      type: Number,
      default: ""
    },
    razorpayPaymentToken: {
      type: String,
      default: ""
    },
    razorpayKey: {
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
  components: {},
  computed: {},
  mixins: [util, paymentHelper],
  methods: {
    makePayment() {
      const self = this;
      var rzp1 = new Razorpay({
        key: this.razorpayKey,
        amount: parseInt(this.amount * 100),
        name: this.siteName,
        currency: this.currency,
        description: this.$t("payment.bestDeal"),
        //Uncomment if you are using handler function
        "handler": async (response) => {
          if (response.razorpay_order_id === self.razorpayPaymentToken) {
            await this.paymentDoneFn(this.orderId, response.razorpay_order_id, this.orderMethods.RAZORPAY);
          }
        },
        "modal": {
          "ondismiss": function() {
            self.$emit("closed");
          }
        },
        //callback_url: 'http://13.126.183.214/razorpay/checkstatus/?orderid='+this.order_id,
        prefill: {
          name: this.userName,
          email: this.userEmail
        },
        notes: {
          address: ""
        },
        theme: {
          color: "#6F55D5"
        },
        order_id: this.razorpayPaymentToken,
        // callback_url: 'http://127.0.0.1:3000/razorpay-callback',
        redirect: false
      });
      rzp1.on("payment.failed", function(response) {
        console.log(response.error.description);
        console.log(response.error.source);
        console.log(response.error.step);
        console.log(response.error.reason);
        this.$emit("error", response.error.description);
      });
      rzp1.open();
    }
  },
  created() {
  },
  async mounted() {
    let recaptchaScript = (void 0).createElement("script");
    recaptchaScript.setAttribute("src", "https://checkout.razorpay.com/v1/checkout.js");
    (void 0).head.appendChild(recaptchaScript);
    recaptchaScript.addEventListener("load", (event) => {
      this.$refs.payBtn.click();
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><input type="hidden" class="btn btn-success"${ssrRenderAttr("value", _ctx.$t("ajaxButton.submit"))}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RazorpayPayment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RazorpayPayment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { RazorpayPayment as default };
//# sourceMappingURL=RazorpayPayment-CqxnzU4N.mjs.map
