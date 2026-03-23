import __nuxt_component_0 from './PaymentPopup-CgOZB-_O.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { j as _export_sfc } from './server.mjs';
import './PopOver-CEd84c-C.mjs';
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
import './PaymentGateways-DcJBOKM7.mjs';
import './StripePayment-Y640db4U.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './util-D0P5KPFP.mjs';
import './AjaxButton-DzViXcHL.mjs';
import './Spinner-CfK0SFd4.mjs';
import './paymentHelper-DD2LjzWi.mjs';
import './user-DM1LUZx7.mjs';
import './RazorpayPayment-CqxnzU4N.mjs';
import './IyzicoPayment-CDjyEdX6.mjs';
import './FlutterwavePayBtn-Co9vVLle.mjs';
import './productPriceHelper-BjqO3bPN.mjs';
import './cart-BePPNdc0.mjs';

const _sfc_main = {
  name: "PayButton",
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
    PaymentPopup: __nuxt_component_0
  },
  computed: {},
  mixins: [],
  methods: {},
  created() {
  },
  async mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_payment_popup = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><button class="outline-btn plr-30" aria-label="submit">${ssrInterpolate(_ctx.$t("checkout.payNow"))}</button>`);
  if ($data.payNow) {
    _push(ssrRenderComponent(_component_payment_popup, {
      order: $props.order,
      onClose: ($event) => $data.payNow = false
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PayButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PayButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { PayButton as default };
//# sourceMappingURL=PayButton-5k60Ggt4.mjs.map
