import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
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
  name: "FilterCollection",
  props: {
    collections: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      collection: []
    };
  },
  components: {},
  mixins: [],
  computed: {},
  mounted() {
    if (this.$route.query.collection) {
      this.collection = this.$route.query.collection.split(",");
    }
  },
  methods: {
    collectionChanged() {
      let filtered = Object.assign({}, this.$route.query);
      if (this.collection.length) {
        filtered = { ...filtered, ...{ collection: this.collection.join(",") } };
      } else {
        delete filtered.collection;
      }
      this.$emit("reset-route", filtered);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar-section" }, _attrs))}><h4 class="title">${ssrInterpolate(_ctx.$t("listingLayout.collections"))}</h4><div><!--[-->`);
  ssrRenderList($props.collections, (value, key) => {
    _push(`<label class="block mtb-10"${ssrRenderAttr("for", `collection-${value.id}`)}><input${ssrRenderAttr("id", `collection-${value.id}`)} type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.collection) ? ssrLooseContain($data.collection, value.id) : $data.collection) ? " checked" : ""}${ssrRenderAttr("value", value.id)}> ${ssrInterpolate(value.title)}</label>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FilterCollection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_5 as default };
//# sourceMappingURL=FilterCollection--r9eDqOk.mjs.map
