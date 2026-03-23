import __nuxt_component_0 from './ProductsDynamic-qe8UFoC_.mjs';
import __nuxt_component_1 from './Spinner-CfK0SFd4.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import _sfc_main$1 from './ProductsSlider--ZBYBKrc.mjs';
import { j as _export_sfc, p as prepareGetUrl, u as useLanguageStore, a as useCommonStore } from './server.mjs';
import { storeToRefs } from 'pinia';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './SuggestedAjaxSlider-0ofB_iEU.mjs';
import './ProductTile-B00mx6gH.mjs';
import './ImageLazy-C91HtcbD.mjs';
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
import './RatingStar-DUn_scU4.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './useCompareHelper-of9z6jwL.mjs';
import './usePriceHelper-DzuasYxT.mjs';
import './detail-CmpxRn50.mjs';
import './TileShimmer-CoHt9eD1.mjs';
import './ImageSlider-ByQM7FE3.mjs';
import 'embla-carousel-vue';

const _sfc_main = {
  setup() {
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const commonStore = useCommonStore();
    const { unAuthGet } = commonStore;
    return { unAuthGet, langCode };
  },
  name: "SuggestedProducts",
  data() {
    return {
      fetchingSuggested: true,
      suggestedData: null,
      lastPage: 1,
      currentPage: 1,
      totalSuggested1: 0,
      totalSuggested2: 0,
      perPageSuggested1: 0,
      perPageSuggested2: 0,
      suggested1: [],
      suggested2: [],
      loaded: []
    };
  },
  watch: {},
  props: {
    productId: {
      type: String,
      default: ""
    }
  },
  components: { ProductsDynamic: __nuxt_component_0, Spinner: __nuxt_component_1, ProductsSlider: _sfc_main$1 },
  computed: {},
  mixins: [util],
  methods: {
    async fetchSuggested(page, type = 0) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
      if (type === 1) {
        this.suggested1 = this.suggested1.concat(["", "", "", "", ""]);
      } else if (type === 2) {
        this.suggested2 = this.suggested2.concat(["", "", "", "", ""]);
      } else {
        this.suggested1 = this.suggested1.concat(["", "", "", "", ""]);
        this.suggested2 = this.suggested2.concat(["", "", "", "", ""]);
      }
      this.loaded.push(page);
      const response = await this.unAuthGet({
        api: "suggested_products",
        params: `/${this.productId}?${prepareGetUrl({
          page
        })}`,
        lang: this.langCode
      });
      this.fetchingSuggested = false;
      this.suggestedData = response.data;
      if (type === 1) {
        this.suggested1.splice(this.suggested1.length - 5, 5);
      } else if (type === 2) {
        this.suggested2.splice(this.suggested2.length - 5, 5);
      } else {
        this.suggested1.splice(this.suggested1.length - 5, 5);
        this.suggested2.splice(this.suggested2.length - 5, 5);
      }
      if ((_b = (_a = this.suggestedData) == null ? void 0 : _a.suggestion_1) == null ? void 0 : _b.data) {
        this.suggested1 = this.suggested1.concat((_d = (_c = this.suggestedData) == null ? void 0 : _c.suggestion_1) == null ? void 0 : _d.data);
      }
      if ((_f = (_e = this.suggestedData) == null ? void 0 : _e.suggestion_2) == null ? void 0 : _f.data) {
        this.suggested2 = this.suggested2.concat((_h = (_g = this.suggestedData) == null ? void 0 : _g.suggestion_2) == null ? void 0 : _h.data);
      }
      if (page === 1) {
        const total1 = (_j = (_i = this.suggestedData) == null ? void 0 : _i.suggestion_1) == null ? void 0 : _j.total;
        const perPage1 = (_l = (_k = this.suggestedData) == null ? void 0 : _k.suggestion_1) == null ? void 0 : _l.per_page;
        const lastPage1 = (_n = (_m = this.suggestedData) == null ? void 0 : _m.suggestion_1) == null ? void 0 : _n.last_page;
        if (total1 < perPage1) {
          this.totalSuggested1 = lastPage1 * perPage1;
        } else {
          this.totalSuggested1 = total1;
        }
        const total2 = (_p = (_o = this.suggestedData) == null ? void 0 : _o.suggestion_2) == null ? void 0 : _p.total;
        const perPage2 = (_r = (_q = this.suggestedData) == null ? void 0 : _q.suggestion_2) == null ? void 0 : _r.per_page;
        const lastPage2 = (_t = (_s = this.suggestedData) == null ? void 0 : _s.suggestion_2) == null ? void 0 : _t.last_page;
        if (total2 < perPage2) {
          this.totalSuggested2 = lastPage2 * perPage2;
        } else {
          this.totalSuggested2 = total2;
        }
        this.perPageSuggested1 = perPage1;
        this.perPageSuggested2 = perPage2;
        const lastPageSug1 = lastPage1 != null ? lastPage1 : 0;
        const lastPageSug2 = lastPage2 != null ? lastPage2 : 0;
        if (lastPageSug2 > lastPageSug1) {
          this.lastPage = lastPageSug2;
        } else {
          this.lastPage = lastPageSug1;
        }
      }
    },
    async change(type, evt) {
      this.currentPage += evt;
      if (this.currentPage < 1) {
        this.currentPage = this.lastPage;
      } else if (this.currentPage > this.lastPage) {
        this.currentPage = 1;
      }
      if (this.loaded.indexOf(this.currentPage) === -1) {
        await this.fetchSuggested(this.currentPage, type);
      }
    }
  },
  created() {
  },
  async mounted() {
    await this.fetchSuggested(this.currentPage);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_products_dynamic = __nuxt_component_0;
  const _component_spinner = __nuxt_component_1;
  if (!$data.fetchingSuggested) {
    _push(`<div>`);
    if ($data.suggested1.length) {
      _push(ssrRenderComponent(_component_products_dynamic, {
        title: _ctx.$t("suggestedProducts.recommendedForYou"),
        "item-list": $data.suggested1,
        "per-page": $data.perPageSuggested1,
        "total-item": $data.totalSuggested1,
        onChange: ($event) => $options.change(1, $event),
        class: "b-t pt-20 pt-sm-15 npb-5"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if ($data.suggested2.length) {
      _push(ssrRenderComponent(_component_products_dynamic, {
        title: _ctx.$t("suggestedProducts.alsoViewed"),
        "item-list": $data.suggested2,
        "total-item": $data.totalSuggested2,
        "per-page": $data.perPageSuggested2,
        onChange: ($event) => $options.change(2, $event),
        class: "b-t pt-20 pt-sm-15 pb-15 pb-sm-5"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<div class="spinner-wrapper flex">`);
    _push(ssrRenderComponent(_component_spinner, { radius: 100 }, null, _parent));
    _push(`</div>`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SuggestedProducts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SuggestedProducts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { SuggestedProducts as default };
//# sourceMappingURL=SuggestedProducts-I5nvyjXN.mjs.map
