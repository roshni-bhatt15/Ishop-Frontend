import { toRefs, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "ToastMessage",
  __ssrInlineRender: true,
  props: {
    message: {
      type: String,
      default: "Success"
    },
    isError: {
      type: Boolean,
      default: false
    }
  },
  emits: ["hide"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { message, isError } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h5${ssrRenderAttrs(mergeProps({
        class: ["toast-message", { "error-toast": unref(isError) }]
      }, _attrs))}>`);
      if (unref(isError)) {
        _push(`<span>${ssrInterpolate(_ctx.$t("toastMessage.error"))}!!!</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(unref(message))}</h5>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ToastMessage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ToastMessage-DLdJYyBP.mjs.map
