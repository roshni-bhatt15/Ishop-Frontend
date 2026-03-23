import _sfc_main$1 from './FlashSale-C6ZiTiZY.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as useCommonStore, u as useLanguageStore, c as useI18n, d as useHead } from './server.mjs';
import { u as useFlashSaleStore } from './flashSale-Gpk8vfm-.mjs';
import { u as useHomeStore } from './home-DZI1jLoy.mjs';
import { storeToRefs } from 'pinia';
import { u as useAsyncData } from './asyncData-LCoVf7VD.mjs';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
import './Countdown-BmVJhrfs.mjs';
import 'moment-timezone';
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
import './ImageSlider-ByQM7FE3.mjs';
import 'embla-carousel-vue';
import './FlashProductTile-yEuXp-at.mjs';
import './ImageLazy-C91HtcbD.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './util-D0P5KPFP.mjs';
import './usePriceHelper-DzuasYxT.mjs';
import './useCompareHelper-of9z6jwL.mjs';
import './detail-CmpxRn50.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const commonStore = useCommonStore();
    const { customScripts, site_setting } = storeToRefs(commonStore);
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const homeStore = useHomeStore();
    const { flashSales } = storeToRefs(homeStore);
    const { setFlashSale } = homeStore;
    const flashSaleStore = useFlashSaleStore();
    const { fetchFlashSales } = flashSaleStore;
    const { t } = useI18n();
    const { pageMeta } = useMetaData();
    useHead(pageMeta({ ...site_setting.value, ...{ meta_title: `${t("header.categories")} | ${site_setting.value.meta_title}` } }));
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`flash-sale`, async () => {
      if (flashSales.value) {
        return true;
      }
      const { unAuthGet } = commonStore;
      const response = await unAuthGet({
        api: "flashSales",
        params: "",
        lang: langCode.value
      });
      setFlashSale(response.data);
      return response.data;
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_flash_sale = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid mtb-20 mtb-sm-15" }, _attrs))}>`);
      if (unref(flashSales) && unref(flashSales).length) {
        _push(ssrRenderComponent(_component_flash_sale, { "flash-sales": unref(flashSales) }, null, _parent));
      } else if (unref(flashSales)) {
        _push(`<p class="info-msg">${ssrInterpolate(_ctx.$t("listingLayout.noProductFound"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/flash-sale/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-pgUwVIkI.mjs.map
