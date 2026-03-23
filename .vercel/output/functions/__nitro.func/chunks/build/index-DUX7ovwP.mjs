import _sfc_main$1 from './ListingLayout-DrCUkE5G.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as useCommonStore, i as useRoute, d as useHead } from './server.mjs';
import { storeToRefs } from 'pinia';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
import './ProductList-BMKndfQw.mjs';
import './FilterCategory-DFocfuH1.mjs';
import './TreeNode-BtlE5zWY.mjs';
import './util-D0P5KPFP.mjs';
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
import './FilterPrice-BDxDFIEZ.mjs';
import './FilterRating-DLKxXJ_u.mjs';
import './RatingStar-DUn_scU4.mjs';
import './FilterBrand-BmteqgJl.mjs';
import './FilterCollection--r9eDqOk.mjs';
import './FilterShipping-tD0qyesP.mjs';
import './Breadcrumb-wLTDRst4.mjs';
import './TileShimmer-CoHt9eD1.mjs';
import './ProductTile-B00mx6gH.mjs';
import './ImageLazy-C91HtcbD.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './useCompareHelper-of9z6jwL.mjs';
import './usePriceHelper-DzuasYxT.mjs';
import './detail-CmpxRn50.mjs';
import './Pagination-1kX6F26r.mjs';
import './listing-DfEq-fQC.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const commonStore = useCommonStore();
    const { site_setting, customScripts } = storeToRefs(commonStore);
    const { pageMeta, slugToText } = useMetaData();
    const route = useRoute();
    useHead(pageMeta({
      ...site_setting.value,
      ...{
        meta_title: `${slugToText((_a = route == null ? void 0 : route.params) == null ? void 0 : _a.main)} | ${site_setting.value.meta_title}`
      }
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_listing_layout = _sfc_main$1;
      _push(ssrRenderComponent(_component_listing_layout, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[main]/collection/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DUX7ovwP.mjs.map
