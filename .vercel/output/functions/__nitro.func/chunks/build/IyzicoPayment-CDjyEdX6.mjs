import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import __nuxt_component_1 from './Spinner-CfK0SFd4.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { j as _export_sfc } from './server.mjs';
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
  name: "IyzicoPayment",
  data() {
    return {
      errorText: "",
      placingOrder: false
    };
  },
  watch: {},
  props: {
    order: {
      type: Object,
      default() {
        return null;
      }
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
  computed: {},
  mixins: [util],
  methods: {
    confirmOrder() {
      this.placingOrder = true;
      this.$emit("clicked");
    },
    makePayment(isCheckoutPage = false) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      if ((_a = this.order) == null ? void 0 : _a.iyzico_payment) {
        if (((_c = (_b = this.order) == null ? void 0 : _b.iyzico_payment) == null ? void 0 : _c.status) === "success") {
          if (isCheckoutPage) {
            this.$emit("success", {
              id: (_d = this.order) == null ? void 0 : _d.id,
              redirect: false
            });
          }
          (void 0).location.href = (_f = (_e = this.order) == null ? void 0 : _e.iyzico_payment) == null ? void 0 : _f.paymentPageUrl;
        } else if (((_h = (_g = this.order) == null ? void 0 : _g.iyzico_payment) == null ? void 0 : _h.status) === "failure") {
          this.$emit("error", (_j = (_i = this.order) == null ? void 0 : _i.iyzico_payment) == null ? void 0 : _j.errorMessage);
        } else {
          this.$emit("closed", this.order.id);
        }
        this.placingOrder = false;
      }
    }
  },
  created() {
  },
  async mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ajax_button = _sfc_main$1;
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
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IyzicoPayment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_4 as default };
//# sourceMappingURL=IyzicoPayment-CDjyEdX6.mjs.map
