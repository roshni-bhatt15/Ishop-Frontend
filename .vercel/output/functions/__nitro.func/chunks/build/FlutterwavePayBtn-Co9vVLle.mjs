import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import __nuxt_component_1 from './Spinner-CfK0SFd4.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { p as paymentHelper } from './paymentHelper-DD2LjzWi.mjs';
import { j as _export_sfc, u as useLanguageStore, a as useCommonStore } from './server.mjs';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { storeToRefs } from 'pinia';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
    const userStore = useUserStore();
    const { getUserToken } = userStore;
    const commonStore = useCommonStore();
    const { postRequest } = commonStore;
    return { postRequest, getUserToken, langCode };
  },
  name: "FlutterwavePayBtn",
  data() {
    return {
      errorText: "",
      submitting: false,
      placingOrder: false
    };
  },
  props: {
    order: {
      type: Object,
      default() {
        return null;
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    currency: {
      type: String,
      default: "USD"
    },
    amount: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ""
    },
    userId: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      default: ""
    },
    publicKey: {
      type: String,
      default: ""
    },
    siteName: {
      type: String,
      default: ""
    },
    headerLogo: {
      type: String,
      default: ""
    },
    btnText: {
      type: String,
      default: ""
    }
  },
  components: {
    AjaxButton: _sfc_main$1,
    Spinner: __nuxt_component_1
  },
  mixins: [util, paymentHelper],
  methods: {
    confirmOrder() {
      this.placingOrder = true;
      this.$emit("clicked");
    },
    makePayment() {
      this.placingOrder = false;
      const self = this;
      const fw = FlutterwaveCheckout({
        public_key: this.publicKey,
        tx_ref: "ref_" + this.order.order,
        amount: this.amount,
        currency: this.currency,
        payment_options: "card, banktransfer, ussd",
        meta: {
          consumer_id: this.userId
        },
        customer: {
          email: this.email,
          user_id: this.userId,
          name: this.name
        },
        callback: async (data) => {
          this.submitting = true;
          await this.paymentDoneFn(this.order.id, data.transaction_id, this.orderMethods.FLUTTERWAVE);
          fw.close();
        },
        onclose: function() {
          self.$emit("closed", self.order.id);
        },
        customizations: {
          title: this.siteName,
          description: "",
          logo: this.headerLogo
        }
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ajax_button = _sfc_main$1;
  const _component_spinner = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_ajax_button, {
    class: "primary-btn plr-30 plr-sm-15",
    type: "button",
    "fetching-data": $data.placingOrder,
    text: $props.btnText,
    onClicked: $options.confirmOrder
  }, null, _parent));
  if ($data.errorText) {
    _push(`<p class="error">${ssrInterpolate($data.errorText)}</p>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.loading || $data.submitting) {
    _push(`<span class="spinner-wrapper flex layer-white">`);
    _push(ssrRenderComponent(_component_spinner, { radius: 50 }, null, _parent));
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FlutterwavePayBtn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_5 as default };
//# sourceMappingURL=FlutterwavePayBtn-Co9vVLle.mjs.map
