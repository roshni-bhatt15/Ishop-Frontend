import { c as useI18n, i as useRoute, _ as __nuxt_component_0$2 } from './server.mjs';
import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "SortBy",
  __ssrInlineRender: true,
  emits: ["fetching-data"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const route = useRoute();
    ref(true);
    ref({
      featured: { title: t("featured.featured") },
      price_low_to_high: { title: t("listingLayout.priceLowToHigh") },
      price_high_to_low: { title: t("listingLayout.priceHighToLow") },
      avg_customer_review: { title: t("listingLayout.avgCustomerReview") }
    });
    ref(route.query.sortby || "");
    computed(() => {
      var _a, _b;
      let count = 0;
      if (route.query.shipping || "") {
        count++;
      }
      if (route.query.rating || 0) {
        count++;
      }
      if (((_a = route == null ? void 0 : route.query) == null ? void 0 : _a.min) || 0) {
        count++;
      }
      if (((_b = route == null ? void 0 : route.query) == null ? void 0 : _b.max) || 0) {
        count++;
      }
      return count;
    });
    computed(() => {
      return void 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-10" }, _attrs))}><span class="hide-sm">${ssrInterpolate(_ctx.$t("listingLayout.sortBy"))}</span>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SortBy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SortBy-C3lLDPnF.mjs.map
