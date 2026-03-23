import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = {
  __name: "LoadSection",
  __ssrInlineRender: true,
  props: {
    rootMargin: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const renderArea = ref(false);
    const el = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", { renderArea: renderArea.value }, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoadSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=LoadSection-TWk7nJFC.mjs.map
