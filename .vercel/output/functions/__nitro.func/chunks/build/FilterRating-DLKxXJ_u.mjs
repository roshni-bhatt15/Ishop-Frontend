import __nuxt_component_0 from './RatingStar-DUn_scU4.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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
  name: "FilterRating",
  props: {},
  data() {
    return {
      rating: this.$route.query.rating || ""
    };
  },
  components: {
    RatingStar: __nuxt_component_0
  },
  mixins: [],
  computed: {},
  mounted() {
  },
  methods: {
    clearRating() {
      this.rating = "";
    },
    filterRating(rating) {
      let filtered = Object.assign({}, this.$route.query);
      this.rating = rating;
      if (parseInt(rating) > 0 && parseInt(rating) <= 5) {
        filtered = { ...filtered, ...{ rating } };
      } else {
        delete filtered.rating;
      }
      this.$emit("reset-route", filtered);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_rating_star = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar-section star-filter mt-xs-10 mb-xs-10" }, _attrs))}><h4 class="title">${ssrInterpolate(_ctx.$t("productReview.customerReviews"))}</h4><button class="clear-btn"${ssrIncludeBooleanAttr(!$data.rating) ? " disabled" : ""} aria-label="submit">${ssrInterpolate(_ctx.$t("listingLayout.clear"))}</button><!--[-->`);
  ssrRenderList(4, (value) => {
    _push(`<button aria-label="submit" class="${ssrRenderClass([{ active: parseInt($data.rating) === value }, "mtb-5"])}">`);
    _push(ssrRenderComponent(_component_rating_star, { rating: value }, null, _parent));
    _push(` &amp; ${ssrInterpolate(_ctx.$t("listingLayout.up"))}</button>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FilterRating.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as default };
//# sourceMappingURL=FilterRating-DLKxXJ_u.mjs.map
