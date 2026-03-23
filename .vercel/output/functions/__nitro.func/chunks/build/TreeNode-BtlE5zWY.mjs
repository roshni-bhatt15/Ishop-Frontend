import { j as _export_sfc, h as __nuxt_component_0$1 } from './server.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
  name: "TreeNode",
  components: {},
  props: {
    node: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  mixins: [util],
  methods: {},
  computed: {
    nodeData() {
      return this.node[this.keyName];
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_tree_node = __nuxt_component_0;
  _push(`<li${ssrRenderAttrs(mergeProps({ class: "tree-node" }, _attrs))}><span class="node-data">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: _ctx.categoryLink($props.node),
    title: $props.node.title
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.node.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.node.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span><ul><!--[-->`);
  ssrRenderList($props.node.child, (childNode) => {
    _push(ssrRenderComponent(_component_tree_node, {
      key: childNode.id,
      node: childNode
    }, null, _parent));
  });
  _push(`<!--]--></ul></li>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TreeNode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=TreeNode-BtlE5zWY.mjs.map
