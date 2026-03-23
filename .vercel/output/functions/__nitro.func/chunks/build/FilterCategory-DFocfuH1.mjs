import __nuxt_component_0 from './TreeNode-BtlE5zWY.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  name: "FilterCategory",
  props: {
    categories: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  components: {
    TreeNode: __nuxt_component_0
  },
  mixins: [util],
  computed: {
    categorySlug() {
      var _a;
      return ((_a = this.$route.params) == null ? void 0 : _a.category) || null;
    }
  },
  mounted() {
  },
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_tree_node = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "category-wrapper" }, _attrs))}><ul class="table-tree"><!--[-->`);
  ssrRenderList($props.categories, (value) => {
    _push(ssrRenderComponent(_component_tree_node, {
      node: value,
      key: value.id
    }, null, _parent));
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FilterCategory.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=FilterCategory-DFocfuH1.mjs.map
