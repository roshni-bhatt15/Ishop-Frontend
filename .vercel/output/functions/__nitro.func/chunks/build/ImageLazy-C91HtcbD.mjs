import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { f as useUtils } from './server.mjs';
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
  __name: "ImageLazy",
  __ssrInlineRender: true,
  props: {
    alt: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    lazySrc: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const imgOpacity = ref(0);
    const lazyImage = ref(null);
    useUtils();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps({
        ref_key: "lazyImage",
        ref: lazyImage,
        "data-src": __props.lazySrc,
        alt: __props.alt,
        title: __props.title,
        height: "50",
        width: "50",
        style: { opacity: imgOpacity.value }
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageLazy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ImageLazy-C91HtcbD.mjs.map
