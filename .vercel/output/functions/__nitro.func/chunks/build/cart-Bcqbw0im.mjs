import { u as useLanguageStore, a as useCommonStore, b as useAuthStore, c as useI18n, d as useHead, e as useRouter, _ as __nuxt_component_0$2 } from './server.mjs';
import { ref, computed, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { u as useCartStore } from './cart-BePPNdc0.mjs';
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
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const cartStoreStore = useCartStore();
    const { cartProducts } = storeToRefs(cartStoreStore);
    const { getCartByUser, cartChanged } = cartStoreStore;
    const userStore = useUserStore();
    const { getUserToken } = userStore;
    const { profile } = storeToRefs(userStore);
    const commonStore = useCommonStore();
    const { currencyIcon, setting, customScripts, site_setting } = storeToRefs(commonStore);
    const { fetchLocation } = commonStore;
    const authStore = useAuthStore();
    const { authenticated } = storeToRefs(authStore);
    const { t } = useI18n();
    const { pageMeta } = useMetaData();
    useHead(pageMeta({
      ...site_setting.value,
      ...{ meta_title: `${t("header.cart")} | ${site_setting.value.meta_title}` }
    }));
    const preventGoing = ref(true);
    const checked = ref([]);
    ref(false);
    ref({
      totalItems: 0,
      totalPriceWithOffer: 0,
      totalPrice: 0
    });
    computed(() => {
      checked.value = [];
      let checkedP = [];
      cartProducts.value.forEach((obj) => {
        if (parseInt(obj.selected) === 1) {
          checked.value.push(obj.id);
          checkedP.push(obj);
        }
      });
      preventGoing.value = checkedP.length === 0;
      return checkedP;
    });
    computed(() => {
      var _a;
      return (_a = profile.value) == null ? void 0 : _a.cart_count;
    });
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cart-Bcqbw0im.mjs.map
