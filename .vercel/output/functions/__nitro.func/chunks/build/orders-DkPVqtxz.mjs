import { a as useCommonStore, d as useHead, u as useLanguageStore, b as useAuthStore, i as useRoute, f as useUtils, g as useConstants, c as useI18n, _ as __nuxt_component_0$2 } from './server.mjs';
import { ref, computed, watch, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { u as useOrderStore } from './order-_dkQJpfU.mjs';
import { storeToRefs } from 'pinia';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
import { u as useDetailStore } from './detail-CmpxRn50.mjs';
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
  __name: "orders",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const { getUserToken } = userStore;
    const orderStore = useOrderStore();
    const { orderedList } = storeToRefs(orderStore);
    const { setOrderList } = orderStore;
    const commonStore = useCommonStore();
    const { currencyIcon, setting, customScripts, paymentGateway, site_setting } = storeToRefs(commonStore);
    const { postRequest, setPaymentGateway, getRequest } = commonStore;
    const { pageMeta } = useMetaData();
    useHead(pageMeta(site_setting.value));
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const authStore = useAuthStore();
    const { authenticated } = storeToRefs(authStore);
    const fetchingOrderData = ref(false);
    const changedSelectedOrder = ref(false);
    ref(0);
    ref(0);
    const route = useRoute();
    const detailStore = useDetailStore();
    const { setProduct } = detailStore;
    computed(() => {
      var _a;
      return (_a = orderedList.value) == null ? void 0 : _a.last_page;
    });
    computed(() => {
      var _a;
      return (_a = orderedList.value) == null ? void 0 : _a.data;
    });
    ref(null);
    const orderTabRef = ref(null);
    const { getTimeZone } = useUtils();
    useConstants();
    const { t } = useI18n();
    const fetchingData = async () => {
      var _a;
      fetchingOrderData.value = true;
      const params = {
        ...{
          time_zone: getTimeZone(),
          order_by: route.query.orderBy || "created_at",
          type: route.query.orderByType || "desc",
          page: route.query.page || 1,
          user_token: await getUserToken(),
          q: route.query.q || null
        },
        ...(_a = orderTabRef.value) == null ? void 0 : _a.generateParam()
      };
      const data = await postRequest({
        api: "orderByUser",
        params,
        lang: langCode.value
      });
      if ((data == null ? void 0 : data.status) === 200) {
        setOrderList(data.data);
      }
      changedSelectedOrder.value = false;
      fetchingOrderData.value = false;
    };
    watch(() => route.query, async () => {
      await fetchingData();
      (void 0).scrollTo(0, 0);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=orders-DkPVqtxz.mjs.map
