import { toRefs, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "ImageZoom",
  __ssrInlineRender: true,
  props: {
    zoomImage: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    zoomFactor: {
      type: Number,
      default: 2
      // Default zoom level
    }
  },
  setup(__props) {
    const props = __props;
    const { zoomImage, image, zoomFactor } = toRefs(props);
    ref(null);
    ref(null);
    ref(null);
    const isZoomVisible = ref(false);
    useUtils();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "img-zoom-container" }, _attrs))}><div class="image-wrapper"><img id="main-image" class="zoom-image"${ssrRenderAttr("src", unref(image))}></div><div id="zoom-lens" class="img-lens" style="${ssrRenderStyle(isZoomVisible.value ? null : { display: "none" })}"></div><div id="zoom-result" class="img-zoom-result" style="${ssrRenderStyle(isZoomVisible.value ? null : { display: "none" })}"></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageZoom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ImageZoom-DPoiLqVR.mjs.map
