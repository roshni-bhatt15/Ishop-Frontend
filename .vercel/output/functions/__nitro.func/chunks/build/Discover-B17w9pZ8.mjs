import __nuxt_component_1 from './TileShimmer-CoHt9eD1.mjs';
import _sfc_main$1 from './ProductTile-B00mx6gH.mjs';
import { j as _export_sfc, h as __nuxt_component_0$1, p as prepareGetUrl, s as showError, u as useLanguageStore, a as useCommonStore } from './server.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { u as useHomeStore } from './home-DZI1jLoy.mjs';
import { storeToRefs } from 'pinia';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import './ImageLazy-C91HtcbD.mjs';
import './RatingStar-DUn_scU4.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './useCompareHelper-of9z6jwL.mjs';
import './usePriceHelper-DzuasYxT.mjs';
import './detail-CmpxRn50.mjs';
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
  setup() {
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const homeStore = useHomeStore();
    const { products } = storeToRefs(homeStore);
    const { fetchProducts, setHomeProducts } = homeStore;
    const commonStore = useCommonStore();
    const { unAuthGet } = commonStore;
    return { langCode, products, fetchProducts, unAuthGet, setHomeProducts };
  },
  name: "Discover",
  data() {
    return {
      currentItems: [],
      loading: true
    };
  },
  watch: {},
  props: {},
  components: { ProductTile: _sfc_main$1, TileShimmer: __nuxt_component_1 },
  computed: {},
  mixins: [util],
  methods: {},
  created() {
  },
  async mounted() {
    var _a;
    if (!this.products) {
      try {
        this.loading = true;
        const response = await this.unAuthGet({
          api: "products",
          params: `?${prepareGetUrl({ is_home_page: true })}`,
          lang: this.langCode
        });
        const result = response.data.result;
        this.setHomeProducts(result);
        this.currentItems = result.data;
        this.loading = false;
      } catch (e) {
        showError({
          statusCode: 400,
          message: e.message
        });
      }
    } else {
      this.currentItems = (_a = this.products) == null ? void 0 : _a.data;
      this.loading = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_tile_shimmer = __nuxt_component_1;
  const _component_product_tile = _sfc_main$1;
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-section" }, _attrs))}><div class="area"><h4 class="title">${ssrInterpolate(_ctx.$t("discover.dailyDiscover"))}</h4><div class="area-content"><div class="tile-container">`);
  if ($data.loading) {
    _push(`<div class="shimmer-wrapper"><!--[-->`);
    ssrRenderList(15, (index) => {
      _push(ssrRenderComponent(_component_tile_shimmer, { key: index }, null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<div class="flex wrap align-start discover-area"><!--[-->`);
    ssrRenderList($data.currentItems, (value, index) => {
      _push(ssrRenderComponent(_component_product_tile, {
        key: index,
        product: value
      }, null, _parent));
    });
    _push(`<!--]--></div>`);
  }
  _push(`</div></div></div><div class="center-text mt-20 mt-sm-15">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: _ctx.listingLink({ slug: "daily-discover" }),
    class: "w-100 br-primary outline-btn btn-lg plr-35 plr-sm-20"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("discover.showMore"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("discover.showMore")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Discover.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_10 as default };
//# sourceMappingURL=Discover-B17w9pZ8.mjs.map
