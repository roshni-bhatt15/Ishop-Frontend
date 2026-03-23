import __nuxt_component_1 from './Spinner-CfK0SFd4.mjs';
import __nuxt_component_2 from './PriceFormat-BQp9_8mt.mjs';
import __nuxt_component_3 from './Pagination-1kX6F26r.mjs';
import { ref, computed, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { u as useLanguageStore, a as useCommonStore, i as useRoute, f as useUtils, p as prepareGetUrl, s as showError } from './server.mjs';
import { storeToRefs } from 'pinia';
import { u as useProductHelper } from './useProductHelper-D_nJapxP.mjs';
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
import './util-D0P5KPFP.mjs';

const _sfc_main = {
  __name: "Vouchers",
  __ssrInlineRender: true,
  props: {
    changingRoute: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const userStore = useUserStore();
    const { vouchers } = storeToRefs(userStore);
    const { setVouchers } = userStore;
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const commonStore = useCommonStore();
    const { currencyIcon, setting } = storeToRefs(commonStore);
    const { getRequest } = commonStore;
    const fetchingVoucherData = ref(false);
    const copiedVouchedId = ref("");
    const route = useRoute();
    const { getPriceType } = useProductHelper();
    computed(() => {
      return setting.value.currency_position;
    });
    const currentPage = computed(() => {
      var _a;
      return (_a = vouchers.value) == null ? void 0 : _a.current_page;
    });
    const totalPage = computed(() => {
      var _a;
      return (_a = vouchers.value) == null ? void 0 : _a.last_page;
    });
    const voucherList = computed(() => {
      var _a;
      return (_a = vouchers.value) == null ? void 0 : _a.data;
    });
    const { getTimeZone } = useUtils();
    const fetchingData = async () => {
      var _a;
      fetchingVoucherData.value = true;
      const data = await getRequest({
        api: "userVouchers",
        params: `?${prepareGetUrl({
          time_zone: getTimeZone(),
          order_by: route.query.orderBy || "created_at",
          type: route.query.orderByType || "desc",
          page: route.query.page || 1,
          q: route.query.q || null
        })}`,
        lang: langCode.value
      });
      if ((data == null ? void 0 : data.status) === 201) {
        showError({
          statusCode: 400,
          message: (_a = data.data) == null ? void 0 : _a.form[0]
        });
      } else {
        setVouchers(data.data);
      }
      fetchingVoucherData.value = false;
    };
    watch(() => route.query, async () => {
      await fetchingData();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_spinner = __nuxt_component_1;
      const _component_price_format = __nuxt_component_2;
      const _component_pagination = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "vouchers-wrapper" }, _attrs))}>`);
      if (unref(fetchingVoucherData)) {
        _push(`<div class="spinner-wrapper flex">`);
        _push(ssrRenderComponent(_component_spinner, { radius: 100 }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(voucherList) && !unref(voucherList).length) {
        _push(`<div class="info-msg">${ssrInterpolate(_ctx.$t("vouchers.noVoucher"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex wrap start align-start"><!--[-->`);
      ssrRenderList(unref(voucherList), (value, index) => {
        _push(`<div class="card p-15 pt-10 pb-5 mb-15"><div class="flex sided gap-15"><h5 class="semi-bold mx-w-400x mb-5">${ssrInterpolate(value.title)}</h5><h4 class="semi-bold mb-5">${ssrInterpolate(unref(getPriceType)(value))}</h4></div><div class="flex sided f-9"><h6 class="semi-bold voucher mb-5">${ssrInterpolate(value.code)}</h6><button aria-label="submit" class="lite-btn mb-5">${ssrInterpolate(unref(copiedVouchedId) === value.id ? _ctx.$t("filter.copied") : _ctx.$t("filter.copy"))}</button></div><div class="flex sided f-9 gap-15"><p class="mb-5 color-lite"><span class="mr-5">${ssrInterpolate(_ctx.$t("vouchers.minSpend"))}</span><b>`);
        _push(ssrRenderComponent(_component_price_format, {
          price: value.min_spend
        }, null, _parent));
        _push(`</b></p><p class="f-9 mb-5 color-danger"><span class="mr-5">${ssrInterpolate(_ctx.$t("vouchers.valid"))}</span> ${ssrInterpolate(value.end_time)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="flow-hidden">`);
      _push(ssrRenderComponent(_component_pagination, {
        ref: "voucherPagination",
        "total-page": unref(totalPage),
        page: unref(currentPage),
        "changing-route": __props.changingRoute
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Vouchers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Vouchers-CXRMlOqV.mjs.map
