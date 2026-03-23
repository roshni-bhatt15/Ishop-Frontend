import { u as util } from './util-D0P5KPFP.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
  name: "OrderedStatus",
  components: {},
  directives: {},
  props: {
    statusOfOrder: {
      type: Number,
      required: true
    }
  },
  mixins: [util],
  watch: {},
  computed: {},
  data() {
    return {};
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "order-status" }, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.orderStatus, (value, index) => {
    _push(`<div class="${ssrRenderClass([[{ done: index < $props.statusOfOrder }, { active: parseInt(index) === $props.statusOfOrder }], "status-item"])}"><span class="flex"><b>${ssrInterpolate(index)}</b></span><span class="f-9 bold status-str mtb-10">${ssrInterpolate(value.title)}</span></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OrderedStatus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OrderedStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { OrderedStatus as default };
//# sourceMappingURL=OrderedStatus-xemSBeYJ.mjs.map
