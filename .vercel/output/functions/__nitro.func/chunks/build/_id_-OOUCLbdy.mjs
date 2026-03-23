import { a as useCommonStore, d as useHead, u as useLanguageStore, b as useAuthStore, i as useRoute, c as useI18n, g as useConstants, f as useUtils, _ as __nuxt_component_0$2 } from './server.mjs';
import { computed, ref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useResourceStore } from './resource-Did0obd8.mjs';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { u as useOrderStore } from './order-_dkQJpfU.mjs';
import { storeToRefs } from 'pinia';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const { getUserToken } = userStore;
    const orderStore = useOrderStore();
    const { ordered } = storeToRefs(orderStore);
    const { updateOrderData } = orderStore;
    const resourceStore = useResourceStore();
    const { countryList, phoneList } = storeToRefs(resourceStore);
    const { setCountryList, setPhoneList } = resourceStore;
    const commonStore = useCommonStore();
    const { currencyIcon, setting, customScripts, paymentGateway, site_setting } = storeToRefs(commonStore);
    const { setToastMessage, setToastError, unAuthGet, postRequest, setPaymentGateway, getRequest } = commonStore;
    const { pageMeta } = useMetaData();
    useHead(pageMeta(site_setting.value));
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const authStore = useAuthStore();
    const { authenticated } = storeToRefs(authStore);
    computed(() => {
      return authenticated.value || false;
    });
    ref(false);
    ref(false);
    ref(false);
    ref(0);
    const route = useRoute();
    const { t } = useI18n();
    const {
      status,
      orderStatusIn
    } = useConstants();
    useUtils();
    computed(() => {
      var _a, _b;
      const index = (_b = (_a = ordered.value) == null ? void 0 : _a.ordered_products) == null ? void 0 : _b.findIndex((i) => {
        return parseInt(i.shipping_type) === 1;
      });
      return !(index !== -1);
    });
    computed(() => {
      var _a, _b, _c, _d;
      if (!((_b = (_a = ordered.value) == null ? void 0 : _a.ordered_products) == null ? void 0 : _b.length)) {
        return null;
      }
      const sp = (_d = (_c = ordered.value) == null ? void 0 : _c.ordered_products[0]) == null ? void 0 : _d.shipping_place;
      if (!(sp == null ? void 0 : sp.pickup_point)) {
        return null;
      }
      const addrArr = [
        sp.pickup_address_line_1,
        sp.pickup_address_line_2,
        sp.pickup_zip,
        sp.pickup_state,
        sp.pickup_city,
        sp.pickup_country
      ];
      let addr = addrArr.filter((i) => i).join(", ");
      if (sp.pickup_phone) {
        addr = `${addr}, <span class="block">${t("date.tl")}: ${sp.pickup_phone}</span>`;
      }
      return addr;
    });
    computed(() => {
      return !(parseFloat(shippingPrice.value) > 0);
    });
    computed(() => {
      var _a, _b;
      return (_b = (_a = ordered.value) == null ? void 0 : _a.user) == null ? void 0 : _b.email;
    });
    computed(() => {
      return orderCancelled.value ? t("order.cancellationMessage") : t("order.cancelOrder");
    });
    computed(() => {
      var _a;
      return parseInt((_a = ordered.value) == null ? void 0 : _a.status) === orderStatusIn.DELIVERED;
    });
    computed(() => {
      var _a, _b;
      return parseInt((_b = (_a = ordered.value) == null ? void 0 : _a.cancellation) == null ? void 0 : _b.refunded) === status.PUBLIC || false;
    });
    const orderCancelled = computed(() => {
      return parseInt(ordered.value.cancelled) === status.PUBLIC;
    });
    computed(() => {
      return ordered.value.calculated.total_price;
    });
    computed(() => {
      return ordered.value.calculated.voucher_price;
    });
    computed(() => {
      return ordered.value.calculated.bundle_offer;
    });
    const shippingPrice = computed(() => {
      return ordered.value.calculated.shipping_price;
    });
    computed(() => {
      return ordered.value.calculated.tax;
    });
    computed(() => {
      return ordered.value.calculated.subtotal;
    });
    computed(() => {
      return parseInt(route.params.id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/order/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-OOUCLbdy.mjs.map
