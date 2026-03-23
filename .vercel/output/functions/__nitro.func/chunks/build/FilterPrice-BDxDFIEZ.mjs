import { j as _export_sfc, a as useCommonStore } from './server.mjs';
import { storeToRefs } from 'pinia';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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
    const commonStore = useCommonStore();
    const { currencyIcon, setting } = storeToRefs(commonStore);
    return { currencyIcon, setting };
  },
  name: "FilterPrice",
  props: {},
  data() {
    return {
      minPrice: this.$route.query.min || "",
      maxPrice: this.$route.query.max || ""
    };
  },
  components: {},
  mixins: [],
  computed: {},
  mounted() {
  },
  methods: {
    anyPrice() {
      this.clearPrice();
      this.filterPrice();
    },
    clearPrice() {
      this.minPrice = "";
      this.maxPrice = "";
    },
    filterPrice() {
      let filtered = Object.assign({}, this.$route.query);
      if (parseInt(this.maxPrice) > 0) {
        filtered = { ...filtered, ...{ max: this.maxPrice } };
      } else {
        delete filtered.max;
      }
      if (parseInt(this.minPrice) > 0) {
        filtered = { ...filtered, ...{ min: this.minPrice } };
      } else {
        delete filtered.min;
      }
      this.$emit("reset-route", filtered);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar-section mt-xs-5 mb-xs-10" }, _attrs))}><h4 class="title">${ssrInterpolate(_ctx.$t("listingLayout.price"))}</h4><button class="clear-btn mb-10" aria-label="submit"${ssrIncludeBooleanAttr(!$data.maxPrice && !$data.minPrice) ? " disabled" : ""}>${ssrInterpolate(_ctx.$t("listingLayout.anyPrice"))}</button><div class="price-search flex"><div class="input-wrap"><div class="input-text"><span>${ssrInterpolate($setup.currencyIcon)}</span><input type="number"${ssrRenderAttr("placeholder", _ctx.$t("listingLayout.min"))}${ssrRenderAttr("value", $data.minPrice)}></div></div><div class="input-wrap"><div class="input-text"><span>${ssrInterpolate($setup.currencyIcon)}</span><input type="number"${ssrRenderAttr("placeholder", _ctx.$t("listingLayout.max"))}${ssrRenderAttr("value", $data.maxPrice)}></div></div><button class="outline-btn plr-10" aria-label="submit">${ssrInterpolate(_ctx.$t("listingLayout.go"))}</button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FilterPrice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=FilterPrice-BDxDFIEZ.mjs.map
