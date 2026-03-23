import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
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
  name: "OrderTabbing",
  components: {},
  directives: {},
  props: {},
  computed: {
    paidOrders() {
      var _a, _b;
      return ((_b = (_a = this.$route) == null ? void 0 : _a.query) == null ? void 0 : _b.paid) || false;
    },
    unpaidOrders() {
      var _a, _b;
      return ((_b = (_a = this.$route) == null ? void 0 : _a.query) == null ? void 0 : _b.unpaid) || false;
    },
    cardPaymentOrders() {
      var _a, _b;
      return ((_b = (_a = this.$route) == null ? void 0 : _a.query) == null ? void 0 : _b.cardPayment) || false;
    },
    cashOnDeliveryOrders() {
      var _a, _b;
      return ((_b = (_a = this.$route) == null ? void 0 : _a.query) == null ? void 0 : _b.cashOnDelivery) || false;
    },
    cancelledOrders() {
      var _a, _b;
      return ((_b = (_a = this.$route) == null ? void 0 : _a.query) == null ? void 0 : _b.cancelled) || false;
    }
  },
  data() {
    return {
      cashOnDelivery: false,
      cardPayment: false,
      cancelled: false,
      paid: false,
      unpaid: false
    };
  },
  methods: {
    generateParam() {
      const param = {};
      if (this.cancelledOrders) {
        param["cancelled"] = this.cancelledOrders ? 1 : 0;
      }
      if (this.paidOrders) {
        param["paid"] = this.paidOrders ? 1 : 0;
      }
      if (this.unpaidOrders) {
        param["unpaid"] = this.unpaidOrders ? 1 : 0;
      }
      if (this.cardPaymentOrders) {
        param["card_payment"] = this.cardPaymentOrders ? 1 : 0;
      }
      if (this.cashOnDeliveryOrders) {
        param["cash_on_delivery"] = this.cashOnDeliveryOrders ? 1 : 0;
      }
      return param;
    },
    updateRoute(key, value = null) {
      this.$router.push({
        query: {
          ...this.$route.query,
          page: 1,
          orderBy: "created_at",
          orderByType: "desc",
          [key]: value
        }
      });
      this.$emit("fetch-data", this.generateParam());
    },
    unpaidChanged() {
      if (this.unpaid) {
        this.updateRoute("unpaid", this.unpaid);
      } else {
        this.updateRoute("unpaid");
      }
    },
    cardPaymentChanged() {
      if (this.cardPayment) {
        this.updateRoute("cardPayment", this.cardPayment);
      } else {
        this.updateRoute("cardPayment");
      }
    },
    codChanged() {
      if (this.cashOnDelivery) {
        this.updateRoute("cashOnDelivery", this.cashOnDelivery);
      } else {
        this.updateRoute("cashOnDelivery");
      }
    },
    paidChanged() {
      if (this.paid) {
        this.updateRoute("paid", this.paid);
      } else {
        this.updateRoute("paid");
      }
    },
    cancelledChanged() {
      if (this.cancelled) {
        this.updateRoute("cancelled", this.cancelled);
      } else {
        this.updateRoute("cancelled");
      }
    },
    resetting() {
      this.cancelled = this.cancelledOrders;
      this.paid = this.paidOrders;
      this.unpaid = this.unpaidOrders;
      this.cardPayment = this.cardPaymentOrders;
      this.cashOnDelivery = this.cashOnDeliveryOrders;
    }
  },
  mounted() {
    (void 0).addEventListener("popstate", this.resetting);
    this.resetting();
  },
  unmounted() {
    (void 0).removeEventListener("popstate", this.resetting);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-10 flex start wrap" }, _attrs))}><div class="ck-button"><label><input hidden type="checkbox" name="orders-variation"${ssrIncludeBooleanAttr(Array.isArray($data.cancelled) ? ssrLooseContain($data.cancelled, null) : $data.cancelled) ? " checked" : ""}><span>${ssrInterpolate(_ctx.$t("orderTabbing.cancelled"))}</span></label></div><div class="ck-button"><label><input hidden type="checkbox" name="orders-variation"${ssrIncludeBooleanAttr(Array.isArray($data.cashOnDelivery) ? ssrLooseContain($data.cashOnDelivery, null) : $data.cashOnDelivery) ? " checked" : ""}><span>${ssrInterpolate(_ctx.$t("orderTabbing.cod"))}</span></label></div><div class="ck-button"><label><input hidden type="checkbox" name="orders-variation"${ssrIncludeBooleanAttr(Array.isArray($data.cardPayment) ? ssrLooseContain($data.cardPayment, null) : $data.cardPayment) ? " checked" : ""}><span>${ssrInterpolate(_ctx.$t("orderTabbing.cardPayment"))}</span></label></div><div class="ck-button"><label><input hidden type="checkbox" name="orders-variation"${ssrIncludeBooleanAttr(Array.isArray($data.paid) ? ssrLooseContain($data.paid, null) : $data.paid) ? " checked" : ""}><span>${ssrInterpolate(_ctx.$t("orderTabbing.paid"))}</span></label></div><div class="ck-button"><label><input hidden type="checkbox" name="orders-variation"${ssrIncludeBooleanAttr(Array.isArray($data.unpaid) ? ssrLooseContain($data.unpaid, null) : $data.unpaid) ? " checked" : ""}><span>${ssrInterpolate(_ctx.$t("orderTabbing.unPaid"))}</span></label></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OrderTabbing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OrderTabbing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { OrderTabbing as default };
//# sourceMappingURL=OrderTabbing-Dq7M6Url.mjs.map
