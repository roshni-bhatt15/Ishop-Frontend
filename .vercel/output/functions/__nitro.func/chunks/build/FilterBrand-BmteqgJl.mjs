import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { j as _export_sfc } from './server.mjs';
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
  name: "FilterBrand",
  props: {
    brands: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      brand: [],
      brandExpanded: false
    };
  },
  components: {},
  mixins: [],
  computed: {},
  mounted() {
    if (this.$route.query.brand) {
      this.brand = this.$route.query.brand.split(",");
      this.$emit("brand-change", this.brand);
    }
  },
  methods: {
    brandChanged() {
      this.$emit("brand-change", this.brand);
      let filtered = Object.assign({}, this.$route.query);
      if (this.brand.length) {
        filtered = { ...filtered, ...{ brand: this.brand.join(",") } };
      } else {
        delete filtered.brand;
      }
      this.$emit("reset-route", filtered);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar-section mt-xs" }, _attrs))}><h4 class="title mb-xs-5">${ssrInterpolate(_ctx.$t("listingLayout.brands"))}</h4><div class="${ssrRenderClass([{ expanded: $data.brandExpanded }, "collapsible"])}"><!--[-->`);
  ssrRenderList($props.brands, (value, key) => {
    _push(`<label class="block mtb-10"${ssrRenderAttr("for", `brand-${value.id}`)}><input${ssrRenderAttr("id", `brand-${value.id}`)} type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.brand) ? ssrLooseContain($data.brand, value.id) : $data.brand) ? " checked" : ""} name="brand"${ssrRenderAttr("value", value.id)}> ${ssrInterpolate(value.title)}</label>`);
  });
  _push(`<!--]--></div><button aria-label="Show/Hide" class="link mt-15">${ssrInterpolate($data.brandExpanded ? _ctx.$t("filter.hideAll") : _ctx.$t("featured.showAll"))}</button></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FilterBrand.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_4 as default };
//# sourceMappingURL=FilterBrand-BmteqgJl.mjs.map
